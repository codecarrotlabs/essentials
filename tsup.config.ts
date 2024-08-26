import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: ['./src/index.ts', './src/ts/index.ts', './src/css/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  clean: true,
  sourcemap: true,
  treeshake: 'recommended',
  external: ['react'],
  ...options,
}));
