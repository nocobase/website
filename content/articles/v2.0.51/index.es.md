---
title: "NocoBase v2.0.51: Corrección del comportamiento de validación requerida en formularios de aprobación"
description: "Nota de la versión v2.0.51"
---

### 🚀 Mejoras

- **[Flujo de trabajo: Aprobación]** Se corrigió el comportamiento de validación de campos obligatorios en formularios de aprobación por @zhangzhonghe

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió un problema por el cual el código JS ya no podía editarse después de que un campo JS se configurara como solo lectura. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) por @gchust

  - Se corrigió un problema por el cual las asignaciones de campos de subtabla no surtían efecto en las reglas de vinculación de campos. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) por @gchust

  - Se corrigió el problema por el cual las pestañas de página v2 no se sincronizan inmediatamente después de guardar la configuración ([#9396](https://github.com/nocobase/nocobase/pull/9396)) por @zhangzhonghe

  - Se corrigió un problema por el cual la ventana emergente de valor predeterminado para campos de asociación en el formulario de creación se mostraba incorrectamente. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) por @gchust

- **[Política de contraseñas]** Se corrigió un problema por el cual los usuarios bloqueados permanentemente podían iniciar sesión después de un reinicio del servicio por @2013xile

- **[Acción: Importar registros Pro]** Se corrigió el problema por el cual la comprobación de duplicados en campos de fecha siempre fallaba por @mytharcher

- **[Flujo de trabajo: Aprobación]** Se corrigió el problema por el cual el panel de selección de registros quedaba oculto en la configuración del flujo de trabajo de aprobación por @zhangzhonghe
