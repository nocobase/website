---
title: "NocoBase v2.1.0-alpha.30: Corrección del problema de errores ocasionales al usar el modelo DeepSeek v4 con el empleado de IA"
description: "Nota de la versión v2.1.0-alpha.30"
---

### 🚀 Mejoras

- **[indefinido]** Añadir notificación de fallo de Feishu para flujos de trabajo de lanzamiento manual ([#9349](https://github.com/nocobase/nocobase/pull/9349)) por @Molunerfinn
- **[IdP: OAuth]** Las sesiones de OAuth ahora usan la misma configuración de caducidad que la política de tokens del sistema ([#9345](https://github.com/nocobase/nocobase/pull/9345)) por @2013xile

### 🐛 Corrección de errores

- **[client-v2]** Corregida la carga de plugins remotos para que las URL de plugins que ya terminan en `.js` no se resuelvan en rutas duplicadas `.js.js`. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) por @Molunerfinn
- **[cli]** Corregidas las opciones booleanas de CLI para que puedan deshabilitarse con banderas negadas ([#9337](https://github.com/nocobase/nocobase/pull/9337)) por @2013xile
- **[Empleados de IA]**

  - Corregido el problema de errores ocasionales cuando el empleado de IA usa el modelo DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) por @cgyrock
  - Corregido el problema por el cual el nodo de empleado de IA del flujo de trabajo limpia las habilidades después de cambiar de empleado de IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) por @cgyrock
- **[Fuente de datos: Principal]** Evitar bloqueo cuando los campos son indefinidos durante la carga de colecciones ([#9174](https://github.com/nocobase/nocobase/pull/9174)) por @saraTabbane
- **[Plantillas de UI]** Corregido un problema por el cual la lista de plantillas emergentes no cargaba correctamente las plantillas disponibles. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) por @gchust
- **[Bloque: Kanban]** Corregidos los bloques asociados de kanban que usaban parámetros de recursos de tiempo de ejecución no resueltos en contextos emergentes o de página secundaria. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregido el problema por el cual los parámetros de filtro y otros de consulta ahora funcionan en la API para listar flujos de trabajo de aprobación disponibles por @mytharcher
