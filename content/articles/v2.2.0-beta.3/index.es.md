---
title: "NocoBase v2.2.0-beta.3: Añadir soporte para archivos adjuntos al nodo de correo del flujo de trabajo."
description: "Nota de la versión v2.2.0-beta.3"
---

### 🎉 Nuevas Funcionalidades

* **[Workflow: Nodo de correo]** Se añadió soporte para enviar archivos adjuntos en los nodos de correo de los flujos de trabajo. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) por @mytharcher
* **[Workflow]** Se añadió soporte para ámbitos de transacciones de base de datos en los flujos de trabajo. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) por @mytharcher
  Referencia: [Transacciones de base de datos](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow: Nodo de transacción de base de datos]** Se añadió un plugin de nodo de flujo de trabajo para transacciones de base de datos. por @mytharcher

### 🚀 Mejoras

* **[client-v2]** Las columnas de campos de relación en subtablas de formulario ahora admiten variables del elemento actual en los ámbitos de datos. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) por @gchust
* **[undefined]** Se unificó el nombre en chino del plugin de Control de versiones como “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) por @cgyrock
* **[Gestor de archivos]** Se añadió soporte de texto seleccionable en las vistas previas de PDF del Gestor de archivos para PDFs con texto incrustado. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) por @mytharcher
* **[Usuarios]** Se mejoró el diseño de las páginas de Usuarios y Permisos v2 y se optimizó el comportamiento del árbol de departamentos. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) por @jiannx
* **[Acción: Edición masiva]** Se optimizó la carga de los plugins de acción v2 y se mantuvo estable el orden de los botones de acción migrados. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) por @katherinehhh
* **[Control de versiones]** Se renombró el nombre en chino del plugin de Control de versiones a “版本控制”. por @cgyrock

### 🐛 Corrección de Errores

* **[cli-v1]** Se corrigió un error al ejecutar `<span>yarn dev</span>` después de actualizar proyectos creados con create-nocobase-app de la versión 2.0 a la 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) por @Molunerfinn
* **[flow-engine]** Se corrigieron problemas de entrada de IME en vietnamita y chino en los campos de texto de una línea y texto multilínea v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) por @katherinehhh
* **[client-v2]** Se corrigió el problema por el cual el progreso de la migración no mostraba la vista de progreso dedicada. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) por @2013xile
* **[server]** Se corrigió el manejo inseguro de nombres de plugins en `<span>pm:enable</span>` para evitar riesgos de inclusión de archivos locales durante la resolución de plugins. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) por @mytharcher
* **[Gestor de tareas asíncronas]** Se corrigieron errores de consulta a la base de datos causados por la falta de `<span>filterByTk</span>` al descargar archivos de tareas asíncronas. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) por @mytharcher
* **[Gestor de archivos]** Se corrigieron fallos en la vista previa de PDF causados por una carga anómala del módulo de trabajo de pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) por @mytharcher
* **[Bloque: Kanban]** Se corrigió el problema por el cual al abrir bloques de Calendario, Gantt y Kanban en modo no edición se persistían inesperadamente acciones emergentes ocultas y se enviaban repetidamente solicitudes de eliminación. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) por @jiannx
* **[Acción: Exportar registros Pro]** Se mejoraron los ajustes del modo de procesamiento y el texto de ayuda para Importación/Exportación Pro v2. por @katherinehhh
* **[Multi-espacio]** Se corrigió el problema por el cual los administradores de espacio no podían añadir usuarios al espacio cuando no tenían permiso para el campo de correo electrónico del usuario. por @jiannx
* **[Gestor de migraciones]** Se corrigieron posibles fallos al importar archivos grandes de datos de migración. por @2013xile
* **[Impresión de plantillas]** Se rechazaron tipos de archivo de plantilla no soportados antes de iniciar la impresión de plantillas. por @2013xile
