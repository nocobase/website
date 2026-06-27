---
title: "NocoBase v1.9.36: Mejora del rendimiento de renderizado de la lista del administrador de plugins cambiando a CSS nativo de WebKit para elipsis de texto"
description: "Nota de la versión v1.9.36"
---

### 🚀 Mejoras

- **[cliente]** Mejorar el rendimiento de renderizado de la lista del administrador de plugins cambiando a CSS nativo de webkit para el truncamiento de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher

### 🐛 Corrección de errores

- **[Gestor de archivos]** Corregir el problema donde la URL del archivo se generaba incorrectamente para archivos subidos al almacenamiento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]** Corregir el problema donde el modo de renombrado de archivos no funcionaba por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corregir el problema donde el bloque de valor no se mostraba debido a la falta del componente `ValueBlock.Result` por @mytharcher
