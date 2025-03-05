import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.173.210:8000', // Cambia esto por la IP de tu servidor backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});