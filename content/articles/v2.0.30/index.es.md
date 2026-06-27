---
title: "NocoBase v2.0.30: Agregar `isolated-vm` como motor de ejecución de JavaScript predeterminado para el nodo JavaScript"
description: "Nota de la versión v2.0.30"
---

### 🚀 Mejoras

- **[Flujo de trabajo: JavaScript]** Se añadió `isolated-vm` como motor de ejecución de JavaScript predeterminado para el nodo JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) por @mytharcher
Referencia: [Nodo JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
### 🐛 Corrección de errores

- **[cliente]** Se corrigió un mensaje de confirmación secundario incorrecto al cerrar una ventana emergente multinivel después de modificar los datos del formulario. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) por @gchust

- **[Flujo de trabajo: nodo SQL]** Se corrigió un problema de seguridad en el nodo SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) por @mytharcher

- **[Empleados de IA]** Se añadió verificación de propiedad a la API de conversación de IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) por @cgyrock

- **[Flujo de trabajo: Aprobación]** Se corrigió el límite de versión de migraciones antiguas para evitar errores al iniciar en la implementación de la última versión por @mytharcher
