---
title: "NocoBase v2.1.0-beta.25: Adicionar algumas APIs para o NocoBase cli"
description: "Nota de lançamento da v2.1.0-beta.25"
---

### 🎉 Novas Funcionalidades

- **[cli]** Adicionar comando de release na API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) por @Andrew1989Y

- **[undefined]** Adicionar documentação em indonésio e vietnamita. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) por @Molunerfinn

- **[Funcionários de IA]** Provedor LLM agora suporta a plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock

- **[Gerenciador de migração]** Adicionar algumas APIs para nocobase cli por @Andrew1989Y

- **[Gerenciador de backup]** Adicionar algumas APIs para nocobase cli por @Andrew1989Y

### 🚀 Melhorias

- **[undefined]**
  - - ([#9349](https://github.com/nocobase/nocobase/pull/9349)) por @Molunerfinn

  - Alinhar documentação em espanhol, português, russo e alemão com a fonte em inglês. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) por @Molunerfinn

  - Sincronizar documentação em francês com a fonte em chinês. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) por @Molunerfinn

- **[IdP: OAuth]** Sessões OAuth agora usam as mesmas configurações de expiração da política de token do sistema ([#9345](https://github.com/nocobase/nocobase/pull/9345)) por @2013xile

- **[Bloco: Kanban]**
  - Reduzida a largura padrão da coluna kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) por @jiannx

  - Melhoradas as configurações de criação de blocos de Calendário e Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) por @jiannx

- **[Funcionários de IA]** Ajuste de categoria de funcionário de IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock

- **[Fluxo de trabalho: Aprovação]** Marcar modo de exibição de associação carregado do banco de dados como legado por @mytharcher

### 🐛 Correções de Bugs

- **[undefined]**
  - Corrigir o fluxo de trabalho de dependência e build para que falhas no checkout de plugins pro independentes interrompam o CI em vez de pular silenciosamente a cobertura de build. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) por @Molunerfinn

  - Corrigir arquivos de tradução inchados e alinhar a estrutura da documentação entre idiomas. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) por @Molunerfinn

- **[cli]** Corrigidas opções booleanas do CLI para que possam ser desabilitadas com flags negadas ([#9337](https://github.com/nocobase/nocobase/pull/9337)) por @2013xile

- **[client-v2]**
  - Corrigido o carregamento de plugins remotos para que URLs de plugin que já terminam com `.js` não sejam resolvidos para caminhos duplicados `.js.js`. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) por @Molunerfinn

  - Corrigir o problema onde `RemoteSelect` não renderizava na configuração de fluxo de trabalho vinculado ([#9314](https://github.com/nocobase/nocobase/pull/9314)) por @mytharcher

- **[ai]** Corrigir configuração de campo de categoria ausente durante o registro de funcionário de IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) por @cgyrock

- **[flow-engine]** Corrigido um problema onde campos ocultos pelo sistema podiam ser selecionados em variáveis relacionadas a formulários. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust

- **[client]**
  - Corrigido um problema onde células de campo JS em blocos de tabela v2 podiam aparecer em branco após filtrar ou atualizar dados da tabela. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx

  - Preservar valores nulos para dependências de variáveis de escopo de dados vazias em formulários v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx

  - Corrigir o problema onde campos de formulário de filtro desaparecem após reabrir um seletor de registro popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe

  - Reexecutar renderização de coluna JS quando os dados da linha mudam ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx

- **[database]** Corrigido um problema onde filtros de data e hora de fonte de dados externa do SQL Server podiam falhar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile

- **[Funcionários de IA]**
  - Corrigir o problema de erros ocasionais quando o funcionário de IA usa o modelo DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) por @cgyrock

  - Corrigir o problema onde o nó de funcionário de IA do fluxo de trabalho limpa habilidades após trocar de funcionários de IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) por @cgyrock

  - Corrigir o problema onde a lista de funcionários de IA do botão de ação exibe funcionários desenvolvedores ([#9320](https://github.com/nocobase/nocobase/pull/9320)) por @cgyrock

- **[Fonte de dados: Principal]** Evitar travamento quando campos estão indefinidos durante o carregamento da coleção ([#9174](https://github.com/nocobase/nocobase/pull/9174)) por @saraTabbane

- **[Modelos de UI]** Corrigido um problema onde a lista de modelos popup falhava ao carregar corretamente os modelos disponíveis. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) por @gchust

- **[Gerenciador de arquivos]** Melhorado o tratamento de erros de download de arquivo de pré-visualização ([#9103](https://github.com/nocobase/nocobase/pull/9103)) por @gaston98765

- **[Bloco: Árvore]** Corrigir a exibição anormal dos nós do bloco de filtro ([#9260](https://github.com/nocobase/nocobase/pull/9260)) por @jiannx

- **[Bloco: Gantt]** Adicionar uma configuração de bloco Gantt para habilitar arrastar para reagendar. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx

- **[Bloco: Kanban]** Corrigida exibição repetida da camada flutuante de configuração de campo ([#9271](https://github.com/nocobase/nocobase/pull/9271)) por @jiannx

- **[Ação: Importar registros]** Corrigir o problema onde o índice de linha com falha na importação de registros não está correto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher

- **[Ação: Exportar registros Pro]** Corrigir o problema onde o modo automático não funciona por @mytharcher

- **[Gerenciador de migração]** Corrigir `migration:create` retornando `taskId` do registro de tarefa assíncrona. por @Andrew1989Y

- **[Fluxo de trabalho: Aprovação]**
  - Corrigir o problema onde parâmetros de consulta como filtro agora funcionam na API de listagem de fluxos de trabalho de aprovação disponíveis por @mytharcher

  - Corrigir o problema onde arquivo no aplicativo original não é recarregado por @mytharcher

  - Corrigir erro de tipo por @mytharcher

  - Suportar a análise de algumas variáveis do cliente em ações de aprovação por @mytharcher

  - Corrigir o tempo de execução da aprovação para que `latestExecutionId` seja sincronizado após o commit da aprovação por @mytharcher
