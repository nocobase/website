---
title: "NocoBase v1.8.0-beta.11: Soporte para solicitudes `multipart/form-data`"
description: "Nota de la versión v1.8.0-beta.11"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: nodo de solicitud HTTP]** Soporte para solicitudes `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) por @shushu992

### 🚀 Mejoras

- **[Flujo de trabajo]**
  - Optimización del estilo móvil ([#7040](https://github.com/nocobase/nocobase/pull/7040)) por @mytharcher

  - Ajuste de la API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) por @mytharcher

- **[Formularios públicos]** Optimización del rendimiento de los componentes de fecha en formularios públicos ([#7117](https://github.com/nocobase/nocobase/pull/7117)) por @zhangzhonghe

- **[Flujo de trabajo: evento previo a la acción]** Ajuste de la API de variables por @mytharcher

- **[Flujo de trabajo: Aprobación]** Ajuste de la API de variables por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Limitación de rango incorrecta en campos de fecha con hora ([#7107](https://github.com/nocobase/nocobase/pull/7107)) por @katherinehhh

  - Cuando las variables de parámetros de consulta URL están vacías, las condiciones del ámbito de datos no se eliminan ([#7104](https://github.com/nocobase/nocobase/pull/7104)) por @zhangzhonghe

- **[Flujo de trabajo]**
  - Corrección de parámetros al cargar registros en tareas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) por @mytharcher

  - Corrección de verificación ejecutada incorrectamente en números enteros grandes ([#7099](https://github.com/nocobase/nocobase/pull/7099)) por @mytharcher

  - Corrección de estadísticas eliminadas en cascada por una versión de flujo de trabajo no actual ([#7103](https://github.com/nocobase/nocobase/pull/7103)) por @mytharcher

- **[Móvil]** Corrección del problema de z-index en ventanas emergentes móviles ([#7110](https://github.com/nocobase/nocobase/pull/7110)) por @zhangzhonghe

- **[Cliente WEB]** Corrección del problema donde los bloques bajo páginas no se mostraban después de configurar permisos de menú de roles ([#7112](https://github.com/nocobase/nocobase/pull/7112)) por @aaaaaajie

- **[Calendario]** Problema del campo de fecha en el formulario de creación rápida del bloque de calendario ([#7106](https://github.com/nocobase/nocobase/pull/7106)) por @katherinehhh

- **[Acción: Importar registros]** Resolución del problema de fallo de inicio de sesión después de la importación masiva de nombres de usuario y contraseñas ([#7076](https://github.com/nocobase/nocobase/pull/7076)) por @aaaaaajie

- **[Flujo de trabajo: Aprobación]**
  - Corrección del error lanzado al eliminar una colección relacionada con la aprobación por @mytharcher

  - Corrección de estilos móviles por @mytharcher

  - Corrección del nombre de la variable del solicitante en el disparador por @mytharcher

  - Solo los participantes pueden ver (obtener) el detalle de la aprobación por @mytharcher

  - Corrección de la API de variables heredadas que lanza un error por @mytharcher
