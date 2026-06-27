---
title: "NocoBase v2.0.0-beta.16: Añadir API para mover nodo"
description: "Nota de la versión v2.0.0-beta.16"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Añadir componente de campo de subtabla (edición emergente) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) por @katherinehhh

- **[Workflow]** Añadir API para mover nodo ([#8507](https://github.com/nocobase/nocobase/pull/8507)) por @mytharcher

### 🚀 Mejoras

- **[cliente]**
  - Evitar el re-renderizado completo de la tabla al actualizar una celda ([#8349](https://github.com/nocobase/nocobase/pull/8349)) por @katherinehhh

  - Mejorar el subformulario de relación muchos-a-muchos para inicializar con un elemento predeterminado y evitar la creación de registros cuando se deja vacío ([#8458](https://github.com/nocobase/nocobase/pull/8458)) por @katherinehhh

- **[Gestor de archivos]** Añadir visor extensible para el gestor de archivos ([#8501](https://github.com/nocobase/nocobase/pull/8501)) por @mytharcher

- **[Workflow]** Cambiar la ruta de las subpáginas del workflow para que todas las páginas de workflow estén bajo el prefijo `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregir la duplicación de tiempo en el valor DateTime del filtro ([#8506](https://github.com/nocobase/nocobase/pull/8506)) por @zhangzhonghe

  - Se corrigió un problema que impedía usar variables de formulario para asignar valores en reglas de vinculación para campos de subformulario de relación muchos-a-muchos de varios niveles. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) por @gchust

  - Corregir un problema donde los datos no se actualizaban después de cambios en ventanas emergentes de varios niveles y entre bloques. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) por @gchust

  - corregir problema donde los datos de subdetalle en modo solo lectura no se mostraban correctamente en el formulario de edición ([#8469](https://github.com/nocobase/nocobase/pull/8469)) por @katherinehhh

  - corregir la lógica de refinamiento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh

  - corregir parámetros de filtro incorrectos para el campo Select de relación en subtabla editable ([#8335](https://github.com/nocobase/nocobase/pull/8335)) por @katherinehhh

- **[motor de flujo]** corregir problema de FilterByTK cuando filterTargetKey es un array de un solo elemento en fuente de datos externa ([#8522](https://github.com/nocobase/nocobase/pull/8522)) por @katherinehhh

- **[Empleados IA]** corregir problemas de configuración inconsistente de campos seleccionables entre el modelado de IA y la gestión de fuentes de datos ([#8488](https://github.com/nocobase/nocobase/pull/8488)) por @cgyrock

- **[Gestor de correo electrónico]** el cuerpo no se colapsa cuando se selecciona texto. corregir error al descargar archivo adjunto por @jiannx
