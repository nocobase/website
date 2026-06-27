---
title: "NocoBase v1.9.27: Añadir tolerancia a fallos cuando la falta de instancias de aplicación causa errores al obtener mensajes de mantenimiento de la aplicación"
description: "Nota de la versión v1.9.27"
---

### 🚀 Mejoras

- **[server]** Añadir tolerancia a fallos cuando la falta de instancias de aplicación provoca errores al obtener mensajes de mantenimiento de la aplicación ([#8196](https://github.com/nocobase/nocobase/pull/8196)) por @2013xile

- **[Manejador de errores]** No exponer mensajes de error de base de datos sin procesar en errores de sintaxis SQL, para evitar revelar el tipo de base de datos ([#8195](https://github.com/nocobase/nocobase/pull/8195)) por @2013xile

- **[Workflow]** Permitir usar la configuración heredada para crear un nuevo flujo de trabajo duplicado ([#8165](https://github.com/nocobase/nocobase/pull/8165)) por @mytharcher

### 🐛 Corrección de errores

- **[Workflow]** Corregir el problema por el que solo se mostraba un registro en la lista de registros para ejecutar manualmente ([#8187](https://github.com/nocobase/nocobase/pull/8187)) por @mytharcher

- **[Colección: Conectar a datos externos (FDW)]** Corregir errores de activación al conectar con tablas que tienen nombres en mayúsculas por @2013xile

- **[Workflow: Aprobación]** Corregir el problema por el que el estado de registros de aprobación no relacionados se cambiaba incorrectamente a `UNPROCESSED` mediante la acción de aprobar por @mytharcher
