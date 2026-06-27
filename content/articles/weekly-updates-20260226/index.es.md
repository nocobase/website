---
title: "Actualizaciones semanales｜Complementos comerciales de código abierto y actualización de licencia de AGPL-3.0 a Apache-2.0"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 13 al 26 de febrero de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.5](https://www.nocobase.com/en/blog/v2.0.5)

*Fecha de lanzamiento: 2026-02-26*

### 🐛 Corrección de errores

- **[cliente]** En móvil, cerrar el menú primero y luego realizar el salto de página ([#8699](https://github.com/nocobase/nocobase/pull/8699)) por @zhangzhonghe
- **[IA LLM: GigaChat]** Se corrigió el plugin GigaChat que no funcionaba en la versión 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) por @cgyrock
- **[Empleados de IA]**

  - Unificar la entrada de archivos para las APIs de chatGPT usando ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) por @cgyrock
  - Corregir error del agente de IA cuando el usuario envía un nuevo mensaje sin confirmar la ejecución de la herramienta ([#8697](https://github.com/nocobase/nocobase/pull/8697)) por @cgyrock
- **[IA: Base de conocimiento]** Se corrigió el error de inicio del plugin de base de conocimiento de IA. por @cgyrock
- **[Gestor de correo electrónico]** Error de renderizado de imagen por @jiannx

### [v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

*Fecha de lanzamiento: 2026-02-25*

### 🎉 Nuevas funciones

- **[sin definir]**

  - Añadir un plugin experimental "Bloque de referencia", que permite reutilizar bloques existentes mediante referencia o copia. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) por @gchust
  - Borradores de formulario por @chenos
- **[acl]** Publicar plugins comerciales como código abierto y actualizar la licencia de AGPL-3.0 a Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) por @chenos
- **[cliente]**

  - Soporte para configurar títulos de pestañas del navegador para páginas, pestañas de página, ventanas emergentes y pestañas de ventanas emergentes ([#8590](https://github.com/nocobase/nocobase/pull/8590)) por @zhangzhonghe
  - Soporte para configurar campos del campo de colección de asociación en el bloque de formulario ([#8578](https://github.com/nocobase/nocobase/pull/8578)) por @katherinehhh
  - Soporte para configurar el modo de carga de datos ([#8551](https://github.com/nocobase/nocobase/pull/8551)) por @zhangzhonghe
  - Añadir componente de campo de subtabla (edición emergente) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) por @katherinehhh
  - Al crear una colección, se puede cambiar el tipo de campo de id preestablecido ([#8129](https://github.com/nocobase/nocobase/pull/8129)) por @cgyrock
  - Añadir soporte para configuraciones de añadir/seleccionar/desasociar en subformulario de muchos-a-muchos ([#8099](https://github.com/nocobase/nocobase/pull/8099)) por @katherinehhh
  - Soporte para personalizar estilos globales en el editor de temas ([#7960](https://github.com/nocobase/nocobase/pull/7960)) por @ljmiaoo
  - Soporte para establecer regla de ordenación predeterminada en el bloque de detalle ([#8070](https://github.com/nocobase/nocobase/pull/8070)) por @katherinehhh
  - Soporte para establecer tipo de datos para el campo Número (opciones: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) por @chenos
  - Soporte para ordenación de campos de columna en tabla ([#7900](https://github.com/nocobase/nocobase/pull/7900)) por @katherinehhh
  - Añadir soporte de creación rápida al selector de campo de asociación ([#7887](https://github.com/nocobase/nocobase/pull/7887)) por @katherinehhh
  - Soporte para selector en cascada para campo de asociación de colección de árbol ([#7846](https://github.com/nocobase/nocobase/pull/7846)) por @katherinehhh
  - Soporte para arrastrar acciones de columna de tabla ([#7842](https://github.com/nocobase/nocobase/pull/7842)) por @zhangzhonghe
  - Añadir soporte de paginación a la subtabla ([#7754](https://github.com/nocobase/nocobase/pull/7754)) por @katherinehhh
  - Flujo de eventos: Se introdujeron nuevas acciones predefinidas para mejorar las opciones de personalización para el manejo de eventos, permitiendo a los usuarios optimizar flujos de trabajo y mejorar la eficiencia ([#7672](https://github.com/nocobase/nocobase/pull/7672)) por @zhangzhonghe
  - Añadir bloque de markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) por @katherinehhh
  - Soporte para establecer reglas de enlace para subformularios ([#7640](https://github.com/nocobase/nocobase/pull/7640)) por @zhangzhonghe
  - Se añadió soporte para oyentes de eventos de clic en filas de tabla, permitiendo a los usuarios ejecutar acciones específicas cuando se hace clic en una fila de la tabla ([#7622](https://github.com/nocobase/nocobase/pull/7622)) por @zhangzhonghe
  - Añadir soporte para variables personalizadas ([#7585](https://github.com/nocobase/nocobase/pull/7585)) por @zhangzhonghe
  - Añadir variable "Tipo de dispositivo actual" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) por @zhangzhonghe
- **[motor-de-flujo]** soporte env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) por @chenos
- **[servidor]** Refactorizar el supervisor de aplicaciones para soportar la gestión de múltiples aplicaciones en diferentes escenarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) por @2013xile
- **[prueba]** añadir control de concurrencia a nivel de proceso para el gestor de tareas base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) por @cgyrock
- **[Acción: Edición por lotes]** edición masiva 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) por @jiannx
- **[Bloque: GridCard]**

  - soporte para altura de bloque configurable ([#8583](https://github.com/nocobase/nocobase/pull/8583)) por @katherinehhh
  - Añadir bloque de tarjeta de cuadrícula 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) por @katherinehhh
- **[Acción: Duplicar registro]** añadir acción de duplicado 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) por @katherinehhh
-


Debido a limitaciones de espacio, consulte el enlace a continuación para las notas de la versión completa.

[https://www.nocobase.com/en/blog/v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

### [v1.9.48](https://www.nocobase.com/en/blog/v1.9.48)

*Fecha de lanzamiento: 2026-02-24*

### 🚀 Mejoras

- **[Control de acceso]** Proporcionar API sanitize para filtrar valores de asociación en la acción ([#8601](https://github.com/nocobase/nocobase/pull/8601)) por @2013xile

### 🐛 Corrección de errores

- **[Flujo de trabajo: Aprobación]** Sanitizar valores de asociación en acciones de aprobación, para evitar cualquier manipulación de datos más allá del permiso por @mytharcher

### [v2.0.2](https://www.nocobase.com/en/blog/v2.0.2])

*Fecha de lanzamiento: 2026-02-22*

### 🐛 Corrección de errores

- **[Calendario]** Corregir problemas de localización del calendario y formato de fecha ([#8498](https://github.com/nocobase/nocobase/pull/8498)) por @sembaev-a-a

### [v2.0.1](https://www.nocobase.com/en/blog/v2.0.1)

*Fecha de lanzamiento: 2026-02-16*

### 🐛 Corrección de errores

- **[Empleados de IA]** Corregir OOM del navegador al usar empleado de IA ([#8653](https://github.com/nocobase/nocobase/pull/8653)) por @mytharcher

### [v1.9.47](https://www.nocobase.com/en/blog/v1.9.47)

*Fecha de lanzamiento: 2026-02-13*

### 🐛 Corrección de errores

- **[cliente]** Corregir problema donde el campo de archivo adjunto de asociación limpiado no se guarda después de enviar en el formulario de edición ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh
- **[utilidades]** Corregir problema de seguridad del motor evaluador de `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir el problema donde los datos de aprobación no se muestran en la ventana emergente de detalle del registro si el modo de flujo de trabajo está configurado como "Antes de guardar" por @mytharcher


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.2](https://www.nocobase.com/en/blog/v2.1.0-beta.2)

*Fecha de lanzamiento: 2026-02-22*

### 🐛 Corrección de errores

- **[Calendario]** Corregir problemas de localización del calendario y formato de fecha ([#8498](https://github.com/nocobase/nocobase/pull/8498)) por @sembaev-a-a
- **[Empleados de IA]** Corregir OOM del navegador al usar empleado de IA ([#8653](https://github.com/nocobase/nocobase/pull/8653)) por @mytharcher

### [v2.1.0-beta.1](https://www.nocobase.com/en/blog/v2.1.0-beta.1)

*Fecha de lanzamiento: 2026-02-14*

### 🎉 Nuevas funciones

- **[servidor]** Refactorizar el supervisor de aplicaciones para soportar la gestión de múltiples aplicaciones en diferentes escenarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) por @2013xile

### 🚀 Mejoras

- **[cliente]**
  - Mejorar la interfaz de usuario de asignación de campos de fecha/hora para soportar la selección de fechas/horas relativas. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) por @gchust
  - Soporte para especificar el campo de título para campos de asociación al asignar un campo. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) por @gchust

### 🐛 Corrección de errores

- **[motor-de-flujo]**

  - Corregir un problema donde el submenú del campo de filtro no se podía expandir cuando había una palabra clave de búsqueda presente. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) por @gchust
  - corregir la acción de eliminación de columna que no funciona en la edición de subtabla emergente cuando se configura createModelOptions ([#8560](https://github.com/nocobase/nocobase/pull/8560)) por @katherinehhh
- **[cliente]**

  - Corregir un problema donde asignar un solo registro a un campo de relación muchos-a-muchos producía resultados incorrectos. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) por @gchust
  - analizar fecha usando el selector de fecha y añadir validación de fortaleza de contraseña, etc ([#8647](https://github.com/nocobase/nocobase/pull/8647)) por @jiannx
  - Corregir el problema de espaciado causado por acciones enlazadas ocultas en la columna de acción de la tabla ([#8646](https://github.com/nocobase/nocobase/pull/8646)) por @zhangzhonghe
  - Corregir el problema donde `Action.Modal` no se podía cerrar después de alguna interacción ([#8642](https://github.com/nocobase/nocobase/pull/8642)) por @mytharcher
  - corregir error de sintaxis de resolución cuando el elemento markdown renderiza Liquid no válido ([#8637](https://github.com/nocobase/nocobase/pull/8637)) por @katherinehhh
  - Corregir solicitudes de análisis innecesarias del backend para propiedades de campo de muchos-a-muchos en el bloque de formulario. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) por @gchust
  - corregir formato de número faltante para campos de fórmula numérica y configuraciones de formato de fecha para campos de fórmula de fecha ([#8625](https://github.com/nocobase/nocobase/pull/8625)) por @katherinehhh
  - corregir renderizado incompleto del borde superior en el primer elemento del formulario ([#8623](https://github.com/nocobase/nocobase/pull/8623)) por @katherinehhh
  - corrección: ocultar "Habilitar tabla de árbol" y "Expandir todas las filas por defecto" para colecciones que no son de árbol ([#8566](https://github.com/nocobase/nocobase/pull/8566)) por @katherinehhh
- **[utilidades]** Corregir problema de seguridad del motor evaluador de `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher
- **[Empleados de IA]**

  - Corrige un problema donde los enlaces de citas de búsquedas web de IA no se mostraban en el cuadro de chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) por @cgyrock
  - corregir error de parámetros de la API de openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) por @cgyrock
- **[Impresión de plantilla]** corregir campos con la misma clave que provocan errores de renderizado por @jiannx
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema donde se lanzaba un error al aprobar un registro eliminado por @mytharcher
  - Corregir el problema donde los datos de aprobación no se muestran en la ventana emergente de detalle del registro si el modo de flujo de trabajo está configurado como "Antes de guardar" por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.6](https://www.nocobase.com/en/blog/v2.1.0-alpha.6)

*Fecha de lanzamiento: 2026-02-25*

### 🎉 Nuevas funciones

- **[acl]** Publicar plugins comerciales como código abierto y actualizar la licencia de AGPL-3.0 a Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) por @chenos

### 🚀 Mejoras

- **[sin definir]** Actualizar documentos de empleados de IA ([#8690](https://github.com/nocobase/nocobase/pull/8690)) por @heziqiang

### 🐛 Corrección de errores

- **[cliente]**

  - Unificar el comportamiento de paginación móvil para tabla y tarjeta de cuadrícula ([#8691](https://github.com/nocobase/nocobase/pull/8691)) por @zhangzhonghe
  - filtro de bloque de gráfico no funciona ([#8671](https://github.com/nocobase/nocobase/pull/8671)) por @chenos
- **[Empleados de IA]** La API aiTools:list devuelve 403 ([#8672](https://github.com/nocobase/nocobase/pull/8672)) por @chenos
- **[Localización]** mejorar el manejo de claves i18n faltantes ([#8673](https://github.com/nocobase/nocobase/pull/8673)) por @chenos

### [v2.1.0-alpha.3](https://www.nocobase.com/en/blog/v2.1.0-alpha.3)

*Fecha de lanzamiento: 2026-02-16*

### 🐛 Corrección de errores

- **[Empleados de IA]** Corregir OOM del navegador al usar empleado de IA ([#8653](https://github.com/nocobase/nocobase/pull/8653)) por @mytharcher

### [v2.1.0-alpha.2](https://www.nocobase.com/en/blog/v2.1.0-alpha.2)

*Fecha de lanzamiento: 2026-02-15*

### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Añadir control ACL para APIs de aprobación por @mytharcher
- **[Autenticación: DingTalk]** Permite vincular usuario con `unionId` por @2013xile

### 🚀 Mejoras

- **[IA: Base de conocimiento]** Se optimizó la salida de compilación para reducir el tamaño del paquete de plugin-ai-knowledge-base. por @cgyrock
- **[Multi-espacio]** control de permisos multi-espacio accede a acl por @jiannx
- **[Acción: Exportar registros Pro]** Mejorar el ámbito de datos de la acción de exportación basado en registros seleccionados o filtros de recurso por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Eliminar soporte para campos JS por @zhangzhonghe
  - Simplificar parámetros en la consulta y mejorar el rendimiento por @mytharcher
  - Implementar control de acceso para APIs para prevenir operaciones de datos no autorizadas por @mytharcher
  - Añadir lógica de reparación para audiencias sincronizadas después de la migración por @mytharcher
- **[Autenticación: DingTalk]** Usar `userid` como clave predeterminada para la asociación de usuarios, manteniendo la compatibilidad con autenticadores existentes que dependen del móvil por @2013xile

### 🐛 Corrección de errores

- **[Multi-espacio]**

  - añadir script de migración para eliminar x-ready-pretty en el campo de espacio por @jiannx
  - Espacio relacionado al añadir datos asociados por @jiannx
  - El color del selector de espacio sigue el tema por @jiannx
  - eliminar el atributo read-pretty para el campo de espacio por @jiannx
- **[Componente de campo: máscara]** Corregir un problema donde la ventana emergente de configuración del campo de máscara no podía cargar todos los roles de usuario correctamente. por @gchust
- **[Acción: Importar registros Pro]**

  - Corregir el problema donde el flujo de trabajo activado por la importación asíncrona se retrasaba en ejecutarse por @mytharcher
  - Corregir números de conteo en el resultado de importación y traducción de mensajes por @mytharcher
- **[IA: Base de conocimiento]** Corregir el problema donde el sistema no puede iniciar después de la compilación por @cgyrock
- **[Fuente de datos: API REST]** Añadir tolerancia a fallos para el contexto de solicitud, para evitar errores cuando el método no está en el contexto por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el problema donde los parámetros y la carga útil son incorrectos al activar un flujo de trabajo personalizado por @mytharcher
- **[Acción: Exportar registros Pro]** Corregir error cuando las subaplicaciones ejecutan tareas de importación/exportación asíncronas mientras la aplicación principal no tiene habilitado el plugin de importación/exportación pro por @cgyrock
- **[Flujo de trabajo: Webhook]**

  - Corregir el problema donde se lanzaba un error 404 al publicar en la URL del webhook en una subaplicación por @mytharcher
  - Corregir el problema donde faltan datos del cuerpo cuando el análisis del cuerpo no está configurado por @mytharcher
- **[Flujo de trabajo: Subflujo]** Corregir la ruta del enlace del flujo de trabajo por @mytharcher
- **[Impresión de plantilla]**

  - corregir problema de visualización de lista de campos en la configuración de acción de impresión de plantilla por @katherinehhh
  - corregir campos con la misma clave que provocan errores de renderizado por @jiannx
  - Corregir problema de ventana emergente de configuración de plantilla oscurecida por @zhangzhonghe
  - eliminar botones de pie de página de la configuración de plantilla de impresión por @katherinehhh
  - Se corrigió la lógica de permisos incorrecta del botón de impresión cuando los roles se unificaban. por @jiannx
  - soporte para campo de espacio por @jiannx
  - mostrar campos de espacio en la versión 2.0 por @jiannx
- **[Almacenamiento de archivos: S3(Pro)]** Corregir el problema donde el modo de cambio de nombre de archivo no funciona por @mytharcher
- **[Visualización de datos: ECharts]** Corregir error ortográfico de ECharts por @heziqiang
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema donde se lanzaba un error al aprobar un registro eliminado por @mytharcher
  - Corregir error lanzado al ejecutar en modo antes de guardar por @mytharcher
  - Corregir el problema donde los datos de aprobación no se muestran en la ventana emergente de detalle del registro si el modo de flujo de trabajo está configurado como "Antes de guardar" por @mytharcher
  - Añadir tolerancia a fallos en el flujo de trabajo eliminado, para evitar errores de carga en la lista de tareas por @mytharcher
  - Corregir el problema donde faltan valores en la ventana emergente de detalle de "Mi solicitud" por @mytharcher
  - Corregir el problema donde se lanzaba un error en la ventana emergente de registro de aprobación 1.x por @mytharcher
  - Corregir problema de rendimiento causado por el campo JSON en la carga de listas (MySQL) por @mytharcher
  - Corregir id incorrecto para cargar el registro de detalle por @mytharcher
  - Corregir el problema donde la concurrencia hace que la ejecución se reanude repetidamente por @mytharcher
  - Corregir error de compilación causado por dependencias faltantes por @mytharcher
  - Corregir el problema donde se cargó un registro incorrecto debido a parámetros erróneos por @mytharcher
  - Corregir el problema donde devolver una aprobación al nodo anterior pero se devolvía al inicio por @mytharcher
  - Corregir error lanzado al añadir rol a un usuario si el flujo de trabajo de audiencias está deshabilitado por @mytharcher
  - Corregir bloque de valor que no se muestra debido a la falta del componente `ValueBlock.Result` por @mytharcher
  - Corregir el problema donde los campos no se muestran en las tarjetas de tarea de aprobación por @zhangzhonghe
  - Corregir el problema donde los campos de filtro no funcionan correctamente en el centro de tareas por @mytharcher
- **[Gestor de correo electrónico]**

  - corregir cadena de conversación por @jiannx
  - Corregir enlace de respuesta de Outlook desconectado ocasionalmente por @jiannx
  - el cuerpo no se colapsa cuando se selecciona texto. corregir fallo al descargar archivo adjunto por @jiannx
  - Se corrigió el problema de correos electrónicos en la misma bandeja de entrada entre múltiples usuarios y se optimizó el rendimiento por @jiannx
  - añadir filtros a la gestión por @jiannx
  - mostrar botón de responder a todos y el ámbito de datos soporta el filtrado de mensajes secundarios. por @jiannx
  - Corregir el problema donde la ventana emergente de configuración de correo electrónico está oscurecida por @zhangzhonghe
- **[WeCom]** Corregir un problema donde los usuarios no podían registrarse automáticamente cuando faltaba el móvil por @2013xile
- **[Gestor de migraciones]** Se corrigió una posible congelación del proceso causada por el registro de sentencias SQL excesivamente grandes incluidas en las excepciones de error de migración por @cgyrock

### [v2.1.0-alpha.1](https://www.nocobase.com/en/blog/v2.1.0-alpha.1)

*Fecha de lanzamiento: 2026-02-14*

### 🎉 Nuevas funciones

- **[Acción: Edición por lotes]** edición masiva 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) por @jiannx

### 🚀 Mejoras

- **[cliente]**

  - Mejorar la interfaz de usuario de asignación de campos de fecha/hora para soportar la selección de fechas/horas relativas. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) por @gchust
  - Soporte para especificar el campo de título para campos de asociación al asignar un campo. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) por @gchust
  - La tabla 2.0 soporta ordenación por arrastrar y soltar ([#8540](https://github.com/nocobase/nocobase/pull/8540)) por @jiannx
  - Mover la asignación de campos y la configuración de valores predeterminados a la configuración a nivel de formulario. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) por @chenos
- **[Localización]** crear automáticamente claves i18n faltantes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) por @jiannx

### 🐛 Corrección de errores

- **[motor-de-flujo]** Corregir un problema donde el submenú del campo de filtro no se podía expandir cuando había una palabra clave de búsqueda presente. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) por @gchust
- **[cliente]**

  - Corregir un problema donde asignar un solo registro a un campo de relación muchos-a-muchos producía resultados incorrectos. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) por @gchust
  - analizar fecha usando el selector de fecha y añadir validación de fortaleza de contraseña, etc ([#8647](https://github.com/nocobase/nocobase/pull/8647)) por @jiannx
  - Corregir el problema de espaciado causado por acciones enlazadas ocultas en la columna de acción de la tabla ([#8646](https://github.com/nocobase/nocobase/pull/8646)) por @zhangzhonghe
  - corregir error de sintaxis de resolución cuando el elemento markdown renderiza Liquid no válido ([#8637](https://github.com/nocobase/nocobase/pull/8637)) por @katherinehhh
  - Corregir solicitudes de análisis innecesarias del backend para propiedades de campo de muchos-a-muchos en el bloque de formulario. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) por @gchust
  - Corregir el problema donde `Action.Modal` no se podía cerrar después de alguna interacción ([#8642](https://github.com/nocobase/nocobase/pull/8642)) por @mytharcher
  - corregir formato de número faltante para campos de fórmula numérica y configuraciones de formato de fecha para campos de fórmula de fecha ([#8625](https://github.com/nocobase/nocobase/pull/8625)) por @katherinehhh
  - corregir renderizado incompleto del borde superior en el primer elemento del formulario ([#8623](https://github.com/nocobase/nocobase/pull/8623)) por @katherinehhh
  - Corregir problema donde el campo de archivo adjunto de asociación limpiado no se guarda después de enviar en el formulario de edición ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh
  - corregir datos filtrados incorrectos en el desplegable de asociación cuando el campo de título es una clave foránea ([#8619](https://github.com/nocobase/nocobase/pull/8619)) por @katherinehhh
  - corregir imposibilidad de restaurar datos seleccionados en el componente de campo selector de registros después de editar ([#8610](https://github.com/nocobase/nocobase/pull/8610)) por @katherinehhh
  - Corregir opciones de componente de campo no actualizadas en tiempo real cuando el campo de asociación cambia de patrón ([#8611](https://github.com/nocobase/nocobase/pull/8611)) por @katherinehhh
- **[utilidades]** Corregir problema de seguridad del motor evaluador de `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher
- **[Empleados de IA]**

  - Corrige un problema donde los enlaces de citas de búsquedas web de IA no se mostraban en el cuadro de chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) por @cgyrock
  - corregir error de parámetros de la API de openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) por @cgyrock
- **[Gestor de archivos]** corregir problema donde el componente de campo de archivo aún puede abrir el diálogo del selector cuando está deshabilitado ([#8617](https://github.com/nocobase/nocobase/pull/8617)) por @katherinehhh
