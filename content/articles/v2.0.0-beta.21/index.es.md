---
title: "NocoBase v2.0.0-beta.21: soporte para configurar campos del campo de colección de asociación en el bloque de formulario"
description: "Nota de la versión v2.0.0-beta.21"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** soporte para configurar campos de la colección asociada en el bloque de formulario ([#8578](https://github.com/nocobase/nocobase/pull/8578)) por @katherinehhh

- **[Acción: Duplicar registro]** añadida acción de duplicado 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) por @katherinehhh

- **[Workflow]** Soporte para copiar, pegar y mover nodos mediante arrastrar y soltar en el lienzo de workflow ([#8559](https://github.com/nocobase/nocobase/pull/8559)) por @mytharcher

### 🚀 Mejoras

- **[flow-engine]** Mejora del autocompletado y sugerencias de código en el editor de código del modelo JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) por @gchust

- **[Workflow: Aprobación]** Eliminado el soporte para campos JS por @zhangzhonghe

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregido un posible error de renderizado "leer oculto" en modo no configuración. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) por @gchust

  - corregido que la subtabla (edición en línea) aún mostraba columnas en modo edición después de cambiar a vista de solo lectura en el formulario de edición ([#8589](https://github.com/nocobase/nocobase/pull/8589)) por @katherinehhh

- **[Flow engine]** Corregido un problema donde el uso de una plantilla de bloque en modo "Duplicar" provocaba que la ventana emergente apareciera vacía al hacer clic en algún botón de acción del bloque. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) por @gchust

- **[Bloque: Mapa]** Corregidas las opciones de configuración duplicadas 'Guardar como plantilla' en el bloque de mapa ([#8584](https://github.com/nocobase/nocobase/pull/8584)) por @katherinehhh
