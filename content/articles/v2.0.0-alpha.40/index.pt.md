---
title: "NocoBase v2.0.0-alpha.40: Otimizar o estilo da barra de ferramentas para evitar que ícones fiquem ocultos"
description: "Nota de lançamento da v2.0.0-alpha.40"
---

### 🚀 Melhorias

- **[flow-engine]** Otimização do estilo da barra de ferramentas para evitar que ícones fiquem ocultos ([#7883](https://github.com/nocobase/nocobase/pull/7883)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[flow-engine]** Corrigido o problema em que os dados de permissão ACL não eram recarregados após sair e entrar novamente. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) por @gchust

- **[client]** corrigidos problemas na configuração de itens de formulário ([#7867](https://github.com/nocobase/nocobase/pull/7867)) por @katherinehhh

- **[Visualização de dados]** Usar o modo de depuração do recurso SQL apenas durante a prévia do gráfico ([#7893](https://github.com/nocobase/nocobase/pull/7893)) por @heziqiang

- **[Multi-espaço]** usuários associados a multi-espaço por @jiannx

- **[Workflow: Aprovação]**
  - Corrigido o problema em que o tamanho da página do canal de notificação de carregamento não era grande o suficiente, fazendo com que a lista não fosse carregada completamente por @mytharcher

  - Corrigido um problema de desempenho que ocorria ao consultar a lista de registros de aprovação durante o envio da aprovação por @mytharcher

  - Corrigido o formato da data nos cartões da lista de aprovação no centro de tarefas pendentes para exibir a data e hora completas por @mytharcher
