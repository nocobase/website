---
title: "NocoBase v2.1.0-alpha.27: Funcionários de IA podem pesquisar documentação agrupada com comandos Bash"
description: "Nota de lançamento da v2.1.0-alpha.27"
---

### 🎉 Novas Funcionalidades

- **[cli]** Adicionar comando de release na API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) por @Andrew1989Y

- **[undefined]** Adicionar documentação em indonésio e vietnamita. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) por @Molunerfinn

- **[server]** Funcionários de IA podem pesquisar documentação agrupada com comandos Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) por @2013xile

- **[Funcionários de IA]** Provedor LLM agora suporta a plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock

- **[Gerenciador de migração]** Adicionar algumas APIs para nocobase cli por @Andrew1989Y

- **[Gerenciador de backup]** Adicionar algumas APIs para nocobase cli por @Andrew1989Y

### 🚀 Melhorias

- **[flow-engine]** Melhorar comportamento de arrastar blocos em páginas v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) por @zhangzhonghe

- **[undefined]**
  - Alinhar documentação em espanhol, português, russo e alemão com a fonte em inglês. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) por @Molunerfinn

  - Sincronizar documentação em francês com a fonte em chinês. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) por @Molunerfinn

- **[Funcionários de IA]**
  - Ferramentas de edição RunJS do Nathan melhoradas e redução de lag durante longas conversas de chat com IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) por @2013xile

  - Ajuste de categoria de funcionários de IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock

- **[Bloco: Kanban]**
  - Reduzida a largura padrão da coluna kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) por @jiannx

  - Configurações de criação de blocos de Calendário e Kanban melhoradas. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) por @jiannx

- **[Fluxo de trabalho: Aprovação]** Marcar modo de exibição de associação carregado do banco de dados como legado por @mytharcher

### 🐛 Correções de Bugs

- **[undefined]**
  - Corrigir o fluxo de trabalho de dependência e build para que falhas no checkout de plugins pro independentes quebrem o CI em vez de pular silenciosamente a cobertura de build. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) por @Molunerfinn

  - Corrigir arquivos de tradução inchados e alinhar estrutura de documentação multilíngue. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) por @Molunerfinn

- **[client-v2]** Corrigir o problema onde `RemoteSelect` não renderizava na configuração de fluxo de trabalho vinculado ([#9314](https://github.com/nocobase/nocobase/pull/9314)) por @mytharcher

- **[flow-engine]** Corrigido um problema onde campos ocultos pelo sistema podiam ser selecionados em variáveis relacionadas a formulários. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust

- **[ai]** Corrigir configuração de campo de categoria ausente durante registro de funcionário de IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) por @cgyrock

- **[client]**
  - Corrigido um problema onde células de campo JS em blocos de tabela v2 podiam aparecer em branco após filtrar ou atualizar dados da tabela. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx

  - Corrigir o problema onde campos de formulário de filtro desaparecem após reabrir um seletor de registro popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe

  - Preservar valores nulos para dependências de variáveis de escopo de dados vazias em formulários v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx

  - Reexecutar renderização de coluna JS quando dados da linha mudam ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx

- **[database]** Corrigido um problema onde filtros de data/hora de fonte de dados externa do SQL Server podiam falhar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile

- **[Funcionários de IA]**
  - Corrigir o problema onde a lista de funcionários de IA do botão de ação exibe funcionários desenvolvedores ([#9320](https://github.com/nocobase/nocobase/pull/9320)) por @cgyrock

  - Corrigir erro de integração deepSeek V4 do funcionário de IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) por @cgyrock

- **[Bloco: Gantt]** Adicionar uma configuração de bloco Gantt para habilitar arrastar para reagendar. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx

- **[Bloco: Árvore]** Corrigir a exibição anormal de nós de bloco de filtro ([#9260](https://github.com/nocobase/nocobase/pull/9260)) por @jiannx

- **[Ação: Importar registros]** Corrigir o problema onde o índice de linha com falha na importação de registros não está correto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher

- **[Bloco: Kanban]** Corrigida exibição repetida da camada flutuante de configuração de campo ([#9271](https://github.com/nocobase/nocobase/pull/9271)) por @jiannx

- **[Ação: Exportar registros Pro]** Corrigir o problema onde o modo automático não funciona por @mytharcher

- **[Gerenciador de migração]** Corrigir `migration:create` retornando `taskId` do registro de tarefa assíncrona. por @Andrew1989Y

- **[Fluxo de trabalho: Aprovação]**
  - Corrigir tempo de execução de aprovação para que `latestExecutionId` seja sincronizado após commit de aprovação por @mytharcher

  - Corrigir erro de tipo por @mytharcher
