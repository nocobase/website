---
title: "Actualizaciones semanales｜Añadir bloque de filtro de árbol"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 9 al 16 de abril de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.37](https://www.nocobase.com/en/blog/v2.0.37)

*Fecha de lanzamiento: 2026-04-14*

### 🚀 Mejoras

- **[sin definir]**

  - Añadir tabla de contenidos al README en francés ([#9037](https://github.com/nocobase/nocobase/pull/9037)) por @saraTabbane
  - Añadida consistencia de TOC en READMEs localizados ([#9038](https://github.com/nocobase/nocobase/pull/9038)) por @gaston98765
  - Añadir traducción al árabe para la página de inicio de la documentación ([#9043](https://github.com/nocobase/nocobase/pull/9043)) por @gaston98765
  - Docs: añadir traducción al árabe para las páginas de introducción de inicio rápido ([#9044](https://github.com/nocobase/nocobase/pull/9044)) por @gaston98765
- **[client]** añadir interruptor de verificación de campos obligatorios en formularios ([#9060](https://github.com/nocobase/nocobase/pull/9060)) por @jiannx

### 🐛 Corrección de errores

- **[utils]** Añadir control de seguridad para el envío de solicitudes HTTP del servidor, para evitar posibles SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) por @mytharcher
  Referencia: [Variables de entorno](https://docs.nocobase.com/get-started/installation/env)

### [v2.0.36](https://www.nocobase.com/en/blog/v2.0.36)

*Fecha de lanzamiento: 2026-04-10*

### 🐛 Corrección de errores

- **[client]** corregir error al añadir campo muchos-a-muchos en subtabla ([#9070](https://github.com/nocobase/nocobase/pull/9070)) por @jiannx
- **[flow-engine]** Corregido el problema de que los campos muchos-a-uno de fuentes de datos externas no se podían añadir en el bloque de tabla ([#9068](https://github.com/nocobase/nocobase/pull/9068)) por @jiannx
- **[Gestor de notificaciones]** Optimizar el rendimiento del envío de notificaciones dentro de la aplicación en escenarios de flujo de trabajo ([#9066](https://github.com/nocobase/nocobase/pull/9066)) por @mytharcher

### [v2.0.35](https://www.nocobase.com/en/blog/v2.0.35)

*Fecha de lanzamiento: 2026-04-09*

### 🐛 Corrección de errores

- **[client]** Corregido un problema por el cual la ventana emergente de selección de registro desde el botón de selección de una subtabla no podía resolver correctamente los valores de las variables del elemento padre. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) por @gchust
- **[Campo de colección: Código]** Corregir la interfaz de usuario de los campos de código ([#9061](https://github.com/nocobase/nocobase/pull/9061)) por @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.16](https://www.nocobase.com/en/blog/v2.1.0-alpha.16)

*Fecha de lanzamiento: 2026-04-14*

### 🚀 Mejoras

- **[sin definir]**

  - Añadida consistencia de TOC en READMEs localizados ([#9038](https://github.com/nocobase/nocobase/pull/9038)) por @gaston98765
  - Añadir tabla de contenidos al README en francés ([#9037](https://github.com/nocobase/nocobase/pull/9037)) por @saraTabbane
- **[server]** Mejorados los documentos de la API swagger del gestor de plugins ([#9080](https://github.com/nocobase/nocobase/pull/9080)) por @2013xile

### 🐛 Corrección de errores

- **[Empleados IA]** Corregido el problema por el cual los mensajes de error no se mostraban en las conversaciones de los empleados IA ([#9097](https://github.com/nocobase/nocobase/pull/9097)) por @cgyrock
- **[Control de acceso]** actualizar acl swagger para el servidor mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) por @Andrew1989Y

### [v2.1.0-alpha.15](https://www.nocobase.com/en/blog/v2.1.0-alpha.15)

*Fecha de lanzamiento: 2026-04-10*

### 🎉 Nuevas funciones

- **[Bloque: Árbol]** Añadir bloque de filtro de árbol ([#9016](https://github.com/nocobase/nocobase/pull/9016)) por @jiannx
- **[Auth: Claves API]** añadir comandos `pm list` y `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) por @chenos
- **[Empleados IA]**

  - Añadida una herramienta de consulta de datos y una herramienta de informe de análisis de negocio para empleados IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) por @2013xile
  - Añadir una herramienta de búsqueda web basada en LLM para empleados IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) por @cgyrock
- **[Gestor de migraciones]** soportar comando de migración por @chenos
- **[Gestor de correo electrónico]** gmail soporta el envío de correos electrónicos con alias por @jiannx

### 🐛 Corrección de errores

- **[flow-engine]** Corregido el problema de que los campos muchos-a-uno de fuentes de datos externas no se podían añadir en el bloque de tabla ([#9068](https://github.com/nocobase/nocobase/pull/9068)) por @jiannx
- **[client]**

  - corregir error al añadir campo muchos-a-muchos en subtabla ([#9070](https://github.com/nocobase/nocobase/pull/9070)) por @jiannx
  - Corregido un problema por el cual la ventana emergente de selección de registro desde el botón de selección de una subtabla no podía resolver correctamente los valores de las variables del elemento padre. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) por @gchust
  - Corregido un problema por el cual aparecía un mensaje de confirmación de cambios no guardados incorrecto para la acción de edición masiva ([#9054](https://github.com/nocobase/nocobase/pull/9054)) por @gchust
  - Corregido un problema por el cual aparecía una ventana emergente de confirmación secundaria incorrecta al enviar el formulario después de crear un registro a través de una subtabla emergente. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) por @gchust
  - Corregido el problema por el cual ctx.request no podía sobrescribir el encabezado Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust
- **[data-source-manager]** Corregido un problema por el cual algunos tipos de campo no se actualizaban correctamente después de sincronizar campos desde la base de datos ([#9046](https://github.com/nocobase/nocobase/pull/9046)) por @2013xile
- **[Gestor de notificaciones]** Optimizar el rendimiento del envío de notificaciones dentro de la aplicación en escenarios de flujo de trabajo ([#9066](https://github.com/nocobase/nocobase/pull/9066)) por @mytharcher
- **[Campo de colección: Código]** Corregir la interfaz de usuario de los campos de código ([#9061](https://github.com/nocobase/nocobase/pull/9061)) por @2013xile
- **[Nodo de solicitud HTTP del flujo de trabajo]** Sanitizados los resultados del nodo de solicitud del flujo de trabajo para evitar exponer la configuración de la solicitud, los nuevos nodos ahora devuelven solo los datos de respuesta por defecto, y se añadió registro de depuración para solicitudes fallidas. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher
- **[Empleados IA]**

  - Corregido el problema por el cual abortar el razonamiento de los empleados IA provocaba que el servicio fallara ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock
  - Corregir el fallo en la carga de documentos de empleados IA bajo acceso de subruta con APP_PUBLIC_PATH configurado. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) por @cgyrock
  - Corregido el problema al usar modelos Deepseek o MiniMax en dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock
