---
title: "NocoBase v1.9.4: Otimizar a lógica de controle de permissão para operações de campos de associação"
description: "Nota de lançamento da v1.9.4"
---

### 🚀 Melhorias

- **[Controle de acesso]** Otimização da lógica de controle de permissões para operações em campos de associação ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile

- **[Workflow: JavaScript]** Correção de uma vulnerabilidade de segurança causada pela passagem de funções de nível superior para o ambiente de execução, evitando exploração que poderia conceder acesso ao contexto de execução superior por @mytharcher

- **[Auth: OIDC]** Aumento do tempo limite de requisição por @2013xile

### 🐛 Correções de Bugs

- **[servidor]** Correção de um problema onde, após ativar o modo de divisão de serviços, processos workers enviando mensagens através da fila de mensagens causavam erros ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher

- **[cliente]** Correção do problema de página seguinte vazia no bloco de detalhes com paginação simples ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh

- **[Workflow]**
  - Adição de `workflowId` como dado de identidade para logs de workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher

  - Correção do problema onde o plugin de workflow ainda consumia o evento da fila quando não estava no modo worker sob o modo de divisão de serviços ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher

- **[Usuários]** Atualização incorreta de índice quando nomes de campos usam o estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile

- **[Workflow: Variável personalizada]** Correção de erro lançado quando não há configuração no nó de variável por @mytharcher
