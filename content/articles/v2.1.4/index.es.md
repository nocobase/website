---
title: "NocoBase v2.1.4: Cambio de archivos de importación subidos a almacenamiento en disco para reducir la presión de memoria durante importaciones de grandes datos"
description: "Nota de la versión v2.1.4"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Se mejoró la experiencia de edición de metadatos del flujo de trabajo al permitir la edición de la descripción en la ventana emergente de detalles y rellenar automáticamente los metadatos del flujo de trabajo de origen al duplicar flujos de trabajo. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) por @mytharcher

### 🐛 Corrección de errores

- **[Acción: Importar registros]** Se cambiaron los archivos de importación subidos al almacenamiento en disco para reducir la presión de memoria durante importaciones de grandes volúmenes de datos. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) por @mytharcher
- **[Gestor de copias de seguridad]** Se corrigió un problema de seguridad donde se podían aceptar nombres de esquema PostgreSQL no seguros durante la restauración de copias de seguridad. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) por @2013xile
- **[Flujo de trabajo]**

  - Se corrigió el manejo de tiempo de espera del flujo de trabajo para que las ejecuciones abortadas y sus tareas pendientes puedan actualizarse de forma atómica. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) por @mytharcher
  - Se corrigió el problema por el cual el campo "última actualización por" del flujo de trabajo no se actualizaba después de cambios en los nodos del flujo de trabajo. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) por @mytharcher
- **[Acción: Importar registros Pro]** Se evitó el análisis de archivos grandes en el nodo de solicitud antes de que la importación Pro cree una tarea asíncrona. por @mytharcher
- **[Control de versiones]** Se ajustó la posición de la entrada de acceso directo superior del control de versiones para que aparezca junto al editor de interfaz de usuario tanto en los diseños de administración heredados como en los v2. por @cgyrock
