---
title: "NocoBase v1.6.0-beta.16: el campo de hora admite formato de hora"
description: "Nota de la versión v1.6.0-beta.16"
---

### 🎉 Nuevas funciones

- **[cliente]** El campo de hora admite formato de hora ([#6329](https://github.com/nocobase/nocobase/pull/6329)) por @katherinehhh

### 🚀 Mejoras

- **[servidor]** Actualización de koa a 2.15.4; actualización de @koa/cors a 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) por @2013xile

- **[Workflow]** Carga diferida del resultado del trabajo para mejorar el rendimiento ([#6344](https://github.com/nocobase/nocobase/pull/6344)) por @mytharcher

### 🐛 Corrección de errores

- **[auth]** Evitar renovar el token durante la autorización WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) por @sheldon66

- **[cliente]**
  - Las páginas con favicon personalizado muestran brevemente el favicon de NocoBase durante la carga ([#6337](https://github.com/nocobase/nocobase/pull/6337)) por @zhangzhonghe

  - El botón "añadir nuevo" aparece al pasar el ratón en el modo de solo lectura del campo de asociación ([#6322](https://github.com/nocobase/nocobase/pull/6322)) por @katherinehhh

- **[devtools]** Asegurar que la cabecera X-Forwarded-For se establece solo si req.ip no es undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) por @sheldon66

- **[Bloque: Mapa]** La configuración del campo de mapa falta o no es visible ([#6336](https://github.com/nocobase/nocobase/pull/6336)) por @zhangzhonghe

- **[Móvil]** Error de página: No se pueden leer propiedades de null (leyendo 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) por @zhangzhonghe

- **[Usuarios]** Aparece brevemente una interfaz de error al cargar la tabla de gestión de permisos de usuario por primera vez ([#6324](https://github.com/nocobase/nocobase/pull/6324)) por @zhangzhonghe

- **[Bloque: Panel de acciones]** Establecer la altura del panel de acciones no es válido ([#6321](https://github.com/nocobase/nocobase/pull/6321)) por @zhangzhonghe

- **[Acción: Importar registros Pro]** El botón de importar en el bloque de asociación para la detección de registros duplicados no muestra datos en el desplegable del campo por @katherinehhh

- **[Acción: Exportar registros Pro]** Eliminar la opción 'añadir bloque' en la configuración del botón de exportar archivos adjuntos por @katherinehhh

- **[Workflow: Evento de acción personalizada]** Corregir la migración para botones heredados vinculados con workflow de acción personalizada por @mytharcher

- **[Marca personalizada]** Las páginas con favicon personalizado muestran brevemente el favicon de NocoBase durante la carga por @zhangzhonghe

- **[Impresión de plantillas]** Fallo al restaurar desde local cuando los plugins de impresión de plantillas y gestor de copias de seguridad estaban ambos habilitados por @gchust

- **[Workflow: Aprobación]**
  - Corregir error causado por `.toJSON()` por @mytharcher

  - Corregir migración no ejecutada debido al número de versión por @mytharcher

  - Corregir migración para bloques heredados por @mytharcher
