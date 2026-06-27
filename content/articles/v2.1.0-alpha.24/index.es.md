---
title: "NocoBase v2.1.0-alpha.24: Ajuste de la interacción de configuración de habilidades/herramientas para la instrucción del empleado de IA"
description: "Nota de la versión v2.1.0-alpha.24"
---

### 🚀 Mejoras

- **[sin definir]** Mejora de la guía de instalación del Agente de IA para evitar que los Agentes omitan el asistente `--ui` y para detectar automáticamente los gestores de versiones de Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) por @Molunerfinn

- **[Empleados de IA]**
  - Ajuste de la interacción de configuración de habilidades/herramientas para la instrucción de empleados de IA ([#9232](https://github.com/nocobase/nocobase/pull/9232)) por @cgyrock

  - Eliminación del modelo recomendado en la configuración del servicio LLM ([#9228](https://github.com/nocobase/nocobase/pull/9228)) por @cgyrock

- **[Flujo de trabajo: JavaScript]** Actualización de imágenes Docker, flujos de trabajo de CI y la dependencia del sandbox de JavaScript del flujo de trabajo para compatibilidad con Node.js 22. ([#9245](https://github.com/nocobase/nocobase/pull/9245)) por @Molunerfinn

### 🐛 Corrección de errores

- **[sin definir]** Corrección del selector de idioma que generaba URL incorrectas (p. ej., `/cn/es/` en lugar de `/es/`) en el sitio de documentación. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) por @Molunerfinn

- **[Empleados de IA]**
  - Corrección del error en la API para obtener la lista de empleados de IA ([#9241](https://github.com/nocobase/nocobase/pull/9241)) por @cgyrock

  - Comportamiento refinado de delegación de tareas de Atlas y actualización de Viz para usar el flujo de trabajo de informes empresariales para solicitudes de informes ([#9229](https://github.com/nocobase/nocobase/pull/9229)) por @2013xile
