---
title: "NocoBase v1.3.55: Use ícones com significados mais precisos para inicializadores de blocos"
description: "Nota de lançamento da v1.3.55"
---

### 🚀 Melhorias

- **[client]** Usar ícones com significados mais precisos para inicializadores de blocos ([#5757](https://github.com/nocobase/nocobase/pull/5757)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir casos de E2E com base nos ícones alterados ([#5768](https://github.com/nocobase/nocobase/pull/5768)) por @mytharcher

  - Corrigir campo de seleção para exibir em branco quando os dados estão vazios ([#5762](https://github.com/nocobase/nocobase/pull/5762)) por @katherinehhh

- **[database]** Corrigir atualização de valores de associação hasOne/belongsTo sem chave estrangeira ([#5754](https://github.com/nocobase/nocobase/pull/5754)) por @chareice

- **[Gerenciador de fonte de dados]** Corrigir exibição incorreta da chave de origem ([#5771](https://github.com/nocobase/nocobase/pull/5771)) por @katherinehhh

- **[Workflow: Evento de ação personalizada]**
  - Permitir que todos os papéis acionem o evento de ação personalizada em fontes de dados externas por @mytharcher

  - Corrigir fonte de dados padrão como principal por @mytharcher

  - Corrigir erro de fonte de dados quando não houver correspondência por @mytharcher

  - Corrigir gatilho de ação personalizada não acionando em associação por @mytharcher
