---
title: "NocoBase v2.0.0-alpha.57: Añadir nuevas variables de sistema en el flujo de trabajo, incluyendo `instanceId` y `genSnowflakeId`"
description: "Nota de la versión v2.0.0-alpha.57"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo]** Se añaden nuevas variables de sistema en el flujo de trabajo, incluyendo `instanceId` y `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) por @mytharcher

### 🚀 Mejoras

- **[cliente]** Usar select para la configuración del ancho de la columna de operación ([#8218](https://github.com/nocobase/nocobase/pull/8218)) por @katherinehhh
- **[Empleados IA]** Se corrige que el empleado IA no responda en la primera edición del envío<br/>Se elimina el empleado IA integrado innecesario "Asistente de Formularios Avery"<br/>Se añaden permisos de rol iniciales predeterminados para los empleados IA integrados<br/>Se mejora el manejo de errores y el comportamiento de salida de los empleados IA<br/>Se añade soporte para que la IA acceda a variables de contexto modal<br/>Se añade soporte para fuentes de datos externas para la IA<br/>Se corrige el truncamiento incorrecto de la conversación cuando la IA procesa grandes volúmenes de datos ([#8191](https://github.com/nocobase/nocobase/pull/8191)) por @heziqiang
- **[Flujo de trabajo]**

  - Se añade la instancia de flujo de trabajo original a la API de duplicación ([#8225](https://github.com/nocobase/nocobase/pull/8225)) por @mytharcher
  - Se mejora la descripción del campo `changed` en el evento de colección ([#8216](https://github.com/nocobase/nocobase/pull/8216)) por @mytharcher
- **[Gestor de tareas asíncronas]** Se mejora el manejo de errores durante las tareas de limpieza añadiendo mecanismos de captura de excepciones para evitar fallos en la aplicación ([#8215](https://github.com/nocobase/nocobase/pull/8215)) por @mytharcher
- **[Bloque: Panel de acciones]** Se mejora la visualización de bloques, acciones y campos ocultos en el modo de configuración ([#8174](https://github.com/nocobase/nocobase/pull/8174)) por @katherinehhh
- **[Plantillas de UI]** Se añade el plugin de plantillas de UI, que proporciona la capacidad de reutilizar plantillas de bloques y plantillas de ventanas emergentes. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) por @gchust
- **[Acción: Exportar registros Pro]** Las acciones de importación pro y exportación pro soportan control de permisos por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Se actualiza `approval.data` a la última versión del registro en aprobación cuando finaliza la ejecución, para coincidir con el modo de visualización de registro "Más reciente" por @mytharcher

### 🐛 Corrección de Errores

- **[motor-de-flujo]**

  - Se corrige un problema de verificación de permisos al añadir registros hijos en una tabla de árbol ([#8240](https://github.com/nocobase/nocobase/pull/8240)) por @katherinehhh
  - Se corrige un problema por el que algunas variables relacionadas con registros de ventanas emergentes de bloques se mostraban incorrectamente. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) por @gchust
  - Se corrige el problema por el que las acciones o pestañas añadidas después de arrastrar acciones o pestañas no se mostraban. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) por @gchust
  - Problema de verificación de permisos en fuentes de datos externas ([#8221](https://github.com/nocobase/nocobase/pull/8221)) por @katherinehhh
  - Se corrige que las acciones de fuentes de datos externas estuvieran ocultas a pesar de tener permiso ([#8217](https://github.com/nocobase/nocobase/pull/8217)) por @katherinehhh
- **[cliente]**

  - Se manejan reglas de enlace vacías para prevenir errores ([#8239](https://github.com/nocobase/nocobase/pull/8239)) por @zhangzhonghe
  - Se corrige el problema por el que la columna de operación del bloque de tabla no podía eliminarse. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) por @gchust
  - Se corrige el problema por el que la ejecución de vista previa escribía la salida JSX compilada de vuelta en stepParams, causando que el código fuente guardado se sobrescribiera. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) por @gchust
  - Se corrige el error de carga de archivos adjuntos de S3 Pro y se mejora la vista previa de archivos ([#8211](https://github.com/nocobase/nocobase/pull/8211)) por @katherinehhh
- **[cli]** license-kit es compatible con el caso en que DB_PASSWORD está vacío ([#8220](https://github.com/nocobase/nocobase/pull/8220)) por @jiannx
- **[base de datos]** Se corrige la inconsistencia en la consulta de campos de fecha entre la fuente de datos principal y las externas ([#8181](https://github.com/nocobase/nocobase/pull/8181)) por @cgyrock
- **[Campo de colección: Secuencia]** Se corrige un error cuando el comando de reparación de campo-secuencia encuentra una colección inexistente en el entorno actual. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) por @cgyrock
- **[Flujo de trabajo: Nodo manual]** Se corrige el problema de que se lanzara un error al cancelar la ejecución de un flujo de trabajo eliminado ([#8258](https://github.com/nocobase/nocobase/pull/8258)) por @mytharcher
- **[Plantillas de UI]** Se corrige un error al abrir una ventana emergente de un campo de asociación que usaba incorrectamente una plantilla de ventana emergente de un campo no asociado. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) por @gchust
- **[Departamentos]** Se corrige un problema por el que la búsqueda agregada no podía localizar usuarios ([#8222](https://github.com/nocobase/nocobase/pull/8222)) por @2013xile
- **[Campo de colección: Muchos a muchos (array)]** Se corrige un problema por el que los campos muchos a muchos (array) no podían crearse cuando el tipo de clave de destino era Snowflake ID (53 bits) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) por @2013xile
- **[Configuración de licencia]** Se corrige la visualización anómala del plugin con licencia ([#8214](https://github.com/nocobase/nocobase/pull/8214)) por @jiannx
- **[Acción: Importar registros]** Se corrige el problema por el que el índice de fila en el mensaje de error siempre era 1 cuando se producía un error en la acción de importación ([#8244](https://github.com/nocobase/nocobase/pull/8244)) por @mytharcher
- **[Impresión de plantillas]** Se corrige que la solicitud de impresión de plantillas no funcionara con fuentes de datos externas por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Se corrige la reversión duplicada de la misma transacción por @mytharcher
  - Se corrige el problema por el que la aprobación provocaba una asociación para crear un nuevo registro por @mytharcher
  - Se corrige el problema por el que la aprobación provocaba una asociación de muchos a muchos para crear nuevos registros por @mytharcher
