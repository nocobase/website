---
title: "NocoBase v1.6.6: Suporte a campos de texto longo como campos de título para campo de associação"
description: "Nota de lançamento da v1.6.6"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte a campos de texto longo como campos de título para campos de associação ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh

- **[Workflow: Nó de Agregação]** Suporte para configurar precisão do resultado da agregação ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

### 🚀 Melhorias

- **[Armazenamento de arquivos: S3(Pro)]** Alterado o texto 'Access URL Base' para 'Base URL' por @zhangzhonghe

### 🐛 Correções de Bugs

- **[Avaliadores]** Reverter arredondamento de casas decimais para 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher

- **[Gerenciador de arquivos]** Codificar URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos

- **[Fonte de dados: Principal]** Incapacidade de criar uma view MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie

- **[Workflow]** Corrigir contagem de tarefas legadas após exclusão do workflow ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher

- **[Incorporar NocoBase]** Página exibindo em branco por @zhangzhonghe

- **[Gerenciador de backup]**
  - Arquivos enviados não foram restaurados ao criar sub-aplicativo a partir do template de backup por @gchust

  - Falha na restauração do banco de dados MySQL causada por sobreposição do conjunto GTID por @gchust

- **[Workflow: Aprovação]**
  - Alterar aprovação retornada como pendente por @mytharcher

  - Corrigir botão de ação ausente na tabela de processos por @mytharcher
