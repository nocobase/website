---
title: "NocoBase v1.8.13: Adicionar opções de configuração relacionadas à assinatura"
description: "Nota de lançamento da v1.8.13"
---

### 🎉 Novas Funcionalidades

- **[Auth: SAML 2.0]** Adicionar opções de configuração relacionadas à assinatura por @2013xile

### 🚀 Melhorias

- **[Workflow: JavaScript]** Alterar cache para cache do aplicativo para evitar bugs em modo cluster por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir tooltip exibindo [object Object] ao passar o mouse no painel de ações ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh

  - Ao usar variáveis para definir valores padrão de campos em formulários de filtro, se o valor da variável estiver vazio, a caixa de entrada exibirá a string original da variável ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe

- **[Collection: Tree]** Corrigir a lógica de sincronização de caminhos de coleções em árvore ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu
