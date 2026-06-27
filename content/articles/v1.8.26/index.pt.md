---
title: "NocoBase v1.8.26: suporte à exibição de mapeamento de localidade para cabeçalhos de calendário"
description: "Nota de lançamento da v1.8.26"
---

### 🚀 Melhorias

- **[client]** adicionar suporte a localização para tooltip e título de item de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh

- **[Calendário]** suportar exibição de mapeamento de localidade para cabeçalhos de calendário ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh

### 🐛 Correções de Bugs

- **[client]** Corrigir o problema em que o popover de configuração do ícone do menu está sendo obscurecido ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe

- **[Notificação: Mensagem no aplicativo]**
  - Corrigir o problema de análise incorreta do link de notificação ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher

  - Corrigir o problema em que mensagens recentes não são exibidas ao abrir o popup de notificação ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher

- **[Fluxo de Trabalho]** Corrigir o problema em que a lógica de assinatura incorreta na fila de tarefas em segundo plano no fluxo de trabalho causava o tratamento incorreto da mensagem de execução ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher

- **[Fluxo de Trabalho: Aprovação]**
  - Corrigir o problema em que ocorria um erro ao excluir dados de uma fonte de dados externa por @mytharcher

  - Corrigir o problema em que campos de fórmula no formulário de aprovação não são atualizados automaticamente por @mytharcher
