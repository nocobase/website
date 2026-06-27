---
title: "NocoBase v2.0.52: adicionar variável de idioma do usuário atual no v2"
description: "Nota de lançamento da v2.0.52"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Adiciona variável de idioma do usuário atual no v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) por @katherinehhh

  - Adiciona opção de limite de intervalo de datas para campos de data em formulários v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) por @katherinehhh

### 🚀 Melhorias

- **[client]** Exclui registros já associados no diálogo de seleção de associação do bloco de tabela um-para-muitos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh

- **[Departamentos]** Otimiza o estilo da lista de departamentos adicionando ícones e ajustando espaçamento ([#9435](https://github.com/nocobase/nocobase/pull/9435)) por @katherinehhh

- **[IA: Base de conhecimento]** O identificador único de uma base de conhecimento é configurável no momento da criação por @cgyrock

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido o problema em que as configurações de valor padrão legadas não podiam ser removidas. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust

  - Corrigido o problema em que não era possível selecionar opções para o campo de seleção de associação. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust

  - Corrigido um problema em que o escopo de dados do bloco de destino era definido incorretamente ao desmarcar dados de linha em um fluxo de evento de bloco de tabela. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust

  - Corrige requisições duplicadas de tabela quando formulários de filtro possuem valores padrão ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe

  - Corrigidas as regras de vinculação V2 para suportar a definição de opções selecionáveis para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx

  - Corrige erro ao alterar o campo de título de um campo de associação no bloco de tabela v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh

  - Corrigido um problema intermitente em que as regras de vinculação de botões de ação não surtiam efeito. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) por @gchust

  - Oculta o componente de subtabela para campos de associação muitos-para-muitos na subtabela v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) por @katherinehhh

- **[server]** Correção (gerenciador de arquivos): forçar download de arquivos de conteúdo ativo no armazenamento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher

- **[Funcionários IA]** Corrigido o teste de voo do Ollama que exigia entrada de chave ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock

- **[Gerenciador de coleção gráfica]** Corrige erro de filtro de ação de atualização no layout automático da interface gráfica ([#9421](https://github.com/nocobase/nocobase/pull/9421)) por @katherinehhh

- **[Workflow]** Correção: restaura texto de ajuda nos diálogos de vinculação de workflow do FlowModel para eventos de ação de operação e ação personalizada ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher

- **[Departamentos]** Corrige conflito de tradução entre os botões de adicionar usuário e adicionar departamento nas configurações de Usuários e Permissões ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh

- **[Campo de coleção: Markdown(Vditor)]** Corrige dica de ferramenta do campo markdown sendo ocultada no layout de formulário horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) por @katherinehhh

- **[Cliente WEB]** Corrige filtragem de tipo de rota ao usar rótulos traduzidos ([#9425](https://github.com/nocobase/nocobase/pull/9425)) por @zhangzhonghe

- **[Workflow: Aprovação]**
  - Corrige o problema em que o campo JS aparecia nas configurações do processo de aprovação por @zhangzhonghe

  - Corrige o layout do formulário de aprovação em dispositivos móveis por @zhangzhonghe

  - Corrige índice duplicado de registro de aprovação ao delegar tarefas de aprovação. por @mytharcher

- **[Gerenciador de backup]** Corrigido um problema em que os backups falhavam com um erro quando os arquivos não podiam ser encontrados. por @gchust
