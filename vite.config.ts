import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/meme-sound/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly' // Optional: Customize naming convention
    }
  },
})
