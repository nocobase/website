---
title: "Actualizaciones semanales de NocoBase: Mejora de rendimiento"
description: "Las actualizaciones de esta semana incluyen: Optimización del panel de acciones y componentes de formularios públicos para adaptación móvil, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.3](https://www.nocobase.com/en/blog/v1.4.3)

*Fecha de lanzamiento: 2024-12-05*

#### 🚀 Mejoras

- **[test]** Permitir iniciar sesión con nombre de rol en casos de prueba ([#5794](https://github.com/nocobase/nocobase/pull/5794)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Actualizar títulos para URLs de detalle en formularios de mensajes en la aplicación y archivos de localización ([#5742](https://github.com/nocobase/nocobase/pull/5742)) por @sheldon66

#### 🐛 Correcciones de errores

- **[cliente]**
  - Corregir el problema donde el token no se limpia después de que un usuario sin rol encuentra un error de inicio de sesión y hace clic en el botón "Iniciar sesión con otra cuenta" ([#5790](https://github.com/nocobase/nocobase/pull/5790)) por @2013xile
  - Pérdida de cabeceras de solicitud en solicitudes silenciosas ([#5795](https://github.com/nocobase/nocobase/pull/5795)) por @chenos
  - Página en blanco cuando el usuario no tiene rol ([#5797](https://github.com/nocobase/nocobase/pull/5797)) por @chenos
  - Corregir problema de barra de desplazamiento en subtabla con tamaño pequeño bajo tema compacto ([#5796](https://github.com/nocobase/nocobase/pull/5796)) por @katherinehhh

### [v1.4.4](https://www.nocobase.com/en/blog/v1.4.4)

*Fecha de lanzamiento: 2024-12-08*

#### 🐛 Correcciones de errores

- **[cliente]**

  - Corregir problema con campos de fuente de datos externa que no se muestran en el bloque de tabla ([#5825](https://github.com/nocobase/nocobase/pull/5825)) por @katherinehhh
  - Corregir problema de visualización para campos heredados en la configuración del formulario ([#5822](https://github.com/nocobase/nocobase/pull/5822)) por @katherinehhh
  - Corregir que los campos heredados no aparecen en la lista de campos y no se pueden sobrescribir ([#5800](https://github.com/nocobase/nocobase/pull/5800)) por @katherinehhh
- **[Visualización de datos]** Corregir el problema al formatear campos de fecha con zona horaria en MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) por @2013xile
- **[Flujo de trabajo]**

  - Corregir transacción entre fuentes de datos que causa error en evento de colección ([#5818](https://github.com/nocobase/nocobase/pull/5818)) por @mytharcher
  - Corregir tipo de fecha omitido en la configuración de programación basada en campo de fecha ([#5816](https://github.com/nocobase/nocobase/pull/5816)) por @mytharcher
- **[Campo de colección: Muchos a muchos (array)]** Corregir el problema donde la actualización de campos de array m2m en colección de relación única no tiene efecto ([#5820](https://github.com/nocobase/nocobase/pull/5820)) por @2013xile
- **[Calendario]**

  - Corregir error al hacer clic en una fecha en blanco en el calendario ([#5803](https://github.com/nocobase/nocobase/pull/5803)) por @katherinehhh
  - Corregir el problema donde cerrar una ventana emergente abierta a través del 'Bloque de Calendario' causa que todas las ventanas emergentes se cierren ([#5793](https://github.com/nocobase/nocobase/pull/5793)) por @zhangzhonghe
- **[Formularios públicos]** Corregir ruta de escaneo de código QC incorrecta en formulario público de subaplicación ([#5799](https://github.com/nocobase/nocobase/pull/5799)) por @katherinehhh

### [v1.4.5](https://www.nocobase.com/en/blog/v1.4.5)

*Fecha de lanzamiento: 2024-12-08*

#### 🐛 Correcciones de errores

- **[Control de acceso]** Refrescar la página cuando el rol del usuario es incorrecto ([#5821](https://github.com/nocobase/nocobase/pull/5821)) por @chenos

### [v1.4.6](https://www.nocobase.com/en/blog/v1.4.6)

*Fecha de lanzamiento: 2024-12-08*

#### 🐛 Correcciones de errores

- **[Acción: Importar registros]** corregir importación de datos con tabla en asociaciones ([#5833](https://github.com/nocobase/nocobase/pull/5833)) por @chareice
- **[Control de acceso]** Corregir el problema de usar campos para consultar la relación en el ACL ([#5832](https://github.com/nocobase/nocobase/pull/5832)) por @chareice

### [v1.4.7](https://www.nocobase.com/en/blog/v1.4.7)

*Fecha de lanzamiento: 2024-12-09*

#### 🐛 Correcciones de errores

- **[Móvil]** Corregir problema de visualización de color de fondo en móvil ([#5809](https://github.com/nocobase/nocobase/pull/5809)) por @katherinehhh

### [v1.4.8](https://www.nocobase.com/en/blog/v1.4.8)

*Fecha de lanzamiento: 2024-12-10*

#### 🐛 Correcciones de errores

- **[cliente]**

  - Corregir problema de plantilla de datos en formulario de filtro configurado en selector de registro de campo de asociación ([#5837](https://github.com/nocobase/nocobase/pull/5837)) por @katherinehhh
  - Corregir problema con plantillas de cadena Markdown que no cargan datos de datos de asociación (Fuente de datos externa) ([#5791](https://github.com/nocobase/nocobase/pull/5791)) por @katherinehhh
- **[Sincronización de datos de usuario]** Omitir tipos de datos no soportados durante la sincronización en lugar de lanzar un error. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) por @chenzhizdt
- **[Gestor de copias de seguridad]**

  - Corregida la ventana de descarga lenta para archivos de copia de seguridad grandes por @gchust
  - Corregido el problema donde restaurar una copia de seguridad de subaplicación causa que todas las aplicaciones se reinicien por @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.2](https://www.nocobase.com/en/blog/v1.5.0-beta.2)

*Fecha de lanzamiento: 2024-12-06*

#### 🚀 Mejoras

- **[cliente]** Optimizar la lógica recursiva en useMenuSearch para mejor rendimiento ([#5784](https://github.com/nocobase/nocobase/pull/5784)) por @katherinehhh
- **[Formularios públicos]** Optimizar el panel de acciones y los componentes de formulario público para adaptación móvil ([#5788](https://github.com/nocobase/nocobase/pull/5788)) por @katherinehhh

### [v1.5.0-beta.3](https://www.nocobase.com/en/blog/v1.5.0-beta.3)

*Fecha de lanzamiento: 2024-12-10*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para configurar texto, icono y tipo para botones de añadir y seleccionar en subtabla ([#5778](https://github.com/nocobase/nocobase/pull/5778)) por @katherinehhh
- **[Calendario]** El plugin de calendario añade modo de apertura de eventos ([#5808](https://github.com/nocobase/nocobase/pull/5808)) por @Cyx649312038

### [v1.5.0-beta.4](https://www.nocobase.com/en/blog/v1.5.0-beta.4)

*Fecha de lanzamiento: 2024-12-11*

#### 🐛 Correcciones de errores

- **[Móvil]** Corregir adaptación móvil del componente de fecha en subpágina ([#5859](https://github.com/nocobase/nocobase/pull/5859)) por @katherinehhh

### [v1.5.0-beta.6](https://www.nocobase.com/en/blog/v1.5.0-beta.6)

*Fecha de lanzamiento: 2024-12-11*

#### 🚀 Mejoras

- **[cliente]** Eliminar componente de esqueleto de fila de tabla ([#5751](https://github.com/nocobase/nocobase/pull/5751)) por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.3](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Fecha de lanzamiento: 2024-12-09*

#### 🚀 Mejoras

- **[cliente]** Eliminar componentes de Formily de la tabla para mejorar el rendimiento al cambiar la paginación de la tabla ([#5738](https://github.com/nocobase/nocobase/pull/5738)) por @zhangzhonghe

#### 🐛 Correcciones de errores

- **[cliente]**

  - Corregir el problema donde los campos no se muestran después de añadirlos en un subformulario ([#5827](https://github.com/nocobase/nocobase/pull/5827)) por @zhangzhonghe
  - Corregir el problema donde cambiar el valor de un campo de asociación en el bloque de detalles no se actualiza inmediatamente ([#5826](https://github.com/nocobase/nocobase/pull/5826)) por @zhangzhonghe
  - Corregir el problema donde hacer clic en enlaces no abre una ventana emergente cuando 'Habilitar enlace' está activado por primera vez ([#5812](https://github.com/nocobase/nocobase/pull/5812)) por @zhangzhonghe
  - Prevenir múltiples llamadas API al cerrar la ventana emergente ([#5804](https://github.com/nocobase/nocobase/pull/5804)) por @zhangzhonghe
  - Corregir el problema donde el inicio de sesión móvil redirige a la página de escritorio ([#5805](https://github.com/nocobase/nocobase/pull/5805)) por @zhangzhonghe
  - Corregir que el botón de configurar acción debe estar alineado a la izquierda ([#5798](https://github.com/nocobase/nocobase/pull/5798)) por @katherinehhh
- **[build]** Corregido el almacenamiento en caché incorrecto de archivos js del frontend después de la compilación del plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) por @gchust

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costos. Evite años de desarrollo e inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 Minutos!

## 👇 Obtenga NocoBase

[**Página de inicio**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
