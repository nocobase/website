---
title: "NocoBase v1.7.0-beta.10: Suporte à configuração de variáveis após o envio"
description: "Nota de lançamento da v1.7.0-beta.10"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte à configuração de variáveis após o envio, permitindo redirecionamento com o ID do dado atual ([#6465](https://github.com/nocobase/nocobase/pull/6465)) por @katherinehhh

- **[Campo de coleção: Markdown(Vditor)]** Vditor suporta S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) por @zhangzhonghe

### 🚀 Melhorias

- **[client]**
  - Suporta apenas visualização de arquivos de texto simples ([#6563](https://github.com/nocobase/nocobase/pull/6563)) por @mytharcher

  - Otimiza mensagem de erro 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) por @chenos

  - Restringe ações disponíveis para diferentes propriedades de campo em regras de vinculação ([#6548](https://github.com/nocobase/nocobase/pull/6548)) por @katherinehhh

- **[Gerenciador de arquivos]** Ajusta a API `getFileData` do armazenamento ([#6553](https://github.com/nocobase/nocobase/pull/6553)) por @mytharcher

- **[Controle de acesso]** Otimiza a ordem e o estilo da troca de papéis ([#6555](https://github.com/nocobase/nocobase/pull/6555)) por @aaaaaajie

- **[Campo de coleção: Sequência]** Suporte à definição de sequência como campo de título para bloco de calendário ([#6562](https://github.com/nocobase/nocobase/pull/6562)) por @katherinehhh

- **[Workflow]** Divide colunas executadas em tabelas de estatísticas ([#6534](https://github.com/nocobase/nocobase/pull/6534)) por @mytharcher

- **[Workflow: Evento de ação personalizada]** Divide colunas executadas em tabelas de estatísticas por @mytharcher

- **[Workflow: Aprovação]**
  - Divide colunas executadas em tabelas de estatísticas por @mytharcher

  - Suporte para pular validador nas configurações por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Versões mais antigas de navegadores exibem uma página em branco ([#6571](https://github.com/nocobase/nocobase/pull/6571)) por @zhangzhonghe

  - A opção 'Conteúdo com reticências para overflow' requer atualização da página para que o estado de alternância entre em vigor ([#6520](https://github.com/nocobase/nocobase/pull/6520)) por @zhangzhonghe

  - Problema com exibição de campo de data na filtragem de escopo de dados ([#6564](https://github.com/nocobase/nocobase/pull/6564)) por @katherinehhh

  - Incapacidade de abrir outro modal dentro de um modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) por @zhangzhonghe

  - A ação de salvar como modelo falha se contiver campo de associação ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust

  - O menu superior da página está exibindo em branco ([#6551](https://github.com/nocobase/nocobase/pull/6551)) por @zhangzhonghe

  - Atribuição de campo com valor nulo é ineficaz ([#6549](https://github.com/nocobase/nocobase/pull/6549)) por @katherinehhh

- **[Workflow]**
  - Garante que a chave do workflow seja gerada antes de salvar ([#6567](https://github.com/nocobase/nocobase/pull/6567)) por @mytharcher

  - Corrige erro lançado ao configurar opções de exclusão automática ([#6560](https://github.com/nocobase/nocobase/pull/6560)) por @mytharcher

- **[Formulários públicos]** Problema com o título da página do formulário público exibindo 'Carregando...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) por @katherinehhh

- **[Mobile]** Ajusta o tamanho da fonte exibida no telefone para 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) por @zhangzhonghe

- **[Variáveis e segredos]** Botão de filtro de ícone ausente, contagem de filtros não exibida e dados não atualizados após filtragem ao trocar de página ([#6568](https://github.com/nocobase/nocobase/pull/6568)) por @katherinehhh

- **[Autenticação]** Problema de localização para campos da página de cadastro ([#6556](https://github.com/nocobase/nocobase/pull/6556)) por @2013xile

- **[Documentação da API]** Página de documentação da API não pode rolar ([#6566](https://github.com/nocobase/nocobase/pull/6566)) por @zhangzhonghe

- **[Workflow: Evento pós-ação]** Múltiplos registros em ação em massa devem disparar múltiplas vezes ([#6559](https://github.com/nocobase/nocobase/pull/6559)) por @mytharcher

- **[Bloco: modelo]**
  - Regras de vinculação do bloco de formulário não foram sincronizadas corretamente do modelo ([#6550](https://github.com/nocobase/nocobase/pull/6550)) por @gchust

  - Menu duplicado de salvar como modelo no bloco de detalhes ([#6558](https://github.com/nocobase/nocobase/pull/6558)) por @gchust

- **[Workflow: Aprovação]** Corrige valores do formulário de aprovação para envio por @mytharcher
