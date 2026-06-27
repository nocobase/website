---
title: "NocoBase v2.0.0-alpha.54: Al crear una colección, se puede cambiar el tipo de campo de identificación preestablecido"
description: "Nota de la versión v2.0.0-alpha.54"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Al crear una colección, se puede cambiar el tipo de campo de id predefinido ([#8129](https://github.com/nocobase/nocobase/pull/8129)) por @cgyrock

### 🚀 Mejoras

- **[cliente]**
  - Cambiar el ancho de columna de tabla para usar opciones seleccionables ([#8188](https://github.com/nocobase/nocobase/pull/8188)) por @katherinehhh

  - Mejorar los estilos de recordPicker con maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) por @katherinehhh

  - Optimizar las opciones de configuración (Bloques, Campos, Acciones) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) por @katherinehhh

- **[Manejador de errores]** No exponer mensajes de error de base de datos sin procesar en errores de sintaxis SQL, para evitar revelar el tipo de base de datos ([#8195](https://github.com/nocobase/nocobase/pull/8195)) por @2013xile

- **[Bloque: Mapa]** Soporte para puntos suspensivos en desbordamiento de texto para el campo de mapa en modo de visualización de texto ([#8189](https://github.com/nocobase/nocobase/pull/8189)) por @katherinehhh

- **[Flujo de trabajo]** Soporte para usar la configuración heredada al crear un nuevo flujo de trabajo duplicado ([#8165](https://github.com/nocobase/nocobase/pull/8165)) por @mytharcher

- **[Control de acceso]** No permitir asignar el rol root a usuarios ([#8180](https://github.com/nocobase/nocobase/pull/8180)) por @2013xile

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregir que el botón de enviar no se muestra en el formulario de creación cuando el rol tiene permiso de creación ([#8190](https://github.com/nocobase/nocobase/pull/8190)) por @katherinehhh

  - Evitar que los datos existentes de subtabla/subformulario se borren al enviar sin seleccionar ningún elemento ([#8172](https://github.com/nocobase/nocobase/pull/8172)) por @katherinehhh

  - Evitar que la configuración del ámbito de datos aparezca en la configuración del formulario de creación ([#8176](https://github.com/nocobase/nocobase/pull/8176)) por @katherinehhh

  - Error al guardar el flujo de eventos de la pestaña ([#8168](https://github.com/nocobase/nocobase/pull/8168)) por @chenos

  - Eliminar el espacio adicional después de ocultar una pestaña ([#8167](https://github.com/nocobase/nocobase/pull/8167)) por @chenos

  - Corregir el filtrado incorrecto de opciones seleccionadas en el selector de registros de asociación ([#8151](https://github.com/nocobase/nocobase/pull/8151)) por @katherinehhh

  - Corregir el problema de renderizado del campo tableoid en el bloque de formulario ([#8177](https://github.com/nocobase/nocobase/pull/8177)) por @katherinehhh

- **[servidor]**
  - Actualizar license-kit a la última versión ([#8173](https://github.com/nocobase/nocobase/pull/8173)) por @jiannx

  - Soporte para campos de ID Snowflake (53 bits) para fuentes de datos externas ([#8185](https://github.com/nocobase/nocobase/pull/8185)) por @2013xile

- **[Bloque: Mapa]** Corregir el nivel de zoom incorrecto del mapa después de cambiar de menú ([#8193](https://github.com/nocobase/nocobase/pull/8193)) por @katherinehhh

- **[Flujo de trabajo]** Corregir el problema donde solo se mostraba un registro en la lista de registros para ejecutar manualmente ([#8187](https://github.com/nocobase/nocobase/pull/8187)) por @mytharcher

- **[Visualización de datos]** Resolver problema sobre el modo SQL al seleccionar fuente de datos externa; <br/>Resolver problema sobre el estado de carga del bloque de gráfico durante la obtención de datos; <br/>Resolver problema sobre la cancelación de configuración del bloque de gráfico vacío; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) por @heziqiang

- **[Empleados IA]** Resolver problema sobre el salto de línea en mensajes de IA ([#8096](https://github.com/nocobase/nocobase/pull/8096)) por @heziqiang

- **[Configuración de licencia]**
  - Corregir excepción de compilación ts en plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) por @jiannx

  - Optimización de licencia y adición de información de aviso ([#7993](https://github.com/nocobase/nocobase/pull/7993)) por @jiannx

- **[Gestor de archivos]** Corregir el problema donde la vista previa de archivos `.txt` en OSS obtenía una codificación incorrecta ([#8161](https://github.com/nocobase/nocobase/pull/8161)) por @mytharcher

- **[Fuente de datos: SQL Server externo]** Corregir problemas donde las opciones `encrypt` y `trustServerCertificate` no están disponibles por @2013xile

- **[Colección: Conectar a datos externos (FDW)]** Corregir problema donde la carga falla para tablas con nombres en mayúsculas por @2013xile

- **[Flujo de trabajo: Aprobación]** Corregir el problema donde el estado de registros de aprobación no relacionados se cambia incorrectamente a `UNPROCESSED` por la acción de aprobar por @mytharcher
