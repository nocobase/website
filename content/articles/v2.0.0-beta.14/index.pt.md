---
title: "NocoBase v2.0.0-beta.14: Suporte para colar arquivos no chat de IA"
description: "Nota de lançamento da v2.0.0-beta.14"
---

### 🎉 Novas Funcionalidades

- **[Agentes de IA]** Suporte para colar arquivos no chat de IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) por @heziqiang

### 🚀 Melhorias

- **[cliente]**
  - Melhoria no subformulário muitos-para-muitos para inicializar com um item padrão e evitar a criação de registros quando deixado vazio ([#8473](https://github.com/nocobase/nocobase/pull/8473)) por @katherinehhh

  - Melhoria nos botões de upload e edição para campos de anexo em subtabelas, para melhor orientar o usuário a clicar em upload. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) por @katherinehhh

- **[mecanismo de fluxo]** Melhoria no ctx.libs do runjs para suportar carregamento sob demanda e adicionar bibliotecas predefinidas: lodash, math e formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) por @gchust

- **[Manipulador de erros]** Sanitizar erros de referência SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) por @2013xile

- **[Fluxo de trabalho: Aprovação]** Implementar controle de acesso para APIs para evitar operações de dados não autorizadas por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige o problema onde os popovers do editor de texto rico são obscurecidos ([#8443](https://github.com/nocobase/nocobase/pull/8443)) por @zhangzhonghe

  - Corrige tempo duplicado no valor DateTime do filtro ([#8484](https://github.com/nocobase/nocobase/pull/8484)) por @zhangzhonghe

  - Corrige campo nanoid não regenerado após envio do formulário ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh

  - Corrige mensagem de validação obrigatória duplicada ao limpar um campo em cascata ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh

  - Filtra lista para remover duplicatas ([#8431](https://github.com/nocobase/nocobase/pull/8431)) por @jiannx

  - Corrige o problema onde o menu de configuração não é exibido no Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) por @zhangzhonghe

- **[banco de dados]**
  - correção: atualização profunda de associações aninhadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos

  - correção: atualização profunda de associações aninhadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos

- **[servidor]** Corrige versão do `mathjs` nas dependências comuns ([#8475](https://github.com/nocobase/nocobase/pull/8475)) por @mytharcher

- **[mecanismo de fluxo]** Corrige um problema onde fechar um popup incorporado causava um erro após abrir consecutivamente a configuração de regras de vinculação e o popup de configuração do fluxo de eventos. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) por @gchust

- **[Fonte de dados: Principal]** Corrigido um problema onde a exclusão de registros de um bloco de tabela de associação muitos-para-muitos não respeitava a restrição `onDelete: 'restrict'` do campo de associação ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile

- **[Gerenciador de tarefas assíncronas]** Corrige o problema onde o fluxo de trabalho acionado por importação assíncrona atrasava a execução ([#8478](https://github.com/nocobase/nocobase/pull/8478)) por @mytharcher

- **[Bloco: iframe]** Corrige o erro ao adicionar variáveis agregadas ao Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe

- **[Modelos de UI]** Corrige um problema onde blocos de modelo de referência não podiam definir escopos de dados através das configurações de fluxo de eventos. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) por @gchust

- **[Gerenciador de arquivos]** Corrige o problema onde o nome do arquivo obtido do corpo da requisição se tornava uma string decodificada inesperadamente ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher

- **[Ação: Importar registros Pro]** Corrige o problema onde o fluxo de trabalho acionado por importação assíncrona atrasava a execução por @mytharcher

- **[Fluxo de trabalho: Webhook]** Corrige o problema onde os dados do corpo estão ausentes quando a análise do corpo não está configurada por @mytharcher

- **[Impressão de modelo]** Remove botões de rodapé da configuração do modelo de impressão por @katherinehhh

- **[Fluxo de trabalho: Aprovação]**
  - Corrige o problema onde retornar uma aprovação ao nó anterior, mas retornava ao início por @mytharcher

  - Corrige o problema onde a concorrência fazia a execução ser retomada repetidamente por @mytharcher

  - Corrige o problema onde os campos não são exibidos nos cartões de tarefa de aprovação por @zhangzhonghe
