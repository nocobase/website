---
title: "NocoBase v2.1.0-beta.10: Limpieza programada de datos de puntos de control de conversaciones de IA"
description: "Nota de la versión v2.1.0-beta.10"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]**
  - Permite añadir empleados IA en la ventana emergente de subtablas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile

  - Limpieza programada de los datos de puntos de control de conversaciones de IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock

- **[Supervisor de aplicaciones]** Soporte para filtrar en la lista de aplicaciones<br />Añadidos diálogos de confirmación para las acciones de iniciar y detener<br />Ordenar las entradas de estado de la aplicación por nombre de entorno por @2013xile

### 🚀 Mejoras

- **[servidor]** mejorar la lógica de `pm add` ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos

- **[sin definir]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) por @gaston98765

- **[cliente]** Soporte para mostrar un mensaje de confirmación antes de cerrar una ventana emergente. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust

- **[Workflow]** Corregido el problema por el cual el apagado ordenado no drenaba todos los eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher

- **[Gestor de tareas asíncronas]** Las tareas asíncronas ahora admiten workers para enviar mensajes de error ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregido el problema por el cual la ventana emergente "Seleccionar registro" en la subtabla no se cargaba correctamente al abrirse por segunda vez. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust

  - Corregido el problema por el cual los valores predeterminados de algunos campos no surtían efecto después de actualizar la página. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) por @gchust

- **[base de datos]** Corregido el problema de validación del lado del servidor para campos de fecha ([#8867](https://github.com/nocobase/nocobase/pull/8867)) por @2013xile

- **[Gestor de fuentes de datos]** Corregido el problema por el cual la colección creada por el empleado IA siempre carecía de los campos `createBy` y `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock

- **[Empleados IA]**
  - Corregido el problema con la URL especificada para el servicio LLM que no surtía efecto en las llamadas al modelo de incrustación de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock

  - Corregidos posibles errores de variable indefinida en los scripts de migración de actualización del plugin de IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock

- **[Localización]** localizationTexts: excepción de permiso de interfaz faltante ([#8861](https://github.com/nocobase/nocobase/pull/8861)) por @jiannx

- **[Acción: Importar registros Pro]**
  - Corregido el evento `beforeStop` en sub-aplicaciones que no se disparaba por @mytharcher

  - Corregido el error de SES causado por la importación diferida por @mytharcher

  - Corregido el problema por el cual las tareas asíncronas no finalizaban después de que ocurriera un error en la importación asíncrona por @cgyrock

- **[IA: Base de conocimiento]** Evitar que la base de datos vectorial y el almacenamiento vectorial en uso sean eliminados. por @cgyrock

- **[Impresión de plantillas]** Corregido el error de impresión de colecciones SQL por @jiannx

- **[Gestor de correo electrónico]** Corregido el error de página cuando el correo electrónico no existe por @jiannx
