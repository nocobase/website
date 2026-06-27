---
title: "NocoBase v2.1.9: Agregar opción de anulación de valor para la configuración de valores de campo"
description: "Nota de la versión v2.1.9"
---

### 🚀 Mejoras

- **[client-v2]** Añadida opción de valor de anulación para la configuración de valores de campo. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) por @gchust

### 🐛 Corrección de errores

- **[client-v2]**
  - Se corrigió que los botones de activación de flujo de trabajo de acciones personalizadas enviaran el JSON de contexto personalizado bajo una propiedad `values` adicional o como una cadena serializada. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) por @mytharcher

  - Se corrigió un problema por el cual configurar el valor de un campo de asociación como un valor fijo o valor predeterminado no surtía efecto. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) por @gchust

- **[auth]** Los datos de contraseña cifrada ya no se incluyen en las respuestas de estado de inicio de sesión ([#9836](https://github.com/nocobase/nocobase/pull/9836)) por @2013xile

- **[app]** Se ignora currentScript no relacionado al inferir la ruta pública del plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) por @chenos

- **[Plantillas de UI]** Se corrigió el contexto predeterminado incorrecto para ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) por @gchust
