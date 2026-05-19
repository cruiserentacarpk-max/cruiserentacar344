import { defineConfig } from 'vite'
<<<<<<< HEAD
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
=======
import tsConfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
})
>>>>>>> fc93640 (vercel routing fix)
