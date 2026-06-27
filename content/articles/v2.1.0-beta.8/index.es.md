---
title: "NocoBase v2.1.0-beta.8: Soporte para configurar el flujo posterior al éxito en el botón de activación de flujo de trabajo"
description: "Nota de la versión v2.1.0-beta.8"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para configurar el flujo posterior al éxito en el botón de activación de flujo de trabajo ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher

- **[Campo de colección: Código]** El campo-código ahora es compatible con la versión 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) por @jiannx

- **[Flujo de trabajo: Evento de acción personalizada]** Soporte para datos de contexto personalizados que permiten pasar variables al activador de acción personalizada en subflujos ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher

### 🚀 Mejoras

- **[cliente]** Mostrar un mensaje de aviso cuando no hay datos disponibles para el bloque de formulario de edición o el bloque de detalles. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust

- **[motor-de-flujo]** Se corrigió un problema por el cual el nuevo código runjs analizaba expresiones de variables antes de la ejecución. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust

- **[Flujo de trabajo]** Mostrar todos los tipos de nodo en el menú de adición, incluso si no están disponibles ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher

- **[Acción: Solicitud personalizada]** El streaming de eventos ahora es compatible con solicitudes personalizadas ([#8749](https://github.com/nocobase/nocobase/pull/8749)) por @jiannx

- **[IA: Base de conocimiento]** Se reestructuró la lógica de carga de documentos de la base de conocimiento. por @cgyrock

- **[Adaptador de bloqueo Redis]** Refactorización debido a cambios en la API de LockManager en el repositorio principal por @mytharcher

- **[Gestor de copias de seguridad]** Se añadió bloqueo para las copias de seguridad programadas en nodos del clúster por @mytharcher

- **[Gestor de migraciones]** Se mejoraron las comprobaciones de migración, la descarga de SQL, el formato de registros y la visibilidad del proceso de ejecución por @cgyrock

### 🐛 Corrección de Errores

- **[cliente]**
  - Los datos de subformularios y subtablas no se mostraban debido a la comprobación de permisos ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos

  - Se corrigió el problema por el cual el botón de colapso del formulario de filtro v2 dejaba de funcionar después de ordenar los campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe

  - Se corrigió el problema por el cual los campos personalizados en los valores de campo del formulario de filtro no podían representar el tipo de entrada de valor correcto ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe

  - Se corrigió el problema por el cual la página de gestión de plantillas de referencia (v1) carecía de las acciones de filtro y actualización. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust

  - Se corrigió el problema por el cual el bloque de detalles de una colección SQL encontraba un error al cargar datos. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust

  - Se corrigió el problema por el cual las reglas de vinculación de campos en el bloque de detalles no surtían efecto durante la renderización inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust

  - Se corrigió un problema de estilo del botón de retroceso en subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe

  - Los bloques v2 ahora solo muestran las acciones compatibles con la fuente de datos actual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe

  - Se corrigió la validación para campos obligatorios ocultos por vinculación en modo de configuración ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe

  - Se corrigió el recorte de pestañas y se aseguró un ancho mínimo de pestaña en modo de diseño ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe

  - Se corrigieron las actualizaciones retrasadas de la interfaz de usuario al alternar la ocultación de columnas en subtablas y al eliminar columnas consecutivas ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe

  - Se deshabilitó la adición de bloques para registros asociados muchos-a-muchos (array) para evitar errores. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust

  - Se corrigió la navegación de enlaces emergentes que se revertía después de cerrar la vista ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe

  - Se corrigió un problema por el cual el bloque de datos original no se actualizaba después de editar datos en la ventana emergente del campo de asociación. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust

  - Se corrigió la aparición de dos validaciones obligatorias en el formulario de actualización de registros ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx

- **[servidor]** Se corrigió el error en las consultas de datos de fuentes de datos no relacionales ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock

- **[gestor-de-bloqueos]** Se corrigió un problema de condición de carrera en el gestor de bloqueos ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher

- **[base de datos]**
  - Se corrigió la falta de la opción 'Paginación simple' en la plantilla de vista de la colección. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock

  - La regla de validación de precisión para campos numéricos no estaba funcionando ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile

- **[indefinido]** Se corrigió un problema por el cual, después de la actualización, el sistema indicaba que no se podía encontrar plugin-block-reference. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust

- **[Control de acceso]**
  - Se usó collection.filterTargetKey en lugar de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos

  - Se corrigió un error de modificación de datos en la fuente de datos de la API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock

- **[Plantillas de interfaz de usuario]**
  - Se corrigió el problema por el cual los registros de asociación no se cargaban correctamente después de guardar el bloque de detalles como plantilla. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust

  - Se corrigió el error de renderizado para el bloque de referencia del panel de acciones. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust

  - Se corrigió el problema por el cual el flujo de eventos del bloque de referencia en el bloque de tabla no podía configurarse con un flujo de eventos de clic en fila. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust

  - Se corrigió un problema por el cual reutilizar la plantilla de bloque de registro actual para el bloque de detalles y el bloque de formulario de edición podía causar que los datos no se cargaran correctamente. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust

  - Se corrigió un problema por el cual los cambios en las propiedades realizados en el flujo de eventos de un bloque de plantilla no surtían efecto. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust

- **[Visor de archivos de Office]** Se cambió la altura del modal a un valor adecuado para mostrar más contenido del archivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher

- **[Acción: Exportar registros]**
  - Se corrigió el problema por el cual el campo belongsToArray aparecía en blanco en el Excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock

  - Se corrigió el problema por el cual los campos de tipo numérico en archivos Excel se mostraban como cadenas de texto ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock

- **[Bloque: Lista]** Se corrigió un problema por el cual los campos del bloque de lista no podían usar la variable de registro actual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust

- **[Fuente de datos: Principal]**
  - La actualización del valor predeterminado de un campo JSON no surtía efecto ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile

  - Error de sincronización de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile

- **[Flujo de trabajo]** Se corrigió el problema por el cual el marcador de posición de arrastre de nodo se mostraba incorrectamente al arrastrar bloques en el nodo de aprobación ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher

- **[Empleados de IA]**
  - Se corrigió un error de llamada a herramienta al usar el modelo de razonamiento deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock

  - Se corrigieron problemas por los cuales dashscope/deepseek/kimi no podían leer los archivos de documentos subidos. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock

- **[Multi-espacio]** Se corrigió el error de permiso de espacio al crear datos con la clave primaria por @jiannx

- **[Flujo de trabajo: Aprobación]**
  - Se corrigieron las etiquetas sin traducir en los detalles de procesamiento de aprobación por @zhangzhonghe

  - Se corrigió el problema por el cual los asignados no seguían el orden configurado en el nodo por @mytharcher

- **[Gestor de migraciones]**
  - Se corrigió un posible bloqueo del proceso causado por el registro de sentencias SQL excesivamente grandes incluidas en excepciones de error de migración por @cgyrock

  - Se corrigió un error de compilación por @mytharcher

  - Se corrigió la falta de descripción de la migración y se estableció la hora actual como valor predeterminado por @cgyrock

  - Se ajustó el directorio temporal a storage, para admitir su uso en modo clúster por @mytharcher
