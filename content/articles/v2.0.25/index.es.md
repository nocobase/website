---
title: "NocoBase v2.0.25: Corrección del problema de rendimiento causado por el campo JSON al cargar la lista de registros de aprobación"
description: "Nota de la versión v2.0.25"
---

### 🚀 Mejoras

- **[Flujo de trabajo: Aprobación]** Se corrigió un problema de rendimiento causado por el campo JSON al cargar la lista de registros de aprobación por @mytharcher

### 🐛 Corrección de errores

- **[servidor]** Se cambió el momento de cierre de Pub-Sub a `beforeStop` para evitar que se envíen o procesen mensajes después de cerrar la base de datos ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher

- **[Localización]** Se evitó la solicitud localizationTexts:missing cuando se deniega el permiso ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos

- **[Fuente de datos: Oracle externo]** Se corrigió un error que ocurría al cargar la fuente de datos externa de Oracle por @2013xile
