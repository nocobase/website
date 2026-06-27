---
title: "NocoBase v2.0.0-alpha.57: Adicionar novas variáveis de sistema no fluxo de trabalho, incluindo `instanceId` e `genSnowflakeId`"
description: "Nota de lançamento da v2.0.0-alpha.57"
---

### 🎉 Novas Funcionalidades

- **[Workflow]** Adicionar novas variáveis de sistema no workflow, incluindo `instanceId` e `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) por @mytharcher

### 🚀 Melhorias

- **[client]** usar select para configuração de largura da coluna de operação ([#8218](https://github.com/nocobase/nocobase/pull/8218)) por @katherinehhh
- **[Funcionários de IA]** Corrigir funcionário de IA não respondendo na primeira edição do envio<br/>Remover funcionário de IA embutido desnecessário “Avery Form Assistant”<br/>Adicionar permissões de função inicial padrão para funcionários de IA embutidos<br/>Melhorar tratamento de erros e comportamento de saída dos funcionários de IA<br/>Adicionar suporte para IA acessar variáveis de contexto modal<br/>Adicionar suporte para fontes de dados externas para IA<br/>Corrigir truncamento incorreto de conversa quando IA processa grandes volumes de dados ([#8191](https://github.com/nocobase/nocobase/pull/8191)) por @heziqiang
- **[Workflow]**

  - Adicionar instância de workflow original à API de duplicação ([#8225](https://github.com/nocobase/nocobase/pull/8225)) por @mytharcher
  - Melhorar descrição do campo `changed` no evento de coleção ([#8216](https://github.com/nocobase/nocobase/pull/8216)) por @mytharcher
- **[Gerenciador de tarefas assíncronas]** Melhorado o tratamento de erros durante tarefas de limpeza adicionando mecanismos de captura de exceções para evitar falhas na aplicação ([#8215](https://github.com/nocobase/nocobase/pull/8215)) por @mytharcher
- **[Bloco: Painel de ações]** melhorar exibição de blocos, ações e campos ocultos no modo de configuração ([#8174](https://github.com/nocobase/nocobase/pull/8174)) por @katherinehhh
- **[Modelos de UI]** Adicionado plugin de modelos de UI, fornecendo a capacidade de reutilizar modelos de bloco e modelos de popup. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) por @gchust
- **[Ação: Exportar registros Pro]** importar pro & exportar pro ação suporta controle de permissão por @katherinehhh
- **[Workflow: Aprovação]** Atualizar `approval.data` para a versão mais recente do registro sendo aprovado quando a execução terminar, para corresponder ao modo de exibição "Mais recente" por @mytharcher

### 🐛 Correções de Bugs

- **[mecanismo-de-fluxo]**

  - corrigir problema de verificação de permissão para adicionar registros filhos em tabela de árvore ([#8240](https://github.com/nocobase/nocobase/pull/8240)) por @katherinehhh
  - Corrigido um problema onde algumas variáveis relacionadas a registros de popup de bloco eram exibidas incorretamente. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) por @gchust
  - Corrigido o problema onde ações ou abas adicionadas após arrastar ações ou abas não eram exibidas. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) por @gchust
  - problema de verificação de permissão em fontes de dados externas ([#8221](https://github.com/nocobase/nocobase/pull/8221)) por @katherinehhh
  - corrigir ações de fonte de dados externa sendo ocultadas apesar de ter permissão ([#8217](https://github.com/nocobase/nocobase/pull/8217)) por @katherinehhh
- **[client]**

  - Lidar com regras de vinculação vazias para evitar erros ([#8239](https://github.com/nocobase/nocobase/pull/8239)) por @zhangzhonghe
  - Corrigido o problema onde a coluna de operação do bloco de tabela não podia ser removida. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) por @gchust
  - Corrigido o problema onde a execução de pré-visualização escrevia a saída JSX compilada de volta para stepParams, fazendo com que o código-fonte salvo fosse reescrito. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) por @gchust
  - Corrigir erro de upload de anexo S3 Pro e melhorar pré-visualização de arquivos ([#8211](https://github.com/nocobase/nocobase/pull/8211)) por @katherinehhh
- **[cli]** license-kit é compatível com o caso onde DB_PASSWORD está vazio ([#8220](https://github.com/nocobase/nocobase/pull/8220)) por @jiannx
- **[database]** Corrigir inconsistência na consulta de campo de data entre fontes de dados principal e externas ([#8181](https://github.com/nocobase/nocobase/pull/8181)) por @cgyrock
- **[Campo de coleção: Sequência]** Corrigido um erro quando o comando de reparo de campo-sequência encontra uma coleção inexistente no ambiente atual. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) por @cgyrock
- **[Workflow: Nó manual]** Corrigir o problema onde um erro é lançado ao cancelar a execução de um workflow deletado ([#8258](https://github.com/nocobase/nocobase/pull/8258)) por @mytharcher
- **[Modelos de UI]** Corrigir um erro onde abrir um popup de campo de associação usava incorretamente um modelo de popup de campo não associado. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) por @gchust
- **[Departamentos]** Corrigir um problema onde a pesquisa agregada não consegue localizar usuários ([#8222](https://github.com/nocobase/nocobase/pull/8222)) por @2013xile
- **[Campo de coleção: Muitos para muitos (array)]** Corrigir um problema onde campos muitos-para-muitos (array) não podem ser criados quando o tipo de chave alvo é Snowflake ID (53-bit) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) por @2013xile
- **[Configurações de licença]** Corrigir a exibição anormal do plugin licenciado ([#8214](https://github.com/nocobase/nocobase/pull/8214)) por @jiannx
- **[Ação: Importar registros]** Corrigir o problema onde o índice de linha na mensagem de erro é sempre 1 quando um erro é lançado na ação de importação ([#8244](https://github.com/nocobase/nocobase/pull/8244)) por @mytharcher
- **[Impressão de modelo]** Corrigir requisição de impressão de modelo não funcionando com fontes de dados externas por @katherinehhh
- **[Workflow: Aprovação]**

  - Corrigir reversão duplicada da mesma transação por @mytharcher
  - Corrigir o problema onde aprovar cria associação a um novo registro por @mytharcher
  - Corrigir o problema onde aprovar cria associação muitos-para-um a novos registros por @mytharcher
