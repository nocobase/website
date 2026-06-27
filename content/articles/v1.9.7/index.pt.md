---
title: "NocoBase v1.9.7: Correções de Bugs"
description: "Nota de Lançamento da v1.9.7"
---

### 🐛 Correções de Bugs

- **[cliente]** Corrigido o problema em que a regra de vinculação do formulário de aprovação não estava funcionando ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe

- **[servidor]** Corrigido um problema no modo de divisão de serviços onde mensagens de fila não inscritas não podiam ser publicadas ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher

- **[Workflow]**
  - Corrigido o erro causado ao ouvir eventos de fontes de dados externas inexistentes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher

  - Usar eventQueue em vez do backgroundJob compartilhado para evitar que a fila compartilhada seja consumida incorretamente no modo de divisão de serviços ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher

- **[Workflow: Nó manual]** Corrigido o namespace do idioma local a ser usado para exibir o conteúdo correto da tradução ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher

- **[Controle de acesso]** Problema em que os trechos de operação de associação não estavam surtindo efeito ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile

- **[Workflow: Aprovação]**
  - Corrigido o problema em que o tamanho da página de carregamento do canal de notificação não era grande o suficiente, fazendo com que a lista não fosse carregada completamente por @mytharcher

  - Corrigido o problema em que a regra de vinculação do formulário de aprovação não estava funcionando por @zhangzhonghe

  - Corrigido o formato da data nos cartões da lista de aprovação no centro de tarefas para exibir a data e hora completas por @mytharcher

  - Corrigido um problema de desempenho que ocorria ao consultar a lista de registros de aprovação durante o envio da aprovação por @mytharcher
