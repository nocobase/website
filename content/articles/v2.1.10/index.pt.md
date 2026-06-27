---
title: "NocoBase v2.1.10: Adicionado suporte para uso de variáveis do usuário atual em URLs e cabeçalhos de clientes MCP remotos"
description: "Nota de lançamento da v2.1.10"
---

### 🎉 Novas Funcionalidades

- **[ai]** Adicionado suporte para uso de variáveis do usuário atual em URLs e cabeçalhos de clientes MCP remotos. ([#9828](https://github.com/nocobase/nocobase/pull/9828)) por @cgyrock
- **[cli]** Suporte a scripts de hook de instalação ([#9824](https://github.com/nocobase/nocobase/pull/9824)) por @chenos

### 🚀 Melhorias

- **[client-v2]** Exibir regras de validação em nível de campo como regras herdadas somente leitura nas configurações de validação de campo da interface. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) por @katherinehhh
- **[Mecanismo de Fluxo]** Adicionado o bloco atual ao contexto do usuário por padrão ao construir funcionários de IA usando a API de Superfície de Fluxo. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) por @gchust

### 🐛 Correções de Bugs

- **[client-v2]** Corrigido problema em que o bloco não era atualizado após alterações nas configurações dos blocos. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) por @gchust
- **[Fluxo de Trabalho: Evento de ação personalizada]**

  - Corrigidas ações de fluxo de trabalho acionadas por contexto personalizado para que variáveis do frontend em payloads de requisição sejam resolvidas antes do envio em botões de ação v2 ([#9853](https://github.com/nocobase/nocobase/pull/9853)) por @mytharcher
  - Corrigido o seletor de vinculação do fluxo de trabalho de ação personalizada v2 para que fluxos de trabalho habilitados sejam filtrados com valores booleanos e possam ser listados corretamente. ([#9865](https://github.com/nocobase/nocobase/pull/9865)) por @mytharcher
- **[Bloco: Gantt]** Corrigido problema em que as configurações de template do popup de tarefa do Gantt não eram aplicadas ou limpas corretamente. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) por @jiannx
- **[Fluxo de Trabalho: Aprovação]**

  - Corrigida a validação do nó de ação de aprovação para permitir `null` para `applyDetail` ou `approvalUid` e pular o processamento a menos que uma referência de string seja fornecida por @mytharcher
  - Corrigido o problema em que aprovações relacionadas não carregam ou atualizam corretamente por @zhangzhonghe
