---
title: "NocoBase v1.9.32: Corrige estouro de pilha causado por loop infinito no carregamento lento de campos de associação de exibição"
description: "Nota de lançamento da v1.9.32"
---

### 🎉 Novas Funcionalidades

- **[Workflow]** Adiciona novas variáveis de sistema no workflow, incluindo `instanceId` e `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Corrige estouro de pilha causado por loop infinito no carregamento preguiçoso de campos de associação em exibição ([#8262](https://github.com/nocobase/nocobase/pull/8262)) por @zhangzhonghe

- **[Ação: Importar registros]** Corrige o problema em que o índice da linha na mensagem de erro era sempre 1 quando um erro era lançado na ação de importação ([#8244](https://github.com/nocobase/nocobase/pull/8244)) por @mytharcher

- **[Workflow: Nó manual]** Corrige o problema em que um erro era lançado ao cancelar a execução de um workflow excluído ([#8258](https://github.com/nocobase/nocobase/pull/8258)) por @mytharcher

- **[Campo de coleção: Sequência]** Corrige um erro quando o comando de reparo de campo-sequência encontra uma coleção inexistente no ambiente atual. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) por @cgyrock

- **[Ação: Importar registros Pro]** Corrige a lógica de verificação de unicidade que lançava um erro quando o valor do campo único era nulo por @mytharcher

- **[Workflow: Aprovação]** Corrige reversão duplicada da mesma transação por @mytharcher
