---
title: "NocoBase v2.0.58: Se agregó una API de administrador para volver a ejecutar ejecuciones de flujo de trabajo iniciadas desde el inicio o un nodo especificado"
description: "Nota de la versión v2.0.58"
---

### 🎉 Nuevas Funcionalidades

- **[Workflow]** Se añadió una API de administrador para reejecutar ejecuciones de workflow iniciadas desde el inicio o desde un nodo específico. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher

### 🚀 Mejoras

- **[cliente]** Se eliminó la opción Oculto de la configuración de elementos del menú ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe

### 🐛 Correcciones de Errores

- **[cliente]**
  - Se corrigió la sincronización del valor del selector de fecha móvil en ventanas emergentes ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh

  - Se corrigió la conservación del formato de hora para campos de tiempo v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh

  - Se aumentó el límite de carga de imágenes de entrada de escaneo ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh

  - Se corrigió la sincronización del estado oculto para la vinculación de subformularios ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh

  - Se corrigió el problema por el cual la subtabla en un subformulario no podía agregar una segunda fila ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh

  - Se corrigió la desaparición de las pestañas de página después de cambiar de menú ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe

- **[motor-de-flujo]** Se corrigió un problema por el cual las reglas de vinculación de acciones de tabla se ejecutaban incorrectamente después de enviar un formulario correctamente en una ventana emergente. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust

- **[Workflow: Evento de acción personalizada]** Se corrigió que los botones de tabla de acción personalizada con contexto de múltiples registros permitieran incorrectamente seleccionar workflows de contexto personalizado. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher

- **[Gestor de archivos]**
  - Se corrigió la normalización de nombres de archivo Unicode durante la carga de archivos para evitar generar claves de objeto con caracteres de control. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher

  - Se mejoraron los mensajes de error de vista previa de PDF y se documentaron los requisitos CORS para almacenamiento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
Referencia: [Vista previa de archivos](docs/docs/en/file-manager/file-preview/index.md)
