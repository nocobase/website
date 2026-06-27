---
title: "NocoBase v2.0.0-alpha.69: soporte para env.ESM_CDN_BASE_URL"
description: "Nota de la versión v2.0.0-alpha.69"
---

### 🎉 Nuevas Funcionalidades

- **[client]** Soporte para configurar el modo de carga de datos ([#8551](https://github.com/nocobase/nocobase/pull/8551)) por @zhangzhonghe

- **[flow-engine]** Soporte para env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) por @chenos

- **[Auth: DingTalk]** Permite vincular usuario con `unionId` por @2013xile

### 🚀 Mejoras

- **[flow-engine]** Mejora del autocompletado y las sugerencias de código en el editor de código del modelo JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) por @gchust

- **[client]**
  - Ajuste de la configuración del ancho de columna a selección desplegable en subtabla de edición en línea ([#8561](https://github.com/nocobase/nocobase/pull/8561)) por @katherinehhh

  - Soporte para deshabilitar parámetros de appends redundantes por defecto para `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile

- **[acl]** acl añade el método generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) por @jiannx

- **[Campo de colección: Markdown(Vditor)]** Se añadió una opción de configuración para establecer el modo de edición predeterminado en los ajustes del componente. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) por @Cyx649312038

- **[Workflow]** Cambio de la ruta de las subpáginas de workflow para que todas las páginas de workflow estén bajo el prefijo `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) por @mytharcher

- **[IA: Base de conocimiento]** Optimizada la salida de compilación para reducir el tamaño del paquete de plugin-ai-knowledge-base. por @cgyrock

- **[Multi-espacio]** Control de permisos multi-espacio accede a acl por @jiannx

- **[Auth: DingTalk]** Usar `userid` como clave predeterminada para la asociación de usuarios, manteniendo la compatibilidad con autenticadores existentes que dependen del móvil por @2013xile

### 🐛 Corrección de Errores

- **[client]**
  - Corregido: Se requiere actualizar la página para añadir un registro hijo después de habilitar la tabla jerárquica ([#8574](https://github.com/nocobase/nocobase/pull/8574)) por @katherinehhh

  - Corregidos problemas de espacio vacío en el diseño de cuadrícula ([#8535](https://github.com/nocobase/nocobase/pull/8535)) por @zhangzhonghe

  - Corregido: El ancho de columna no se actualiza en subtabla (edición en línea); la entrada de texto multilínea no se redimensiona con el ancho de columna ([#8573](https://github.com/nocobase/nocobase/pull/8573)) por @katherinehhh

  - Corregido un problema por el cual usar la "Creación rápida" del selector de registros de asociación en el formulario de edición sobrescribía los datos existentes del formulario. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) por @gchust

  - corrección: ocultar "Habilitar tabla jerárquica" y "Expandir todas las filas por defecto" para colecciones no jerárquicas ([#8566](https://github.com/nocobase/nocobase/pull/8566)) por @katherinehhh

  - Corregido un problema por el cual el menú "Formulario (Añadir nuevo)" se mostraba incorrectamente en la ventana emergente de la acción "Crear nuevo". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) por @gchust

  - corrección: el campo nanoid no regeneraba el valor predeterminado después del envío de creación ([#8538](https://github.com/nocobase/nocobase/pull/8538)) por @katherinehhh

  - Corregido un problema por el cual el flujo de eventos fallaba al aplicar al actualizar bloques destino a través de ventanas emergentes. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) por @gchust

  - Corregidos problemas conocidos relacionados con el filtrado ([#8514](https://github.com/nocobase/nocobase/pull/8514)) por @zhangzhonghe

  - Corregido un problema que provocaba que el bloque de datos se actualizara repetidamente después de enviar un formulario. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) por @gchust

  - Corregido problema por el cual los datos de la página se actualizaban incorrectamente después de abrir y cerrar la ventana emergente por primera vez. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) por @gchust

  - Corregido un problema que impedía usar variables de formulario para asignar valores en reglas de vinculación para campos de subformulario de varios niveles con relación muchos-a-muchos. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) por @gchust

  - corrección: visualización incorrecta al establecer valores predeterminados para el modelo de campo cascada ([#8537](https://github.com/nocobase/nocobase/pull/8537)) por @katherinehhh

  - Corregido un problema por el cual los datos no se actualizaban después de cambios a través de ventanas emergentes de varios niveles y a través de bloques. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) por @gchust

- **[flow-engine]**
  - corrección: la acción de eliminar columna no funciona en la edición de subtabla emergente cuando está configurado createModelOptions ([#8576](https://github.com/nocobase/nocobase/pull/8576)) por @katherinehhh

  - Corregido un problema por el cual enviar el formulario después de cambiar de página no actualiza la página. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) por @gchust

  - Corregido un problema por el cual algunas bibliotecas de terceros no podían importarse correctamente en bloques JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) por @gchust

  - Corregida la carga incorrecta de algunas bibliotecas ESM en runjs debido a una clasificación errónea como módulos AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) por @gchust

  - corrección del problema FilterByTK cuando filterTargetKey es un array de un solo elemento en fuente de datos externa ([#8522](https://github.com/nocobase/nocobase/pull/8522)) por @katherinehhh

  - corrección: la acción de eliminar columna no funciona en la edición de subtabla emergente cuando está configurado createModelOptions ([#8560](https://github.com/nocobase/nocobase/pull/8560)) por @katherinehhh

- **[Campo de colección: Adjunto(URL)]** Corregido: la configuración de visualización del nombre de archivo del campo URL de adjunto no funciona en el formulario de edición ([#8571](https://github.com/nocobase/nocobase/pull/8571)) por @katherinehhh

- **[Empleados IA]**
  - Corregido un problema por el cual el nodo LLM falla al enviar mensajes ([#8569](https://github.com/nocobase/nocobase/pull/8569)) por @2013xile

  - Corregido el problema por el cual el sistema no podía iniciar después de la compilación ([#8523](https://github.com/nocobase/nocobase/pull/8523)) por @cgyrock

  - Corregida la excepción que ocurre cuando las herramientas se llaman automáticamente durante el modelado de datos de IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) por @cgyrock

- **[Plantillas de UI]** Corregido error al reabrir y enviar una plantilla emergente guardada para el formulario "Añadir nuevo" del campo de asociación. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) por @gchust

- **[Acción: Importar registros]** Corregida la vulnerabilidad de la acción de importación ([#8544](https://github.com/nocobase/nocobase/pull/8544)) por @mytharcher

- **[Gestor de archivos]** Asegurada la ruta de archivo para almacenamiento local, para evitar rutas de acceso fuera de la raíz del documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher

- **[Workflow]** Añadida tolerancia a fallos para el componente de selección de registro de colección, para evitar errores cuando se elimina una colección ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher

- **[Workflow: Evento de acción personalizada]** Corregido el problema por el cual los parámetros y la carga útil son incorrectos al activar un workflow personalizado por @mytharcher

- **[Multi-espacio]**
  - eliminado el atributo read-pretty para el campo de espacio por @jiannx

  - añadido script de migración para eliminar x-ready-pretty en el campo de espacio por @jiannx

- **[IA: Base de conocimiento]** Corregido el problema por el cual el sistema no podía iniciar después de la compilación por @cgyrock

- **[Acción: Importar registros Pro]** Corregidos los números de conteo en el resultado de importación y la traducción de mensajes por @mytharcher

- **[Workflow: Subflujo]** Corregida la ruta del enlace de workflow por @mytharcher

- **[Impresión de plantilla]** corregido el problema de visualización de la lista de campos en la configuración de la acción de impresión de plantilla por @katherinehhh

- **[Workflow: Aprobación]**
  - Corregido problema de rendimiento causado por el campo JSON en la carga de listas (MySQL) por @mytharcher

  - Añadida tolerancia a fallos en workflow eliminado, para evitar errores de carga en la lista de tareas por @mytharcher

  - Corregido error al añadir rol a usuario si el workflow de audiencias está deshabilitado por @mytharcher

- **[Gestor de correo electrónico]** el cuerpo no se colapsa cuando se selecciona texto. corregido error al descargar adjunto por @jiannx

- **[WeCom]** Corregido un problema por el cual los usuarios no podían registrarse automáticamente cuando faltaba el móvil por @2013xile
