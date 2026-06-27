---
title: "NocoBase v1.7.15: Corrección de errores"
description: "Nota de la versión v1.7.15"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Usar ámbito de variable independiente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher

  - Asignar valores de campo: No se pueden borrar datos de campos de relación ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe

  - La función de alineación de texto en columnas de tabla no funciona ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe

- **[Flujo de trabajo]** Corregir la comprobación ejecutada incorrectamente en números enteros grandes ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher

- **[Gestor de archivos]** Corregir que el campo de archivos adjuntos no se pueda actualizar en el proceso de aprobación ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Usar comparación en lugar de lógica implícita para evitar problemas de tipo por @mytharcher
