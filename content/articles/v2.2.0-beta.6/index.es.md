---
title: "NocoBase v2.2.0-beta.6: Se añade soporte para diseño móvil"
description: "Nota de la versión v2.2.0-beta.6"
---

### 🎉 Nuevas Funcionalidades

- **[cli]** Soporte para scripts de hook de instalación ([#9824](https://github.com/nocobase/nocobase/pull/9824)) por @chenos
- **[Diseño de UI]** Añadido soporte para diseño móvil ([#9641](https://github.com/nocobase/nocobase/pull/9641)) por @zhangzhonghe
- **[Gestor de copias de seguridad]** Soporte para copia de seguridad y restauración con KingBase como base de datos principal ([#9791](https://github.com/nocobase/nocobase/pull/9791)) por @2013xile
- **[Multi-portal]** Añadido el plugin Multi-Portal por @zhangzhonghe
- **[Gestor de migraciones]** Soporte para migraciones con KingBase como base de datos principal. por @2013xile

### 🚀 Mejoras

- **[client-v2]**

  - Las reglas de validación a nivel de campo se muestran ahora como reglas heredadas de solo lectura en la configuración de validación de campos de la UI. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) por @katherinehhh
  - Añadida opción de valor de anulación para la configuración de valores de campo. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) por @gchust
- **[undefined]** Mejorada la recuperación y documentación de la base de conocimiento de IA. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) por @cgyrock
- **[Motor de flujo]**

  - Se añadió el bloque actual al contexto de usuario por defecto al construir empleados de IA usando la API de Superficie de Flujo. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) por @gchust
  - Abiertos los globales del navegador runjs. ([#9841](https://github.com/nocobase/nocobase/pull/9841)) por @gchust
- **[Workflow]** Estabilizada la prueba de opciones de actualización ([#9773](https://github.com/nocobase/nocobase/pull/9773)) por @mytharcher
- **[Control de acceso]** Alineadas las páginas de configuración de Usuarios y Permisos v2 con el comportamiento de v1, incluyendo totales de paginación, comportamiento del árbol de departamentos, estilos seleccionados y desplazamiento interno del panel de permisos. ([#9810](https://github.com/nocobase/nocobase/pull/9810)) por @jiannx
- **[Gestor de copias de seguridad]** Las tablas cuya `dataCategory` de colección está marcada como `'runtime'` ahora se excluyen automáticamente de las copias de seguridad. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) por @cgyrock
- **[IA: Base de conocimiento]** Mejorada la segmentación de documentos de la base de conocimiento de IA, gestión de segmentos, pruebas de acierto y soporte de nodos de workflow de documentos. por @cgyrock

### 🐛 Corrección de Errores

- **[client-v2]**

  - Corregido que el bloque no se actualizaba tras actualizar la configuración de bloques. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) por @gchust
  - Corregido que los botones de activación de workflow de acción personalizada enviaban el contexto JSON personalizado bajo una propiedad `values` extra o como una cadena serializada. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) por @mytharcher
  - Corregido un problema por el cual configurar el valor de un campo de asociación como valor fijo o valor por defecto no surtía efecto. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) por @gchust
  - Corregido un problema por el cual los flujos de eventos en columnas de subtablas se ejecutaban incorrectamente. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) por @gchust
  - Eliminado `updateAssociationValues` inesperado de los campos de asociación ([#9812](https://github.com/nocobase/nocobase/pull/9812)) por @katherinehhh
  - Corregido un problema por el cual el envío de un formulario mostraba un mensaje incorrecto cuando un subformulario contenía una subtabla. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) por @gchust
- **[ai]**

  - Corregidas resoluciones de dependencias de LangChain incompatibles para plugins de IA. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) por @cgyrock
  - Bloqueado `@langchain/openai` a actualizaciones de nivel de parche para paquetes de IA. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) por @cgyrock
- **[app]** Ignorado `currentScript` no relacionado al inferir la ruta pública del plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) por @chenos
- **[auth]** Los datos de contraseña cifrada ya no se incluyen en las respuestas de estado de inicio de sesión ([#9836](https://github.com/nocobase/nocobase/pull/9836)) por @2013xile
- **[Bloque: Gantt]** Corregido que la configuración de la plantilla del popup de tareas de Gantt no se aplicaba o limpiaba correctamente. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) por @jiannx
- **[Acción: Imprimir]** Corregida la impresión de bloques de detalle v2 para que los bloques de detalle vacíos ya no impriman toda la página. ([#9832](https://github.com/nocobase/nocobase/pull/9832)) por @katherinehhh
- **[Plantillas de UI]** Corregido el contexto por defecto incorrecto para `ctx.openview`. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) por @gchust
- **[Gestor de archivos]** Corregidos errores 404 al subir archivos a campos de URL de adjuntos en fuentes de datos externas ([#9809](https://github.com/nocobase/nocobase/pull/9809)) por @2013xile
- **[Acción: Solicitud personalizada]** Corregido que las acciones de solicitud personalizada V2 mostraban un error adicional cuando la configuración de la solicitud no estaba configurada. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) por @katherinehhh
- **[Workflow]** Corregida la recuperación del despachador de workflow después de errores de despacho inesperados. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) por @mytharcher
- **[Empleados de IA]** Corregidos los disparadores de tareas de acceso directo de empleados de IA para que los adjuntos del contexto de trabajo actual se incluyan al ejecutar una tarea desde el perfil de acceso directo. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) por @cgyrock
- **[Fuente de datos: NocoBase externa]** Proxy de acciones de subida y almacenamiento de archivos de fuente de datos externa de NocoBase mediante la fuente de datos de subida por @2013xile
- **[IA: Base de conocimiento]**

  - Corregidas resoluciones de dependencias de LangChain incompatibles para el plugin de base de conocimiento de IA. por @cgyrock
  - Corregidos fallos poco claros al habilitar el plugin de base de conocimiento de IA sin el plugin de IA disponible. por @cgyrock
- **[Multi-espacio]** Corregido que las solicitudes de recuperación de autenticación eran bloqueadas por cabeceras multi-espacio obsoletas. por @jiannx
- **[Workflow: Subflujo]** Corregidos los subflujos asíncronos para que los workflows padre puedan reanudarse después de un reinicio del worker o la pérdida de mapeo de eventos en memoria. por @mytharcher
- **[Workflow: Aprobación]** Corregido el problema por el cual las aprobaciones relacionadas no se cargan o actualizan correctamente por @zhangzhonghe
- **[Supervisor de app]** Corregido un bloqueo cuando fallan las respuestas del proxy WebSocket remoto por @2013xile
