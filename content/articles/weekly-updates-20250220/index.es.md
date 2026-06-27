---
title: "Actualizaciones semanales de NocoBase: Soporte para activar eventos de acciones personalizadas de forma global o por lotes"
description: "Las actualizaciones de esta semana incluyen: soporte para activar acciones personalizadas de forma global o por lotes, extensión de campos predefinidos en colecciones y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en las funciones más novedosas del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.7](https://www.nocobase.com/en/blog/v1.5.7)

*Fecha de lanzamiento: 2025-02-14*

#### 🚀 Mejoras

- **[Notificación: Mensaje en la aplicación]** Eliminar el registro de errores en la consola para los reintentos de conexión SSE. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) por @sheldon66

#### 🐛 Corrección de errores

- **[cliente]**

  - Falta la configuración de arrastrar en el modal de operación de creación rápida de datos relacionados ([#6201](https://github.com/nocobase/nocobase/pull/6201)) por @katherinehhh
  - Problema con el formato de números de alta precisión que no se aplica ([#6202](https://github.com/nocobase/nocobase/pull/6202)) por @katherinehhh
  - Corregir un problema donde al limpiar un campo de asociación en un formulario no se limpia realmente el valor del campo al enviar el formulario ([#5540](https://github.com/nocobase/nocobase/pull/5540)) por @zhangzhonghe
  - El bloque no se actualiza después de enviar el formulario ([#6206](https://github.com/nocobase/nocobase/pull/6206)) por @zhangzhonghe
  - El valor del campo vinculado persiste al enviar después de restablecer el campo de relación ([#6207](https://github.com/nocobase/nocobase/pull/6207)) por @katherinehhh
  - La acción de actualización se muestra para filas sin permisos de actualización en la tabla ([#6204](https://github.com/nocobase/nocobase/pull/6204)) por @katherinehhh
- **[Campo de colección: Orden]** Corregir el tipo de campo de orden no registrado en la fuente de datos externa ([#6212](https://github.com/nocobase/nocobase/pull/6212)) por @mytharcher
- **[Autenticación]** Problema de autenticación WebSocket ([#6209](https://github.com/nocobase/nocobase/pull/6209)) por @2013xile
- **[Campo de colección: Adjunto (URL)]** Corregir la URL de solicitud obsoleta en el hook por @mytharcher

### [v1.5.8](https://www.nocobase.com/en/blog/v1.5.8)

*Fecha de lanzamiento: 2025-02-17*

#### 🐛 Corrección de errores

- **[cliente]**

  - No se puede abrir el popup del enlace del campo en una página incrustada ([#6222](https://github.com/nocobase/nocobase/pull/6222)) por @gchust
  - En el formulario de edición, el valor del campo de asociación mostrado no cambia cuando el campo asociado se actualiza ([#6210](https://github.com/nocobase/nocobase/pull/6210)) por @Cyx649312038
- **[Móvil]** Los datos del menú móvil están incompletos en la tabla de configuración de permisos ([#6219](https://github.com/nocobase/nocobase/pull/6219)) por @zhangzhonghe

### [v1.5.9](https://www.nocobase.com/en/blog/v1.5.9)

*Fecha de lanzamiento: 2025-02-17*

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema de barra de desplazamiento horizontal en la página ([#6232](https://github.com/nocobase/nocobase/pull/6232)) por @katherinehhh
  - Al cerrar la subpágina, se activan múltiples solicitudes de datos del bloque ([#6233](https://github.com/nocobase/nocobase/pull/6233)) por @zhangzhonghe
  - Falta la clave única para el submenú de campos de asociación en la interfaz de usuario ([#6230](https://github.com/nocobase/nocobase/pull/6230)) por @gchust
- **[Visualización de datos]** Se produce un error de filtrado cuando el nombre de la fuente de datos contiene un guion `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) por @2013xile

### [v1.5.10](https://www.nocobase.com/en/blog/v1.5.10)

*Fecha de lanzamiento: 2025-02-18*

#### 🚀 Mejoras

- **[Campo de colección: Markdown (Vditor)]** Vditor CDN usa recursos locales ([#6229](https://github.com/nocobase/nocobase/pull/6229)) por @chenos

#### 🐛 Corrección de errores

- **[Flujo de trabajo: Nodo de bucle]** Corregir la salida del bucle antes de tiempo cuando el nodo interno está pendiente ([#6236](https://github.com/nocobase/nocobase/pull/6236)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.7](https://www.nocobase.com/en/blog/v1.6.0-beta.7)

*Fecha de lanzamiento: 2025-02-14*

#### 🐛 Corrección de errores

- **[Autenticación]** Mejorar la lógica de actualización concurrente de tokens y manejo de errores de autenticación. ([#6208](https://github.com/nocobase/nocobase/pull/6208)) por @sheldon66

### [v1.6.0-beta.8](https://www.nocobase.com/en/blog/v1.6.0-beta.8)

*Fecha de lanzamiento: 2025-02-15*

#### 🐛 Corrección de errores

- **[WeCom]** Problema de inicio de sesión automático en el cliente WeCom por @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.26](https://www.nocobase.com/en/blog/v1.6.0-alpha.26)

*Fecha de lanzamiento: 2025-02-16*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para extender operadores de filtro del frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Soporte para activar el evento de acción personalizada de forma global o por lotes por @mytharcher

#### 🚀 Mejoras

- **[Flujo de trabajo]** Mover la configuración de vincular flujo de trabajo al plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) por @mytharcher

### [v1.6.0-alpha.27](https://www.nocobase.com/en/blog/v1.6.0-alpha.27)

*Fecha de lanzamiento: 2025-02-16*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para la extensión de campos predefinidos en colecciones ([#6183](https://github.com/nocobase/nocobase/pull/6183)) por @katherinehhh
- **[Calendario]** Soporte para la extensión de campos opcionales para los plugins de Kanban, Calendario y Campo de Fórmula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) por @katherinehhh

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costos. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtener NocoBase

[**Página de inicio**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
