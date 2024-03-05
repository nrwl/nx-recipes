import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    '.': 'src/index.ts',
  },
  banner: {
    js: "'use client'",
  },
  format: ['cjs', 'esm'],
  external: ['react'],
  dts: true,
});
