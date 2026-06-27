---
title: "NocoBase v2.0.0-beta.15: Añadir más tipos de archivo para previsualizar en Microsoft"
description: "Nota de la versión v2.0.0-beta.15"
---

### 🚀 Mejoras

- **[Visor de archivos de Office]** Se añaden más tipos de archivo para la vista previa en Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) por @mytharcher

### 🐛 Corrección de errores

- **[base de datos]** Se corrigen errores al filtrar con el operador `empty` después de recargar una colección ([#8496](https://github.com/nocobase/nocobase/pull/8496)) por @2013xile

- **[Impresión de plantillas]** Se corrige la lógica incorrecta de permisos del botón de impresión cuando los roles estaban unidos. por @jiannx

- **[Flujo de trabajo: Aprobación]** Se corrige el problema de error lanzado en la ventana emergente de registro de aprobación 1.x por @mytharcher

- **[Gestor de migraciones]** Se corrige un posible bloqueo del proceso causado por el registro de sentencias SQL excesivamente grandes incluidas en las excepciones de error de migración por @cgyrock
