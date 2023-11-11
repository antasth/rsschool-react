/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text'],
    },
    // watch: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
});
