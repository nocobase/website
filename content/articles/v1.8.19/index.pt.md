---
title: "NocoBase v1.8.19: Adicionar tipo de template inline para configuração de notificação"
description: "Nota de lançamento da v1.8.19"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Aprovação]** Adicionar tipo de template inline para configuração de notificação por @mytharcher

### 🚀 Melhorias

- **[client]** Suporte para exibir ícones identificados por strings no componente Select quando em modo somente leitura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher
- **[database]** Desempenho de consulta ACL Meta otimizado ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie
- **[Mobile]** Otimizar o componente popup mobile ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[database]** Corrigido problema onde a leitura de tabelas externas do Postgres incluía visualizações de outros schemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie
- **[Bloco: template]** Resolvido um problema onde blocos de e-mail não eram visíveis quando colocados dentro de um bloco de template herdado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust
- **[Ação: Importar registros Pro]** Desabilitar a atribuição de campos de relação durante a detecção de duplicatas na importação. por @aaaaaajie
- **[Workflow: Aprovação]** Corrigido o problema onde a lista de usuários estava vazia durante a co-assinatura por @mytharcher
- **[Gerenciador de migração]** Pular os comandos `\restrict` e `\unrestrict` gerados pelo pg_dump mais recente ao criar arquivos de migração para resolver erros de restauração. por @2013xile
