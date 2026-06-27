---
title: "NocoBase v2.1.0-beta.37: soporte para autenticación básica"
description: "Nota de la versión v2.1.0-beta.37"
---

### 🎉 Nuevas Funcionalidades

- **[client-v2]** Se ha añadido un menú de Seguridad y la página de configuración de Políticas de Token en el panel de administración v2; el centro de usuario ahora permite Cambiar contraseña. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) por @Molunerfinn

- **[cli]** Se ha añadido soporte para autenticación básica. ([#9558](https://github.com/nocobase/nocobase/pull/9558)) por @chenos

- **[Política de contraseñas]** Se ha migrado el plugin-password-policy al shell de administración client-v2 con las páginas de configuración de Política de contraseñas / Usuarios bloqueados y la aplicación de reglas del lado del cliente en el formulario de cambio de contraseña del centro de usuario. por @Molunerfinn

### 🚀 Mejoras

- **[Visualización de datos]** Se ha añadido soporte en cliente v2 para bloques de gráficos. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) por @jiannx

- **[Workflow]** Refactorización de las comprobaciones de disponibilidad de nodos asíncronos en Workflow. ([#9532](https://github.com/nocobase/nocobase/pull/9532)) por @mytharcher

### 🐛 Corrección de Errores

- **[build]**
  - Los activos de texto en las compilaciones del servidor ahora se copian como archivos en lugar de convertirse en módulos JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) por @Molunerfinn

  - Se ha corregido la salida de ofuscación del servidor de plugins para evitar globales del navegador en los paquetes de ejecución de Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn

- **[client-v2]** Se ha corregido el metadato de idioma del navegador para que la página de la aplicación siga el idioma de la aplicación seleccionado en lugar de marcarse como inglés. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) por @Molunerfinn

- **[Gestor de archivos]** Se renderizan de forma segura las vistas previas de PDF con PDF.js en lugar de la renderización de PDF sin procesar basada en iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher

- **[Empleados IA]** Se ha corregido la descripción incorrecta del nombre de la herramienta en el prompt de contexto de trabajo. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock

- **[Workflow: Nodo manual]** Se ha corregido que los guardados temporales para tareas de workflow manual no persistían los valores del formulario enviado. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher

- **[Auth: OIDC]** Se ha corregido la fuga de tokens cuando las devoluciones de llamada de inicio de sesión SSO reciben una URL de redirección externa. por @2013xile

- **[Workflow: Aprobación]**
  - Se ha corregido la retirada de aprobación para actualizar los datos de negocio enviados respetando los permisos de actualización de la colección de origen. por @mytharcher

  - Se ha corregido el problema por el que la API `jobs:resume` no era compatible con el nodo de aprobación. por @mytharcher

  - Se ha corregido la duplicación de índices de registros de aprobación cuando ocurren delegaciones de forma concurrente en el mismo trabajo de aprobación. por @mytharcher

  - Se ha corregido la persistencia de tareas pendientes de aprobación obsoletas cuando los workflows de aprobación son terminados por fallos en nodos que no son de aprobación. por @mytharcher
