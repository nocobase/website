---
title: "NocoBase v1.7.0-beta.6: Soporte para configurar precisión en resultados de agregación"
description: "Nota de la versión v1.7.0-beta.6"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para campos de texto largo como campos de título para campos de asociación ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh

- **[Flujo de trabajo: Nodo de agregación]** Soporte para configurar la precisión del resultado de agregación ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

### 🐛 Corrección de Errores

- **[evaluadores]** Revertir decimales redondeados a 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher

- **[Flujo de trabajo]** Corregir el conteo de tareas antiguas después de eliminar un flujo de trabajo ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher

- **[Fuente de datos: Principal]** No se puede crear una vista de MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie

- **[Gestor de archivos]** Codificar URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos

- **[Gestor de copias de seguridad]**
  - Fallo en la restauración de base de datos MySQL debido a superposición de conjuntos GTID por @gchust

  - Los archivos subidos no se han restaurado al crear una subaplicación desde una plantilla de copia de seguridad por @gchust

- **[Flujo de trabajo: Aprobación]**
  - Corregir botón de acción faltante en la tabla de procesos por @mytharcher

  - Cambiar la aprobación devuelta como pendiente por @mytharcher
