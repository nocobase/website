---
title: "NocoBase v2.2.0-beta.5: Adicionados registros de versão de esquema para configuração de ambiente"
description: "Nota de lançamento da v2.2.0-beta.5"
---

### 🚀 Melhorias

* **[cli]** Adicionados registros de versão de esquema para configuração de ambiente. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) por @chenos
* **[Gerenciador de arquivos]** Melhoradas as pré-visualizações de PDF: arquivos PDF de origem cruzada agora usam a pré-visualização nativa do navegador, enquanto arquivos PDF da mesma origem continuam sendo renderizados com PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) por @mytharcher

### 🐛 Correções de bugs

* **[client-v2]**
  * Corrigido o problema em que as configurações de fluxo de eventos não podiam mais ser modificadas após um bloco ser convertido em um template. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) por @gchust
  * Corrigido o problema em que as opções do menu suspenso de caixa de seleção em formulários de filtro v2 não exibiam texto traduzido. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) por @katherinehhh
  * Corrigida a exibição incorreta e as configurações de formato quando o campo de título de um campo de relação de tabela v2 usava um campo de hora, data ou data e hora. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) por @katherinehhh
* **[Mecanismo de fluxo]** Corrigidos dados incorretos em formulários de registro atual e dados de detalhes dentro de pop-ups durante a construção com IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) por @gchust
* **[Fluxo de trabalho: Evento de ação personalizada]** Corrigido o problema em que os botões de fluxo de trabalho acionados pelo painel de ação v2 ainda mostravam sucesso e enviavam requisições quando nenhum fluxo de trabalho estava vinculado. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) por @mytharcher
* **[Funcionários de IA]** Corrigido o problema em que os funcionários de IA não conseguiam preencher corretamente os dados de sub-tabelas. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) por @gchust
