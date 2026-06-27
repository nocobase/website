---
title: "Actualizaciones semanales de NocoBase: Añadir gestión de rutas"
description: "Las actualizaciones de esta semana incluyen: soporte para configuración de permisos en pestañas de página, añadir página de gestión de rutas y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase se actualiza actualmente con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en las funciones más novedosas del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.11](https://www.nocobase.com/en/blog/v1.5.11)

*Fecha de lanzamiento: 2025-02-20*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo]** Soporte para extender el grupo de instrucciones en el flujo de trabajo ([#6237](https://github.com/nocobase/nocobase/pull/6237)) por @mytharcher
  Referencia: [Extiende grupo de nodos](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema con la ventana emergente de acción de asociación de bloque de asociación en móvil ([#6235](https://github.com/nocobase/nocobase/pull/6235)) por @katherinehhh
  - Desajuste de formato del selector en el campo de formulario de filtro ([#6234](https://github.com/nocobase/nocobase/pull/6234)) por @katherinehhh
  - Mostrar el componente `<Variable.TextArea />` correctamente en modo deshabilitado ([#6197](https://github.com/nocobase/nocobase/pull/6197)) por @mytharcher
  - Corregir archivos perdidos después de la subida ([#6247](https://github.com/nocobase/nocobase/pull/6247)) por @mytharcher
- **[Flujo de trabajo]**

  - Corregir detalles de estilo en el lienzo del flujo de trabajo ([#6240](https://github.com/nocobase/nocobase/pull/6240)) por @mytharcher
  - Soporte para activar el flujo de trabajo al cambiar la contraseña ([#6248](https://github.com/nocobase/nocobase/pull/6248)) por @mytharcher

### [v1.5.12](https://www.nocobase.com/en/blog/v1.5.12)

*Fecha de lanzamiento: 2025-02-21*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Ocultar el ID del nodo de la tarjeta de nodo en el lienzo del flujo de trabajo ([#6251](https://github.com/nocobase/nocobase/pull/6251)) por @mytharcher

#### 🐛 Corrección de errores

- **[Gestor de archivos]** Actualizar la versión de AWS SDK para corregir el error de subida a MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) por @mytharcher

### [v1.5.13](https://www.nocobase.com/en/blog/v1.5.13)

*Fecha de lanzamiento: 2025-02-22*

#### 🐛 Corrección de errores

- **[cliente]** Corregir archivo subido perdido cuando se hace uno por uno ([#6260](https://github.com/nocobase/nocobase/pull/6260)) por @mytharcher
- **[Flujo de trabajo: Evento previo a la acción]** Corregir mensaje de error del nodo de mensaje de respuesta no mostrado por @mytharcher

### [v1.5.14](https://www.nocobase.com/en/blog/v1.5.14)

*Fecha de lanzamiento: 2025-02-24*

#### 🐛 Corrección de errores

- **[Gestor de copias de seguridad]** El icono de eliminar del diálogo de operación de restaurar desde local no funciona por @gchust

### [v1.5.15](https://www.nocobase.com/en/blog/v1.5.15)

*Fecha de lanzamiento: 2025-02-24*

#### 🚀 Mejoras

- **[Gestor de archivos]**

  - Aumentar la longitud de la URL a 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) por @mytharcher
  - Los nombres de archivo durante la subida cambiarán de aleatorios al nombre original con un sufijo aleatorio. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) por @chenos
- **[Bloque: Panel de acciones]** Optimizar estilos móviles ([#6270](https://github.com/nocobase/nocobase/pull/6270)) por @zhangzhonghe

#### 🐛 Corrección de errores

- **[cli]** Mejorar la lógica interna del comando de actualización de nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) por @chenos

### [v1.5.16](https://www.nocobase.com/en/blog/v1.5.16)

*Fecha de lanzamiento: 2025-02-26*

#### 🚀 Mejoras

- **[Gestor de copias de seguridad]** Permitir restaurar una copia de seguridad en una aplicación incluso si le faltan algunos plugins por @gchust

#### 🐛 Corrección de errores

- **[cliente]** El componente de campo de texto enriquecido no se puede borrar por completo ([#6287](https://github.com/nocobase/nocobase/pull/6287)) por @katherinehhh
- **[Gestor de archivos]**

  - Corregir migración y añadir casos de prueba ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher
  - Corregir el tipo de columna `path` de la colección de archivos ([#6294](https://github.com/nocobase/nocobase/pull/6294)) por @mytharcher
  - Corregir migración y añadir casos de prueba ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.6.0-beta.11

*Fecha de lanzamiento: 2025-02-27*

#### 🎉 Nuevas funciones

* [Flujo de trabajo] Soporte para extender el grupo de instrucciones en el flujo de trabajo ([#6237](https://github.com/nocobase/nocobase/pull/6237)) por @mytharcher
  Referencia: [Extiende grupo de nodos](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)
* [Flujo de trabajo: Evento de acción personalizada] Soporte para activar el evento de acción personalizada de forma global o por lotes ([#272](https://github.com/nocobase/pro-plugins/pull/272)) por @mytharcher
* **[cliente]**

  * Soporte para la extensión de campos predefinidos en colecciones ([#6183](https://github.com/nocobase/nocobase/pull/6183)) por @katherinehhh
  * Soporte para extender operadores de filtro del frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) por @katherinehhh
  * Soporte para configurar la propiedad de descripción en el bloque ([#6015](https://github.com/nocobase/nocobase/pull/6015)) por @katherinehhh
  * Añadir schemaSetting para mostrar el nombre del archivo para los adjuntos ([#5995](https://github.com/nocobase/nocobase/pull/5995)) por @katherinehhh
* **[Calendario]** Soporte para la extensión de campos opcionales para los plugins de Kanban, Calendario y Campo de Fórmula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) por @katherinehhh
* **[Localización]** Localización para rutas de escritorio y móvil ([#6180](https://github.com/nocobase/nocobase/pull/6180)) por @2013xile
* **[Bloque: Panel de acciones]** Soporte para configurar el número de iconos por fila en el panel de acciones móvil ([#6046](https://github.com/nocobase/nocobase/pull/6046)) por @katherinehhh
* **[Cliente WEB]** Soporte para la configuración de permisos en pestañas de página y añadir página de gestión de rutas ([#5955](https://github.com/nocobase/nocobase/pull/5955)) por @zhangzhonghe
  Referencia: [Rutas](https://docs.nocobase.com/handbook/routes)
* **[Autenticación]** Soporte para la configuración de seguridad de tokens ([#5948](https://github.com/nocobase/nocobase/pull/5948)) por @sheldon66
  Referencia: [Política de seguridad de tokens](https://docs.nocobase.com/handbook/token-policy)
* **[Flujo de trabajo: Nodo manual]** Añadir columna de título de tarea en el bloque de tareas pendientes ([#6051](https://github.com/nocobase/nocobase/pull/6051)) por @mytharcher
* **[Variables y secretos]** Soporte para configurar variables de entorno dinámicas y secretos ([#5966](https://github.com/nocobase/nocobase/pull/5966)) por @katherinehhh

#### 🚀 Mejoras

* [Campo de colección: Markdown(Vditor)] CDN de Vditor usa recursos locales ([#6229](https://github.com/nocobase/nocobase/pull/6229)) por @chenos
* [Flujo de trabajo] Ocultar el ID del nodo de la tarjeta de nodo en el lienzo del flujo de trabajo ([#6251](https://github.com/nocobase/nocobase/pull/6251)) por @mytharcher
* **[cliente]** Expansión y mejora del centro personal del usuario ([#6213](https://github.com/nocobase/nocobase/pull/6213)) por @katherinehhh
* **[cliente]**

  * El título de la página usa por defecto el título de la ruta ([#6188](https://github.com/nocobase/nocobase/pull/6188)) por @zhangzhonghe
  * Añadir más iconos al IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) por @katherinehhh
* **[servidor]**

  * Mover AesEncryptor al núcleo ([#6132](https://github.com/nocobase/nocobase/pull/6132)) por @chenos
  * 1. Añadir middleware de servidor para extraer la dirección IP del cliente.
    2. Resolver problemas de recarga infinita cuando una IP está bloqueada.
    3. Añadir el encabezado HTTP `X-Forwarded-For` en el proxy para habilitar el reenvío para depuración local ([#6069](https://github.com/nocobase/nocobase/pull/6069)) por @sheldon66
* **[Flujo de trabajo]** Mover la configuración de vincular flujo de trabajo al plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) por @mytharcher
* **[Gestor de fuentes de datos]** Modificar la función de prueba de inicio de sesión para que sea asíncrona y actualizar los casos de prueba relevantes ([#6181](https://github.com/nocobase/nocobase/pull/6181)) por @sheldon66

#### 🐛 Corrección de errores

* [cliente]

  * No se puede abrir la ventana emergente del enlace del campo en la página incrustada ([#6222](https://github.com/nocobase/nocobase/pull/6222)) por @gchust
  * Al cerrar la subpágina, se activan múltiples solicitudes de datos de bloque ([#6233](https://github.com/nocobase/nocobase/pull/6233)) por @zhangzhonghe
  * Desajuste de formato del selector en el campo de formulario de filtro ([#6234](https://github.com/nocobase/nocobase/pull/6234)) por @katherinehhh
  * Falta clave única para el submenú de campos de asociación en la interfaz de usuario ([#6230](https://github.com/nocobase/nocobase/pull/6230)) por @gchust
  * Mostrar el componente `<Variable.TextArea />` correctamente en modo deshabilitado ([#6197](https://github.com/nocobase/nocobase/pull/6197)) por @mytharcher
  * Problema de barra de desplazamiento horizontal en la página ([#6232](https://github.com/nocobase/nocobase/pull/6232)) por @katherinehhh
  * Corregido el carácter de etiqueta html en el campo de entrada del formulario de configuración del canal de correo. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) por @sheldon66
  * Problema con la ventana emergente de acción de asociación de bloque de asociación en móvil ([#6235](https://github.com/nocobase/nocobase/pull/6235)) por @katherinehhh
  * Corregir archivos perdidos después de la subida ([#6247](https://github.com/nocobase/nocobase/pull/6247)) por @mytharcher
  * Omitir error de autenticación para CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) por @sheldon66
* [Flujo de trabajo: Nodo de bucle] Corregir salida del bucle antes de tiempo cuando el nodo está pendiente ([#6236](https://github.com/nocobase/nocobase/pull/6236)) por @mytharcher
* [Gestor de archivos] Actualizar la versión de AWS SDK para corregir el error de subida a MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) por @mytharcher
* [Móvil] Los datos del menú móvil están incompletos en la tabla de configuración de permisos ([#6219](https://github.com/nocobase/nocobase/pull/6219)) por @zhangzhonghe
* [Flujo de trabajo]

  * Corregir detalles de estilo en el lienzo del flujo de trabajo ([#6240](https://github.com/nocobase/nocobase/pull/6240)) por @mytharcher
  * Soporte para activar el flujo de trabajo al cambiar la contraseña ([#6248](https://github.com/nocobase/nocobase/pull/6248)) por @mytharcher
* [Visualización de datos] Error de filtrado cuando el nombre de la fuente de datos contiene un guion `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) por @2013xile
* [Flujo de trabajo: Evento previo a la acción] Corregir mensaje de error del nodo de mensaje de respuesta no mostrado ([#277](https://github.com/nocobase/pro-plugins/pull/277)) por @mytharcher
* **[cliente]** Corregir archivo subido perdido cuando se hace uno por uno ([#6260](https://github.com/nocobase/nocobase/pull/6260)) por @mytharcher
* **[cliente]** Corregir que la opción "Seleccionar de datos existentes" aún se muestra al deshabilitar "Permitir múltiples" en el subformulario de relación muchos-a-muchos ([#6167](https://github.com/nocobase/nocobase/pull/6167)) por @katherinehhh
* **[auth]** Actualizar la lógica del middleware de autenticación del cliente para evitar errores de actualización de token debido a concurrencia ([#6135](https://github.com/nocobase/nocobase/pull/6135)) por @sheldon66
* **[Cliente WEB]**

  * Permisos de enrutamiento anormales después de la actualización ([#6177](https://github.com/nocobase/nocobase/pull/6177)) por @zhangzhonghe
  * Eliminar el título de pestaña de página predeterminado ([#6178](https://github.com/nocobase/nocobase/pull/6178)) por @zhangzhonghe
* **[Gestor de fuentes de datos]** Usar loginWithJti para actualizar los casos de prueba relacionados con la autenticación y prevenir errores ([#6175](https://github.com/nocobase/nocobase/pull/6175)) por @sheldon66
* **[Gestor de múltiples aplicaciones]** Solo las sub-aplicaciones que comienzan con la aplicación principal se actualizan con ella ([#6133](https://github.com/nocobase/nocobase/pull/6133)) por @chenos
* **[Autenticación]** Actualizar las reglas de migración para tokens emitidos y la configuración de la política de tokens ([#6107](https://github.com/nocobase/nocobase/pull/6107)) por @sheldon66
* **[Flujo de trabajo]** Corregir el tipo de valor para el componente DatePicker ([#6039](https://github.com/nocobase/nocobase/pull/6039)) por @mytharcher

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costos. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubre NocoBase en 3 Minutos!

## 👇 Obtén NocoBase

[**Página principal**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
