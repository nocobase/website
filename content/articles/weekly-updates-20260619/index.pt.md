---
title: "Atualizações Semanais｜Adicionar Formulário de Configuração de Armazenamento de Vetores Externo para Bases de Conhecimento de IA"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 12 a 21 de junho de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**Atualmente, o NocoBase é atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.1.9](https://www.nocobase.com/en/blog/v2.1.9)

*Data de lançamento: 2026-06-20*

### 🚀 Melhorias

- **[client-v2]** Adicionada opção de substituir valor para configurações de valor de campo. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) por @gchust

### 🐛 Correções de Bugs

- **[client-v2]**

  - Corrigido o problema em que os botões de gatilho de fluxo de trabalho de ação personalizada enviavam JSON de contexto personalizado sob uma propriedade `values` extra ou como uma string serializada. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) por @mytharcher
  - Corrigido um problema em que configurar o valor de um campo de associação como um valor fixo ou valor padrão não surtia efeito. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) por @gchust
- **[auth]** Dados de senha criptografados não são mais incluídos nas respostas de status de login ([#9836](https://github.com/nocobase/nocobase/pull/9836)) por @2013xile
- **[app]** Ignorar currentScript não relacionado ao inferir o caminho público do plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) por @chenos
- **[UI templates]** Corrigido contexto padrão incorreto para ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) por @gchust

### [v2.1.8](https://www.nocobase.com/en/blog/v2.1.8)

*Data de lançamento: 2026-06-18*

### 🐛 Correções de Bugs

- **[ai]**

  - Bloqueado `@langchain/openai` para atualizações de nível de patch para pacotes de IA. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) por @cgyrock
  - Corrigida resolução de dependência LangChain incompatível para plugins de IA. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) por @cgyrock
- **[AI: Knowledge base]**

  - Corrigidas mensagens de erro pouco claras ao ativar o plugin de base de conhecimento de IA sem o plugin de IA disponível. por @cgyrock
  - Corrigida resolução de dependência LangChain incompatível para o plugin de base de conhecimento de IA. por @cgyrock

### [v2.1.7](https://www.nocobase.com/en/blog/v2.1.7)

*Data de lançamento: 2026-06-18*

### 🎉 Novos Recursos

- **[Backup manager]** Suporte para backup e restauração para KingBase como banco de dados primário ([#9791](https://github.com/nocobase/nocobase/pull/9791)) por @2013xile
- **[Migration manager]** Suporte para migrações para KingBase como banco de dados primário. por @2013xile

### 🚀 Melhorias

- **[AI: Knowledge base]** Melhorada a recuperação e documentação da base de conhecimento de IA. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) por @cgyrock
- **[cli]** Adicionar versão do esquema de configuração env ([#9782](https://github.com/nocobase/nocobase/pull/9782)) por @chenos
- **[Workflow]** Estabilizar teste de opções de atualização ([#9773](https://github.com/nocobase/nocobase/pull/9773)) por @mytharcher
- **[File manager]** Visualizações de PDF melhoradas: arquivos PDF de origem cruzada agora usam o visualizador nativo do navegador, enquanto arquivos PDF da mesma origem continuam a usar PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) por @mytharcher
- **[Backup manager]** Tabelas cujo `dataCategory` da coleção é marcado como `'runtime'` agora são automaticamente excluídas dos backups. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) por @cgyrock
- **[AI: Knowledge base]** Melhorada a segmentação de documentos da base de conhecimento de IA, gerenciamento de segmentos, testes de acerto e suporte a nós de fluxo de trabalho de documentos. por @cgyrock

### 🐛 Correções de Bugs

- **[client-v2]**

  - Corrigido um problema em que o envio do formulário mostrava uma mensagem incorreta quando um subformulário continha uma subtabela. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) por @gchust
  - Corrigido um problema em que os fluxos de eventos nas colunas da subtabela eram executados incorretamente. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) por @gchust
  - Removido `updateAssociationValues` inesperado de campos de associação ([#9812](https://github.com/nocobase/nocobase/pull/9812)) por @katherinehhh
  - Corrigidas opções Sim/Não não traduzidas em menus suspensos de caixa de seleção do formulário de filtro v2. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) por @katherinehhh
  - Corrigido o problema em que as configurações de fluxo de eventos não podiam ser atualizadas após salvar um bloco como modelo. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) por @gchust
  - Corrigida exibição incorreta e configurações de formato quando os campos de título de associação da tabela v2 usam campos de hora, somente data ou data e hora. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) por @katherinehhh
- **[Workflow]** Corrigida recuperação do despachante de fluxo de trabalho após erros de despacho inesperados. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) por @mytharcher
- **[File manager]** Corrigidos erros 404 ao enviar arquivos para campos de URL de anexo em fontes de dados externas ([#9809](https://github.com/nocobase/nocobase/pull/9809)) por @2013xile
- **[Action: Custom request]** Corrigidas ações de solicitação personalizada V2 mostrando um erro desnecessário quando as configurações de solicitação não estão configuradas. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) por @katherinehhh
- **[AI employees]**

  - Corrigido um problema em que os funcionários de IA não conseguiam preencher corretamente os dados da subtabela. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) por @gchust
  - Corrigidos gatilhos de tarefa de atalho do funcionário de IA para que os anexos do contexto de trabalho atual sejam incluídos ao executar uma tarefa a partir do perfil de atalho. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) por @cgyrock
- **[Workflow: Custom action event]** Corrigidos botões de fluxo de trabalho do gatilho v2 do painel de ação mostrando sucesso e enviando uma solicitação quando nenhum fluxo de trabalho está vinculado. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) por @mytharcher
- **[Flow engine]** Corrigido um problema em que formulários de registro atual e detalhes em pop-up podiam conter dados incorretos quando construídos por IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) por @gchust
- **[Async task manager]** Corrigidos erros de download de arquivo de tarefa assíncrona quando o id da tarefa está faltando em `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) por @mytharcher
- **[Data source: External NocoBase]** Proxy de ações de upload e armazenamento de arquivos de fonte de dados externa NocoBase pela fonte de dados de upload por @2013xile
- **[Multi-space]** Corrigidos erros de permissão quando gerentes de espaço adicionam usuários sem acesso ao campo de e-mail do usuário. por @jiannx
- **[Workflow: Subflow]** Corrigidos subfluxos assíncronos para que os fluxos de trabalho pai possam ser retomados após reinicialização do worker ou perda de mapeamento de eventos na memória. por @mytharcher
- **[App supervisor]** Corrigida uma falha quando as respostas do proxy WebSocket remoto falham por @2013xile

### [v2.1.5](https://www.nocobase.com/en/blog/v2.1.5)

*Data de lançamento: 2026-06-15*

### 🎉 Novos Recursos

- **[Workflow: Mailer node]** Adicionado suporte para envio de anexos em nós de mailer de fluxo de trabalho. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) por @mytharcher

### 🚀 Melhorias

- **[client-v2]** Escopos de dados de coluna de campo de relação em subtabelas de formulário agora suportam variáveis de item atual. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) por @gchust
- **[undefined]** Unificado o nome da documentação em chinês do plugin de controle de versão como “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) por @cgyrock
- **[File manager]** Adicionado suporte a texto selecionável para visualizações de PDF no gerenciador de arquivos para PDFs com texto incorporado. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) por @mytharcher
- **[Action: Bulk edit]** Otimizado o método de carregamento para plugins de ação v2 e mantida a ordem dos botões de ação migrados estável. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) por @katherinehhh
- **[Version control]** Alterado o nome de exibição em chinês do plugin de controle de versão para “版本控制”. por @cgyrock

### 🐛 Correções de Bugs

- **[cli-v1]** Corrigido um erro ao executar `yarn dev` após atualizar projetos criados com create-nocobase-app de 2.0 para 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) por @Molunerfinn
- **[client-v2]** Corrigido o problema em que o progresso da migração não mostrava a visualização de progresso dedicada. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) por @2013xile
- **[flow-engine]** Corrigidos problemas de entrada IME vietnamita e chinês em campos de texto de linha única e texto multilinha v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) por @katherinehhh
- **[server]** Corrigido tratamento inseguro de nome de plugin em `pm:enable` para evitar riscos de inclusão de arquivo local durante a resolução do plugin. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) por @mytharcher
- **[File manager]** Corrigidas falhas de visualização de PDF causadas por carregamento anormal do módulo worker pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) por @mytharcher
- **[Block: Kanban]** Corrigido o problema em que abrir blocos de Calendário, Gantt e Kanban fora do modo de edição persistia inesperadamente ações pop-up ocultas e enviava repetidamente solicitações de exclusão. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) por @jiannx
- **[Action: Export records Pro]** Configurações de modo de processamento melhoradas e dicas explicativas para v2 Import/Export Pro. por @katherinehhh
- **[Migration manager]** Corrigidas possíveis falhas ao importar grandes arquivos de dados de migração. por @2013xile
- **[Template print]** Tipos de arquivo de modelo não suportados rejeitados antes do início da impressão do modelo. por @2013xile

### [v2.1.4](https://www.nocobase.com/en/blog/v2.1.4)

*Data de lançamento: 2026-06-13*

### 🚀 Melhorias

- **[Workflow]** Melhorada a experiência de edição de metadados de fluxo de trabalho, suportando edição de descrição no pop-up de detalhes e preenchendo automaticamente os metadados do fluxo de trabalho de origem ao duplicar fluxos de trabalho. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) por @mytharcher

### 🐛 Correções de Bugs

- **[Action: Import records]** Alterados os arquivos de importação enviados para armazenamento em disco para reduzir a pressão de memória durante importações de grandes volumes de dados. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) por @mytharcher
- **[Backup manager]** Corrigido um problema de segurança onde nomes de esquema PostgreSQL inseguros podiam ser aceitos durante a restauração de backup. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) por @2013xile
- **[Workflow]**

  - Corrigido o tratamento de timeout do fluxo de trabalho para que execuções abortadas e suas tarefas pendentes possam ser atualizadas atomicamente. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) por @mytharcher
  - Corrigido o problema em que o campo de última atualização por do fluxo de trabalho não era atualizado após alterações no nó do fluxo de trabalho. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) por @mytharcher
- **[Action: Import records Pro]** Evitada a análise de arquivos grandes no nó de solicitação antes da importação Pro criar uma tarefa assíncrona. por @mytharcher
- **[Version control]** Ajustada a posição da entrada de atalho superior do controle de versão para que apareça ao lado do editor de UI nos layouts de administrador legado e v2. por @cgyrock

### [v2.1.3](https://www.nocobase.com/en/blog/v2.1.3)

*Data de lançamento: 2026-06-12*

### 🚀 Melhorias

- **[cli]**
  - normalizar versões de build compatíveis com o aplicativo ([#9763](https://github.com/nocobase/nocobase/pull/9763)) por @chenos
  - suporte para atualizar habilidades para uma versão especificada ([#9760](https://github.com/nocobase/nocobase/pull/9760)) por @chenos

### 🐛 Correções de Bugs

- **[client]** Corrigido o problema em que os campos em subformulários horizontais eram muito estreitos para exibir dados ([#9755](https://github.com/nocobase/nocobase/pull/9755)) por @zhangzhonghe
- **[Data source manager]**

  - Corrigida a gaveta de edição de campo em branco causada por re-renderizações repetidas na página Configurar campos da fonte de dados externa v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) por @katherinehhh
  - Corrigido um problema em que excluir a categoria de coleção ativa no gerenciador de fontes de dados v1 podia deixar a guia Todas as coleções vazia. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) por @katherinehhh
- **[Async task manager]** Corrigidos IDs de solicitação incorretos nos logs do worker de tarefa assíncrona ([#9686](https://github.com/nocobase/nocobase/pull/9686)) por @2013xile
- **[Workflow: SQL node]** Corrigida a migração de variável de modelo legado do fluxo de trabalho SQL sendo ignorada para alguns usuários de versão beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) por @mytharcher
- **[AI employees]**

  - Corrigida perda de configuração de mensagem em nós LLM de fluxo de trabalho. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) por @cgyrock
  - Corrigido um problema em que anexos colados no diálogo do funcionário de IA não podiam ser removidos. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) por @cgyrock
- **[Block: Kanban]** Corrigido suporte a URL para calendário e pop-ups relacionados. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) por @jiannx
- **[Workflow: Approval]** Corrigido o problema em que os dados relacionados não são exibidos nos formulários de aprovação v2 por @zhangzhonghe

### [v2.1.2](https://www.nocobase.com/en/blog/v2.1.2)

*Data de lançamento: 2026-06-12*

### 🎉 Novos Recursos

- **[AI employees]** Adicionado um formulário de configuração de armazenamento vetorial externo para bases de conhecimento de IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) por @cgyrock
- **[AI: Knowledge base]** Adicionado um formulário de configuração de armazenamento vetorial externo para bases de conhecimento de IA. por @cgyrock

### 🚀 Melhorias

- **[undefined]**

  - Adicionado um cenário de controle de versão ao início rápido do AI Builder ([#9748](https://github.com/nocobase/nocobase/pull/9748)) por @Molunerfinn
    Referência: [Início Rápido do AI Builder](https://docs.nocobase.com/en/ai-builder)
  - Melhorada a documentação de controle de versão com orientação de revisão automática do AI Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) por @cgyrock
- **[cli]** esclarecer texto de configuração de inicialização ([#9750](https://github.com/nocobase/nocobase/pull/9750)) por @chenos
- **[Action: Import records]** Melhorados os diálogos de erro de importação e tarefa assíncrona para que mensagens de erro longas possam ser lidas completamente sem quebrar o layout. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) por @katherinehhh
- **[Action: Import records Pro]** Melhorados os diálogos de importação para que mensagens de erro longas permaneçam legíveis e o modo de processamento v2 possa ser selecionado diretamente no menu de configurações. por @katherinehhh

### 🐛 Correções de Bugs

- **[client-v2]** Corrigido o problema em que as páginas v2 podiam continuar carregando após o login ([#9738](https://github.com/nocobase/nocobase/pull/9738)) por @zhangzhonghe
- **[cli]** exigir Node.js 22 para nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) por @chenos
- **[File manager]** Corrigir visualizações de PDF com texto de fonte CJK/CID ausente após a mudança para pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.2.0-beta.5](https://www.nocobase.com/en/blog/v2.2.0-beta.5)

*Data de lançamento: 2026-06-16*

### 🚀 Melhorias

* **[cli]** Adicionados registros de versão de esquema para configuração env. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) por @chenos
* **[File manager]** Visualizações de PDF melhoradas: arquivos PDF de origem cruzada agora usam a visualização nativa do navegador, enquanto arquivos PDF da mesma origem continuam a ser renderizados com PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) por @mytharcher

### 🐛 Correções de Bugs

* **[client-v2]**
  * Corrigido o problema em que as configurações de fluxo de eventos não podiam mais ser modificadas depois que um bloco era convertido em um modelo. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) por @gchust
  * Corrigido o problema em que as opções do menu suspenso de caixa de seleção em formulários de filtro v2 não exibiam texto traduzido. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) por @katherinehhh
  * Corrigida exibição incorreta e configurações de formato quando o campo de título de um campo de relação de tabela v2 usava um campo de hora, data ou data e hora. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) por @katherinehhh
* **[Flow engine]** Corrigidos dados incorretos em formulários de registro atual e dados de detalhes dentro de pop-ups durante a construção de IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) por @gchust
* **[Workflow: Custom action event]** Corrigido o problema em que os botões de fluxo de trabalho do gatilho v2 do painel de ação ainda mostravam sucesso e enviavam solicitações quando nenhum fluxo de trabalho estava vinculado. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) por @mytharcher
* **[AI employees]** Corrigido o problema em que os funcionários de IA não conseguiam preencher corretamente os dados da subtabela. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) por @gchust

### [v2.2.0-beta.3](https://www.nocobase.com/en/blog/v2.2.0-beta.3)

*Data de lançamento: 2026-06-15*

### 🎉 Novos Recursos

* **[Workflow: Mailer node]** Adicionado suporte para envio de anexos em nós de mailer de fluxo de trabalho. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) por @mytharcher
* **[Workflow]** Adicionado suporte para escopos de transação de banco de dados em fluxos de trabalho. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) por @mytharcher
  Referência: [Transações de banco de dados](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow: Database transaction node]** Adicionado um plugin de nó de fluxo de trabalho de transação de banco de dados. por @mytharcher

### 🚀 Melhorias

* **[client-v2]** Colunas de campo de relação em subtabelas de formulário agora suportam variáveis de item atual em escopos de dados. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) por @gchust
* **[undefined]** Unificado o nome da documentação em chinês do plugin Version control como “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) por @cgyrock
* **[File manager]** Adicionado suporte a texto selecionável para visualizações de PDF no File manager para PDFs com texto incorporado. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) por @mytharcher
* **[Users]** Melhorado o layout das páginas v2 de Usuários e Permissões e otimizado o comportamento da árvore de departamentos. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) por @jiannx
* **[Action: Bulk edit]** Otimizado como os plugins de ação v2 são carregados e mantida a ordem dos botões de ação migrados estável. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) por @katherinehhh
* **[Version control]** Renomeado o nome de exibição em chinês do plugin Version control para “版本控制”. por @cgyrock

### 🐛 Correções de Bugs

* **[cli-v1]** Corrigido um erro ao executar `<span>yarn dev</span>` após atualizar projetos criados com create-nocobase-app de 2.0 para 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) por @Molunerfinn
* **[flow-engine]** Corrigidos problemas de entrada IME vietnamita e chinês em campos de texto de linha única e texto multilinha v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) por @katherinehhh
* **[client-v2]** Corrigido o problema em que o progresso da migração não exibia a visualização de progresso dedicada. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) por @2013xile
* **[server]** Corrigido tratamento inseguro de nome de plugin em `<span>pm:enable</span>` para evitar riscos de inclusão de arquivo local durante a resolução do plugin. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) por @mytharcher
* **[Async task manager]** Corrigidos erros de consulta de banco de dados causados por `<span>filterByTk</span>` ausente ao baixar arquivos de tarefa assíncrona. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) por @mytharcher
* **[File manager]** Corrigidas falhas de visualização de PDF causadas por carregamento anormal do módulo worker pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) por @mytharcher
* **[Block: Kanban]** Corrigido o problema em que abrir blocos de Calendário, Gantt e Kanban no modo não edição persistia inesperadamente ações pop-up ocultas e enviava repetidamente solicitações de exclusão. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) por @jiannx
* **[Action: Export records Pro]** Melhoradas as configurações de modo de processamento e texto de ajuda para v2 Import/Export Pro. por @katherinehhh
* **[Multi-space]** Corrigido o problema em que os administradores de espaço não podiam adicionar usuários do espaço quando não tinham permissão para o campo de e-mail do usuário. por @jiannx
* **[Migration manager]** Corrigidas possíveis falhas ao importar grandes arquivos de dados de migração. por @2013xile
* **[Template print]** Tipos de arquivo de modelo não suportados rejeitados antes do início da impressão do modelo. por @2013xile

### [v2.2.0-beta.2](https://www.nocobase.com/en/blog/v2.2.0-beta.2)

*Data de lançamento: 2026-06-13**

### 🎉 Novos Recursos

- **[AI employees]** Adicionado um formulário de configuração de armazenamento vetorial externo para bases de conhecimento de IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) por @cgyrock
- **[AI: Knowledge base]** Adicionado um formulário de configuração de armazenamento vetorial externo para bases de conhecimento de IA. por @cgyrock
- **[Email manager]** Migrado o cliente do Email manager para v2. por @jiannx

### 🚀 Melhorias

- **[cli]**

  - Otimizadas as verificações de compatibilidade para diferentes formatos de número de versão. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) por @chenos
  - Adicionado suporte para atualizar habilidades para uma versão especificada. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) por @chenos
  - Melhorado o texto dos prompts de configuração de inicialização. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) por @chenos
- **[undefined]**

  - Adicionado um cenário de conversa de controle de versão à página de visão geral do AI Builder. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) por @Molunerfinn
    Referência: [Início Rápido do AI Builder](https://docs.nocobase.com/en/ai-builder)
  - Melhorada a documentação de controle de versão com notas sobre salvamento automático de versão no AI Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) por @cgyrock
    Referência: [Controle de versão](docs/docs/en/ops-management/version-control/index.md)
- **[Workflow]** Melhorada a experiência de edição de metadados de fluxo de trabalho, suportando edição de descrição no pop-up de detalhes e preenchendo automaticamente os metadados do fluxo de trabalho de origem ao duplicar fluxos de trabalho. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) por @mytharcher
- **[Action: Import records]** Melhorados os diálogos de detalhes de erro de importação e tarefa assíncrona para que mensagens de erro longas possam ser visualizadas completamente sem quebrar o layout. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) por @katherinehhh
- **[Translation test tool]** Adicionada uma página de configurações client-v2 para a ferramenta de teste de tradução. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) por @jiannx
- **[Action: Import records Pro]** Melhorados os diálogos de importação para que mensagens de erro longas possam ser visualizadas completamente, e o modo de processamento possa ser selecionado diretamente no menu de configurações v2. por @katherinehhh

### 🐛 Correções de Bugs

- **[client]** Corrigido o problema em que os campos em subformulários horizontais eram muito estreitos para exibir dados. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) por @zhangzhonghe
- **[client-v2]** Corrigido o problema em que as páginas v2 podiam continuar carregando após o login. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) por @zhangzhonghe
- **[cli]** Adicionada detecção de versão do Node.js para o ambiente de execução nb. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) por @chenos
- **[Action: Import records]** Alterados os arquivos de importação enviados para armazenamento em disco para reduzir a pressão de memória durante importações de grandes volumes de dados. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) por @mytharcher
- **[Async task manager]** Corrigidos IDs de solicitação incorretos nos logs do worker de tarefa assíncrona. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) por @2013xile
- **[Workflow]**

  - Corrigido o tratamento de timeout do fluxo de trabalho para que execuções abortadas e suas tarefas pendentes possam ser atualizadas atomicamente. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) por @mytharcher
  - Corrigido o problema em que o campo de última atualização por do fluxo de trabalho não era atualizado após alterações no nó do fluxo de trabalho. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) por @mytharcher
- **[Data source manager]**

  - Corrigida a gaveta de edição de campo em branco causada por re-renderizações repetidas na página Configurar campos da fonte de dados externa v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) por @katherinehhh
  - Corrigido o problema em que excluir a categoria de coleção atual no gerenciador de fontes de dados v1 podia deixar a guia Todas as coleções vazia. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) por @katherinehhh
- **[Backup manager]** Corrigido um problema de segurança onde nomes de esquema PostgreSQL inseguros podiam ser aceitos durante a restauração de backup. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) por @2013xile
- **[Workflow: SQL node]** Corrigido o problema em que a migração de variável de modelo legado do fluxo de trabalho SQL era ignorada para alguns usuários de versão beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) por @mytharcher
- **[Block: Kanban]** Corrigido suporte a URL para Calendário e outros pop-ups. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) por @jiannx
- **[AI employees]**

  - Corrigido o problema em que os anexos colados no diálogo do funcionário de IA não podiam ser removidos. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) por @cgyrock
  - Corrigida perda de configuração de mensagem em nós LLM de fluxo de trabalho. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) por @cgyrock
- **[File manager]** Corrigido texto de fonte Chinesa/CID ausente em algumas visualizações de PDF após a mudança para pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) por @mytharcher
- **[API documentation]** Corrigida a falha de construção do arquivo de declaração do plugin de documentação da API. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) por @katherinehhh
- **[Action: Import records Pro]** Evitada a análise de arquivos grandes no nó de solicitação antes da importação Pro criar uma tarefa assíncrona. por @mytharcher
- **[Version control]** Ajustada a posição da entrada de atalho superior do controle de versão para que apareça ao lado do editor de UI nos layouts de administrador legado e v2. por @cgyrock
- **[Workflow: Approval]** Corrigido o problema em que os dados relacionados não eram exibidos nos formulários de aprovação v2. por @zhangzhonghe
