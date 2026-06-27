---
title: "NocoBase v2.0.0-alpha.41: adicionar funcionário de IA para configurar gráfico"
description: "Nota de lançamento da v2.0.0-alpha.41"
---

### 🎉 Novas Funcionalidades

- **[Visualização de dados]** adicionar funcionário de IA para configurar gráfico ([#7815](https://github.com/nocobase/nocobase/pull/7815)) por @heziqiang

### 🚀 Melhorias

- **[flow-engine]**
  - Suporte para escutar eventos de alteração na árvore de modelos de fluxo no flow engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) por @gchust

  - Melhoria na resolução da variável de registro atual, tornando a abertura de diálogos mais rápida ([#7895](https://github.com/nocobase/nocobase/pull/7895)) por @gchust

  - Estrutura da API de bibliotecas de terceiros no contexto runjs otimizada, com suporte adicionado para a biblioteca de ícones Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) por @gchust

- **[database]** Plugin de criptografia de campo refatorado para aumentar a segurança, com suporte à geração e rotação de chaves de aplicação e chaves de criptografia por campo. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) por @cgyrock

- **[Campo de coleção: Criptografia]** Plugin de criptografia de campo otimizado para suportar recuperação de dados com IVs independentes por @cgyrock

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido o problema em que blocos ocultos ainda ocupavam espaço na página. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) por @gchust

  - Corrigido o problema em que o botão de redefinir no botão de filtro limpava as condições padrão ([#7903](https://github.com/nocobase/nocobase/pull/7903)) por @zhangzhonghe

  - Corrigida a verificação incorreta de permissão para campos de subformulário em novos formulários ([#7902](https://github.com/nocobase/nocobase/pull/7902)) por @katherinehhh

- **[server]** Corrigido um problema no modo de divisão de serviço onde mensagens de fila não inscritas não podiam ser publicadas ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher

- **[Workflow]**
  - Corrigido o erro causado ao escutar eventos de fonte de dados externa inexistente ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher

  - Usar eventQueue em vez do backgroundJob compartilhado para evitar que a fila compartilhada seja consumida incorretamente no modo de divisão de serviço ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher

- **[Workflow: Nó manual]** Corrigido o namespace do idioma local a ser usado para exibir o conteúdo correto da tradução ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher

- **[Controle de acesso]** Problema em que os snippets de operação de associação não estavam surtindo efeito ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile

- **[Workflow: Evento de ação personalizada]** Corrigido o erro causado ao escutar eventos de fonte de dados externa inexistente por @mytharcher

- **[Comentários]** corrigido problema em que comentários citados em bloco de comentários falhavam ao ser exibidos por @katherinehhh

- **[Impressão de modelo]** analisar as variáveis no filtro por @jiannx

- **[Workflow: Aprovação]** Corrigido um problema onde condições de corrida durante o processamento de aprovação concorrente por múltiplos aprovadores podiam fazer com que um nó do workflow fosse executado mais de uma vez por @mytharcher
