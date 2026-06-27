---
title: "NocoBase v2.0.21: Añadir lista de ejecuciones de filtros"
description: "Nota de la versión v2.0.21"
---

### 🚀 Mejoras

- **[Workflow]** Añadir lista de ejecuciones de filtros ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher

- **[Workflow: Aprobación]** Evitar configurar la interfaz de aprobadores cuando no hay colección configurada en el disparador por @mytharcher

### 🐛 Corrección de errores

- **[resourcer]** Evitar que el array del parámetro `filterByTk` se convierta automáticamente en un objeto cuando supera los 100 elementos ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile

- **[cliente]** Corregir el problema por el cual los no administradores no pueden limpiar los valores de campos asociados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx

- **[Acción: Importar registros Pro]**
  - Corregir el problema de error al importar en modo síncrono por @mytharcher

  - Corregir el problema por el cual más de ~30 columnas causaban un error de importación debido a que el flujo se había leído duplicadamente por @mytharcher

- **[Workflow: Aprobación]** Corregir problema de concurrencia al añadir un asignado por @mytharcher
