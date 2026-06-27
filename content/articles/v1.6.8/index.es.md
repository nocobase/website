---
title: "NocoBase v1.6.8: Corrección de errores"
description: "Nota de la versión v1.6.8"
---

### 🐛 Corrección de errores

- **[servidor]** El comando de actualización puede provocar errores en los flujos de trabajo ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust

- **[cliente]** La altura de la subtabla en el formulario se ajusta junto con la altura del formulario ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh

- **[Autenticación]**
  - Falta X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos

  - Recortar opciones de autenticador ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile

- **[Bloque: Mapa]** Problema de gestión de claves del bloque de mapa que provoca fallos en las solicitudes debido a caracteres invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh

- **[Gestor de copias de seguridad]** La restauración puede provocar errores de ejecución del flujo de trabajo por @gchust

- **[WeCom]** Resolver variables de entorno y secretos al recuperar la configuración de notificaciones. por @2013xile
