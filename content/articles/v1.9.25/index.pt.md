---
title: "NocoBase v1.9.25: Adicionar lógica de tolerância a falhas para dados ausentes na preparação do processador"
description: "Nota de lançamento da v1.9.25"
---

### 🚀 Melhorias

- **[Workflow]**
  - Adiciona lógica tolerante a falhas para dados ausentes na preparação do processador, evitando travamento na execução ([#8156](https://github.com/nocobase/nocobase/pull/8156)) por @mytharcher

  - Usa carregamento preguiçoso para dados de associação na tela do workflow para melhorar o desempenho ([#8142](https://github.com/nocobase/nocobase/pull/8142)) por @mytharcher

### 🐛 Correções de Bugs

- **[acl]** Corrige o problema em que a API `acl.can` retorna `null` quando a função é `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) por @mytharcher

- **[Workflow: Nó manual]** Corrige o problema em que a lista de tarefas manuais está usando uma API incorreta ([#8144](https://github.com/nocobase/nocobase/pull/8144)) por @mytharcher

- **[Criptografia de requisição HTTP]** Usa colchetes para formato de array na análise do qs por @chenos

- **[Workflow: Aprovação]** Corrige o problema em que um erro é lançado ao cancelar uma execução quando seu workflow foi excluído por @mytharcher

- **[Gerenciador de migração]** Corrige um problema em que quebras de linha nos dados eram perdidas durante a migração. por @cgyrock
