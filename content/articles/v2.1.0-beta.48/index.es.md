---
title: "NocoBase v2.1.0-beta.48: Se agregó soporte de cliente v2 para la acción de la barra superior del administrador de tareas asíncronas"
description: "Nota de la versión v2.1.0-beta.48"
---

### 🎉 Nuevas Funcionalidades

- **[client-v2]** Soporte para entrada por escaneo en campos de texto ([#9599](https://github.com/nocobase/nocobase/pull/9599)) por @katherinehhh
- **[Gestor de tareas asíncronas]** Se añadió soporte de cliente v2 para la acción de la barra superior del gestor de tareas asíncronas. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) por @jiannx
- **[Gestor de copias de seguridad]** Se añadió soporte de cliente v2 en tiempo de ejecución para el plugin del gestor de copias de seguridad. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) por @katherinehhh
- **[Fuente de datos: NocoBase externa]** Se añadió un plugin de fuente de datos: NocoBase externa por @2013xile

### 🚀 Mejoras

- **[client-v2]** Se añadió soporte para deshabilitar la selección múltiple en campos de asociación de selección emergente v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) por @katherinehhh
- **[Gestor de archivos]** Se añadió soporte de `subPath` para subidas internas en el gestor de archivos. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) por @mytharcher
- **[Variables y secretos]** Las variables de entorno (`$env`) ahora se pueden seleccionar mediante selectores de variables basados en el motor de flujo en el runtime v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) por @Molunerfinn

### 🐛 Corrección de Errores

- **[base de datos]** Se corrigió que los campos de contraseña no se hashearan durante las actualizaciones masivas. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) por @mytharcher
- **[cliente]** Se corrigió que las acciones de fila de subtablas emergentes ocultaran todo el campo de subtabla cuando la acción se oculta mediante reglas de vinculación ([#9717](https://github.com/nocobase/nocobase/pull/9717)) por @katherinehhh
- **[Empleados IA]** Se mejoraron los prompts de consulta de datos de empleados IA para cargar la habilidad requerida antes de usar las herramientas de consulta. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) por @cgyrock
- **[Gestor de fuentes de datos]** Se corrigió la visualización del campo de título desactualizado al reabrir el cajón de configuración de campos de fuente de datos v2 después de cambiar el campo de título. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) por @katherinehhh
- **[Bloque: Mapa]**

  - Se corrigió que los campos de geometría del mapa faltaran en el menú de añadir campo del gestor de fuentes de datos v2 después de habilitar el plugin de mapa. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) por @katherinehhh
  - Se corrigió el problema de DrawingManager no disponible en el bloque de Google Maps v1 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) por @katherinehhh
- **[Calendario]** Se corrigió un problema por el cual no se podían añadir bloques de Detalles y Edición en los cajones de detalle del bloque de calendario v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) por @jiannx
