export interface LanguageMeta {
  label: string;
  htmlLang: string;
  name: string;
  /** hreflang codes emitted for this locale (a URL may carry several) */
  hreflangs: string[];
  /** Open Graph locale, used for og:locale */
  ogLocale: string;
}

export const languages: Record<string, LanguageMeta> = {
  zh: { label: 'ZH', htmlLang: 'zh-CN', name: '中文', hreflangs: ['zh-Hans', 'zh-Hans-MY', 'zh'], ogLocale: 'zh_CN' },
  en: { label: 'EN', htmlLang: 'en', name: 'English', hreflangs: ['en-MY', 'en-GB', 'en'], ogLocale: 'en_GB' },
  ms: { label: 'MS', htmlLang: 'ms', name: 'Bahasa Melayu', hreflangs: ['ms-MY', 'ms'], ogLocale: 'ms_MY' },
};

export const defaultLang = 'ms';
export const showDefaultLang = true;
