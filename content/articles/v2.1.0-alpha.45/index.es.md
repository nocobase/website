---
title: "NocoBase v2.1.0-alpha.45: Soporte para asignación de valores de campo en acciones de envío de formularios"
description: "Nota de la versión v2.1.0-alpha.45"
---

### 🎉 Nuevas Funcionalidades

- **[client-v2]**

  - Soporte para asignación de valores de campo en acciones de envío de formularios ([#9570](https://github.com/nocobase/nocobase/pull/9570)) por @katherinehhh
  - Soporte para páginas v2 embebidas y páginas de formularios públicos v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) por @zhangzhonghe
  - Se añadió un menú de Seguridad y la página de configuración de políticas de Token al panel de administración v2; el centro de usuario ahora admite Cambiar contraseña. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) por @Molunerfinn
  - Se reescribió la página del Gestor de Plugins de client-v2 en una interfaz de tarjetas responsiva con filtro por categoría, búsqueda, activar/desactivar/eliminar, activación masiva y un modal de detalles del plugin; también se hizo responsiva la página del Gestor de Plugins de client-v1 en pantallas estrechas. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) por @Molunerfinn
- **[cli]**

  - Se añadieron protecciones de compatibilidad para comandos de API dinámicos ([#9613](https://github.com/nocobase/nocobase/pull/9613)) por @chenos
  - Soporte para autenticación básica ([#9558](https://github.com/nocobase/nocobase/pull/9558)) por @chenos
- **[Visor de Archivos Office]** Se migró el plugin de vista previa de archivos Office al cliente v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) por @Molunerfinn
- **[Workflow]**

  - Se añadió control de tiempo de espera para workflows, con soporte para abortar automáticamente la ejecución si se supera el tiempo límite configurado ([#9363](https://github.com/nocobase/nocobase/pull/9363)) por @mytharcher
  - Se añadió una API de administrador para re-ejecutar ejecuciones de workflow iniciadas desde el inicio o desde un nodo específico. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher
- **[IdP: OAuth]** Se añadió soporte base para el inicio de sesión único de aplicaciones en despliegues multi-aplicación ([#9547](https://github.com/nocobase/nocobase/pull/9547)) por @2013xile
- **[Bloque: Gantt]** Se añadió soporte v2 para el bloque Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) por @jiannx
- **[App SSO]** Se añadió un plugin App SSO para el inicio de sesión automático entre aplicaciones por @2013xile
- **[Política de contraseñas]** Se migró plugin-password-policy al shell de administración client-v2 con las páginas de configuración de Política de contraseñas / Usuarios bloqueados y la aplicación de reglas del lado del cliente en el formulario de cambio de contraseña del centro de usuario. por @Molunerfinn
- **[Workflow: Webhook]** Se añadió el estado de respuesta 408 para workflows webhook con tiempo de espera agotado (modo síncrono) por @mytharcher
- **[Workflow: Subflujo]** Soporte para configuración de tiempo de espera en workflow por @mytharcher
- **[Auth: OIDC]** Se migró `plugin-auth-oidc` al panel de administración v2; el botón de inicio de sesión, el formulario de configuración de administrador y la redirección automática SSO ahora funcionan bajo v2. por @Molunerfinn
- **[Workflow: Aprobación]** Soporte para configuración de tiempo de espera en workflow por @mytharcher
- **[Supervisor de aplicaciones]** Se añadieron ajustes de App SSO para sub-aplicaciones por @2013xile
- **[Auth: LDAP]** Se añadió una entrada de cliente v2 para que el autenticador LDAP renderice su formulario de inicio de sesión y configuración de administrador en aplicaciones v2. por @Molunerfinn

### 🚀 Mejoras

- **[client-v2]**

  - Se añadió la configuración de selección de filas en tablas v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) por @katherinehhh
  - Soporte para colores de acciones en el panel de acciones ([#9612](https://github.com/nocobase/nocobase/pull/9612)) por @katherinehhh
  - Se eliminó la opción Oculto de la configuración del menú ([#9596](https://github.com/nocobase/nocobase/pull/9596)) por @zhangzhonghe
- **[client]** Se eliminó la opción Oculto de la configuración de elementos del menú ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe
- **[cli]** Se optimizó el flujo de actualización de la aplicación ([#9587](https://github.com/nocobase/nocobase/pull/9587)) por @chenos
- **[Gestor de notificaciones]** Se migraron los plugins relacionados con notificaciones a v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) por @Molunerfinn
- **[Empleados AI]** Se mejoró el campo URL Base de LLM para que pueda usar variables de ámbito global en formularios de creación y edición. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock
- **[Workflow]** Refactorización de las comprobaciones de disponibilidad de nodos asíncronos en workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) por @mytharcher
- **[Visualización de datos]** Se añadió soporte client-v2 para bloques de gráficos. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) por @jiannx
- **[Restricción IP]** Se añadió un cliente v2 para el plugin de restricción IP. por @Molunerfinn

### 🐛 Corrección de Errores

- **[client]**

  - Se corrigió el ancho de la insignia en la barra de navegación superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
  - Se aumentó el límite de carga de imágenes en la entrada de escaneo ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - Se corrigió la desaparición de las pestañas de página después de cambiar de menú ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe
  - Se corrigió el problema por el cual la subtabla en un subformulario no podía añadir una segunda fila ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - Se corrigió la conservación del formato de hora para campos de tiempo v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - Se corrigió la sincronización del valor emergente del selector de fecha en móvil ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - Se corrigió la sincronización del estado oculto para la vinculación de subformularios ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh
  - Se corrigió la conservación del formato de hora para campos de tiempo v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - Se corrigió el problema por el cual la subtabla en un subformulario no podía añadir una segunda fila ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - Se corrigió la sincronización del valor emergente del selector de fecha en móvil ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - Se aumentó el límite de carga de imágenes en la entrada de escaneo ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
- **[flow-engine]**

  - Se corrigió el nivel de registro incorrecto en el frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) por @gchust
  - Se corrigió la inestabilidad de los menús en cascada al escribir en cuadros de búsqueda ([#9473](https://github.com/nocobase/nocobase/pull/9473)) por @zhangzhonghe
  - Se corrigió un problema por el cual las reglas de vinculación de acciones de tabla se ejecutaban incorrectamente después de enviar un formulario con éxito en una ventana emergente. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust
- **[ai]** Se fijaron las dependencias de LangChain a versiones estables para prevenir fallos en la ejecución de herramientas de Ollama y evitar versiones ascendentes afectadas ([#9604](https://github.com/nocobase/nocobase/pull/9604)) por @cgyrock
- **[client-v2]**

  - Se corrigió el renderizado de plantillas de traducción sin procesar en las pestañas de inicio de sesión de sub-aplicaciones, y se evitó que el cajón de edición del método de autenticación v2 perdiera valores de campo al enviar. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) por @Molunerfinn
  - Se mejoró el rendimiento de la página del gestor de plugins usando CSS line-clamp en lugar de la elipsis de Typography de antd. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) por @Molunerfinn
  - Se corrigieron los metadatos de idioma del navegador para que la página de la aplicación siga el idioma de la aplicación seleccionada en lugar de marcarse como inglés. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) por @Molunerfinn
- **[build]**

  - Los activos de texto en las compilaciones del servidor ahora se copian como archivos en lugar de convertirse en módulos JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) por @Molunerfinn
  - Se corrigió la salida de ofuscación del servidor de plugins para evitar globales de navegador en los paquetes de tiempo de ejecución de Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn
- **[Bloque: Gantt]** Se corrigió la ruta de la carpeta compartida del gantt v2 y se añadió el rayado de cebra. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) por @jiannx
- **[Configuración de licencia]** Se añadió soporte client-v2 para la configuración de licencias y la inyección de licencias comerciales. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) por @jiannx
- **[Workflow: Evento de acción personalizada]**

  - Se corrigió la duplicación de opciones de Trigger workflow en los menús de acción de bloques v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) por @zhangzhonghe
  - Se filtraron las opciones de vinculación de workflow de acción personalizada por la colección del bloque actual. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) por @mytharcher
  - Se corrigió que los botones de acción personalizada en tablas con contexto de múltiples registros permitieran incorrectamente seleccionar workflows de contexto personalizado. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher
- **[Colección: Árbol]** Se corrigió el error causado por datos circulares padre-hijo en colecciones de árbol ([#9603](https://github.com/nocobase/nocobase/pull/9603)) por @zhangzhonghe
- **[Gestor de archivos]**

  - Se mejoraron los mensajes de error de vista previa de PDF y se documentaron los requisitos CORS para almacenamiento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referencia: [File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - Se mejoraron los mensajes de error de vista previa de PDF y se documentaron los requisitos CORS para almacenamiento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referencia: [File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - Se renderizaron de forma segura las vistas previas de PDF con PDF.js en lugar del renderizado PDF basado en iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher
  - Se corrigió la normalización de nombres de archivo Unicode durante la carga de archivos para evitar generar claves de objeto con caracteres de control. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher
- **[Empleados AI]**

  - Se corrigió que los botones de acceso directo AI obtuvieran un contexto de bloque vacío después de eliminar bloques de tabla referenciados. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
  - Se corrigió la descripción incorrecta del nombre de la herramienta en el prompt de contexto de trabajo ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock
- **[Workflow: Nodo manual]** Se corrigió que los guardados temporales para tareas de workflow manual no persistieran los valores de formulario enviados. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher
- **[plugin-commercial]** Se añadieron componentes de licencia comercial client-v2 y una entrada de estado de licencia en la barra superior. por @jiannx
- **[AI: Base de conocimiento]** Se fijaron las dependencias de LangChain a versiones estables para prevenir fallos en la ejecución de herramientas de Ollama y evitar versiones ascendentes afectadas por @cgyrock
- **[Gestor de migraciones]** Se corrigieron los diffs de migración en PostgreSQL para que las columnas hijas heredadas no se eliminen cuando una columna local se vuelve heredada. por @hongboji
- **[Impresión de plantillas]** Se corrigió que los errores de conversión a PDF en la impresión de plantillas no se devolvieran correctamente al cliente por @jiannx
- **[Auth: OIDC]** Se corrigió la fuga de tokens cuando las devoluciones de llamada de inicio de sesión SSO reciben una URL de redirección externa por @2013xile
- **[Workflow: Aprobación]**

  - Se corrigió el problema por el cual la API `jobs:resume` no era compatible con el nodo de aprobación por @mytharcher
  - Se corrigió la retirada de aprobación para actualizar los datos comerciales enviados respetando los permisos de actualización de la colección de origen. por @mytharcher
  - Se corrigieron las tareas pendientes de aprobación obsoletas cuando los workflows de aprobación son terminados por fallos en nodos que no son de aprobación. por @mytharcher
