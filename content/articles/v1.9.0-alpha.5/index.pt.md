---
title: "NocoBase v1.9.0-alpha.5: Adicionar opções de configuração relacionadas à assinatura"
description: "Nota de lançamento da v1.9.0-alpha.5"
---

### 🎉 Novas Funcionalidades

- **[client]** Adicionada opção "Foco automático" para os componentes Input, TextArea, URL e InputNumber, que foca automaticamente o campo de entrada durante a renderização inicial da página quando ativada ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe

- **[Auth: SAML 2.0]** Adicionadas opções de configuração relacionadas à assinatura por @2013xile

### 🚀 Melhorias

- **[Workflow: JavaScript]** Alterado cache para cache de aplicativo para evitar bugs em modo cluster por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido o problema em que strings brutas de variáveis eram enviadas com o formulário ([#7337](https://github.com/nocobase/nocobase/pull/7337)) por @zhangzhonghe

  - Corrigido tooltip que exibia [object Object] ao passar o mouse no painel de ações ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh

  - Ao usar variáveis para definir valores padrão de campos em formulários de filtro, se o valor da variável estiver vazio, a caixa de entrada exibirá a string original da variável ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe

- **[undefined]** Adicionado novo plugin ao preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher

- **[Collection: Tree]** Corrigida a lógica de sincronização de caminhos de coleções em árvore ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu

- **[Office File Previewer]** Suporte para arquivos `.docx`, `.xlsx` e `.pptx` apenas com URL para serem visualizados ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher

- **[Workflow: Dynamic calculation node]** Corrigido erro causado por API legada ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher

- **[Workflow: Approval]** Adicionado título de tarefa para itens adicionados e delegados por @mytharcher

- **[Email manager]** Suporte para o mesmo e-mail para múltiplas pessoas por @jiannx
