---
title: "NocoBase v1.7.0-beta.5: Soporte para acciones de tabla en línea con modo solo icono"
description: "Nota de la versión v1.7.0-beta.5"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para acciones en tabla en línea con modo solo icono, mostrar nombre de la acción al pasar el ratón ([#6451](https://github.com/nocobase/nocobase/pull/6451)) por @katherinehhh

### 🚀 Mejoras

- **[Gestor de archivos]** Simplificar la lógica de generación de URL de archivos y la API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]**
  - Cambiar el texto 'Access URL Base' a 'Base URL' por @zhangzhonghe

  - Cambiar a una forma sencilla de generar URL de archivos por @mytharcher

- **[Gestor de copias de seguridad]** Permitir restaurar copias de seguridad entre versiones previas al lanzamiento y la versión final de la misma versión por @gchust

### 🐛 Corrección de Errores

- **[cliente]**
  - El color de los iconos en la esquina superior derecha de la página no cambia con el tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe

  - El campo de texto enriquecido no borra los datos al enviar ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh

  - Al hacer clic en el botón de restablecer en el formulario de filtro no se pueden borrar las condiciones de filtrado del bloque de tarjetas en cuadrícula ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe

- **[Flujo de trabajo: Nodo manual]**
  - Corregir migración ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher

  - Cambiar nombre de migración para asegurar reejecución ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher

  - Corregir campo de título del flujo de trabajo en el filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher

  - Evitar que la colección se sincronice desde campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher

  - Corregir error de migración cuando la columna id no existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos

- **[Flujo de trabajo]** No contar tareas cuando el flujo de trabajo se elimina ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher

- **[Flujo de trabajo: Nodo de agregación]** Corregir redondeo en resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher

- **[Incrustar NocoBase]** La página se muestra en blanco por @zhangzhonghe

- **[Gestor de copias de seguridad]** No se puede iniciar el servidor cuando faltan los ajustes de copia de seguridad predeterminados por @gchust

- **[Flujo de trabajo: Aprobación]**
  - Corregir error del campo de asociación de archivos en el formulario de proceso por @mytharcher

  - Corregir el conteo de tareas basado en hooks por @mytharcher
