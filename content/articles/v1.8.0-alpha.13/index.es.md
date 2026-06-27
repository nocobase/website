---
title: "NocoBase v1.8.0-alpha.13: soporte para responder y reenviar correos electrónicos por separado dentro del mismo asunto"
description: "Nota de la versión v1.8.0-alpha.13"
---

### 🚀 Mejoras

- **[Gestor de correo electrónico]** soporte para responder y reenviar correos electrónicos por separado dentro del mismo asunto por @jiannx

### 🐛 Corrección de errores

- **[cliente]**
  - Problema de estilo de color de fondo en subtabla dentro del bloque de detalle ([#7144](https://github.com/nocobase/nocobase/pull/7144)) por @katherinehhh

  - Markdown no reflejaba los cambios en tiempo real al hacer referencia a variables $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) por @katherinehhh

- **[Visualización de datos]** Problema de paginación en tablas ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile

- **[Gestor de fuentes de datos]** Se corrigió un problema donde la combinación de carga de fuentes de datos bajo demanda y la configuración de prefijo de tabla provocaba el error "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) por @aaaaaajie
