---
title: "NocoBase v1.6.16: Correções de Bugs"
description: "Nota de Lançamento da v1.6.16"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Propriedade x-disabled não estava surtindo efeito nos campos de formulário ([#6610](https://github.com/nocobase/nocobase/pull/6610)) por @katherinehhh

  - Problema na exibição do rótulo do campo para evitar truncamento por dois-pontos ([#6599](https://github.com/nocobase/nocobase/pull/6599)) por @katherinehhh

- **[banco de dados]** Ao excluir registros um-para-muitos, quando tanto `filter` quanto `filterByTk` são passados e `filter` inclui um campo de associação, o `filterByTk` é ignorado ([#6606](https://github.com/nocobase/nocobase/pull/6606)) por @2013xile
