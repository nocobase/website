---
title: "NocoBase v2.0.0-beta.22: Suporte à configuração de títulos de abas do navegador para páginas, abas de páginas, pop-ups e abas de pop-ups"
description: "Nota de lançamento da v2.0.0-beta.22"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte para configurar títulos de abas do navegador para páginas, abas de página, popups e abas de popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) por @zhangzhonghe

- **[Workflow: Aprovação]** Adicionar controle ACL para APIs de aprovação por @mytharcher

### 🚀 Melhorias

- **[client]** Usar modelos de campo independentes para campos de associação em formulários de filtro ([#8511](https://github.com/nocobase/nocobase/pull/8511)) por @zhangzhonghe

- **[Workflow: CC]** Refatorar plugin de workflow CC para suportar arquitetura FlowModel com compatibilidade v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[flow-engine]**
  - Corrigir um problema onde objetos Blob não podiam ser criados no bloco JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) por @gchust

  - Corrigir contexto de execução incorreto para "ctx.sql" em Modelos JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) por @gchust

- **[Componente de campo: máscara]** Corrigir um problema onde o popup de configurações do campo de máscara não carregava corretamente todas as funções de usuário. por @gchust

- **[Workflow: Aprovação]** Corrigir id incorreto para carregar registro de detalhes por @mytharcher
