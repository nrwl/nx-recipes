import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nxViteTsPaths()],
  build: {
    outDir: 'dist/react-app',
  },
});
