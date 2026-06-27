---
title: "NocoBase v1.7.0-alpha.11: soporte de variables en el lado izquierdo de las condiciones de reglas de vinculación"
description: "Nota de la versión v1.7.0-alpha.11"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** soporte de variables en el lado izquierdo de las condiciones de reglas de vinculación ([#6609](https://github.com/nocobase/nocobase/pull/6609)) por @katherinehhh

- **[Departamentos]** Hacer que los plugins Departamento, URL de Adjunto y Mensaje de respuesta de Flujo de trabajo sean gratuitos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) por @chenos

- **[Acción: Actualización por lotes]**
  - Soporte para refrescar datos en otros bloques de datos después de actualizar datos en un bloque ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe

  - Soporte para refrescar datos en otros bloques de datos después de actualizar datos en un bloque ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe

- **[Almacenamiento de esquema UI]** Se añadió un módulo de localización para UISchema, permitiendo traducciones personalizadas para el título y la descripción del esquema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) por @chenos

- **[Bloque: Panel de acciones]** añadir un callback onScanSuccess para manejar escaneos exitosos y salir de la interfaz de la cámara. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) por @sheldon66

- **[Campo de colección: Código]** Añadir interfaz de código por @mytharcher

- **[Flujo de trabajo: nodo de cálculo de fecha]** Añadir función `changeTimezone` para cambiar el valor de la zona horaria para formateo por @mytharcher

- **[Impresión de plantillas]** Soporte para renderizado dinámico de imágenes y códigos de barras en plantillas de documentos. por @sheldon66

### 🚀 Mejoras

- **[cliente]**
  - Añadir API de retardo para escenarios que se abren sin retardo ([#6681](https://github.com/nocobase/nocobase/pull/6681)) por @mytharcher

  - soporte de registros de tabla seleccionados en solicitudes personalizadas ([#6647](https://github.com/nocobase/nocobase/pull/6647)) por @katherinehhh

  - Añadir API de tipo por defecto para `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) por @mytharcher

  - Optimizar avisos para páginas no configuradas ([#6641](https://github.com/nocobase/nocobase/pull/6641)) por @zhangzhonghe

  - Soporte para buscar campo en el componente Filtro ([#6627](https://github.com/nocobase/nocobase/pull/6627)) por @mytharcher

  - Añadir API `trim` para `Input` y `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) por @mytharcher

  - Determinar si mostrar los componentes móviles según el tipo de dispositivo en lugar del ancho de página ([#6611](https://github.com/nocobase/nocobase/pull/6611)) por @zhangzhonghe

  - Determinar si mostrar el diseño móvil según el tipo de dispositivo en lugar del ancho de página ([#6600](https://github.com/nocobase/nocobase/pull/6600)) por @zhangzhonghe

  - soporte para configurar la visibilidad de los dos puntos en las etiquetas de los campos del formulario según el diseño ([#6561](https://github.com/nocobase/nocobase/pull/6561)) por @katherinehhh

- **[create-nocobase-app]** Actualizar algunas dependencias a las últimas versiones ([#6673](https://github.com/nocobase/nocobase/pull/6673)) por @chenos

- **[utils]** Añadir extensión de duración para dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) por @mytharcher

- **[base de datos]**
  - Añadir opción trim para campo de texto ([#6603](https://github.com/nocobase/nocobase/pull/6603)) por @mytharcher

  - Añadir opción trim para campo de cadena ([#6565](https://github.com/nocobase/nocobase/pull/6565)) por @mytharcher

- **[Flujo de trabajo]**
  - Soporte para URL fija de ventana emergente para tareas de flujo de trabajo ([#6640](https://github.com/nocobase/nocobase/pull/6640)) por @mytharcher

  - Optimizar la lógica de guardado de trabajos ([#6613](https://github.com/nocobase/nocobase/pull/6613)) por @mytharcher

  - Mejorar código ([#6589](https://github.com/nocobase/nocobase/pull/6589)) por @mytharcher

- **[Flujo de trabajo: Nodo de retardo]** Soporte para usar variable para la duración ([#6621](https://github.com/nocobase/nocobase/pull/6621)) por @mytharcher

- **[Manejador de errores]** Soporte para título personalizado en el componente AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) por @sheldon66

- **[Gestor de archivos]** Añadir opción trim para campos de texto de la colección de almacenamientos ([#6604](https://github.com/nocobase/nocobase/pull/6604)) por @mytharcher

- **[Gestor de tareas asíncronas]** optimizar botones de importación/exportación en Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) por @chenos

- **[Flujo de trabajo: Evento de acción personalizada]** Añadir ajustes de actualización para el botón de activación de flujo de trabajo por @mytharcher

- **[Acción: Exportar registros Pro]** optimizar botones de importación/exportación en Pro por @katherinehhh

- **[Restricción de IP]** Actualizar contenido del mensaje de restricción de IP. por @sheldon66

- **[Almacenamiento de archivos: S3(Pro)]** Soporte para variables globales en la configuración de almacenamiento por @mytharcher

- **[Gestor de copias de seguridad]** permitir restaurar la aplicación principal desde una copia de seguridad de una sub-aplicación por @gchust

- **[Flujo de trabajo: Aprobación]** Soporte para usar plantilla de bloque para el formulario del proceso de aprobación por @mytharcher

- **[Gestor de migraciones]** permitir omitir la copia de seguridad y restauración automáticas para la migración por @gchust

### 🐛 Corrección de Errores

- **[cliente]**
  - problema de cambio de selector en el campo de fecha del botón de filtro ([#6695](https://github.com/nocobase/nocobase/pull/6695)) por @katherinehhh

  - conversión de variables en condiciones de reglas de vinculación de sub-tabla/sub-formulario ([#6702](https://github.com/nocobase/nocobase/pull/6702)) por @katherinehhh

  - botón de exportación mostrado sin permiso de exportación ([#6689](https://github.com/nocobase/nocobase/pull/6689)) por @katherinehhh

  - Después de conectar a través de una clave foránea, al hacer clic para activar el filtrado, las condiciones del filtro aparecen vacías ([#6634](https://github.com/nocobase/nocobase/pull/6634)) por @zhangzhonghe

  - Corregir error lanzado en el nodo de creación / actualización del flujo de trabajo ([#6696](https://github.com/nocobase/nocobase/pull/6696)) por @mytharcher

  - Corregir error lanzado al pasar el ratón sobre un bloque de plantilla referenciado en la configuración del nodo de aprobación ([#6691](https://github.com/nocobase/nocobase/pull/6691)) por @mytharcher

  - campo de asociación personalizado que no muestra la configuración del componente de campo ([#6692](https://github.com/nocobase/nocobase/pull/6692)) por @katherinehhh

  - compatibilidad de reglas de vinculación con datos heredados ([#6686](https://github.com/nocobase/nocobase/pull/6686)) por @katherinehhh

  - la carga diferida de un componente de interfaz de usuario faltante puede causar un error de renderizado ([#6683](https://github.com/nocobase/nocobase/pull/6683)) por @gchust

  - Corregir locale para el componente de carga ([#6682](https://github.com/nocobase/nocobase/pull/6682)) por @mytharcher

  - Añadir componente Password nativo a HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) por @mytharcher

  - problema de visualización de descripciones de campo en el flujo de trabajo ([#6680](https://github.com/nocobase/nocobase/pull/6680)) por @katherinehhh

  - campos heredados mostrados en la lista de asignación de campos de la colección actual ([#6666](https://github.com/nocobase/nocobase/pull/6666)) por @katherinehhh

  - problema de estilo en la entrada de variables al establecer el valor por defecto ([#6668](https://github.com/nocobase/nocobase/pull/6668)) por @katherinehhh

  - Cambiar al menú de grupo no debería saltar a una página que ya ha sido ocultada en el menú ([#6654](https://github.com/nocobase/nocobase/pull/6654)) por @zhangzhonghe

  - El formulario de filtro no debería mostrar el aviso "Cambios sin guardar" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) por @zhangzhonghe

  - En el formulario de filtro, cuando se hace clic en el botón de filtro, si hay campos que no han pasado la validación, el filtrado aún se activa ([#6659](https://github.com/nocobase/nocobase/pull/6659)) por @zhangzhonghe

  - La opción "permitir múltiples" no funciona para el campo de relación ([#6661](https://github.com/nocobase/nocobase/pull/6661)) por @katherinehhh

  - Corregir el problema de que las imágenes de vista previa se vean oscurecidas ([#6651](https://github.com/nocobase/nocobase/pull/6651)) por @zhangzhonghe

  - En el bloque de formulario, el valor por defecto de la configuración del campo se mostrará primero como la cadena de variable original y luego desaparecerá ([#6649](https://github.com/nocobase/nocobase/pull/6649)) por @zhangzhonghe

  - estilo incorrecto de entrada de variable ([#6645](https://github.com/nocobase/nocobase/pull/6645)) por @gchust

  - el título del panel de edición del nodo de flujo de trabajo muestra [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) por @katherinehhh

  - superposición de la descripción de la sub-tabla con el botón de añadir nuevo ([#6646](https://github.com/nocobase/nocobase/pull/6646)) por @katherinehhh

  - subrayado discontinuo causado por el diseño de formulario horizontal en modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) por @katherinehhh

  - la regla con condición 'cualquiera' no tiene efecto cuando la lista de condiciones está vacía ([#6628](https://github.com/nocobase/nocobase/pull/6628)) por @katherinehhh

  - fallo en el análisis de variables cuando los parámetros de URL contienen caracteres chinos ([#6618](https://github.com/nocobase/nocobase/pull/6618)) por @katherinehhh

  - área en blanco entre el título de la página de configuración de la plantilla de bloque y el menú ([#6625](https://github.com/nocobase/nocobase/pull/6625)) por @gchust

  - Los campos de relación en el formulario de filtro reportan un error después de que la página se actualiza porque x-data-source no se incluye ([#6619](https://github.com/nocobase/nocobase/pull/6619)) por @zhangzhonghe

  - problema de datos con el bloque Gantt en la colección de árbol ([#6617](https://github.com/nocobase/nocobase/pull/6617)) por @katherinehhh

  - problema de visualización de la etiqueta del campo para evitar el truncamiento por dos puntos ([#6599](https://github.com/nocobase/nocobase/pull/6599)) por @katherinehhh

  - la propiedad x-disabled no tiene efecto en los campos del formulario ([#6610](https://github.com/nocobase/nocobase/pull/6610)) por @katherinehhh

  - Corregir que la propiedad `disabled` no funciona cuando `SchemaInitializerItem` tiene `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) por @mytharcher

  - campo de asociación (selección) que muestra N/A al exponer campos de colección relacionados ([#6582](https://github.com/nocobase/nocobase/pull/6582)) por @katherinehhh

  - los botones de enviar y actualizar no muestran correctamente el modo solo icono ([#6592](https://github.com/nocobase/nocobase/pull/6592)) por @katherinehhh

  - problema de cascada: 'El valor de xxx no puede estar en formato de array' al eliminar y volver a seleccionar ([#6585](https://github.com/nocobase/nocobase/pull/6585)) por @katherinehhh

  - conflicto de vinculación entre campos de asociación con el mismo nombre en diferentes sub-tablas dentro del mismo formulario ([#6577](https://github.com/nocobase/nocobase/pull/6577)) por @katherinehhh

- **[base de datos]**
  - Corregido error de compilación de CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) por @aaaaaajie

  - Al eliminar registros uno a muchos, se pasan tanto `filter` como `filterByTk` y `filter` incluye un campo de asociación, se ignora `filterByTk` ([#6606](https://github.com/nocobase/nocobase/pull/6606)) por @2013xile

  - Evitar que el campo "datetimeNoTz" cambie cuando el valor no ha cambiado al actualizar el registro ([#6588](https://github.com/nocobase/nocobase/pull/6588)) por @mytharcher

- **[compilación]** la salida de compilación es incorrecta cuando el plugin depende de algunas bibliotecas AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) por @gchust

- **[Visualización de datos]** Las opciones del campo Enum están vacías en el bloque de filtro ([#6706](https://github.com/nocobase/nocobase/pull/6706)) por @2013xile

- **[Acción: Solicitud personalizada]** Asegurar que los datos de la solicitud personalizada deben ser JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) por @chenos

- **[Flujo de trabajo: Nodo manual]**
  - Corregir error de ACL en el centro de tareas ([#6693](https://github.com/nocobase/nocobase/pull/6693)) por @mytharcher

  - Corregir constante de estado de tarea manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) por @mytharcher

- **[Acción: Importar registros]** corregido un error al importar el campo de tiempo xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) por @aaaaaajie

- **[Control de acceso]**
  - Corregir error lanzado al serializar el modelo de rol a caché ([#6674](https://github.com/nocobase/nocobase/pull/6674)) por @mytharcher

  - Corregir la lógica de cálculo de unión de roles ([#6605](https://github.com/nocobase/nocobase/pull/6605)) por @aaaaaajie

  - Asignación incorrecta del rol actual durante el inicio de sesión ([#6581](https://github.com/nocobase/nocobase/pull/6581)) por @aaaaaajie

- **[Bloque: iframe]** aparece una barra de desplazamiento vertical cuando el bloque iframe se establece a altura completa ([#6675](https://github.com/nocobase/nocobase/pull/6675)) por @katherinehhh

- **[Flujo de trabajo]**
  - Corregir error de migración lanzado desde MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) por @mytharcher

  - Corregir que la información de estadísticas de los flujos de trabajo no se carga cuando se inicia la aplicación ([#6642](https://github.com/nocobase/nocobase/pull/6642)) por @mytharcher

  - Corregir OOM al crear un trabajo con id de entero no seguro ([#6637](https://github.com/nocobase/nocobase/pull/6637)) por @mytharcher

  - Corregir que la opción de sincronización se muestra incorrectamente ([#6595](https://github.com/nocobase/nocobase/pull/6595)) por @mytharcher

- **[Campo de colección: Adjunto(URL)]** solo permitir colecciones de archivos con acceso URL público ([#6664](https://github.com/nocobase/nocobase/pull/6664)) por @katherinehhh

- **[Bloque: plantilla]**
  - cuando la plantilla referenciada utilizada por el bloque de página ha sido eliminada, guardar como plantilla falla ([#6638](https://github.com/nocobase/nocobase/pull/6638)) por @gchust

  - Modificar y eliminar los mismos campos de la plantilla y el bloque, después de crear un bloque a partir de una plantilla, puede causar errores de renderizado ([#6626](https://github.com/nocobase/nocobase/pull/6626)) por @gchust

- **[Usuarios]** Problema al analizar el esquema del formulario de perfil de usuario ([#6635](https://github.com/nocobase/nocobase/pull/6635)) por @2013xile

- **[Acción: Exportar registros]** faltan parámetros de filtro al exportar datos después de cambiar la paginación ([#6633](https://github.com/nocobase/nocobase/pull/6633)) por @katherinehhh

- **[Móvil]** el campo de selección única con filtro 'contiene' en móvil no soporta selección múltiple ([#6629](https://github.com/nocobase/nocobase/pull/6629)) por @katherinehhh

- **[Campo de colección: Muchos a muchos (array)]** Problema de filtrado por campos en una colección de asociación con un campo muchos a muchos (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) por @2013xile

- **[Formularios públicos]** Los permisos de vista incluyen list y get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) por @chenos

- **[Autenticación]** asignación de token en `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) por @2013xile

- **[Calendario]** faltan datos en fechas límite en la vista de calendario semanal ([#6587](https://github.com/nocobase/nocobase/pull/6587)) por @katherinehhh

- **[Bloque: Mapa]** la validación de la gestión del mapa no debería pasar con entrada de espacio ([#6575](https://github.com/nocobase/nocobase/pull/6575)) por @katherinehhh

- **[Acción: Edición por lotes]** Haga clic en el botón de edición por lotes, configure la ventana emergente y luego ábrala de nuevo, la ventana emergente está en blanco ([#6578](https://github.com/nocobase/nocobase/pull/6578)) por @zhangzhonghe

- **[Flujo de trabajo: Evento de acción personalizada]** Corregir casos de prueba por @mytharcher

- **[Gestor de correo electrónico]**
  - corregir que no se puede sincronizar, sin visualización de asunto y otros pequeños errores por @jiannx

  - corregir que el permiso de gestión de correo electrónico no puede ver la lista de correos por @jiannx

  - Corregir falta de await para la siguiente llamada. por @jiannx

- **[Almacenamiento de archivos: S3(Pro)]**
  - Corregir falta de await para la siguiente llamada. por @jiannx

  - Configuraciones individuales de baseurl y públicas, mejorar la UX de configuración de almacenamiento S3 Pro por @jiannx

  - Lanzar error al usuario cuando se sube el logo al almacenamiento S3 Pro (establecido por defecto) por @mytharcher

  - Organizar idioma por @jiannx

- **[Auth: OIDC]** Se produce una redirección incorrecta cuando la ruta de callback es la cadena 'null' por @2013xile

- **[Bloque: Formulario multipaso]**
  - el botón de enviar tiene el mismo color en su estado por defecto y resaltado por @jiannx

  - corregido el error de que el restablecimiento del formulario no es válido cuando el campo está asociado con otro campo por @jiannx

- **[Gestor de copias de seguridad]** se produce un error de tiempo de espera al intentar restaurar una copia de seguridad no cifrada con una contraseña por @gchust

- **[Flujo de trabajo: Aprobación]**
  - Corregir error de ACL en el centro de tareas por @mytharcher

  - Soporte para URL fija para elementos de aprobación en el centro de tareas por @mytharcher

  - Corregir modo de rama cuando `endOnReject` está configurado como `true` por @mytharcher

  - Corregir `updatedAt` cambiado después de la migración por @mytharcher

  - Corregir que la configuración del nodo de aprobación es incorrecta después de que el esquema cambie por @mytharcher

  - Corregir variables de cliente para usar en el formulario de aprobación por @mytharcher

- **[Gestor de migraciones]**
  - la hora de creación del registro de migración se muestra incorrectamente en algunos entornos por @gchust

  - la opción de omitir copia de seguridad automática se vuelve inválida si aparece la ventana emergente de variable de entorno durante la migración por @gchust
