---
title: "NocoBase v2.0.0-alpha.37: adaptación al campo tableoid en 2.0"
description: "Nota de la versión v2.0.0-alpha.37"
---

### 🚀 Mejoras

- **[cliente]**
  - Añadir información de versión de página al contexto del motor de flujo ([#7826](https://github.com/nocobase/nocobase/pull/7826)) por @gchust

  - Mejorar el editor Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) por @katherinehhh

  - Adaptar al campo tableoid en 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) por @katherinehhh

- **[Visualización de datos]** Actualizar las sugerencias de alerta y las anotaciones de la plantilla de código de eventos ([#7814](https://github.com/nocobase/nocobase/pull/7814)) por @heziqiang

- **[Control de acceso]** Optimizar la lógica de control de permisos para operaciones en campos de asociación ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile

- **[Auth: OIDC]** Aumentar el tiempo de espera de la solicitud por @2013xile

### 🐛 Corrección de errores

- **[servidor]** Corregir un problema por el cual, tras habilitar el modo de división de servicios, los procesos worker que enviaban mensajes a través de la cola de mensajes provocaban errores ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher

- **[cliente]**
  - La variable de la colección actual no debería ser seleccionable desde el selector de variables del componente de filtro ([#7818](https://github.com/nocobase/nocobase/pull/7818)) por @gchust

  - Corregir el error 'value.replace is not a function' en el campo de relación del formulario de filtro ([#7824](https://github.com/nocobase/nocobase/pull/7824)) por @zhangzhonghe

  - Corregir parámetros incorrectos en la devolución de llamada onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) por @zhangzhonghe

- **[motor-de-flujo]** Corregir el problema por el cual los cambios en el flujo de eventos solo surtían efecto después de actualizar la página. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) por @gchust

- **[Workflow]** Corregir el problema por el cual el plugin de workflow seguía consumiendo el evento de la cola cuando no estaba en modo worker bajo el modo de división de servicios ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher

- **[Workflow: Aprobación]** Corregir un problema por el cual los campos de la colección principal no se excluían al recargar datos de asociación por @mytharcher

- **[Gestor de correo electrónico]** Corregir el problema de las imágenes reservadas y la sincronización en Outlook por @jiannx
