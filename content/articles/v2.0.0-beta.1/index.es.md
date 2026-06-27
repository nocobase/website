---
title: "NocoBase v2.0.0-beta.1: Compatibilidad con componentes de mantenimiento definidos por complementos cuando la aplicación entra en estado de mantenimiento"
description: "Nota de la versión v2.0.0-beta.1"
---

### 🎉 Nuevas Funcionalidades

- **[sin definir]** Añadir un plugin experimental "Bloque de referencia", que permite reutilizar bloques existentes mediante referencia o copia. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) por @gchust

- **[cliente]**
  - Soporte para componentes de mantenimiento definidos por el plugin cuando la aplicación entra en estado de mantenimiento ([#8252](https://github.com/nocobase/nocobase/pull/8252)) por @cgyrock

  - Al crear una colección, se puede cambiar el tipo de campo de id predefinido ([#8129](https://github.com/nocobase/nocobase/pull/8129)) por @cgyrock

  - Añadir soporte para configuraciones de añadir/seleccionar/desasociar en subformularios de relación muchos-a-muchos ([#8099](https://github.com/nocobase/nocobase/pull/8099)) por @katherinehhh

  - Soporte para personalizar estilos globales en el editor de temas ([#7960](https://github.com/nocobase/nocobase/pull/7960)) por @ljmiaoo

  - Soporte para establecer regla de ordenación predeterminada en el bloque de detalle ([#8070](https://github.com/nocobase/nocobase/pull/8070)) por @katherinehhh

  - Soporte para establecer el tipo de dato para el campo Número (opciones: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) por @chenos

  - Soporte para ordenación de campos de columna en tabla ([#7900](https://github.com/nocobase/nocobase/pull/7900)) por @katherinehhh

  - Añadir soporte de creación rápida al selector de campos de asociación ([#7887](https://github.com/nocobase/nocobase/pull/7887)) por @katherinehhh

  - Soporte para selector en cascada para el campo de asociación de colección de árbol ([#7846](https://github.com/nocobase/nocobase/pull/7846)) por @katherinehhh

  - Soporte para arrastrar acciones de columna de tabla ([#7842](https://github.com/nocobase/nocobase/pull/7842)) por @zhangzhonghe

  - Añadir soporte de paginación a la subtabla ([#7754](https://github.com/nocobase/nocobase/pull/7754)) por @katherinehhh

  - Flujo de Eventos: Se introdujeron nuevas acciones predefinidas para mejorar las opciones de personalización para el manejo de eventos, permitiendo a los usuarios optimizar flujos de trabajo y mejorar la eficiencia ([#7672](https://github.com/nocobase/nocobase/pull/7672)) por @zhangzhonghe

  - Añadir bloque de markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) por @katherinehhh

  - Soporte para establecer reglas de vinculación para subformularios ([#7640](https://github.com/nocobase/nocobase/pull/7640)) por @zhangzhonghe

  - Se añadió soporte para detectores de eventos de clic en filas de tabla, permitiendo a los usuarios ejecutar acciones específicas al hacer clic en una fila de la tabla ([#7622](https://github.com/nocobase/nocobase/pull/7622)) por @zhangzhonghe

  - Añadir soporte para variables personalizadas ([#7585](https://github.com/nocobase/nocobase/pull/7585)) por @zhangzhonghe

  - Añadir variable "Tipo de dispositivo actual" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) por @zhangzhonghe

- **[Gestor de archivos]** Soporte para configuración del método de renombrado de archivos ([#8231](https://github.com/nocobase/nocobase/pull/8231)) por @JAVA-LW

- **[Flujo de trabajo]**
  - Añadir nuevas variables de sistema en el flujo de trabajo, incluyendo `instanceId` y `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) por @mytharcher

  - Añadir nodo "Multi-condiciones", proporciona el control de flujo como `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) por @mytharcher

- **[Bloque: Mapa]** añadir bloque de mapa 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) por @katherinehhh

- **[Visualización de datos]**
  - añadir empleado AI para configurar gráficos ([#7815](https://github.com/nocobase/nocobase/pull/7815)) por @heziqiang

  - añadir fuente de datos SQL para gráficos ([#7830](https://github.com/nocobase/nocobase/pull/7830)) por @heziqiang

  - añadir tipo de gráfico "Gráfico de dona" ([#7629](https://github.com/nocobase/nocobase/pull/7629)) por @heziqiang

- **[Motor de flujo]** Soporta el uso de cadenas de plantilla LiquidJS en sentencias SQL ([#7667](https://github.com/nocobase/nocobase/pull/7667)) por @2013xile

- **[Gestor de fuentes de datos]**
  - La fuente de datos principal ahora soporta la lectura directa de tablas de la base de datos principal y permite modificar las interfaces de campo ([#7118](https://github.com/nocobase/nocobase/pull/7118)) por @aaaaaajie

  - La fuente de datos principal ahora soporta la lectura directa de tablas de la base de datos principal y permite modificar las interfaces de campo ([#7118](https://github.com/nocobase/nocobase/pull/7118)) por @aaaaaajie

- **[Bloque: GridCard]** Añadir bloque de tarjeta de cuadrícula 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) por @katherinehhh

- **[Bloque: Lista]** Añadir bloque de lista 2.0 ([#7574](https://github.com/nocobase/nocobase/pull/7574)) por @katherinehhh

- **[Bloque: Panel de acciones]** Añadir bloque de panel de acciones 2.0 ([#7594](https://github.com/nocobase/nocobase/pull/7594)) por @katherinehhh

- **[Empleados AI]** Mejorar la función de búsqueda web de plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) por @cgyrock

- **[Telemetría]** Añadir nuevo plugin: Telemetría, un plugin de telemetría basado en OpenTelemetry que proporciona métricas de CPU, memoria y solicitudes HTTP con soporte de exportación HTTP por @2013xile

- **[Borradores de formularios]** Borradores de formularios por @chenos

- **[Almacenamiento de archivos: S3(Pro)]** Añadir opción de modo de renombrado para almacenamiento S3 Pro por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Permitir elegir si mostrar la instantánea o el registro más reciente en la interfaz de usuario del proceso de aprobación por @mytharcher

  - Añadir configuración de audiencia para controlar quién puede iniciar una aprobación por @mytharcher

- **[Gestor de correo electrónico]** Implementación de la gestión de correo electrónico 2.0 por @jiannx

### 🚀 Mejoras

- **[sin definir]**
  - actualizar la documentación en inglés del plugin de gráficos ([#7748](https://github.com/nocobase/nocobase/pull/7748)) por @heziqiang

  - actualizar el documento de visión general de gráficos ([#7702](https://github.com/nocobase/nocobase/pull/7702)) por @heziqiang

- **[motor-de-flujo]**
  - Soporte para el método window.location.reload en el entorno runjs. ([#8316](https://github.com/nocobase/nocobase/pull/8316)) por @gchust

  - Optimizar problemas de rendimiento al cambiar modos de configuración ([#8241](https://github.com/nocobase/nocobase/pull/8241)) por @zhangzhonghe

  - Soporte para el objeto FormData en el entorno runjs. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) por @gchust

  - soporte para ocultar el menú de configuración de pasos dinámicamente ([#7924](https://github.com/nocobase/nocobase/pull/7924)) por @gchust

  - Añadir opción useCache a FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) por @zhangzhonghe

  - Añadir método `removeModelWithSubModels` para eliminar recursivamente un modelo y sus submodelos ([#8064](https://github.com/nocobase/nocobase/pull/8064)) por @zhangzhonghe

  - Soporte para cambiar la clase del modelo de flujo dinámicamente ([#7952](https://github.com/nocobase/nocobase/pull/7952)) por @gchust

  - Soporte para escuchar el evento de cambio del árbol de modelos de flujo en el motor de flujo. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) por @gchust

  - mejorar la resolución de variables de registro actual, haciendo más rápida la apertura de diálogos ([#7895](https://github.com/nocobase/nocobase/pull/7895)) por @gchust

  - Se optimizó la estructura de la API de bibliotecas de terceros en el contexto runjs y se añadió soporte para la librería de iconos Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) por @gchust

  - Optimizar el estilo de la barra de herramientas para evitar que los iconos se oculten ([#7883](https://github.com/nocobase/nocobase/pull/7883)) por @zhangzhonghe

  - Optimizar los estilos de la barra de herramientas para las pestañas de página ([#7795](https://github.com/nocobase/nocobase/pull/7795)) por @zhangzhonghe

  - soporte para operación retrasada en el modelo de flujo ([#7786](https://github.com/nocobase/nocobase/pull/7786)) por @gchust

  - Se mejoró el mensaje de error mostrado cuando falla la copia del UID, proporcionando instrucciones más claras para resolver el problema. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) por @gchust

  - Soporte para definir el contexto de la variable en la definición del paso de flujo ([#7674](https://github.com/nocobase/nocobase/pull/7674)) por @gchust

  - Soporte para omitir el paso de flujo runjs añadiendo skipRunJs=true a la cadena de consulta de la URL. ([#7638](https://github.com/nocobase/nocobase/pull/7638)) por @gchust

  - soporte para variable emergente ([#7583](https://github.com/nocobase/nocobase/pull/7583)) por @gchust

  - Se estandarizaron los flujos de trabajo automáticos para que se activen consistentemente mediante el evento "beforeRender", asegurando una operación predecible y unificada en todos los procesos. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) por @gchust

  - Mejorar la experiencia de edición de código con fragmentos más ricos y autocompletados sensibles al contexto para varios escenarios ([#7559](https://github.com/nocobase/nocobase/pull/7559)) por @gchust

  - Optimizar la funcionalidad de arrastrar y soltar ([#7526](https://github.com/nocobase/nocobase/pull/7526)) por @zhangzhonghe

- **[sdk]** Mejorar la implementación del almacenamiento de la API ([#8308](https://github.com/nocobase/nocobase/pull/8308)) por @chenos

- **[cliente]**
  - Soporte para modo de pantalla completa en el editor de código JS. ([#8294](https://github.com/nocobase/nocobase/pull/8294)) por @gchust

  - hacer que "Añadir hijo" sea equivalente a "Añadir nuevo" de la asociación de hijos correspondiente ([#8272](https://github.com/nocobase/nocobase/pull/8272)) por @katherinehhh

  - soporte para limpiar el valor predeterminado del campo de color ([#8268](https://github.com/nocobase/nocobase/pull/8268)) por @katherinehhh

  - usar select para la configuración del ancho de la columna de operación ([#8218](https://github.com/nocobase/nocobase/pull/8218)) por @katherinehhh

  - soporte para ancho de columna personalizado para columnas de tabla ([#8200](https://github.com/nocobase/nocobase/pull/8200)) por @katherinehhh

  - cambiar el ancho de columna de la tabla para usar opciones seleccionables ([#8188](https://github.com/nocobase/nocobase/pull/8188)) por @katherinehhh

  - mejorar los estilos de recordPicker con maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) por @katherinehhh

  - optimizar las opciones de configuración (Bloques, Campos, Acciones) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) por @katherinehhh

  - soporte para formato de número para campos de porcentaje ([#8123](https://github.com/nocobase/nocobase/pull/8123)) por @katherinehhh

  - corregir el salto de paginación de la subtabla después de eliminar una fila y añadir soporte para reglas de validación de columna ([#8094](https://github.com/nocobase/nocobase/pull/8094)) por @katherinehhh

  - ajustar la visualización de campos grandes en subtabla editable ([#8078](https://github.com/nocobase/nocobase/pull/8078)) por @katherinehhh

  - soporte para puntos suspensivos en contenido de campo JSON desbordado ([#8067](https://github.com/nocobase/nocobase/pull/8067)) por @katherinehhh

  - soporte para la configuración allowMultiple en el componente de carga de archivos adjuntos ([#8052](https://github.com/nocobase/nocobase/pull/8052)) por @katherinehhh

  - mostrar opciones colapsadas al pasar el ratón en el componente Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) por @katherinehhh

  - Soporte para inicializar campos de filtro seleccionados en la consulta de gráficos ([#7933](https://github.com/nocobase/nocobase/pull/7933)) por @heziqiang

  - Adaptar Componentes para Dispositivos Móviles ([#7870](https://github.com/nocobase/nocobase/pull/7870)) por @zhangzhonghe

  - Se añadió soporte para la librería Day.js en el contexto de scripting RunJS, permitiendo manipulaciones de fecha y hora más fáciles. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) por @gchust

  - añadir versión de información de página al contexto del motor de flujo ([#7826](https://github.com/nocobase/nocobase/pull/7826)) por @gchust

  - mejorar el Editor Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) por @katherinehhh

  - adaptarse al campo tableoid en 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) por @katherinehhh

  - soporte para jsx en el editor de código JS ([#7699](https://github.com/nocobase/nocobase/pull/7699)) por @gchust

  - soporte para campos de asociación en el modelo de campo JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) por @gchust

- **[servidor]** Añadir tolerancia a fallos cuando faltan instancias de aplicación que causan errores al obtener mensajes de mantenimiento de la aplicación ([#8196](https://github.com/nocobase/nocobase/pull/8196)) por @2013xile

- **[acl]** Soporte para la API `acl.registerSnippet` para fusionar la configuración de fragmentos ([#8155](https://github.com/nocobase/nocobase/pull/8155)) por @mytharcher

- **[telemetría]**
  - Soporte para controlar qué métricas se exportan ([#7938](https://github.com/nocobase/nocobase/pull/7938)) por @2013xile

  - Añadir métricas de telemetría para el número de sub-aplicaciones en línea, etc ([#7743](https://github.com/nocobase/nocobase/pull/7743)) por @2013xile

- **[base de datos]** Se refactorizó el plugin de cifrado de campos para mejorar la seguridad, soportando la generación y rotación de claves de aplicación, y claves de cifrado por campo. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) por @cgyrock

- **[Empleados AI]**
  - mejorar la compatibilidad con Gemini para nodos LLM en el flujo de trabajo.<br/>optimizar la herramienta AI dataSourceQuery para el manejo de datos a gran escala.<br/>resolver problemas de modelado de datos.<br/>añadir herramienta de sugerencia AI. ([#8249](https://github.com/nocobase/nocobase/pull/8249)) por @heziqiang

  - Corregir que el empleado AI no responda en la primera edición del envío<br/>Eliminar el empleado AI incorporado innecesario "Avery Form Assistant"<br/>Añadir permisos de rol inicial predeterminados para empleados AI incorporados<br/>Mejorar el manejo de errores y el comportamiento de salida del empleado AI<br/>Añadir soporte para que AI acceda a variables de contexto modal<br/>Añadir soporte para fuentes de datos externas para AI<br/>Corregir el truncamiento incorrecto de la conversación cuando AI procesa grandes volúmenes de datos ([#8191](https://github.com/nocobase/nocobase/pull/8191)) por @heziqiang

  - Se habilitó la funcionalidad de edición para los mensajes del sistema del asistente AI incorporado.<br/>Se optimizó el mensaje del sistema para el asistente AI Nathan.<br/>Se corrigió un problema con el servidor que no podía leer archivos estáticos. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) por @heziqiang

  - añadir el campo de proveedor faltante al formulario Añadir LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) por @heziqiang

  - El plugin de empleado AI añade un hook de actualización ([#7951](https://github.com/nocobase/nocobase/pull/7951)) por @heziqiang

  - Mejorar la lógica de interacción del empleado AI y optimizar el flujo de configuración de tareas ([#7707](https://github.com/nocobase/nocobase/pull/7707)) por @cgyrock

  - El empleado AI puede consultar datos de forma autónoma basándose en los metadatos del bloque de tabla ([#7703](https://github.com/nocobase/nocobase/pull/7703)) por @cgyrock

  - Se optimizó la experiencia de codificación AI, incluyendo el uso del empleado AI para revisar, diagnosticar y corregir código. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) por @cgyrock

  - Se refactorizó el Proveedor LLM de OpenAI en dos proveedores separados para soportar las API de Completions y Responses de OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) por @cgyrock

  - Añadir nuevo proveedor LLM Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) por @ReLaMi96

  - Optimización de codificación AI ([#7614](https://github.com/nocobase/nocobase/pull/7614)) por @cgyrock

  - añadir botón de minimizar para el cuadro de chat en diseño móvil ([#7595](https://github.com/nocobase/nocobase/pull/7595)) por @cgyrock

- **[Plantillas de UI]**
  - Añadir soporte de plantilla de campo para el bloque de detalles. ([#8247](https://github.com/nocobase/nocobase/pull/8247)) por @gchust

  - Se añadió el plugin de plantillas de UI, proporcionando la capacidad de reutilizar plantillas de bloque y plantillas emergentes. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) por @gchust

- **[Flujo de trabajo]**
  - Añadir instancia de flujo de trabajo original a la API duplicada ([#8225](https://github.com/nocobase/nocobase/pull/8225)) por @mytharcher

  - Mejorar la descripción del campo `changed` en el evento de colección ([#8216](https://github.com/nocobase/nocobase/pull/8216)) por @mytharcher

  - Soporte para usar la configuración heredada para crear una nueva en el flujo de trabajo duplicado ([#8165](https://github.com/nocobase/nocobase/pull/8165)) por @mytharcher

  - Añadir lógica de tolerancia a fallos para la falta de datos en la preparación del procesador, para evitar la suspensión de la ejecución ([#8156](https://github.com/nocobase/nocobase/pull/8156)) por @mytharcher

  - Usar carga diferida para datos de asociación en el lienzo del flujo de trabajo para mejorar el rendimiento ([#8142](https://github.com/nocobase/nocobase/pull/8142)) por @mytharcher

  - Completar la configuración del flujo de trabajo vinculado para el botón de acción de actualización de registro ([#7668](https://github.com/nocobase/nocobase/pull/7668)) por @mytharcher

- **[Gestor de tareas asíncronas]**
  - Se mejoró el manejo de errores durante las tareas de limpieza añadiendo mecanismos de captura de excepciones para prevenir fallos de la aplicación ([#8215](https://github.com/nocobase/nocobase/pull/8215)) por @mytharcher

  - Las tareas asíncronas para sub-aplicaciones deberían iniciar solo las sub-aplicaciones objetivo en Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) por @2013xile

- **[Bloque: Panel de acciones]** mejorar la visualización de bloques, acciones y campos ocultos en el modo de configuración ([#8174](https://github.com/nocobase/nocobase/pull/8174)) por @katherinehhh

- **[Bloque: Lista]** añadir botón de Enlace para bloques de Tabla, Lista y GridCard ([#8194](https://github.com/nocobase/nocobase/pull/8194)) por @katherinehhh

- **[Manejador de errores]** No exponer mensajes de error de base de datos sin procesar en errores de sintaxis SQL, para evitar revelar el tipo de base de datos ([#8195](https://github.com/nocobase/nocobase/pull/8195)) por @2013xile

- **[Bloque: Mapa]** soporte para puntos suspensivos de texto desbordado para el campo de mapa en modo de visualización de texto ([#8189](https://github.com/nocobase/nocobase/pull/8189)) por @katherinehhh

- **[Control de acceso]** No permitir asignar el rol raíz a los usuarios ([#8180](https://github.com/nocobase/nocobase/pull/8180)) por @2013xile

- **[Bloque: GridCard]**
  - Optimizar los estilos del bloque GridCard para un diseño más compacto ([#8152](https://github.com/nocobase/nocobase/pull/8152)) por @katherinehhh

  - añadir configuración de recuento de filas a la tarjeta de cuadrícula y reemplazar pageSize con cálculo automático ([#8055](https://github.com/nocobase/nocobase/pull/8055)) por @katherinehhh

- **[Campo de colección: Markdown(Vditor)]** Deshabilitar el análisis de variables en el campo Markdown por defecto en modo readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) por @katherinehhh

- **[Acción: Importar registros]** permitir seleccionar ID para campos de importación ([#8133](https://github.com/nocobase/nocobase/pull/8133)) por @katherinehhh

- **[Visualización de datos]**
  - actualizar consejos de alerta y anotaciones de plantilla de código de eventos ([#7814](https://github.com/nocobase/nocobase/pull/7814)) por @heziqiang

  - añadir opciones de formato de tiempo para datos de gráficos ([#7763](https://github.com/nocobase/nocobase/pull/7763)) por @heziqiang

  - añadir consejo para ejecutar la consulta antes de configurar las opciones del gráfico ([#7685](https://github.com/nocobase/nocobase/pull/7685)) por @heziqiang

  - refrescar los datos del gráfico al hacer clic en el botón de vista previa global ([#7678](https://github.com/nocobase/nocobase/pull/7678)) por @heziqiang

  - Actualizar plugin-data-vi 2.0, corregir algunos problemas y optimizar la UI. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) por @heziqiang

  - Expandir tipos de gráficos; Optimizar la UI y la experiencia interactiva. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) por @heziqiang

- **[Gestor de múltiples aplicaciones (obsoleto)]**
  - Se habilitó el inicio asíncrono para sub-aplicaciones usando una cola ([#7749](https://github.com/nocobase/nocobase/pull/7749)) por @2013xile

  - mejorar el supervisor de aplicaciones ([#7661](https://github.com/nocobase/nocobase/pull/7661)) por @chenos

- **[Gestor de fuentes de datos]** Ajustar el orden de las columnas de tipo de campo e interfaz, y añadir un paso de confirmación al realizar modificaciones. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) por @2013xile

- **[Multi-espacio]** usar api.storage para reemplazar localstorage, refactorización del control de permisos y corrección de errores por @jiannx

- **[Acción: Exportar registros Pro]** importar pro y exportar pro acción soportan control de permisos por @katherinehhh

- **[Telemetría: Prometheus]** Actualizar `@opentelemetry/exporter-prometheus` por @2013xile

- **[Campo de colección: Cifrado]** Plugin de cifrado de campos optimizado para soportar la recuperación de datos con IVs independientes por @cgyrock

- **[Flujo de trabajo: Aprobación]**
  - Actualizar `approval.data` a la última versión del registro de aprobación cuando finalice la ejecución, para que coincida con el modo de visualización "Último" registro por @mytharcher

  - Cambiar la API para obtener un solo elemento de aprobación y simplificar el código por @mytharcher

- **[Gestor de migraciones]** Se mejoraron las comprobaciones de migración, el soporte de descarga de SQL, el formato de registro y la visibilidad del proceso de ejecución por @cgyrock

### 🐛 Corrección de Errores

- **[sin definir]**
  - Corregir el problema de estilo incorrecto en la página de inicio de la documentación del plugin en modo oscuro. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) por @gchust

  - la coincidencia de la ruta de enrutamiento soporta nuevas aplicaciones múltiples ([#7570](https://github.com/nocobase/nocobase/pull/7570)) por @jiannx

  - Se corrigió un problema por el cual citar un bloque eliminaba el bloque citado de la página original. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) por @gchust

- **[cliente]**
  - corregir datos incorrectos en el diálogo de subdetalle del bloque de detalle ([#8318](https://github.com/nocobase/nocobase/pull/8318)) por @katherinehhh

  - Se corrigió un problema por el cual se producía un error al cerrar la ventana emergente actual después de abrir consecutivamente las ventanas emergentes de configuración de reglas de vinculación y flujo de eventos. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) por @gchust

  - Se corrigió un problema por el cual se producía un error al cerrar la ventana emergente actual después de abrir consecutivamente las ventanas emergentes de configuración de reglas de vinculación y flujo de eventos. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) por @gchust

  - Se corrigió un problema por el cual los cambios en la alternancia de edición rápida en los bloques de tabla requerían una actualización de la página para surtir efecto. ([#8311](https://github.com/nocobase/nocobase/pull/8311)) por @gchust

  - Corregir un problema por el cual los bloques que usan parámetros de consulta de URL como ámbitos de datos no se actualizaban correctamente cuando los parámetros de consulta cambiaban durante el cambio de menú. ([#8310](https://github.com/nocobase/nocobase/pull/8310)) por @gchust

  - corregir problemas de permisos en el componente de campo de asociación ([#8243](https://github.com/nocobase/nocobase/pull/8243)) por @katherinehhh

  - corregir que los datos de subdetalle no se actualicen al paginar el bloque de detalle ([#8305](https://github.com/nocobase/nocobase/pull/8305)) por @katherinehhh

  - corregir que el contenido de la subtabla anidada no se actualice al cambiar de página en el formulario de edición ([#8304](https://github.com/nocobase/nocobase/pull/8304)) por @katherinehhh

  - Corregir problema por el cual la ventana emergente no se puede abrir y mejorar la estabilidad de la navegación ([#8287](https://github.com/nocobase/nocobase/pull/8287)) por @zhangzhonghe

  - Corregir error al cambiar del componente Select al componente Array Subform ([#8301](https://github.com/nocobase/nocobase/pull/8301)) por @katherinehhh

  - No permitir añadir campos de asociación al bloque de formulario a través de JS Field. ([#8296](https://github.com/nocobase/nocobase/pull/8296)) por @gchust

  - Corregir un problema por el cual los datos se actualizaban varias veces después de la acción de actualización de registro. ([#8299](https://github.com/nocobase/nocobase/pull/8299)) por @gchust

  - Corregir problema por el cual los nuevos datos añadidos en el subformulario se sobrescriben con los datos seleccionados ([#8292](https://github.com/nocobase/nocobase/pull/8292)) por @katherinehhh

  - Corregir un problema por el cual el JS Item no se actualizaba después de editar un registro en el bloque de detalles. ([#8291](https://github.com/nocobase/nocobase/pull/8291)) por @gchust

  - Corregir un problema por el cual los registros recién añadidos no se actualizaban en la ventana emergente del componente de campo selector de datos. ([#8289](https://github.com/nocobase/nocobase/pull/8289)) por @gchust

  - Se corrigió el error de renderizado para el bloque JS en estado oculto. ([#8286](https://github.com/nocobase/nocobase/pull/8286)) por @gchust

  - Corregir el problema por el cual se lanza un error en la configuración del bloque de formulario de filtro del campo m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) por @mytharcher

  - Corregir el problema por el cual se lanza un error en la configuración del bloque de formulario de filtro del campo m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) por @mytharcher

  - corregir la prevención de errores de bloque después de que se elimine un campo de asociación ([#8273](https://github.com/nocobase/nocobase/pull/8273)) por @katherinehhh

  - Corregir que los valores predeterminados del formulario de filtro no activen el filtro en la representación inicial ([#8232](https://github.com/nocobase/nocobase/pull/8232)) por @zhangzhonghe

  - Corregir el desbordamiento de pila causado por un bucle infinito en la carga diferida de campos de asociación de visualización ([#8262](https://github.com/nocobase/nocobase/pull/8262)) por @zhangzhonghe

  - Manejar reglas de vinculación vacías para prevenir errores ([#8239](https://github.com/nocobase/nocobase/pull/8239)) por @zhangzhonghe

  - Se corrigió el problema por el cual la columna de operación del bloque de tabla no se podía eliminar. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) por @gchust

  - Se corrigió el problema por el cual la ejecución de vista previa escribía la salida JSX compilada de vuelta a stepParams, causando que el código fuente guardado se reescribiera. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) por @gchust

  - Corregir error de carga de archivos adjuntos S3 Pro y mejorar la vista previa de archivos ([#8211](https://github.com/nocobase/nocobase/pull/8211)) por @katherinehhh

  - Prevenir el desbordamiento del ancho total de la fila durante el redimensionamiento de columnas ([#8166](https://github.com/nocobase/nocobase/pull/8166)) por @zhangzhonghe

  - Corregir un problema por el cual seleccionar "No" para un filtro de casilla de verificación aún aplicaba el filtro "Sí". ([#8170](https://github.com/nocobase/nocobase/pull/8170)) por @gchust

  - corregir que el botón de envío no se muestre en el formulario de creación cuando el rol tiene permiso de creación ([#8190](https://github.com/nocobase/nocobase/pull/8190)) por @katherinehhh

  - evitar que los datos existentes de subtabla/subformulario se borren al enviar sin seleccionar ningún elemento ([#8172](https://github.com/nocobase/nocobase/pull/8172)) por @katherinehhh

  - evitar que la configuración del ámbito de datos aparezca en la configuración del formulario de creación ([#8176](https://github.com/nocobase/nocobase/pull/8176)) por @katherinehhh

  - Corregir problema de renderizado del campo tableoid en el bloque de formulario ([#8177](https://github.com/nocobase/nocobase/pull/8177)) por @katherinehhh

  - Error al guardar el flujo de eventos de la pestaña ([#8168](https://github.com/nocobase/nocobase/pull/8168)) por @chenos

  - eliminar el espacio adicional después de ocultar la pestaña ([#8167](https://github.com/nocobase/nocobase/pull/8167)) por @chenos

  - corregir el filtrado incorrecto de opciones seleccionadas en el selector de registros de asociación ([#8151](https://github.com/nocobase/nocobase/pull/8151)) por @katherinehhh

  - corregir que el desplegable del campo de asociación esté deshabilitado cuando existe el campo de opciones ([#8153](https://github.com/nocobase/nocobase/pull/8153)) por @katherinehhh

  - Se corrigió un problema por el cual cambiar los campos de etiqueta causaba la pérdida de las configuraciones emergentes. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) por @gchust

  - Se corrigió un problema por el cual al introducir texto en chino se limpiaban las opciones existentes al usar operadores de selección múltiple en un campo de selección única en el bloque de formulario de filtro. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) por @gchust

  - Corregir el problema por el cual el componente `RemoteSelect` cargaba incorrectamente el registro cuando el valor es nulo ([#8137](https://github.com/nocobase/nocobase/pull/8137)) por @mytharcher

  - corregir la prevención del estado deshabilitado del hijo para que no bloquee la selección del campo de relación ([#8131](https://github.com/nocobase/nocobase/pull/8131)) por @katherinehhh

  - Se corrigió un problema por el cual las etiquetas de campo predeterminadas en el bloque de formulario de filtro no se podían traducir correctamente en varios idiomas. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) por @gchust

  - Se corrigió un problema por el cual el ancho del componente UI era inconsistente al seleccionar "Pasado" o "Siguiente" para los campos de filtro de fecha. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) por @gchust

  - Se corrigió un problema por el cual los estilos de título y descripción del bloque JS eran inconsistentes con otros bloques. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) por @gchust

  - corregir problema de salto de línea en la información sobre herramientas del campo de texto largo ([#8122](https://github.com/nocobase/nocobase/pull/8122)) por @katherinehhh

  - Se corrigió un problema por el cual las opciones seleccionables no se listaban completamente al usar los operadores "es cualquiera de" o "no es ninguno de" para el filtrado de campos basados en opciones. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) por @gchust

  - corregir que la subtabla anidada en el subformulario no muestre datos ([#8117](https://github.com/nocobase/nocobase/pull/8117)) por @katherinehhh

  - Se corrigió un problema por el cual al limpiar los valores del filtro de tiempo entre y activar el filtro nuevamente se producía un error. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) por @gchust

  - Se corrigió un problema por el cual los datos seleccionables para los campos de asociación en el bloque de formulario de filtro eran incorrectos. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) por @gchust

  - Se corrigió un problema por el cual las configuraciones de campos personalizados en el formulario de filtro no se rellenaban previamente correctamente y algunas configuraciones no surtían efecto. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) por @gchust

  - Se corrigió un problema por el cual el filtrado en campos de Casilla de verificación no surtía efecto. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) por @gchust

  - Se corrigió un problema por el cual el valor del campo numérico no se rellenaba previamente correctamente en la acción de filtro. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) por @gchust

  - Se corrigió un problema por el cual algunos operadores de campo en los formularios de filtro no filtraban los datos correctamente. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) por @gchust

  - Se corrigió un problema por el cual los campos configurados de un bloque eliminado no se eliminaban del bloque de filtro. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) por @gchust

  - corregir el espacio extra cuando el botón está oculto en el modo de no configuración ([#8092](https://github.com/nocobase/nocobase/pull/8092)) por @katherinehhh

  - Se corrigió un problema por el cual el texto del botón de restablecimiento en el bloque de formulario de filtro no se podía modificar. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) por @gchust

  - Se corrigió un problema por el cual la entrada de campo no soportaba múltiples valores al usar los operadores $in o $notIn para filtrar campos. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) por @gchust

  - Se corrigió un problema por el cual los bloques de datos recién añadidos no aparecían automáticamente en el menú de campos del bloque de formulario de filtro. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) por @gchust

  - El menú de configuración para campos de asociación en formularios de filtro no debería mostrar la opción de creación rápida. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) por @gchust

  - corregir problema de datos de subtabla de asociación en el bloque Lista ([#8082](https://github.com/nocobase/nocobase/pull/8082)) por @katherinehhh

  - corregir que las reglas de validación de campos numéricos de la configuración de la colección no se aplican ([#8025](https://github.com/nocobase/nocobase/pull/8025)) por @katherinehhh

  - Se corrigió un problema por el cual los campos en los formularios de filtro estaban restringidos por las reglas de validación del backend para los campos. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) por @gchust

  - corregir problema de visualización de campos grandes en la edición de subtabla ([#8069](https://github.com/nocobase/nocobase/pull/8069)) por @katherinehhh

  - corregir que la creación rápida lanza un error cuando allowMultiple está deshabilitado en el selector de registros de asociación ([#8034](https://github.com/nocobase/nocobase/pull/8034)) por @katherinehhh

  - problema de edición rápida de campo json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) por @katherinehhh

  - corregir que el campo json debe enviarse como un objeto ([#8057](https://github.com/nocobase/nocobase/pull/8057)) por @katherinehhh

  - Se corrigió un problema por el cual la tecla Enter no se podía usar para activar la acción de filtro. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) por @gchust

  - Corregir problema por el cual se muestra N/A después de deshabilitar allowMultiple en el selector de registros de asociación muchos-a-muchos ([#8050](https://github.com/nocobase/nocobase/pull/8050)) por @katherinehhh

  - Corregir error al eliminar registro en el bloque selector de registros ([#8023](https://github.com/nocobase/nocobase/pull/8023)) por @katherinehhh

  - Se corrigió un problema por el cual aparecía el menú de registro actual al añadir un bloque de comentarios. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) por @gchust

  - Se corrigió un problema por el cual cambiar un campo de fecha a un campo de hora en la acción de filtro causaba un error de renderizado. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) por @gchust

  - Se corrigió un problema por el cual los títulos predeterminados de las ventanas emergentes de acción de editar y crear nuevo eran incorrectos. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) por @gchust

  - Se corrigió un problema por el cual el estilo predeterminado del campo JS en el bloque de detalle era incorrecto. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) por @gchust

  - corregir que el ancho de columna de la subtabla no se aplica ([#8027](https://github.com/nocobase/nocobase/pull/8027)) por @katherinehhh

  - corregir que el arrastre de columna de la subtabla no funciona ([#8026](https://github.com/nocobase/nocobase/pull/8026)) por @katherinehhh

  - Se corrigió un problema por el cual la variable de registro emergente actual no se podía resolver correctamente en la ventana emergente abierta por un campo de asociación. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) por @gchust

  - corregir problema de estilo de la ventana emergente del campo de visualización markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) por @katherinehhh

  - Se resolvió un problema que causaba errores al cargar datos para campos de asociación en ventanas emergentes, asegurando una visualización y funcionalidad de datos más fluidas. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) por @gchust

  - corregir que el bloque de tabla de árbol no puede expandir nodos hijos ([#8011](https://github.com/nocobase/nocobase/pull/8011)) por @katherinehhh

  - Corregir problemas de selección y eliminación de bloques de tabla para claves compuestas ([#7978](https://github.com/nocobase/nocobase/pull/7978)) por @katherinehhh

  - Corregir el problema por el cual el estado de la pestaña de la página y la ruta no se corresponden ([#7991](https://github.com/nocobase/nocobase/pull/7991)) por @zhangzhonghe

  - corregir problema de visualización cuando el campo markdown está truncado con puntos suspensivos en modo HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) por @katherinehhh

  - corregir resultados de búsqueda incompletos en el selector en cascada ([#7990](https://github.com/nocobase/nocobase/pull/7990)) por @katherinehhh

  - Se corrigió un problema por el cual abrir el bloque de detalle en la ventana emergente para campos de relación sin ID causaba un error. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) por @gchust

  - Se corrigió un problema por el cual los datos de asociación no se cargaban correctamente en la ventana emergente para campos de relación sin ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) por @gchust

  - corregir problema con la configuración de precisión no válida para el formato de campo numérico ([#7967](https://github.com/nocobase/nocobase/pull/7967)) por @katherinehhh

  - corregir el problema por el cual el valor del filtro no se limpia al hacer clic en el botón Restablecer ([#7966](https://github.com/nocobase/nocobase/pull/7966)) por @zhangzhonghe

  - Corregir el error de escritura en la nueva página 2.0 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) por @zhangzhonghe

  - corregir el ajuste automático de líneas de campos de texto en el bloque de detalle cuando el contenido supera el ancho ([#7955](https://github.com/nocobase/nocobase/pull/7955)) por @katherinehhh

  - corregir error lanzado al limpiar el valor en cascada multinivel ([#7943](https://github.com/nocobase/nocobase/pull/7943)) por @katherinehhh

  - eliminar la acción de tabla de árbol del bloque de colección no arbórea ([#7931](https://github.com/nocobase/nocobase/pull/7931)) por @katherinehhh

  - Se corrigió un problema por el cual el título y la descripción no se mostraban en el bloque JS. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) por @gchust

  - Se corrigió el problema por el cual los bloques ocultos aún ocupaban espacio en la página. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) por @gchust

  - Corregir el problema por el cual el botón de restablecimiento en el botón de filtro limpia las condiciones predeterminadas ([#7903](https://github.com/nocobase/nocobase/pull/7903)) por @zhangzhonghe

  - corregir la comprobación de permisos incorrecta para campos de subformulario en nuevos formularios ([#7902](https://github.com/nocobase/nocobase/pull/7902)) por @katherinehhh

  - corregir problemas en la configuración de elementos de formulario ([#7867](https://github.com/nocobase/nocobase/pull/7867)) por @katherinehhh

  - Corregir problema por el cual el campo de texto enriquecido no puede ingresar un valor predeterminado y el campo de selección múltiple no puede seleccionar múltiples opciones como valor predeterminado. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) por @gchust

  - Se corrigió el problema de que la configuración predeterminada del campo JS no usaba la configuración del modo de visualización. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) por @gchust

  - Se corrigió el problema de no poder establecer el valor predeterminado del campo de fecha en el modelo de bloque de formulario de filtro. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) por @gchust

  - Se corrigió el problema de que las operaciones de edición rápida en el bloque de tabla no actualizan los datos correctamente. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) por @gchust

  - Se corrigieron los errores al previsualizar código en el editor de código si el código contiene sintaxis jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) por @gchust

  - Se corrigió un problema por el cual las reglas de vinculación para los botones de acción de fila en un bloque de tabla no se volvían a ejecutar después de que los datos de la fila se actualizaran, asegurando que las reglas ahora se reapliquen correctamente cuando ocurren cambios. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) por @gchust

  - Corregir el error 'value.replace is not a function' en el campo de relación del formulario de filtro ([#7824](https://github.com/nocobase/nocobase/pull/7824)) por @zhangzhonghe

  - la variable de colección actual no debería ser seleccionable desde el selector de variables del componente de filtro ([#7818](https://github.com/nocobase/nocobase/pull/7818)) por @gchust

  - Corregir parámetros incorrectos en la devolución de llamada onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) por @zhangzhonghe

  - no se puede ocultar la columna de acciones del bloque de tabla ([#7804](https://github.com/nocobase/nocobase/pull/7804)) por @gchust

  - Corregir que el campo selector de colección no puede seleccionar la colección correctamente ([#7794](https://github.com/nocobase/nocobase/pull/7794)) por @katherinehhh

  - soporte para seleccionar el objeto de variable completo en el mensaje del empleado AI ([#7791](https://github.com/nocobase/nocobase/pull/7791)) por @gchust

  - corregir que el ancho de la acción de tabla y jsColumn no se aplica ([#7777](https://github.com/nocobase/nocobase/pull/7777)) por @katherinehhh

  - el ámbito de datos del bloque no funciona si se establece mediante el flujo de eventos de la página ([#7788](https://github.com/nocobase/nocobase/pull/7788)) por @gchust

  - corregir que los puntos suspensivos del campo de título de asociación no se aplican ([#7778](https://github.com/nocobase/nocobase/pull/7778)) por @katherinehhh

  - la regla de vinculación de la acción de actualización de registro no funciona ([#7774](https://github.com/nocobase/nocobase/pull/7774)) por @gchust

  - Corregir error de validación de campo obligatorio para el campo Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) por @katherinehhh

  - Se corrigió un problema por el cual las etiquetas de tipos enumerados en los componentes relacionados con variables no se mostraban en el idioma correcto. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) por @gchust

  - Corregir la falta del indicador de campo obligatorio después de establecer la validación del frontend ([#7760](https://github.com/nocobase/nocobase/pull/7760)) por @katherinehhh

  - Añadir configuración de ámbito de datos para campos de relación en formularios de filtro ([#7761](https://github.com/nocobase/nocobase/pull/7761)) por @zhangzhonghe

  - corregir problema al limpiar la fecha sin zona horaria en el formulario de edición ([#7759](https://github.com/nocobase/nocobase/pull/7759)) por @katherinehhh

  - Corregir la validación de campo obligatorio para las reglas de vinculación ([#7756](https://github.com/nocobase/nocobase/pull/7756)) por @zhangzhonghe

  - corregir problema de formato de hora en campos de subtabla ([#7750](https://github.com/nocobase/nocobase/pull/7750)) por @katherinehhh

  - resolver problema de Fecha Inválida al eliminar una Fecha Especificada en el filtro... ([#7746](https://github.com/nocobase/nocobase/pull/7746)) por @katherinehhh

  - no se pueden cargar los campos de la variable del formulario actual ([#7745](https://github.com/nocobase/nocobase/pull/7745)) por @gchust

  - Se resolvió un problema por el cual asignar un array como valor o valor predeterminado a un campo "toOne" resultaba en un error. Esto asegura un manejo adecuado de los resultados de resolución de variables, mejorando la estabilidad y precisión del sistema. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) por @gchust

  - Se resolvió un problema por el cual la variable de campo de asociación en el formulario actual no se podía identificar correctamente, asegurando un procesamiento de datos preciso en los formularios. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) por @gchust

  - Se corrigió un problema por el cual los campos no filtrables se listaban incorrectamente en las opciones de filtro, asegurando que solo aparezcan los campos aplicables para la selección. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) por @gchust

  - resolver problema de UI al eliminar un campo de asociación en la colección ([#7706](https://github.com/nocobase/nocobase/pull/7706)) por @katherinehhh

  - Corregir problemas conocidos con las reglas de vinculación de subformularios ([#7698](https://github.com/nocobase/nocobase/pull/7698)) por @zhangzhonghe

  - el menú de campos del bloque js no se puede cargar en el bloque de formulario de filtro ([#7690](https://github.com/nocobase/nocobase/pull/7690)) por @gchust

  - Se resolvió un problema por el cual los usuarios no podían establecer valores predeterminados para los campos mostrados en modo de solo lectura. Esto asegura una configuración de campo más fluida cuando los campos no son editables. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) por @gchust

  - Se corrigió un problema por el cual la URL no se actualizaba correctamente después de cambiar de pestaña dentro de una ventana emergente, reabrir una ventana emergente anidada y luego cerrar todas las ventanas emergentes. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) por @gchust

  - manejar la falta de contexto en usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) por @chenos

  - Corregir problemas de visualización anormal de la página al cambiar la paginación de la tabla ([#7572](https://github.com/nocobase/nocobase/pull/7572)) por @zhangzhonghe

  - No se puede configurar el valor del campo de asignación para las acciones `Actualizar` y `Actualización masiva` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) por @gchust

  - Corregir el problema de no actualizar los datos después de enviar el formulario ([#7560](https://github.com/nocobase/nocobase/pull/7560)) por @zhangzhonghe

  - Se corrigió un problema por el cual la acción "Ejecutar" en el editor de código no funcionaba, asegurando que los usuarios ahora puedan ejecutar el código correctamente. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) por @gchust

- **[motor-de-flujo]**
  - Corregir el problema por el cual el menú desplegable del selector de campos de colección en la acción de filtro tenía una altura insuficiente. ([#8288](https://github.com/nocobase/nocobase/pull/8288)) por @gchust

  - Corregir que el contenido de la pestaña emergente no se muestre ([#8281](https://github.com/nocobase/nocobase/pull/8281)) por @zhangzhonghe

  - Corregir problema de desmontaje y re-renderizado de la página al abrir una subpágina ([#8276](https://github.com/nocobase/nocobase/pull/8276)) por @zhangzhonghe

  - corregir problema de comprobación de permisos para añadir registros hijos en tabla de árbol ([#8240](https://github.com/nocobase/nocobase/pull/8240)) por @katherinehhh

  - Se corrigió un problema por el cual algunas variables relacionadas con registros emergentes de bloques se mostraban incorrectamente. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) por @gchust

  - Se corrigió el problema por el cual las acciones o pestañas añadidas después de arrastrar acciones o pestañas no se muestran. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) por @gchust

  - problema de comprobación de permisos en fuentes de datos externas ([#8221](https://github.com/nocobase/nocobase/pull/8221)) por @katherinehhh

  - corregir que las acciones de fuentes de datos externas se oculten a pesar de tener permiso ([#8217](https://github.com/nocobase/nocobase/pull/8217)) por @katherinehhh

  - Corregir el problema por el cual enviar el formulario en un modal reutilizado a través del uid emergente no actualiza los datos del bloque. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) por @gchust

  - Corregir descarga de archivos incorrecta para archivos adjuntos ([#8154](https://github.com/nocobase/nocobase/pull/8154)) por @katherinehhh

  - corrección: conversión incorrecta al usar tipo entero como opciones de enumeración ([#8138](https://github.com/nocobase/nocobase/pull/8138)) por @chenos

  - Corregir elementos de menú de submodelo conmutables que fallan cuando se omite `useModel` infiriéndolo de `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) por @zhangzhonghe

  - Se corrigió un problema por el cual las opciones de configuración del componente anterior permanecían visibles en el menú después de cambiar los componentes de campo. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) por @gchust

  - Mover useEffect antes del retorno condicional en FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) por @zhangzhonghe

  - Se corrigió un problema por el cual aparecían campos de asociación no soportados en los campos de operación de filtro. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) por @gchust

  - corregir que el registro de comentarios no se guarda después de editar ([#8035](https://github.com/nocobase/nocobase/pull/8035)) por @katherinehhh

  - Se corrigió un problema por el cual los bloques de datos no se actualizaban al cerrar una ventana emergente haciendo clic en el botón de envío del formulario dentro de la ventana emergente. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) por @gchust

  - Se corrigió un problema por el cual la variable de registro actual no se podía activar correctamente para su resolución en el bloque de detalles. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) por @gchust

  - Corregir el problema de visualización desalineada de los iconos de la barra de herramientas en el botón del bloque de detalles ([#7929](https://github.com/nocobase/nocobase/pull/7929)) por @zhangzhonghe

  - Se corrigió el problema por el cual abrir el formulario de edición rápida del bloque de tabla causaba un error. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) por @gchust

  - Se corrigió el problema por el cual los datos de permiso ACL no se recargan después de cerrar sesión e iniciar sesión. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) por @gchust

  - Corregir el problema por el cual los cambios en el flujo de eventos solo surtían efecto después de actualizar la página. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) por @gchust

  - Se corrigió un problema por el cual las variables en los campos de asociación de subformularios no se resolvían correctamente cuando el campo se modificaba a través de la interfaz de usuario. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) por @gchust

  - error en el formulario de edición para registros con múltiples claves primarias ([#7798](https://github.com/nocobase/nocobase/pull/7798)) por @gchust

  - Se corrigió un problema por el cual ciertas configuraciones para la acción "Abrir vista" no se aplicaban, asegurando que la acción ahora funcione según lo previsto para todas las configuraciones especificadas. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) por @gchust

  - Se corrigió un problema por el cual los botones de acción en el bloque de tabla no se actualizaban correctamente después de cambiar de página, asegurando que su funcionalidad coincida con los datos de la página actual. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) por @gchust

  - cuando el valor del filtro de campo se establece en falso, la solicitud con ámbito de datos es incorrecta ([#7766](https://github.com/nocobase/nocobase/pull/7766)) por @gchust

  - corrección: resolver problema de parámetros de solicitud de página después de eliminar datos en la última página ([#7755](https://github.com/nocobase/nocobase/pull/7755)) por @katherinehhh

  - no se puede resolver el valor del campo de asociación de la variable de objeto actual del subformulario ([#7751](https://github.com/nocobase/nocobase/pull/7751)) por @gchust

  - los pasos del flujo de eventos no deberían mostrarse en los menús de configuración ([#7723](https://github.com/nocobase/nocobase/pull/7723)) por @gchust

  - selección de contexto incorrecta del registro emergente actual al editar el ámbito de datos de un campo asociado dentro de un formulario de edición ([#7675](https://github.com/nocobase/nocobase/pull/7675)) por @gchust

  - Se resolvió un problema por el cual las acciones de flujo definidas por un modelo de flujo no se podían configurar, asegurando que los usuarios ahora puedan personalizar las acciones de flujo según lo previsto. ([#7666](https://github.com/nocobase/nocobase/pull/7666)) por @gchust

  - Se corrigió un error al copiar o pegar fragmentos de código en el editor de código JS. ([#7641](https://github.com/nocobase/nocobase/pull/7641)) por @gchust

  - Corregir el problema de que la traducción no surta efecto en los componentes antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) por @zhangzhonghe

  - no se puede obtener el contexto de vista actual en el bloque de referencia ([#7620](https://github.com/nocobase/nocobase/pull/7620)) por @gchust

- **[base de datos]**
  - Incluir el ámbito de la tabla intermedia al consultar relaciones m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) por @2013xile

  - Incluir el ámbito de la tabla intermedia al consultar relaciones m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) por @2013xile

  - Corregir inconsistencia en la consulta de campos de fecha entre la fuente de datos principal y las externas ([#8181](https://github.com/nocobase/nocobase/pull/8181)) por @cgyrock

  - `filterByTk` ahora soporta arrays al consultar colecciones con múltiples claves de destino de filtro ([#7986](https://github.com/nocobase/nocobase/pull/7986)) por @chenos

  - Establecer el `search_path` antes de ejecutar sentencias SQL usando el método `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) por @2013xile

- **[cli]** license-kit es compatible con el caso en que DB_PASSWORD está vacío ([#8220](https://github.com/nocobase/nocobase/pull/8220)) por @jiannx

- **[servidor]**
  - Soporte para campos de ID Snowflake (53 bits) para fuentes de datos externas ([#8185](https://github.com/nocobase/nocobase/pull/8185)) por @2013xile

  - Actualizar license-kit a la última versión ([#8173](https://github.com/nocobase/nocobase/pull/8173)) por @jiannx

  - Preservar field.targetKey al copiar campos de referencia ([#7599](https://github.com/nocobase/nocobase/pull/7599)) por @chenos

  - Error de migración de clave primaria ([#7563](https://github.com/nocobase/nocobase/pull/7563)) por @2013xile

- **[acl]**
  - Corregir el problema por el cual la API `acl.can` devuelve `null` cuando el rol es `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) por @mytharcher

  - corrección: acl.allow se ejecutó demasiado pronto ([#8065](https://github.com/nocobase/nocobase/pull/8065)) por @chenos

- **[utilidades]**
  - Corregir el error "Invalid filter item type" en el botón de filtro ([#7838](https://github.com/nocobase/nocobase/pull/7838)) por @zhangzhonghe

  - Corregir el error 'Unrecognized operation' en el flujo de eventos ([#7835](https://github.com/nocobase/nocobase/pull/7835)) por @zhangzhonghe

- **[Acción: Actualización masiva]** Se corrigió el error en la acción de actualización masiva para fuentes de datos externas. ([#8320](https://github.com/nocobase/nocobase/pull/8320)) por @gchust

- **[Visualización de datos]**
  - Corregir problema sobre la visualización de etiquetas de gráficos circulares AI, normalizar la opción para gráficos circulares basados en conjuntos de datos.<br/> Restringir el campo de orden del gráfico solo a los campos seleccionados. ([#8309](https://github.com/nocobase/nocobase/pull/8309)) por @heziqiang

  - Resolver problema sobre el modo SQL seleccionar fuente de datos externa; <br/>Resolver problema sobre el estado de carga del bloque de gráficos durante la obtención de datos; <br/> Resolver problema sobre el bloque de gráficos vacío cancelar configuración; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) por @heziqiang

  - Corregir problema por el cual el bloque de gráficos no se actualiza después de guardar ([#7920](https://github.com/nocobase/nocobase/pull/7920)) por @heziqiang

  - Usar el modo de depuración del recurso sql solo durante la vista previa del gráfico ([#7893](https://github.com/nocobase/nocobase/pull/7893)) por @heziqiang

  - usar la API sql:runById para obtener datos de consulta en la inicialización ([#7677](https://github.com/nocobase/nocobase/pull/7677)) por @heziqiang

  - corregir problema de consulta SQL al analizar variables ([#7642](https://github.com/nocobase/nocobase/pull/7642)) por @heziqiang

  - corregir el parámetro de órdenes faltante en la consulta de datos del gráfico ([#7636](https://github.com/nocobase/nocobase/pull/7636)) por @heziqiang

  - Corregir el problema por el cual el gráfico no se puede mostrar debido al tiempo de espera del registro de eventos ([#7608](https://github.com/nocobase/nocobase/pull/7608)) por @heziqiang

- **[Acción: Importar registros]**
  - Verificación de espacio al importar archivos ([#8285](https://github.com/nocobase/nocobase/pull/8285)) por @jiannx

  - Corregir el problema por el cual el índice de fila en el mensaje de error es siempre 1 cuando se lanza un error en la acción de importación ([#8244](https://github.com/nocobase/nocobase/pull/8244)) por @mytharcher

  - Esperar sincrónicamente a que finalicen los eventos `afterCreate` activados por la importación. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) por @2013xile

  - resolver problema con la visualización de la lista de campos en campos importables ([#7710](https://github.com/nocobase/nocobase/pull/7710)) por @katherinehhh

- **[Gestor de archivos]**
  - Corregir el problema por el cual se lanza un error al subir un archivo de más de 5MB a AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) por @mytharcher

  - Corregir el problema por el cual la vista previa de un archivo `.txt` en OSS obtenía una codificación incorrecta ([#8161](https://github.com/nocobase/nocobase/pull/8161)) por @mytharcher

  - Corregir la visualización incorrecta de datos de subdetalle en bloques de Lista y GridCard ([#8087](https://github.com/nocobase/nocobase/pull/8087)) por @katherinehhh

  - Corregir que el campo de archivo adjunto no se muestre correctamente en readPretty subtabla ([#8073](https://github.com/nocobase/nocobase/pull/8073)) por @katherinehhh

  - corregir la subida de archivos al almacenamiento especificado en lugar del almacenamiento predeterminado ([#7947](https://github.com/nocobase/nocobase/pull/7947)) por @katherinehhh

  - corregir problemas de configuración de campos de bloque de tabla ([#7843](https://github.com/nocobase/nocobase/pull/7843)) por @katherinehhh

- **[Gestor de tareas asíncronas]**
  - Corregir el idioma al cancelar una tarea en segundo plano ([#8245](https://github.com/nocobase/nocobase/pull/8245)) por @mytharcher

  - Corregir el idioma al cancelar una tarea en segundo plano ([#8245](https://github.com/nocobase/nocobase/pull/8245)) por @mytharcher

- **[Flujo de trabajo]**
  - Se corrigió que los eventos de la base de datos se volvieran inválidos después de actualizar la fuente de datos externa ([#8207](https://github.com/nocobase/nocobase/pull/8207)) por @cgyrock

  - Se corrigió que los eventos de la base de datos se volvieran inválidos después de actualizar la fuente de datos externa ([#8207](https://github.com/nocobase/nocobase/pull/8207)) por @cgyrock

  - Corregir el problema por el cual se lanza un error al eliminar una versión del flujo de trabajo que no es la actual ([#8203](https://github.com/nocobase/nocobase/pull/8203)) por @mytharcher

  - Corregir el problema por el cual solo se muestra un registro en la lista de registros para ejecutar manualmente ([#8187](https://github.com/nocobase/nocobase/pull/8187)) por @mytharcher

  - Corregir el problema por el cual añadir un flujo de trabajo en la configuración del botón de flujo de trabajo vinculado causaba que la aplicación se congelara después de hacer clic ([#7541](https://github.com/nocobase/nocobase/pull/7541)) por @mytharcher

- **[Plantillas de UI]**
  - Corregir un problema por el cual algunas ventanas emergentes heredadas no se podían reutilizar correctamente después de convertirse en plantillas. ([#8283](https://github.com/nocobase/nocobase/pull/8283)) por @gchust

  - Corregir un problema por el cual las plantillas de campo no podían aplicar reglas de vinculación y diseño de formulario. ([#8266](https://github.com/nocobase/nocobase/pull/8266)) por @gchust

  - Corregir un error por el cual abrir una ventana emergente de campo de asociación usaba incorrectamente una plantilla de ventana emergente de campo no asociado. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) por @gchust

- **[Colección: Árbol]** Actualizar rutas después de crear nodos de colección de árbol de forma masiva ([#8267](https://github.com/nocobase/nocobase/pull/8267)) por @2013xile

- **[Empleados AI]**
  - Resolver problema por el cual el contenido del mensaje del nodo llm no se mostraba ([#8257](https://github.com/nocobase/nocobase/pull/8257)) por @heziqiang

  - Resolver problema sobre el salto de línea del mensaje AI ([#8096](https://github.com/nocobase/nocobase/pull/8096)) por @heziqiang

  - Resolver problema por el cual el nombre del rol de la fuente de datos no se compilaba ([#8076](https://github.com/nocobase/nocobase/pull/8076)) por @heziqiang

  - Se corrigió un problema por el cual algunos campos de registro actual no se podían mostrar en el componente de selección de variables. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) por @gchust

  - Corregir problema cuando AI genera salida SQL ([#7956](https://github.com/nocobase/nocobase/pull/7956)) por @heziqiang

  - Ocultar el botón de chat del empleado AI en páginas v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) por @cgyrock

  - Se optimizó el comportamiento de búsqueda web y las sugerencias de usuario para Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) por @cgyrock

  - Se corrigió un problema por el cual los bloques con recursos API asociados no obtenían los datos correspondientes cuando se seleccionaban. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) por @cgyrock

  - corregir problema de diseño del cuadro de chat en diseño móvil ([#7591](https://github.com/nocobase/nocobase/pull/7591)) por @cgyrock

  - Corregir errores en la herramienta de modelado de datos del empleado AI al usar ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) por @cgyrock

  - Corregir el error en la página de configuración de permisos del empleado AI ([#7548](https://github.com/nocobase/nocobase/pull/7548)) por @2013xile

- **[Flujo de trabajo: Nodo manual]**
  - Corregir el problema por el cual se lanza un error al cancelar la ejecución de un flujo de trabajo eliminado ([#8258](https://github.com/nocobase/nocobase/pull/8258)) por @mytharcher

  - Corregir el problema de que la lista de tareas pendientes manuales usa una API incorrecta ([#8144](https://github.com/nocobase/nocobase/pull/8144)) por @mytharcher

- **[Campo de colección: Secuencia]**
  - Se corrigió un error cuando el comando de reparación de campo-secuencia encuentra una colección inexistente en el entorno actual. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) por @cgyrock

  - Mejorar la robustez del plugin-field-sequence al manejar el comando de reparación ([#8139](https://github.com/nocobase/nocobase/pull/8139)) por @cgyrock

- **[Departamentos]** Corregir un problema por el cual la búsqueda agregada no puede localizar usuarios ([#8222](https://github.com/nocobase/nocobase/pull/8222)) por @2013xile

- **[Campo de colección: Muchos a muchos (array)]** Corregir un problema por el cual los campos muchos-a-muchos (array) no se pueden crear cuando el tipo de clave de destino es ID Snowflake (53 bits) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) por @2013xile

- **[Configuración de licencia]**
  - Corregir la visualización anormal del plugin con licencia ([#8214](https://github.com/nocobase/nocobase/pull/8214)) por @jiannx

  - corregir la excepción de compilación ts de plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) por @jiannx

  - optimización de licencia y adición de información de aviso ([#7993](https://github.com/nocobase/nocobase/pull/7993)) por @jiannx

- **[Campo de colección: Fórmula]**
  - Corregir problema por el cual los campos BigInt no se pueden añadir a los bloques de Detalle y Formulario ([#8201](https://github.com/nocobase/nocobase/pull/8201)) por @katherinehhh

  - Se corrigió un problema por el cual los campos de fórmula en la acción de filtro y el bloque de formulario de filtro no podían escribir valores de entrada. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) por @gchust

  - Se corrigió un problema por el cual los campos de fórmula no se podían añadir al bloque de formulario de filtro. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) por @gchust

- **[Bloque: Mapa]** corregir el nivel de zoom del mapa incorrecto después del cambio de menú ([#8193](https://github.com/nocobase/nocobase/pull/8193)) por @katherinehhh

- **[Notificación: Correo electrónico]** corregir la limitación de conexión de notificación por correo electrónico ([#8119](https://github.com/nocobase/nocobase/pull/8119)) por @jiannx

- **[Bloque: Panel de acciones]** optimizar el estilo en el diseño de Lista del bloque de panel de acciones ([#8084](https://github.com/nocobase/nocobase/pull/8084)) por @katherinehhh

- **[Gestor de fuentes de datos]** Corregir errores al actualizar contraseñas para fuentes de datos externas ([#8024](https://github.com/nocobase/nocobase/pull/8024)) por @cgyrock

- **[Acción: Exportar registros]**
  - corregir la falta de campos del sistema en la lista de campos exportables ([#8002](https://github.com/nocobase/nocobase/pull/8002)) por @katherinehhh

  - resolver problema con la visualización de la lista de campos exportables en la acción de exportación ([#7714](https://github.com/nocobase/nocobase/pull/7714)) por @katherinehhh

- **[Motor de flujo]**
  - Asegurar que las variables de registro siempre devuelvan registros completos cuando se usen junto con sus campos individuales. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) por @gchust

  - no poder resolver variables en la acción de campos de conjunto de vinculación ([#7684](https://github.com/nocobase/nocobase/pull/7684)) por @gchust

  - Se corrigió la resolución incorrecta de la variable de registro de la ventana emergente principal. ([#7637](https://github.com/nocobase/nocobase/pull/7637)) por @gchust

- **[Gestor de múltiples aplicaciones (obsoleto)]**
  - Después de que una sub-aplicación se detiene, publicar un mensaje de sincronización para notificar a otros nodos que detengan la sub-aplicación correspondiente ([#7849](https://github.com/nocobase/nocobase/pull/7849)) por @2013xile

  - Colección incorrecta para la métrica de estado de la sub-aplicación ([#7772](https://github.com/nocobase/nocobase/pull/7772)) por @2013xile

  - Corregir la imposibilidad de deshabilitar el antiguo multi-app-manager ([#7633](https://github.com/nocobase/nocobase/pull/7633)) por @jiannx

  - Corregir la validación del puerto antes de la migración de datos de múltiples aplicaciones ([#7540](https://github.com/nocobase/nocobase/pull/7540)) por @jiannx

- **[Bloque: GridCard]** corregir problema de duplicación de datos entre el bloque de lista y tarjeta de cuadrícula ([#7773](https://github.com/nocobase/nocobase/pull/7773)) por @katherinehhh

- **[Bloque: plantilla (obsoleto)]** Se corrigió un problema por el cual se activaban solicitudes innecesarias para plantillas de bloque al abrir o cerrar modales ([#7561](https://github.com/nocobase/nocobase/pull/7561)) por @gchust

- **[Acción: Exportar registros Pro]** corregir que la opción de exportación de archivos adjuntos "Generar una carpeta para cada registro" no surte efecto por @katherinehhh

- **[Fuente de datos: PostgreSQL externo]** Se corrigió que los eventos de la base de datos se volvieran inválidos después de actualizar la fuente de datos externa por @cgyrock

- **[Acción: Importar registros Pro]**
  - Corregir la lógica de verificación única que lanzará un error cuando el valor del campo único sea nulo por @mytharcher

  - corregir problema por el cual la modificación del cargador de las opciones de importación no tiene efecto por @katherinehhh

  - resolver problema con la visualización de la lista de campos en campos importables por @katherinehhh

- **[Colección: Conectar a datos externos (FDW)]**
  - Corregir errores de activación al conectar con tablas que tienen nombres en mayúsculas por @2013xile

  - Corregir problema por el cual la carga falla para tablas con nombres en mayúsculas por @2013xile

- **[Fuente de datos: SQL Server externo]** Corregir problemas por los cuales las opciones `encrypt` y `trustServerCertificate` no están disponibles por @2013xile

- **[Multi-espacio]**
  - Los dispositivos móviles soportan el cambio de espacio por @jiannx

  - Corregir la creación de otros campos en la colección del sistema por @jiannx

  - usuarios asociados multi-espacio por @jiannx

- **[Cifrado de solicitudes HTTP]** Usar corchetes para el formato de array en el análisis qs por @chenos

- **[Comentarios]**
  - Corregir error al eliminar registro en el bloque de comentarios por @katherinehhh

  - corregir problema cuando los comentarios citados en el bloque de comentarios fallan al mostrarse por @katherinehhh

  - Corregir la advertencia cuando se usa el bloque de comentarios en una colección que no es de comentarios por @katherinehhh

- **[Impresión de plantilla]**
  - corregir error de acción de impresión de plantilla en el bloque de detalle por @katherinehhh

  - corregir error al añadir plantilla en la operación de impresión de plantilla de registro por @katherinehhh

  - Corregir que la solicitud de impresión de plantilla no funcione con fuentes de datos externas por @katherinehhh

- **[Multi-app]**
  - proxy multi-app soporta caché por @jiannx

  - la migración multi-app no emite hooks por @jiannx

- **[plugin-demo-platform]** demo soporta detener aplicaciones automáticamente por @jiannx

- **[Fuente de datos: Oracle externo]** Se corrigió que los eventos de la base de datos se volvieran inválidos después de actualizar la fuente de datos externa por @cgyrock

- **[Flujo de trabajo: Aprobación]**
  - Corregir el problema por el cual el estado de los registros de aprobación no relacionados se cambia incorrectamente a `UNPROCESSED` por la acción de aprobar por @mytharcher

  - Corregir el problema por el cual aprobar hace que la asociación cree un nuevo registro por @mytharcher

  - Corregir la reversión duplicada de la misma transacción por @mytharcher

  - Corregir el problema por el cual se lanza un error al cancelar una ejecución cuando su flujo de trabajo ha sido eliminado por @mytharcher

  - Corregir el problema por el cual los datos rellenados desaparecían en el formulario del asignado por @mytharcher

  - Corregir el problema por el cual aprobar hace que la asociación muchos-a-muchos cree nuevos registros por @mytharcher

  - Corregir error lanzado al crear un bloque de información de aprobación por @mytharcher

- **[Gestor de correo electrónico]**
  - Manejo de datos anormales por @jiannx

  - corregir errores de borrador por @jiannx

  - no sincronizar el estado programado de Gmail por @jiannx

  - Error de actualización de ShadowHtml por @jiannx

  - permitir la modificación del id principal del correo electrónico por @jiannx

- **[Gestor de migraciones]**
  - Corregir un problema por el cual los saltos de línea en los datos se perdían durante la migración. por @cgyrock

  - Corregir la descripción de migración faltante y establecer la hora actual como predeterminada por @cgyrock
