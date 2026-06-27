---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana incluyen: soporte para plantillas de bloques en formularios de procesos de aprobación, mejoras en flujos de trabajo y corrección de errores."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.11](https://www.nocobase.com/en/blog/v1.6.11)

*Fecha de lanzamiento: 2025-03-27*

#### 🚀 Mejoras

- **[cliente]**

  - Optimizar mensaje de error 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) por @chenos
  - Solo admitir vista previa de archivos de texto plano ([#6563](https://github.com/nocobase/nocobase/pull/6563)) por @mytharcher
- **[Campo de colección: Secuencia]** soporte para establecer secuencia como campo de título para bloque de calendario ([#6562](https://github.com/nocobase/nocobase/pull/6562)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Soporte para omitir validador en configuraciones por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema con la visualización del campo de fecha en el filtrado de ámbito de datos ([#6564](https://github.com/nocobase/nocobase/pull/6564)) por @katherinehhh
  - La opción 'Contenido desbordado con puntos suspensivos' requiere actualizar la página para que el estado de alternancia surta efecto ([#6520](https://github.com/nocobase/nocobase/pull/6520)) por @zhangzhonghe
  - No se puede abrir otro modal dentro de un modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) por @zhangzhonghe
- **[Documentación de API]** La página de documentación de API no puede desplazarse ([#6566](https://github.com/nocobase/nocobase/pull/6566)) por @zhangzhonghe
- **[Flujo de trabajo]** Asegurar que la clave del flujo de trabajo se genere antes de guardar ([#6567](https://github.com/nocobase/nocobase/pull/6567)) por @mytharcher
- **[Flujo de trabajo: Evento posterior a la acción]** Múltiples registros en una acción masiva deben activarse múltiples veces ([#6559](https://github.com/nocobase/nocobase/pull/6559)) por @mytharcher
- **[Autenticación]** Problema de localización para los campos de la página de registro ([#6556](https://github.com/nocobase/nocobase/pull/6556)) por @2013xile
- **[Formularios públicos]** Problema con el título de la página del formulario público que muestra 'Cargando...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) por @katherinehhh

### [v1.6.12](https://www.nocobase.com/en/blog/v1.6.12)

*Fecha de lanzamiento: 2025-03-27*

#### 🐛 Corrección de errores

- **[Bloque: Formulario multipaso]**

  - El botón de envío tiene el mismo color en su estado predeterminado y resaltado por @jiannx
  - Corregido el error de que el reinicio del formulario no funciona cuando el campo está asociado con otro campo por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregir valores del formulario de aprobación para enviar por @mytharcher

### [v1.6.13](https://www.nocobase.com/en/blog/v1.6.13)

*Fecha de lanzamiento: 2025-03-28*

#### 🚀 Mejoras

- **[Gestor de tareas asíncronas]** optimizar botones de importación/exportación en Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) por @chenos
- **[Acción: Exportar registros Pro]** optimizar botones de importación/exportación en Pro por @katherinehhh
- **[Gestor de migraciones]** permitir omitir copia de seguridad y restauración automáticas para la migración por @gchust

#### 🐛 Corrección de errores

- **[cliente]** conflicto de vinculación entre campos de asociación con el mismo nombre en diferentes subtablas dentro del mismo formulario ([#6577](https://github.com/nocobase/nocobase/pull/6577)) por @katherinehhh
- **[Acción: Edición por lotes]** Al hacer clic en el botón de edición por lotes, configurar la ventana emergente y luego abrirla de nuevo, la ventana emergente está en blanco ([#6578](https://github.com/nocobase/nocobase/pull/6578)) por @zhangzhonghe

### [v1.6.14](https://www.nocobase.com/en/blog/v1.6.14)

*Fecha de lanzamiento: 2025-03-29*

#### 🐛 Corrección de errores

- **[Calendario]** datos faltantes en fechas límite en la vista de calendario semanal ([#6587](https://github.com/nocobase/nocobase/pull/6587)) por @katherinehhh
- **[Auth: OIDC]** Ocurre una redirección incorrecta cuando la ruta de callback es la cadena 'null' por @2013xile
- **[Flujo de trabajo: Aprobación]** Corregir configuración incorrecta del nodo de aprobación después de cambiar el esquema por @mytharcher

### [v1.6.15](https://www.nocobase.com/en/blog/v1.6.15)

*Fecha de lanzamiento: 2025-04-01*

#### 🚀 Mejoras

- **[base de datos]**

  - Añadir opción de recorte para campo de texto ([#6603](https://github.com/nocobase/nocobase/pull/6603)) por @mytharcher
  - Añadir opción de recorte para campo de cadena ([#6565](https://github.com/nocobase/nocobase/pull/6565)) por @mytharcher
- **[Gestor de archivos]** Añadir opción de recorte para campos de texto de la colección de almacenamientos ([#6604](https://github.com/nocobase/nocobase/pull/6604)) por @mytharcher
- **[Flujo de trabajo]** Mejorar código ([#6589](https://github.com/nocobase/nocobase/pull/6589)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Soporte para usar plantilla de bloque para el formulario del proceso de aprobación por @mytharcher

#### 🐛 Corrección de errores

- **[base de datos]** Evitar cambios en el campo "datetimeNoTz" cuando el valor no ha cambiado al actualizar un registro ([#6588](https://github.com/nocobase/nocobase/pull/6588)) por @mytharcher
- **[cliente]**

  - Campo de asociación (selección) mostrando N/A al exponer campos de colección relacionados ([#6582](https://github.com/nocobase/nocobase/pull/6582)) por @katherinehhh
  - Corregir que la propiedad `disabled` no funciona cuando `SchemaInitializerItem` tiene `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) por @mytharcher
  - Problema en cascada: 'El valor de xxx no puede estar en formato array' al eliminar y volver a seleccionar ([#6585](https://github.com/nocobase/nocobase/pull/6585)) por @katherinehhh
- **[Campo de colección: Muchos a muchos (array)]** Problema al filtrar por campos en una colección de asociación con un campo muchos a muchos (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) por @2013xile
- **[Formularios públicos]** Los permisos de vista incluyen list y get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) por @chenos
- **[Autenticación]** asignación de token en `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) por @2013xile
- **[Flujo de trabajo]** Corregir visualización incorrecta de la opción de sincronización ([#6595](https://github.com/nocobase/nocobase/pull/6595)) por @mytharcher
- **[Bloque: Mapa]** la validación de gestión de mapas no debe pasar con entrada de espacio ([#6575](https://github.com/nocobase/nocobase/pull/6575)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Corregir variables de cliente para usar en el formulario de aprobación por @mytharcher
  - Corregir modo de rama cuando `endOnReject` está configurado como `true` por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.10](https://www.nocobase.com/en/blog/v1.7.0-beta.10)

*Fecha de lanzamiento: 2025-03-27*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para configuración de variables después del envío, permitiendo redirección con el ID de datos actual ([#6465](https://github.com/nocobase/nocobase/pull/6465)) por @katherinehhh
- **[Campo de colección: Markdown(Vditor)]** Vditor soporta S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) por @zhangzhonghe

#### 🚀 Mejoras

- **[cliente]**

  - Solo admitir vista previa de archivos de texto plano ([#6563](https://github.com/nocobase/nocobase/pull/6563)) por @mytharcher
  - Optimizar mensaje de error 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) por @chenos
  - Restringir acciones disponibles para diferentes propiedades de campo en reglas de vinculación ([#6548](https://github.com/nocobase/nocobase/pull/6548)) por @katherinehhh
- **[Gestor de archivos]** Ajustar API `getFileData` de almacenamiento ([#6553](https://github.com/nocobase/nocobase/pull/6553)) por @mytharcher
- **[Control de acceso]** Optimizar el orden y estilo del cambio de rol ([#6555](https://github.com/nocobase/nocobase/pull/6555)) por @aaaaaajie
- **[Campo de colección: Secuencia]** soporte para establecer secuencia como campo de título para bloque de calendario ([#6562](https://github.com/nocobase/nocobase/pull/6562)) por @katherinehhh
- **[Flujo de trabajo]** Dividir columnas ejecutadas en tablas de estadísticas ([#6534](https://github.com/nocobase/nocobase/pull/6534)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Dividir columnas ejecutadas en tablas de estadísticas por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Dividir columnas ejecutadas en tablas de estadísticas por @mytharcher
  - Soporte para omitir validador en configuraciones por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Las versiones antiguas de navegadores mostrarán una página en blanco ([#6571](https://github.com/nocobase/nocobase/pull/6571)) por @zhangzhonghe
  - La opción 'Contenido desbordado con puntos suspensivos' requiere actualizar la página para que el estado de alternancia surta efecto ([#6520](https://github.com/nocobase/nocobase/pull/6520)) por @zhangzhonghe
  - Problema con la visualización del campo de fecha en el filtrado de ámbito de datos ([#6564](https://github.com/nocobase/nocobase/pull/6564)) por @katherinehhh
  - No se puede abrir otro modal dentro de un modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) por @zhangzhonghe
  - La acción de guardar como plantilla fallará si contiene un campo de asociación ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust
  - El menú superior de la página se muestra en blanco ([#6551](https://github.com/nocobase/nocobase/pull/6551)) por @zhangzhonghe
  - La asignación de campo con valor nulo no es efectiva ([#6549](https://github.com/nocobase/nocobase/pull/6549)) por @katherinehhh
- **[Flujo de trabajo]**

  - Asegurar que la clave del flujo de trabajo se genere antes de guardar ([#6567](https://github.com/nocobase/nocobase/pull/6567)) por @mytharcher
  - Corregir error lanzado al configurar opciones de autoeliminación ([#6560](https://github.com/nocobase/nocobase/pull/6560)) por @mytharcher
- **[Formularios públicos]** Problema con el título de la página del formulario público que muestra 'Cargando...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) por @katherinehhh
- **[Móvil]** Ajustar el tamaño de fuente mostrado en el teléfono a 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) por @zhangzhonghe
- **[Variables y secretos]** Falta el botón de filtro de icono, el recuento de filtros no se muestra y los datos no se actualizan después de filtrar al cambiar de página ([#6568](https://github.com/nocobase/nocobase/pull/6568)) por @katherinehhh
- **[Autenticación]** Problema de localización para los campos de la página de registro ([#6556](https://github.com/nocobase/nocobase/pull/6556)) por @2013xile
- **[Documentación de API]** La página de documentación de API no puede desplazarse ([#6566](https://github.com/nocobase/nocobase/pull/6566)) por @zhangzhonghe
- **[Flujo de trabajo: Evento posterior a la acción]** Múltiples registros en una acción masiva deben activarse múltiples veces ([#6559](https://github.com/nocobase/nocobase/pull/6559)) por @mytharcher
- **[Bloque: plantilla]**

  - Las reglas de vinculación del bloque de formulario no se han sincronizado correctamente desde la plantilla ([#6550](https://github.com/nocobase/nocobase/pull/6550)) por @gchust
  - Menú duplicado de guardar como plantilla en el bloque de detalles ([#6558](https://github.com/nocobase/nocobase/pull/6558)) por @gchust
- **[Flujo de trabajo: Aprobación]** Corregir valores del formulario de aprobación para enviar por @mytharcher

### [v1.7.0-beta.11](https://www.nocobase.com/en/blog/v1.7.0-beta.11)

*Fecha de lanzamiento: 2025-03-27*

#### 🐛 Corrección de errores

- **[Bloque: Formulario multipaso]** El botón de envío tiene el mismo color en su estado predeterminado y resaltado por @jiannx

### [v1.7.0-beta.12](https://www.nocobase.com/en/blog/v1.7.0-beta.12)

*Fecha de lanzamiento: 2025-03-28*

#### 🎉 Nuevas funciones

- **[Bloque: Panel de acciones]** añadir un callback onScanSuccess para manejar escaneos exitosos y salir de la interfaz de usuario de la cámara. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) por @sheldon66

#### 🚀 Mejoras

- **[Gestor de tareas asíncronas]** optimizar botones de importación/exportación en Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) por @chenos
- **[Acción: Exportar registros Pro]** optimizar botones de importación/exportación en Pro por @katherinehhh
- **[Gestor de migraciones]** permitir omitir copia de seguridad y restauración automáticas para la migración por @gchust

#### 🐛 Corrección de errores

- **[cliente]** conflicto de vinculación entre campos de asociación con el mismo nombre en diferentes subtablas dentro del mismo formulario ([#6577](https://github.com/nocobase/nocobase/pull/6577)) por @katherinehhh
- **[Calendario]** datos faltantes en fechas límite en la vista de calendario semanal ([#6587](https://github.com/nocobase/nocobase/pull/6587)) por @katherinehhh
- **[Control de acceso]** Asignación incorrecta del rol actual durante el inicio de sesión ([#6581](https://github.com/nocobase/nocobase/pull/6581)) por @aaaaaajie
- **[Acción: Edición por lotes]** Al hacer clic en el botón de edición por lotes, configurar la ventana emergente y luego abrirla de nuevo, la ventana emergente está en blanco ([#6578](https://github.com/nocobase/nocobase/pull/6578)) por @zhangzhonghe
- **[Bloque: Formulario multipaso]** Corregido el error de que el reinicio del formulario no funciona cuando el campo está asociado con otro campo por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregir configuración incorrecta del nodo de aprobación después de cambiar el esquema por @mytharcher

### [v1.7.0-beta.13](https://www.nocobase.com/en/blog/v1.7.0-beta.13)

*Fecha de lanzamiento: 2025-04-01*

#### 🚀 Mejoras

- **[base de datos]**

  - Añadir opción de recorte para campo de texto ([#6603](https://github.com/nocobase/nocobase/pull/6603)) por @mytharcher
  - Añadir opción de recorte para campo de cadena ([#6565](https://github.com/nocobase/nocobase/pull/6565)) por @mytharcher
- **[cliente]** soporte para configurar la visibilidad de los dos puntos en las etiquetas de los campos del formulario según el diseño ([#6561](https://github.com/nocobase/nocobase/pull/6561)) por @katherinehhh
- **[Gestor de archivos]** Añadir opción de recorte para campos de texto de la colección de almacenamientos ([#6604](https://github.com/nocobase/nocobase/pull/6604)) por @mytharcher
- **[Flujo de trabajo]** Mejorar código ([#6589](https://github.com/nocobase/nocobase/pull/6589)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Soporte para usar plantilla de bloque para el formulario del proceso de aprobación por @mytharcher

#### 🐛 Corrección de errores

- **[base de datos]**

  - Evitar cambios en el campo "datetimeNoTz" cuando el valor no ha cambiado al actualizar un registro ([#6588](https://github.com/nocobase/nocobase/pull/6588)) por @mytharcher
  - Al eliminar registros uno a muchos, se pasan tanto `filter` como `filterByTk` y `filter` incluye un campo de asociación, se ignora `filterByTk` ([#6606](https://github.com/nocobase/nocobase/pull/6606)) por @2013xile
- **[cliente]**

  - Corregir que la propiedad `disabled` no funciona cuando `SchemaInitializerItem` tiene `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) por @mytharcher
  - Problema en cascada: 'El valor de xxx no puede estar en formato array' al eliminar y volver a seleccionar ([#6585](https://github.com/nocobase/nocobase/pull/6585)) por @katherinehhh
  - Campo de asociación (selección) mostrando N/A al exponer campos de colección relacionados ([#6582](https://github.com/nocobase/nocobase/pull/6582)) por @katherinehhh
  - Los botones de enviar y actualizar no muestran correctamente el modo solo icono ([#6592](https://github.com/nocobase/nocobase/pull/6592)) por @katherinehhh
- **[Formularios públicos]** Los permisos de vista incluyen list y get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) por @chenos
- **[Autenticación]** asignación de token en `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) por @2013xile
- **[Campo de colección: Muchos a muchos (array)]** Problema al filtrar por campos en una colección de asociación con un campo muchos a muchos (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) por @2013xile
- **[Flujo de trabajo]** Corregir visualización incorrecta de la opción de sincronización ([#6595](https://github.com/nocobase/nocobase/pull/6595)) por @mytharcher
- **[Bloque: Mapa]** la validación de gestión de mapas no debe pasar con entrada de espacio ([#6575](https://github.com/nocobase/nocobase/pull/6575)) por @katherinehhh
- **[Auth: OIDC]** Ocurre una redirección incorrecta cuando la ruta de callback es la cadena 'null' por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Corregir variables de cliente para usar en el formulario de aprobación por @mytharcher
  - Corregir modo de rama cuando `endOnReject` está configurado como `true` por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.10](https://www.nocobase.com/en/blog/v1.7.0-alpha.10)

*Fecha de lanzamiento: 2025-03-25*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para configuración de variables después del envío, permitiendo redirección con el ID de datos actual ([#6465](https://github.com/nocobase/nocobase/pull/6465)) por @katherinehhh
- **[Campo de colección: Markdown(Vditor)]** Vditor soporta S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) por @zhangzhonghe

#### 🚀 Mejoras

- **[cliente]**

  - Solo admitir vista previa de archivos de texto plano ([#6563](https://github.com/nocobase/nocobase/pull/6563)) por @mytharcher
  - Optimizar mensaje de error 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) por @chenos
  - Restringir acciones disponibles para diferentes propiedades de campo en reglas de vinculación ([#6548](https://github.com/nocobase/nocobase/pull/6548)) por @katherinehhh
- **[Flujo de trabajo]** Dividir columnas ejecutadas en tablas de estadísticas ([#6534](https://github.com/nocobase/nocobase/pull/6534)) por @mytharcher
- **[Móvil]** Adaptar el estilo de la ventana emergente de notificación para dispositivos móviles ([#6557](https://github.com/nocobase/nocobase/pull/6557)) por @zhangzhonghe
- **[Campo de colección: Secuencia]** soporte para establecer secuencia como campo de título para bloque de calendario ([#6562](https://github.com/nocobase/nocobase/pull/6562)) por @katherinehhh
- **[Gestor de archivos]** Ajustar API `getFileData` de almacenamiento ([#6553](https://github.com/nocobase/nocobase/pull/6553)) por @mytharcher
- **[Control de acceso]** Optimizar el orden y estilo del cambio de rol ([#6555](https://github.com/nocobase/nocobase/pull/6555)) por @aaaaaajie
- **[Formularios públicos]** establecer el título de la página del formulario público al título configurado al crearlo ([#6538](https://github.com/nocobase/nocobase/pull/6538)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Dividir columnas ejecutadas en tablas de estadísticas por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Soporte para omitir validador en configuraciones por @mytharcher
  - Dividir columnas ejecutadas en tablas de estadísticas por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Las versiones antiguas de navegadores mostrarán una página en blanco ([#6571](https://github.com/nocobase/nocobase/pull/6571)) por @zhangzhonghe
  - No se puede abrir otro modal dentro de un modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) por @zhangzhonghe
  - La opción 'Contenido desbordado con puntos suspensivos' requiere actualizar la página para que el estado de alternancia surta efecto ([#6520](https://github.com/nocobase/nocobase/pull/6520)) por @zhangzhonghe
  - Problema con la visualización del campo de fecha en el filtrado de ámbito de datos ([#6564](https://github.com/nocobase/nocobase/pull/6564)) por @katherinehhh
  - El menú superior de la página se muestra en blanco ([#6551](https://github.com/nocobase/nocobase/pull/6551)) por @zhangzhonghe
  - La acción de guardar como plantilla fallará si contiene un campo de asociación ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust
  - No se puede usar la variable 'Usuario actual' al añadir una página de enlace ([#6536](https://github.com/nocobase/nocobase/pull/6536)) por @zhangzhonghe
  - La asignación de campo con valor nulo no es efectiva ([#6549](https://github.com/nocobase/nocobase/pull/6549)) por @katherinehhh
  - La acción de guardar como plantilla fallará si contiene un campo de asociación ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust
  - Eliminar la opción 'Permitir selección múltiple' de los campos de selección única desplegable en formularios de filtro ([#6515](https://github.com/nocobase/nocobase/pull/6515)) por @zhangzhonghe
  - El enlace de rango de datos del campo relacional no es efectivo ([#6530](https://github.com/nocobase/nocobase/pull/6530)) por @zhangzhonghe
  - Error del comando `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) por @gchust
  - Problema de arrastrar y soltar botones de fila de tabla ([#6544](https://github.com/nocobase/nocobase/pull/6544)) por @katherinehhh
- **[Móvil]** Ajustar el tamaño de fuente mostrado en el teléfono a 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) por @zhangzhonghe
- **[Flujo de trabajo]**

  - Corregir error lanzado al configurar opciones de autoeliminación ([#6560](https://github.com/nocobase/nocobase/pull/6560)) por @mytharcher
  - Asegurar que la clave del flujo de trabajo se genere antes de guardar ([#6567](https://github.com/nocobase/nocobase/pull/6567)) por @mytharcher
- **[Variables y secretos]** Falta el botón de filtro de icono, el recuento de filtros no se muestra y los datos no se actualizan después de filtrar al cambiar de página ([#6568](https://github.com/nocobase/nocobase/pull/6568)) por @katherinehhh
- **[Formularios públicos]** Problema con el título de la página del formulario público que muestra 'Cargando...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) por @katherinehhh
- **[Documentación de API]** La página de documentación de API no puede desplazarse ([#6566](https://github.com/nocobase/nocobase/pull/6566)) por @zhangzhonghe
- **[Flujo de trabajo: Evento posterior a la acción]** Múltiples registros en una acción masiva deben activarse múltiples veces ([#6559](https://github.com/nocobase/nocobase/pull/6559)) por @mytharcher
- **[Bloque: plantilla]**

  - Menú duplicado de guardar como plantilla en el bloque de detalles ([#6558](https://github.com/nocobase/nocobase/pull/6558)) por @gchust
  - Las reglas de vinculación del bloque de formulario no se han sincronizado correctamente desde la plantilla ([#6550](https://github.com/nocobase/nocobase/pull/6550)) por @gchust
- **[Autenticación]** Problema de localización para los campos de la página de registro ([#6556](https://github.com/nocobase/nocobase/pull/6556)) por @2013xile
- **[Acción: Solicitud personalizada]** No se pueden descargar archivos codificados en UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) por @2013xile
- **[Colección: Árbol]** Problema de migración para plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) por @2013xile
- **[Bloque: Formulario multipaso]** El botón de envío tiene el mismo color en su estado predeterminado y resaltado por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregir valores del formulario de aprobación para enviar por @mytharcher
