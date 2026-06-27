---
title: "Actualizaciones Semanales｜Agregar Protecciones de Compatibilidad de Comandos de API Dinámicos"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 28 de mayo al 4 de junio de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones aún más. Ideal para usuarios de prueba que quieren experimentar nuevas funciones temprano y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.61](https://www.nocobase.com/en/blog/v2.0.61)

*Fecha de lanzamiento: 2026-06-03*

### 🚀 Mejoras

- **[cliente]** Se mejoró el soporte de autocompletado para algunas funciones RunJS integradas. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) por @gchust
- **[indefinido]** Se actualizó la documentación de Embed NocoBase para el plugin de código abierto. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) por @zhangzhonghe
  Referencia: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Corrección de errores

- **[motor-de-flujo]**

  - Se corrigió el problema por el cual la página se quedaba bloqueada al establecer valores de campo para un subformulario. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) por @gchust
  - Se corrigió un problema por el cual la ventana emergente mostraba datos de UI desactualizados después de alternar el interruptor del modo de configuración de UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) por @gchust
- **[cliente]**

  - Se corrigió el comportamiento incorrecto de las reglas de vinculación de acciones de registro en bloques de tabla. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) por @gchust
  - Se corrigió el problema por el cual los datos de campo de relación seleccionados no se mostraban en dispositivos móviles. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) por @zhangzhonghe
  - Se corrigió el problema por el cual los campos se volvían de solo lectura cuando se mostraban de nuevo después de estar ocultos por reglas de vinculación. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) por @katherinehhh
- **[cli]** Se corrigió la plantilla de nginx para servir activos `.mjs` con el tipo MIME de JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) por @mytharcher
- **[base de datos]** Se corrigió un problema por el cual la importación de valores de contraseña numéricos podía fallar. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) por @2013xile
- **[Empleados AI]** Se corrigió la validación de la URL base del proveedor de AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) por @cgyrock
- **[Motor de flujo]**

  - Se corrigió un problema por el cual arrastrar pestañas de ventanas emergentes para reordenarlas no funcionaba. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) por @gchust
  - Se corrigió un problema por el cual modificar un bloque después de duplicar su plantilla podía afectar inadvertidamente el contenido del bloque original. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) por @gchust
- **[Notificación: Mensaje en la aplicación]** Se corrigió un riesgo de inyección SQL en el filtro de marca de tiempo del canal de notificaciones en la aplicación. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) por @mytharcher
- **[Configuración de licencia]** Se corrigió el problema por el cual la página de configuración de licencia podía colgarse durante mucho tiempo cuando la verificación de inicio de sesión de pkg era lenta o inalcanzable. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) por @hongboji
- **[Flujo de trabajo: JavaScript]** Se aclaró que el modo de soporte del módulo JavaScript del flujo de trabajo no es seguro y no es un límite de permisos. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) por @mytharcher
  Referencia: [Flujo de trabajo JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Control de acceso]** Se corrigieron permisos incompletos en el primer inicio de sesión cuando un rol de unión era el rol predeterminado. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) por @2013xile
- **[Administrador de archivos]** Se corrigió la validación de la ruta de almacenamiento de archivos local para evitar que rutas inseguras escapen de la raíz de almacenamiento configurada. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) por @mytharcher
- **[Política de contraseñas]** Se corrigió un problema por el cual la validación de la política de contraseñas podía fallar para valores de contraseña numéricos. por @2013xile

### [v2.0.60](https://www.nocobase.com/en/blog/v2.0.60)

*Fecha de lanzamiento: 2026-05-29*

### 🚀 Mejoras

- **[Empleados AI]** Se mejoró el campo URL base de LLM para que pueda usar variables de ámbito global en formularios de creación y edición. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock

### 🐛 Corrección de errores

- **[cliente]** Corregir el ancho de la insignia en la barra de navegación superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
- **[Empleados AI]** Se corrigió que los botones de acceso directo de AI obtuvieran un contexto de bloque vacío después de eliminar los bloques de tabla referenciados. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
- **[Administrador de migraciones]** Corregir las diferencias de migración de PostgreSQL para que las columnas heredadas secundarias no se eliminen cuando una columna local se vuelve heredada. por @hongboji

### [v2.0.59](https://www.nocobase.com/en/blog/v2.0.59)

*Fecha de lanzamiento: 2026-05-28*

### 🐛 Corrección de errores

* **[ai]** Se fijaron las dependencias de LangChain a versiones estables para evitar fallos en las llamadas a herramientas del modelo Ollama y evitar afectar a versiones posteriores aguas arriba. ([#9604](https://github.com/nocobase/nocobase/pull/9604)) por @cgyrock
* **[motor-de-flujo]** Se corrigió el nivel de registro incorrecto del frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) por @gchust
* **[Colección: Árbol]** Se corrigieron mensajes de error poco claros cuando las consultas fallaban debido a relaciones padre-hijo circulares en datos de árbol. ([#9603](https://github.com/nocobase/nocobase/pull/9603)) por @zhangzhonghe
* **[AI: Base de conocimiento]** Se fijaron las dependencias de LangChain a versiones estables para evitar fallos en las llamadas a herramientas del modelo Ollama y evitar afectar a versiones posteriores aguas arriba. por @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.44](https://www.nocobase.com/en/blog/v2.1.0-beta.44)

*Fecha de lanzamiento: 2026-06-03*

### 🚀 Mejoras

- **[Flujo de trabajo: Aprobación]** Se ajustaron las reglas de validación para las configuraciones de activador y nodo de aprobación para garantizar que existan los campos relacionados con la UI. por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Se corrigió el problema por el cual los datos de campo de relación seleccionados no se mostraban en dispositivos móviles. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) por @zhangzhonghe
- **[cliente-v2]**

  - Se corrigieron errores al guardar reglas de vinculación de menú. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) por @zhangzhonghe
  - Se corrigió el espaciado excesivo sobre los bloques en páginas v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) por @zhangzhonghe
- **[motor-de-flujo]** Se corrigió el problema por el cual la página se quedaba bloqueada al establecer valores de campo para un subformulario. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) por @gchust
- **[Empleados AI]**

  - Se corrigió la validación de la URL base del proveedor de AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) por @cgyrock
  - Se corrigieron errores de `ctx.get` en nodos de flujo de trabajo de empleados AI. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) por @cgyrock
- **[Notificación: Mensaje en la aplicación]** Se corrigió un riesgo de inyección SQL en el filtro de marca de tiempo del canal de notificaciones en la aplicación. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) por @mytharcher
- **[Acción: Duplicar registro]** Se corrigió el problema por el cual el estado del botón no se restablecía cuando fallaba el envío del registro duplicado. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) por @katherinehhh
- **[Calendario]** Se corrigió el problema por el cual los colores de los eventos del calendario no se renderizaban desde el campo de color configurado en páginas v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) por @jiannx
- **[Motor de flujo]**

  - Se corrigió un problema por el cual modificar un bloque después de duplicar su plantilla podía afectar inadvertidamente el contenido del bloque original. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) por @gchust
  - Se corrigió un problema por el cual arrastrar pestañas de ventanas emergentes para reordenarlas no funcionaba. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) por @gchust

### [v2.1.0-beta.43](https://www.nocobase.com/en/blog/v2.1.0-beta.43)

*Fecha de lanzamiento: 2026-06-02*

### 🎉 Nuevas funciones

- **[cliente-v2]** Agregar `TypedVariableInput` para que los campos de puerto SMTP y modo seguro del plugin de correo electrónico v2 puedan aceptar una constante tipada o una variable `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) por @Molunerfinn
- **[Control de acceso]** Se migraron las páginas de configuración de Usuarios y Roles y Permisos a v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) por @jiannx

### 🚀 Mejoras

- **[indefinido]** Actualizar la documentación de Embed NocoBase para el plugin de código abierto ([#9642](https://github.com/nocobase/nocobase/pull/9642)) por @zhangzhonghe
  Referencia: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[cliente]** Se mejoró el soporte de autocompletado para algunas funciones RunJS integradas. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) por @gchust
- **[cli]** mejorar la guía de inicialización y autoactualización ([#9633](https://github.com/nocobase/nocobase/pull/9633)) por @chenos

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir el problema por el cual los bloques pueden mostrarse incorrectamente como eliminados después de actualizar la página ([#9662](https://github.com/nocobase/nocobase/pull/9662)) por @zhangzhonghe
  - Se corrigió el comportamiento incorrecto de las reglas de vinculación de acciones de registro en el bloque de tabla. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) por @gchust
  - (regla de vinculación) corregir que los campos se vuelvan de solo lectura cuando se muestran después de estar ocultos ([#9649](https://github.com/nocobase/nocobase/pull/9649)) por @katherinehhh
- **[cli]** Corregir la plantilla de nginx para servir activos `.mjs` con el tipo MIME de JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) por @mytharcher
- **[base de datos]** Se corrigió un problema por el cual la importación de valores de contraseña numéricos podía fallar ([#9635](https://github.com/nocobase/nocobase/pull/9635)) por @2013xile
- **[motor-de-flujo]**

  - Se corrigió un problema por el cual la ventana emergente mostraba datos de UI desactualizados después de alternar el interruptor del modo de configuración de UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) por @gchust
  - Corregir el problema por el cual la búsqueda de campo se borra al pasar el cursor sobre campos de asociación ([#9646](https://github.com/nocobase/nocobase/pull/9646)) por @zhangzhonghe
- **[cliente-v2]** preservar valores de campo asignados ([#9640](https://github.com/nocobase/nocobase/pull/9640)) por @katherinehhh
- **[Administrador de archivos]** Se corrigió la validación de la ruta de almacenamiento de archivos local para evitar que rutas inseguras escapen de la raíz de almacenamiento configurada. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) por @mytharcher
- **[Bloque: Gantt]** Se mejoró la colocación de la información sobre herramientas de Gantt para evitar cubrir las barras de tareas y se alinearon las etiquetas de las tareas de manera consistente dentro y fuera de las barras ([#9638](https://github.com/nocobase/nocobase/pull/9638)) por @jiannx
- **[Control de acceso]** Se corrigieron permisos incompletos en el primer inicio de sesión cuando el rol de unión es el predeterminado ([#9632](https://github.com/nocobase/nocobase/pull/9632)) por @2013xile
- **[Configuración de licencia]** Se corrigió que la página de configuración de licencia se colgara durante mucho tiempo cuando la verificación de inicio de sesión de pkg es lenta o inalcanzable ([#9650](https://github.com/nocobase/nocobase/pull/9650)) por @hongboji
- **[Flujo de trabajo: JavaScript]** Aclarar que el modo de soporte del módulo JavaScript del flujo de trabajo no es seguro y no es un límite de permisos ([#9629](https://github.com/nocobase/nocobase/pull/9629)) por @mytharcher
  Referencia: [Flujo de trabajo JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Política de contraseñas]** Se corrigió un problema por el cual la validación de la política de contraseñas podía fallar para valores de contraseña numéricos por @2013xile

### [v2.1.0-beta.40](https://www.nocobase.com/en/blog/v2.1.0-beta.40)

*Fecha de lanzamiento: 2026-05-30*

### 🎉 Nuevas funciones

- **[cliente-v2]** Soporte para la asignación de valores de campo en acciones de envío de formularios ([#9570](https://github.com/nocobase/nocobase/pull/9570)) por @katherinehhh
- **[Visor de archivos de Office]** Migrar el plugin de vista previa de archivos de Office al cliente v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) por @Molunerfinn

### 🚀 Mejoras

- **[Administrador de notificaciones]** Migrar los plugins relacionados con notificaciones a v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) por @Molunerfinn

### 🐛 Corrección de errores

- **[cliente]** Corregir el ancho de la insignia en la barra de navegación superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
- **[Bloque: Gantt]** Se corrigió la ruta de la carpeta compartida de gantt v2 y se agregó el rayado de cebra. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) por @jiannx
- **[Configuración de licencia]** Se agregó soporte client-v2 para la configuración de licencias y la inyección de licencias comerciales. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) por @jiannx
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir opciones duplicadas de Trigger workflow en los menús de acción de bloques v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) por @zhangzhonghe
- **[Empleados AI]** Se corrigió que los botones de acceso directo de AI obtuvieran un contexto de bloque vacío después de eliminar los bloques de tabla referenciados. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
- **[plugin-commercial]** Se agregaron componentes de licencia comercial client-v2 y entrada de estado de licencia en la barra superior. por @jiannx
- **[Administrador de migraciones]** Corregir las diferencias de migración de PostgreSQL para que las columnas heredadas secundarias no se eliminen cuando una columna local se vuelve heredada. por @hongboji

### [v2.1.0-beta.38](https://www.nocobase.com/en/blog/v2.1.0-beta.38)

*Fecha de lanzamiento: 2026-05-29*

### 🎉 Nuevas funciones

- **[cli]** Agregar protecciones de compatibilidad de comandos de API dinámicos ([#9613](https://github.com/nocobase/nocobase/pull/9613)) por @chenos
- **[cliente-v2]**

  - Soporte para páginas v2 incrustadas y páginas de formulario público v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) por @zhangzhonghe
  - Reescribir la página del Administrador de plugins client-v2 en una UI de tarjetas responsiva con filtro de categoría, búsqueda, habilitar/deshabilitar/eliminar, Habilitación masiva y un modal de detalle del plugin; también hacer que la página del Administrador de plugins client-v1 sea responsiva en pantallas estrechas. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) por @Molunerfinn
- **[Flujo de trabajo]**

  - Agregar control de tiempo de espera para flujos de trabajo, soporte para abortar automáticamente la ejecución con tiempo de espera agotado si la opción de tiempo de espera está configurada ([#9363](https://github.com/nocobase/nocobase/pull/9363)) por @mytharcher
  - Se agregó una API de administrador para volver a ejecutar ejecuciones de flujo de trabajo iniciadas desde el principio o desde un nodo especificado. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher
- **[Bloque: Gantt]** Se agregó soporte v2 para el bloque Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) por @jiannx
- **[Flujo de trabajo: Webhook]** Agregar estado de respuesta 408 para flujo de trabajo de webhook con tiempo de espera agotado (modo síncrono) por @mytharcher
- **[Flujo de trabajo: Subflujo]** Soporte para la configuración de tiempo de espera en el flujo de trabajo por @mytharcher
- **[Auth: OIDC]** Migrar `plugin-auth-oidc` a la administración v2; el botón de inicio de sesión, el formulario de configuración de administración y la redirección automática SSO ahora funcionan bajo v2. por @Molunerfinn
- **[Flujo de trabajo: Aprobación]** Soporte para la configuración de tiempo de espera en el flujo de trabajo por @mytharcher
- **[Auth: LDAP]** Agregar entrada de cliente v2 para que el autenticador LDAP renderice su formulario de inicio de sesión y configuración de administración en aplicaciones v2. por @Molunerfinn

### 🚀 Mejoras

- **[cliente-v2]**

  - Agregar configuración de selección de filas de tabla v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) por @katherinehhh
  - Soporte para colores de acción del panel de acciones ([#9612](https://github.com/nocobase/nocobase/pull/9612)) por @katherinehhh
  - Eliminar la opción Oculto de la configuración del menú ([#9596](https://github.com/nocobase/nocobase/pull/9596)) por @zhangzhonghe
- **[cliente]** Eliminar la opción Oculto de la configuración de elementos del menú ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe
- **[cli]** Optimizar el flujo de actualización de la aplicación ([#9587](https://github.com/nocobase/nocobase/pull/9587)) por @chenos
- **[Empleados AI]** Se mejoró el campo URL base de LLM para que pueda usar variables de ámbito global en formularios de creación y edición. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock
- **[Restricción de IP]** Agregar un cliente v2 para el plugin de restricción de IP. por @Molunerfinn

### 🐛 Corrección de errores

- **[motor-de-flujo]**

  - Se corrigió el nivel de registro incorrecto del frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) por @gchust
  - Corregir menús en cascada inestables al escribir en cuadros de búsqueda ([#9473](https://github.com/nocobase/nocobase/pull/9473)) por @zhangzhonghe
  - Se corrigió un problema por el cual las reglas de vinculación de acciones de tabla se ejecutaban incorrectamente después de que un formulario se enviara con éxito en una ventana emergente. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust
- **[ai]** Se fijaron las dependencias de LangChain a versiones estables para evitar fallos en la ejecución de herramientas Ollama y evitar afectar a versiones posteriores aguas arriba ([#9604](https://github.com/nocobase/nocobase/pull/9604)) por @cgyrock
- **[cliente-v2]**

  - Corregir que las pestañas de inicio de sesión de la sub-aplicación rendericen plantillas de traducción sin procesar, y evitar que el cajón de edición del método de autenticación v2 pierda los valores de campo al enviar. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) por @Molunerfinn
  - Mejorar el rendimiento de la página del administrador de plugins usando CSS line-clamp en lugar de antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) por @Molunerfinn
- **[cliente]**

  - Corregir preservar el formato de hora para los campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - Corregir el estado oculto sincronizado para la vinculación de subformularios ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh
  - Aumentar el límite de carga de imágenes de entrada de escaneo ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - Corregir el valor emergente del selector de fecha móvil sincronizado ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - Corregir la desaparición de las pestañas de página después de cambiar de menú ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe
  - Corregir el problema por el cual la subtabla en el subformulario no podía agregar una segunda fila ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - Aumentar el límite de carga de imágenes de entrada de escaneo ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
- **[Colección: Árbol]** Corregir el error causado por datos padre-hijo circulares en colecciones de árbol ([#9603](https://github.com/nocobase/nocobase/pull/9603)) por @zhangzhonghe
- **[Flujo de trabajo: Evento de acción personalizada]**

  - Se corrigió que los botones de tabla de acción personalizada con contexto de múltiples registros permitieran incorrectamente seleccionar flujos de trabajo de contexto personalizados. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher
  - Filtrar las opciones de vinculación de flujo de trabajo de acción personalizada por la colección de bloques actual. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) por @mytharcher
- **[Administrador de archivos]**

  - Se mejoraron los mensajes de error de vista previa de PDF y se documentaron los requisitos de CORS para el almacenamiento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referencia: [Vista previa de archivos](docs/docs/en/file-manager/file-preview/index.md)
  - Se corrigió la normalización de nombres de archivo Unicode durante la carga de archivos para evitar generar claves de objeto con caracteres de control. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher
- **[AI: Base de conocimiento]** Se fijaron las dependencias de LangChain a versiones estables para evitar fallos en la ejecución de herramientas Ollama y evitar afectar a versiones posteriores aguas arriba por @cgyrock
- **[Impresión de plantilla]** Se corrigió que los errores de conversión de PDF de impresión de plantilla no se devolvieran correctamente al cliente por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.45](https://www.nocobase.com/en/blog/v2.1.0-alpha.45)

*Fecha de lanzamiento: 2026-05-29*

### 🎉 Nuevas funciones

- **[cliente-v2]**

  - Soporte para la asignación de valores de campo en acciones de envío de formularios ([#9570](https://github.com/nocobase/nocobase/pull/9570)) por @katherinehhh
  - Soporte para páginas v2 incrustadas y páginas de formulario público v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) por @zhangzhonghe
  - Agregar un menú de Seguridad y la página de configuración de Política de tokens a la administración v2; el centro de usuario ahora admite Cambiar contraseña. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) por @Molunerfinn
  - Reescribir la página del Administrador de plugins client-v2 en una UI de tarjetas responsiva con filtro de categoría, búsqueda, habilitar/deshabilitar/eliminar, Habilitación masiva y un modal de detalle del plugin; también hacer que la página del Administrador de plugins client-v1 sea responsiva en pantallas estrechas. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) por @Molunerfinn
- **[cli]**

  - Agregar protecciones de compatibilidad de comandos de API dinámicos ([#9613](https://github.com/nocobase/nocobase/pull/9613)) por @chenos
  - Soporte para autenticación básica ([#9558](https://github.com/nocobase/nocobase/pull/9558)) por @chenos
- **[Visor de archivos de Office]** Migrar el plugin de vista previa de archivos de Office al cliente v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) por @Molunerfinn
- **[Flujo de trabajo]**

  - Agregar control de tiempo de espera para flujos de trabajo, soporte para abortar automáticamente la ejecución con tiempo de espera agotado si la opción de tiempo de espera está configurada ([#9363](https://github.com/nocobase/nocobase/pull/9363)) por @mytharcher
  - Se agregó una API de administrador para volver a ejecutar ejecuciones de flujo de trabajo iniciadas desde el principio o desde un nodo especificado. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher
- **[IdP: OAuth]** Se agregó soporte base para el inicio de sesión único de aplicaciones en implementaciones de múltiples aplicaciones ([#9547](https://github.com/nocobase/nocobase/pull/9547)) por @2013xile
- **[Bloque: Gantt]** Se agregó soporte v2 para el bloque Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) por @jiannx
- **[SSO de aplicación]** Se agregó un plugin de SSO de aplicación para el inicio de sesión automático entre aplicaciones por @2013xile
- **[Política de contraseñas]** Migrar plugin-password-policy al shell de administración client-v2 con las páginas de configuración de Política de contraseñas / Usuarios bloqueados y la aplicación de reglas del lado del cliente en el formulario de cambio de contraseña del centro de usuario. por @Molunerfinn
- **[Flujo de trabajo: Webhook]** Agregar estado de respuesta 408 para flujo de trabajo de webhook con tiempo de espera agotado (modo síncrono) por @mytharcher
- **[Flujo de trabajo: Subflujo]** Soporte para la configuración de tiempo de espera en el flujo de trabajo por @mytharcher
- **[Auth: OIDC]** Migrar `plugin-auth-oidc` a la administración v2; el botón de inicio de sesión, el formulario de configuración de administración y la redirección automática SSO ahora funcionan bajo v2. por @Molunerfinn
- **[Flujo de trabajo: Aprobación]** Soporte para la configuración de tiempo de espera en el flujo de trabajo por @mytharcher
- **[Supervisor de aplicación]** Se agregó la configuración de SSO de aplicación para sub-aplicaciones por @2013xile
- **[Auth: LDAP]** Agregar entrada de cliente v2 para que el autenticador LDAP renderice su formulario de inicio de sesión y configuración de administración en aplicaciones v2. por @Molunerfinn

### 🚀 Mejoras

- **[cliente-v2]**

  - agregar configuración de selección de filas de tabla v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) por @katherinehhh
  - soportar colores de acción del panel de acciones ([#9612](https://github.com/nocobase/nocobase/pull/9612)) por @katherinehhh
  - Eliminar la opción Oculto de la configuración del menú ([#9596](https://github.com/nocobase/nocobase/pull/9596)) por @zhangzhonghe
- **[cliente]** Eliminar la opción Oculto de la configuración de elementos del menú ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe
- **[cli]** optimizar el flujo de actualización de la aplicación ([#9587](https://github.com/nocobase/nocobase/pull/9587)) por @chenos
- **[Administrador de notificaciones]** Migrar los plugins relacionados con notificaciones a v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) por @Molunerfinn
- **[Empleados AI]** Se mejoró el campo URL base de LLM para que pueda usar variables de ámbito global en formularios de creación y edición. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock
- **[Flujo de trabajo]** Refactorizar las comprobaciones de disponibilidad de nodos asíncronos del flujo de trabajo ([#9532](https://github.com/nocobase/nocobase/pull/9532)) por @mytharcher
- **[Visualización de datos]** Se agregó soporte de cliente v2 para bloques de gráficos. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) por @jiannx
- **[Restricción de IP]** Agregar un cliente v2 para el plugin de restricción de IP. por @Molunerfinn

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir el ancho de la insignia en la barra de navegación superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
  - Aumentar el límite de carga de imágenes de entrada de escaneo ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - Corregir la desaparición de las pestañas de página después de cambiar de menú ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe
  - Corregir el problema por el cual la subtabla en el subformulario no podía agregar una segunda fila ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - Corregir preservar el formato de hora para los campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - Corregir el valor emergente del selector de fecha móvil sincronizado ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - Corregir el estado oculto sincronizado para la vinculación de subformularios ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh
- **[motor-de-flujo]**

  - Se corrigió el nivel de registro incorrecto del frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) por @gchust
  - Corregir menús en cascada inestables al escribir en cuadros de búsqueda ([#9473](https://github.com/nocobase/nocobase/pull/9473)) por @zhangzhonghe
  - Se corrigió un problema por el cual las reglas de vinculación de acciones de tabla se ejecutaban incorrectamente después de que un formulario se enviara con éxito en una ventana emergente. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust
- **[ai]** Se fijaron las dependencias de LangChain a versiones estables para evitar fallos en la ejecución de herramientas Ollama y evitar afectar a versiones posteriores aguas arriba ([#9604](https://github.com/nocobase/nocobase/pull/9604)) por @cgyrock
- **[cliente-v2]**

  - Corregir que las pestañas de inicio de sesión de la sub-aplicación rendericen plantillas de traducción sin procesar, y evitar que el cajón de edición del método de autenticación v2 pierda los valores de campo al enviar. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) por @Molunerfinn
  - Mejorar el rendimiento de la página del administrador de plugins usando CSS line-clamp en lugar de antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) por @Molunerfinn
  - Se corrigieron los metadatos de idioma del navegador para que la página de la aplicación siga el idioma de la aplicación seleccionada en lugar de estar marcada como inglés. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) por @Molunerfinn
- **[compilación]**

  - Los activos de texto en las compilaciones del servidor ahora se copian como archivos en lugar de convertirse en módulos de JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) por @Molunerfinn
  - Se corrigió la salida de ofuscación del servidor del plugin para evitar globales del navegador en los paquetes de tiempo de ejecución de Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn
- **[Bloque: Gantt]** Se corrigió la ruta de la carpeta compartida de gantt v2 y se agregó el rayado de cebra. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) por @jiannx
- **[Configuración de licencia]** Se agregó soporte client-v2 para la configuración de licencias y la inyección de licencias comerciales. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) por @jiannx
- **[Flujo de trabajo: Evento de acción personalizada]**

  - Corregir opciones duplicadas de Trigger workflow en los menús de acción de bloques v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) por @zhangzhonghe
  - Filtrar las opciones de vinculación de flujo de trabajo de acción personalizada por la colección de bloques actual. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) por @mytharcher
  - Se corrigió que los botones de tabla de acción personalizada con contexto de múltiples registros permitieran incorrectamente seleccionar flujos de trabajo de contexto personalizados. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher
- **[Colección: Árbol]** Corregir el error causado por datos padre-hijo circulares en colecciones de árbol ([#9603](https://github.com/nocobase/nocobase/pull/9603)) por @zhangzhonghe
- **[Administrador de archivos]**

  - Se mejoraron los mensajes de error de vista previa de PDF y se documentaron los requisitos de CORS para el almacenamiento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referencia: [Vista previa de archivos](docs/docs/en/file-manager/file-preview/index.md)
  - Renderizar de forma segura las vistas previas de PDF con PDF.js en lugar de la representación de PDF sin procesar basada en iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher
  - Se corrigió la normalización de nombres de archivo Unicode durante la carga de archivos para evitar generar claves de objeto con caracteres de control. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher
- **[Empleados AI]**

  - Se corrigió que los botones de acceso directo de AI obtuvieran un contexto de bloque vacío después de eliminar los bloques de tabla referenciados. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
  - se corrigió la descripción incorrecta del nombre de la herramienta en el mensaje de contexto de trabajo ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock
- **[Flujo de trabajo: Nodo manual]** Se corrigió que los guardados temporales para tareas de flujo de trabajo manual no persistieran los valores de formulario enviados. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher
- **[plugin-commercial]** Se agregaron componentes de licencia comercial client-v2 y entrada de estado de licencia en la barra superior. por @jiannx
- **[AI: Base de conocimiento]** Se fijaron las dependencias de LangChain a versiones estables para evitar fallos en la ejecución de herramientas Ollama y evitar afectar a versiones posteriores aguas arriba por @cgyrock
- **[Administrador de migraciones]** Corregir las diferencias de migración de PostgreSQL para que las columnas heredadas secundarias no se eliminen cuando una columna local se vuelve heredada. por @hongboji
- **[Impresión de plantilla]** Se corrigió que los errores de conversión de PDF de impresión de plantilla no se devolvieran correctamente al cliente por @jiannx
- **[Auth: OIDC]** Se corrigió la fuga de tokens cuando las devoluciones de llamada de inicio de sesión SSO reciben una URL de redirección externa por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema por el cual la API `jobs:resume` no es compatible con el nodo de aprobación por @mytharcher
  - Se corrigió la retirada de aprobación para actualizar los datos comerciales enviados respetando los permisos de actualización de la colección de origen. por @mytharcher
  - Se corrigieron las tareas pendientes de aprobación obsoletas cuando los flujos de trabajo de aprobación son terminados por fallos de nodos que no son de aprobación. por @mytharcher
