export interface Translation {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { story: string; history: string; market: string; walk: string; map: string };
  brandAria: string;
  hero: {
    eyebrow: string;
    h1: [string, string];
    lede: string;
    cta: string;
    noteLabel: string;
    noteName: string;
    noteSub: string;
  };
  intro: {
    eyebrow: string;
    heading: [string, string];
    body: string;
    link: string;
    aside: string;
  };
  glance: Array<{ label: string; value: string; note: string; focus?: boolean }>;
  history: {
    eyebrow: string;
    heading: [string, string];
    body: string;
    timeline: Array<{ year: string; title: string; text: string }>;
  };
  stories: Array<{ no: string; tag: string; title: string; text: string; note: string }>;
  market: {
    eyebrow: string;
    heading: [string, string];
    body: string;
    facts: Array<{ value: string; label: string }>;
  };
  heritage: {
    eyebrow: string;
    heading: [string, string];
    body: string;
    note: string;
  };
  walk: {
    eyebrow: string;
    heading: [string, string];
    items: Array<{ step: string; title: string; note: string }>;
  };
  practical: {
    eyebrow: string;
    heading: [string, string];
    cards: Array<{ index: string; title: string; paras: string[]; tip?: string }>;
  };
  food: {
    eyebrow: string;
    heading: [string, string];
    body: string;
    link: string;
    items: Array<{ no: string; name: string; note: string }>;
  };
  nearby: {
    eyebrow: string;
    heading: [string, string];
    items: Array<{ no: string; name: string; note: string }>;
  };
  gallery: {
    items: Array<{ src: string; cap: string }>;
    note: string;
    lightbox: { ariaLabel: string; close: string; prev: string; next: string };
  };
  map: {
    eyebrow: string;
    heading: [string, string];
    body: string;
    cta: string;
  };
  faqHeading: [string, string];
  faq: Array<{ q: string; a: string }>;
  sources: {
    intro: string;
    heading: [string, string];
    items: Array<{ label: string; href: string; tag: string }>;
    note: string;
  };
  footer: {
    tagline: string;
    small: string;
  };
  jsonLd: {
    touristType: string;
  };
}
