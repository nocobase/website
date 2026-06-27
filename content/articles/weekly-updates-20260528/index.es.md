---
title: "Actualizaciones Semanales｜Plugin de Gestión de Copias de Seguridad de Código Abierto"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 22 al 28 de mayo de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.58](https://www.nocobase.com/en/blog/v2.0.58)

*Fecha de lanzamiento: 2026-05-28*

### 🎉 Nuevas funciones

* **[Flujo de trabajo]** Se añadió una API de administrador para re-ejecutar ejecuciones de flujo de trabajo iniciadas desde el nodo principal o un nodo específico. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher

### 🚀 Mejoras

* **[cliente]** Se eliminó la opción Oculto de la configuración de elementos del menú. ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe

### 🐛 Corrección de errores

* **[cliente]**
  * Se corrigió el problema por el cual el selector de fecha emergente para móviles v2 usaba la hora actual en lugar del valor del formulario. ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  * Se corrigió el problema por el cual la configuración de formato del campo de hora no surtía efecto en v2. ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  * Se aumentó el límite de carga de archivos para el componente de entrada de escaneo v1 a 10 MB. ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  * Se corrigió el problema por el cual el estado oculto de la vinculación de subformularios no se sincronizaba. ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh
  * Se corrigió el problema por el cual una subtabla en un subformulario no podía agregar una segunda fila. ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  * Se corrigió el problema por el cual las pestañas de página desaparecían después de cambiar de menú. ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe
* **[motor-flujo]** Se corrigió el problema por el cual las reglas de vinculación de acciones de tabla se ejecutaban incorrectamente después de que un formulario se enviara correctamente en una ventana emergente. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust
* **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió el problema por el cual los botones de tabla de acción personalizada con contextos de múltiples registros permitían incorrectamente seleccionar flujos de trabajo de contexto personalizados. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher
* **[Gestor de archivos]**
  * Se corrigió la normalización de nombres de archivo Unicode durante la carga de archivos para evitar generar claves de objeto con caracteres de control. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher
  * Se mejoraron los mensajes de error de vista previa de PDF y se documentaron los requisitos CORS para almacenamiento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referencia: [Vista previa de archivos](docs/docs/en/file-manager/file-preview/index.md)

### [v2.0.57](https://www.nocobase.com/en/blog/v2.0.57)

*Fecha de lanzamiento: 2026-05-26*

### 🐛 Corrección de errores

* **[compilación]** Se corrigió la salida de ofuscación del servidor de plugins para evitar globales de navegador en paquetes de tiempo de ejecución de Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn
* **[Flujo de trabajo: Nodo manual]** Se corrigió el problema por el cual los guardados temporales para tareas de flujo de trabajo manual no persistían los valores de formulario enviados. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher
* **[Empleados IA]** Se corrigió la descripción incorrecta del nombre de la herramienta en el prompt de contexto de trabajo. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock
* **[Gestor de archivos]** Se renderizaron de forma segura las vistas previas de PDF con PDF.js en lugar de la representación PDF sin procesar basada en iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher
* **[Auth: OIDC]** Se corrigió la fuga de tokens cuando las devoluciones de llamada de inicio de sesión SSO recibían una URL de redirección externa. por @2013xile
* **[Flujo de trabajo: Aprobación]**
  * Se corrigió el problema por el cual la API `<span>jobs:resume</span>` no era compatible con los nodos de aprobación. por @mytharcher
  * Se corrigió la retirada de aprobación para actualizar los datos comerciales enviados respetando los permisos de actualización de la colección de origen. por @mytharcher
  * Se corrigieron las tareas de aprobación obsoletas cuando los flujos de trabajo de aprobación se terminaban por fallos en nodos que no eran de aprobación. por @mytharcher

### [v2.0.56](https://www.nocobase.com/en/blog/v2.0.56)

*Fecha de lanzamiento: 2026-05-22*

### 🎉 Nuevas funciones

* **[Gestor de copias de seguridad]** Se publicó como código abierto el plugin Gestor de copias de seguridad. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) por @chenos

### 🚀 Mejoras

* **[cliente]** Se optimizó la configuración de visualización de los botones de acción. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) por @katherinehhh
* **[motor-flujo]** Se añadió soporte de búsqueda a los menús de configuración de campos v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) por @zhangzhonghe
* **[Seguridad]** Se añadió revisión de seguridad de dependencias para las solicitudes de extracción. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) por @zhangzhonghe
* **[Gestor de notificaciones]** Se cambió la estrategia de cola para optimizar el rendimiento de envío. ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher
* **[IA: Base de conocimiento]** Se habilitó la modificación del almacenamiento vectorial para las bases de conocimiento de IA. por @cgyrock
* **[Flujo de trabajo: Aprobación]** Se mejoraron las aprobaciones relacionadas con tarjetas de línea de tiempo. por @zhangzhonghe

### 🐛 Corrección de errores

* **[cliente]**
  * Se corrigió el problema por el cual los valores seleccionados se borraban cuando los campos de asociación dependientes cambiaban en la vinculación del ámbito de datos. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) por @katherinehhh
  * Se corrigió el problema por el cual una insignia de menú seguía mostrando un punto cuando su valor era 0. ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe
  * Se corrigió el problema por el cual los formularios de filtro no podían usar variables del formulario actual. ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe
  * Se corrigió el problema por el cual los bloques v2 estrechos se volvían de ancho completo después de salir del modo de edición. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) por @zhangzhonghe
  * Se corrigió el estado incorrecto del menú de campo JS en subformularios. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) por @gchust
* **[motor-flujo]** Se corrigió el problema de selección múltiple para campos de fuentes de datos externas en formularios v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) por @katherinehhh
* **[Empleados IA]** Se corrigió un error que ocurría cuando los empleados IA accedían a bases de conocimiento de solo lectura. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) por @cgyrock
* **[Calendario]** Se corrigió el problema por el cual más elementos en el calendario no podían mostrarse completamente. ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe
* **[Acción: Actualización masiva]** Se corrigió el problema por el cual la acción de actualización masiva restablecía el estado de carga después de un fallo de actualización. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) por @katherinehhh
* **[Documentación de API]** Se corrigió la documentación de la API de colecciones para que los parámetros de consulta ya no interfieran entre sí. ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx
* **[Flujo de trabajo]** Se añadió un estado de carga para la ejecución manual del flujo de trabajo. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) por @mytharcher
* **[Gestor de migraciones]** Se corrigieron los fallos en la creación de archivos de migración al usar OceanBase. por @2013xile
* **[Almacenamiento de archivos: S3(Pro)]** Se corrigió el manejo del endpoint S3 Pro para que las cargas del servidor y las vistas previas de URL no dupliquen el host del bucket. por @mytharcher
* **[Flujo de trabajo: Aprobación]** Se corrigieron los índices duplicados de registros de aprobación cuando ocurrían delegaciones concurrentemente en el mismo trabajo de aprobación. por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)


### [v2.1.0-beta.37](https://www.nocobase.com/en/blog/v2.1.0-beta.37)

*Fecha de lanzamiento: 2026-05-26*

### 🎉 Nuevas funciones

* **[cliente-v2]** Se añadió un menú de Seguridad y la página de configuración de Política de tokens al administrador v2. El centro de usuario ahora admite Cambiar contraseña. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) por @Molunerfinn
* **[cli]** Se añadió soporte para autenticación básica. ([#9558](https://github.com/nocobase/nocobase/pull/9558)) por @chenos
* **[Política de contraseñas]** Se migró el plugin de Política de contraseñas al shell de administración cliente-v2, incluyendo las páginas de configuración de Política de contraseñas y Usuarios bloqueados, y se añadió la aplicación de reglas del lado del cliente en el formulario de Cambiar contraseña del centro de usuario. por @Molunerfinn

### 🚀 Mejoras

* **[Visualización de datos]** Se añadió soporte cliente-v2 para bloques de gráficos. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) por @jiannx
* **[Flujo de trabajo]** Se refactorizaron las comprobaciones de disponibilidad de nodos asíncronos del flujo de trabajo. ([#9532](https://github.com/nocobase/nocobase/pull/9532)) por @mytharcher

### 🐛 Corrección de errores

* **[compilación]**
  * Los activos de texto en las compilaciones del servidor ahora se copian como archivos en lugar de convertirse en módulos JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) por @Molunerfinn
  * Se corrigió la salida de ofuscación del servidor de plugins para evitar globales de navegador en paquetes de tiempo de ejecución de Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn
* **[cliente-v2]** Se corrigieron los metadatos de idioma del navegador para que la página de la aplicación siga el idioma de la aplicación seleccionada en lugar de marcarse como inglés. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) por @Molunerfinn
* **[Gestor de archivos]** Se renderizaron de forma segura las vistas previas de PDF con PDF.js en lugar de la representación PDF sin procesar basada en iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher
* **[Empleados IA]** Se corrigió la descripción incorrecta del nombre de la herramienta en el prompt de contexto de trabajo. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock
* **[Flujo de trabajo: Nodo manual]** Se corrigió el problema por el cual los guardados temporales para tareas de flujo de trabajo manual no persistían los valores de formulario enviados. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher
* **[Auth: OIDC]** Se corrigió la fuga de tokens cuando las devoluciones de llamada de inicio de sesión SSO recibían una URL de redirección externa. por @2013xile
* **[Flujo de trabajo: Aprobación]**
  * Se corrigió la retirada de aprobación para actualizar los datos comerciales enviados respetando los permisos de actualización de la colección de origen. por @mytharcher
  * Se corrigió el problema por el cual la API `<span>jobs:resume</span>` no era compatible con los nodos de aprobación. por @mytharcher
  * Se corrigieron los índices duplicados de registros de aprobación cuando ocurrían delegaciones concurrentemente en el mismo trabajo de aprobación. por @mytharcher
  * Se corrigieron las tareas de aprobación obsoletas cuando los flujos de trabajo de aprobación se terminaban por fallos en nodos que no eran de aprobación. por @mytharcher

### [v2.1.0-beta.36](https://www.nocobase.com/en/blog/v2.1.0-beta.36)

*Fecha de lanzamiento: 2026-05-22*

### 🎉 Nuevas funciones

* **[cli]** Se añadieron comandos de creación y restauración de copias de seguridad. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) por @chenos
* **[Gestor de copias de seguridad]** Se publicó como código abierto el plugin Gestor de copias de seguridad. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) por @chenos
* **[Editor de temas]** Se añadió soporte del Editor de temas a la interfaz v2. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) por @zhangzhonghe
* **[Autenticación de dos factores (2FA)]** Se añadió soporte para vinculación, verificación y configuración de TOTP y autenticación de dos factores desde el cliente v2. por @Molunerfinn

### 🚀 Mejoras

* **[cliente]** Se optimizó la configuración de visualización de los botones de acción. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) por @katherinehhh
* **[motor-flujo]** Se añadió soporte de búsqueda a los menús de configuración de campos v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) por @zhangzhonghe
* **[cli]** Se mejoró el flujo de autenticación del entorno. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) por @chenos
* **[Seguridad]** Se añadió revisión de seguridad de dependencias para las solicitudes de extracción. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) por @zhangzhonghe
* **[Verificación]** Se añadió soporte cliente-v2 al plugin de Verificación, incluyendo la página de configuración de administración, la entrada del centro de usuario y los formularios OTP por SMS. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) por @Molunerfinn
* **[Autenticación]** Se corrigió la configuración de marca personalizada en el cliente v2. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) por @zhangzhonghe
* **[Bloque: Mapa]** Se añadió soporte cliente-v2 para el plugin de mapa. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) por @jiannx
* **[Marca personalizada]** Se añadió soporte de configuración de marca personalizada al cliente v2. por @zhangzhonghe
* **[IA: Base de conocimiento]** Se habilitó la modificación del almacenamiento vectorial para las bases de conocimiento de IA. por @cgyrock
* **[Flujo de trabajo: Aprobación]** Se añadió la bandera `<span>async</span>` para las instrucciones de aprobación para soportar la nueva API de creación de nodos en el lienzo del flujo de trabajo. por @mytharcher

### 🐛 Corrección de errores

* **[cliente]**
  * Se corrigió el problema por el cual los valores seleccionados se borraban cuando los campos de asociación dependientes cambiaban en la vinculación del ámbito de datos. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) por @katherinehhh
  * Se corrigió la carga en modo dev para plugins de almacenamiento integrados que dependen de exportaciones con nombre de plugins fuente locales. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) por @Molunerfinn
  * Se corrigió el estado incorrecto del menú de campo JS en subformularios. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) por @gchust
  * Se corrigió el problema por el cual los bloques v2 estrechos se volvían de ancho completo después de salir del modo de edición. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) por @zhangzhonghe
* **[cliente-v2]** Se corrigió el registro inconsistente de dependencias dnd-kit. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) por @jiannx
* **[motor-flujo]** Se corrigió el problema de selección múltiple para campos de fuentes de datos externas en formularios v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) por @katherinehhh
* **[Bloque: iframe]** Se corrigió el problema por el cual el contenido del iframe no llenaba la altura configurada del bloque. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) por @katherinehhh
* **[Empleados IA]**
  * Se corrigió un error que ocurría cuando los empleados IA accedían a bases de conocimiento de solo lectura. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) por @cgyrock
  * Se corrigió el problema por el cual las tarjetas de llamada a herramientas de IA no aparecían inmediatamente cuando los eventos de herramientas transmitidas se dividían. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) por @2013xile
  * Se corrigió un error que ocurría cuando los empleados IA accedían a bases de conocimiento de solo lectura. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) por @cgyrock
* **[Acción: Exportar registros]** Se mejoró el rendimiento de la configuración de campos cuando hay muchos campos de asociación. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) por @katherinehhh
* **[Acción: Actualización masiva]** Se corrigió el problema por el cual la acción de actualización masiva restablecía el estado de carga después de un fallo de actualización. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) por @katherinehhh
* **[Flujo de trabajo]** Se añadió un estado de carga para la ejecución manual del flujo de trabajo. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) por @mytharcher
* **[Localización]** Se corrigieron las traducciones de referencia de localización integradas para las tareas de traducción con IA. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) por @2013xile
* **[Gestor de migraciones]** Se corrigieron los fallos en la creación de archivos de migración al usar OceanBase. por @2013xile
* **[Almacenamiento de archivos: S3(Pro)]** Se corrigió el manejo del endpoint S3 Pro para que las cargas del servidor y las vistas previas de URL no dupliquen el host del bucket. por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.40](https://www.nocobase.com/en/blog/v2.1.0-alpha.40)

*Fecha de lanzamiento: 2026-05-22*

### 🎉 Nuevas funciones

* **[cli]** Se añadieron comandos de creación y restauración de copias de seguridad. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) por @chenos
* **[Gestor de copias de seguridad]** Se publicó como código abierto el plugin Gestor de copias de seguridad. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) por @chenos
* **[Editor de temas]** Se añadió soporte del Editor de temas a la interfaz v2. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) por @zhangzhonghe
* **[Autenticación de dos factores (2FA)]** Se añadió soporte para vinculación, verificación y configuración de TOTP y autenticación de dos factores desde el cliente v2. por @Molunerfinn

### 🚀 Mejoras

* **[cli]** Se mejoró el flujo de autenticación del entorno. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) por @chenos
* **[motor-flujo]** Se añadió soporte de búsqueda a los menús de configuración de campos v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) por @zhangzhonghe
* **[cliente]** Se optimizó la configuración de visualización de los botones de acción. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) por @katherinehhh
* **[Seguridad]** Se añadió revisión de seguridad de dependencias para las solicitudes de extracción. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) por @zhangzhonghe
* **[Verificación]** Se añadió soporte cliente-v2 al plugin de Verificación, incluyendo la página de configuración de administración, la entrada del centro de usuario y los formularios OTP por SMS. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) por @Molunerfinn
* **[Autenticación]** Se corrigió la configuración de marca personalizada en el cliente v2. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) por @zhangzhonghe
* **[Bloque: Mapa]** Se añadió soporte cliente-v2 para el plugin de mapa. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) por @jiannx
* **[Marca personalizada]** Se añadió soporte de configuración de marca personalizada al cliente v2. por @zhangzhonghe
* **[IA: Base de conocimiento]** Se habilitó la modificación del almacenamiento vectorial para las bases de conocimiento de IA. por @cgyrock
* **[Flujo de trabajo: Aprobación]** Se añadió la bandera `<span>async</span>` para las instrucciones de aprobación para soportar la nueva API de creación de nodos en el lienzo del flujo de trabajo. por @mytharcher

### 🐛 Corrección de errores

* **[cliente]**
  * Se corrigió la carga en modo dev para plugins de almacenamiento integrados que dependen de exportaciones con nombre de plugins fuente locales. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) por @Molunerfinn
  * Se corrigió el problema por el cual los bloques v2 estrechos se volvían de ancho completo después de salir del modo de edición. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) por @zhangzhonghe
  * Se corrigió el problema por el cual los valores seleccionados se borraban cuando los campos de asociación dependientes cambiaban en la vinculación del ámbito de datos. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) por @katherinehhh
  * Se corrigió el estado incorrecto del menú de campo JS en subformularios. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) por @gchust
* **[cliente-v2]** Se corrigió el registro inconsistente de dependencias dnd-kit. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) por @jiannx
* **[motor-flujo]** Se corrigió el problema de selección múltiple para campos de fuentes de datos externas en formularios v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) por @katherinehhh
* **[Bloque: iframe]** Se corrigió el problema por el cual el contenido del iframe no llenaba la altura configurada del bloque. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) por @katherinehhh
* **[Acción: Exportar registros]** Se mejoró el rendimiento de la configuración de campos cuando hay muchos campos de asociación. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) por @katherinehhh
* **[Empleados IA]**
  * Se corrigió un error que ocurría cuando los empleados IA accedían a bases de conocimiento de solo lectura. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) por @cgyrock
  * Se corrigió un error que ocurría cuando los empleados IA accedían a bases de conocimiento de solo lectura. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) por @cgyrock
  * Se corrigió el problema por el cual las tarjetas de llamada a herramientas de IA no aparecían inmediatamente cuando los eventos de herramientas transmitidas se dividían. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) por @2013xile
* **[Localización]** Se corrigieron las traducciones de referencia de localización integradas para las tareas de traducción con IA. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) por @2013xile
* **[Acción: Actualización masiva]** Se corrigió el problema por el cual la acción de actualización masiva restablecía el estado de carga después de un fallo de actualización. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) por @katherinehhh
* **[Flujo de trabajo]** Se añadió un estado de carga para la ejecución manual del flujo de trabajo. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) por @mytharcher
* **[Gestor de migraciones]** Se corrigieron los fallos en la creación de archivos de migración al usar OceanBase. por @2013xile
* **[Almacenamiento de archivos: S3(Pro)]** Se corrigió el manejo del endpoint S3 Pro para que las cargas del servidor y las vistas previas de URL no dupliquen el host del bucket. por @mytharcher
* **[Flujo de trabajo: Aprobación]** Se corrigieron los índices duplicados de registros de aprobación cuando ocurrían delegaciones concurrentemente en el mismo trabajo de aprobación. por @mytharcher
