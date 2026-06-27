---
title: "NocoBase v2.1.0-beta.37: suporte a autenticação básica"
description: "Nota de lançamento da v2.1.0-beta.37"
---

### 🎉 Novos Recursos

- **[client-v2]** Adicionar um menu de Segurança e a página de configurações de Política de Token ao admin v2; o centro do usuário agora suporta Alterar senha. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) por @Molunerfinn

- **[cli]** suporte a autenticação básica ([#9558](https://github.com/nocobase/nocobase/pull/9558)) por @chenos

- **[Política de senha]** Migrar o plugin-password-policy para o shell admin do client-v2 com as páginas de configurações de Política de senha / Usuários bloqueados e a aplicação de regras no lado do cliente no formulário de alteração de senha do centro do usuário. por @Molunerfinn

### 🚀 Melhorias

- **[Visualização de dados]** Adicionado suporte client v2 para blocos de gráfico. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) por @jiannx

- **[Workflow]** Refatorar verificações de disponibilidade de nós assíncronos do workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) por @mytharcher

### 🐛 Correções de Bugs

- **[build]**
  - Ativos de texto em builds do servidor agora são copiados como arquivos em vez de serem convertidos em módulos JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) por @Molunerfinn

  - Corrigida a saída de ofuscação do servidor do plugin para evitar globais do navegador em bundles de runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn

- **[client-v2]** Corrigidos metadados de idioma do navegador para que a página do aplicativo siga o idioma do aplicativo selecionado em vez de ser marcada como Inglês. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) por @Molunerfinn

- **[Gerenciador de arquivos]** Renderizar visualizações de PDF com segurança usando PDF.js em vez de renderização de PDF bruta baseada em iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher

- **[Funcionários de IA]** corrigida a descrição incorreta do nome da ferramenta no prompt de contexto de trabalho ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock

- **[Workflow: Nó manual]** Corrigidos salvamentos temporários para tarefas de workflow manual que não persistiam os valores do formulário submetido. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher

- **[Auth: OIDC]** Corrigido vazamento de token quando callbacks de login SSO recebem uma URL de redirecionamento externa por @2013xile

- **[Workflow: Aprovação]**
  - Corrigido o cancelamento de aprovação para atualizar os dados de negócio submetidos, respeitando as permissões de atualização da coleção de origem. por @mytharcher

  - Corrigido o problema em que a API `jobs:resume` não é suportada pelo nó de aprovação por @mytharcher

  - Corrigidos índices duplicados de registro de aprovação quando delegações ocorrem simultaneamente no mesmo trabalho de aprovação. por @mytharcher

  - Corrigidos afazeres de aprovação obsoletos quando workflows de aprovação são encerrados por falhas em nós que não são de aprovação. por @mytharcher
