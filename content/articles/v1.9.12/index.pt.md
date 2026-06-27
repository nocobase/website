---
title: "NocoBase v1.9.12: Mensagens de erro aprimoradas para tarefas assíncronas, fornecendo aos usuários razões específicas para falhas nas tarefas"
description: "Nota de lançamento da v1.9.12"
---

### 🚀 Melhorias

- **[client]** Adiciona estado de carregamento para os botões de ação de atualizar e excluir registro, evitando requisições duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher

- **[Gerenciador de tarefas assíncronas]** Mensagens de erro aprimoradas para tarefas assíncronas, fornecendo aos usuários motivos específicos para falhas nas tarefas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher

- **[Ação: Importar registros Pro]** Mensagens de erro aprimoradas para tarefas assíncronas, fornecendo aos usuários motivos específicos para falhas nas tarefas por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Corrige a seleção de variáveis no AssigneeSelect, limitando a seleção apenas a PK ou FK da coleção de usuários por @mytharcher

  - Reduz as associações a serem carregadas no popup de aprovação, proporcionando melhor desempenho por @mytharcher

  - Torna o payload da execução manual (ou acionada por nó de subfluxo) compatível com registro ou chave primária. Evita problemas de consistência no contexto do acionador. por @mytharcher

### 🐛 Correções de Bugs

- **[Gerenciador de tarefas assíncronas]** Adiciona regra de migração para a coleção `asyncTasks`, evitando que registros de tarefas assíncronas sejam migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Corrige arquivo de idioma por @mytharcher
