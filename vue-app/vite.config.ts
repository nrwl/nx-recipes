import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), nxViteTsPaths()],
  build: {
    outDir: 'dist/vue-app'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
