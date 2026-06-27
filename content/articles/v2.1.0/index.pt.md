---
title: "NocoBase v2.1.0: Gerenciamento aprimorado de aplicativos gerenciados e plugins na CLI"
description: "Nota de lançamento da v2.1.0"
---

### 🎉 Novos Recursos

- **[indefinido]**

  - Adicionados comandos de proxy de nível superior para nginx e caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) por @chenos
  - Gerenciamento aprimorado de aplicativos gerenciados e plugins na CLI, incluindo manipulação de ambiente ciente do appPath, importação de plugins, sincronização de plugins licenciados e atualizações de documentação relacionadas. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) por @chenos
    Referência: [Documentação da CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Início Rápido](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
  - Adicionado um novo funcionário de IA, a Engenheira de Localização Lina, para auxiliar em tarefas de tradução de localização ([#9434](https://github.com/nocobase/nocobase/pull/9434)) por @2013xile
    Referência: [Gerenciamento de Localização](https://docs.nocobase.com/system-management/localization)<br>[Lina: Engenheira de Localização](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Usar Lina e o HY-MT1.5-1.8B local para traduzir entradas de localização](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
  - Adicionada documentação em indonésio e vietnamita. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) por @Molunerfinn
  - Adicionado um fluxo de trabalho de CI que verifica dependências `plugin-*` peerDependencies ausentes e executa a build, com relatório de comentários no PR. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) por @Molunerfinn
- **[client-v2]**

  - Suporte a entrada por escaneamento para campos de texto ([#9599](https://github.com/nocobase/nocobase/pull/9599)) por @katherinehhh
  - Adicionado `TypedVariableInput` para que os campos de porta SMTP e modo seguro do plugin de e-mail v2 possam aceitar uma constante tipada ou uma variável `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) por @Molunerfinn
  - Suporte à atribuição de valor de campo em ações de envio de formulário ([#9570](https://github.com/nocobase/nocobase/pull/9570)) por @katherinehhh
  - Suporte a páginas v2 incorporadas e páginas de formulário público v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) por @zhangzhonghe
  - Reescrever a página do Gerenciador de Plugins client-v2 em uma interface de cartão responsiva com filtro de categoria, pesquisa, ativar/desativar/remover, ativação em massa e um modal de detalhes do plugin; também tornar a página do Gerenciador de Plugins client-v1 responsiva em telas estreitas. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) por @Molunerfinn
  - Adicionado um menu de Segurança e a página de configurações de política de Token ao admin v2; o centro do usuário agora suporta Alterar senha. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) por @Molunerfinn
- **[cli]**

  - Adicionadas proteções de compatibilidade de comando de API dinâmica ([#9613](https://github.com/nocobase/nocobase/pull/9613)) por @chenos
  - Suporte à autenticação básica ([#9558](https://github.com/nocobase/nocobase/pull/9558)) por @chenos
  - Adicionados comandos de criar e restaurar backup ([#9541](https://github.com/nocobase/nocobase/pull/9541)) por @chenos
  - Adicionado comando de release na API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) por @Andrew1989Y
  - Refatorar CLI do NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) por @chenos
- **[client]**

  - Adicionado suporte a regras de vínculo para itens de menu de página ([#9304](https://github.com/nocobase/nocobase/pull/9304)) por @zhangzhonghe
  - adicionar variáveis js ao fluxo de eventos ([#8938](https://github.com/nocobase/nocobase/pull/8938)) por @jiannx
  - adicionar ação de item JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) por @jiannx
- **[flow-engine]**

  - Migrado `plugin-environment-variables` para client-v2 com uma página de configurações baseada em React e uma variável de tempo de execução `$env` registrada globalmente; adicionar uma entrada client-v2 ao `plugin-file-manager` com uma página de configuração de armazenamento baseada em React e campo de upload, ação de upload e pré-visualização baseados em FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) por @Molunerfinn
  - Adicionado `getSubclassesOfAsync` ao FlowEngine para descobrir classes de modelo registradas de forma assíncrona através do novo campo `extends` em `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) por @Molunerfinn
- **[server]** Funcionários de IA podem pesquisar documentação agrupada com comandos Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) por @2013xile
- **[cli-v1]** Resolver caminho de armazenamento a partir de env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) por @chenos
- **[Gerenciador de tarefas assíncronas]** Adicionado suporte ao cliente v2 para a ação da barra superior do gerenciador de tarefas assíncronas. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) por @jiannx
- **[Gerenciador de backup]**

  - Adicionado suporte de tempo de execução do cliente v2 para o plugin do gerenciador de backup. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) por @katherinehhh
  - Adaptar ao novo plugin de controle de versão ([#9563](https://github.com/nocobase/nocobase/pull/9563)) por @cgyrock
- **[Bloco: Gantt]**

  - Adicionada uma opção para blocos Gantt focarem em hoje por padrão quando abertos ([#9692](https://github.com/nocobase/nocobase/pull/9692)) por @jiannx
  - Adicionado suporte v2 para o bloco Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) por @jiannx
- **[Controle de acesso]** Migradas as páginas de configurações de Usuários e Funções e Permissões para v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) por @jiannx
- **[Visualizador de arquivos do Office]** Migrado o plugin de visualização de arquivos do Office para o cliente v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) por @Molunerfinn
- **[Workflow]**

  - Adicionado controle de tempo limite para workflows, suporte para abortar automaticamente a execução com tempo limite excedido se a opção de tempo limite estiver definida ([#9363](https://github.com/nocobase/nocobase/pull/9363)) por @mytharcher
  - Adicionados campos de criado por e atualizado por para workflows ([#9217](https://github.com/nocobase/nocobase/pull/9217)) por @mytharcher
  - Adicionada API para verificar criação de nó ([#9207](https://github.com/nocobase/nocobase/pull/9207)) por @mytharcher
  - Adicionado campo de log para jobs, a fim de mostrar o conteúdo do log de algum nó para depuração ([#9165](https://github.com/nocobase/nocobase/pull/9165)) por @mytharcher
- **[IdP: OAuth]**

  - Adicionado suporte fundamental para logon único de aplicativo em implantações multi-aplicativo ([#9547](https://github.com/nocobase/nocobase/pull/9547)) por @2013xile
  - Adicionado um novo plugin IdP: OAuth para permitir que serviços MCP autentiquem via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) por @2013xile
- **[Editor de tema]** O editor de tema agora está disponível na interface v2 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) por @zhangzhonghe
- **[Bloco: Kanban]**

  - Adicionado suporte client-v2 para o plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) por @jiannx
  - bloco kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) por @jiannx
- **[Bloco: Markdown]** Adicionado suporte client-v2 para blocos Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) por @jiannx
- **[Bloco: Lista]** Blocos de lista suportam client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) por @jiannx
- **[Calendário]**

  - Adicionado suporte client-v2 para o plugin Calendário. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) por @jiannx
  - bloco calendário v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) por @jiannx
- **[Bloco: Árvore]**

  - Adicionado suporte client-v2 para o bloco de filtro em árvore. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) por @jiannx
  - Adicionado bloco de filtro em árvore ([#9016](https://github.com/nocobase/nocobase/pull/9016)) por @jiannx
- **[Funcionários de IA]**

  - O nó de funcionário de IA do workflow suporta carregar arquivos de campos de anexo. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) por @cgyrock
  - O workflow adicionou instrução de funcionário de IA ([#9025](https://github.com/nocobase/nocobase/pull/9025)) por @cgyrock
  - Adicionada uma ferramenta de consulta de dados e ferramenta de relatório de análise de negócios para funcionários de IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) por @2013xile
  - Adicionada a capacidade de invocar subagentes para funcionários de IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) por @cgyrock
  - Adicionada capacidade SKILLS aos funcionários de IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) por @cgyrock
- **[Visualização de dados]** Adicionado suporte client-v2 para plugins de bloco ([#9297](https://github.com/nocobase/nocobase/pull/9297)) por @zhangzhonghe
- **[Auth: Chaves de API]** adicionar comandos `pm list` e `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) por @chenos
- **[IA: Servidor MCP]**

  - Fornece uma API de consulta de coleção de dados genérica, chamável via MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) por @2013xile
  - Adicionado um novo plugin de servidor MCP para permitir a construção de sistemas NocoBase e suporte a workflows de negócios. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) por @2013xile
- **[Gerenciador de fonte de dados]** Suporte ao carregamento sob demanda de ferramentas MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) por @2013xile
- **[Campo de coleção: Código]** field-code suporta 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) por @jiannx
- **[Fonte de dados: NocoBase externo]** Adicionado um plugin de fonte de dados: NocoBase externo por @2013xile
- **[Multi-espaço]** Adicionado suporte client-v2 para o plugin multi-espaço, incluindo troca de espaço e gerenciamento de espaço. por @jiannx
- **[SSO de aplicativo]** Adicionado um plugin SSO de aplicativo para login automático entre aplicações por @2013xile
- **[Controle de versão]** Adicionado plugin de controle de versão por @cgyrock
- **[Autenticação de dois fatores (2FA)]** TOTP e autenticação de dois fatores agora podem ser vinculados, verificados e configurados a partir do cliente v2. por @Molunerfinn
- **[Política de senha]** Migrado plugin-password-policy para o shell admin client-v2 com as páginas de configurações Política de senha / Usuários bloqueados e aplicação de regras no lado do cliente no formulário de alteração de senha do centro do usuário. por @Molunerfinn
- **[Workflow: Webhook]** Adicionado status de resposta 408 para workflow webhook com tempo limite excedido (modo síncrono) por @mytharcher
- **[Workflow: Subfluxo]** Suporte à configuração de tempo limite no workflow por @mytharcher
- **[Gerenciador de migração]** Adicionadas algumas APIs para nocobase cli por @Andrew1989Y
- **[Armazenamento de arquivos: S3(Pro)]** Suporte ao upload de arquivos via armazenamento S3 Pro no gerenciador de arquivos v2. por @Molunerfinn
- **[Auth: OIDC]** Migrado `plugin-auth-oidc` para admin v2; botão de login, formulário de configurações admin e redirecionamento automático SSO agora funcionam sob v2. por @Molunerfinn
- **[Workflow: Aprovação]**

  - Suporte à configuração de tempo limite no workflow por @mytharcher
  - Suporte para excluir rascunho de aprovação por @mytharcher
- **[Gerenciador de e-mail]** Gmail suporta envio de e-mails com aliases por @jiannx
- **[Supervisor de aplicativo]** Adicionadas configurações de SSO de aplicativo para sub-aplicações por @2013xile
- **[Auth: LDAP]** Adicionada entrada de cliente v2 para que o autenticador LDAP renderize seu formulário de login e configurações admin em aplicativos v2. por @Molunerfinn

### 🚀 Melhorias

- **[indefinido]**

  - Suporte a env atual com escopo de sessão no nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) por @chenos
  - Alinhar documentação em espanhol, português, russo e alemão com a fonte em inglês. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) por @Molunerfinn
  - Sincronizar documentação em francês com a fonte em chinês. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) por @Molunerfinn
  - Atualizar documentos de IA para exigir NocoBase >= 2.1.0-beta.20 e recomendar a versão beta mais recente. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) por @Molunerfinn
  - Melhorar o guia de instalação do Agente de IA para evitar que Agentes ignorem o assistente `--ui` e detectar automaticamente gerenciadores de versão do Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) por @Molunerfinn
  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) por @Molunerfinn
  - Adicionada uma entrada client-v2 dedicada e construí-la independentemente com rsbuild, mantendo v1 inalterado. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) por @Molunerfinn
- **[client-v2]**

  - Adicionado suporte para desabilitar a seleção múltipla em campos de seleção de associação popup v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) por @katherinehhh
  - Melhorada a renderização de blocos v2 quando uma fonte de dados externa configurada está desabilitada, prevenindo erros de renderização e mostrando um placeholder mais claro no Editor de UI. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) por @katherinehhh
  - Adicionada configuração de seleção de linha de tabela v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) por @katherinehhh
  - Suporte a cores de ação do painel de ações ([#9612](https://github.com/nocobase/nocobase/pull/9612)) por @katherinehhh
  - Removida a opção Oculto da configuração de menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) por @zhangzhonghe
  - Filtrar menus v1 no layout v2 e mostrar apenas menus v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) por @zhangzhonghe
  - Separar client-v2 de client-v1 e remover sua dependência de client-v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) por @zhangzhonghe
- **[server]**

  - O cliente moderno agora é servido sob `/v/` em vez de `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) por @Molunerfinn
  - Melhorada a documentação da API swagger do gerenciador de plugins ([#9080](https://github.com/nocobase/nocobase/pull/9080)) por @2013xile
- **[cli]**

  - Melhorar orientação de init e auto atualização ([#9633](https://github.com/nocobase/nocobase/pull/9633)) por @chenos
  - simplificar fluxo de atualização de aplicativo ([#9587](https://github.com/nocobase/nocobase/pull/9587)) por @chenos
  - melhorar fluxo de autenticação env ([#9546](https://github.com/nocobase/nocobase/pull/9546)) por @chenos
  - Melhorada a experiência do prompt da CLI do NocoBase migrando workflows de configuração e gerenciamento para Inquirer e corrigindo problemas relacionados de instalação, skills e tempo de execução Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) por @chenos
  - Adicionado rastreamento de origem de solicitação CLI em logs de solicitação e logs de auditoria ([#9223](https://github.com/nocobase/nocobase/pull/9223)) por @2013xile
  - Melhorada a saída de ajuda da API CLI gerada e o agrupamento de comandos ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) por @2013xile
  - Melhorado o fallback de ajuda `nb API` e mensagens de aviso unificadas para falhas de bootstrap em tempo de execução ([#9153](https://github.com/nocobase/nocobase/pull/9153)) por @2013xile
- **[client]**

  - Migrado jsonLogic da Aplicação v1 para BaseApplication ([#9522](https://github.com/nocobase/nocobase/pull/9522)) por @zhangzhonghe
  - suporte à definição de estilos de campo através de runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) por @jiannx
  - Refatorar configurações de layout admin e aplicação para arquitetura de host de modelo com proteções de compatibilidade v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) por @zhangzhonghe
- **[build]**

  - Adicionada cobertura de regressão para evitar que `deleteServerFiles` remova artefatos de build `client` e `client-v2` em caminhos Windows e POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) por @Molunerfinn
  - Builds de produção do cliente do aplicativo agora são executados no Rsbuild, e melhorias na criação de perfil de build e agendamento de declaração tornam os gargalos de build mais fáceis de identificar e reduzir. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) por @Molunerfinn
  - Migrado o pipeline de build do cliente em `@nocobase/build` de Vite para Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) por @Molunerfinn
- **[database]** Corrigida a geração de relatórios de negócios de IA e o comportamento de consulta de dados para evitar saída de gráfico malformada, manipulação incorreta de data e hora e cobertura de múltiplas fontes de dados ausente ([#9078](https://github.com/nocobase/nocobase/pull/9078)) por @2013xile
- **[flow-engine]**

  - Melhorar a validação de esquema para API de construção de UI. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust
- **[app]** Adicionado um workflow de desenvolvimento baseado em Rsbuild para client-v1, mantendo o desenvolvimento de plugins local e a topologia atual `/v2/` compatíveis ([#8902](https://github.com/nocobase/nocobase/pull/8902)) por @Molunerfinn
- **[Variáveis e segredos]** Variáveis de ambiente (`$env`) agora podem ser selecionadas por seletores de variáveis baseados em flow-engine no tempo de execução v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) por @Molunerfinn
- **[Gerenciador de fonte de dados]**

  - Adicionado gerenciamento de permissão de fonte de dados client-v2 e alinhadas as gavetas do seletor de permissão relacionadas. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) por @jiannx
  - Otimizar a API de modelagem de dados para suportar a criação de coleções de comentários com IA, configurar campos de relacionamento para fontes de dados externas e definir regras de validação de campo ([#9480](https://github.com/nocobase/nocobase/pull/9480)) por @2013xile
- **[Coleção: Conectar a dados estrangeiros (FDW)]** Melhorada a paridade de modelos de coleção V2 para coleções SQL e coleções de dados estrangeiros, incluindo confirmação SQL, gerenciamento de servidor de banco de dados estrangeiro e ordenação de modelos. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) por @katherinehhh
- **[Filtro de múltiplas palavras-chave]** Migrado filtro de múltiplas palavras-chave para client-v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) por @gchust
- **[Workflow]**

  - Removido o acoplamento de transação de histórico de workflow da execução do workflow. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) por @mytharcher
  - Refatorar verificações de disponibilidade de nó assíncrono do workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) por @mytharcher
  - Adicionada validação para todos os gatilhos e nós ([#8930](https://github.com/nocobase/nocobase/pull/8930)) por @mytharcher
- **[Modelos de UI]** Migrados modelos de UI para client-v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) por @gchust
- **[Departamentos]** Adicionada uma página de configurações v2 para gerenciar departamentos, membros do departamento e atribuições de usuário a departamentos. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) por @jiannx
- **[Gerenciador de notificações]** Migrados os plugins relacionados a notificações para v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) por @Molunerfinn
- **[Visualização de dados]** Adicionado suporte client-v2 para blocos de gráfico. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) por @jiannx
- **[Verificação]** Adicionado cliente v2 ao plugin de Verificação (página de configurações admin, entrada do centro do usuário, formulários SMS OTP). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) por @Molunerfinn
- **[Autenticação]**

  - As configurações de marca personalizada agora funcionam corretamente no cliente v2 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) por @zhangzhonghe
  - Implementar a página de configurações de Autenticadores em client-v2 e fornecer primitivos reutilizáveis de tabela client-v2, entrada de variável e formulário. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) por @Molunerfinn
- **[Bloco: Mapa]** Adicionado suporte ao cliente v2 para o plugin de mapa. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) por @jiannx
- **[Localização]** Melhoradas as tarefas de tradução de localização da Lina com escopo de tradução, configurações de idioma de referência e edição rápida ([#9521](https://github.com/nocobase/nocobase/pull/9521)) por @2013xile
- **[Workflow: Evento de ação personalizada]**

  - Migrados os plugins block-workbench e workflow-custom-action-trigger para client-v2, incluindo seus modelos de ação e fluxo de scanner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) por @jiannx
  - Adicionado controle ACL de acionamento no modo de registro (único e múltiplo) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) por @mytharcher
- **[Bloco: iframe]** Adicionado suporte v2 para o bloco iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) por @jiannx
- **[Bloco: GridCard]** Atualizado plugin de cartão de grade para suportar client-v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) por @jiannx
- **[Funcionários de IA]**

  - Interação de conversação paralela de funcionário de IA e otimização de desempenho ([#9462](https://github.com/nocobase/nocobase/pull/9462)) por @cgyrock
  - Funcionário de IA suporta processamento paralelo de múltiplas conversas ([#9344](https://github.com/nocobase/nocobase/pull/9344)) por @cgyrock
  - Melhoradas as ferramentas de edição RunJS do Nathan e reduzida a latência durante longas conversas de chat de IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) por @2013xile
  - Atualizar a configuração de tarefa de atalho do funcionário de IA para usar o mesmo componente de configurações de skills que a configuração do nó de funcionário de IA do workflow ([#9246](https://github.com/nocobase/nocobase/pull/9246)) por @cgyrock
  - Ajustar a interação de configuração de skill/ferramenta para instrução de funcionário de IA ([#9232](https://github.com/nocobase/nocobase/pull/9232)) por @cgyrock
  - Atualizar prompt de usuário do chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang
  - Atualizar prompt de usuário do chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang
- **[Gerenciador de arquivos]** Plugins de armazenamento de terceiros agora podem registrar seu próprio formulário de tipo de armazenamento na página de configurações do gerenciador de arquivos v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) por @Molunerfinn
- **[Bloco: Kanban]**

  - Melhorada a consistência do espaçamento de campo de detalhe v2 e feito o espaçamento de cartão e coluna kanban se adaptar melhor às configurações de tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) por @jiannx
  - Reduzida a largura padrão da coluna kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) por @jiannx
  - Melhoradas as configurações de criação de bloco de Calendário e Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) por @jiannx
- **[IdP: OAuth]** Sessões OAuth agora usam as mesmas configurações de expiração que a política de token do sistema ([#9345](https://github.com/nocobase/nocobase/pull/9345)) por @2013xile
- **[Controle de acesso]** Adicionadas novas APIs para acl skill ([#9198](https://github.com/nocobase/nocobase/pull/9198)) por @Andrew1989Y
- **[Flow engine]** Adicionadas novas APIs para construção de UI. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) por @gchust
- **[Ação: Solicitação personalizada]**

  - adicionar modelos de ação para solicitação personalizada ([#8890](https://github.com/nocobase/nocobase/pull/8890)) por @jiannx
  - Streaming de eventos suporta solicitações personalizadas ([#8749](https://github.com/nocobase/nocobase/pull/8749)) por @jiannx
- **[Workflow: Evento de pré-ação]** Adicionadas regras de validação para gatilhos e nós ([#8971](https://github.com/nocobase/nocobase/pull/8971)) por @mytharcher
- **[Campo de coleção: divisões administrativas da China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) por @jiannx
- **[Auth: SAML 2.0]**

  - Redirecionamentos de login SAML/CAS agora seguem o prefixo do cliente moderno. por @Molunerfinn
  - Adicionadas entradas client-v2 para os plugins de autenticação CAS e SAML para que funcionem com a página de login v2 e as configurações de Autenticadores. por @Molunerfinn
- **[Restrição de IP]** Adicionado um cliente v2 para o plugin de restrição de IP. por @Molunerfinn
- **[Marca personalizada]** As configurações de marca personalizada agora estão disponíveis no cliente v2 por @zhangzhonghe
- **[Workflow: Webhook]** Adicionada validação para criação de API de gatilho/nó por @mytharcher
- **[Workflow: Subfluxo]**

  - Removido o acoplamento de transação de histórico de workflow das instruções de subfluxo do workflow. por @mytharcher
  - Adicionada validação para criação de API de nó por @mytharcher
- **[Impressão de modelo]** Atualizados metadados de coleção de modelo de impressão para classificação de backup de controle de versão. por @cgyrock
- **[Auth: OIDC]** Redirecionamento de login OIDC agora segue o prefixo do cliente moderno. por @Molunerfinn
- **[Histórico de registro]** Atualizados metadados de coleção de histórico de registro para classificação de backup de controle de versão. por @cgyrock
- **[Workflow: Aprovação]**

  - Adicionado sinalizador `async` para instrução de aprovação, para adaptar nova API de criação de nó na tela do workflow por @mytharcher
  - Removido o acoplamento de transação de histórico de workflow das instruções de workflow de aprovação. por @mytharcher
  - Adicionada validação para criação de nó de aprovação por @mytharcher
  - Atualizados metadados de coleção de workflow de aprovação para classificação de backup de controle de versão. por @cgyrock
  - Adicionada validação para API de gatilho/nó por @mytharcher
  - Ajustar regras de validação para configuração de gatilho de aprovação e configuração de nó, para garantir que o campo UI exista por @mytharcher
- **[Logs de auditoria]** Atualizados metadados de coleção do logger de auditoria para classificação de backup de controle de versão. por @cgyrock
- **[Gerenciador de e-mail]** Atualizados metadados de coleção do gerenciador de e-mail para classificação de backup de controle de versão. por @cgyrock
- **[Supervisor de aplicativo]** Atualizados metadados de coleção do supervisor de aplicativo para classificação de backup de controle de versão. por @cgyrock

### 🐛 Correções de Bugs

- **[indefinido]**

  - alinhar caminhos de configuração nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) por @chenos
  - Corrigidos links mortos na documentação traduzida e habilitada a detecção de links mortos por padrão na build da documentação. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) por @Molunerfinn
  - Corrigir o workflow de dependência e build para que falhas de checkout de plugin pro independente quebrem o CI em vez de pular silenciosamente a cobertura de build. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) por @Molunerfinn
  - Corrigidos arquivos de tradução inchados e alinhada a estrutura da documentação entre idiomas. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) por @Molunerfinn
  - Corrigido o seletor de idioma gerando URLs incorretas (ex.: `/cn/es/` em vez de `/es/`) no site da documentação. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) por @Molunerfinn
- **[client-v2]**

  - Corrigidos campos JSON em visualizações client-v2 renderizando células em branco para valores de objeto. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) por @katherinehhh
  - Corrigidos campos de opção V2 traduzindo incorretamente rótulos de opção simples em ambientes localizados. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) por @katherinehhh
  - Corrigidas colunas de tabela v2 tornando-se invisíveis quando a largura da coluna personalizada é definida como 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) por @katherinehhh
  - Ajustados todos os seletores de campo de relação para limitar campos de associação a um máximo de dois níveis ([#9454](https://github.com/nocobase/nocobase/pull/9454)) por @jiannx
  - Corrigir erros ao salvar regras de vínculo de menu ([#9666](https://github.com/nocobase/nocobase/pull/9666)) por @zhangzhonghe
  - Corrigir o espaçamento excessivo acima de blocos em páginas v2 ([#9647](https://github.com/nocobase/nocobase/pull/9647)) por @zhangzhonghe
  - preservar valores de campo atribuídos ([#9640](https://github.com/nocobase/nocobase/pull/9640)) por @katherinehhh
  - Corrigir as abas de login de sub-aplicativo renderizando modelos de tradução brutos e evitar que a gaveta de edição de método de autenticação v2 descarte valores de campo ao enviar. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) por @Molunerfinn
  - Melhorar o desempenho da página do gerenciador de plugins usando CSS line-clamp em vez de reticências antd Typography. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) por @Molunerfinn
  - Corrigidos metadados de idioma do navegador para que a página do aplicativo siga o idioma do aplicativo selecionado em vez de ser marcada como inglês. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) por @Molunerfinn
  - Corrigido registro de dependência dnd-kit inconsistente. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) por @jiannx
  - Corrigida a falha ao carregar a rota v2 do plugin Kanban porque as dependências dnd-kit não foram fornecidas pelo cliente. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) por @jiannx
  - O componente Tabela v2 compartilhado agora mostra o seletor de tamanho de página por padrão, correspondendo ao comportamento v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) por @Molunerfinn
  - Corrigido problema onde a lista de opções de campo de título está vazia para campos de relação em blocos de tabela ([#9490](https://github.com/nocobase/nocobase/pull/9490)) por @katherinehhh
  - Manter grupos vazios após filtrar menus v1 no layout v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) por @zhangzhonghe
  - Corrigido o problema onde a página fica em branco atrás do diálogo de ativação de plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) por @zhangzhonghe
  - Corrigir páginas admin v1 travando quando referenciam módulos de plugin v2 em builds de produção. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) por @Molunerfinn
  - Corrigido erro ao selecionar campos de associação nas configurações de campo. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) por @gchust
  - Corrigido o problema onde uma página 404 pisca após o aplicativo iniciar ([#9365](https://github.com/nocobase/nocobase/pull/9365)) por @zhangzhonghe
  - Corrigido o problema onde algumas páginas v2 falham ao carregar plugins remotos ([#9369](https://github.com/nocobase/nocobase/pull/9369)) por @zhangzhonghe
  - Corrigir os problemas de placeholder de arrastar bloco de página v2 e posição de soltar ([#9361](https://github.com/nocobase/nocobase/pull/9361)) por @zhangzhonghe
  - Corrigido o carregamento de plugin remoto para que URLs de plugin que já terminam com `.js` não sejam resolvidas para caminhos `.js.js` duplicados. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) por @Molunerfinn
  - Corrigido o problema onde `RemoteSelect` não renderizava na configuração de workflow vinculado ([#9314](https://github.com/nocobase/nocobase/pull/9314)) por @mytharcher
- **[client]**

  - Corrigido o problema onde blocos podem mostrar incorretamente como excluídos após atualizar a página ([#9662](https://github.com/nocobase/nocobase/pull/9662)) por @zhangzhonghe
  - corrigir problema onde subtabela em subformulário não podia adicionar uma segunda linha ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - corrigir preservar formato de hora para campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - aumentar limite de upload de imagem de entrada de escaneamento ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - corrigir sincronizar valor do popup do seletor de data móvel ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - Corrigido o carregamento em modo dev para plugins de armazenamento construídos que dependem de exportações nomeadas de plugins de origem locais. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) por @Molunerfinn
  - Corrigido o problema onde as configurações do sistema aparecem vazias após enviar ([#9458](https://github.com/nocobase/nocobase/pull/9458)) por @zhangzhonghe
  - filtrar blocos opcionais não essenciais na caixa de pop-up de seleção de campos relacionados ([#9224](https://github.com/nocobase/nocobase/pull/9224)) por @jiannx
  - Corrigido o problema onde o título da página não atualiza após alternar menus ([#8864](https://github.com/nocobase/nocobase/pull/8864)) por @zhangzhonghe
- **[flow-engine]**

  - Corrigido o problema onde a pesquisa de campo é limpa ao passar o mouse sobre campos de associação ([#9646](https://github.com/nocobase/nocobase/pull/9646)) por @zhangzhonghe
  - Corrigidos menus em cascata instáveis ao digitar em caixas de pesquisa ([#9473](https://github.com/nocobase/nocobase/pull/9473)) por @zhangzhonghe
  - Corrigida mensagem de erro incorreta no console do navegador. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) por @gchust
  - Corrigidos submenus de campo de relação instáveis em menus de submodelo ([#9417](https://github.com/nocobase/nocobase/pull/9417)) por @jiannx
  - Adicionados snippets js para definir item de formulário e item de detalhe ([#8974](https://github.com/nocobase/nocobase/pull/8974)) por @jiannx
- **[build]**

  - Ativos de texto em builds de servidor agora são copiados como arquivos em vez de serem convertidos em módulos JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) por @Molunerfinn
  - Corrigida falha de build de plugin quando o código do cliente v1 importa a entrada `/client-v2` de outro plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) por @Molunerfinn
- **[cli-v1]**

  - Corrigida a inicialização de desenvolvimento do create-nocobase-app reutilizando shells de aplicativo empacotados enquanto permite o desenvolvimento de plugins local. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) por @Molunerfinn
  - Corrigidas falhas de inicialização de desenvolvimento em aplicativos criados com create-nocobase-app causadas pela resolução de caminho do cliente app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) por @Molunerfinn
- **[server]**

  - Corrigidas solicitações de descoberta OAuth de sub-aplicação sendo roteadas como solicitações do aplicativo principal ([#9383](https://github.com/nocobase/nocobase/pull/9383)) por @2013xile
  - Suporte à obtenção do aplicativo alvo por nome de host ([#8978](https://github.com/nocobase/nocobase/pull/8978)) por @2013xile
- **[cli]**

  - Corrigidas opções booleanas da CLI para que possam ser desabilitadas com sinalizadores negados ([#9337](https://github.com/nocobase/nocobase/pull/9337)) por @2013xile
  - Corrigidas falhas de login OAuth da CLI no Windows causadas por URLs de autorização longas ([#9159](https://github.com/nocobase/nocobase/pull/9159)) por @2013xile
- **[ai]** Corrigida configuração de campo de categoria ausente durante o registro de funcionário de IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) por @cgyrock
- **[teste]** Corrigidas builds de plugin para que dependências de servidor com nomes de pacote com ponto, como `big.js`, sejam empacotadas em `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) por @Molunerfinn
- **[Calendário]**

  - Corrigido um problema onde blocos de Detalhes e Editar não podiam ser adicionados em gavetas de detalhe de bloco de calendário v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) por @jiannx
  - Corrigidas cores de eventos de calendário não renderizando a partir do campo de cor configurado em páginas v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) por @jiannx
  - Corrigido o estilo do cursor para itens de evento na sobreposição de mais eventos do calendário ([#9519](https://github.com/nocobase/nocobase/pull/9519)) por @jiannx
  - Não registrar ações de calendário para outros blocos ([#9200](https://github.com/nocobase/nocobase/pull/9200)) por @jiannx
- **[Funcionários de IA]**

  - Melhorados os prompts de consulta de dados do funcionário de IA para carregar a skill necessária antes de usar ferramentas de consulta. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) por @cgyrock
  - Corrigido o botão ausente do assistente Dara nas configurações de gráfico client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) por @cgyrock
  - Nós de funcionário de IA do workflow podem usar o modelo padrão ([#9679](https://github.com/nocobase/nocobase/pull/9679)) por @cgyrock
  - Corrigidos erros `ctx.get` em nós de workflow de funcionário de IA ([#9661](https://github.com/nocobase/nocobase/pull/9661)) por @cgyrock
  - Corrigido erro quando funcionário de IA acessa base de conhecimento somente leitura ([#9538](https://github.com/nocobase/nocobase/pull/9538)) por @cgyrock
  - Corrigidos cartões de chamada de ferramenta de IA não aparecendo imediatamente quando eventos de ferramenta transmitidos são divididos ([#9534](https://github.com/nocobase/nocobase/pull/9534)) por @2013xile
  - Corrigido problema onde as permissões de função de operador não estão surtindo efeito em nós de funcionário de IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) por @cgyrock
  - Corrigido erro de carregamento do plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) por @cgyrock
  - Corrigido nó de funcionário de IA do workflow não terminando corretamente após a atribuição de ferramenta. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) por @cgyrock
  - Corrigido erro de anexo de campo de leitura de associações do nó de funcionário de IA no workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) por @cgyrock
  - Corrigido o problema onde o nó de funcionário de IA do workflow limpa skills após alternar funcionários de IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) por @cgyrock
  - Corrigido erro de renderização de tarefa de atalho de funcionário de IA ([#9267](https://github.com/nocobase/nocobase/pull/9267)) por @cgyrock
  - Corrigido o erro na API para buscar a lista de funcionários de IA ([#9241](https://github.com/nocobase/nocobase/pull/9241)) por @cgyrock
  - Refinado o comportamento de delegação de tarefas do Atlas e atualizado o Viz para usar o workflow de relatório de negócios para solicitações de relatório ([#9229](https://github.com/nocobase/nocobase/pull/9229)) por @2013xile
  - Funcionário de IA do workflow: Ajuste de UI e correções de bugs. ([#9213](https://github.com/nocobase/nocobase/pull/9213)) por @cgyrock
  - Corrigidas anomalias de gravação de log na instrução de funcionário de IA ([#9180](https://github.com/nocobase/nocobase/pull/9180)) por @cgyrock
  - Corrigida ordenação de consulta agregada descartada pelo ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) por @2013xile
  - Corrigido o problema onde mensagens de erro não eram exibidas nas conversas do funcionário de IA ([#9097](https://github.com/nocobase/nocobase/pull/9097)) por @cgyrock
  - Corrigido o problema onde funcionários de IA não conseguiam usar skills ([#9023](https://github.com/nocobase/nocobase/pull/9023)) por @cgyrock
  - Corrigido o problema onde o LLM ainda tenta carregar skills após a ferramenta getSkill ser desabilitada ([#9013](https://github.com/nocobase/nocobase/pull/9013)) por @cgyrock
  - Corrigidos casos de teste com falha no módulo ai do pacote core. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) por @cgyrock
- **[Gerenciador de fonte de dados]**

  - Corrigida exibição de campo de título desatualizada ao reabrir a gaveta de configuração de campo de fonte de dados v2 após alterar o campo de título. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) por @katherinehhh
  - Melhoradas as mensagens de erro do gerenciador de fonte de dados V2 quando operações de coleção, campo, sincronização e carregamento de tabela falham. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) por @katherinehhh
  - Corrigida localização de campo multi-espaço no gerenciador de fonte de dados v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) por @jiannx
  - Otimizada a nomenclatura de ferramentas MCP e reduzidas respostas de API redundantes para evitar consumo excessivo de contexto de conversa de IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) por @2013xile
- **[Bloco: Mapa]** Corrigidos campos de geometria de mapa ausentes do menu de adicionar campo do gerenciador de fonte de dados v2 após ativar o plugin de mapa. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) por @katherinehhh
- **[Coleção: SQL]** Bloqueado o acesso de Coleção SQL a metadados PostgreSQL sensíveis ([#9683](https://github.com/nocobase/nocobase/pull/9683)) por @2013xile
- **[Workflow: Evento de ação personalizada]**

  - Corrigida a ação de gatilho de workflow ausente da lista de botões do painel de ações do workbench. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) por @katherinehhh
  - Corrigir opções duplicadas de Trigger workflow em menus de ação de bloco v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) por @zhangzhonghe
  - Filtrar opções de vinculação de workflow de ação personalizada pela coleção do bloco atual. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) por @mytharcher
- **[Ação: Duplicar registro]** Redefinir estado do botão em falha de submissão ([#9676](https://github.com/nocobase/nocobase/pull/9676)) por @katherinehhh
- **[Bloco: Gantt]**

  - Melhorado o posicionamento do tooltip do gantt para evitar cobrir barras de tarefa e alinhados rótulos de tarefa consistentemente dentro e fora das barras ([#9638](https://github.com/nocobase/nocobase/pull/9638)) por @jiannx
  - Corrigido o caminho da pasta compartilhada do gantt v2 e adicionado listrado zebrado. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) por @jiannx
- **[Configurações de licença]**

  - Adicionado suporte client-v2 para configurações de licença e injeção de licença comercial. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) por @jiannx
  - resolver dependências agrupadas com link simbólico ([#9518](https://github.com/nocobase/nocobase/pull/9518)) por @chenos
- **[Gerenciador de arquivos]** Melhoradas as mensagens de falha de pré-visualização de PDF e documentados os requisitos de CORS para armazenamento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
  Referência: [Pré-visualização de Arquivo](docs/docs/en/file-manager/file-preview/index.md)
- **[Bloco: iframe]** Corrigir conteúdo iframe não preenchendo a altura do bloco configurada ([#9540](https://github.com/nocobase/nocobase/pull/9540)) por @katherinehhh
- **[Ação: Exportar registros]** Melhorar o desempenho da configuração de campo com muitos campos de associação ([#9524](https://github.com/nocobase/nocobase/pull/9524)) por @katherinehhh
- **[Localização]** Corrigidas traduções de referência de localização embutidas para tarefas de tradução de IA ([#9531](https://github.com/nocobase/nocobase/pull/9531)) por @2013xile
- **[Autenticação]** Evitar que o servidor trave quando um token de autenticação WebSocket referencia um autenticador cujo plugin de tipo de autenticação está descarregado ou ausente. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) por @Molunerfinn
- **[Workflow: JavaScript]**

  - Corrigido o carregamento do pacote de tempo de execução QuickJS do workflow JavaScript em builds de produção. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) por @mytharcher
  - Corrigido o problema onde erro é lançado ao configurar nó JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) por @mytharcher
- **[Bloco: Markdown]** Corrigido o problema de bloco Markdown v2 reportando erros ([#9440](https://github.com/nocobase/nocobase/pull/9440)) por @zhangzhonghe
- **[Bloco: Árvore]**

  - Melhoradas as configurações de bloco de filtro em árvore e corrigidos associação não suportada, fallback de campo de título e comportamento de redefinição de pesquisa. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) por @jiannx
  - Corrigir a exibição anormal de nós de bloco de filtro ([#9260](https://github.com/nocobase/nocobase/pull/9260)) por @jiannx
- **[Móvel (obsoleto)]** Corrigidos popups de mensagem móvel que não podiam ser fechados ou rolados ([#9424](https://github.com/nocobase/nocobase/pull/9424)) por @zhangzhonghe
- **[IA: Servidor MCP]**

  - Corrigido o empacotamento do servidor MCP para que dependências de tempo de execução sejam incluídas ([#9401](https://github.com/nocobase/nocobase/pull/9401)) por @2013xile
  - Corrigidas incompatibilidades de autenticação causadas por cabeçalhos encaminhados não relacionados na ferramenta CRUD genérica do MCP ([#8983](https://github.com/nocobase/nocobase/pull/8983)) por @2013xile
  - Corrigidas ferramentas MCP geradas a partir de Swagger quando esquemas de entrada incluem tipos `null` ou marcadores `nullable` que são inválidos para validação de ferramenta OpenAI ([#8994](https://github.com/nocobase/nocobase/pull/8994)) por @2013xile
- **[Flow engine]** Corrigido um problema onde blocos gerados por IA não podiam ser convertidos de modelos de referência de volta para modelos duplicados. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) por @gchust
- **[Bloco: Kanban]**

  - Melhorado o estilo compacto do cartão Kanban e otimizada a seleção de modelo de popup de criação rápida. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) por @jiannx
  - Corrigidos blocos associados kanban usando parâmetros de recurso de tempo de execução não resolvidos em contextos de popup ou página secundária. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) por @jiannx
  - Corrigida exibição repetida da camada flutuante de configuração de campo ([#9271](https://github.com/nocobase/nocobase/pull/9271)) por @jiannx
- **[Ação: Solicitação personalizada]** Atualizar Koa para v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) por @chenos
- **[Visualização de dados]** Corrigidos seletores de campo vazios na configuração de consulta de gráfico em páginas de fluxo ([#9276](https://github.com/nocobase/nocobase/pull/9276)) por @2013xile
- **[IdP: OAuth]**

  - Corrigidas falhas de login da CLI OAuth e restrito o registro dinâmico a URLs de callback locais ([#9248](https://github.com/nocobase/nocobase/pull/9248)) por @2013xile
  - Corrigidas falhas de registro de cliente OAuth e atualização de token após reinicialização do serviço ([#9139](https://github.com/nocobase/nocobase/pull/9139)) por @2013xile
  - Corrigido acesso OAuth para solicitações de API regulares ([#9120](https://github.com/nocobase/nocobase/pull/9120)) por @2013xile
  - Corrigido redirecionamento incorreto após login MCP OAuth em sub-aplicações ([#9015](https://github.com/nocobase/nocobase/pull/9015)) por @2013xile
- **[Workflow: Nó de agregação]** Corrigido o problema onde o nó de agregação não podia ser salvo devido a regra de validação incorreta ([#9208](https://github.com/nocobase/nocobase/pull/9208)) por @mytharcher
- **[Workflow: Nó de loop]** Corrigidas validações de nós de workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) por @mytharcher
- **[Controle de acesso]** atualizar acl swagger para servidor mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) por @Andrew1989Y
- **[Workflow: nó de mailer]** Corrigida validação para campos de variável ([#9047](https://github.com/nocobase/nocobase/pull/9047)) por @mytharcher
- **[Workflow]**

  - Corrigida regra de validação incorreta da instrução de condição ([#9017](https://github.com/nocobase/nocobase/pull/9017)) por @mytharcher
  - Corrigido o problema onde o modo do gatilho de coleção não podia ser definido como "criar ou atualizar" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) por @mytharcher
- **[Política de senha]** Corrigidas falhas de login mascarando o erro real com "argument #1 unsupported type undefined" quando o erro subjacente não tem código de status. por @Molunerfinn
- **[Fonte de dados: API REST]** Corrigidas falhas de build de declaração de plugin de fonte de dados REST API causadas por declarações de tipo client-v2 do gerenciador de fonte de dados incompatíveis. por @katherinehhh
- **[plugin-commercial]** Adicionados componentes de licença comercial client-v2 e entrada de status de licença na barra superior. por @jiannx
- **[Auth: SAML 2.0]** Corrigido o interceptor de redirecionamento automático SAML piscando o shell do aplicativo e abrindo gavetas duplicadas em cada navegação. por @Molunerfinn
- **[Workflow: Webhook]** Corrigido o problema onde a criação de nó de resposta era interceptada pela validação da configuração `statusCode` por @mytharcher
- **[Gerenciador de migração]** Corrigido `migration:create` retornando `taskId` do registro de tarefa assíncrona. por @Andrew1989Y
- **[Impressão de modelo]** Corrigidos erros de conversão de PDF de impressão de modelo não sendo retornados ao cliente corretamente por @jiannx
- **[Gerenciador de e-mail]**

  - nenhuma confirmação de fechamento é exibida após o e-mail ser enviado por @jiannx
  - Corrigida a exibição do título de identidades de e-mail por @jiannx
