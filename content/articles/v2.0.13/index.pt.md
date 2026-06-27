---
title: "NocoBase v2.0.13 : Suporte ao botão de acionamento de fluxo de trabalho para configurar fluxo após sucesso"
description: "Nota de lançamento da v2.0.13"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte para configurar fluxo após sucesso no botão de acionamento de workflow ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher

### 🚀 Melhorias

- **[Workflow]** Exibir todos os tipos de nós no menu de adição, mesmo quando não disponíveis ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher

- **[AI: Base de conhecimento]** Lógica de carregamento de documentos da base de conhecimento refatorada. por @cgyrock

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido o problema em que o bloco de detalhes de uma coleção SQL encontrava um erro ao carregar dados. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust

  - Corrigido o problema em que as regras de vinculação de campos no bloco de detalhes não entravam em vigor durante a renderização inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust

- **[Visualizador de Arquivos do Office]** Alterada a altura do modal para um valor adequado, exibindo mais conteúdo do arquivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher

- **[Modelos de UI]** Corrigido o problema em que o fluxo de eventos do bloco de referência no bloco de tabela não podia ser configurado com um fluxo de evento de clique na linha. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust
