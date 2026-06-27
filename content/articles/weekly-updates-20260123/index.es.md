---
title: "Actualizaciones Semanales: Agregar Control de Concurrencia a Nivel de Proceso al Administrador de Tareas Base"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 15 al 22 de enero de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.39](https://www.nocobase.com/en/blog/v1.9.39)

*Fecha de lanzamiento: 2026-01-21*

### 🐛 Corrección de errores

- **[servidor]** Corregir la versión de `mathjs` en dependencias comunes ([#8475](https://github.com/nocobase/nocobase/pull/8475)) por @mytharcher
- **[cliente]** Corregir el problema por el que el menú de configuración no se mostraba en Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) por @zhangzhonghe
- **[Gestor de tareas asíncronas]** Corregir el problema por el que el flujo de trabajo activado por importación asíncrona se retrasaba en su ejecución ([#8478](https://github.com/nocobase/nocobase/pull/8478)) por @mytharcher
- **[Acción: Importar registros Pro]** Corregir el problema por el que el flujo de trabajo activado por importación asíncrona se retrasaba en su ejecución por @mytharcher

### [v1.9.38](https://www.nocobase.com/en/blog/v1.9.38)

*Fecha de lanzamiento: 2026-01-20*

### 🚀 Mejoras

- **[servidor]** Soporte para configurar una lista blanca de orígenes CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) por @2013xile
- **[Manejador de errores]** Sanear errores de referencia SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]**

  - corregir problema por el que la configuración de ordenación del grupo de campos de colección no surtía efecto. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) por @katherinehhh
  - corregir problema al editar una colección en la interfaz gráfica ([#8451](https://github.com/nocobase/nocobase/pull/8451)) por @katherinehhh
  - Corregir el problema por el que el botón "Configuración de columnas" de la tabla no funcionaba ([#8441](https://github.com/nocobase/nocobase/pull/8441)) por @zhangzhonghe
  - Corregir el problema por el que las reglas de vinculación de botones de fila de tabla afectaban el estado de los botones dentro de formularios emergentes ([#8434](https://github.com/nocobase/nocobase/pull/8434)) por @zhangzhonghe
- **[Móvil (obsoleto)]** Plugin móvil obsoleto (reemplazado por el plugin ui-layout a partir de la versión 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) por @chenos

### [v1.9.37](https://www.nocobase.com/en/blog/v1.9.37)

*Fecha de lanzamiento: 2026-01-15*

### 🚀 Mejoras

- **[evaluadores]** Actualizar la versión de math.js para soportar más funciones ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Corregir problema de rendimiento al enviar mensajes en la aplicación a un gran número de usuarios ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - corregir datos de selección en cascada no limpiados después de un envío exitoso en el formulario de creación ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh
  - Añadir tolerancia a fallos para el esquema de acción, para evitar el bloqueo de la página al hacer clic en el botón de acción ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher
  - corregir problema con el botón de envío donde la validación de salto obligatorio no funciona cuando la confirmación está habilitada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh
- **[Campo de colección: Muchos a muchos (array)]** Corregir error al añadir relaciones muchos a muchos(array) de segundo nivel en consultas de asociación ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock
- **[Flujo de trabajo]** Corregir el problema por el que el ID del esquema no se actualizaba en el nodo duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.13](https://www.nocobase.com/en/blog/v2.0.0-beta.13)

*Fecha de lanzamiento: 2026-01-19*

### 🚀 Mejoras

- **[servidor]** Soporte para configurar una lista blanca de orígenes CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) por @2013xile
- **[Acción: Exportar registros]** Mejorar el ámbito de datos de la acción de exportación basado en registros seleccionados o filtros de recurso ([#8442](https://github.com/nocobase/nocobase/pull/8442)) por @katherinehhh
- **[Acción: Exportar registros Pro]** Mejorar el ámbito de datos de la acción de exportación basado en registros seleccionados o filtros de recurso por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir el problema por el que la ventana emergente "Variables personalizadas" quedaba oculta ([#8463](https://github.com/nocobase/nocobase/pull/8463)) por @zhangzhonghe
  - corregir problema al editar una colección en la interfaz gráfica ([#8451](https://github.com/nocobase/nocobase/pull/8451)) por @katherinehhh
  - corregir problema por el que la configuración de ordenación del grupo de campos de colección no surtía efecto. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) por @katherinehhh
  - Corregir el problema por el que la altura del modal de acceso directo superaba la altura de la ventana gráfica ([#8437](https://github.com/nocobase/nocobase/pull/8437)) por @zhangzhonghe
  - Corregir el problema por el que las reglas de vinculación de botones de fila de tabla afectaban el estado de los botones dentro de formularios emergentes ([#8434](https://github.com/nocobase/nocobase/pull/8434)) por @zhangzhonghe
  - Corregir un problema por el que el estado de la columna de acción de la tabla se contaminaba al cambiar de página. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) por @gchust
  - Corregir el problema por el que el botón "Configuración de columnas" de la tabla no funcionaba ([#8441](https://github.com/nocobase/nocobase/pull/8441)) por @zhangzhonghe
  - Corregir un problema por el que el selector emergente del campo de asociación de archivos tenía un z-index incorrecto y la configuración emergente no se podía guardar correctamente. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) por @gchust
- **[motor-de-flujo]**

  - Corregir un problema por el que las variables en los parámetros de código runjs se resolvían antes de la ejecución. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) por @gchust
  - Corregir un problema por el que las variables emergentes no se podían seleccionar en la ventana emergente de creación rápida del selector de datos. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) por @gchust
  - Corregir un problema por el que al hacer clic repetidamente en el menú de configuración se podían abrir múltiples ventanas emergentes de configuración. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) por @gchust
- **[Móvil (obsoleto)]** Plugin móvil obsoleto (reemplazado por el plugin ui-layout a partir de la versión 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) por @chenos
- **[Motor de flujo]** Corregir un problema por el que las variables que contenían guiones no se podían analizar correctamente. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) por @gchust
- **[Gestor de correo electrónico]** Corregir el problema por el que la ventana emergente de configuración de correo electrónico quedaba oculta por @zhangzhonghe

### [v2.0.0-beta.12](https://www.nocobase.com/en/blog/v2.0.0-beta.12)

*Fecha de lanzamiento: 2026-01-16*

### 🚀 Mejoras

- **[Motor de flujo]** Soporte para resolver valores de campos en el registro del formulario actual incluso si no se añaden al formulario de edición. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) por @gchust

### 🐛 Corrección de errores

- **[motor-de-flujo]** Corregir que los pasos del flujo de eventos dinámicos se ejecutaran dos veces al abrir una ventana emergente mediante un clic en un botón. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) por @gchust
- **[Impresión de plantilla]** mostrar campos de espacio en la versión 2.0 por @jiannx

### [v2.0.0-beta.11](https://www.nocobase.com/en/blog/v2.0.0-beta.11)

*Fecha de lanzamiento: 2026-01-15*

### 🚀 Mejoras

- **[evaluadores]** Actualizar la versión de math.js para soportar más funciones ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher
- **[cliente]** El editor de texto enriquecido soporta ajuste de tamaño de fuente, ajuste de tamaño de imagen y saltos de línea suaves ([#8401](https://github.com/nocobase/nocobase/pull/8401)) por @jiannx
- **[Empleados de IA]** Cambiar el resultado del llamador de flujo de trabajo a `execution.output`, usando explícitamente el nodo de salida el resultado podría ser estable ([#8423](https://github.com/nocobase/nocobase/pull/8423)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Añadir tolerancia a fallos para el esquema de acción, para evitar el bloqueo de la página al hacer clic en el botón de acción ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher
  - corregir la desaparición de la configuración del campo de título después de establecer la URL del adjunto y luego cambiar a otro campo en el elemento del formulario ([#8418](https://github.com/nocobase/nocobase/pull/8418)) por @katherinehhh
  - corregir que el campo de título no se actualiza cuando el campo de asociación se establece en modo de solo lectura en el formulario de creación ([#8413](https://github.com/nocobase/nocobase/pull/8413)) por @katherinehhh
- **[Motor de flujo]** Corregir un problema por el que la resolución de variables era incorrecta cuando filterByTk era un array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) por @gchust
- **[Impresión de plantilla]** soportar campo de espacio por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.66](https://www.nocobase.com/en/blog/v2.0.0-alpha.66)

*Fecha de lanzamiento: 2026-01-16*

### 🐛 Corrección de errores

- **[Motor de flujo]** Corregir un problema por el que las variables que contenían guiones no se podían analizar correctamente. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) por @gchust

### [v2.0.0-alpha.65](https://www.nocobase.com/en/blog/v2.0.0-alpha.65)

*Fecha de lanzamiento: 2026-01-16*

### 🎉 Nuevas funciones

- **[prueba]** añadir control de concurrencia a nivel de proceso para el gestor de tareas base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) por @cgyrock

### 🚀 Mejoras

- **[cliente]**

  - El editor de texto enriquecido soporta ajuste de tamaño de fuente, ajuste de tamaño de imagen y saltos de línea suaves ([#8401](https://github.com/nocobase/nocobase/pull/8401)) por @jiannx
  - Soporte para especificar cuándo ejecutar el flujo de eventos. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) por @gchust
  - Mejorar el rendimiento de renderizado de la lista del gestor de plugins cambiando a css webkit nativo para elipsis de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher
- **[evaluadores]** Actualizar la versión de math.js para soportar más funciones ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher
- **[cli]** soportar configuración de URL base CDN a través de env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) por @chenos
- **[motor-de-flujo]** Añadir `rowOrder` a GridModel para asegurar un orden de filas consistente ([#8371](https://github.com/nocobase/nocobase/pull/8371)) por @zhangzhonghe
- **[Motor de flujo]** Soporte para resolver valores de campos en el registro del formulario actual incluso si no se añaden al formulario de edición. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) por @gchust
- **[Empleados de IA]**

  - Optimizar el botón de entrada de IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) por @heziqiang
  - Cambiar el resultado del llamador de flujo de trabajo a `execution.output`, usando explícitamente el nodo de salida el resultado podría ser estable ([#8423](https://github.com/nocobase/nocobase/pull/8423)) por @mytharcher
  - Ocultar builder ai en la lista de entradas.<br/> Optimizar el flujo de integración LLM.<br/> Actualizar documentos sobre el modelo de IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) por @heziqiang
  - Soporte para Anthropic y Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) por @heziqiang
- **[Notificación: Mensaje en la aplicación]** Corregir problema de rendimiento al enviar mensajes en la aplicación a un gran número de usuarios ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir el problema por el que la altura del modal de acceso directo superaba la altura de la ventana gráfica ([#8437](https://github.com/nocobase/nocobase/pull/8437)) por @zhangzhonghe
  - Corregir el problema por el que las reglas de vinculación de botones de fila de tabla afectaban el estado de los botones dentro de formularios emergentes ([#8434](https://github.com/nocobase/nocobase/pull/8434)) por @zhangzhonghe
  - Corregir un problema por el que el estado de la columna de acción de la tabla se contaminaba al cambiar de página. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) por @gchust
  - Añadir tolerancia a fallos para el esquema de acción, para evitar el bloqueo de la página al hacer clic en el botón de acción ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher
  - corregir que el campo de título no se actualiza cuando el campo de asociación se establece en modo de solo lectura en el formulario de creación ([#8413](https://github.com/nocobase/nocobase/pull/8413)) por @katherinehhh
  - El componente numérico no muestra el valor ([#8410](https://github.com/nocobase/nocobase/pull/8410)) por @chenos
  - corregir la desaparición de la configuración del campo de título después de establecer la URL del adjunto y luego cambiar a otro campo en el elemento del formulario ([#8418](https://github.com/nocobase/nocobase/pull/8418)) por @katherinehhh
  - corregir problema con el botón de envío donde la validación de salto obligatorio no funciona cuando la confirmación está habilitada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh
  - corregir problema de resolución por el que la configuración de diseño en el bloque de tarjeta de cuadrícula no surtía efecto ([#8399](https://github.com/nocobase/nocobase/pull/8399)) por @katherinehhh
  - corregir datos de selección en cascada no limpiados después de un envío exitoso en el formulario de creación ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh
  - corregir evitar asignación cuando se introducen caracteres chinos en el campo numérico ([#8397](https://github.com/nocobase/nocobase/pull/8397)) por @katherinehhh
  - resolver problema con el botón de envío que aparece en la ventana emergente de selección de archivos del campo de asociación uno a uno ([#8398](https://github.com/nocobase/nocobase/pull/8398)) por @katherinehhh
  - corregir lógica de refinamiento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh
- **[motor-de-flujo]** Corregir que los pasos del flujo de eventos dinámicos se ejecutaran dos veces al abrir una ventana emergente mediante un clic en un botón. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) por @gchust
- **[Motor de flujo]** Corregir un problema por el que la resolución de variables era incorrecta cuando filterByTk era un array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) por @gchust
- **[Gestor de archivos]** Corregir el problema por el que la URL del archivo se generaba incorrectamente para archivos subidos al almacenamiento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher
- **[Campo de colección: Muchos a muchos (array)]** Corregir error al añadir relaciones muchos a muchos(array) de segundo nivel en consultas de asociación ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock
- **[Flujo de trabajo]**

  - Corregir el problema por el que el ID del esquema no se actualizaba en el nodo duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher
  - Añadir ID de instancia al ID Snowflake de los trabajos, para evitar problemas de conflicto de ID en modo clúster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher
- **[Bloque: plantilla (obsoleto)]** Corregido un problema por el que no se podía acceder a la página de edición de plantillas heredadas (v1). ([#8376](https://github.com/nocobase/nocobase/pull/8376)) por @gchust
- **[Fuente de datos: API REST]** Añadir tolerancia a fallos para el contexto de solicitud, para evitar errores cuando el método no está en el contexto por @mytharcher
- **[Multi-espacio]**

  - Espacio relacionado al añadir datos asociados por @jiannx
  - El color del selector de espacio sigue el tema por @jiannx
- **[Impresión de plantilla]**

  - Corregir problema de ventana emergente de configuración de plantilla oculta por @zhangzhonghe
  - soportar campo de espacio por @jiannx
  - mostrar campos de espacio en la versión 2.0 por @jiannx
- **[Almacenamiento de archivos: S3(Pro)]** Corregir el problema por el que el modo de cambio de nombre de archivo no funciona por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema por el que se cargaba un registro incorrecto debido a parámetros erróneos por @mytharcher
  - Corregir que el bloque de valor no se muestra debido a la falta del componente `ValueBlock.Result` por @mytharcher
- **[Gestor de correo electrónico]**

  - corregir cadena de conversación por @jiannx
  - Añadir filtrado a la página de gestión por @jiannx
