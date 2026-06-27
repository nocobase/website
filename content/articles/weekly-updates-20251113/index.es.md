---
title: "Actualizaciones Semanales de NocoBase: Optimización y Corrección de Errores"
description: "La actualización de esta semana incluye: Soporte para arrastrar acciones de columnas de tabla, agregar fuente de datos SQL de gráficos y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.6](https://www.nocobase.com/en/blog/v1.9.6)

*Fecha de lanzamiento: 2025-11-12*

### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema por el que las plantillas duplicadas no aparecían, causado al arrastrar y luego eliminar una plantilla referenciada ([#7847](https://github.com/nocobase/nocobase/pull/7847)) por @zhangzhonghe
- **[utilidades]** Se habilita la fusión de objetos en la estrategia de intersección ([#7840](https://github.com/nocobase/nocobase/pull/7840)) por @chenos
- **[Visualización de datos: ECharts]** Se corrige el problema con la configuración de labelType en ECharts por @heziqiang
- **[Gestor de correo electrónico]** Se sincroniza el estado de lectura de Microsoft Mail sin marca de tiempo por @jiannx

### [v1.9.5](https://www.nocobase.com/en/blog/v1.9.5)

*Fecha de lanzamiento: 2025-11-10*

### 🐛 Corrección de errores

- **[Flujo de trabajo: Aprobación]** Se corrige un problema por el que los campos de la colección principal no se excluían al recargar datos de asociación por @mytharcher
- **[Gestor de correo electrónico]** Se corrige el problema de las imágenes reservadas y la sincronización en Outlook por @jiannx

### [v1.9.4](https://www.nocobase.com/en/blog/v1.9.4)

*Fecha de lanzamiento: 2025-11-10*

### 🚀 Mejoras

- **[Control de acceso]** Se optimiza la lógica de control de permisos para operaciones en campos de asociación ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile
- **[Flujo de trabajo: JavaScript]** Se corrige una vulnerabilidad de seguridad causada por la transmisión de funciones de nivel superior al entorno de ejecución, evitando la explotación que podría otorgar acceso al contexto de ejecución superior por @mytharcher
- **[Autenticación: OIDC]** Se aumenta el tiempo de espera de la solicitud por @2013xile

### 🐛 Corrección de errores

- **[servidor]** Se corrige un problema por el que, tras habilitar el modo de división de servicios, los procesos worker que enviaban mensajes a través de la cola de mensajes causaban errores ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher
- **[cliente]** Se corrige el problema de página siguiente vacía en el bloque de detalle de paginación simple ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh
- **[Flujo de trabajo]**

  - Se añade `workflowId` como dato de identidad para los registros del flujo de trabajo ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher
  - Se corrige el problema por el que el plugin de flujo de trabajo seguía consumiendo el evento de la cola cuando no estaba en modo worker bajo el modo de división de servicios ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher
- **[Usuarios]** Actualización incorrecta del índice cuando los nombres de campo usan el estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile
- **[Flujo de trabajo: Variable personalizada]** Se corrige el error lanzado cuando no hay configuración en el nodo de variable por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.38](https://www.nocobase.com/en/blog/v2.0.0-alpha.38)

*Fecha de lanzamiento: 2025-11-12*

### 🎉 Nuevas funciones

- **[cliente]** Se añade soporte para arrastrar acciones de columna en tablas ([#7842](https://github.com/nocobase/nocobase/pull/7842)) por @zhangzhonghe
- **[Visualización de datos]** Se añade fuente de datos SQL para gráficos ([#7830](https://github.com/nocobase/nocobase/pull/7830)) por @heziqiang

### 🚀 Mejoras

- **[cliente]** Se añade soporte para la librería Day.js en el contexto de scripting RunJS, permitiendo manipulaciones de fecha y hora más fáciles. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) por @gchust

### 🐛 Corrección de errores

- **[utilidades]**

  - Se corrige el error "Invalid filter item type" en el botón de filtro ([#7838](https://github.com/nocobase/nocobase/pull/7838)) por @zhangzhonghe
  - Se habilita la fusión de objetos en la estrategia de intersección ([#7840](https://github.com/nocobase/nocobase/pull/7840)) por @chenos
  - Se corrige el error 'Unrecognized operation' en el flujo de eventos ([#7835](https://github.com/nocobase/nocobase/pull/7835)) por @zhangzhonghe
- **[cliente]**

  - Se corrige un problema por el que las reglas de vinculación para los botones de acción de fila en un bloque de tabla no se re-ejecutaban después de actualizar los datos de la fila, asegurando que las reglas se re-apliquen correctamente cuando ocurren cambios. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) por @gchust
  - Se corrigen los errores al previsualizar código en el editor de código si el código contiene sintaxis jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) por @gchust
- **[indefinido]** Se corrige el problema de estilo incorrecto en la página de inicio de la documentación del plugin en modo oscuro. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) por @gchust
- **[Gestor de archivos]** Se corrigen problemas de configuración de campos en bloques de tabla ([#7843](https://github.com/nocobase/nocobase/pull/7843)) por @katherinehhh
- **[Empleados IA]** Se oculta el botón de chat de empleados IA en páginas v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) por @cgyrock
- **[Visualización de datos: ECharts]** Se corrige el problema con la configuración de labelType en ECharts por @heziqiang
- **[Gestor de correo electrónico]**

  - Se corrigen errores de borrador por @jiannx
  - Se sincroniza el estado de lectura de Microsoft Mail sin marca de tiempo por @jiannx

### [v2.0.0-alpha.37](https://www.nocobase.com/en/blog/v2.0.0-alpha.37)

*Fecha de lanzamiento: 2025-11-11*

### 🚀 Mejoras

- **[cliente]**

  - Se añade información de versión de página al contexto del motor de flujo ([#7826](https://github.com/nocobase/nocobase/pull/7826)) por @gchust
  - Se mejora el editor Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) por @katherinehhh
  - Se adapta al campo tableoid en 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) por @katherinehhh
- **[Visualización de datos]** Se actualizan las sugerencias de alerta y las anotaciones de la plantilla de código de eventos ([#7814](https://github.com/nocobase/nocobase/pull/7814)) por @heziqiang
- **[Control de acceso]** Se optimiza la lógica de control de permisos para operaciones en campos de asociación ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile
- **[Autenticación: OIDC]** Se aumenta el tiempo de espera de la solicitud por @2013xile

### 🐛 Corrección de errores

- **[servidor]** Se corrige un problema por el que, tras habilitar el modo de división de servicios, los procesos worker que enviaban mensajes a través de la cola de mensajes causaban errores ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher
- **[cliente]**

  - La variable de colección actual no debería ser seleccionable desde el selector de variables del componente de filtro ([#7818](https://github.com/nocobase/nocobase/pull/7818)) por @gchust
  - Se corrige el error 'value.replace is not a function' en el campo de relación del formulario de filtro ([#7824](https://github.com/nocobase/nocobase/pull/7824)) por @zhangzhonghe
  - Se corrigen parámetros incorrectos en la devolución de llamada onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) por @zhangzhonghe
- **[motor-de-flujo]** Se corrige el problema por el que los cambios en el flujo de eventos solo surtían efecto después de actualizar la página. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) por @gchust
- **[Flujo de trabajo]** Se corrige el problema por el que el plugin de flujo de trabajo seguía consumiendo el evento de la cola cuando no estaba en modo worker bajo el modo de división de servicios ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Se corrige un problema por el que los campos de la colección principal no se excluían al recargar datos de asociación por @mytharcher
- **[Gestor de correo electrónico]** Se corrige el problema de las imágenes reservadas y la sincronización en Outlook por @jiannx

### [v2.0.0-alpha.36](https://www.nocobase.com/en/blog/v2.0.0-alpha.36)

*Fecha de lanzamiento: 2025-11-10*

### 🚀 Mejoras

- **[motor-de-flujo]** Se optimizan los estilos de la barra de herramientas para las pestañas de página ([#7795](https://github.com/nocobase/nocobase/pull/7795)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[motor-de-flujo]**

  - Se corrige un problema por el que las variables en campos de asociación de subformularios no se resolvían correctamente cuando el campo se modificaba a través de la interfaz de usuario. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) por @gchust
  - Error en el formulario de edición para registros con múltiples claves primarias ([#7798](https://github.com/nocobase/nocobase/pull/7798)) por @gchust
  - Se corrige un problema por el que ciertas configuraciones para la acción "Abrir vista" no se aplicaban, asegurando que la acción funcione según lo previsto para todas las configuraciones especificadas. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) por @gchust
- **[cliente]**

  - Se corrige que el campo selector de colección no pueda seleccionar la colección correctamente ([#7794](https://github.com/nocobase/nocobase/pull/7794)) por @katherinehhh
  - No se puede ocultar la columna de acciones del bloque de tabla ([#7804](https://github.com/nocobase/nocobase/pull/7804)) por @gchust
  - Se añade soporte para seleccionar el objeto variable completo en el prompt del empleado IA ([#7791](https://github.com/nocobase/nocobase/pull/7791)) por @gchust
- **[Usuarios]** Actualización incorrecta del índice cuando los nombres de campo usan el estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile

### [v2.0.0-alpha.35](https://www.nocobase.com/en/blog/v2.0.0-alpha.35)

*Fecha de lanzamiento: 2025-11-06*

### 🚀 Mejoras

- **[motor-de-flujo]** Se añade soporte para operación retrasada en el modelo de flujo ([#7786](https://github.com/nocobase/nocobase/pull/7786)) por @gchust
- **[Flujo de trabajo: JavaScript]** Se corrige una vulnerabilidad de seguridad causada por la transmisión de funciones de nivel superior al entorno de ejecución, evitando la explotación que podría otorgar acceso al contexto de ejecución superior por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrige el problema de página siguiente vacía en el bloque de detalle de paginación simple ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh
  - Se corrige que el ancho de la acción de tabla y jsColumn no se aplicaba ([#7777](https://github.com/nocobase/nocobase/pull/7777)) por @katherinehhh
  - El ámbito de datos del bloque no funciona si se establece mediante el flujo de eventos de página ([#7788](https://github.com/nocobase/nocobase/pull/7788)) por @gchust
- **[Flujo de trabajo]** Se añade `workflowId` como dato de identidad para los registros del flujo de trabajo ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher
- **[Flujo de trabajo: Variable personalizada]** Se corrige el error lanzado cuando no hay configuración en el nodo de variable por @mytharcher
- **[Gestor de correo electrónico]** La colección MailMessages añade índices por @jiannx
