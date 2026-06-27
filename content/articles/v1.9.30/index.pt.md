---
title: "NocoBase v1.9.30: Melhoria na descrição do campo `changed` no evento de coleção"
description: "Nota de lançamento da v1.9.30"
---

### 🚀 Melhorias

- **[Workflow]** Melhora a descrição do campo `changed` no evento de coleção ([#8216](https://github.com/nocobase/nocobase/pull/8216)) por @mytharcher

### 🐛 Correções de Bugs

- **[cli]** license-kit é compatível com o caso em que DB_PASSWORD está vazio ([#8220](https://github.com/nocobase/nocobase/pull/8220)) por @jiannx

- **[database]** Corrige inconsistência na consulta de campo de data entre fontes de dados principal e externas ([#8181](https://github.com/nocobase/nocobase/pull/8181)) por @cgyrock

- **[Configurações de licença]** Corrige a exibição anormal do plugin licenciado ([#8214](https://github.com/nocobase/nocobase/pull/8214)) por @jiannx

- **[Workflow: Aprovação]**
  - Corrige o problema em que aprovar fazia associação para criar um novo registro por @mytharcher

  - Corrige o problema em que aprovar fazia associação muitos-para-muitos para criar novos registros por @mytharcher
