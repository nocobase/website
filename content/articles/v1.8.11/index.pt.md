---
title: "NocoBase v1.8.11: Suporte para visualizar arquivos do Office via pré-visualização ao vivo da Microsoft"
description: "Nota de lançamento da v1.8.11"
---

### 🎉 Novas Funcionalidades

- **[Visualizador de Arquivos do Office]** Suporte para visualizar arquivos do Office através da pré-visualização ao vivo da Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher

### 🚀 Melhorias

- **[cliente]** Não fechar automaticamente o menu após a seleção ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612

- **[Notificação: Mensagem no aplicativo]** Alterar mensagem no aplicativo de SSE para WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher

- **[Fluxo de trabalho]** Reduzir a quantidade de tarefas carregadas ao preparar a execução ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher

- **[Autenticação: DingTalk]** No cliente DingTalk, definir o título da barra de navegação como uma string vazia em vez de exibir “Carregando…” por @2013xile

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigir problema em que a tabela em árvore não pode ser expandida ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe

  - Corrigir comportamento inesperado na ordenação por arrastar e soltar de linhas da tabela ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu

  - Corrigir problema de loop infinito ao analisar valores padrão de campos ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe

  - Corrigir problema de exibição anômala de campos de data no pop-up ao configurar o seletor de dados para campos de relação no formulário de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh

- **[Fluxo de trabalho: Nó de requisição HTTP]** Corrigir problema de condição de corrida ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher

- **[Fluxo de trabalho]** Corrigir problema de ID BigInt no MySQL ao salvar tarefa ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher

- **[Ação: Exportar registros]** Corrigida a formatação incorreta de campos de relação aninhados ao exportar para Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie

- **[Fonte de dados: SQL Server externo]** Corrigir formato de armazenamento inconsistente para campos datetime (sem fuso horário) do MSSQL de fontes de dados externas por @aaaaaajie

- **[Fluxo de trabalho: Aprovação]** Corrigir erro lançado pela seleção de responsável dentro de fonte de dados externa por @mytharcher
