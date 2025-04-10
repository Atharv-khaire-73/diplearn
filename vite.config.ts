import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  // Base path for production (replace with your actual subdirectory if needed)
  base: '/',
  server: {
    // For local development
    port: 3000,
    open: true
  }
});
