---
title: "NocoBase v2.0.61: Soporte mejorado de autocompletado para algunas funciones RunJS integradas"
description: "Nota de la versión v2.0.61"
---

### 🚀 Mejoras

- **[cliente]** Se mejoró la compatibilidad con el autocompletado para algunas funciones integradas de RunJS. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) por @gchust
- **[sin definir]** Se actualizó la documentación de Embed NocoBase para el plugin de código abierto. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) por @zhangzhonghe
  Referencia: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Corrección de errores

- **[motor de flujo]**

  - Se corrigió el problema por el cual la página se quedaba bloqueada al establecer valores de campo para un subformulario. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) por @gchust
  - Se corrigió un problema por el cual la ventana emergente mostraba datos de interfaz de usuario desactualizados después de alternar el interruptor del modo de configuración de la interfaz de usuario. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) por @gchust
- **[cliente]**

  - Se corrigió el comportamiento incorrecto de la regla de vinculación de acciones de registro en los bloques de tabla. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) por @gchust
  - Se corrigió el problema por el cual los datos del campo de relación seleccionados no se mostraban en dispositivos móviles. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) por @zhangzhonghe
  - Se corrigió el problema por el cual los campos se volvían de solo lectura al mostrarse nuevamente después de haber sido ocultados por reglas de vinculación. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) por @katherinehhh
- **[cli]** Se corrigió la plantilla de nginx para servir activos `.mjs` con el tipo MIME de JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) por @mytharcher
- **[base de datos]** Se corrigió un problema por el cual la importación de valores de contraseña numéricos podía fallar. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) por @2013xile
- **[Empleados de IA]** Se corrigió la validación de la URL base del proveedor de IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) por @cgyrock
- **[Motor de flujo]**

  - Se corrigió un problema por el cual arrastrar las pestañas de la ventana emergente para reordenarlas no funcionaba. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) por @gchust
  - Se corrigió un problema por el cual modificar un bloque después de duplicar su plantilla podía afectar inadvertidamente el contenido del bloque original. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) por @gchust
- **[Notificación: mensaje en la aplicación]** Se corrigió un riesgo de inyección SQL en el filtro de marca de tiempo del canal de notificaciones en la aplicación. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) por @mytharcher
- **[Configuración de licencia]** Se corrigió el problema por el cual la página de configuración de licencia podía quedarse colgada durante mucho tiempo cuando la verificación de inicio de sesión de pkg era lenta o inaccesible. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) por @hongboji
- **[Flujo de trabajo: JavaScript]** Se aclaró que el modo de soporte del módulo JavaScript del flujo de trabajo no es seguro y no constituye un límite de permisos. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) por @mytharcher
  Referencia: [Flujo de trabajo JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Control de acceso]** Se corrigieron permisos incompletos en el primer inicio de sesión cuando un rol unión era el rol predeterminado. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) por @2013xile
- **[Administrador de archivos]** Se corrigió la validación de la ruta de almacenamiento de archivos local para evitar que rutas no seguras escapen de la raíz de almacenamiento configurada. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) por @mytharcher
- **[Política de contraseñas]** Se corrigió un problema por el cual la validación de la política de contraseñas podía fallar para valores de contraseña numéricos. por @2013xile
