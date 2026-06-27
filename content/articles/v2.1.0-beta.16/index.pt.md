---
title: "NocoBase v2.1.0-beta.16: refatoração do CLI do NocoBase"
description: "Nota de lançamento da v2.1.0-beta.16"
---

### 🎉 Novas Funcionalidades

- **[indefinido]** Adiciona um workflow de CI que verifica dependências `plugin-*` peer ausentes e executa o build, com relatório em comentários de PR. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) por @Molunerfinn

- **[cli-v1]** Resolve o caminho de armazenamento a partir de env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) por @chenos

- **[cli]** Refatora o CLI do NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) por @chenos

- **[flow-engine]** Adiciona `getSubclassesOfAsync` ao FlowEngine para descobrir classes de modelo registradas de forma assíncrona através do novo campo `extends` em `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) por @Molunerfinn

- **[Workflow]**
  - Adiciona API para verificar criação de nós ([#9207](https://github.com/nocobase/nocobase/pull/9207)) por @mytharcher

  - Adiciona campo de log para jobs, a fim de exibir o conteúdo de log de alguns nós para depuração ([#9165](https://github.com/nocobase/nocobase/pull/9165)) por @mytharcher

- **[Funcionários de IA]**
  - O workflow adicionou instrução para funcionário de IA ([#9025](https://github.com/nocobase/nocobase/pull/9025)) por @cgyrock

  - Adicionada uma ferramenta de consulta de dados e uma ferramenta de relatório de análise de negócios para funcionários de IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) por @2013xile

  - Adiciona a capacidade de invocar subagentes para funcionários de IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) por @cgyrock

  - Adicionada capacidade SKILLS aos funcionários de IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) por @cgyrock

- **[Auth: Chaves de API]** Adiciona comandos `pm list` e `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) por @chenos

- **[IA: Servidor MCP]**
  - Fornece uma API genérica de consulta de coleção de dados, chamável via MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) por @2013xile

  - Adiciona um novo plugin de servidor MCP para permitir a construção de sistemas NocoBase e suporte a workflows de negócios. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) por @2013xile

- **[Gerenciador de fonte de dados]** Suporta carregamento sob demanda de ferramentas MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) por @2013xile

- **[IdP: OAuth]** Adiciona um novo plugin IdP: OAuth para permitir que serviços MCP autentiquem via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) por @2013xile

### 🚀 Melhorias

- **[cli]**
  - Adicionado rastreamento de origem de requisição CLI nos logs de requisição e logs de auditoria ([#9223](https://github.com/nocobase/nocobase/pull/9223)) por @2013xile

  - Melhorada a saída de ajuda do CLI de API gerado e o agrupamento de comandos ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) por @2013xile

  - Melhorado o fallback de ajuda de `nb api` e unificadas as mensagens de aviso para falhas de inicialização em tempo de execução ([#9153](https://github.com/nocobase/nocobase/pull/9153)) por @2013xile

- **[servidor]** Melhorada a documentação da API Swagger do gerenciador de plugins ([#9080](https://github.com/nocobase/nocobase/pull/9080)) por @2013xile

- **[banco de dados]** Corrigido o comportamento de geração de relatórios de negócios de IA e consulta de dados para evitar saída de gráficos malformados, tratamento incorreto de datetime e falta de cobertura de múltiplas fontes de dados ([#9078](https://github.com/nocobase/nocobase/pull/9078)) por @2013xile

- **[build]**
  - As builds de produção do cliente do aplicativo agora rodam no Rsbuild, e melhorias na criação de perfil de build e agendamento de declarações tornam os gargalos de build mais fáceis de identificar e reduzir. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) por @Molunerfinn

  - Migra o pipeline de build do cliente em `@nocobase/build` do Vite para o Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) por @Molunerfinn

- **[cliente]** Refatora as configurações de layout do admin e a aplicação para modelar a arquitetura do host com salvaguardas de compatibilidade v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) por @zhangzhonghe

- **[flow-engine]**
  - Melhora a validação de schema para a api de construção de ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust

  - Melhora a validação de schema para a api de construção de ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust

- **[app]** Adiciona um workflow de desenvolvimento baseado em Rsbuild para client-v1, mantendo o desenvolvimento local de plugins e a topologia atual `/v2/` compatíveis ([#8902](https://github.com/nocobase/nocobase/pull/8902)) por @Molunerfinn

- **[indefinido]** Adiciona uma entrada dedicada client-v2 e a constrói independentemente com rsbuild, mantendo v1 inalterado. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) por @Molunerfinn

- **[Controle de acesso]** adiciona algumas novas apis para a habilidade acl ([#9198](https://github.com/nocobase/nocobase/pull/9198)) por @Andrew1989Y

- **[Workflow: Evento de ação personalizada]** Adiciona controle ACL de acionamento no modo de registro (único e múltiplo) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) por @mytharcher

- **[Flow engine]** Adiciona novas apis para construção de ui. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) por @gchust

- **[Workflow: Evento de pré-ação]** Adiciona regras de validação para gatilhos e nós ([#8971](https://github.com/nocobase/nocobase/pull/8971)) por @mytharcher

- **[Workflow]** Adiciona validação para todos os gatilhos e nós ([#8930](https://github.com/nocobase/nocobase/pull/8930)) por @mytharcher

- **[Workflow: Webhook]** Adiciona validação para criação de API de gatilho / nó por @mytharcher

- **[Workflow: Subfluxo]** Adiciona validação para criação de API de nó por @mytharcher

- **[Workflow: Aprovação]**
  - Adiciona validação para criação de nó de aprovação por @mytharcher

  - Adiciona validação para API de gatilho / nó por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Alternância de ordenação oculta do campo de relacionamento ([#9220](https://github.com/nocobase/nocobase/pull/9220)) por @jiannx

  - Corrige o problema em que o título da página não é atualizado após alternar menus ([#8864](https://github.com/nocobase/nocobase/pull/8864)) por @zhangzhonghe

- **[cli]** Corrigidas falhas de login OAuth do CLI no Windows causadas por URLs de autorização longas ([#9159](https://github.com/nocobase/nocobase/pull/9159)) por @2013xile

- **[teste]** Corrigidas as builds de plugins para que dependências do servidor com nomes de pacotes com ponto, como `big.js`, sejam empacotadas em `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) por @Molunerfinn

- **[servidor]** Suporta obter o aplicativo alvo pelo hostname ([#8978](https://github.com/nocobase/nocobase/pull/8978)) por @2013xile

- **[Workflow: Nó de agregação]** Corrige o problema em que o nó de agregação não podia ser salvo devido a regra de validação incorreta ([#9208](https://github.com/nocobase/nocobase/pull/9208)) por @mytharcher

- **[Funcionários de IA]**
  - Corrige anomalias de gravação de log na instrução do funcionário de IA ([#9180](https://github.com/nocobase/nocobase/pull/9180)) por @cgyrock

  - Corrigida ordenação de consulta agregada descartada pelo ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) por @2013xile

  - Corrigido o problema em que mensagens de erro não eram exibidas nas conversas dos funcionários de IA ([#9097](https://github.com/nocobase/nocobase/pull/9097)) por @cgyrock

  - Corrige o problema em que os funcionários de IA não conseguiam usar habilidades ([#9023](https://github.com/nocobase/nocobase/pull/9023)) por @cgyrock

  - Corrige o problema em que o LLM ainda tenta carregar habilidades após a ferramenta getSkill ser desabilitada ([#9013](https://github.com/nocobase/nocobase/pull/9013)) por @cgyrock

  - Corrige casos de teste com falha no módulo de IA do pacote core. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) por @cgyrock

- **[Workflow: JavaScript]** Corrige o problema em que um erro é lançado ao configurar o nó JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) por @mytharcher

- **[IdP: OAuth]**
  - Corrigidas falhas de registro de cliente OAuth e atualização de token após reinicialização do serviço ([#9139](https://github.com/nocobase/nocobase/pull/9139)) por @2013xile

  - Corrigido o acesso OAuth para requisições regulares de API ([#9120](https://github.com/nocobase/nocobase/pull/9120)) por @2013xile

  - Corrigido redirecionamento incorreto após login OAuth MCP em subaplicações ([#9015](https://github.com/nocobase/nocobase/pull/9015)) por @2013xile

- **[Workflow: Nó de loop]** Corrige validações de nós de workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) por @mytharcher

- **[Controle de acesso]** atualiza o swagger do acl para o servidor mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) por @Andrew1989Y

- **[Workflow: nó de e-mail]** Corrige validação para campos de variável ([#9047](https://github.com/nocobase/nocobase/pull/9047)) por @mytharcher

- **[Workflow]**
  - Corrige regra de validação incorreta da instrução de condição ([#9017](https://github.com/nocobase/nocobase/pull/9017)) por @mytharcher

  - Corrige o problema em que o modo do gatilho de coleção não podia ser definido como "criar ou atualizar" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) por @mytharcher

- **[Gerenciador de fonte de dados]** Otimizada a nomenclatura de ferramentas MCP e reduzidas respostas de API redundantes para evitar consumo excessivo de contexto de conversa de IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) por @2013xile

- **[IA: Servidor MCP]**
  - Corrigidas ferramentas MCP geradas a partir do Swagger quando os schemas de entrada incluem tipos `null` ou marcadores `nullable` que são inválidos para a validação de ferramentas OpenAI ([#8994](https://github.com/nocobase/nocobase/pull/8994)) por @2013xile

  - Corrigidas incompatibilidades de autenticação causadas por cabeçalhos encaminhados não relacionados na ferramenta CRUD genérica do MCP ([#8983](https://github.com/nocobase/nocobase/pull/8983)) por @2013xile
