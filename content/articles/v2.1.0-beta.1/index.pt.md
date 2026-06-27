---
title: "NocoBase v2.1.0-beta.1: Reformular o supervisor de aplicativos para suportar gerenciamento multi-aplicativo em diferentes cenários"
description: "Nota de lançamento da v2.1.0-beta.1"
---

### 🎉 Novas Funcionalidades

- **[servidor]** Reformulação do supervisor de aplicativos para suportar gerenciamento de múltiplos aplicativos em diferentes cenários ([#8043](https://github.com/nocobase/nocobase/pull/8043)) por @2013xile

### 🚀 Melhorias

- **[cliente]**
  - Melhoria na interface de atribuição de campos de data/hora para suportar seleção de datas/horas relativas. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) por @gchust

  - Suporte para especificar campo de título para campos de associação ao atribuir campo. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) por @gchust

### 🐛 Correções de Bugs

- **[mecanismo de fluxo]**
  - Correção de um problema onde o submenu do campo de filtro não podia ser expandido quando uma palavra-chave de pesquisa estava presente. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) por @gchust

  - Correção da ação de exclusão de coluna não funcionando na sub-tabela de popup quando createModelOptions está configurado ([#8560](https://github.com/nocobase/nocobase/pull/8560)) por @katherinehhh

- **[cliente]**
  - Correção de um problema onde atribuir um único registro a um campo de relação muitos-para-muitos produzia resultados incorretos. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) por @gchust

  - Análise de data usando seletor de data e adição de validação de força de senha, etc ([#8647](https://github.com/nocobase/nocobase/pull/8647)) por @jiannx

  - Correção do problema de espaçamento causado por ações vinculadas ocultas na coluna de ação da tabela ([#8646](https://github.com/nocobase/nocobase/pull/8646)) por @zhangzhonghe

  - Correção do problema onde `Action.Modal` não podia ser fechado após alguma interação ([#8642](https://github.com/nocobase/nocobase/pull/8642)) por @mytharcher

  - Correção de erro de sintaxe de resolução quando item markdown renderiza Liquid inválido ([#8637](https://github.com/nocobase/nocobase/pull/8637)) por @katherinehhh

  - Correção de requisições de análise desnecessárias do backend para propriedades de campo "para-muitos" em bloco de formulário. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) por @gchust

  - Correção da falta de formatação de número para campos de fórmula numérica e configurações de formato de data para campos de fórmula de data ([#8625](https://github.com/nocobase/nocobase/pull/8625)) por @katherinehhh

  - Correção da renderização incompleta da borda superior no primeiro item do formulário ([#8623](https://github.com/nocobase/nocobase/pull/8623)) por @katherinehhh

  - Correção: ocultar "Habilitar tabela em árvore" e "Expandir todas as linhas por padrão" para coleções não-árvore ([#8566](https://github.com/nocobase/nocobase/pull/8566)) por @katherinehhh

- **[utils]** Correção de problema de segurança do mecanismo avaliador `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher

- **[Funcionários de IA]**
  - Correção de um problema onde links de citação de pesquisas web de IA não eram exibidos na caixa de chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) por @cgyrock

  - Correção de erro nos parâmetros da API OpenAI ([#8633](https://github.com/nocobase/nocobase/pull/8633)) por @cgyrock

- **[Impressão de modelo]** Correção de campos com a mesma chave causando erros de renderização por @jiannx

- **[Fluxo de trabalho: Aprovação]**
  - Correção do problema onde erro era lançado ao aprovar registro excluído por @mytharcher

  - Correção do problema onde dados de aprovação não apareciam no popup de detalhes do registro se o modo do fluxo de trabalho estivesse configurado como "Antes de salvar" por @mytharcher
