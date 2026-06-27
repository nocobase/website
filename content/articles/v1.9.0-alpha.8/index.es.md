---
title: "NocoBase v1.9.0-alpha.8: Optimizar el rendimiento al cambiar de pestañas emergentes"
description: "Nota de la versión v1.9.0-alpha.8"
---

### 🚀 Mejoras

- **[cliente]** Optimizar el rendimiento al cambiar de pestañas emergentes ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
- **[Visor de archivos de Office]** Añadir soporte para previsualizar archivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió el problema por el cual el ámbito de datos guardado previamente no se preseleccionaba al configurar permisos individualmente ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
  - Corregir error al eliminar colecciones en lote ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
- **[Flujo de trabajo]** Evitar error provocado al publicar en la cola de eventos al detenerse ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
- **[Flujo de trabajo: Nodo paralelo]** Corregir la suspensión del nodo paralelo después de reanudar en MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir la actualización de asociaciones al enviar borrador por @mytharcher
  - Corregir que las reglas de vinculación no funcionan en el bloque de detalle original de aprobación por @mytharcher
