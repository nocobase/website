---
title: "Actualizaciones semanales｜Se agregó soporte client-v2 para el complemento Kanban"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 14 al 21 de mayo de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones aún más. Ideal para usuarios de prueba que quieren experimentar nuevas funciones temprano y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.55](https://www.nocobase.com/en/blog/v2.0.55)

*Fecha de lanzamiento: 2026-05-18*

### 🚀 Mejoras

- **[Empleados IA]** Aviso sobre nombre de tabla duplicado al guardar en la base de datos vectorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock
- **[IA: Base de conocimiento]** Aviso sobre nombre de tabla duplicado al guardar en la base de datos vectorial por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió un problema por el cual las variables de registro de ventana emergente actual no se podían resolver en los flujos de eventos de los botones de acción. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust
  - Se corrigió un problema por el cual los valores de campo JS en subformularios no se establecían correctamente durante el envío del formulario. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust
- **[Gestor de archivos]** Corregir que las subidas de `tx-cos` del gestor de archivos falten metadatos de tamaño de archivo. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher
- **[Fuente de datos: Principal]** Corregir el problema por el cual las opciones de campo se escriben en el esquema después de sincronizar campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile
- **[Cliente WEB]** Limpiar datos de bloques después de eliminar menús. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) por @gchust
- **[Empleados IA]** Corregir errores de lectura de archivos OSS de empleados IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock
- **[Acción: Importar registros]** Corregir el problema por el cual el registro importado en campos similares a fechas muestra una fecha incorrecta ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher
- **[Acción: Exportar registros Pro]** Corregir el problema por el cual se lanza un error al exportar un adjunto desde un campo de URL de adjunto por @mytharcher
- **[Acción: Importar registros Pro]** corregir el manejo de zona horaria para importaciones pro xlsx por @mytharcher

### [v2.0.53](https://www.nocobase.com/en/blog/v2.0.53)

*Fecha de lanzamiento: 2026-05-14*

### 🚀 Mejoras

- **[motor-de-flujo]** Se añadió un mensaje de confirmación de cambios no guardados al cerrar la página de configuración del flujo de eventos con datos sin guardar presentes. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) por @gchust

### 🐛 Corrección de errores

- **[cliente]**

  - corregir la prevención de apertura de edición rápida para campos de relación en tabla ([#9469](https://github.com/nocobase/nocobase/pull/9469)) por @katherinehhh
  - Se corrigieron los campos de relación de solo lectura en subtablas que no se mostraban o no se podían hacer clic después de actualizar. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) por @jiannx
  - corregir que los campos de selección múltiple en bloques de datos v2 deben mostrar las etiquetas de opción en lugar de los valores ([#9472](https://github.com/nocobase/nocobase/pull/9472)) por @katherinehhh
- **[Bloque: Formulario multipaso]** corregir el problema de la barra de desplazamiento al habilitar altura completa en el bloque de formulario de pasos v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) por @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.35](https://www.nocobase.com/en/blog/v2.1.0-beta.35)

*Fecha de lanzamiento: 2026-05-20*

### 🚀 Mejoras

- **[cliente]** Compartir la evaluación de condiciones entre aplicaciones v1 y v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) por @zhangzhonghe
- **[Localización]** Se mejoraron las tareas de traducción de localización de Lina con alcance de traducción, configuración de idioma de referencia y edición rápida ([#9521](https://github.com/nocobase/nocobase/pull/9521)) por @2013xile
- **[Flujo de trabajo: Aprobación]** Mejorar las aprobaciones relacionadas con tarjetas de línea de tiempo por @zhangzhonghe

### 🐛 Corrección de errores

- **[indefinido]** alinear rutas de configuración de nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) por @chenos
- **[cli-v1]** Se corrigió el inicio de desarrollo de create-nocobase-app reutilizando shells de aplicaciones empaquetadas mientras se habilita el desarrollo de plugins locales. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) por @Molunerfinn
- **[cliente]**

  - Corregir el problema por el cual una insignia de menú todavía muestra un punto cuando su valor es 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe
  - Corregir el problema por el cual los formularios de filtro no pueden usar variables de formulario actuales ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe
- **[Autenticación]** Evitar que el servidor se bloquee cuando un token de autenticación WebSocket hace referencia a un autenticador cuyo plugin de tipo de autenticación está descargado o falta. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) por @Molunerfinn
- **[Calendario]**

  - Corregir el problema por el cual más elementos del calendario no se pueden mostrar completamente ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe
  - Se corrigió el estilo del cursor para los elementos del evento en la superposición de más eventos del calendario ([#9519](https://github.com/nocobase/nocobase/pull/9519)) por @jiannx
- **[Configuración de licencia]** resolver dependencias empaquetadas con enlace simbólico ([#9518](https://github.com/nocobase/nocobase/pull/9518)) por @chenos

### [v2.1.0-beta.34](https://www.nocobase.com/en/blog/v2.1.0-beta.34)

*Fecha de lanzamiento: 2026-05-19*

### 🎉 Nuevas funciones

- **[Bloque: Kanban]** Se añadió soporte client-v2 para el plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) por @jiannx

### 🚀 Mejoras

- **[cli]** Se mejoró la experiencia de solicitud de la CLI de NocoBase migrando los flujos de trabajo de configuración y gestión a Inquirer, y se corrigieron problemas relacionados de instalación, habilidades y tiempo de ejecución de Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) por @chenos
- **[Empleados IA]** Aviso sobre nombre de tabla duplicado al guardar en la base de datos vectorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock
- **[Gestor de notificaciones]** Cambiar la estrategia de cola para optimizar el rendimiento de envío ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Se migraron los plugins block-workbench y workflow-custom-action-trigger a cliente v2, incluyendo sus modelos de acción y flujo de escáner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) por @jiannx
- **[Autenticación]** Implementar la página de configuración de Autenticadores en client-v2 y enviar tabla client-v2 reutilizable, entrada de variable y primitivas de formulario. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) por @Molunerfinn
- **[IA: Base de conocimiento]** Aviso sobre nombre de tabla duplicado al guardar en la base de datos vectorial por @cgyrock
- **[Auth: SAML 2.0]** Agregar entradas client-v2 para los plugins de autenticación CAS y SAML para que funcionen con la página de inicio de sesión v2 y la configuración de Autenticadores. por @Molunerfinn

### 🐛 Corrección de errores

- **[client-v2]**

  - Se corrigió que la ruta v2 del plugin Kanban fallara al cargar porque el cliente no proporcionaba dependencias dnd-kit. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) por @jiannx
  - El componente de Tabla v2 compartido ahora muestra el selector de tamaño de página por defecto, coincidiendo con el comportamiento de v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) por @Molunerfinn
- **[cliente]**

  - Se corrigió un problema por el cual los valores de campo JS en subformularios no se establecían correctamente durante el envío del formulario. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust
  - Se corrigió un problema por el cual las variables de registro de ventana emergente actual no se podían resolver en los flujos de eventos de los botones de acción. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust
- **[motor-de-flujo]** Se corrigió un mensaje de error incorrecto en la consola del navegador. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) por @gchust
- **[Empleados IA]**

  - Corregir el problema por el cual los permisos de rol de operador no están teniendo efecto en los nodos de empleados IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) por @cgyrock
  - Corregir errores de lectura de archivos OSS de empleados IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock
- **[Documentación de API]** Se corrigió la documentación de API de colecciones para que los parámetros de consulta ya no interfieran entre sí ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx
- **[Fuente de datos: Principal]** Corregir el problema por el cual las opciones de campo se escriben en el esquema después de sincronizar campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile
- **[Flujo de trabajo: JavaScript]** Se corrigió la carga del paquete de tiempo de ejecución QuickJS de flujo de trabajo JavaScript en compilaciones de producción. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) por @mytharcher
- **[Cliente WEB]** Limpiar datos de bloques después de eliminar menús. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) por @gchust
- **[Acción: Importar registros]** Corregir el problema por el cual el registro importado en campos similares a fechas muestra una fecha incorrecta ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher
- **[Acción: Importar registros Pro]** corregir el manejo de zona horaria para importaciones pro xlsx por @mytharcher
- **[Auth: SAML 2.0]** Corregir el interceptor de redirección automática SAML que parpadea el shell de la aplicación y abre los cajones dos veces en cada navegación. por @Molunerfinn
- **[Acción: Exportar registros Pro]** Corregir el problema por el cual se lanza un error al exportar un adjunto desde un campo de URL de adjunto por @mytharcher

### [v2.1.0-beta.33](https://www.nocobase.com/en/blog/v2.1.0-beta.33)

*Fecha de lanzamiento: 2026-05-15*

### 🎉 Nuevas funciones

- **[Bloque: Markdown]** Se añadió soporte client v2 para bloques Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) por @jiannx
- **[Bloque: Lista]** Los bloques de lista soportan client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) por @jiannx
- **[Calendario]** Se añadió soporte client v2 para el plugin Calendario. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) por @jiannx
- **[Bloque: Árbol]** Se añadió soporte client-v2 para el bloque de filtro de árbol. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) por @jiannx

### 🚀 Mejoras

- **[motor-de-flujo]** Se añadió un mensaje de confirmación de cambios no guardados al cerrar la página de configuración del flujo de eventos con datos sin guardar presentes. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) por @gchust
- **[Gestor de fuentes de datos]** Optimizar la API de modelado de datos para soportar la creación de colecciones de comentarios con IA, configurar campos de relación para fuentes de datos externas y establecer reglas de validación de campos ([#9480](https://github.com/nocobase/nocobase/pull/9480)) por @2013xile
- **[Bloque: GridCard]** Plugin de tarjeta de cuadrícula actualizado para soportar client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) por @jiannx
- **[Bloque: iframe]** Se añadió soporte v2 para el bloque iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) por @jiannx
- **[Empleados IA]** Optimización de interacción y rendimiento de conversación paralela de empleados IA ([#9462](https://github.com/nocobase/nocobase/pull/9462)) por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Se añadió la configuración "Después del envío exitoso" para las acciones de envío de formularios. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) por @jiannx
  - corregir la prevención de apertura de edición rápida para campos de relación en tabla ([#9469](https://github.com/nocobase/nocobase/pull/9469)) por @katherinehhh
  - Se corrigieron los campos de relación de solo lectura en subtablas que no se mostraban o no se podían hacer clic después de actualizar. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) por @jiannx
  - Se corrigió el problema por el cual la configuración de valores predeterminados heredados no se puede eliminar. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust
  - corregir que los campos de selección múltiple en bloques de datos v2 deben mostrar las etiquetas de opción en lugar de los valores ([#9472](https://github.com/nocobase/nocobase/pull/9472)) por @katherinehhh
- **[client-v2]**

  - Corregir el problema por el cual la lista de opciones del campo de título está vacía para campos de relación en bloques de tabla ([#9490](https://github.com/nocobase/nocobase/pull/9490)) por @katherinehhh
  - Mantener grupos vacíos después de filtrar menús v1 en el diseño v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) por @zhangzhonghe
- **[motor-de-flujo]** Se corrigieron submenús de campo de relación inestables en menús de submodelo ([#9417](https://github.com/nocobase/nocobase/pull/9417)) por @jiannx
- **[Gestor de archivos]** Corregir que las subidas de `tx-cos` del gestor de archivos falten metadatos de tamaño de archivo. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher
- **[Empleados IA]** Se corrigió el error de carga de plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) por @cgyrock
- **[Bloque: Formulario multipaso]** corregir el problema de la barra de desplazamiento al habilitar altura completa en el bloque de formulario de pasos v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) por @katherinehhh
- **[Flujo de trabajo: Webhook]** Corregir el problema por el cual la creación de un nodo de respuesta es interceptada por la validación de la configuración de `statusCode` por @mytharcher
- **[Campo de colección: Firma]** Resolver el problema de visualización del cuadro de firma en dispositivos móviles por @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.39](https://www.nocobase.com/en/blog/v2.1.0-alpha.39)

*Fecha de lanzamiento: 2026-05-20*

### 🎉 Nuevas funciones

- **[Bloque: Kanban]** Se añadió soporte client-v2 para el plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) por @jiannx

### 🚀 Mejoras

- **[cliente]** Compartir la evaluación de condiciones entre aplicaciones v1 y v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) por @zhangzhonghe
- **[Localización]** Se mejoraron las tareas de traducción de localización de Lina con alcance de traducción, configuración de idioma de referencia y edición rápida ([#9521](https://github.com/nocobase/nocobase/pull/9521)) por @2013xile
- **[Empleados IA]** Aviso sobre nombre de tabla duplicado al guardar en la base de datos vectorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock
- **[Gestor de notificaciones]** Cambiar la estrategia de cola para optimizar el rendimiento de envío ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Se migraron los plugins block-workbench y workflow-custom-action-trigger a cliente v2, incluyendo sus modelos de acción y flujo de escáner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) por @jiannx
- **[Autenticación]** Implementar la página de configuración de Autenticadores en client-v2 y enviar tabla client-v2 reutilizable, entrada de variable y primitivas de formulario. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) por @Molunerfinn
- **[IA: Base de conocimiento]** Aviso sobre nombre de tabla duplicado al guardar en la base de datos vectorial por @cgyrock
- **[Auth: SAML 2.0]** Agregar entradas client-v2 para los plugins de autenticación CAS y SAML para que funcionen con la página de inicio de sesión v2 y la configuración de Autenticadores. por @Molunerfinn
- **[Flujo de trabajo: Aprobación]** Mejorar las aprobaciones relacionadas con tarjetas de línea de tiempo por @zhangzhonghe

### 🐛 Corrección de errores

- **[indefinido]** alinear rutas de configuración de nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) por @chenos
- **[cli-v1]** Se corrigió el inicio de desarrollo de create-nocobase-app reutilizando shells de aplicaciones empaquetadas mientras se habilita el desarrollo de plugins locales. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) por @Molunerfinn
- **[cliente]**

  - Corregir el problema por el cual los formularios de filtro no pueden usar variables de formulario actuales ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe
  - Corregir el problema por el cual una insignia de menú todavía muestra un punto cuando su valor es 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe
- **[client-v2]**

  - El componente de Tabla v2 compartido ahora muestra el selector de tamaño de página por defecto, coincidiendo con el comportamiento de v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) por @Molunerfinn
  - Se corrigió que la ruta v2 del plugin Kanban fallara al cargar porque el cliente no proporcionaba dependencias dnd-kit. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) por @jiannx
- **[Calendario]**

  - Se corrigió el estilo del cursor para los elementos del evento en la superposición de más eventos del calendario ([#9519](https://github.com/nocobase/nocobase/pull/9519)) por @jiannx
  - Corregir el problema por el cual más elementos del calendario no se pueden mostrar completamente ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe
- **[Configuración de licencia]** resolver dependencias empaquetadas con enlace simbólico ([#9518](https://github.com/nocobase/nocobase/pull/9518)) por @chenos
- **[Empleados IA]**

  - Corregir el problema por el cual los permisos de rol de operador no están teniendo efecto en los nodos de empleados IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) por @cgyrock
  - Corregir errores de lectura de archivos OSS de empleados IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock
- **[Autenticación]** Evitar que el servidor se bloquee cuando un token de autenticación WebSocket hace referencia a un autenticador cuyo plugin de tipo de autenticación está descargado o falta. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) por @Molunerfinn
- **[Documentación de API]** Se corrigió la documentación de API de colecciones para que los parámetros de consulta ya no interfieran entre sí ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx
- **[Fuente de datos: Principal]** Corregir el problema por el cual las opciones de campo se escriben en el esquema después de sincronizar campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile
- **[Auth: SAML 2.0]** Corregir el interceptor de redirección automática SAML que parpadea el shell de la aplicación y abre los cajones dos veces en cada navegación. por @Molunerfinn

### [v2.1.0-alpha.38](https://www.nocobase.com/en/blog/v2.1.0-alpha.38)

*Fecha de lanzamiento: 2026-05-18*

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió un problema por el cual las variables de registro de ventana emergente actual no se podían resolver en los flujos de eventos de los botones de acción. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust
  - Se corrigió un problema por el cual los valores de campo JS en subformularios no se establecían correctamente durante el envío del formulario. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust
- **[motor-de-flujo]** Se corrigió un mensaje de error incorrecto en la consola del navegador. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) por @gchust
- **[Flujo de trabajo: JavaScript]** Se corrigió la carga del paquete de tiempo de ejecución QuickJS de flujo de trabajo JavaScript en compilaciones de producción. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) por @mytharcher
- **[Acción: Importar registros]** Corregir el problema por el cual el registro importado en campos similares a fechas muestra una fecha incorrecta ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher
- **[Acción: Importar registros Pro]** corregir el manejo de zona horaria para importaciones pro xlsx por @mytharcher
- **[Acción: Exportar registros Pro]** Corregir el problema por el cual se lanza un error al exportar un adjunto desde un campo de URL de adjunto por @mytharcher

### [v2.1.0-alpha.37](https://www.nocobase.com/en/blog/v2.1.0-alpha.37)

*Fecha de lanzamiento: 2026-05-17*

### 🐛 Corrección de errores

- **[Cliente WEB]** Limpiar datos de bloques después de eliminar menús. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) por @gchust

### [v2.1.0-alpha.36](https://www.nocobase.com/en/blog/v2.1.0-alpha.36)

*Fecha de lanzamiento: 2026-05-16*

### 🎉 Nuevas funciones

- **[Bloque: Markdown]** Se añadió soporte client v2 para bloques Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) por @jiannx
- **[Bloque: Lista]** Los bloques de lista soportan client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) por @jiannx

### 🚀 Mejoras

- **[motor-de-flujo]** Se añadió un mensaje de confirmación de cambios no guardados al cerrar la página de configuración del flujo de eventos con datos sin guardar presentes. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) por @gchust
- **[cli]** Se mejoró la experiencia de solicitud de la CLI de NocoBase migrando los flujos de trabajo de configuración y gestión a Inquirer, y se corrigieron problemas relacionados de instalación, habilidades y tiempo de ejecución de Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) por @chenos
- **[Gestor de fuentes de datos]** Optimizar la API de modelado de datos para soportar la creación de colecciones de comentarios con IA, configurar campos de relación para fuentes de datos externas y establecer reglas de validación de campos ([#9480](https://github.com/nocobase/nocobase/pull/9480)) por @2013xile
- **[Bloque: GridCard]** Plugin de tarjeta de cuadrícula actualizado para soportar client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) por @jiannx
- **[Bloque: iframe]** Se añadió soporte v2 para el bloque iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) por @jiannx

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigieron los campos de relación de solo lectura en subtablas que no se mostraban o no se podían hacer clic después de actualizar. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) por @jiannx
  - Se añadió la configuración "Después del envío exitoso" para las acciones de envío de formularios. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) por @jiannx
- **[client-v2]** Corregir el problema por el cual la lista de opciones del campo de título está vacía para campos de relación en bloques de tabla ([#9490](https://github.com/nocobase/nocobase/pull/9490)) por @katherinehhh
- **[motor-de-flujo]** Se corrigieron submenús de campo de relación inestables en menús de submodelo ([#9417](https://github.com/nocobase/nocobase/pull/9417)) por @jiannx
- **[Gestor de archivos]** Corregir que las subidas de `tx-cos` del gestor de archivos falten metadatos de tamaño de archivo. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher
- **[Campo de colección: Firma]** Resolver el problema de visualización del cuadro de firma en dispositivos móviles por @chenzhizdt

### [v2.1.0-alpha.35](https://www.nocobase.com/en/blog/v2.1.0-alpha.35)

*Fecha de lanzamiento: 2026-05-14*

### 🎉 Nuevas funciones

- **[indefinido]** Agregar un nuevo empleado IA, Ingeniero de Localización Lina, para ayudar con las tareas de traducción de localización ([#9434](https://github.com/nocobase/nocobase/pull/9434)) por @2013xile
  Referencia: [Gestión de Localización](https://docs.nocobase.com/system-management/localization)<br>[Lina: Ingeniero de Localización](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Usar Lina y local HY-MT1.5-1.8B para traducir entradas de localización](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Calendario]** Se añadió soporte client v2 para el plugin Calendario. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) por @jiannx
- **[Bloque: Árbol]** Se añadió soporte client-v2 para el bloque de filtro de árbol. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) por @jiannx
- **[Almacenamiento de archivos: S3(Pro)]** Soporte para subir archivos a través del almacenamiento S3 Pro en el gestor de archivos v2. por @Molunerfinn

### 🚀 Mejoras

- **[compilación]** Se añadió cobertura de regresión para evitar que `deleteServerFiles` elimine los artefactos de compilación de `client` y `client-v2` en rutas de Windows y POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) por @Molunerfinn
- **[cliente]** excluir registros ya asociados en el diálogo de selección de asociación del bloque de tabla uno a muchos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh
- **[Empleados IA]** Optimización de interacción y rendimiento de conversación paralela de empleados IA ([#9462](https://github.com/nocobase/nocobase/pull/9462)) por @cgyrock
- **[Gestor de archivos]** Los plugins de almacenamiento de terceros ahora pueden registrar su propio formulario de tipo de almacenamiento en la página de configuración del gestor de archivos v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) por @Molunerfinn
- **[IA: Base de conocimiento]** El identificador único para una base de conocimiento es configurable en el momento de la creación por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - corregir la prevención de apertura de edición rápida para campos de relación en tabla ([#9469](https://github.com/nocobase/nocobase/pull/9469)) por @katherinehhh
  - corregir que los campos de selección múltiple en bloques de datos v2 deben mostrar las etiquetas de opción en lugar de los valores ([#9472](https://github.com/nocobase/nocobase/pull/9472)) por @katherinehhh
  - Corregir solicitudes de tabla duplicadas cuando los formularios de filtro tienen valores predeterminados ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe
  - Se corrigió el problema por el cual la configuración de valores predeterminados heredados no se puede eliminar. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust
  - Se corrigió el problema por el cual no se podían seleccionar opciones para el campo de selección de la asociación. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust
  - Corregir el problema por el cual la configuración del sistema aparece vacía después de enviar ([#9458](https://github.com/nocobase/nocobase/pull/9458)) por @zhangzhonghe
  - Se corrigió un problema por el cual el ámbito de datos del bloque de destino se establecía incorrectamente al deseleccionar datos de fila en un flujo de eventos de bloque de tabla. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust
  - corregir error al cambiar el campo de título del campo de asociación en el bloque de tabla v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh
  - Se corrigieron las reglas de vinculación V2 para soportar la configuración de opciones seleccionables para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx
- **[client-v2]**

  - Mantener grupos vacíos después de filtrar menús v1 en el diseño v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) por @zhangzhonghe
  - Corregir el problema por el cual la página se vuelve en blanco detrás del diálogo de habilitación del plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) por @zhangzhonghe
  - Corregir que las páginas de administración v1 se bloqueen cuando hacen referencia a módulos de plugin v2 en compilaciones de producción. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) por @Molunerfinn
- **[cli-v1]** Se corrigieron fallos de inicio de desarrollo en aplicaciones creadas con create-nocobase-app causados por la resolución de la ruta del cliente app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) por @Molunerfinn
- **[servidor]** fix(gestor-de-archivos): forzar la descarga de archivos de contenido activo en almacenamiento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher
- **[Empleados IA]**

  - Se corrigió el error de carga de plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) por @cgyrock
  - Se corrigió el vuelo de prueba de Ollama que requería entrada de clave ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock
- **[Bloque: Formulario multipaso]** corregir el problema de la barra de desplazamiento al habilitar altura completa en el bloque de formulario de pasos v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) por @katherinehhh
- **[Departamentos]** corregir conflicto de traducción entre los botones de agregar usuario y agregar departamento en la configuración de Usuarios y Permisos ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh
- **[Flujo de trabajo]** fix: restaurar texto de ayuda en los diálogos de vinculación de flujo de trabajo de FlowModel para eventos de acción de operación y personalizada ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher
- **[Bloque: Markdown]** Corregir el problema del bloque Markdown v2 que reporta errores ([#9440](https://github.com/nocobase/nocobase/pull/9440)) por @zhangzhonghe
- **[Flujo de trabajo: Webhook]** Corregir el problema por el cual la creación de un nodo de respuesta es interceptada por la validación de la configuración de `statusCode` por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir el diseño del formulario de aprobación en dispositivos móviles por @zhangzhonghe
  - Corregir el índice de registro de aprobación duplicado al delegar tareas de aprobación. por @mytharcher
- **[Gestor de copias de seguridad]** Se corrigió un problema por el cual las copias de seguridad fallaban con un error cuando no se podían encontrar archivos. por @gchust
