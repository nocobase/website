---
title: "NocoBase v1.9.11: Corrección de errores"
description: "Nota de la versión v1.9.11"
---

### 🐛 Corrección de errores

- **[cliente]** Se corrige la interfaz de campo que mostraba muchos a uno en lugar de uno a uno para belongsTo en la configuración de fuentes de datos externas ([#7936](https://github.com/nocobase/nocobase/pull/7936)) por @cgyrock

- **[Flujo de trabajo]** Se soluciona el problema donde actualizar el conteo de tareas reiniciaba involuntariamente el estado de los formularios que se estaban completando ([#7937](https://github.com/nocobase/nocobase/pull/7937)) por @mytharcher

- **[Campo de colección: Muchos a muchos (array)]** Se corrigen problemas del campo M2M (array) al crear/actualizar datos relacionados ([#7926](https://github.com/nocobase/nocobase/pull/7926)) por @cgyrock
