---
title: "NocoBase v2.1.0-beta.27: Los empleados de IA pueden buscar documentación empaquetada con comandos Bash"
description: "Nota de la versión v2.1.0-beta.27"
---

### 🎉 Nuevas funciones

- **[servidor]** Los empleados de IA pueden buscar documentación empaquetada con comandos Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) por @2013xile

- **[Empleados de IA]** El nodo de empleado de IA del flujo de trabajo admite la carga de archivos desde campos de adjuntos. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) por @cgyrock

- **[Copia de texto]** Se añade la opción "Mostrar botón de copia" para campos de texto de solo lectura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh

### 🚀 Mejoras

- **[cliente]** Permitir asignar un valor de campo para campos de secuencia ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher

- **[Bloque: Kanban]** Se mejoró la consistencia del espaciado de los campos de detalle en v2 y se hizo que el espaciado de las tarjetas y columnas kanban se adapte mejor a la configuración del tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) por @jiannx

- **[Empleados de IA]** Se mejoraron las herramientas de edición de Nathan's RunJS y se redujo el retraso durante conversaciones largas con el chat de IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) por @2013xile

- **[Flujo de trabajo: Aprobación]** Se corrige el comportamiento de validación de campos obligatorios en formularios de aprobación por @zhangzhonghe

### 🐛 Corrección de errores

- **[motor-de-flujo]** Se corrigieron los mensajes de validación de campos de tabla de datos no traducidos en formularios de flujo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx

- **[cliente]**
  - Se corrige que los formularios de filtro no se podían colapsar ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe

  - Se corrige el error al filtrar campos escalares con filtros de selección múltiple personalizados ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe

  - Se corrigieron los nombres de archivo de descarga incorrectos para campos AttachmentURL cuando faltan metadatos del archivo. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher

  - Se corrige la adaptación de DividerItem al tema en v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh

  - Se corrige el problema por el cual las reglas de vinculación de subtablas v1 cambiaban incorrectamente los estilos de los campos obligatorios ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe

  - Se corrigió que los campos `Oculto (valor reservado)` en bloques de formulario permanezcan visibles en el modo Editor de UI, y se restauró la entrada de valor para asignarlos en Asignación de campos ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx

  - Se corrigió el disparador de flujo de trabajo masivo de tabla v2 para que la selección de filas se mantenga consistente después de redirigir entre pestañas y las filas se puedan seleccionar nuevamente al regresar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx

- **[cliente-v2]**
  - Se corrigió el error al seleccionar campos de asociación en la configuración de campos. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) por @gchust

  - Se corrige el problema por el que aparece una página 404 momentánea después de iniciar la aplicación ([#9365](https://github.com/nocobase/nocobase/pull/9365)) por @zhangzhonghe

- **[servidor]** Se corrigió que las solicitudes de descubrimiento OAuth de subaplicaciones se enrutaran como solicitudes de la aplicación principal ([#9383](https://github.com/nocobase/nocobase/pull/9383)) por @2013xile

- **[Fuente de datos: Principal]** Se corrigió que las tablas de base de datos importadas usaran el nombre de tabla con prefijo incorrecto cuando un prefijo de tabla está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile

- **[Notificación: Mensaje en la aplicación]** Se corrigió un problema por el cual la lista de mensajes en la aplicación no se actualizaba después de recibir notificaciones en tiempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher

- **[Administrador de fuentes de datos]** Se impide la edición y eliminación de todos los registros en permisos de ámbito personalizados para fuentes de datos externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh

- **[IA: Servidor MCP]** Se corrigió el empaquetado del servidor MCP para que las dependencias en tiempo de ejecución estén incluidas ([#9401](https://github.com/nocobase/nocobase/pull/9401)) por @2013xile

- **[Motor de flujo]** Se corrigió un problema por el cual los bloques generados por IA no se podían convertir de plantillas de referencia de vuelta a plantillas duplicadas. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) por @gchust

- **[Acción: Importar registros Pro]** Se corrige el problema por el cual la comprobación de duplicados en campos de fecha siempre fallaba por @mytharcher

- **[Política de contraseñas]** Se corrigió un problema por el cual los usuarios bloqueados permanentemente podían iniciar sesión después de reiniciar el servicio por @2013xile

- **[Flujo de trabajo: Aprobación]** Se corrige el problema por el cual el panel de selección de registros queda oculto en la configuración del flujo de trabajo de aprobación por @zhangzhonghe

- **[Administrador de copias de seguridad]** Se corrige la adaptación del esquema de pg por @Andrew1989Y
