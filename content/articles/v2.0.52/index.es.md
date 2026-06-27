---
title: "NocoBase v2.0.52: agregar variable de idioma del usuario actual en v2"
description: "Nota de la versión v2.0.52"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - Añadir variable de idioma del usuario actual en v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) por @katherinehhh

  - Añadir opción de límite de rango de fechas para campos de fecha en formularios v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) por @katherinehhh

### 🚀 Mejoras

- **[cliente]** excluir registros ya asociados en el diálogo de selección de asociación del bloque de tabla uno a muchos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh

- **[Departamentos]** optimizar el estilo de la lista de departamentos añadiendo iconos y ajustando el espaciado ([#9435](https://github.com/nocobase/nocobase/pull/9435)) por @katherinehhh

- **[IA: Base de conocimiento]** El identificador único de una base de conocimiento es configurable en el momento de su creación por @cgyrock

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregido el problema por el que no se podían eliminar las configuraciones de valores por defecto heredadas. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust

  - Corregido el problema por el que no se podían seleccionar opciones para el campo de selección de una asociación. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust

  - Corregido un problema por el que el ámbito de datos del bloque destino se configuraba incorrectamente al deseleccionar datos de fila en un flujo de eventos de bloque de tabla. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust

  - Corregir solicitudes duplicadas de tabla cuando los formularios de filtro tienen valores por defecto ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe

  - Corregidas las reglas de vinculación V2 para permitir establecer opciones seleccionables para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx

  - corregir error al cambiar el campo de título de un campo de asociación en el bloque de tabla v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh

  - Corregido un problema intermitente por el que las reglas de vinculación de botones de acción no surtían efecto. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) por @gchust

  - ocultar el componente de subtabla para campos de asociación de varios en subtabla v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) por @katherinehhh

- **[servidor]** corregir(gestor-de-archivos): forzar la descarga de archivos de contenido activo en almacenamiento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher

- **[Empleados IA]** Corregido el vuelo de prueba de Ollama que requería introducir clave ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock

- **[Gestor de colecciones gráfico]** corregir error de filtro de acción de actualización en el diseño automático de la interfaz gráfica ([#9421](https://github.com/nocobase/nocobase/pull/9421)) por @katherinehhh

- **[Flujo de trabajo]** corrección: restaurar texto de ayuda en los diálogos de vinculación de flujo de trabajo FlowModel para eventos de acción de operación y personalizada ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher

- **[Departamentos]** corregir conflicto de traducción entre los botones de añadir usuario y añadir departamento en la configuración de Usuarios y Permisos ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh

- **[Campo de colección: Markdown(Vditor)]** corregir que la información sobre herramientas del campo markdown estuviera oculta en el diseño de formulario horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) por @katherinehhh

- **[Cliente WEB]** Corregir el filtrado por tipo de ruta al usar etiquetas traducidas ([#9425](https://github.com/nocobase/nocobase/pull/9425)) por @zhangzhonghe

- **[Flujo de trabajo: Aprobación]**
  - Corregir el problema por el que aparecía el campo JS en la configuración del proceso de aprobación por @zhangzhonghe

  - Corregir el diseño del formulario de aprobación en dispositivos móviles por @zhangzhonghe

  - Corregir el índice duplicado de registros de aprobación al delegar tareas de aprobación. por @mytharcher

- **[Gestor de copias de seguridad]** Corregido un problema por el que las copias de seguridad fallaban con un error cuando no se podían encontrar archivos. por @gchust
