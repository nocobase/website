---
title: "NocoBase v1.9.37: Actualización de la versión de math.js para admitir más funciones"
description: "Nota de la versión v1.9.37"
---

### 🚀 Mejoras

- **[evaluadores]** Se actualizó la versión de math.js para admitir más funciones ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher

- **[Notificación: Mensaje en la aplicación]** Se corrigió un problema de rendimiento al enviar mensajes en la aplicación a un gran número de usuarios ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió que los datos de selección en cascada no se limpien después de un envío exitoso en el formulario de creación ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh

  - Se añadió tolerancia a fallos en el esquema de acciones para evitar que la página se bloquee al hacer clic en un botón de acción ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher

  - Se corrigió un problema con el botón de envío donde la validación obligatoria omitida no funciona cuando la confirmación está habilitada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh

- **[Campo de colección: Muchos a muchos (array)]** Se corrigió un error al añadir relaciones muchos a muchos (array) de segundo nivel en consultas de asociación ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock

- **[Flujo de trabajo]** Se corrigió el problema por el cual el ID del esquema no se actualiza en un nodo duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher
