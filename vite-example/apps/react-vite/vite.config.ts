import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteTsConfigPathsPlugin from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    ViteTsConfigPathsPlugin({
      root: '../../',
      projects: ['tsconfig.base.json'],
    }),
  ],
});
