---
title: "NocoBase v1.8.27: Soporte para rotar imágenes al previsualizar"
description: "Nota de la versión v1.8.27"
---

### 🚀 Mejoras

- **[cliente]** Soporte para rotar imágenes al previsualizarlas ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher

- **[Flujo de trabajo]** Separación de la lógica relacionada con el despacho en un despachador independiente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Se corrigió el problema por el cual los submenús de la barra lateral no se resaltaban correctamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu

- **[Flujo de trabajo: Nodo de bucle]** Se corrigió el problema por el cual el proceso avanzaba incorrectamente al siguiente elemento incluso cuando no se cumplían las condiciones del nodo de bucle ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher

- **[Flujo de trabajo]**
  - Se corrigió el problema de ejecución duplicada debido a un manejo inadecuado de la cola ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher

  - Se corrigió el problema por el cual la condición de la lista de flujos de trabajo era incorrecta al cargar el contexto del campo asociado en la configuración del flujo de trabajo vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher

  - Se corrigió el problema por el cual las tareas programadas basadas en campos de fecha no se activaban después del inicio ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher
