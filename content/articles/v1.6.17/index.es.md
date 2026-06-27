---
title: "NocoBase v1.6.17: Soporte para buscar campo en el componente Filtro"
description: "Nota de la versión v1.6.17"
---

### 🚀 Mejoras

- **[utils]** Añadir extensión de duración para dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) por @mytharcher

- **[client]**
  - Soporte para buscar campos en el componente Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) por @mytharcher

  - Añadir API `trim` para `Input` y `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) por @mytharcher

- **[Manejador de errores]** Soporte para título personalizado en el componente AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) por @sheldon66

- **[Restricción de IP]** Actualizar el contenido del mensaje de restricción de IP. por @sheldon66

- **[Almacenamiento de archivos: S3(Pro)]** Soporte para variables globales en la configuración de almacenamiento por @mytharcher

### 🐛 Corrección de errores

- **[client]**
  - La regla con condición 'cualquiera' no tiene efecto cuando la lista de condiciones está vacía ([#6628](https://github.com/nocobase/nocobase/pull/6628)) por @katherinehhh

  - Problema de datos con el bloque Gantt en colecciones de árbol ([#6617](https://github.com/nocobase/nocobase/pull/6617)) por @katherinehhh

  - Los campos de relación en el formulario de filtro reportan un error después de actualizar la página porque no se incluye x-data-source ([#6619](https://github.com/nocobase/nocobase/pull/6619)) por @zhangzhonghe

  - Fallo en el análisis de variables cuando los parámetros de URL contienen caracteres chinos ([#6618](https://github.com/nocobase/nocobase/pull/6618)) por @katherinehhh

- **[Usuarios]** Problema al analizar el esquema del formulario de perfil de usuario ([#6635](https://github.com/nocobase/nocobase/pull/6635)) por @2013xile

- **[Móvil]** El campo de selección única con filtro 'contiene' en móvil no admite selección múltiple ([#6629](https://github.com/nocobase/nocobase/pull/6629)) por @katherinehhh

- **[Acción: Exportar registros]** Faltan parámetros de filtro al exportar datos después de cambiar la paginación ([#6633](https://github.com/nocobase/nocobase/pull/6633)) por @katherinehhh

- **[Gestor de correo electrónico]** corregir permiso de gestión de correo electrónico que no permite ver la lista de correos por @jiannx

- **[Almacenamiento de archivos: S3(Pro)]** Lanzar error al usuario al subir el logotipo al almacenamiento S3 Pro (establecido como predeterminado) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corregir `updatedAt` cambiado después de la migración por @mytharcher

- **[Gestor de migraciones]** La hora de creación del registro de migración se muestra incorrectamente en algunos entornos por @gchust
