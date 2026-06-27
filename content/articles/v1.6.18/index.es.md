---
title: "NocoBase v1.6.18: Soporte para usar variable para la duración"
description: "Nota de la versión v1.6.18"
---

### 🚀 Mejoras

- **[cliente]**
  - Añadir API de fallback de tipo predeterminado para `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) por @mytharcher

  - Optimizar avisos para páginas no configuradas ([#6641](https://github.com/nocobase/nocobase/pull/6641)) por @zhangzhonghe

- **[Flujo de trabajo: Nodo de retardo]** Soporte para usar variable como duración ([#6621](https://github.com/nocobase/nocobase/pull/6621)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Añadir ajustes de actualización para el botón de activación del flujo de trabajo por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Superposición de la descripción de la subtabla con el botón de añadir nuevo ([#6646](https://github.com/nocobase/nocobase/pull/6646)) por @katherinehhh

  - Subrayado discontinuo causado por el diseño de formulario horizontal en modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) por @katherinehhh

- **[Almacenamiento de archivos: S3(Pro)]** Corregir falta de await en la siguiente llamada. por @jiannx

- **[Gestor de correo electrónico]** Corregir falta de await en la siguiente llamada. por @jiannx
