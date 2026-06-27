---
title: "NocoBase v1.7.0-beta.2: soporte para configurar opciones de campos seleccionables en reglas de vinculación"
description: "Nota de la versión v1.7.0-beta.2"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - El bloque de tabla admite ocultar la columna de índice (visible por defecto) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) por @katherinehhh

  - Soporte para configurar opciones de campos seleccionables en reglas de vinculación ([#6338](https://github.com/nocobase/nocobase/pull/6338)) por @katherinehhh

  - Soporte para configurar el rango de fechas (mín/máx) para campos de tiempo en reglas de vinculación ([#6356](https://github.com/nocobase/nocobase/pull/6356)) por @katherinehhh

- **[Bloque: Panel de acciones]** Soporte para salto de línea en el título de acciones dentro del panel de acciones ([#6433](https://github.com/nocobase/nocobase/pull/6433)) por @katherinehhh

### 🐛 Corrección de Errores

- **[cliente]**
  - Número de página incorrecto al añadir datos después de cambiar el tamaño de página en subtablas ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh

  - El estilo del logotipo no coincide con el anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe

  - Cambio en el valor de campos multiselección y pérdida de opciones al eliminar registros de subtablas ([#6405](https://github.com/nocobase/nocobase/pull/6405)) por @katherinehhh

  - La selección por rango en campos de fecha excluye la fecha máxima ([#6418](https://github.com/nocobase/nocobase/pull/6418)) por @katherinehhh

  - Al usar el operador '$anyOf', la regla de vinculación no funciona ([#6415](https://github.com/nocobase/nocobase/pull/6415)) por @zhangzhonghe

  - Datos no actualizados en ventanas emergentes abiertas mediante botones de enlace ([#6411](https://github.com/nocobase/nocobase/pull/6411)) por @zhangzhonghe

- **[Acción: Edición por lotes]** Corrección para que el flujo de trabajo se pueda activar en el envío de edición por lotes ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher

- **[Visualización de datos]** Campos eliminados aparecen al añadir campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile

- **[Gestor de fuentes de datos]** Al cambiar la fuente de datos en la gestión de roles no se cargan las colecciones correspondientes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh

- **[Acción: Solicitud personalizada]** Error de validación de permisos en el lado del servidor para solicitudes personalizadas ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh

- **[Gestor de archivos]** Corrección de varios problemas en el gestor de archivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher

- **[Notificación: Mensaje en la aplicación]**
  - Evitar que la consulta de configuración de destinatarios incorrectos cargue todos los usuarios ([#6424](https://github.com/nocobase/nocobase/pull/6424)) por @sheldon66

  - Diferenciar el color de fondo de la lista de mensajes en la aplicación del de las tarjetas de mensaje para mejorar la jerarquía visual y la legibilidad. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) por @sheldon66

- **[Flujo de trabajo: Nodo manual]**
  - Cambiar el límite de versión de la migración a `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) por @mytharcher

  - Corrección en la migración que omitía el prefijo de tabla y la lógica de esquema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) por @mytharcher
