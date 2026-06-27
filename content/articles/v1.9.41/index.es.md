---
title: "NocoBase v1.9.41: Corrección de la ruta del enlace del flujo de trabajo"
description: "Nota de la versión v1.9.41"
---

### 🚀 Mejoras

- **[cliente]** Se ha añadido la opción de deshabilitar la adición redundante de parámetros por defecto en `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile

### 🐛 Corrección de errores

- **[Flujo de trabajo]** Se ha añadido tolerancia a fallos en el componente de selección de registros de colección para evitar errores al eliminar una colección ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher

- **[Gestor de archivos]** Se ha asegurado la ruta de archivos para el almacenamiento local, evitando accesos fuera de la raíz del documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher

- **[Flujo de trabajo: Subflujo]** Se ha corregido la ruta del enlace del flujo de trabajo por @mytharcher
