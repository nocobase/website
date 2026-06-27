---
title: "NocoBase v2.0.0-alpha.35: soporte para operaciones retrasadas en el modelo de flujo"
description: "Nota de la versión v2.0.0-alpha.35"
---

### 🚀 Mejoras

- **[motor-de-flujo]** soporte para operación retrasada en el modelo de flujo ([#7786](https://github.com/nocobase/nocobase/pull/7786)) por @gchust

- **[Flujo de trabajo: JavaScript]** Se corrige una vulnerabilidad de seguridad causada por la transmisión de funciones de nivel superior al entorno de ejecución, evitando la explotación que podría otorgar acceso al contexto de ejecución superior por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige el problema de página siguiente vacía en el bloque de paginación simple de detalle ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh

  - Se corrige que el ancho de la acción de tabla y jsColumn no se aplicaba ([#7777](https://github.com/nocobase/nocobase/pull/7777)) por @katherinehhh

  - El ámbito de datos del bloque no funciona si se establece mediante el flujo de eventos de página ([#7788](https://github.com/nocobase/nocobase/pull/7788)) por @gchust

- **[Flujo de trabajo]** Se añade `workflowId` como dato de identidad para los registros del flujo de trabajo ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher

- **[Flujo de trabajo: Variable personalizada]** Se corrige el error lanzado cuando no hay configuración en el nodo de variable por @mytharcher

- **[Gestor de correo electrónico]** la colección mailMessages añade índices por @jiannx
