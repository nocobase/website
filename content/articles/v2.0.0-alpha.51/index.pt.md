---
title: "NocoBase v2.0.0-alpha.51: Suporte à personalização de estilos globais no editor de temas"
description: "Nota de lançamento da v2.0.0-alpha.51"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Suporte para personalizar estilos globais no editor de temas ([#7960](https://github.com/nocobase/nocobase/pull/7960)) por @ljmiaoo

  - Suporte para definir regra de ordenação padrão no bloco de detalhes ([#8070](https://github.com/nocobase/nocobase/pull/8070)) por @katherinehhh

  - Suporte para definir tipo de dados para campo Numérico (opções: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) por @chenos

- **[Campo de coleção: Sequência]** Atualizar automaticamente campos de sequência após migração de dados ([#8063](https://github.com/nocobase/nocobase/pull/8063)) por @cgyrock

### 🚀 Melhorias

- **[client]**
  - corrigir salto de paginação da subtabela após remoção de linha e adicionar suporte para regras de validação de coluna ([#8094](https://github.com/nocobase/nocobase/pull/8094)) por @katherinehhh

  - ajustar exibição de campo grande na subtabela editável ([#8078](https://github.com/nocobase/nocobase/pull/8078)) por @katherinehhh

  - suporte para reticências em conteúdo de campo JSON transbordante ([#8067](https://github.com/nocobase/nocobase/pull/8067)) por @katherinehhh

- **[flow-engine]**
  - Adicionar opção useCache ao FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) por @zhangzhonghe

  - Adicionar método `removeModelWithSubModels` para remover recursivamente modelo e seus submodelos ([#8064](https://github.com/nocobase/nocobase/pull/8064)) por @zhangzhonghe

- **[Bloco: GridCard]** adicionar configuração de contagem de linhas ao grid card e substituir pageSize por cálculo automático ([#8055](https://github.com/nocobase/nocobase/pull/8055)) por @katherinehhh

- **[Logs de auditoria]** Atualizar o campo de identificador único para `text` para evitar estouro de comprimento do identificador durante edições em massa por @2013xile

- **[Gerenciador de migração]** Atualizar automaticamente campos de sequência após migração de dados por @cgyrock

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido um problema onde os campos configurados de um bloco removido não eram excluídos do bloco de filtro. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) por @gchust

  - corrigir espaço extra quando o botão está oculto no modo de não configuração ([#8092](https://github.com/nocobase/nocobase/pull/8092)) por @katherinehhh

  - Corrigido um problema onde o texto do botão de redefinição no bloco de formulário de filtro não podia ser modificado. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) por @gchust

  - Corrigido um problema onde a entrada do campo não suportava múltiplos valores ao usar os operadores $in ou $notIn para filtrar campos. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) por @gchust

  - Corrigido um problema onde blocos de dados recém-adicionados não apareciam automaticamente no menu de campos do bloco de formulário de filtro. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) por @gchust

  - O menu de configuração para campos de associação em formulários de filtro não deve exibir a opção de criação rápida. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) por @gchust

  - corrigir problema de dados de subtabela de associação no bloco Lista ([#8082](https://github.com/nocobase/nocobase/pull/8082)) por @katherinehhh

  - corrigir regras de validação de campo numérico das configurações de coleção não aplicadas ([#8025](https://github.com/nocobase/nocobase/pull/8025)) por @katherinehhh

  - Corrigido um problema onde campos em formulários de filtro eram restringidos por regras de validação de backend para campos. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) por @gchust

  - problema de edição rápida de campo json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) por @katherinehhh

  - corrigir problema de exibição de campo grande na edição de subtabela ([#8069](https://github.com/nocobase/nocobase/pull/8069)) por @katherinehhh

  - corrigir criação rápida lança erro quando allowMultiple está desabilitado na seleção de registro de associação ([#8034](https://github.com/nocobase/nocobase/pull/8034)) por @katherinehhh

  - corrigir campo json deve ser enviado como um objeto ([#8057](https://github.com/nocobase/nocobase/pull/8057)) por @katherinehhh

  - Corrigido um problema onde a tecla Enter não podia ser usada para acionar a ação de filtro. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) por @gchust

- **[flow-engine]**
  - Corrigido um problema onde opções de configuração do componente anterior permaneciam visíveis no menu após alternar componentes de campo. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) por @gchust

  - Mover useEffect antes do retorno condicional no FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) por @zhangzhonghe

  - Corrigido um problema onde campos de associação não suportados apareciam nos campos de operação de filtro. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) por @gchust

- **[acl]** corrigir: acl.allow executado muito cedo ([#8065](https://github.com/nocobase/nocobase/pull/8065)) por @chenos

- **[Gerenciador de arquivos]**
  - Corrigir exibição incorreta de dados de subdetalhes em blocos Lista e GridCard ([#8087](https://github.com/nocobase/nocobase/pull/8087)) por @katherinehhh

  - Corrigir campo de anexo não exibido corretamente na subtabela readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) por @katherinehhh

- **[Workflow]**
  - Corrigir o problema onde um erro é lançado na tela de execução quando um nó é excluído ([#8090](https://github.com/nocobase/nocobase/pull/8090)) por @mytharcher

  - Corrigir o problema onde a página de execução lança erro quando jobs no nó é indefinido ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher

- **[Campo de coleção: Fórmula]** Corrigido um problema onde campos de fórmula não podiam ser adicionados ao bloco de formulário de filtro. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) por @gchust

- **[Bloco: Painel de ações]** otimizar estilo no layout Lista do bloco de painel de ações ([#8084](https://github.com/nocobase/nocobase/pull/8084)) por @katherinehhh

- **[Funcionários de IA]**
  - Resolver problema onde o nome da função da fonte de dados não era compilado ([#8076](https://github.com/nocobase/nocobase/pull/8076)) por @heziqiang

  - Corrigido um problema onde alguns campos de registro atual não podiam ser exibidos no componente de seleção de variáveis. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) por @gchust

- **[Ação: Importar registros]** Campos importados não correspondem aos campos definidos nas configurações ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile

- **[Controle de acesso]** Adicionar middleware para verificações de permissão em operações de associação para fonte de dados externa ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile

- **[Workflow: Aprovação]**
  - Corrigir o problema onde não há dados ao carregar aprovações relacionadas com variáveis de escopo ACL por @mytharcher

  - Corrigir o problema onde dados preenchidos desapareciam no formulário do responsável por @mytharcher

  - Corrigir o problema de erro de permissão lançado ao carregar aprovações relacionadas ao registro no drawer de detalhes por @mytharcher

  - Corrigir o problema onde o processo está incorreto ao ramificar com ordem e co-assinatura por @mytharcher

  - Corrigir o problema quando OOM acontece ao listar aprovações por @mytharcher

  - Corrigir o problema onde registros de aprovação não são incluídos no resultado do job no ramo de retorno por @mytharcher

  - Corrigir o problema onde a janela pop-up do aprovador não exibe um título por @zhangzhonghe

  - Corrigir o problema onde erro é lançado ao carregar aprovação relacionada no modo de função somente união por @mytharcher

- **[Gerenciador de e-mail]**
  - Tratamento de dados anormais por @jiannx

  - não sincronizando status agendado do gmail por @jiannx
