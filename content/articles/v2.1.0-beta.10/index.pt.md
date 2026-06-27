---
title: "NocoBase v2.1.0-beta.10: Limpeza programada de dados de checkpoint de conversas de IA"
description: "Nota de lançamento da v2.1.0-beta.10"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]**
  - Permite adicionar funcionários de IA no pop-up de subtabelas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile

  - Limpeza programada dos dados de checkpoint de conversas de IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock

- **[Supervisor de aplicativos]** Suporte para filtragem na lista de aplicativos<br />Adiciona diálogos de confirmação para ações de iniciar e parar<br />Ordena entradas de status do aplicativo por nome do ambiente por @2013xile

### 🚀 Melhorias

- **[servidor]** melhora a lógica do pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos

- **[indefinido]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) por @gaston98765

- **[cliente]** Suporte para exibir mensagem de confirmação antes de fechar o pop-up. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust

- **[Workflow]** Corrige o problema em que o desligamento gracioso não drenava todos os eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher

- **[Gerenciador de tarefas assíncronas]** tarefas assíncronas foram adicionadas para suportar workers no envio de mensagens de erro ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido o problema em que o pop-up "Selecionar registro" na subtabela falhava ao carregar corretamente quando aberto pela segunda vez. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust

  - Corrigido o problema em que os valores padrão de alguns campos não surtiam efeito após atualizar a página. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) por @gchust

- **[banco de dados]** Corrige o problema de validação no lado do servidor para campos de data ([#8867](https://github.com/nocobase/nocobase/pull/8867)) por @2013xile

- **[Gerenciador de fontes de dados]** Corrigido o problema em que a coleção criada pelo funcionário de IA sempre perdia os campos `createBy` e `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock

- **[Funcionários de IA]**
  - Corrige o problema com a URL especificada para o serviço LLM não surtindo efeito em chamadas de modelo de incorporação de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock

  - Corrigidos possíveis erros de variável indefinida em scripts de migração de atualização do plugin de IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock

- **[Localização]** localizationTexts: exceção de permissão de interface ausente ([#8861](https://github.com/nocobase/nocobase/pull/8861)) por @jiannx

- **[Ação: Importar registros Pro]**
  - Corrige evento `beforeStop` no sub aplicativo não disparado por @mytharcher

  - Corrige erro SES causado por importação preguiçosa por @mytharcher

  - Corrige o problema em que as tarefas assíncronas não terminam após ocorrer um erro na importação assíncrona por @cgyrock

- **[IA: Base de conhecimento]** Impede que o banco de dados vetorial e o armazenamento vetorial em uso sejam excluídos. por @cgyrock

- **[Impressão de modelo]** Corrige erro de impressão de coleção SQL por @jiannx

- **[Gerenciador de e-mail]** Corrigido erro de página quando o e-mail não existe por @jiannx
