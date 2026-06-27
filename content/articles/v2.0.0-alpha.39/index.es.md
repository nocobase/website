---
title: "NocoBase v2.0.0-alpha.39: Adaptación de componentes para dispositivos móviles"
description: "Nota de la versión v2.0.0-alpha.39"
---

### 🚀 Mejoras

- **[cliente]** Adaptar componentes para dispositivos móviles ([#7870](https://github.com/nocobase/nocobase/pull/7870)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió el problema de que la configuración predeterminada del campo JS no utilizaba la configuración del modo de visualización. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) por @gchust

  - Se corrigió el problema por el cual las plantillas duplicadas no aparecen, causado al arrastrar y luego eliminar una plantilla referenciada ([#7847](https://github.com/nocobase/nocobase/pull/7847)) por @zhangzhonghe

  - Se corrigió el problema de no poder establecer el valor predeterminado del campo de fecha en el modelo de bloque de formulario de filtro. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) por @gchust

  - Se corrigió el problema por el cual la regla de vinculación para el formulario de aprobación no funciona ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe

  - Se corrigió el problema de que las operaciones de edición rápida en el bloque de tabla no actualizan los datos correctamente. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) por @gchust

  - Se corrigió el problema de que el campo de texto enriquecido no puede ingresar un valor predeterminado y el campo de selección múltiple no puede seleccionar múltiples opciones como valor predeterminado. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) por @gchust

- **[Gestor de múltiples aplicaciones (obsoleto)]** Después de que una subaplicación se detiene, publicar un mensaje de sincronización para notificar a otros nodos que detengan la subaplicación correspondiente ([#7849](https://github.com/nocobase/nocobase/pull/7849)) por @2013xile

- **[Flujo de trabajo: Aprobación]** Se corrigió el problema por el cual la regla de vinculación para el formulario de aprobación no funciona por @zhangzhonghe

- **[Gestor de correo electrónico]** Error de actualización de ShadowHtml por @jiannx
