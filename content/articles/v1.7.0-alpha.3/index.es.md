---
title: "NocoBase v1.7.0-alpha.3: Compatibilidad con acciones de tabla en línea en modo solo icono"
description: "Nota de la versión v1.7.0-alpha.3"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para acciones en tabla en línea con modo solo icono, mostrar nombre de la acción al pasar el ratón ([#6451](https://github.com/nocobase/nocobase/pull/6451)) por @katherinehhh

### 🚀 Mejoras

- **[Gestor de archivos]** Simplificar la lógica de generación de URL de archivos y la API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]**
  - Cambiar el texto 'Access URL Base' a 'Base URL' por @zhangzhonghe

  - Cambiar a una forma simple de generar URL de archivos por @mytharcher

- **[Gestor de copias de seguridad]** Permitir restaurar copias de seguridad entre versiones previas al lanzamiento y versiones de lanzamiento de la misma versión por @gchust

### 🐛 Corrección de Errores

- **[cliente]**
  - Campos faltantes en la configuración de reglas de vinculación ([#6488](https://github.com/nocobase/nocobase/pull/6488)) por @katherinehhh

  - El color de los iconos en la esquina superior derecha de la página no cambia con el tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe

  - El campo de texto enriquecido no limpia los datos al enviar ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh

  - El estilo de entrada no es correcto para la configuración del valor predeterminado del formulario ([#6490](https://github.com/nocobase/nocobase/pull/6490)) por @gchust

  - Al hacer clic en el botón de restablecer en el formulario de filtro no se pueden limpiar las condiciones de filtrado del bloque de tarjetas de cuadrícula ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe

- **[Flujo de trabajo: Nodo manual]**
  - Cambiar el nombre de la migración para asegurar la reejecución ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher

  - Corregir migración ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher

  - Corregir el campo de título del flujo de trabajo en el filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher

  - Corregir error de migración cuando la columna id no existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos

  - Evitar que la colección se sincronice desde campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher

- **[Flujo de trabajo]** No contar tareas cuando el flujo de trabajo se elimina ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher

- **[Variables y secretos]** Los botones no se muestran en el panel de creación de nuevas variables ([#6485](https://github.com/nocobase/nocobase/pull/6485)) por @gchust

- **[Flujo de trabajo: Nodo de agregación]** Corregir redondeo en resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher

- **[Incrustar NocoBase]** La página se muestra en blanco por @zhangzhonghe

- **[Gestor de copias de seguridad]** No se puede iniciar el servidor cuando faltan configuraciones de copia de seguridad predeterminadas por @gchust

- **[Flujo de trabajo: Aprobación]**
  - Corregir error del campo de asociación de archivos en el formulario de proceso por @mytharcher

  - Corregir el conteo de tareas basado en hooks por @mytharcher
