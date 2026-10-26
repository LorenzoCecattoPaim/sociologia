import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  // Em subdiretório (GitHub Pages) usa /REPO/; localmente usa /.
  // Caminhos relativos: funciona em qualquer repositório do GitHub Pages.
  base: './',
})
