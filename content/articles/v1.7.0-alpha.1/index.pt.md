---
title: "NocoBase v1.7.0-alpha.1: Suporte para usar nó final para determinar status"
description: "Nota de lançamento da v1.7.0-alpha.1"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Evento pós-ação]** Suporte para usar o nó final para determinar o status ([#6399](https://github.com/nocobase/nocobase/pull/6399)) por @mytharcher

### 🚀 Melhorias

- **[Workflow]** Corrige erro 401 da API quando não está logado ([#6412](https://github.com/nocobase/nocobase/pull/6412)) por @mytharcher

- **[Gerenciador de e-mail]** Usa a mesma estrutura e estilo de elemento no global para o botão da barra de ferramentas por @mytharcher

- **[Workflow: Aprovação]** Ajusta a interface do centro de tarefas por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Incapacidade de mover a página para dentro de um grupo ([#6413](https://github.com/nocobase/nocobase/pull/6413)) por @zhangzhonghe

  - Menus de nível profundo não estão exibindo ícone ([#6410](https://github.com/nocobase/nocobase/pull/6410)) por @zhangzhonghe

- **[Autenticação]** Usuário sem funções deve redirecionar para página de mensagem de erro. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) por @sheldon66

- **[Workflow: Evento de ação personalizada]** Configuração de regra de vinculação ausente para o botão 'Acionar Workflow' por @katherinehhh

- **[Gerenciador de backup]** Dados da chave de criptografia ausentes durante a restauração do backup por @gchust

- **[Workflow: Aprovação]** Evita conflito na chave única por @mytharcher
