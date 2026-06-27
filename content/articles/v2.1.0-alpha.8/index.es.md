---
title: "NocoBase v2.1.0-alpha.8: Actualización del mensaje de usuario del chatbox de IA"
description: "Nota de la versión v2.1.0-alpha.8"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para configurar el flujo posterior al éxito en el botón de activación de flujo de trabajo ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher

- **[Campo de colección: Código]** El campo-código ahora es compatible con la versión 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) por @jiannx

- **[Flujo de trabajo: Evento de acción personalizada]** Soporte para datos de contexto personalizados para pasar variables al activador de acción personalizada en subflujos ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher

- **[Empleados IA]** Actualización del prompt de usuario del chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🚀 Mejoras

- **[cliente]**
  - Mostrar un mensaje de aviso cuando no haya datos disponibles para el bloque de formulario de edición o el bloque de detalles. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust

  - Refactorización de la configuración del diseño de administración y la aplicación para modelar la arquitectura del host con protecciones de compatibilidad v1 y v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) por @zhangzhonghe

  - Soporte para la configuración de resumen en tablas ([#8721](https://github.com/nocobase/nocobase/pull/8721)) por @chenos

- **[motor-de-flujo]** Se corrigió un problema por el cual el nuevo código runjs analizaba las expresiones de variables antes de la ejecución. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust

- **[Flujo de trabajo]** Mostrar todos los tipos de nodo en el menú de adición, incluso si no están disponibles ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher

- **[Acción: Solicitud personalizada]** El streaming de eventos ahora es compatible con solicitudes personalizadas ([#8749](https://github.com/nocobase/nocobase/pull/8749)) por @jiannx

- **[Empleados IA]** Actualización del prompt de usuario del chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang

- **[Incrustar NocoBase]** Proporcionar API sanitize para filtrar valores de asociación en acciones ([#8688](https://github.com/nocobase/nocobase/pull/8688)) por @mytharcher

- **[IA: Base de conocimiento]** Refactorización de la lógica de carga de documentos de la base de conocimiento. por @cgyrock

- **[Adaptador de bloqueo Redis]** Refactorización debido a cambios en la API de LockManager en el repositorio principal por @mytharcher

- **[Gestor de copias de seguridad]** Añadir bloqueo para copias de seguridad programadas en nodos del clúster por @mytharcher

- **[Gestor de migraciones]** Mejora en las comprobaciones de migración, soporte de descarga SQL, formato de registros y visibilidad del proceso de ejecución por @cgyrock

### 🐛 Corrección de Errores

- **[indefinido]** Se corrigió un problema por el cual, después de la actualización, el sistema indicaba que no se podía encontrar plugin-block-reference. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust

- **[cliente]**
  - Los datos de subformularios y subtablas no se mostraban debido a la comprobación de permisos ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos

  - Se corrigió el problema por el cual el botón de colapso del formulario de filtro v2 dejaba de funcionar después de ordenar los campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe

  - Se corrigió el problema por el cual los campos personalizados en los valores de campo del formulario de filtro no podían renderizar el tipo de entrada de valor correcto ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe

  - Se corrigió el problema por el cual la página de gestión de plantillas de referencia (v1) carecía de las acciones de filtro y actualización. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust

  - Se corrigió el problema por el cual el bloque de detalles de una colección SQL encontraba un error al cargar datos. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust

  - Se corrigió el problema por el cual las reglas de vinculación de campos en el bloque de detalles no surtían efecto durante la renderización inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust

  - Los bloques v2 ahora solo muestran las acciones compatibles con la fuente de datos actual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe

  - Se corrigió un problema de estilo del botón de retroceso en las subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe

  - Se corrigió la navegación del enlace emergente que se revertía después de cerrar la vista ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe

  - Se corrigió la validación de campos obligatorios ocultos por vinculación en modo de configuración ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe

  - Se corrigió el recorte de pestañas y se aseguró un ancho mínimo de pestaña en modo de diseño ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe

  - Se corrigieron las actualizaciones retrasadas de la interfaz de usuario para la alternancia de ocultación de columnas de subtabla y la eliminación consecutiva de columnas ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe

  - Se corrigió un problema por el cual el bloque de datos original no se actualizaba después de editar datos en la ventana emergente del campo de asociación. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust

  - Se deshabilitó la adición de bloques para registros asociados muchos-a-muchos (array) para evitar errores. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust

  - Se corrigió un problema por el cual el bloque de datos no se actualizaba al cambiar de menú. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust

  - Se corrigió el problema por el cual el componente CollectionField no se renderizaba en el componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher

  - Se corrigió la aparición de dos verificaciones obligatorias en el formulario de actualización de registros ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx

- **[servidor]**
  - Se corrigió el problema de error en las consultas de datos de fuentes de datos que no son bases de datos ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock

  - Se resolvió un problema de caché añadiendo un hash a los activos ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos

- **[gestor-de-bloqueos]** Se corrigió un problema de condición de carrera en el gestor de bloqueos ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher

- **[base de datos]**
  - Se corrigió la falta de la opción 'Paginación simple' en la plantilla de vista de la colección. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock

  - La regla de validación de precisión para campos numéricos no estaba teniendo efecto ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile

  - Se corrigió el fallo de la comprobación de expresiones regulares personalizadas en campos v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx

- **[motor-de-flujo]** Se corrigió un problema por el cual ctx.exit no podía terminar la ejecución de flujos de eventos definidos por el usuario. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust

- **[Control de acceso]**
  - Uso de collection.filterTargetKey en lugar de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos

  - Se corrigió el error de modificación de datos en la fuente de datos de la API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock

  - La instancia de base de datos utilizada al configurar los metadatos de ACL era incorrecta ([#8747](https://github.com/nocobase/nocobase/pull/8747)) por @2013xile

- **[Plantillas de UI]**
  - Se corrigió el problema por el cual los registros de asociación no se podían cargar correctamente después de guardar el bloque de detalles como plantilla. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust

  - Se corrigió el error de renderizado del bloque de referencia del panel de acciones. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust

  - Se corrigió el problema por el cual el flujo de eventos del bloque de referencia en el bloque de tabla no podía configurarse con un flujo de eventos de clic en fila. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust

  - Se corrigió un problema por el cual reutilizar la plantilla de bloque de registro actual para el bloque de detalles y el bloque de formulario de edición podía causar que los datos no se cargaran correctamente. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust

  - Se corrigió un problema por el cual los cambios en las propiedades realizados en el flujo de eventos de un bloque de plantilla no surtían efecto. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust

- **[Visor de archivos de Office]** Se cambió la altura del modal a un valor adecuado para mostrar más contenido del archivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher

- **[Acción: Exportar registros]**
  - Se corrigió el problema por el cual el campo belongsToArray aparecía en blanco en el Excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock

  - Se corrigió el problema por el cual los campos de tipo numérico en archivos Excel se mostraban como cadenas de texto ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock

- **[Flujo de trabajo]** Se corrigió el problema por el cual el marcador de posición de arrastre de nodo se mostraba incorrectamente al arrastrar bloques en el nodo de aprobación ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher

- **[Bloque: Lista]** Se corrigió un problema por el cual los campos del bloque de lista no podían usar la variable de registro actual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust

- **[Fuente de datos: Principal]**
  - La actualización del valor predeterminado de un campo JSON no surte efecto ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile

  - Error de sincronización de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile

- **[Empleados IA]**
  - Se corrigieron problemas por los cuales dashscope/deepseek/kimi no podían leer los archivos de documentos subidos. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock

  - Se corrigió un error de llamada a herramienta al usar el modelo de razonamiento deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock

  - Se corrigió un error en el chat del empleado IA cuando la base de conocimiento estaba habilitada ([#8746](https://github.com/nocobase/nocobase/pull/8746)) por @cgyrock

  - Se corrigió un problema de renderizado de la configuración de la fuente de datos de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock

  - Se resolvió un problema por el cual el mensaje de IA se renderizaba con longitud 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) por @heziqiang

- **[Motor de flujo]** Se corrigió un error de destrucción SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) por @chenos

- **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió el problema por el cual el flujo de trabajo de acción personalizada se colgaba al ejecutarse como subflujo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher

- **[Flujo de trabajo: JavaScript]** Se corrigió que los casos de prueba no pasaran en Windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) por @mytharcher

- **[Visualización de datos]** Se corrigió la i18n para el texto de entrada del plugin de gráficos ([#8716](https://github.com/nocobase/nocobase/pull/8716)) por @heziqiang

- **[Multi-espacio]** Se corrigió el error de permiso de espacio al crear datos con la clave primaria por @jiannx

- **[Impresión de plantillas]** Se corrigió el problema por el cual la API de ACL cambió pero el plugin no se adaptó por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Se corrigió el problema por el cual los asignados no seguían el orden configurado en el nodo por @mytharcher

  - Se corrigió el problema por el cual el resultado de la consulta no se mostraba debido a nodos filtrados por tipo por @mytharcher

  - Se corrigió el problema por el cual el parámetro appends se filtraba por ACL por @mytharcher

  - Se corrigió un problema de ACL por el cual el valor de asociación no debería crearse o actualizarse cuando el usuario no tiene permiso por @mytharcher

  - Se añadió un parámetro faltante para evitar que las asociaciones no se actualicen al enviar una nueva aprobación por @mytharcher

  - Se corrigieron etiquetas sin traducir en los detalles de procesamiento de aprobación por @zhangzhonghe

  - Se corrigió un error lanzado debido a la falta del valor de `dataAfter` al añadir o delegar por @mytharcher

  - Se sanearon los valores de asociación en las acciones de aprobación para evitar cualquier manipulación de datos más allá del permiso por @mytharcher

  - Se corrigió el problema por el cual se lanzaba un error al ejecutar manualmente el flujo de trabajo de aprobación por @mytharcher

  - Se sanearon los valores de asociación en las acciones de aprobación para evitar cualquier manipulación de datos más allá del permiso por @mytharcher

- **[Gestor de correo electrónico]** Se corrigió el análisis del formato de ID de contenido de imagen por @jiannx

- **[Gestor de migraciones]**
  - Se corrigió la falta de descripción de la migración y se estableció la hora actual como valor predeterminado por @cgyrock

  - Se corrigió un error de compilación por @mytharcher

  - Se ajustó el directorio temporal a storage para soportar su uso en modo clúster por @mytharcher

  - Se corrigió una posible congelación del proceso causada por el registro de sentencias SQL excesivamente grandes incluidas en las excepciones de error de migración por @cgyrock
