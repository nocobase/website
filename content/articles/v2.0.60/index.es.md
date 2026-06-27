---
title: "NocoBase v2.0.60: Mejora del campo URL base de LLM para que pueda usar variables de ámbito global en formularios de creación y edición"
description: "Nota de la versión v2.0.60"
---

### 🚀 Mejoras

- **[Empleados de IA]** Se mejoró el campo URL base de LLM para que pueda usar variables de ámbito global en los formularios de creación y edición. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock

### 🐛 Corrección de errores

- **[Cliente]** Se corrigió el ancho de la insignia en la barra de navegación superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
- **[Empleados de IA]** Se corrigió que los botones de acceso directo de IA obtuvieran un contexto de bloque vacío después de eliminar los bloques de tabla referenciados. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
- **[Gestor de migraciones]** Se corrigieron las diferencias de migración de PostgreSQL para que las columnas heredadas secundarias no se eliminen cuando una columna local se vuelve heredada. por @hongboji
