---
title: "NocoBase v1.9.0-alpha.17: Mejoras y correcciones en el flujo de trabajo"
description: "Nota de la versión v1.9.0-alpha.17"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Se ha dividido la lógica relacionada con el envío en un despachador independiente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher

### 🐛 Corrección de errores

- **[Flujo de trabajo]**
  - Se corrige el problema de ejecución duplicada debido a un manejo inadecuado de la cola ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher

  - Se corrige el problema por el cual las tareas programadas basadas en campos de fecha no se activan después del inicio ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher
