---
title: "NocoBase v1.6.16: Corrección de errores"
description: "Nota de la versión v1.6.16"
---

### 🐛 Corrección de errores

- **[cliente]**
  - La propiedad x-disabled no surtía efecto en los campos de formulario ([#6610](https://github.com/nocobase/nocobase/pull/6610)) por @katherinehhh

  - Problema de visualización de etiquetas de campo para evitar el truncamiento por dos puntos ([#6599](https://github.com/nocobase/nocobase/pull/6599)) por @katherinehhh

- **[base de datos]** Al eliminar registros uno a muchos, se pasan tanto `filter` como `filterByTk` y `filter` incluye un campo de asociación, se ignora `filterByTk` ([#6606](https://github.com/nocobase/nocobase/pull/6606)) por @2013xile
