---
title: "NocoBase v1.9.0-alpha.17: Melhorias e Correções no Fluxo de Trabalho"
description: "Nota de lançamento da v1.9.0-alpha.17"
---

### 🚀 Melhorias

- **[Workflow]** Separação da lógica relacionada à expedição em um dispatcher independente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher

### 🐛 Correções de Bugs

- **[Workflow]**
  - Correção do problema de execução duplicada devido ao manuseio inadequado da fila ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher

  - Correção do problema em que tarefas agendadas baseadas em campos de data não eram acionadas após o início ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher
