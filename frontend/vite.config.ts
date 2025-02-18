import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from .env.production if in production mode,
  // otherwise fall back to .env.default.
  const actualMode =
    mode === 'production' && !fs.existsSync('.env.productions')
      ? 'default'
      : mode;

  const env = loadEnv(actualMode, process.cwd(), 'VITE');
  //Merge loaded env variables with process.env
  process.env = {
    NODE_ENV: process.env.NODE_ENV,
    TZ: process.env.TZ,
    ...env,
  };
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
        },
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
  };
});
