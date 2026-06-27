---
title: "NocoBase v2.1.10: Se agregó soporte para usar variables del usuario actual en URL y encabezados de clientes MCP remotos"
description: "Nota de la versión v2.1.10"
---

### 🎉 Nuevas funciones

- **[ai]** Se ha añadido soporte para usar variables del usuario actual en las URL y cabeceras de clientes MCP remotos. ([#9828](https://github.com/nocobase/nocobase/pull/9828)) por @cgyrock
- **[cli]** Soporte para scripts de hook de instalación ([#9824](https://github.com/nocobase/nocobase/pull/9824)) por @chenos

### 🚀 Mejoras

- **[client-v2]** Las reglas de validación a nivel de campo se muestran ahora como reglas heredadas de solo lectura en la configuración de validación de campos de la interfaz de usuario. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) por @katherinehhh
- **[Flow engine]** Se ha añadido el bloque actual al contexto de usuario por defecto al construir empleados de IA usando la API de Flow Surface. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) por @gchust

### 🐛 Corrección de errores

- **[client-v2]** Se corrigió que el bloque no se actualizara después de que se actualizaran las configuraciones de los bloques. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) por @gchust
- **[Workflow: Evento de acción personalizada]**

  - Se corrigió que las acciones del flujo de trabajo activadas por contexto personalizado resolvieran las variables del frontend en las cargas útiles de las solicitudes antes del envío en los botones de acción v2 ([#9853](https://github.com/nocobase/nocobase/pull/9853)) por @mytharcher
  - Se corrigió el selector de enlace del flujo de trabajo de acción personalizada v2 para que los flujos de trabajo habilitados se filtren con valores booleanos y se puedan listar correctamente. ([#9865](https://github.com/nocobase/nocobase/pull/9865)) por @mytharcher
- **[Bloque: Gantt]** Se corrigió que la configuración de la plantilla de la ventana emergente de tareas de Gantt no se aplicara o borrara correctamente. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) por @jiannx
- **[Workflow: Aprobación]**

  - Se corrigió la validación del nodo de acción de aprobación para permitir `null` para `applyDetail` o `approvalUid` y omitir el procesamiento a menos que se proporcione una referencia de cadena por @mytharcher
  - Se corrigió el problema por el cual las aprobaciones relacionadas no se cargan o actualizan correctamente por @zhangzhonghe
