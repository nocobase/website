---
title: "NocoBase v2.2.0-beta.5: Se agregaron registros de versión de esquema para la configuración del entorno"
description: "Nota de la versión v2.2.0-beta.5"
---

### 🚀 Mejoras

* **[cli]** Se añadieron registros de versión de esquema para la configuración de entorno. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) por @chenos
* **[Gestor de archivos]** Se mejoraron las vistas previas de PDF: los archivos PDF de origen cruzado ahora usan la vista previa nativa del navegador, mientras que los archivos PDF del mismo origen continúan renderizándose con PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) por @mytharcher

### 🐛 Corrección de errores

* **[client-v2]**
  * Se corrigió el problema por el cual la configuración del flujo de eventos ya no podía modificarse después de convertir un bloque en una plantilla. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) por @gchust
  * Se corrigió el problema por el cual las opciones desplegables de casillas de verificación en los formularios de filtro v2 no mostraban el texto traducido. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) por @katherinehhh
  * Se corrigió la visualización incorrecta y la configuración de formato cuando el campo de título de un campo de relación de tabla v2 utilizaba un campo de hora, fecha o fecha y hora. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) por @katherinehhh
* **[Motor de flujo]** Se corrigieron datos incorrectos en los formularios de registro actual y datos de detalle dentro de ventanas emergentes durante la construcción con IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) por @gchust
* **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió el problema por el cual los botones de activación del flujo de trabajo en el panel de acciones v2 seguían mostrando éxito y enviando solicitudes cuando no había ningún flujo de trabajo vinculado. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) por @mytharcher
* **[Empleados de IA]** Se corrigió el problema por el cual los empleados de IA no podían completar correctamente los datos de subtablas. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) por @gchust
