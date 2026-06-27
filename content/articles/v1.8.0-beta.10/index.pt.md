---
title: "NocoBase v1.8.0-beta.10: Adicionar variável de registros de aprovação ao resultado do nó"
description: "Nota de lançamento da v1.8.0-beta.10"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Aprovação]** Adicionar variável de registros de aprovação ao resultado do nó por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - A função de alinhamento de texto da coluna da tabela não está funcionando ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe

  - Atribuir valores de campo: Incapacidade de limpar dados para campos de relação ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe

  - Usar escopo de variável independente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher

- **[Gerenciador de arquivos]** Corrigir campo de anexos que não pode ser atualizado no processo de aprovação ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher

- **[Workflow]** Corrigir verificação executada incorretamente em números inteiros grandes ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher

- **[Workflow: Aprovação]** Usar comparação em vez de lógica implícita para evitar problemas de tipo por @mytharcher
