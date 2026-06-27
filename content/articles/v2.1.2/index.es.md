---
title: "NocoBase v2.1.2: Se agregó un formulario de configuración de almacén de vectores externo para bases de conocimiento de IA"
description: "Nota de la versión v2.1.2"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** Se añadió un formulario de configuración de almacén vectorial externo para bases de conocimiento de IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) por @cgyrock
- **[IA: Base de conocimiento]** Se añadió un formulario de configuración de almacén vectorial externo para bases de conocimiento de IA. por @cgyrock

### 🚀 Mejoras

- **[sin definir]**

  - Se añadió un escenario de control de versiones al inicio rápido del constructor de IA ([#9748](https://github.com/nocobase/nocobase/pull/9748)) por @Molunerfinn
    Referencia: [Inicio rápido del constructor de IA](https://docs.nocobase.com/en/ai-builder)
  - Se mejoró la documentación de control de versiones con guía de revisión automática del constructor de IA. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) por @cgyrock
- **[cli]** Se aclaró la redacción de la configuración inicial ([#9750](https://github.com/nocobase/nocobase/pull/9750)) por @chenos
- **[Acción: Importar registros]** Se mejoraron los diálogos de error de importación y tareas asíncronas para que los mensajes de error largos puedan leerse completamente sin romper el diseño. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) por @katherinehhh
- **[Acción: Importar registros Pro]** Se mejoraron los diálogos de importación para que los mensajes de error largos sigan siendo legibles y el modo de procesamiento v2 pueda seleccionarse directamente desde el menú de configuración. por @katherinehhh

### 🐛 Corrección de Errores

- **[client-v2]** Se corrigió el problema por el cual las páginas v2 podían seguir cargando después de iniciar sesión ([#9738](https://github.com/nocobase/nocobase/pull/9738)) por @zhangzhonghe
- **[cli]** Se requiere Node.js 22 para nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) por @chenos
- **[Gestor de archivos]** Se corrigió la falta de texto de fuentes CJK/CID en las vistas previas de PDF después de cambiar a pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) por @mytharcher
