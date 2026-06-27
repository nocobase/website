---
title: "NocoBase v1.3.51: Correções de Bugs"
description: "Nota de Lançamento da v1.3.51"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige verificação de permissão de campo não afetada pelo contexto de campo de associação ([#5672](https://github.com/nocobase/nocobase/pull/5672)) por @katherinehhh

  - Corrige regra de vinculação que salvava alterações de valor vazio como valor vazio estático ([#5667](https://github.com/nocobase/nocobase/pull/5667)) por @katherinehhh

- **[Campo de coleção: Muitos para muitos (array)]** Corrige o problema em que recuperar registros em uma coleção de associação com campos muitos para muitos (array) causa um erro ([#5661](https://github.com/nocobase/nocobase/pull/5661)) por @2013xile

- **[Bloco: Gantt]** Corrige o modelo do bloco Gantt que chamava incorretamente o bloco de calendário ao adicionar ([#5673](https://github.com/nocobase/nocobase/pull/5673)) por @katherinehhh

- **[Visualização de dados]** Corrige o problema em que transformações de dados não funcionam no tooltip em gráficos de eixos duplos ([#5649](https://github.com/nocobase/nocobase/pull/5649)) por @2013xile
