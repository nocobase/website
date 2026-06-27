---
title: "NocoBase v1.9.0-alpha.3: Soporte para mostrar tablas definidas por complementos en la fuente de datos principal"
description: "Nota de la versión v1.9.0-alpha.3"
---

### 🎉 Nuevas funciones

- **[Fuente de datos: Principal]** Soporte para mostrar tablas definidas por complementos en la fuente de datos principal. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) por @aaaaaajie

- **[Flujo de trabajo: nodo de cálculo de fecha]** Soporte para ejecutar nodo de prueba por @mytharcher

### 🚀 Mejoras

- **[cliente]** Selector de color: Añadir cuatro colores recomendados ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe

- **[Flujo de trabajo]** Hacer que la comparación sea compatible con valores de fecha ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Las reglas de estilo no funcionan en la columna de acciones de la tabla ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh

  - Evitar que los campos no asociados se seleccionen en anexos ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher

  - Corregir error: No se puede resolver 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe

  - Al eliminar un menú, los datos correspondientes en la tabla uiSchemas no se eliminan ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe

- **[base de datos]** Se corrigió un error al habilitar la paginación simple para tablas de fuentes de datos externas ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie

- **[Campo de colección: Orden]** Falta la selección del campo de orden al duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh

- **[Flujo de trabajo: Subflujo]** Se corrigió el error que se producía cuando llega una señal de recuperación pero la ejecución pendiente no está en la instancia actual por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir múltiples niveles de asociaciones al enviar una aprobación por @mytharcher

  - Añadir tolerancia a fallos para aprobaciones eliminadas en la lista de registros por @mytharcher

- **[Gestor de correo electrónico]** Rendimiento óptimo de la lista de mensajes de correo electrónico por @jiannx
