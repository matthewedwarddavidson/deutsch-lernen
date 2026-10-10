/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths, so the build works from any sub-path (e.g. GitHub Pages).
  base: './',
  build: {
    // The course content ships in the main bundle; about 240 kB gzipped is fine.
    chunkSizeWarningLimit: 1000,
  },
  test: {
    // End-to-end tests run with Playwright (npm run test:e2e).
    exclude: ['e2e/**', 'node_modules/**'],
  },
})
