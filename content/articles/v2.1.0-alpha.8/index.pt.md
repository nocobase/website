---
title: "NocoBase v2.1.0-alpha.8: Atualizar prompt do usuário no chatbox de IA"
description: "Nota de lançamento da v2.1.0-alpha.8"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte para configurar fluxo após sucesso no botão de acionamento de workflow ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher

- **[Campo de coleção: Código]** field-code suporta 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) por @jiannx

- **[Workflow: Evento de ação personalizada]** Suporte a dados de contexto personalizados para passar variáveis para o acionador de ação personalizada em sub-fluxos ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher

- **[Funcionários de IA]** Atualização do prompt do usuário no chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🚀 Melhorias

- **[client]**
  - Exibir uma mensagem de aviso quando não houver dados disponíveis para o bloco de Formulário de Edição ou o bloco de Detalhes. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust

  - Refatoração das configurações de layout do admin e aplicação para modelar arquitetura de host com salvaguardas de compatibilidade v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) por @zhangzhonghe

  - Suporte para configuração de resumo para tabelas ([#8721](https://github.com/nocobase/nocobase/pull/8721)) por @chenos

- **[flow-engine]** Corrigido um problema onde o novo código runjs analisava expressões de variáveis antes da execução. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust

- **[Workflow]** Mostrar todos os tipos de nós no menu de adição, mesmo que não estejam disponíveis ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher

- **[Ação: Solicitação personalizada]** Streaming de eventos suporta solicitações personalizadas ([#8749](https://github.com/nocobase/nocobase/pull/8749)) por @jiannx

- **[Funcionários de IA]** Atualização do prompt do usuário no chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang

- **[Incorporar NocoBase]** Fornecer API sanitize para filtrar valores de associação em ações ([#8688](https://github.com/nocobase/nocobase/pull/8688)) por @mytharcher

- **[IA: Base de conhecimento]** Lógica de carregamento de documentos da base de conhecimento refatorada. por @cgyrock

- **[Adaptador de bloqueio Redis]** Refatoração devido à mudança na API do LockManager no repositório principal por @mytharcher

- **[Gerenciador de backup]** Adicionar bloqueio para backup agendado em nós de cluster por @mytharcher

- **[Gerenciador de migração]** Melhorias nas verificações de migração, suporte a download de SQL, formatação de log e visibilidade do processo de execução por @cgyrock

### 🐛 Correções de Bugs

- **[undefined]** Corrigido um problema onde, após a atualização, o sistema avisava que plugin-block-reference não pôde ser encontrado. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust

- **[client]**
  - Dados de sub-formulário e sub-tabela não exibidos devido à verificação de permissão ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos

  - Corrigido o problema onde o botão de recolher do formulário de filtro v2 parava de funcionar após ordenar campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe

  - Corrigido o problema onde campos personalizados nos valores de campo do Formulário de Filtro não renderizavam o tipo de entrada de valor correto ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe

  - Corrigido o problema onde a página de gerenciamento de template de referência (v1) estava sem as ações de filtro e atualização. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust

  - Corrigido o problema onde o bloco de detalhes de uma coleção SQL encontrava um erro ao carregar dados. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust

  - Corrigido o problema onde as regras de vinculação de campo no bloco de detalhes não surtiam efeito durante a renderização inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust

  - Blocos V2 agora mostram apenas ações suportadas pela fonte de dados atual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe

  - Corrigido problema de estilo do botão voltar em subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe

  - Corrigido problema de navegação de link popup sendo revertida após fechar visualização ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe

  - Corrigida validação para campos obrigatórios ocultos por vinculação no modo de configuração ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe

  - Corrigido recorte de abas e garantia de largura mínima de aba no modo de design ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe

  - Corrigidas atualizações atrasadas de UI para alternância de ocultação de coluna de subtabela e exclusão consecutiva de colunas ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe

  - Corrigido um problema onde o bloco de dados original não atualizava após editar dados no popup de campo de associação. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust

  - Desabilitada a adição de blocos para registros associados muitos-para-muitos (array) para evitar erros. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust

  - Corrigido um problema onde o bloco de dados não atualizava ao alternar menus. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust

  - Corrigido o problema onde o componente CollectionField não renderizava no componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher

  - Corrigidas duas verificações obrigatórias aparecendo no formulário de atualização de registro ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx

- **[server]**
  - Corrigido o problema de erro em consultas de dados de fontes de dados não relacionadas a banco de dados ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock

  - Resolvido problema de cache anexando hash aos assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos

- **[lock-manager]** Corrigido problema de condição de corrida do gerenciador de bloqueio ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher

- **[database]**
  - Corrigida a opção 'Paginação Simples' ausente no template de visualização da coleção. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock

  - A regra de validação de precisão para campos numéricos não está surtindo efeito ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile

  - Corrigida falha na verificação de expressão regular personalizada de campo no v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx

- **[flow-engine]** Corrigido um problema onde ctx.exit não conseguia encerrar a execução de fluxos de eventos definidos pelo usuário. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust

- **[Controle de acesso]**
  - usar collection.filterTargetKey em vez de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos

  - Corrigido erro de modificação de dados da fonte de dados da API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock

  - Instância de banco de dados usada ao definir metadados ACL está incorreta ([#8747](https://github.com/nocobase/nocobase/pull/8747)) por @2013xile

- **[Templates de UI]**
  - Corrigido o problema onde registros de associação não podiam ser carregados corretamente após salvar o bloco de detalhes como template. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust

  - Corrigido o erro de renderização para o bloco de referência do painel de ações. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust

  - Corrigido o problema onde o fluxo de eventos do bloco de referência no bloco de tabela não podia ser configurado com um fluxo de evento de clique de linha. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust

  - Corrigido um problema onde reutilizar o template de bloco de registro atual para bloco de detalhes e bloco de formulário de edição podia fazer com que os dados não fossem carregados corretamente. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust

  - Corrigido um problema onde alterações nas propriedades feitas no fluxo de eventos de um bloco de template não surtiam efeito. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust

- **[Visualizador de Arquivos do Office]** Alterada a altura do modal para um valor adequado para mostrar mais conteúdo do arquivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher

- **[Ação: Exportar registros]**
  - corrigido problema onde o campo belongsToArray ficava em branco no excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock

  - Corrigido o problema onde campos do tipo numérico em arquivos excel eram exibidos como strings ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock

- **[Workflow]** Corrigido o problema onde o placeholder de arrastar nó aparecia incorretamente ao arrastar blocos no nó de aprovação ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher

- **[Bloco: Lista]** Corrigido um problema onde campos do bloco de lista não podiam usar a variável de registro atual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust

- **[Fonte de dados: Principal]**
  - Atualizar o valor padrão de um campo JSON não surte efeito ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile

  - Erro de sincronização de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile

- **[Funcionários de IA]**
  - Corrigidos problemas onde dashscope/deepseek/kimi não conseguiam ler arquivos de documento enviados. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock

  - Corrigido erro de chamada de ferramenta ao usar o modelo de raciocínio deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock

  - Corrigido erro de chat do funcionário de IA enquanto a base de conhecimento estava habilitada ([#8746](https://github.com/nocobase/nocobase/pull/8746)) por @cgyrock

  - Corrigido problema de renderização da configuração da fonte de dados de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock

  - Resolvido problema onde a mensagem de IA renderizava com comprimento 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) por @heziqiang

- **[Mecanismo de fluxo]** corrigido erro de destruição SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) por @chenos

- **[Workflow: Evento de ação personalizada]** Corrigido o problema onde o workflow de ação personalizada travava ao executar como sub-fluxo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher

- **[Workflow: JavaScript]** Corrigido problema onde casos de teste não passavam no windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) por @mytharcher

- **[Visualização de dados]** corrigido i18n para texto de entrada do plugin de gráfico ([#8716](https://github.com/nocobase/nocobase/pull/8716)) por @heziqiang

- **[Multi-espaço]** Corrigido o erro de permissão de espaço ao criar dados com a chave primária por @jiannx

- **[Impressão de template]** Corrigido o problema onde a API ACL mudou, mas não foi adaptada ao plugin por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigido o problema onde os responsáveis não seguiam a ordem configurada no nó por @mytharcher

  - Corrigido o problema onde o resultado da consulta não era exibido devido a nós filtrados por tipo por @mytharcher

  - Corrigido o problema onde a filtragem de parâmetros appends pelo ACL por @mytharcher

  - Corrigido problema de ACL onde o valor de associação não deveria ser criado ou atualizado quando o usuário não tem permissão por @mytharcher

  - Adicionado parâmetro ausente para evitar que associações não sejam atualizadas ao enviar nova aprovação por @mytharcher

  - Corrigidos rótulos não traduzidos nos detalhes do processamento de aprovação por @zhangzhonghe

  - Corrigido erro lançado devido à ausência do valor de `dataAfter` quando adicionado ou delegado por @mytharcher

  - Sanitizar valores de associação em ações de aprovação, para evitar qualquer manipulação de dados além da permissão por @mytharcher

  - Corrigido o problema onde um erro era lançado ao executar o workflow de aprovação manualmente por @mytharcher

  - Sanitizar valores de associação em ações de aprovação, para evitar qualquer manipulação de dados além da permissão por @mytharcher

- **[Gerenciador de e-mail]** Corrigida análise do formato do ID de conteúdo da imagem por @jiannx

- **[Gerenciador de migração]**
  - Corrigida descrição de migração ausente e definido o horário atual como padrão por @cgyrock

  - Corrigido erro de build por @mytharcher

  - Ajustado diretório temporário para storage, para suportar uso em modo cluster por @mytharcher

  - Corrigido um potencial congelamento de processo causado pelo log de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock
