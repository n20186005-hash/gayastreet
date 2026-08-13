export interface LanguageMeta {
  label: string;
  htmlLang: string;
  name: string;
}

export const languages: Record<string, LanguageMeta> = {
  zh: { label: 'ZH', htmlLang: 'zh-CN', name: '中文' },
  en: { label: 'EN', htmlLang: 'en', name: 'English' },
  ms: { label: 'MS', htmlLang: 'ms', name: 'Bahasa Melayu' },
};

export const defaultLang = 'ms';
export const showDefaultLang = true;
