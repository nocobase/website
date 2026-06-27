---
title: "NocoBase v1.6.6: Soporte para campos de texto largo como campos de título para campos de asociación"
description: "Nota de la versión v1.6.6"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para campos de texto largo como campos de título en campos de asociación ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh

- **[Flujo de trabajo: Nodo Agregado]** Soporte para configurar la precisión del resultado de agregación ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

### 🚀 Mejoras

- **[Almacenamiento de archivos: S3(Pro)]** Cambio del texto 'Access URL Base' a 'Base URL' por @zhangzhonghe

### 🐛 Corrección de Errores

- **[Evaluadores]** Revertir redondeo de decimales a 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher

- **[Gestor de archivos]** Codificar URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos

- **[Fuente de datos: Principal]** No se puede crear una vista de MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie

- **[Flujo de trabajo]** Corregir el conteo de tareas heredadas después de eliminar el flujo de trabajo ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher

- **[Incrustar NocoBase]** La página se muestra en blanco por @zhangzhonghe

- **[Gestor de copias de seguridad]**
  - Los archivos subidos no se han restaurado al crear una subaplicación desde una plantilla de copia de seguridad por @gchust

  - Fallo en la restauración de la base de datos MySQL debido a superposición del conjunto GTID por @gchust

- **[Flujo de trabajo: Aprobación]**
  - Cambiar la aprobación devuelta como pendiente por @mytharcher

  - Corregir botón de acción faltante en la tabla de procesos por @mytharcher
