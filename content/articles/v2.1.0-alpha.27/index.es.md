---
title: "NocoBase v2.1.0-alpha.27: Los empleados de IA pueden buscar documentación empaquetada con comandos Bash"
description: "Nota de la versión v2.1.0-alpha.27"
---

### 🎉 Nuevas Funcionalidades

- **[cli]** Añadir comando de lanzamiento en la API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) por @Andrew1989Y

- **[sin definir]** Añadir documentación en indonesio y vietnamita. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) por @Molunerfinn

- **[servidor]** Los empleados de IA pueden buscar documentación empaquetada con comandos Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) por @2013xile

- **[Empleados de IA]** El proveedor de LLM ahora es compatible con la plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock

- **[Gestor de migraciones]** Añadir algunas APIs para nocobase cli por @Andrew1989Y

- **[Gestor de copias de seguridad]** Añadir algunas APIs para nocobase cli por @Andrew1989Y

### 🚀 Mejoras

- **[motor-de-flujo]** Mejorar el comportamiento de arrastre de bloques en páginas v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) por @zhangzhonghe

- **[sin definir]**
  - Alinear la documentación en español, portugués, ruso y alemán con la fuente en inglés. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) por @Molunerfinn

  - Sincronizar la documentación en francés con la fuente en chino. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) por @Molunerfinn

- **[Empleados de IA]**
  - Mejora de las herramientas de edición RunJS de Nathan y reducción del retraso durante conversaciones largas con IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) por @2013xile

  - Ajuste de categoría de empleados de IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock

- **[Bloque: Kanban]**
  - Reducir el ancho predeterminado de las columnas del kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) por @jiannx

  - Mejora de la configuración de creación de bloques de Calendario y Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) por @jiannx

- **[Flujo de trabajo: Aprobación]** Marcar el modo de visualización de asociación cargado desde la base de datos como heredado por @mytharcher

### 🐛 Corrección de Errores

- **[sin definir]**
  - Corregir el flujo de trabajo de dependencias y compilación para que los fallos de checkout de plugins pro independientes rompan la CI en lugar de omitir silenciosamente la cobertura de compilación. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) por @Molunerfinn

  - Corregir archivos de traducción inflados y alinear la estructura de documentación multilingüe. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) por @Molunerfinn

- **[cliente-v2]** Corregir el problema por el que `RemoteSelect` no se renderizaba en la configuración de flujo de trabajo vinculado ([#9314](https://github.com/nocobase/nocobase/pull/9314)) por @mytharcher

- **[motor-de-flujo]** Corregido un problema por el que se podían seleccionar campos ocultos del sistema en variables relacionadas con formularios. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust

- **[ia]** Corregir la falta de configuración del campo de categoría durante el registro de empleados de IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) por @cgyrock

- **[cliente]**
  - Corregido un problema por el que las celdas de campo JS en bloques de tabla v2 podían aparecer en blanco después de filtrar o actualizar los datos de la tabla. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx

  - Corregir el problema por el que los campos del formulario de filtro desaparecían después de reabrir un selector de registros emergente ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe

  - Conservar valores nulos para dependencias de variables de alcance de datos vacías en formularios v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx

  - Volver a ejecutar el renderizado de la columna JS cuando cambian los datos de la fila ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx

- **[base de datos]** Corregido un problema por el que los filtros de fecha y hora de fuentes de datos externas de SQL Server podían fallar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile

- **[Empleados de IA]**
  - Corregir el problema por el que la lista de empleados de IA del botón de acción mostraba empleados desarrolladores ([#9320](https://github.com/nocobase/nocobase/pull/9320)) por @cgyrock

  - Corregir el error de integración de deepSeek V4 en empleados de IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) por @cgyrock

- **[Bloque: Gantt]** Añadir una configuración de bloque Gantt para habilitar el arrastre y reprogramación. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx

- **[Bloque: Árbol]** Corregir la visualización anormal de los nodos del bloque de filtro ([#9260](https://github.com/nocobase/nocobase/pull/9260)) por @jiannx

- **[Acción: Importar registros]** Corregir el problema por el que el índice de fila fallida en la importación de registros no era correcto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher

- **[Bloque: Kanban]** Corregida la visualización repetida de la capa flotante de configuración de campos ([#9271](https://github.com/nocobase/nocobase/pull/9271)) por @jiannx

- **[Acción: Exportar registros Pro]** Corregir el problema por el que el modo automático no funcionaba por @mytharcher

- **[Gestor de migraciones]** Corregir `migration:create` devolviendo `taskId` del registro de tarea asíncrona. por @Andrew1989Y

- **[Flujo de trabajo: Aprobación]**
  - Corregir el tiempo de ejecución de la aprobación para que `latestExecutionId` se sincronice después de la confirmación de la aprobación por @mytharcher

  - Corregir error de tipo por @mytharcher
