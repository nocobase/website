---
title: "NocoBase v2.1.0-alpha.35: Agregar un nuevo empleado de IA, la ingeniera de localización Lina, para ayudar con tareas de traducción de localización"
description: "Nota de la versión v2.1.0-alpha.35"
---

### 🎉 Nuevas Funcionalidades

- **[indefinido]** Añadir un nuevo empleado de IA, Ingeniera de Localización Lina, para ayudar con tareas de traducción de localización ([#9434](https://github.com/nocobase/nocobase/pull/9434)) por @2013xile
Referencia: [Gestión de Localización](https://docs.nocobase.com/system-management/localization)<br>[Lina: Ingeniera de Localización](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Usar Lina y local HY-MT1.5-1.8B para traducir entradas de localización](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Calendario]** Se añadió soporte para cliente v2 en el plugin de Calendario. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) por @jiannx

- **[Bloque: Árbol]** Se añadió soporte para cliente-v2 en el bloque de filtro de árbol. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) por @jiannx

- **[Almacenamiento de archivos: S3(Pro)]** Soporte para subir archivos mediante almacenamiento S3 Pro en el gestor de archivos v2. por @Molunerfinn

### 🚀 Mejoras

- **[build]** Se añadió cobertura de regresión para evitar que `deleteServerFiles` elimine los artefactos de compilación de `client` y `client-v2` en rutas Windows y POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) por @Molunerfinn

- **[cliente]** Excluir registros ya asociados en el diálogo de selección de asociación del bloque de tabla uno-a-muchos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh

- **[Empleados de IA]** Optimización de interacción y rendimiento en conversaciones paralelas de empleados de IA ([#9462](https://github.com/nocobase/nocobase/pull/9462)) por @cgyrock

- **[Gestor de archivos]** Los plugins de almacenamiento de terceros ahora pueden registrar su propio formulario de tipo de almacenamiento en la página de configuración del gestor de archivos v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) por @Molunerfinn

- **[IA: Base de conocimiento]** El identificador único para una base de conocimiento es configurable en el momento de su creación por @cgyrock

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregir la prevención de apertura de edición rápida para campos de asociación en tabla ([#9469](https://github.com/nocobase/nocobase/pull/9469)) por @katherinehhh

  - Corregir que los campos de selección múltiple en bloques de datos v2 deben mostrar las etiquetas de las opciones en lugar de los valores ([#9472](https://github.com/nocobase/nocobase/pull/9472)) por @katherinehhh

  - Corregir solicitudes duplicadas a la tabla cuando los formularios de filtro tienen valores predeterminados ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe

  - Corregido el problema por el cual no se podían eliminar configuraciones de valores predeterminados heredadas. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust

  - Corregido el problema por el cual no se podían seleccionar opciones para el campo de selección de una asociación. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust

  - Corregir el problema por el cual la configuración del sistema aparece vacía después de enviar ([#9458](https://github.com/nocobase/nocobase/pull/9458)) por @zhangzhonghe

  - Corregido un problema por el cual el ámbito de datos del bloque objetivo se configuraba incorrectamente al deseleccionar datos de fila en un flujo de eventos de bloque de tabla. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust

  - corregir error al cambiar el campo de título de un campo de asociación en el bloque de tabla v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh

  - Corregidas las reglas de vinculación V2 para soportar el establecimiento de opciones seleccionables para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx

- **[cliente-v2]**
  - Mantener grupos vacíos después de filtrar menús v1 en el diseño v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) por @zhangzhonghe

  - Corregir el problema por el cual la página se vuelve blanca detrás del diálogo de habilitación de plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) por @zhangzhonghe

  - Corregir que las páginas de administración v1 fallen cuando hacen referencia a módulos de plugin v2 en compilaciones de producción. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) por @Molunerfinn

- **[cli-v1]** Corregidos fallos de inicio de desarrollo en aplicaciones creadas con create-nocobase-app causados por la resolución de la ruta del cliente app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) por @Molunerfinn

- **[servidor]** corregir(gestor-de-archivos): forzar descarga de archivos de contenido activo en almacenamiento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher

- **[Empleados de IA]**
  - Corregido error de carga de plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) por @cgyrock

  - Corregido que el vuelo de prueba de Ollama requiriera entrada de clave ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock

- **[Bloque: Formulario multipaso]** corregir problema de barra de desplazamiento al habilitar altura completa en bloque de formulario de pasos v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) por @katherinehhh

- **[Departamentos]** corregir conflicto de traducción entre los botones añadir usuario y añadir departamento en la configuración de Usuarios y Permisos ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh

- **[Flujo de trabajo]** corrección: restaurar texto de ayuda en diálogos de vinculación de flujo de trabajo FlowModel para eventos de acción personalizada y operación ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher

- **[Bloque: Markdown]** Corregir el problema del bloque Markdown v2 que reporta errores ([#9440](https://github.com/nocobase/nocobase/pull/9440)) por @zhangzhonghe

- **[Flujo de trabajo: Webhook]** Corregir el problema por el cual la creación de un nodo de respuesta era interceptada por la validación de la configuración de `statusCode` por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir el diseño del formulario de aprobación en dispositivos móviles por @zhangzhonghe

  - Corregir índice duplicado de registro de aprobación al delegar tareas de aprobación. por @mytharcher

- **[Gestor de copias de seguridad]** Corregido un problema por el cual las copias de seguridad fallaban con un error cuando no se podían encontrar archivos. por @gchust
