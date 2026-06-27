---
title: "NocoBase v2.0.38: Mejora la capacidad de los empleados de IA para analizar documentos cargados"
description: "Nota de la versión v2.0.38"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** Mejora la capacidad de los empleados IA para analizar documentos subidos ([#9126](https://github.com/nocobase/nocobase/pull/9126)) por @cgyrock

### 🚀 Mejoras

- **[logger]** Añadir información de `referer` a los registros de solicitudes ([#9110](https://github.com/nocobase/nocobase/pull/9110)) por @2013xile

- **[undefined]** Sincronizar la documentación traducida sobre variables de entorno y modo clúster con las últimas actualizaciones en chino. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) por @mytharcher

- **[Empleados IA]** Tras la selección de un bloque de empleado IA, rellenar el archivo adjunto del formulario en el área de carga ([#9127](https://github.com/nocobase/nocobase/pull/9127)) por @cgyrock

- **[Flujo de trabajo: Nodo manual]** Usar `simplePagination` en las colecciones relacionadas con tareas del flujo de trabajo para un mejor rendimiento de la lista ([#9117](https://github.com/nocobase/nocobase/pull/9117)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Usar `simplePagination` en las colecciones `approvals` y `approvalRecords` para un mejor rendimiento de la lista por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió que las opciones opcionales de los campos de selección única en la configuración de reglas de campo estuvieran vacías ([#9119](https://github.com/nocobase/nocobase/pull/9119)) por @jiannx

  - Se corrigió la configuración incorrecta de valores predeterminados para subtablas en formularios. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) por @gchust

- **[Notificación: Mensaje en la aplicación]** Se corrigió el problema de que el componente de selección de destinatario no funcionaba correctamente ([#9123](https://github.com/nocobase/nocobase/pull/9123)) por @mytharcher

- **[Empleados IA]** Se corrigió el problema de que la configuración de baseURL del servicio LLM de google-gen-ai no surtía efecto ([#9107](https://github.com/nocobase/nocobase/pull/9107)) por @cgyrock

- **[Gestor de correo electrónico]** Se eliminó el aviso de cierre del formulario después de enviar el correo electrónico correctamente por @jiannx
