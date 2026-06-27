---
title: "NocoBase v1.7.0-alpha.2: soporte para configurar opciones de campos seleccionables en reglas de vinculación"
description: "Nota de la versión v1.7.0-alpha.2"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - Componente de selección en cascada: añadir configuración de ámbito de datos ([#6386](https://github.com/nocobase/nocobase/pull/6386)) por @Cyx649312038

  - El bloque de tabla permite ocultar la columna de índice (visible por defecto) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) por @katherinehhh

  - Soporte para configurar opciones de campos seleccionables en reglas de vinculación ([#6338](https://github.com/nocobase/nocobase/pull/6338)) por @katherinehhh

  - Soporte para configurar el ámbito de fecha (mín/máx) para campos de tiempo en reglas de vinculación ([#6356](https://github.com/nocobase/nocobase/pull/6356)) por @katherinehhh

- **[acl]** Soporte para unión de roles de usuario ([#6301](https://github.com/nocobase/nocobase/pull/6301)) por @aaaaaajie

- **[Bloque: Panel de acciones]** Soporte para salto de línea en el título de las acciones en el panel de acciones ([#6433](https://github.com/nocobase/nocobase/pull/6433)) por @katherinehhh

- **[plugin-demo-platform]** Establecer skipAuthCheck de la ruta "/new" en true. por @sheldon66

- **[WeCom]** Permite establecer un tooltip personalizado para el botón de inicio de sesión por @2013xile

### 🚀 Mejoras

- **[utils]**
  - Mover `md5` a utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) por @mytharcher

  - Adaptación de página de escritorio para dispositivos móviles ([#6393](https://github.com/nocobase/nocobase/pull/6393)) por @zhangzhonghe

- **[cliente]** Añadir skipAuthCheck a router.add para evitar redirigir al inicio de sesión en páginas públicas. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) por @sheldon66

- **[Visualización de datos]** Reemplazar `x-designer` obsoleto por `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) por @2013xile

### 🐛 Corrección de Errores

- **[cliente]**
  - En el bloque de árbol, al desmarcar, los datos en el bloque de datos no se limpian ([#6460](https://github.com/nocobase/nocobase/pull/6460)) por @zhangzhonghe

  - Corregir que caracteres especiales en la URL de la imagen impedían su visualización ([#6459](https://github.com/nocobase/nocobase/pull/6459)) por @mytharcher

  - Número de página incorrecto al añadir datos después de cambiar el tamaño de página de la subtabla ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh

  - El contenido no se muestra completamente en navegadores móviles ([#6446](https://github.com/nocobase/nocobase/pull/6446)) por @zhangzhonghe

  - El estilo del logotipo es inconsistente con el anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe

  - La selección de rango del campo de fecha excluye la fecha máxima ([#6418](https://github.com/nocobase/nocobase/pull/6418)) por @katherinehhh

  - Al usar el operador '$anyOf', la regla de vinculación no es válida ([#6415](https://github.com/nocobase/nocobase/pull/6415)) por @zhangzhonghe

  - Cambio de valor en campo de selección múltiple y pérdida de opciones al eliminar registros de subtabla ([#6405](https://github.com/nocobase/nocobase/pull/6405)) por @katherinehhh

  - Datos no actualizados en ventanas emergentes abiertas mediante botones de enlace ([#6411](https://github.com/nocobase/nocobase/pull/6411)) por @zhangzhonghe

- **[acl]** Corregido el problema por el cual los campos de relación no se mostraban bajo la unión de roles. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) por @aaaaaajie

- **[Gestor de archivos]**
  - No se pueden eliminar archivos almacenados en S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) por @chenos

  - Corregir algunos problemas del gestor de archivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher

- **[Flujo de trabajo]** Eliminar botón de configuración de flujo de trabajo vinculado del selector de datos ([#6455](https://github.com/nocobase/nocobase/pull/6455)) por @mytharcher

- **[Flujo de trabajo: Nodo manual]**
  - Corregir error lanzado en la migración ([#6445](https://github.com/nocobase/nocobase/pull/6445)) por @mytharcher

  - Cambiar el límite de versión de la migración a `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) por @mytharcher

  - Corregir migración que omitía el prefijo de tabla y la lógica de esquema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) por @mytharcher

- **[Control de acceso]**
  - Corregido que el cambio de roles no surtía efecto. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) por @aaaaaajie

  - Error cuando el ámbito de datos se establece en datos propios y la tabla carece de un campo de creador. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) por @aaaaaajie

- **[Cliente WEB]** Reemplazar todas las instancias de ctx.state.currentRole (rol único) con ctx.state.currentRoles (soporta múltiples roles). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) por @aaaaaajie

- **[Acción: Edición por lotes]** Corregir que el flujo de trabajo no se puede activar en el envío de edición por lotes ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher

- **[Gestor de fuentes de datos]** Al cambiar la fuente de datos en la gestión de roles, no se cargan las colecciones correspondientes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh

- **[Visualización de datos]** Los campos eliminados aparecen al añadir campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile

- **[Notificación: Mensaje en la aplicación]**
  - Diferenciar el color de fondo de la lista de mensajes en la aplicación de las tarjetas de mensaje para mejorar la jerarquía visual y la legibilidad. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) por @sheldon66

  - Evitar que la configuración incorrecta de destinatarios consulte a todos los usuarios ([#6424](https://github.com/nocobase/nocobase/pull/6424)) por @sheldon66

- **[Acción: Solicitud personalizada]** Error de validación de permisos del lado del servidor en solicitud personalizada ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh

- **[Auth: Claves API]** Eliminación de unión en la lista de roles del plugin de claves API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) por @aaaaaajie

- **[Bloque: plantilla]** Comportamiento incorrecto de "Guardar como plantilla" en el cliente móvil ([#6420](https://github.com/nocobase/nocobase/pull/6420)) por @gchust

- **[Flujo de trabajo: Evento de acción personalizada]** Eliminar `only` en el caso de prueba E2E por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]** Resolver problema con URLs firmadas de S3 Pro inaccesibles por @chenos

- **[Flujo de trabajo: Aprobación]**
  - Evitar bloqueo de página cuando no hay solicitante en la tabla de proceso de aprobación por @mytharcher

  - Corregir que los datos de asociación no se muestran en el formulario de aprobación por @mytharcher

  - Corregir error lanzado al aprobar en una fuente de datos externa por @mytharcher
