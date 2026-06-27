---
title: "NocoBase v2.0.0-alpha.38: Suporte para arrastar ações de coluna de tabela"
description: "Nota de lançamento da v2.0.0-alpha.38"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte para arrastar ações de coluna em tabelas ([#7842](https://github.com/nocobase/nocobase/pull/7842)) por @zhangzhonghe

- **[Visualização de dados]** Adicionar fonte de dados SQL para gráficos ([#7830](https://github.com/nocobase/nocobase/pull/7830)) por @heziqiang

### 🚀 Melhorias

- **[client]** Adicionado suporte para a biblioteca Day.js no contexto de script RunJS, facilitando manipulações de data e hora. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) por @gchust

### 🐛 Correções de Bugs

- **[utils]**
  - Corrigido o erro "Invalid filter item type" no botão de filtro ([#7838](https://github.com/nocobase/nocobase/pull/7838)) por @zhangzhonghe

  - Habilitada a mesclagem de objetos na estratégia intersect ([#7840](https://github.com/nocobase/nocobase/pull/7840)) por @chenos

  - Corrigido o erro 'Unrecognized operation' no fluxo de eventos ([#7835](https://github.com/nocobase/nocobase/pull/7835)) por @zhangzhonghe

- **[client]**
  - Corrigido um problema onde as regras de vinculação para botões de ação de linha em um bloco de tabela não eram reexecutadas após a atualização dos dados da linha, garantindo que as regras sejam agora reaplicadas corretamente quando ocorrerem alterações. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) por @gchust

  - Corrigidos os erros ao visualizar código no editor de código se o código contiver sintaxe JSX ([#7836](https://github.com/nocobase/nocobase/pull/7836)) por @gchust

- **[undefined]** Corrigido o problema de estilo incorreto na página inicial da documentação do plugin no modo escuro. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) por @gchust

- **[Gerenciador de arquivos]** corrigidos problemas de configuração de campo em bloco de tabela ([#7843](https://github.com/nocobase/nocobase/pull/7843)) por @katherinehhh

- **[Funcionários de IA]** Ocultar botão de chat do funcionário de IA em páginas v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) por @cgyrock

- **[Visualização de dados: ECharts]** corrigido problema com config labelType do ECharts por @heziqiang

- **[Gerenciador de e-mail]**
  - corrigidos bugs de rascunho por @jiannx

  - sincronizar status de leitura do e-mail Microsoft sem timestamp por @jiannx
