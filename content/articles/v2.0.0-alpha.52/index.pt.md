---
title: "NocoBase v2.0.0-alpha.52: adicionar suporte para configurações de adicionar/selecionar/desassociar em subformulário de muitos-para-muitos"
description: "Nota de lançamento da v2.0.0-alpha.52"
---

### 🎉 Novas Funcionalidades

- **[client]** adiciona suporte para configurações de adicionar/selecionar/desassociar em subformulário muitos-para-muitos ([#8099](https://github.com/nocobase/nocobase/pull/8099)) por @katherinehhh

- **[Fonte de dados: API REST]** adiciona opção `tradutor de mensagens de erro` na configuração da fonte de dados da API RESTful por @cgyrock

### 🚀 Melhorias

- **[auth]** Corrige [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile

- **[Ação: Importar registros]**
  - permite selecionar ID para campos de importação ([#8133](https://github.com/nocobase/nocobase/pull/8133)) por @katherinehhh

  - permite selecionar ID para campos de importação ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh

- **[Fluxo de trabalho: Aprovação]** Altera a API para obter um único item de aprovação e simplifica o código por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - corrige impedimento do estado desabilitado filho de bloquear a seleção de campos de relação ([#8131](https://github.com/nocobase/nocobase/pull/8131)) por @katherinehhh

  - Corrige o problema em que o componente `RemoteSelect` carregava o registro incorretamente quando o valor era nulo ([#8137](https://github.com/nocobase/nocobase/pull/8137)) por @mytharcher

  - Corrige um problema em que a largura do componente de interface era inconsistente ao selecionar "Passado" ou "Próximo" para campos de filtro de data. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) por @gchust

  - Corrige um problema em que os rótulos padrão dos campos no bloco de formulário de filtro não podiam ser traduzidos corretamente em vários idiomas. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) por @gchust

  - Corrige um problema em que os estilos de título e descrição do bloco JS eram inconsistentes com outros blocos. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) por @gchust

  - corrige subtabela aninhada em subformulário não exibindo dados ([#8117](https://github.com/nocobase/nocobase/pull/8117)) por @katherinehhh

  - corrige problema de quebra de linha no tooltip de campo de texto longo ([#8122](https://github.com/nocobase/nocobase/pull/8122)) por @katherinehhh

  - Corrige um problema em que os dados selecionáveis para campos de associação no bloco de formulário de filtro estavam incorretos. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) por @gchust

  - Corrige um problema em que as opções selecionáveis não eram listadas completamente ao usar os operadores "é qualquer um de" ou "não é nenhum de" para filtragem baseada em campos de opção. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) por @gchust

  - Corrige um problema em que as configurações de campos personalizados no formulário de filtro não eram pré-preenchidas corretamente e algumas configurações não surtiam efeito. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) por @gchust

  - Corrige um problema em que limpar os valores do filtro de intervalo de tempo e acionar o filtro novamente causava um erro. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) por @gchust

  - Corrige um problema em que o valor do campo numérico não era pré-preenchido corretamente na ação de filtro. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) por @gchust

  - Corrige um problema em que alguns operadores de campo em formulários de filtro falhavam ao filtrar dados corretamente. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) por @gchust

  - Corrige um problema em que a filtragem em campos do tipo Checkbox não surtia efeito. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) por @gchust

- **[flow-engine]**
  - correção: conversão incorreta ao usar tipo inteiro como opções de enumeração ([#8138](https://github.com/nocobase/nocobase/pull/8138)) por @chenos

  - Corrige itens de menu de submodelo alternáveis falhando quando `useModel` é omitido, inferindo-o a partir de `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) por @zhangzhonghe

- **[servidor]** Corrige um problema em que fluxos de trabalho acionados não eram adicionados à fila de processamento após a importação de dados, garantindo que os fluxos de trabalho sejam executados conforme esperado imediatamente após a importação ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher

- **[Notificação: Email]** corrige limitação de conexão de notificação por email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) por @jiannx

- **[Campo de coleção: Fórmula]** Corrige um problema em que campos de fórmula na ação de filtro e no bloco de formulário de filtro não permitiam digitar valores de entrada. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) por @gchust

- **[Multi-espaço]** Corrige a criação de outros campos na coleção do sistema por @jiannx
