---
title: "NocoBase v2.0.0-alpha.52: agregar soporte para configuraciones de agregar/seleccionar/desasociar en subformularios de muchos a muchos"
description: "Nota de la versión v2.0.0-alpha.52"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Se añadió soporte para configuraciones de añadir/seleccionar/desvincular en subformularios de relación muchos-a-muchos ([#8099](https://github.com/nocobase/nocobase/pull/8099)) por @katherinehhh

- **[Fuente de datos: API REST]** Se añadió la opción `transformador de mensajes de error` en la configuración de la fuente de datos de API RESTful por @cgyrock

### 🚀 Mejoras

- **[auth]** Se corrigió [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile

- **[Acción: Importar registros]**
  - Se permite seleccionar el ID para los campos de importación ([#8133](https://github.com/nocobase/nocobase/pull/8133)) por @katherinehhh

  - Se permite seleccionar el ID para los campos de importación ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh

- **[Flujo de trabajo: Aprobación]** Se cambió la API para obtener un único elemento de aprobación y se simplificó el código por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió que el estado deshabilitado de un hijo no bloqueara la selección de campos de relación ([#8131](https://github.com/nocobase/nocobase/pull/8131)) por @katherinehhh

  - Se corrigió el problema por el cual el componente `RemoteSelect` cargaba incorrectamente un registro cuando el valor era nulo ([#8137](https://github.com/nocobase/nocobase/pull/8137)) por @mytharcher

  - Se corrigió un problema por el cual el ancho del componente de interfaz era inconsistente al seleccionar "Pasado" o "Siguiente" para campos de filtro de fecha. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) por @gchust

  - Se corrigió un problema por el cual las etiquetas de campo predeterminadas en el bloque de formulario de filtro no se traducían correctamente en varios idiomas. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) por @gchust

  - Se corrigió un problema por el cual los estilos de título y descripción del bloque JS eran inconsistentes con otros bloques. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) por @gchust

  - Se corrigió que la subtabla anidada en un subformulario no mostrara datos ([#8117](https://github.com/nocobase/nocobase/pull/8117)) por @katherinehhh

  - Se corrigió el problema de salto de línea en la información sobre herramientas de campos de texto largo ([#8122](https://github.com/nocobase/nocobase/pull/8122)) por @katherinehhh

  - Se corrigió un problema por el cual los datos seleccionables para campos de asociación en el bloque de formulario de filtro eran incorrectos. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) por @gchust

  - Se corrigió un problema por el cual las opciones seleccionables no se listaban completamente al usar los operadores "es cualquiera de" o "no es ninguno de" para el filtrado basado en campos de opción. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) por @gchust

  - Se corrigió un problema por el cual las configuraciones de campos personalizados en el formulario de filtro no se rellenaban previamente correctamente y algunas configuraciones no surtían efecto. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) por @gchust

  - Se corrigió un problema por el cual al limpiar los valores del filtro de tiempo entre y activar el filtro nuevamente se producía un error. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) por @gchust

  - Se corrigió un problema por el cual el valor del campo numérico no se rellenaba previamente correctamente en la acción de filtro. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) por @gchust

  - Se corrigió un problema por el cual algunos operadores de campo en formularios de filtro no filtraban los datos correctamente. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) por @gchust

  - Se corrigió un problema por el cual el filtrado en campos de Casilla de verificación no surtía efecto. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) por @gchust

- **[motor-de-flujo]**
  - corrección: conversión incorrecta al usar tipo entero como opciones de enumeración ([#8138](https://github.com/nocobase/nocobase/pull/8138)) por @chenos

  - Se corrigieron los elementos del menú de submodelo conmutables que fallaban cuando se omitía `useModel` infiriéndolo de `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) por @zhangzhonghe

- **[servidor]** Se corrigió un problema por el cual los flujos de trabajo activados no se añadían a la cola de procesamiento después de importar datos, asegurando que los flujos de trabajo se ejecuten según lo esperado inmediatamente después de la importación ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher

- **[Notificación: Correo electrónico]** Se corrigió la limitación de conexión de la notificación por correo electrónico ([#8119](https://github.com/nocobase/nocobase/pull/8119)) por @jiannx

- **[Campo de colección: Fórmula]** Se corrigió un problema por el cual los campos de fórmula en la acción de filtro y el bloque de formulario de filtro no permitían escribir valores de entrada. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) por @gchust

- **[Multi-espacio]** Se corrigió la creación de otros campos en la colección del sistema por @jiannx
