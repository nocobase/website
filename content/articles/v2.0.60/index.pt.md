---
title: "NocoBase v2.0.60: Melhorado o campo URL Base do LLM para que possa usar variáveis de escopo global nos formulários de criação e edição"
description: "Nota de lançamento da v2.0.60"
---

### 🚀 Melhorias

- **[Funcionários de IA]** Melhorado o campo URL Base do LLM para que possa usar variáveis de escopo global nos formulários de criação e edição. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]** Corrigida a largura do selo na barra de navegação superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
- **[Funcionários de IA]** Corrigido o problema dos botões de atalho de IA que obtinham um contexto de bloco vazio após a remoção de blocos de tabela referenciados. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
- **[Gerenciador de migração]** Corrigidas as diferenças de migração do PostgreSQL para que colunas herdadas filhas não sejam removidas quando uma coluna local se torna herdada. por @hongboji
