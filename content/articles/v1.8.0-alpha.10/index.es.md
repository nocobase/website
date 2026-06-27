---
title: "NocoBase v1.8.0-alpha.10: Soporte para carga bajo demanda de colecciones desde fuentes de datos externas"
description: "Nota de la versión v1.8.0-alpha.10"
---

### 🎉 Nuevas Funcionalidades

- **[Gestor de fuentes de datos]** ✨ Soporte para carga bajo demanda de colecciones desde fuentes de datos externas ([#6979](https://github.com/nocobase/nocobase/pull/6979)) por @aaaaaajie

- **[Flujo de trabajo: nodo de solicitud HTTP]** Soporte para solicitudes `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) por @shushu992

- **[Fuente de datos: SQL Server externo]** Soporte para carga bajo demanda de colecciones desde fuentes de datos externas por @aaaaaajie

### 🐛 Corrección de Errores

- **[cliente]**
  - Cuando las variables del parámetro de consulta de URL están vacías, las condiciones del ámbito de datos no se eliminan ([#7104](https://github.com/nocobase/nocobase/pull/7104)) por @zhangzhonghe

  - Limitación de rango incorrecta en campos de fecha con hora ([#7107](https://github.com/nocobase/nocobase/pull/7107)) por @katherinehhh

- **[Móvil]** Corregido el problema de z-index en ventanas emergentes móviles ([#7110](https://github.com/nocobase/nocobase/pull/7110)) por @zhangzhonghe

- **[Calendario]** Problema con el campo de fecha en el formulario de creación rápida del bloque de calendario ([#7106](https://github.com/nocobase/nocobase/pull/7106)) por @katherinehhh

- **[Flujo de trabajo: Aprobación]**
  - Corregida la API de variables heredadas que generaba un error por @mytharcher

  - Corregidos los estilos para móvil por @mytharcher

  - Corregido el error generado al eliminar la colección relacionada con la aprobación por @mytharcher

- **[Gestor de correo electrónico]** El adjunto no se muestra por @jiannx
