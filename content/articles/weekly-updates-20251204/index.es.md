---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: agregar opciones de `transformador de mensajes de error` en la configuración de la fuente de datos de la API RESTful, permitir elegir si mostrar la instantánea o el registro más reciente en la interfaz de usuario del proceso de aprobación, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860-djgsxo.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.19](https://www.nocobase.com/en/blog/v1.9.19)

*Fecha de lanzamiento: 2025-12-04*

### 🐛 Corrección de errores

- **[Flujo de trabajo: Aprobación]**
  - Se corrigió el problema de falta de memoria (OOM) al listar aprobaciones por @mytharcher
  - Se corrigió el problema de que la ventana emergente del aprobador no mostraba un título por @zhangzhonghe

### [v1.9.18](https://www.nocobase.com/en/blog/v1.9.18)

*Fecha de lanzamiento: 2025-12-04*

### 🐛 Corrección de errores

- **[Acción: Importar registros]** Los campos importados no coinciden con los campos establecidos en la configuración de ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile
- **[Flujo de trabajo]** Se corrigió el problema de que la página de ejecución mostraba un error cuando los trabajos en un nodo no estaban definidos ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher
- **[Control de acceso]** Se añadió middleware para la verificación de permisos en operaciones de asociación para fuentes de datos externas ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile
- **[Flujo de trabajo: Aprobación]**
  - Se corrigió el problema de error de permiso al cargar aprobaciones relacionadas con registros en el panel de detalles por @mytharcher
  - Se corrigió el problema de que los registros de aprobación no se incluían en el resultado del trabajo en la rama de retorno por @mytharcher
  - Se corrigió el problema de que el proceso era incorrecto al ramificar con orden y contrafirma por @mytharcher

### [v1.9.17](https://www.nocobase.com/en/blog/v1.9.17)

*Fecha de lanzamiento: 2025-12-02*

### 🐛 Corrección de errores

- **[cliente]** Se corrigió el problema de parpadeo del cuadro de selección desplegable de la regla de vinculación ([#8018](https://github.com/nocobase/nocobase/pull/8018)) por @zhangzhonghe
- **[acl]** Se corrigió un problema donde la metainformación de ACL era incorrecta cuando los ámbitos de permiso de fuentes de datos externas usaban variables relacionadas con el usuario actual ([#8013](https://github.com/nocobase/nocobase/pull/8013)) por @2013xile
- **[Editor de temas]** Se habilitó el cambio de tema en dispositivos móviles ([#8046](https://github.com/nocobase/nocobase/pull/8046)) por @zhangzhonghe
- **[Administrador de múltiples aplicaciones]** La configuración del nivel de registro no se aplicaba a las subaplicaciones ([#8045](https://github.com/nocobase/nocobase/pull/8045)) por @2013xile

### [v1.9.16](https://www.nocobase.com/en/blog/v1.9.16)

*Fecha de lanzamiento: 2025-12-02*

### 🎉 Nuevas funciones

- **[Fuente de datos: API REST]** se añadió la opción `transformador de mensajes de error` en la configuración de la fuente de datos de la API RESTful por @cgyrock

### 🚀 Mejoras

- **[cliente]**
  - mostrar opciones colapsadas al pasar el ratón en el componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh
  - optimizar mensajes de validación para subtablas ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh
- **[Flujo de trabajo]** Se añadió el contexto de la fuente de datos "main" para UserSelect, con el fin de proporcionar un componente más común que pueda usarse en otros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Se usó un componente común para reducir el código duplicado por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Se corrigió el error de carga diferida en Variable.Input, que provocaba que el menú de opciones de variables se volviera a renderizar incorrectamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher
- **[Acción: Importar registros]** Se corrigió el problema de que se producía un error cuando un campo en el xlsx importado tenía un valor `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher
- **[Flujo de trabajo]** Se corrigió el problema de que la cola se cerraba antes de publicar los mensajes ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher
- **[Flujo de trabajo: Subflujo]** Se corrigió el problema de que el flujo de trabajo seleccionado mostraba "N/A" cuando el recuento de flujos de trabajo era superior a 200 por @mytharcher
- **[Flujo de trabajo: Aprobación]**
  - Se corrigió el problema de permiso al obtener `approvalRecords.reassignee` debido al cambio de `RemoteSelect` por @mytharcher
  - Se corrigió el problema de que la acción de impresión no funcionaba al actualizar la página con un modal abierto por @mytharcher

### [v1.9.15](https://www.nocobase.com/en/blog/v1.9.15)

*Fecha de lanzamiento: 2025-11-28*

### 🐛 Corrección de errores

- **[cliente]**
  - Evitar que se produzca un error al abrir la configuración de valores predeterminados ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher
  - resolver el error al añadir registros secundarios en un bloque de tabla de árbol de asociación ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh
- **[Departamentos]** Se corrigió el problema de que los campos asociados al departamento no se podían editar ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang
- **[Colección: Árbol]** Se corrigieron los fallos de actualización de la tabla de rutas causados por una búsqueda incorrecta del campo padre del árbol ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile
- **[Campo de colección: Muchos a muchos (matriz)]** Se corrigió el problema de que el campo de matriz m2m en la subtabla no se podía actualizar ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock
- **[Flujo de trabajo: Aprobación]**
  - Se corrigió la ausencia de datos del solicitante en el contexto de ejecución después de que el usuario reenviara por @mytharcher
  - Se corrigió el problema de que el comentario en el resultado del trabajo era nulo después de que el usuario enviara la aprobación con comentario por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.50](https://www.nocobase.com/en/blog/v2.0.0-alpha.50)

*Fecha de lanzamiento: 2025-12-02*

### 🚀 Mejoras

- **[cliente]**
  - soporte para la configuración de permitir múltiples en el componente de carga de archivos adjuntos ([#8052](https://github.com/nocobase/nocobase/pull/8052)) por @katherinehhh
  - mostrar opciones colapsadas al pasar el ratón en el componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh
  - mostrar opciones colapsadas al pasar el ratón en el componente Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) por @katherinehhh
- **[Empleados de IA]** se añadió el campo de proveedor faltante al formulario Añadir LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) por @heziqiang
- **[Flujo de trabajo]** Se añadió el contexto de la fuente de datos "main" para UserSelect, con el fin de proporcionar un componente más común que pueda usarse en otros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió el problema de que se mostraba "N/A" después de deshabilitar permitir múltiples en la selección de registros de asociación muchos a muchos ([#8050](https://github.com/nocobase/nocobase/pull/8050)) por @katherinehhh
  - Se corrigió el problema de parpadeo del cuadro de selección desplegable de la regla de vinculación ([#8018](https://github.com/nocobase/nocobase/pull/8018)) por @zhangzhonghe
  - Se corrigió un problema donde cambiar un campo de fecha a un campo de hora en la acción de filtro causaba un error de renderizado. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) por @gchust
  - Se corrigió un problema donde aparecía el menú del registro actual al añadir un bloque de comentarios. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) por @gchust
  - Se corrigió el error al eliminar un registro en el bloque selector de registros ([#8023](https://github.com/nocobase/nocobase/pull/8023)) por @katherinehhh
  - Se corrigió un problema donde el estilo predeterminado del campo JS en el bloque de detalles era incorrecto. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) por @gchust
  - Se corrigió que el bloque de tabla de árbol no podía expandir nodos secundarios ([#8011](https://github.com/nocobase/nocobase/pull/8011)) por @katherinehhh
  - Se corrigió que el arrastre de columnas de la subtabla no funcionaba ([#8026](https://github.com/nocobase/nocobase/pull/8026)) por @katherinehhh
  - Se corrigió que el ancho de columna de la subtabla no se aplicaba ([#8027](https://github.com/nocobase/nocobase/pull/8027)) por @katherinehhh
  - Se resolvió un problema que causaba errores al cargar datos para campos de asociación en ventanas emergentes, asegurando una visualización y funcionalidad de datos más fluidas. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) por @gchust
  - Se corrigió el problema de estilo del popover del campo de visualización markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) por @katherinehhh
  - Se corrigió un problema donde los títulos predeterminados de las ventanas emergentes de las acciones de editar y crear nuevo eran incorrectos. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) por @gchust
  - Se corrigió el error de carga diferida en Variable.Input, que provocaba que el menú de opciones de variables se volviera a renderizar incorrectamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher
  - Se corrigió un problema donde la variable de registro de la ventana emergente actual no se podía resolver correctamente en una ventana emergente abierta por un campo de asociación. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) por @gchust
- **[acl]** Se corrigió un problema donde la metainformación de ACL era incorrecta cuando los ámbitos de permiso de fuentes de datos externas usaban variables relacionadas con el usuario actual ([#8013](https://github.com/nocobase/nocobase/pull/8013)) por @2013xile
- **[motor de flujo]**
  - Se corrigió que el registro de comentarios fallaba al guardar después de editar ([#8035](https://github.com/nocobase/nocobase/pull/8035)) por @katherinehhh
  - Se corrigió un problema donde los bloques de datos no se actualizaban al cerrar una ventana emergente haciendo clic en el botón de envío del formulario dentro de la ventana emergente. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) por @gchust
- **[Editor de temas]** Se habilitó el cambio de tema en dispositivos móviles ([#8046](https://github.com/nocobase/nocobase/pull/8046)) por @zhangzhonghe
- **[Administrador de múltiples aplicaciones (obsoleto)]** La configuración del nivel de registro no se aplicaba a las subaplicaciones ([#8045](https://github.com/nocobase/nocobase/pull/8045)) por @2013xile
- **[Administrador de fuentes de datos]** Se corrigieron errores al actualizar contraseñas para fuentes de datos externas ([#8024](https://github.com/nocobase/nocobase/pull/8024)) por @cgyrock
- **[Acción: Importar registros]** Se corrigió el problema de que se producía un error cuando un campo en el xlsx importado tenía un valor `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher
- **[Flujo de trabajo]** Se corrigió el problema de que la cola se cerraba antes de publicar los mensajes ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher
- **[Comentarios]**
  - Se corrigió el error al eliminar un registro en el bloque de comentarios por @katherinehhh
  - Se corrigió la advertencia al usar el bloque de comentarios en una colección que no es de comentarios por @katherinehhh
- **[Multi-espacio]** Los dispositivos móviles soportan el cambio de espacio por @jiannx
- **[Flujo de trabajo: Subflujo]** Se corrigió el problema de que el flujo de trabajo seleccionado mostraba "N/A" cuando el recuento de flujos de trabajo era superior a 200 por @mytharcher
- **[Flujo de trabajo: Aprobación]**
  - Se corrigió el error al crear un bloque de información de aprobación por @mytharcher
  - Se añadió migración para evitar errores de registro duplicado al añadir un índice por @mytharcher
  - Se corrigió el problema de que la acción de impresión no funcionaba al actualizar la página con un modal abierto por @mytharcher

### [v2.0.0-alpha.49](https://www.nocobase.com/en/blog/v2.0.0-alpha.49)

*Fecha de lanzamiento: 2025-11-29*

### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Permitir elegir si mostrar la instantánea o el registro más reciente en la interfaz de usuario del proceso de aprobación por @mytharcher

### 🚀 Mejoras

- **[cliente]** optimizar mensajes de validación para subtablas ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh
- **[Telemetría: Prometheus]** Actualización de `@opentelemetry/exporter-prometheus` por @2013xile
- **[Acción: Importar registros Pro]** Mensajes de error mejorados para tareas asíncronas para proporcionar a los usuarios razones específicas para los fallos de las tareas por @mytharcher

### 🐛 Corrección de errores

- **[motor de flujo]** Se corrigió un problema donde la variable de registro actual no se podía activar correctamente para su resolución en el bloque de detalles. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) por @gchust
- **[cliente]** Se corrigieron problemas de selección y eliminación de bloques de tabla para claves compuestas ([#7978](https://github.com/nocobase/nocobase/pull/7978)) por @katherinehhh
- **[Acción: Exportar registros]** Se corrigió la falta de campos del sistema en la lista de campos exportables ([#8002](https://github.com/nocobase/nocobase/pull/8002)) por @katherinehhh
- **[Colección: Árbol]** Se corrigieron los fallos de actualización de la tabla de rutas causados por una búsqueda incorrecta del campo padre del árbol ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile
- **[Campo de colección: Muchos a muchos (matriz)]** Se corrigió el problema de que el campo de matriz m2m en la subtabla no se podía actualizar ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock
- **[Departamentos]** Se corrigió el problema de que los campos asociados al departamento no se podían editar ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang
- **[Flujo de trabajo: Aprobación]** Se corrigió el problema de permiso al obtener `approvalRecords.reassignee` debido al cambio de `RemoteSelect` por @mytharcher

### [v2.0.0-alpha.48](https://www.nocobase.com/en/blog/v2.0.0-alpha.48)

*Fecha de lanzamiento: 2025-11-28*

### 🎉 Nuevas funciones

- **[Bloque: Mapa]** se añadió el bloque de mapa 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) por @katherinehhh
- **[Autenticación: OIDC]** Soporte para redirección automática a la URL de SSO cuando no está autenticado por @heziqiang

### 🐛 Corrección de errores

- **[cliente]**
  - Evitar que se produzca un error al abrir la configuración de valores predeterminados ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher
  - resolver el error al añadir registros secundarios en un bloque de tabla de árbol de asociación ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh
  - corregir el problema de visualización cuando el campo markdown está truncado con puntos suspensivos en modo HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) por @katherinehhh
  - corregir resultados de búsqueda incompletos en el selector en cascada ([#7990](https://github.com/nocobase/nocobase/pull/7990)) por @katherinehhh
  - Se corrigió el problema de que el estado de la pestaña de la página y la ruta no se correspondían ([#7991](https://github.com/nocobase/nocobase/pull/7991)) por @zhangzhonghe
  - corregir que el selector remoto no mostraba la etiqueta correcta para valores no objeto ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh
- **[base de datos]** Corrección: eliminar el procesamiento UTC en la conversión de tiempo para campos solo de hora para evitar cambios inducidos por la zona horaria. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu
- **[Flujo de trabajo]**
  - Se corrigió el problema de que las ejecuciones preparadas no se enviaban a la cola antes de detenerse ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher
  - Se corrigió el problema de que algunos menús de tareas del flujo de trabajo no se mostraban ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher
  - Se corrigió el problema de que el enlace de la tarea llevaba a una página de error ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher
- **[Visualización de datos]** La configuración de campos de filtro para colecciones de fuentes de datos externas no muestra propiedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile
- **[Administrador de fuentes de datos]** Se corrigió el fallo en la actualización de la contraseña de la fuente de datos cuando se cambia la contraseña de la base de datos ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock
- **[Acción: Importar registros]** Se corrigió el problema al importar datos en una tabla de árbol ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock
- **[Flujo de trabajo: Nodo manual]** Se corrigió el problema de que el recuento de tareas manuales no era correcto ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**
  - Se corrigió la ausencia de datos del solicitante en el contexto de ejecución después de que el usuario reenviara por @mytharcher
  - Se corrigió el problema de que el comentario en el resultado del trabajo era nulo después de que el usuario enviara la aprobación con comentario por @mytharcher
