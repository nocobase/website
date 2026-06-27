---
title: "NocoBase v1.4.0-alpha.20241017164316: Melhorias nos Nós do Fluxo de Trabalho"
description: "Nota de lançamento da v1.4.0-alpha.20241017164316"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Nó de loop]** adiciona mais opções de controle à configuração do nó de loop ([#5342](https://github.com/nocobase/nocobase/pull/5342)) por @mytharcher
  Referência: [Nó de loop](https://docs.nocobase.com/handbook/workflow-loop)
- **[Workflow]** Adiciona botão de execução de teste para nós do workflow e API para implementar a função de teste ([#5407](https://github.com/nocobase/nocobase/pull/5407)) por @mytharcher
- **[Componente de campo: máscara]** Adiciona o componente de campo `mask`, suporta exibição de dados do campo como string mascarada por @gchust
  Referência: [Máscara](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Melhorias

- **[cliente]** permite redefinir o título da coluna da tabela para o padrão ([#5439](https://github.com/nocobase/nocobase/pull/5439)) por @katherinehhh

### 🐛 Correções de Bugs

- **[cliente]** corrigido problema em que as opções do componente de campo não eram traduzidas corretamente ([#5442](https://github.com/nocobase/nocobase/pull/5442)) por @gchust
- **[Workflow: Nó de requisição HTTP]** corrige mensagem de erro legada no nó de requisição ([#5443](https://github.com/nocobase/nocobase/pull/5443)) por @mytharcher
