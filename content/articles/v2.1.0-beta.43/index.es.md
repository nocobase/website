---
title: "NocoBase v2.1.0-beta.43: Actualización de la documentación de Embed NocoBase para el plugin de código abierto"
description: "Nota de la versión v2.1.0-beta.43"
---

### 🎉 Nuevas Funcionalidades

- **[client-v2]** Se añadió `TypedVariableInput` para que los campos de puerto SMTP y modo seguro del plugin de correo v2 puedan aceptar tanto una constante tipada como una variable `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) por @Molunerfinn

- **[Control de acceso]** Se migraron las páginas de configuración de Usuarios y Roles y Permisos a v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) por @jiannx

### 🚀 Mejoras

- **[undefined]** Se actualizó la documentación de Embed NocoBase para el plugin de código abierto ([#9642](https://github.com/nocobase/nocobase/pull/9642)) por @zhangzhonghe
Referencia: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Se mejoró el soporte de autocompletado para algunas funciones RunJS integradas. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) por @gchust

- **[cli]** Se mejoró la guía de inicialización y autoactualización ([#9633](https://github.com/nocobase/nocobase/pull/9633)) por @chenos

### 🐛 Corrección de Errores

- **[client]**
  - Se corrigió el problema por el que los bloques podían mostrarse incorrectamente como eliminados tras recargar la página ([#9662](https://github.com/nocobase/nocobase/pull/9662)) por @zhangzhonghe

  - Se corrigió el comportamiento incorrecto de las reglas de enlace de acciones de registro en el bloque de tabla. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) por @gchust

  - (regla de enlace) Se corrigió que los campos se volvieran de solo lectura al mostrarse después de haber estado ocultos ([#9649](https://github.com/nocobase/nocobase/pull/9649)) por @katherinehhh

- **[cli]** Se corrigió la plantilla de nginx para servir activos `.mjs` con el tipo MIME de JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) por @mytharcher

- **[database]** Se corrigió un problema por el que la importación de valores de contraseña numéricos podía fallar ([#9635](https://github.com/nocobase/nocobase/pull/9635)) por @2013xile

- **[flow-engine]**
  - Se corrigió un problema por el que la ventana emergente mostraba datos de UI desactualizados después de alternar el interruptor del modo de configuración de UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) por @gchust

  - Se corrigió el problema por el que la búsqueda de campos se borraba al pasar el ratón sobre campos de asociación ([#9646](https://github.com/nocobase/nocobase/pull/9646)) por @zhangzhonghe

- **[client-v2]** Se preservan los valores de los campos asignados ([#9640](https://github.com/nocobase/nocobase/pull/9640)) por @katherinehhh

- **[Gestor de archivos]** Se corrigió la validación de la ruta de almacenamiento de archivos local para evitar que rutas inseguras escapen de la raíz de almacenamiento configurada. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) por @mytharcher

- **[Bloque: Gantt]** Se mejoró la colocación de la información emergente del diagrama de Gantt para evitar cubrir las barras de tareas y se alinearon las etiquetas de las tareas de forma consistente dentro y fuera de las barras ([#9638](https://github.com/nocobase/nocobase/pull/9638)) por @jiannx

- **[Control de acceso]** Se corrigieron los permisos incompletos en el primer inicio de sesión cuando el rol unión es el predeterminado ([#9632](https://github.com/nocobase/nocobase/pull/9632)) por @2013xile

- **[Configuración de licencia]** Se corrigió que la página de configuración de licencia se quedara colgada durante mucho tiempo cuando la comprobación de inicio de sesión del paquete es lenta o inalcanzable ([#9650](https://github.com/nocobase/nocobase/pull/9650)) por @hongboji

- **[Workflow: JavaScript]** Se aclaró que el modo de soporte del módulo JavaScript de Workflow no es seguro y no constituye un límite de permisos ([#9629](https://github.com/nocobase/nocobase/pull/9629)) por @mytharcher
Referencia: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Política de contraseñas]** Se corrigió un problema por el que la validación de la política de contraseñas podía fallar para valores de contraseña numéricos por @2013xile
