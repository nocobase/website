---
title: "NocoBase v1.9.4: Optimizar la lógica de control de permisos para operaciones de campos de asociación"
description: "Nota de la versión v1.9.4"
---

### 🚀 Mejoras

- **[Control de acceso]** Optimizar la lógica de control de permisos para operaciones en campos de asociación ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile

- **[Flujo de trabajo: JavaScript]** Corregir una vulnerabilidad de seguridad causada por la transmisión de funciones de nivel superior al entorno de ejecución, evitando su explotación para obtener acceso al contexto de ejecución superior por @mytharcher

- **[Auth: OIDC]** Aumentar el tiempo de espera de la solicitud por @2013xile

### 🐛 Corrección de errores

- **[servidor]** Corregir un problema por el cual, tras activar el modo de división de servicios, los procesos worker que envían mensajes a través de la cola de mensajes provocaban errores ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher

- **[cliente]** Corregir el problema de página siguiente vacía en el bloque de detalle de paginación simple ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh

- **[Flujo de trabajo]**
  - Añadir `workflowId` como dato de identidad para los registros del flujo de trabajo ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher

  - Corregir el problema por el cual el plugin de flujo de trabajo seguía consumiendo el evento de la cola cuando no está en modo worker bajo el modo de división de servicios ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher

- **[Usuarios]** Actualización incorrecta del índice cuando los nombres de campo usan el estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile

- **[Flujo de trabajo: Variable personalizada]** Corregir el error lanzado cuando no hay configuración en el nodo de variable por @mytharcher
