---
title: "NocoBase v2.0.0-alpha.65: agregar control de concurrencia a nivel de proceso para el administrador de tareas base"
description: "Nota de la versión v2.0.0-alpha.65"
---

### 🎉 Nuevas funciones

- **[test]** Añadir control de concurrencia a nivel de proceso para el gestor de tareas base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) por @cgyrock

### 🚀 Mejoras

- **[cliente]**
  - El editor de texto enriquecido admite ajuste de tamaño de fuente, ajuste de tamaño de imagen y saltos de línea suaves ([#8401](https://github.com/nocobase/nocobase/pull/8401)) por @jiannx

  - Soporte para especificar cuándo ejecutar el flujo de eventos. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) por @gchust

  - Mejorar el rendimiento de renderizado de la lista del gestor de plugins cambiando a CSS nativo de webkit para el truncamiento de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher

- **[evaluadores]** Actualizar la versión de math.js para admitir más funciones ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher

- **[cli]** Soporte para configuración de URL base de CDN mediante env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) por @chenos

- **[motor-de-flujo]** Añadir `rowOrder` a GridModel para garantizar un orden de filas consistente ([#8371](https://github.com/nocobase/nocobase/pull/8371)) por @zhangzhonghe

- **[Motor de flujo]** Soporte para resolver valores de campos en el registro del formulario actual incluso si no se han añadido al formulario de edición. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) por @gchust

- **[Empleados IA]**
  - Optimizar el botón de entrada de IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) por @heziqiang

  - Cambiar el resultado del invocador de flujo de trabajo a `execution.output`, usando explícitamente el nodo de salida el resultado podría ser estable ([#8423](https://github.com/nocobase/nocobase/pull/8423)) por @mytharcher

  - Ocultar builder ai en la lista de entrada.<br/> Optimizar el flujo de integración de LLM.<br/> Actualizar documentos sobre el modelo de IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) por @heziqiang

  - Soporte para Anthropic y Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) por @heziqiang

- **[Notificación: Mensaje en la aplicación]** Corregir problema de rendimiento al enviar mensajes en la aplicación a un gran número de usuarios ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Corregir el problema donde la altura del modal de acceso directo supera la altura de la ventana gráfica ([#8437](https://github.com/nocobase/nocobase/pull/8437)) por @zhangzhonghe

  - Corregir el problema donde las reglas de vinculación de botones de fila de tabla afectan el estado de los botones dentro de formularios emergentes ([#8434](https://github.com/nocobase/nocobase/pull/8434)) por @zhangzhonghe

  - Corregir un problema donde el estado de la columna de acciones de la tabla se contaminaba al cambiar de página. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) por @gchust

  - Añadir tolerancia a fallos para el esquema de acción, para evitar el bloqueo de la página al hacer clic en el botón de acción ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher

  - corregir que el campo de título i no se actualiza cuando el campo de asociación se establece en modo de solo lectura en el formulario de creación ([#8413](https://github.com/nocobase/nocobase/pull/8413)) por @katherinehhh

  - 数字组件不显示值 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) por @chenos

  - corregir la desaparición de la configuración del campo de título después de establecer la URL del adjunto y luego cambiar a otro campo en el elemento del formulario ([#8418](https://github.com/nocobase/nocobase/pull/8418)) por @katherinehhh

  - corregir problema con el botón de envío donde la validación requerida de omisión no funciona cuando la confirmación está habilitada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh

  - corregir problema de resolución donde la configuración de diseño en el bloque de tarjeta de cuadrícula no tiene efecto ([#8399](https://github.com/nocobase/nocobase/pull/8399)) por @katherinehhh

  - corregir que los datos de selección en cascada no se limpian después de un envío exitoso en el formulario de creación ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh

  - corregir evitar la asignación cuando se ingresan caracteres chinos en el campo numérico ([#8397](https://github.com/nocobase/nocobase/pull/8397)) por @katherinehhh

  - resolver problema con el botón de envío que aparece en la ventana emergente de selección de archivos del campo de asociación uno a uno ([#8398](https://github.com/nocobase/nocobase/pull/8398)) por @katherinehhh

  - corregir la lógica de refinamiento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh

- **[motor-de-flujo]** Corregir que los pasos del flujo de eventos dinámicos se ejecuten dos veces al abrir una ventana emergente mediante un clic en un botón. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) por @gchust

- **[Motor de flujo]** Corregir un problema donde la resolución de variables era incorrecta cuando filterByTk era un array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) por @gchust

- **[Gestor de archivos]** Corregir el problema donde la URL del archivo se generaba incorrectamente para archivos subidos al almacenamiento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher

- **[Campo de colección: Muchos a muchos (array)]** Corregir error al añadir relaciones muchos a muchos(array) de segundo nivel en consultas de asociación ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock

- **[Flujo de trabajo]**
  - Corregir el problema donde el ID del esquema no se actualiza en el nodo duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher

  - Añadir ID de instancia al ID Snowflake de los trabajos, para evitar problemas de conflicto de ID en modo clúster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher

- **[Bloque: plantilla (obsoleto)]** Corregido un problema donde no se podía acceder a la página de edición de plantillas heredadas (v1). ([#8376](https://github.com/nocobase/nocobase/pull/8376)) por @gchust

- **[Fuente de datos: API REST]** Añadir tolerancia a fallos para el contexto de solicitud, para evitar errores cuando el método no está en el contexto por @mytharcher

- **[Multi-espacio]**
  - Espacio relacionado al añadir datos asociados por @jiannx

  - El color del selector de espacio sigue el tema por @jiannx

- **[Impresión de plantilla]**
  - Corregir problema emergente de configuración de plantilla oscurecida por @zhangzhonghe

  - soporte para campo de espacio por @jiannx

  - mostrar campos de espacio en la versión 2.0 por @jiannx

- **[Almacenamiento de archivos: S3(Pro)]** Corregir el problema donde el modo de cambio de nombre de archivo no funciona por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir el problema donde se cargaba un registro incorrecto debido a parámetros erróneos por @mytharcher

  - Corregir que el bloque de valor no se muestra debido a la falta del componente `ValueBlock.Result` por @mytharcher

- **[Gestor de correo electrónico]**
  - corregir cadena de conversación por @jiannx

  - 管理页面添加筛选 por @jiannx
