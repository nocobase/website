---
title: "Actualizaciones semanales｜Agregamos algunas APIs para NocoBase cli"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 30 de abril al 7 de mayo de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.49](https://www.nocobase.com/en/blog/v2.0.49)

*Fecha de lanzamiento: 2026-05-06*

### 🚀 Mejoras

- **[sin definir]** Añadir notificación de fallo de Feishu para flujos de trabajo de lanzamiento manual ([#9349](https://github.com/nocobase/nocobase/pull/9349)) por @Molunerfinn

### 🐛 Corrección de errores

- **[Fuente de datos: Principal]** Evitar bloqueo cuando los campos no están definidos durante la carga de colecciones ([#9174](https://github.com/nocobase/nocobase/pull/9174)) por @saraTabbane
- **[Plantillas de UI]** Se corrigió un problema por el cual la lista de plantillas emergentes no cargaba correctamente las plantillas disponibles. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) por @gchust
- **[Empleados IA]** Corregir el problema de errores ocasionales cuando el empleado IA usa el modelo DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) por @cgyrock
- **[Gestor de archivos]** Mejorado el manejo de errores en la descarga de archivos de vista previa ([#9103](https://github.com/nocobase/nocobase/pull/9103)) por @gaston98765
- **[Flujo de trabajo: Aprobación]** Corregir el problema por el cual los parámetros de filtro y otros de consulta ahora funcionan en la API para listar flujos de trabajo de aprobación disponibles por @mytharcher

### [v2.0.48](https://www.nocobase.com/en/blog/v2.0.48)

*Fecha de lanzamiento: 2026-05-04*

### 🐛 Corrección de errores

- **[Empleados IA]** Corregir el problema por el cual la lista de empleados IA del botón de acción muestra empleados desarrolladores ([#9320](https://github.com/nocobase/nocobase/pull/9320)) por @cgyrock
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema por el cual el archivo en la aplicación original no se recargaba por @mytharcher
  - Soporte para analizar algunas variables de cliente en acciones de aprobación por @mytharcher

### [v2.0.47](https://www.nocobase.com/en/blog/v2.0.47)

*Fecha de lanzamiento: 2026-05-01*

### 🎉 Nuevas funciones

- **[Empleados IA]** El proveedor LLM ahora es compatible con la plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock

### 🚀 Mejoras

- **[motor-de-flujo]** Mejorar el comportamiento del diseño de arrastre de bloques en páginas v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) por @zhangzhonghe
- **[Empleados IA]** Ajuste de categoría de empleados IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock
- **[Flujo de trabajo: Aprobación]** Marcar el modo de visualización de asociación cargado desde la base de datos como heredado por @mytharcher

### 🐛 Corrección de errores

- **[base de datos]** Se corrigió un problema por el cual los filtros de fecha y hora de fuentes de datos externas de SQL Server podían fallar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile
- **[cliente]**

  - Conservar valores nulos para dependencias de variables de ámbito de datos vacías en formularios v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx
  - Volver a ejecutar el renderizado de columnas JS cuando cambian los datos de la fila ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx
  - Corregir el problema por el cual los campos del formulario de filtro desaparecen después de volver a abrir un selector de registros emergente ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe
  - Se corrigió un problema por el cual las celdas de campo JS en bloques de tabla v2 podían aparecer en blanco después de filtrar o actualizar los datos de la tabla. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx
- **[motor-de-flujo]** Se corrigió un problema por el cual se podían seleccionar campos ocultos del sistema en variables relacionadas con formularios. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust
- **[Acción: Importar registros]** Corregir el problema por el cual el índice de fila fallida en la importación de registros no es correcto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher
- **[Bloque: Gantt]** Añadir una configuración de bloque Gantt para habilitar el arrastre para reprogramar. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx
- **[Empleados IA]** Corregir el error de integración de DeepSeek V4 del empleado IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) por @cgyrock
- **[Acción: Exportar registros Pro]** Corregir el problema por el cual el modo automático no funciona por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir error de tipo por @mytharcher
  - Corregir la sincronización de ejecución de aprobación para que `latestExecutionId` se sincronice después de confirmar la aprobación por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.25](https://www.nocobase.com/en/blog/v2.1.0-beta.25)

*Fecha de lanzamiento: 2026-05-06*

### 🎉 Nuevas funciones

- **[cli]** Añadir comando de lanzamiento en la API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) por @Andrew1989Y
- **[sin definir]** Añadir documentación en indonesio y vietnamita. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) por @Molunerfinn
- **[Empleados IA]** El proveedor LLM ahora es compatible con la plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock
- **[Gestor de migraciones]** Añadir algunas API para nocobase cli por @Andrew1989Y
- **[Gestor de copias de seguridad]** Añadir algunas API para nocobase cli por @Andrew1989Y

### 🚀 Mejoras

- **[sin definir]**

  - Añadir notificación de fallo de Feishu para flujos de trabajo de lanzamiento manual([#9349](https://github.com/nocobase/nocobase/pull/9349)) por @Molunerfinn
  - Alinear la documentación en español, portugués, ruso y alemán con la fuente en inglés. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) por @Molunerfinn
  - Sincronizar la documentación en francés con la fuente en chino. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) por @Molunerfinn
- **[IdP: OAuth]** Las sesiones OAuth ahora usan la misma configuración de caducidad que la política de tokens del sistema ([#9345](https://github.com/nocobase/nocobase/pull/9345)) por @2013xile
- **[Bloque: Kanban]**

  - Reducido el ancho predeterminado de las columnas del kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) por @jiannx
  - Mejorada la configuración de creación de bloques de Calendario y Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) por @jiannx
- **[Empleados IA]** Ajuste de categoría de empleados IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock
- **[Flujo de trabajo: Aprobación]** Marcar el modo de visualización de asociación cargado desde la base de datos como heredado por @mytharcher

### 🐛 Corrección de errores

- **[sin definir]**

  - Corregir el flujo de trabajo de dependencia y compilación para que los fallos de checkout de plugins pro independientes rompan la CI en lugar de omitir silenciosamente la cobertura de compilación. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) por @Molunerfinn
  - Corregir archivos de traducción inflados y alinear la estructura de documentación multilingüe. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) por @Molunerfinn
- **[cli]** Se corrigieron las opciones booleanas de CLI para que puedan deshabilitarse con banderas negadas ([#9337](https://github.com/nocobase/nocobase/pull/9337)) por @2013xile
- **[client-v2]**

  - Se corrigió la carga de plugins remotos para que las URL de plugins que ya terminan en `.js` no se resuelvan a rutas duplicadas `.js.js`. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) por @Molunerfinn
  - Corregir el problema por el cual `RemoteSelect` no se renderiza en la configuración de vinculación de flujo de trabajo ([#9314](https://github.com/nocobase/nocobase/pull/9314)) por @mytharcher
- **[ia]** Corregir la falta de configuración del campo de categoría durante el registro de empleados IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) por @cgyrock
- **[motor-de-flujo]** Se corrigió un problema por el cual se podían seleccionar campos ocultos del sistema en variables relacionadas con formularios. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust
- **[cliente]**

  - Se corrigió un problema por el cual las celdas de campo JS en bloques de tabla v2 podían aparecer en blanco después de filtrar o actualizar los datos de la tabla. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx
  - Conservar valores nulos para dependencias de variables de ámbito de datos vacías en formularios v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx
  - Corregir el problema por el cual los campos del formulario de filtro desaparecen después de volver a abrir un selector de registros emergente ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe
  - Volver a ejecutar el renderizado de columnas JS cuando cambian los datos de la fila ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx
- **[base de datos]** Se corrigió un problema por el cual los filtros de fecha y hora de fuentes de datos externas de SQL Server podían fallar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile
- **[Empleados IA]**

  - Corregir el problema de errores ocasionales cuando el empleado IA usa el modelo DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) por @cgyrock
  - Corregir el problema por el cual el nodo de empleado IA del flujo de trabajo borra las habilidades después de cambiar de empleado IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) por @cgyrock
  - Corregir el problema por el cual la lista de empleados IA del botón de acción muestra empleados desarrolladores ([#9320](https://github.com/nocobase/nocobase/pull/9320)) por @cgyrock
- **[Fuente de datos: Principal]** Evitar bloqueo cuando los campos no están definidos durante la carga de colecciones ([#9174](https://github.com/nocobase/nocobase/pull/9174)) por @saraTabbane
- **[Plantillas de UI]** Se corrigió un problema por el cual la lista de plantillas emergentes no cargaba correctamente las plantillas disponibles. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) por @gchust
- **[Gestor de archivos]** Mejorado el manejo de errores en la descarga de archivos de vista previa ([#9103](https://github.com/nocobase/nocobase/pull/9103)) por @gaston98765
- **[Bloque: Árbol]** Corregir la visualización anómala de los nodos del bloque de filtro ([#9260](https://github.com/nocobase/nocobase/pull/9260)) por @jiannx
- **[Bloque: Gantt]** Añadir una configuración de bloque Gantt para habilitar el arrastre para reprogramar. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx
- **[Bloque: Kanban]** Se corrigió la visualización repetida de la capa flotante de configuración de campos ([#9271](https://github.com/nocobase/nocobase/pull/9271)) por @jiannx
- **[Acción: Importar registros]** Corregir el problema por el cual el índice de fila fallida en la importación de registros no es correcto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher
- **[Acción: Exportar registros Pro]** Corregir el problema por el cual el modo automático no funciona por @mytharcher
- **[Gestor de migraciones]** Corregir `migration:create` devolviendo `taskId` del registro de tarea asíncrona. por @Andrew1989Y
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema por el cual los parámetros de filtro y otros de consulta ahora funcionan en la API para listar flujos de trabajo de aprobación disponibles por @mytharcher
  - Corregir el problema por el cual el archivo en la aplicación original no se recargaba por @mytharcher
  - Corregir error de tipo por @mytharcher
  - Soporte para analizar algunas variables de cliente en acciones de aprobación por @mytharcher
  - Corregir la sincronización de ejecución de aprobación para que `latestExecutionId` se sincronice después de confirmar la aprobación por @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.30](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Fecha de lanzamiento: 2026-05-06*

### 🚀 Mejoras

- **[sin definir]** Añadir notificación de fallo de Feishu para flujos de trabajo de lanzamiento manual ([#9349](https://github.com/nocobase/nocobase/pull/9349)) por @Molunerfinn
- **[IdP: OAuth]** Las sesiones OAuth ahora usan la misma configuración de caducidad que la política de tokens del sistema ([#9345](https://github.com/nocobase/nocobase/pull/9345)) por @2013xile

### 🐛 Corrección de errores

- **[client-v2]** Se corrigió la carga de plugins remotos para que las URL de plugins que ya terminan en `.js` no se resuelvan a rutas duplicadas `.js.js`. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) por @Molunerfinn
- **[cli]** Se corrigieron las opciones booleanas de CLI para que puedan deshabilitarse con banderas negadas ([#9337](https://github.com/nocobase/nocobase/pull/9337)) por @2013xile
- **[Empleados IA]**

  - Corregir el problema de errores ocasionales cuando el empleado IA usa el modelo DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) por @cgyrock
  - Corregir el problema por el cual el nodo de empleado IA del flujo de trabajo borra las habilidades después de cambiar de empleado IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) por @cgyrock
- **[Fuente de datos: Principal]** Evitar bloqueo cuando los campos no están definidos durante la carga de colecciones ([#9174](https://github.com/nocobase/nocobase/pull/9174)) por @saraTabbane
- **[Plantillas de UI]** Se corrigió un problema por el cual la lista de plantillas emergentes no cargaba correctamente las plantillas disponibles. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) por @gchust
- **[Bloque: Kanban]** Se corrigieron los bloques asociados de kanban que usaban parámetros de recursos de tiempo de ejecución no resueltos en contextos emergentes o de página secundaria. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregir el problema por el cual los parámetros de filtro y otros de consulta ahora funcionan en la API para listar flujos de trabajo de aprobación disponibles por @mytharcher

### [v2.1.0-alpha.29](https://www.nocobase.com/en/blog/v2.1.0-alpha.29)

*Fecha de lanzamiento: 2026-05-04*

### 🐛 Corrección de errores

- **[Gestor de archivos]** Mejorado el manejo de errores en la descarga de archivos de vista previa ([#9103](https://github.com/nocobase/nocobase/pull/9103)) por @gaston98765
- **[Flujo de trabajo: Aprobación]** Soporte para analizar algunas variables de cliente en acciones de aprobación por @mytharcher

### [v2.1.0-alpha.28](https://www.nocobase.com/en/blog/v2.1.0-alpha.28)

*Fecha de lanzamiento: 2026-05-04*

### 🐛 Corrección de errores

- **[Flujo de trabajo: Aprobación]** Corregir el problema por el cual el archivo en la aplicación original no se recargaba por @mytharcher

### [v2.1.0-alpha.27](https://www.nocobase.com/en/blog/v2.1.0-alpha.27)

*Fecha de lanzamiento: 2026-05-03*

### 🎉 Nuevas funciones

- **[cli]** Añadir comando de lanzamiento en la API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) por @Andrew1989Y
- **[sin definir]** Añadir documentación en indonesio y vietnamita. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) por @Molunerfinn
- **[servidor]** Los empleados IA pueden buscar documentación empaquetada con comandos Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) por @2013xile
- **[Empleados IA]** El proveedor LLM ahora es compatible con la plataforma Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) por @cgyrock
- **[Gestor de migraciones]** Añadir algunas API para nocobase cli por @Andrew1989Y
- **[Gestor de copias de seguridad]** Añadir algunas API para nocobase cli por @Andrew1989Y

### 🚀 Mejoras

- **[motor-de-flujo]** Mejorar el comportamiento del diseño de arrastre de bloques en páginas v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) por @zhangzhonghe
- **[sin definir]**

  - Alinear la documentación en español, portugués, ruso y alemán con la fuente en inglés. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) por @Molunerfinn
  - Sincronizar la documentación en francés con la fuente en chino. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) por @Molunerfinn
- **[Empleados IA]**

  - Mejoradas las herramientas de edición RunJS de Nathan y reducido el retraso durante conversaciones largas de chat IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) por @2013xile
  - Ajuste de categoría de empleados IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) por @cgyrock
- **[Bloque: Kanban]**

  - Reducido el ancho predeterminado de las columnas del kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) por @jiannx
  - Mejorada la configuración de creación de bloques de Calendario y Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) por @jiannx
- **[Flujo de trabajo: Aprobación]** Marcar el modo de visualización de asociación cargado desde la base de datos como heredado por @mytharcher

### 🐛 Corrección de errores

- **[sin definir]**

  - Corregir el flujo de trabajo de dependencia y compilación para que los fallos de checkout de plugins pro independientes rompan la CI en lugar de omitir silenciosamente la cobertura de compilación. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) por @Molunerfinn
  - Corregir archivos de traducción inflados y alinear la estructura de documentación multilingüe. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) por @Molunerfinn
- **[client-v2]** Corregir el problema por el cual `RemoteSelect` no se renderiza en la configuración de vinculación de flujo de trabajo ([#9314](https://github.com/nocobase/nocobase/pull/9314)) por @mytharcher
- **[motor-de-flujo]** Se corrigió un problema por el cual se podían seleccionar campos ocultos del sistema en variables relacionadas con formularios. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) por @gchust
- **[ia]** Corregir la falta de configuración del campo de categoría durante el registro de empleados IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) por @cgyrock
- **[cliente]**

  - Se corrigió un problema por el cual las celdas de campo JS en bloques de tabla v2 podían aparecer en blanco después de filtrar o actualizar los datos de la tabla. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) por @jiannx
  - Corregir el problema por el cual los campos del formulario de filtro desaparecen después de volver a abrir un selector de registros emergente ([#9211](https://github.com/nocobase/nocobase/pull/9211)) por @zhangzhonghe
  - Conservar valores nulos para dependencias de variables de ámbito de datos vacías en formularios v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) por @jiannx
  - Volver a ejecutar el renderizado de columnas JS cuando cambian los datos de la fila ([#9282](https://github.com/nocobase/nocobase/pull/9282)) por @jiannx
- **[base de datos]** Se corrigió un problema por el cual los filtros de fecha y hora de fuentes de datos externas de SQL Server podían fallar ([#9272](https://github.com/nocobase/nocobase/pull/9272)) por @2013xile
- **[Empleados IA]**

  - Corregir el problema por el cual la lista de empleados IA del botón de acción muestra empleados desarrolladores ([#9320](https://github.com/nocobase/nocobase/pull/9320)) por @cgyrock
  - Corregir el error de integración de DeepSeek V4 del empleado IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) por @cgyrock
- **[Bloque: Gantt]** Añadir una configuración de bloque Gantt para habilitar el arrastre para reprogramar. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) por @jiannx
- **[Bloque: Árbol]** Corregir la visualización anómala de los nodos del bloque de filtro ([#9260](https://github.com/nocobase/nocobase/pull/9260)) por @jiannx
- **[Acción: Importar registros]** Corregir el problema por el cual el índice de fila fallida en la importación de registros no es correcto ([#9277](https://github.com/nocobase/nocobase/pull/9277)) por @mytharcher
- **[Bloque: Kanban]** Se corrigió la visualización repetida de la capa flotante de configuración de campos ([#9271](https://github.com/nocobase/nocobase/pull/9271)) por @jiannx
- **[Acción: Exportar registros Pro]** Corregir el problema por el cual el modo automático no funciona por @mytharcher
- **[Gestor de migraciones]** Corregir `migration:create` devolviendo `taskId` del registro de tarea asíncrona. por @Andrew1989Y
- **[Flujo de trabajo: Aprobación]**

  - Corregir la sincronización de ejecución de aprobación para que `latestExecutionId` se sincronice después de confirmar la aprobación por @mytharcher
  - Corregir error de tipo por @mytharcher
