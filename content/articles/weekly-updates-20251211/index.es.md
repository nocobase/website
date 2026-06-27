---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: Soporte para personalizar estilos globales en el editor de temas y soporte para establecer reglas de ordenamiento predeterminadas en el bloque de detalles, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está pensada principalmente para que los usuarios de prueba recopilen comentarios y optimicen las funciones. Ideal para usuarios de prueba que quieran experimentar las nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.24](https://www.nocobase.com/en/blog/v1.9.24)

*Fecha de lanzamiento: 2025-12-09*

### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema por el que el componente `RemoteSelect` cargaba incorrectamente un registro cuando el valor es nulo ([#8137](https://github.com/nocobase/nocobase/pull/8137)) por @mytharcher
- **[Campo de colección: Secuencia]** Se mejora la robustez del plugin-field-sequence al manejar el comando de reparación ([#8139](https://github.com/nocobase/nocobase/pull/8139)) por @cgyrock
- **[Notificación: Correo electrónico]** Se corrige la limitación de conexión de la notificación por correo electrónico ([#8119](https://github.com/nocobase/nocobase/pull/8119)) por @jiannx

### [v1.9.23](https://www.nocobase.com/en/blog/v1.9.23)

*Fecha de lanzamiento: 2025-12-09*

### 🚀 Mejoras

- **[auth]** Se corrige [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile
- **[Acción: Importar registros]** Se permite seleccionar ID para los campos de importación ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh

### 🐛 Corrección de errores

- **[servidor]** Se corrige un problema por el que los flujos de trabajo activados no se añadían a la cola de procesamiento después de importar datos, asegurando que los flujos de trabajo se ejecuten según lo esperado inmediatamente después de la importación ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher

### [v1.9.21](https://www.nocobase.com/en/blog/v1.9.21)

*Fecha de lanzamiento: 2025-12-07*

### 🚀 Mejoras

- **[Registros de auditoría]** Se actualiza el campo de identificador único a `texto` para evitar el desbordamiento de la longitud del identificador durante ediciones masivas por @2013xile

### 🐛 Corrección de errores

- **[Flujo de trabajo: Aprobación]** Se corrige el problema de que no se cargaban datos al cargar aprobaciones relacionadas con variables de ámbito ACL por @mytharcher

### [v1.9.20](https://www.nocobase.com/en/blog/v1.9.20)

*Fecha de lanzamiento: 2025-12-05*

### 🎉 Nuevas funciones

- **[Campo de colección: Secuencia]** Se actualizan automáticamente los campos de secuencia después de la migración de datos ([#8063](https://github.com/nocobase/nocobase/pull/8063)) por @cgyrock

### 🚀 Mejoras

- **[Gestor de migraciones]** Se actualizan automáticamente los campos de secuencia después de la migración de datos por @cgyrock

### 🐛 Corrección de errores

- **[Flujo de trabajo]** Se corrige el problema de que se lanzaba un error en el lienzo de ejecución cuando se eliminaba un nodo ([#8090](https://github.com/nocobase/nocobase/pull/8090)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Se corrige el problema de que se lanzaba un error al cargar una aprobación relacionada en modo de solo rol de unión por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.18](https://www.nocobase.com/en/blog/v1.9.0-beta.18)

*Fecha de lanzamiento: 2025-12-09*

### 🎉 Nuevas funciones

- **[Campo de colección: Secuencia]** Se actualizan automáticamente los campos de secuencia después de la migración de datos ([#8063](https://github.com/nocobase/nocobase/pull/8063)) por @cgyrock
- **[Fuente de datos: API REST]** Se añaden opciones de `transformador de mensajes de error` en la configuración de la fuente de datos de la API RESTful por @cgyrock
- **[Auth: OIDC]** Se soporta la redirección automática a la URL de SSO cuando no está autenticado por @heziqiang

### 🚀 Mejoras

- **[auth]** Se corrige [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile
- **[cliente]**

  - Se muestran las opciones colapsadas al pasar el ratón en el componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh
  - Se optimizan los mensajes de validación para subtablas ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh
  - Se añade estado de carga para los botones de acción de actualizar registro y eliminar registro, evitando solicitudes duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher
  - Se usan tripletes de llaves (`{{{` y `}}}`) para variables en el contenido del mensaje, para evitar que las variables sean escapadas por Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher
- **[Acción: Importar registros]** Se permite seleccionar ID para los campos de importación ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh
- **[Flujo de trabajo]** Se añade contexto de fuente de datos "principal" para UserSelect, con el fin de proporcionar un componente más común que pueda usarse en otros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher
- **[Campo de colección: Markdown(Vditor)]** Se ajusta el ancho del contenido de vditor en pantalla completa ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh
- **[Gestor de tareas asíncronas]** Se mejoran los mensajes de error para tareas asíncronas, proporcionando a los usuarios razones específicas para los fallos de las tareas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher
- **[Acción: Importar registros Pro]** Se mejoran los mensajes de error para tareas asíncronas, proporcionando a los usuarios razones específicas para los fallos de las tareas por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Se corrige la selección de variables en AssigneeSelect, limitando la selección solo a PK o FK de la colección de usuarios por @mytharcher
  - Se usa un componente común para reducir el código duplicado por @mytharcher
  - Se hace que la carga útil de la ejecución manual (o activada por un nodo de subflujo) sea compatible con el registro o la clave primaria. Se evita un problema de consistencia en el contexto del activador. por @mytharcher
  - Se reducen las asociaciones a cargar en la ventana emergente de aprobación, para proporcionar un mejor rendimiento por @mytharcher
- **[Registros de auditoría]** Se actualiza el campo de identificador único a `texto` para evitar el desbordamiento de la longitud del identificador durante ediciones masivas por @2013xile
- **[Gestor de migraciones]** Se actualizan automáticamente los campos de secuencia después de la migración de datos por @cgyrock

### 🐛 Corrección de errores

- **[servidor]** Se corrige un problema por el que los flujos de trabajo activados no se añadían a la cola de procesamiento después de importar datos, asegurando que los flujos de trabajo se ejecuten según lo esperado inmediatamente después de la importación ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher
- **[acl]** Se corrige un problema por el que la metainformación de ACL es incorrecta cuando los ámbitos de permiso de fuentes de datos externas utilizan variables relacionadas con el usuario actual ([#8013](https://github.com/nocobase/nocobase/pull/8013)) por @2013xile
- **[cliente]**

  - Se corrige un error de carga diferida en Variable.Input, que provocaba que el menú de opciones de variables se volviera a renderizar incorrectamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher
  - Se resuelve el error al añadir registros secundarios en un bloque de tabla de árbol de asociación ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh
  - Se corrige el problema de parpadeo del cuadro de selección desplegable de la regla de vinculación ([#8018](https://github.com/nocobase/nocobase/pull/8018)) por @zhangzhonghe
  - Se evita que se lance un error al abrir la configuración de valores predeterminados ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher
  - Se corrigen problemas de enrutamiento al usar un Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) por @zhangzhonghe
  - Se corrige que remote select no muestre la etiqueta correcta para valores no objeto ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh
- **[base de datos]** Se corrige: se elimina el procesamiento UTC en la conversión de tiempo para campos de solo hora para evitar cambios inducidos por la zona horaria. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu
- **[Acción: Importar registros]**

  - Los campos importados no coinciden con los campos establecidos en la configuración de ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile
  - Se corrige el problema de que se lanzaba un error cuando un campo en el xlsx importado tiene un valor `nulo` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher
  - Se corrige el problema al importar datos en una tabla de árbol ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock
- **[Flujo de trabajo]**

  - Se corrige el problema de que la página de ejecución lanzaba un error cuando los trabajos en un nodo no están definidos ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher
  - Se corrige el problema de que se lanzaba un error en el lienzo de ejecución cuando se eliminaba un nodo ([#8090](https://github.com/nocobase/nocobase/pull/8090)) por @mytharcher
  - Se corrige el problema de que la cola se cerraba antes de publicar los mensajes ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher
  - Se corrige el problema de que las ejecuciones preparadas no se enviaban a la cola antes de detenerse ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher
  - Se corrige el problema de que algunos menús de tareas del flujo de trabajo no se mostraban ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher
  - Se corrige el problema de que el enlace de la tarea llevaba a una página de error ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher
  - Se corrige que el recuento de tareas no se mostraba debido al mal uso del proveedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher
- **[Gestor de múltiples aplicaciones]** La configuración del nivel de registro no se aplica a las subaplicaciones ([#8045](https://github.com/nocobase/nocobase/pull/8045)) por @2013xile
- **[Control de acceso]** Se añade middleware para comprobaciones de permisos en operaciones de asociación para fuentes de datos externas ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile
- **[Campo de colección: Muchos a muchos (matriz)]** Se corrige el problema por el que el campo de matriz m2m en la subtabla no podía actualizarse ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock
- **[Editor de temas]** Se habilita el selector de temas en dispositivos móviles ([#8046](https://github.com/nocobase/nocobase/pull/8046)) por @zhangzhonghe
- **[Visualización de datos]**

  - La configuración de campos de filtro para colecciones de fuentes de datos externas no muestra propiedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile
  - Se resuelve el problema de que la consulta del gráfico no soportaba el ámbito de datos ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile
- **[Colección: Árbol]** Se corrigen fallos en la actualización de la tabla de rutas causados por una búsqueda incorrecta del campo padre del árbol ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile
- **[Flujo de trabajo: Nodo manual]** Se corrige el problema de que el recuento de tareas manuales no es correcto ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher
- **[Gestor de tareas asíncronas]** Se añade una regla de migración para la colección `asyncTasks`, evitando que los registros de tareas asíncronas sean migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher
- **[Gestor de fuentes de datos]** Se corrige el fallo en la actualización de la contraseña de la fuente de datos cuando se cambia la contraseña de la base de datos ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock
- **[Departamentos]** Se corrige el problema de que los campos asociados al departamento no podían editarse ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang
- **[Flujo de trabajo: Subflujo]** Se corrige el problema de que el flujo de trabajo seleccionado mostraba "N/A" cuando el recuento de flujos de trabajo es mayor de 200 por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Se corrige el archivo de idioma por @mytharcher
  - Se corrige el problema de que los registros de aprobación no se incluyen en el resultado del trabajo en la rama de retorno por @mytharcher
  - Se corrige el problema de que no se cargaban datos al cargar aprobaciones relacionadas con variables de ámbito ACL por @mytharcher
  - Se corrige un problema de permisos al obtener `approvalRecords.reassignee` debido a un cambio en `RemoteSelect` por @mytharcher
  - Se corrige el problema de que la acción de imprimir no funcionaba al actualizar la página con la ventana modal abierta por @mytharcher
  - Se añade migración para evitar errores de registro duplicado al añadir un índice por @mytharcher
  - Se corrige el problema de que el proceso es incorrecto al ramificar con orden y contrafirma por @mytharcher
  - Se corrige el problema de que el comentario en el resultado del trabajo es nulo después de que el usuario envíe la aprobación con un comentario por @mytharcher
  - Se corrige que no hay datos del solicitante en el contexto de ejecución después de que el usuario vuelva a enviar por @mytharcher
  - Se corrige el problema de que se lanzaba un error de permiso al cargar aprobaciones relacionadas con el registro en el panel de detalles por @mytharcher
  - Se corrige el problema de que la ventana emergente del aprobador no muestra un título por @zhangzhonghe
  - Se corrige el problema de que se lanzaba un error al cargar una aprobación relacionada en modo de solo rol de unión por @mytharcher
  - Se corrige el problema de que ocurría un OOM al listar aprobaciones por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.52](https://www.nocobase.com/en/blog/v2.0.0-alpha.52)

*Fecha de lanzamiento: 2025-12-07*

### 🎉 Nuevas funciones

- **[cliente]** se añade soporte para configuraciones de añadir/seleccionar/desasociar en subformulario de muchos ([#8099](https://github.com/nocobase/nocobase/pull/8099)) por @katherinehhh
- **[Fuente de datos: API REST]** Se añaden opciones de `transformador de mensajes de error` en la configuración de la fuente de datos de la API RESTful por @cgyrock

### 🚀 Mejoras

- **[auth]** Se corrige [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile
- **[Acción: Importar registros]**

  - se permite seleccionar ID para los campos de importación ([#8133](https://github.com/nocobase/nocobase/pull/8133)) por @katherinehhh
  - se permite seleccionar ID para los campos de importación ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Se cambia la API para obtener un solo elemento de aprobación y se simplifica el código por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - se corrige que el estado deshabilitado del hijo no bloquee la selección del campo de relación ([#8131](https://github.com/nocobase/nocobase/pull/8131)) por @katherinehhh
  - Se corrige el problema por el que el componente `RemoteSelect` cargaba incorrectamente un registro cuando el valor es nulo ([#8137](https://github.com/nocobase/nocobase/pull/8137)) por @mytharcher
  - Se corrige un problema por el que el ancho del componente de la interfaz de usuario era inconsistente al seleccionar "Pasado" o "Siguiente" para los campos de filtro de fecha. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) por @gchust
  - Se corrige un problema por el que las etiquetas de campo predeterminadas en el bloque de formulario de filtro no podían traducirse correctamente en varios idiomas. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) por @gchust
  - Se corrige un problema por el que los estilos de título y descripción del bloque JS eran inconsistentes con otros bloques. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) por @gchust
  - se corrige que la subtabla anidada en el subformulario no muestra datos ([#8117](https://github.com/nocobase/nocobase/pull/8117)) por @katherinehhh
  - se corrige el problema de salto de línea en la información sobre herramientas del campo de texto largo ([#8122](https://github.com/nocobase/nocobase/pull/8122)) por @katherinehhh
  - Se corrige un problema por el que los datos seleccionables para los campos de asociación en el bloque de formulario de filtro eran incorrectos. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) por @gchust
  - Se corrige un problema por el que las opciones seleccionables no se listaban completamente al usar los operadores "es cualquiera de" o "no es ninguno de" para el filtrado basado en campos de opción. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) por @gchust
  - Se corrige un problema por el que las configuraciones de campos personalizados en el formulario de filtro no se rellenaban previamente correctamente y algunas configuraciones no surtían efecto. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) por @gchust
  - Se corrige un problema por el que al borrar los valores de filtro de tiempo entre y activar el filtro de nuevo se producía un error. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) por @gchust
  - Se corrige un problema por el que el valor del campo numérico no se rellenaba previamente correctamente en la acción de filtro. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) por @gchust
  - Se corrige un problema por el que algunos operadores de campo en los formularios de filtro no lograban filtrar los datos correctamente. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) por @gchust
  - Se corrige un problema por el que el filtrado en campos de Casilla de verificación no surtía efecto. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) por @gchust
- **[motor-de-flujo]**

  - corrección: conversión incorrecta al usar tipo entero como opciones de enumeración ([#8138](https://github.com/nocobase/nocobase/pull/8138)) por @chenos
  - Se corrige que los elementos del menú de submodelos conmutables fallan cuando se omite `useModel` infiriéndolo de `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) por @zhangzhonghe
- **[servidor]** Se corrige un problema por el que los flujos de trabajo activados no se añadían a la cola de procesamiento después de importar datos, asegurando que los flujos de trabajo se ejecuten según lo esperado inmediatamente después de la importación ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher
- **[Notificación: Correo electrónico]** Se corrige la limitación de conexión de la notificación por correo electrónico ([#8119](https://github.com/nocobase/nocobase/pull/8119)) por @jiannx
- **[Campo de colección: Fórmula]** Se corrige un problema por el que los campos de fórmula en la acción de filtro y el bloque de formulario de filtro no podían escribir valores de entrada. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) por @gchust
- **[Multi-espacio]** Se corrige la creación de otros campos en la colección del sistema por @jiannx

### [v2.0.0-alpha.51](https://www.nocobase.com/en/blog/v2.0.0-alpha.51)

*Fecha de lanzamiento: 2025-12-07*

### 🎉 Nuevas funciones

- **[cliente]**

  - Se soporta la personalización de estilos globales en el editor de temas ([#7960](https://github.com/nocobase/nocobase/pull/7960)) por @ljmiaoo
  - Se soporta el establecimiento de una regla de ordenación predeterminada en el bloque de detalle ([#8070](https://github.com/nocobase/nocobase/pull/8070)) por @katherinehhh
  - Se soporta el establecimiento del tipo de datos para el campo Número (opciones: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) por @chenos
- **[Campo de colección: Secuencia]** Se actualizan automáticamente los campos de secuencia después de la migración de datos ([#8063](https://github.com/nocobase/nocobase/pull/8063)) por @cgyrock

### 🚀 Mejoras

- **[cliente]**

  - se corrige el salto de paginación de la subtabla después de eliminar una fila y se añade soporte para reglas de validación de columnas ([#8094](https://github.com/nocobase/nocobase/pull/8094)) por @katherinehhh
  - se ajusta la visualización de campos grandes en la subtabla editable ([#8078](https://github.com/nocobase/nocobase/pull/8078)) por @katherinehhh
  - se soporta puntos suspensivos para el contenido del campo JSON que se desborda ([#8067](https://github.com/nocobase/nocobase/pull/8067)) por @katherinehhh
- **[motor-de-flujo]**

  - Se añade la opción useCache a FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) por @zhangzhonghe
  - Se añade el método `removeModelWithSubModels` para eliminar recursivamente un modelo y sus submodelos ([#8064](https://github.com/nocobase/nocobase/pull/8064)) por @zhangzhonghe
- **[Bloque: GridCard]** se añade la configuración de recuento de filas a la tarjeta de cuadrícula y se reemplaza pageSize con cálculo automático ([#8055](https://github.com/nocobase/nocobase/pull/8055)) por @katherinehhh
- **[Registros de auditoría]** Se actualiza el campo de identificador único a `texto` para evitar el desbordamiento de la longitud del identificador durante ediciones masivas por @2013xile
- **[Gestor de migraciones]** Se actualizan automáticamente los campos de secuencia después de la migración de datos por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrige un problema por el que los campos configurados de un bloque eliminado no se eliminaban del bloque de filtro. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) por @gchust
  - se corrige el espacio extra cuando el botón está oculto en el modo de no configuración ([#8092](https://github.com/nocobase/nocobase/pull/8092)) por @katherinehhh
  - Se corrige un problema por el que el texto del botón de restablecer en el bloque de formulario de filtro no podía modificarse. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) por @gchust
  - Se corrige un problema por el que la entrada de campo no soportaba múltiples valores al usar los operadores \$in / \$notIn para filtrar campos. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) por @gchust
  - Se corrige un problema por el que los bloques de datos recién añadidos no aparecían automáticamente en el menú de campos del bloque de formulario de filtro. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) por @gchust
  - El menú de configuración para los campos de asociación en los formularios de filtro no debe mostrar la opción de creación rápida. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) por @gchust
  - se corrige el problema de datos de subtabla de asociación en el bloque Lista ([#8082](https://github.com/nocobase/nocobase/pull/8082)) por @katherinehhh
  - se corrige que las reglas de validación de campos numéricos de la configuración de la colección no se aplican ([#8025](https://github.com/nocobase/nocobase/pull/8025)) por @katherinehhh
  - Se corrige un problema por el que los campos en los formularios de filtro estaban restringidos por las reglas de validación del backend para los campos. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) por @gchust
  - problema de edición rápida del campo json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) por @katherinehhh
  - se corrige el problema de visualización de campos grandes en la edición de subtabla ([#8069](https://github.com/nocobase/nocobase/pull/8069)) por @katherinehhh
  - se corrige que la creación rápida lanza un error cuando allowMultiple está deshabilitado en la selección de registros de asociación ([#8034](https://github.com/nocobase/nocobase/pull/8034)) por @katherinehhh
  - se corrige que el campo json debe enviarse como un objeto ([#8057](https://github.com/nocobase/nocobase/pull/8057)) por @katherinehhh
  - Se corrige un problema por el que la tecla Enter no podía usarse para activar la acción de filtro. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) por @gchust
- **[motor-de-flujo]**

  - Se corrige un problema por el que las opciones de configuración del componente anterior permanecían visibles en el menú después de cambiar los componentes de campo. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) por @gchust
  - Se mueve useEffect antes del retorno condicional en FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) por @zhangzhonghe
  - Se corrige un problema por el que aparecían campos de asociación no soportados en los campos de operación de filtro. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) por @gchust
- **[acl]** corrección: acl.allow se ejecutaba demasiado pronto ([#8065](https://github.com/nocobase/nocobase/pull/8065)) por @chenos
- **[Gestor de archivos]**

  - Se corrige la visualización incorrecta de datos de subdetalle en los bloques Lista y GridCard ([#8087](https://github.com/nocobase/nocobase/pull/8087)) por @katherinehhh
  - Se corrige que el campo de adjunto no se muestra correctamente en la subtabla readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) por @katherinehhh
- **[Flujo de trabajo]**

  - Se corrige el problema de que se lanzaba un error en el lienzo de ejecución cuando se eliminaba un nodo ([#8090](https://github.com/nocobase/nocobase/pull/8090)) por @mytharcher
  - Se corrige el problema de que la página de ejecución lanzaba un error cuando los trabajos en un nodo no están definidos ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher
- **[Campo de colección: Fórmula]** Se corrige un problema por el que los campos de fórmula no podían añadirse al bloque de formulario de filtro. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) por @gchust
- **[Bloque: Panel de acciones]** se optimiza el estilo en la disposición de Lista del bloque del panel de acciones ([#8084](https://github.com/nocobase/nocobase/pull/8084)) por @katherinehhh
- **[Empleados de IA]**

  - Se resuelve el problema de que el nombre del rol de la fuente de datos no se compilaba ([#8076](https://github.com/nocobase/nocobase/pull/8076)) por @heziqiang
  - Se corrige un problema por el que algunos campos de registro actual no podían mostrarse en el componente de selección de variables. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) por @gchust
- **[Acción: Importar registros]** Los campos importados no coinciden con los campos establecidos en la configuración de ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile
- **[Control de acceso]** Se añade middleware para comprobaciones de permisos en operaciones de asociación para fuentes de datos externas ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Se corrige el problema de que no se cargaban datos al cargar aprobaciones relacionadas con variables de ámbito ACL por @mytharcher
  - Se corrige el problema de que los datos rellenados desaparecían en el formulario del asignado por @mytharcher
  - Se corrige el problema de que se lanzaba un error de permiso al cargar aprobaciones relacionadas con el registro en el panel de detalles por @mytharcher
  - Se corrige el problema de que el proceso es incorrecto al ramificar con orden y contrafirma por @mytharcher
  - Se corrige el problema de que ocurría un OOM al listar aprobaciones por @mytharcher
  - Se corrige el problema de que los registros de aprobación no se incluyen en el resultado del trabajo en la rama de retorno por @mytharcher
  - Se corrige el problema de que la ventana emergente del aprobador no muestra un título por @zhangzhonghe
  - Se corrige el problema de que se lanzaba un error al cargar una aprobación relacionada en modo de solo rol de unión por @mytharcher
- **[Gestor de correo electrónico]**

  - Manejo de datos anómalos por @jiannx
  - No se sincroniza el estado programado de Gmail por @jiannx
