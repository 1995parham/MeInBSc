// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://1995parham.github.io/MeInBSc
export default defineConfig({
  site: 'https://1995parham.github.io',
  base: '/MeInBSc',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
