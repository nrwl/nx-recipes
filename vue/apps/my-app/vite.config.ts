/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'url';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/my-app',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    vue(),
    vueJsx(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  resolve: {
    alias: {
      '@my-vue/icons': fileURLToPath(
        new URL('../../libs/icons/src/index.ts', import.meta.url)
      ),
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
