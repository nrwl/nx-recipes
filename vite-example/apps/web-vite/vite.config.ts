import { defineConfig } from 'vite';
import ViteTsConfigPathsPlugin from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    ViteTsConfigPathsPlugin({
      root: '../../',
      projects: ['tsconfig.base.json'],
    }),
  ],
});
