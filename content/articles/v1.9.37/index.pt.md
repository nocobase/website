---
title: "NocoBase v1.9.37: Atualização da versão do math.js para suportar mais funções"
description: "Nota de lançamento da v1.9.37"
---

### 🚀 Melhorias

- **[avaliadores]** Atualizada a versão do math.js para suportar mais funções ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher

- **[Notificação: Mensagem no aplicativo]** Corrigido problema de desempenho ao enviar mensagens no aplicativo para um grande número de usuários ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido problema em que os dados do seletor em cascata não eram limpos após o envio bem-sucedido no formulário de criação ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh

  - Adicionada tolerância a falhas no esquema de ação para evitar travamento da página ao clicar no botão de ação ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher

  - Corrigido problema no botão de envio em que a validação obrigatória não era ignorada quando a confirmação estava ativada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh

- **[Campo de coleção: Muitos para muitos (array)]** Corrigido erro ao anexar relações muitos-para-muitos(array) de segundo nível em consultas de associação ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock

- **[Fluxo de trabalho]** Corrigido problema em que o ID do esquema não era atualizado no nó duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher
