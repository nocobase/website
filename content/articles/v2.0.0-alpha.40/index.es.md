---
title: "NocoBase v2.0.0-alpha.40: Optimizar el estilo de la barra de herramientas para evitar que los iconos queden ocultos"
description: "Nota de la versión v2.0.0-alpha.40"
---

### 🚀 Mejoras

- **[flow-engine]** Optimizar el estilo de la barra de herramientas para evitar que los iconos queden ocultos ([#7883](https://github.com/nocobase/nocobase/pull/7883)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[flow-engine]** Se corrigió el problema por el cual los datos de permisos ACL no se recargaban después de cerrar sesión e iniciar sesión nuevamente. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) por @gchust

- **[client]** Se corrigieron problemas en la configuración de elementos del formulario ([#7867](https://github.com/nocobase/nocobase/pull/7867)) por @katherinehhh

- **[Visualización de datos]** Usar el modo de depuración de recursos SQL solo durante la vista previa del gráfico ([#7893](https://github.com/nocobase/nocobase/pull/7893)) por @heziqiang

- **[Multi-espacio]** Usuarios asociados multi-espacio por @jiannx

- **[Flujo de trabajo: Aprobación]**
  - Se corrigió el problema por el cual el tamaño de página del canal de notificaciones de carga no era lo suficientemente grande, lo que provocaba que la lista no se cargara por completo por @mytharcher

  - Se corrigió un problema de rendimiento que ocurría al consultar la lista de registros de aprobación durante el envío de una aprobación por @mytharcher

  - Se corrigió el formato de fecha en las tarjetas de la lista de aprobaciones en el centro de tareas pendientes para mostrar la fecha y hora completas por @mytharcher
