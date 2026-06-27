---
title: "Actualizaciones semanales｜Soporte para pegar archivos en el chat de IA"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 22 al 28 de enero de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.40](https://www.nocobase.com/en/blog/v1.9.40)

*Fecha de lanzamiento: 2026-01-25*

### 🚀 Mejoras

- **[Visor de archivos de Office]** Añadir más tipos de archivo para previsualización en Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Corregido que el campo nanoid no se regenerara después de enviar el formulario ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh
  - Corregido mensaje de validación requerida duplicado al limpiar un campo en cascada ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh
- **[base de datos]**

  - Corregidos errores al filtrar con el operador `empty` después de recargar una colección ([#8496](https://github.com/nocobase/nocobase/pull/8496)) por @2013xile
  - fix: actualización profunda de asociaciones anidadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos
- **[Gestor de archivos]** Corregido el problema por el cual el nombre de archivo obtenido del cuerpo de la solicitud se convertía inesperadamente en una cadena decodificada ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher
- **[Fuente de datos: Principal]** Corregido un problema por el cual eliminar registros de un bloque de tabla de asociación muchos a muchos no respetaba la restricción `onDelete: 'restrict'` del campo de asociación ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile
- **[Bloque: iframe]** Corregido el error al añadir variables agregadas a Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe
- **[Flujo de trabajo: Webhook]** Corregido el problema de falta de datos del cuerpo cuando el análisis del cuerpo no está configurado por @mytharcher
- **[Impresión de plantillas]** Corregida la lógica de permisos incorrecta del botón de impresión cuando los roles estaban unidos. por @jiannx
- **[Flujo de trabajo: Aprobación]**

  - Corregido el problema por el cual la concurrencia hacía que la ejecución se reanudara repetidamente por @mytharcher
  - Corregido el problema por el cual devolver una aprobación al nodo anterior pero regresaba al inicio por @mytharcher
- **[Gestor de migraciones]** Corregida una posible congelación del proceso causada por el registro de sentencias SQL excesivamente grandes incluidas en excepciones de error de migración por @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.17](https://www.nocobase.com/en/blog/v2.0.0-beta.17)

*Fecha de lanzamiento: 2026-01-29*

### 🐛 Corrección de errores

- **[cliente]** Corregidos problemas conocidos relacionados con el filtrado ([#8514](https://github.com/nocobase/nocobase/pull/8514)) por @zhangzhonghe
- **[Empleados IA]** Corregido el problema por el cual el sistema no podía iniciar después de la compilación ([#8523](https://github.com/nocobase/nocobase/pull/8523)) por @cgyrock
- **[IA: Base de conocimiento]** Corregido el problema por el cual el sistema no podía iniciar después de la compilación por @cgyrock

### [v2.0.0-beta.16](https://www.nocobase.com/en/blog/v2.0.0-beta.16)

*Fecha de lanzamiento: 2026-01-27*

### 🎉 Nuevas funciones

- **[cliente]** añadir componente de campo de subtabla (edición emergente) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) por @katherinehhh
- **[Flujo de trabajo]** Añadir API para mover nodo ([#8507](https://github.com/nocobase/nocobase/pull/8507)) por @mytharcher

### 🚀 Mejoras

- **[cliente]**

  - evitar el renderizado completo de la tabla al actualizar una celda ([#8349](https://github.com/nocobase/nocobase/pull/8349)) por @katherinehhh
  - Mejorar el subformulario de varios a muchos para inicializar con un elemento predeterminado y evitar la creación de registros cuando se deja vacío ([#8458](https://github.com/nocobase/nocobase/pull/8458)) por @katherinehhh
- **[Gestor de archivos]** Añadir visor extensible para el gestor de archivos ([#8501](https://github.com/nocobase/nocobase/pull/8501)) por @mytharcher
- **[Flujo de trabajo]** Cambiar la ruta de las subpáginas del flujo de trabajo, para que todas las páginas de flujo de trabajo estén bajo el prefijo `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Corregida la hora duplicada en el valor DateTime del filtro ([#8506](https://github.com/nocobase/nocobase/pull/8506)) por @zhangzhonghe
  - Corregido un problema que impedía usar variables de formulario para asignar valores en reglas de enlace para campos de subformulario de varios a muchos multinivel. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) por @gchust
  - Corregido un problema por el cual los datos no se actualizaban después de cambios en ventanas emergentes multinivel y entre bloques. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) por @gchust
  - corregido el problema por el cual los datos de subdetalle en modo de solo lectura no se mostraban correctamente en el formulario de edición ([#8469](https://github.com/nocobase/nocobase/pull/8469)) por @katherinehhh
  - corregida la lógica de refinamiento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh
  - corregidos parámetros de filtro incorrectos para el campo de relación Seleccionar en subtabla editable ([#8335](https://github.com/nocobase/nocobase/pull/8335)) por @katherinehhh
- **[motor de flujo]** corregido el problema de FilterByTK cuando filterTargetKey es un array de un solo elemento en fuente de datos externa ([#8522](https://github.com/nocobase/nocobase/pull/8522)) por @katherinehhh
- **[Empleados IA]** corregidos problemas de configuración inconsistente de campos seleccionables entre el modelado de IA y la gestión de fuentes de datos ([#8488](https://github.com/nocobase/nocobase/pull/8488)) por @cgyrock
- **[Gestor de correo electrónico]** el cuerpo no se colapsa cuando se selecciona texto. corregido error al descargar archivo adjunto por @jiannx

### [v2.0.0-beta.15](https://www.nocobase.com/en/blog/v2.0.0-beta.15)

*Fecha de lanzamiento: 2026-01-25*

### 🚀 Mejoras

- **[Visor de archivos de Office]** Añadir más tipos de archivo para previsualización en Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) por @mytharcher

### 🐛 Corrección de errores

- **[base de datos]** Corregidos errores al filtrar con el operador `empty` después de recargar una colección ([#8496](https://github.com/nocobase/nocobase/pull/8496)) por @2013xile
- **[Impresión de plantillas]** Corregida la lógica de permisos incorrecta del botón de impresión cuando los roles estaban unidos. por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregido el problema de error lanzado en la ventana emergente de registro de aprobación 1.x por @mytharcher
- **[Gestor de migraciones]** Corregida una posible congelación del proceso causada por el registro de sentencias SQL excesivamente grandes incluidas en excepciones de error de migración por @cgyrock

### [v2.0.0-beta.14](https://www.nocobase.com/en/blog/v2.0.0-beta.14)

*Fecha de lanzamiento: 2026-01-23*

### 🎉 Nuevas funciones

- **[Empleados IA]** Soporte para pegar archivos en el chat de IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) por @heziqiang

### 🚀 Mejoras

- **[cliente]**

  - Mejorar el subformulario de varios a muchos para inicializar con un elemento predeterminado y evitar la creación de registros cuando se deja vacío ([#8473](https://github.com/nocobase/nocobase/pull/8473)) por @katherinehhh
  - Mejorar los botones de carga y edición para campos de archivo adjunto en subtablas para guiar mejor a los usuarios a hacer clic para cargar. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) por @katherinehhh
- **[motor de flujo]** Mejorar ctx.libs en runjs para soportar carga bajo demanda, y añadir bibliotecas predefinidas: lodash, math y formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) por @gchust
- **[Manejador de errores]** Sanitizar errores de referencia SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) por @2013xile
- **[Flujo de trabajo: Aprobación]** Implementar control de acceso para APIs para prevenir operaciones de datos no autorizadas por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Corregido el problema por el cual los popovers del editor de texto enriquecido quedaban ocultos ([#8443](https://github.com/nocobase/nocobase/pull/8443)) por @zhangzhonghe
  - Corregida la hora duplicada en el valor DateTime del filtro ([#8484](https://github.com/nocobase/nocobase/pull/8484)) por @zhangzhonghe
  - corregido que el campo nanoid no se regenerara después de enviar el formulario ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh
  - Corregido mensaje de validación requerida duplicado al limpiar un campo en cascada ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh
  - filtrar lista para eliminar duplicados ([#8431](https://github.com/nocobase/nocobase/pull/8431)) por @jiannx
  - Corregido el problema por el cual el menú de configuración no se muestra en Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) por @zhangzhonghe
- **[base de datos]**

  - fix: actualización profunda de asociaciones anidadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos
- **[servidor]** Corregida la versión de `mathjs` en dependencias comunes ([#8475](https://github.com/nocobase/nocobase/pull/8475)) por @mytharcher
- **[motor de flujo]** Corregido un problema por el cual cerrar una ventana emergente incrustada causaba un error después de abrir consecutivamente la configuración de reglas de enlace y la ventana emergente de configuración del flujo de eventos. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) por @gchust
- **[Fuente de datos: Principal]** Corregido un problema por el cual eliminar registros de un bloque de tabla de asociación muchos a muchos no respetaba la restricción `onDelete: 'restrict'` del campo de asociación ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile
- **[Gestor de tareas asíncronas]** Corregido el problema por el cual el flujo de trabajo activado por importación asíncrona se retrasaba en ejecutarse ([#8478](https://github.com/nocobase/nocobase/pull/8478)) por @mytharcher
- **[Bloque: iframe]** Corregido el error al añadir variables agregadas a Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe
- **[Plantillas de interfaz de usuario]** Corregido un problema por el cual los bloques de plantilla de referencia no podían establecer ámbitos de datos a través de la configuración del flujo de eventos. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) por @gchust
- **[Gestor de archivos]** Corregido el problema por el cual el nombre de archivo obtenido del cuerpo de la solicitud se convertía inesperadamente en una cadena decodificada ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher
- **[Acción: Importar registros Pro]** Corregido el problema por el cual el flujo de trabajo activado por importación asíncrona se retrasaba en ejecutarse por @mytharcher
- **[Flujo de trabajo: Webhook]** Corregido el problema de falta de datos del cuerpo cuando el análisis del cuerpo no está configurado por @mytharcher
- **[Impresión de plantillas]** eliminar botones de pie de página de la configuración de la plantilla de impresión por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Corregido el problema por el cual devolver una aprobación al nodo anterior pero regresaba al inicio por @mytharcher
  - Corregido el problema por el cual la concurrencia hacía que la ejecución se reanudara repetidamente por @mytharcher
  - Corregido el problema por el cual los campos no se mostraban en las tarjetas de tareas de aprobación por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.68](https://www.nocobase.com/en/blog/v2.0.0-alpha.68)

*Fecha de lanzamiento: 2026-01-27*

### 🎉 Nuevas funciones

- **[Flujo de trabajo]** Añadir API para mover nodo ([#8507](https://github.com/nocobase/nocobase/pull/8507)) por @mytharcher

### [v2.0.0-alpha.67](https://www.nocobase.com/en/blog/v2.0.0-alpha.67)

*Fecha de lanzamiento: 2026-01-26*

### 🎉 Nuevas funciones

- **[servidor]** Refactorizar el supervisor de aplicaciones para soportar la gestión de múltiples aplicaciones en diferentes escenarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) por @2013xile
- **[cliente]** añadir componente de campo de subtabla (edición emergente) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) por @katherinehhh
- **[Empleados IA]** Soporte para pegar archivos en el chat de IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) por @heziqiang

### 🚀 Mejoras

- **[cliente]**

  - Mejorar los botones de carga y edición para campos de archivo adjunto en subtablas para guiar mejor a los usuarios a hacer clic para cargar. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) por @katherinehhh
  - Mejorar el subformulario de varios a muchos para inicializar con un elemento predeterminado y evitar la creación de registros cuando se deja vacío ([#8473](https://github.com/nocobase/nocobase/pull/8473)) por @katherinehhh
- **[motor de flujo]** Mejorar ctx.libs en runjs para soportar carga bajo demanda, y añadir bibliotecas predefinidas: lodash, math y formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) por @gchust
- **[servidor]** Soporte para configurar una lista blanca de orígenes CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) por @2013xile
- **[Gestor de archivos]** Añadir visor extensible para el gestor de archivos ([#8501](https://github.com/nocobase/nocobase/pull/8501)) por @mytharcher
- **[Visor de archivos de Office]** Añadir más tipos de archivo para previsualización en Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) por @mytharcher
- **[Manejador de errores]** Sanitizar errores de referencia SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) por @2013xile
- **[Acción: Exportar registros]** Mejorar el ámbito de datos de la acción de exportación basado en registros seleccionados o filtros de recurso ([#8442](https://github.com/nocobase/nocobase/pull/8442)) por @katherinehhh
- **[Acción: Exportar registros Pro]** Mejorar el ámbito de datos de la acción de exportación basado en registros seleccionados o filtros de recurso por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Implementar control de acceso para APIs para prevenir operaciones de datos no autorizadas por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Corregida la hora duplicada en el valor DateTime del filtro ([#8484](https://github.com/nocobase/nocobase/pull/8484)) por @zhangzhonghe
  - corregido que el campo nanoid no se regenerara después de enviar el formulario ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh
  - Corregido el problema por el cual los popovers del editor de texto enriquecido quedaban ocultos ([#8443](https://github.com/nocobase/nocobase/pull/8443)) por @zhangzhonghe
  - filtrar lista para eliminar duplicados ([#8431](https://github.com/nocobase/nocobase/pull/8431)) por @jiannx
  - Corregido mensaje de validación requerida duplicado al limpiar un campo en cascada ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh
  - Corregido el problema por el cual el menú de configuración no se muestra en Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) por @zhangzhonghe
  - corregido el problema por el cual los datos de subdetalle en modo de solo lectura no se mostraban correctamente en el formulario de edición ([#8469](https://github.com/nocobase/nocobase/pull/8469)) por @katherinehhh
  - Corregido el problema por el cual la ventana emergente "Variables personalizadas" quedaba oculta ([#8463](https://github.com/nocobase/nocobase/pull/8463)) por @zhangzhonghe
  - corregido el problema por el cual la configuración de ordenación de grupos de campos de colección no surtía efecto. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) por @katherinehhh
  - Corregido el problema por el cual el botón "Configuración de columnas" de la tabla no funcionaba ([#8441](https://github.com/nocobase/nocobase/pull/8441)) por @zhangzhonghe
  - Corregido un problema por el cual el selector emergente del campo de asociación de archivos tenía un z-index incorrecto, y la configuración emergente no se podía guardar correctamente. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) por @gchust
  - corregido el problema al editar la colección en la interfaz gráfica ([#8451](https://github.com/nocobase/nocobase/pull/8451)) por @katherinehhh
- **[base de datos]**

  - Corregidos errores al filtrar con el operador `empty` después de recargar una colección ([#8496](https://github.com/nocobase/nocobase/pull/8496)) por @2013xile
  - fix: actualización profunda de asociaciones anidadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos
- **[servidor]** Corregida la versión de `mathjs` en dependencias comunes ([#8475](https://github.com/nocobase/nocobase/pull/8475)) por @mytharcher
- **[motor de flujo]**

  - Corregido un problema por el cual cerrar una ventana emergente incrustada causaba un error después de abrir consecutivamente la configuración de reglas de enlace y la ventana emergente de configuración del flujo de eventos. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) por @gchust
  - Corregido un problema por el cual hacer clic repetidamente en el menú de configuración podía abrir múltiples ventanas emergentes de configuración. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) por @gchust
  - Corregido un problema por el cual las variables en los parámetros de código runjs se resolvían antes de la ejecución. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) por @gchust
  - Corregido un problema por el cual las variables emergentes no se podían seleccionar en la ventana emergente de creación rápida del selector de datos. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) por @gchust
- **[Empleados IA]** corregidos problemas de configuración inconsistente de campos seleccionables entre el modelado de IA y la gestión de fuentes de datos ([#8488](https://github.com/nocobase/nocobase/pull/8488)) por @cgyrock
- **[Fuente de datos: Principal]** Corregido un problema por el cual eliminar registros de un bloque de tabla de asociación muchos a muchos no respetaba la restricción `onDelete: 'restrict'` del campo de asociación ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile
- **[Bloque: iframe]** Corregido el error al añadir variables agregadas a Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe
- **[Gestor de tareas asíncronas]** Corregido el problema por el cual el flujo de trabajo activado por importación asíncrona se retrasaba en ejecutarse ([#8478](https://github.com/nocobase/nocobase/pull/8478)) por @mytharcher
- **[Gestor de archivos]** Corregido el problema por el cual el nombre de archivo obtenido del cuerpo de la solicitud se convertía inesperadamente en una cadena decodificada ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher
- **[Plantillas de interfaz de usuario]** Corregido un problema por el cual los bloques de plantilla de referencia no podían establecer ámbitos de datos a través de la configuración del flujo de eventos. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) por @gchust
- **[Móvil (obsoleto)]** Plugin móvil obsoleto (reemplazado por el plugin ui-layout desde la versión 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) por @chenos
- **[Acción: Importar registros Pro]** Corregido el problema por el cual el flujo de trabajo activado por importación asíncrona se retrasaba en ejecutarse por @mytharcher
- **[Flujo de trabajo: Webhook]** Corregido el problema de falta de datos del cuerpo cuando el análisis del cuerpo no está configurado por @mytharcher
- **[Impresión de plantillas]**

  - Corregida la lógica de permisos incorrecta del botón de impresión cuando los roles estaban unidos. por @jiannx
  - eliminar botones de pie de página de la configuración de la plantilla de impresión por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Corregido el problema por el cual los campos no se mostraban en las tarjetas de tareas de aprobación por @zhangzhonghe
  - Corregido el problema por el cual devolver una aprobación al nodo anterior pero regresaba al inicio por @mytharcher
  - Corregido el problema por el cual la concurrencia hacía que la ejecución se reanudara repetidamente por @mytharcher
  - Corregido el problema de error lanzado en la ventana emergente de registro de aprobación 1.x por @mytharcher
- **[Gestor de correo electrónico]**

  - Corregido el problema por el cual la ventana emergente de configuración de correo electrónico quedaba oculta por @zhangzhonghe
  - Corregido el problema de correos electrónicos en la misma bandeja de entrada entre múltiples usuarios y rendimiento optimizado por @jiannx
- **[Gestor de migraciones]** Corregida una posible congelación del proceso causada por el registro de sentencias SQL excesivamente grandes incluidas en excepciones de error de migración por @cgyrock
