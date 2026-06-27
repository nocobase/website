---
title: "NocoBase v2.1.0-beta.40: Soporte para asignación de valores de campo en acciones de envío de formularios"
description: "Nota de la versión v2.1.0-beta.40"
---

### 🎉 Nuevas Funcionalidades

- **[client-v2]** Soporte para asignación de valores de campo en acciones de envío de formularios ([#9570](https://github.com/nocobase/nocobase/pull/9570)) por @katherinehhh
- **[Visor de archivos de Office]** Migrar el plugin de vista previa de archivos de Office al cliente v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) por @Molunerfinn

### 🚀 Mejoras

- **[Gestor de notificaciones]** Migrar los plugins relacionados con notificaciones a v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) por @Molunerfinn

### 🐛 Corrección de errores

- **[cliente]** Corregir el ancho de la insignia en la barra de navegación superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
- **[Bloque: Gantt]** Corregida la ruta de la carpeta compartida del diagrama de Gantt v2 y añadido el rayado de cebra. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) por @jiannx
- **[Configuración de licencia]** Añadido soporte client-v2 para la configuración de licencias y la inyección de licencias comerciales. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) por @jiannx
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir opciones duplicadas de Trigger workflow en los menús de acción de bloques v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) por @zhangzhonghe
- **[Empleados de IA]** Corregido que los botones de acceso directo de IA obtenían un contexto de bloque vacío después de eliminar bloques de tabla referenciados. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
- **[plugin-commercial]** Añadidos componentes de licencia comercial client-v2 y entrada de estado de licencia en la barra superior. por @jiannx
- **[Gestor de migración]** Corregir las diferencias de migración en PostgreSQL para que las columnas hijas heredadas no se eliminen cuando una columna local se vuelve heredada. por @hongboji
