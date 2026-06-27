---
title: "NocoBase v2.0.0-alpha.47: Soporte para inicializar campos de filtro seleccionados en consultas de gráficos"
description: "Nota de la versión v2.0.0-alpha.47"
---

### 🚀 Mejoras

- **[cliente]**
  - Se ha añadido soporte para inicializar campos de filtro seleccionados en la consulta de gráficos ([#7933](https://github.com/nocobase/nocobase/pull/7933)) por @heziqiang

  - Se usan llaves triples (`{{{` y `}}}`) para las variables en el contenido de los mensajes, para evitar que Handlebars escape las variables ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher

  - Se ha añadido un estado de carga para los botones de acción de actualizar registro y destruir registro, evitando solicitudes duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher

- **[Campo de colección: Markdown(Vditor)]** se ajusta el ancho del contenido a pantalla completa de vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió un problema por el cual abrir el bloque de detalle en la ventana emergente para campos de relación sin ID provocaba un error. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) por @gchust

  - Se corrigió un problema por el cual los datos de asociación no se cargaban correctamente en la ventana emergente para campos de relación sin ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) por @gchust

  - Se corrigen problemas de enrutamiento al usar un Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) por @zhangzhonghe

  - Se corrige el problema con la configuración de precisión no válida para el formato de campo numérico ([#7967](https://github.com/nocobase/nocobase/pull/7967)) por @katherinehhh

  - Se corrige el error tipográfico en la nueva página 2.0 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) por @zhangzhonghe

  - Se corrige el problema por el cual el valor del filtro no se limpiaba al hacer clic en el botón Restablecer ([#7966](https://github.com/nocobase/nocobase/pull/7966)) por @zhangzhonghe

- **[Flujo de trabajo]** Se corrige el problema de que el recuento de tareas no se mostraba debido al uso incorrecto del proveedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher

- **[Visualización de datos]** Se resuelve el problema por el cual la consulta de gráficos no admitía el ámbito de datos de ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile

- **[Bloque: Referencia]** Se corrigió un problema por el cual al citar un bloque se eliminaba el bloque citado de la página original. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) por @gchust

- **[Empleados IA]** Se corrige el problema al generar la salida SQL de la IA ([#7956](https://github.com/nocobase/nocobase/pull/7956)) por @heziqiang

- **[Impresión de plantilla]** se corrige el error al añadir una plantilla en la operación de impresión de plantilla de registro por @katherinehhh
