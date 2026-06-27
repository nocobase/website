---
title: "NocoBase v1.5.7: Eliminar registro de errores en consola para reintentos de conexión SSE"
description: "Nota de la versión v1.5.7"
---

### 🚀 Mejoras

- **[Notificación: mensaje en la aplicación]** Se eliminó el registro de errores en consola para los reintentos de conexión SSE. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) por @sheldon66

### 🐛 Corrección de errores

- **[cliente]**
  - Falta la configuración de arrastre en el modal de operación de creación rápida de datos de relación ([#6201](https://github.com/nocobase/nocobase/pull/6201)) por @katherinehhh

  - Problema con el formato de números de alta precisión que no se aplica ([#6202](https://github.com/nocobase/nocobase/pull/6202)) por @katherinehhh

  - Se corrigió un problema por el cual al limpiar un campo de asociación en un formulario no se limpiaba realmente el valor del campo al enviar el formulario ([#5540](https://github.com/nocobase/nocobase/pull/5540)) por @zhangzhonghe

  - El bloque no se actualiza después del envío del formulario ([#6206](https://github.com/nocobase/nocobase/pull/6206)) por @zhangzhonghe

  - El valor del campo vinculado persiste al enviar después de restablecer el campo de relación ([#6207](https://github.com/nocobase/nocobase/pull/6207)) por @katherinehhh

  - Acción de actualización mostrada para filas sin permisos de actualización en la tabla ([#6204](https://github.com/nocobase/nocobase/pull/6204)) por @katherinehhh

- **[Campo de colección: Ordenar]** Se corrigió que el tipo de campo de orden no estuviera registrado en la fuente de datos externa ([#6212](https://github.com/nocobase/nocobase/pull/6212)) por @mytharcher

- **[Autenticación]** Problema de autenticación WebSocket ([#6209](https://github.com/nocobase/nocobase/pull/6209)) por @2013xile

- **[Campo de colección: Adjunto (URL)]** Se corrigió la URL de solicitud obsoleta en el hook por @mytharcher
