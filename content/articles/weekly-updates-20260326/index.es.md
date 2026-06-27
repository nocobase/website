---
title: "Actualizaciones semanales｜Se agregó capacidad SKILLS a los empleados de IA"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 20 al 26 de marzo de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.26](https://www.nocobase.com/en/blog/v2.0.26)

*Fecha de lanzamiento: 2026-03-25*

### 🚀 Mejoras

- **[cliente]** Optimizar el diseño horizontal de las acciones del formulario ([#8869](https://github.com/nocobase/nocobase/pull/8869)) por @jiannx

### 🐛 Corrección de errores

- **[motor de flujo]** Sincronizar el estado con la configuración del campo cuando se elimina un campo del formulario ([#8857](https://github.com/nocobase/nocobase/pull/8857)) por @jiannx
- **[Variables personalizadas]** omitir notificación de autenticación ([#8942](https://github.com/nocobase/nocobase/pull/8942)) por @chenos

### [v2.0.25](https://www.nocobase.com/en/blog/v2.0.25)

*Fecha de lanzamiento: 2026-03-24*

### 🚀 Mejoras

- **[Flujo de trabajo: Aprobación]** Corregir problema de rendimiento causado por el campo JSON al cargar la lista de registros de aprobación por @mytharcher

### 🐛 Corrección de errores

- **[servidor]** Cambiar el momento de cierre de Pub-Sub a `beforeStop`, para evitar que se envíen o manejen mensajes después de cerrar la base de datos ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher
- **[Localización]** evitar la solicitud localizationTexts:missing ante la denegación de permisos ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos
- **[Fuente de datos: Oracle externo]** Corregir un error que ocurre al cargar la fuente de datos externa de Oracle por @2013xile

### [v2.0.24](https://www.nocobase.com/en/blog/v2.0.24)

*Fecha de lanzamiento: 2026-03-22*

### 🐛 Corrección de errores

- **[resourcer]** Corregir un problema por el cual las fuentes de datos externas no se cargan correctamente. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) por @2013xile
- **[Acción: Importar registros Pro]** Corregir el problema por el cual la opción "Activar flujo de trabajo" no funciona cuando no está marcada por @mytharcher

### [v2.0.23](https://www.nocobase.com/en/blog/v2.0.23)

*Fecha de lanzamiento: 2026-03-21*

### 🐛 Corrección de errores

- **[base de datos]** Usar advertencia en lugar de error cuando alguno de los parámetros append no es válido ([#8923](https://github.com/nocobase/nocobase/pull/8923)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir problemas de traducción, selección de nodo y destino de retorno en el botón de retorno del formulario de aprobación v2 por @zhangzhonghe

### [v2.0.22](https://www.nocobase.com/en/blog/v2.0.22)

*Fecha de lanzamiento: 2026-03-20*

### 🐛 Corrección de errores

- **[Gestor de migraciones]** Se corrigió el problema por el cual la migración se interrumpía debido a un error causado porque el entorno de destino no tenía la nueva tabla creada durante el proceso de migración de carga. por @Andrew1989Y

### [v2.0.21](https://www.nocobase.com/en/blog/v2.0.21)

*Fecha de lanzamiento: 2026-03-20*

### 🚀 Mejoras

- **[Flujo de trabajo]** Añadir lista de filtros de ejecuciones ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Evitar configurar la interfaz de usuario de aprobadores cuando no hay ninguna colección configurada en el disparador por @mytharcher

### 🐛 Corrección de errores

- **[resourcer]** Evitar que el array de parámetros `filterByTk` se convierta automáticamente en un objeto cuando supera los 100 elementos ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile
- **[cliente]** corregir el problema por el cual los no administradores no pueden borrar los valores de campos asociados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx
- **[Acción: Importar registros Pro]**

  - Corregir el problema por el cual se lanzaba un error al importar en modo síncrono por @mytharcher
  - Corregir el problema por el cual más de ~30 columnas causaban un error de importación, debido a que el flujo se había leído de forma duplicada por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir problema de concurrencia al añadir un asignado por @mytharcher

### [v2.0.20](https://www.nocobase.com/en/blog/v2.0.20)

*Fecha de lanzamiento: 2026-03-19*

### 🐛 Corrección de errores

- **[servidor]** Corregir el problema por el cual los eventos del ciclo de vida enviados por el worker detienen la aplicación en servicio ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher
- **[Gestor de fuentes de datos]** Se corrigió el problema por el cual la colección creada por el empleado de IA siempre carecía de los campos `createBy` y `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock
- **[Acción: Importar registros Pro]** Corregir la importación diferida que causaba un error SES por @mytharcher
- **[Impresión de plantillas]** Corregir error de impresión de colección SQL por @jiannx
- **[Gestor de correo electrónico]** Se corrigió el error de página cuando el correo electrónico no existe por @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.11](https://www.nocobase.com/en/blog/v2.1.0-beta.11)

*Fecha de lanzamiento: 2026-03-20*

### 🚀 Mejoras

- **[Flujo de trabajo]** Añadir lista de filtros de ejecuciones ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Evitar configurar la interfaz de usuario de aprobadores cuando no hay ninguna colección configurada en el disparador por @mytharcher

### 🐛 Corrección de errores

- **[servidor]** Corregir el problema por el cual los eventos del ciclo de vida enviados por el worker detienen la aplicación en servicio ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher
- **[cliente]** corregir el problema por el cual los no administradores no pueden borrar los valores de campos asociados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx
- **[resourcer]** Evitar que el array de parámetros `filterByTk` se convierta automáticamente en un objeto cuando supera los 100 elementos ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile
- **[Acción: Importar registros Pro]**

  - Corregir el problema por el cual se lanzaba un error al importar en modo síncrono por @mytharcher
  - Corregir el problema por el cual más de ~30 columnas causaban un error de importación, debido a que el flujo se había leído de forma duplicada por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir problema de concurrencia al añadir un asignado por @mytharcher
- **[Gestor de migraciones]** Se corrigió el problema por el cual la migración se interrumpía debido a un error causado porque el entorno de destino no tenía la nueva tabla creada durante el proceso de migración de carga. por @Andrew1989Y

### [v2.1.0-beta.10](https://www.nocobase.com/en/blog/v2.1.0-beta.10)

*Fecha de lanzamiento: 2026-03-19*

### 🎉 Nuevas funciones

- **[Empleados de IA]**

  - Permite añadir empleados de IA en ventanas emergentes de subtablas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile
  - Limpieza programada de los datos de puntos de control de conversaciones de IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock
- **[Supervisor de aplicaciones]** Soporte de filtrado en la lista de aplicaciones<br />Añadir cuadros de diálogo de confirmación para las acciones de inicio y parada<br />Ordenar las entradas de estado de la aplicación por nombre de entorno por @2013xile

### 🚀 Mejoras

- **[servidor]** mejorar la lógica de pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos
- **[indefinido]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) por @gaston98765
- **[cliente]** Soporte para mostrar un mensaje de confirmación antes de cerrar la ventana emergente. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust
- **[Flujo de trabajo]** Corregir el problema por el cual el apagado ordenado no drenaba todos los eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher
- **[Gestor de tareas asíncronas]** las tareas asíncronas se añaden para soportar workers en mensajes de error de publicación ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió el problema por el cual la ventana emergente "Seleccionar registro" en la subtabla no se cargaba correctamente al abrirse por segunda vez. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust
  - Se corrigió el problema por el cual los valores predeterminados de algunos campos no surtían efecto después de actualizar la página. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) por @gchust
- **[base de datos]** Corregir el problema de validación del lado del servidor para campos de fecha ([#8867](https://github.com/nocobase/nocobase/pull/8867)) por @2013xile
- **[Gestor de fuentes de datos]** Se corrigió el problema por el cual la colección creada por el empleado de IA siempre carecía de los campos `createBy` y `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock
- **[Empleados de IA]**

  - Corregir problema con la URL especificada para el servicio LLM que no surtía efecto en las llamadas al modelo de incrustación de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock
  - Se corrigieron posibles errores de variable indefinida en los scripts de migración de actualización del plugin de IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock
- **[Localización]** Excepción de permiso de interfaz localizationTexts:missing ([#8861](https://github.com/nocobase/nocobase/pull/8861)) por @jiannx
- **[Acción: Importar registros Pro]**

  - Corregir evento `beforeStop` en sub-aplicación no disparado por @mytharcher
  - Corregir la importación diferida que causaba un error SES por @mytharcher
  - Corregir el problema por el cual las tareas asíncronas no terminan después de que ocurre un error en la importación asíncrona por @cgyrock
- **[IA: Base de conocimiento]** Evitar que se eliminen la base de datos vectorial y el almacenamiento vectorial en uso. por @cgyrock
- **[Impresión de plantillas]** Corregir error de impresión de colección SQL por @jiannx
- **[Gestor de correo electrónico]** Se corrigió el error de página cuando el correo electrónico no existe por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.11](https://www.nocobase.com/en/blog/v2.1.0-alpha.11)

*Fecha de lanzamiento: 2026-03-25*

### 🎉 Nuevas funciones

- **[cliente]** añadir acción de elemento JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) por @jiannx
- **[Empleados de IA]** Se añadió la capacidad SKILLS a los empleados de IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) por @cgyrock
- **[Gestor de fuentes de datos]** Soporte para carga bajo demanda de herramientas MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) por @2013xile

### 🚀 Mejoras

- **[motor de flujo]** Mejorar la validación del esquema para la API de construcción de UI. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust
- **[cliente]** Optimizar el diseño horizontal de las acciones del formulario ([#8869](https://github.com/nocobase/nocobase/pull/8869)) por @jiannx
- **[app]** Añadir un flujo de trabajo de desarrollo basado en Rsbuild para client-v1 mientras se mantiene la compatibilidad con el desarrollo de plugins local y la topología actual `/v2/` ([#8902](https://github.com/nocobase/nocobase/pull/8902)) por @Molunerfinn
- **[Campo de colección: divisiones administrativas de China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) por @jiannx
- **[Flujo de trabajo]** Añadir validación para todos los disparadores y nodos ([#8930](https://github.com/nocobase/nocobase/pull/8930)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir problema de rendimiento causado por el campo JSON al cargar la lista de registros de aprobación por @mytharcher

### 🐛 Corrección de errores

- **[motor de flujo]** Sincronizar el estado con la configuración del campo cuando se elimina un campo del formulario ([#8857](https://github.com/nocobase/nocobase/pull/8857)) por @jiannx
- **[resourcer]** Corregir un problema por el cual las fuentes de datos externas no se cargan correctamente. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) por @2013xile
- **[base de datos]** Usar advertencia en lugar de error cuando alguno de los parámetros append no es válido ([#8923](https://github.com/nocobase/nocobase/pull/8923)) por @mytharcher
- **[servidor]** Cambiar el momento de cierre de Pub-Sub a `beforeStop`, para evitar que se envíen o manejen mensajes después de cerrar la base de datos ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher
- **[Variables personalizadas]** omitir notificación de autenticación ([#8942](https://github.com/nocobase/nocobase/pull/8942)) por @chenos
- **[Empleados de IA]** Corregir casos de prueba fallidos en el módulo de IA del paquete principal. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) por @cgyrock
- **[Localización]** evitar la solicitud localizationTexts:missing ante la denegación de permisos ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos
- **[Acción: Importar registros Pro]** Corregir el problema por el cual la opción "Activar flujo de trabajo" no funciona cuando no está marcada por @mytharcher
- **[Fuente de datos: Oracle externo]** Corregir un error que ocurre al cargar la fuente de datos externa de Oracle por @2013xile
- **[Flujo de trabajo: Aprobación]** Corregir problemas de traducción, selección de nodo y destino de retorno en el botón de retorno del formulario de aprobación v2 por @zhangzhonghe

### [v2.1.0-alpha.10](https://www.nocobase.com/en/blog/v2.1.0-alpha.10)

*Fecha de lanzamiento: 2026-03-20*

### 🎉 Nuevas funciones

- **[IdP: OAuth]** Añadir un nuevo plugin IdP: OAuth para permitir que los servicios MCP se autentiquen mediante OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) por @2013xile
- **[Empleados de IA]** Limpieza programada de los datos de puntos de control de conversaciones de IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock
- **[Supervisor de aplicaciones]** Soporte de filtrado en la lista de aplicaciones<br />Añadir cuadros de diálogo de confirmación para las acciones de inicio y parada<br />Ordenar las entradas de estado de la aplicación por nombre de entorno por @2013xile

### 🚀 Mejoras

- **[servidor]** mejorar la lógica de pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos
- **[cliente]** Soporte para mostrar un mensaje de confirmación antes de cerrar la ventana emergente. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust
- **[indefinido]** Añadir una entrada dedicada client-v2 y construirla de forma independiente con rsbuild mientras se mantiene v1 sin cambios. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) por @Molunerfinn
- **[Flujo de trabajo]**

  - Corregir el problema por el cual el apagado ordenado no drenaba todos los eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher
  - Añadir lista de filtros de ejecuciones ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher
- **[Gestor de tareas asíncronas]** las tareas asíncronas se añaden para soportar workers en mensajes de error de publicación ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock
- **[Flujo de trabajo: Aprobación]** Evitar configurar la interfaz de usuario de aprobadores cuando no hay ninguna colección configurada en el disparador por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - corregir el problema por el cual los no administradores no pueden borrar los valores de campos asociados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx
  - Se corrigió el problema por el cual la ventana emergente "Seleccionar registro" en la subtabla no se cargaba correctamente al abrirse por segunda vez. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust
- **[resourcer]** Evitar que el array de parámetros `filterByTk` se convierta automáticamente en un objeto cuando supera los 100 elementos ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile
- **[servidor]** Corregir el problema por el cual los eventos del ciclo de vida enviados por el worker detienen la aplicación en servicio ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher
- **[Gestor de fuentes de datos]** Se corrigió el problema por el cual la colección creada por el empleado de IA siempre carecía de los campos `createBy` y `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock
- **[Empleados de IA]**

  - Corregir problema con la URL especificada para el servicio LLM que no surtía efecto en las llamadas al modelo de incrustación de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock
  - Se corrigieron posibles errores de variable indefinida en los scripts de migración de actualización del plugin de IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock
- **[Acción: Importar registros Pro]**

  - Corregir el problema por el cual más de ~30 columnas causaban un error de importación, debido a que el flujo se había leído de forma duplicada por @mytharcher
  - Corregir el problema por el cual se lanzaba un error al importar en modo síncrono por @mytharcher
  - Corregir evento `beforeStop` en sub-aplicación no disparado por @mytharcher
  - Corregir el problema por el cual las tareas asíncronas no terminan después de que ocurre un error en la importación asíncrona por @cgyrock
  - Corregir la importación diferida que causaba un error SES por @mytharcher
- **[Impresión de plantillas]** Corregir error de impresión de colección SQL por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregir problema de concurrencia al añadir un asignado por @mytharcher
- **[Gestor de correo electrónico]** Se corrigió el error de página cuando el correo electrónico no existe por @jiannx
- **[Gestor de migraciones]** Se corrigió el problema por el cual la migración se interrumpía debido a un error causado porque el entorno de destino no tenía la nueva tabla creada durante el proceso de migración de carga. por @Andrew1989Y
