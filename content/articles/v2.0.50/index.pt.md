---
title: "NocoBase v2.0.50: suporte à opção \"Exibir botão de cópia\" para campo de texto somente leitura"
description: "Nota de lançamento da v2.0.50"
---

### 🎉 Novas Funcionalidades

- **[client]** adicionar ações de associar e desassociar ao bloco de associação ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh

- **[Cópia de texto]** suporte à opção "Exibir botão de cópia" para campo de texto somente leitura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh

### 🚀 Melhorias

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn

- **[client]** Permitir atribuir valor de campo para campo de sequência ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher

### 🐛 Correções de Bugs

- **[flow-engine]** Corrigidas mensagens de validação de campo de tabela de dados não traduzidas em formulários de fluxo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx

- **[client]**
  - Corrigidos campos `Oculto (valor reservado)` em blocos de formulário para permanecerem visíveis no modo Editor de UI, e restaurado o suporte à entrada de valor para atribuição deles em Atribuição de campo ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx

  - Corrigidos nomes de arquivo de download incorretos para campos AttachmentURL quando os metadados do arquivo estão ausentes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher

  - Corrigido o gatilho de fluxo de trabalho em lote da tabela v2 para que a seleção de linhas permaneça consistente após redirecionar entre abas e as linhas possam ser selecionadas novamente após retornar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx

  - Corrigidos formulários de filtro que não podiam ser recolhidos ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe

  - Corrigido o problema onde as regras de vinculação de subtabela v1 alteravam incorretamente os estilos de campos obrigatórios ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe

  - corrigida a renderização incorreta de dados no bloco de cartão em grade após atualização e recarregamento ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh

  - corrigido campo de opção obrigatório em subtabela não validado corretamente na primeira seleção em dispositivos móveis ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh

  - Corrigido o problema onde variáveis de parâmetro de consulta de URL se tornam inválidas após alternar entre páginas em cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe

  - corrigida a adaptação do DividerItem ao tema no v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh

  - corrigida a ocultação da opção de criação rápida para campo de seleção de associação em subtabela v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh

  - Corrigido o problema onde as regras de vinculação não eram reexecutadas após a alteração dos valores do formulário. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust

  - Corrigido o erro ao filtrar campos escalares com filtros personalizados de múltipla seleção ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe

- **[server]** validar nomes de pacotes de plugins antes de operações no sistema de arquivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos

- **[Gerenciador de fonte de dados]** impedir edição e exclusão de todos os registros em permissões de escopo personalizado para fontes de dados externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh

- **[Fonte de dados: Principal]** Corrigidas tabelas de banco de dados importadas usando o nome de tabela prefixado incorreto quando um prefixo de tabela está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile

- **[Notificação: Mensagem no aplicativo]** Corrigido um problema onde a lista de mensagens no aplicativo não era atualizada após receber notificações em tempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher

- **[Bloco: Kanban]** corrigida a quebra de palavras únicas em campo de texto longo do bloco kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh

- **[Campo de coleção: Fórmula]** corrigido campo de fórmula em subtabela v2 que não era acionado para cálculo automático ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh
