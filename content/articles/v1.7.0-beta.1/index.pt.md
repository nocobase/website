---
title: "NocoBase v1.7.0-beta.1: compatível com configurações históricas de controle de acesso de botões"
description: "Nota de lançamento da v1.7.0-beta.1"
---

### 🎉 Novos Recursos

- **[client]** compatibilidade com configurações históricas de controle de acesso a botões ([#6376](https://github.com/nocobase/nocobase/pull/6376)) por @katherinehhh

- **[Workflow: Evento pós-ação]** Suporte ao uso do nó final para determinar o status ([#6399](https://github.com/nocobase/nocobase/pull/6399)) por @mytharcher

- **[Workflow: Mensagem de resposta]** Suporte para uso em gatilho de ação por @mytharcher

### 🚀 Melhorias

- **[Workflow]** Corrigir API 401 quando não estiver logado ([#6412](https://github.com/nocobase/nocobase/pull/6412)) por @mytharcher

- **[Workflow: Nó manual]** Ajustar UI do centro de tarefas do workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) por @mytharcher

- **[Gerenciador de e-mail]** Usar mesma estrutura e estilo de elemento no global para botão da barra de ferramentas por @mytharcher

- **[Workflow: Aprovação]** Ajustar UI do centro de tarefas por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Incapacidade de mover a página para um grupo ([#6413](https://github.com/nocobase/nocobase/pull/6413)) por @zhangzhonghe

  - Menus de nível profundo não exibindo ícone ([#6410](https://github.com/nocobase/nocobase/pull/6410)) por @zhangzhonghe

  - Problema de contexto de tema do FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) por @katherinehhh

- **[Workflow: Nó manual]** Evitar conflito em chave única ([#6407](https://github.com/nocobase/nocobase/pull/6407)) por @mytharcher

- **[Gerenciador de fonte de dados]** erro ao editar campos em fonte de dados externa ([#6402](https://github.com/nocobase/nocobase/pull/6402)) por @katherinehhh

- **[Autenticação]** Usuário sem funções deve redirecionar para página de mensagem de erro. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) por @sheldon66

- **[Workflow: Evento de ação personalizada]** configuração de regra de vinculação ausente para o botão 'Acionar Workflow' por @katherinehhh

- **[Gerenciador de backup]** Dados de chave de criptografia ausentes durante restauração de backup por @gchust

- **[Workflow: Aprovação]** Evitar conflito em chave única por @mytharcher
