// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/phonebook/', // cambia esto por el nombre real del repo
  plugins: [react()],
})