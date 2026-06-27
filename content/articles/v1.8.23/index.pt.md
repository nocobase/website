---
title: "NocoBase v1.8.23: Consulta de contagem da API de lista otimizada"
description: "Nota de lançamento da v1.8.23"
---

### 🚀 Melhorias

- **[database]** Otimização da consulta de contagem na API de listagem para reduzir o consumo de recursos. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) por @aaaaaajie

- **[Notificação: Mensagem no aplicativo]** Suporte para configurar o atraso de fechamento automático de notificações de mensagens no aplicativo ([#7472](https://github.com/nocobase/nocobase/pull/7472)) por @mytharcher

- **[Fluxo de trabalho: nó de notificação]** Suporte para testar o nó de notificação ([#7470](https://github.com/nocobase/nocobase/pull/7470)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - erro de renderização do campo de associação ao alternar para o componente de tag no bloco de formulário de edição ([#7468](https://github.com/nocobase/nocobase/pull/7468)) por @katherinehhh

  - problema de limite de tempo quando a data selecionada é igual a minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) por @katherinehhh

- **[Mobile]** campo de data no mobile sem fuso horário não exibindo a data corretamente ([#7473](https://github.com/nocobase/nocobase/pull/7473)) por @katherinehhh

- **[Formulários públicos]** valor padrão do campo do formulário público não aplicado ao usar variáveis ([#7467](https://github.com/nocobase/nocobase/pull/7467)) por @katherinehhh

- **[Ação: Importar registros]** Correção do número de linha incorreto exibido quando dados duplicados são importados ([#7440](https://github.com/nocobase/nocobase/pull/7440)) por @aaaaaajie

- **[Coleção: Árvore]** Remoção de eventos do banco de dados relacionados à coleção após excluir uma coleção em árvore ([#7459](https://github.com/nocobase/nocobase/pull/7459)) por @2013xile

- **[Fluxo de trabalho: Evento de ação personalizada]** Correção do problema em que eventos de ação personalizada não podiam ser executados manualmente imediatamente após a inicialização por @mytharcher

- **[Fluxo de trabalho: Subfluxo]** Correção do problema de subprocessos serem retomados e executados várias vezes por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Para usuários que não são o aprovador atual, o botão de visualização correspondente na tabela de fluxo do processo não será exibido por @mytharcher
