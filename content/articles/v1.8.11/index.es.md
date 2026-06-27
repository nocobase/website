---
title: "NocoBase v1.8.11: Soporte para previsualizar archivos de Office mediante la vista previa en vivo de Microsoft"
description: "Nota de la versión v1.8.11"
---

### 🎉 Nuevas Funcionalidades

- **[Visor de Archivos Office]** Soporte para previsualizar archivos Office mediante la vista previa en vivo de Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher

### 🚀 Mejoras

- **[cliente]** No cerrar automáticamente el menú después de la selección ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612

- **[Notificación: Mensaje en la aplicación]** Cambiar mensaje en la aplicación de SSE a WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher

- **[Flujo de trabajo]** Reducir la cantidad de trabajos a cargar al preparar la ejecución ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher

- **[Autenticación: DingTalk]** En el cliente de DingTalk, establecer el título de la barra de navegación como una cadena vacía en lugar de mostrar "Cargando…" por @2013xile

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregir problema por el que la tabla de árbol no se podía expandir ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe

  - Corregir comportamiento inesperado en la ordenación por arrastrar y soltar de filas de tabla ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu

  - Corregir problema de bucle infinito al analizar valores predeterminados de campos ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe

  - Corregir problema de visualización anómala de campos de fecha en el popup al configurar el selector de datos para campos de relación en el formulario de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh

- **[Flujo de trabajo: Nodo de solicitud HTTP]** Corregir problema de condición de carrera ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher

- **[Flujo de trabajo]** Corregir problema de ID BigInt en MySQL al guardar trabajos ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher

- **[Acción: Exportar registros]** Corregido el formato incorrecto de campos relacionales anidados al exportar a Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie

- **[Fuente de datos: SQL Server externo]** Corregir formato de almacenamiento inconsistente para campos datetime (sin zona horaria) de MSSQL provenientes de fuentes de datos externas por @aaaaaajie

- **[Flujo de trabajo: Aprobación]** Corregir error lanzado desde la selección de asignados dentro de una fuente de datos externa por @mytharcher
