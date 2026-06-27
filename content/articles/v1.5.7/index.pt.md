---
title: "NocoBase v1.5.7: Remover registro de erros no console para tentativas de reconexão SSE"
description: "Nota de lançamento da v1.5.7"
---

### 🚀 Melhorias

- **[Notificação: Mensagem no aplicativo]** Remover log de erro no console para tentativas de reconexão SSE. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) por @sheldon66

### 🐛 Correções de Bugs

- **[cliente]**
  - Configuração de arrastar ausente no modal de operação de criação rápida de dados de relação ([#6201](https://github.com/nocobase/nocobase/pull/6201)) por @katherinehhh

  - Problema com a formatação de números de alta precisão não sendo aplicada ([#6202](https://github.com/nocobase/nocobase/pull/6202)) por @katherinehhh

  - Corrige um problema onde limpar um campo de associação em um formulário não limpa efetivamente o valor do campo ao enviar o formulário ([#5540](https://github.com/nocobase/nocobase/pull/5540)) por @zhangzhonghe

  - Bloco não atualiza após o envio do formulário ([#6206](https://github.com/nocobase/nocobase/pull/6206)) por @zhangzhonghe

  - Valor do campo vinculado persistindo no envio após redefinição do campo de relação ([#6207](https://github.com/nocobase/nocobase/pull/6207)) por @katherinehhh

  - Ação de atualização exibida para linhas sem permissão de atualização na tabela ([#6204](https://github.com/nocobase/nocobase/pull/6204)) por @katherinehhh

- **[Campo de coleção: Ordenação]** Corrige tipo de campo de ordenação não registrado em fonte de dados externa ([#6212](https://github.com/nocobase/nocobase/pull/6212)) por @mytharcher

- **[Autenticação]** Problema de autenticação WebSocket ([#6209](https://github.com/nocobase/nocobase/pull/6209)) por @2013xile

- **[Campo de coleção: Anexo(URL)]** Corrige URL de requisição obsoleta no hook por @mytharcher
