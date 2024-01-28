import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../../node_modules/.vite/admin-ui-footer',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../../../dist/libs/admin/ui/footer',
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
    entry: 'src/index.ts',
    name: 'admin-ui-footer',
    fileName: 'index',
    formats: ['es', 'cjs'],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    lib: {
      entry: 'src/index.ts',
      name: 'admin-ui-footer',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ["'react'", "'react-dom'", "'react/jsx-runtime'"],
    },
  },
});
