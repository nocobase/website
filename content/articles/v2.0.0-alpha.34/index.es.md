---
title: "NocoBase v2.0.0-alpha.34: Corrección de errores"
description: "Nota de la versión v2.0.0-alpha.34"
---

### 🚀 Mejoras

- **[database]** Se añadió la opción `multipleStatements` a la instancia de conexión MariaDB para admitir la ejecución de múltiples sentencias en una sola consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher

### 🐛 Corrección de errores

- **[flow-engine]** Se corrigió un problema por el cual los botones de acción en el bloque de tabla no se actualizaban correctamente al cambiar de página, asegurando que su funcionalidad coincida con los datos de la página actual. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) por @gchust

- **[client]**
  - Se corrigió el error "Se ha superado el tamaño máximo de la pila de llamadas" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe

  - Se corrigió que los puntos suspensivos en el campo de título de campo de asociación no se aplicaban ([#7778](https://github.com/nocobase/nocobase/pull/7778)) por @katherinehhh

  - La regla de vinculación de la acción de actualización de registro no funciona ([#7774](https://github.com/nocobase/nocobase/pull/7774)) por @gchust

- **[database]** Detección incorrecta del campo de índice cuando los nombres de campo usan el estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile

- **[Móvil (obsoleto)]** Se corrigió el problema por el cual la ventana emergente del valor predeterminado del campo de fecha en dispositivos móviles no permitía seleccionar una fecha ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe
