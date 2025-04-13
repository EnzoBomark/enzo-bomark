import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'node:path';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  base: process.env.NODE_ENV === 'production' ? '/enzo-bomark/' : '/',
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, 'src') },
      { find: '@', replacement: path.resolve(__dirname, 'packages') },
    ],
  },
});
