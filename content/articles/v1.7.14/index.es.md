---
title: "NocoBase v1.7.14: Ocultar automáticamente la barra de acciones del bloque de tarjeta de cuadrícula cuando está vacía"
description: "Nota de la versión v1.7.14"
---

### 🚀 Mejoras

- **[cliente]** Ocultar automáticamente la barra de acciones del bloque de tarjetas de cuadrícula cuando está vacía ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe

- **[Verificación]** Eliminar las opciones de verificador de la respuesta de la API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile

### 🐛 Corrección de errores

- **[base de datos]** soportar actualizaciones de asociaciones en updateOrCreate y firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos

- **[cliente]**
  - Las variables de parámetros de consulta de URL no funcionan en el valor predeterminado del campo de formulario público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh

  - La condición de estilo en los campos de columna de subtabla no se aplica correctamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh

  - El filtrado a través de campos de colección de relación en formularios de filtro no es válido ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe

- **[Campo de colección: Muchos a muchos (matriz)]** Actualizar un campo de muchos a muchos (matriz) genera un error cuando el campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile

- **[Formularios públicos]** Formularios públicos: Corregir problema de acceso no autorizado al enviar el formulario ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe
