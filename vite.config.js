import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// 🔹 Export Vite configuration
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ]
})
