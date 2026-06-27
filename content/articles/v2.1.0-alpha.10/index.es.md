---
title: "NocoBase v2.1.0-alpha.10: Limpieza programada de datos de puntos de control de conversaciones de IA"
description: "Nota de la versión v2.1.0-alpha.10"
---

### 🎉 Nuevas Funcionalidades

- **[IdP: OAuth]** Añadido un nuevo IdP: plugin OAuth para permitir que los servicios MCP se autentiquen mediante OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) por @2013xile

- **[Empleados IA]** Limpieza programada de los datos de puntos de control de conversaciones de IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock

- **[Supervisor de aplicaciones]** Soporte para filtrar en la lista de aplicaciones<br />Añadidos diálogos de confirmación para las acciones de iniciar y detener<br />Ordenar las entradas de estado de la aplicación por nombre de entorno por @2013xile

### 🚀 Mejoras

- **[servidor]** Mejorada la lógica de `pm add` ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos

- **[cliente]** Soporte para mostrar un mensaje de confirmación antes de cerrar una ventana emergente. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust

- **[sin definir]** Añadida una entrada dedicada `client-v2` y compilada de forma independiente con rsbuild, manteniendo v1 sin cambios. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) por @Molunerfinn

- **[Flujo de trabajo]**
  - Corregido el problema por el cual el cierre ordenado no drenaba todos los eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher

  - Añadido filtro en la lista de ejecuciones ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher

- **[Gestor de tareas asíncronas]** Las tareas asíncronas ahora admiten que los workers envíen mensajes de error ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock

- **[Flujo de trabajo: Aprobación]** Evitar configurar la interfaz de aprobadores cuando no hay ninguna colección configurada en el desencadenador por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregido el problema por el cual los usuarios no administradores no podían limpiar los valores de campos asociados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx

  - Corregido el problema por el cual la ventana emergente "Seleccionar registro" en la subtabla no se cargaba correctamente al abrirse por segunda vez. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust

- **[resourcer]** Evitar que el array del parámetro `filterByTk` se convierta automáticamente en un objeto cuando supera los 100 elementos ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile

- **[servidor]** Corregido el problema por el cual los eventos del ciclo de vida enviados por el worker provocaban la detención de la aplicación en servicio ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher

- **[Gestor de fuentes de datos]** Corregido el problema por el cual la colección creada por el empleado IA siempre carecía de los campos `createBy` y `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock

- **[Empleados IA]**
  - Corregido el problema con la URL especificada para el servicio LLM que no surtía efecto en las llamadas al modelo de incrustación de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock

  - Corregidos posibles errores de variable indefinida en los scripts de migración de actualización del plugin de IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock

- **[Acción: Importar registros Pro]**
  - Corregido el problema por el cual más de ~30 columnas causaban un error de importación, debido a que el flujo se leía de forma duplicada por @mytharcher

  - Corregido el problema por el cual se lanzaba un error al importar en modo síncrono por @mytharcher

  - Corregido el evento `beforeStop` en la subaplicación que no se disparaba por @mytharcher

  - Corregido el problema por el cual las tareas asíncronas no finalizaban después de que ocurriera un error en la importación asíncrona por @cgyrock

  - Corregida la importación diferida que causaba un error SES por @mytharcher

- **[Impresión de plantillas]** Corregido el error de impresión de colecciones SQL por @jiannx

- **[Flujo de trabajo: Aprobación]** Corregido un problema de concurrencia al añadir un asignado por @mytharcher

- **[Gestor de correo electrónico]** Corregido el error de página cuando el correo electrónico no existe por @jiannx

- **[Gestor de migraciones]** Corregido el problema por el cual la migración se interrumpía debido a un error causado porque el entorno de destino no tenía la nueva tabla creada durante el proceso de migración de carga. por @Andrew1989Y
