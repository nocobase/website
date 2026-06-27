---
title: "Actualizaciones semanales de NocoBase: Soporte para unión de roles de usuario"
description: "Las actualizaciones de esta semana incluyen: soporte para variables de entorno en URLs de botones de enlace, campos de texto largo habilitados como campos de título para campos de asociación, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.7](https://www.nocobase.com/en/blog/v1.6.7)

*Fecha de lanzamiento: 2025-03-20*

#### 🚀 Mejoras

- **[Flujo de trabajo: nodo de correo]** Añadir descripción de configuración del campo seguro. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) por @sheldon66
- **[Notificación: Correo electrónico]** Añadir descripción de configuración del campo seguro. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) por @sheldon66
- **[Calendario]** Plugin de calendario con ajustes opcionales para habilitar o deshabilitar la creación rápida de eventos ([#6391](https://github.com/nocobase/nocobase/pull/6391)) por @Cyx649312038

#### 🐛 Corrección de errores

- **[cliente]** error de envío del campo de hora en configuración regional china (sintaxis de entrada no válida para tipo time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) por @katherinehhh
- **[Gestor de archivos]** No se puede acceder a los archivos almacenados en COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) por @chenos
- **[Bloque: Mapa]** los campos de clave secreta no activan la validación en la gestión del mapa ([#6509](https://github.com/nocobase/nocobase/pull/6509)) por @katherinehhh
- **[Cliente WEB]** La ruta en la tabla de gestión de rutas es diferente de la ruta real ([#6483](https://github.com/nocobase/nocobase/pull/6483)) por @zhangzhonghe
- **[Acción: Exportar registros Pro]** No se pueden exportar archivos adjuntos por @chenos
- **[Flujo de trabajo: Aprobación]**

  - Corregir bloqueo causado por usuario nulo por @mytharcher
  - Corregir error lanzado al añadir resultado de nodo de consulta por @mytharcher

### [v1.6.8](https://www.nocobase.com/en/blog/v1.6.8)

*Fecha de lanzamiento: 2025-03-22*

#### 🐛 Corrección de errores

- **[servidor]** El comando de actualización puede causar errores en el flujo de trabajo ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust
- **[cliente]** la altura de la subtabla en el formulario se establece junto con la altura del formulario ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh
- **[Autenticación]**

  - Falta X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos
  - Recortar opciones de autenticador ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile
- **[Bloque: Mapa]** problema de gestión de claves del bloque de mapa que causa fallos en las solicitudes debido a caracteres invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh
- **[Gestor de copias de seguridad]** La restauración puede causar errores de ejecución del flujo de trabajo por @gchust
- **[WeCom]** Resolver variables de entorno y secretos al recuperar la configuración de notificación. por @2013xile

### [v1.6.9](https://www.nocobase.com/en/blog/v1.6.9)

*Fecha de lanzamiento: 2025-03-23*

#### 🐛 Corrección de errores

- **[cliente]** transparencia del botón de acción que causa problema de visualización de configuración al pasar el ratón ([#6529](https://github.com/nocobase/nocobase/pull/6529)) por @katherinehhh

### [v1.6.10](https://www.nocobase.com/en/blog/v1.6.10)

*Fecha de lanzamiento: 2025-03-25*

#### 🐛 Corrección de errores

- **[cliente]**

  - No se puede usar la variable 'Usuario actual' al añadir una página de enlace ([#6536](https://github.com/nocobase/nocobase/pull/6536)) por @zhangzhonghe
  - La asignación de valor "nulo" a un campo no funciona ([#6549](https://github.com/nocobase/nocobase/pull/6549)) por @katherinehhh
  - Error del comando `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) por @gchust
  - Eliminar la opción 'Permitir selección múltiple' de los campos de selección única desplegable en formularios de filtro ([#6515](https://github.com/nocobase/nocobase/pull/6515)) por @zhangzhonghe
  - El enlace del rango de datos del campo relacional no es efectivo ([#6530](https://github.com/nocobase/nocobase/pull/6530)) por @zhangzhonghe
- **[Colección: Árbol]** Problema de migración para plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) por @2013xile
- **[Acción: Solicitud personalizada]** No se pueden descargar archivos codificados en UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) por @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.7](https://www.nocobase.com/en/blog/v1.7.0-beta.7)

*Fecha de lanzamiento: 2025-03-19*

#### 🚀 Mejoras

- **[Calendario]** Plugin de calendario con ajustes opcionales para habilitar o deshabilitar la creación rápida de eventos ([#6391](https://github.com/nocobase/nocobase/pull/6391)) por @Cyx649312038

#### 🐛 Corrección de errores

- **[cliente]**

  - el botón añadir hijo no muestra el modo solo icono ([#6504](https://github.com/nocobase/nocobase/pull/6504)) por @katherinehhh
  - la regla de enlace con campo oculto por defecto y valor retenido no funciona ([#6503](https://github.com/nocobase/nocobase/pull/6503)) por @katherinehhh
- **[Bloque: Panel de acciones]** problema de diseño en el panel de acciones móvil después de ocultar botones debido al control de permisos ([#6502](https://github.com/nocobase/nocobase/pull/6502)) por @katherinehhh
- **[Cliente WEB]** La ruta en la tabla de gestión de rutas es diferente de la ruta real ([#6483](https://github.com/nocobase/nocobase/pull/6483)) por @zhangzhonghe

### [v1.7.0-beta.8](https://www.nocobase.com/en/blog/v1.7.0-beta.8)

*Fecha de lanzamiento: 2025-03-23*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para ajustes de estilo de campo para tamaño de fuente, peso de fuente y estilo de fuente ([#6489](https://github.com/nocobase/nocobase/pull/6489)) por @katherinehhh
- **[Variables y secretos]** soporte para variables de entorno en la URL del botón de enlace ([#6494](https://github.com/nocobase/nocobase/pull/6494)) por @katherinehhh

#### 🚀 Mejoras

- **[cliente]** soporte de coincidencia difusa para campos seleccionados en el botón de filtro ([#6496](https://github.com/nocobase/nocobase/pull/6496)) por @katherinehhh
- **[Flujo de trabajo: nodo de correo]** Añadir descripción de configuración del campo seguro. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) por @sheldon66
- **[Cliente WEB]** añadir mensaje de confirmación secundaria para Limpiar caché ([#6505](https://github.com/nocobase/nocobase/pull/6505)) por @katherinehhh
- **[Notificación: Correo electrónico]** Añadir descripción de configuración del campo seguro. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) por @sheldon66
- **[Gestor de correo electrónico]** soporte para reautorizar y seleccionar automáticamente la cuenta al enviar un correo electrónico por @jiannx

#### 🐛 Corrección de errores

- **[servidor]** El comando de actualización puede causar errores en el flujo de trabajo ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust
- **[cliente]**

  - la altura de la subtabla en el formulario se establece junto con la altura del formulario ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh
  - error de envío del campo de hora en configuración regional china (sintaxis de entrada no válida para tipo time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) por @katherinehhh
  - transparencia del botón de acción que causa problema de visualización de configuración al pasar el ratón ([#6529](https://github.com/nocobase/nocobase/pull/6529)) por @katherinehhh
- **[Autenticación]**

  - Recortar opciones de autenticador ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile
  - Falta X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos
- **[Bloque: Mapa]**

  - problema de gestión de claves del bloque de mapa que causa fallos en las solicitudes debido a caracteres invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh
  - los campos de clave secreta no activan la validación en la gestión del mapa ([#6509](https://github.com/nocobase/nocobase/pull/6509)) por @katherinehhh
- **[Gestor de archivos]** No se puede acceder a los archivos almacenados en COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) por @chenos
- **[Acción: Exportar registros Pro]** No se pueden exportar archivos adjuntos por @chenos
- **[Gestor de copias de seguridad]** La restauración puede causar errores de ejecución del flujo de trabajo por @gchust
- **[WeCom]** Resolver variables de entorno y secretos al recuperar la configuración de notificación. por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Corregir error en la tabla de procesos cuando se elimina un trabajo por @mytharcher
  - Corregir error lanzado al añadir resultado de nodo de consulta por @mytharcher
  - Corregir bloqueo causado por usuario nulo por @mytharcher

### [v1.7.0-beta.9](https://www.nocobase.com/en/blog/v1.7.0-beta.9)

*Fecha de lanzamiento: 2025-03-25*

#### 🎉 Nuevas funciones

- **[acl]** Soporte para unión de roles de usuario ([#6301](https://github.com/nocobase/nocobase/pull/6301)) por @aaaaaajie
- **[cliente]**

  - soporte para la extensión de campos predefinidos en colecciones ([#6183](https://github.com/nocobase/nocobase/pull/6183)) por @katherinehhh
  - Soporte para extender operadores de filtro del frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) por @katherinehhh
- **[Verificación]** Soporte para que el usuario vincule varios tipos de verificación, como SMS y autenticadores TOTP, y verificación de identidad en escenarios requeridos. Habilita el desarrollo y la extensión de métodos de verificación. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) por @2013xile
  Referencia: [Verificación](https://docs.nocobase.com/handbook/verification)
- **[Calendario]** Soporte para la extensión de campos opcionales para los plugins de Kanban, Calendario y Campo de Fórmula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) por @katherinehhh
- **[Bloque: plantilla]** Añadir plugin `Bloque: plantilla`, que proporciona soporte de plantilla para bloques basado en un mecanismo de herencia. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) por @gchust
- **[plugin-demo-platform]** Establecer skipAuthCheck de la ruta "/new" en true. por @sheldon66
- **[Autenticación de dos factores (2FA)]** Nuevos plugins: Autenticación de dos factores y Verificación: Autenticador TOTP por @2013xile
  Referencia: [Autenticación de dos factores (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verificación: Autenticador TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Mejoras

- **[cliente]**

  - Añadir skipAuthCheck a router.add para evitar redirigir al inicio de sesión en páginas públicas. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) por @sheldon66
  - Actualizar dependencias relacionadas con ant design a 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) por @gchust
- **[utilidades]** Adaptación de página de escritorio para dispositivos móviles ([#6393](https://github.com/nocobase/nocobase/pull/6393)) por @zhangzhonghe
- **[Formularios públicos]** establecer el título de la página del formulario público al título configurado al crearlo ([#6538](https://github.com/nocobase/nocobase/pull/6538)) por @katherinehhh
- **[Gestor de archivos]**

  - añadir código backend para generar URL de vista previa de archivo ([#6223](https://github.com/nocobase/nocobase/pull/6223)) por @jiannx
  - Cambiar API de tipo de almacenamiento y añadir API de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher
- **[Bloque: plantilla]** Soporte para guardar bloque de datos como plantilla de bloque desde la página ([#6348](https://github.com/nocobase/nocobase/pull/6348)) por @gchust
- **[Flujo de trabajo]** Mover configuración de flujo de trabajo vinculado al plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - problema de arrastrar y soltar botones de fila de tabla ([#6544](https://github.com/nocobase/nocobase/pull/6544)) por @katherinehhh
  - No se puede usar la variable 'Usuario actual' al añadir una página de enlace ([#6536](https://github.com/nocobase/nocobase/pull/6536)) por @zhangzhonghe
  - El enlace del rango de datos del campo relacional no es efectivo ([#6530](https://github.com/nocobase/nocobase/pull/6530)) por @zhangzhonghe
  - Eliminar la opción 'Permitir selección múltiple' de los campos de selección única desplegable en formularios de filtro ([#6515](https://github.com/nocobase/nocobase/pull/6515)) por @zhangzhonghe
  - Error del comando `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) por @gchust
  - campos faltantes en la configuración de la regla de enlace ([#6488](https://github.com/nocobase/nocobase/pull/6488)) por @katherinehhh
  - El contenido no se muestra completamente en navegadores móviles ([#6446](https://github.com/nocobase/nocobase/pull/6446)) por @zhangzhonghe
  - Al usar el operador '$anyOf', la regla de enlace no es válida ([#6400](https://github.com/nocobase/nocobase/pull/6400)) por @zhangzhonghe
  - formato incorrecto del campo de hora en el formulario de filtro ([#6374](https://github.com/nocobase/nocobase/pull/6374)) por @katherinehhh
  - Estilo de entrada incorrecto para la configuración del valor predeterminado del formulario ([#6490](https://github.com/nocobase/nocobase/pull/6490)) por @gchust
- **[utilidades]** Error conocido de 'responsive de escritorio' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) por @zhangzhonghe
- **[acl]** Corregido el problema por el cual los campos de relación no se muestran bajo la unión de roles. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) por @aaaaaajie
- **[Colección: Árbol]** Problema de migración para plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) por @2013xile
- **[Acción: Solicitud personalizada]** No se pueden descargar archivos codificados en UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) por @2013xile
- **[Variables y secretos]** Los botones no se han mostrado en el panel de creación de nuevas variables ([#6485](https://github.com/nocobase/nocobase/pull/6485)) por @gchust
- **[Cliente WEB]** Reemplazar todas las instancias de ctx.state.currentRole (rol único) con ctx.state.currentRoles (soporta múltiples roles). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) por @aaaaaajie
- **[Control de acceso]**

  - Error cuando el ámbito de datos se establece en datos propios y la tabla carece de un campo de creador. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) por @aaaaaajie
  - Corregido que cambiar de roles no surte efecto. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) por @aaaaaajie
- **[Bloque: plantilla]**

  - La opción Guardar como plantilla no se ha mostrado en el bloque de datos de la página ([#6398](https://github.com/nocobase/nocobase/pull/6398)) por @gchust
  - Comportamiento incorrecto de Guardar como plantilla en el cliente móvil ([#6420](https://github.com/nocobase/nocobase/pull/6420)) por @gchust
  - Requiere inicio de sesión al acceder al formulario público ([#6258](https://github.com/nocobase/nocobase/pull/6258)) por @gchust
- **[Auth: Claves API]** Eliminación de unión de lista de roles del plugin de claves API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) por @aaaaaajie
- **[Bloque: Formulario multipaso]** el botón de envío tiene el mismo color en su estado predeterminado y resaltado por @jiannx
- **[Flujo de trabajo: Aprobación]** Problema de estilo con el diálogo emergente 'Solicitar nuevo' por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.4](https://www.nocobase.com/en/blog/v1.7.0-alpha.4)

*Fecha de lanzamiento: 2025-03-23*

#### 🎉 Nuevas funciones

- **[cliente]**

  - soporte para campos de texto largo como campos de título para campos de asociación ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh
  - Soporte para ajustes de estilo de campo para tamaño de fuente, peso de fuente y estilo de fuente ([#6489](https://github.com/nocobase/nocobase/pull/6489)) por @katherinehhh
- **[Variables y secretos]** soporte para variables de entorno en la URL del botón de enlace ([#6494](https://github.com/nocobase/nocobase/pull/6494)) por @katherinehhh
- **[Flujo de trabajo: Nodo de agregación]** Soporte para configurar la precisión del resultado de la agregación ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

#### 🚀 Mejoras

- **[cliente]** soporte de coincidencia difusa para campos seleccionados en el botón de filtro ([#6496](https://github.com/nocobase/nocobase/pull/6496)) por @katherinehhh
- **[Notificación: Correo electrónico]** Añadir descripción de configuración del campo seguro. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) por @sheldon66
- **[Flujo de trabajo: nodo de correo]** Añadir descripción de configuración del campo seguro. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) por @sheldon66
- **[Calendario]** Plugin de calendario con ajustes opcionales para habilitar o deshabilitar la creación rápida de eventos ([#6391](https://github.com/nocobase/nocobase/pull/6391)) por @Cyx649312038
- **[Cliente WEB]** añadir mensaje de confirmación secundaria para Limpiar caché ([#6505](https://github.com/nocobase/nocobase/pull/6505)) por @katherinehhh
- **[Gestor de correo electrónico]** soporte para reautorizar y seleccionar automáticamente la cuenta al enviar un correo electrónico por @jiannx

#### 🐛 Corrección de errores

- **[cliente]**

  - transparencia del botón de acción que causa problema de visualización de configuración al pasar el ratón ([#6529](https://github.com/nocobase/nocobase/pull/6529)) por @katherinehhh
  - error de envío del campo de hora en configuración regional china (sintaxis de entrada no válida para tipo time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) por @katherinehhh
  - la altura de la subtabla en el formulario se establece junto con la altura del formulario ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh
  - la regla de enlace con campo oculto por defecto y valor retenido no funciona ([#6503](https://github.com/nocobase/nocobase/pull/6503)) por @katherinehhh
  - el botón añadir hijo no muestra el modo solo icono ([#6504](https://github.com/nocobase/nocobase/pull/6504)) por @katherinehhh
- **[servidor]** El comando de actualización puede causar errores en el flujo de trabajo ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust
- **[utilidades]** Error conocido de 'responsive de escritorio' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) por @zhangzhonghe
- **[evaluadores]** Revertir redondeo de decimales a 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher
- **[Autenticación]**

  - Recortar opciones de autenticador ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile
  - Falta X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos
- **[Bloque: Mapa]**

  - problema de gestión de claves del bloque de mapa que causa fallos en las solicitudes debido a caracteres invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh
  - los campos de clave secreta no activan la validación en la gestión del mapa ([#6509](https://github.com/nocobase/nocobase/pull/6509)) por @katherinehhh
- **[Gestor de archivos]**

  - No se puede acceder a los archivos almacenados en COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) por @chenos
  - codificar url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos
- **[Cliente WEB]** La ruta en la tabla de gestión de rutas es diferente de la ruta real ([#6483](https://github.com/nocobase/nocobase/pull/6483)) por @zhangzhonghe
- **[Bloque: Panel de acciones]** problema de diseño en el panel de acciones móvil después de ocultar botones debido al control de permisos ([#6502](https://github.com/nocobase/nocobase/pull/6502)) por @katherinehhh
- **[Fuente de datos: Principal]** No se puede crear una vista de MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie
- **[Flujo de trabajo]** Corregir conteo de tareas antiguas después de eliminar el flujo de trabajo ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher
- **[Acción: Exportar registros Pro]** No se pueden exportar archivos adjuntos por @chenos
- **[Gestor de copias de seguridad]**

  - Los archivos subidos no se han restaurado al crear una sub-aplicación desde una plantilla de copia de seguridad por @gchust
  - La restauración puede causar errores de ejecución del flujo de trabajo por @gchust
  - Fallo en la restauración de la base de datos MySQL causado por superposición del conjunto GTID por @gchust
- **[WeCom]** Resolver variables de entorno y secretos al recuperar la configuración de notificación. por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Corregir error en la tabla de procesos cuando se elimina un trabajo por @mytharcher
  - Cambiar la aprobación devuelta como pendiente por @mytharcher
  - Corregir error lanzado al añadir resultado de nodo de consulta por @mytharcher
  - Corregir botón de acción faltante en la tabla de procesos por @mytharcher
  - Problema de estilo con el diálogo emergente 'Solicitar nuevo' por @zhangzhonghe

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtener NocoBase

[**Página principal**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
