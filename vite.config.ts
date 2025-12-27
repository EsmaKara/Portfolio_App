import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@/*': path.resolve(__dirname, './src/'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@services': path.resolve(__dirname, './src/services'),
      '@apptypes': path.resolve(__dirname, './src/types'),
      '@utility': path.resolve(__dirname, './src/utility'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@lib': path.resolve(__dirname, './src/lib'),
    },
  },
});
