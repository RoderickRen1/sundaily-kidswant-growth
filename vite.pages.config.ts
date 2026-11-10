import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'github-pages',
  base: '/sundaily-kidswant-growth/',
  publicDir: '../public',
  plugins: [react()],
  build: {
    outDir: '../pages-dist',
    emptyOutDir: true,
  },
});
