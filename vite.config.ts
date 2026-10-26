import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Troque REPO pelo nome do seu repositório no GitHub.
const REPO = 'liberalismo-site'
export default defineConfig({
  plugins: [react()],
  // Em subdiretório (GitHub Pages) usa /REPO/; localmente usa /.
  base: process.env.GITHUB_ACTIONS ? `/${REPO}/` : '/',
})
