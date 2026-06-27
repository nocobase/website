---
title: "NocoBase v2.1.0-alpha.35: Adicione um novo funcionário de IA, a Engenheira de Localização Lina, para auxiliar em tarefas de tradução de localização"
description: "Nota de lançamento da v2.1.0-alpha.35"
---

### 🎉 Novas Funcionalidades

- **[undefined]** Adicionar um novo funcionário de IA, Engenheira de Localização Lina, para auxiliar em tarefas de tradução de localização ([#9434](https://github.com/nocobase/nocobase/pull/9434)) por @2013xile
Referência: [Gerenciamento de Localização](https://docs.nocobase.com/system-management/localization)<br>[Lina: Engenheira de Localização](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Usar Lina e o HY-MT1.5-1.8B local para traduzir entradas de localização](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Calendário]** Adicionado suporte ao cliente v2 para o plugin de Calendário. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) por @jiannx

- **[Bloco: Árvore]** Adicionado suporte ao cliente-v2 para o bloco de filtro em árvore. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) por @jiannx

- **[Armazenamento de arquivos: S3(Pro)]** Suporte para upload de arquivos via armazenamento S3 Pro no gerenciador de arquivos v2. por @Molunerfinn

### 🚀 Melhorias

- **[build]** Adicionada cobertura de regressão para evitar que `deleteServerFiles` remova artefatos de build `client` e `client-v2` em caminhos Windows e POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) por @Molunerfinn

- **[client]** Excluir registros já associados no diálogo de seleção de associação do bloco de tabela um-para-muitos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh

- **[Funcionários de IA]** Interação de conversa paralela e otimização de desempenho para funcionários de IA ([#9462](https://github.com/nocobase/nocobase/pull/9462)) por @cgyrock

- **[Gerenciador de arquivos]** Plugins de armazenamento de terceiros agora podem registrar seu próprio formulário de tipo de armazenamento na página de configurações do gerenciador de arquivos v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) por @Molunerfinn

- **[IA: Base de conhecimento]** O identificador único para uma base de conhecimento é configurável no momento da criação por @cgyrock

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir impedir abertura de edição rápida para campos de associação em tabela ([#9469](https://github.com/nocobase/nocobase/pull/9469)) por @katherinehhh

  - Corrigir campos de seleção múltipla em blocos de dados v2 para exibir rótulos das opções em vez de valores ([#9472](https://github.com/nocobase/nocobase/pull/9472)) por @katherinehhh

  - Corrigir requisições duplicadas de tabela quando formulários de filtro têm valores padrão ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe

  - Corrigido o problema em que configurações de valor padrão legadas não podiam ser removidas. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust

  - Corrigido o problema em que não era possível selecionar opções para o campo de seleção de associação. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust

  - Corrigir o problema em que as configurações do sistema aparecem vazias após o envio ([#9458](https://github.com/nocobase/nocobase/pull/9458)) por @zhangzhonghe

  - Corrigido um problema em que o escopo de dados do bloco de destino era definido incorretamente ao desmarcar dados de linha em um fluxo de evento de bloco de tabela. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust

  - Corrigir erro ao alterar o campo de título do campo de associação no bloco de tabela v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh

  - Corrigidas regras de vinculação V2 para suportar a definição de opções selecionáveis para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx

- **[client-v2]**
  - Manter grupos vazios após filtrar menus v1 no layout v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) por @zhangzhonghe

  - Corrigir o problema em que a página fica em branco atrás do diálogo de ativação de plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) por @zhangzhonghe

  - Corrigir páginas de administração v1 travando quando referenciam módulos de plugin v2 em builds de produção. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) por @Molunerfinn

- **[cli-v1]** Corrigidas falhas de inicialização de desenvolvimento em aplicativos criados com create-nocobase-app causadas pela resolução do caminho do cliente app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) por @Molunerfinn

- **[servidor]** corrigir(gerenciador-de-arquivos): forçar download de arquivos de conteúdo ativo no armazenamento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher

- **[Funcionários de IA]**
  - Corrigido erro de carregamento do plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) por @cgyrock

  - Corrigido teste de voo do Ollama exigindo entrada de chave ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock

- **[Bloco: Formulário multi-etapas]** corrigir problema de barra de rolagem ao ativar altura total no bloco de formulário de etapas v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) por @katherinehhh

- **[Departamentos]** corrigir conflito de tradução entre botões de adicionar usuário e adicionar departamento nas configurações de Usuários e Permissões ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh

- **[Workflow]** corrigir: restaurar texto de ajuda em diálogos de vinculação de workflow FlowModel para eventos de ação personalizada e operação ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher

- **[Bloco: Markdown]** Corrigir o problema de erro no bloco Markdown v2 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) por @zhangzhonghe

- **[Workflow: Webhook]** Corrigir o problema em que a criação de nó de resposta era interceptada pela validação da configuração `statusCode` por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigir layout do formulário de aprovação em dispositivos móveis por @zhangzhonghe

  - Corrigir índice duplicado de registro de aprovação ao delegar tarefas de aprovação. por @mytharcher

- **[Gerenciador de backup]** Corrigido um problema em que os backups falhavam com erro quando os arquivos não podiam ser encontrados. por @gchust
