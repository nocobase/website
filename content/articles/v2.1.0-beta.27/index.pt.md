---
title: "NocoBase v2.1.0-beta.27: Funcionários de IA podem pesquisar documentação agrupada com comandos Bash"
description: "Nota de lançamento da v2.1.0-beta.27"
---

### 🎉 Novas Funcionalidades

- **[servidor]** Funcionários de IA podem pesquisar documentação agrupada com comandos Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) por @2013xile

- **[Funcionários de IA]** O nó de funcionário de IA do fluxo de trabalho agora suporta carregar arquivos de campos de anexo. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) por @cgyrock

- **[Cópia de texto]** Suporte à opção "Exibir botão de cópia" para campo de texto somente leitura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh

### 🚀 Melhorias

- **[cliente]** Permitir atribuir valor de campo para campo de sequência ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher

- **[Bloco: Kanban]** Melhorada a consistência do espaçamento dos campos de detalhes na v2 e ajustado o espaçamento do cartão kanban e das colunas para melhor adaptação às configurações de tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) por @jiannx

- **[Funcionários de IA]** Melhoradas as ferramentas de edição RunJS do Nathan e reduzida a lentidão durante longas conversas de chat com IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) por @2013xile

- **[Fluxo de trabalho: Aprovação]** Corrigido o comportamento de validação de campos obrigatórios para formulários de aprovação por @zhangzhonghe

### 🐛 Correções de Bugs

- **[mecanismo de fluxo]** Corrigidas mensagens de validação de campo de tabela de dados não traduzidas em formulários de fluxo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx

- **[cliente]**
  - Corrigido formulários de filtro que não podiam ser recolhidos ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe

  - Corrigido o erro ao filtrar campos escalares com filtros de múltipla seleção personalizados ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe

  - Corrigidos nomes de arquivo de download incorretos para campos AttachmentURL quando os metadados do arquivo estão ausentes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher

  - Corrigida a adaptação do DividerItem ao tema na v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh

  - Corrigido o problema onde as regras de vinculação de subtabela v1 alteravam incorretamente os estilos de campos obrigatórios ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe

  - Corrigidos campos `Oculto (valor reservado)` em blocos de formulário para que permaneçam visíveis no modo Editor de UI, e restaurado o suporte à entrada de valor para atribuí-los em Atribuição de campo ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx

  - Corrigido o gatilho de fluxo de trabalho em lote da tabela v2 para que a seleção de linhas permaneça consistente após redirecionar entre abas e as linhas possam ser selecionadas novamente após retornar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx

- **[cliente-v2]**
  - Corrigido erro ao selecionar campos de associação nas configurações de campo. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) por @gchust

  - Corrigido o problema onde uma página 404 pisca após a inicialização do aplicativo ([#9365](https://github.com/nocobase/nocobase/pull/9365)) por @zhangzhonghe

- **[servidor]** Corrigidas requisições de descoberta OAuth de sub-aplicativos sendo roteadas como requisições do aplicativo principal ([#9383](https://github.com/nocobase/nocobase/pull/9383)) por @2013xile

- **[Fonte de dados: Principal]** Corrigidas tabelas de banco de dados importadas usando o nome de tabela prefixado errado quando um prefixo de tabela está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile

- **[Notificação: Mensagem no aplicativo]** Corrigido um problema onde a lista de mensagens no aplicativo não era atualizada após receber notificações em tempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher

- **[Gerenciador de fonte de dados]** Impedir edição e exclusão de todos os registros em permissões de escopo personalizadas para fontes de dados externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh

- **[IA: Servidor MCP]** Corrigido o empacotamento do servidor MCP para que as dependências de tempo de execução sejam incluídas ([#9401](https://github.com/nocobase/nocobase/pull/9401)) por @2013xile

- **[Mecanismo de fluxo]** Corrigido um problema onde blocos gerados por IA não podiam ser convertidos de modelos de referência de volta para modelos duplicados. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) por @gchust

- **[Ação: Importar registros Pro]** Corrigido o problema onde a verificação de duplicidade em campo de data sempre falhava por @mytharcher

- **[Política de senha]** Corrigido um problema onde usuários bloqueados permanentemente podiam fazer login após uma reinicialização do serviço por @2013xile

- **[Fluxo de trabalho: Aprovação]** Corrigido o problema onde o seletor de registro de desenho fica obscurecido na configuração do fluxo de trabalho de aprovação por @zhangzhonghe

- **[Gerenciador de backup]** Corrigida adaptação de esquema pg por @Andrew1989Y
