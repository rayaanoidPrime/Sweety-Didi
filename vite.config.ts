import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from "fs"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const actualMode = mode === "production" && !fs.existsSync(".env.productions") ? "default" : mode

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL || 'http://localhost:3000',
          changeOrigin: true,  
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
  };
});