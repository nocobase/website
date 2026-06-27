---
title: "NocoBase v1.9.0-beta.14: Exponer la variable `approvalId` para su uso desde los desencadenantes de aprobación"
description: "Nota de la versión v1.9.0-beta.14"
---

### 🎉 Nuevas Funcionalidades

- **[Workflow: Aprobación]** Se expone la variable `approvalId` para su uso desde los desencadenadores de aprobación por @mytharcher

### 🚀 Mejoras

- **[servidor]** Optimizar el método de carga de recursos l10n para evitar bloquear el bucle de eventos ([#7653](https://github.com/nocobase/nocobase/pull/7653)) por @2013xile

- **[caché]** Evitar la sobrecarga de rendimiento causada por la clonación de filtros Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) por @2013xile

- **[Acción: Importar registros]** Mensajes de error mejorados cuando faltan encabezados de tabla ([#7656](https://github.com/nocobase/nocobase/pull/7656)) por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]** Evitar la ruptura de palabras en la etiqueta de formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) por @katherinehhh

- **[Workflow]** Corregir el error del registrador lanzado al detener la aplicación ([#7639](https://github.com/nocobase/nocobase/pull/7639)) por @mytharcher

- **[Workflow: Aprobación]**
  - Corregir el problema de tiempo de espera de transacción causado por transacciones que no se revierten correctamente cuando ocurren errores de base de datos después del envío de la aprobación por @mytharcher

  - Corregir el problema donde el recuento de tareas no se actualizaba después de agregar un asignado por @mytharcher

  - Corregir el problema donde las variables no se analizan en el formulario de envío de aprobación por @mytharcher

- **[Gestor de correo electrónico]** capturar error de sincronización por @jiannx
