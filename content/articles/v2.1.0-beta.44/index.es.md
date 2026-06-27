---
title: "NocoBase v2.1.0-beta.44: Se corrigió el problema donde los datos del campo de relación seleccionados no se mostraban en dispositivos móviles"
description: "Nota de la versión v2.1.0-beta.44"
---

### 🚀 Mejoras

- **[Flujo de trabajo: Aprobación]** Se ajustaron las reglas de validación para el disparador de aprobación y las configuraciones de nodos para garantizar que existan los campos relacionados con la interfaz de usuario. por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Se corrigió el problema por el cual los datos del campo de relación seleccionados no se mostraban en dispositivos móviles. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) por @zhangzhonghe
- **[cliente-v2]**

  - Se corrigieron errores al guardar reglas de enlace de menú. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) por @zhangzhonghe
  - Se corrigió el espaciado excesivo sobre los bloques en páginas v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) por @zhangzhonghe
- **[motor de flujo]** Se corrigió el problema por el cual la página se bloqueaba al establecer valores de campo para un subformulario. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) por @gchust
- **[Empleados de IA]**

  - Se corrigió la validación de la URL base del proveedor de IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) por @cgyrock
  - Se corrigieron errores de `ctx.get` en nodos de flujo de trabajo de empleados de IA. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) por @cgyrock
- **[Notificación: Mensaje en la aplicación]** Se corrigió un riesgo de inyección SQL en el filtro de marca de tiempo del canal de notificaciones en la aplicación. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) por @mytharcher
- **[Acción: Duplicar registro]** Se corrigió el problema por el cual el estado del botón no se restablecía cuando fallaba el envío de un registro duplicado. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) por @katherinehhh
- **[Calendario]** Se corrigió el problema por el cual los colores de los eventos del calendario no se renderizaban desde el campo de color configurado en páginas v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) por @jiannx
- **[Motor de flujo]**

  - Se corrigió un problema por el cual modificar un bloque después de duplicar su plantilla podía afectar inadvertidamente el contenido del bloque original. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) por @gchust
  - Se corrigió un problema por el cual arrastrar pestañas emergentes para reordenarlas no funcionaba. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) por @gchust
