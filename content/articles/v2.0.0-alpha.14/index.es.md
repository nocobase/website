---
title: "NocoBase v2.0.0-alpha.14: optimización de codificación con IA"
description: "Nota de la versión v2.0.0-alpha.14"
---

### 🚀 Mejoras

- **[Empleados de IA]** Optimización de codificación de IA ([#7614](https://github.com/nocobase/nocobase/pull/7614)) por @cgyrock

- **[Fuente de datos: Principal]** Refactorización de la lógica de localización de mensajes de error y manejo dentro del plugin de gestión de errores ([#7582](https://github.com/nocobase/nocobase/pull/7582)) por @2013xile

### 🐛 Corrección de errores

- **[base de datos]**
  - Establecer `search_path` antes de ejecutar sentencias SQL usando el método `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) por @2013xile

  - Corregir error lanzado cuando el operador `$in` encuentra un valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher

- **[cliente]** Corregir el problema de que las ventanas emergentes de iconos de pestañas quedan ocultas ([#7607](https://github.com/nocobase/nocobase/pull/7607)) por @zhangzhonghe

- **[Flujo de trabajo: Aprobación]** Corregir el problema de que las variables no se analizan en el formulario de envío de aprobación por @mytharcher
