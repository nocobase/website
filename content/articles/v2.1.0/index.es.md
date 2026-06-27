---
title: "NocoBase v2.1.0: Gestión mejorada de aplicaciones administradas y plugins en la CLI"
description: "Nota de la versión v2.1.0"
---

### 🎉 Nuevas Funcionalidades

- **[sin definir]**

  - Se añadieron comandos proxy de nivel superior para nginx y caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) por @chenos
  - Se mejoró la gestión de aplicaciones gestionadas y plugins en la CLI, incluyendo el manejo del entorno según la ruta de la aplicación, importación de plugins, sincronización de plugins con licencia y actualizaciones de documentación relacionada. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) por @chenos
    Referencia: [Documentación CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Inicio rápido](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
  - Se añadió un nuevo empleado de IA, la Ingeniera de Localización Lina, para ayudar con las tareas de traducción de localización ([#9434](https://github.com/nocobase/nocobase/pull/9434)) por @2013xile
    Referencia: [Gestión de Localización](https://docs.nocobase.com/system-management/localization)<br>[Lina: Ingeniera de Localización](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Usar Lina y HY-MT1.5-1.8B local para traducir entradas de localización](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
  - Se añadió documentación en indonesio y vietnamita. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) por @Molunerfinn
  - Se añadió un flujo de trabajo de CI que verifica las dependencias `plugin-*` faltantes y ejecuta la compilación, con informes en comentarios de PR. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) por @Molunerfinn
- **[client-v2]**

  - Soporte para entrada por escaneo en campos de texto ([#9599](https://github.com/nocobase/nocobase/pull/9599)) por @katherinehhh
  - Se añadió `TypedVariableInput` para que los campos de puerto SMTP y modo seguro del plugin de correo v2 puedan aceptar una constante tipada o una variable `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) por @Molunerfinn
  - Soporte para asignación de valores de campo en acciones de envío de formularios ([#9570](https://github.com/nocobase/nocobase/pull/9570)) por @katherinehhh
  - Soporte para páginas v2 incrustadas y páginas de formulario público v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) por @zhangzhonghe
  - Se reescribió la página del Gestor de Plugins client-v2 en una interfaz de tarjetas responsive con filtro por categoría, búsqueda, activar/desactivar/eliminar, activación masiva y un modal de detalle del plugin; también se hizo responsive la página del Gestor de Plugins client-v1 en pantallas estrechas. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) por @Molunerfinn
  - Se añadió un menú de Seguridad y la página de configuración de Política de Tokens al panel de administración v2; el centro de usuario ahora soporta Cambiar contraseña. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) por @Molunerfinn
- **[cli]**

  - Se añadieron protecciones de compatibilidad para comandos API dinámicos ([#9613](https://github.com/nocobase/nocobase/pull/9613)) por @chenos
  - Soporte para autenticación básica ([#9558](https://github.com/nocobase/nocobase/pull/9558)) por @chenos
  - Se añadieron comandos de creación y restauración de copias de seguridad ([#9541](https://github.com/nocobase/nocobase/pull/9541)) por @chenos
  - Se añadió el comando de lanzamiento en la API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) por @Andrew1989Y
  - Refactorización de la CLI de NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) por @chenos
- **[client]**

  - Se añadió soporte para reglas de enlace en elementos del menú de página ([#9304](https://github.com/nocobase/nocobase/pull/9304)) por @zhangzhonghe
  - Se añadieron variables JS al flujo de eventos ([#8938](https://github.com/nocobase/nocobase/pull/8938)) por @jiannx
  - Se añadió acción de elemento JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) por @jiannx
- **[flow-engine]**

  - Se migró `plugin-environment-variables` a client-v2 con una página de configuración basada en React y una variable de entorno `$env` registrada globalmente; se añadió una entrada client-v2 a `plugin-file-manager` con una página de configuración de almacenamiento basada en React y campo de carga, acción de carga y vista previa basados en FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) por @Molunerfinn
  - Se añadió `getSubclassesOfAsync` a FlowEngine para descubrir clases de modelo registradas de forma asíncrona a través del nuevo campo `extends` en `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) por @Molunerfinn
- **[server]** Los empleados de IA pueden buscar documentación incluida con comandos Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) por @2013xile
- **[cli-v1]** Resolver la ruta de almacenamiento desde la variable de entorno ([#9147](https://github.com/nocobase/nocobase/pull/9147)) por @chenos
- **[Gestor de tareas asíncronas]** Se añadió soporte de cliente v2 para la acción de la barra superior del gestor de tareas asíncronas. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) por @jiannx
- **[Gestor de copias de seguridad]**

  - Se añadió soporte de tiempo de ejecución de cliente v2 para el plugin del gestor de copias de seguridad. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) por @katherinehhh
  - Adaptación al nuevo plugin de control de versiones ([#9563](https://github.com/nocobase/nocobase/pull/9563)) por @cgyrock
- **[Bloque: Gantt]**

  - Se añadió una opción para que los bloques Gantt se centren en hoy por defecto al abrirse ([#9692](https://github.com/nocobase/nocobase/pull/9692)) por @jiannx
  - Se añadió soporte v2 para el bloque Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) por @jiannx
- **[Control de acceso]** Se migraron las páginas de configuración de Usuarios y Roles y Permisos a v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) por @jiannx
- **[Visor de archivos de Office]** Se migró el plugin de vista previa de archivos de Office al cliente v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) por @Molunerfinn
- **[Workflow]**

  - Se añadió control de tiempo de espera para workflows, soporte para abortar automáticamente la ejecución si se supera el tiempo de espera configurado ([#9363](https://github.com/nocobase/nocobase/pull/9363)) por @mytharcher
  - Se añadieron campos de creado por y actualizado por para workflows ([#9217](https://github.com/nocobase/nocobase/pull/9217)) por @mytharcher
  - Se añadió API para verificar la creación de nodos ([#9207](https://github.com/nocobase/nocobase/pull/9207)) por @mytharcher
  - Se añadió campo de registro para trabajos, para mostrar el contenido del registro de algún nodo para depuración ([#9165](https://github.com/nocobase/nocobase/pull/9165)) por @mytharcher
- **[IdP: OAuth]**

  - Se añadió soporte base para el inicio de sesión único de aplicaciones en despliegues multi-aplicación ([#9547](https://github.com/nocobase/nocobase/pull/9547)) por @2013xile
  - Se añadió un nuevo plugin IdP: OAuth para permitir que los servicios MCP se autentiquen mediante OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) por @2013xile
- **[Editor de temas]** El editor de temas ya está disponible en la interfaz v2 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) por @zhangzhonghe
- **[Bloque: Kanban]**

  - Se añadió soporte client-v2 para el plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) por @jiannx
  - Bloque kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) por @jiannx
- **[Bloque: Markdown]** Se añadió soporte client-v2 para bloques Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) por @jiannx
- **[Bloque: Lista]** Los bloques de lista soportan client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) por @jiannx
- **[Calendario]**

  - Se añadió soporte client-v2 para el plugin de Calendario. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) por @jiannx
  - Bloque calendario v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) por @jiannx
- **[Bloque: Árbol]**

  - Se añadió soporte client-v2 para el bloque de filtro de árbol. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) por @jiannx
  - Se añadió bloque de filtro de árbol ([#9016](https://github.com/nocobase/nocobase/pull/9016)) por @jiannx
- **[Empleados de IA]**

  - El nodo de empleado de IA en workflow soporta la carga de archivos desde campos de adjuntos. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) por @cgyrock
  - El workflow ha añadido instrucción de empleado de IA ([#9025](https://github.com/nocobase/nocobase/pull/9025)) por @cgyrock
  - Se añadió una herramienta de consulta de datos y una herramienta de informe de análisis de negocio para empleados de IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) por @2013xile
  - Se añadió la capacidad de invocar subagentes para empleados de IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) por @cgyrock
  - Se añadió la capacidad de HABILIDADES a los empleados de IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) por @cgyrock
- **[Visualización de datos]** Se añadió soporte client-v2 para plugins de bloques ([#9297](https://github.com/nocobase/nocobase/pull/9297)) por @zhangzhonghe
- **[Auth: Claves API]** Se añadieron los comandos `pm list` y `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) por @chenos
- **[IA: Servidor MCP]**

  - Proporciona una API de consulta de colecciones de datos genérica, invocable a través de MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) por @2013xile
  - Se añadió un nuevo plugin de servidor MCP para permitir la construcción de sistemas NocoBase y el soporte de flujos de trabajo empresariales. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) por @2013xile
- **[Gestor de fuentes de datos]** Soporte para carga bajo demanda de herramientas MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) por @2013xile
- **[Campo de colección: Código]** field-code soporta 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) por @jiannx
- **[Fuente de datos: NocoBase externa]** Se añadió un plugin de fuente de datos: NocoBase externa por @2013xile
- **[Multi-espacio]** Se añadió soporte client-v2 para el plugin multi-espacio, incluyendo cambio de espacio y gestión de espacios. por @jiannx
- **[SSO de aplicación]** Se añadió un plugin de SSO de aplicación para inicio de sesión automático entre aplicaciones por @2013xile
- **[Control de versiones]** Se añadió plugin de control de versiones por @cgyrock
- **[Autenticación de dos factores (2FA)]** TOTP y la autenticación de dos factores ahora se pueden vincular, verificar y configurar desde el cliente v2. por @Molunerfinn
- **[Política de contraseñas]** Se migró plugin-password-policy al shell de administración client-v2 con las páginas de configuración de Política de contraseñas / Usuarios bloqueados y la aplicación de reglas del lado del cliente en el formulario de cambio de contraseña del centro de usuario. por @Molunerfinn
- **[Workflow: Webhook]** Se añadió el estado de respuesta 408 para workflows webhook con tiempo de espera agotado (modo síncrono) por @mytharcher
- **[Workflow: Subflujo]** Soporte para configuración de tiempo de espera en workflow por @mytharcher
- **[Gestor de migraciones]** Se añadieron algunas APIs para la CLI de nocobase por @Andrew1989Y
- **[Almacenamiento de archivos: S3(Pro)]** Soporte para subir archivos a través del almacenamiento S3 Pro en el gestor de archivos v2. por @Molunerfinn
- **[Auth: OIDC]** Se migró `plugin-auth-oidc` al panel de administración v2; el botón de inicio de sesión, el formulario de configuración de administración y la redirección automática SSO ahora funcionan bajo v2. por @Molunerfinn
- **[Workflow: Aprobación]**

  - Soporte para configuración de tiempo de espera en workflow por @mytharcher
  - Soporte para eliminar borradores de aprobación por @mytharcher
- **[Gestor de correo electrónico]** Gmail soporta el envío de correos electrónicos con alias por @jiannx
- **[Supervisor de aplicaciones]** Se añadieron ajustes de SSO de aplicación para subaplicaciones por @2013xile
- **[Auth: LDAP]** Se añadió una entrada de cliente v2 para que el autenticador LDAP renderice su formulario de inicio de sesión y configuración de administración en aplicaciones v2. por @Molunerfinn

### 🚀 Mejoras

- **[sin definir]**

  - Soporte para entorno actual con ámbito de sesión en la CLI nb ([#9415](https://github.com/nocobase/nocobase/pull/9415)) por @chenos
  - Alinear la documentación en español, portugués, ruso y alemán con la fuente en inglés. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) por @Molunerfinn
  - Sincronizar la documentación en francés con la fuente en chino. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) por @Molunerfinn
  - Actualizar la documentación de IA para requerir NocoBase >= 2.1.0-beta.20 y recomendar la última versión beta. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) por @Molunerfinn
  - Mejorar la guía de instalación del Agente de IA para evitar que los Agentes omitan el asistente `--ui` y detectar automáticamente los gestores de versiones de Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) por @Molunerfinn
  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) por @Molunerfinn
  - Se añadió una entrada client-v2 dedicada y se compila de forma independiente con rsbuild mientras se mantiene v1 sin cambios. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) por @Molunerfinn
- **[client-v2]**

  - Se añadió soporte para deshabilitar la selección múltiple en campos de selección de asociación en ventanas emergentes v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) por @katherinehhh
  - Se mejoró el renderizado de bloques v2 cuando una fuente de datos externa configurada está deshabilitada, evitando errores de renderizado y mostrando un marcador de posición del Editor de IU más claro. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) por @katherinehhh
  - Se añadió la configuración de selección de filas en tablas v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) por @katherinehhh
  - Soporte para colores de acciones en el panel de acciones ([#9612](https://github.com/nocobase/nocobase/pull/9612)) por @katherinehhh
  - Se eliminó la opción Oculto de la configuración del menú ([#9596](https://github.com/nocobase/nocobase/pull/9596)) por @zhangzhonghe
  - Filtrar los menús v1 en el diseño v2 y mostrar solo los menús v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) por @zhangzhonghe
  - Separar client-v2 de client-v1 y eliminar su dependencia de client-v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) por @zhangzhonghe
- **[server]**

  - El cliente moderno ahora se sirve bajo `/v/` en lugar de `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) por @Molunerfinn
  - Se mejoraron los documentos de la API Swagger del gestor de plugins ([#9080](https://github.com/nocobase/nocobase/pull/9080)) por @2013xile
- **[cli]**

  - Mejorar la guía de inicialización y autoactualización ([#9633](https://github.com/nocobase/nocobase/pull/9633)) por @chenos
  - Optimizar el flujo de actualización de la aplicación ([#9587](https://github.com/nocobase/nocobase/pull/9587)) por @chenos
  - Mejorar el flujo de autenticación de entorno ([#9546](https://github.com/nocobase/nocobase/pull/9546)) por @chenos
  - Se mejoró la experiencia de los mensajes de la CLI de NocoBase migrando los flujos de configuración y gestión a Inquirer, y se corrigieron problemas relacionados con la instalación, habilidades y tiempo de ejecución de Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) por @chenos
  - Se añadió el seguimiento del origen de las solicitudes CLI en los registros de solicitudes y registros de auditoría ([#9223](https://github.com/nocobase/nocobase/pull/9223)) por @2013xile
  - Se mejoró la salida de ayuda de la API CLI generada y la agrupación de comandos ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) por @2013xile
  - Se mejoró la ayuda alternativa de `nb API` y se unificaron los mensajes de advertencia para fallos de arranque en tiempo de ejecución ([#9153](https://github.com/nocobase/nocobase/pull/9153)) por @2013xile
- **[client]**

  - Se migró jsonLogic de Application v1 a BaseApplication ([#9522](https://github.com/nocobase/nocobase/pull/9522)) por @zhangzhonghe
  - Soporte para establecer estilos de campo a través de runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) por @jiannx
  - Refactorizar la configuración del diseño de administración y la aplicación para modelar la arquitectura del host con protecciones de compatibilidad v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) por @zhangzhonghe
- **[build]**

  - Se añadió cobertura de regresión para evitar que `deleteServerFiles` elimine los artefactos de compilación de `client` y `client-v2` en rutas de Windows y POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) por @Molunerfinn
  - Las compilaciones de producción del cliente de la aplicación ahora se ejecutan en Rsbuild, y las mejoras en la creación de perfiles de compilación y la programación de declaraciones facilitan la identificación y reducción de los cuellos de botella de compilación. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) por @Molunerfinn
  - Se migró la canalización de compilación del cliente en `@nocobase/build` de Vite a Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) por @Molunerfinn
- **[database]** Se corrigió el comportamiento de generación de informes de negocio de IA y consulta de datos para evitar salida de gráficos mal formada, manejo incorrecto de fecha y hora y falta de cobertura de múltiples fuentes de datos ([#9078](https://github.com/nocobase/nocobase/pull/9078)) por @2013xile
- **[flow-engine]**

  - Mejorar la validación de esquemas para la API de construcción de IU. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust
- **[app]** Se añadió un flujo de trabajo de desarrollo basado en Rsbuild para client-v1 mientras se mantiene el desarrollo local de plugins y la topología actual `/v2/` compatible ([#8902](https://github.com/nocobase/nocobase/pull/8902)) por @Molunerfinn
- **[Variables y secretos]** Las variables de entorno (`$env`) ahora se pueden seleccionar mediante selectores de variables basados en flow-engine en el tiempo de ejecución v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) por @Molunerfinn
- **[Gestor de fuentes de datos]**

  - Se añadió la gestión de permisos de fuentes de datos client-v2 y se alinearon los cajones de selección de permisos relacionados. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) por @jiannx
  - Optimizar la API de modelado de datos para soportar la creación de colecciones de comentarios con IA, configurar campos de relación para fuentes de datos externas y establecer reglas de validación de campos ([#9480](https://github.com/nocobase/nocobase/pull/9480)) por @2013xile
- **[Colección: Conectar a datos externos (FDW)]** Se mejoró la paridad de plantillas de colección V2 para colecciones SQL y colecciones de datos externos, incluyendo confirmación SQL, gestión de servidores de bases de datos externos y ordenación de plantillas. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) por @katherinehhh
- **[Filtro multi-palabra clave]** Se migró el filtro multi-palabra clave a client-v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) por @gchust
- **[Workflow]**

  - Se eliminó el acoplamiento de transacciones del historial de workflow de la ejecución del workflow. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) por @mytharcher
  - Refactorizar las comprobaciones de disponibilidad de nodos asíncronos en workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) por @mytharcher
  - Se añadió validación para todos los disparadores y nodos ([#8930](https://github.com/nocobase/nocobase/pull/8930)) por @mytharcher
- **[Plantillas de IU]** Se migraron las plantillas de IU a client-v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) por @gchust
- **[Departamentos]** Se añadió una página de configuración v2 para gestionar departamentos, miembros del departamento y asignaciones de usuarios a departamentos. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) por @jiannx
- **[Gestor de notificaciones]** Se migraron los plugins relacionados con notificaciones a v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) por @Molunerfinn
- **[Visualización de datos]** Se añadió soporte client-v2 para bloques de gráficos. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) por @jiannx
- **[Verificación]** Se añadió cliente v2 al plugin de Verificación (página de configuración de administración, entrada del centro de usuario, formularios SMS OTP). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) por @Molunerfinn
- **[Autenticación]**

  - La configuración de marca personalizada ahora funciona correctamente en el cliente v2 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) por @zhangzhonghe
  - Implementar la página de configuración de Autenticadores en client-v2 y enviar primitivas reutilizables de tabla, entrada de variables y formulario de client-v2. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) por @Molunerfinn
- **[Bloque: Mapa]** Se añadió soporte de cliente v2 para el plugin de mapa. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) por @jiannx
- **[Localización]** Se mejoraron las tareas de traducción de localización de Lina con ámbito de traducción, configuración de idioma de referencia y edición rápida ([#9521](https://github.com/nocobase/nocobase/pull/9521)) por @2013xile
- **[Workflow: Evento de acción personalizada]**

  - Se migraron los plugins block-workbench y workflow-custom-action-trigger a client-v2, incluyendo sus modelos de acción y el flujo del escáner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) por @jiannx
  - Se añadió control ACL del modo de disparo en registro (tanto único como múltiple) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) por @mytharcher
- **[Bloque: iframe]** Se añadió soporte v2 para el bloque iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) por @jiannx
- **[Bloque: GridCard]** Se actualizó el plugin de tarjeta de cuadrícula para soportar client-v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) por @jiannx
- **[Empleados de IA]**

  - Optimización de la interacción y el rendimiento de conversaciones paralelas de empleados de IA ([#9462](https://github.com/nocobase/nocobase/pull/9462)) por @cgyrock
  - Los empleados de IA soportan el procesamiento paralelo de múltiples conversaciones ([#9344](https://github.com/nocobase/nocobase/pull/9344)) por @cgyrock
  - Se mejoraron las herramientas de edición RunJS de Nathan y se redujo el retraso durante conversaciones largas de chat de IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) por @2013xile
  - Actualizar la configuración de tareas de acceso directo de empleados de IA para usar el mismo componente de configuración de habilidades que la configuración del nodo de empleado de IA en workflow ([#9246](https://github.com/nocobase/nocobase/pull/9246)) por @cgyrock
  - Ajustar la interacción de configuración de habilidades/herramientas para la instrucción de empleado de IA ([#9232](https://github.com/nocobase/nocobase/pull/9232)) por @cgyrock
  - Actualizar el mensaje de usuario del chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang
  - Actualizar el mensaje de usuario del chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang
- **[Gestor de archivos]** Los plugins de almacenamiento de terceros ahora pueden registrar su propio formulario de tipo de almacenamiento en la página de configuración del gestor de archivos v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) por @Molunerfinn
- **[Bloque: Kanban]**

  - Se mejoró la consistencia del espaciado de campos de detalle v2 y se hizo que el espaciado de tarjetas y columnas kanban se adapte mejor a la configuración del tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) por @jiannx
  - Se redujo el ancho predeterminado de las columnas kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) por @jiannx
  - Se mejoró la configuración de creación de bloques de Calendario y Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) por @jiannx
- **[IdP: OAuth]** Las sesiones OAuth ahora usan la misma configuración de caducidad que la política de tokens del sistema ([#9345](https://github.com/nocobase/nocobase/pull/9345)) por @2013xile
- **[Control de acceso]** Se añadieron nuevas APIs para la habilidad acl ([#9198](https://github.com/nocobase/nocobase/pull/9198)) por @Andrew1989Y
- **[Flow engine]** Se añadieron nuevas APIs para la construcción de IU. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) por @gchust
- **[Acción: Solicitud personalizada]**

  - Añadir modelos de acción para solicitudes personalizadas ([#8890](https://github.com/nocobase/nocobase/pull/8890)) por @jiannx
  - El streaming de eventos soporta solicitudes personalizadas ([#8749](https://github.com/nocobase/nocobase/pull/8749)) por @jiannx
- **[Workflow: Evento previo a la acción]** Se añadieron reglas de validación para disparadores y nodos ([#8971](https://github.com/nocobase/nocobase/pull/8971)) por @mytharcher
- **[Campo de colección: divisiones administrativas de China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) por @jiannx
- **[Auth: SAML 2.0]**

  - Las redirecciones de inicio de sesión SAML/CAS ahora siguen el prefijo del cliente moderno. por @Molunerfinn
  - Se añadieron entradas client-v2 para los plugins de autenticación CAS y SAML para que funcionen con la página de inicio de sesión v2 y la configuración de Autenticadores. por @Molunerfinn
- **[Restricción de IP]** Se añadió un cliente v2 para el plugin de restricción de IP. por @Molunerfinn
- **[Marca personalizada]** La configuración de marca personalizada ya está disponible en el cliente v2 por @zhangzhonghe
- **[Workflow: Webhook]** Se añadió validación para la creación de API de disparador/nodo por @mytharcher
- **[Workflow: Subflujo]**

  - Se eliminó el acoplamiento de transacciones del historial de workflow de las instrucciones de subflujo. por @mytharcher
  - Se añadió validación para la creación de API de nodo por @mytharcher
- **[Impresión de plantillas]** Se actualizaron los metadatos de la colección de plantillas de impresión para la clasificación de copias de seguridad de control de versiones. por @cgyrock
- **[Auth: OIDC]** La redirección de inicio de sesión OIDC ahora sigue el prefijo del cliente moderno. por @Molunerfinn
- **[Historial de registros]** Se actualizaron los metadatos de la colección de historial de registros para la clasificación de copias de seguridad de control de versiones. por @cgyrock
- **[Workflow: Aprobación]**

  - Se añadió el indicador `async` para la instrucción de aprobación, para adaptarse a la nueva API de creación de nodos en el lienzo de workflow por @mytharcher
  - Se eliminó el acoplamiento de transacciones del historial de workflow de las instrucciones de workflow de aprobación. por @mytharcher
  - Se añadió validación para la creación de nodos de aprobación por @mytharcher
  - Se actualizaron los metadatos de la colección de aprobación de workflow para la clasificación de copias de seguridad de control de versiones. por @cgyrock
  - Se añadió validación para la API de disparador/nodo por @mytharcher
  - Ajustar las reglas de validación para la configuración del disparador de aprobación y la configuración del nodo, para asegurar que el campo de IU exista por @mytharcher
- **[Registros de auditoría]** Se actualizaron los metadatos de la colección del registrador de auditoría para la clasificación de copias de seguridad de control de versiones. por @cgyrock
- **[Gestor de correo electrónico]** Se actualizaron los metadatos de la colección del gestor de correo electrónico para la clasificación de copias de seguridad de control de versiones. por @cgyrock
- **[Supervisor de aplicaciones]** Se actualizaron los metadatos de la colección del supervisor de aplicaciones para la clasificación de copias de seguridad de control de versiones. por @cgyrock

### 🐛 Corrección de Errores

- **[sin definir]**

  - Alinear las rutas de configuración de nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) por @chenos
  - Se corrigieron enlaces rotos en la documentación traducida y se habilitó la detección de enlaces rotos por defecto en la compilación de la documentación. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) por @Molunerfinn
  - Corregir el flujo de trabajo de dependencias y compilación para que los fallos de verificación de plugins pro independientes rompan la CI en lugar de omitir silenciosamente la cobertura de compilación. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) por @Molunerfinn
  - Se corrigieron archivos de traducción inflados y se alineó la estructura de la documentación multilingüe. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) por @Molunerfinn
  - Se corrigió que el selector de idioma generara URLs incorrectas (por ejemplo, `/cn/es/` en lugar de `/es/`) en el sitio de documentación. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) por @Molunerfinn
- **[client-v2]**

  - Se corrigió que los campos JSON en las vistas de visualización client-v2 renderizaran celdas en blanco para valores de objeto. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) por @katherinehhh
  - Se corrigió que los campos de opción V2 tradujeran incorrectamente las etiquetas de opción simples en entornos localizados. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) por @katherinehhh
  - Se corrigió que las columnas de tabla v2 se volvieran invisibles cuando el ancho de columna personalizado se establece en 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) por @katherinehhh
  - Se ajustaron todos los selectores de campos de relación para limitar los campos de asociación a un máximo de dos niveles ([#9454](https://github.com/nocobase/nocobase/pull/9454)) por @jiannx
  - Corregir errores al guardar reglas de enlace de menú ([#9666](https://github.com/nocobase/nocobase/pull/9666)) por @zhangzhonghe
  - Corregir el espaciado excesivo sobre los bloques en páginas v2 ([#9647](https://github.com/nocobase/nocobase/pull/9647)) por @zhangzhonghe
  - Preservar los valores de campo asignados ([#9640](https://github.com/nocobase/nocobase/pull/9640)) por @katherinehhh
  - Corregir que las pestañas de inicio de sesión de subaplicaciones renderizaran plantillas de traducción sin procesar, y evitar que el cajón de edición del método de autenticación v2 pierda valores de campo al enviar. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) por @Molunerfinn
  - Mejorar el rendimiento de la página del gestor de plugins usando CSS line-clamp en lugar de puntos suspensivos de antd Typography. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) por @Molunerfinn
  - Se corrigieron los metadatos del idioma del navegador para que la página de la aplicación siga el idioma de la aplicación seleccionada en lugar de estar marcada como inglés. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) por @Molunerfinn
  - Se corrigió el registro inconsistente de dependencias dnd-kit. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) por @jiannx
  - Se corrigió que la ruta v2 del plugin Kanban fallara al cargar porque las dependencias dnd-kit no eran proporcionadas por el cliente. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) por @jiannx
  - El componente de Tabla v2 compartido ahora muestra el selector de tamaño de página por defecto, coincidiendo con el comportamiento v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) por @Molunerfinn
  - Se corrigió el problema por el cual la lista de opciones del campo de título está vacía para campos de relación en bloques de tabla ([#9490](https://github.com/nocobase/nocobase/pull/9490)) por @katherinehhh
  - Mantener grupos vacíos después de filtrar menús v1 en el diseño v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) por @zhangzhonghe
  - Se corrigió el problema por el cual la página se vuelve blanca detrás del diálogo de habilitación de plugins ([#9455](https://github.com/nocobase/nocobase/pull/9455)) por @zhangzhonghe
  - Corregir que las páginas de administración v1 fallen cuando hacen referencia a módulos de plugin v2 en compilaciones de producción. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) por @Molunerfinn
  - Se corrigió el error al seleccionar campos de asociación en la configuración de campos. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) por @gchust
  - Se corrigió el problema por el cual aparece una página 404 momentánea después de iniciar la aplicación ([#9365](https://github.com/nocobase/nocobase/pull/9365)) por @zhangzhonghe
  - Se corrigió el problema por el cual algunas páginas v2 no cargan plugins remotos ([#9369](https://github.com/nocobase/nocobase/pull/9369)) por @zhangzhonghe
  - Corregir los problemas de marcador de posición de arrastre y posición de colocación de bloques en páginas v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) por @zhangzhonghe
  - Se corrigió la carga de plugins remotos para que las URLs de plugins que ya terminan en `.js` no se resuelvan a rutas duplicadas `.js.js`. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) por @Molunerfinn
  - Se corrigió el problema por el cual `RemoteSelect` no se renderizaba en la configuración de vinculación de workflow ([#9314](https://github.com/nocobase/nocobase/pull/9314)) por @mytharcher
- **[client]**

  - Se corrigió el problema por el cual los bloques podían mostrarse incorrectamente como eliminados después de actualizar la página ([#9662](https://github.com/nocobase/nocobase/pull/9662)) por @zhangzhonghe
  - Corregir el problema por el cual la subtabla en un subformulario no podía agregar una segunda fila ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - Corregir el formato de hora preservado para campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - Aumentar el límite de carga de imágenes de entrada por escaneo ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - Corregir la sincronización del valor emergente del selector de fecha móvil ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - Se corrigió la carga en modo de desarrollo para plugins de almacenamiento compilados que dependen de exportaciones con nombre de plugins fuente locales. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) por @Molunerfinn
  - Se corrigió el problema por el cual la configuración del sistema aparece vacía después de enviar ([#9458](https://github.com/nocobase/nocobase/pull/9458)) por @zhangzhonghe
  - Filtrar bloques opcionales no esenciales en el cuadro emergente de selección de campos relacionados ([#9224](https://github.com/nocobase/nocobase/pull/9224)) por @jiannx
  - Se corrigió el problema por el cual el título de la página no se actualiza después de cambiar de menú ([#8864](https://github.com/nocobase/nocobase/pull/8864)) por @zhangzhonghe
- **[flow-engine]**

  - Se corrigió el problema por el cual la búsqueda de campos se borra al pasar el ratón sobre campos de asociación ([#9646](https://github.com/nocobase/nocobase/pull/9646)) por @zhangzhonghe
  - Se corrigieron menús en cascada inestables al escribir en cuadros de búsqueda ([#9473](https://github.com/nocobase/nocobase/pull/9473)) por @zhangzhonghe
  - Se corrigió un mensaje de error incorrecto en la consola del navegador. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) por @gchust
  - Se corrigieron submenús de campos de relación inestables en menús de submodelo ([#9417](https://github.com/nocobase/nocobase/pull/9417)) por @jiannx
  - Se añadieron fragmentos JS para configurar el elemento de formulario y el elemento de detalle ([#8974](https://github.com/nocobase/nocobase/pull/8974)) por @jiannx
- **[build]**

  - Los activos de texto en las compilaciones del servidor ahora se copian como archivos en lugar de convertirse en módulos JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) por @Molunerfinn
  - Se corrigió el fallo de compilación de plugins cuando el código del cliente v1 importa la entrada `/client-v2` de otro plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) por @Molunerfinn
- **[cli-v1]**

  - Se corrigió el inicio de desarrollo de create-nocobase-app reutilizando shells de aplicaciones empaquetadas mientras se habilita el desarrollo local de plugins. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) por @Molunerfinn
  - Se corrigieron fallos de inicio de desarrollo en aplicaciones creadas con create-nocobase-app causados por la resolución de la ruta del cliente app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) por @Molunerfinn
- **[server]**

  - Se corrigió que las solicitudes de descubrimiento OAuth de subaplicaciones se enrutaran como solicitudes de la aplicación principal ([#9383](https://github.com/nocobase/nocobase/pull/9383)) por @2013xile
  - Soporte para obtener la aplicación de destino por nombre de host ([#8978](https://github.com/nocobase/nocobase/pull/8978)) por @2013xile
- **[cli]**

  - Se corrigieron las opciones booleanas de la CLI para que puedan deshabilitarse con banderas negadas ([#9337](https://github.com/nocobase/nocobase/pull/9337)) por @2013xile
  - Se corrigieron fallos de inicio de sesión OAuth de la CLI en Windows causados por URLs de autorización largas ([#9159](https://github.com/nocobase/nocobase/pull/9159)) por @2013xile
- **[ai]** Se corrigió la falta de configuración del campo de categoría durante el registro de empleados de IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) por @cgyrock
- **[test]** Se corrigieron las compilaciones de plugins para que las dependencias del servidor con nombres de paquete con puntos como `big.js` se empaqueten en `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) por @Molunerfinn
- **[Calendario]**

  - Se corrigió un problema por el cual no se podían agregar bloques de Detalles y Edición en los cajones de detalle del bloque de calendario v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) por @jiannx
  - Se corrigió que los colores de los eventos del calendario no se renderizaran desde el campo de color configurado en páginas v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) por @jiannx
  - Se corrigió el estilo del cursor para los elementos de evento en la superposición de más eventos del calendario ([#9519](https://github.com/nocobase/nocobase/pull/9519)) por @jiannx
  - No registrar acciones de calendario en otros bloques ([#9200](https://github.com/nocobase/nocobase/pull/9200)) por @jiannx
- **[Empleados de IA]**

  - Se mejoraron los mensajes de consulta de datos de los empleados de IA para cargar la habilidad requerida antes de usar las herramientas de consulta. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) por @cgyrock
  - Se corrigió la falta del botón del asistente Dara en la configuración de gráficos client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) por @cgyrock
  - Los nodos de empleado de IA en workflow pueden usar el modelo predeterminado ([#9679](https://github.com/nocobase/nocobase/pull/9679)) por @cgyrock
  - Se corrigieron errores de `ctx.get` en nodos de workflow de empleados de IA ([#9661](https://github.com/nocobase/nocobase/pull/9661)) por @cgyrock
  - Se corrigió el error cuando un empleado de IA accede a una base de conocimiento de solo lectura ([#9538](https://github.com/nocobase/nocobase/pull/9538)) por @cgyrock
  - Se corrigió que las tarjetas de llamada a herramientas de IA no aparecieran inmediatamente cuando los eventos de herramienta transmitidos se dividen ([#9534](https://github.com/nocobase/nocobase/pull/9534)) por @2013xile
  - Se corrigió el problema por el cual los permisos de rol de operador no surten efecto en los nodos de empleados de IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) por @cgyrock
  - Se corrigió el error de carga de plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) por @cgyrock
  - Se corrigió que el nodo de empleado de IA en workflow no terminara correctamente después de la asignación de herramientas. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) por @cgyrock
  - Se corrigió el error de lectura de campos de adjuntos de asociaciones en el nodo de empleado de IA en workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) por @cgyrock
  - Se corrigió el problema por el cual el nodo de empleado de IA en workflow limpia las habilidades después de cambiar de empleado de IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) por @cgyrock
  - Se corrigió el error de renderizado de tareas de acceso directo de empleados de IA ([#9267](https://github.com/nocobase/nocobase/pull/9267)) por @cgyrock
  - Se corrigió el error en la API para obtener la lista de empleados de IA ([#9241](https://github.com/nocobase/nocobase/pull/9241)) por @cgyrock
  - Se refinó el comportamiento de delegación de tareas de Atlas y se actualizó Viz para usar el flujo de trabajo de informes de negocio para solicitudes de informes ([#9229](https://github.com/nocobase/nocobase/pull/9229)) por @2013xile
  - Empleado de IA en workflow: ajuste de IU y corrección de errores. ([#9213](https://github.com/nocobase/nocobase/pull/9213)) por @cgyrock
  - Se corrigieron anomalías en el registro de la instrucción de empleado de IA ([#9180](https://github.com/nocobase/nocobase/pull/9180)) por @cgyrock
  - Se corrigió que la ordenación de consultas agregadas fuera eliminada por ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) por @2013xile
  - Se corrigió el problema por el cual los mensajes de error no se mostraban en las conversaciones de empleados de IA ([#9097](https://github.com/nocobase/nocobase/pull/9097)) por @cgyrock
  - Se corrigió el problema por el cual los empleados de IA no podían usar habilidades ([#9023](https://github.com/nocobase/nocobase/pull/9023)) por @cgyrock
  - Se corrigió el problema por el cual el LLM aún intenta cargar habilidades después de que la herramienta getSkill está deshabilitada ([#9013](https://github.com/nocobase/nocobase/pull/9013)) por @cgyrock
  - Se corrigieron casos de prueba fallidos en el módulo de IA del paquete central. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) por @cgyrock
- **[Gestor de fuentes de datos]**

  - Se corrigió la visualización obsoleta del campo de título al reabrir el cajón de configuración de campos de fuente de datos v2 después de cambiar el campo de título. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) por @katherinehhh
  - Se mejoraron los mensajes de error del gestor de fuentes de datos V2 cuando fallan las operaciones de colección, campo, sincronización y carga de tabla. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) por @katherinehhh
  - Se corrigió la localización de campos multi-espacio en el gestor de fuentes de datos v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) por @jiannx
  - Se optimizó la nomenclatura de herramientas MCP y se redujeron las respuestas API redundantes para evitar el consumo excesivo del contexto de conversación de IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) por @2013xile
- **[Bloque: Mapa]** Se corrigió que los campos de geometría del mapa faltaran en el menú de agregar campo del gestor de fuentes de datos v2 después de habilitar el plugin de mapa. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) por @katherinehhh
- **[Colección: SQL]** Se bloqueó el acceso de la Colección SQL a metadatos sensibles de PostgreSQL ([#9683](https://github.com/nocobase/nocobase/pull/9683)) por @2013xile
- **[Workflow: Evento de acción personalizada]**

  - Se corrigió que faltara la acción de disparo de workflow en la lista de botones del panel de acciones del banco de trabajo. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) por @katherinehhh
  - Corregir opciones duplicadas de Disparar workflow en los menús de acción de bloques v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) por @zhangzhonghe
  - Filtrar las opciones de vinculación de workflow de acción personalizada por la colección del bloque actual. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) por @mytharcher
- **[Acción: Duplicar registro]** Restablecer el estado del botón en caso de fallo de envío ([#9676](https://github.com/nocobase/nocobase/pull/9676)) por @katherinehhh
- **[Bloque: Gantt]**

  - Se mejoró la colocación de la información sobre herramientas de Gantt para evitar cubrir las barras de tareas y se alinearon las etiquetas de las tareas de manera consistente dentro y fuera de las barras ([#9638](https://github.com/nocobase/nocobase/pull/9638)) por @jiannx
  - Se corrigió la ruta de la carpeta compartida de Gantt v2 y se añadió el rayado de cebra. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) por @jiannx
- **[Configuración de licencia]**

  - Se añadió soporte client-v2 para la configuración de licencia y la inyección de licencias comerciales. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) por @jiannx
  - Resolver dependencias empaquetadas con enlaces simbólicos ([#9518](https://github.com/nocobase/nocobase/pull/9518)) por @chenos
- **[Gestor de archivos]** Se mejoraron los mensajes de error de vista previa de PDF y se documentaron los requisitos CORS para almacenamiento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
  Referencia: [Vista previa de archivos](docs/docs/en/file-manager/file-preview/index.md)
- **[Bloque: iframe]** Corregir que el contenido del iframe no ocupe la altura configurada del bloque ([#9540](https://github.com/nocobase/nocobase/pull/9540)) por @katherinehhh
- **[Acción: Exportar registros]** Mejorar el rendimiento de la configuración de campos con muchos campos de asociación ([#9524](https://github.com/nocobase/nocobase/pull/9524)) por @katherinehhh
- **[Localización]** Se corrigieron las traducciones de referencia de localización integradas para tareas de traducción de IA ([#9531](https://github.com/nocobase/nocobase/pull/9531)) por @2013xile
- **[Autenticación]** Evitar que el servidor se bloquee cuando un token de autenticación WebSocket hace referencia a un autenticador cuyo plugin de tipo de autenticación está descargado o falta. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) por @Molunerfinn
- **[Workflow: JavaScript]**

  - Se corrigió la carga del paquete de tiempo de ejecución QuickJS de workflow JavaScript en compilaciones de producción. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) por @mytharcher
  - Se corrigió el problema por el cual se lanzaba un error al configurar el nodo JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) por @mytharcher
- **[Bloque: Markdown]** Se corrigió el problema de que el bloque Markdown v2 reportara errores ([#9440](https://github.com/nocobase/nocobase/pull/9440)) por @zhangzhonghe
- **[Bloque: Árbol]**

  - Se mejoró la configuración del bloque de filtro de árbol y se corrigieron la asociación no soportada, la alternativa de campo de título y el comportamiento de restablecimiento de búsqueda. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) por @jiannx
  - Corregir la visualización anormal de los nodos del bloque de filtro ([#9260](https://github.com/nocobase/nocobase/pull/9260)) por @jiannx
- **[Móvil (obsoleto)]** Se corrigieron las ventanas emergentes de mensajes móviles que no se podían cerrar o desplazar ([#9424](https://github.com/nocobase/nocobase/pull/9424)) por @zhangzhonghe
- **[IA: Servidor MCP]**

  - Se corrigió el empaquetado del servidor MCP para que se incluyan las dependencias de tiempo de ejecución ([#9401](https://github.com/nocobase/nocobase/pull/9401)) por @2013xile
  - Se corrigieron las discrepancias de autenticación causadas por encabezados reenviados no relacionados en la herramienta CRUD genérica de MCP ([#8983](https://github.com/nocobase/nocobase/pull/8983)) por @2013xile
  - Se corrigieron las herramientas MCP generadas desde Swagger cuando los esquemas de entrada incluyen tipos `null` o marcadores `nullable` que no son válidos para la validación de herramientas de OpenAI ([#8994](https://github.com/nocobase/nocobase/pull/8994)) por @2013xile
- **[Flow engine]** Se corrigió un problema por el cual los bloques generados por IA no podían convertirse de plantillas de referencia de vuelta a plantillas duplicadas. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) por @gchust
- **[Bloque: Kanban]**

  - Se mejoró el estilo compacto de las tarjetas Kanban y se optimizó la selección de plantillas de creación rápida emergente. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) por @jiannx
  - Se corrigió que los bloques asociados de Kanban usaran parámetros de recursos de tiempo de ejecución no resueltos en contextos de ventanas emergentes o páginas secundarias. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) por @jiannx
  - Se corrigió la visualización repetida de la capa flotante de configuración de campos ([#9271](https://github.com/nocobase/nocobase/pull/9271)) por @jiannx
- **[Acción: Solicitud personalizada]** Actualizar Koa a v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) por @chenos
- **[Visualización de datos]** Se corrigieron selectores de campo vacíos en la configuración de consultas de gráficos en páginas de flujo ([#9276](https://github.com/nocobase/nocobase/pull/9276)) por @2013xile
- **[IdP: OAuth]**

  - Se corrigieron fallos de inicio de sesión de la CLI OAuth y se restringió el registro dinámico a URLs de callback locales ([#9248](https://github.com/nocobase/nocobase/pull/9248)) por @2013xile
  - Se corrigieron fallos de registro de cliente OAuth y actualización de token después de reiniciar el servicio ([#9139](https://github.com/nocobase/nocobase/pull/9139)) por @2013xile
  - Se corrigió el acceso OAuth para solicitudes API regulares ([#9120](https://github.com/nocobase/nocobase/pull/9120)) por @2013xile
  - Se corrigió la redirección incorrecta después del inicio de sesión MCP OAuth en subaplicaciones ([#9015](https://github.com/nocobase/nocobase/pull/9015)) por @2013xile
- **[Workflow: Nodo de agregación]** Se corrigió el problema por el cual el nodo de agregación no se podía guardar debido a una regla de validación incorrecta ([#9208](https://github.com/nocobase/nocobase/pull/9208)) por @mytharcher
- **[Workflow: Nodo de bucle]** Se corrigieron las validaciones de los nodos de workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) por @mytharcher
- **[Control de acceso]** Actualizar swagger de acl para el servidor MCP ([#9096](https://github.com/nocobase/nocobase/pull/9096)) por @Andrew1989Y
- **[Workflow: nodo de correo]** Se corrigió la validación para campos de variables ([#9047](https://github.com/nocobase/nocobase/pull/9047)) por @mytharcher
- **[Workflow]**

  - Se corrigió la regla de validación incorrecta de la instrucción de condición ([#9017](https://github.com/nocobase/nocobase/pull/9017)) por @mytharcher
  - Se corrigió el problema por el cual el modo del disparador de colección no se podía establecer en "crear o actualizar" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) por @mytharcher
- **[Política de contraseñas]** Se corrigió que los fallos de inicio de sesión enmascararan el error real con "argument #1 unsupported type undefined" cuando el error subyacente no tiene código de estado. por @Molunerfinn
- **[Fuente de datos: API REST]** Se corrigieron fallos de compilación de declaraciones del plugin de fuente de datos API REST causados por declaraciones de tipo client-v2 del gestor de fuentes de datos no coincidentes. por @katherinehhh
- **[plugin-commercial]** Se añadieron componentes de licencia comercial client-v2 y una entrada de estado de licencia en la barra superior. por @jiannx
- **[Auth: SAML 2.0]** Se corrigió que el interceptor de redirección automática SAML parpadeara el shell de la aplicación y abriera cajones dobles en cada navegación. por @Molunerfinn
- **[Workflow: Webhook]** Se corrigió el problema por el cual la creación de un nodo de respuesta era interceptada por la validación de la configuración de `statusCode` por @mytharcher
- **[Gestor de migraciones]** Se corrigió que `migration:create` devolviera `taskId` del registro de tarea asíncrona. por @Andrew1989Y
- **[Impresión de plantillas]** Se corrigió que los errores de conversión de PDF de impresión de plantillas no se devolvieran correctamente al cliente por @jiannx
- **[Gestor de correo electrónico]**

  - No se muestra ninguna confirmación de cierre después de enviar el correo electrónico por @jiannx
  - Se corrigió la visualización del título de las identidades de correo por @jiannx
