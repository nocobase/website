---
title: "NocoBase v2.0.41: atributo de mapeamento suporta campos personalizados"
description: "Nota de lançamento da v2.0.41"
---

### 🎉 Novas Funcionalidades

- **[Auth: OIDC]** Atributo de mapeamento agora suporta campos personalizados por @chenzhizdt

- **[DingTalk]** DingTalk: notificações, login automático no DingTalk e sincronização de usuários. por @chenzhizdt

### 🚀 Melhorias

- **[ai]** O funcionário de IA e a base de conhecimento agora suportam tipos de arquivo adicionais para upload (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) por @cgyrock

- **[undefined]** Adicionada tradução em árabe para a seção de guia e navegação ([#9141](https://github.com/nocobase/nocobase/pull/9141)) por @saraTabbane

### 🐛 Correções de Bugs

- **[data-source-manager]** Correção para campos de porcentagem serem redefinidos para numérico ao ressincronizar fontes de dados externas ([#9178](https://github.com/nocobase/nocobase/pull/9178)) por @jiannx

- **[client]**
  - Corrigido o problema em que o valor padrão não entrava em vigor após criar um registro. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) por @gchust

  - Corrigido o problema em que o botão Adicionar aba estava muito próximo da borda direita ([#9177](https://github.com/nocobase/nocobase/pull/9177)) por @zhangzhonghe

- **[Departamentos]** Corrigido um problema em que a sincronização repetida de departamentos não atualizava a ordem de classificação dos departamentos ([#9173](https://github.com/nocobase/nocobase/pull/9173)) por @2013xile

- **[Fonte de dados: Principal]** Corrigida a sincronização de campos do banco de dados para visualizações conectadas quando o nome da coleção difere do nome da visualização do banco de dados ([#9155](https://github.com/nocobase/nocobase/pull/9155)) por @2013xile

- **[Workflow: JavaScript]** Corrigido problema de segurança da execução de script no modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher

- **[IA: Base de conhecimento]** Corrigido problema em que o banco de dados vetorial não era sincronizado ao excluir documentos da base de conhecimento. por @cgyrock

- **[WeCom]** Corrigida a ordem de departamento ausente ao sincronizar departamentos do WeCom por @2013xile
