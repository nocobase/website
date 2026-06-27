---
title: "NocoBase v1.7.0-beta.6: Suporte para configurar precisão do resultado de agregação"
description: "Nota de lançamento da v1.7.0-beta.6"
---

### 🎉 Novas Funcionalidades

- **[client]** suporte a campos de texto longo como campos de título para campos de associação ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh

- **[Workflow: Nó de Agregação]** Suporte para configurar precisão do resultado da agregação ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

### 🐛 Correções de Bugs

- **[avaliadores]** Reverter casas decimais arredondadas para 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher

- **[Workflow]** Corrigir contagem de tarefas legadas após exclusão do workflow ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher

- **[Fonte de dados: Principal]** Incapacidade de criar uma view MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie

- **[Gerenciador de arquivos]** codificar url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos

- **[Gerenciador de backup]**
  - Falha na restauração do banco de dados MySQL causada por sobreposição do conjunto GTID por @gchust

  - Arquivos enviados não foram restaurados ao criar sub-aplicativo a partir do template de backup por @gchust

- **[Workflow: Aprovação]**
  - Corrigir botão de ação ausente na tabela de processos por @mytharcher

  - Alterar aprovação retornada como pendente por @mytharcher
