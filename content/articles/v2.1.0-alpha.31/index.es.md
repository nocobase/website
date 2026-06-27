---
title: "NocoBase v2.1.0-alpha.31: agregar acciones de asociar y disociar al bloque de asociación"
description: "Nota de la versión v2.1.0-alpha.31"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Añadidas acciones de asociar y disociar al bloque de asociación ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh

- **[Copia de texto]** Soporte para la opción "Mostrar botón de copia" en campos de texto de solo lectura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh

- **[Empleados IA]** El nodo de empleado IA del flujo de trabajo ahora admite la carga de archivos desde campos de adjuntos. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) por @cgyrock

- **[Visualización de datos]** Añadido soporte client-v2 para plugins de bloque ([#9297](https://github.com/nocobase/nocobase/pull/9297)) por @zhangzhonghe

### 🚀 Mejoras

- **[cliente]** Permitir asignar valor de campo para el campo de secuencia ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher

- **[indefinido]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn

- **[Bloque: Kanban]** Mejorada la consistencia del espaciado de los campos de detalle v2 y se ha mejorado la adaptación del espaciado de tarjetas y columnas Kanban a la configuración del tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) por @jiannx

- **[Flujo de trabajo: Aprobación]** Corregido el comportamiento de validación de campos obligatorios en formularios de aprobación por @zhangzhonghe

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregido que los formularios de filtro no se pudieran contraer ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe

  - Corregido el disparador de flujo de trabajo masivo de la tabla v2 para que la selección de filas se mantenga consistente después de redirigir entre pestañas y se puedan volver a seleccionar filas al regresar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx

  - Corregidos los campos `Oculto (valor reservado)` en bloques de formulario para que permanezcan visibles en el modo Editor de UI, y restaurado el soporte de entrada de valor para asignarlos en Asignación de campo ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx

  - corregida la adaptación de DividerItem al tema en v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh

  - Corregidos los nombres de archivo de descarga incorrectos para campos AttachmentURL cuando faltan metadatos del archivo. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher

  - Corregido el error al filtrar campos escalares con filtros personalizados de selección múltiple ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe

  - Corregido que las reglas de vinculación no se volvían a ejecutar después de cambiar los valores del formulario. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust

  - Corregido el problema donde las reglas de vinculación de subtablas v1 cambiaban incorrectamente los estilos de los campos obligatorios ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe

  - corregida la representación incorrecta de datos en el bloque de tarjetas de cuadrícula después de actualizar y refrescar ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh

  - corregido que el campo obligatorio de opción en subtabla no se validara correctamente en la primera selección en móvil ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh

  - corregida la ocultación de la opción de creación rápida para el campo de selección de asociación en subtabla v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh

  - Corregido el problema donde las variables de parámetros de consulta URL se volvían inválidas después de cambiar entre páginas en caché ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe

- **[motor-de-flujo]** Corregidos los mensajes de validación de campos de tabla de datos sin traducir en formularios de flujo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx

- **[servidor]**
  - Corregido que las solicitudes de descubrimiento OAuth de sub-aplicaciones se enrutaran como solicitudes de la aplicación principal ([#9383](https://github.com/nocobase/nocobase/pull/9383)) por @2013xile

  - validar nombres de paquetes de plugins antes de operaciones del sistema de archivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos

- **[client-v2]**
  - Corregido error al seleccionar campos de asociación en la configuración de campos. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) por @gchust

  - Corregido el problema donde aparece una página 404 momentánea después de iniciar la aplicación ([#9365](https://github.com/nocobase/nocobase/pull/9365)) por @zhangzhonghe

  - Corregidos los problemas de marcador de posición de arrastre y posición de colocación del bloque de página v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) por @zhangzhonghe

  - Corregido el problema donde algunas páginas v2 fallan al cargar plugins remotos ([#9369](https://github.com/nocobase/nocobase/pull/9369)) por @zhangzhonghe

- **[indefinido]** Corregidos enlaces rotos en la documentación traducida y habilitada la detección de enlaces rotos por defecto en la compilación de la documentación. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) por @Molunerfinn

- **[Notificación: Mensaje en la aplicación]** Corregido un problema donde la lista de mensajes en la aplicación no se actualizaba después de recibir notificaciones en tiempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher

- **[Gestor de fuentes de datos]** impedir la edición y eliminación de todos los registros en permisos de ámbito personalizados para fuentes de datos externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh

- **[IA: Servidor MCP]** Corregido el empaquetado del servidor MCP para incluir las dependencias en tiempo de ejecución ([#9401](https://github.com/nocobase/nocobase/pull/9401)) por @2013xile

- **[Fuente de datos: Principal]** Corregido que las tablas de base de datos importadas usaran el nombre de tabla con prefijo incorrecto cuando un prefijo de tabla está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile

- **[Motor de flujo]** Corregido un problema donde los bloques generados por IA no podían convertirse de plantillas de referencia de vuelta a plantillas duplicadas. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) por @gchust

- **[Empleados IA]**
  - Corregido error en el nodo de empleado IA al leer adjuntos de campos de asociación en el flujo de trabajo ([#9377](https://github.com/nocobase/nocobase/pull/9377)) por @cgyrock

  - Corregido que el nodo de empleado IA del flujo de trabajo no finalizara correctamente después de la asignación de herramientas. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) por @cgyrock

- **[Acción: Solicitud personalizada]** actualizado koa a v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) por @chenos

- **[Bloque: Kanban]**
  - Mejorado el estilo compacto de las tarjetas Kanban y optimizada la selección de plantillas en el popup de creación rápida. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) por @jiannx

  - corregido el ajuste de palabras individuales en campos de texto largo del bloque kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh

- **[Campo de colección: Fórmula]** corregido que el campo de fórmula en subtabla v2 no se activara para auto-calcular ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh

- **[Acción: Importar registros Pro]** Corregido el problema donde la comprobación de duplicados en el campo de fecha siempre fallaba por @mytharcher

- **[Política de contraseñas]** Corregido un problema donde los usuarios bloqueados permanentemente podían iniciar sesión después de reiniciar el servicio por @2013xile

- **[Flujo de trabajo: Aprobación]** Corregido el problema donde el panel de selección de registro quedaba oculto en la configuración del flujo de trabajo de aprobación por @zhangzhonghe

- **[Gestor de correo electrónico]** Corregida la visualización del título de las identidades de correo por @jiannx

- **[Gestor de copias de seguridad]** corregida la adaptación del esquema pg por @Andrew1989Y
