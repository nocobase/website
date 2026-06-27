---
title: "NocoBase v2.0.0-alpha.22: Añadir bloque de markdown 2.0"
description: "Nota de la versión v2.0.0-alpha.22"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Añadido bloque de markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) por @katherinehhh

- **[Gestor de fuentes de datos]**
  - La fuente de datos principal ahora admite la lectura directa de tablas de la base de datos principal y permite modificar las interfaces de los campos ([#7118](https://github.com/nocobase/nocobase/pull/7118)) por @aaaaaajie

  - La fuente de datos principal ahora admite la lectura directa de tablas de la base de datos principal y permite modificar las interfaces de los campos ([#7118](https://github.com/nocobase/nocobase/pull/7118)) por @aaaaaajie

- **[Historial de registros]** Añadido bloque de historial de registros por @2013xile

### 🐛 Corrección de Errores

- **[Motor de flujo]** Se resolvió un problema por el cual las acciones de flujo definidas por un modelo de flujo no podían configurarse, garantizando que los usuarios ahora puedan personalizar las acciones de flujo según lo previsto. ([#7666](https://github.com/nocobase/nocobase/pull/7666)) por @gchust

- **[Adaptador de cola Redis]** Se corrigió el problema por el cual el adaptador de cola Redis no escuchaba correctamente los canales suscritos después del inicio por @mytharcher
