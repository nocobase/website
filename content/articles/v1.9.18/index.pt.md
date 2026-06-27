---
title: "NocoBase v1.9.18: Correções de Bugs"
description: "Nota de Lançamento da v1.9.18"
---

### 🐛 Correções de Bugs

- **[Ação: Importar registros]** Os campos importados não correspondem aos campos definidos nas configurações de ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile

- **[Workflow]** Corrigido o problema em que a página de execução gerava erro quando os jobs no nó estavam indefinidos ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher

- **[Controle de acesso]** Adicionado middleware para verificação de permissões em operações de associação para fonte de dados externa ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile

- **[Workflow: Aprovação]**
  - Corrigido o problema de erro de permissão ao carregar aprovações relacionadas ao registro no drawer de detalhes por @mytharcher

  - Corrigido o problema em que os registros de aprovação não eram incluídos no resultado do job no branch de retorno por @mytharcher

  - Corrigido o problema em que o processo estava incorreto ao ramificar com ordem e contrarreferendo por @mytharcher
