---
title: "NocoBase v1.5.0-beta.18: Corrección de errores"
description: "Nota de la versión v1.5.0-beta.18"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige el problema de visualización inesperada de celdas de tabla en plugins de terceros ([#5934](https://github.com/nocobase/nocobase/pull/5934)) por @zhangzhonghe

  - Se corrige el problema por el cual el botón de eliminar está deshabilitado en la página de gestión de plantillas de bloque ([#5922](https://github.com/nocobase/nocobase/pull/5922)) por @zhangzhonghe

- **[Verificación]** Se corrigen los campos de formulario vacíos al abrir el panel de edición en la página de configuración de Verificación ([#5949](https://github.com/nocobase/nocobase/pull/5949)) por @chenos

- **[Flujo de trabajo: Evento de acción personalizada]**
  - Se corrige la falla de casos de prueba en SQLite por @mytharcher

  - Se corrigen los casos de prueba del disparador de acción personalizada por @mytharcher

- **[Flujo de trabajo: Evento previo a la acción]** Se corrigen los casos de prueba del interceptor de solicitudes por @mytharcher
