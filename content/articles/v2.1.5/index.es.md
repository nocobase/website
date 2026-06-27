---
title: "NocoBase v2.1.5: Se agregó soporte para enviar archivos adjuntos en nodos de correo del flujo de trabajo"
description: "Nota de la versión v2.1.5"
---

### 🎉 Novedades

- **[Workflow: Nodo de correo]** Se añadió soporte para enviar archivos adjuntos en los nodos de correo del flujo de trabajo. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) por @mytharcher

### 🚀 Mejoras

- **[client-v2]** Los ámbitos de datos de las columnas de campos de relación en subtablas de formulario ahora admiten variables del elemento actual. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) por @gchust
- **[sin definir]** Se unificó el nombre en chino de la documentación del plugin de control de versiones como “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) por @cgyrock
- **[Gestor de archivos]** Se añadió soporte de texto seleccionable en las vistas previas de PDF del gestor de archivos para PDFs con texto incrustado. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) por @mytharcher
- **[Acción: Edición masiva]** Se optimizó el método de carga de los plugins de acción v2 y se mantuvo estable el orden de los botones de acción migrados. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) por @katherinehhh
- **[Control de versiones]** Se cambió el nombre en chino del plugin de control de versiones a “版本控制”. por @cgyrock

### 🐛 Corrección de errores

- **[cli-v1]** Se corrigió un error al ejecutar `yarn dev` después de actualizar proyectos creados con create-nocobase-app de la versión 2.0 a la 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) por @Molunerfinn
- **[client-v2]** Se corrigió el problema por el cual el progreso de la migración no mostraba la vista de progreso dedicada. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) por @2013xile
- **[flow-engine]** Se corrigieron problemas de entrada de IME en vietnamita y chino en los campos de texto de una línea y varias líneas de la v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) por @katherinehhh
- **[server]** Se corrigió el manejo inseguro de nombres de plugins en `pm:enable` para prevenir riesgos de inclusión de archivos locales durante la resolución de plugins. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) por @mytharcher
- **[Gestor de archivos]** Se corrigieron fallos en la vista previa de PDF causados por una carga anómala del módulo de trabajo de pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) por @mytharcher
- **[Bloque: Kanban]** Se corrigió el problema por el cual abrir bloques de Calendario, Gantt y Kanban fuera del modo de edición persistía inesperadamente acciones emergentes ocultas y enviaba repetidamente solicitudes de eliminación. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) por @jiannx
- **[Acción: Exportar registros Pro]** Se mejoraron los ajustes del modo de procesamiento y las indicaciones explicativas para la Importación/Exportación Pro de la v2. por @katherinehhh
- **[Gestor de migraciones]** Se corrigieron posibles fallos al importar archivos grandes de datos de migración. por @2013xile
- **[Impresión de plantillas]** Se rechazaron tipos de archivo de plantilla no compatibles antes de iniciar la impresión de plantillas. por @2013xile
