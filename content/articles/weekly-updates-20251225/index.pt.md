---
title: "Atualizações Semanais do NocoBase: Otimizações e Correções de Bugs"
description: "A atualização desta semana inclui: Adição de novas variáveis de sistema no fluxo de trabalho, incluindo `instanceId` e `genSnowflakeId`, e mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.32](https://www.nocobase.com/en/blog/v1.9.32)

*Data de lançamento: 2025-12-24*

### 🎉 Novos Recursos

- **[Workflow]** Adicionar novas variáveis de sistema no workflow, incluindo `instanceId` e `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Corrigir estouro de pilha causado por loop infinito no carregamento preguiçoso de campos de associação de exibição ([#8262](https://github.com/nocobase/nocobase/pull/8262)) por @zhangzhonghe
- **[Ação: Importar registros]** Corrigir o problema em que o índice da linha na mensagem de erro é sempre 1 quando um erro é lançado na ação de importação ([#8244](https://github.com/nocobase/nocobase/pull/8244)) por @mytharcher
- **[Workflow: Nó manual]** Corrigir o problema em que um erro é lançado ao cancelar a execução de um workflow deletado ([#8258](https://github.com/nocobase/nocobase/pull/8258)) por @mytharcher
- **[Campo de coleção: Sequência]** Corrigido um erro quando o comando de reparo de campo-sequência encontra uma coleção inexistente no ambiente atual. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) por @cgyrock
- **[Ação: Importar registros Pro]** Corrigir a lógica de verificação única que lançará um erro quando o valor do campo único for nulo por @mytharcher
- **[Workflow: Aprovação]** Corrigir reversão duplicada da mesma transação por @mytharcher

### [v1.9.31](https://www.nocobase.com/en/blog/v1.9.31)

*Data de lançamento: 2025-12-22*

### 🚀 Melhorias

- **[Gerenciador de tarefas assíncronas]** Melhorado o tratamento de erros durante tarefas de limpeza, adicionando mecanismos de captura de exceção para evitar falhas na aplicação ([#8215](https://github.com/nocobase/nocobase/pull/8215)) por @mytharcher
- **[Workflow]** Adicionar instância de workflow original à API de duplicação ([#8225](https://github.com/nocobase/nocobase/pull/8225)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Lidar com regras de vinculação vazias para evitar erros ([#8239](https://github.com/nocobase/nocobase/pull/8239)) por @zhangzhonghe
- **[Departamentos]** Corrigir um problema em que a pesquisa agregada não consegue localizar usuários ([#8222](https://github.com/nocobase/nocobase/pull/8222)) por @2013xile

### [v1.9.30](https://www.nocobase.com/en/blog/v1.9.30)

*Data de lançamento: 2025-12-19*

### 🚀 Melhorias

- **[Workflow]** Melhorar a descrição do campo `changed` no evento de coleção ([#8216](https://github.com/nocobase/nocobase/pull/8216)) por @mytharcher

### 🐛 Correções de Bugs

- **[cli]** license-kit é compatível com o caso em que DB_PASSWORD está vazio ([#8220](https://github.com/nocobase/nocobase/pull/8220)) por @jiannx
- **[database]** Corrigir inconsistência na consulta de campo de data entre fontes de dados principal e externas ([#8181](https://github.com/nocobase/nocobase/pull/8181)) por @cgyrock
- **[Configurações de licença]** Corrigir a exibição anormal do plugin licenciado ([#8214](https://github.com/nocobase/nocobase/pull/8214)) por @jiannx
- **[Workflow: Aprovação]**

  - Corrigir o problema em que aprovar faz com que a associação crie um novo registro por @mytharcher
  - Corrigir o problema em que aprovar faz com que a associação muitos-para-muitos crie novos registros por @mytharcher

### [v1.9.29](https://www.nocobase.com/en/blog/v1.9.29)

*Data de lançamento: 2025-12-18*

### 🐛 Correções de Bugs

- **[Workflow]** Corrigir o problema em que um erro é lançado ao deletar uma versão de workflow que não é a atual ([#8203](https://github.com/nocobase/nocobase/pull/8203)) por @mytharcher
- **[Gerenciador de migração]** Corrigir descrição de migração ausente e definir a hora atual como padrão por @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.58](https://www.nocobase.com/en/blog/v2.0.0-alpha.58)

*Data de lançamento: 2025-12-24*

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Resolver problema em que o conteúdo da mensagem do nó llm não era exibido ([#8257](https://github.com/nocobase/nocobase/pull/8257)) por @heziqiang

### [v2.0.0-alpha.57](https://www.nocobase.com/en/blog/v2.0.0-alpha.57)

*Data de lançamento: 2025-12-24*

### 🎉 Novos Recursos

- **[Workflow]** Adicionar novas variáveis de sistema no workflow, incluindo `instanceId` e `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) por @mytharcher

### 🚀 Melhorias

- **[client]** usar select para configuração de largura da coluna de operação ([#8218](https://github.com/nocobase/nocobase/pull/8218)) por @katherinehhh
- **[Funcionários de IA]** Corrigir funcionário de IA não respondendo na primeira edição do envio<br/>Deletar funcionário de IA embutido desnecessário "Assistente de Formulário Avery"<br/>Adicionar permissões de função inicial padrão para funcionários de IA embutidos<br/>Melhorar o tratamento de erros e o comportamento de saída do funcionário de IA<br/>Adicionar suporte para IA acessar variáveis de contexto modal<br/>Adicionar suporte para fontes de dados externas para IA<br/>Corrigir truncamento incorreto de conversa quando a IA processa grandes volumes de dados ([#8191](https://github.com/nocobase/nocobase/pull/8191)) por @heziqiang
- **[Workflow]**

  - Adicionar instância de workflow original à API de duplicação ([#8225](https://github.com/nocobase/nocobase/pull/8225)) por @mytharcher
  - Melhorar a descrição do campo `changed` no evento de coleção ([#8216](https://github.com/nocobase/nocobase/pull/8216)) por @mytharcher
- **[Gerenciador de tarefas assíncronas]** Melhorado o tratamento de erros durante tarefas de limpeza, adicionando mecanismos de captura de exceção para evitar falhas na aplicação ([#8215](https://github.com/nocobase/nocobase/pull/8215)) por @mytharcher
- **[Bloco: Painel de ações]** melhorar a exibição de blocos, ações e campos ocultos no modo de configuração ([#8174](https://github.com/nocobase/nocobase/pull/8174)) por @katherinehhh
- **[Modelos de UI]** Adicionado plugin de modelos de UI, fornecendo a capacidade de reutilizar modelos de bloco e modelos de popup. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) por @gchust
- **[Ação: Exportar registros Pro]** Ações de importação pro e exportação pro suportam controle de permissão por @katherinehhh
- **[Workflow: Aprovação]** Atualizar `approval.data` para a versão mais recente do registro aprovado quando a execução terminar, para corresponder ao modo de exibição de registro "Mais recente" por @mytharcher

### 🐛 Correções de Bugs

- **[flow-engine]**

  - corrigir problema de verificação de permissão para adicionar registros filhos em tabela de árvore ([#8240](https://github.com/nocobase/nocobase/pull/8240)) por @katherinehhh
  - Corrigido um problema em que algumas variáveis relacionadas a registros de popup de bloco eram exibidas incorretamente. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) por @gchust
  - Corrigido o problema em que ações ou guias adicionadas após arrastar ações ou guias não são exibidas. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) por @gchust
  - problema de verificação de permissão em fontes de dados externas ([#8221](https://github.com/nocobase/nocobase/pull/8221)) por @katherinehhh
  - corrigir ações de fonte de dados externa sendo ocultadas apesar de ter permissão ([#8217](https://github.com/nocobase/nocobase/pull/8217)) por @katherinehhh
- **[client]**

  - Lidar com regras de vinculação vazias para evitar erros ([#8239](https://github.com/nocobase/nocobase/pull/8239)) por @zhangzhonghe
  - Corrigido o problema em que a coluna de operação do bloco de tabela não podia ser removida. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) por @gchust
  - Corrigido o problema em que a execução de pré-visualização gravava a saída JSX compilada de volta no stepParams, fazendo com que o código-fonte salvo fosse reescrito. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) por @gchust
  - Corrigir erro de upload de anexo S3 Pro e melhorar a pré-visualização de arquivos ([#8211](https://github.com/nocobase/nocobase/pull/8211)) por @katherinehhh
- **[cli]** license-kit é compatível com o caso em que DB_PASSWORD está vazio ([#8220](https://github.com/nocobase/nocobase/pull/8220)) por @jiannx
- **[database]** Corrigir inconsistência na consulta de campo de data entre fontes de dados principal e externas ([#8181](https://github.com/nocobase/nocobase/pull/8181)) por @cgyrock
- **[Campo de coleção: Sequência]** Corrigido um erro quando o comando de reparo de campo-sequência encontra uma coleção inexistente no ambiente atual. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) por @cgyrock
- **[Workflow: Nó manual]** Corrigir o problema em que um erro é lançado ao cancelar a execução de um workflow deletado ([#8258](https://github.com/nocobase/nocobase/pull/8258)) por @mytharcher
- **[Modelos de UI]** Corrigir um erro em que abrir um popup de campo de associação usava incorretamente um modelo de popup de campo não associado. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) por @gchust
- **[Departamentos]** Corrigir um problema em que a pesquisa agregada não consegue localizar usuários ([#8222](https://github.com/nocobase/nocobase/pull/8222)) por @2013xile
- **[Campo de coleção: Muitos para muitos (array)]** Corrigir um problema em que campos muitos-para-muitos (array) não podem ser criados quando o tipo de chave de destino é Snowflake ID (53-bit) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) por @2013xile
- **[Configurações de licença]** Corrigir a exibição anormal do plugin licenciado ([#8214](https://github.com/nocobase/nocobase/pull/8214)) por @jiannx
- **[Ação: Importar registros]** Corrigir o problema em que o índice da linha na mensagem de erro é sempre 1 quando um erro é lançado na ação de importação ([#8244](https://github.com/nocobase/nocobase/pull/8244)) por @mytharcher
- **[Impressão de modelo]** Corrigir solicitação de impressão de modelo não funcionando com fontes de dados externas por @katherinehhh
- **[Workflow: Aprovação]**

  - Corrigir reversão duplicada da mesma transação por @mytharcher
  - Corrigir o problema em que aprovar faz com que a associação crie um novo registro por @mytharcher
  - Corrigir o problema em que aprovar faz com que a associação muitos-para-muitos crie novos registros por @mytharcher

### [v2.0.0-alpha.56](https://www.nocobase.com/en/blog/v2.0.0-alpha.56)

*Data de lançamento: 2025-12-18*

### 🚀 Melhorias

- **[client]** suportar largura de coluna personalizada para colunas de tabela ([#8200](https://github.com/nocobase/nocobase/pull/8200)) por @katherinehhh

### 🐛 Correções de Bugs

- **[client]** Evitar estouro de largura total da linha durante o redimensionamento da coluna ([#8166](https://github.com/nocobase/nocobase/pull/8166)) por @zhangzhonghe
- **[flow-engine]** Corrigir o problema em que enviar o formulário em um modal reutilizado via popup uid não atualiza os dados do bloco. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) por @gchust
- **[Campo de coleção: Fórmula]** Corrigir problema em que campos BigInt não podem ser adicionados ao bloco Detalhe e Formulário ([#8201](https://github.com/nocobase/nocobase/pull/8201)) por @katherinehhh
- **[Workflow]** Corrigir o problema em que um erro é lançado ao deletar uma versão de workflow que não é a atual ([#8203](https://github.com/nocobase/nocobase/pull/8203)) por @mytharcher
