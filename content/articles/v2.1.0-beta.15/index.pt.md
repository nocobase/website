---
title: "NocoBase v2.1.0-beta.15: suporte a atributos de mapeamento para campos personalizados"
description: "Nota de lançamento da v2.1.0-beta.15"
---

### 🎉 Novas Funcionalidades

- **[Bloco: Kanban]** kanban block v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) por @jiannx

- **[Auth: OIDC]** atributo de mapeamento suporta campos personalizados por @chenzhizdt

- **[DingTalk]** DingTalk: notificações, login automático no DingTalk e sincronização de usuários. por @chenzhizdt

### 🚀 Melhorias

- **[build]** Base de conhecimento suporta upload em lote de arquivos via ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) por @cgyrock

- **[ai]** Funcionário de IA e base de conhecimento agora suportam tipos de arquivo adicionais para upload (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) por @cgyrock

- **[Workflow]** Melhora o desempenho da lista de execução ([#9214](https://github.com/nocobase/nocobase/pull/9214)) por @mytharcher

- **[IA: Base de conhecimento]** Base de conhecimento suporta upload em lote de arquivos via ZIP por @cgyrock

- **[Workflow: Aprovação]** Adiciona índices nas colunas de registros de aprovação para melhorar o desempenho nas ações de listagem e envio por @mytharcher

### 🐛 Correções de Bugs

- **[database]** Corrigido um problema onde campos decimais com validação podiam rejeitar entrada numérica válida ([#9204](https://github.com/nocobase/nocobase/pull/9204)) por @2013xile

- **[client]**
  - Corrige o problema do botão Adicionar aba estar muito próximo da borda direita ([#9177](https://github.com/nocobase/nocobase/pull/9177)) por @zhangzhonghe

  - Corrigido o uso do identificador de registro incorreto em blocos de relação popup e variáveis de registro popup quando as coleções usam uma chave única não primária ([#9191](https://github.com/nocobase/nocobase/pull/9191)) por @2013xile

  - Corrigido o problema onde o valor padrão não entrava em vigor após criar um registro. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) por @gchust

- **[gerenciador-de-fonte-de-dados]**
  - Corrigida a sincronização de campos anuláveis ([#9189](https://github.com/nocobase/nocobase/pull/9189)) por @2013xile

  - Correção para campos de porcentagem serem redefinidos para numérico ao ressincronizar fontes de dados externas ([#9178](https://github.com/nocobase/nocobase/pull/9178)) por @jiannx

- **[Funcionários de IA]**
  - Corrige o problema de valores ausentes do campo URL para anexos em seleções de formulário do funcionário de IA. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) por @cgyrock

  - Corrige problema onde funcionários de IA não conseguem preencher valores de campos de relação em formulários. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) por @cgyrock

- **[Usuários]** Corrigido o carregamento dos dados de usuário mais recentes em campos configurados dinamicamente em Editar perfil ([#9205](https://github.com/nocobase/nocobase/pull/9205)) por @2013xile

- **[Calendário]** não registra ações de calendário em outros blocos ([#9200](https://github.com/nocobase/nocobase/pull/9200)) por @jiannx

- **[Departamentos]** Corrigido um problema onde a sincronização repetida de departamentos não atualizava a ordem de classificação do departamento ([#9173](https://github.com/nocobase/nocobase/pull/9173)) por @2013xile

- **[Workflow: JavaScript]** Corrige problema de segurança de script executando no modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher

- **[Gerenciador de fonte de dados]** Corrigido um problema onde a classificação agrupada em campos de classificação de fonte de dados externa não podia ser limpa ([#9203](https://github.com/nocobase/nocobase/pull/9203)) por @2013xile

- **[Multi-espaço]** Corrigido o erro de não encontrar coleção na verificação de permissão de espaço por @jiannx

- **[IA: Base de conhecimento]** Corrige problema onde o banco de dados vetorial não é sincronizado ao excluir documentos da base de conhecimento. por @cgyrock

- **[Workflow: Aprovação]** Corrige a pesquisa de reatribuição de aprovação para consultar usuários além dos primeiros 200 candidatos por @zhangzhonghe

- **[WeCom]** Corrigida a ordem de departamento ausente ao sincronizar departamentos do WeCom por @2013xile
