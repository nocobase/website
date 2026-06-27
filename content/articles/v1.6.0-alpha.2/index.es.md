---
title: "NocoBase v1.6.0-alpha.2: Soporte para habilitar ventanas emergentes al abrir enlaces en el campo readPretty"
description: "Nota de la versión v1.6.0-alpha.2"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - Soporte para habilitar ventanas emergentes al abrir enlaces en el campo readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) por @katherinehhh

  - Soporte para acciones de asociar y desasociar en bloques de asociación ([#5695](https://github.com/nocobase/nocobase/pull/5695)) por @katherinehhh

- **[servidor]** Añadir gestor de auditoría ([#5601](https://github.com/nocobase/nocobase/pull/5601)) por @chenzhizdt

- **[Workflow]** Soporte para activar flujos de trabajo manualmente ([#5664](https://github.com/nocobase/nocobase/pull/5664)) por @mytharcher

- **[Workflow: Evento previo a la acción]** Soporte para activar flujos de trabajo manualmente por @mytharcher

### 🚀 Mejoras

- **[cliente]**
  - Implementar carga bajo demanda para componentes del front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) por @gchust

  - Mejorar el rendimiento de renderizado de páginas y soportar la funcionalidad de mantener la página activa ([#5515](https://github.com/nocobase/nocobase/pull/5515)) por @zhangzhonghe

- **[Campo de colección: Ordenar]** añadir descripción del plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) por @mytharcher

- **[Incrustar NocoBase]** Mejorar el rendimiento de renderizado de páginas por @zhangzhonghe

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregir problemas donde las variables no se pueden usar correctamente en bloques de fuentes de datos de terceros ([#5782](https://github.com/nocobase/nocobase/pull/5782)) por @zhangzhonghe

  - Corregir el problema donde los valores de los campos de asociación están vacíos en las plantillas de bloque. Corregir el problema donde el ámbito de datos del bloque que usa variables no funciona correctamente en fuentes de datos de terceros ([#5777](https://github.com/nocobase/nocobase/pull/5777)) por @zhangzhonghe

  - Corregir el problema donde las propiedades dinámicas del componente no funcionan con la carga diferida ([#5776](https://github.com/nocobase/nocobase/pull/5776)) por @gchust

  - Corregido el mensaje de advertencia en React al cargar hooks dinámicamente en el entorno de desarrollo ([#5758](https://github.com/nocobase/nocobase/pull/5758)) por @gchust

- **[Visualización de datos]** Corregir el problema donde los componentes de campo de filtro de los bloques de gráficos no se renderizan ([#5769](https://github.com/nocobase/nocobase/pull/5769)) por @2013xile
