---
title: "NocoBase v1.7.0-beta.27: soporte de variables en el título y contenido de confirmación secundaria"
description: "Nota de la versión v1.7.0-beta.27"
---

### 🎉 Novedades

- **[cliente]** soporte para variables en el título y contenido de la confirmación secundaria ([#6787](https://github.com/nocobase/nocobase/pull/6787)) por @katherinehhh

- **[Impresión de plantillas]**
  - Soporte para renderizado dinámico de imágenes y códigos de barras en plantillas de documentos. por @sheldon66

  - Función: Soporte para opciones de selección `{ label, value }` en la impresión de plantillas. por @sheldon66

- **[Bloque: Árbol]** el bloque de filtro de árbol admite reglas de vinculación por @katherinehhh

- **[Visualización de datos: ECharts]** Añadida la opción "Invertir eje Y" para gráficos de barras por @2013xile

### 🚀 Mejoras

- **[cliente]** optimizar el estilo del botón de añadir en subtablas y alinear el paginador en la misma fila ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh

- **[Gestor de archivos]** Añadida opción de tiempo de espera para OSS con valor predeterminado de 10 minutos ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher

- **[Política de contraseñas]** Cambiar la caducidad predeterminada de la contraseña a que nunca caduque por @2013xile

### 🐛 Corrección de errores

- **[base de datos]**
  - Corregir casos de prueba ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher

  - Evitar error cuando el tipo de dato no es una cadena ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher

- **[cliente]**
  - cuando la selección de variables requiere carga asíncrona, se pierde el último menú seleccionado. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) por @gchust

  - Corregido el problema por el cual los subcampos de campos uno a muchos no se pueden seleccionar como opciones de filtrado en formularios de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe

  - problema al configurar reglas de vinculación en subformularios (ventana emergente) dentro de subtablas ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh

  - múltiples mensajes de error mostrados cuando se infringe una regla de validación en campos de formulario ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh

  - campo de asociación que no envía datos al mostrar un campo de la colección relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh

  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) por @katherinehhh

- **[Autenticación]** No permitir cambiar el nombre del autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile

- **[Acción: Solicitud personalizada]** la respuesta de solicitud personalizada establecida en variable no se muestra correctamente ([#6793](https://github.com/nocobase/nocobase/pull/6793)) por @katherinehhh
