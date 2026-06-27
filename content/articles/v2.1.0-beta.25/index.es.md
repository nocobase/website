---
title: "NocoBase v2.1.0-beta.25: Añadir algunas API para NocoBase cli"
description: "Nota de la versión v2.1.0-beta.25"
---

### 🎉 Nuevas Funcionalidades

- **[cli]** Añadir comando de lanzamiento en la API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) por @Andrew1989Y

- **[sin definir]** Añadir documentación en indonesio y vietnamita. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) por @Molunerfinn

- **[Empleados IA]** El proveedor de LLM ahora es compatible con la plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock

- **[Gestor de migraciones]** Añadir algunas API para nocobase cli por @Andrew1989Y

- **[Gestor de copias de seguridad]** Añadir algunas API para nocobase cli por @Andrew1989Y

### 🚀 Mejoras

- **[sin definir]**
  - - ([#9349](https://github.com/nocobase/nocobase/pull/9349)) por @Molunerfinn

  - Alinear la documentación en español, portugués, ruso y alemán con la fuente en inglés. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) por @Molunerfinn

  - Sincronizar la documentación en francés con la fuente en chino. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) por @Molunerfinn

- **[IdP: OAuth]** Las sesiones de OAuth ahora usan la misma configuración de caducidad que la política de tokens del sistema ([#9345](https://github.com/nocobase/nocobase/pull/9345)) por @2013xile

- **[Bloque: Kanban]**
  - Reducido el ancho predeterminado de las columnas Kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) por @jiannx

  - Mejorada la configuración de creación de bloques de Calendario y Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) por @jiannx

- **[Empleados IA]** Ajuste de categoría de empleados IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock

- **[Flujo de trabajo: Aprobación]** Marcar el modo de visualización de asociación cargado desde la base de datos como heredado por @mytharcher

### 🐛 Corrección de Errores

- **[sin definir]**
  - Corregir el flujo de trabajo de dependencias y compilación para que los fallos de verificación de plugins pro independientes rompan la CI en lugar de omitir silenciosamente la cobertura de compilación. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) por @Molunerfinn

  - Corregir archivos de traducción inflados y alinear la estructura de documentación en varios idiomas. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) por @Molunerfinn

- **[cli]** Corregidas las opciones booleanas de la CLI para que puedan deshabilitarse con banderas negadas ([#9337](https://github.com/nocobase/nocobase/pull/9337)) por @2013xile

- **[client-v2]**
  - Corregida la carga de plugins remotos para que las URL de plugins que ya terminan en `.js` no se resuelvan a rutas duplicadas `.js.js`. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) por @Molunerfinn

  - Corregir el problema por el cual `RemoteSelect` no se renderizaba en la configuración de flujos de trabajo vinculados ([#9314](https://github.com/nocobase/nocobase/pull/9314)) por @mytharcher

- **[ai]** Corregir la falta de configuración del campo de categoría durante el registro de empleados IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) por @cgyrock

- **[motor-de-flujo]** Corregido un problema por el cual se podían seleccionar campos ocultos del sistema en variables relacionadas con formularios. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust

- **[cliente]**
  - Corregido un problema por el cual las celdas de campo JS en bloques de tabla v2 podían aparecer en blanco después de filtrar o actualizar los datos de la tabla. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx

  - Conservar valores nulos para dependencias de variables de ámbito de datos vacías en formularios v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx

  - Corregir el problema por el cual los campos del formulario de filtro desaparecen después de reabrir un selector de registros emergente ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe

  - Volver a ejecutar el renderizado de la columna JS cuando cambian los datos de la fila ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx

- **[base de datos]** Corregido un problema por el cual los filtros de fecha y hora de fuentes de datos externas de SQL Server podían fallar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile

- **[Empleados IA]**
  - Corregir el problema de errores ocasionales cuando el empleado IA usa el modelo DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) por @cgyrock

  - Corregir el problema por el cual el nodo de empleado IA del flujo de trabajo borra las habilidades después de cambiar de empleado IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) por @cgyrock

  - Corregir el problema por el cual la lista de empleados IA del botón de acción muestra empleados desarrolladores ([#9320](https://github.com/nocobase/nocobase/pull/9320)) por @cgyrock

- **[Fuente de datos: Principal]** Evitar el bloqueo cuando los campos no están definidos durante la carga de la colección ([#9174](https://github.com/nocobase/nocobase/pull/9174)) por @saraTabbane

- **[Plantillas de UI]** Corregido un problema por el cual la lista de plantillas emergentes no cargaba correctamente las plantillas disponibles. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) por @gchust

- **[Gestor de archivos]** Mejorado el manejo de errores en la descarga de vista previa de archivos ([#9103](https://github.com/nocobase/nocobase/pull/9103)) por @gaston98765

- **[Bloque: Árbol]** Corregir la visualización anormal de los nodos del bloque de filtro ([#9260](https://github.com/nocobase/nocobase/pull/9260)) por @jiannx

- **[Bloque: Gantt]** Añadir una configuración de bloque Gantt para habilitar el arrastre para reprogramar. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx

- **[Bloque: Kanban]** Corregida la visualización repetida de la capa flotante de configuración de campos ([#9271](https://github.com/nocobase/nocobase/pull/9271)) por @jiannx

- **[Acción: Importar registros]** Corregir el problema por el cual el índice de filas fallidas en la importación de registros no es correcto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher

- **[Acción: Exportar registros Pro]** Corregir el problema por el cual el modo automático no funciona por @mytharcher

- **[Gestor de migraciones]** Corregir que `migration:create` devuelva `taskId` del registro de tarea asíncrona. por @Andrew1989Y

- **[Flujo de trabajo: Aprobación]**
  - Corregir el problema por el cual los parámetros de consulta como el filtro ahora funcionan en la API para listar flujos de trabajo de aprobación disponibles por @mytharcher

  - Corregir el problema por el cual el archivo en la aplicación original no se recargaba por @mytharcher

  - Corregir error de tipo por @mytharcher

  - Soporte para analizar algunas variables del cliente en acciones de aprobación por @mytharcher

  - Corregir el tiempo de ejecución de la aprobación para que `latestExecutionId` se sincronice después de confirmar la aprobación por @mytharcher
