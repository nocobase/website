---
title: "Actualizaciones Semanales｜Actualizar el prompt de usuario del chatbox de IA"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 6 al 12 de marzo de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.15](https://www.nocobase.com/en/blog/v2.0.15)

*Fecha de lanzamiento: 2026-03-12*

### 🐛 Corrección de errores

- **[Gestor de correo electrónico]** Ajustes en los destinatarios de responder y responder a todos, solucionando problemas como el fallo al añadir campos de tabla por @jiannx
- **[Gestor de migraciones]** Se corrigió el problema por el que no se podían seleccionar tablas del sistema en reglas personalizadas por @cgyrock

### [v2.0.14](https://www.nocobase.com/en/blog/v2.0.14)

*Fecha de lanzamiento: 2026-03-12*

### 🚀 Mejoras

- **[Gestor de migraciones]** Mejoras en las comprobaciones de migración, soporte para descarga de SQL, formato de registros y visibilidad del proceso de ejecución por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió el problema por el que los campos personalizados en los valores de campo del formulario Filtro no podían renderizar el tipo de entrada de valor correcto ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe
  - Se corrigió el problema por el que el botón de colapsar del formulario de filtro v2 dejaba de funcionar después de ordenar los campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe
  - Se corrigió el problema por el que faltaban las acciones de filtro y actualización en la página de gestión de plantillas de referencia (v1). ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust
  - Datos de subformulario y subtabla no mostrados debido a la comprobación de permisos ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos
- **[Control de acceso]** Usar collection.filterTargetKey en lugar de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos
- **[Plantillas de IU]**

  - Se corrigió el error de renderizado para el bloque de referencia del panel de acciones. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust
  - Se corrigió el problema por el que los registros de asociación no se podían cargar correctamente después de guardar el bloque de detalles como plantilla. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust
- **[Flujo de trabajo: Aprobación]**

  - Se corrigió el problema por el que los asignados no seguían el orden configurado en el nodo por @mytharcher
  - Se corrigieron etiquetas sin traducir en los detalles de procesamiento de aprobación por @zhangzhonghe
- **[Gestor de migraciones]**

  - Se corrigió el error de compilación por @mytharcher
  - Se corrigió la falta de descripción de la migración y se estableció la hora actual como predeterminada por @cgyrock
  - Se corrigió una posible congelación del proceso causada por el registro de sentencias SQL excesivamente grandes incluidas en las excepciones de error de migración por @cgyrock
  - Se ajustó el directorio temporal dentro del almacenamiento para admitir su uso en modo clúster por @mytharcher

### [v2.0.13](https://www.nocobase.com/en/blog/v2.0.13)

*Fecha de lanzamiento: 2026-03-10*

### 🎉 Nuevas funciones

- **[cliente]** Soporte para configurar el flujo posterior al éxito en el botón de activación de flujo de trabajo ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher

### 🚀 Mejoras

- **[Flujo de trabajo]** Mostrar todos los tipos de nodo en el menú de adición incluso si no están disponibles ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher
- **[IA: Base de conocimiento]** Se refactorizó la lógica de carga de documentos de la base de conocimiento. por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió el problema por el que el bloque de detalles de una colección SQL encontraba un error al cargar datos. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust
  - Se corrigió el problema por el que las reglas de vinculación de campos en el bloque de detalles no surtían efecto durante la renderización inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust
- **[Visor de archivos de Office]** Se cambió la altura del modal a un valor adecuado para mostrar más contenido del archivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher
- **[Plantillas de IU]** Se corrigió el problema por el que el flujo de eventos del bloque de referencia en el bloque de tabla no podía configurarse con un flujo de eventos de clic en fila. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust

### [v2.0.12](https://www.nocobase.com/en/blog/v2.0.12)

*Fecha de lanzamiento: 2026-03-09*

### 🚀 Mejoras

- **[Adaptador de bloqueo Redis]** Refactorización debido al cambio de API de LockManager en el repositorio principal por @mytharcher
- **[Gestor de copias de seguridad]** Se añadió bloqueo para la copia de seguridad programada en nodos de clúster por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Los bloques V2 ahora solo muestran las acciones compatibles con la fuente de datos actual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe
  - Se corrigió un problema de estilo del botón de retroceso en las subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe
- **[gestor de bloqueos]** Se corrigió el problema de condición de carrera del gestor de bloqueos ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher
- **[servidor]** Se corrigió el problema de error en las consultas de datos de fuentes de datos que no son de base de datos ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock
- **[Control de acceso]** Se corrigió el error de modificación de datos de la fuente de datos de la API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock
- **[Acción: Exportar registros]** Se corrigió el problema por el que el campo belongsToArray aparecía en blanco en el excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock

### [v2.0.11](https://www.nocobase.com/en/blog/v2.0.11)

*Fecha de lanzamiento: 2026-03-06*

### 🎉 Nuevas funciones

- **[Flujo de trabajo: Evento de acción personalizada]** Soporte para datos de contexto personalizados para pasar variables al activador de acción personalizada en subflujos ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher

### 🚀 Mejoras

- **[cliente]** Mostrar un mensaje de aviso cuando no hay datos disponibles para el bloque de formulario de edición o el bloque de detalles. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust
- **[motor de flujo]** Se corrigió un problema por el que el nuevo código runjs analizaba las expresiones de variables antes de la ejecución. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió la reversión de la navegación del enlace emergente después de cerrar la vista ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe
  - Se deshabilitó la adición de bloques para registros asociados muchos a muchos (array) para evitar errores. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust
  - Se corrigió un problema por el que el bloque de datos original no se actualizaba después de editar datos en la ventana emergente del campo de asociación. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust
  - Se corrigió el recorte de pestañas y se aseguró un ancho mínimo de pestaña en modo de diseño ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe
  - Se corrigió la validación para campos obligatorios ocultos por vinculación en modo de configuración ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe
  - Se corrigieron las actualizaciones retrasadas de la IU para la alternancia de ocultación de columnas de subtabla y la eliminación consecutiva de columnas ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe
  - Se corrigió la aparición de dos validaciones obligatorias en el formulario de actualización de registro ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx
- **[base de datos]**

  - Se corrigió la falta de la opción 'Paginación simple' en la plantilla de vista de la colección. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock
  - La regla de validación de precisión para campos numéricos no está surtiendo efecto ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile
- **[indefinido]** Se corrigió un problema por el que, después de la actualización, el sistema indicaba que no se podía encontrar plugin-block-reference. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust
- **[Acción: Exportar registros]** Se corrigió el problema por el que los campos de tipo numérico en archivos excel se mostraban como cadenas ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock
- **[Bloque: Lista]** Se corrigió un problema por el que los campos del bloque de lista no podían usar la variable de registro actual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust
- **[Flujo de trabajo]** Se corrigió el problema por el que el marcador de posición de arrastre de nodo se mostraba incorrectamente al arrastrar bloques en el nodo de aprobación ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher
- **[Plantillas de IU]**

  - Se corrigió un problema por el que reutilizar la plantilla de bloque de registro actual para el bloque de detalles y el bloque de formulario de edición podía causar que los datos no se cargaran correctamente. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust
  - Se corrigió un problema por el que los cambios en las propiedades realizados en el flujo de eventos de un bloque de plantilla no surtían efecto. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust
- **[Fuente de datos: Principal]**

  - La actualización del valor predeterminado de un campo JSON no surte efecto ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile
  - Error de sincronización de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile
- **[Empleados de IA]**

  - Se corrigieron problemas por los que dashscope/deepseek/kimi no podían leer los archivos de documentos subidos. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock
  - Se corrigió el error de llamada a herramienta al usar el modelo de razonamiento deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock
- **[Multi-espacio]** Se corrigió el error de permiso de espacio al crear datos con la clave primaria por @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.8](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Fecha de lanzamiento: 2026-03-12*

### 🎉 Nuevas funciones

- **[cliente]** Soporte para configurar el flujo posterior al éxito en el botón de activación de flujo de trabajo ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher
- **[Campo de colección: Código]** field-code soporta 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) por @jiannx
- **[Flujo de trabajo: Evento de acción personalizada]** Soporte para datos de contexto personalizados para pasar variables al activador de acción personalizada en subflujos ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher

### 🚀 Mejoras

- **[cliente]** Mostrar un mensaje de aviso cuando no hay datos disponibles para el bloque de formulario de edición o el bloque de detalles. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust
- **[motor de flujo]** Se corrigió un problema por el que el nuevo código runjs analizaba las expresiones de variables antes de la ejecución. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust
- **[Flujo de trabajo]** Mostrar todos los tipos de nodo en el menú de adición incluso si no están disponibles ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher
- **[Acción: Solicitud personalizada]** El streaming de eventos soporta solicitudes personalizadas ([#8749](https://github.com/nocobase/nocobase/pull/8749)) por @jiannx
- **[IA: Base de conocimiento]** Se refactorizó la lógica de carga de documentos de la base de conocimiento. por @cgyrock
- **[Adaptador de bloqueo Redis]** Refactorización debido al cambio de API de LockManager en el repositorio principal por @mytharcher
- **[Gestor de copias de seguridad]** Se añadió bloqueo para la copia de seguridad programada en nodos de clúster por @mytharcher
- **[Gestor de migraciones]** Mejoras en las comprobaciones de migración, soporte para descarga de SQL, formato de registros y visibilidad del proceso de ejecución por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Datos de subformulario y subtabla no mostrados debido a la comprobación de permisos ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos
  - Se corrigió el problema por el que el botón de colapsar del formulario de filtro v2 dejaba de funcionar después de ordenar los campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe
  - Se corrigió el problema por el que los campos personalizados en los valores de campo del formulario Filtro no podían renderizar el tipo de entrada de valor correcto ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe
  - Se corrigió el problema por el que faltaban las acciones de filtro y actualización en la página de gestión de plantillas de referencia (v1). ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust
  - Se corrigió el problema por el que el bloque de detalles de una colección SQL encontraba un error al cargar datos. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust
  - Se corrigió el problema por el que las reglas de vinculación de campos en el bloque de detalles no surtían efecto durante la renderización inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust
  - Se corrigió un problema de estilo del botón de retroceso en las subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe
  - Los bloques V2 ahora solo muestran las acciones compatibles con la fuente de datos actual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe
  - Se corrigió la validación para campos obligatorios ocultos por vinculación en modo de configuración ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe
  - Se corrigió el recorte de pestañas y se aseguró un ancho mínimo de pestaña en modo de diseño ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe
  - Se corrigieron las actualizaciones retrasadas de la IU para la alternancia de ocultación de columnas de subtabla y la eliminación consecutiva de columnas ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe
  - Se deshabilitó la adición de bloques para registros asociados muchos a muchos (array) para evitar errores. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust
  - Se corrigió la reversión de la navegación del enlace emergente después de cerrar la vista ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe
  - Se corrigió un problema por el que el bloque de datos original no se actualizaba después de editar datos en la ventana emergente del campo de asociación. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust
  - Se corrigió la aparición de dos validaciones obligatorias en el formulario de actualización de registro ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx
- **[servidor]** Se corrigió el problema de error en las consultas de datos de fuentes de datos que no son de base de datos ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock
- **[gestor de bloqueos]** Se corrigió el problema de condición de carrera del gestor de bloqueos ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher
- **[base de datos]**

  - Se corrigió la falta de la opción 'Paginación simple' en la plantilla de vista de la colección. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock
  - La regla de validación de precisión para campos numéricos no está surtiendo efecto ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile
- **[indefinido]** Se corrigió un problema por el que, después de la actualización, el sistema indicaba que no se podía encontrar plugin-block-reference. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust
- **[Control de acceso]**

  - Usar collection.filterTargetKey en lugar de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos
  - Se corrigió el error de modificación de datos de la fuente de datos de la API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock
- **[Plantillas de IU]**

  - Se corrigió el problema por el que los registros de asociación no se podían cargar correctamente después de guardar el bloque de detalles como plantilla. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust
  - Se corrigió el error de renderizado para el bloque de referencia del panel de acciones. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust
  - Se corrigió el problema por el que el flujo de eventos del bloque de referencia en el bloque de tabla no podía configurarse con un flujo de eventos de clic en fila. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust
  - Se corrigió un problema por el que reutilizar la plantilla de bloque de registro actual para el bloque de detalles y el bloque de formulario de edición podía causar que los datos no se cargaran correctamente. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust
  - Se corrigió un problema por el que los cambios en las propiedades realizados en el flujo de eventos de un bloque de plantilla no surtían efecto. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust
- **[Visor de archivos de Office]** Se cambió la altura del modal a un valor adecuado para mostrar más contenido del archivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher
- **[Acción: Exportar registros]**

  - Se corrigió el problema por el que el campo belongsToArray aparecía en blanco en el excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock
  - Se corrigió el problema por el que los campos de tipo numérico en archivos excel se mostraban como cadenas ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock
- **[Bloque: Lista]** Se corrigió un problema por el que los campos del bloque de lista no podían usar la variable de registro actual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust
- **[Fuente de datos: Principal]**

  - La actualización del valor predeterminado de un campo JSON no surte efecto ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile
  - Error de sincronización de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile
- **[Flujo de trabajo]** Se corrigió el problema por el que el marcador de posición de arrastre de nodo se mostraba incorrectamente al arrastrar bloques en el nodo de aprobación ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher
- **[Empleados de IA]**

  - Se corrigió el error de llamada a herramienta al usar el modelo de razonamiento deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock
  - Se corrigieron problemas por los que dashscope/deepseek/kimi no podían leer los archivos de documentos subidos. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock
- **[Multi-espacio]** Se corrigió el error de permiso de espacio al crear datos con la clave primaria por @jiannx
- **[Flujo de trabajo: Aprobación]**

  - Se corrigieron etiquetas sin traducir en los detalles de procesamiento de aprobación por @zhangzhonghe
  - Se corrigió el problema por el que los asignados no seguían el orden configurado en el nodo por @mytharcher
- **[Gestor de migraciones]**

  - Se corrigió una posible congelación del proceso causada por el registro de sentencias SQL excesivamente grandes incluidas en las excepciones de error de migración por @cgyrock
  - Se corrigió el error de compilación por @mytharcher
  - Se corrigió la falta de descripción de la migración y se estableció la hora actual como predeterminada por @cgyrock
  - Se ajustó el directorio temporal dentro del almacenamiento para admitir su uso en modo clúster por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.8](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Fecha de lanzamiento: 2026-03-12*

### 🎉 Nuevas funciones

- **[cliente]** Soporte para configurar el flujo posterior al éxito en el botón de activación de flujo de trabajo ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher
- **[Campo de colección: Código]** field-code soporta 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) por @jiannx
- **[Flujo de trabajo: Evento de acción personalizada]** Soporte para datos de contexto personalizados para pasar variables al activador de acción personalizada en subflujos ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher
- **[Empleados de IA]** Actualización del mensaje de usuario del chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🚀 Mejoras

- **[cliente]**

  - Mostrar un mensaje de aviso cuando no hay datos disponibles para el bloque de formulario de edición o el bloque de detalles. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust
  - Refactorización de la configuración del diseño de administración y la aplicación para modelar la arquitectura del host con salvaguardas de compatibilidad v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) por @zhangzhonghe
  - Soporte para la configuración de resumen para tablas ([#8721](https://github.com/nocobase/nocobase/pull/8721)) por @chenos
- **[motor de flujo]** Se corrigió un problema por el que el nuevo código runjs analizaba las expresiones de variables antes de la ejecución. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust
- **[Flujo de trabajo]** Mostrar todos los tipos de nodo en el menú de adición incluso si no están disponibles ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher
- **[Acción: Solicitud personalizada]** El streaming de eventos soporta solicitudes personalizadas ([#8749](https://github.com/nocobase/nocobase/pull/8749)) por @jiannx
- **[Empleados de IA]** Actualización del mensaje de usuario del chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang
- **[Incrustar NocoBase]** Proporcionar API sanitize para filtrar valores de asociación en la acción ([#8688](https://github.com/nocobase/nocobase/pull/8688)) por @mytharcher
- **[IA: Base de conocimiento]** Se refactorizó la lógica de carga de documentos de la base de conocimiento. por @cgyrock
- **[Adaptador de bloqueo Redis]** Refactorización debido al cambio de API de LockManager en el repositorio principal por @mytharcher
- **[Gestor de copias de seguridad]** Se añadió bloqueo para la copia de seguridad programada en nodos de clúster por @mytharcher
- **[Gestor de migraciones]** Mejoras en las comprobaciones de migración, soporte para descarga de SQL, formato de registros y visibilidad del proceso de ejecución por @cgyrock

### 🐛 Corrección de errores

- **[indefinido]** Se corrigió un problema por el que, después de la actualización, el sistema indicaba que no se podía encontrar plugin-block-reference. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust
- **[cliente]**

  - Datos de subformulario y subtabla no mostrados debido a la comprobación de permisos ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos
  - Se corrigió el problema por el que el botón de colapsar del formulario de filtro v2 dejaba de funcionar después de ordenar los campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe
  - Se corrigió el problema por el que los campos personalizados en los valores de campo del formulario Filtro no podían renderizar el tipo de entrada de valor correcto ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe
  - Se corrigió el problema por el que faltaban las acciones de filtro y actualización en la página de gestión de plantillas de referencia (v1). ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust
  - Se corrigió el problema por el que el bloque de detalles de una colección SQL encontraba un error al cargar datos. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust
  - Se corrigió el problema por el que las reglas de vinculación de campos en el bloque de detalles no surtían efecto durante la renderización inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust
  - Los bloques V2 ahora solo muestran las acciones compatibles con la fuente de datos actual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe
  - Se corrigió un problema de estilo del botón de retroceso en las subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe
  - Se corrigió la reversión de la navegación del enlace emergente después de cerrar la vista ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe
  - Se corrigió la validación para campos obligatorios ocultos por vinculación en modo de configuración ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe
  - Se corrigió el recorte de pestañas y se aseguró un ancho mínimo de pestaña en modo de diseño ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe
  - Se corrigieron las actualizaciones retrasadas de la IU para la alternancia de ocultación de columnas de subtabla y la eliminación consecutiva de columnas ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe
  - Se corrigió un problema por el que el bloque de datos original no se actualizaba después de editar datos en la ventana emergente del campo de asociación. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust
  - Se deshabilitó la adición de bloques para registros asociados muchos a muchos (array) para evitar errores. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust
  - Se corrigió un problema por el que el bloque de datos no se actualizaba al cambiar de menú. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust
  - Se corrigió el problema por el que el componente CollectionField no se renderizaba en el componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher
  - Se corrigió la aparición de dos validaciones obligatorias en el formulario de actualización de registro ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx
- **[servidor]**

  - Se corrigió el problema de error en las consultas de datos de fuentes de datos que no son de base de datos ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock
  - Se resolvió el problema de caché añadiendo un hash a los assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos
- **[gestor de bloqueos]** Se corrigió el problema de condición de carrera del gestor de bloqueos ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher
- **[base de datos]**

  - Se corrigió la falta de la opción 'Paginación simple' en la plantilla de vista de la colección. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock
  - La regla de validación de precisión para campos numéricos no está surtiendo efecto ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile
  - Se corrigió el fallo de la comprobación personalizada de expresiones regulares en campos en v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx
- **[motor de flujo]** Se corrigió un problema por el que ctx.exit no podía terminar la ejecución de flujos de eventos definidos por el usuario. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust
- **[Control de acceso]**

  - Usar collection.filterTargetKey en lugar de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos
  - Se corrigió el error de modificación de datos de la fuente de datos de la API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock
  - La instancia de base de datos utilizada al establecer los metadatos de ACL es incorrecta ([#8747](https://github.com/nocobase/nocobase/pull/8747)) por @2013xile
- **[Plantillas de IU]**

  - Se corrigió el problema por el que los registros de asociación no se podían cargar correctamente después de guardar el bloque de detalles como plantilla. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust
  - Se corrigió el error de renderizado para el bloque de referencia del panel de acciones. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust
  - Se corrigió el problema por el que el flujo de eventos del bloque de referencia en el bloque de tabla no podía configurarse con un flujo de eventos de clic en fila. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust
  - Se corrigió un problema por el que reutilizar la plantilla de bloque de registro actual para el bloque de detalles y el bloque de formulario de edición podía causar que los datos no se cargaran correctamente. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust
  - Se corrigió un problema por el que los cambios en las propiedades realizados en el flujo de eventos de un bloque de plantilla no surtían efecto. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust
- **[Visor de archivos de Office]** Se cambió la altura del modal a un valor adecuado para mostrar más contenido del archivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher
- **[Acción: Exportar registros]**

  - Se corrigió el problema por el que el campo belongsToArray aparecía en blanco en el excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock
  - Se corrigió el problema por el que los campos de tipo numérico en archivos excel se mostraban como cadenas ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock
- **[Flujo de trabajo]** Se corrigió el problema por el que el marcador de posición de arrastre de nodo se mostraba incorrectamente al arrastrar bloques en el nodo de aprobación ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher
- **[Bloque: Lista]** Se corrigió un problema por el que los campos del bloque de lista no podían usar la variable de registro actual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust
- **[Fuente de datos: Principal]**

  - La actualización del valor predeterminado de un campo JSON no surte efecto ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile
  - Error de sincronización de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile
- **[Empleados de IA]**

  - Se corrigieron problemas por los que dashscope/deepseek/kimi no podían leer los archivos de documentos subidos. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock
  - Se corrigió el error de llamada a herramienta al usar el modelo de razonamiento deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock
  - Se corrigió el error de chat del empleado de IA mientras la base de conocimiento estaba habilitada ([#8746](https://github.com/nocobase/nocobase/pull/8746)) por @cgyrock
  - Se corrigió un problema de renderizado de la configuración de la fuente de datos de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock
  - Se resolvió el problema por el que el mensaje de IA se renderizaba con longitud 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) por @heziqiang
- **[Motor de flujo]** Se corrigió el error de destrucción de SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) por @chenos
- **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió el problema por el que el flujo de trabajo de acción personalizada se colgaba al ejecutarse como subflujo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher
- **[Flujo de trabajo: JavaScript]** Se corrigió que los casos de prueba no pasaran en Windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) por @mytharcher
- **[Visualización de datos]** Se corrigió la i18n para el texto de entrada del plugin de gráficos ([#8716](https://github.com/nocobase/nocobase/pull/8716)) por @heziqiang
- **[Multi-espacio]** Se corrigió el error de permiso de espacio al crear datos con la clave primaria por @jiannx
- **[Impresión de plantilla]** Se corrigió el problema por el que la API de ACL cambió pero no se adaptó al plugin por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Se corrigió el problema por el que los asignados no seguían el orden configurado en el nodo por @mytharcher
  - Se corrigió el problema por el que el resultado de la consulta no se mostraba debido a nodos filtrados por tipo por @mytharcher
  - Se corrigió el problema por el que el parámetro appends se filtraba por ACL por @mytharcher
  - Se corrigió el problema de ACL por el que el valor de asociación no debería crearse o actualizarse cuando el usuario no tiene permiso por @mytharcher
  - Se añadió un parámetro faltante para evitar que las asociaciones no se actualicen al enviar una nueva aprobación por @mytharcher
  - Se corrigieron etiquetas sin traducir en los detalles de procesamiento de aprobación por @zhangzhonghe
  - Se corrigió el error lanzado causado por la falta del valor de `dataAfter` cuando se añadió o delegó por @mytharcher
  - Sanitizar los valores de asociación en las acciones de aprobación, para evitar cualquier manipulación de datos más allá del permiso por @mytharcher
  - Se corrigió el problema por el que se lanzaba un error al ejecutar el flujo de trabajo de aprobación manualmente por @mytharcher
  - Sanitizar los valores de asociación en las acciones de aprobación, para evitar cualquier manipulación de datos más allá del permiso por @mytharcher
- **[Gestor de correo electrónico]** Se corrigió el análisis del formato del ID de contenido de la imagen por @jiannx
- **[Gestor de migraciones]**

  - Se corrigió la falta de descripción de la migración y se estableció la hora actual como predeterminada por @cgyrock
  - Se corrigió el error de compilación por @mytharcher
  - Se ajustó el directorio temporal dentro del almacenamiento para admitir su uso en modo clúster por @mytharcher
  - Se corrigió una posible congelación del proceso causada por el registro de sentencias SQL excesivamente grandes incluidas en las excepciones de error de migración por @cgyrock
