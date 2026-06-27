---
title: "NocoBase v1.9.0-beta.17: Añadir notificación para el asignado delegado y añadido"
description: "Nota de la versión v1.9.0-beta.17"
---

### 🚀 Mejoras

- **[base de datos]** Se añadió la opción `multipleStatements` a la instancia de conexión MariaDB para admitir la invocación de múltiples sentencias en una sola consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher

- **[Control de acceso]**
  - Se redujeron los permisos predeterminados para el rol de miembro ([#7921](https://github.com/nocobase/nocobase/pull/7921)) por @2013xile

  - Se optimizó la lógica de control de permisos para las operaciones en campos de asociación ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile

- **[Visualización de datos]** Se añadió soporte para el idioma ruso en las interfaces del plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) por @sembaev-a-a

- **[Flujo de trabajo]** Se permite que el bloque de datos en el flujo de trabajo utilice el menú de configuración de detalles consolidado ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher

- **[Flujo de trabajo: Webhook]** Se añadió un icono para el tipo de nodo de respuesta por @mytharcher

- **[Flujo de trabajo: JavaScript]** Se corrigió una vulnerabilidad de seguridad causada por la transmisión de funciones de nivel superior al entorno de ejecución, evitando su explotación para obtener acceso al contexto de ejecución superior por @mytharcher

- **[Autenticación: OIDC]** Se aumentó el tiempo de espera de la solicitud por @2013xile

- **[Flujo de trabajo: Aprobación]** Se añadió notificación para el asignado delegado y el asignado añadido por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió que la interfaz del campo mostrara "muchos a uno" en lugar de "uno a uno" para belongsTo en la configuración de fuentes de datos externas ([#7936](https://github.com/nocobase/nocobase/pull/7936)) por @cgyrock

  - Se corrigió el error: No se puede resolver 'antd-mobile' y No se puede resolver 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) por @zhangzhonghe

  - Se corrigió el problema por el que las plantillas duplicadas no aparecían al arrastrar y luego eliminar una plantilla referenciada ([#7847](https://github.com/nocobase/nocobase/pull/7847)) por @zhangzhonghe

  - Se corrigió el problema por el que la regla de vinculación del formulario de aprobación no funcionaba ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe

  - Se corrigió el problema de página siguiente vacía en el bloque de detalle de paginación simple ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh

  - Se corrigió "Se ha superado el tamaño máximo de la pila de llamadas" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe

- **[servidor]**
  - Se corrigió un problema en el modo de división de servicios donde los mensajes de cola no suscritos no podían publicarse ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher

  - Se aisló el canal de publicación-suscripción por nombre de aplicación ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher

  - Se corrigió un problema por el que, tras habilitar el modo de división de servicios, los procesos worker que enviaban mensajes a través de la cola de mensajes provocaban errores ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher

- **[utilidades]** Se habilitó la fusión de objetos en la estrategia de intersección ([#7840](https://github.com/nocobase/nocobase/pull/7840)) por @chenos

- **[base de datos]** Detección incorrecta del campo de índice cuando los nombres de campo usan el estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile

- **[Campo de colección: Muchos a muchos (matriz)]** Se corrigieron problemas del campo M2M (matriz) al crear/actualizar datos relacionados ([#7926](https://github.com/nocobase/nocobase/pull/7926)) por @cgyrock

- **[Fuente de datos: Principal]** Se corrigió el problema por el que un campo recién añadido de uno a muchos no podía seleccionarse como clave externa antes de reiniciar la aplicación. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) por @cgyrock

- **[Flujo de trabajo]**
  - Se corrigió el problema por el que la actualización del recuento de tareas reiniciaba involuntariamente el estado de los formularios que se estaban completando ([#7937](https://github.com/nocobase/nocobase/pull/7937)) por @mytharcher

  - Se usó eventQueue en lugar de backgroundJob compartido para evitar que la cola compartida se consumiera incorrectamente en el modo de división de servicios ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher

  - Se corrigió el problema por el que el plugin de flujo de trabajo seguía consumiendo el evento de la cola cuando no estaba en modo worker bajo el modo de división de servicios ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher

  - Se corrigió el error causado al escuchar eventos de fuentes de datos externas inexistentes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher

  - Se corrigió un problema por el que, en el modo de división de servicios, la ejecución manual de un flujo de trabajo que contenía un nodo de interrupción se quedaba atascada en un estado pendiente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) por @mytharcher

  - Se añadió `workflowId` como dato de identidad para los registros del flujo de trabajo ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher

  - Se resolvió un problema por el que el despachador de flujos de trabajo en modo clúster no identificaba correctamente los estados inactivos, lo que podía provocar un consumo innecesario de eventos de cola antes de que el plugin estuviera listo ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher

- **[Control de acceso]**
  - Se añadió soporte para restricciones de ámbito de datos en operaciones de asociación. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) por @2013xile

  - Problema por el que los fragmentos de operaciones de asociación no surtían efecto ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile

- **[Flujo de trabajo: Nodo manual]** Se corrigió el espacio de nombres del idioma local que se debía usar para mostrar el contenido correcto de la traducción ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher

- **[Usuarios]** Actualización incorrecta del índice cuando los nombres de campo usan el estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile

- **[Móvil (obsoleto)]** Se corrigió el problema por el que la ventana emergente del valor predeterminado del campo de fecha en móvil no permitía seleccionar una fecha ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe

- **[Flujo de trabajo: Variable personalizada]** Se corrigió el error lanzado cuando no hay configuración en el nodo de variable por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió el error causado al escuchar eventos de fuentes de datos externas inexistentes por @mytharcher

- **[Impresión de plantillas]** Se analizaron las variables en el filtro por @jiannx

- **[Visualización de datos: ECharts]** Se corrigió el problema por el que la configuración del tipo de etiqueta en las opciones de Echarts no surtía efecto. por @heziqiang

- **[Flujo de trabajo: Aprobación]**
  - Se corrigió el formato de fecha en las tarjetas de la lista de aprobaciones en el centro de tareas pendientes para mostrar la fecha y hora completas por @mytharcher

  - Se corrigió el problema por el que el tamaño de página del canal de notificación de carga no era suficientemente grande, lo que provocaba que la lista no se cargara por completo por @mytharcher

  - Se corrigió un problema de rendimiento que ocurría al consultar la lista de registros de aprobación durante el envío de la aprobación por @mytharcher

  - Se corrigió un problema por el que los campos de la colección principal no se excluían al recargar datos de asociación por @mytharcher

  - Se corrigió un problema por el que las condiciones de carrera que ocurrían durante el procesamiento de aprobación concurrente por múltiples aprobadores podían provocar que un nodo del flujo de trabajo se ejecutara más de una vez por @mytharcher

  - Ya no se admite la creación de nodos de aprobación en ramas paralelas para evitar problemas causados por el estado del proceso por @mytharcher

  - Se corrigió el problema por el que la regla de vinculación del formulario de aprobación no funcionaba por @zhangzhonghe

  - Se corrigió el error lanzado al duplicar un flujo de trabajo de aprobación por @mytharcher

- **[Gestor de correo electrónico]**
  - Se añadieron registros de sincronización por @jiannx

  - Se sincronizó el estado de lectura del correo de Microsoft sin marca de tiempo por @jiannx

  - Se añadieron índices a la colección mailMessages por @jiannx

  - Se añadió migración para los índices por @jiannx

  - Se corrigió el problema de las imágenes reservadas y la sincronización en Outlook por @jiannx
