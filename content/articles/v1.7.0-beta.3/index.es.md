---
title: "NocoBase v1.7.0-beta.3: Permite configurar un tooltip personalizado para el botón de inicio de sesión"
description: "Nota de la versión v1.7.0-beta.3"
---

### 🎉 Nuevas funciones

- **[WeCom]** Permite establecer un tooltip personalizado para el botón de inicio de sesión por @2013xile

### 🚀 Mejoras

- **[Visualización de datos]** Reemplazar el obsoleto `x-designer` por `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]** Corregir que los caracteres especiales en la URL de la imagen impedían su visualización ([#6459](https://github.com/nocobase/nocobase/pull/6459)) por @mytharcher

- **[Flujo de trabajo: Nodo manual]** Corregir error lanzado en la migración ([#6445](https://github.com/nocobase/nocobase/pull/6445)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Eliminar `only` en el caso de prueba E2E por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir error lanzado al aprobar en una fuente de datos externa por @mytharcher

  - Corregir que los datos de asociación no se mostraban en el formulario de aprobación por @mytharcher
