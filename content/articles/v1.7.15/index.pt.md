---
title: "NocoBase v1.7.15: Correções de Bugs"
description: "Nota de Lançamento da v1.7.15"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Usar escopo de variável independente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher

  - Atribuir valores de campo: Incapacidade de limpar dados para campos de relação ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe

  - Função de alinhamento de texto em colunas de tabela não está funcionando ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe

- **[Fluxo de trabalho]** Corrigir verificação executada incorretamente em números inteiros grandes ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher

- **[Gerenciador de arquivos]** Corrigir campo de anexos que não pode ser atualizado no processo de aprovação ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Usar comparação em vez de lógica implícita para evitar problemas de tipo por @mytharcher
