---
title: "NocoBase v1.3.40-beta: Adicionar opção de ignorar verificação SSL"
description: "Nota de lançamento da v1.3.40-beta"
---

### 🎉 Novas Funcionalidades

- **[Auth: OIDC]** Adiciona opção para permitir ignorar verificação SSL por @2013xile

### 🚀 Melhorias

- **[client]** exibe caixa de seleção desabilitada e desmarcada para campos não selecionados ([#5503](https://github.com/nocobase/nocobase/pull/5503)) por @katherinehhh

### 🐛 Correções de Bugs

- **[database]** Corrige o problema em que os operadores de string "contém" e "não contém" não tratavam adequadamente valores `null` ([#5509](https://github.com/nocobase/nocobase/pull/5509)) por @2013xile

- **[client]** Corrige regra de vinculação para avaliar corretamente variáveis de parâmetros de URL ([#5504](https://github.com/nocobase/nocobase/pull/5504)) por @katherinehhh

- **[Bloco: Mapa]** Corrige o problema em que alguns mapas eram exibidos incorretamente quando múltiplos mapas existiam devido a múltiplas chamadas ao método `load` do AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) por @Cyx649312038
