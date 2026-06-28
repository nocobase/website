---
title: "NocoBase v1.6.31: Adicionadas todas as chaves de localidade en-US faltantes"
description: "Notas de lançamento da v1.6.31"
---

### 🚀 Melhorias

- **[Workflow]** Adicionadas todas as chaves de localidade en-US faltantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher

### 🐛 Correções de Bugs

- **[database]** trata células com string vazia durante a importação de campos para evitar erros ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie

- **[client]**
  - a tabela de seleção de registros de associação não filtrava os registros já associados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh

  - dados de associação não eram enviados ao expor campos de associação no subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh

  - campos de ordenação arrastáveis não exibiam as opções disponíveis corretamente ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh

- **[Workflow]** Corrige o funcionamento incorreto do limite de pilha para eventos de coleção ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher

- **[Bloco: Painel de Ações]** Lê o nome base da rota a partir do scanner para adaptar-se ao ambiente desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66

- **[Workflow: Nó Manual]** Corrige erro de renderização ao exibir item não processado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher

- **[Workflow: Aprovação]** Corrige o escopo dos responsáveis pela delegação e adiciona a outros responsáveis por @mytharcher


