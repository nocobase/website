---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: soporte del gestor de correo electrónico para sincronización por lotes, soporte de aprobación de flujo de trabajo para regresar a cualquier nodo en el proceso de aprobación, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.7](https://www.nocobase.com/en/blog/v1.9.0-beta.7)

*Fecha de lanzamiento: 2025-09-11*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Soporte para volver a cualquier nodo en el proceso de aprobación por @mytharcher

#### 🚀 Mejoras

- **[cliente]** Eliminar el popover de puntos suspensivos de la lista de archivos ([#7479](https://github.com/nocobase/nocobase/pull/7479)) por @mytharcher
- **[servidor]** Usar el registrador del sistema estándar para la cola de mensajes ([#7480](https://github.com/nocobase/nocobase/pull/7480)) por @mytharcher
- **[base de datos]** Optimizada la consulta de recuento de la API de lista para reducir el consumo de recursos. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) por @aaaaaajie
- **[Notificación: Mensaje en la aplicación]** Soporte para configurar el retardo de cierre automático para las notificaciones de mensajes en la aplicación ([#7472](https://github.com/nocobase/nocobase/pull/7472)) por @mytharcher
- **[Flujo de trabajo]**

  - Optimizar el proceso de preparación del flujo de trabajo para soportar el uso de datos de nodo precargados ([#7476](https://github.com/nocobase/nocobase/pull/7476)) por @mytharcher
  - Optimizar el rendimiento de las consultas para recuperar la ejecución en cola mediante el uso de campos e índices separados ([#7448](https://github.com/nocobase/nocobase/pull/7448)) por @mytharcher
  - Ajustar la API de variables del flujo de trabajo para soportar el preajuste de una lista de variables adicional ([#7439](https://github.com/nocobase/nocobase/pull/7439)) por @mytharcher
- **[Flujo de trabajo: nodo de notificación]** Soporte para probar el nodo de notificación ([#7470](https://github.com/nocobase/nocobase/pull/7470)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Soporte para usar variables relacionadas con la aprobación en notificaciones personalizadas por @mytharcher
  - Soporte para actualizar el estado de aprobación después de que el nodo final termine la ejecución por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - comprobación incorrecta de 'no vacío' para campos numéricos en la regla de vinculación ([#7477](https://github.com/nocobase/nocobase/pull/7477)) por @katherinehhh
  - error de representación del campo de asociación al cambiar al componente de etiqueta en el bloque de formulario de edición ([#7468](https://github.com/nocobase/nocobase/pull/7468)) por @katherinehhh
  - select/multiselect/date/richtext de solo lectura aún editable en formulario público ([#7484](https://github.com/nocobase/nocobase/pull/7484)) por @katherinehhh
  - problema de límite de tiempo cuando la fecha seleccionada es igual a minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) por @katherinehhh
  - validación obligatoria no funciona para campos de adjuntos en subtabla ([#7431](https://github.com/nocobase/nocobase/pull/7431)) por @katherinehhh
  - Corregir un problema por el cual, en ciertos escenarios, editar un registro en el popup del selector de registros móvil causa un error ([#7444](https://github.com/nocobase/nocobase/pull/7444)) por @zhangzhonghe
- **[indefinido]** Problema corregido con el filtrado solo por campo de fecha en fuente externa MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) por @aaaaaajie
- **[base de datos]**

  - Corregido un error de sintaxis de MySQL que ocurría al cargar más mensajes en la aplicación. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) por @aaaaaajie
  - Corregido problema de precisión para campos Número exportados ([#7421](https://github.com/nocobase/nocobase/pull/7421)) por @aaaaaajie
- **[Móvil]** campo de fecha móvil sin zona horaria no muestra la fecha/hora correctamente ([#7473](https://github.com/nocobase/nocobase/pull/7473)) por @katherinehhh
- **[Formularios públicos]** el valor predeterminado del campo del formulario público no se aplica al usar variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) por @katherinehhh
- **[Colección: Árbol]** Eliminar eventos de base de datos relacionados con la colección después de eliminar una colección de árbol ([#7459](https://github.com/nocobase/nocobase/pull/7459)) por @2013xile
- **[Gestor de archivos]** Corregir el error al editar el campo `storage` en la colección de archivos. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) por @mytharcher
- **[Acción: Importar registros]**

  - Corregir el número de fila incorrecto mostrado cuando se importan datos duplicados ([#7440](https://github.com/nocobase/nocobase/pull/7440)) por @aaaaaajie
  - Corregido un problema por el cual la importación fallaba cuando la clave primaria de la tabla era un texto de una sola línea ([#7416](https://github.com/nocobase/nocobase/pull/7416)) por @aaaaaajie
- **[Flujo de trabajo]**

  - Completar las opciones para eliminar automáticamente el estado de ejecución del flujo de trabajo ([#7436](https://github.com/nocobase/nocobase/pull/7436)) por @mytharcher
  - Corregir el problema por el cual el popup de detalle no se mostraba debido a una configuración de ruta incorrecta en el centro de tareas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) por @mytharcher
  - Corregir problemas relacionados con el menú móvil en las tareas del flujo de trabajo ([#7419](https://github.com/nocobase/nocobase/pull/7419)) por @mytharcher
- **[Flujo de trabajo: Nodo paralelo]** Corregir el problema por el cual la determinación incorrecta del estado en los nodos de rama paralela bajo el modo "Ejecutar todas las ramas" causaba una finalización prematura ([#7445](https://github.com/nocobase/nocobase/pull/7445)) por @mytharcher
- **[Acción: Importar registros Pro]** Corregido resultado de actualización inesperado al usar clave primaria de cadena en importación xlsx. por @aaaaaajie
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el problema por el cual los eventos de acción personalizada no se pueden ejecutar manualmente inmediatamente después de la inicialización por @mytharcher
- **[Flujo de trabajo: Subflujo]** Corregir el problema de que los subprocesos se reanudan y ejecutan múltiples veces por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema por el cual el texto del estado en la notificación de finalización de aprobación no se traducía por @mytharcher
  - Para los usuarios que no son el aprobador actual, el botón de vista correspondiente en la tabla de flujo del proceso no se mostrará por @mytharcher
  - Agregar la variable de estado para plantillas personalizadas en las notificaciones de finalización de aprobación por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.14](https://www.nocobase.com/en/blog/v1.9.0-alpha.14)

*Fecha de lanzamiento: 2025-09-10*

#### 🚀 Mejoras

- **[Gestor de correo electrónico]** soporta sincronización por lotes por @jiannx

#### 🐛 Corrección de errores

- **[Flujo de trabajo: Aprobación]** Corregir el problema por el cual el texto del estado en la notificación de finalización de aprobación no se traducía por @mytharcher

### [v1.9.0-alpha.13](https://www.nocobase.com/en/blog/v1.9.0-alpha.13)

*Fecha de lanzamiento: 2025-09-09*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Soporte para volver a cualquier nodo en el proceso de aprobación por @mytharcher

#### 🚀 Mejoras

- **[cliente]** Eliminar el popover de puntos suspensivos de la lista de archivos ([#7479](https://github.com/nocobase/nocobase/pull/7479)) por @mytharcher
- **[base de datos]** Optimizada la consulta de recuento de la API de lista para reducir el consumo de recursos. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) por @aaaaaajie
- **[Flujo de trabajo]**

  - Optimizar el proceso de preparación del flujo de trabajo para soportar el uso de datos de nodo precargados ([#7476](https://github.com/nocobase/nocobase/pull/7476)) por @mytharcher
  - Optimizar el rendimiento de las consultas para recuperar la ejecución en cola mediante el uso de campos e índices separados ([#7448](https://github.com/nocobase/nocobase/pull/7448)) por @mytharcher
  - Ajustar la API de variables del flujo de trabajo para soportar el preajuste de una lista de variables adicional ([#7439](https://github.com/nocobase/nocobase/pull/7439)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Soporte para configurar el retardo de cierre automático para las notificaciones de mensajes en la aplicación ([#7472](https://github.com/nocobase/nocobase/pull/7472)) por @mytharcher
- **[Flujo de trabajo: nodo de notificación]** Soporte para probar el nodo de notificación ([#7470](https://github.com/nocobase/nocobase/pull/7470)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Soporte para usar variables relacionadas con la aprobación en notificaciones personalizadas por @mytharcher
  - Soporte para actualizar el estado de aprobación después de que el nodo final termine la ejecución por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - comprobación incorrecta de 'no vacío' para campos numéricos en la regla de vinculación ([#7477](https://github.com/nocobase/nocobase/pull/7477)) por @katherinehhh
  - error de representación del campo de asociación al cambiar al componente de etiqueta en el bloque de formulario de edición ([#7468](https://github.com/nocobase/nocobase/pull/7468)) por @katherinehhh
  - problema de límite de tiempo cuando la fecha seleccionada es igual a minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) por @katherinehhh
  - Corregir un problema por el cual, en ciertos escenarios, editar un registro en el popup del selector de registros móvil causa un error ([#7444](https://github.com/nocobase/nocobase/pull/7444)) por @zhangzhonghe
  - validación obligatoria no funciona para campos de adjuntos en subtabla ([#7431](https://github.com/nocobase/nocobase/pull/7431)) por @katherinehhh
  - Corregir el problema por el cual el icono se mostraba incorrectamente cuando la URL en el campo de URL de adjunto contenía parámetros de consulta ([#7432](https://github.com/nocobase/nocobase/pull/7432)) por @mytharcher
- **[base de datos]**

  - Corregido problema de precisión para campos Número exportados ([#7421](https://github.com/nocobase/nocobase/pull/7421)) por @aaaaaajie
  - Corregido un error de sintaxis de MySQL que ocurría al cargar más mensajes en la aplicación. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) por @aaaaaajie
- **[indefinido]** Problema corregido con el filtrado solo por campo de fecha en fuente externa MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) por @aaaaaajie
- **[Móvil]** campo de fecha móvil sin zona horaria no muestra la fecha/hora correctamente ([#7473](https://github.com/nocobase/nocobase/pull/7473)) por @katherinehhh
- **[Colección: Árbol]** Eliminar eventos de base de datos relacionados con la colección después de eliminar una colección de árbol ([#7459](https://github.com/nocobase/nocobase/pull/7459)) por @2013xile
- **[Formularios públicos]** el valor predeterminado del campo del formulario público no se aplica al usar variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) por @katherinehhh
- **[Acción: Importar registros]**

  - Corregir el número de fila incorrecto mostrado cuando se importan datos duplicados ([#7440](https://github.com/nocobase/nocobase/pull/7440)) por @aaaaaajie
  - Corregido un problema por el cual la importación fallaba cuando la clave primaria de la tabla era un texto de una sola línea ([#7416](https://github.com/nocobase/nocobase/pull/7416)) por @aaaaaajie
- **[Flujo de trabajo]**

  - Corregir el problema por el cual el popup de detalle no se mostraba debido a una configuración de ruta incorrecta en el centro de tareas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) por @mytharcher
  - Completar las opciones para eliminar automáticamente el estado de ejecución del flujo de trabajo ([#7436](https://github.com/nocobase/nocobase/pull/7436)) por @mytharcher
  - Corregir problemas relacionados con el menú móvil en las tareas del flujo de trabajo ([#7419](https://github.com/nocobase/nocobase/pull/7419)) por @mytharcher
- **[Gestor de archivos]** Corregir el error al editar el campo `storage` en la colección de archivos. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) por @mytharcher
- **[Flujo de trabajo: Nodo paralelo]** Corregir el problema por el cual la determinación incorrecta del estado en los nodos de rama paralela bajo el modo "Ejecutar todas las ramas" causaba una finalización prematura ([#7445](https://github.com/nocobase/nocobase/pull/7445)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el problema por el cual los eventos de acción personalizada no se pueden ejecutar manualmente inmediatamente después de la inicialización por @mytharcher
- **[Acción: Importar registros Pro]** Corregido resultado de actualización inesperado al usar clave primaria de cadena en importación xlsx. por @aaaaaajie
- **[Flujo de trabajo: Subflujo]** Corregir el problema de que los subprocesos se reanudan y ejecutan múltiples veces por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Agregar la variable de estado para plantillas personalizadas en las notificaciones de finalización de aprobación por @mytharcher
  - Para los usuarios que no son el aprobador actual, el botón de vista correspondiente en la tabla de flujo del proceso no se mostrará por @mytharcher
