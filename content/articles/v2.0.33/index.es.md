---
title: "NocoBase v2.0.33: Añadir una herramienta de búsqueda web basada en LLIM para empleados de IA"
description: "Nota de la versión v2.0.33"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** Añadida una herramienta de búsqueda web basada en LLM para empleados IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) por @cgyrock

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregido un problema por el que aparecía un mensaje de confirmación de cambios no guardados incorrecto para la acción de edición masiva ([#9054](https://github.com/nocobase/nocobase/pull/9054)) por @gchust

  - Corregido un problema por el que aparecía una ventana emergente de confirmación secundaria incorrecta al enviar el formulario después de crear un registro mediante una subtabla emergente. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) por @gchust

- **[gestor-de-fuentes-de-datos]** Corregido un problema por el que algunos tipos de campo no se actualizaban correctamente después de sincronizar campos desde la base de datos ([#9046](https://github.com/nocobase/nocobase/pull/9046)) por @2013xile

- **[Empleados IA]** Corregido el fallo en la carga de documentos de empleados IA bajo acceso de subruta con APP_PUBLIC_PATH configurado. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) por @cgyrock
