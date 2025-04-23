import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // Split vendor libraries
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit (optional)
  },
});