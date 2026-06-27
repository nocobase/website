---
title: "NocoBase v2.1.0-alpha.46: Páginas de configuración de Usuarios y Roles y Permisos migradas a v2"
description: "Nota de la versión v2.1.0-alpha.46"
---

### 🎉 Nuevas Funcionalidades

- **[client-v2]** Se añadió `TypedVariableInput` para que los campos de puerto SMTP y modo seguro en el plugin de correo electrónico v2 puedan aceptar constantes tipadas o variables `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) por @Molunerfinn
- **[Control de acceso]** Se migraron las páginas de configuración de Usuarios y Roles y Permisos a v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) por @jiannx

### 🚀 Mejoras

- **[servidor]** El cliente moderno ahora se sirve bajo `/v/` en lugar de `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) por @Molunerfinn
- **[ai]** Se actualizó `xlsx` para evitar problemas de seguridad. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) por @mytharcher
- **[cliente]** Se mejoró el soporte de autocompletado para algunas funciones RunJS integradas. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) por @gchust
- **[cli]** Se mejoró la guía de inicialización y autoactualización. ([#9633](https://github.com/nocobase/nocobase/pull/9633)) por @chenos
- **[undefined]** Se actualizó la documentación de Embed NocoBase para el plugin de código abierto. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) por @zhangzhonghe
  Referencia: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[Departamentos]** Se añadió una página de configuración v2 para gestionar departamentos, miembros de departamento y asignaciones de usuarios a departamentos. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) por @jiannx
- **[Auth: SAML 2.0]** Las redirecciones de inicio de sesión SAML/CAS ahora siguen el prefijo del cliente moderno. por @Molunerfinn
- **[Acción: Importar registros Pro]** Se actualizó `xlsx` para evitar problemas de seguridad. por @mytharcher
- **[Auth: OIDC]** Las redirecciones de inicio de sesión OIDC ahora siguen el prefijo del cliente moderno. por @Molunerfinn
- **[Flujo de trabajo: Aprobación]** Se ajustaron las reglas de validación para las configuraciones del trigger de aprobación y los nodos para garantizar que existan los campos relacionados con la interfaz de usuario. por @mytharcher

### 🐛 Corrección de Errores

- **[client-v2]**

  - Se corrigió que las columnas de la tabla v2 se volvieran invisibles cuando el ancho de columna personalizado se establecía en 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) por @katherinehhh
  - Se ajustaron todos los selectores de campos de relación para limitar los campos de asociación a un máximo de dos niveles. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) por @jiannx
  - Se corrigieron errores al guardar reglas de vinculación de menús. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) por @zhangzhonghe
  - Se corrigió el espaciado excesivo sobre los bloques en páginas v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) por @zhangzhonghe
  - Se preservaron los valores de campo asignados. ([#9640](https://github.com/nocobase/nocobase/pull/9640)) por @katherinehhh
- **[cliente]**

  - Se corrigió el error al guardar un campo de relación de árbol en una plantilla de formulario referenciada. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) por @zhangzhonghe
  - Se corrigió el problema por el cual los datos del campo de relación seleccionado no se mostraban en dispositivos móviles. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) por @zhangzhonghe
  - Se corrigió el problema por el cual los bloques podían aparecer incorrectamente como eliminados después de actualizar la página. ([#9662](https://github.com/nocobase/nocobase/pull/9662)) por @zhangzhonghe
  - Se corrigió el comportamiento incorrecto de las reglas de vinculación de acciones de registro en bloques de tabla. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) por @gchust
  - Se corrigió el problema por el cual los campos se volvían de solo lectura al mostrarse nuevamente después de haber sido ocultados por reglas de vinculación. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) por @katherinehhh
- **[motor-de-flujo]**

  - Se corrigió el problema por el cual la página se bloqueaba al establecer valores de campo para un subformulario. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) por @gchust
  - Se corrigió un problema por el cual la ventana emergente mostraba datos de interfaz de usuario desactualizados después de alternar el interruptor del modo de configuración de la interfaz de usuario. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) por @gchust
  - Se corrigió el problema por el cual la búsqueda de campos se limpiaba al pasar el cursor sobre campos de asociación. ([#9646](https://github.com/nocobase/nocobase/pull/9646)) por @zhangzhonghe
- **[cli]** Se corrigió la plantilla de nginx para servir activos `.mjs` con el tipo MIME de JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) por @mytharcher
- **[base de datos]** Se corrigió un problema por el cual la importación de valores de contraseña numéricos podía fallar. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) por @2013xile
- **[Colección: SQL]**

  - Se bloqueó el acceso de la Colección SQL a metadatos sensibles de PostgreSQL. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) por @2013xile
- **[Administrador de fuentes de datos]** Se corrigió la localización de campos con múltiples espacios en el administrador de fuentes de datos v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) por @jiannx
- **[Empleados IA]**

  - Se ocultaron los errores sin procesar del proveedor de LLM de los mensajes del frontend. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) por @cgyrock
  - Los nodos de empleados IA en flujos de trabajo ahora pueden usar el modelo predeterminado. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) por @cgyrock
  - Se corrigió la validación de la URL base del proveedor de IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) por @cgyrock
  - Se corrigieron errores de `ctx.get` en nodos de flujo de trabajo de empleados IA. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) por @cgyrock
- **[Acción: Duplicar registro]** Se corrigió el problema por el cual el estado del botón no se restablecía cuando fallaba el envío de un registro duplicado. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió el problema por el cual la acción de activación del flujo de trabajo faltaba en la lista de botones del panel de acciones del espacio de trabajo. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) por @katherinehhh
- **[Calendario]** Se corrigió el problema por el cual los colores de los eventos del calendario no se renderizaban desde el campo de color configurado en páginas v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) por @jiannx
- **[Notificación: Mensaje en la aplicación]** Se corrigió un riesgo de inyección SQL en el filtro de marca de tiempo del canal de notificaciones en la aplicación. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) por @mytharcher
- **[Motor de flujo]**

  - Se corrigió un problema por el cual arrastrar pestañas de ventanas emergentes para reordenarlas no funcionaba. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) por @gchust
  - Se corrigió un problema por el cual modificar un bloque después de duplicar su plantilla podía afectar inadvertidamente el contenido del bloque original. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) por @gchust
- **[Configuración de licencia]** Se corrigió el problema por el cual la página de configuración de licencia podía quedarse colgada durante mucho tiempo cuando la verificación de inicio de sesión de pkg era lenta o inalcanzable. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) por @hongboji
- **[Control de acceso]** Se corrigieron permisos incompletos en el primer inicio de sesión cuando un rol unión era el rol predeterminado. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) por @2013xile
- **[Bloque: Gantt]** Se mejoró la colocación de la información sobre herramientas del Gantt para evitar cubrir las barras de tareas y se alinearon las etiquetas de las tareas de manera consistente dentro y fuera de las barras. ([#9638](https://github.com/nocobase/nocobase/pull/9638)) por @jiannx
- **[Flujo de trabajo: JavaScript]** Se aclaró que el modo de soporte de módulos de JavaScript en el flujo de trabajo no es seguro y no constituye un límite de permisos. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) por @mytharcher
  Referencia: [Flujo de trabajo JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Administrador de archivos]** Se corrigió la validación de la ruta de almacenamiento de archivos local para evitar que rutas inseguras escapen de la raíz de almacenamiento configurada. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) por @mytharcher
- **[Política de contraseñas]**

  - Se corrigió que los fallos de inicio de sesión enmascararan el error real con "argument #1 unsupported type undefined" cuando el error subyacente no tenía código de estado. por @Molunerfinn
  - Se corrigió un problema por el cual la validación de la política de contraseñas podía fallar para valores de contraseña numéricos. por @2013xile
- **[Fuente de datos: API REST]** Se corrigieron fallos de compilación en la declaración del plugin de fuente de datos API REST causados por discrepancias en las declaraciones de tipo client-v2 del administrador de fuentes de datos. por @katherinehhh
