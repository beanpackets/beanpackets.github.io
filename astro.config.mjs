// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { SITE } from './src/data/site.js';

export default defineConfig({
  site: SITE.url,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Vite inlines assets under 4 kB as `data:` URIs by default, which turns
      // small font subsets into `data:font/woff2`, blocked by our own
      // `font-src 'self'` policy. Emitting every asset as a real file keeps the
      // CSP strict instead of widening it to allow `data:` fonts.
      assetsInlineLimit: 0,
    },
  },
  build: {
    // Keep every stylesheet external so the Content-Security-Policy can stay
    // strict (`style-src 'self'`) with no 'unsafe-inline'. See README > Security.
    inlineStylesheets: 'never',
  },
  compressHTML: true,
});
