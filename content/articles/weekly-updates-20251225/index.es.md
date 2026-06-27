---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: Agregar nuevas variables del sistema en el flujo de trabajo, incluyendo `instanceId` y `genSnowflakeId`, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.32](https://www.nocobase.com/en/blog/v1.9.32)

*Fecha de lanzamiento: 2025-12-24*

### 🎉 Nuevas funciones

- **[Flujo de trabajo]** Añadir nuevas variables de sistema en el flujo de trabajo, incluyendo `instanceId` y `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Corregir desbordamiento de pila causado por un bucle infinito en la carga diferida de campos de asociación mostrados ([#8262](https://github.com/nocobase/nocobase/pull/8262)) por @zhangzhonghe
- **[Acción: Importar registros]** Corregir el problema donde el índice de fila en el mensaje de error siempre es 1 cuando se produce un error en la acción de importación ([#8244](https://github.com/nocobase/nocobase/pull/8244)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Corregir el problema donde se produce un error al cancelar la ejecución de un flujo de trabajo eliminado ([#8258](https://github.com/nocobase/nocobase/pull/8258)) por @mytharcher
- **[Campo de colección: Secuencia]** Corregido un error cuando el comando de reparación de campo-secuencia encuentra una colección inexistente en el entorno actual. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) por @cgyrock
- **[Acción: Importar registros Pro]** Corregir la lógica de verificación de unicidad que lanzaba un error cuando el valor del campo único es nulo por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir la reversión duplicada de la misma transacción por @mytharcher

### [v1.9.31](https://www.nocobase.com/en/blog/v1.9.31)

*Fecha de lanzamiento: 2025-12-22*

### 🚀 Mejoras

- **[Gestor de tareas asíncronas]** Mejorado el manejo de errores durante las tareas de limpieza añadiendo mecanismos de captura de excepciones para prevenir fallos de la aplicación ([#8215](https://github.com/nocobase/nocobase/pull/8215)) por @mytharcher
- **[Flujo de trabajo]** Añadir instancia de flujo de trabajo original a la API duplicada ([#8225](https://github.com/nocobase/nocobase/pull/8225)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Manejar reglas de enlace vacías para prevenir errores ([#8239](https://github.com/nocobase/nocobase/pull/8239)) por @zhangzhonghe
- **[Departamentos]** Corregir un problema donde la búsqueda agregada no puede localizar usuarios ([#8222](https://github.com/nocobase/nocobase/pull/8222)) por @2013xile

### [v1.9.30](https://www.nocobase.com/en/blog/v1.9.30)

*Fecha de lanzamiento: 2025-12-19*

### 🚀 Mejoras

- **[Flujo de trabajo]** Mejorar la descripción del campo `changed` en el evento de colección ([#8216](https://github.com/nocobase/nocobase/pull/8216)) por @mytharcher

### 🐛 Corrección de errores

- **[cli]** license-kit es compatible con el caso donde DB_PASSWORD está vacío ([#8220](https://github.com/nocobase/nocobase/pull/8220)) por @jiannx
- **[base de datos]** Corregir inconsistencia en la consulta de campos de fecha entre fuentes de datos principal y externas ([#8181](https://github.com/nocobase/nocobase/pull/8181)) por @cgyrock
- **[Configuración de licencia]** Corregir la visualización anómala del plugin con licencia ([#8214](https://github.com/nocobase/nocobase/pull/8214)) por @jiannx
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema donde aprobar crea una asociación a un nuevo registro por @mytharcher
  - Corregir el problema donde aprobar crea una asociación de muchos a muchos a nuevos registros por @mytharcher

### [v1.9.29](https://www.nocobase.com/en/blog/v1.9.29)

*Fecha de lanzamiento: 2025-12-18*

### 🐛 Corrección de errores

- **[Flujo de trabajo]** Corregir el problema donde se produce un error al eliminar una versión de flujo de trabajo que no es la actual ([#8203](https://github.com/nocobase/nocobase/pull/8203)) por @mytharcher
- **[Gestor de migraciones]** Corregir la falta de descripción de migración y establecer la hora actual como valor predeterminado por @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.58](https://www.nocobase.com/en/blog/v2.0.0-alpha.58)

*Fecha de lanzamiento: 2025-12-24*

### 🐛 Corrección de errores

- **[Empleados IA]** Resolver problema donde el contenido del mensaje del nodo llm no se mostraba ([#8257](https://github.com/nocobase/nocobase/pull/8257)) por @heziqiang

### [v2.0.0-alpha.57](https://www.nocobase.com/en/blog/v2.0.0-alpha.57)

*Fecha de lanzamiento: 2025-12-24*

### 🎉 Nuevas funciones

- **[Flujo de trabajo]** Añadir nuevas variables de sistema en el flujo de trabajo, incluyendo `instanceId` y `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) por @mytharcher

### 🚀 Mejoras

- **[cliente]** usar select para la configuración del ancho de la columna de operación ([#8218](https://github.com/nocobase/nocobase/pull/8218)) por @katherinehhh
- **[Empleados IA]** Corregir que el empleado IA no respondía en la primera edición del envío<br/>Eliminar el empleado IA integrado innecesario "Asistente de formularios Avery"<br/>Añadir permisos de rol iniciales predeterminados para empleados IA integrados<br/>Mejorar el manejo de errores y el comportamiento de salida del empleado IA<br/>Añadir soporte para que la IA acceda a variables de contexto modal<br/>Añadir soporte para fuentes de datos externas para IA<br/>Corregir el truncamiento incorrecto de la conversación cuando la IA procesa grandes volúmenes de datos ([#8191](https://github.com/nocobase/nocobase/pull/8191)) por @heziqiang
- **[Flujo de trabajo]**

  - Añadir instancia de flujo de trabajo original a la API duplicada ([#8225](https://github.com/nocobase/nocobase/pull/8225)) por @mytharcher
  - Mejorar la descripción del campo `changed` en el evento de colección ([#8216](https://github.com/nocobase/nocobase/pull/8216)) por @mytharcher
- **[Gestor de tareas asíncronas]** Mejorado el manejo de errores durante las tareas de limpieza añadiendo mecanismos de captura de excepciones para prevenir fallos de la aplicación ([#8215](https://github.com/nocobase/nocobase/pull/8215)) por @mytharcher
- **[Bloque: Panel de acciones]** mejorar la visualización de bloques, acciones y campos ocultos en modo de configuración ([#8174](https://github.com/nocobase/nocobase/pull/8174)) por @katherinehhh
- **[Plantillas de UI]** Añadido plugin de plantillas de UI, proporcionando la capacidad de reutilizar plantillas de bloques y plantillas de ventanas emergentes. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) por @gchust
- **[Acción: Exportar registros Pro]** import pro & export pro action support permission control por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Actualizar `approval.data` a la última versión del registro aprobado cuando finalice la ejecución, para que coincida con el modo de visualización de registro "Más reciente" por @mytharcher

### 🐛 Corrección de errores

- **[motor de flujo]**

  - corregir problema de verificación de permisos para añadir registros hijos en tabla de árbol ([#8240](https://github.com/nocobase/nocobase/pull/8240)) por @katherinehhh
  - Corregido un problema donde algunas variables relacionadas con registros de ventanas emergentes de bloques se mostraban incorrectamente. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) por @gchust
  - Corregido el problema donde las acciones o pestañas añadidas después de arrastrar acciones o pestañas no se mostraban. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) por @gchust
  - problema de verificación de permisos en fuentes de datos externas ([#8221](https://github.com/nocobase/nocobase/pull/8221)) por @katherinehhh
  - corregir que las acciones de fuentes de datos externas se oculten a pesar de tener permiso ([#8217](https://github.com/nocobase/nocobase/pull/8217)) por @katherinehhh
- **[cliente]**

  - Manejar reglas de enlace vacías para prevenir errores ([#8239](https://github.com/nocobase/nocobase/pull/8239)) por @zhangzhonghe
  - Corregido el problema donde la columna de operación del bloque de tabla no podía eliminarse. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) por @gchust
  - Corregido el problema donde la ejecución de vista previa escribía la salida JSX compilada de vuelta a stepParams, causando que el código fuente guardado se reescribiera. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) por @gchust
  - Corregir error de carga de archivos adjuntos S3 Pro y mejorar la vista previa de archivos ([#8211](https://github.com/nocobase/nocobase/pull/8211)) por @katherinehhh
- **[cli]** license-kit es compatible con el caso donde DB_PASSWORD está vacío ([#8220](https://github.com/nocobase/nocobase/pull/8220)) por @jiannx
- **[base de datos]** Corregir inconsistencia en la consulta de campos de fecha entre fuentes de datos principal y externas ([#8181](https://github.com/nocobase/nocobase/pull/8181)) por @cgyrock
- **[Campo de colección: Secuencia]** Corregido un error cuando el comando de reparación de campo-secuencia encuentra una colección inexistente en el entorno actual. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) por @cgyrock
- **[Flujo de trabajo: Nodo manual]** Corregir el problema donde se produce un error al cancelar la ejecución de un flujo de trabajo eliminado ([#8258](https://github.com/nocobase/nocobase/pull/8258)) por @mytharcher
- **[Plantillas de UI]** Corregir un error donde abrir una ventana emergente de campo de asociación usaba incorrectamente una plantilla de ventana emergente de campo no asociado. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) por @gchust
- **[Departamentos]** Corregir un problema donde la búsqueda agregada no puede localizar usuarios ([#8222](https://github.com/nocobase/nocobase/pull/8222)) por @2013xile
- **[Campo de colección: Muchos a muchos (array)]** Corregir un problema donde los campos de muchos a muchos (array) no se pueden crear cuando el tipo de clave de destino es Snowflake ID (53 bits) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) por @2013xile
- **[Configuración de licencia]** Corregir la visualización anómala del plugin con licencia ([#8214](https://github.com/nocobase/nocobase/pull/8214)) por @jiannx
- **[Acción: Importar registros]** Corregir el problema donde el índice de fila en el mensaje de error siempre es 1 cuando se produce un error en la acción de importación ([#8244](https://github.com/nocobase/nocobase/pull/8244)) por @mytharcher
- **[Impresión de plantilla]** Corregir que la solicitud de impresión de plantilla no funciona con fuentes de datos externas por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Corregir la reversión duplicada de la misma transacción por @mytharcher
  - Corregir el problema donde aprobar crea una asociación a un nuevo registro por @mytharcher
  - Corregir el problema donde aprobar crea una asociación de muchos a muchos a nuevos registros por @mytharcher

### [v2.0.0-alpha.56](https://www.nocobase.com/en/blog/v2.0.0-alpha.56)

*Fecha de lanzamiento: 2025-12-18*

### 🚀 Mejoras

- **[cliente]** soportar ancho de columna personalizado para columnas de tabla ([#8200](https://github.com/nocobase/nocobase/pull/8200)) por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]** Prevenir el desbordamiento del ancho total de la fila durante el redimensionamiento de columnas ([#8166](https://github.com/nocobase/nocobase/pull/8166)) por @zhangzhonghe
- **[motor de flujo]** Corregir el problema donde enviar el formulario en un modal reutilizado a través del uid de la ventana emergente no actualiza los datos del bloque. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) por @gchust
- **[Campo de colección: Fórmula]** Corregir problema donde los campos BigInt no se pueden añadir a los bloques de Detalle y Formulario ([#8201](https://github.com/nocobase/nocobase/pull/8201)) por @katherinehhh
- **[Flujo de trabajo]** Corregir el problema donde se produce un error al eliminar una versión de flujo de trabajo que no es la actual ([#8203](https://github.com/nocobase/nocobase/pull/8203)) por @mytharcher
