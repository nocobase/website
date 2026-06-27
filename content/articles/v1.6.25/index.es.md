---
title: "NocoBase v1.6.25: Agregar CI de publicación para el kit de licencias"
description: "Nota de la versión v1.6.25"
---

### 🎉 Nuevas Funcionalidades

- **[undefined]** Añadir CI de publicación para el kit de licencias ([#6786](https://github.com/nocobase/nocobase/pull/6786)) por @jiannx

- **[Visualización de datos: ECharts]** Añadir ajuste "Invertir eje Y" para gráficos de barras por @2013xile

### 🚀 Mejoras

- **[utils]** Aumentar la altura de la lista de campos del botón de filtro y ordenar/clasificar los campos ([#6779](https://github.com/nocobase/nocobase/pull/6779)) por @zhangzhonghe

- **[client]** Optimizar el estilo del botón de añadir en subtablas y alinear el paginador en la misma fila ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh

- **[Gestor de archivos]** Añadir opción de tiempo de espera OSS con valor predeterminado de 10 minutos ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher

- **[Política de contraseñas]** Cambiar la caducidad predeterminada de la contraseña a que nunca caduque por @2013xile

- **[WeCom]** Priorizar el correo electrónico corporativo sobre el personal al actualizar el correo del usuario por @2013xile

### 🐛 Corrección de Errores

- **[client]**
  - En el bloque contraíble, al hacer clic en el botón de limpiar del cuadro de búsqueda de campos de relación, no se debe eliminar el rango de datos ([#6782](https://github.com/nocobase/nocobase/pull/6782)) por @zhangzhonghe

  - El campo de asociación no envía datos al mostrar un campo de la colección relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh

  - Prohibir mover menús antes o después de las pestañas de página ([#6777](https://github.com/nocobase/nocobase/pull/6777)) por @zhangzhonghe

  - El bloque de tabla muestra datos duplicados al filtrar ([#6792](https://github.com/nocobase/nocobase/pull/6792)) por @zhangzhonghe

  - En el formulario de filtro, cambiar el operador del campo y luego actualizar la página provoca un error ([#6781](https://github.com/nocobase/nocobase/pull/6781)) por @zhangzhonghe

- **[database]**
  - Evitar error lanzado cuando el tipo de dato no es cadena ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher

  - Añadir unavailableActions a la colección SQL y a la colección de vistas ([#6765](https://github.com/nocobase/nocobase/pull/6765)) por @katherinehhh

- **[create-nocobase-app]** Solucionar temporalmente el problema de MariaDB degradando a la versión 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) por @chenos

- **[Autenticación]** No permitir cambiar el nombre del autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile

- **[Impresión de plantillas]** Corrección: Lógica de validación de permisos corregida para prevenir acciones no autorizadas. por @sheldon66

- **[Almacenamiento de archivos: S3(Pro)]** La caducidad de la URL de acceso no es válida por @jiannx

- **[Bloque: Árbol]** Después de conectar a través de una clave foránea, al hacer clic para activar el filtrado se obtienen condiciones de filtro vacías por @zhangzhonghe
