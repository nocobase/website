---
title: "NocoBase v2.1.0-beta.8: Suporte ao botão de acionamento de fluxo de trabalho para configurar fluxo após sucesso"
description: "Nota de lançamento da v2.1.0-beta.8"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte para configurar fluxo após sucesso no botão de acionamento de workflow ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher

- **[Campo de coleção: Código]** field-code suporta 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) por @jiannx

- **[Workflow: Evento de ação personalizada]** Suporte a dados de contexto personalizados para passar variáveis para o acionador de ação personalizada em subfluxo ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher

### 🚀 Melhorias

- **[client]** Exibir uma mensagem de aviso quando não houver dados disponíveis para o bloco de Formulário de Edição ou o bloco de Detalhes. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust

- **[flow-engine]** Corrigido um problema onde o novo código runjs analisava expressões de variáveis antes da execução. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust

- **[Workflow]** Mostrar todos os tipos de nós no menu de adição, mesmo que não estejam disponíveis ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher

- **[Ação: Solicitação personalizada]** Streaming de eventos suporta solicitações personalizadas ([#8749](https://github.com/nocobase/nocobase/pull/8749)) por @jiannx

- **[IA: Base de conhecimento]** Lógica de carregamento de documentos da base de conhecimento refatorada. por @cgyrock

- **[Adaptador de bloqueio Redis]** Refatoração devido à mudança na API do LockManager no repositório principal por @mytharcher

- **[Gerenciador de backup]** Adicionado bloqueio para backup agendado em nós do cluster por @mytharcher

- **[Gerenciador de migração]** Verificações de migração aprimoradas, suporte a download de SQL, formatação de log e visibilidade do processo de execução por @cgyrock

### 🐛 Correções de Bugs

- **[client]**
  - Dados de subformulário e subtabela não exibidos devido à verificação de permissão ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos

  - Corrigido o problema onde o botão de recolher do formulário de filtro v2 parava de funcionar após ordenar campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe

  - Corrigido o problema onde campos personalizados nos valores de campo do formulário de Filtro não renderizavam o tipo de entrada de valor correto ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe

  - Corrigido o problema onde a página de gerenciamento de template de referência (v1) estava sem as ações de filtro e atualização. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust

  - Corrigido o problema onde o bloco de detalhes de uma coleção SQL encontrava um erro ao carregar dados. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust

  - Corrigido o problema onde as regras de vinculação de campo no bloco de detalhes não surtiam efeito durante a renderização inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust

  - Corrigido problema de estilo do botão de voltar em subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe

  - Blocos V2 agora mostram apenas ações suportadas pela fonte de dados atual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe

  - Corrigida validação para campos obrigatórios ocultos por vinculação no modo de configuração ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe

  - Corrigido recorte de abas e garantia de largura mínima de aba no modo de design ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe

  - Corrigidas atualizações atrasadas da UI para alternância de ocultação de coluna em subtabela e exclusão consecutiva de colunas ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe

  - Desabilitada a adição de blocos para registros associados muitos-para-muitos (array) para evitar erros. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust

  - Corrigida navegação de link em popup sendo revertida após fechar visualização ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe

  - Corrigido um problema onde o bloco de dados original não atualizava após editar dados no popup de campo de associação. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust

  - corrigido aparecimento de duas verificações obrigatórias no formulário de atualização de registro ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx

- **[server]** Corrigido o problema de erro em consultas de dados de fontes de dados não relacionadas a banco de dados ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock

- **[lock-manager]** Corrigido problema de condição de corrida no gerenciador de bloqueio ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher

- **[database]**
  - Corrigida opção 'Paginação Simples' ausente no template de visualização da coleção. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock

  - A regra de validação de precisão para campos numéricos não está surtindo efeito ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile

- **[undefined]** Corrigido um problema onde, após a atualização, o sistema avisava que plugin-block-reference não pôde ser encontrado. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust

- **[Controle de acesso]**
  - usar collection.filterTargetKey em vez de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos

  - Corrigido erro de modificação de dados em fonte de dados da API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock

- **[Templates de UI]**
  - Corrigido o problema onde registros de associação não podiam ser carregados corretamente após salvar o bloco de detalhes como template. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust

  - Corrigido o erro de renderização para o bloco de referência do painel de ações. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust

  - Corrigido o problema onde o fluxo de eventos do bloco de referência no bloco de tabela não podia ser configurado com um fluxo de evento de clique em linha. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust

  - Corrigido um problema onde reutilizar o template de bloco de registro atual para bloco de detalhes e bloco de formulário de edição podia causar falha no carregamento correto dos dados. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust

  - Corrigido um problema onde alterações em props feitas no fluxo de eventos de um bloco de template não surtiam efeito. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust

- **[Visualizador de Arquivos do Office]** Alterada altura do modal para um valor adequado para mostrar mais conteúdo do arquivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher

- **[Ação: Exportar registros]**
  - corrigido problema onde o campo belongsToArray ficava em branco no excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock

  - Corrigido o problema onde campos do tipo numérico em arquivos excel eram exibidos como strings ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock

- **[Bloco: Lista]** Corrigido um problema onde campos do bloco de lista não podiam usar a variável de registro atual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust

- **[Fonte de dados: Principal]**
  - Atualizar o valor padrão de um campo JSON não surte efeito ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile

  - Erro de sincronização de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile

- **[Workflow]** Corrigido o problema onde o placeholder de arrastar nó aparecia incorretamente ao arrastar blocos no nó de aprovação ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher

- **[Funcionários IA]**
  - Corrigido erro de chamada de ferramenta ao usar o modelo de raciocínio deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock

  - Corrigidos problemas onde dashscope/deepseek/kimi não conseguiam ler arquivos de documento enviados. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock

- **[Multi-espaço]** Corrigido erro de permissão de espaço ao criar dados com a chave primária por @jiannx

- **[Workflow: Aprovação]**
  - Corrigidos rótulos não traduzidos nos detalhes de processamento de aprovação por @zhangzhonghe

  - Corrigido o problema onde os responsáveis não seguiam a ordem configurada no nó por @mytharcher

- **[Gerenciador de migração]**
  - Corrigido um potencial congelamento de processo causado pelo registro de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock

  - Corrigido erro de build por @mytharcher

  - Corrigida descrição de migração ausente e definido o horário atual como padrão por @cgyrock

  - Ajustado diretório temporário para storage, para suportar uso em modo cluster por @mytharcher
