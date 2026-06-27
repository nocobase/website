---
title: "NocoBase v2.1.0-alpha.15: Añadir bloque de filtro de árbol"
description: "Nota de la versión v2.1.0-alpha.15"
---

### 🎉 Nuevas Funcionalidades

- **[Bloque: Árbol]** Añadido bloque de filtro de árbol ([#9016](https://github.com/nocobase/nocobase/pull/9016)) por @jiannx

- **[Auth: Claves API]** añadidos los comandos `pm list` y `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) por @chenos

- **[Empleados IA]**
  - Añadida una herramienta de consulta de datos y una herramienta de informe de análisis de negocio para empleados IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) por @2013xile

  - Añadida una herramienta de búsqueda web basada en LLM para empleados IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) por @cgyrock

- **[Gestor de migraciones]** soporte para el comando de migración por @chenos

- **[Gestor de correo electrónico]** Gmail admite el envío de correos electrónicos con alias por @jiannx

### 🐛 Corrección de Errores

- **[Motor de flujo]** Corregido el problema por el que los campos muchos-a-uno de fuentes de datos externas no se podían añadir en el bloque de tabla ([#9068](https://github.com/nocobase/nocobase/pull/9068)) por @jiannx

- **[cliente]**
  - corregido error al añadir un campo muchos-a-muchos en subtabla ([#9070](https://github.com/nocobase/nocobase/pull/9070)) por @jiannx

  - Corregido un problema por el que la ventana emergente de selección de registro desde el botón de selección de una subtabla no resolvía correctamente los valores de las variables del elemento padre. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) por @gchust

  - Corregido un problema por el que aparecía un mensaje de confirmación de cambios no guardados incorrecto para la acción de edición masiva ([#9054](https://github.com/nocobase/nocobase/pull/9054)) por @gchust

  - Corregido un problema por el que aparecía una ventana emergente de confirmación secundaria incorrecta al enviar el formulario después de crear un registro a través de una subtabla emergente. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) por @gchust

  - Corregido el problema por el que ctx.request no podía sobrescribir la cabecera Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust

- **[gestor-de-fuentes-de-datos]** Corregido un problema por el que algunos tipos de campo no se actualizaban correctamente después de sincronizar campos desde la base de datos ([#9046](https://github.com/nocobase/nocobase/pull/9046)) por @2013xile

- **[Gestor de notificaciones]** Optimizado el rendimiento del envío de notificaciones dentro de la aplicación en escenarios de flujo de trabajo ([#9066](https://github.com/nocobase/nocobase/pull/9066)) por @mytharcher

- **[Campo de colección: Código]** Corregida la interfaz de usuario de los campos de código ([#9061](https://github.com/nocobase/nocobase/pull/9061)) por @2013xile

- **[Nodo de flujo de trabajo: Petición HTTP]** Saneados los resultados del nodo de petición de flujo de trabajo para evitar exponer la configuración de la petición, los nuevos nodos ahora devuelven solo los datos de respuesta por defecto, y se ha añadido registro de depuración para peticiones fallidas. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher

- **[Empleados IA]**
  - Corregido el problema por el que abortar el razonamiento de los empleados IA provocaba que el servicio fallara ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock

  - Corregido el fallo en la subida de documentos de empleados IA bajo acceso con subruta cuando APP_PUBLIC_PATH está configurado. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) por @cgyrock

  - Corregido el problema al usar modelos deepseek o minmax en dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock
