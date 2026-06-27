---
title: "NocoBase v1.7.13: El ancho del contenedor del logotipo se adapta al tipo de contenido"
description: "Nota de la versión v1.7.13"
---

### 🚀 Mejoras

- **[cliente]** El ancho del contenedor del logotipo se adapta al tipo de contenido (168px fijos para imágenes, ancho automático para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038

- **[Flujo de trabajo: Aprobación]** Se añade opción de campo adicional para la lista de reasignados por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - El mensaje de validación obligatoria en subtabla persiste al cambiar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh

  - Pérdida del punto decimal al cambiar el componente de cantidad de mask a inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh

  - Renderizado incorrecto de Markdown (Vditor) en subtabla ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh

- **[Campo de colección: Secuencia]** Corrección en el cálculo de secuencia bigint basada en cadenas ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher

- **[Gestor de copias de seguridad]** Error de comando desconocido al restaurar copias de seguridad de MySQL en plataforma Windows por @gchust
