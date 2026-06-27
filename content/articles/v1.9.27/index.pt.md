---
title: "NocoBase v1.9.27: Adiciona tolerância a falhas quando instâncias de aplicativo ausentes causam erros ao buscar mensagens de manutenção do aplicativo"
description: "Nota de lançamento da v1.9.27"
---

### 🚀 Melhorias

- **[servidor]** Adiciona tolerância a falhas quando instâncias de aplicativo ausentes causam erros ao buscar mensagens de manutenção do aplicativo ([#8196](https://github.com/nocobase/nocobase/pull/8196)) por @2013xile

- **[Manipulador de erros]** Não expõe mensagens brutas de erro do banco de dados em erros de sintaxe SQL, para evitar revelar o tipo de banco de dados ([#8195](https://github.com/nocobase/nocobase/pull/8195)) por @2013xile

- **[Fluxo de trabalho]** Suporte ao uso de configuração legada para criar novo fluxo de trabalho duplicado ([#8165](https://github.com/nocobase/nocobase/pull/8165)) por @mytharcher

### 🐛 Correções de bugs

- **[Fluxo de trabalho]** Corrige o problema em que apenas um registro é exibido na lista de registros para execução manual ([#8187](https://github.com/nocobase/nocobase/pull/8187)) por @mytharcher

- **[Coleção: Conectar a dados externos (FDW)]** Corrige erros de gatilho ao conectar a tabelas com nomes em maiúsculas por @2013xile

- **[Fluxo de trabalho: Aprovação]** Corrige o problema em que o status de registros de aprovação não relacionados é alterado incorretamente para `UNPROCESSED` pela ação de aprovação por @mytharcher
