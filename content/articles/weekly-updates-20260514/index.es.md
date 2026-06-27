---
title: "Actualizaciones Semanales｜El Soporte de Empleado AI Procesa Múltiples Conversaciones en Paralelo"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 7 al 14 de mayo de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está pensada principalmente para que los usuarios de prueba recopilen comentarios y optimicen aún más las funciones. Ideal para usuarios de prueba que quieran experimentar las nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.52](https://www.nocobase.com/en/blog/v2.0.52)

*Fecha de lanzamiento: 2026-05-13*

### 🎉 Nuevas funciones

- **[cliente]**
  - Añadir variable de idioma del usuario actual en v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) por @katherinehhh
  - Añadir opción de límite de rango de fechas para campos de fecha en formularios v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) por @katherinehhh

### 🚀 Mejoras

- **[cliente]** Excluir registros ya asociados en el diálogo de selección de asociación del bloque de tabla uno a muchos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh
- **[Departamentos]** Optimizar el estilo de la lista de departamentos añadiendo iconos y ajustando el espaciado ([#9435](https://github.com/nocobase/nocobase/pull/9435)) por @katherinehhh
- **[IA: Base de conocimiento]** El identificador único de una base de conocimiento es configurable en el momento de la creación por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Corregido el problema por el que no se podían eliminar las configuraciones de valores por defecto heredadas. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust
  - Corregido el problema por el que no se podían seleccionar opciones para el campo de selección de una asociación. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust
  - Corregido un problema por el que el ámbito de datos del bloque de destino se establecía incorrectamente al deseleccionar datos de fila en un flujo de eventos de bloque de tabla. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust
  - Corregir solicitudes de tabla duplicadas cuando los formularios de filtro tienen valores predeterminados ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe
  - Corregidas las reglas de vinculación V2 para admitir el establecimiento de opciones seleccionables para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx
  - corregir error al cambiar el campo de título del campo de asociación en el bloque de tabla v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh
  - Corregido un problema intermitente por el que las reglas de vinculación de botones de acción no surtían efecto. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) por @gchust
  - ocultar el componente de subtabla para campos de asociación de varios en subtabla v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) por @katherinehhh
- **[servidor]** corregir(gestor-de-archivos): forzar la descarga de archivos de contenido activo en almacenamiento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher
- **[Empleados IA]** Corregido el vuelo de prueba de Ollama que requería la entrada de clave ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock
- **[Gestor de colecciones gráficas]** corregir el diseño automático de la interfaz gráfica que lanza un error de filtro de acción de actualización ([#9421](https://github.com/nocobase/nocobase/pull/9421)) por @katherinehhh
- **[Flujo de trabajo]** corregir: restaurar el texto de ayuda en los diálogos de vinculación de flujo de trabajo FlowModel para eventos de acción personalizada y operación ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher
- **[Departamentos]** corregir conflicto de traducción entre los botones de añadir usuario y añadir departamento en la configuración de Usuarios y Permisos ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh
- **[Campo de colección: Markdown(Vditor)]** corregir la información sobre herramientas del campo markdown oculta en el diseño de formulario horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) por @katherinehhh
- **[Cliente WEB]** Corregir el filtrado de tipo de ruta al usar etiquetas traducidas ([#9425](https://github.com/nocobase/nocobase/pull/9425)) por @zhangzhonghe
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema por el que el campo JS aparecía en la configuración del proceso de aprobación por @zhangzhonghe
  - Corregir el diseño del formulario de aprobación en dispositivos móviles por @zhangzhonghe
  - Corregir el índice de registro de aprobación duplicado al delegar tareas de aprobación. por @mytharcher
- **[Gestor de copias de seguridad]** Corregido un problema por el que las copias de seguridad fallaban con un error cuando no se podían encontrar archivos. por @gchust

### [v2.0.51](https://www.nocobase.com/en/blog/v2.0.51)

*Fecha de lanzamiento: 2026-05-10*

### 🚀 Mejoras

- **[Flujo de trabajo: Aprobación]** Corregir el comportamiento de validación de campos obligatorios para formularios de aprobación por @zhangzhonghe

### 🐛 Corrección de errores

- **[cliente]**

  - Corregido un problema por el que el código JS ya no se podía editar después de que un campo JS se configurara como solo lectura. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) por @gchust
  - Corregido un problema por el que las asignaciones de campos de subtabla no surtían efecto en las reglas de vinculación de campos. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) por @gchust
  - Corregir el problema por el que las pestañas de página v2 no se sincronizan inmediatamente después de guardar la configuración ([#9396](https://github.com/nocobase/nocobase/pull/9396)) por @zhangzhonghe
  - Corregido un problema por el que la ventana emergente de valor predeterminado para campos de asociación en el formulario de creación se mostraba incorrectamente. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) por @gchust
- **[Política de contraseñas]** Corregido un problema por el que los usuarios bloqueados permanentemente podían iniciar sesión después de un reinicio del servicio por @2013xile
- **[Acción: Importar registros Pro]** Corregir el problema por el que la comprobación de duplicados en el campo de fecha siempre falla por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir el problema por el que el cajón de selección de registro queda oculto en la configuración del flujo de trabajo de aprobación por @zhangzhonghe

### [v2.0.50](https://www.nocobase.com/en/blog/v2.0.50)

*Fecha de lanzamiento: 2026-05-09*

### 🎉 Nuevas funciones

- **[cliente]** añadir acciones de asociar y disociar al bloque de asociación ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh
- **[Copiar texto]** soportar la opción "Mostrar botón de copia" para el campo de texto de solo lectura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh

### 🚀 Mejoras

- **[indefinido]** saltar versiones ya publicadas en pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn
- **[cliente]** Permitir asignar valor de campo para el campo de secuencia ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher

### 🐛 Corrección de errores

- **[motor-de-flujo]** Corregidos mensajes de validación de campos de tabla de datos sin traducir en formularios de flujo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx
- **[cliente]**

  - Corregidos los campos `Oculto (valor reservado)` en los bloques de formulario para que permanezcan visibles en el modo Editor de UI, y se restauró el soporte de entrada de valor para asignarlos en Asignación de campo ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx
  - Corregir nombres de archivo de descarga incorrectos para campos AttachmentURL cuando faltan metadatos de archivo. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher
  - Corregido el disparador de flujo de trabajo masivo de tabla v2 para que la selección de filas se mantenga consistente después de redirigir entre pestañas y las filas se puedan seleccionar nuevamente después de regresar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx
  - Corregir formularios de filtro que no se podían colapsar ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe
  - Corregir el problema por el que las reglas de vinculación de subtabla v1 cambiaban incorrectamente los estilos de los campos obligatorios ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe
  - corregir la representación incorrecta de datos en el bloque de tarjeta de cuadrícula después de actualizar y refrescar ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh
  - corregir el campo de opción obligatoria en subtabla no validado correctamente en la primera selección en móvil ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh
  - Corregir el problema por el que las variables de parámetros de consulta URL se vuelven inválidas después de cambiar entre páginas en caché ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe
  - corregir la adaptación de DividerItem al tema en v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh
  - corregir ocultar la opción de creación rápida para el campo de selección de asociación en subtabla v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh
  - Corregido que las reglas de vinculación no se volvían a ejecutar después de que cambiaran los valores del formulario. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust
  - Corregir el error al filtrar campos escalares con filtros de selección múltiple personalizados ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe
- **[servidor]** validar nombres de paquetes de plugins antes de operaciones del sistema de archivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos
- **[Gestor de fuentes de datos]** evitar la edición y eliminación de todos los registros en permisos de ámbito personalizados para fuentes de datos externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh
- **[Fuente de datos: Principal]** Corregido que las tablas de base de datos importadas usaban el nombre de tabla con prefijo incorrecto cuando un prefijo de tabla está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile
- **[Notificación: Mensaje en la aplicación]** Corregido un problema por el que la lista de mensajes en la aplicación no se actualizaba después de recibir notificaciones en tiempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher
- **[Bloque: Kanban]** corregir evitar el ajuste de palabras individuales en el campo de texto largo del bloque kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh
- **[Campo de colección: Fórmula]** corregir que el campo de fórmula en subtabla v2 no se activa para auto-calcular ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.32](https://www.nocobase.com/en/blog/v2.1.0-beta.32)

*Fecha de lanzamiento: 2026-05-13*

### 🎉 Nuevas funciones

- **[indefinido]** Añadir un nuevo empleado IA, Ingeniero de Localización Lina, para ayudar con tareas de traducción de localización ([#9434](https://github.com/nocobase/nocobase/pull/9434)) por @2013xile
  Referencia: [Gestión de localización](https://docs.nocobase.com/system-management/localization)<br>[Lina: Ingeniera de Localización](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Usar Lina y HY-MT1.5-1.8B local para traducir entradas de localización](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Almacenamiento de archivos: S3(Pro)]** Soporte para subir archivos a través del almacenamiento S3 Pro en el gestor de archivos v2. por @Molunerfinn

### 🚀 Mejoras

- **[compilación]** Se añadió cobertura de regresión para evitar que `deleteServerFiles` elimine los artefactos de compilación de `client` y `client-v2` en rutas Windows y POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) por @Molunerfinn
- **[cliente]** Excluir registros ya asociados en el diálogo de selección de asociación del bloque de tabla uno a muchos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh
- **[Gestor de archivos]** Los plugins de almacenamiento de terceros ahora pueden registrar su propio tipo de formulario de almacenamiento en la página de configuración del gestor de archivos v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) por @Molunerfinn
- **[IA: Base de conocimiento]** El identificador único de una base de conocimiento es configurable en el momento de la creación por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Corregido el problema por el que no se podían seleccionar opciones para el campo de selección de una asociación. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust
  - Corregir el problema por el que la configuración del sistema aparece vacía después de enviar ([#9458](https://github.com/nocobase/nocobase/pull/9458)) por @zhangzhonghe
  - Corregir solicitudes de tabla duplicadas cuando los formularios de filtro tienen valores predeterminados ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe
  - Corregido un problema por el que el ámbito de datos del bloque de destino se establecía incorrectamente al deseleccionar datos de fila en un flujo de eventos de bloque de tabla. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust
  - Corregidas las reglas de vinculación V2 para admitir el establecimiento de opciones seleccionables para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx
  - corregir error al cambiar el campo de título del campo de asociación en el bloque de tabla v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh
- **[cliente-v2]**

  - Corregir el problema por el que la página se vuelve blanca detrás del diálogo de habilitación del plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) por @zhangzhonghe
  - Corregir el bloqueo de las páginas de administración v1 cuando hacen referencia a módulos de plugin v2 en compilaciones de producción. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) por @Molunerfinn
- **[cli-v1]** Corregidos fallos de inicio de desarrollo en aplicaciones creadas con create-nocobase-app causados por la resolución de la ruta del cliente app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) por @Molunerfinn
- **[servidor]** corregir(gestor-de-archivos): forzar la descarga de archivos de contenido activo en almacenamiento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher
- **[Departamentos]** corregir conflicto de traducción entre los botones de añadir usuario y añadir departamento en la configuración de Usuarios y Permisos ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh
- **[Bloque: Markdown]** Corregir el problema de error del bloque Markdown v2 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) por @zhangzhonghe
- **[Flujo de trabajo]** corregir: restaurar el texto de ayuda en los diálogos de vinculación de flujo de trabajo FlowModel para eventos de acción personalizada y operación ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher
- **[Empleados IA]** Corregido el vuelo de prueba de Ollama que requería la entrada de clave ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock
- **[Flujo de trabajo: Aprobación]**

  - Corregir el índice de registro de aprobación duplicado al delegar tareas de aprobación. por @mytharcher
  - Corregir el diseño del formulario de aprobación en dispositivos móviles por @zhangzhonghe
- **[Gestor de copias de seguridad]** Corregido un problema por el que las copias de seguridad fallaban con un error cuando no se podían encontrar archivos. por @gchust

### [v2.1.0-beta.30](https://www.nocobase.com/en/blog/v2.1.0-beta.30)

*Fecha de lanzamiento: 2026-05-12*

### 🎉 Nuevas funciones

- **[cliente]**
  - Añadir soporte de reglas de vinculación para elementos de menú de página ([#9304](https://github.com/nocobase/nocobase/pull/9304)) por @zhangzhonghe
  - añadir variable de idioma del usuario actual en v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) por @katherinehhh

### 🚀 Mejoras

- **[cliente-v2]** Filtrar los menús v1 en el diseño v2 y mostrar solo los menús v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) por @zhangzhonghe
- **[indefinido]** soportar entorno actual con ámbito de sesión en nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) por @chenos
- **[Empleados IA]** El empleado IA soporta el procesamiento paralelo de múltiples conversaciones ([#9344](https://github.com/nocobase/nocobase/pull/9344)) por @cgyrock
- **[Departamentos]** optimizar el estilo de la lista de departamentos añadiendo iconos y ajustando el espaciado ([#9435](https://github.com/nocobase/nocobase/pull/9435)) por @katherinehhh

### 🐛 Corrección de errores

- **[compilación]** Corregir el fallo de compilación del plugin cuando el código del cliente v1 importa la entrada `/client-v2` de otro plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) por @Molunerfinn
- **[cliente]**

  - ocultar el componente de subtabla para campos de asociación de varios en subtabla v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) por @katherinehhh
  - Corregido un problema intermitente por el que las reglas de vinculación de botones de acción no surtían efecto. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) por @gchust
- **[Gestor de colecciones gráficas]** corregir el diseño automático de la interfaz gráfica que lanza un error de filtro de acción de actualización ([#9421](https://github.com/nocobase/nocobase/pull/9421)) por @katherinehhh
- **[Bloque: Árbol]** Mejorada la configuración del bloque de filtro de árbol y corregidos la asociación no soportada, la recuperación del campo de título y el comportamiento de reinicio de búsqueda. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) por @jiannx

### [v2.1.0-beta.29](https://www.nocobase.com/en/blog/v2.1.0-beta.29)

*Fecha de lanzamiento: 2026-05-10*

### 🎉 Nuevas funciones

- **[cliente]** añadir opción de límite de rango de fechas para campos de fecha en formularios v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) por @katherinehhh
- **[motor-de-flujo]** Migrar `plugin-environment-variables` a client-v2 con una página de configuración basada en React y una variable de tiempo de ejecución `$env` registrada globalmente; añadir una entrada client-v2 a `plugin-file-manager` con una página de configuración de almacenamiento basada en React y un campo de carga, acción de carga y vista previa basados en FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) por @Molunerfinn

### 🐛 Corrección de errores

- **[cliente]**

  - Corregido un problema por el que el código JS ya no se podía editar después de que un campo JS se configurara como solo lectura. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) por @gchust
  - Corregir el problema por el que las pestañas de página v2 no se sincronizan inmediatamente después de guardar la configuración ([#9396](https://github.com/nocobase/nocobase/pull/9396)) por @zhangzhonghe
  - Corregido un problema por el que las asignaciones de campos de subtabla no surtían efecto en las reglas de vinculación de campos. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) por @gchust
  - Corregido un problema por el que la ventana emergente de valor predeterminado para campos de asociación en el formulario de creación se mostraba incorrectamente. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) por @gchust
- **[Campo de colección: Markdown(Vditor)]** corregir la información sobre herramientas del campo markdown oculta en el diseño de formulario horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) por @katherinehhh
- **[Móvil (obsoleto)]** Corregir ventanas emergentes de mensajes móviles que no se podían cerrar o desplazar ([#9424](https://github.com/nocobase/nocobase/pull/9424)) por @zhangzhonghe
- **[Cliente WEB]** Corregir el filtrado de tipo de ruta al usar etiquetas traducidas ([#9425](https://github.com/nocobase/nocobase/pull/9425)) por @zhangzhonghe
- **[Flujo de trabajo: Aprobación]** Corregir el problema por el que el campo JS aparecía en la configuración del proceso de aprobación por @zhangzhonghe

### [v2.1.0-beta.27](https://www.nocobase.com/en/blog/v2.1.0-beta.27)

*Fecha de lanzamiento: 2026-05-09*

### 🎉 Nuevas funciones

- **[servidor]** Los empleados IA pueden buscar documentación empaquetada con comandos Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) por @2013xile
- **[Empleados IA]** El nodo de empleado IA del flujo de trabajo soporta la carga de archivos desde campos de adjuntos. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) por @cgyrock
- **[Copiar texto]** soportar la opción "Mostrar botón de copia" para el campo de texto de solo lectura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh

### 🚀 Mejoras

- **[cliente]** Permitir asignar valor de campo para el campo de secuencia ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher
- **[Bloque: Kanban]** Mejorada la consistencia del espaciado de campos de detalle v2 y se hizo que el espaciado de tarjetas y columnas kanban se adapte mejor a la configuración del tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) por @jiannx
- **[Empleados IA]** Mejoradas las herramientas de edición RunJS de Nathan y reducido el retraso durante conversaciones largas de chat IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) por @2013xile
- **[Flujo de trabajo: Aprobación]** Corregir el comportamiento de validación de campos obligatorios para formularios de aprobación por @zhangzhonghe

### 🐛 Corrección de errores

- **[motor-de-flujo]** Corregidos mensajes de validación de campos de tabla de datos sin traducir en formularios de flujo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx
- **[cliente]**

  - Corregir formularios de filtro que no se podían colapsar ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe
  - Corregir el error al filtrar campos escalares con filtros de selección múltiple personalizados ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe
  - Corregir nombres de archivo de descarga incorrectos para campos AttachmentURL cuando faltan metadatos de archivo. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher
  - corregir la adaptación de DividerItem al tema en v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh
  - Corregir el problema por el que las reglas de vinculación de subtabla v1 cambiaban incorrectamente los estilos de los campos obligatorios ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe
  - Corregidos los campos `Oculto (valor reservado)` en los bloques de formulario para que permanezcan visibles en el modo Editor de UI, y se restauró el soporte de entrada de valor para asignarlos en Asignación de campo ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx
  - Corregido el disparador de flujo de trabajo masivo de tabla v2 para que la selección de filas se mantenga consistente después de redirigir entre pestañas y las filas se puedan seleccionar nuevamente después de regresar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx
- **[cliente-v2]**

  - Corregido error al seleccionar campos de asociación en la configuración de campos. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) por @gchust
  - Corregir el problema por el que una página 404 parpadea después de iniciar la aplicación ([#9365](https://github.com/nocobase/nocobase/pull/9365)) por @zhangzhonghe
- **[servidor]** Corregidas las solicitudes de descubrimiento OAuth de sub-aplicaciones que se enrutaban como solicitudes de la aplicación principal ([#9383](https://github.com/nocobase/nocobase/pull/9383)) por @2013xile
- **[Fuente de datos: Principal]** Corregido que las tablas de base de datos importadas usaban el nombre de tabla con prefijo incorrecto cuando un prefijo de tabla está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile
- **[Notificación: Mensaje en la aplicación]** Corregido un problema por el que la lista de mensajes en la aplicación no se actualizaba después de recibir notificaciones en tiempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher
- **[Gestor de fuentes de datos]** evitar la edición y eliminación de todos los registros en permisos de ámbito personalizados para fuentes de datos externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh
- **[IA: Servidor MCP]** Corregido el empaquetado del servidor MCP para que las dependencias de tiempo de ejecución estén incluidas ([#9401](https://github.com/nocobase/nocobase/pull/9401)) por @2013xile
- **[Motor de flujo]** Corregido un problema por el que los bloques generados por IA no se podían convertir de plantillas de referencia de vuelta a plantillas duplicadas. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) por @gchust
- **[Acción: Importar registros Pro]** Corregir el problema por el que la comprobación de duplicados en el campo de fecha siempre falla por @mytharcher
- **[Política de contraseñas]** Corregido un problema por el que los usuarios bloqueados permanentemente podían iniciar sesión después de un reinicio del servicio por @2013xile
- **[Flujo de trabajo: Aprobación]** Corregir el problema por el que el cajón de selección de registro queda oculto en la configuración del flujo de trabajo de aprobación por @zhangzhonghe
- **[Gestor de copias de seguridad]** corregir la adaptación del esquema pg por @Andrew1989Y

### [v2.1.0-beta.26](https://www.nocobase.com/en/blog/v2.1.0-beta.26)

*Fecha de lanzamiento: 2026-05-08*

### 🎉 Nuevas funciones

- **[cliente]** añadir acciones de asociar y disociar al bloque de asociación ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh
- **[Visualización de datos]** Añadir soporte client-v2 para plugins de bloque ([#9297](https://github.com/nocobase/nocobase/pull/9297)) por @zhangzhonghe

### 🚀 Mejoras

- **[indefinido]** saltar versiones ya publicadas en pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn

### 🐛 Corrección de errores

- **[cliente-v2]**

  - Corregir el problema por el que algunas páginas v2 fallan al cargar plugins remotos ([#9369](https://github.com/nocobase/nocobase/pull/9369)) por @zhangzhonghe
  - Corregir los problemas de marcador de posición de arrastre y posición de colocación del bloque de página v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) por @zhangzhonghe
- **[cliente]**

  - Corregido que las reglas de vinculación no se volvían a ejecutar después de que cambiaran los valores del formulario. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust
  - corregir el campo de opción obligatoria en subtabla no validado correctamente en la primera selección en móvil ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh
  - corregir ocultar la opción de creación rápida para el campo de selección de asociación en subtabla v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh
  - Corregir el problema por el que las variables de parámetros de consulta URL se vuelven inválidas después de cambiar entre páginas en caché ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe
  - corregir la representación incorrecta de datos en el bloque de tarjeta de cuadrícula después de actualizar y refrescar ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh
- **[servidor]** validar nombres de paquetes de plugins antes de operaciones del sistema de archivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos
- **[indefinido]** Corregir enlaces rotos en la documentación traducida y habilitar la detección de enlaces rotos por defecto en la compilación de la documentación. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) por @Molunerfinn
- **[Empleados IA]**

  - Corregir error de lectura de adjuntos de campo de asociaciones por el nodo de empleado IA en el flujo de trabajo ([#9377](https://github.com/nocobase/nocobase/pull/9377)) por @cgyrock
  - Corregir que el nodo de empleado IA del flujo de trabajo no termina correctamente después de la asignación de herramientas. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) por @cgyrock
- **[Bloque: Kanban]**

  - Mejorado el estilo compacto de la tarjeta Kanban y optimizada la selección de plantillas emergentes de creación rápida. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) por @jiannx
  - corregir evitar el ajuste de palabras individuales en el campo de texto largo del bloque kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh
  - Corregidos los bloques asociados kanban que usaban parámetros de recursos de tiempo de ejecución no resueltos en contextos de ventana emergente o página secundaria. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) por @jiannx
- **[Acción: Solicitud personalizada]** actualizar koa a v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) por @chenos
- **[Campo de colección: Fórmula]** corregir que el campo de fórmula en subtabla v2 no se activa para auto-calcular ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh
- **[Gestor de correo electrónico]** Corregida la visualización del título de las identidades de correo por @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.34](https://www.nocobase.com/en/blog/v2.1.0-alpha.34)

*Fecha de lanzamiento: 2026-05-12*

### 🚀 Mejoras

- **[Empleados IA]** El empleado IA soporta el procesamiento paralelo de múltiples conversaciones ([#9344](https://github.com/nocobase/nocobase/pull/9344)) por @cgyrock

### [v2.1.0-alpha.33](https://www.nocobase.com/en/blog/v2.1.0-alpha.33)

*Fecha de lanzamiento: 2026-05-11*

### 🎉 Nuevas funciones

- **[cliente]**
  - añadir variable de idioma del usuario actual en v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) por @katherinehhh
  - Añadir soporte de reglas de vinculación para elementos de menú de página ([#9304](https://github.com/nocobase/nocobase/pull/9304)) por @zhangzhonghe

### 🚀 Mejoras

- **[cliente-v2]** Filtrar los menús v1 en el diseño v2 y mostrar solo los menús v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) por @zhangzhonghe
- **[Departamentos]** optimizar el estilo de la lista de departamentos añadiendo iconos y ajustando el espaciado ([#9435](https://github.com/nocobase/nocobase/pull/9435)) por @katherinehhh

### 🐛 Corrección de errores

- **[compilación]** Corregir el fallo de compilación del plugin cuando el código del cliente v1 importa la entrada `/client-v2` de otro plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) por @Molunerfinn
- **[cliente]**

  - Corregido un problema intermitente por el que las reglas de vinculación de botones de acción no surtían efecto. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) por @gchust
  - ocultar el componente de subtabla para campos de asociación de varios en subtabla v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) por @katherinehhh
- **[Gestor de colecciones gráficas]** corregir el diseño automático de la interfaz gráfica que lanza un error de filtro de acción de actualización ([#9421](https://github.com/nocobase/nocobase/pull/9421)) por @katherinehhh
- **[Bloque: Árbol]** Mejorada la configuración del bloque de filtro de árbol y corregidos la asociación no soportada, la recuperación del campo de título y el comportamiento de reinicio de búsqueda. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) por @jiannx

### [v2.1.0-alpha.32](https://www.nocobase.com/en/blog/v2.1.0-alpha.32)

*Fecha de lanzamiento: 2026-05-10*

### 🎉 Nuevas funciones

- **[cliente]** añadir opción de límite de rango de fechas para campos de fecha en formularios v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) por @katherinehhh
- **[motor-de-flujo]** Migrar `plugin-environment-variables` a client-v2 con una página de configuración basada en React y una variable de tiempo de ejecución `$env` registrada globalmente; añadir una entrada client-v2 a `plugin-file-manager` con una página de configuración de almacenamiento basada en React y un campo de carga, acción de carga y vista previa basados en FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) por @Molunerfinn

### 🚀 Mejoras

- **[indefinido]** soportar entorno actual con ámbito de sesión en nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) por @chenos

### 🐛 Corrección de errores

- **[cliente]**

  - Corregido un problema por el que la ventana emergente de valor predeterminado para campos de asociación en el formulario de creación se mostraba incorrectamente. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) por @gchust
  - Corregido un problema por el que el código JS ya no se podía editar después de que un campo JS se configurara como solo lectura. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) por @gchust
  - Corregir el problema por el que las pestañas de página v2 no se sincronizan inmediatamente después de guardar la configuración ([#9396](https://github.com/nocobase/nocobase/pull/9396)) por @zhangzhonghe
  - Corregido un problema por el que las asignaciones de campos de subtabla no surtían efecto en las reglas de vinculación de campos. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) por @gchust
- **[Campo de colección: Markdown(Vditor)]** corregir la información sobre herramientas del campo markdown oculta en el diseño de formulario horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) por @katherinehhh
- **[Cliente WEB]** Corregir el filtrado de tipo de ruta al usar etiquetas traducidas ([#9425](https://github.com/nocobase/nocobase/pull/9425)) por @zhangzhonghe
- **[Móvil (obsoleto)]** Corregir ventanas emergentes de mensajes móviles que no se podían cerrar o desplazar ([#9424](https://github.com/nocobase/nocobase/pull/9424)) por @zhangzhonghe
- **[Flujo de trabajo: Aprobación]** Corregir el problema por el que el campo JS aparecía en la configuración del proceso de aprobación por @zhangzhonghe

### [v2.1.0-alpha.31](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Fecha de lanzamiento: 2026-05-09*

### 🎉 Nuevas funciones

- **[cliente]** añadir acciones de asociar y disociar al bloque de asociación ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh
- **[Copiar texto]** soportar la opción "Mostrar botón de copia" para el campo de texto de solo lectura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh
- **[Empleados IA]** El nodo de empleado IA del flujo de trabajo soporta la carga de archivos desde campos de adjuntos. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) por @cgyrock
- **[Visualización de datos]** Añadir soporte client-v2 para plugins de bloque ([#9297](https://github.com/nocobase/nocobase/pull/9297)) por @zhangzhonghe

### 🚀 Mejoras

- **[cliente]** Permitir asignar valor de campo para el campo de secuencia ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher
- **[indefinido]** saltar versiones ya publicadas en pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn
- **[Bloque: Kanban]** Mejorada la consistencia del espaciado de campos de detalle v2 y se hizo que el espaciado de tarjetas y columnas kanban se adapte mejor a la configuración del tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregir el comportamiento de validación de campos obligatorios para formularios de aprobación por @zhangzhonghe

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir formularios de filtro que no se podían colapsar ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe
  - Corregido el disparador de flujo de trabajo masivo de tabla v2 para que la selección de filas se mantenga consistente después de redirigir entre pestañas y las filas se puedan seleccionar nuevamente después de regresar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx
  - Corregidos los campos `Oculto (valor reservado)` en los bloques de formulario para que permanezcan visibles en el modo Editor de UI, y se restauró el soporte de entrada de valor para asignarlos en Asignación de campo ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx
  - corregir la adaptación de DividerItem al tema en v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh
  - Corregir nombres de archivo de descarga incorrectos para campos AttachmentURL cuando faltan metadatos de archivo. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher
  - Corregir el error al filtrar campos escalares con filtros de selección múltiple personalizados ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe
  - Corregido que las reglas de vinculación no se volvían a ejecutar después de que cambiaran los valores del formulario. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust
  - Corregir el problema por el que las reglas de vinculación de subtabla v1 cambiaban incorrectamente los estilos de los campos obligatorios ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe
  - corregir la representación incorrecta de datos en el bloque de tarjeta de cuadrícula después de actualizar y refrescar ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh
  - corregir el campo de opción obligatoria en subtabla no validado correctamente en la primera selección en móvil ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh
  - corregir ocultar la opción de creación rápida para el campo de selección de asociación en subtabla v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh
  - Corregir el problema por el que las variables de parámetros de consulta URL se vuelven inválidas después de cambiar entre páginas en caché ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe
- **[motor-de-flujo]** Corregidos mensajes de validación de campos de tabla de datos sin traducir en formularios de flujo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx
- **[servidor]**

  - Corregidas las solicitudes de descubrimiento OAuth de sub-aplicaciones que se enrutaban como solicitudes de la aplicación principal ([#9383](https://github.com/nocobase/nocobase/pull/9383)) por @2013xile
  - validar nombres de paquetes de plugins antes de operaciones del sistema de archivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos
- **[cliente-v2]**

  - Corregido error al seleccionar campos de asociación en la configuración de campos. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) por @gchust
  - Corregir el problema por el que una página 404 parpadea después de iniciar la aplicación ([#9365](https://github.com/nocobase/nocobase/pull/9365)) por @zhangzhonghe
  - Corregir los problemas de marcador de posición de arrastre y posición de colocación del bloque de página v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) por @zhangzhonghe
  - Corregir el problema por el que algunas páginas v2 fallan al cargar plugins remotos ([#9369](https://github.com/nocobase/nocobase/pull/9369)) por @zhangzhonghe
- **[indefinido]** Corregir enlaces rotos en la documentación traducida y habilitar la detección de enlaces rotos por defecto en la compilación de la documentación. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) por @Molunerfinn
- **[Notificación: Mensaje en la aplicación]** Corregido un problema por el que la lista de mensajes en la aplicación no se actualizaba después de recibir notificaciones en tiempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher
- **[Gestor de fuentes de datos]** evitar la edición y eliminación de todos los registros en permisos de ámbito personalizados para fuentes de datos externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh
- **[IA: Servidor MCP]** Corregido el empaquetado del servidor MCP para que las dependencias de tiempo de ejecución estén incluidas ([#9401](https://github.com/nocobase/nocobase/pull/9401)) por @2013xile
- **[Fuente de datos: Principal]** Corregido que las tablas de base de datos importadas usaban el nombre de tabla con prefijo incorrecto cuando un prefijo de tabla está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile
- **[Motor de flujo]** Corregido un problema por el que los bloques generados por IA no se podían convertir de plantillas de referencia de vuelta a plantillas duplicadas. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) por @gchust
- **[Empleados IA]**

  - Corregir error de lectura de adjuntos de campo de asociaciones por el nodo de empleado IA en el flujo de trabajo ([#9377](https://github.com/nocobase/nocobase/pull/9377)) por @cgyrock
  - Corregir que el nodo de empleado IA del flujo de trabajo no termina correctamente después de la asignación de herramientas. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) por @cgyrock
- **[Acción: Solicitud personalizada]** actualizar koa a v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) por @chenos
- **[Bloque: Kanban]**

  - Mejorado el estilo compacto de la tarjeta Kanban y optimizada la selección de plantillas emergentes de creación rápida. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) por @jiannx
  - corregir evitar el ajuste de palabras individuales en el campo de texto largo del bloque kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh
- **[Campo de colección: Fórmula]** corregir que el campo de fórmula en subtabla v2 no se activa para auto-calcular ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh
- **[Acción: Importar registros Pro]** Corregir el problema por el que la comprobación de duplicados en el campo de fecha siempre falla por @mytharcher
- **[Política de contraseñas]** Corregido un problema por el que los usuarios bloqueados permanentemente podían iniciar sesión después de un reinicio del servicio por @2013xile
- **[Flujo de trabajo: Aprobación]** Corregir el problema por el que el cajón de selección de registro queda oculto en la configuración del flujo de trabajo de aprobación por @zhangzhonghe
- **[Gestor de correo electrónico]** Corregida la visualización del título de las identidades de correo por @jiannx
- **[Gestor de copias de seguridad]** corregir la adaptación del esquema pg por @Andrew1989Y
