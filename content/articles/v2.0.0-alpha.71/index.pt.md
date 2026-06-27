---
title: "NocoBase v2.0.0-alpha.71: suporte a altura configurável de blocos"
description: "Nota de lançamento da v2.0.0-alpha.71"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Suporte para configurar títulos de abas do navegador para páginas, abas de página, popups e abas de popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) por @zhangzhonghe

  - Suporte para configurar campos do campo de coleção de associação em bloco de formulário ([#8578](https://github.com/nocobase/nocobase/pull/8578)) por @katherinehhh

- **[Bloco: GridCard]** suporte para altura configurável do bloco ([#8583](https://github.com/nocobase/nocobase/pull/8583)) por @katherinehhh

- **[Ação: Duplicar registro]** adicionar ação de duplicação 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) por @katherinehhh

- **[Fluxo de Trabalho: Aprovação]** Adicionar controle ACL para APIs de aprovação por @mytharcher

### 🚀 Melhorias

- **[client]** Usar modelos de campo independentes para campos de associação em formulários de filtro ([#8511](https://github.com/nocobase/nocobase/pull/8511)) por @zhangzhonghe

- **[Fluxo de Trabalho: CC]** Refatorar plugin de fluxo de trabalho CC para suportar arquitetura FlowModel com compatibilidade v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[mecanismo de fluxo]**
  - Corrigir contexto de execução incorreto para "ctx.sql" em Modelos JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) por @gchust

  - Corrigir um problema onde objetos Blob não podiam ser criados em bloco JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) por @gchust

- **[client]**
  - Corrigir um problema onde as colunas da tabela não eram renderizadas novamente após clicar em Executar no editor de colunas JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) por @gchust

  - Corrigir um potencial erro de renderização "read hidden" no modo de não configuração. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) por @gchust

  - corrigir subtabela (edição inline) ainda exibindo colunas do modo de edição após alternar para visualização somente leitura no formulário de edição ([#8589](https://github.com/nocobase/nocobase/pull/8589)) por @katherinehhh

- **[Mecanismo de fluxo]** Corrigir um problema onde usar um modelo de bloco no modo "Duplicar" causava popup vazio ao clicar em algum botão de ação do bloco. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) por @gchust

- **[Componente de campo: máscara]** Corrigir um problema onde o popup de configurações do campo de máscara não carregava corretamente todos os papéis de usuário. por @gchust

- **[Fluxo de Trabalho: Aprovação]** Corrigir id incorreto para carregar registro de detalhes por @mytharcher
