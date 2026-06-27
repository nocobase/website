---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: soporte para variables personalizadas, detectores de eventos de clic en filas de tabla y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.31](https://www.nocobase.com/en/blog/v1.8.31)

*Fecha de lanzamiento: 2025-10-17*

### 🐛 Corrección de errores

- **[database]** Se corrige el error lanzado cuando el operador `$in` encuentra un valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher
- **[Workflow: Approval]**

  - Se corrige el problema de tiempo de espera de transacción causado por transacciones que no se revierten correctamente cuando ocurren errores de base de datos después del envío de la aprobación por @mytharcher
  - Se corrige el problema de que las variables no se analizan en el formulario de envío de aprobación por @mytharcher

### [v1.8.30](https://www.nocobase.com/en/blog/v1.8.30)

*Fecha de lanzamiento: 2025-10-16*

### 🐛 Corrección de errores

- **[client]** Se corrige el problema de que las ventanas emergentes de iconos de pestañas quedan ocultas ([#7607](https://github.com/nocobase/nocobase/pull/7607)) por @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.13](https://www.nocobase.com/en/blog/v1.9.0-beta.13)

*Fecha de lanzamiento: 2025-10-22*

### 🚀 Mejoras

- **[client]** Para obtener un tipo MIME de archivo más preciso, se usa el paquete `mime` para detectar el tipo MIME de archivos en el cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher
- **[Data source: Main]** Se refactoriza la lógica de localización para mensajes de error, y se maneja dentro del plugin de manejo de errores ([#7582](https://github.com/nocobase/nocobase/pull/7582)) por @2013xile
- **[Workflow]** Se añade la opción `keepBranch` al eliminar un nodo ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher
- **[Workflow: Approval]** Se refactoriza la configuración de ramas para adaptarse a los cambios del núcleo por @mytharcher

### 🐛 Corrección de errores

- **[client]**

  - Se corrige error al limpiar el campo de fecha en el bloque de filtro ([#7632](https://github.com/nocobase/nocobase/pull/7632)) por @katherinehhh
  - Se corrige que el valor predeterminado de la subtabla no funcione en el cajón del formulario de edición ([#7631](https://github.com/nocobase/nocobase/pull/7631)) por @katherinehhh
  - Se corrige el problema de que las imágenes no se mostraban correctamente cuando se rotaban y escalaban durante la vista previa ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher
  - Se corrige el problema de que las ventanas emergentes de iconos de pestañas quedan ocultas ([#7607](https://github.com/nocobase/nocobase/pull/7607)) por @zhangzhonghe
- **[database]** Se corrige el error lanzado cuando el operador `$in` encuentra un valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher
- **[Data source: Main]** Se corrige el problema de que los metadatos no se sincronizaban en múltiples nodos después de crear un campo de asociación inversa ([#7628](https://github.com/nocobase/nocobase/pull/7628)) por @mytharcher
- **[Workflow: Approval]**

  - Se corrige el problema de error en el script de migración debido a tablas inexistentes cuando la aplicación no está instalada por @mytharcher
  - Se corrige el problema de que el ID Snowflake no se generaba debido a hooks omitidos por @mytharcher
- **[Auth: LDAP]** Se corrige el fallo de enlace LDAP con DN que no son ASCII (UTF-8) en Active Directory por @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.19](https://www.nocobase.com/en/blog/v2.0.0-alpha.19)

*Fecha de lanzamiento: 2025-10-21*

### 🐛 Corrección de errores

- **[client]**

  - Se corrigió un problema donde la URL no se actualizaba correctamente después de cambiar de pestaña dentro de una ventana emergente, reabrir una ventana emergente anidada y luego cerrar todas las ventanas emergentes. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) por @gchust
  - Se corrige que el valor predeterminado de la subtabla no funcione en el cajón del formulario de edición ([#7631](https://github.com/nocobase/nocobase/pull/7631)) por @katherinehhh
  - Se corrige error al limpiar el campo de fecha en el bloque de filtro ([#7632](https://github.com/nocobase/nocobase/pull/7632)) por @katherinehhh
- **[Multi-app manager (deprecated)]** Se corrige que no se pueda deshabilitar el antiguo multi-app-manager ([#7633](https://github.com/nocobase/nocobase/pull/7633)) por @jiannx

### [v2.0.0-alpha.17](https://www.nocobase.com/en/blog/v2.0.0-alpha.17)

*Fecha de lanzamiento: 2025-10-21*

### 🎉 Nuevas funciones

- **[client]** Se añadió soporte para detectores de eventos de clic en filas de tabla, permitiendo a los usuarios ejecutar acciones específicas cuando se hace clic en una fila de la tabla ([#7622](https://github.com/nocobase/nocobase/pull/7622)) por @zhangzhonghe
- **[Workflow: Approval]** Se expone la variable `approvalId` para su uso desde los desencadenadores de aprobación por @mytharcher

### 🐛 Corrección de errores

- **[flow-engine]** Se corrige el problema de que la traducción no surte efecto en los componentes antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) por @zhangzhonghe
- **[Data source: Main]** Se corrige el problema de que los metadatos no se sincronizaban en múltiples nodos después de crear un campo de asociación inversa ([#7628](https://github.com/nocobase/nocobase/pull/7628)) por @mytharcher
- **[plugin-demo-platform]** demo soporta detener aplicaciones automáticamente por @jiannx
- **[Multi-app]**

  - La migración multi-app no emite hooks por @jiannx
  - El proxy multi-app soporta caché por @jiannx

### [v2.0.0-alpha.16](https://www.nocobase.com/en/blog/v2.0.0-alpha.16)

*Fecha de lanzamiento: 2025-10-20*

### 🎉 Nuevas funciones

- **[Form drafts]** Borradores de formularios por @chenos

### 🐛 Corrección de errores

- **[flow-engine]** No se puede obtener el contexto de la vista actual en el bloque de referencia ([#7620](https://github.com/nocobase/nocobase/pull/7620)) por @gchust
- **[client]** Manejar contexto faltante en usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) por @chenos

### [v2.0.0-alpha.15](https://www.nocobase.com/en/blog/v2.0.0-alpha.15)

*Fecha de lanzamiento: 2025-10-20*

### 🚀 Mejoras

- **[client]** Soporte para campos de asociación en el modelo de campo JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) por @gchust
- **[AI employees]**

  - Se refactorizó el Proveedor LLM de OpenAI en dos proveedores separados para soportar las APIs de Completions y Responses de OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) por @cgyrock
  - Se añadió un nuevo proveedor LLM Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) por @ReLaMi96

### 🐛 Corrección de errores

- **[Workflow: Approval]**
  - Se corrige el problema de que el recuento de tareas no se actualizaba después de añadir un asignado por @mytharcher
  - Se corrige el problema de tiempo de espera de transacción causado por transacciones que no se revierten correctamente cuando ocurren errores de base de datos después del envío de la aprobación por @mytharcher

### [v2.0.0-alpha.14](https://www.nocobase.com/en/blog/v2.0.0-alpha.14)

*Fecha de lanzamiento: 2025-10-17*

### 🚀 Mejoras

- **[AI employees]** Optimización de codificación AI ([#7614](https://github.com/nocobase/nocobase/pull/7614)) por @cgyrock
- **[Data source: Main]** Se refactoriza la lógica de localización para mensajes de error, y se maneja dentro del plugin de manejo de errores ([#7582](https://github.com/nocobase/nocobase/pull/7582)) por @2013xile

### 🐛 Corrección de errores

- **[database]**

  - Se establece `search_path` antes de ejecutar sentencias SQL usando el método `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) por @2013xile
  - Se corrige el error lanzado cuando el operador `$in` encuentra un valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher
- **[client]** Se corrige el problema de que las ventanas emergentes de iconos de pestañas quedan ocultas ([#7607](https://github.com/nocobase/nocobase/pull/7607)) por @zhangzhonghe
- **[Workflow: Approval]** Se corrige el problema de que las variables no se analizan en el formulario de envío de aprobación por @mytharcher

### [v2.0.0-alpha.13](https://www.nocobase.com/en/blog/v2.0.0-alpha.13)

*Fecha de lanzamiento: 2025-10-16*

### 🎉 Nuevas funciones

- **[Block: Reference]** Se añade un plugin experimental "Bloque de referencia", que permite reutilizar bloques existentes mediante referencia o copia. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) por @gchust

### 🐛 Corrección de errores

- **[Data visualization]** Se corrige el problema de que el gráfico no se puede mostrar debido al tiempo de espera del registro de eventos ([#7608](https://github.com/nocobase/nocobase/pull/7608)) por @heziqiang

### [v2.0.0-alpha.10](https://www.nocobase.com/en/blog/v2.0.0-alpha.10)

*Fecha de lanzamiento: 2025-10-15*

### 🚀 Mejoras

- **[Data visualization]** Se actualiza plugin-data-vi 2.0, se corrigen algunos problemas y se optimiza la interfaz de usuario. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) por @heziqiang

### 🐛 Corrección de errores

- **[Workflow: Approval]** Se corrige el problema de que el ID Snowflake no se generaba debido a hooks omitidos por @mytharcher

### [v2.0.0-alpha.9](https://www.nocobase.com/en/blog/v2.0.0-alpha.9)

*Fecha de lanzamiento: 2025-10-15*

### 🎉 Nuevas funciones

- **[client]** Se añade soporte para variables personalizadas ([#7585](https://github.com/nocobase/nocobase/pull/7585)) por @zhangzhonghe

### 🚀 Mejoras

- **[AI employees]** Se añade botón de minimizar para el cuadro de chat en diseño móvil ([#7595](https://github.com/nocobase/nocobase/pull/7595)) por @cgyrock

### 🐛 Corrección de errores

- **[server]** Preservar field.targetKey al copiar campos de referencia ([#7599](https://github.com/nocobase/nocobase/pull/7599)) por @chenos
- **[AI employees]** Se corrige problema de diseño del cuadro de chat en diseño móvil ([#7591](https://github.com/nocobase/nocobase/pull/7591)) por @cgyrock
