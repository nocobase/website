---
title: "NocoBase v1.9.0-beta.7: fluxo de trabalho suporta retornar a qualquer nó no processo de aprovação"
description: "Nota de lançamento da v1.9.0-beta.7"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Aprovação]** Suporte para retornar a qualquer nó no processo de aprovação por @mytharcher

### 🚀 Melhorias

- **[client]** Removido o popover de reticências da lista de arquivos ([#7479](https://github.com/nocobase/nocobase/pull/7479)) por @mytharcher

- **[server]** Uso do logger padrão do sistema para a fila de mensagens ([#7480](https://github.com/nocobase/nocobase/pull/7480)) por @mytharcher

- **[database]** Otimizada a consulta de contagem da API de lista para reduzir o consumo de recursos. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) por @aaaaaajie

- **[Notificação: Mensagem no aplicativo]** Suporte para configurar o atraso de fechamento automático para notificações de mensagens no aplicativo ([#7472](https://github.com/nocobase/nocobase/pull/7472)) por @mytharcher

- **[Workflow]**
  - Otimizado o processo de preparação do workflow para suportar o uso de dados de nós pré-carregados ([#7476](https://github.com/nocobase/nocobase/pull/7476)) por @mytharcher

  - Otimizada a performance de consulta para recuperar execuções em fila usando campos e índices separados ([#7448](https://github.com/nocobase/nocobase/pull/7448)) por @mytharcher

  - Ajustada a API de variáveis do workflow para suportar a pré-definição de uma lista adicional de variáveis ([#7439](https://github.com/nocobase/nocobase/pull/7439)) por @mytharcher

- **[Workflow: nó de notificação]** Suporte para testar o nó de notificação ([#7470](https://github.com/nocobase/nocobase/pull/7470)) por @mytharcher

- **[Workflow: Aprovação]**
  - Suporte para usar variáveis relacionadas à aprovação em notificações personalizadas por @mytharcher

  - Suporte para atualizar o status de aprovação após o nó final encerrar a execução por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Verificação incorreta de 'não vazio' para campos numéricos em regra de vínculo ([#7477](https://github.com/nocobase/nocobase/pull/7477)) por @katherinehhh

  - Erro de renderização de campo de associação ao alternar para componente de tag no bloco de formulário de edição ([#7468](https://github.com/nocobase/nocobase/pull/7468)) por @katherinehhh

  - Select/multiselect/date/richtext somente leitura ainda editáveis em formulário público ([#7484](https://github.com/nocobase/nocobase/pull/7484)) por @katherinehhh

  - Problema de limite de tempo quando a data selecionada é igual a minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) por @katherinehhh

  - Validação obrigatória não funcionando para campos de anexo em subtabela ([#7431](https://github.com/nocobase/nocobase/pull/7431)) por @katherinehhh

  - Corrigido um problema onde, em certos cenários, editar um registro no popup do seletor de registros móvel causa um erro ([#7444](https://github.com/nocobase/nocobase/pull/7444)) por @zhangzhonghe

- **[undefined]** Corrigido problema com filtragem por campo de data apenas em fonte externa MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) por @aaaaaajie

- **[database]**
  - Corrigido um erro de sintaxe MySQL que ocorria ao carregar mais mensagens no aplicativo. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) por @aaaaaajie

  - Corrigido problema de precisão para campos Numéricos exportados ([#7421](https://github.com/nocobase/nocobase/pull/7421)) por @aaaaaajie

- **[Mobile]** campo de data móvel sem fuso horário não exibindo data/hora corretamente ([#7473](https://github.com/nocobase/nocobase/pull/7473)) por @katherinehhh

- **[Formulários públicos]** valor padrão do campo de formulário público não aplicado ao usar variáveis ([#7467](https://github.com/nocobase/nocobase/pull/7467)) por @katherinehhh

- **[Coleção: Árvore]** Remover eventos de banco de dados relacionados à coleção após excluir uma coleção em árvore ([#7459](https://github.com/nocobase/nocobase/pull/7459)) por @2013xile

- **[Gerenciador de arquivos]** Corrigido o erro ao editar o campo `storage` na coleção de arquivos. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) por @mytharcher

- **[Ação: Importar registros]**
  - Corrigido número de linha incorreto exibido quando dados duplicados são importados ([#7440](https://github.com/nocobase/nocobase/pull/7440)) por @aaaaaajie

  - Corrigido um problema onde a importação falhava quando a chave primária da tabela era um texto de linha única ([#7416](https://github.com/nocobase/nocobase/pull/7416)) por @aaaaaajie

- **[Workflow]**
  - Completadas as opções para exclusão automática do status de execução do workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) por @mytharcher

  - Corrigido o problema onde o popup de detalhes não era exibido devido a uma configuração de rota incorreta no centro de tarefas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) por @mytharcher

  - Corrigidos problemas relacionados ao menu móvel nas tarefas do workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) por @mytharcher

- **[Workflow: Nó paralelo]** Corrigido o problema onde a determinação incorreta de status em nós de ramificação paralela sob o modo "Executar todas as ramificações" causava conclusão prematura ([#7445](https://github.com/nocobase/nocobase/pull/7445)) por @mytharcher

- **[Ação: Importar registros Pro]** Corrigido resultado de atualização inesperado ao usar chave primária de string na importação xlsx. por @aaaaaajie

- **[Workflow: Evento de ação personalizada]** Corrigido o problema onde eventos de ação personalizada não podiam ser executados manualmente imediatamente após a inicialização por @mytharcher

- **[Workflow: Subfluxo]** Corrigido o problema de subprocessos serem retomados e executados várias vezes por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigido o problema onde o texto de status na notificação de conclusão de aprovação não era traduzido por @mytharcher

  - Para usuários que não são o aprovador atual, o botão de visualização correspondente na tabela de fluxo do processo não será exibido por @mytharcher

  - Adicionada a variável de status para modelos personalizados nas notificações de conclusão de aprovação por @mytharcher
