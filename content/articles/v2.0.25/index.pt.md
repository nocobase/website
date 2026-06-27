---
title: "NocoBase v2.0.25: Correção de problema de desempenho causado pelo campo JSON ao carregar lista de registros de aprovação"
description: "Nota de lançamento da v2.0.25"
---

### 🚀 Melhorias

- **[Fluxo de Trabalho: Aprovação]** Corrige problema de desempenho causado pelo campo JSON ao carregar a lista de registros de aprovação por @mytharcher

### 🐛 Correções de Bugs

- **[servidor]** Altera o momento de fechamento do Pub-Sub para `beforeStop`, a fim de evitar que mensagens sejam enviadas ou processadas após o fechamento do banco de dados ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher

- **[Localização]** Impede a requisição localizationTexts:missing em caso de negação de permissão ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos

- **[Fonte de dados: Oracle externo]** Corrige um erro que ocorre ao carregar a fonte de dados Oracle externa por @2013xile
