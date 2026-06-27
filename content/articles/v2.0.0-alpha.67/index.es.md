---
title: "NocoBase v2.0.0-alpha.67: agregar componente de campo de subtabla (edición emergente)"
description: "Nota de la versión v2.0.0-alpha.67"
---

### 🎉 Nuevas Funcionalidades

- **[server]** Refactorización del supervisor de aplicaciones para soportar la gestión multi-aplicación en diferentes escenarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) por @2013xile

- **[client]** Añadir componente de campo de subtabla (edición emergente) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) por @katherinehhh

- **[Empleados IA]** Soporte para pegar archivos en el chat de IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) por @heziqiang

### 🚀 Mejoras

- **[client]**
  - Mejora de los botones de subida y edición para campos de adjuntos en subtablas para guiar mejor al usuario a hacer clic para subir. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) por @katherinehhh

  - Mejora del subformulario de relación muchos-a-muchos para inicializar con un elemento por defecto y evitar crear registros cuando se deja vacío ([#8473](https://github.com/nocobase/nocobase/pull/8473)) por @katherinehhh

  - Mejora del subformulario de relación muchos-a-muchos para inicializar con un elemento por defecto y evitar crear registros cuando se deja vacío ([#8458](https://github.com/nocobase/nocobase/pull/8458)) por @katherinehhh

- **[motor-de-flujo]** Mejora de ctx.libs en runjs para soportar carga bajo demanda, y añadir librerías predefinidas: lodash, math y formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) por @gchust

- **[server]** Soporte para configurar una lista blanca de orígenes CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) por @2013xile

- **[Gestor de archivos]** Añadir visor extensible para el gestor de archivos ([#8501](https://github.com/nocobase/nocobase/pull/8501)) por @mytharcher

- **[Visor de archivos Office]** Añadir más tipos de archivo para previsualización en Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) por @mytharcher

- **[Manejador de errores]** Sanitizar errores de referencia SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) por @2013xile

- **[Acción: Exportar registros]** Mejorar el ámbito de datos de la acción de exportación basado en registros seleccionados o filtros de recurso ([#8442](https://github.com/nocobase/nocobase/pull/8442)) por @katherinehhh

- **[Acción: Exportar registros Pro]** Mejorar el ámbito de datos de la acción de exportación basado en registros seleccionados o filtros de recurso por @katherinehhh

- **[Flujo de trabajo: Aprobación]** Implementar control de acceso para APIs para prevenir operaciones de datos no autorizadas por @mytharcher

### 🐛 Corrección de Errores

- **[client]**
  - Corregir tiempo duplicado en el valor DateTime del filtro ([#8506](https://github.com/nocobase/nocobase/pull/8506)) por @zhangzhonghe

  - Corregir tiempo duplicado en el valor DateTime del filtro ([#8484](https://github.com/nocobase/nocobase/pull/8484)) por @zhangzhonghe

  - Corregir que el campo nanoid no se regeneraba después de enviar el formulario ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh

  - Corregir el problema donde los popovers del editor de texto enriquecido quedaban ocultos ([#8443](https://github.com/nocobase/nocobase/pull/8443)) por @zhangzhonghe

  - Filtrar lista para eliminar duplicados ([#8431](https://github.com/nocobase/nocobase/pull/8431)) por @jiannx

  - Corregir mensaje de validación requerida duplicado al limpiar un campo en cascada ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh

  - Corregir el problema donde el menú de configuración no se mostraba en Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) por @zhangzhonghe

  - Corregir problema donde los datos de subdetalle en modo solo lectura no se mostraban correctamente en el formulario de edición ([#8469](https://github.com/nocobase/nocobase/pull/8469)) por @katherinehhh

  - Corregir el problema donde la ventana emergente "Variables personalizadas" quedaba oculta ([#8463](https://github.com/nocobase/nocobase/pull/8463)) por @zhangzhonghe

  - Corregir problema donde la configuración de ordenación del grupo de campos de colección no surtía efecto. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) por @katherinehhh

  - Corregir el problema donde el botón "Configuración de columnas" de la tabla no funcionaba ([#8441](https://github.com/nocobase/nocobase/pull/8441)) por @zhangzhonghe

  - Corregir un problema donde el selector emergente del campo de asociación de archivos tenía un z-index incorrecto, y la configuración emergente no se guardaba correctamente. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) por @gchust

  - Corregir problema al editar la colección en la interfaz gráfica ([#8451](https://github.com/nocobase/nocobase/pull/8451)) por @katherinehhh

- **[database]**
  - Corregir errores al filtrar con el operador `empty` después de recargar una colección ([#8496](https://github.com/nocobase/nocobase/pull/8496)) por @2013xile

  - Corrección: actualización profunda de asociaciones anidadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos

  - Corrección: actualización profunda de asociaciones anidadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos

- **[server]** Corregir la versión de `mathjs` en dependencias comunes ([#8475](https://github.com/nocobase/nocobase/pull/8475)) por @mytharcher

- **[motor-de-flujo]**
  - Corregir un problema donde cerrar una ventana emergente incrustada causaba un error después de abrir consecutivamente la configuración de reglas de enlace y la configuración del flujo de eventos. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) por @gchust

  - Corregir un problema donde hacer clic repetidamente en el menú de configuración podía abrir múltiples ventanas de configuración. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) por @gchust

  - Corregir un problema donde las variables en los parámetros de código runjs se resolvían antes de la ejecución. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) por @gchust

  - Corregir un problema donde las variables emergentes no se podían seleccionar en la ventana emergente de creación rápida del selector de datos. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) por @gchust

- **[Empleados IA]** Corregir problemas de inconsistencia en la configuración de campos seleccionables entre el modelado de IA y la gestión de fuentes de datos ([#8488](https://github.com/nocobase/nocobase/pull/8488)) por @cgyrock

- **[Fuente de datos: Principal]** Corregido un problema donde eliminar registros de un bloque de tabla de asociación muchos-a-muchos no respetaba la restricción `onDelete: 'restrict'` del campo de asociación ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile

- **[Bloque: iframe]** Corregir el error al añadir variables agregadas a Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe

- **[Gestor de tareas asíncronas]** Corregir el problema donde el flujo de trabajo activado por importación asíncrona se retrasaba en ejecutarse ([#8478](https://github.com/nocobase/nocobase/pull/8478)) por @mytharcher

- **[Gestor de archivos]** Corregir el problema donde el nombre de archivo obtenido del cuerpo de la solicitud se convertía inesperadamente en una cadena decodificada ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher

- **[Plantillas de UI]** Corregir un problema donde los bloques de plantilla de referencia no podían establecer ámbitos de datos a través de la configuración del flujo de eventos. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) por @gchust

- **[Móvil (obsoleto)]** Plugin móvil obsoleto (reemplazado por el plugin ui-layout desde la versión 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) por @chenos

- **[Acción: Importar registros Pro]** Corregir el problema donde el flujo de trabajo activado por importación asíncrona se retrasaba en ejecutarse por @mytharcher

- **[Flujo de trabajo: Webhook]** Corregir el problema donde faltan datos del cuerpo cuando el análisis del cuerpo no está configurado por @mytharcher

- **[Impresión de plantillas]**
  - Corregida la lógica incorrecta del permiso del botón de impresión cuando los roles estaban unidos. por @jiannx

  - Eliminar botones de pie de página de la configuración de la plantilla de impresión por @katherinehhh

- **[Flujo de trabajo: Aprobación]**
  - Corregir el problema donde los campos no se mostraban en las tarjetas de tareas de aprobación por @zhangzhonghe

  - Corregir el problema donde devolver una aprobación al nodo anterior pero se devolvía al inicio por @mytharcher

  - Corregir el problema donde la concurrencia hacía que la ejecución se reanudara repetidamente por @mytharcher

  - Corregir el problema donde se lanzaba un error en la ventana emergente de registro de aprobación 1.x por @mytharcher

- **[Gestor de correo electrónico]**
  - Corregir el problema donde la ventana emergente de configuración de correo electrónico quedaba oculta por @zhangzhonghe

  - Corregido el problema de correos electrónicos en el mismo buzón entre múltiples usuarios y rendimiento optimizado por @jiannx

- **[Gestor de migraciones]** Corregido un posible bloqueo del proceso causado por el registro de sentencias SQL excesivamente grandes incluidas en excepciones de error de migración por @cgyrock
