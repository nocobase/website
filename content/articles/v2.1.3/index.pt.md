---
title: "NocoBase v2.1.3: Normalizar versões de build compatíveis do aplicativo"
description: "Nota de lançamento da v2.1.3"
---

### 🚀 Melhorias

- **[cli]**
  - Normalizar versões de build de compatibilidade de aplicativos ([#9763](https://github.com/nocobase/nocobase/pull/9763)) por @chenos
  - Suporte para atualizar habilidades para uma versão específica ([#9760](https://github.com/nocobase/nocobase/pull/9760)) por @chenos

### 🐛 Correções de Bugs

- **[client]** Corrigido o problema em que os campos em subformulários horizontais eram muito estreitos para exibir dados ([#9755](https://github.com/nocobase/nocobase/pull/9755)) por @zhangzhonghe
- **[Gerenciador de fonte de dados]**

  - Corrigida a gaveta de edição de campo em branco causada por re-renderizações repetidas na página Configurar campos da fonte de dados externa v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) por @katherinehhh
  - Corrigido um problema em que excluir a categoria de coleção ativa no gerenciador de fonte de dados v1 poderia deixar a aba Todas as coleções vazia. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) por @katherinehhh
- **[Gerenciador de tarefas assíncronas]** Corrigidos IDs de requisição incorretos nos logs do worker de tarefas assíncronas ([#9686](https://github.com/nocobase/nocobase/pull/9686)) por @2013xile
- **[Workflow: nó SQL]** Corrigida a migração de variáveis de template legadas do workflow SQL que estava sendo ignorada para alguns usuários de versão beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) por @mytharcher
- **[Funcionários de IA]**

  - Corrigida a perda de configuração de mensagens em nós LLM do workflow. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) por @cgyrock
  - Corrigido um problema em que anexos colados no diálogo do funcionário de IA não podiam ser removidos. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) por @cgyrock
- **[Bloco: Kanban]** Corrigido o suporte a URL para calendário e popups relacionados. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) por @jiannx
- **[Workflow: Aprovação]** Corrigido o problema em que dados relacionados não eram exibidos em formulários de aprovação v2 por @zhangzhonghe
