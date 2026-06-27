---
title: "NocoBase v2.1.0-alpha.17: refactorización de la CLI de NocoBase"
description: "Nota de la versión v2.1.0-alpha.17"
---

### 🎉 Nuevas Funcionalidades

- **[cli]** Refactorización de NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) por @chenos

- **[Empleados IA]** Mejora de la capacidad de los empleados IA para analizar documentos subidos ([#9126](https://github.com/nocobase/nocobase/pull/9126)) por @cgyrock

### 🚀 Mejoras

- **[sin definir]**
  - Sincronización de la documentación traducida sobre variables de entorno y modo clúster con las últimas actualizaciones en chino. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) por @mytharcher

  - Documentación: añadida traducción al árabe para las páginas de introducción de inicio rápido ([#9044](https://github.com/nocobase/nocobase/pull/9044)) por @gaston98765

  - Añadida traducción al árabe para la página de inicio de la documentación ([#9043](https://github.com/nocobase/nocobase/pull/9043)) por @gaston98765

- **[logger]** Añadida información `referer` a los registros de solicitudes ([#9110](https://github.com/nocobase/nocobase/pull/9110)) por @2013xile

- **[cliente]** Añadido interruptor de verificación de campos obligatorios en formularios ([#9060](https://github.com/nocobase/nocobase/pull/9060)) por @jiannx

- **[Flujo de trabajo: Nodo manual]** Uso de `simplePagination` en colecciones relacionadas con tareas de flujo de trabajo para mejorar el rendimiento de listas ([#9117](https://github.com/nocobase/nocobase/pull/9117)) por @mytharcher

- **[Empleados IA]** Tras la selección de bloque por parte del empleado IA, rellenar el archivo adjunto del formulario en el área de subida ([#9127](https://github.com/nocobase/nocobase/pull/9127)) por @cgyrock

- **[Flujo de trabajo: Aprobación]** Uso de `simplePagination` en las colecciones `approvals` y `approvalRecords` para mejorar el rendimiento de listas por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregido que las opciones opcionales de los campos de selección única en la configuración de reglas de campo estuvieran vacías ([#9119](https://github.com/nocobase/nocobase/pull/9119)) por @jiannx

  - Corregido un problema donde el componente de campo de asociación era incorrecto en la configuración de valores de campo. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) por @gchust

  - Corregida la configuración incorrecta de valores predeterminados para la subtabla en un formulario. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) por @gchust

- **[utilidades]** Añadido control de seguridad para el envío de solicitudes HTTP del servidor, para evitar posibles SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) por @mytharcher
Referencia: [Variables de entorno](https://docs.nocobase.com/get-started/installation/env)
- **[Flujo de trabajo: Nodo bucle]** Corregidas las validaciones de los nodos de flujo de trabajo ([#9111](https://github.com/nocobase/nocobase/pull/9111)) por @mytharcher

- **[Notificación: Mensaje en la aplicación]** Corregido el problema donde el componente de selección de destinatario no funcionaba correctamente ([#9123](https://github.com/nocobase/nocobase/pull/9123)) por @mytharcher

- **[IdP: OAuth]** Corregido el acceso OAuth para solicitudes API regulares ([#9120](https://github.com/nocobase/nocobase/pull/9120)) por @2013xile

- **[Empleados IA]**
  - Corregida la ordenación de consultas agregadas descartada por ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) por @2013xile

  - Corregido el problema donde la configuración de baseURL del servicio LLM de google-gen-ai no surtía efecto ([#9107](https://github.com/nocobase/nocobase/pull/9107)) por @cgyrock

- **[Gestor de correo electrónico]** Eliminado el aviso de cierre de formulario tras enviar el correo electrónico correctamente por @jiannx
