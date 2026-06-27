---
title: "NocoBase v1.8.0-alpha.12: Suporte para adicionar opções de pool a partir de env"
description: "Nota de lançamento da v1.8.0-alpha.12"
---

### 🚀 Melhorias

- **[database]** Suporte para adicionar opções de pool a partir de env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) por @mytharcher

- **[Workflow]**
  - Melhora no desempenho da listagem de execuções ao excluir campo JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) por @mytharcher

  - Adiciona API de log para teste de nós ([#7129](https://github.com/nocobase/nocobase/pull/7129)) por @mytharcher

- **[Workflow: Approval]** Altera o tempo para absoluto na linha do tempo por @mytharcher

### 🐛 Correções de Bugs

- **[utils]** Problema de filtragem em DateOnly ou Datetime (sem fuso horário) usando variável Exato dia ([#7113](https://github.com/nocobase/nocobase/pull/7113)) por @katherinehhh

- **[cli]**
  - Erro undefined ao baixar plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) por @jiannx

  - Ajusta a cópia da licença ao instalar o plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) por @jiannx

- **[client]**
  - Tolerância a falhas para configurações baseadas em 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) por @mytharcher

  - A configuração do campo displayName na visualização conectada não tinha efeito ([#7130](https://github.com/nocobase/nocobase/pull/7130)) por @aaaaaajie

  - Configuração da UI do nó manual do Workflow: regras de vinculação não conseguem selecionar variáveis do formulário atual ([#7125](https://github.com/nocobase/nocobase/pull/7125)) por @zhangzhonghe

- **[Workflow]** Corrige erro gerado por importação cíclica ([#7134](https://github.com/nocobase/nocobase/pull/7134)) por @mytharcher

- **[plugin-commercial]**
  - Modo de desenvolvimento não exibe popup de licença por @jiannx

  - Fecha temporariamente o pop-up de verificação de licença por @jiannx

  - Ajusta a lógica de verificação de licença e suporta correspondência de domínios pan por @jiannx

- **[Política de senha]** Suporte para bloquear permanentemente contas de usuário por @2013xile

- **[Workflow: Subfluxo]** Corrige problema em modo cluster por @mytharcher

- **[Workflow: Approval]**
  - Adiciona configurações de layout de formulário por @mytharcher

  - Remove campos não filtráveis do filtro por @mytharcher
