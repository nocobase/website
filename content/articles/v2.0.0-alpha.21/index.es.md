---
title: "NocoBase v2.0.0-alpha.21: Corrección de errores"
description: "Nota de la versión v2.0.0-alpha.21"
---

### 🚀 Mejoras

- **[cache]** Evitar la sobrecarga de rendimiento causada por la clonación de filtros Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) por @2013xile

- **[server]** Optimizar el método de carga de recursos l10n para evitar bloquear el bucle de eventos ([#7653](https://github.com/nocobase/nocobase/pull/7653)) por @2013xile

- **[Acción: Importar registros]** Mensajes de error mejorados cuando faltan encabezados de tabla ([#7656](https://github.com/nocobase/nocobase/pull/7656)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Evitar la ruptura de palabras en la etiqueta de formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) por @katherinehhh

- **[Visualización de datos]** Corregir problema de consulta SQL al analizar variables ([#7642](https://github.com/nocobase/nocobase/pull/7642)) por @heziqiang

- **[Workflow]** Corregir error del registrador al detener la aplicación ([#7639](https://github.com/nocobase/nocobase/pull/7639)) por @mytharcher
