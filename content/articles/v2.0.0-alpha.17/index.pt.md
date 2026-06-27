---
title: "NocoBase v2.0.0-alpha.17: Adicionado suporte para ouvintes de eventos de clique em linhas de tabela"
description: "Nota de lançamento da v2.0.0-alpha.17"
---

### 🎉 Novas Funcionalidades

- **[client]** Adicionado suporte a listeners de eventos de clique em linhas de tabela, permitindo que usuários executem ações específicas ao clicar em uma linha da tabela ([#7622](https://github.com/nocobase/nocobase/pull/7622)) por @zhangzhonghe

- **[Workflow: Approval]** Expor a variável `approvalId` para uso a partir de gatilhos de aprovação por @mytharcher

### 🐛 Correções de Bugs

- **[flow-engine]** Corrigido o problema de tradução não ter efeito em componentes antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) por @zhangzhonghe

- **[Data source: Main]** Corrigido o problema de metadados não serem sincronizados em vários nós após criar um campo de associação reversa ([#7628](https://github.com/nocobase/nocobase/pull/7628)) por @mytharcher

- **[plugin-demo-platform]** demo suporta parada automática de aplicativos por @jiannx

- **[Multi-app]**
  - migração multi-app não emitia hooks por @jiannx

  - proxy multi-app suporta cache por @jiannx
