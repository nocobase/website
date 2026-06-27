---
title: "NocoBase v1.9.15: Corrección de errores"
description: "Nota de la versión v1.9.15"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Evitar error al abrir la configuración de valores predeterminados ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher

  - Resolver error al añadir registros secundarios en el bloque de tabla de árbol de asociación ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh

- **[Departamentos]** Corregido el problema por el cual los campos asociados al departamento no podían editarse ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang

- **[Colección: Árbol]** Corregidas las fallas de actualización de la tabla de rutas causadas por una búsqueda incorrecta del campo padre del árbol ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile

- **[Campo de colección: Muchos a muchos (matriz)]** Corregido el problema por el cual el campo de matriz m2m en la subtabla no podía actualizarse ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock

- **[Flujo de trabajo: Aprobación]**
  - Corregida la ausencia de datos del solicitante en el contexto de ejecución después de que el usuario reenviara la solicitud por @mytharcher

  - Corregido el problema por el cual el comentario en el resultado del trabajo es nulo después de que el usuario envía la aprobación con comentario por @mytharcher
