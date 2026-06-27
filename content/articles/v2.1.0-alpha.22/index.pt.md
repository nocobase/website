---
title: "NocoBase v2.1.0-alpha.22: Adicionar API para verificar criação de nó"
description: "Nota de lançamento da v2.1.0-alpha.22"
---

### 🎉 Novas Funcionalidades

- **[Workflow]** Adicionar API para verificar criação de nós ([#9207](https://github.com/nocobase/nocobase/pull/9207)) por @mytharcher

### 🚀 Melhorias

- **[cli]** Adicionado rastreamento de origem de requisições CLI nos logs de requisição e logs de auditoria ([#9223](https://github.com/nocobase/nocobase/pull/9223)) por @2013xile

- **[Controle de acesso]** adicionar algumas novas APIs para habilidade ACL ([#9198](https://github.com/nocobase/nocobase/pull/9198)) por @Andrew1989Y

- **[Workflow: Aprovação]**
  - Adicionar validação para criação de nós de aprovação por @mytharcher

  - Adicionar índices nas colunas de registros de aprovação para melhorar desempenho em ações de listagem e envio por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** alternância de ordenação oculta em campos de relacionamento ([#9220](https://github.com/nocobase/nocobase/pull/9220)) por @jiannx

- **[banco de dados]** Corrigido problema onde campos decimais com validação podiam rejeitar entrada numérica válida ([#9204](https://github.com/nocobase/nocobase/pull/9204)) por @2013xile

- **[Funcionários IA]** Corrigir problema de valores ausentes no campo URL de anexos em seleções de formulário de funcionários IA. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) por @cgyrock

- **[Usuários]** Corrigido campos configurados dinamicamente em Editar perfil que não carregavam os dados de usuário mais recentes ([#9205](https://github.com/nocobase/nocobase/pull/9205)) por @2013xile

- **[Gerenciador de fonte de dados]** Corrigido problema onde a ordenação agrupada em campos de ordenação de fonte de dados externa não podia ser limpa ([#9203](https://github.com/nocobase/nocobase/pull/9203)) por @2013xile
