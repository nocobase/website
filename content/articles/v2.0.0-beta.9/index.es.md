---
title: "NocoBase v2.0.0-beta.9: Mejora del rendimiento de renderizado de la lista del administrador de plugins cambiando a CSS nativo de webkit para elipsis de texto"
description: "Nota de la versión v2.0.0-beta.9"
---

### 🚀 Mejoras

- **[cliente]** Mejora el rendimiento de renderizado de la lista del gestor de plugins cambiando a CSS nativo de webkit para el truncamiento de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher

### 🐛 Corrección de errores

- **[Gestor de archivos]** Corrige el problema por el cual la URL del archivo se generaba incorrectamente para archivos subidos al almacenamiento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher

- **[Flujo de trabajo]** Corrige el problema por el cual el ID del esquema no se actualizaba en un nodo duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher

- **[Almacenamiento de archivos: S3 (Pro)]** Corrige el problema por el cual el modo de cambio de nombre de archivos no funcionaba por @mytharcher

- **[Impresión de plantillas]** Corrige el problema de la ventana emergente de configuración de plantilla oculta por @zhangzhonghe

- **[Flujo de trabajo: Aprobación]** Corrige el problema por el cual el bloque de valor no se mostraba debido a la falta del componente `ValueBlock.Result` por @mytharcher
