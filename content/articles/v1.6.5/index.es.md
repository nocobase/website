---
title: "NocoBase v1.6.5: Simplifica la lógica de generación de URL de archivos y la API"
description: "Nota de la versión v1.6.5"
---

### 🚀 Mejoras

- **[Gestor de archivos]** Simplificación de la lógica de generación de URL de archivos y la API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]** Cambio a una forma sencilla de generar la URL del archivo por @mytharcher

- **[Gestor de copias de seguridad]** Permitir restaurar copias de seguridad entre versiones previas al lanzamiento y la versión final de la misma versión por @gchust

### 🐛 Corrección de errores

- **[cliente]**
  - El campo de texto enriquecido no borra los datos al enviar ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh

  - El color de los iconos en la esquina superior derecha de la página no cambia con el tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe

  - Al hacer clic en el botón de restablecer del formulario de filtro no se pueden borrar las condiciones de filtrado del bloque de tarjetas de cuadrícula ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe

- **[Flujo de trabajo: Nodo manual]**
  - Corregir migración ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher

  - Cambiar el nombre de la migración para asegurar la re-ejecución ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher

  - Corregir el campo de título del flujo de trabajo en el filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher

  - Corregir error de migración cuando la columna id no existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos

  - Evitar que la colección se sincronice desde los campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher

- **[Flujo de trabajo: Nodo de agregación]** Corregir redondeo en resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher

- **[Flujo de trabajo]** No contar tareas cuando el flujo de trabajo está eliminado ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher

- **[Gestor de copias de seguridad]** No es posible iniciar el servidor cuando faltan las configuraciones de copia de seguridad predeterminadas por @gchust

- **[Flujo de trabajo: Aprobación]**
  - Corregir error del campo de asociación de archivos en el formulario de proceso por @mytharcher

  - Corregir el recuento de tareas basado en hooks por @mytharcher
