---
title: "NocoBase v2.0.18: Permite adicionar funcionários de IA no pop-up de subtabelas"
description: "Nota de lançamento da v2.0.18"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]**
  - Limpeza programada dos dados de checkpoint de conversas de IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock

  - Permite adicionar funcionários de IA em popups de subtabelas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile

- **[Supervisor de aplicativos]** Suporte a filtragem na lista de aplicativos<br />Adiciona diálogos de confirmação para ações de iniciar e parar<br />Ordena entradas de status de aplicativos por nome do ambiente por @2013xile

### 🚀 Melhorias

- **[servidor]** melhora a lógica do comando pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos

- **[cliente]** Suporte para exibir mensagem de confirmação antes de fechar popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust

- **[Gerenciador de tarefas assíncronas]** tarefas assíncronas foram adicionadas para suportar workers no envio de mensagens de erro ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]** Corrigido o problema em que o popup "Selecionar registro" na subtabela falhava ao carregar corretamente quando aberto pela segunda vez. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust

- **[Funcionários de IA]** Corrigidos possíveis erros de variável indefinida em scripts de migração de atualização do plugin de IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock

- **[Ação: Importar registros Pro]** Corrigido o problema em que tarefas assíncronas não terminavam após ocorrer um erro na importação assíncrona por @cgyrock
