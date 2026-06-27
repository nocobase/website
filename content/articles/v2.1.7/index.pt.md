---
title: "NocoBase v2.1.7: Suporte a backup e restauração para KingBase como banco de dados principal"
description: "Nota de lançamento da v2.1.7"
---

### 🎉 Novas Funcionalidades

- **[Gerenciador de backup]** Suporte para backup e restauração do KingBase como banco de dados principal ([#9791](https://github.com/nocobase/nocobase/pull/9791)) por @2013xile
- **[Gerenciador de migração]** Suporte para migrações do KingBase como banco de dados principal. por @2013xile

### 🚀 Melhorias

- **[IA: Base de conhecimento]** Melhorias na recuperação e documentação da base de conhecimento de IA. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) por @cgyrock
- **[cli]** Adicionada versão do esquema de configuração de ambiente ([#9782](https://github.com/nocobase/nocobase/pull/9782)) por @chenos
- **[Workflow]** Estabilização do teste de opções de atualização ([#9773](https://github.com/nocobase/nocobase/pull/9773)) por @mytharcher
- **[Gerenciador de arquivos]** Visualizações de PDF aprimoradas: arquivos PDF de origem cruzada agora usam o visualizador nativo do navegador, enquanto arquivos PDF da mesma origem continuam usando o PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) por @mytharcher
- **[Gerenciador de backup]** Tabelas cujo `dataCategory` da coleção está marcado como `'runtime'` agora são automaticamente excluídas dos backups. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) por @cgyrock
- **[IA: Base de conhecimento]** Melhorias na segmentação de documentos da base de conhecimento de IA, gerenciamento de segmentos, testes de acerto e suporte a nós de workflow de documentos. por @cgyrock

### 🐛 Correções de Bugs

- **[client-v2]**

  - Corrigido um problema em que o envio de formulário exibia uma mensagem incorreta quando um subformulário continha uma subtabela. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) por @gchust
  - Corrigido um problema em que os fluxos de eventos nas colunas de subtabela eram executados incorretamente. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) por @gchust
  - Removido `updateAssociationValues` inesperado de campos de associação ([#9812](https://github.com/nocobase/nocobase/pull/9812)) por @katherinehhh
  - Corrigidas opções Sim/Não não traduzidas nos menus suspensos de caixa de seleção do formulário de filtro v2. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) por @katherinehhh
  - Corrigido o problema em que as configurações de fluxo de eventos não podiam ser atualizadas após salvar um bloco como modelo. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) por @gchust
  - Corrigida exibição incorreta e configurações de formato quando os campos de título de associação da tabela v2 usam campos de hora, somente data ou data e hora. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) por @katherinehhh
- **[Workflow]** Corrigida a recuperação do dispatcher de workflow após erros inesperados de despacho. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) por @mytharcher
- **[Gerenciador de arquivos]** Corrigidos erros 404 ao enviar arquivos para campos de URL de anexo em fontes de dados externas ([#9809](https://github.com/nocobase/nocobase/pull/9809)) por @2013xile
- **[Ação: Solicitação personalizada]** Corrigidas ações de solicitação personalizada V2 exibindo um erro desnecessário quando as configurações de solicitação não estão configuradas. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) por @katherinehhh
- **[Funcionários de IA]**

  - Corrigido um problema em que os funcionários de IA não conseguiam preencher corretamente os dados da subtabela. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) por @gchust
  - Corrigidos gatilhos de tarefas de atalho de funcionários de IA para que os anexos do contexto de trabalho atual sejam incluídos ao executar uma tarefa a partir do perfil de atalho. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) por @cgyrock
- **[Workflow: Evento de ação personalizada]** Corrigidos botões de workflow de gatilho do painel de ação v2 exibindo sucesso e enviando uma solicitação quando nenhum workflow está vinculado. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) por @mytharcher
- **[Mecanismo de fluxo]** Corrigido um problema em que formulários e detalhes de registro atual em pop-up podiam conter dados incorretos quando construídos por IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) por @gchust
- **[Gerenciador de tarefas assíncronas]** Corrigidos erros de download de arquivo de tarefa assíncrona quando o id da tarefa está ausente de `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) por @mytharcher
- **[Fonte de dados: NocoBase externo]** Ações de upload e armazenamento de arquivos de fonte de dados NocoBase externa por fonte de dados de upload por @2013xile
- **[Multi-espaço]** Corrigidos erros de permissão quando gerentes de espaço adicionam usuários sem acesso ao campo de e-mail do usuário. por @jiannx
- **[Workflow: Subfluxo]** Corrigidos subfluxos assíncronos para que workflows pai possam ser retomados após reinicialização do worker ou perda de mapeamento de eventos em memória. por @mytharcher
- **[Supervisor de aplicativo]** Corrigida uma falha quando as respostas do proxy WebSocket remoto falham por @2013xile
