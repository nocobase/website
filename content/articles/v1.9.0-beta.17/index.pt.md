---
title: "NocoBase v1.9.0-beta.17: Adicionar notificação para responsável delegado e adicionado"
description: "Nota de lançamento da v1.9.0-beta.17"
---

### 🚀 Melhorias

- **[database]** Adicionar a opção `multipleStatements` à instância de conexão MariaDB para suportar a invocação de múltiplas instruções em uma única consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher

- **[Controle de acesso]**
  - Reduzir as permissões padrão para a função de membro ([#7921](https://github.com/nocobase/nocobase/pull/7921)) por @2013xile

  - Otimizar a lógica de controle de permissão para operações de campos de associação ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile

- **[Visualização de dados]** Adicionado suporte ao idioma russo para interfaces de plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) por @sembaev-a-a

- **[Workflow]** Suportar bloco de dados no workflow para usar o menu de configurações de detalhes consolidado ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher

- **[Workflow: Webhook]** Adicionar ícone para o tipo de nó de resposta por @mytharcher

- **[Workflow: JavaScript]** Corrigir uma vulnerabilidade de segurança causada pela passagem de funções de nível superior para o ambiente de execução, evitando exploração que poderia conceder acesso ao contexto de execução superior por @mytharcher

- **[Auth: OIDC]** Aumentar o tempo limite da solicitação por @2013xile

- **[Workflow: Aprovação]** Adicionar notificação para destinatários delegados e adicionados por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigir a interface do campo mostrando muitos-para-um em vez de um-para-um para belongsTo na configuração de fonte de dados externa ([#7936](https://github.com/nocobase/nocobase/pull/7936)) por @cgyrock

  - Corrigir erro: Não é possível resolver 'antd-mobile' e Não é possível resolver 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) por @zhangzhonghe

  - Corrigir o problema em que modelos duplicados não aparecem, causado por arrastar e depois excluir um modelo referenciado ([#7847](https://github.com/nocobase/nocobase/pull/7847)) por @zhangzhonghe

  - Corrigir o problema em que a regra de vinculação para o formulário de aprovação não está funcionando ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe

  - corrigir problema de página seguinte vazia no bloco de detalhes de paginação simples ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh

  - Corrigir "Estouro máximo da pilha de chamadas" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe

- **[servidor]**
  - Corrigir um problema no modo de divisão de serviço onde mensagens de fila não inscritas não podiam ser publicadas ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher

  - Isolar o canal Pub-Sub pelo nome do aplicativo ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher

  - Corrigir um problema onde, após ativar o modo de divisão de serviço, processos workers enviando mensagens através da fila de mensagens causavam erros ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher

- **[utils]** Habilitar mesclagem de objetos na estratégia de interseção ([#7840](https://github.com/nocobase/nocobase/pull/7840)) por @chenos

- **[database]** Detecção incorreta de campo de índice quando os nomes dos campos usam o estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile

- **[Campo de coleção: Muitos para muitos (array)]** Corrigir problemas do campo M2M (array) ao criar/atualizar dados relacionados ([#7926](https://github.com/nocobase/nocobase/pull/7926)) por @cgyrock

- **[Fonte de dados: Principal]** Corrigir o problema em que um campo recém-adicionado de um-para-muitos não pode ser selecionado como chave estrangeira antes de reiniciar o aplicativo. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) por @cgyrock

- **[Workflow]**
  - Corrigido o problema em que a atualização da contagem de tarefas redefinia involuntariamente o estado dos formulários sendo preenchidos ([#7937](https://github.com/nocobase/nocobase/pull/7937)) por @mytharcher

  - Usar eventQueue em vez do backgroundJob compartilhado para evitar que a fila compartilhada seja consumida incorretamente no modo de divisão de serviço ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher

  - Corrigir o problema em que o plugin de workflow ainda consome o evento da fila quando não está no modo worker sob o modo de divisão de serviço ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher

  - Corrigir o erro causado pela escuta de eventos de fonte de dados externa inexistentes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher

  - Corrigir um problema onde, no modo de divisão de serviço, a execução manual de um workflow contendo um nó de interrupção permanecia travada em status pendente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) por @mytharcher

  - Adicionar `workflowId` como dado de identidade para logs de workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher

  - Resolvido um problema onde o despachante de workflow no modo cluster falhava ao identificar corretamente estados ociosos, o que poderia levar ao consumo desnecessário de eventos de fila antes do plugin estar pronto ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher

- **[Controle de acesso]**
  - Suportar restrições de escopo de dados para operações de associação. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) por @2013xile

  - Problema de trechos de operação de associação não estarem surtindo efeito ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile

- **[Workflow: Nó manual]** Corrigir namespace do idioma local a ser usado, para exibir o conteúdo correto da tradução ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher

- **[Usuários]** Atualização incorreta de índice quando os nomes dos campos usam o estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile

- **[Mobile (obsoleto)]** Corrigir o problema em que o popup de valor padrão do campo de data no mobile não permite selecionar uma data ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe

- **[Workflow: Variável personalizada]** Corrigir erro lançado quando não há configuração no nó de variável por @mytharcher

- **[Workflow: Evento de ação personalizada]** Corrigir o erro causado pela escuta de eventos de fonte de dados externa inexistentes por @mytharcher

- **[Impressão de modelo]** analisar as variáveis no filtro por @jiannx

- **[Visualização de dados: ECharts]** Corrigir o problema em que a configuração do tipo Rótulo nas opções do Echarts não surte efeito. por @heziqiang

- **[Workflow: Aprovação]**
  - Corrigir o formato da data nos cartões da lista de aprovação no centro de tarefas para exibir a data e hora completas por @mytharcher

  - Corrigir o problema em que o tamanho da página do canal de notificação de carregamento não é grande o suficiente, fazendo com que a lista não seja carregada completamente por @mytharcher

  - Corrigir um problema de desempenho que ocorria ao consultar a lista de registros de aprovação durante o envio da aprovação por @mytharcher

  - Corrigir um problema em que os campos da coleção principal não eram excluídos ao recarregar dados de associação por @mytharcher

  - Corrigir um problema onde condições de corrida que ocorrem durante o processamento de aprovação simultâneo por múltiplos aprovadores podiam fazer com que um nó de workflow fosse executado mais de uma vez por @mytharcher

  - Criar nós de aprovação em ramificações paralelas não é mais suportado para evitar problemas causados pelo status do processo por @mytharcher

  - Corrigir o problema em que a regra de vinculação para o formulário de aprovação não está funcionando por @zhangzhonghe

  - Corrigir erro lançado quando há workflow de aprovação duplicado por @mytharcher

- **[Gerenciador de e-mail]**
  - adicionar logs de sincronização por @jiannx

  - sincronizar status de leitura do e-mail da Microsoft sem timestamp por @jiannx

  - coleção mailMessages adicionar índices por @jiannx

  - adicionar migração para índices por @jiannx

  - Corrigir o problema de imagens reservadas e sincronização no outlook por @jiannx
