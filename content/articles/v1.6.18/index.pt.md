---
title: "NocoBase v1.6.18: Suporte para usar variável para duração"
description: "Nota de lançamento da v1.6.18"
---

### 🚀 Melhorias

- **[client]**
  - Adicionar API de fallback de tipo padrão para `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) por @mytharcher

  - Otimizar prompts para páginas não configuradas ([#6641](https://github.com/nocobase/nocobase/pull/6641)) por @zhangzhonghe

- **[Workflow: Nó de atraso]** Suporte para usar variável como duração ([#6621](https://github.com/nocobase/nocobase/pull/6621)) por @mytharcher

- **[Workflow: Evento de ação personalizada]** Adicionar configurações de atualização para o botão de acionamento do workflow por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Sobreposição da descrição da subtabela com o botão "Adicionar novo" ([#6646](https://github.com/nocobase/nocobase/pull/6646)) por @katherinehhh

  - Sublinhado tracejado causado pelo layout de formulário horizontal em modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) por @katherinehhh

- **[Armazenamento de arquivos: S3(Pro)]** Corrigir falta de await na próxima chamada. por @jiannx

- **[Gerenciador de e-mail]** Corrigir falta de await na próxima chamada. por @jiannx
