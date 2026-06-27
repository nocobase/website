---
title: "NocoBase v2.1.0-beta.32: Agregar un nuevo empleado de IA, la ingeniera de localización Lina, para ayudar con tareas de traducción de localización"
description: "Nota de la versión v2.1.0-beta.32"
---

### 🎉 Nuevas Funcionalidades

- **[undefined]** Añadir un nuevo empleado de IA, Ingeniera de Localización Lina, para ayudar con tareas de traducción de localización ([#9434](https://github.com/nocobase/nocobase/pull/9434)) por @2013xile
Referencia: [Gestión de Localización](https://docs.nocobase.com/system-management/localization)<br>[Lina: Ingeniera de Localización](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Usar Lina y local HY-MT1.5-1.8B para traducir entradas de localización](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Almacenamiento de archivos: S3(Pro)]** Soporte para subir archivos mediante almacenamiento S3 Pro en el gestor de archivos v2. por @Molunerfinn

### 🚀 Mejoras

- **[build]** Se añadió cobertura de regresión para evitar que `deleteServerFiles` elimine los artefactos de compilación de `client` y `client-v2` en rutas Windows y POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) por @Molunerfinn

- **[cliente]** Excluir registros ya asociados en el diálogo de selección de asociación del bloque de tabla uno a muchos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh

- **[Gestor de archivos]** Los plugins de almacenamiento de terceros ahora pueden registrar su propio formulario de tipo de almacenamiento en la página de configuración del gestor de archivos v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) por @Molunerfinn

- **[IA: Base de conocimiento]** El identificador único de una base de conocimiento es configurable en el momento de su creación por @cgyrock

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió el problema por el cual no se podían seleccionar opciones para el campo de selección de una asociación. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust

  - Se corrigió el problema por el cual la configuración del sistema aparecía vacía después de enviar ([#9458](https://github.com/nocobase/nocobase/pull/9458)) por @zhangzhonghe

  - Se corrigieron las solicitudes duplicadas a la tabla cuando los formularios de filtro tienen valores predeterminados ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe

  - Se corrigió un problema donde el ámbito de datos del bloque de destino se establecía incorrectamente al deseleccionar datos de fila en un flujo de eventos de bloque de tabla. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust

  - Se corrigieron las reglas de vinculación V2 para soportar el establecimiento de opciones seleccionables para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx

  - Se corrigió un error al cambiar el campo de título de un campo de asociación en un bloque de tabla v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh

- **[cliente-v2]**
  - Se corrigió el problema por el cual la página se volvía blanca detrás del diálogo de activación del plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) por @zhangzhonghe

  - Se corrigió el bloqueo de las páginas de administración v1 cuando hacen referencia a módulos de plugin v2 en compilaciones de producción. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) por @Molunerfinn

- **[cli-v1]** Se corrigieron fallos de inicio en desarrollo en aplicaciones creadas con create-nocobase-app causados por la resolución de la ruta del cliente app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) por @Molunerfinn

- **[servidor]** fix(gestor-archivos): forzar la descarga de archivos de contenido activo en almacenamiento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher

- **[Departamentos]** Se corrigió el conflicto de traducción entre los botones de añadir usuario y añadir departamento en la configuración de Usuarios y Permisos ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh

- **[Bloque: Markdown]** Se corrigió el problema del bloque Markdown v2 que reportaba errores ([#9440](https://github.com/nocobase/nocobase/pull/9440)) por @zhangzhonghe

- **[Flujo de trabajo]** fix: restaurar el texto de ayuda en los diálogos de vinculación de flujo de trabajo FlowModel para eventos de operación y acción personalizada ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher

- **[Empleados de IA]** Se corrigió que el vuelo de prueba de Ollama requiriera la entrada de clave ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock

- **[Flujo de trabajo: Aprobación]**
  - Se corrigió el índice duplicado de registros de aprobación al delegar tareas de aprobación. por @mytharcher

  - Se corrigió el diseño del formulario de aprobación en dispositivos móviles por @zhangzhonghe

- **[Gestor de copias de seguridad]** Se corrigió un problema por el cual las copias de seguridad fallaban con un error cuando no se podían encontrar archivos. por @gchust
