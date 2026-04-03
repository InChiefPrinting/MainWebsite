import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jeremythierrychan.github.io',
  base: '/InChief/',
  output: 'static',
  integrations: [tailwind()]
});