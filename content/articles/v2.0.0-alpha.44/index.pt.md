---
title: "NocoBase v2.0.0-alpha.44: suporte ao seletor em cascata para campo de associação de coleção em árvore"
description: "Nota de lançamento da v2.0.0-alpha.44"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Adiciona suporte a criação rápida no seletor de campos de associação ([#7887](https://github.com/nocobase/nocobase/pull/7887)) por @katherinehhh

  - Suporta seletor em cascata para campo de associação de coleção em árvore ([#7846](https://github.com/nocobase/nocobase/pull/7846)) por @katherinehhh

- **[Telemetria]** Adiciona novo plugin: Telemetry, um plugin de telemetria baseado em OpenTelemetry que fornece métricas de CPU, memória e requisições HTTP com suporte a exportação HTTP por @2013xile

### 🚀 Melhorias

- **[telemetria]** Suporta controle sobre quais métricas são exportadas ([#7938](https://github.com/nocobase/nocobase/pull/7938)) por @2013xile

- **[Gerenciador de tarefas assíncronas]** Tarefas assíncronas para sub-aplicações devem iniciar apenas as sub-aplicações alvo nos Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) por @2013xile

### 🐛 Correções de Bugs

- **[client]**
  - Remove ação de tabela em árvore de blocos de coleção não-árvore ([#7931](https://github.com/nocobase/nocobase/pull/7931)) por @katherinehhh

  - Corrige interface de campo que mostrava muitos-para-um em vez de um-para-um para belongsTo na configuração de fonte de dados externa ([#7936](https://github.com/nocobase/nocobase/pull/7936)) por @cgyrock

- **[flow-engine]** Corrige o problema de exibição desalinhada dos ícones da barra de ferramentas no botão do bloco de detalhes ([#7929](https://github.com/nocobase/nocobase/pull/7929)) por @zhangzhonghe

- **[Workflow]** Corrige o problema em que a atualização da contagem de tarefas reiniciava involuntariamente o estado dos formulários sendo preenchidos ([#7937](https://github.com/nocobase/nocobase/pull/7937)) por @mytharcher

- **[Campo de coleção: Muitos para muitos (array)]** Corrige problemas no campo M2M (array) ao criar/atualizar dados relacionados ([#7926](https://github.com/nocobase/nocobase/pull/7926)) por @cgyrock

- **[Ação: Importar registros Pro]** corrige problema em que a modificação das opções de importação pelo uploader não tinha efeito por @katherinehhh
