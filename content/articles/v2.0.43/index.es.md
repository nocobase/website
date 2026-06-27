---
title: "NocoBase v2.0.43: Mejora del rendimiento de la lista de ejecución"
description: "Nota de la versión v2.0.43"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Mejora del rendimiento de la lista de ejecuciones ([#9214](https://github.com/nocobase/nocobase/pull/9214)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Se añadieron índices en las columnas de registros de aprobación para mejorar el rendimiento en las acciones de lista y envío por @mytharcher

### 🐛 Corrección de errores

- **[base de datos]** Se corrigió un problema por el cual los campos decimales con validación podían rechazar entradas numéricas válidas ([#9204](https://github.com/nocobase/nocobase/pull/9204)) por @2013xile

- **[Usuarios]** Se corrigió que los campos configurados dinámicamente en Editar perfil no cargaran los datos de usuario más recientes ([#9205](https://github.com/nocobase/nocobase/pull/9205)) por @2013xile

- **[Empleados de IA]** Se corrigió el problema de valores faltantes en el campo URL de los archivos adjuntos en las selecciones de formularios de empleados de IA. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) por @cgyrock

- **[Administrador de fuentes de datos]** Se corrigió un problema por el cual la ordenación agrupada en campos de ordenación de fuentes de datos externas no se podía eliminar ([#9203](https://github.com/nocobase/nocobase/pull/9203)) por @2013xile
