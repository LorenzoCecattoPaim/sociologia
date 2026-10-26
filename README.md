# Liberalismo — A ideia de liberdade
Site educacional estático (React + TypeScript + Vite), em português.
## Rodar localmente
`npm install` → `npm run dev` (build: `npm run build`).
## Publicar no GitHub Pages
1. Edite `REPO` em `vite.config.ts` para o nome do seu repositório.
2. Crie o repositório, envie o código para a branch `main`.
3. Em Settings → Pages → Source, escolha **GitHub Actions**.
4. O workflow `.github/workflows/deploy.yml` publica a cada push. Endereço: `https://USUARIO.github.io/REPO/`.
## Observações
Modelo de mercado e números de produção são didáticos/hipotéticos (equações em `src/lib/economics.ts`).
