import type { Guide } from './types';
import { guideSlugs } from './types';
import { guidesEn } from './en';
import { guidesMs } from './ms';
import { guidesZh } from './zh';

const byLocale: Record<string, Record<string, Guide>> = {
  en: guidesEn,
  ms: guidesMs,
  zh: guidesZh,
};

/** slug → locale → guide */
export const guides: Record<string, Record<string, Guide>> = {};
for (const slug of guideSlugs) {
  guides[slug] = { en: guidesEn[slug], ms: guidesMs[slug], zh: guidesZh[slug] };
}

export function getGuide(slug: string, lang: string): Guide | undefined {
  return byLocale[lang]?.[slug];
}

export { guideSlugs };
export type { Guide, GuideFact, GuideItem, GuideSection, GuideSlug } from './types';
