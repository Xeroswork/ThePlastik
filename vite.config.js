import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Замени 'my-site' на название твоего GitHub репозитория!
export default defineConfig({
  plugins: [react()],
  base: '/',
})
