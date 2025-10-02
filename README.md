This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Testes E2E com Cypress (TypeScript + Page Object Model)

### Pré-requisitos
- Node 18+
- Aplicação rodando em `http://localhost:3000` (use `npm run dev`)

### Instalação
As dependências do Cypress já estão no projeto. Caso necessário, rode:

```bash
npm install
```

### Scripts
- `npm run cy:open`: abre o Cypress em modo interativo
- `npm run cy:run`: executa os testes em modo headless

### Estrutura criada
- `cypress.config.ts`: configuração do Cypress
- `cypress/tsconfig.json`: config TypeScript para specs do Cypress
- `cypress/e2e/home.cy.ts`: teste inicial usando POM
- `cypress/pages/HomePage.ts`: Page Object da página inicial
- `cypress/support/e2e.ts` e `cypress/support/commands.ts`: setup e comandos

### Como executar
1. Em um terminal: `npm run dev`
2. Em outro terminal:
   - Modo interativo: `npm run cy:open`
   - Headless: `npm run cy:run`

### Convenções de POM
- Crie classes em `cypress/pages/` representando páginas/componentes.
- Exponha métodos que retornem `cy.get(...)`/`cy.contains(...)` e ações como `visit()`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
