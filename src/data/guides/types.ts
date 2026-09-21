/**
 * Topic pages built for the highest-intent search queries in Search Console:
 * `gaya street sunday market`, `gaya street night market` and
 * `things to do in kota kinabalu` (high impressions, near-zero clicks).
 *
 * Each slug ships in all three site locales (en / ms / zh) and is rendered by
 * src/pages/[lang]/[slug].astro.
 */
export interface GuideFact {
  label: string;
  value: string;
  note: string;
}

export interface GuideItem {
  no: string;
  name: string;
  note: string;
}

export interface GuideSection {
  heading: string;
  body: string;
  items: GuideItem[];
}

export interface Guide {
  slug: string;
  /** Gallery photo used as the page hero (JPEG; WebP variants are generated). */
  image: string;
  /** Card shown in the "more guides" band on the home page. */
  card: { label: string; note: string };
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: [string, string]; lede: string };
  facts: GuideFact[];
  sections: GuideSection[];
  faq: Array<{ q: string; a: string }>;
  /** Emit an Event schema block for this recurring market. */
  event?: 'sunday-market' | 'night-market';
}

export const guideSlugs = ['sunday-market', 'night-market', 'things-to-do'] as const;

export type GuideSlug = (typeof guideSlugs)[number];
