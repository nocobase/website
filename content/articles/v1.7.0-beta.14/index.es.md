---
title: "NocoBase v1.7.0-beta.14: Se agregó el módulo de localización"
description: "Nota de la versión v1.7.0-beta.14"
---

### 🎉 Nuevas Funcionalidades

- **[Almacenamiento de esquemas UI]** Se añadió el módulo de localización para UISchema, permitiendo traducciones personalizadas para el título y la descripción del esquema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) por @chenos

### 🚀 Mejoras

- **[utils]** Añadir extensión de duración para dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) por @mytharcher

- **[cliente]**
  - Soporte para buscar campos en el componente Filtro ([#6627](https://github.com/nocobase/nocobase/pull/6627)) por @mytharcher

  - Añadir API `trim` para `Input` y `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) por @mytharcher

- **[Flujo de trabajo]** Optimizar la lógica de guardado de trabajos ([#6613](https://github.com/nocobase/nocobase/pull/6613)) por @mytharcher

- **[Manejador de errores]** Soporte para título personalizado en el componente AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) por @sheldon66

- **[Restricción IP]** Actualizar el contenido del mensaje de restricción IP. por @sheldon66

- **[Almacenamiento de archivos: S3(Pro)]** Soporte para variables globales en la configuración de almacenamiento por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Los campos de relación en el formulario de filtro reportan un error después de recargar la página porque no se incluye x-data-source ([#6619](https://github.com/nocobase/nocobase/pull/6619)) por @zhangzhonghe

  - Problema de datos con el bloque Gantt en colecciones de árbol ([#6617](https://github.com/nocobase/nocobase/pull/6617)) por @katherinehhh

  - Área en blanco entre el título de la página de configuración de la plantilla de bloque y el menú ([#6625](https://github.com/nocobase/nocobase/pull/6625)) por @gchust

  - La regla con condición 'cualquiera' no tiene efecto cuando la lista de condiciones está vacía ([#6628](https://github.com/nocobase/nocobase/pull/6628)) por @katherinehhh

  - La propiedad x-disabled no tiene efecto en los campos del formulario ([#6610](https://github.com/nocobase/nocobase/pull/6610)) por @katherinehhh

  - Error al analizar variables cuando los parámetros URL contienen caracteres chinos ([#6618](https://github.com/nocobase/nocobase/pull/6618)) por @katherinehhh

  - Problema de visualización de la etiqueta del campo para evitar que se trunque por dos puntos ([#6599](https://github.com/nocobase/nocobase/pull/6599)) por @katherinehhh

- **[Acción: Exportar registros]** Faltan parámetros de filtro al exportar datos después de cambiar la paginación ([#6633](https://github.com/nocobase/nocobase/pull/6633)) por @katherinehhh

- **[Usuarios]** Problema al analizar el esquema del formulario de perfil de usuario ([#6635](https://github.com/nocobase/nocobase/pull/6635)) por @2013xile

- **[Móvil]** El campo de selección única con filtro 'contiene' en móvil no soporta selección múltiple ([#6629](https://github.com/nocobase/nocobase/pull/6629)) por @katherinehhh

- **[Control de acceso]** Corregir la lógica de cálculo de unión de roles ([#6605](https://github.com/nocobase/nocobase/pull/6605)) por @aaaaaajie

- **[Bloque: plantilla]** Modificar y eliminar los mismos campos desde la plantilla y el bloque, después de crear un bloque a partir de una plantilla, puede causar errores de renderizado ([#6626](https://github.com/nocobase/nocobase/pull/6626)) por @gchust

- **[Gestor de correo electrónico]**
  - Corregir la falta de await para la siguiente llamada. por @jiannx

  - Corregir permiso de gestión de correo electrónico que no permite ver la lista de correos por @jiannx

- **[Almacenamiento de archivos: S3(Pro)]**
  - Corregir la falta de await para la siguiente llamada. por @jiannx

  - Lanzar error al usuario al subir el logotipo al almacenamiento S3 Pro (configurado como predeterminado) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corregir `updatedAt` cambiado después de la migración por @mytharcher

- **[Gestor de migraciones]** La hora de creación del registro de migración se muestra incorrectamente en algunos entornos por @gchust
