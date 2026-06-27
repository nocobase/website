---
title: "NocoBase v2.1.0-beta.33: Se agregó soporte de cliente v2 para bloques Markdown"
description: "Nota de la versión v2.1.0-beta.33"
---

### 🎉 Nuevas Funcionalidades

- **[Bloque: Markdown]** Se añadió soporte para cliente v2 en bloques Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) por @jiannx

- **[Bloque: Lista]** Los bloques de lista ahora son compatibles con cliente-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) por @jiannx

- **[Calendario]** Se añadió soporte para cliente v2 en el plugin de Calendario. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) por @jiannx

- **[Bloque: Árbol]** Se añadió soporte para cliente-v2 en el bloque de filtro de árbol. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) por @jiannx

### 🚀 Mejoras

- **[motor-de-flujo]** Se añadió un mensaje de confirmación de cambios no guardados al cerrar la página de configuración del flujo de eventos con datos sin guardar. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) por @gchust

- **[Gestor de fuentes de datos]** Se optimizó la API de modelado de datos para admitir la creación de colecciones de comentarios con IA, la configuración de campos de relación para fuentes de datos externas y el establecimiento de reglas de validación de campos ([#9480](https://github.com/nocobase/nocobase/pull/9480)) por @2013xile

- **[Bloque: GridCard]** Se actualizó el plugin de tarjeta de cuadrícula para ser compatible con cliente v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) por @jiannx

- **[Bloque: iframe]** Se añadió soporte v2 para el bloque iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) por @jiannx

- **[Empleados IA]** Interacción de conversación paralela y optimización del rendimiento de los empleados IA ([#9462](https://github.com/nocobase/nocobase/pull/9462)) por @cgyrock

### 🐛 Corrección de Errores

- **[cliente]**
  - Se añadió la configuración "Después del envío exitoso" para las acciones de envío de formularios. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) por @jiannx

  - Se corrigió la apertura de la edición rápida para campos de relación en tablas ([#9469](https://github.com/nocobase/nocobase/pull/9469)) por @katherinehhh

  - Se corrigió que los campos de relación de solo lectura en subtablas no se mostraran o no se pudieran hacer clic después de actualizar. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) por @jiannx

  - Se corrigió el problema por el cual no se podían eliminar las configuraciones de valores predeterminados heredadas. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust

  - Se corrigió que los campos de selección múltiple en bloques de datos v2 mostraran las etiquetas de las opciones en lugar de los valores ([#9472](https://github.com/nocobase/nocobase/pull/9472)) por @katherinehhh

- **[cliente-v2]**
  - Se corrigió el problema por el cual la lista de opciones del campo de título estaba vacía para los campos de relación en bloques de tabla ([#9490](https://github.com/nocobase/nocobase/pull/9490)) por @katherinehhh

  - Se mantienen los grupos vacíos después de filtrar los menús v1 en el diseño v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) por @zhangzhonghe

- **[motor-de-flujo]** Se corrigieron los submenús de campos de relación inestables en los menús de submodelos ([#9417](https://github.com/nocobase/nocobase/pull/9417)) por @jiannx

- **[Gestor de archivos]** Se corrigió que las subidas `tx-cos` del gestor de archivos perdieran los metadatos del tamaño del archivo. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher

- **[Empleados IA]** Se corrigió el error de carga del plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) por @cgyrock

- **[Bloque: Formulario multipaso]** Se corrigió el problema de la barra de desplazamiento al activar la altura completa en el bloque de formulario de pasos v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) por @katherinehhh

- **[Flujo de trabajo: Webhook]** Se corrigió el problema por el cual la creación de un nodo de respuesta era interceptada por la validación de la configuración de `statusCode` por @mytharcher

- **[Campo de colección: Firma]** Se resolvió el problema de visualización del cuadro de firma en dispositivos móviles por @chenzhizdt
