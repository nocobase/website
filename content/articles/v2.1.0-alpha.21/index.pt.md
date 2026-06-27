---
title: "NocoBase v2.1.0-alpha.21: O fluxo de trabalho adicionou instrução de funcionário de IA"
description: "Nota de lançamento da v2.1.0-alpha.21"
---

### 🎉 Novas Funcionalidades

- **[Bloco: Kanban]** kanban block v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) por @jiannx

- **[Funcionários de IA]** O workflow adicionou instrução para funcionário de IA ([#9025](https://github.com/nocobase/nocobase/pull/9025)) por @cgyrock

- **[Auth: OIDC]** Atributo de mapeamento suporta campos personalizados por @chenzhizdt

- **[DingTalk]** DingTalk: notificações, login automático no DingTalk e sincronização de usuários. por @chenzhizdt

### 🚀 Melhorias

- **[build]** A base de conhecimento suporta upload em lote de arquivos via ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) por @cgyrock

- **[ai]** Funcionário de IA e base de conhecimento agora suportam tipos de arquivo adicionais para upload (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) por @cgyrock

- **[Workflow]** Melhora o desempenho da lista de execução ([#9214](https://github.com/nocobase/nocobase/pull/9214)) por @mytharcher

- **[Workflow: Evento de ação personalizada]** Adiciona controle ACL para acionamento no modo de registro (único e múltiplo) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) por @mytharcher

- **[IA: Base de conhecimento]** A base de conhecimento suporta upload em lote de arquivos via ZIP por @cgyrock

### 🐛 Correções de Bugs

- **[data-source-manager]**
  - Corrigida sincronização de campo anulável ([#9189](https://github.com/nocobase/nocobase/pull/9189)) por @2013xile

  - Correção para campos de porcentagem serem redefinidos para numérico ao ressincronizar fontes de dados externas ([#9178](https://github.com/nocobase/nocobase/pull/9178)) por @jiannx

- **[client]**
  - Corrigido o uso do identificador de registro incorreto por blocos de relação em popup e variáveis de registro em popup quando as coleções usam uma chave única não primária ([#9191](https://github.com/nocobase/nocobase/pull/9191)) por @2013xile

  - Corrigido o problema em que o valor padrão não entrava em vigor após criar um registro. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) por @gchust

  - Corrigido o problema em que o botão "Adicionar aba" estava muito próximo da borda direita ([#9177](https://github.com/nocobase/nocobase/pull/9177)) por @zhangzhonghe

- **[Workflow: Nó de agregação]** Corrigido o problema em que o nó de agregação não podia ser salvo devido a uma regra de validação incorreta ([#9208](https://github.com/nocobase/nocobase/pull/9208)) por @mytharcher

- **[Calendário]** Não registrar ações do calendário em outros blocos ([#9200](https://github.com/nocobase/nocobase/pull/9200)) por @jiannx

- **[Funcionários de IA]**
  - Corrigido problema em que funcionários de IA não conseguiam preencher valores de campos de relação em formulários. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) por @cgyrock

  - Corrigidas anomalias no registro de log na instrução do funcionário de IA ([#9180](https://github.com/nocobase/nocobase/pull/9180)) por @cgyrock

- **[Departamentos]** Corrigido um problema em que a sincronização repetida de departamentos não atualizava a ordem de classificação dos departamentos ([#9173](https://github.com/nocobase/nocobase/pull/9173)) por @2013xile

- **[Workflow: JavaScript]**
  - Corrigido problema de segurança de script executando no modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher

  - Corrigido o problema em que um erro era lançado ao configurar o nó JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) por @mytharcher

- **[Multi-espaço]** Corrigido o erro de não encontrar coleção na verificação de permissão do espaço por @jiannx

- **[IA: Base de conhecimento]** Corrigido problema em que o banco de dados vetorial não era sincronizado ao excluir documentos da base de conhecimento. por @cgyrock

- **[Workflow: Aprovação]** Corrigida a pesquisa de reatribuição de aprovação para consultar usuários além dos primeiros 200 candidatos por @zhangzhonghe

- **[WeCom]** Corrigida a ordem de departamento ausente ao sincronizar departamentos do WeCom por @2013xile
