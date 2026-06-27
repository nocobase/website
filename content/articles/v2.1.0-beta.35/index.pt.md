---
title: "NocoBase v2.1.0-beta.35: Compartilhar avaliação de condições entre aplicativos v1 e v2"
description: "Nota de lançamento da v2.1.0-beta.35"
---

### 🚀 Melhorias

- **[client]** Compartilhar avaliação de condições entre aplicativos v1 e v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) por @zhangzhonghe

- **[Localização]** Melhorias nas tarefas de tradução da localização Lina com escopo de tradução, configurações de idioma de referência e edição rápida ([#9521](https://github.com/nocobase/nocobase/pull/9521)) por @2013xile

- **[Workflow: Aprovação]** Melhorar aprovações relacionadas com cartões de linha do tempo por @zhangzhonghe

### 🐛 Correções de Bugs

- **[undefined]** Alinhar caminhos de configuração do nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) por @chenos

- **[cli-v1]** Corrigida a inicialização do desenvolvimento do create-nocobase-app reutilizando shells de aplicativos empacotados enquanto permite o desenvolvimento local de plugins. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) por @Molunerfinn

- **[client]**
  - Corrigido o problema em que um badge de menu ainda exibia um ponto quando seu valor era 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe

  - Corrigido o problema em que formulários de filtro não podiam usar variáveis do formulário atual ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe

- **[Autenticação]** Impedir que o servidor trave quando um token de autenticação WebSocket referencia um autenticador cujo plugin de tipo de autenticação foi descarregado ou está ausente. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) por @Molunerfinn

- **[Calendário]**
  - Corrigido o problema em que mais itens do calendário não podiam ser exibidos completamente ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe

  - Corrigido o estilo do cursor para itens de evento na sobreposição de mais eventos do calendário ([#9519](https://github.com/nocobase/nocobase/pull/9519)) por @jiannx

- **[Configurações de licença]** Resolver dependências empacotadas com link simbólico ([#9518](https://github.com/nocobase/nocobase/pull/9518)) por @chenos
