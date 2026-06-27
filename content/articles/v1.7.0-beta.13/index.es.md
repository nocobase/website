---
title: "NocoBase v1.7.0-beta.13: Soporte para usar plantilla de bloque en el formulario del proceso de aprobación"
description: "Nota de la versión v1.7.0-beta.13"
---

### 🚀 Mejoras

- **[base de datos]**
  - Añadir opción de recorte para campo de texto ([#6603](https://github.com/nocobase/nocobase/pull/6603)) por @mytharcher

  - Añadir opción de recorte para campo de cadena ([#6565](https://github.com/nocobase/nocobase/pull/6565)) por @mytharcher

- **[cliente]** soporte para configurar la visibilidad de los dos puntos en las etiquetas de los campos del formulario según el diseño ([#6561](https://github.com/nocobase/nocobase/pull/6561)) por @katherinehhh

- **[Gestor de archivos]** Añadir opción de recorte para campos de texto de la colección de almacenamientos ([#6604](https://github.com/nocobase/nocobase/pull/6604)) por @mytharcher

- **[Flujo de trabajo]** Mejorar código ([#6589](https://github.com/nocobase/nocobase/pull/6589)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Soporte para usar plantilla de bloque para el formulario del proceso de aprobación por @mytharcher

### 🐛 Corrección de errores

- **[base de datos]**
  - Evitar cambios en el campo "datetimeNoTz" cuando el valor no ha cambiado al actualizar un registro ([#6588](https://github.com/nocobase/nocobase/pull/6588)) por @mytharcher

  - Al eliminar registros uno a muchos, si se pasan tanto `filter` como `filterByTk` y `filter` incluye un campo de asociación, se ignora `filterByTk` ([#6606](https://github.com/nocobase/nocobase/pull/6606)) por @2013xile

- **[cliente]**
  - Corregir que la propiedad `disabled` no funciona cuando `SchemaInitializerItem` tiene `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) por @mytharcher

  - Problema en cascada: 'El valor de xxx no puede estar en formato array' al eliminar y volver a seleccionar ([#6585](https://github.com/nocobase/nocobase/pull/6585)) por @katherinehhh

  - Campo de asociación (selección) mostrando N/A al exponer campos de la colección relacionada ([#6582](https://github.com/nocobase/nocobase/pull/6582)) por @katherinehhh

  - Los botones de enviar y actualizar no se muestran correctamente en modo solo icono ([#6592](https://github.com/nocobase/nocobase/pull/6592)) por @katherinehhh

- **[Formularios públicos]** Los permisos de vista incluyen listar y obtener ([#6607](https://github.com/nocobase/nocobase/pull/6607)) por @chenos

- **[Autenticación]** Asignación de token en `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) por @2013xile

- **[Campo de colección: Muchos a muchos (array)]** Problema al filtrar por campos en una colección de asociación con un campo muchos a muchos (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) por @2013xile

- **[Flujo de trabajo]** Corregir que la opción de sincronización se muestra incorrectamente ([#6595](https://github.com/nocobase/nocobase/pull/6595)) por @mytharcher

- **[Bloque: Mapa]** La validación de la gestión del mapa no debe pasar con entrada de espacios ([#6575](https://github.com/nocobase/nocobase/pull/6575)) por @katherinehhh

- **[Auth: OIDC]** Redirección incorrecta cuando la ruta de callback es la cadena 'null' por @2013xile

- **[Flujo de trabajo: Aprobación]**
  - Corregir variables del cliente para usar en el formulario de aprobación por @mytharcher

  - Corregir modo de rama cuando `endOnReject` está configurado como `true` por @mytharcher
