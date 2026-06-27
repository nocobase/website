---
title: "NocoBase v1.7.19: Suporte para adicionar opções de pool a partir de env"
description: "Nota de lançamento da v1.7.19"
---

### 🚀 Melhorias

- **[database]** Suporte para adicionar opções de pool a partir de env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) por @mytharcher

- **[Workflow]**
  - Melhora no desempenho da listagem de execuções ao excluir campo JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) por @mytharcher

  - Adiciona API de log para teste de nós ([#7129](https://github.com/nocobase/nocobase/pull/7129)) por @mytharcher

- **[Gerenciador de multi-aplicativos]** Adiciona suporte a filtros no gerenciamento de multi-aplicativos ([#7124](https://github.com/nocobase/nocobase/pull/7124)) por @katherinehhh

- **[Workflow: Aprovação]** Altera o tempo para absoluto na linha do tempo por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - A definição do displayName do campo na visualização conectada não tinha efeito ([#7130](https://github.com/nocobase/nocobase/pull/7130)) por @aaaaaajie

  - Problema de estilo de cor de fundo na subtabela do bloco de detalhes ([#7144](https://github.com/nocobase/nocobase/pull/7144)) por @katherinehhh

  - Configuração da UI do nó manual do Workflow: regras de vinculação não conseguem selecionar variáveis do formulário atual ([#7125](https://github.com/nocobase/nocobase/pull/7125)) por @zhangzhonghe

  - Valor padrão do campo de associação sobrescreve dados existentes na subtabela ([#7120](https://github.com/nocobase/nocobase/pull/7120)) por @katherinehhh

  - Markdown não refletia alterações em tempo real ao referenciar variáveis $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) por @katherinehhh

  - Tolerância a falhas para configurações baseadas em 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) por @mytharcher

- **[utils]** Problema de filtragem em DateOnly ou Datetime (sem fuso horário) usando variável de dia exato ([#7113](https://github.com/nocobase/nocobase/pull/7113)) por @katherinehhh

- **[Workflow]** Corrige erro gerado por importação cíclica ([#7134](https://github.com/nocobase/nocobase/pull/7134)) por @mytharcher

- **[Política de senha]** Suporte para bloquear permanentemente contas de usuário por @2013xile

- **[Workflow: Subfluxo]** Corrige problema no modo cluster por @mytharcher

- **[Workflow: Aprovação]**
  - Remove campos não filtráveis do filtro por @mytharcher

  - Adiciona configurações de layout do formulário por @mytharcher
