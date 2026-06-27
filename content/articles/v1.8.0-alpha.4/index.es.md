---
title: "NocoBase v1.8.0-alpha.4: Soporte para filtrar más campos del flujo de trabajo"
description: "Nota de la versión v1.8.0-alpha.4"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Soporte para filtrar más campos del flujo de trabajo ([#6995](https://github.com/nocobase/nocobase/pull/6995)) por @mytharcher

- **[Gestor de correo electrónico]** soporta el valor de envío predeterminado en ventanas emergentes, soporta búsqueda difusa para destinatarios y corrige problemas por @jiannx

### 🐛 Corrección de errores

- **[Base de datos]** corrección: se añaden los campos faltantes de creador y actualizador al importar xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) por @aaaaaajie

- **[Cliente]**
  - falta el título del campo al establecer una variable en el componente de asignación ([#7001](https://github.com/nocobase/nocobase/pull/7001)) por @katherinehhh

  - Los campos de asociación muestran subtabla y subformulario al pasar el ratón en modo de solo lectura ([#7002](https://github.com/nocobase/nocobase/pull/7002)) por @zhangzhonghe

  - las reglas de vinculación del bloque markdown no funcionan al activarse mediante una acción emergente ([#7007](https://github.com/nocobase/nocobase/pull/7007)) por @katherinehhh

  - cambiar de página en la subtabla del bloque de detalle dentro de un modal activa la advertencia de cambios no guardados ([#7004](https://github.com/nocobase/nocobase/pull/7004)) por @katherinehhh

  - las reglas de vinculación de estilo de campo no funcionan ([#7003](https://github.com/nocobase/nocobase/pull/7003)) por @katherinehhh

- **[Gestor de tareas asíncronas]** Corregido el problema de ejecución múltiple durante la importación asíncrona ([#7006](https://github.com/nocobase/nocobase/pull/7006)) por @aaaaaajie

- **[Localización]** Resuelve el error causado por textos vacíos ([#7010](https://github.com/nocobase/nocobase/pull/7010)) por @2013xile

- **[Acción: Exportar registros Pro]** Corregido el problema de ejecución múltiple durante la importación asíncrona por @aaaaaajie

- **[Flujo de trabajo: Aprobación]** Corrige que la aprobación delegada no pueda continuar cuando es aprobada por otros por @mytharcher

- **[Gestor de correo electrónico]**
  - múltiples claves primarias para la tabla "mailmessagelabels_mailmessages" por @jiannx

  - la ventana emergente de configuración no se muestra por @jiannx

  - búsqueda difusa de correo para crear filtros únicos por @jiannx

  - la búsqueda difusa de destinatarios soporta campos asociados por @jiannx

  - añadir el campo "id" a mailmessagelabelsMailmessages por @jiannx
