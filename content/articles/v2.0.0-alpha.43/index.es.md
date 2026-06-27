---
title: "NocoBase v2.0.0-alpha.43: Añadir icono para el tipo de nodo de respuesta"
description: "Nota de la versión v2.0.0-alpha.43"
---

### 🚀 Mejoras

- **[Visualización de datos]** Se añadió soporte para el idioma ruso en las interfaces de los plugins. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) por @sembaev-a-a

- **[Control de acceso]** Reducir los permisos predeterminados para el rol de miembro ([#7921](https://github.com/nocobase/nocobase/pull/7921)) por @2013xile

- **[Workflow: Webhook]** Añadir icono para el tipo de nodo de respuesta por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Corregir error: No se puede resolver 'antd-mobile' y No se puede resolver 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) por @zhangzhonghe

- **[motor-de-flujo]** Se corrigió el problema por el cual abrir el formulario de edición rápida del bloque de tabla provocaba un error. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) por @gchust

- **[Motor de flujo]** Asegurar que las variables de registro siempre devuelvan registros completos cuando se usan junto con sus campos individuales. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) por @gchust

- **[Fuente de datos: Principal]** Corregir el problema por el cual un campo recién añadido de uno a muchos no se puede seleccionar como clave externa antes de reiniciar la aplicación. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) por @cgyrock

- **[Control de acceso]** Soporte para restricciones de ámbito de datos en operaciones de asociación. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) por @2013xile
