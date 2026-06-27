---
title: "NocoBase v2.1.0-alpha.22: Añadir API para verificar la creación de nodos"
description: "Nota de la versión v2.1.0-alpha.22"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo]** Añadir API para verificar la creación de nodos ([#9207](https://github.com/nocobase/nocobase/pull/9207)) por @mytharcher

### 🚀 Mejoras

- **[cli]** Se añadió el seguimiento del origen de las solicitudes CLI en los registros de solicitudes y registros de auditoría ([#9223](https://github.com/nocobase/nocobase/pull/9223)) por @2013xile

- **[Control de acceso]** añadir algunas nuevas APIs para la habilidad acl ([#9198](https://github.com/nocobase/nocobase/pull/9198)) por @Andrew1989Y

- **[Flujo de trabajo: Aprobación]**
  - Añadir validación para la creación de nodos de aprobación por @mytharcher

  - Añadir índices en las columnas de registros de aprobación para mejorar el rendimiento en las acciones de listado y envío por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]** interruptor de orden oculto en campos de relación ([#9220](https://github.com/nocobase/nocobase/pull/9220)) por @jiannx

- **[base de datos]** Se corrigió un problema por el cual los campos decimales con validación podían rechazar entradas numéricas válidas ([#9204](https://github.com/nocobase/nocobase/pull/9204)) por @2013xile

- **[Empleados IA]** Corregir el problema de valores faltantes del campo URL para archivos adjuntos en selecciones de formularios de empleados IA. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) por @cgyrock

- **[Usuarios]** Se corrigió que los campos configurados dinámicamente en Editar perfil no cargaran los datos de usuario más recientes ([#9205](https://github.com/nocobase/nocobase/pull/9205)) por @2013xile

- **[Gestor de fuentes de datos]** Se corrigió un problema por el cual la ordenación agrupada en campos de ordenación de fuentes de datos externas no podía borrarse ([#9203](https://github.com/nocobase/nocobase/pull/9203)) por @2013xile
