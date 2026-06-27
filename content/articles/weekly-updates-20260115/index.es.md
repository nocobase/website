---
title: "Actualizaciones semanales de NocoBase: Soporte para el modelo Gemini-3"
description: "La actualización de esta semana incluye: Soporte para el modelo Gemini-3 con firma de pensamiento de llamada a funciones, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, destinada principalmente al desarrollo interno y la iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.36](https://www.nocobase.com/en/blog/v1.9.36)

*Fecha de lanzamiento: 2026-01-10*

### 🚀 Mejoras

- **[cliente]** Mejorar el rendimiento de renderizado de la lista del gestor de plugins cambiando a CSS webkit nativo para el truncamiento de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher

### 🐛 Corrección de errores

- **[Gestor de archivos]** Corregir el problema donde la URL del archivo se generaba incorrectamente para archivos subidos al almacenamiento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]** Corregir el problema donde el modo de renombrado de archivos no funcionaba por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir el bloque de valor que no se muestra debido a la falta del componente `ValueBlock.Result` por @mytharcher

### [v1.9.35](https://www.nocobase.com/en/blog/v1.9.35)

*Fecha de lanzamiento: 2026-01-09*

### 🚀 Mejoras

- **[Flujo de trabajo: Aprobación]** Simplificar parámetros en la consulta y mejorar el rendimiento por @mytharcher

### 🐛 Corrección de errores

- **[Flujo de trabajo: Webhook]** Corregir el problema donde se lanzaba un error 404 al publicar en la URL del webhook en una sub-aplicación por @mytharcher

### [v1.9.34](https://www.nocobase.com/en/blog/v1.9.34)

*Fecha de lanzamiento: 2026-01-08*

### 🚀 Mejoras

- **[Control de acceso]** Mejorar las comprobaciones de permisos al modificar campos de asociación anidados ([#7856](https://github.com/nocobase/nocobase/pull/7856)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir campos de asociación de fuentes de datos externas que no cargan datos de asociación en bloques de formulario ([#8356](https://github.com/nocobase/nocobase/pull/8356)) por @katherinehhh
  - Corregir el problema donde los campos de asociación no son correctos en el componente `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) por @mytharcher
- **[registrador]** Corregir información de error adicional que se descartaba al imprimir registros del sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock
- **[Flujo de trabajo: Nodo de bucle]** Corregir el problema donde un nodo fallido en una rama condicional no podía pasar el estado al nodo de ramificación superior ([#8360](https://github.com/nocobase/nocobase/pull/8360)) por @mytharcher
- **[Fuente de datos: Principal]** Los metadatos de la colección de vistas deben incluir las opciones del campo de origen ([#8337](https://github.com/nocobase/nocobase/pull/8337)) por @2013xile
- **[Flujo de trabajo]**

  - Corregir problema de regla de vinculación en el bloque de detalle del nodo CC del flujo de trabajo ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe
  - Agregar ID de instancia al ID Snowflake de los trabajos, para evitar problemas de conflicto de ID en modo clúster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher
  - Corregir el problema donde la página de ejecución fallaba cuando se eliminaba el flujo de trabajo ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher
- **[Acción: Importar registros]** Corregir mensaje de error incorrecto cuando se activa un error de restricción única durante la importación XLSX asíncrona ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock
- **[Control de acceso]**

  - Permitir que los campos de asociación se asocien usando las claves de destino ([#8352](https://github.com/nocobase/nocobase/pull/8352)) por @2013xile
  - Corregir un problema donde la fuente de datos se resolvía incorrectamente al procesar permisos para campos de asociación ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile
- **[Fuente de datos: API REST]** Agregar tolerancia a fallos para el contexto de solicitud, para evitar errores cuando el método no está en el contexto por @mytharcher
- **[Acción: Exportar registros Pro]** Corregir error cuando las sub-aplicaciones ejecutan tareas de importación/exportación asíncronas mientras la aplicación principal no tiene habilitado el plugin de importación/exportación pro por @cgyrock
- **[Flujo de trabajo: Aprobación]** Corregir el problema donde los campos de filtro no funcionaban correctamente en el centro de tareas por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.10](https://www.nocobase.com/en/blog/v2.0.0-beta.10)

*Fecha de lanzamiento: 2026-01-14*

### 🚀 Mejoras

- **[cliente]** Permitir especificar cuándo ejecutar el flujo de eventos. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) por @gchust
- **[Empleados IA]**

  - Optimizar el botón de entrada de IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) por @heziqiang
  - Ocultar el constructor de IA en la lista de entradas.<br/>Optimizar el flujo de integración de LLM.<br/>Actualizar documentos sobre el modelo de IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) por @heziqiang
- **[Notificación: Mensaje en la aplicación]** Corregir problema de rendimiento al enviar mensajes en la aplicación a un gran número de usuarios ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - El componente de entrada numérica no muestra el valor ([#8410](https://github.com/nocobase/nocobase/pull/8410)) por @chenos
  - Corregir que los datos de selección en cascada no se limpian después de un envío exitoso en el formulario de creación ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh
  - Corregir problema con el botón de envío donde la validación obligatoria omitida no funciona cuando la confirmación está habilitada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh
  - Resolver problema con el botón de envío que aparece en la ventana emergente de selección de archivos del campo de asociación uno a uno ([#8398](https://github.com/nocobase/nocobase/pull/8398)) por @katherinehhh
  - Corregir problema donde la configuración de diseño en el bloque de tarjeta de cuadrícula no tiene efecto ([#8399](https://github.com/nocobase/nocobase/pull/8399)) por @katherinehhh
  - Corregir la prevención de asignación cuando se ingresan caracteres chinos en el campo numérico ([#8397](https://github.com/nocobase/nocobase/pull/8397)) por @katherinehhh
- **[Campo de colección: Muchos a muchos (array)]** Corregir error al agregar relaciones muchos a muchos (array) de segundo nivel en consultas de asociación ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock
- **[Multi-espacio]**

  - Espacio relacionado al agregar datos asociados por @jiannx
  - El color del selector de espacio sigue el tema por @jiannx

### [v2.0.0-beta.9](https://www.nocobase.com/en/blog/v2.0.0-beta.9)

*Fecha de lanzamiento: 2026-01-12*

### 🚀 Mejoras

- **[cliente]** Mejorar el rendimiento de renderizado de la lista del gestor de plugins cambiando a CSS webkit nativo para el truncamiento de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher

### 🐛 Corrección de errores

- **[Gestor de archivos]** Corregir el problema donde la URL del archivo se generaba incorrectamente para archivos subidos al almacenamiento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher
- **[Flujo de trabajo]** Corregir el problema donde el ID del esquema no se actualiza en el nodo duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]** Corregir el problema donde el modo de renombrado de archivos no funcionaba por @mytharcher
- **[Impresión de plantilla]** Corregir problema emergente de configuración de plantilla oscurecida por @zhangzhonghe
- **[Flujo de trabajo: Aprobación]** Corregir el bloque de valor que no se muestra debido a la falta del componente `ValueBlock.Result` por @mytharcher

### [v2.0.0-beta.8](https://www.nocobase.com/en/blog/v2.0.0-beta.8)

*Fecha de lanzamiento: 2026-01-09*

### 🚀 Mejoras

- **[cli]** soportar configuración de URL base CDN a través de env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) por @chenos
- **[Empleados IA]** Soportar Anthropic y Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) por @heziqiang

### 🐛 Corrección de errores

- **[cliente]** corregir la lógica de refinamiento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Corregir el problema donde se cargaba un registro incorrecto debido a parámetros erróneos por @mytharcher

### [v2.0.0-beta.7](https://www.nocobase.com/en/blog/v2.0.0-beta.7)

*Fecha de lanzamiento: 2026-01-09*

### 🎉 Nuevas funciones

- **[prueba]** agregar control de concurrencia a nivel de proceso para el gestor de tareas base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) por @cgyrock
- **[Empleados IA]** Soportar el modelo Gemini-3 con firma de pensamiento de llamada a función ([#8377](https://github.com/nocobase/nocobase/pull/8377)) por @heziqiang

### 🚀 Mejoras

- **[motor de flujo]** Agregar `rowOrder` a GridModel para garantizar un orden de filas consistente ([#8371](https://github.com/nocobase/nocobase/pull/8371)) por @zhangzhonghe
- **[Empleados IA]**

  - Soportar edición personalizada y actualización automática de indicaciones del sistema ([#8378](https://github.com/nocobase/nocobase/pull/8378)) por @heziqiang
  - Mejorar el manejo de errores de IA para servicios y modelos LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) por @heziqiang
- **[Gestor de archivos]** Agregar opciones de solicitud para obtener archivos OSS en el lado del servidor si se necesitan parámetros o encabezados adicionales ([#8372](https://github.com/nocobase/nocobase/pull/8372)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Corregido un problema donde un campo de asociación aún podía abrir una ventana emergente después de cambiar del componente selector de registros al componente de selección. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) por @gchust
  - Corregido el problema donde las reglas de vinculación no se volvían a ejecutar después de cambiar la paginación para el bloque de detalles, el bloque de formulario de edición y el bloque de lista. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) por @gchust
  - Corregido un problema donde los campos configurados de sub-tabla/sub-formulario no se mostraban durante el cambio de ida y vuelta de los componentes de campo. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) por @gchust
- **[registrador]** Corregir información de error adicional que se descartaba al imprimir registros del sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock
- **[Bloque: plantilla (obsoleto)]** Corregido un problema donde no se podía acceder a la página de edición para plantillas heredadas (v1). ([#8376](https://github.com/nocobase/nocobase/pull/8376)) por @gchust
- **[Flujo de trabajo]**

  - Agregar ID de instancia al ID Snowflake de los trabajos, para evitar problemas de conflicto de ID en modo clúster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher
  - Corregir problema de regla de vinculación en el bloque de detalle del nodo CC del flujo de trabajo ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe
  - Corregir el problema donde la página de ejecución fallaba cuando se eliminaba el flujo de trabajo ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher
- **[Control de acceso]** Corregir un problema donde la fuente de datos se resolvía incorrectamente al procesar permisos para campos de asociación ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile
- **[Fuente de datos: API REST]** Agregar tolerancia a fallos para el contexto de solicitud, para evitar errores cuando el método no está en el contexto por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.64](https://www.nocobase.com/en/blog/v2.0.0-alpha.64)

*Fecha de lanzamiento: 2026-01-08*

### 🎉 Nuevas funciones

- **[Empleados IA]** Soportar el modelo Gemini-3 con firma de pensamiento de llamada a función ([#8377](https://github.com/nocobase/nocobase/pull/8377)) por @heziqiang

### 🚀 Mejoras

- **[Empleados IA]**

  - Mejorar el manejo de errores de IA para servicios y modelos LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) por @heziqiang
  - Soportar edición personalizada y actualización automática de indicaciones del sistema ([#8378](https://github.com/nocobase/nocobase/pull/8378)) por @heziqiang
- **[Gestor de archivos]** Agregar opciones de solicitud para obtener archivos OSS en el lado del servidor si se necesitan parámetros o encabezados adicionales ([#8372](https://github.com/nocobase/nocobase/pull/8372)) por @mytharcher

### 🐛 Corrección de errores

- **[registrador]** Corregir información de error adicional que se descartaba al imprimir registros del sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock
- **[cliente]**

  - Corregido un problema donde un campo de asociación aún podía abrir una ventana emergente después de cambiar del componente selector de registros al componente de selección. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) por @gchust
  - Corregido el problema donde las reglas de vinculación no se volvían a ejecutar después de cambiar la paginación para el bloque de detalles, el bloque de formulario de edición y el bloque de lista. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) por @gchust
  - Corregido un problema donde los campos configurados de sub-tabla/sub-formulario no se mostraban durante el cambio de ida y vuelta de los componentes de campo. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) por @gchust
- **[Flujo de trabajo]**

  - Corregir problema de regla de vinculación en el bloque de detalle del nodo CC del flujo de trabajo ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe
  - Corregir el problema donde la página de ejecución fallaba cuando se eliminaba el flujo de trabajo ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher
- **[Control de acceso]** Corregir un problema donde la fuente de datos se resolvía incorrectamente al procesar permisos para campos de asociación ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile
