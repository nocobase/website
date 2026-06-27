---
title: "NocoBase v2.0.0-beta.18: soporte para env.ESM_CDN_BASE_URL"
description: "Nota de la versión v2.0.0-beta.18"
---

### 🎉 Nuevas Funcionalidades

- **[flow-engine]** Soporte para env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) por @chenos

### 🚀 Mejoras

- **[acl]** acl añade el método generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) por @jiannx

- **[client]** Soporte para deshabilitar parámetros de appends predeterminados redundantes para `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile

- **[Auth: DingTalk]** Usar `userid` como clave predeterminada para la asociación de usuarios, manteniendo la compatibilidad con autenticadores existentes que dependen del móvil por @2013xile

### 🐛 Corrección de Errores

- **[client]**
  - Se corrigió un problema por el cual el flujo de eventos no se aplicaba al actualizar bloques de destino a través de una ventana emergente. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) por @gchust

  - Se corrigió un problema por el cual los datos de la página se actualizaban incorrectamente después de abrir y cerrar la ventana emergente por primera vez. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) por @gchust

  - Se corrigió un problema que provocaba que el bloque de datos se actualizara repetidamente después de enviar un formulario. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) por @gchust

  - Se corrigió que el campo nanoid no regenerara el valor predeterminado después del envío de creación ([#8538](https://github.com/nocobase/nocobase/pull/8538)) por @katherinehhh

  - Se corrigió la visualización incorrecta al establecer valores predeterminados para el modelo de campo cascader ([#8537](https://github.com/nocobase/nocobase/pull/8537)) por @katherinehhh

- **[flow-engine]** Se corrigió la carga incorrecta de algunas librerías ESM en runjs debido a una clasificación errónea como módulos AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) por @gchust

- **[File manager]** Ruta de archivo segura para el almacenamiento local, para evitar rutas de acceso fuera de la raíz del documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher

- **[Workflow]** Se añadió tolerancia a fallos para el componente de selección de registros de colección, para evitar errores cuando se elimina una colección ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher

- **[AI employees]** Se corrigió la excepción que ocurría cuando las herramientas se llamaban automáticamente durante el modelado de datos de IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) por @cgyrock

- **[Action: Import records Pro]** Se corrigieron los números de recuento en el resultado de la importación y la traducción de mensajes por @mytharcher

- **[Workflow: Subflow]** Se corrigió la ruta del enlace del workflow por @mytharcher

- **[Template print]** Se corrigió un problema de visualización de la lista de campos en la configuración de la acción de impresión de plantilla por @katherinehhh

- **[Workflow: Approval]**
  - Se corrigió un error al añadir un rol a un usuario si el workflow de audiencias está deshabilitado por @mytharcher

  - Se añadió tolerancia a fallos cuando se elimina un workflow, para evitar errores de carga en la lista de tareas por @mytharcher

- **[WeCom]** Se corrigió un problema por el cual los usuarios no podían registrarse automáticamente cuando faltaba el móvil por @2013xile
