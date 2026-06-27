---
title: "NocoBase v1.7.0-beta.9: Soporte para unión de roles de usuario"
description: "Nota de la versión v1.7.0-beta.9"
---

### 🎉 Nuevas Funcionalidades

- **[acl]** Soporte para unión de roles de usuario ([#6301](https://github.com/nocobase/nocobase/pull/6301)) por @aaaaaajie

- **[client]**
  - Soporte para la extensión de campos predefinidos en colecciones ([#6183](https://github.com/nocobase/nocobase/pull/6183)) por @katherinehhh

  - Soporte para extender operadores de filtro del frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) por @katherinehhh

- **[Verificación]** Soporte para que los usuarios vinculen varios tipos de verificación, como SMS y autenticadores TOTP, y verificación de identidad en escenarios requeridos. Habilita el desarrollo y la extensión de métodos de verificación. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) por @2013xile
Referencia: [Verificación](https://docs.nocobase.com/handbook/verification)
- **[Calendario]** Soporte para la extensión de campos opcionales en los plugins de Kanban, Calendario y Campo de Fórmula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) por @katherinehhh

- **[Bloque: plantilla]** Añadir plugin `Bloque: plantilla`, que proporciona soporte de plantillas para bloques basado en un mecanismo de herencia. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) por @gchust

- **[plugin-demo-platform]** Establecer skipAuthCheck de la ruta "/new" a true. por @sheldon66

- **[Autenticación de dos factores (2FA)]** Nuevos plugins: Autenticación de dos factores y Verificación: Autenticador TOTP por @2013xile
Referencia: [Autenticación de dos factores (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verificación: Autenticador TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Mejoras

- **[client]**
  - Añadir skipAuthCheck a router.add para evitar redirigir al inicio de sesión en páginas públicas. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) por @sheldon66

  - Actualizar las dependencias relacionadas con ant design a 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) por @gchust

- **[utils]** Adaptación de páginas de escritorio para dispositivos móviles ([#6393](https://github.com/nocobase/nocobase/pull/6393)) por @zhangzhonghe

- **[Formularios públicos]** Establecer el título de la página del formulario público al título configurado al crearlo ([#6538](https://github.com/nocobase/nocobase/pull/6538)) por @katherinehhh

- **[Gestor de archivos]**
  - Añadir código backend para generar la URL de vista previa del archivo ([#6223](https://github.com/nocobase/nocobase/pull/6223)) por @jiannx

  - Cambiar la API del tipo de almacenamiento y añadir API de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher

- **[Bloque: plantilla]** Soporte para guardar un bloque de datos como plantilla de bloque desde la página ([#6348](https://github.com/nocobase/nocobase/pull/6348)) por @gchust

- **[Flujo de trabajo]** Mover la configuración de flujo de trabajo vinculado al plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) por @mytharcher

### 🐛 Corrección de Errores

- **[client]**
  - Problema de arrastrar y soltar botones en filas de tabla ([#6544](https://github.com/nocobase/nocobase/pull/6544)) por @katherinehhh

  - Incapacidad para usar la variable 'Usuario actual' al añadir una página de enlace ([#6536](https://github.com/nocobase/nocobase/pull/6536)) por @zhangzhonghe

  - La vinculación del rango de datos del campo relacional no es efectiva ([#6530](https://github.com/nocobase/nocobase/pull/6530)) por @zhangzhonghe

  - Eliminar la opción 'Permitir selección múltiple' de los campos desplegables de selección única en formularios de filtro ([#6515](https://github.com/nocobase/nocobase/pull/6515)) por @zhangzhonghe

  - Error del comando `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) por @gchust

  - Campos faltantes en la configuración de reglas de vinculación ([#6488](https://github.com/nocobase/nocobase/pull/6488)) por @katherinehhh

  - El contenido no se muestra completamente en navegadores móviles ([#6446](https://github.com/nocobase/nocobase/pull/6446)) por @zhangzhonghe

  - Al usar el operador '$anyOf', la regla de vinculación no es válida ([#6400](https://github.com/nocobase/nocobase/pull/6400)) por @zhangzhonghe

  - Formato incorrecto del campo de hora en el formulario de filtro ([#6374](https://github.com/nocobase/nocobase/pull/6374)) por @katherinehhh

  - Estilo de entrada incorrecto para la configuración del valor predeterminado del formulario ([#6490](https://github.com/nocobase/nocobase/pull/6490)) por @gchust

- **[utils]** Error conocido de 'escritorio responsive' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) por @zhangzhonghe

- **[acl]** Corregido el problema por el cual los campos de relación no se mostraban bajo la unión de roles. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) por @aaaaaajie

- **[Colección: Árbol]** Problema de migración para plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) por @2013xile

- **[Acción: Solicitud personalizada]** Incapacidad para descargar archivos codificados en UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) por @2013xile

- **[Variables y secretos]** Los botones no se mostraban en el panel de creación de nuevas variables ([#6485](https://github.com/nocobase/nocobase/pull/6485)) por @gchust

- **[Cliente WEB]** Reemplazar todas las instancias de ctx.state.currentRole (rol único) con ctx.state.currentRoles (soporta múltiples roles). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) por @aaaaaajie

- **[Control de acceso]**
  - Error cuando el ámbito de datos se establece en datos propios y la tabla carece de un campo de creador. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) por @aaaaaajie

  - Corregido que el cambio de roles no surtía efecto. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) por @aaaaaajie

- **[Bloque: plantilla]**
  - La opción 'Guardar como plantilla' no se mostraba en el bloque de datos de la página ([#6398](https://github.com/nocobase/nocobase/pull/6398)) por @gchust

  - Comportamiento incorrecto de 'Guardar como plantilla' en el cliente móvil ([#6420](https://github.com/nocobase/nocobase/pull/6420)) por @gchust

  - Requerir inicio de sesión al acceder a un formulario público ([#6258](https://github.com/nocobase/nocobase/pull/6258)) por @gchust

- **[Auth: Claves API]** Eliminación de la unión en la lista de roles del plugin de claves API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) por @aaaaaajie

- **[Bloque: Formulario multipaso]** El botón de envío tiene el mismo color en su estado predeterminado y resaltado por @jiannx

- **[Flujo de trabajo: Aprobación]** Problema de estilo con el diálogo emergente 'Solicitar nuevo' por @zhangzhonghe
