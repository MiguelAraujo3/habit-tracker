import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/habit-tracker/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        conta: resolve(import.meta.dirname, 'conta/index.html'),
        todo: resolve(import.meta.dirname, 'todo/index.html'),
        categorias: resolve(import.meta.dirname, 'categorias/index.html'),
      },
    },
  },
});