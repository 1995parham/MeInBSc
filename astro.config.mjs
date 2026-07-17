// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served from the custom domain: https://1995parham.me/MeInBSc
// (github.io 301-redirects here, so canonical/OG/sitemap must use the real domain).
export default defineConfig({
  site: 'https://1995parham.me',
  base: '/MeInBSc',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
