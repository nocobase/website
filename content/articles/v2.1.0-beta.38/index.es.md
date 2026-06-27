---
title: "NocoBase v2.1.0-beta.38: Agregar protecciones de compatibilidad de comandos API dinámicos"
description: "Nota de la versión v2.1.0-beta.38"
---

### 🎉 Nuevas Funcionalidades

- **[cli]** Añadir protecciones de compatibilidad para comandos de API dinámica ([#9613](https://github.com/nocobase/nocobase/pull/9613)) por @chenos
- **[client-v2]**

  - Soporte para páginas v2 embebidas y páginas de formulario público v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) por @zhangzhonghe
  - Reescritura de la página del gestor de plugins de client-v2 en una interfaz de tarjetas responsive con filtro por categoría, búsqueda, activar/desactivar/eliminar, activación masiva y un modal de detalle de plugin; también se ha hecho responsive la página del gestor de plugins de client-v1 en pantallas estrechas. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) por @Molunerfinn
- **[Workflow]**

  - Añadir control de tiempo de espera para flujos de trabajo, con soporte para abortar automáticamente la ejecución si se supera el tiempo límite configurado ([#9363](https://github.com/nocobase/nocobase/pull/9363)) por @mytharcher
  - Se ha añadido una API de administrador para re-ejecutar ejecuciones de flujo de trabajo iniciadas desde el inicio o desde un nodo específico. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher
- **[Bloque: Gantt]** Se ha añadido soporte v2 para el bloque Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) por @jiannx
- **[Workflow: Webhook]** Añadir estado de respuesta 408 para flujos de trabajo webhook con tiempo de espera agotado (modo síncrono) por @mytharcher
- **[Workflow: Subflujo]** Soporte para configuración de tiempo de espera en flujos de trabajo por @mytharcher
- **[Auth: OIDC]** Migrar `plugin-auth-oidc` al administrador v2; el botón de inicio de sesión, el formulario de configuración de administración y la redirección automática SSO ahora funcionan en v2. por @Molunerfinn
- **[Workflow: Aprobación]** Soporte para configuración de tiempo de espera en flujos de trabajo por @mytharcher
- **[Auth: LDAP]** Añadir entrada de cliente v2 para que el autenticador LDAP renderice su formulario de inicio de sesión y configuración de administración en aplicaciones v2. por @Molunerfinn

### 🚀 Mejoras

- **[client-v2]**

  - Añadir configuración de selección de filas en tabla v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) por @katherinehhh
  - Soporte para colores de acciones en el panel de acciones ([#9612](https://github.com/nocobase/nocobase/pull/9612)) por @katherinehhh
  - Eliminar la opción Oculto de la configuración del menú ([#9596](https://github.com/nocobase/nocobase/pull/9596)) por @zhangzhonghe
- **[client]** Eliminar la opción Oculto de la configuración de elementos del menú ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe
- **[cli]** Optimizar el flujo de actualización de la aplicación ([#9587](https://github.com/nocobase/nocobase/pull/9587)) por @chenos
- **[Empleados IA]** Mejorado el campo URL Base de LLM para que pueda usar variables de ámbito global en los formularios de creación y edición. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock
- **[Restricción IP]** Añadir un cliente v2 para el plugin de restricción IP. por @Molunerfinn

### 🐛 Corrección de Errores

- **[motor-de-flujo]**

  - Corregido el nivel de registro incorrecto en el frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) por @gchust
  - Corregir menús en cascada inestables al escribir en campos de búsqueda ([#9473](https://github.com/nocobase/nocobase/pull/9473)) por @zhangzhonghe
  - Corregido un problema por el cual las reglas de vinculación de acciones de tabla se ejecutaban incorrectamente después de enviar un formulario correctamente en una ventana emergente. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust
- **[ai]** Fijadas las dependencias de LangChain a versiones estables para evitar fallos en la ejecución de herramientas de Ollama y no verse afectado por lanzamientos ascendentes problemáticos ([#9604](https://github.com/nocobase/nocobase/pull/9604)) por @cgyrock
- **[client-v2]**

  - Corregir las pestañas de inicio de sesión de sub-aplicaciones que renderizaban plantillas de traducción sin procesar, y evitar que el cajón de edición del método de autenticación v2 pierda los valores de los campos al enviar. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) por @Molunerfinn
  - Mejorar el rendimiento de la página del gestor de plugins usando CSS line-clamp en lugar de antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) por @Molunerfinn
- **[client]**

  - corregir el formato de hora preservado para campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - corregir el estado oculto sincronizado para la vinculación de subformularios ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh
  - aumentar el límite de subida de imágenes en la entrada de escaneo ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - corregir el valor emergente del selector de fecha móvil sincronizado ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - Corregir la desaparición de las pestañas de página después de cambiar de menú ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe
  - corregir problema por el cual la subtabla en un subformulario no podía añadir una segunda fila ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - aumentar el límite de subida de imágenes en la entrada de escaneo ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - corregir el valor emergente del selector de fecha móvil sincronizado ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - corregir problema por el cual la subtabla en un subformulario no podía añadir una segunda fila ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - corregir el formato de hora preservado para campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
- **[Colección: Árbol]** Corregir el error causado por datos circulares padre-hijo en colecciones de árbol ([#9603](https://github.com/nocobase/nocobase/pull/9603)) por @zhangzhonghe
- **[Workflow: Evento de acción personalizada]**

  - Corregido que los botones de acción personalizada en tabla con contexto de múltiples registros permitieran incorrectamente seleccionar flujos de trabajo de contexto personalizado. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher
  - Filtrar las opciones de vinculación de flujo de trabajo de acción personalizada por la colección del bloque actual. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) por @mytharcher
- **[Gestor de archivos]**

  - Mejorados los mensajes de error de previsualización de PDF y documentados los requisitos CORS para almacenamiento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referencia: [Previsualización de archivos](docs/docs/es/file-manager/file-preview/index.md)
  - Mejorados los mensajes de error de previsualización de PDF y documentados los requisitos CORS para almacenamiento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referencia: [Previsualización de archivos](docs/docs/es/file-manager/file-preview/index.md)
  - Corregida la normalización de nombres de archivo Unicode durante la subida para evitar generar claves de objeto con caracteres de control. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher
- **[IA: Base de conocimiento]** Fijadas las dependencias de LangChain a versiones estables para evitar fallos en la ejecución de herramientas de Ollama y no verse afectado por lanzamientos ascendentes problemáticos por @cgyrock
- **[Impresión de plantilla]** Corregido que los errores de conversión a PDF en la impresión de plantillas no se devolvieran correctamente al cliente por @jiannx
