---
title: "Actualizaciones semanales de NocoBase: Optimizar la lógica de guardado de trabajos"
description: "Las actualizaciones de esta semana incluyen: soporte para búsqueda de campos en el componente Filtro, soporte para variables globales en la configuración de almacenamiento, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.16](https://www.nocobase.com/en/blog/v1.6.16)

*Fecha de lanzamiento: 2025-04-03*

#### 🐛 Corrección de errores

- **[cliente]**

  - La propiedad x-disabled no funciona en los campos de formulario ([#6610](https://github.com/nocobase/nocobase/pull/6610)) por @katherinehhh
  - Problema de visualización de la etiqueta del campo para evitar truncamiento por dos puntos ([#6599](https://github.com/nocobase/nocobase/pull/6599)) por @katherinehhh
- **[base de datos]** Al eliminar registros uno a muchos, se pasan tanto `filter` como `filterByTk` y `filter` incluye un campo de asociación, se ignora `filterByTk` ([#6606](https://github.com/nocobase/nocobase/pull/6606)) por @2013xile

### [v1.6.17](https://www.nocobase.com/en/blog/v1.6.17)

*Fecha de lanzamiento: 2025-04-09*

#### 🚀 Mejoras

- **[utilidades]** Añadir extensión de duración para dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) por @mytharcher
- **[cliente]**

  - Soporte para buscar campo en el componente Filtro ([#6627](https://github.com/nocobase/nocobase/pull/6627)) por @mytharcher
  - Añadir API `trim` para `Input` y `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) por @mytharcher
- **[Manejador de errores]** Soporte para título personalizado en el componente AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) por @sheldon66
- **[Restricción de IP]** Actualizar el contenido del mensaje de restricción de IP. por @sheldon66
- **[Almacenamiento de archivos: S3(Pro)]** Soporte para variables globales en la configuración de almacenamiento por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - La regla con condición 'cualquiera' no funciona cuando la lista de condiciones está vacía ([#6628](https://github.com/nocobase/nocobase/pull/6628)) por @katherinehhh
  - Problema de datos con el bloque Gantt en la colección de árbol ([#6617](https://github.com/nocobase/nocobase/pull/6617)) por @katherinehhh
  - Los campos de relación en el formulario de filtro reportan un error después de actualizar la página porque no se incluye x-data-source ([#6619](https://github.com/nocobase/nocobase/pull/6619)) por @zhangzhonghe
  - Fallo en el análisis de variables cuando los parámetros URL contienen caracteres chinos ([#6618](https://github.com/nocobase/nocobase/pull/6618)) por @katherinehhh
- **[Usuarios]** Problema con el análisis del esquema del formulario de perfil de usuario ([#6635](https://github.com/nocobase/nocobase/pull/6635)) por @2013xile
- **[Móvil]** El campo de selección única con filtro 'contiene' en móvil no soporta selección múltiple ([#6629](https://github.com/nocobase/nocobase/pull/6629)) por @katherinehhh
- **[Acción: Exportar registros]** Faltan parámetros de filtro al exportar datos después de cambiar la paginación ([#6633](https://github.com/nocobase/nocobase/pull/6633)) por @katherinehhh
- **[Gestor de correo electrónico]** Corregir permiso de gestión de correo electrónico que no puede ver la lista de correos por @jiannx
- **[Almacenamiento de archivos: S3(Pro)]** Lanzar error al usuario al subir logo al almacenamiento S3 Pro (establecido por defecto) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir `updatedAt` cambiado después de la migración por @mytharcher
- **[Gestor de migraciones]** La hora de creación del registro de migración se muestra incorrectamente en algunos entornos por @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.14](https://www.nocobase.com/en/blog/v1.7.0-beta.14)

*Fecha de lanzamiento: 2025-04-09*

#### 🎉 Nuevas funciones

- **[Almacenamiento de esquema UI]** Se añadió módulo de localización para UISchema, permitiendo traducciones personalizadas para el título y la descripción del esquema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) por @chenos

#### 🚀 Mejoras

- **[utilidades]** Añadir extensión de duración para dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) por @mytharcher
- **[cliente]**

  - Soporte para buscar campo en el componente Filtro ([#6627](https://github.com/nocobase/nocobase/pull/6627)) por @mytharcher
  - Añadir API `trim` para `Input` y `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) por @mytharcher
- **[Flujo de trabajo]** Optimizar la lógica de guardado de trabajos ([#6613](https://github.com/nocobase/nocobase/pull/6613)) por @mytharcher
- **[Manejador de errores]** Soporte para título personalizado en el componente AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) por @sheldon66
- **[Restricción de IP]** Actualizar el contenido del mensaje de restricción de IP. por @sheldon66
- **[Almacenamiento de archivos: S3(Pro)]** Soporte para variables globales en la configuración de almacenamiento por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Los campos de relación en el formulario de filtro reportan un error después de actualizar la página porque no se incluye x-data-source ([#6619](https://github.com/nocobase/nocobase/pull/6619)) por @zhangzhonghe
  - Problema de datos con el bloque Gantt en la colección de árbol ([#6617](https://github.com/nocobase/nocobase/pull/6617)) por @katherinehhh
  - Área en blanco entre el título de la página de configuración de la plantilla de bloque y el menú ([#6625](https://github.com/nocobase/nocobase/pull/6625)) por @gchust
  - La regla con condición 'cualquiera' no funciona cuando la lista de condiciones está vacía ([#6628](https://github.com/nocobase/nocobase/pull/6628)) por @katherinehhh
  - La propiedad x-disabled no funciona en los campos de formulario ([#6610](https://github.com/nocobase/nocobase/pull/6610)) por @katherinehhh
  - Fallo en el análisis de variables cuando los parámetros URL contienen caracteres chinos ([#6618](https://github.com/nocobase/nocobase/pull/6618)) por @katherinehhh
  - Problema de visualización de la etiqueta del campo para evitar truncamiento por dos puntos ([#6599](https://github.com/nocobase/nocobase/pull/6599)) por @katherinehhh
- **[Acción: Exportar registros]** Faltan parámetros de filtro al exportar datos después de cambiar la paginación ([#6633](https://github.com/nocobase/nocobase/pull/6633)) por @katherinehhh
- **[Usuarios]** Problema con el análisis del esquema del formulario de perfil de usuario ([#6635](https://github.com/nocobase/nocobase/pull/6635)) por @2013xile
- **[Móvil]** El campo de selección única con filtro 'contiene' en móvil no soporta selección múltiple ([#6629](https://github.com/nocobase/nocobase/pull/6629)) por @katherinehhh
- **[Control de acceso]** Corregir la lógica de cálculo de unión de roles ([#6605](https://github.com/nocobase/nocobase/pull/6605)) por @aaaaaajie
- **[Bloque: plantilla]** Modificar y eliminar los mismos campos de la plantilla y el bloque, después de crear un bloque a partir de una plantilla, puede causar errores de renderizado ([#6626](https://github.com/nocobase/nocobase/pull/6626)) por @gchust
- **[Gestor de correo electrónico]**

  - Corregir falta de await para la siguiente llamada. por @jiannx
  - Corregir permiso de gestión de correo electrónico que no puede ver la lista de correos por @jiannx
- **[Almacenamiento de archivos: S3(Pro)]**

  - Corregir falta de await para la siguiente llamada. por @jiannx
  - Lanzar error al usuario al subir logo al almacenamiento S3 Pro (establecido por defecto) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir `updatedAt` cambiado después de la migración por @mytharcher
- **[Gestor de migraciones]** La hora de creación del registro de migración se muestra incorrectamente en algunos entornos por @gchust
