# Testes Automatizados — Serverest

Suíte de testes E2E para a API Serverest implementada com Cypress.

Este projeto contém uma suíte de testes automatizados para a API do [Serverest](https://serverest.dev), utilizando o framework [Cypress](https://www.cypress.io/).

## Estrutura do Projeto

```
.
├── cypress.config.js
├── package.json
├── cypress/
│   ├── e2e/
│   │   └── API/
│   │       ├── Produtos/        # listarProdutoId, criarProduto, editarProduto, excluirProduto, listarProdutos
│   │       ├── Usuarios/        # buscarUsuarioId, criarUsuario, editarUsuario, excluirUsuario, listarUsuarios
│   │       ├── Carrinho/        # listarCarrinho
│   │       └── Login/           # logarUsuario
│   ├── fixtures/
│   └── support/                 # comandos customizados
└── .gitignore
```

## Cenários de Teste

Os cenários de teste cobrem:

- Login com usuário existente
- Adicionar e remover produtos do carrinho
- Visualizar produtos no carrinho
- Fluxos de checkout, incluindo validações de campos obrigatórios
- Cancelamento do checkout

## Requisitos

- Node.js 14+ (recomendado 16+)
- npm
- A dependência principal é o Cypress (versão no projeto: ^14.5.4)

## Instalação

1. Clone o repositório:

```powershell
git clone https://github.com/carolinajusto2382/desafio-api-QA
cd Serverest
```

2. Instale dependências:

```powershell
npm install
```

## Como executar os testes

Executar todos os testes (modo headless):

```powershell
npx cypress run
```

Executar em modo interativo (GUI):

```powershell
npx cypress open
```

Executar um spec específico (exemplo):

```powershell
npx cypress run --spec "cypress/e2e/API/Produtos/listarProdutos.cy.js"
```

Executar todos os testes da pasta API:

```powershell
npx cypress run --spec "cypress/e2e/API/**"
```

## Configuração

A configuração global do Cypress está em `cypress.config.js`. A URL base da API pode estar exposta em `env.apiUrl` dentro desse arquivo — ajuste conforme necessário para apontar para o endpoint de teste.

## Dicas rápidas

- Para debugar localmente, use `npx cypress open` e execute os specs em modo interativo.
- Para executar no CI, utilize `npx cypress run --record` (configurar chave de gravação se usar Cypress Dashboard).

## Onde estão os comandos customizados

Comandos e helpers estão em `cypress/support/commands.js` e `cypress/support/e2e.js`.

## Contribuição

Abra um PR descrevendo as mudanças nos testes ou melhorias de configuração. Para alterações em endpoints, atualize `cypress.config.js` e documente no README.

---
