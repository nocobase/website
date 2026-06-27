---
title: "NocoBase v1.8.0-beta.5: Soporte para filtrar más campos del flujo de trabajo"
description: "Nota de la versión v1.8.0-beta.5"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Se ha añadido soporte para filtrar más campos del flujo de trabajo ([#6995](https://github.com/nocobase/nocobase/pull/6995)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Las reglas de vinculación del bloque markdown no funcionan cuando se activan mediante una acción emergente ([#7007](https://github.com/nocobase/nocobase/pull/7007)) por @katherinehhh

  - Los campos de asociación muestran subtabla y subformulario al pasar el ratón en modo de solo lectura ([#7002](https://github.com/nocobase/nocobase/pull/7002)) por @zhangzhonghe

  - Las reglas de vinculación de estilo de campo no funcionan ([#7003](https://github.com/nocobase/nocobase/pull/7003)) por @katherinehhh

  - Falta el título del campo al establecer una variable en el componente de asignación ([#7001](https://github.com/nocobase/nocobase/pull/7001)) por @katherinehhh

  - Cambiar de página en la subtabla de un bloque de detalle dentro de un modal activa la advertencia de cambios no guardados ([#7004](https://github.com/nocobase/nocobase/pull/7004)) por @katherinehhh

- **[Gestor de tareas asíncronas]** Se corrigió un problema de ejecución múltiple durante la importación asíncrona ([#7006](https://github.com/nocobase/nocobase/pull/7006)) por @aaaaaajie

- **[Localización]** Se resolvió un error causado por textos vacíos ([#7010](https://github.com/nocobase/nocobase/pull/7010)) por @2013xile

- **[Acción: Exportar registros Pro]** Se corrigió un problema de ejecución múltiple durante la importación asíncrona por @aaaaaajie

- **[Flujo de trabajo: Aprobación]** Se corrigió que la aprobación delegada no pudiera continuar cuando otros la aprueban por @mytharcher
