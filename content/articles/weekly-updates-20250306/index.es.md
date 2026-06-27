---
title: "Actualizaciones semanales de NocoBase: Soporte para configuración de permisos en acciones"
description: "Las actualizaciones de esta semana incluyen: soporte para configuración de permisos en acciones, campo de tiempo con formato de hora, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.17](https://www.nocobase.com/en/blog/v1.5.17)

*Fecha de lanzamiento: 2025-02-27*

#### 🐛 Corrección de errores

- **[cliente]**

  - Error al crear un bloque de comentarios sin una colección de comentarios ([#6309](https://github.com/nocobase/nocobase/pull/6309)) por @katherinehhh
  - Se produce un error al hacer clic en un nodo de bloque de árbol ([#6314](https://github.com/nocobase/nocobase/pull/6314)) por @zhangzhonghe
  - Después de hacer clic en el menú izquierdo, la subpágina se cierra de forma anómala ([#6305](https://github.com/nocobase/nocobase/pull/6305)) por @zhangzhonghe
  - No borrar el valor del campo cuando el valor de la expresión está vacío ([#6300](https://github.com/nocobase/nocobase/pull/6300)) por @zhangzhonghe
- **[Campo de colección: Secuencia]** Corregir que el campo de secuencia no se deshabilita cuando está en modo de solo lectura ([#6274](https://github.com/nocobase/nocobase/pull/6274)) por @mytharcher
- **[Gestor de archivos]** Corregir la migración para colecciones heredadas ([#6310](https://github.com/nocobase/nocobase/pull/6310)) por @mytharcher
- **[Control de acceso]** Registros de datos incorrectos al usar campos muchos a muchos como ámbito de datos en permisos de colección ([#6304](https://github.com/nocobase/nocobase/pull/6304)) por @2013xile
- **[Bloque: Kanban]** Filtrado de datos incorrecto en el bloque Kanban emergente usando variables de registro emergentes ([#6290](https://github.com/nocobase/nocobase/pull/6290)) por @katherinehhh
- **[Bloque: Árbol]** Se produce un error al hacer clic en un nodo de bloque de árbol por @zhangzhonghe

### [v1.5.18](https://www.nocobase.com/en/blog/v1.5.18)

*Fecha de lanzamiento: 2025-02-27*

#### 🐛 Corrección de errores

- **[Bloque: Panel de acciones]** Establecer la altura del panel de acciones no es válido ([#6321](https://github.com/nocobase/nocobase/pull/6321)) por @zhangzhonghe

### [v1.5.19](https://www.nocobase.com/en/blog/v1.5.19)

*Fecha de lanzamiento: 2025-03-01*

#### 🐛 Corrección de errores

- **[cliente]** El botón "añadir nuevo" aparece al pasar el ratón en el modo de solo lectura del campo de asociación ([#6322](https://github.com/nocobase/nocobase/pull/6322)) por @katherinehhh
- **[Acción: Exportar registros Pro]** eliminar la opción 'añadir bloque' en la configuración del botón de exportación de archivos adjuntos por @katherinehhh
- **[Acción: Importar registros Pro]** La detección de registros duplicados del botón de importación del bloque de asociación no muestra datos en el desplegable de campos por @katherinehhh

### [v1.5.20](https://www.nocobase.com/en/blog/v1.5.20)

*Fecha de lanzamiento: 2025-03-03*

#### 🐛 Corrección de errores

- **[cliente]** Las páginas con un favicon personalizado muestran brevemente el favicon de NocoBase durante la carga ([#6337](https://github.com/nocobase/nocobase/pull/6337)) por @zhangzhonghe
- **[Bloque: Mapa]** Faltan o no son visibles los ajustes de configuración para el campo de mapa ([#6336](https://github.com/nocobase/nocobase/pull/6336)) por @zhangzhonghe
- **[Marca personalizada]** Las páginas con un favicon personalizado muestran brevemente el favicon de NocoBase durante la carga por @zhangzhonghe
- **[Impresión de plantillas]** Falló la restauración desde local cuando los plugins de impresión de plantillas de acción y gestor de copias de seguridad estaban ambos habilitados por @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.15](https://www.nocobase.com/en/blog/v1.6.0-beta.15)

*Fecha de lanzamiento: 2025-02-27*

#### 🐛 Corrección de errores

- **[cliente]**

  - Error al crear un bloque de comentarios sin una colección de comentarios ([#6309](https://github.com/nocobase/nocobase/pull/6309)) por @katherinehhh
  - Posición incorrecta después de arrastrar el menú ([#6315](https://github.com/nocobase/nocobase/pull/6315)) por @zhangzhonghe
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir error de compilación por @mytharcher

### [v1.6.0-beta.16](https://www.nocobase.com/en/blog/v1.6.0-beta.16)

*Fecha de lanzamiento: 2025-03-04*

#### 🎉 Nuevas funciones

- **[cliente]** El campo de hora admite formato de hora ([#6329](https://github.com/nocobase/nocobase/pull/6329)) por @katherinehhh

#### 🚀 Mejoras

- **[servidor]** Actualizar koa a 2.15.4; actualizar @koa/cors a 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) por @2013xile
- **[Flujo de trabajo]** Carga diferida del resultado del trabajo para un mejor rendimiento ([#6344](https://github.com/nocobase/nocobase/pull/6344)) por @mytharcher

#### 🐛 Corrección de errores

- **[auth]** Evitar renovar el token durante la autorización WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) por @sheldon66
- **[cliente]**

  - Las páginas con un favicon personalizado muestran brevemente el favicon de NocoBase durante la carga ([#6337](https://github.com/nocobase/nocobase/pull/6337)) por @zhangzhonghe
  - El botón "añadir nuevo" aparece al pasar el ratón en el modo de solo lectura del campo de asociación ([#6322](https://github.com/nocobase/nocobase/pull/6322)) por @katherinehhh
- **[herramientas de desarrollo]** Asegurar que la cabecera X-Forwarded-For se establece solo si req.ip no es undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) por @sheldon66
- **[Bloque: Mapa]** Faltan o no son visibles los ajustes de configuración para el campo de mapa ([#6336](https://github.com/nocobase/nocobase/pull/6336)) por @zhangzhonghe
- **[Móvil]** Error de página: No se pueden leer propiedades de null (leyendo 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) por @zhangzhonghe
- **[Usuarios]** Una UI de error parpadea brevemente cuando la tabla de gestión de permisos de usuario se carga por primera vez ([#6324](https://github.com/nocobase/nocobase/pull/6324)) por @zhangzhonghe
- **[Bloque: Panel de acciones]** Establecer la altura del panel de acciones no es válido ([#6321](https://github.com/nocobase/nocobase/pull/6321)) por @zhangzhonghe
- **[Acción: Importar registros Pro]** La detección de registros duplicados del botón de importación del bloque de asociación no muestra datos en el desplegable de campos por @katherinehhh
- **[Acción: Exportar registros Pro]** eliminar la opción 'añadir bloque' en la configuración del botón de exportación de archivos adjuntos por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir la migración para botones heredados vinculados con un flujo de trabajo de acción personalizada por @mytharcher
- **[Marca personalizada]** Las páginas con un favicon personalizado muestran brevemente el favicon de NocoBase durante la carga por @zhangzhonghe
- **[Impresión de plantillas]** Falló la restauración desde local cuando los plugins de impresión de plantillas de acción y gestor de copias de seguridad estaban ambos habilitados por @gchust
- **[Flujo de trabajo: Aprobación]**

  - Corregir error causado por `.toJSON()` por @mytharcher
  - Corregir que la migración no se ejecutaba debido al número de versión por @mytharcher
  - Corregir la migración para bloques heredados por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.29](https://www.nocobase.com/en/blog/v1.6.0-alpha.29)

*Fecha de lanzamiento: 2025-02-27*

#### 🎉 Nuevas funciones

- **[cliente]** soporte para configuración de permisos para acciones ([#6254](https://github.com/nocobase/nocobase/pull/6254)) por @katherinehhh
- **[Bloque: plantilla]** Añadir plugin `Bloque: plantilla`, proporcionando soporte de plantillas para bloques basado en un mecanismo de herencia. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) por @gchust
- **[Flujo de trabajo: Evento de acción personalizada]** la acción de activar flujo de trabajo soporta control de acceso por @katherinehhh

#### 🚀 Mejoras

- **[cliente]**

  - Actualizar definiciones de tipos de React ([#6278](https://github.com/nocobase/nocobase/pull/6278)) por @gchust
  - Expansión y mejora del centro personal del usuario ([#6213](https://github.com/nocobase/nocobase/pull/6213)) por @katherinehhh
- **[Gestor de archivos]**

  - Aumentar la longitud de la URL a 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) por @mytharcher
  - añadir código backend para generar URL de vista previa de archivos ([#6281](https://github.com/nocobase/nocobase/pull/6281)) por @jiannx
  - Los nombres de archivo durante la carga cambiarán de aleatorios al nombre original con un sufijo aleatorio. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) por @chenos
  - añadir código backend para generar URL de vista previa de archivos ([#6223](https://github.com/nocobase/nocobase/pull/6223)) por @jiannx
  - Cambiar la API del tipo de almacenamiento y añadir API de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher
  - Cambiar la API del tipo de almacenamiento y añadir API de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher
- **[Bloque: Panel de acciones]** Optimizar estilos móviles ([#6270](https://github.com/nocobase/nocobase/pull/6270)) por @zhangzhonghe
- **[Flujo de trabajo]** Ocultar el ID del nodo de la tarjeta de nodo en el lienzo del flujo de trabajo ([#6251](https://github.com/nocobase/nocobase/pull/6251)) por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]**

  - Ajustar la API de almacenamiento basada en el repositorio principal por @mytharcher
  - Soporte para la opción de configuración thumbnailRule por @jiannx
- **[Gestor de copias de seguridad]** Permitir restaurar una copia de seguridad en una aplicación incluso si le faltan algunos plugins por @gchust

#### 🐛 Corrección de errores

- **[herramientas de desarrollo]** Asegurar que la cabecera X-Forwarded-For se establece solo si req.ip no es undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) por @sheldon66
- **[cliente]**

  - Posición incorrecta después de arrastrar el menú ([#6315](https://github.com/nocobase/nocobase/pull/6315)) por @zhangzhonghe
  - Error al crear un bloque de comentarios sin una colección de comentarios ([#6309](https://github.com/nocobase/nocobase/pull/6309)) por @katherinehhh
  - Se produce un error al hacer clic en un nodo de bloque de árbol ([#6314](https://github.com/nocobase/nocobase/pull/6314)) por @zhangzhonghe
  - Después de hacer clic en el menú izquierdo, la subpágina se cierra de forma anómala ([#6305](https://github.com/nocobase/nocobase/pull/6305)) por @zhangzhonghe
  - No borrar el valor del campo cuando el valor de la expresión está vacío ([#6300](https://github.com/nocobase/nocobase/pull/6300)) por @zhangzhonghe
  - El componente de campo de texto enriquecido no se puede borrar por completo ([#6287](https://github.com/nocobase/nocobase/pull/6287)) por @katherinehhh
  - No se puede mover la página a un grupo ([#6289](https://github.com/nocobase/nocobase/pull/6289)) por @zhangzhonghe
  - Omitir error de autenticación para CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) por @sheldon66
  - Corregir archivo subido perdido cuando se hace uno por uno ([#6260](https://github.com/nocobase/nocobase/pull/6260)) por @mytharcher
  - Corregido el carácter de etiqueta html en el campo de entrada del formulario de configuración del canal de correo. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) por @sheldon66
  - Corregir archivos perdidos después de la subida ([#6247](https://github.com/nocobase/nocobase/pull/6247)) por @mytharcher
  - Discrepancia de formato del selector en el campo del formulario de filtro ([#6234](https://github.com/nocobase/nocobase/pull/6234)) por @katherinehhh
  - Mostrar el componente `<Variable.TextArea />` correctamente en modo deshabilitado ([#6197](https://github.com/nocobase/nocobase/pull/6197)) por @mytharcher
- **[create-nocobase-app]** Se produce un error en el cliente web después de ejecutar `create-nocobase-app` seguido de `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) por @gchust
- **[auth]** Omitir la comprobación de autenticación de usuario cuando el token es una clave API ([#6291](https://github.com/nocobase/nocobase/pull/6291)) por @sheldon66
- **[cli]** Mejorar la lógica interna del comando de actualización de nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) por @chenos
- **[Gestor de archivos]**

  - Corregir la migración para colecciones heredadas ([#6310](https://github.com/nocobase/nocobase/pull/6310)) por @mytharcher
  - Corregir la migración y añadir casos de prueba ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher
  - Corregir la migración y añadir casos de prueba ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher
  - Corregir el tipo de columna `path` de la colección de archivos ([#6294](https://github.com/nocobase/nocobase/pull/6294)) por @mytharcher
  - Actualizar la versión de AWS SDK para corregir el error de subida de MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) por @mytharcher
- **[Bloque: plantilla]** Requerir inicio de sesión al acceder a un formulario público ([#6258](https://github.com/nocobase/nocobase/pull/6258)) por @gchust
- **[Control de acceso]** Registros de datos incorrectos al usar campos muchos a muchos como ámbito de datos en permisos de colección ([#6304](https://github.com/nocobase/nocobase/pull/6304)) por @2013xile
- **[Bloque: Kanban]** Filtrado de datos incorrecto en el bloque Kanban emergente usando variables de registro emergentes ([#6290](https://github.com/nocobase/nocobase/pull/6290)) por @katherinehhh
- **[Campo de colección: Secuencia]** Corregir que el campo de secuencia no se deshabilita cuando está en modo de solo lectura ([#6274](https://github.com/nocobase/nocobase/pull/6274)) por @mytharcher
- **[Flujo de trabajo: kit de prueba]** Corregir casos de prueba E2E basados en nuevas funciones ([#6296](https://github.com/nocobase/nocobase/pull/6296)) por @mytharcher
- **[Formularios públicos]** Omitir la comprobación de autenticación en el formulario público ([#6284](https://github.com/nocobase/nocobase/pull/6284)) por @chenos
- **[Autenticación]** Eliminar el envoltorio NavigateIfNotSignIn innecesario de AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) por @sheldon66
- **[Flujo de trabajo]**

  - Corregir detalles de estilo en el lienzo del flujo de trabajo ([#6240](https://github.com/nocobase/nocobase/pull/6240)) por @mytharcher
  - Soporte para activar el flujo de trabajo al cambiar la contraseña ([#6248](https://github.com/nocobase/nocobase/pull/6248)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]**

  - Corregir error de compilación por @mytharcher
  - Corregir casos de prueba E2E por @mytharcher
  - Corregir el inicializador del flujo de trabajo de activación por @mytharcher
  - Corregir error de compilación por @mytharcher
- **[Flujo de trabajo: Evento previo a la acción]** Corregir que el mensaje de error del nodo de mensaje de respuesta no se mostraba por @mytharcher
- **[Flujo de trabajo: JavaScript]** Soporte para requerir módulos de NocoBase por @mytharcher
- **[Gestor de correo electrónico]** hacer pública la colección mailmessage y corregir la pérdida de datos del modal por @jiannx
- **[Almacenamiento de archivos: S3(Pro)]**

  - Actualizar la versión de AWS SDK para corregir el error de subida de MinIO. por @mytharcher
  - establecer el valor por defecto de forcePathStyleForAccess a virtual por @jiannx
- **[Bloque: Formulario multipaso]** error de orden de elementos después de arrastrar por @jiannx
- **[Bloque: Árbol]** Se produce un error al hacer clic en un nodo de bloque de árbol por @zhangzhonghe
- **[Gestor de copias de seguridad]** El icono de eliminar del diálogo de operación de restaurar desde local no funciona por @gchust
- **[Flujo de trabajo: Aprobación]**

  - Corregir que la migración no se ejecutaba debido al número de versión por @mytharcher
  - Corregir casos de prueba E2E basados en nuevas funciones por @mytharcher

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtener NocoBase

[**Página principal**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
