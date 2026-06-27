---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: Soporte para ordenar campos de columna en tablas, Soporte para redirección automática a la URL de SSO cuando no está autenticado, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.14](https://www.nocobase.com/en/blog/v1.9.14)

*Fecha de lanzamiento: 2025-11-27*

### 🎉 Nuevas funciones

- **[Auth: OIDC]** Soporte para redirección automática a la URL de SSO cuando no está autenticado por @heziqiang

### 🚀 Mejoras

- **[cliente]** Usar triple llave (`{{{` y `}}}`) para variables en el contenido del mensaje, para evitar que Handlebars escape las variables ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher
- **[Campo de colección: Markdown(Vditor)]** ajustar el ancho del contenido a pantalla completa de vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh

### 🐛 Corrección de errores

- **[base de datos]** Corrección: eliminar el procesamiento UTC en la conversión de tiempo para campos solo de hora para evitar cambios inducidos por la zona horaria. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu
- **[cliente]** corregir que el selector remoto no muestra la etiqueta correcta para valores no objeto ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh
- **[Flujo de trabajo]**

  - Corregir el problema por el cual las ejecuciones preparadas no se enviaban a la cola antes de detenerse ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher
  - Corregir el problema por el cual el enlace de la tarea llevaba a una página de error ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher
  - Corregir el problema por el cual algunos menús de tareas del flujo de trabajo no se mostraban ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher
  - Corregir que el recuento de tareas no se mostraba debido al mal uso del proveedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Corregir el problema por el cual el recuento de tareas manuales no era correcto ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher
- **[Visualización de datos]**

  - La configuración de campos de filtro para colecciones de fuentes de datos externas no muestra propiedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile
  - Resolver el problema por el cual la consulta del gráfico no soportaba el ámbito de datos ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile
- **[Gestor de fuentes de datos]** Corregido el fallo en la actualización de la contraseña de la fuente de datos cuando se cambia la contraseña de la base de datos ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock
- **[Acción: Importar registros]** Corregido el problema al importar datos en una tabla de árbol ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock

### [v1.9.13](https://www.nocobase.com/en/blog/v1.9.13)

*Fecha de lanzamiento: 2025-11-25*

### 🐛 Corrección de errores

- **[cliente]** Corregir problemas de enrutamiento al usar un Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) por @zhangzhonghe

### [v1.9.12](https://www.nocobase.com/en/blog/v1.9.12)

*Fecha de lanzamiento: 2025-11-24*

### 🚀 Mejoras

- **[cliente]** Agregar estado de carga para los botones de acción de actualizar registro y eliminar registro, evitando solicitudes duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher
- **[Gestor de tareas asíncronas]** Mensajes de error mejorados para tareas asíncronas, proporcionando a los usuarios razones específicas para los fallos de las tareas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher
- **[Acción: Importar registros Pro]** Mensajes de error mejorados para tareas asíncronas, proporcionando a los usuarios razones específicas para los fallos de las tareas por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir la selección de variables en AssigneeSelect, limitar la selección solo a PK o FK de la colección de usuarios por @mytharcher
  - Reducir las asociaciones a cargar en la ventana emergente de aprobación, para proporcionar un mejor rendimiento por @mytharcher
  - Hacer que la carga útil de la ejecución manual (o activada por un nodo de subflujo) sea compatible con el registro o la clave primaria. Evitar problemas de consistencia en el contexto del activador. por @mytharcher

### 🐛 Corrección de errores

- **[Gestor de tareas asíncronas]** Agregar regla de migración para la colección `asyncTasks`, evitando que los registros de tareas asíncronas sean migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir archivo de idioma por @mytharcher

### [v1.9.11](https://www.nocobase.com/en/blog/v1.9.11)

*Fecha de lanzamiento: 2025-11-24*

### 🐛 Corrección de errores

- **[cliente]** Corregir que la interfaz del campo muestra muchos-a-uno en lugar de uno-a-uno para belongsTo en la configuración de fuente de datos externa ([#7936](https://github.com/nocobase/nocobase/pull/7936)) por @cgyrock
- **[Flujo de trabajo]** Corregido el problema por el cual la actualización del recuento de tareas reiniciaba involuntariamente el estado de los formularios que se estaban completando ([#7937](https://github.com/nocobase/nocobase/pull/7937)) por @mytharcher
- **[Campo de colección: Muchos a muchos (array)]** Corregir problemas del campo M2M (array) al crear/actualizar datos relacionados ([#7926](https://github.com/nocobase/nocobase/pull/7926)) por @cgyrock

### [v1.9.10](https://www.nocobase.com/en/blog/v1.9.10)

*Fecha de lanzamiento: 2025-11-20*

### 🚀 Mejoras

- **[Control de acceso]** Reducir los permisos predeterminados para el rol de miembro ([#7921](https://github.com/nocobase/nocobase/pull/7921)) por @2013xile
- **[Visualización de datos]** Se agregó soporte para el idioma ruso en las interfaces del plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) por @sembaev-a-a
- **[Flujo de trabajo: Webhook]** Agregar icono para el tipo de nodo de respuesta por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Corregir error: No se puede resolver 'antd-mobile' y No se puede resolver 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) por @zhangzhonghe
- **[Control de acceso]** Soporte para restricciones de ámbito de datos en operaciones de asociación. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) por @2013xile
- **[Fuente de datos: Principal]** Corregir el problema por el cual un campo recién agregado de uno-a-muchos no se puede seleccionar como clave foránea antes de reiniciar la aplicación. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) por @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.17](https://www.nocobase.com/en/blog/v1.9.0-beta.17)

*Fecha de lanzamiento: 2025-11-21*

### 🚀 Mejoras

- **[base de datos]** Agregar la opción `multipleStatements` a la instancia de conexión MariaDB para soportar la invocación de múltiples sentencias en una sola consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher
- **[Control de acceso]**

  - Reducir los permisos predeterminados para el rol de miembro ([#7921](https://github.com/nocobase/nocobase/pull/7921)) por @2013xile
  - Optimizar la lógica de control de permisos para operaciones de campos de asociación ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile
- **[Visualización de datos]** Se agregó soporte para el idioma ruso en las interfaces del plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) por @sembaev-a-a
- **[Flujo de trabajo]** Soporte para que el bloque de datos en el flujo de trabajo use el menú de configuración de detalles consolidados ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher
- **[Flujo de trabajo: Webhook]** Agregar icono para el tipo de nodo de respuesta por @mytharcher
- **[Flujo de trabajo: JavaScript]** Corregir una vulnerabilidad de seguridad causada por la transmisión de funciones de nivel superior al entorno de ejecución, evitando la explotación que podría otorgar acceso al contexto de ejecución superior por @mytharcher
- **[Auth: OIDC]** Aumentar el tiempo de espera de la solicitud por @2013xile
- **[Flujo de trabajo: Aprobación]** Agregar notificación para el asignado delegado y agregado por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir que la interfaz del campo muestra muchos-a-uno en lugar de uno-a-uno para belongsTo en la configuración de fuente de datos externa ([#7936](https://github.com/nocobase/nocobase/pull/7936)) por @cgyrock
  - Corregir error: No se puede resolver 'antd-mobile' y No se puede resolver 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) por @zhangzhonghe
  - Corregir el problema por el cual las plantillas duplicadas no aparecen, causado por arrastrar y luego eliminar una plantilla referenciada ([#7847](https://github.com/nocobase/nocobase/pull/7847)) por @zhangzhonghe
  - Corregir el problema por el cual la regla de vinculación para el formulario de aprobación no funciona ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe
  - corregir el problema de página siguiente vacía en el bloque de detalle de paginación simple ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh
  - Corregir "Se excedió el tamaño máximo de la pila de llamadas" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe
- **[servidor]**

  - Corregir un problema en el modo de división de servicios donde los mensajes de cola no suscritos no se podían publicar ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher
  - Aislar el canal Pub-Sub por nombre de aplicación ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher
  - Corregir un problema donde, después de habilitar el modo de división de servicios, los procesos trabajadores que enviaban mensajes a través de la cola de mensajes causaban errores ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher
- **[utilidades]** Habilitar la fusión de objetos en la estrategia de intersección ([#7840](https://github.com/nocobase/nocobase/pull/7840)) por @chenos
- **[base de datos]** Detección incorrecta del índice de campo cuando los nombres de campo usan el estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile
- **[Campo de colección: Muchos a muchos (array)]** Corregir problemas del campo M2M (array) al crear/actualizar datos relacionados ([#7926](https://github.com/nocobase/nocobase/pull/7926)) por @cgyrock
- **[Fuente de datos: Principal]** Corregir el problema por el cual un campo recién agregado de uno-a-muchos no se puede seleccionar como clave foránea antes de reiniciar la aplicación. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) por @cgyrock
- **[Flujo de trabajo]**

  - Corregido el problema por el cual la actualización del recuento de tareas reiniciaba involuntariamente el estado de los formularios que se estaban completando ([#7937](https://github.com/nocobase/nocobase/pull/7937)) por @mytharcher
  - Usar eventQueue en lugar del backgroundJob compartido para evitar que la cola compartida se consuma incorrectamente en el modo de división de servicios ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher
  - Corregir el problema por el cual el plugin de flujo de trabajo aún consume el evento de la cola cuando no está en modo trabajador bajo el modo de división de servicios ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher
  - Corregir el error causado por escuchar eventos de fuentes de datos externas inexistentes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher
  - Corregir un problema donde, en el modo de división de servicios, la ejecución manual de un flujo de trabajo que contiene un nodo de interrupción se quedaba atascada en un estado pendiente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) por @mytharcher
  - Agregar `workflowId` como dato de identidad para los registros del flujo de trabajo ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher
  - Resuelto un problema donde el despachador de flujo de trabajo en modo clúster no lograba identificar correctamente los estados inactivos, lo que podría provocar un consumo innecesario de eventos de cola antes de que el plugin estuviera listo ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher
- **[Control de acceso]**

  - Soporte para restricciones de ámbito de datos en operaciones de asociación. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) por @2013xile
  - Problema de que los fragmentos de operación de asociación no surten efecto ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile
- **[Flujo de trabajo: Nodo manual]** Corregir el espacio de nombres del idioma local que se debe usar, para mostrar el contenido correcto de la traducción ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher
- **[Usuarios]** Actualización incorrecta del índice cuando los nombres de campo usan el estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile
- **[Móvil (obsoleto)]** Corregir el problema por el cual la ventana emergente de valor predeterminado del campo de fecha en móvil no puede seleccionar una fecha ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe
- **[Flujo de trabajo: Variable personalizada]** Corregir error lanzado cuando no hay configuración en el nodo de variable por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el error causado por escuchar eventos de fuentes de datos externas inexistentes por @mytharcher
- **[Impresión de plantilla]** analizar las variables en el filtro por @jiannx
- **[Visualización de datos: ECharts]** Corregir el problema por el cual la configuración del tipo de Etiqueta en las opciones de Echarts no surte efecto. por @heziqiang
- **[Flujo de trabajo: Aprobación]**

  - Corregir el formato de fecha en las tarjetas de la lista de aprobación en el centro de tareas pendientes para mostrar la fecha y hora completas por @mytharcher
  - Corregir el problema por el cual el tamaño de página del canal de notificación de carga no es lo suficientemente grande, y causa que la lista no se cargue completamente por @mytharcher
  - Corregir un problema de rendimiento que ocurría al consultar la lista de registros de aprobación durante el envío de la aprobación por @mytharcher
  - Corregir un problema donde los campos de la colección principal no se excluían al recargar datos de asociación por @mytharcher
  - Corregir un problema donde las condiciones de carrera que ocurren durante el procesamiento de aprobación concurrente por múltiples aprobadores podían causar que un nodo de flujo de trabajo se ejecutara más de una vez por @mytharcher
  - Ya no se admite la creación de nodos de aprobación en ramas paralelas para evitar problemas causados por el estado del proceso por @mytharcher
  - Corregir el problema por el cual la regla de vinculación para el formulario de aprobación no funciona por @zhangzhonghe
  - Corregir error lanzado cuando hay un flujo de trabajo de aprobación duplicado por @mytharcher
- **[Gestor de correo electrónico]**

  - agregar registros de sincronización por @jiannx
  - sincronizar el estado de lectura del correo de Microsoft sin marca de tiempo por @jiannx
  - colección mailMessages agregar índices por @jiannx
  - agregar migración para índices por @jiannx
  - Corregir el problema de imágenes reservadas y sincronización en outlook por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.47](https://www.nocobase.com/en/blog/v2.0.0-alpha.47)

*Fecha de lanzamiento: 2025-11-26*

### 🚀 Mejoras

- **[cliente]**

  - Soporte para inicializar campos de filtro seleccionados en la consulta del gráfico ([#7933](https://github.com/nocobase/nocobase/pull/7933)) por @heziqiang
  - Usar triple llave (`{{{` y `}}}`) para variables en el contenido del mensaje, para evitar que Handlebars escape las variables ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher
  - Agregar estado de carga para los botones de acción de actualizar registro y eliminar registro, evitando solicitudes duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher
- **[Campo de colección: Markdown(Vditor)]** ajustar el ancho del contenido a pantalla completa de vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]**

  - Corregido un problema donde abrir el bloque de detalle en la ventana emergente para campos de relación sin ID causaba un error. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) por @gchust
  - Corregido un problema donde los datos de asociación no se cargaban correctamente en la ventana emergente para campos de relación sin ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) por @gchust
  - Corregir problemas de enrutamiento al usar un Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) por @zhangzhonghe
  - corregir problema con la configuración de precisión no válida para el formato de campo numérico ([#7967](https://github.com/nocobase/nocobase/pull/7967)) por @katherinehhh
  - Corregir el tipeo incorrecto en la nueva página 2.0 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) por @zhangzhonghe
  - corregir el problema donde el valor del filtro no se limpia al hacer clic en el botón Restablecer ([#7966](https://github.com/nocobase/nocobase/pull/7966)) por @zhangzhonghe
- **[Flujo de trabajo]** Corregir que el recuento de tareas no se mostraba debido al mal uso del proveedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher
- **[Visualización de datos]** Resolver el problema por el cual la consulta del gráfico no soportaba el ámbito de datos ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile
- **[Bloque: Referencia]** Corregido un problema donde citar un bloque eliminaba el bloque citado de la página original. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) por @gchust
- **[Empleados de IA]** Corregir problema cuando la IA genera salida SQL ([#7956](https://github.com/nocobase/nocobase/pull/7956)) por @heziqiang
- **[Impresión de plantilla]** corregir fallo al agregar plantilla en la operación de impresión de plantilla de registro por @katherinehhh

### [v2.0.0-alpha.46](https://www.nocobase.com/en/blog/v2.0.0-alpha.46)

*Fecha de lanzamiento: 2025-11-24*

### 🚀 Mejoras

- **[motor de flujo]** Soporte para cambiar dinámicamente la clase del modelo de flujo ([#7952](https://github.com/nocobase/nocobase/pull/7952)) por @gchust
- **[Empleados de IA]** El plugin de empleados de IA agrega un hook de actualización ([#7951](https://github.com/nocobase/nocobase/pull/7951)) por @heziqiang
- **[Gestor de tareas asíncronas]** Mensajes de error mejorados para tareas asíncronas, proporcionando a los usuarios razones específicas para los fallos de las tareas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Hacer que la carga útil de la ejecución manual (o activada por un nodo de subflujo) sea compatible con el registro o la clave primaria. Evitar problemas de consistencia en el contexto del activador. por @mytharcher
  - Reducir las asociaciones a cargar en la ventana emergente de aprobación, para proporcionar un mejor rendimiento por @mytharcher
  - Corregir la selección de variables en AssigneeSelect, limitar la selección solo a PK o FK de la colección de usuarios por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** corregir el ajuste automático de línea de los campos de texto en el bloque de detalle cuando el contenido excede el ancho ([#7955](https://github.com/nocobase/nocobase/pull/7955)) por @katherinehhh
- **[Gestor de tareas asíncronas]** Agregar regla de migración para la colección `asyncTasks`, evitando que los registros de tareas asíncronas sean migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher
- **[Gestor de archivos]** corregir la carga de archivos al almacenamiento especificado en lugar del almacenamiento predeterminado ([#7947](https://github.com/nocobase/nocobase/pull/7947)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Corregir archivo de idioma por @mytharcher

### [v2.0.0-alpha.45](https://www.nocobase.com/en/blog/v2.0.0-alpha.45)

*Fecha de lanzamiento: 2025-11-21*

### 🎉 Nuevas funciones

- **[cliente]** soporte para ordenar campos de columna en tabla ([#7900](https://github.com/nocobase/nocobase/pull/7900)) por @katherinehhh
- **[Flujo de trabajo]** Agregar nodo "Multi-condiciones", proporciona el control de flujo como `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** corregir error lanzado al limpiar el valor en cascada multinivel ([#7943](https://github.com/nocobase/nocobase/pull/7943)) por @katherinehhh
- **[Visualización de datos]** Corregir problema donde el bloque de gráfico no se actualizaba después de guardar ([#7920](https://github.com/nocobase/nocobase/pull/7920)) por @heziqiang
- **[Impresión de plantilla]** corregir error de acción de impresión de plantilla en el bloque de detalle por @katherinehhh

### [v2.0.0-alpha.44](https://www.nocobase.com/en/blog/v2.0.0-alpha.44)

*Fecha de lanzamiento: 2025-11-21*

### 🎉 Nuevas funciones

- **[cliente]**

  - agregar soporte de creación rápida al selector de campos de asociación ([#7887](https://github.com/nocobase/nocobase/pull/7887)) por @katherinehhh
  - soporte de selector en cascada para el campo de asociación de colección de árbol ([#7846](https://github.com/nocobase/nocobase/pull/7846)) por @katherinehhh
- **[Telemetría]** Agregar nuevo plugin: Telemetry, un plugin de telemetría basado en OpenTelemetry que proporciona métricas de CPU, memoria y solicitudes HTTP con soporte de exportación HTTP por @2013xile

### 🚀 Mejoras

- **[telemetría]** Soporte para controlar qué métricas se exportan ([#7938](https://github.com/nocobase/nocobase/pull/7938)) por @2013xile
- **[Gestor de tareas asíncronas]** Las tareas asíncronas para subaplicaciones deben iniciar solo las subaplicaciones objetivo en los Trabajadores ([#7927](https://github.com/nocobase/nocobase/pull/7927)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]**

  - eliminar la acción de tabla de árbol de bloques de colección que no son de árbol ([#7931](https://github.com/nocobase/nocobase/pull/7931)) por @katherinehhh
  - Corregir que la interfaz del campo muestra muchos-a-uno en lugar de uno-a-uno para belongsTo en la configuración de fuente de datos externa ([#7936](https://github.com/nocobase/nocobase/pull/7936)) por @cgyrock
- **[motor de flujo]** Corregir el problema de visualización desalineada del icono de la barra de herramientas en el botón del bloque de detalles ([#7929](https://github.com/nocobase/nocobase/pull/7929)) por @zhangzhonghe
- **[Flujo de trabajo]** Corregido el problema por el cual la actualización del recuento de tareas reiniciaba involuntariamente el estado de los formularios que se estaban completando ([#7937](https://github.com/nocobase/nocobase/pull/7937)) por @mytharcher
- **[Campo de colección: Muchos a muchos (array)]** Corregir problemas del campo M2M (array) al crear/actualizar datos relacionados ([#7926](https://github.com/nocobase/nocobase/pull/7926)) por @cgyrock
- **[Acción: Importar registros Pro]** corregir problema donde la modificación del cargador de las opciones de importación no tiene efecto por @katherinehhh

### [v2.0.0-alpha.43](https://www.nocobase.com/en/blog/v2.0.0-alpha.43)

*Fecha de lanzamiento: 2025-11-20*

### 🚀 Mejoras

- **[Visualización de datos]** Se agregó soporte para el idioma ruso en las interfaces del plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) por @sembaev-a-a
- **[Control de acceso]** Reducir los permisos predeterminados para el rol de miembro ([#7921](https://github.com/nocobase/nocobase/pull/7921)) por @2013xile
- **[Flujo de trabajo: Webhook]** Agregar icono para el tipo de nodo de respuesta por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Corregir error: No se puede resolver 'antd-mobile' y No se puede resolver 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) por @zhangzhonghe
- **[motor de flujo]** Corregido el problema donde abrir el formulario de edición rápida del bloque de tabla causaba un error. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) por @gchust
- **[Motor de flujo]** Asegurar que las variables de registro siempre devuelvan registros completos cuando se usan junto con sus campos individuales. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) por @gchust
- **[Fuente de datos: Principal]** Corregir el problema por el cual un campo recién agregado de uno-a-muchos no se puede seleccionar como clave foránea antes de reiniciar la aplicación. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) por @cgyrock
- **[Control de acceso]** Soporte para restricciones de ámbito de datos en operaciones de asociación. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) por @2013xile
