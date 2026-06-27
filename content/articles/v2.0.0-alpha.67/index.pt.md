---
title: "NocoBase v2.0.0-alpha.67: adicionar componente de campo de subtabela (edição popup)"
description: "Nota de lançamento da v2.0.0-alpha.67"
---

### 🎉 Novas Funcionalidades

- **[servidor]** Reformulação do supervisor de aplicativos para suportar gerenciamento de múltiplos aplicativos em diferentes cenários ([#8043](https://github.com/nocobase/nocobase/pull/8043)) por @2013xile

- **[cliente]** Adicionado componente de campo de subtabela (edição em popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) por @katherinehhh

- **[Funcionários de IA]** Suporte para colar arquivos no chat de IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) por @heziqiang

### 🚀 Melhorias

- **[cliente]**
  - Melhoria nos botões de upload e edição para campos de anexo em subtabelas, orientando melhor o usuário a clicar para fazer upload. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) por @katherinehhh

  - Melhoria no subformulário "para-muitos" para inicializar com um item padrão e evitar a criação de registros quando deixado vazio ([#8473](https://github.com/nocobase/nocobase/pull/8473)) por @katherinehhh

  - Melhoria no subformulário "para-muitos" para inicializar com um item padrão e evitar a criação de registros quando deixado vazio ([#8458](https://github.com/nocobase/nocobase/pull/8458)) por @katherinehhh

- **[mecanismo de fluxo]** Melhoria no ctx.libs do runjs para suportar carregamento sob demanda e adição de bibliotecas predefinidas: lodash, math e formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) por @gchust

- **[servidor]** Suporte para configurar uma lista de permissões de origem CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) por @2013xile

- **[Gerenciador de arquivos]** Adicionado visualizador extensível para o gerenciador de arquivos ([#8501](https://github.com/nocobase/nocobase/pull/8501)) por @mytharcher

- **[Visualizador de arquivos do Office]** Adicionados mais tipos de arquivo para visualização no Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) por @mytharcher

- **[Manipulador de erros]** Sanitização de erros de referência SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) por @2013xile

- **[Ação: Exportar registros]** Melhoria no escopo de dados da ação de exportação com base em registros selecionados ou filtros de recurso ([#8442](https://github.com/nocobase/nocobase/pull/8442)) por @katherinehhh

- **[Ação: Exportar registros Pro]** Melhoria no escopo de dados da ação de exportação com base em registros selecionados ou filtros de recurso por @katherinehhh

- **[Fluxo de trabalho: Aprovação]** Implementação de controle de acesso para APIs para prevenir operações de dados não autorizadas por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Correção de tempo duplicado no valor DateTime do filtro ([#8506](https://github.com/nocobase/nocobase/pull/8506)) por @zhangzhonghe

  - Correção de tempo duplicado no valor DateTime do filtro ([#8484](https://github.com/nocobase/nocobase/pull/8484)) por @zhangzhonghe

  - Correção do campo nanoid não ser regenerado após o envio do formulário ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh

  - Correção do problema onde os popovers do editor de texto rico são obscurecidos ([#8443](https://github.com/nocobase/nocobase/pull/8443)) por @zhangzhonghe

  - Filtragem da lista para remover duplicatas ([#8431](https://github.com/nocobase/nocobase/pull/8431)) por @jiannx

  - Correção da mensagem de validação obrigatória duplicada ao limpar um campo em cascata ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh

  - Correção do problema onde o menu de configuração não é exibido no Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) por @zhangzhonghe

  - Correção do problema onde os dados de subdetalhe em modo somente leitura não eram exibidos corretamente no formulário de edição ([#8469](https://github.com/nocobase/nocobase/pull/8469)) por @katherinehhh

  - Correção do problema onde o popup "Variáveis Personalizadas" é obscurecido ([#8463](https://github.com/nocobase/nocobase/pull/8463)) por @zhangzhonghe

  - Correção do problema onde as configurações de ordenação do grupo de campos da coleção não surtiam efeito. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) por @katherinehhh

  - Correção do problema onde o botão "Configurações de Coluna" da tabela não funcionava ([#8441](https://github.com/nocobase/nocobase/pull/8441)) por @zhangzhonghe

  - Correção de um problema onde o popup do seletor do campo de associação de arquivo tinha um z-index incorreto, e a configuração do popup não podia ser salva corretamente. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) por @gchust

  - Correção do problema ao editar coleção na interface gráfica ([#8451](https://github.com/nocobase/nocobase/pull/8451)) por @katherinehhh

- **[banco de dados]**
  - Correção de erros ao filtrar com o operador `empty` após recarregar uma coleção ([#8496](https://github.com/nocobase/nocobase/pull/8496)) por @2013xile

  - Correção: atualização profunda de associações aninhadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos

  - Correção: atualização profunda de associações aninhadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos

- **[servidor]** Correção da versão do `mathjs` nas dependências comuns ([#8475](https://github.com/nocobase/nocobase/pull/8475)) por @mytharcher

- **[mecanismo de fluxo]**
  - Correção de um problema onde fechar um popup incorporado causava um erro após abrir consecutivamente o popup de configuração de regras de vinculação e o popup de configuração do fluxo de evento. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) por @gchust

  - Correção de um problema onde clicar repetidamente no menu de configuração podia abrir múltiplos popups de configuração. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) por @gchust

  - Correção de um problema onde variáveis nos parâmetros de código do runjs eram resolvidas antes da execução. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) por @gchust

  - Correção de um problema onde variáveis de popup não podiam ser selecionadas no popup de criação rápida do seletor de dados. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) por @gchust

- **[Funcionários de IA]** Correção de problemas de configuração de campo selecionável inconsistente entre a modelagem de IA e o gerenciamento de fontes de dados ([#8488](https://github.com/nocobase/nocobase/pull/8488)) por @cgyrock

- **[Fonte de dados: Principal]** Correção de um problema onde a exclusão de registros de um bloco de tabela de associação muitos-para-muitos não respeitava a restrição do campo de associação `onDelete: 'restrict'` ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile

- **[Bloco: iframe]** Correção do erro ao adicionar variáveis agregadas ao Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe

- **[Gerenciador de tarefas assíncronas]** Correção do problema onde o fluxo de trabalho acionado por importação assíncrona atrasava a execução ([#8478](https://github.com/nocobase/nocobase/pull/8478)) por @mytharcher

- **[Gerenciador de arquivos]** Correção do problema onde o nome do arquivo obtido do corpo da requisição se tornava uma string decodificada inesperadamente ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher

- **[Modelos de UI]** Correção de um problema onde blocos de modelo de referência não podiam definir escopos de dados através das configurações de fluxo de evento. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) por @gchust

- **[Mobile (obsoleto)]** Plugin mobile obsoleto (substituído pelo plugin ui-layout a partir da versão 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) por @chenos

- **[Ação: Importar registros Pro]** Correção do problema onde o fluxo de trabalho acionado por importação assíncrona atrasava a execução por @mytharcher

- **[Fluxo de trabalho: Webhook]** Correção do problema onde os dados do corpo estão ausentes quando a análise do corpo não está configurada por @mytharcher

- **[Impressão de modelo]**
  - Correção da lógica de permissão do botão de impressão incorreta quando as funções eram unidas. por @jiannx

  - Remoção dos botões de rodapé da configuração do modelo de impressão por @katherinehhh

- **[Fluxo de trabalho: Aprovação]**
  - Correção do problema onde os campos não são exibidos nos cartões de tarefa de aprovação por @zhangzhonghe

  - Correção do problema onde retornar uma aprovação ao nó anterior, mas retornava ao início por @mytharcher

  - Correção do problema onde a concorrência fazia a execução ser retomada repetidamente por @mytharcher

  - Correção do problema onde um erro era lançado no popup de registro de aprovação 1.x por @mytharcher

- **[Gerenciador de e-mail]**
  - Correção do problema onde o popup de configuração de e-mail é obscurecido por @zhangzhonghe

  - Correção do problema de e-mails na mesma caixa postal entre múltiplos usuários e otimização de desempenho por @jiannx

- **[Gerenciador de migração]** Correção de um potencial congelamento de processo causado pelo registro de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock
