---
title: "NocoBase v2.0.32: Agregar tabla de contenido al README"
description: "Nota de la versión v2.0.32"
---

### 🚀 Mejoras

- **[indefinido]** Añadir tabla de contenidos al README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765

### 🐛 Corrección de errores

- **[cliente]**
  - El campo de relación del subformulario no se guardaba correctamente ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx

  - Los subformularios de los campos no muestran datos ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx

  - Se corrigió el problema por el cual ctx.request no podía sobrescribir el encabezado Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust

- **[servidor]** Añadir verificación de servicio para evitar que el estado de la aplicación sea actualizado por una instancia que no está sirviendo ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher

- **[Empleados AI]**
  - Se corrigió el problema al usar modelos deepseek o minmax en dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock

  - Se corrigió el problema por el cual cancelar el razonamiento de los empleados AI provocaba que el servicio fallara ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock

- **[Flujo de trabajo: nodo de solicitud HTTP]** Se sanearon los resultados del nodo de solicitud del flujo de trabajo para evitar exponer la configuración de la solicitud, se configuró por defecto que los nuevos nodos devuelvan solo los datos de respuesta y se añadió registro de depuración para solicitudes fallidas. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher

- **[Campo de colección: Ordenar]** fix(field-sort): evitar fallo cuando el atributo scopeKey no está definido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765

- **[Bloque: GridCard]** Se corrigió el problema de que el botón no se actualiza al refrescar la tarjeta de cuadrícula ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx

- **[Flujo de trabajo: Aprobación]**
  - Añadir tolerancia a fallos al eliminar el flujo de trabajo, para evitar errores de carga en la lista de tareas por @mytharcher

  - Añadir tolerancia a fallos para cuando no existe `latestRound` por @mytharcher
