---
title: "NocoBase v1.6.0-alpha.2: Suporte para ativar pop-ups de abertura de links no campo readPretty"
description: "Nota de lançamento da v1.6.0-alpha.2"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Suporte para habilitar pop-ups de abertura de links no campo readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) por @katherinehhh

  - Suporte para ações de associar e desassociar em blocos de associação ([#5695](https://github.com/nocobase/nocobase/pull/5695)) por @katherinehhh

- **[server]** Adicionar gerenciador de auditoria ([#5601](https://github.com/nocobase/nocobase/pull/5601)) por @chenzhizdt

- **[Workflow]** Suporte para acionar manualmente workflows ([#5664](https://github.com/nocobase/nocobase/pull/5664)) por @mytharcher

- **[Workflow: Evento pré-ação]** Suporte para acionar manualmente workflows por @mytharcher

### 🚀 Melhorias

- **[client]**
  - Implementar carregamento sob demanda para componentes do front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) por @gchust

  - Melhorar o desempenho de renderização de páginas e suportar funcionalidade de keep-alive de páginas ([#5515](https://github.com/nocobase/nocobase/pull/5515)) por @zhangzhonghe

- **[Campo de coleção: Ordenação]** Adicionar descrição do plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) por @mytharcher

- **[Incorporar NocoBase]** Melhorar o desempenho de renderização de páginas por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir problemas onde variáveis não podem ser usadas corretamente em blocos de fontes de dados de terceiros ([#5782](https://github.com/nocobase/nocobase/pull/5782)) por @zhangzhonghe

  - Corrigir o problema onde os valores dos campos de associação estão vazios em modelos de bloco. Corrigir o problema onde o escopo de dados do bloco usando variáveis não funciona corretamente em fontes de dados de terceiros ([#5777](https://github.com/nocobase/nocobase/pull/5777)) por @zhangzhonghe

  - Corrigir o problema onde as props dinâmicas do componente não funcionam com carregamento preguiçoso ([#5776](https://github.com/nocobase/nocobase/pull/5776)) por @gchust

  - Corrigir a mensagem de aviso no React ao carregar hooks dinamicamente no ambiente de desenvolvimento ([#5758](https://github.com/nocobase/nocobase/pull/5758)) por @gchust

- **[Visualização de dados]** Corrigir o problema onde os componentes de campo de filtro de blocos de gráfico não renderizam ([#5769](https://github.com/nocobase/nocobase/pull/5769)) por @2013xile
