import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    // The course content ships in the main bundle; about 240 kB gzipped is fine.
    chunkSizeWarningLimit: 1000,
  },
})
