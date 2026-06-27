---
title: "NocoBase v2.2.0-beta.2: Se agregó un formulario de configuración de almacenamiento vectorial externo para bases de conocimiento de IA"
description: "Nota de la versión v2.2.0-beta.2"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados de IA]** Se añadió un formulario de configuración de almacén vectorial externo para bases de conocimiento de IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) por @cgyrock
- **[IA: Base de conocimiento]** Se añadió un formulario de configuración de almacén vectorial externo para bases de conocimiento de IA. por @cgyrock
- **[Gestor de correo electrónico]** Se migró el cliente del gestor de correo electrónico a v2. por @jiannx

### 🚀 Mejoras

- **[cli]**

  - Se optimizaron las comprobaciones de compatibilidad para diferentes formatos de números de versión. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) por @chenos
  - Se añadió soporte para actualizar habilidades a una versión específica. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) por @chenos
  - Se mejoró la redacción de los mensajes de configuración de inicialización. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) por @chenos
- **[indefinido]**

  - Se añadió un escenario de conversación de control de versiones a la página de resumen del AI Builder. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) por @Molunerfinn
    Referencia: [Inicio rápido del AI Builder](https://docs.nocobase.com/en/ai-builder)
  - Se mejoró la documentación de control de versiones con notas sobre el guardado automático de versiones en AI Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) por @cgyrock
    Referencia: [Control de versiones](docs/docs/en/ops-management/version-control/index.md)
- **[Flujo de trabajo]** Se mejoró la experiencia de edición de metadatos del flujo de trabajo al admitir la edición de descripciones en la ventana emergente de detalles y rellenar automáticamente los metadatos del flujo de trabajo de origen al duplicar flujos de trabajo. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) por @mytharcher
- **[Acción: Importar registros]** Se mejoraron los diálogos de detalles de errores de importación y tareas asíncronas para que los mensajes de error largos se puedan ver completamente sin romper el diseño. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) por @katherinehhh
- **[Herramienta de prueba de traducción]** Se añadió una página de configuración de cliente-v2 para la herramienta de prueba de traducción. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) por @jiannx
- **[Acción: Importar registros Pro]** Se mejoraron los diálogos de importación para que los mensajes de error largos se puedan ver completamente, y el modo de procesamiento se pueda seleccionar directamente desde el menú de configuración v2. por @katherinehhh

### 🐛 Corrección de Errores

- **[cliente]** Se corrigió el problema por el cual los campos en subformularios horizontales eran demasiado estrechos para mostrar datos. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) por @zhangzhonghe
- **[cliente-v2]** Se corrigió el problema por el cual las páginas v2 podían seguir cargando después de iniciar sesión. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) por @zhangzhonghe
- **[cli]** Se añadió detección de la versión de Node.js para el entorno de ejecución nb. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) por @chenos
- **[Acción: Importar registros]** Se cambiaron los archivos de importación subidos a almacenamiento en disco para reducir la presión de memoria durante importaciones de grandes volúmenes de datos. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) por @mytharcher
- **[Gestor de tareas asíncronas]** Se corrigieron los IDs de solicitud incorrectos en los registros del trabajador de tareas asíncronas. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) por @2013xile
- **[Flujo de trabajo]**

  - Se corrigió el manejo de tiempo de espera del flujo de trabajo para que las ejecuciones abortadas y sus tareas pendientes se puedan actualizar de forma atómica. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) por @mytharcher
  - Se corrigió el problema por el cual el campo "última actualización por" del flujo de trabajo no se actualizaba después de cambios en los nodos del flujo de trabajo. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) por @mytharcher
- **[Gestor de fuentes de datos]**

  - Se corrigió el cajón de edición de campos en blanco causado por renderizados repetidos en la página de configuración de campos de fuentes de datos externas v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) por @katherinehhh
  - Se corrigió el problema por el cual eliminar la categoría de colección actual en el gestor de fuentes de datos v1 podía dejar vacía la pestaña "Todas las colecciones". ([#9757](https://github.com/nocobase/nocobase/pull/9757)) por @katherinehhh
- **[Gestor de copias de seguridad]** Se corrigió un problema de seguridad por el cual se podían aceptar nombres de esquema PostgreSQL inseguros durante la restauración de copias de seguridad. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) por @2013xile
- **[Flujo de trabajo: Nodo SQL]** Se corrigió el problema por el cual la migración de variables de plantilla heredadas del nodo SQL del flujo de trabajo se omitía para algunos usuarios de versiones beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) por @mytharcher
- **[Bloque: Kanban]** Se corrigió el soporte de URL para calendarios y otras ventanas emergentes. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) por @jiannx
- **[Empleados de IA]**

  - Se corrigió el problema por el cual los archivos adjuntos pegados en el diálogo del empleado de IA no se podían eliminar. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) por @cgyrock
  - Se corrigió la pérdida de configuración de mensajes en los nodos LLM del flujo de trabajo. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) por @cgyrock
- **[Gestor de archivos]** Se corrigió la falta de texto de fuente china/CID en algunas vistas previas de PDF después de cambiar a pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) por @mytharcher
- **[Documentación de API]** Se corrigió el fallo de compilación del archivo de declaración del plugin de documentación de API. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) por @katherinehhh
- **[Acción: Importar registros Pro]** Se evitó el análisis de archivos grandes en el nodo de solicitud antes de que la importación Pro cree una tarea asíncrona. por @mytharcher
- **[Control de versiones]** Se ajustó la posición de la entrada de acceso directo superior de control de versiones para que aparezca junto al editor de interfaz de usuario en los diseños de administración heredados y v2. por @cgyrock
- **[Flujo de trabajo: Aprobación]** Se corrigió el problema por el cual los datos relacionados no se mostraban en los formularios de aprobación v2. por @zhangzhonghe
