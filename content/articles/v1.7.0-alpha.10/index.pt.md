---
title: "NocoBase v1.7.0-alpha.10: Suporte à configuração de variáveis após o envio"
description: "Nota de lançamento da v1.7.0-alpha.10"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte à configuração de variáveis após o envio, permitindo redirecionamento com o ID dos dados atuais ([#6465](https://github.com/nocobase/nocobase/pull/6465)) por @katherinehhh

- **[Campo de coleção: Markdown(Vditor)]** Vditor agora suporta S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) por @zhangzhonghe

### 🚀 Melhorias

- **[client]**
  - Suporta apenas visualização de arquivos de texto simples ([#6563](https://github.com/nocobase/nocobase/pull/6563)) por @mytharcher

  - Otimização da mensagem de erro 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) por @chenos

  - Restrição de ações disponíveis para diferentes propriedades de campo em regras de vinculação ([#6548](https://github.com/nocobase/nocobase/pull/6548)) por @katherinehhh

- **[Workflow]** Divisão de colunas executadas em tabelas de estatísticas ([#6534](https://github.com/nocobase/nocobase/pull/6534)) por @mytharcher

- **[Mobile]** Adaptação do estilo do pop-up de notificação para dispositivos móveis ([#6557](https://github.com/nocobase/nocobase/pull/6557)) por @zhangzhonghe

- **[Campo de coleção: Sequência]** Suporte para definir sequência como campo de título para bloco de calendário ([#6562](https://github.com/nocobase/nocobase/pull/6562)) por @katherinehhh

- **[Gerenciador de arquivos]** Ajuste da API `getFileData` do armazenamento ([#6553](https://github.com/nocobase/nocobase/pull/6553)) por @mytharcher

- **[Controle de acesso]** Otimização da ordem e estilo da troca de papéis ([#6555](https://github.com/nocobase/nocobase/pull/6555)) por @aaaaaajie

- **[Formulários públicos]** Definição do título da página do formulário público como o título configurado na criação ([#6538](https://github.com/nocobase/nocobase/pull/6538)) por @katherinehhh

- **[Workflow: Evento de ação personalizada]** Divisão de colunas executadas em tabelas de estatísticas por @mytharcher

- **[Workflow: Aprovação]**
  - Suporte para pular validador nas configurações por @mytharcher

  - Divisão de colunas executadas em tabelas de estatísticas por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Navegadores mais antigos exibem uma página em branco ([#6571](https://github.com/nocobase/nocobase/pull/6571)) por @zhangzhonghe

  - Incapacidade de abrir outro modal dentro de um modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) por @zhangzhonghe

  - A opção 'Conteúdo com reticências para overflow' requer atualização da página para que o estado de alternância entre em vigor ([#6520](https://github.com/nocobase/nocobase/pull/6520)) por @zhangzhonghe

  - Problema com exibição de campo de data na filtragem de escopo de dados ([#6564](https://github.com/nocobase/nocobase/pull/6564)) por @katherinehhh

  - O menu superior da página está exibindo em branco ([#6551](https://github.com/nocobase/nocobase/pull/6551)) por @zhangzhonghe

  - A ação 'Salvar como modelo' falha se contiver campo de associação ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust

  - Incapacidade de usar a variável 'Usuário Atual' ao adicionar uma página de link ([#6536](https://github.com/nocobase/nocobase/pull/6536)) por @zhangzhonghe

  - Atribuição de campo com valor nulo é ineficaz ([#6549](https://github.com/nocobase/nocobase/pull/6549)) por @katherinehhh

  - A ação 'Salvar como modelo' falha se contiver campo de associação ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust

  - Remoção da opção 'Permitir seleção múltipla' de campos de seleção única suspensa em formulários de filtro ([#6515](https://github.com/nocobase/nocobase/pull/6515)) por @zhangzhonghe

  - A vinculação de intervalo de dados do campo relacional não é eficaz ([#6530](https://github.com/nocobase/nocobase/pull/6530)) por @zhangzhonghe

  - Erro no comando `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) por @gchust

  - Problema de arrastar e soltar botão de linha de tabela ([#6544](https://github.com/nocobase/nocobase/pull/6544)) por @katherinehhh

- **[Mobile]** Ajuste do tamanho da fonte exibida no telefone para 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) por @zhangzhonghe

- **[Workflow]**
  - Correção de erro ao configurar opções de exclusão automática ([#6560](https://github.com/nocobase/nocobase/pull/6560)) por @mytharcher

  - Garantia de que a chave do workflow seja gerada antes de salvar ([#6567](https://github.com/nocobase/nocobase/pull/6567)) por @mytharcher

- **[Variáveis e segredos]** Botão de filtro de ícone ausente, contagem de filtros não exibida e dados não atualizados após filtragem ao alternar páginas ([#6568](https://github.com/nocobase/nocobase/pull/6568)) por @katherinehhh

- **[Formulários públicos]** Problema com o título da página do formulário público exibindo 'Carregando...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) por @katherinehhh

- **[Documentação da API]** Página de documentação da API não pode rolar ([#6566](https://github.com/nocobase/nocobase/pull/6566)) por @zhangzhonghe

- **[Workflow: Evento pós-ação]** Múltiplos registros em ação em massa devem acionar várias vezes ([#6559](https://github.com/nocobase/nocobase/pull/6559)) por @mytharcher

- **[Bloco: modelo]**
  - Menu 'Salvar como modelo' duplicado no bloco de detalhes ([#6558](https://github.com/nocobase/nocobase/pull/6558)) por @gchust

  - Regras de vinculação do bloco de formulário não foram sincronizadas corretamente do modelo ([#6550](https://github.com/nocobase/nocobase/pull/6550)) por @gchust

- **[Autenticação]** Problema de localização para campos da página de cadastro ([#6556](https://github.com/nocobase/nocobase/pull/6556)) por @2013xile

- **[Ação: Solicitação personalizada]** Incapacidade de baixar arquivos codificados em UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) por @2013xile

- **[Coleção: Árvore]** Problema de migração para plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) por @2013xile

- **[Bloco: Formulário de várias etapas]** O botão de envio tem a mesma cor em seu estado padrão e destacado por @jiannx

- **[Workflow: Aprovação]** Correção dos valores do formulário de aprovação para envio por @mytharcher
