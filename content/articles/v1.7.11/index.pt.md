---
title: "NocoBase v1.7.11: Suporte para cópia com um clique do conteúdo do campo de texto"
description: "Nota de lançamento da v1.7.11"
---

### 🎉 Novas Funcionalidades

- **[Cópia de texto]** Suporte para copiar o conteúdo de campos de texto com um clique ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[cliente]**
  - Seletor de campo de associação não limpa os dados selecionados após o envio ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh

  - Corrigir dica de tamanho de upload ([#7057](https://github.com/nocobase/nocobase/pull/7057)) por @mytharcher

- **[servidor]** Não é possível ler propriedades de undefined (lendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos

- **[Workflow: Nó de loop]** Corrigir execução do ramo do loop quando a condição não é satisfeita ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigir estatísticas de tarefas não atualizadas quando a execução é cancelada por @mytharcher

  - Corrigir variável de gatilho ao filtrar por tipo por @mytharcher
