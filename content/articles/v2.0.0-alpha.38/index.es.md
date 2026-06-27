---
title: "NocoBase v2.0.0-alpha.38: Soporte para arrastrar acciones de columna en tabla"
description: "Nota de la versión v2.0.0-alpha.38"
---

### 🎉 Nuevas funciones

- **[cliente]** Soporte para arrastrar acciones de columna en tablas ([#7842](https://github.com/nocobase/nocobase/pull/7842)) por @zhangzhonghe

- **[Visualización de datos]** Añadir fuente de datos SQL para gráficos ([#7830](https://github.com/nocobase/nocobase/pull/7830)) por @heziqiang

### 🚀 Mejoras

- **[cliente]** Se añadió soporte para la librería Day.js en el contexto de scripting RunJS, facilitando manipulaciones de fecha y hora. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) por @gchust

### 🐛 Corrección de errores

- **[utils]**
  - Corregido el error "Invalid filter item type" en el botón de filtro ([#7838](https://github.com/nocobase/nocobase/pull/7838)) por @zhangzhonghe

  - Habilitar la fusión de objetos en la estrategia intersect ([#7840](https://github.com/nocobase/nocobase/pull/7840)) por @chenos

  - Corregido el error 'Unrecognized operation' en el flujo de eventos ([#7835](https://github.com/nocobase/nocobase/pull/7835)) por @zhangzhonghe

- **[cliente]**
  - Se corrigió un problema por el cual las reglas de vinculación para los botones de acción de fila en un bloque de tabla no se re-ejecutaban después de actualizar los datos de la fila, asegurando que las reglas se re-apliquen correctamente cuando ocurren cambios. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) por @gchust

  - Corregidos los errores al previsualizar código en el editor de código si el código contiene sintaxis jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) por @gchust

- **[undefined]** Corregido el problema de estilo incorrecto en la página de inicio de la documentación del plugin en modo oscuro. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) por @gchust

- **[Gestor de archivos]** corregidos problemas de configuración de campos en bloques de tabla ([#7843](https://github.com/nocobase/nocobase/pull/7843)) por @katherinehhh

- **[Empleados IA]** Ocultar el botón de chat del empleado IA en páginas v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) por @cgyrock

- **[Visualización de datos: ECharts]** corregido problema con la configuración labelType de ECharts por @heziqiang

- **[Gestor de correo electrónico]**
  - corregidos errores de borrador por @jiannx

  - sincronizar estado de lectura de correo de Microsoft sin marca de tiempo por @jiannx
