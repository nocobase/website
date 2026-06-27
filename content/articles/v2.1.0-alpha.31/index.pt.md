---
title: "NocoBase v2.1.0-alpha.31: adicionar ações de associar e desassociar ao bloco de associação"
description: "Nota de lançamento da v2.1.0-alpha.31"
---

### 🎉 Novas Funcionalidades

- **[client]** Adicionar ações de associar e desassociar ao bloco de associação ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh

- **[Cópia de texto]** Suporte à opção "Exibir botão de cópia" para campo de texto somente leitura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh

- **[Funcionários de IA]** O nó de funcionário de IA do Workflow suporta carregar arquivos de campos de anexo. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) por @cgyrock

- **[Visualização de dados]** Adicionar suporte client-v2 para plugins de bloco ([#9297](https://github.com/nocobase/nocobase/pull/9297)) por @zhangzhonghe

### 🚀 Melhorias

- **[client]** Permitir atribuir valor de campo para campo de sequência ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn

- **[Bloco: Kanban]** Melhorada a consistência do espaçamento de campos de detalhes v2 e ajustado o espaçamento do cartão kanban e colunas para melhor adaptação às configurações de tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) por @jiannx

- **[Workflow: Aprovação]** Corrigir comportamento de validação de campo obrigatório para formulários de aprovação por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir formulários de filtro que não podiam ser recolhidos ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe

  - Corrigido o gatilho de workflow em lote da tabela v2 para que a seleção de linhas permaneça consistente após redirecionar entre abas e as linhas possam ser selecionadas novamente após retornar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx

  - Corrigido campos `Oculto (valor reservado)` em blocos de formulário para que permaneçam visíveis no modo Editor de UI, e restaurado o suporte à entrada de valor para atribuí-los em Atribuição de campo ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx

  - corrigir adaptação do DividerItem ao tema no v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh

  - Corrigir nomes de arquivo de download incorretos para campos AttachmentURL quando os metadados do arquivo estão ausentes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher

  - Corrigir o erro ao filtrar campos escalares com filtros personalizados de múltipla seleção ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe

  - Corrigido regras de vinculação não sendo reexecutadas após alterações nos valores do formulário. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust

  - Corrigir o problema onde regras de vinculação de subtabela v1 alteram incorretamente os estilos de campos obrigatórios ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe

  - corrigir renderização incorreta de dados no bloco de cartão em grade após atualização e recarregamento ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh

  - corrigir campo de opção obrigatório em subtabela não validado corretamente na primeira seleção em dispositivos móveis ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh

  - corrigir ocultar opção de criação rápida para campo de seleção de associação em subtabela v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh

  - Corrigir o problema onde variáveis de parâmetro de consulta URL se tornam inválidas após alternar entre páginas em cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe

- **[mecanismo de fluxo]** Corrigido mensagens de validação de campo de tabela de dados não traduzidas em formulários de fluxo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx

- **[servidor]**
  - Corrigido requisições de descoberta OAuth de sub-aplicações sendo roteadas como requisições da aplicação principal ([#9383](https://github.com/nocobase/nocobase/pull/9383)) por @2013xile

  - validar nomes de pacotes de plugins antes de operações no sistema de arquivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos

- **[client-v2]**
  - Corrigido erro ao selecionar campos de associação nas configurações de campo. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) por @gchust

  - Corrigir o problema onde uma página 404 pisca após a inicialização do aplicativo ([#9365](https://github.com/nocobase/nocobase/pull/9365)) por @zhangzhonghe

  - Corrigir os problemas de placeholder de arrasto e posição de soltar do bloco de página v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) por @zhangzhonghe

  - Corrigir o problema onde algumas páginas v2 falham ao carregar plugins remotos ([#9369](https://github.com/nocobase/nocobase/pull/9369)) por @zhangzhonghe

- **[undefined]** Corrigir links quebrados na documentação traduzida e habilitar detecção de links quebrados por padrão na compilação da documentação. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) por @Molunerfinn

- **[Notificação: Mensagem no aplicativo]** Corrigido um problema onde a lista de mensagens no aplicativo não atualizava após receber notificações em tempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher

- **[Gerenciador de fonte de dados]** impedir edição e exclusão de todos os registros em permissões de escopo personalizado para fontes de dados externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh

- **[IA: Servidor MCP]** Corrigido o empacotamento do servidor MCP para que as dependências de tempo de execução sejam incluídas ([#9401](https://github.com/nocobase/nocobase/pull/9401)) por @2013xile

- **[Fonte de dados: Principal]** Corrigido tabelas de banco de dados importadas usando o nome de tabela prefixado incorreto quando um prefixo de tabela está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile

- **[Mecanismo de fluxo]** Corrigido um problema onde blocos gerados por IA não podiam ser convertidos de modelos de referência de volta para modelos duplicados. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) por @gchust

- **[Funcionários de IA]**
  - Corrigir erro de leitura de anexo de campo de associações pelo nó de funcionário de IA no workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) por @cgyrock

  - Corrigir nó de funcionário de IA do workflow não terminando corretamente após a atribuição de ferramenta. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) por @cgyrock

- **[Ação: Requisição personalizada]** atualizar koa para v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) por @chenos

- **[Bloco: Kanban]**
  - Melhorado o estilo compacto do cartão Kanban e otimizada a seleção de modelo de pop-up de criação rápida. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) por @jiannx

  - corrigir prevenção de quebra de palavra única em campo de texto longo do bloco kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh

- **[Campo de coleção: Fórmula]** corrigir campo de fórmula em subtabela v2 não acionado para cálculo automático ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh

- **[Ação: Importar registros Pro]** Corrigir o problema onde a verificação de duplicidade em campo de data sempre falha por @mytharcher

- **[Política de senha]** Corrigido um problema onde usuários bloqueados permanentemente podiam fazer login após uma reinicialização do serviço por @2013xile

- **[Workflow: Aprovação]** Corrigir o problema onde o drawer de seleção de registro fica obscurecido na configuração do workflow de aprovação por @zhangzhonghe

- **[Gerenciador de e-mail]** Corrigida a exibição do título das identidades de e-mail por @jiannx

- **[Gerenciador de backup]** corrigir adaptação de esquema pg por @Andrew1989Y
