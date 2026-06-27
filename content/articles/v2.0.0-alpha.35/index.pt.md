---
title: "NocoBase v2.0.0-alpha.35: suporte a operação atrasada no modelo de fluxo"
description: "Nota de lançamento da v2.0.0-alpha.35"
---

### 🚀 Melhorias

- **[flow-engine]** Suporte a operação atrasada no modelo de fluxo ([#7786](https://github.com/nocobase/nocobase/pull/7786)) por @gchust

- **[Workflow: JavaScript]** Corrige uma vulnerabilidade de segurança causada pela passagem de funções de nível superior para o ambiente de execução, impedindo exploração que poderia conceder acesso ao contexto de execução superior por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrige problema de página seguinte vazia no bloco de detalhes com paginação simples ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh

  - Corrige largura da ação da tabela e da coluna jsColumn não aplicada ([#7777](https://github.com/nocobase/nocobase/pull/7777)) por @katherinehhh

  - Escopo de dados do bloco não funciona se definido pelo fluxo de eventos da página ([#7788](https://github.com/nocobase/nocobase/pull/7788)) por @gchust

- **[Workflow]** Adiciona `workflowId` como dado de identidade para logs do workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher

- **[Workflow: Variável personalizada]** Corrige erro lançado quando não há configuração no nó de variável por @mytharcher

- **[Gerenciador de e-mail]** Coleção mailMessages adiciona índices por @jiannx
