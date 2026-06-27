---
title: "NocoBase v1.8.0-beta.4: Optimización de problemas de rendimiento al procesar archivos XLSX grandes"
description: "Nota de la versión v1.8.0-beta.4"
---

### 🚀 Mejoras

- **[Acción: Edición por lotes]** Se usa `filterByTk` en lugar de `filter` en el modo seleccionado ([#6994](https://github.com/nocobase/nocobase/pull/6994)) por @mytharcher

- **[Acción: Importar registros Pro]** Se optimiza el rendimiento al procesar archivos XLSX grandes (conjuntos de datos de muchas filas/columnas), evitando bloqueos o congelamientos del sistema. por @aaaaaajie

### 🐛 Corrección de errores

- **[cliente]**
  - Falta el título del campo en el componente assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) por @katherinehhh

  - El último elemento del menú no se puede seleccionar en la lista de movimiento del menú ([#6997](https://github.com/nocobase/nocobase/pull/6997)) por @zhangzhonghe

- **[Flujo de trabajo]**
  - Se corrige que el filtro no se actualiza al cambiar entre pestañas de categorías ([#6989](https://github.com/nocobase/nocobase/pull/6989)) por @mytharcher

  - Se corrige que las estadísticas del flujo de trabajo no se crean automáticamente ([#6993](https://github.com/nocobase/nocobase/pull/6993)) por @mytharcher
