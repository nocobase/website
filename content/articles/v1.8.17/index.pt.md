---
title: "NocoBase v1.8.17: Suporte para usar título de tarefa consistente em todos os nós de aprovação no mesmo fluxo de trabalho"
description: "Nota de lançamento da v1.8.17"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Aprovação]** Suporte para usar título de tarefa consistente em todos os nós de aprovação no mesmo fluxo de trabalho por @mytharcher

### 🚀 Melhorias

- **[Autenticação]** Removido o parâmetro token da URL após login bem-sucedido ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile

- **[Impressão de modelo]** Suporte para campo de array m2m por @jiannx

### 🐛 Correções de Bugs

- **[Mobile]** Corrigido o problema onde os dados de envio do formulário no diálogo de aprovação mobile estavam incorretos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe

- **[Workflow]** Corrigida a tradução do título da página no centro de tarefas do workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher

- **[Calendário]** Tooltip de item de evento do calendário exibindo [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh

- **[Notificação: Mensagem no aplicativo]** Corrigidas traduções ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher

- **[Gerenciador de arquivos]** Removida a dica sobre o limite de tamanho de upload de arquivos ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]**
  - Descontinuado o parâmetro problemático `attachmentField` por @mytharcher

  - Corrigido o problema onde o método de autenticação IAM não podia ser usado para fazer upload de arquivos por @mytharcher
