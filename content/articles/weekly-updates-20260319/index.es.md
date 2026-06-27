---
title: "Actualizaciones semanales｜Permite agregar empleados de IA en la ventana emergente de subtablas"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 13 al 19 de marzo de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones aún más. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.19](https://www.nocobase.com/en/blog/v2.0.19)

*Fecha de lanzamiento: 2026-03-18*

### 🚀 Mejoras

- **[Workflow]** Se corrige el problema de que el apagado ordenado no drenaba todos los eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher

### 🐛 Corrección de errores

- **[Empleados AI]** Se corrige el problema con la URL especificada para el servicio LLM que no surtía efecto en las llamadas al modelo de incrustación de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock
- **[Acción: Importar registros Pro]** Se corrige el evento `beforeStop` en la subaplicación que no se activaba por @mytharcher

### [v2.0.18](https://www.nocobase.com/en/blog/v2.0.18)

*Fecha de lanzamiento: 2026-03-17*

### 🎉 Nuevas funciones

- **[Empleados AI]**

  - Limpieza programada de los datos de punto de control de conversación de AI. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock
  - Permite añadir empleados AI en la ventana emergente de subtablas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile
- **[Supervisor de aplicaciones]** Soporte para filtrar en la lista de aplicaciones<br />Se añaden diálogos de confirmación para las acciones de iniciar y detener<br />Se ordenan las entradas de estado de la aplicación por nombre de entorno por @2013xile

### 🚀 Mejoras

- **[servidor]** mejora la lógica de pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos
- **[cliente]** Soporte para mostrar un mensaje de confirmación antes de cerrar la ventana emergente. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust
- **[Gestor de tareas asíncronas]** las tareas asíncronas se añaden para soportar workers en mensajes de error posteriores ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock

### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema de que la ventana emergente "Seleccionar registro" en la subtabla no se cargaba correctamente al abrirse por segunda vez. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust
- **[Empleados AI]** Se corrigen posibles errores de variable indefinida en los scripts de migración de actualización del plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock
- **[Acción: Importar registros Pro]** Se corrige el problema de que las tareas asíncronas no terminan después de que ocurra un error en la importación asíncrona por @cgyrock

### [v2.0.17](https://www.nocobase.com/en/blog/v2.0.17)

*Fecha de lanzamiento: 2026-03-14*

### 🚀 Mejoras

- **[indefinido]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) por @gaston98765

### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema de que los valores predeterminados de algunos campos no surtían efecto después de actualizar la página. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) por @gchust
- **[base de datos]** Se corrige el problema de validación del lado del servidor para campos de fecha ([#8867](https://github.com/nocobase/nocobase/pull/8867)) por @2013xile
- **[Localización]** localizationTexts: excepción de permiso de interfaz faltante ([#8861](https://github.com/nocobase/nocobase/pull/8861)) por @jiannx
- **[AI: Base de conocimiento]** Se evita que la base de datos vectorial y el almacenamiento vectorial en uso sean eliminados. por @cgyrock

### [v2.0.16](https://www.nocobase.com/en/blog/v2.0.16)

*Fecha de lanzamiento: 2026-03-12*

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrige que los campos conectables no se muestren al vincular bloques de datos bajo fuentes de datos externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe
  - se corrigió que la altura del bloque de tabla no fuera válida ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx
  - Se corrige el problema de que añadir un bloque de datos o actualizar la página provocaba actualizaciones dobles. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust
- **[Plantillas de UI]** Se corrigen los errores que ocurrían al usar la plantilla de bloque de formulario de edición y bloque de detalle. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust
- **[Borradores de formularios]** Se corrige el problema de que los datos del borrador del formulario se perdían cuando la ventana emergente se abría varias veces. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust
- **[Localización]** las entradas no encontradas no se enviarán en el estado de no edición de la página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx
- **[Acción: Importar registros Pro]** Se corrige el problema de que no se pueden realizar múltiples selecciones para campos duplicados en la configuración importada. por @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.9](https://www.nocobase.com/en/blog/v2.1.0-beta.9)

*Fecha de lanzamiento: 2026-03-12*

### 🐛 Corrección de errores

- **[cliente]**

  - se corrigió que la altura del bloque de tabla no fuera válida ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx
  - Se corrige el problema de que añadir un bloque de datos o actualizar la página provocaba actualizaciones dobles. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust
  - Se corrige que los campos conectables no se muestren al vincular bloques de datos bajo fuentes de datos externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe
- **[Plantillas de UI]** Se corrigen los errores que ocurrían al usar la plantilla de bloque de formulario de edición y bloque de detalle. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust
- **[Borradores de formularios]** Se corrige el problema de que los datos del borrador del formulario se perdían cuando la ventana emergente se abría varias veces. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust
- **[Localización]** las entradas no encontradas no se enviarán en el estado de no edición de la página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx
- **[Acción: Importar registros Pro]** Se corrige el problema de que no se pueden realizar múltiples selecciones para campos duplicados en la configuración importada. por @jiannx
- **[Gestor de correo electrónico]** ajustes de destinatarios de respuesta y responder a todos, corrigiendo la adición de campos de tabla fallida y otros problemas por @jiannx
- **[Gestor de migraciones]** Se corrige el problema de que las tablas del sistema no se pueden seleccionar en reglas personalizadas por @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.9](https://www.nocobase.com/en/blog/v2.1.0-alpha.9)

*Fecha de lanzamiento: 2026-03-14*

### 🎉 Nuevas funciones

- **[Empleados AI]** Permite añadir empleados AI en la ventana emergente de subtablas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile
- **[AI: Servidor MCP]** Se añade un nuevo plugin de servidor MCP para permitir la construcción de sistemas NocoBase y el soporte de flujos de trabajo empresariales. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) por @2013xile

### 🚀 Mejoras

- **[indefinido]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) por @gaston98765

### 🐛 Corrección de errores

- **[base de datos]** Se corrige el problema de validación del lado del servidor para campos de fecha ([#8867](https://github.com/nocobase/nocobase/pull/8867)) por @2013xile
- **[cliente]**

  - Se corrige que los campos conectables no se muestren al vincular bloques de datos bajo fuentes de datos externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe
  - Se corrige el problema de que añadir un bloque de datos o actualizar la página provocaba actualizaciones dobles. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust
  - Se corrige el problema de que los valores predeterminados de algunos campos no surtían efecto después de actualizar la página. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) por @gchust
  - se corrigió que la altura del bloque de tabla no fuera válida ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx
- **[Localización]**

  - localizationTexts: excepción de permiso de interfaz faltante ([#8861](https://github.com/nocobase/nocobase/pull/8861)) por @jiannx
  - las entradas no encontradas no se enviarán en el estado de no edición de la página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx
- **[Borradores de formularios]** Se corrige el problema de que los datos del borrador del formulario se perdían cuando la ventana emergente se abría varias veces. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust
- **[Plantillas de UI]** Se corrigen los errores que ocurrían al usar la plantilla de bloque de formulario de edición y bloque de detalle. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust
- **[AI: Base de conocimiento]** Se evita que la base de datos vectorial y el almacenamiento vectorial en uso sean eliminados. por @cgyrock
- **[Acción: Importar registros Pro]** Se corrige el problema de que no se pueden realizar múltiples selecciones para campos duplicados en la configuración importada. por @jiannx
- **[Gestor de correo electrónico]** ajustes de destinatarios de respuesta y responder a todos, corrigiendo la adición de campos de tabla fallida y otros problemas por @jiannx
- **[Gestor de migraciones]** Se corrige el problema de que las tablas del sistema no se pueden seleccionar en reglas personalizadas por @cgyrock
