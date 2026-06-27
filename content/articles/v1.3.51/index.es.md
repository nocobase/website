---
title: "NocoBase v1.3.51: Corrección de errores"
description: "Nota de la versión v1.3.51"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige la verificación de permisos de campo que no se veía afectada por el contexto del campo de asociación ([#5672](https://github.com/nocobase/nocobase/pull/5672)) por @katherinehhh

  - Se corrige que la regla de enlace guarde cambios de valor vacío como valor vacío estático ([#5667](https://github.com/nocobase/nocobase/pull/5667)) por @katherinehhh

- **[Campo de colección: Muchos a muchos (array)]** Se corrige el error al recuperar registros en una colección de asociación con campos muchos a muchos (array) ([#5661](https://github.com/nocobase/nocobase/pull/5661)) por @2013xile

- **[Bloque: Gantt]** Se corrige que la plantilla del bloque Gantt llame incorrectamente al bloque de calendario al añadir ([#5673](https://github.com/nocobase/nocobase/pull/5673)) por @katherinehhh

- **[Visualización de datos]** Se corrige el problema por el cual las transformaciones de datos no funcionan en la información sobre herramientas en gráficos de doble eje ([#5649](https://github.com/nocobase/nocobase/pull/5649)) por @2013xile
