---
title: "NocoBase v2.0.0-beta.11: El editor de texto enriquecido admite ajuste de tamaño de fuente, ajuste de tamaño de imagen y saltos de línea suaves"
description: "Nota de la versión v2.0.0-beta.11"
---

### 🚀 Mejoras

- **[evaluadores]** Se actualiza la versión de math.js para admitir más funciones ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher

- **[cliente]** El editor de texto enriquecido admite ajuste de tamaño de fuente, ajuste de tamaño de imagen y saltos de línea suaves ([#8401](https://github.com/nocobase/nocobase/pull/8401)) por @jiannx

- **[Empleados IA]** Se cambia el resultado del llamador de flujo de trabajo a `execution.output`, usando explícitamente el nodo de salida el resultado puede ser estable ([#8423](https://github.com/nocobase/nocobase/pull/8423)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Se añade tolerancia a fallos para el esquema de acción, para evitar que la página se bloquee al hacer clic en el botón de acción ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher

  - Se corrige la desaparición de la configuración del campo de título después de establecer la URL del adjunto y luego cambiar a otro campo en el elemento del formulario ([#8418](https://github.com/nocobase/nocobase/pull/8418)) por @katherinehhh

  - Se corrige que el campo de título no se actualiza cuando el campo de asociación se establece en modo de solo lectura en el formulario de creación ([#8413](https://github.com/nocobase/nocobase/pull/8413)) por @katherinehhh

- **[Motor de flujo]** Se corrige un problema donde la resolución de variables era incorrecta cuando filterByTk era un array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) por @gchust

- **[Impresión de plantillas]** Se añade soporte para el campo de espacio por @jiannx
