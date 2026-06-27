---
title: "NocoBase v2.0.0-alpha.36: Optimizar los estilos de la barra de herramientas para las pestañas de página"
description: "Nota de la versión v2.0.0-alpha.36"
---

### 🚀 Mejoras

- **[flow-engine]** Optimizar los estilos de la barra de herramientas de las pestañas de página ([#7795](https://github.com/nocobase/nocobase/pull/7795)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[flow-engine]**
  - Se corrigió un problema por el cual las variables en los campos de asociación de subformularios no se resolvían correctamente cuando el campo se modificaba a través de la interfaz de usuario. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) por @gchust

  - Error en el formulario de edición para registros con clave primaria múltiple ([#7798](https://github.com/nocobase/nocobase/pull/7798)) por @gchust

  - Se corrigió un problema por el cual ciertas configuraciones para la acción "Abrir vista" no se aplicaban, asegurando que la acción ahora funcione según lo previsto para todas las configuraciones especificadas. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) por @gchust

- **[cliente]**
  - Corregir que el selector de campo de colección no pueda seleccionar la colección correctamente ([#7794](https://github.com/nocobase/nocobase/pull/7794)) por @katherinehhh

  - No se puede ocultar la columna de acciones del bloque de tabla ([#7804](https://github.com/nocobase/nocobase/pull/7804)) por @gchust

  - Soporte para seleccionar el objeto variable completo en el prompt del empleado de IA ([#7791](https://github.com/nocobase/nocobase/pull/7791)) por @gchust

- **[Usuarios]** Actualización incorrecta del índice cuando los nombres de campo usan el estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile
