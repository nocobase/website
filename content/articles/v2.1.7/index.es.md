---
title: "NocoBase v2.1.7: Soporte de copia de seguridad y restauración para KingBase como base de datos principal"
description: "Nota de la versión v2.1.7"
---

### 🎉 Nuevas funciones

- **[Gestor de copias de seguridad]** Soporte para copia de seguridad y restauración de KingBase como base de datos principal ([#9791](https://github.com/nocobase/nocobase/pull/9791)) por @2013xile
- **[Gestor de migraciones]** Soporte para migraciones de KingBase como base de datos principal. por @2013xile

### 🚀 Mejoras

- **[IA: Base de conocimiento]** Mejora en la recuperación y documentación de la base de conocimiento de IA. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) por @cgyrock
- **[cli]** Añadida versión del esquema de configuración de entorno ([#9782](https://github.com/nocobase/nocobase/pull/9782)) por @chenos
- **[Flujo de trabajo]** Estabilizada la prueba de opciones de actualización ([#9773](https://github.com/nocobase/nocobase/pull/9773)) por @mytharcher
- **[Gestor de archivos]** Mejora en las vistas previas de PDF: los archivos PDF de origen cruzado ahora usan el visor nativo del navegador, mientras que los archivos PDF del mismo origen continúan usando PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) por @mytharcher
- **[Gestor de copias de seguridad]** Las tablas cuya `dataCategory` de la colección está marcada como `'runtime'` ahora se excluyen automáticamente de las copias de seguridad. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) por @cgyrock
- **[IA: Base de conocimiento]** Mejora en la segmentación de documentos de la base de conocimiento de IA, gestión de segmentos, pruebas de acierto y soporte de nodos de flujo de trabajo de documentos. por @cgyrock

### 🐛 Corrección de errores

- **[client-v2]**

  - Corregido un problema por el cual el envío de un formulario mostraba un mensaje incorrecto cuando un subformulario contenía una subtabla. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) por @gchust
  - Corregido un problema por el cual los flujos de eventos en las columnas de subtablas se ejecutaban incorrectamente. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) por @gchust
  - Eliminado `updateAssociationValues` inesperado de los campos de asociación ([#9812](https://github.com/nocobase/nocobase/pull/9812)) por @katherinehhh
  - Corregidas las opciones Sí/No sin traducir en los desplegables de casillas de verificación del formulario de filtro v2. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) por @katherinehhh
  - Corregido el problema por el cual la configuración del flujo de eventos no se podía actualizar después de guardar un bloque como plantilla. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) por @gchust
  - Corregida la visualización incorrecta y la configuración de formato cuando los campos de título de asociación de tabla v2 utilizan campos de hora, solo fecha o fecha y hora. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) por @katherinehhh
- **[Flujo de trabajo]** Corregida la recuperación del despachador de flujo de trabajo después de errores de despacho inesperados. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) por @mytharcher
- **[Gestor de archivos]** Corregidos errores 404 al cargar archivos en campos de URL de adjuntos en fuentes de datos externas ([#9809](https://github.com/nocobase/nocobase/pull/9809)) por @2013xile
- **[Acción: Solicitud personalizada]** Corregidas las acciones de solicitud personalizada V2 que mostraban un error innecesario cuando la configuración de la solicitud no estaba configurada. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) por @katherinehhh
- **[Empleados de IA]**

  - Corregido un problema por el cual los empleados de IA no podían completar correctamente los datos de subtablas. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) por @gchust
  - Corregidos los disparadores de tareas de acceso directo de empleados de IA para que los archivos adjuntos del contexto de trabajo actual se incluyan al ejecutar una tarea desde el perfil de acceso directo. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) por @cgyrock
- **[Flujo de trabajo: Evento de acción personalizada]** Corregidos los botones de flujo de trabajo del disparador del panel de acciones v2 que mostraban éxito y enviaban una solicitud cuando no había ningún flujo de trabajo vinculado. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) por @mytharcher
- **[Motor de flujo]** Corregido un problema por el cual los formularios y detalles de registros actuales en ventanas emergentes podían contener datos incorrectos cuando eran construidos por IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) por @gchust
- **[Gestor de tareas asíncronas]** Corregidos errores de descarga de archivos de tareas asíncronas cuando faltaba el id de la tarea en `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) por @mytharcher
- **[Fuente de datos: NocoBase externa]** Proxy de acciones de carga y almacenamiento de archivos de fuente de datos NocoBase externa mediante la fuente de datos de carga por @2013xile
- **[Multi-espacio]** Corregidos errores de permiso cuando los gestores de espacio añaden usuarios sin acceso al campo de correo electrónico del usuario. por @jiannx
- **[Flujo de trabajo: Subflujo]** Corregidos los subflujos asíncronos para que los flujos de trabajo padre puedan reanudarse después de un reinicio del trabajador o la pérdida de mapeo de eventos en memoria. por @mytharcher
- **[Supervisor de aplicación]** Corregido un bloqueo cuando las respuestas del proxy WebSocket remoto fallan por @2013xile
