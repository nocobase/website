---
title: "NocoBase v2.0.0-alpha.47: Suporte à inicialização de campos de filtro selecionados na consulta de gráfico"
description: "Nota de lançamento da v2.0.0-alpha.47"
---

### 🚀 Melhorias

- **[client]**
  - Suporte à inicialização de campos de filtro selecionados em consultas de gráfico ([#7933](https://github.com/nocobase/nocobase/pull/7933)) por @heziqiang

  - Uso de chaves triplas (`{{{` e `}}}`) para variáveis no conteúdo da mensagem, para evitar que variáveis sejam escapadas pelo Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher

  - Adicionado estado de carregamento para os botões de ação de atualizar registro e destruir registro, evitando requisições duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher

- **[Campo de coleção: Markdown(Vditor)]** ajuste da largura do conteúdo em tela cheia do vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido um problema onde abrir o bloco de detalhes no popup para campos de relacionamento sem ID causava um erro. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) por @gchust

  - Corrigido um problema onde os dados de associação não carregavam corretamente no popup para campos de relacionamento sem ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) por @gchust

  - Corrigidos problemas de roteamento ao usar um Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) por @zhangzhonghe

  - Corrigido problema com configuração de precisão inválida para formatação de campo numérico ([#7967](https://github.com/nocobase/nocobase/pull/7967)) por @katherinehhh

  - Corrigida a digitação incorreta na nova página 2.0 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) por @zhangzhonghe

  - Corrigido o problema onde o valor do filtro não era limpo ao clicar no botão Redefinir ([#7966](https://github.com/nocobase/nocobase/pull/7966)) por @zhangzhonghe

- **[Workflow]** Corrigida a contagem de tarefas não sendo exibida devido ao uso incorreto do provedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher

- **[Visualização de dados]** Resolvido problema onde a consulta de gráfico não suportava o escopo de dados ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile

- **[Bloco: Referência]** Corrigido um problema onde citar um bloco removia o bloco citado da página original. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) por @gchust

- **[Funcionários de IA]** Corrigido problema na geração de saída SQL pela IA ([#7956](https://github.com/nocobase/nocobase/pull/7956)) por @heziqiang

- **[Impressão de modelo]** corrigida falha ao adicionar modelo na operação de impressão de modelo de registro por @katherinehhh
