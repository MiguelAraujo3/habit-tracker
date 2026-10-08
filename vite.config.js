
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        // Ponto de entrada principal
        main: resolve(import.meta.dirname, 'index.html'),
      },
    },
  },
  base: '/habit-tracker/',
  build: {
    outDir: 'dist',
  },
});