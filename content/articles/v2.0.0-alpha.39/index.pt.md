---
title: "NocoBase v2.0.0-alpha.39: Adaptação de Componentes para Dispositivos Móveis"
description: "Nota de Lançamento da v2.0.0-alpha.39"
---

### 🚀 Melhorias

- **[client]** Adaptar Componentes para Dispositivos Móveis ([#7870](https://github.com/nocobase/nocobase/pull/7870)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido o problema em que a configuração padrão do campo JS não utilizava a configuração do modo de exibição. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) por @gchust

  - Corrigido o problema em que modelos duplicados não aparecem, causado por arrastar e depois excluir um modelo referenciado ([#7847](https://github.com/nocobase/nocobase/pull/7847)) por @zhangzhonghe

  - Corrigido o problema de não ser possível definir o valor padrão do campo de data no modelo de bloco de formulário de filtro. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) por @gchust

  - Corrigido o problema em que a regra de vinculação para o formulário de aprovação não estava funcionando ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe

  - Corrigido o problema em que as operações de edição rápida no bloco de tabela não atualizavam os dados corretamente. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) por @gchust

  - Corrigido o problema em que o campo de texto rico não conseguia inserir valor padrão e o campo de seleção múltipla não conseguia selecionar várias opções como valor padrão. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) por @gchust

- **[Gerenciador de múltiplos aplicativos (obsoleto)]** Após a parada de um sub-aplicativo, publicar uma mensagem de sincronização para notificar outros nós a pararem o sub-aplicativo correspondente ([#7849](https://github.com/nocobase/nocobase/pull/7849)) por @2013xile

- **[Workflow: Aprovação]** Corrigido o problema em que a regra de vinculação para o formulário de aprovação não estava funcionando por @zhangzhonghe

- **[Gerenciador de e-mail]** Erro de atualização do ShadowHtml por @jiannx
