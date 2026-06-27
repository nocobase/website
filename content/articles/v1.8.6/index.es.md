---
title: "NocoBase v1.8.6: Corrección de errores"
description: "Nota de la versión v1.8.6"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Corregido error: No se puede resolver 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe

  - Problema de visualización para campos de asociación en reglas de vinculación ([#7220](https://github.com/nocobase/nocobase/pull/7220)) por @katherinehhh

- **[base de datos]** Corregido error al habilitar paginación simple para tablas de fuentes de datos externas ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie

- **[Campo de colección: Ordenar]** falta la selección del campo de orden al duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh

- **[Flujo de trabajo: Aprobación]**
  - Añadida tolerancia a fallos para aprobaciones eliminadas en la lista de registros por @mytharcher

  - Corregidos múltiples niveles de asociaciones al enviar una aprobación por @mytharcher

  - Corregida excepción al eliminar un registro por @mytharcher
