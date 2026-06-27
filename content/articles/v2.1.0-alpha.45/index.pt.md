---
title: "NocoBase v2.1.0-alpha.45: Suporte à atribuição de valores de campo em ações de envio de formulário"
description: "Nota de lançamento da v2.1.0-alpha.45"
---

### 🎉 Novas Funcionalidades

- **[client-v2]**

  - Suporte para atribuição de valor de campo em ações de envio de formulário ([#9570](https://github.com/nocobase/nocobase/pull/9570)) por @katherinehhh
  - Suporte para páginas v2 incorporadas e páginas de formulário público v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) por @zhangzhonghe
  - Adiciona um menu de Segurança e a página de configurações de política de Token ao admin v2; o centro do usuário agora suporta Alterar senha. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) por @Molunerfinn
  - Reescreve a página do Gerenciador de Plugins do client-v2 em uma UI responsiva baseada em cartões com filtro por categoria, pesquisa, ativar/desativar/remover, Ativação em massa e um modal de detalhes do plugin; também torna a página do Gerenciador de Plugins do client-v1 responsiva em telas estreitas. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) por @Molunerfinn
- **[cli]**

  - Adiciona guards de compatibilidade para comandos de API dinâmica ([#9613](https://github.com/nocobase/nocobase/pull/9613)) por @chenos
  - Suporte para autenticação básica ([#9558](https://github.com/nocobase/nocobase/pull/9558)) por @chenos
- **[Visualizador de Arquivos do Office]** Migra o plugin de visualização de arquivos do Office para o cliente v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) por @Molunerfinn
- **[Workflow]**

  - Adiciona controle de timeout para workflows, suporte para abortar automaticamente execuções que excederam o tempo limite se a opção de timeout estiver definida ([#9363](https://github.com/nocobase/nocobase/pull/9363)) por @mytharcher
  - Adicionada uma API de administrador para reexecutar execuções de workflow iniciadas a partir do início ou de um nó especificado. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher
- **[IdP: OAuth]** Adicionado suporte base para single sign-on de aplicativos em implantações multi-aplicativo ([#9547](https://github.com/nocobase/nocobase/pull/9547)) por @2013xile
- **[Bloco: Gantt]** Adicionado suporte v2 para o bloco Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) por @jiannx
- **[App SSO]** Adicionado um plugin App SSO para login automático entre aplicações por @2013xile
- **[Política de senha]** Migra plugin-password-policy para o shell admin client-v2 com as páginas de configurações de Política de senha / Usuários bloqueados e aplicação de regras no lado do cliente no formulário de alteração de senha do centro do usuário. por @Molunerfinn
- **[Workflow: Webhook]** Adiciona status de resposta 408 para workflow webhook com timeout (modo síncrono) por @mytharcher
- **[Workflow: Subfluxo]** Suporte para configuração de timeout em workflow por @mytharcher
- **[Auth: OIDC]** Migra `plugin-auth-oidc` para o admin v2; botão de login, formulário de configurações do admin e redirecionamento automático SSO agora funcionam no v2. por @Molunerfinn
- **[Workflow: Aprovação]** Suporte para configuração de timeout em workflow por @mytharcher
- **[Supervisor de aplicativos]** Adicionadas configurações de App SSO para sub-aplicações por @2013xile
- **[Auth: LDAP]** Adiciona entrada de cliente v2 para que o autenticador LDAP renderize seu formulário de login e configurações de admin em aplicativos v2. por @Molunerfinn

### 🚀 Melhorias

- **[client-v2]**

  - adiciona configuração de seleção de linha em tabela v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) por @katherinehhh
  - suporta cores de ação no painel de ações ([#9612](https://github.com/nocobase/nocobase/pull/9612)) por @katherinehhh
  - Remove a opção Oculto da configuração de menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) por @zhangzhonghe
- **[client]** Remove a opção Oculto das configurações de item de menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe
- **[cli]** simplifica o fluxo de atualização do aplicativo ([#9587](https://github.com/nocobase/nocobase/pull/9587)) por @chenos
- **[Gerenciador de notificações]** Migra os plugins relacionados a notificações para o v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) por @Molunerfinn
- **[Funcionários de IA]** Melhorado o campo URL Base do LLM para que possa usar variáveis de escopo global em formulários de criação e edição. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock
- **[Workflow]** Refatora as verificações de disponibilidade de nós assíncronos do workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) por @mytharcher
- **[Visualização de dados]** Adicionado suporte client v2 para blocos de gráfico. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) por @jiannx
- **[Restrição de IP]** Adiciona um cliente v2 para o plugin de restrição de IP. por @Molunerfinn

### 🐛 Correções de Bugs

- **[client]**

  - Corrige a largura do badge na barra de navegação superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
  - aumenta o limite de upload de imagem na entrada de digitalização ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - Corrige o desaparecimento das abas da página após alternar menus ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe
  - corrige problema onde a subtabela no subformulário não conseguia adicionar uma segunda linha ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - corrige a preservação do formato de hora para campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - corrige a sincronização do valor do popup do seletor de data móvel ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - corrige a sincronização do estado oculto para vinculação de subformulário ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh
  - corrige a preservação do formato de hora para campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - corrige problema onde a subtabela no subformulário não conseguia adicionar uma segunda linha ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - corrige a sincronização do valor do popup do seletor de data móvel ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - aumenta o limite de upload de imagem na entrada de digitalização ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
- **[flow-engine]**

  - Corrigido o nível de log incorreto no frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) por @gchust
  - Corrige menus em cascata instáveis ao digitar em caixas de pesquisa ([#9473](https://github.com/nocobase/nocobase/pull/9473)) por @zhangzhonghe
  - Corrigido um problema onde as regras de vinculação de ação de tabela eram executadas incorretamente após um formulário ser enviado com sucesso em um popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust
- **[ai]** Dependências do LangChain fixadas em versões estáveis para evitar falhas na execução de ferramentas Ollama e evitar lançamentos upstream afetados ([#9604](https://github.com/nocobase/nocobase/pull/9604)) por @cgyrock
- **[client-v2]**

  - Corrige a renderização de modelos de tradução brutos nas abas de login de sub-aplicativos e impede que o drawer de edição de método de autenticação v2 perca valores de campo ao enviar. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) por @Molunerfinn
  - Melhora o desempenho da página do gerenciador de plugins usando CSS line-clamp em vez de antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) por @Molunerfinn
  - Corrigido os metadados de idioma do navegador para que a página do aplicativo siga o idioma do aplicativo selecionado em vez de ser marcada como Inglês. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) por @Molunerfinn
- **[build]**

  - Os assets de texto em builds de servidor agora são copiados como arquivos em vez de serem convertidos em módulos JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) por @Molunerfinn
  - Corrigido a saída de ofuscação do servidor do plugin para evitar globais do navegador em bundles de runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn
- **[Bloco: Gantt]** Corrigido o caminho da pasta compartilhada do gantt v2 e adicionado listras zebradas. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) por @jiannx
- **[Configurações de licença]** Adicionado suporte client-v2 para configurações de licença e injeção de licença comercial. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) por @jiannx
- **[Workflow: Evento de ação personalizada]**

  - Corrige opções duplicadas de Acionar workflow em menus de ação de bloco v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) por @zhangzhonghe
  - Filtra as opções de vinculação de workflow de ação personalizada pela coleção do bloco atual. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) por @mytharcher
  - Corrigido botões de ação personalizada em tabela com contexto de múltiplos registros permitindo incorretamente a seleção de workflows de contexto personalizado. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher
- **[Coleção: Árvore]** Corrige o erro causado por dados pai-filho circulares em coleções de árvore ([#9603](https://github.com/nocobase/nocobase/pull/9603)) por @zhangzhonghe
- **[Gerenciador de arquivos]**

  - Melhoradas as mensagens de falha na visualização de PDF e documentados os requisitos de CORS para armazenamento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referência: [Visualização de Arquivos](docs/docs/pt-br/file-manager/file-preview/index.md)
  - Melhoradas as mensagens de falha na visualização de PDF e documentados os requisitos de CORS para armazenamento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referência: [Visualização de Arquivos](docs/docs/pt-br/file-manager/file-preview/index.md)
  - Renderiza visualizações de PDF com segurança usando PDF.js em vez de renderização bruta de PDF baseada em iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher
  - Corrigida a normalização de nomes de arquivo Unicode durante o upload para evitar a geração de chaves de objeto com caracteres de controle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher
- **[Funcionários de IA]**

  - Corrigido botões de atalho de IA obtendo um contexto de bloco vazio após blocos de tabela referenciados serem removidos. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
  - corrigida descrição incorreta do nome da ferramenta no prompt de contexto de trabalho ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock
- **[Workflow: Nó manual]** Corrigido salvamentos temporários para tarefas de workflow manual não persistindo valores de formulário enviados. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher
- **[plugin-commercial]** Adicionados componentes de licença comercial client-v2 e entrada de status de licença na barra superior. por @jiannx
- **[IA: Base de conhecimento]** Dependências do LangChain fixadas em versões estáveis para evitar falhas na execução de ferramentas Ollama e evitar lançamentos upstream afetados por @cgyrock
- **[Gerenciador de migração]** Corrige diffs de migração do PostgreSQL para que colunas herdadas filhas não sejam removidas quando uma coluna local se torna herdada. por @hongboji
- **[Impressão de modelo]** Corrigido erros de conversão de PDF na impressão de modelo não sendo retornados corretamente ao cliente por @jiannx
- **[Auth: OIDC]** Corrigido vazamento de token quando callbacks de login SSO recebem uma URL de redirecionamento externa por @2013xile
- **[Workflow: Aprovação]**

  - Corrige o problema onde a API `jobs:resume` não é suportada pelo nó de aprovação por @mytharcher
  - Corrigido a retirada de aprovação para atualizar dados de negócio enviados, respeitando as permissões de atualização da coleção de origem. por @mytharcher
  - Corrigido tarefas de aprovação obsoletas quando workflows de aprovação são encerrados por falhas em nós que não são de aprovação. por @mytharcher
