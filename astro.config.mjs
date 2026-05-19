import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  outDir: 'out',
  build: {
    format: 'directory',
  },
});
