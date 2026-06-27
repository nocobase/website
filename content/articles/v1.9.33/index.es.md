---
title: "NocoBase v1.9.33: Soporte para la configuración del método de cambio de nombre de archivos"
description: "Nota de la versión v1.9.33"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para componentes de mantenimiento definidos por plugins cuando la aplicación entra en estado de mantenimiento ([#8252](https://github.com/nocobase/nocobase/pull/8252)) por @cgyrock

- **[Gestor de archivos]** Soporte para configuración del método de renombrado de archivos ([#8231](https://github.com/nocobase/nocobase/pull/8231)) por @JAVA-LW

- **[Almacenamiento de archivos: S3(Pro)]** Añadida opción de modo de renombrado para almacenamiento S3 Pro por @mytharcher

### 🚀 Mejoras

- **[Gestor de migraciones]** Mejora en las comprobaciones de migración, soporte de descarga SQL, formato de registros y visibilidad del proceso de ejecución por @cgyrock

### 🐛 Corrección de Errores

- **[base de datos]**
  - Incluir ámbito de tabla intermedia al consultar relaciones m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) por @2013xile

  - Corregir `appends` de objeto en `OptionsParser`, y aumentar `arrayLimit` para parámetros ([#8328](https://github.com/nocobase/nocobase/pull/8328)) por @mytharcher

- **[cliente]** Corregir el error lanzado en la configuración del bloque de formulario de filtro de un campo m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) por @mytharcher

- **[Gestor de tareas asíncronas]** Corregir el idioma al cancelar una tarea en segundo plano ([#8245](https://github.com/nocobase/nocobase/pull/8245)) por @mytharcher

- **[Gestor de archivos]** Corregir el error lanzado al subir un archivo de más de 5MB a AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) por @mytharcher

- **[Flujo de trabajo]** Corregida la invalidación de eventos de base de datos tras refrescar la fuente de datos externa ([#8207](https://github.com/nocobase/nocobase/pull/8207)) por @cgyrock

- **[Colección: Árbol]** Actualizar rutas tras crear nodos de colección de árbol de forma masiva ([#8267](https://github.com/nocobase/nocobase/pull/8267)) por @2013xile

- **[Fuente de datos: PostgreSQL externo]** Corregida la invalidación de eventos de base de datos tras refrescar la fuente de datos externa por @cgyrock

- **[Fuente de datos: Oracle externo]** Corregida la invalidación de eventos de base de datos tras refrescar la fuente de datos externa por @cgyrock
