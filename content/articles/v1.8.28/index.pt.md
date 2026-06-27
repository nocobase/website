---
title: "NocoBase v1.8.28: Adicionar botão de impressão ao pop-up de detalhes em blocos de aprovação personalizados"
description: "Nota de lançamento da v1.8.28"
---

### 🚀 Melhorias

- **[client]** Para obter um tipo MIME mais preciso de arquivos, use o pacote `mime` para detectar o tipo MIME de arquivos no cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher

- **[Workflow]**
  - Suporte para limitar o número máximo de nós em um workflow através de variáveis de ambiente ([#7542](https://github.com/nocobase/nocobase/pull/7542)) por @mytharcher

  - Adicionar opção `keepBranch` ao excluir nó ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher

- **[Workflow: Nó de loop]** Suporte para limitar o número máximo de ciclos para nós de loop através de variáveis de ambiente ([#7543](https://github.com/nocobase/nocobase/pull/7543)) por @mytharcher

- **[Workflow: Aprovação]** Adicionar botão de impressão ao popup de detalhes em blocos de aprovação personalizados por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir o problema em que as imagens não eram exibidas corretamente quando rotacionadas e redimensionadas durante a pré-visualização ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher

  - Corrigir o problema em que a falta de propriedades dinâmicas no componente `AssignedField` causava erros de upload de arquivos nos nós "Criar registro" ou "Atualizar registro" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) por @mytharcher

- **[Formulários públicos]** Corrigir o problema em que as regras de upload para campos de arquivo em formulários públicos estavam incorretas ([#7553](https://github.com/nocobase/nocobase/pull/7553)) por @mytharcher

- **[Calendário]** corrigir problema de consulta de dados causado por identificador único no bloco de calendário ([#7562](https://github.com/nocobase/nocobase/pull/7562)) por @katherinehhh

- **[Auth: LDAP]** Corrigir falha de bind do LDAP com DNs não-ASCII (UTF-8) no Active Directory por @2013xile
