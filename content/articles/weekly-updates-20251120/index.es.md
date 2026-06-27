---
title: "Actualizaciones semanales de NocoBase: Añadir empleado de IA para configurar gráficos"
description: "La actualización de esta semana incluye: añadir empleado de IA para configurar gráficos, optimizar el estilo de la barra de herramientas para evitar que los iconos queden ocultos, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.8](https://www.nocobase.com/en/blog/v1.9.8)

*Fecha de lanzamiento: 2025-11-19*

### 🐛 Corrección de errores

- **[Flujo de trabajo: Evento de acción personalizada]** Se corrige el error causado al escuchar eventos de fuentes de datos externas inexistentes por @mytharcher
- **[Impresión de plantilla]** Analizar las variables en el filtro por @jiannx
- **[Flujo de trabajo: Aprobación]** Se corrige un problema donde las condiciones de carrera que ocurren durante el procesamiento de aprobación concurrente por múltiples aprobadores podían causar que un nodo de flujo de trabajo se ejecutara más de una vez por @mytharcher

### [v1.9.7](https://www.nocobase.com/en/blog/v1.9.7)

*Fecha de lanzamiento: 2025-11-18*

### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema donde la regla de vinculación para el formulario de aprobación no funcionaba ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe
- **[servidor]** Se corrige un problema en el modo de división de servicios donde los mensajes de cola no suscritos no podían publicarse ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher
- **[Flujo de trabajo]**

  - Se corrige el error causado al escuchar eventos de fuentes de datos externas inexistentes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher
  - Usar eventQueue en lugar del backgroundJob compartido para evitar que la cola compartida se consuma incorrectamente en el modo de división de servicios ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Se corrige el espacio de nombres del idioma local que se debe usar para mostrar el contenido correcto de la traducción ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher
- **[Control de acceso]** Problema de que los fragmentos de operación de asociación no surten efecto ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Se corrige el problema donde el tamaño de página del canal de notificación de carga no es lo suficientemente grande y causa que la lista no se cargue completamente por @mytharcher
  - Se corrige el problema donde la regla de vinculación para el formulario de aprobación no funcionaba por @zhangzhonghe
  - Se corrige el formato de fecha en las tarjetas de lista de aprobación en el centro de tareas pendientes para mostrar la fecha y hora completas por @mytharcher
  - Se corrige un problema de rendimiento que ocurría al consultar la lista de registros de aprobación durante el envío de aprobación por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.42](https://www.nocobase.com/en/blog/v2.0.0-alpha.42)

*Fecha de lanzamiento: 2025-11-19*

### 🐛 Corrección de errores

- **[cliente]** Se corrige un problema donde el título y la descripción no se mostraban en el bloque JS. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) por @gchust

### [v2.0.0-alpha.41](https://www.nocobase.com/en/blog/v2.0.0-alpha.41)

*Fecha de lanzamiento: 2025-11-19*

### 🎉 Nuevas funciones

- **[Visualización de datos]** Añadir empleado de IA para configurar gráficos ([#7815](https://github.com/nocobase/nocobase/pull/7815)) por @heziqiang

### 🚀 Mejoras

- **[motor-de-flujo]**

  - Soporte para escuchar el evento de cambio de árbol de modelos de flujo en el motor de flujo. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) por @gchust
  - Mejorar la resolución de variables de registro actual, haciendo que abrir el diálogo sea más rápido ([#7895](https://github.com/nocobase/nocobase/pull/7895)) por @gchust
  - Se optimizó la estructura de la API de bibliotecas de terceros en el contexto de runjs y se añadió soporte para la biblioteca de iconos de Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) por @gchust
- **[base de datos]** Se refactorizó el plugin de cifrado de campos para mejorar la seguridad, soportando la generación y rotación de claves de aplicación y claves de cifrado por campo. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) por @cgyrock
- **[Campo de colección: Cifrado]** Se optimizó el plugin de cifrado de campos para soportar la recuperación de datos con IV independientes por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió el problema donde los bloques ocultos aún ocupaban espacio en la página. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) por @gchust
  - Se corrige el problema donde el botón de restablecer en el botón de filtro borra las condiciones predeterminadas ([#7903](https://github.com/nocobase/nocobase/pull/7903)) por @zhangzhonghe
  - Se corrige la verificación de permisos incorrecta para campos de subformulario en formularios nuevos ([#7902](https://github.com/nocobase/nocobase/pull/7902)) por @katherinehhh
- **[servidor]** Se corrige un problema en el modo de división de servicios donde los mensajes de cola no suscritos no podían publicarse ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher
- **[Flujo de trabajo]**

  - Se corrige el error causado al escuchar eventos de fuentes de datos externas inexistentes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher
  - Usar eventQueue en lugar del backgroundJob compartido para evitar que la cola compartida se consuma incorrectamente en el modo de división de servicios ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Se corrige el espacio de nombres del idioma local que se debe usar para mostrar el contenido correcto de la traducción ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher
- **[Control de acceso]** Problema de que los fragmentos de operación de asociación no surten efecto ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile
- **[Flujo de trabajo: Evento de acción personalizada]** Se corrige el error causado al escuchar eventos de fuentes de datos externas inexistentes por @mytharcher
- **[Comentarios]** Se corrige el problema cuando los comentarios citados en el bloque de comentarios no se muestran por @katherinehhh
- **[Impresión de plantilla]** Analizar las variables en el filtro por @jiannx
- **[Flujo de trabajo: Aprobación]** Se corrige un problema donde las condiciones de carrera que ocurren durante el procesamiento de aprobación concurrente por múltiples aprobadores podían causar que un nodo de flujo de trabajo se ejecutara más de una vez por @mytharcher

### [v2.0.0-alpha.40](https://www.nocobase.com/en/blog/v2.0.0-alpha.40)

*Fecha de lanzamiento: 2025-11-18*

### 🚀 Mejoras

- **[motor-de-flujo]** Optimizar el estilo de la barra de herramientas para evitar que los iconos se oculten ([#7883](https://github.com/nocobase/nocobase/pull/7883)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[motor-de-flujo]** Se corrigió el problema donde los datos de permisos ACL no se recargan después de cerrar sesión e iniciar sesión. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) por @gchust
- **[cliente]** Se corrigen problemas en la configuración de elementos de formulario ([#7867](https://github.com/nocobase/nocobase/pull/7867)) por @katherinehhh
- **[Visualización de datos]** Usar el modo de depuración de recursos sql solo durante la vista previa del gráfico ([#7893](https://github.com/nocobase/nocobase/pull/7893)) por @heziqiang
- **[Multi-espacio]** Usuarios asociados multi-espacio por @jiannx
- **[Flujo de trabajo: Aprobación]**

  - Se corrige el problema donde el tamaño de página del canal de notificación de carga no es lo suficientemente grande y causa que la lista no se cargue completamente por @mytharcher
  - Se corrige un problema de rendimiento que ocurría al consultar la lista de registros de aprobación durante el envío de aprobación por @mytharcher
  - Se corrige el formato de fecha en las tarjetas de lista de aprobación en el centro de tareas pendientes para mostrar la fecha y hora completas por @mytharcher

### [v2.0.0-alpha.39](https://www.nocobase.com/en/blog/v2.0.0-alpha.39)

*Fecha de lanzamiento: 2025-11-17*

### 🚀 Mejoras

- **[cliente]** Adaptar componentes para dispositivos móviles ([#7870](https://github.com/nocobase/nocobase/pull/7870)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió el problema donde la configuración de campo JS predeterminada no usaba la configuración del modo de visualización. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) por @gchust
  - Se corrige el problema donde las plantillas duplicadas no aparecen, causado por arrastrar y luego eliminar una plantilla referenciada ([#7847](https://github.com/nocobase/nocobase/pull/7847)) por @zhangzhonghe
  - Se corrigió el problema de no poder establecer el valor predeterminado del campo de fecha en el modelo de bloque de formulario de filtro. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) por @gchust
  - Se corrige el problema donde la regla de vinculación para el formulario de aprobación no funcionaba ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe
  - Se corrigió el problema de que las operaciones de edición rápida en el bloque de tabla no actualizan los datos correctamente. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) por @gchust
  - Se corrige el problema donde el campo de texto enriquecido no puede ingresar un valor predeterminado y el campo de selección múltiple no puede seleccionar múltiples opciones como valor predeterminado. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) por @gchust
- **[Administrador de múltiples aplicaciones (obsoleto)]** Después de que una subaplicación se detiene, publicar un mensaje de sincronización para notificar a otros nodos que detengan la subaplicación correspondiente ([#7849](https://github.com/nocobase/nocobase/pull/7849)) por @2013xile
- **[Flujo de trabajo: Aprobación]** Se corrige el problema donde la regla de vinculación para el formulario de aprobación no funcionaba por @zhangzhonghe
- **[Administrador de correo electrónico]** Error de actualización de ShadowHtml por @jiannx
