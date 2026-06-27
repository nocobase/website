---
title: "NocoBase v2.0.0-alpha.46: Suporte para alternar classe de modelo de fluxo dinamicamente"
description: "Nota de lançamento da v2.0.0-alpha.46"
---

### 🚀 Melhorias

- **[flow-engine]** Suporte para alternar dinamicamente a classe do modelo de fluxo ([#7952](https://github.com/nocobase/nocobase/pull/7952)) por @gchust

- **[AI employees]** Plugin de funcionário de IA adiciona hook de atualização ([#7951](https://github.com/nocobase/nocobase/pull/7951)) por @heziqiang

- **[Gerenciador de tarefas assíncronas]** Mensagens de erro aprimoradas para tarefas assíncronas, fornecendo aos usuários motivos específicos para falhas nas tarefas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Tornar o payload da execução manual (ou acionada por nó de subfluxo) compatível com registro ou chave primária. Evitar problema de consistência no contexto do acionador. por @mytharcher

  - Reduzir associações a carregar no popup de aprovação, para fornecer melhor desempenho por @mytharcher

  - Corrigir seleção de variável no AssigneeSelect, limitar para que apenas PK ou FK da coleção de usuários possam ser selecionados por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** corrigir quebra automática de texto em campos de bloco de detalhes quando o conteúdo excede a largura ([#7955](https://github.com/nocobase/nocobase/pull/7955)) por @katherinehhh

- **[Gerenciador de tarefas assíncronas]** Adicionar regra de migração para a coleção `asyncTasks`, evitando que registros de tarefas assíncronas sejam migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher

- **[Gerenciador de arquivos]** corrigir upload de arquivos para o armazenamento especificado em vez do armazenamento padrão ([#7947](https://github.com/nocobase/nocobase/pull/7947)) por @katherinehhh

- **[Fluxo de trabalho: Aprovação]** Corrigir arquivo de idioma por @mytharcher
