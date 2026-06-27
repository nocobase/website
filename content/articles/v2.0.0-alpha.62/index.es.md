---
title: "NocoBase v2.0.0-alpha.62: Mejora en las comprobaciones de permisos al modificar campos de asociación anidados"
description: "Nota de la versión v2.0.0-alpha.62"
---

### 🚀 Mejoras

- **[Control de acceso]** Mejora en las comprobaciones de permisos al modificar campos de asociación anidados ([#7856](https://github.com/nocobase/nocobase/pull/7856)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]**
  - Corrección de la lógica de refinamiento para `targetKey` opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh

  - Se corrige el problema de que los campos de asociación no son correctos en el componente `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) por @mytharcher

  - Se corrige el filtro incorrecto para el campo de relación Select en subtabla editable ([#8335](https://github.com/nocobase/nocobase/pull/8335)) por @katherinehhh

- **[motor de flujo]** Se corrige un problema por el que podía ocurrir contaminación del estado al abrir ventanas emergentes varias veces. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) por @gchust

- **[base de datos]** Se corrige el objeto `appends` en `OptionsParser` y se aumenta `arrayLimit` para los parámetros ([#8328](https://github.com/nocobase/nocobase/pull/8328)) por @mytharcher

- **[Acción: Importar registros]** Se corrige el mensaje de error incorrecto cuando se activa una restricción de unicidad durante la importación XLSX asíncrona ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock

- **[Fuente de datos: Principal]** Los metadatos de la colección de vistas deben incluir las opciones del campo de origen ([#8337](https://github.com/nocobase/nocobase/pull/8337)) por @2013xile

- **[Acción: Exportar registros Pro]** Se corrige el error al ejecutar tareas de importación/exportación asíncronas en subaplicaciones mientras la aplicación principal no tiene habilitado el plugin de importación/exportación pro por @cgyrock

- **[Flujo de trabajo: Aprobación]** Se corrige el problema de que los campos de filtro no funcionan correctamente en el centro de tareas por @mytharcher

- **[Gestor de correo electrónico]** Se muestra el botón de responder a todos y el ámbito de datos permite filtrar mensajes secundarios. por @jiannx
