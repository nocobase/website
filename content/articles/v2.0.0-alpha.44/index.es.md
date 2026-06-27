---
title: "NocoBase v2.0.0-alpha.44: soporte de selector en cascada para el campo de asociación de colección de árbol"
description: "Nota de la versión v2.0.0-alpha.44"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - Añadir soporte de creación rápida al selector de campos de asociación ([#7887](https://github.com/nocobase/nocobase/pull/7887)) por @katherinehhh

  - Soporte de selector en cascada para campos de asociación de colecciones en árbol ([#7846](https://github.com/nocobase/nocobase/pull/7846)) por @katherinehhh

- **[Telemetría]** Nuevo plugin: Telemetría, un plugin de telemetría basado en OpenTelemetry que proporciona métricas de CPU, memoria y solicitudes HTTP con soporte de exportación HTTP por @2013xile

### 🚀 Mejoras

- **[telemetría]** Soporte para controlar qué métricas se exportan ([#7938](https://github.com/nocobase/nocobase/pull/7938)) por @2013xile

- **[Gestor de tareas asíncronas]** Las tareas asíncronas para subaplicaciones deben iniciar solo las subaplicaciones objetivo en Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) por @2013xile

### 🐛 Corrección de Errores

- **[cliente]**
  - Eliminar la acción de tabla-árbol del bloque de colección no arbórea ([#7931](https://github.com/nocobase/nocobase/pull/7931)) por @katherinehhh

  - Corregir la interfaz de campo que mostraba muchos-a-uno en lugar de uno-a-uno para belongsTo en la configuración de fuentes de datos externas ([#7936](https://github.com/nocobase/nocobase/pull/7936)) por @cgyrock

- **[motor-de-flujo]** Corregir el problema de desalineación de los iconos de la barra de herramientas en el botón del bloque de detalles ([#7929](https://github.com/nocobase/nocobase/pull/7929)) por @zhangzhonghe

- **[Workflow]** Corregido el problema donde la actualización del recuento de tareas reiniciaba involuntariamente el estado de los formularios que se estaban completando ([#7937](https://github.com/nocobase/nocobase/pull/7937)) por @mytharcher

- **[Campo de colección: Muchos a muchos (array)]** Corregir problemas del campo M2M (array) al crear/actualizar datos relacionados ([#7926](https://github.com/nocobase/nocobase/pull/7926)) por @cgyrock

- **[Acción: Importar registros Pro]** corregir problema donde la modificación de las opciones de importación por parte del cargador no tenía efecto por @katherinehhh
