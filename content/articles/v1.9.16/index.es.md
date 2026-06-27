---
title: "NocoBase v1.9.16: Agregar opciones de transformación de mensajes de error en la configuración de la fuente de datos de la API RESTful"
description: "Nota de la versión v1.9.16"
---

### 🎉 Nuevas Funcionalidades

- **[Fuente de datos: API REST]** se añade la opción `transformador de mensajes de error` en la configuración de la fuente de datos de la API RESTful por @cgyrock

### 🚀 Mejoras

- **[cliente]**
  - Mostrar opciones colapsadas al pasar el ratón en el componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh

  - Optimizar mensajes de validación para subtablas ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh

- **[Flujo de trabajo]** Se añade el contexto de la fuente de datos "principal" para UserSelect, con el fin de proporcionar un componente más común que pueda usarse en otros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Usar un componente común para reducir código duplicado por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]** Corregir el error de carga diferida en Variable.Input, que provocaba que el menú de opciones de variables se renderizara incorrectamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher

- **[Acción: Importar registros]** Corregir el problema donde se lanzaba un error cuando un campo en el xlsx importado tenía un valor `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher

- **[Flujo de trabajo]** Corregir el problema donde la cola se cerraba antes de publicar los mensajes ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher

- **[Flujo de trabajo: Subflujo]** Corregir el problema donde el flujo de trabajo seleccionado mostraba "N/A" cuando el número de flujos de trabajo era mayor a 200 por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir el problema de permisos al obtener `approvalRecords.reassignee` debido a un cambio en `RemoteSelect` por @mytharcher

  - Corregir el problema donde la acción de impresión no funcionaba al recargar la página con un modal abierto por @mytharcher
