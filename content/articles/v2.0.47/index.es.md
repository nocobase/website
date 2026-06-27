---
title: "NocoBase v2.0.47: El proveedor de LLM ahora es compatible con la plataforma Xiaomi MIMO"
description: "Nota de la versión v2.0.47"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** El proveedor de LLM ahora es compatible con la plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock

### 🚀 Mejoras

- **[Motor de flujo]** Mejora el comportamiento de arrastre de bloques en páginas v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) por @zhangzhonghe

- **[Empleados IA]** Ajuste de categoría de empleados IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock

- **[Flujo de trabajo: Aprobación]** Marcar el modo de visualización de asociaciones cargado desde la base de datos como heredado por @mytharcher

### 🐛 Corrección de Errores

- **[base de datos]** Se corrigió un problema por el cual los filtros de fecha y hora de fuentes de datos externas de SQL Server podían fallar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile

- **[cliente]**
  - Conservar valores nulos para dependencias de variables de ámbito de datos vacías en formularios v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx

  - Volver a ejecutar la representación de columnas JS cuando cambian los datos de la fila ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx

  - Corregir el problema por el cual los campos del formulario de filtro desaparecen después de volver a abrir un selector de registros emergente ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe

  - Se corrigió un problema por el cual las celdas de campo JS en bloques de tabla v2 podían aparecer en blanco después de filtrar o actualizar los datos de la tabla. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx

- **[Motor de flujo]** Se corrigió un problema por el cual los campos ocultos del sistema podían seleccionarse en variables relacionadas con formularios. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust

- **[Acción: Importar registros]** Corregir el problema por el cual el índice de fila fallida en la importación de registros no es correcto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher

- **[Bloque: Gantt]** Agregar una configuración de bloque Gantt para habilitar el arrastre para reprogramar. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx

- **[Empleados IA]** Corregir el error de integración de deepSeek V4 del empleado IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) por @cgyrock

- **[Acción: Exportar registros Pro]** Corregir el problema por el cual el modo automático no funciona por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir error de tipo por @mytharcher

  - Corregir el tiempo de ejecución de la aprobación para que `latestExecutionId` se sincronice después de confirmar la aprobación por @mytharcher
