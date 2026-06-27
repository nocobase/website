---
title: "NocoBase v2.0.0-alpha.5: Correções de Bugs"
description: "Nota de Lançamento da v2.0.0-alpha.5"
---

### 🐛 Correções de Bugs

- **[servidor]** Erro de migração de chave primária ([#7563](https://github.com/nocobase/nocobase/pull/7563)) por @2013xile

- **[cliente]**
  - Corrige o problema de não atualizar os dados após enviar o formulário ([#7560](https://github.com/nocobase/nocobase/pull/7560)) por @zhangzhonghe

  - Corrige o problema em que a falta de propriedades dinâmicas no componente `AssignedField` causava erros de upload de arquivos nos nós "Criar registro" ou "Atualizar registro" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) por @mytharcher

- **[Calendário]** corrige problema de consulta de dados causado por identificador único no bloco de calendário ([#7562](https://github.com/nocobase/nocobase/pull/7562)) por @katherinehhh

- **[Bloco: template (obsoleto)]** Corrigido um problema em que solicitações desnecessárias para templates de bloco eram acionadas ao abrir ou fechar modais ([#7561](https://github.com/nocobase/nocobase/pull/7561)) por @gchust

- **[Formulários públicos]** Corrige o problema em que as regras de upload para campos de arquivo em formulários públicos estavam incorretas ([#7553](https://github.com/nocobase/nocobase/pull/7553)) por @mytharcher

- **[Gerenciador de múltiplos aplicativos (obsoleto)]** Corrige a validação de porta antes da migração de dados de múltiplos aplicativos ([#7540](https://github.com/nocobase/nocobase/pull/7540)) por @jiannx
