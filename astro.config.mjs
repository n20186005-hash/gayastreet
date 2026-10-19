import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || 'https://gayastreet.com';

export default defineConfig({
  site,
  output: 'static',
  i18n: {
    defaultLocale: 'ms',
    locales: ['ms', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    '/': '/ms/',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      filter: page => !/\/404(?:\.html|\/)?$/.test(page) && new URL(page).pathname !== "/",
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;
        const priority = path === '/ms/'
          ? 1
          : path === '/en/'
            ? 0.9
            : path === '/zh/'
              ? 0.8
              : path.endsWith('/sunday-market/')
                ? 0.8
                : path.endsWith('/things-to-do/')
                  ? 0.7
                  : 0.6;
        const slug=path.replace(/^\/(?:ms|en|zh)\//,'');
        const links=[{lang:'ms',url:site+'/ms/'+slug},{lang:'en',url:site+'/en/'+slug},{lang:'zh-Hans',url:site+'/zh/'+slug},{lang:'x-default',url:site+'/ms/'+slug}];
        return { ...item, links, priority };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
