// 检查三语言字典 (zh/en/ms) 结构一致性 + 检测语言混淆（CJK 字符误入英文/马来文）。
// 用法: node scripts/check_i18n.mjs
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const files = {
  zh: 'src/i18n/zh.ts',
  en: 'src/i18n/en.ts',
  ms: 'src/i18n/ms.ts',
};

const topKey = (src) => [...src.matchAll(/^\s{2}(\w+):/gm)].map((m) => m[1]);
const cjk = (src) => [...src.matchAll(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]+/g)].map((m) => m[0].slice(0, 30));

let failed = false;

const parsed = {};
for (const [code, file] of Object.entries(files)) {
  const src = readFileSync(join(root, file), 'utf8');
  parsed[code] = { src, keys: topKey(src) };
  // 每份字典的关键数组元素数量
  for (const key of ['glance', 'faq']) {
    const re = new RegExp(`${key}: \\[(.*?)\\n  \\],`, 's');
    const body = src.match(re)?.[1] ?? '';
    const count = (body.match(/^\s*\{/gm) ?? []).length;
    console.log(`[${code}] ${key}: ${count} 项`);
  }
}

const keysOf = Object.fromEntries(Object.entries(parsed).map(([c, v]) => [c, new Set(v.keys)]));
const allKeys = [...new Set(Object.values(keysOf).flatMap((s) => [...s]))];

console.log('\n── 顶层 key 一致性 ──');
for (const key of allKeys) {
  const missing = Object.entries(keysOf).filter(([, s]) => !s.has(key)).map(([c]) => c);
  if (missing.length) {
    failed = true;
    console.log(`✘ 缺少 ${key}: ${missing.join(', ')}`);
  }
}
if (!failed) console.log('✓ 三份字典顶层 key 完全一致');

console.log('\n── 语言混淆检测（CJK 字符）──');
for (const code of ['en', 'ms']) {
  const hits = cjk(parsed[code].src);
  if (hits.length) {
    failed = true;
    console.log(`✘ [${code}] 含中文字符 ${hits.length} 处: ${hits.slice(0, 5).join(' | ')}`);
  } else {
    console.log(`✓ [${code}] 无中文字符`);
  }
}
const zhHits = cjk(parsed.zh.src);
console.log(`✓ [zh] 含中文片段 ${zhHits.length} 处（预期）`);

console.log(failed ? '\n结果: 存在不一致，请修复。' : '\n结果: 全部通过。');
process.exit(failed ? 1 : 0);
