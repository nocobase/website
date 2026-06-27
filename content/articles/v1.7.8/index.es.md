---
title: "NocoBase v1.7.8: Agregar la variable de entorno para controlar el método de salida del registro de auditoría"
description: "Nota de la versión v1.7.8"
---

### 🎉 Nuevas Funcionalidades

- **[Registros de auditoría]** Se añade la variable de entorno `AUDIT_LOGGER_TRANSPORT` para controlar el método de salida del registro de auditoría por @2013xile

### 🚀 Mejoras

- **[Calendario]** Soporte para configurar el día de inicio de la semana en el bloque de calendario ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh

- **[Campo de colección: Muchos a muchos (array)]** Errores relacionados con permisos al mostrar campos de muchos a muchos (array) en tablas de datos. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie

### 🐛 Corrección de Errores

- **[cliente]**
  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh

  - Las opciones del campo de selección no funcionan en las reglas de vinculación del formulario de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh

  - Las reglas de validación del formulario de filtro provocan que el botón de filtro deje de funcionar ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe

  - Se corrige la no visualización de campos en plantillas de bloque causada por solicitudes API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe

- **[Acción: Importar registros]** Se corrige el fallo en la importación de tablas secundarias cuando están involucrados campos relacionales ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie

- **[Visualización de datos]** Los campos de grupo de casillas de verificación en gráficos deben mostrar etiquetas en lugar de valores sin procesar ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile

- **[Flujo de trabajo]** Se corrige el error lanzado en la acción de ejecución manual cuando el disparador no está configurado correctamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Para evitar el error de campo indefinido por @mytharcher

  - Se corrige el error de API al actualizar la página de detalle por @mytharcher

- **[WeCom]** Se añade verificación de la ruta de callback en el middleware de puerta de enlace por @2013xile
