---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "A atualização desta semana inclui: suporte ao gerenciador de e-mail para sincronização em lote, suporte a fluxo de trabalho de aprovação para retornar a qualquer nó no processo de aprovação e muito mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.7](https://www.nocobase.com/en/blog/v1.9.0-beta.7)

*Data de lançamento: 2025-09-11*

#### 🎉 Novos Recursos

- **[Fluxo de Trabalho: Aprovação]** Suporte para retornar a qualquer nó no processo de aprovação por @mytharcher

#### 🚀 Melhorias

- **[cliente]** Remover o popover de reticências da lista de arquivos ([#7479](https://github.com/nocobase/nocobase/pull/7479)) por @mytharcher
- **[servidor]** Usar o logger padrão do sistema para a fila de mensagens ([#7480](https://github.com/nocobase/nocobase/pull/7480)) por @mytharcher
- **[banco de dados]** Consulta de contagem da API de lista otimizada para reduzir o consumo de recursos. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) por @aaaaaajie
- **[Notificação: Mensagem no aplicativo]** Suporte para configurar o atraso de fechamento automático para notificações de mensagens no aplicativo ([#7472](https://github.com/nocobase/nocobase/pull/7472)) por @mytharcher
- **[Fluxo de Trabalho]**

  - Otimizar o processo de preparação do fluxo de trabalho para suportar o uso de dados de nó pré-carregados ([#7476](https://github.com/nocobase/nocobase/pull/7476)) por @mytharcher
  - Otimizar o desempenho da consulta para recuperar a execução em fila usando campos e índices separados ([#7448](https://github.com/nocobase/nocobase/pull/7448)) por @mytharcher
  - Ajustar a API de variáveis do fluxo de trabalho para suportar a pré-configuração de uma lista de variáveis adicional ([#7439](https://github.com/nocobase/nocobase/pull/7439)) por @mytharcher
- **[Fluxo de Trabalho: nó de notificação]** Suporte para testar o nó de notificação ([#7470](https://github.com/nocobase/nocobase/pull/7470)) por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**

  - Suporte para usar variáveis relacionadas à aprovação em notificações personalizadas por @mytharcher
  - Suporte para atualizar o status de aprovação após o nó final encerrar a execução por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - verificação incorreta de 'não vazio' para campos numéricos na regra de vinculação ([#7477](https://github.com/nocobase/nocobase/pull/7477)) por @katherinehhh
  - erro de renderização do campo de associação ao alternar para o componente de tag no bloco de formulário de edição ([#7468](https://github.com/nocobase/nocobase/pull/7468)) por @katherinehhh
  - select/multiselect/date/richtext somente leitura ainda editável no formulário público ([#7484](https://github.com/nocobase/nocobase/pull/7484)) por @katherinehhh
  - problema de limite de tempo quando a data selecionada é igual a minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) por @katherinehhh
  - validação obrigatória não funcionando para campos de anexo na subtabela ([#7431](https://github.com/nocobase/nocobase/pull/7431)) por @katherinehhh
  - Corrigir um problema onde, em certos cenários, editar um registro no popup do seletor de registro móvel causa um erro ([#7444](https://github.com/nocobase/nocobase/pull/7444)) por @zhangzhonghe
- **[indefinido]** Problema corrigido com filtragem apenas por campo de data na fonte externa MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) por @aaaaaajie
- **[banco de dados]**

  - Corrigido um erro de sintaxe MySQL que ocorria ao carregar mais mensagens no aplicativo. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) por @aaaaaajie
  - Corrigido problema de precisão para campos Numéricos exportados ([#7421](https://github.com/nocobase/nocobase/pull/7421)) por @aaaaaajie
- **[Móvel]** campo de data móvel sem fuso horário não exibindo data/hora corretamente ([#7473](https://github.com/nocobase/nocobase/pull/7473)) por @katherinehhh
- **[Formulários públicos]** valor padrão do campo do formulário público não aplicado ao usar variáveis ([#7467](https://github.com/nocobase/nocobase/pull/7467)) por @katherinehhh
- **[Coleção: Árvore]** Remover eventos de banco de dados relacionados à coleção após excluir uma coleção em árvore ([#7459](https://github.com/nocobase/nocobase/pull/7459)) por @2013xile
- **[Gerenciador de arquivos]** Corrigir o erro ao editar o campo `storage` na coleção de arquivos. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) por @mytharcher
- **[Ação: Importar registros]**

  - Corrigir número de linha incorreto exibido quando dados duplicados são importados ([#7440](https://github.com/nocobase/nocobase/pull/7440)) por @aaaaaajie
  - Corrigido um problema onde a importação falhava quando a chave primária da tabela era um texto de linha única ([#7416](https://github.com/nocobase/nocobase/pull/7416)) por @aaaaaajie
- **[Fluxo de Trabalho]**

  - Completar as opções para excluir automaticamente o status de execução do fluxo de trabalho ([#7436](https://github.com/nocobase/nocobase/pull/7436)) por @mytharcher
  - Corrigir o problema onde o popup de detalhes não era exibido devido a uma configuração de rota incorreta no centro de tarefas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) por @mytharcher
  - Corrigir problemas relacionados ao menu móvel nas tarefas do fluxo de trabalho ([#7419](https://github.com/nocobase/nocobase/pull/7419)) por @mytharcher
- **[Fluxo de Trabalho: Nó paralelo]** Corrigir o problema onde a determinação incorreta de status em nós de ramificação paralela sob o modo "Executar todas as ramificações" causava conclusão prematura ([#7445](https://github.com/nocobase/nocobase/pull/7445)) por @mytharcher
- **[Ação: Importar registros Pro]** Corrigido resultado de atualização inesperado ao usar chave primária de string na importação xlsx. por @aaaaaajie
- **[Fluxo de Trabalho: Evento de ação personalizada]** Corrigir o problema onde eventos de ação personalizada não podem ser executados manualmente imediatamente após a inicialização por @mytharcher
- **[Fluxo de Trabalho: Subfluxo]** Corrigir o problema de subprocessos serem retomados e executados várias vezes por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**

  - Corrigir o problema onde o texto de status na notificação de conclusão de aprovação não era traduzido por @mytharcher
  - Para usuários que não são o aprovador atual, o botão de visualização correspondente na tabela de fluxo do processo não será exibido por @mytharcher
  - Adicionar a variável de status para modelos personalizados em notificações de conclusão de aprovação por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.14](https://www.nocobase.com/en/blog/v1.9.0-alpha.14)

*Data de lançamento: 2025-09-10*

#### 🚀 Melhorias

- **[Gerenciador de e-mail]** suporta sincronização em lote por @jiannx

#### 🐛 Correções de Bugs

- **[Fluxo de Trabalho: Aprovação]** Corrigir o problema onde o texto de status na notificação de conclusão de aprovação não era traduzido por @mytharcher

### [v1.9.0-alpha.13](https://www.nocobase.com/en/blog/v1.9.0-alpha.13)

*Data de lançamento: 2025-09-09*

#### 🎉 Novos Recursos

- **[Fluxo de Trabalho: Aprovação]** Suporte para retornar a qualquer nó no processo de aprovação por @mytharcher

#### 🚀 Melhorias

- **[cliente]** Remover o popover de reticências da lista de arquivos ([#7479](https://github.com/nocobase/nocobase/pull/7479)) por @mytharcher
- **[banco de dados]** Consulta de contagem da API de lista otimizada para reduzir o consumo de recursos. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) por @aaaaaajie
- **[Fluxo de Trabalho]**

  - Otimizar o processo de preparação do fluxo de trabalho para suportar o uso de dados de nó pré-carregados ([#7476](https://github.com/nocobase/nocobase/pull/7476)) por @mytharcher
  - Otimizar o desempenho da consulta para recuperar a execução em fila usando campos e índices separados ([#7448](https://github.com/nocobase/nocobase/pull/7448)) por @mytharcher
  - Ajustar a API de variáveis do fluxo de trabalho para suportar a pré-configuração de uma lista de variáveis adicional ([#7439](https://github.com/nocobase/nocobase/pull/7439)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Suporte para configurar o atraso de fechamento automático para notificações de mensagens no aplicativo ([#7472](https://github.com/nocobase/nocobase/pull/7472)) por @mytharcher
- **[Fluxo de Trabalho: nó de notificação]** Suporte para testar o nó de notificação ([#7470](https://github.com/nocobase/nocobase/pull/7470)) por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**

  - Suporte para usar variáveis relacionadas à aprovação em notificações personalizadas por @mytharcher
  - Suporte para atualizar o status de aprovação após o nó final encerrar a execução por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - verificação incorreta de 'não vazio' para campos numéricos na regra de vinculação ([#7477](https://github.com/nocobase/nocobase/pull/7477)) por @katherinehhh
  - erro de renderização do campo de associação ao alternar para o componente de tag no bloco de formulário de edição ([#7468](https://github.com/nocobase/nocobase/pull/7468)) por @katherinehhh
  - problema de limite de tempo quando a data selecionada é igual a minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) por @katherinehhh
  - Corrigir um problema onde, em certos cenários, editar um registro no popup do seletor de registro móvel causa um erro ([#7444](https://github.com/nocobase/nocobase/pull/7444)) por @zhangzhonghe
  - validação obrigatória não funcionando para campos de anexo na subtabela ([#7431](https://github.com/nocobase/nocobase/pull/7431)) por @katherinehhh
  - Corrigir o problema onde o ícone era exibido incorretamente quando a URL no campo de URL do anexo continha parâmetros de consulta ([#7432](https://github.com/nocobase/nocobase/pull/7432)) por @mytharcher
- **[banco de dados]**

  - Corrigido problema de precisão para campos Numéricos exportados ([#7421](https://github.com/nocobase/nocobase/pull/7421)) por @aaaaaajie
  - Corrigido um erro de sintaxe MySQL que ocorria ao carregar mais mensagens no aplicativo. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) por @aaaaaajie
- **[indefinido]** Problema corrigido com filtragem apenas por campo de data na fonte externa MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) por @aaaaaajie
- **[Móvel]** campo de data móvel sem fuso horário não exibindo data/hora corretamente ([#7473](https://github.com/nocobase/nocobase/pull/7473)) por @katherinehhh
- **[Coleção: Árvore]** Remover eventos de banco de dados relacionados à coleção após excluir uma coleção em árvore ([#7459](https://github.com/nocobase/nocobase/pull/7459)) por @2013xile
- **[Formulários públicos]** valor padrão do campo do formulário público não aplicado ao usar variáveis ([#7467](https://github.com/nocobase/nocobase/pull/7467)) por @katherinehhh
- **[Ação: Importar registros]**

  - Corrigir número de linha incorreto exibido quando dados duplicados são importados ([#7440](https://github.com/nocobase/nocobase/pull/7440)) por @aaaaaajie
  - Corrigido um problema onde a importação falhava quando a chave primária da tabela era um texto de linha única ([#7416](https://github.com/nocobase/nocobase/pull/7416)) por @aaaaaajie
- **[Fluxo de Trabalho]**

  - Corrigir o problema onde o popup de detalhes não era exibido devido a uma configuração de rota incorreta no centro de tarefas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) por @mytharcher
  - Completar as opções para excluir automaticamente o status de execução do fluxo de trabalho ([#7436](https://github.com/nocobase/nocobase/pull/7436)) por @mytharcher
  - Corrigir problemas relacionados ao menu móvel nas tarefas do fluxo de trabalho ([#7419](https://github.com/nocobase/nocobase/pull/7419)) por @mytharcher
- **[Gerenciador de arquivos]** Corrigir o erro ao editar o campo `storage` na coleção de arquivos. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) por @mytharcher
- **[Fluxo de Trabalho: Nó paralelo]** Corrigir o problema onde a determinação incorreta de status em nós de ramificação paralela sob o modo "Executar todas as ramificações" causava conclusão prematura ([#7445](https://github.com/nocobase/nocobase/pull/7445)) por @mytharcher
- **[Fluxo de Trabalho: Evento de ação personalizada]** Corrigir o problema onde eventos de ação personalizada não podem ser executados manualmente imediatamente após a inicialização por @mytharcher
- **[Ação: Importar registros Pro]** Corrigido resultado de atualização inesperado ao usar chave primária de string na importação xlsx. por @aaaaaajie
- **[Fluxo de Trabalho: Subfluxo]** Corrigir o problema de subprocessos serem retomados e executados várias vezes por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**

  - Adicionar a variável de status para modelos personalizados em notificações de conclusão de aprovação por @mytharcher
  - Para usuários que não são o aprovador atual, o botão de visualização correspondente na tabela de fluxo do processo não será exibido por @mytharcher
