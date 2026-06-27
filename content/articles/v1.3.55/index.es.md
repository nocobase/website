---
title: "NocoBase v1.3.55: Usar iconos con significados más precisos para los inicializadores de bloques"
description: "Nota de la versión v1.3.55"
---

### 🚀 Mejoras

- **[cliente]** Usar iconos con significados más precisos para los inicializadores de bloques ([#5757](https://github.com/nocobase/nocobase/pull/5757)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Corregir casos E2E basados en iconos modificados ([#5768](https://github.com/nocobase/nocobase/pull/5768)) por @mytharcher

  - Corregir campo de selección para que muestre vacío cuando no hay datos ([#5762](https://github.com/nocobase/nocobase/pull/5762)) por @katherinehhh

- **[base de datos]** Corregir actualización de valores de asociación hasOne/belongsTo sin clave foránea ([#5754](https://github.com/nocobase/nocobase/pull/5754)) por @chareice

- **[Gestor de fuentes de datos]** Corregir visualización incorrecta de la clave de origen ([#5771](https://github.com/nocobase/nocobase/pull/5771)) por @katherinehhh

- **[Flujo de trabajo: evento de acción personalizada]**
  - Permitir que todos los roles activen el evento de acción personalizada en fuentes de datos externas por @mytharcher

  - Corregir fuente de datos predeterminada como principal por @mytharcher

  - Corregir error de fuente de datos cuando no coincide por @mytharcher

  - Corregir que el disparador de acción personalizada no se active en asociaciones por @mytharcher
