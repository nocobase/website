---
title: "NocoBase v1.8.7: Soporte para probar la ejecución de nodos"
description: "Nota de la versión v1.8.7"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: nodo de cálculo de fecha]** Soporte para ejecutar nodo de prueba por @mytharcher

### 🚀 Mejoras

- **[cliente]** Selector de color: Añadir cuatro colores recomendados ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe

- **[Flujo de trabajo]** Hacer que la comparación sea compatible con valores de fecha ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Las reglas de estilo no funcionan en la columna de acciones de la tabla ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh

  - Al eliminar un menú, los datos correspondientes en la tabla uiSchemas no se eliminan ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe

  - Evitar que los campos no asociados sean seleccionados en anexos ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher

- **[Flujo de trabajo: Subflujo]** Corregir error lanzado cuando llega la señal de recuperación pero la ejecución pendiente no está en la instancia actual por @mytharcher
