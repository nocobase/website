---
title: "NocoBase v2.0.47: Provedor de LLM agora suporta a plataforma Xiaomi MIMO"
description: "Nota de lançamento da v2.0.47"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]** Provedor LLM agora suporta a plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock

### 🚀 Melhorias

- **[flow-engine]** Melhora o comportamento de arrastar blocos em páginas v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) por @zhangzhonghe

- **[Funcionários de IA]** Ajuste na categoria de funcionários de IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock

- **[Workflow: Aprovação]** Marcar modo de exibição de associação carregado do banco como legado por @mytharcher

### 🐛 Correções de Bugs

- **[database]** Corrigido um problema onde filtros de data e hora em fontes de dados externas do SQL Server podiam falhar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile

- **[client]**
  - Preserva valores nulos para dependências de variáveis vazias do escopo de dados em formulários v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx

  - Reexecuta a renderização da coluna JS quando os dados da linha mudam ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx

  - Corrige o problema onde campos do formulário de filtro desaparecem após reabrir um seletor de registro pop-up ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe

  - Corrigido um problema onde células de campo JS em blocos de tabela v2 podiam aparecer em branco após filtrar ou atualizar dados da tabela. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx

- **[flow-engine]** Corrigido um problema onde campos ocultos pelo sistema podiam ser selecionados em variáveis relacionadas a formulários. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust

- **[Ação: Importar registros]** Corrige o problema onde o índice da linha com falha na importação de registros não está correto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher

- **[Bloco: Gantt]** Adiciona uma configuração no bloco Gantt para habilitar arrastar e reagendar. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx

- **[Funcionários de IA]** Corrige erro de integração do deepSeek V4 em funcionários de IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) por @cgyrock

- **[Ação: Exportar registros Pro]** Corrige o problema onde o modo automático não funcionava por @mytharcher

- **[Workflow: Aprovação]**
  - Corrige erro de tipo por @mytharcher

  - Corrige o tempo de execução da aprovação para que `latestExecutionId` seja sincronizado após o commit da aprovação por @mytharcher
