---
title: "NocoBase v2.0.0-alpha.71: soporte para altura de bloque configurable"
description: "Nota de la versión v2.0.0-alpha.71"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - Soporte para configurar títulos de pestañas del navegador para páginas, pestañas de página, ventanas emergentes y pestañas emergentes ([#8590](https://github.com/nocobase/nocobase/pull/8590)) por @zhangzhonghe

  - Soporte para configurar campos del campo de colección de asociación en bloques de formulario ([#8578](https://github.com/nocobase/nocobase/pull/8578)) por @katherinehhh

- **[Bloque: GridCard]** soporte para altura de bloque configurable ([#8583](https://github.com/nocobase/nocobase/pull/8583)) por @katherinehhh

- **[Acción: Duplicar registro]** añadida acción de duplicado 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) por @katherinehhh

- **[Flujo de trabajo: Aprobación]** Añadido control ACL para APIs de aprobación por @mytharcher

### 🚀 Mejoras

- **[cliente]** Uso de modelos de campo independientes para campos de asociación en formularios de filtro ([#8511](https://github.com/nocobase/nocobase/pull/8511)) por @zhangzhonghe

- **[Flujo de trabajo: CC]** Refactorización del plugin de flujo de trabajo CC para soportar la arquitectura FlowModel con compatibilidad v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) por @zhangzhonghe

### 🐛 Corrección de Errores

- **[motor-de-flujo]**
  - Corregido contexto de ejecución incorrecto para "ctx.sql" en Modelos JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) por @gchust

  - Corregido un problema por el cual no se podían crear objetos Blob en bloques JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) por @gchust

- **[cliente]**
  - Corregido un problema por el cual las columnas de tabla no se volvían a renderizar después de hacer clic en Ejecutar en el editor de columnas JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) por @gchust

  - Corregido un posible error de renderizado "oculto leído" en modo no configuración. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) por @gchust

  - corregido que la subtabla (edición en línea) aún mostraba columnas en modo edición después de cambiar a vista de solo lectura en formulario de edición ([#8589](https://github.com/nocobase/nocobase/pull/8589)) por @katherinehhh

- **[Motor de flujo]** Corregido un problema por el cual usar una plantilla de bloque en modo "Duplicar" causaba que la ventana emergente apareciera vacía al hacer clic en algún botón de acción del bloque. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) por @gchust

- **[Componente de campo: máscara]** Corregido un problema por el cual la ventana emergente de configuración del campo de máscara no podía cargar correctamente todos los roles de usuario. por @gchust

- **[Flujo de trabajo: Aprobación]** Corregido id incorrecto para cargar el registro de detalle por @mytharcher
