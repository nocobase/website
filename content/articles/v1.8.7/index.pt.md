---
title: "NocoBase v1.8.7: Suporte para testar execução de nó"
description: "Nota de lançamento da v1.8.7"
---

### 🎉 Novas Funcionalidades

- **[Workflow: nó de cálculo de data]** Suporte para testar execução do nó por @mytharcher

### 🚀 Melhorias

- **[client]** Seletor de Cores: Adicionar quatro cores recomendadas ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe

- **[Workflow]** Tornar comparação compatível com valores de data ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Regras de estilo não funcionando na coluna de ação da tabela ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh

  - Ao excluir um menu, os dados correspondentes na tabela uiSchemas não são excluídos ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe

  - Evitar que campos não associados sejam selecionados em appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher

- **[Workflow: Subfluxo]** Corrigir erro lançado quando o sinal de recall chega, mas a execução pendente não está na instância atual por @mytharcher
