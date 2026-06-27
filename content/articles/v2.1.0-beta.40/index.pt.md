---
title: "NocoBase v2.1.0-beta.40: Suporte à atribuição de valores de campo em ações de envio de formulário"
description: "Nota de lançamento da v2.1.0-beta.40"
---

### 🎉 Novas Funcionalidades

- **[client-v2]** Suporte para atribuição de valores de campo em ações de envio de formulário ([#9570](https://github.com/nocobase/nocobase/pull/9570)) por @katherinehhh
- **[Visualizador de Arquivos do Office]** Migração do plugin de visualização de arquivos do Office para o cliente v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) por @Molunerfinn

### 🚀 Melhorias

- **[Gerenciador de notificações]** Migração dos plugins relacionados a notificações para a v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) por @Molunerfinn

### 🐛 Correções de Bugs

- **[client]** Corrigida a largura do selo na barra de navegação superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
- **[Bloco: Gantt]** Corrigido o caminho da pasta compartilhada do gantt v2 e adicionado listrado zebrado. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) por @jiannx
- **[Configurações de licença]** Adicionado suporte client-v2 para configurações de licença e injeção de licença comercial. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) por @jiannx
- **[Workflow: Evento de ação personalizada]** Corrigida duplicação de opções de Trigger workflow em menus de ação de bloco v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) por @zhangzhonghe
- **[Funcionários de IA]** Corrigido o problema em que os botões de atalho de IA obtinham um contexto de bloco vazio após a remoção de blocos de tabela referenciados. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
- **[plugin-commercial]** Adicionados componentes de licença comercial client-v2 e entrada de status de licença na barra superior. por @jiannx
- **[Gerenciador de migração]** Corrigidas as diferenças de migração do PostgreSQL para que colunas filhas herdadas não sejam removidas quando uma coluna local se torna herdada. por @hongboji
