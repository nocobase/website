---
title: "NocoBase v1.9.0-beta.14: Exponha a variável `approvalId` para uso a partir de gatilhos de aprovação"
description: "Nota de lançamento da v1.9.0-beta.14"
---

### 🎉 Novos Recursos

- **[Workflow: Aprovação]** Expor a variável `approvalId` para uso a partir de gatilhos de aprovação por @mytharcher

### 🚀 Melhorias

- **[servidor]** Otimizar o método de carregamento de recursos l10n para evitar bloqueio do event loop ([#7653](https://github.com/nocobase/nocobase/pull/7653)) por @2013xile

- **[cache]** Evitar sobrecarga de desempenho causada pela clonagem de filtros Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) por @2013xile

- **[Ação: Importar registros]** Mensagem de erro aprimorada quando cabeçalhos de tabela estão ausentes ([#7656](https://github.com/nocobase/nocobase/pull/7656)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** evitar quebra de palavra no rótulo do formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) por @katherinehhh

- **[Workflow]** Corrigir erro do logger lançado quando a aplicação é interrompida ([#7639](https://github.com/nocobase/nocobase/pull/7639)) por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigir o problema de timeout de transação causado por transações que não revertem corretamente quando ocorrem erros no banco de dados após o envio da aprovação por @mytharcher

  - Corrigir o problema em que a contagem de tarefas não era atualizada após adicionar um responsável por @mytharcher

  - Corrigir o problema em que as variáveis não eram analisadas no formulário de envio de aprovação por @mytharcher

- **[Gerenciador de e-mail]** capturar erro de sincronização por @jiannx
