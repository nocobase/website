---
title: "Atualizações Semanais｜Adicionar algumas APIs para o NocoBase cli"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 30 de abril a 7 de maio de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.49](https://www.nocobase.com/en/blog/v2.0.49)

*Data de lançamento: 06/05/2026*

### 🚀 Melhorias

- **[indefinido]** Adicionar notificação de falha do Feishu para fluxos de trabalho de lançamento manual ([#9349](https://github.com/nocobase/nocobase/pull/9349)) por @Molunerfinn

### 🐛 Correções de Bugs

- **[Fonte de dados: Principal]** Evitar travamento quando campos são indefinidos durante o carregamento da coleção ([#9174](https://github.com/nocobase/nocobase/pull/9174)) por @saraTabbane
- **[Modelos de UI]** Corrigido um problema onde a lista de modelos pop-up falhava ao carregar corretamente os modelos disponíveis. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) por @gchust
- **[Funcionários de IA]** Corrigir o problema de erros ocasionais quando o funcionário de IA usa o modelo DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) por @cgyrock
- **[Gerenciador de arquivos]** Melhorado o tratamento de erros no download de arquivos de pré-visualização ([#9103](https://github.com/nocobase/nocobase/pull/9103)) por @gaston98765
- **[Fluxo de trabalho: Aprovação]** Corrigir o problema onde o filtro e outros parâmetros de consulta agora funcionam na API de listagem de fluxos de trabalho de aprovação disponíveis por @mytharcher

### [v2.0.48](https://www.nocobase.com/en/blog/v2.0.48)

*Data de lançamento: 04/05/2026*

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Corrigir o problema onde a lista de funcionários de IA do botão de ação exibe funcionários desenvolvedores ([#9320](https://github.com/nocobase/nocobase/pull/9320)) por @cgyrock
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir o problema onde o arquivo no aplicativo original não era recarregado por @mytharcher
  - Suporte para analisar algumas variáveis do cliente em ações de aprovação por @mytharcher

### [v2.0.47](https://www.nocobase.com/en/blog/v2.0.47)

*Data de lançamento: 01/05/2026*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Provedor LLM agora suporta a plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock

### 🚀 Melhorias

- **[mecanismo de fluxo]** Melhorar o comportamento do layout de arrastar blocos em páginas v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) por @zhangzhonghe
- **[Funcionários de IA]** Ajuste de categoria de funcionário de IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock
- **[Fluxo de trabalho: Aprovação]** Marcar o modo de exibição de associação carregado do BD como legado por @mytharcher

### 🐛 Correções de Bugs

- **[banco de dados]** Corrigido um problema onde os filtros de data e hora da fonte de dados externa do SQL Server podiam falhar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile
- **[cliente]**

  - Preservar valores nulos para dependências de variáveis de escopo de dados vazias em formulários v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx
  - Reexecutar a renderização da coluna JS quando os dados da linha mudam ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx
  - Corrigir o problema onde os campos do formulário de filtro desaparecem após reabrir um seletor de registro pop-up ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe
  - Corrigido um problema onde as células do campo JS em blocos de tabela v2 podiam aparecer em branco após filtrar ou atualizar os dados da tabela. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx
- **[mecanismo de fluxo]** Corrigido um problema onde campos ocultos do sistema podiam ser selecionados em variáveis relacionadas a formulários. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust
- **[Ação: Importar registros]** Corrigir o problema onde o índice da linha com falha na importação de registros não está correto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher
- **[Bloco: Gantt]** Adicionar uma configuração de bloco Gantt para habilitar arrastar para reagendar. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx
- **[Funcionários de IA]** Corrigir erro de integração do DeepSeek V4 do funcionário de IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) por @cgyrock
- **[Ação: Exportar registros Pro]** Corrigir o problema onde o modo automático não funciona por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir erro de tipo por @mytharcher
  - Corrigir o tempo de execução da aprovação para que `latestExecutionId` seja sincronizado após o commit da aprovação por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.25](https://www.nocobase.com/en/blog/v2.1.0-beta.25)

*Data de lançamento: 06/05/2026*

### 🎉 Novos Recursos

- **[cli]** Adicionar comando de lançamento na API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) por @Andrew1989Y
- **[indefinido]** Adicionar documentação em indonésio e vietnamita. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) por @Molunerfinn
- **[Funcionários de IA]** Provedor LLM agora suporta a plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock
- **[Gerenciador de migração]** Adicionar algumas APIs para nocobase cli por @Andrew1989Y
- **[Gerenciador de backup]** Adicionar algumas APIs para nocobase cli por @Andrew1989Y

### 🚀 Melhorias

- **[indefinido]**

  - Adicionar notificação de falha do Feishu para fluxos de trabalho de lançamento manual([#9349](https://github.com/nocobase/nocobase/pull/9349)) por @Molunerfinn
  - Alinhar a documentação em espanhol, português, russo e alemão com a fonte em inglês. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) por @Molunerfinn
  - Sincronizar a documentação em francês com a fonte em chinês. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) por @Molunerfinn
- **[IdP: OAuth]** As sessões OAuth agora usam as mesmas configurações de expiração da política de token do sistema ([#9345](https://github.com/nocobase/nocobase/pull/9345)) por @2013xile
- **[Bloco: Kanban]**

  - Reduzida a largura padrão da coluna kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) por @jiannx
  - Melhoradas as configurações de criação de blocos de Calendário e Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) por @jiannx
- **[Funcionários de IA]** Ajuste de categoria de funcionário de IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock
- **[Fluxo de trabalho: Aprovação]** Marcar o modo de exibição de associação carregado do BD como legado por @mytharcher

### 🐛 Correções de Bugs

- **[indefinido]**

  - Corrigir o fluxo de trabalho de dependência e construção para que falhas no checkout de plugins pro independentes quebrem o CI em vez de pular silenciosamente a cobertura de construção. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) por @Molunerfinn
  - Corrigir arquivos de tradução inchados e alinhar a estrutura da documentação entre idiomas. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) por @Molunerfinn
- **[cli]** Corrigidas opções booleanas do CLI para que possam ser desabilitadas com flags negadas ([#9337](https://github.com/nocobase/nocobase/pull/9337)) por @2013xile
- **[client-v2]**

  - Corrigido o carregamento de plugins remotos para que URLs de plugin que já terminam com `.js` não sejam resolvidos para caminhos `.js.js` duplicados. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) por @Molunerfinn
  - Corrigir o problema onde `RemoteSelect` não renderizava na configuração do fluxo de trabalho vinculado ([#9314](https://github.com/nocobase/nocobase/pull/9314)) por @mytharcher
- **[ai]** Corrigir a configuração de campo de categoria ausente durante o registro do funcionário de IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) por @cgyrock
- **[mecanismo de fluxo]** Corrigido um problema onde campos ocultos do sistema podiam ser selecionados em variáveis relacionadas a formulários. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust
- **[cliente]**

  - Corrigido um problema onde as células do campo JS em blocos de tabela v2 podiam aparecer em branco após filtrar ou atualizar os dados da tabela. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx
  - Preservar valores nulos para dependências de variáveis de escopo de dados vazias em formulários v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx
  - Corrigir o problema onde os campos do formulário de filtro desaparecem após reabrir um seletor de registro pop-up ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe
  - Reexecutar a renderização da coluna JS quando os dados da linha mudam ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx
- **[banco de dados]** Corrigido um problema onde os filtros de data e hora da fonte de dados externa do SQL Server podiam falhar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile
- **[Funcionários de IA]**

  - Corrigir o problema de erros ocasionais quando o funcionário de IA usa o modelo DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) por @cgyrock
  - Corrigir o problema onde o nó de funcionário de IA do fluxo de trabalho limpa as habilidades após trocar de funcionários de IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) por @cgyrock
  - Corrigir o problema onde a lista de funcionários de IA do botão de ação exibe funcionários desenvolvedores ([#9320](https://github.com/nocobase/nocobase/pull/9320)) por @cgyrock
- **[Fonte de dados: Principal]** Evitar travamento quando campos são indefinidos durante o carregamento da coleção ([#9174](https://github.com/nocobase/nocobase/pull/9174)) por @saraTabbane
- **[Modelos de UI]** Corrigido um problema onde a lista de modelos pop-up falhava ao carregar corretamente os modelos disponíveis. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) por @gchust
- **[Gerenciador de arquivos]** Melhorado o tratamento de erros no download de arquivos de pré-visualização ([#9103](https://github.com/nocobase/nocobase/pull/9103)) por @gaston98765
- **[Bloco: Árvore]** Corrigir a exibição anormal dos nós do bloco de filtro ([#9260](https://github.com/nocobase/nocobase/pull/9260)) por @jiannx
- **[Bloco: Gantt]** Adicionar uma configuração de bloco Gantt para habilitar arrastar para reagendar. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx
- **[Bloco: Kanban]** Corrigida a exibição repetida da camada flutuante de configuração de campo ([#9271](https://github.com/nocobase/nocobase/pull/9271)) por @jiannx
- **[Ação: Importar registros]** Corrigir o problema onde o índice da linha com falha na importação de registros não está correto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher
- **[Ação: Exportar registros Pro]** Corrigir o problema onde o modo automático não funciona por @mytharcher
- **[Gerenciador de migração]** Corrigir `migration:create` retornando `taskId` do registro de tarefa assíncrona. por @Andrew1989Y
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir o problema onde o filtro e outros parâmetros de consulta agora funcionam na API de listagem de fluxos de trabalho de aprovação disponíveis por @mytharcher
  - Corrigir o problema onde o arquivo no aplicativo original não era recarregado por @mytharcher
  - Corrigir erro de tipo por @mytharcher
  - Suporte para analisar algumas variáveis do cliente em ações de aprovação por @mytharcher
  - Corrigir o tempo de execução da aprovação para que `latestExecutionId` seja sincronizado após o commit da aprovação por @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.30](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Data de lançamento: 06/05/2026*

### 🚀 Melhorias

- **[indefinido]** Adicionar notificação de falha do Feishu para fluxos de trabalho de lançamento manual ([#9349](https://github.com/nocobase/nocobase/pull/9349)) por @Molunerfinn
- **[IdP: OAuth]** As sessões OAuth agora usam as mesmas configurações de expiração da política de token do sistema ([#9345](https://github.com/nocobase/nocobase/pull/9345)) por @2013xile

### 🐛 Correções de Bugs

- **[client-v2]** Corrigido o carregamento de plugins remotos para que URLs de plugin que já terminam com `.js` não sejam resolvidos para caminhos `.js.js` duplicados. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) por @Molunerfinn
- **[cli]** Corrigidas opções booleanas do CLI para que possam ser desabilitadas com flags negadas ([#9337](https://github.com/nocobase/nocobase/pull/9337)) por @2013xile
- **[Funcionários de IA]**

  - Corrigir o problema de erros ocasionais quando o funcionário de IA usa o modelo DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) por @cgyrock
  - Corrigir o problema onde o nó de funcionário de IA do fluxo de trabalho limpa as habilidades após trocar de funcionários de IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) por @cgyrock
- **[Fonte de dados: Principal]** Evitar travamento quando campos são indefinidos durante o carregamento da coleção ([#9174](https://github.com/nocobase/nocobase/pull/9174)) por @saraTabbane
- **[Modelos de UI]** Corrigido um problema onde a lista de modelos pop-up falhava ao carregar corretamente os modelos disponíveis. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) por @gchust
- **[Bloco: Kanban]** Corrigidos blocos associados kanban usando parâmetros de recurso de tempo de execução não resolvidos em contextos pop-up ou de página secundária. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrigir o problema onde o filtro e outros parâmetros de consulta agora funcionam na API de listagem de fluxos de trabalho de aprovação disponíveis por @mytharcher

### [v2.1.0-alpha.29](https://www.nocobase.com/en/blog/v2.1.0-alpha.29)

*Data de lançamento: 04/05/2026*

### 🐛 Correções de Bugs

- **[Gerenciador de arquivos]** Melhorado o tratamento de erros no download de arquivos de pré-visualização ([#9103](https://github.com/nocobase/nocobase/pull/9103)) por @gaston98765
- **[Fluxo de trabalho: Aprovação]** Suporte para analisar algumas variáveis do cliente em ações de aprovação por @mytharcher

### [v2.1.0-alpha.28](https://www.nocobase.com/en/blog/v2.1.0-alpha.28)

*Data de lançamento: 04/05/2026*

### 🐛 Correções de Bugs

- **[Fluxo de trabalho: Aprovação]** Corrigir o problema onde o arquivo no aplicativo original não era recarregado por @mytharcher

### [v2.1.0-alpha.27](https://www.nocobase.com/en/blog/v2.1.0-alpha.27)

*Data de lançamento: 03/05/2026*

### 🎉 Novos Recursos

- **[cli]** Adicionar comando de lançamento na API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) por @Andrew1989Y
- **[indefinido]** Adicionar documentação em indonésio e vietnamita. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) por @Molunerfinn
- **[servidor]** Funcionários de IA podem pesquisar documentação agrupada com comandos Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) por @2013xile
- **[Funcionários de IA]** Provedor LLM agora suporta a plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock
- **[Gerenciador de migração]** Adicionar algumas APIs para nocobase cli por @Andrew1989Y
- **[Gerenciador de backup]** Adicionar algumas APIs para nocobase cli por @Andrew1989Y

### 🚀 Melhorias

- **[mecanismo de fluxo]** Melhorar o comportamento do layout de arrastar blocos em páginas v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) por @zhangzhonghe
- **[indefinido]**

  - Alinhar a documentação em espanhol, português, russo e alemão com a fonte em inglês. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) por @Molunerfinn
  - Sincronizar a documentação em francês com a fonte em chinês. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) por @Molunerfinn
- **[Funcionários de IA]**

  - Melhoradas as ferramentas de edição RunJS do Nathan e reduzida a latência durante longas conversas de chat de IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) por @2013xile
  - Ajuste de categoria de funcionário de IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock
- **[Bloco: Kanban]**

  - Reduzida a largura padrão da coluna kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) por @jiannx
  - Melhoradas as configurações de criação de blocos de Calendário e Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) por @jiannx
- **[Fluxo de trabalho: Aprovação]** Marcar o modo de exibição de associação carregado do BD como legado por @mytharcher

### 🐛 Correções de Bugs

- **[indefinido]**

  - Corrigir o fluxo de trabalho de dependência e construção para que falhas no checkout de plugins pro independentes quebrem o CI em vez de pular silenciosamente a cobertura de construção. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) por @Molunerfinn
  - Corrigir arquivos de tradução inchados e alinhar a estrutura da documentação entre idiomas. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) por @Molunerfinn
- **[client-v2]** Corrigir o problema onde `RemoteSelect` não renderizava na configuração do fluxo de trabalho vinculado ([#9314](https://github.com/nocobase/nocobase/pull/9314)) por @mytharcher
- **[mecanismo de fluxo]** Corrigido um problema onde campos ocultos do sistema podiam ser selecionados em variáveis relacionadas a formulários. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust
- **[ai]** Corrigir a configuração de campo de categoria ausente durante o registro do funcionário de IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) por @cgyrock
- **[cliente]**

  - Corrigido um problema onde as células do campo JS em blocos de tabela v2 podiam aparecer em branco após filtrar ou atualizar os dados da tabela. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx
  - Corrigir o problema onde os campos do formulário de filtro desaparecem após reabrir um seletor de registro pop-up ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe
  - Preservar valores nulos para dependências de variáveis de escopo de dados vazias em formulários v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx
  - Reexecutar a renderização da coluna JS quando os dados da linha mudam ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx
- **[banco de dados]** Corrigido um problema onde os filtros de data e hora da fonte de dados externa do SQL Server podiam falhar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile
- **[Funcionários de IA]**

  - Corrigir o problema onde a lista de funcionários de IA do botão de ação exibe funcionários desenvolvedores ([#9320](https://github.com/nocobase/nocobase/pull/9320)) por @cgyrock
  - Corrigir erro de integração do DeepSeek V4 do funcionário de IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) por @cgyrock
- **[Bloco: Gantt]** Adicionar uma configuração de bloco Gantt para habilitar arrastar para reagendar. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx
- **[Bloco: Árvore]** Corrigir a exibição anormal dos nós do bloco de filtro ([#9260](https://github.com/nocobase/nocobase/pull/9260)) por @jiannx
- **[Ação: Importar registros]** Corrigir o problema onde o índice da linha com falha na importação de registros não está correto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher
- **[Bloco: Kanban]** Corrigida a exibição repetida da camada flutuante de configuração de campo ([#9271](https://github.com/nocobase/nocobase/pull/9271)) por @jiannx
- **[Ação: Exportar registros Pro]** Corrigir o problema onde o modo automático não funciona por @mytharcher
- **[Gerenciador de migração]** Corrigir `migration:create` retornando `taskId` do registro de tarefa assíncrona. por @Andrew1989Y
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir o tempo de execução da aprovação para que `latestExecutionId` seja sincronizado após o commit da aprovação por @mytharcher
  - Corrigir erro de tipo por @mytharcher
