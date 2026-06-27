---
title: "NocoBase v2.0.0-alpha.21: Correções de Bugs"
description: "Nota de Lançamento da v2.0.0-alpha.21"
---

### 🚀 Melhorias

- **[cache]** Evitar sobrecarga de desempenho causada pela clonagem de filtros Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) por @2013xile

- **[server]** Otimizar o método de carregamento de recursos l10n para evitar bloqueio do event loop ([#7653](https://github.com/nocobase/nocobase/pull/7653)) por @2013xile

- **[Ação: Importar registros]** Mensagens de erro aprimoradas quando cabeçalhos de tabela estão ausentes ([#7656](https://github.com/nocobase/nocobase/pull/7656)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Evitar quebra de palavra no rótulo do formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) por @katherinehhh

- **[Visualização de dados]** Corrigir problema de consulta SQL ao analisar variáveis ([#7642](https://github.com/nocobase/nocobase/pull/7642)) por @heziqiang

- **[Workflow]** Corrigir erro do logger lançado ao parar a aplicação ([#7639](https://github.com/nocobase/nocobase/pull/7639)) por @mytharcher
