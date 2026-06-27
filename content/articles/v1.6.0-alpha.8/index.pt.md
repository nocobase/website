---
title: "NocoBase v1.6.0-alpha.8: Adicionar uma entrada global fixa para todos os tipos de tarefas pendentes do fluxo de trabalho"
description: "Nota de lançamento da v1.6.0-alpha.8"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Nó manual]** Adicionar uma entrada global fixa para todos os tipos de tarefas pendentes do workflow ([#5858](https://github.com/nocobase/nocobase/pull/5858)) por @mytharcher

- **[Política de senha]** Adicionar um novo plugin: Política de senha, usado para definir as regras de senha e a política de bloqueio de login para todos os usuários por @2013xile
Referência: [Política de senha e bloqueio de usuário](https://docs.nocobase.com/handbook/password-policy)
### 🚀 Melhorias

- **[cliente]** Adicionar uma palavra-chave de filtro "Segurança" para o gerenciador de plugins ([#5977](https://github.com/nocobase/nocobase/pull/5977)) por @2013xile

- **[Workflow: Evento de ação personalizada]** Alterar a API de execução manual por @mytharcher

### 🐛 Correções de Bugs

- **[Workflow]** Corrigir `onChange` não funcionando no componente `WorkflowVariableWrapper` ([#5964](https://github.com/nocobase/nocobase/pull/5964)) por @mytharcher
