---
title: "NocoBase v2.0.12: Añadir bloqueo para copia de seguridad programada entre nodos del clúster"
description: "Nota de la versión v2.0.12"
---

### 🚀 Mejoras

- **[Adaptador de bloqueo Redis]** Refactorización debido al cambio de API de LockManager en el repositorio principal por @mytharcher

- **[Gestor de copias de seguridad]** Añadido bloqueo para copias de seguridad programadas entre nodos del clúster por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Los bloques V2 ahora solo muestran las acciones compatibles con la fuente de datos actual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe

  - Corregido el problema de estilo del botón de retroceso en subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe

- **[gestor de bloqueos]** Corregido el problema de condición de carrera del gestor de bloqueos ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher

- **[servidor]** Corregido el error en consultas de datos de fuentes de datos no relacionales ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock

- **[Control de acceso]** Corregido el error de modificación de datos en fuentes de datos de API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock

- **[Acción: Exportar registros]** Corregido el problema de que el campo belongsToArray aparece en blanco en el Excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock
