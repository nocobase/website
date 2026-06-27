---
title: "NocoBase v1.8.0-beta.10: Añadir variable de registros de aprobación al resultado del nodo"
description: "Nota de la versión v1.8.0-beta.10"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de Trabajo: Aprobación]** Añadir variable de registros de aprobación al resultado del nodo por @mytharcher

### 🐛 Correcciones de Errores

- **[cliente]**
  - La función de alineación de texto en las columnas de la tabla no funciona ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe

  - Asignar valores de campo: No se pueden limpiar datos para campos de relación ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe

  - Usar ámbito de variable independiente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher

- **[Gestor de Archivos]** Corregir que el campo de adjuntos no se pueda actualizar en el proceso de aprobación ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher

- **[Flujo de Trabajo]** Corregir verificación ejecutada incorrectamente en números enteros grandes ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher

- **[Flujo de Trabajo: Aprobación]** Usar comparación en lugar de lógica implícita para evitar problemas de tipo por @mytharcher
