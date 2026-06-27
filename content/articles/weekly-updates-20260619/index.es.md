---
title: "Actualizaciones Semanales｜Agregar formulario de configuración de almacén de vectores externo para bases de conocimiento de IA"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 12 al 21 de junio de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.1.9](https://www.nocobase.com/en/blog/v2.1.9)

*Fecha de lanzamiento: 2026-06-20*

### 🚀 Mejoras

- **[client-v2]** Añadir opción de sobrescribir valor para la configuración de valores de campo. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) por @gchust

### 🐛 Corrección de errores

- **[client-v2]**

  - Se corrigió que los botones de activación de flujo de trabajo de acción personalizada enviaran el JSON de contexto personalizado bajo una propiedad `values` adicional o como una cadena serializada. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) por @mytharcher
  - Se corrigió un problema donde configurar el valor de un campo de asociación como un valor fijo o valor predeterminado no surtía efecto. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) por @gchust
- **[auth]** Los datos de contraseña cifrada ya no se incluyen en las respuestas de estado de inicio de sesión ([#9836](https://github.com/nocobase/nocobase/pull/9836)) por @2013xile
- **[app]** Ignorar currentScript no relacionado al inferir la ruta pública del plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) por @chenos
- **[UI templates]** Se corrigió el contexto predeterminado incorrecto para ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) por @gchust

### [v2.1.8](https://www.nocobase.com/en/blog/v2.1.8)

*Fecha de lanzamiento: 2026-06-18*

### 🐛 Corrección de errores

- **[ai]**

  - Bloqueó `@langchain/openai` a actualizaciones de nivel de parche para paquetes de IA. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) por @cgyrock
  - Se corrigió la resolución de dependencias de LangChain incompatible para plugins de IA. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) por @cgyrock
- **[AI: Knowledge base]**

  - Se corrigieron mensajes de error poco claros al habilitar el plugin de base de conocimiento de IA sin el plugin de IA disponible. por @cgyrock
  - Se corrigió la resolución de dependencias de LangChain incompatible para el plugin de base de conocimiento de IA. por @cgyrock

### [v2.1.7](https://www.nocobase.com/en/blog/v2.1.7)

*Fecha de lanzamiento: 2026-06-18*

### 🎉 Nuevas funciones

- **[Backup manager]** Soporte de copia de seguridad y restauración para KingBase como base de datos principal ([#9791](https://github.com/nocobase/nocobase/pull/9791)) por @2013xile
- **[Migration manager]** Soporte de migraciones para KingBase como base de datos principal. por @2013xile

### 🚀 Mejoras

- **[AI: Knowledge base]** Mejora en la recuperación y documentación de la base de conocimiento de IA. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) por @cgyrock
- **[cli]** Añadir versión de esquema de configuración de env ([#9782](https://github.com/nocobase/nocobase/pull/9782)) por @chenos
- **[Workflow]** Estabilizar prueba de opciones de actualización ([#9773](https://github.com/nocobase/nocobase/pull/9773)) por @mytharcher
- **[File manager]** Mejora en las vistas previas de PDF: los archivos PDF de origen cruzado ahora usan el visor nativo del navegador, mientras que los archivos PDF del mismo origen continúan usando PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) por @mytharcher
- **[Backup manager]** Las tablas cuya `dataCategory` de colección está marcada como `'runtime'` ahora se excluyen automáticamente de las copias de seguridad. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) por @cgyrock
- **[AI: Knowledge base]** Mejora en la segmentación de documentos de la base de conocimiento de IA, gestión de segmentos, pruebas de acierto y soporte de nodos de flujo de trabajo de documentos. por @cgyrock

### 🐛 Corrección de errores

- **[client-v2]**

  - Se corrigió un problema donde el envío de un formulario mostraba un mensaje incorrecto cuando un subformulario contenía una sub-tabla. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) por @gchust
  - Se corrigió un problema donde los flujos de eventos en las columnas de sub-tablas se ejecutaban incorrectamente. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) por @gchust
  - Se eliminó `updateAssociationValues` inesperado de los campos de asociación ([#9812](https://github.com/nocobase/nocobase/pull/9812)) por @katherinehhh
  - Se corrigieron las opciones Sí/No sin traducir en los desplegables de casillas de verificación del formulario de filtro v2. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) por @katherinehhh
  - Se corrigió el problema donde la configuración del flujo de eventos no se podía actualizar después de guardar un bloque como plantilla. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) por @gchust
  - Se corrigió la visualización incorrecta y la configuración de formato cuando los campos de título de asociación de tabla v2 usan campos de hora, solo fecha o fecha y hora. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) por @katherinehhh
- **[Workflow]** Se corrigió la recuperación del despachador de flujo de trabajo después de errores de despacho inesperados. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) por @mytharcher
- **[File manager]** Se corrigieron errores 404 al cargar archivos en campos de URL de adjuntos en fuentes de datos externas ([#9809](https://github.com/nocobase/nocobase/pull/9809)) por @2013xile
- **[Action: Custom request]** Se corrigió que las acciones de solicitud personalizada V2 mostraran un error innecesario cuando la configuración de la solicitud no está configurada. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) por @katherinehhh
- **[AI employees]**

  - Se corrigió un problema donde los empleados de IA no podían completar correctamente los datos de sub-tablas. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) por @gchust
  - Se corrigieron los disparadores de tareas de acceso directo de empleados de IA para que los archivos adjuntos del contexto de trabajo actual se incluyan al ejecutar una tarea desde el perfil de acceso directo. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) por @cgyrock
- **[Workflow: Custom action event]** Se corrigió que los botones de flujo de trabajo del panel de acción v2 mostraran éxito y enviaran una solicitud cuando no hay ningún flujo de trabajo vinculado. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) por @mytharcher
- **[Flow engine]** Se corrigió un problema donde los formularios de registro actual y los detalles en ventanas emergentes podían contener datos incorrectos cuando eran construidos por IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) por @gchust
- **[Async task manager]** Se corrigieron errores de descarga de archivos de tareas asíncronas cuando falta el id de la tarea en `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) por @mytharcher
- **[Data source: External NocoBase]** Proxy de acciones de carga y almacenamiento de archivos de fuente de datos externa de NocoBase por fuente de datos de carga por @2013xile
- **[Multi-space]** Se corrigieron errores de permiso cuando los administradores de espacio añaden usuarios sin acceso al campo de correo electrónico del usuario. por @jiannx
- **[Workflow: Subflow]** Se corrigieron los subflujos asíncronos para que los flujos de trabajo padre puedan reanudarse después de un reinicio del trabajador o pérdida de mapeo de eventos en memoria. por @mytharcher
- **[App supervisor]** Se corrigió un bloqueo cuando fallan las respuestas del proxy WebSocket remoto por @2013xile

### [v2.1.5](https://www.nocobase.com/en/blog/v2.1.5)

*Fecha de lanzamiento: 2026-06-15*

### 🎉 Nuevas funciones

- **[Workflow: Mailer node]** Se añadió soporte para enviar archivos adjuntos en nodos de correo de flujo de trabajo. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) por @mytharcher

### 🚀 Mejoras

- **[client-v2]** Los ámbitos de datos de columna de campo de relación en subtablas de formulario ahora admiten variables de elemento actual. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) por @gchust
- **[undefined]** Se unificó el nombre de la documentación en chino del plugin de control de versiones como “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) por @cgyrock
- **[File manager]** Se añadió soporte de texto seleccionable a las vistas previas de PDF en el administrador de archivos para PDF con texto incrustado. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) por @mytharcher
- **[Action: Bulk edit]** Se optimizó el método de carga para los plugins de acción v2 y se mantuvo estable el orden de los botones de acción migrados. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) por @katherinehhh
- **[Version control]** Se cambió el nombre para mostrar en chino del plugin de control de versiones a “版本控制”. por @cgyrock

### 🐛 Corrección de errores

- **[cli-v1]** Se corrigió un error al ejecutar `yarn dev` después de actualizar proyectos creados con create-nocobase-app de 2.0 a 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) por @Molunerfinn
- **[client-v2]** Se corrigió el problema donde el progreso de la migración no mostraba la vista de progreso dedicada. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) por @2013xile
- **[flow-engine]** Se corrigieron problemas de entrada IME en vietnamita y chino en campos de texto de una línea y varias líneas v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) por @katherinehhh
- **[server]** Se corrigió el manejo inseguro de nombres de plugins en `pm:enable` para prevenir riesgos de inclusión de archivos locales durante la resolución de plugins. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) por @mytharcher
- **[File manager]** Se corrigieron fallos en la vista previa de PDF causados por una carga anormal del módulo de trabajo pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) por @mytharcher
- **[Block: Kanban]** Se corrigió el problema donde abrir bloques de Calendario, Gantt y Kanban fuera del modo de edición persistía inesperadamente acciones emergentes ocultas y enviaba repetidamente solicitudes de eliminación. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) por @jiannx
- **[Action: Export records Pro]** Se mejoró la configuración del modo de procesamiento y las indicaciones explicativas para v2 Import/Export Pro. por @katherinehhh
- **[Migration manager]** Se corrigieron posibles fallos al importar archivos de datos de migración grandes. por @2013xile
- **[Template print]** Se rechazaron tipos de archivo de plantilla no compatibles antes de que comience la impresión de la plantilla. por @2013xile

### [v2.1.4](https://www.nocobase.com/en/blog/v2.1.4)

*Fecha de lanzamiento: 2026-06-13*

### 🚀 Mejoras

- **[Workflow]** Se mejoró la experiencia de edición de metadatos de flujo de trabajo al admitir la edición de descripciones en la ventana emergente de detalles y completar automáticamente los metadatos del flujo de trabajo de origen al duplicar flujos de trabajo. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) por @mytharcher

### 🐛 Corrección de errores

- **[Action: Import records]** Se cambiaron los archivos de importación cargados al almacenamiento en disco para reducir la presión de memoria durante la importación de grandes volúmenes de datos. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) por @mytharcher
- **[Backup manager]** Se corrigió un problema de seguridad donde se podían aceptar nombres de esquema PostgreSQL inseguros durante la restauración de la copia de seguridad. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) por @2013xile
- **[Workflow]**

  - Se corrigió el manejo de tiempo de espera del flujo de trabajo para que las ejecuciones abortadas y sus tareas pendientes puedan actualizarse atómicamente. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) por @mytharcher
  - Se corrigió el problema donde el campo de última actualización por del flujo de trabajo no se actualizaba después de los cambios en el nodo del flujo de trabajo. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) por @mytharcher
- **[Action: Import records Pro]** Se evitó analizar archivos grandes en el nodo de solicitud antes de que la importación Pro cree una tarea asíncrona. por @mytharcher
- **[Version control]** Se ajustó la posición de la entrada de acceso directo superior del control de versiones para que aparezca junto al editor de UI en los diseños de administración heredados y v2. por @cgyrock

### [v2.1.3](https://www.nocobase.com/en/blog/v2.1.3)

*Fecha de lanzamiento: 2026-06-12*

### 🚀 Mejoras

- **[cli]**
  - normalizar versiones de compilación compatibles de la aplicación ([#9763](https://github.com/nocobase/nocobase/pull/9763)) por @chenos
  - soporte para actualizar habilidades a una versión específica ([#9760](https://github.com/nocobase/nocobase/pull/9760)) por @chenos

### 🐛 Corrección de errores

- **[client]** Se corrigió el problema donde los campos en subformularios horizontales eran demasiado estrechos para mostrar datos ([#9755](https://github.com/nocobase/nocobase/pull/9755)) por @zhangzhonghe
- **[Data source manager]**

  - Se corrigió el cajón de edición de campo en blanco causado por renderizaciones repetidas en la página de campos de configuración de fuente de datos externa v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) por @katherinehhh
  - Se corrigió un problema donde eliminar la categoría de colección activa en el administrador de fuentes de datos v1 podía dejar la pestaña Todas las colecciones vacía. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) por @katherinehhh
- **[Async task manager]** Se corrigieron IDs de solicitud incorrectos en los registros del trabajador de tareas asíncronas ([#9686](https://github.com/nocobase/nocobase/pull/9686)) por @2013xile
- **[Workflow: SQL node]** Se corrigió que la migración de variables de plantilla heredadas del flujo de trabajo SQL se omitiera para algunos usuarios de versión beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) por @mytharcher
- **[AI employees]**

  - Se corrigió la pérdida de configuración de mensajes en los nodos LLM del flujo de trabajo. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) por @cgyrock
  - Se corrigió un problema donde los archivos adjuntos pegados en el diálogo del empleado de IA no se podían eliminar. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) por @cgyrock
- **[Block: Kanban]** Se corrigió el soporte de URL para calendario y ventanas emergentes relacionadas. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) por @jiannx
- **[Workflow: Approval]** Se corrigió el problema donde los datos relacionados no se muestran en los formularios de aprobación v2 por @zhangzhonghe

### [v2.1.2](https://www.nocobase.com/en/blog/v2.1.2)

*Fecha de lanzamiento: 2026-06-12*

### 🎉 Nuevas funciones

- **[AI employees]** Se añadió un formulario de configuración de almacén de vectores externo para bases de conocimiento de IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) por @cgyrock
- **[AI: Knowledge base]** Se añadió un formulario de configuración de almacén de vectores externo para bases de conocimiento de IA. por @cgyrock

### 🚀 Mejoras

- **[undefined]**

  - Se añadió un escenario de control de versiones al inicio rápido del constructor de IA ([#9748](https://github.com/nocobase/nocobase/pull/9748)) por @Molunerfinn
    Referencia: [Inicio rápido del constructor de IA](https://docs.nocobase.com/en/ai-builder)
  - Se mejoró la documentación de control de versiones con guía de revisión automática del constructor de IA. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) por @cgyrock
- **[cli]** aclarar redacción de configuración de inicio ([#9750](https://github.com/nocobase/nocobase/pull/9750)) por @chenos
- **[Action: Import records]** Se mejoraron los diálogos de error de importación y tarea asíncrona para que los mensajes de error largos se puedan leer completamente sin romper el diseño. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) por @katherinehhh
- **[Action: Import records Pro]** Se mejoraron los diálogos de importación para que los mensajes de error largos sigan siendo legibles y el modo de procesamiento v2 se pueda seleccionar directamente desde el menú de configuración. por @katherinehhh

### 🐛 Corrección de errores

- **[client-v2]** Se corrigió el problema donde las páginas v2 podían seguir cargando después de iniciar sesión ([#9738](https://github.com/nocobase/nocobase/pull/9738)) por @zhangzhonghe
- **[cli]** requerir Node.js 22 para nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) por @chenos
- **[File manager]** Corregir vistas previas de PDF que faltan texto de fuente CJK/CID después de cambiar a pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.2.0-beta.5](https://www.nocobase.com/en/blog/v2.2.0-beta.5)

*Fecha de lanzamiento: 2026-06-16*

### 🚀 Mejoras

* **[cli]** Se añadieron registros de versión de esquema para la configuración de env. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) por @chenos
* **[File manager]** Se mejoraron las vistas previas de PDF: los archivos PDF de origen cruzado ahora usan la vista previa nativa del navegador, mientras que los archivos PDF del mismo origen continúan renderizándose con PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) por @mytharcher

### 🐛 Corrección de errores

* **[client-v2]**
  * Se corrigió el problema donde la configuración del flujo de eventos ya no se podía modificar después de que un bloque se convirtiera en una plantilla. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) por @gchust
  * Se corrigió el problema donde las opciones desplegables de casillas de verificación en formularios de filtro v2 no mostraban texto traducido. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) por @katherinehhh
  * Se corrigió la visualización incorrecta y la configuración de formato cuando el campo de título de un campo de relación de tabla v2 usaba un campo de hora, fecha o fecha y hora. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) por @katherinehhh
* **[Flow engine]** Se corrigieron datos incorrectos en formularios de registro actual y datos de detalle dentro de ventanas emergentes durante la construcción de IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) por @gchust
* **[Workflow: Custom action event]** Se corrigió el problema donde los botones de flujo de trabajo del panel de acción v2 aún mostraban éxito y enviaban solicitudes cuando no había ningún flujo de trabajo vinculado. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) por @mytharcher
* **[AI employees]** Se corrigió el problema donde los empleados de IA no podían completar correctamente los datos de sub-tablas. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) por @gchust

### [v2.2.0-beta.3](https://www.nocobase.com/en/blog/v2.2.0-beta.3)

*Fecha de lanzamiento: 2026-06-15*

### 🎉 Nuevas funciones

* **[Workflow: Mailer node]** Se añadió soporte para enviar archivos adjuntos en nodos de correo de flujo de trabajo. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) por @mytharcher
* **[Workflow]** Se añadió soporte para ámbitos de transacción de base de datos en flujos de trabajo. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) por @mytharcher
  Referencia: [Transacciones de base de datos](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow: Database transaction node]** Se añadió un plugin de nodo de flujo de trabajo de transacción de base de datos. por @mytharcher

### 🚀 Mejoras

* **[client-v2]** Las columnas de campo de relación en subtablas de formulario ahora admiten variables de elemento actual en ámbitos de datos. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) por @gchust
* **[undefined]** Se unificó el nombre de la documentación en chino del plugin de Control de versiones como “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) por @cgyrock
* **[File manager]** Se añadió soporte de texto seleccionable a las vistas previas de PDF en el administrador de archivos para PDF con texto incrustado. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) por @mytharcher
* **[Users]** Se mejoró el diseño de las páginas de Usuarios y Permisos v2 y se optimizó el comportamiento del árbol de departamentos. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) por @jiannx
* **[Action: Bulk edit]** Se optimizó cómo se cargan los plugins de acción v2 y se mantuvo estable el orden de los botones de acción migrados. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) por @katherinehhh
* **[Version control]** Se renombró el nombre para mostrar en chino del plugin de Control de versiones a “版本控制”. por @cgyrock

### 🐛 Corrección de errores

* **[cli-v1]** Se corrigió un error al ejecutar `<span>yarn dev</span>` después de actualizar proyectos creados con create-nocobase-app de 2.0 a 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) por @Molunerfinn
* **[flow-engine]** Se corrigieron problemas de entrada IME en vietnamita y chino en campos de texto de una línea y varias líneas v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) por @katherinehhh
* **[client-v2]** Se corrigió el problema donde el progreso de la migración no mostraba la vista de progreso dedicada. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) por @2013xile
* **[server]** Se corrigió el manejo inseguro de nombres de plugins en `<span>pm:enable</span>` para evitar riesgos de inclusión de archivos locales durante la resolución de plugins. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) por @mytharcher
* **[Async task manager]** Se corrigieron errores de consulta de base de datos causados por la falta de `<span>filterByTk</span>` al descargar archivos de tareas asíncronas. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) por @mytharcher
* **[File manager]** Se corrigieron fallos en la vista previa de PDF causados por una carga anormal del módulo de trabajo pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) por @mytharcher
* **[Block: Kanban]** Se corrigió el problema donde abrir bloques de Calendario, Gantt y Kanban en modo no edición persistía inesperadamente acciones emergentes ocultas y enviaba repetidamente solicitudes de eliminación. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) por @jiannx
* **[Action: Export records Pro]** Se mejoró la configuración del modo de procesamiento y el texto de ayuda para v2 Import/Export Pro. por @katherinehhh
* **[Multi-space]** Se corrigió el problema donde los administradores de espacio no podían añadir usuarios de espacio cuando no tenían permiso para el campo de correo electrónico del usuario. por @jiannx
* **[Migration manager]** Se corrigieron posibles fallos al importar archivos de datos de migración grandes. por @2013xile
* **[Template print]** Se rechazaron tipos de archivo de plantilla no compatibles antes de que comience la impresión de la plantilla. por @2013xile

### [v2.2.0-beta.2](https://www.nocobase.com/en/blog/v2.2.0-beta.2)

*Fecha de lanzamiento: 2026-06-13**

### 🎉 Nuevas funciones

- **[AI employees]** Se añadió un formulario de configuración de almacén de vectores externo para bases de conocimiento de IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) por @cgyrock
- **[AI: Knowledge base]** Se añadió un formulario de configuración de almacén de vectores externo para bases de conocimiento de IA. por @cgyrock
- **[Email manager]** Se migró el cliente del administrador de correo electrónico a v2. por @jiannx

### 🚀 Mejoras

- **[cli]**

  - Se optimizaron las comprobaciones de compatibilidad para diferentes formatos de número de versión. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) por @chenos
  - Se añadió soporte para actualizar habilidades a una versión específica. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) por @chenos
  - Se mejoró la redacción de las indicaciones de configuración de inicialización. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) por @chenos
- **[undefined]**

  - Se añadió un escenario de conversación de control de versiones a la página de descripción general del constructor de IA. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) por @Molunerfinn
    Referencia: [Inicio rápido del constructor de IA](https://docs.nocobase.com/en/ai-builder)
  - Se mejoró la documentación de control de versiones con notas sobre el guardado automático de versiones en el constructor de IA. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) por @cgyrock
    Referencia: [Control de versiones](docs/docs/en/ops-management/version-control/index.md)
- **[Workflow]** Se mejoró la experiencia de edición de metadatos de flujo de trabajo al admitir la edición de descripciones en la ventana emergente de detalles y completar automáticamente los metadatos del flujo de trabajo de origen al duplicar flujos de trabajo. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) por @mytharcher
- **[Action: Import records]** Se mejoraron los diálogos de detalle de error de importación y tarea asíncrona para que los mensajes de error largos se puedan ver completamente sin romper el diseño. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) por @katherinehhh
- **[Translation test tool]** Se añadió una página de configuración client-v2 para la herramienta de prueba de traducción. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) por @jiannx
- **[Action: Import records Pro]** Se mejoraron los diálogos de importación para que los mensajes de error largos se puedan ver completamente, y el modo de procesamiento se pueda seleccionar directamente desde el menú de configuración v2. por @katherinehhh

### 🐛 Corrección de errores

- **[client]** Se corrigió el problema donde los campos en subformularios horizontales eran demasiado estrechos para mostrar datos. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) por @zhangzhonghe
- **[client-v2]** Se corrigió el problema donde las páginas v2 podían seguir cargando después de iniciar sesión. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) por @zhangzhonghe
- **[cli]** Se añadió detección de versión de Node.js para el entorno de ejecución nb. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) por @chenos
- **[Action: Import records]** Se cambiaron los archivos de importación cargados al almacenamiento en disco para reducir la presión de memoria durante la importación de grandes volúmenes de datos. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) por @mytharcher
- **[Async task manager]** Se corrigieron IDs de solicitud incorrectos en los registros del trabajador de tareas asíncronas. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) por @2013xile
- **[Workflow]**

  - Se corrigió el manejo de tiempo de espera del flujo de trabajo para que las ejecuciones abortadas y sus tareas pendientes puedan actualizarse atómicamente. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) por @mytharcher
  - Se corrigió el problema donde el campo de última actualización por del flujo de trabajo no se actualizaba después de los cambios en el nodo del flujo de trabajo. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) por @mytharcher
- **[Data source manager]**

  - Se corrigió el cajón de edición de campo en blanco causado por renderizaciones repetidas en la página de campos de configuración de fuente de datos externa v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) por @katherinehhh
  - Se corrigió el problema donde eliminar la categoría de colección actual en el administrador de fuentes de datos v1 podía dejar la pestaña Todas las colecciones vacía. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) por @katherinehhh
- **[Backup manager]** Se corrigió un problema de seguridad donde se podían aceptar nombres de esquema PostgreSQL inseguros durante la restauración de la copia de seguridad. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) por @2013xile
- **[Workflow: SQL node]** Se corrigió el problema donde la migración de variables de plantilla heredadas del flujo de trabajo SQL se omitía para algunos usuarios de versión beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) por @mytharcher
- **[Block: Kanban]** Se corrigió el soporte de URL para Calendario y otras ventanas emergentes. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) por @jiannx
- **[AI employees]**

  - Se corrigió el problema donde los archivos adjuntos pegados en el diálogo del empleado de IA no se podían eliminar. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) por @cgyrock
  - Se corrigió la pérdida de configuración de mensajes en los nodos LLM del flujo de trabajo. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) por @cgyrock
- **[File manager]** Se corrigió la falta de texto de fuente china/CID en algunas vistas previas de PDF después de cambiar a pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) por @mytharcher
- **[API documentation]** Se corrigió el fallo de compilación del archivo de declaración del plugin de documentación de API. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) por @katherinehhh
- **[Action: Import records Pro]** Se evitó analizar archivos grandes en el nodo de solicitud antes de que la importación Pro cree una tarea asíncrona. por @mytharcher
- **[Version control]** Se ajustó la posición de la entrada de acceso directo superior del control de versiones para que aparezca junto al editor de UI en los diseños de administración heredados y v2. por @cgyrock
- **[Workflow: Approval]** Se corrigió el problema donde los datos relacionados no se mostraban en los formularios de aprobación v2. por @zhangzhonghe
