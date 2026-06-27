---
title: "NocoBase v1.6.22: Actualización de dependencias y eliminación del soporte SQLite"
description: "Nota de la versión v1.6.22"
---

### 🚀 Mejoras

- **[create-nocobase-app]** Actualización de dependencias y eliminación de soporte para SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) por @chenos

- **[Gestor de archivos]** Exposición de la API de utilidades ([#6705](https://github.com/nocobase/nocobase/pull/6705)) por @mytharcher

- **[Workflow]** Adición de tipos de fecha al conjunto de tipos de variables ([#6717](https://github.com/nocobase/nocobase/pull/6717)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Problema de dificultad para eliminar iconos de la barra de navegación superior en móvil ([#6734](https://github.com/nocobase/nocobase/pull/6734)) por @zhangzhonghe

  - Al conectar a través de una clave foránea, al hacer clic para activar el filtrado se obtienen condiciones de filtro vacías ([#6634](https://github.com/nocobase/nocobase/pull/6634)) por @zhangzhonghe

  - Problema de cambio de selector en el campo de fecha del botón de filtro ([#6695](https://github.com/nocobase/nocobase/pull/6695)) por @katherinehhh

  - Problema del botón de colapso en el menú izquierdo oculto por la ventana emergente del workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) por @zhangzhonghe

  - Restricciones de opciones de acción faltantes al reabrir reglas de vinculación ([#6723](https://github.com/nocobase/nocobase/pull/6723)) por @katherinehhh

  - Botón de exportación visible sin permiso de exportación ([#6689](https://github.com/nocobase/nocobase/pull/6689)) por @katherinehhh

  - Los campos obligatorios ocultos por reglas de vinculación no deberían afectar el envío del formulario ([#6709](https://github.com/nocobase/nocobase/pull/6709)) por @zhangzhonghe

- **[servidor]** appVersion generada incorrectamente por create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) por @chenos

- **[build]** Corrección de error lanzado en el comando tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) por @mytharcher

- **[Workflow]** Corrección de error al ejecutar un evento programado en un subflujo ([#6721](https://github.com/nocobase/nocobase/pull/6721)) por @mytharcher

- **[Workflow: Evento de acción personalizada]** Soporte para ejecutar en modo de múltiples registros por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]** Adición de lógica multer para subida del lado del servidor por @mytharcher
