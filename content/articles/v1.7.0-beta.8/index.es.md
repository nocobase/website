---
title: "NocoBase v1.7.0-beta.8: Soporte de variables de entorno en la URL del botón de enlace"
description: "Nota de la versión v1.7.0-beta.8"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para ajustes de estilo de campo: tamaño de fuente, peso de fuente y estilo de fuente ([#6489](https://github.com/nocobase/nocobase/pull/6489)) por @katherinehhh

- **[Variables y secretos]** Soporte para variables de entorno en la URL de botones de enlace ([#6494](https://github.com/nocobase/nocobase/pull/6494)) por @katherinehhh

### 🚀 Mejoras

- **[cliente]** Soporte para coincidencia difusa en campos seleccionados del botón de filtro ([#6496](https://github.com/nocobase/nocobase/pull/6496)) por @katherinehhh

- **[Flujo de trabajo: nodo de correo]** Añadida descripción de configuración del campo seguro. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) por @sheldon66

- **[Cliente WEB]** Añadido mensaje de confirmación secundaria para Limpiar Caché ([#6505](https://github.com/nocobase/nocobase/pull/6505)) por @katherinehhh

- **[Notificación: Correo electrónico]** Añadida descripción de configuración del campo seguro. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) por @sheldon66

- **[Gestor de correo electrónico]** Soporte para reautorizar y seleccionar automáticamente la cuenta al enviar un correo por @jiannx

### 🐛 Corrección de Errores

- **[servidor]** El comando de actualización puede causar errores en el flujo de trabajo ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust

- **[cliente]**
  - La altura de la subtabla en el formulario se ajusta junto con la altura del formulario ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh

  - Error al enviar el campo de hora en configuración regional china (sintaxis de entrada no válida para tipo time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) por @katherinehhh

  - Transparencia del botón de acción que causa problemas de visualización al pasar el ratón ([#6529](https://github.com/nocobase/nocobase/pull/6529)) por @katherinehhh

- **[Autenticación]**
  - Recortar opciones del autenticador ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile

  - X-Authenticator faltante ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos

- **[Bloque: Mapa]**
  - Problema de gestión de claves del bloque de mapa que causa fallos en las solicitudes debido a caracteres invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh

  - Los campos de clave secreta no activan la validación en la gestión del mapa ([#6509](https://github.com/nocobase/nocobase/pull/6509)) por @katherinehhh

- **[Gestor de archivos]** No se puede acceder a los archivos almacenados en COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) por @chenos

- **[Acción: Exportar registros Pro]** No se pueden exportar archivos adjuntos por @chenos

- **[Gestor de copias de seguridad]** La restauración puede causar errores de ejecución del flujo de trabajo por @gchust

- **[WeCom]** Resolver variables de entorno y secretos al recuperar la configuración de notificaciones. por @2013xile

- **[Flujo de trabajo: Aprobación]**
  - Corregir error en la tabla de procesos cuando se elimina un trabajo por @mytharcher

  - Corregir error al añadir resultado de nodo de consulta por @mytharcher

  - Corregir fallo causado por usuario nulo por @mytharcher
