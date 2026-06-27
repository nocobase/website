---
title: "NocoBase v1.9.3: Corrección de error al duplicar flujo de trabajo de aprobación"
description: "Nota de la versión v1.9.3"
---

### 🚀 Mejoras

- **[base de datos]** Se añadió la opción `multipleStatements` a la instancia de conexión MariaDB para admitir la invocación de múltiples sentencias en una sola consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher

- **[Flujo de trabajo]** Se admite el bloque de datos en el flujo de trabajo para usar el menú de configuración de detalles consolidados ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher

### 🐛 Corrección de errores

- **[servidor]** Aislar el canal Pub-Sub por nombre de aplicación ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher

- **[cliente]** Corregir "Se superó el tamaño máximo de la pila de llamadas" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe

- **[base de datos]** Detección incorrecta del campo de índice cuando los nombres de campo usan el estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile

- **[Flujo de trabajo]** Se resolvió un problema por el cual el despachador de flujo de trabajo en modo clúster no lograba identificar correctamente los estados inactivos, lo que podía provocar un consumo innecesario de eventos en la cola antes de que el plugin estuviera listo ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher

- **[Móvil (obsoleto)]** Corregir el problema por el cual la ventana emergente del valor predeterminado del campo de fecha en móvil no podía seleccionar una fecha ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe

- **[Flujo de trabajo: Aprobación]** Corregir el error lanzado al duplicar un flujo de trabajo de aprobación por @mytharcher

- **[Gestor de correo electrónico]** la colección mailMessages añade índices por @jiannx
