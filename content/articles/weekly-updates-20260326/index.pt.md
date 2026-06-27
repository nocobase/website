---
title: "Atualizações Semanais｜Adicionada capacidade SKILLS aos funcionários de IA"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 20 a 26 de março de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.26](https://www.nocobase.com/en/blog/v2.0.26)

*Data de lançamento: 25/03/2026*

### 🚀 Melhorias

- **[client]** Otimizar o layout horizontal das ações do formulário ([#8869](https://github.com/nocobase/nocobase/pull/8869)) por @jiannx

### 🐛 Correções de Bugs

- **[flow-engine]** Sincronizar status para a configuração do campo quando o campo do formulário é excluído ([#8857](https://github.com/nocobase/nocobase/pull/8857)) por @jiannx
- **[Variáveis personalizadas]** pular notificação de autenticação ([#8942](https://github.com/nocobase/nocobase/pull/8942)) por @chenos

### [v2.0.25](https://www.nocobase.com/en/blog/v2.0.25)

*Data de lançamento: 24/03/2026*

### 🚀 Melhorias

- **[Workflow: Aprovação]** Corrigir problema de desempenho causado pelo campo JSON ao carregar a lista de registros de aprovação por @mytharcher

### 🐛 Correções de Bugs

- **[server]** Alterar o momento de fechamento do Pub-Sub para `beforeStop`, para evitar que mensagens sejam enviadas ou manipuladas após o fechamento do banco de dados ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher
- **[Localização]** impedir solicitação `localizationTexts:missing` na negação de permissão ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos
- **[Fonte de dados: Oracle externo]** Corrigir um erro que ocorre ao carregar a fonte de dados Oracle externa por @2013xile

### [v2.0.24](https://www.nocobase.com/en/blog/v2.0.24)

*Data de lançamento: 22/03/2026*

### 🐛 Correções de Bugs

- **[resourcer]** Corrigir um problema onde fontes de dados externas falham ao carregar corretamente. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) por @2013xile
- **[Ação: Importar registros Pro]** Corrigir o problema onde a opção "Acionar workflow" não funciona quando não está marcada por @mytharcher

### [v2.0.23](https://www.nocobase.com/en/blog/v2.0.23)

*Data de lançamento: 21/03/2026*

### 🐛 Correções de Bugs

- **[database]** Usar aviso em vez de erro quando algum dos parâmetros `appends` for inválido ([#8923](https://github.com/nocobase/nocobase/pull/8923)) por @mytharcher
- **[Workflow: Aprovação]** Corrigir problemas de tradução, seleção de nó e destino de retorno no botão de retorno do formulário de aprovação v2 por @zhangzhonghe

### [v2.0.22](https://www.nocobase.com/en/blog/v2.0.22)

*Data de lançamento: 20/03/2026*

### 🐛 Correções de Bugs

- **[Gerenciador de migração]** Corrigido o problema onde a migração é interrompida devido a um erro causado pelo ambiente de destino não ter a nova tabela criada durante o processo de migração de upload. por @Andrew1989Y

### [v2.0.21](https://www.nocobase.com/en/blog/v2.0.21)

*Data de lançamento: 20/03/2026*

### 🚀 Melhorias

- **[Workflow]** Adicionar lista de filtros de execuções ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher
- **[Workflow: Aprovação]** Evitar configurar a UI dos aprovadores quando nenhuma coleção estiver configurada no gatilho por @mytharcher

### 🐛 Correções de Bugs

- **[resourcer]** Impedir que o array de parâmetros `filterByTk` seja automaticamente convertido em um objeto quando exceder 100 itens ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile
- **[client]** corrigir o problema onde não-administradores não podem limpar valores de campos associados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx
- **[Ação: Importar registros Pro]**

  - Corrigir o problema onde um erro é lançado ao importar no modo síncrono por @mytharcher
  - Corrigir o problema onde colunas com mais de ~30 causam erro de importação, devido ao stream ter sido lido duplicadamente por @mytharcher
- **[Workflow: Aprovação]** Corrigir problema de concorrência ao adicionar responsável por @mytharcher

### [v2.0.20](https://www.nocobase.com/en/blog/v2.0.20)

*Data de lançamento: 19/03/2026*

### 🐛 Correções de Bugs

- **[server]** Corrigir o problema onde eventos do ciclo de vida enviados pelo worker fazem o aplicativo servidor parar ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher
- **[Gerenciador de fonte de dados]** Corrigido problema onde a coleção criada pelo funcionário de IA sempre faltava os campos `createBy` e `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock
- **[Ação: Importar registros Pro]** Corrigir importação lenta causando erro SES por @mytharcher
- **[Impressão de modelo]** Corrigir erro de impressão de coleção SQL por @jiannx
- **[Gerenciador de e-mail]** Corrigido erro de página quando o e-mail não existe por @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.11](https://www.nocobase.com/en/blog/v2.1.0-beta.11)

*Data de lançamento: 20/03/2026*

### 🚀 Melhorias

- **[Workflow]** Adicionar lista de filtros de execuções ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher
- **[Workflow: Aprovação]** Evitar configurar a UI dos aprovadores quando nenhuma coleção estiver configurada no gatilho por @mytharcher

### 🐛 Correções de Bugs

- **[server]** Corrigir o problema onde eventos do ciclo de vida enviados pelo worker fazem o aplicativo servidor parar ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher
- **[client]** corrigir o problema onde não-administradores não podem limpar valores de campos associados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx
- **[resourcer]** Impedir que o array de parâmetros `filterByTk` seja automaticamente convertido em um objeto quando exceder 100 itens ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile
- **[Ação: Importar registros Pro]**

  - Corrigir o problema onde um erro é lançado ao importar no modo síncrono por @mytharcher
  - Corrigir o problema onde colunas com mais de ~30 causam erro de importação, devido ao stream ter sido lido duplicadamente por @mytharcher
- **[Workflow: Aprovação]** Corrigir problema de concorrência ao adicionar responsável por @mytharcher
- **[Gerenciador de migração]** Corrigido o problema onde a migração é interrompida devido a um erro causado pelo ambiente de destino não ter a nova tabela criada durante o processo de migração de upload. por @Andrew1989Y

### [v2.1.0-beta.10](https://www.nocobase.com/en/blog/v2.1.0-beta.10)

*Data de lançamento: 19/03/2026*

### 🎉 Novos Recursos

- **[Funcionários de IA]**

  - Permite adicionar funcionários de IA em popups de subtabelas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile
  - Limpeza programada dos dados de checkpoint de conversa de IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock
- **[Supervisor de aplicativo]** Suporte à filtragem na lista de aplicativos<br />Adicionar diálogos de confirmação para ações de iniciar e parar<br />Ordenar entradas de status do aplicativo por nome do ambiente por @2013xile

### 🚀 Melhorias

- **[server]** melhorar lógica `pm add` ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos
- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) por @gaston98765
- **[client]** Suporte para mostrar mensagem de confirmação antes de fechar o popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust
- **[Workflow]** Corrigir o problema onde o desligamento gracioso não drena todos os eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher
- **[Gerenciador de tarefas assíncronas]** tarefas assíncronas são adicionadas para suportar workers em mensagens de erro de postagem ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido o problema onde o popup “Selecionar registro” na subtabela falhava ao carregar corretamente quando aberto pela segunda vez. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust
  - Corrigido o problema onde os valores padrão de alguns campos não surtiam efeito após atualizar a página. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) por @gchust
- **[database]** Corrigir o problema de validação do lado do servidor para campos de data ([#8867](https://github.com/nocobase/nocobase/pull/8867)) por @2013xile
- **[Gerenciador de fonte de dados]** Corrigido problema onde a coleção criada pelo funcionário de IA sempre faltava os campos `createBy` e `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock
- **[Funcionários de IA]**

  - Corrigir problema com URL especificada para serviço LLM não surtindo efeito em chamadas de modelo de incorporação de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock
  - Corrigidos potenciais erros de variável indefinida em scripts de migração de atualização do plugin de IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock
- **[Localização]** Exceção de permissão de interface `localizationTexts:missing` ([#8861](https://github.com/nocobase/nocobase/pull/8861)) por @jiannx
- **[Ação: Importar registros Pro]**

  - Corrigir evento `beforeStop` no sub aplicativo não disparado por @mytharcher
  - Corrigir importação lenta causando erro SES por @mytharcher
  - Corrigir o problema onde tarefas assíncronas não terminam após um erro ocorrer na importação assíncrona por @cgyrock
- **[IA: Base de conhecimento]** Impedir que o banco de dados vetorial e o armazenamento vetorial em uso sejam excluídos. por @cgyrock
- **[Impressão de modelo]** Corrigir erro de impressão de coleção SQL por @jiannx
- **[Gerenciador de e-mail]** Corrigido erro de página quando o e-mail não existe por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.11](https://www.nocobase.com/en/blog/v2.1.0-alpha.11)

*Data de lançamento: 25/03/2026*

### 🎉 Novos Recursos

- **[client]** adicionar ação de item JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) por @jiannx
- **[Funcionários de IA]** Adicionada capacidade SKILLS aos funcionários de IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) por @cgyrock
- **[Gerenciador de fonte de dados]** Suporte ao carregamento sob demanda de ferramentas MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) por @2013xile

### 🚀 Melhorias

- **[flow-engine]** Melhorar a validação de esquema para a api de construção de UI. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust
- **[client]** Otimizar o layout horizontal das ações do formulário ([#8869](https://github.com/nocobase/nocobase/pull/8869)) por @jiannx
- **[app]** Adicionar um fluxo de trabalho de desenvolvimento baseado em Rsbuild para client-v1, mantendo o desenvolvimento de plugin local e a topologia atual `/v2/` compatível ([#8902](https://github.com/nocobase/nocobase/pull/8902)) por @Molunerfinn
- **[Campo de coleção: divisões administrativas da China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) por @jiannx
- **[Workflow]** Adicionar validação para todos os gatilhos e nós ([#8930](https://github.com/nocobase/nocobase/pull/8930)) por @mytharcher
- **[Workflow: Aprovação]** Corrigir problema de desempenho causado pelo campo JSON ao carregar a lista de registros de aprovação por @mytharcher

### 🐛 Correções de Bugs

- **[flow-engine]** Sincronizar status para a configuração do campo quando o campo do formulário é excluído ([#8857](https://github.com/nocobase/nocobase/pull/8857)) por @jiannx
- **[resourcer]** Corrigir um problema onde fontes de dados externas falham ao carregar corretamente. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) por @2013xile
- **[database]** Usar aviso em vez de erro quando algum dos parâmetros `appends` for inválido ([#8923](https://github.com/nocobase/nocobase/pull/8923)) por @mytharcher
- **[server]** Alterar o momento de fechamento do Pub-Sub para `beforeStop`, para evitar que mensagens sejam enviadas ou manipuladas após o fechamento do banco de dados ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher
- **[Variáveis personalizadas]** pular notificação de autenticação ([#8942](https://github.com/nocobase/nocobase/pull/8942)) por @chenos
- **[Funcionários de IA]** Corrigir casos de teste com falha no módulo de IA do pacote core. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) por @cgyrock
- **[Localização]** impedir solicitação `localizationTexts:missing` na negação de permissão ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos
- **[Ação: Importar registros Pro]** Corrigir o problema onde a opção "Acionar workflow" não funciona quando não está marcada por @mytharcher
- **[Fonte de dados: Oracle externo]** Corrigir um erro que ocorre ao carregar a fonte de dados Oracle externa por @2013xile
- **[Workflow: Aprovação]** Corrigir problemas de tradução, seleção de nó e destino de retorno no botão de retorno do formulário de aprovação v2 por @zhangzhonghe

### [v2.1.0-alpha.10](https://www.nocobase.com/en/blog/v2.1.0-alpha.10)

*Data de lançamento: 20/03/2026*

### 🎉 Novos Recursos

- **[IdP: OAuth]** Adicionar um novo plugin IdP: OAuth para permitir que serviços MCP autentiquem via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) por @2013xile
- **[Funcionários de IA]** Limpeza programada dos dados de checkpoint de conversa de IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock
- **[Supervisor de aplicativo]** Suporte à filtragem na lista de aplicativos<br />Adicionar diálogos de confirmação para ações de iniciar e parar<br />Ordenar entradas de status do aplicativo por nome do ambiente por @2013xile

### 🚀 Melhorias

- **[server]** melhorar lógica `pm add` ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos
- **[client]** Suporte para mostrar mensagem de confirmação antes de fechar o popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust
- **[undefined]** Adicionar uma entrada dedicada client-v2 e construí-la independentemente com rsbuild, mantendo v1 inalterado. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) por @Molunerfinn
- **[Workflow]**

  - Corrigir o problema onde o desligamento gracioso não drena todos os eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher
  - Adicionar lista de filtros de execuções ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher
- **[Gerenciador de tarefas assíncronas]** tarefas assíncronas são adicionadas para suportar workers em mensagens de erro de postagem ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock
- **[Workflow: Aprovação]** Evitar configurar a UI dos aprovadores quando nenhuma coleção estiver configurada no gatilho por @mytharcher

### 🐛 Correções de Bugs

- **[client]**

  - corrigir o problema onde não-administradores não podem limpar valores de campos associados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx
  - Corrigido o problema onde o popup “Selecionar registro” na subtabela falhava ao carregar corretamente quando aberto pela segunda vez. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust
- **[resourcer]** Impedir que o array de parâmetros `filterByTk` seja automaticamente convertido em um objeto quando exceder 100 itens ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile
- **[server]** Corrigir o problema onde eventos do ciclo de vida enviados pelo worker fazem o aplicativo servidor parar ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher
- **[Gerenciador de fonte de dados]** Corrigido problema onde a coleção criada pelo funcionário de IA sempre faltava os campos `createBy` e `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock
- **[Funcionários de IA]**

  - Corrigir problema com URL especificada para serviço LLM não surtindo efeito em chamadas de modelo de incorporação de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock
  - Corrigidos potenciais erros de variável indefinida em scripts de migração de atualização do plugin de IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock
- **[Ação: Importar registros Pro]**

  - Corrigir o problema onde colunas com mais de ~30 causam erro de importação, devido ao stream ter sido lido duplicadamente por @mytharcher
  - Corrigir o problema onde um erro é lançado ao importar no modo síncrono por @mytharcher
  - Corrigir evento `beforeStop` no sub aplicativo não disparado por @mytharcher
  - Corrigir o problema onde tarefas assíncronas não terminam após um erro ocorrer na importação assíncrona por @cgyrock
  - Corrigir importação lenta causando erro SES por @mytharcher
- **[Impressão de modelo]** Corrigir erro de impressão de coleção SQL por @jiannx
- **[Workflow: Aprovação]** Corrigir problema de concorrência ao adicionar responsável por @mytharcher
- **[Gerenciador de e-mail]** Corrigido erro de página quando o e-mail não existe por @jiannx
- **[Gerenciador de migração]** Corrigido o problema onde a migração é interrompida devido a um erro causado pelo ambiente de destino não ter a nova tabela criada durante o processo de migração de upload. por @Andrew1989Y
