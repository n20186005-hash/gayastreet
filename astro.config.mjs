import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || 'https://gayastreet.com';

export default defineConfig({
  site,
  output: 'static',
  adapter: cloudflare(),
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
  session: {
    driver: 'memory',
  },
  integrations: [
    sitemap({
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
        return { ...item, priority, changefreq: 'weekly', lastmod: new Date() };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
