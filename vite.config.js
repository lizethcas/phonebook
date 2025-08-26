// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/phonebook-repo/', // updated base to match the correct repository name
  plugins: [react()]
})