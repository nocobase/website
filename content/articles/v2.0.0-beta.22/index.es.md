---
title: "NocoBase v2.0.0-beta.22: Soporte para configurar títulos de pestañas del navegador para páginas, pestañas de página, ventanas emergentes y pestañas emergentes"
description: "Nota de la versión v2.0.0-beta.22"
---

### 🎉 Nuevas Funcionalidades

- **[client]** Soporte para configurar títulos de pestañas del navegador para páginas, pestañas de página, ventanas emergentes y pestañas emergentes ([#8590](https://github.com/nocobase/nocobase/pull/8590)) por @zhangzhonghe

- **[Workflow: Aprobación]** Añadir control ACL para las API de aprobación por @mytharcher

### 🚀 Mejoras

- **[client]** Usar modelos de campo independientes para campos de asociación en formularios de filtro ([#8511](https://github.com/nocobase/nocobase/pull/8511)) por @zhangzhonghe

- **[Workflow: CC]** Refactorizar el plugin de workflow CC para soportar la arquitectura FlowModel con compatibilidad v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) por @zhangzhonghe

### 🐛 Corrección de Errores

- **[flow-engine]**
  - Corregir un problema por el cual no se podían crear objetos Blob en el bloque JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) por @gchust

  - Corregir el contexto de ejecución incorrecto para "ctx.sql" en los Modelos JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) por @gchust

- **[Componente de campo: máscara]** Corregir un problema por el cual la ventana emergente de configuración del campo de máscara no podía cargar correctamente todos los roles de usuario. por @gchust

- **[Workflow: Aprobación]** Corregir el id incorrecto para cargar el registro de detalle por @mytharcher
