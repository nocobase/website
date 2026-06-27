---
title: "Actualizaciones semanales de NocoBase: Optimizar estilo móvil"
description: "Las actualizaciones de esta semana incluyen: optimizar estilo móvil, soporte para configurar formulario de registro, ajustar ancho de columna predeterminado en bloque de tabla, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Esta semana realizamos ajustes en el lanzamiento de versiones. Las actualizaciones posteriores incluirán tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en las funciones más novedosas del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.50-beta](https://www.nocobase.com/en/blog/v1.3.50-beta)

*Fecha de lanzamiento: 2024-11-14*

### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema que impedía borrar el título de la regla de vinculación durante la edición ([#5644](https://github.com/nocobase/nocobase/pull/5644)) por @katherinehhh
- **[Comentarios]** Se corrige que la configuración del ámbito de datos no funcionaba en el bloque de comentarios por @katherinehhh

## [v1.3.51](https://www.nocobase.com/en/blog/v1.3.51)

*Fecha de lanzamiento: 2024-11-19*

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrige que la comprobación de permisos de campo no se veía afectada por el contexto del campo de asociación ([#5672](https://github.com/nocobase/nocobase/pull/5672)) por @katherinehhh
  - Se corrige que la regla de vinculación guardaba cambios de valor vacío como valor vacío estático ([#5667](https://github.com/nocobase/nocobase/pull/5667)) por @katherinehhh
- **[Campo de colección: Muchos a muchos (array)]** Se corrige el problema de que recuperar registros en una colección asociada con campos muchos a muchos (array) causaba un error ([#5661](https://github.com/nocobase/nocobase/pull/5661)) por @2013xile
- **[Bloque: Gantt]** Se corrige que la plantilla del bloque Gantt llamaba incorrectamente al bloque de calendario al añadir ([#5673](https://github.com/nocobase/nocobase/pull/5673)) por @katherinehhh
- **[Visualización de datos]** Se corrige el problema de que las transformaciones de datos no funcionaban en la información sobre herramientas en gráficos de doble eje ([#5649](https://github.com/nocobase/nocobase/pull/5649)) por @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.9](https://www.nocobase.com/en/blog/v1.4.0-alpha.9)

*Fecha de lanzamiento: 2024-11-14*

### 🎉 Nuevas funciones

- **[Autenticación]** Permite configurar los campos de nombre de usuario y correo electrónico del formulario de registro ([#5639](https://github.com/nocobase/nocobase/pull/5639)) por @2013xile
- **[Flujo de trabajo]** Soporte para clave de unión en evento de colección ([#5627](https://github.com/nocobase/nocobase/pull/5627)) por @mytharcher

### 🚀 Mejoras

- **[cliente]** Ajusta el ancho de columna predeterminado a 100 en el bloque de tabla ([#5625](https://github.com/nocobase/nocobase/pull/5625)) por @katherinehhh
- **[Gestor de notificaciones]** Actualiza el icono de mensaje en la aplicación al icono de campana ([#5638](https://github.com/nocobase/nocobase/pull/5638)) por @sheldon66
- **[Bloque: Panel de acciones]** Añade soporte para la configuración de altura del bloque en el panel de acciones ([#5628](https://github.com/nocobase/nocobase/pull/5628)) por @katherinehhh
- **[Móvil]** Estilo: optimiza el estilo móvil: reduce el espaciado de campos y mejora la compacidad de la visualización de campos ([#5605](https://github.com/nocobase/nocobase/pull/5605)) por @katherinehhh

### 🐛 Corrección de errores

- **[compilación]** Se corrige el problema de que fallaba la compilación del plugin si contenía un archivo .less ([#5646](https://github.com/nocobase/nocobase/pull/5646)) por @gchust
- **[cliente]** Se corrige la alineación de la columna fija a la derecha en la tabla ([#5636](https://github.com/nocobase/nocobase/pull/5636)) por @katherinehhh
- **[Flujo de trabajo: Nodo de bucle]** Se corrige la comprobación de condición incorrecta en el nodo de bucle ([#5634](https://github.com/nocobase/nocobase/pull/5634)) por @mytharcher
- **[Gestor de notificaciones]** Se corrige que la plantilla no se compilaba en la API de notificaciones ([#5630](https://github.com/nocobase/nocobase/pull/5630)) por @mytharcher

## [v1.4.0-alpha.10](https://www.nocobase.com/en/blog/v1.4.0-alpha.10)

*Fecha de lanzamiento: 2024-11-14*

### 🚀 Mejoras

- **[cliente]** Ajusta algunas API del núcleo del cliente y corrige advertencias ([#5651](https://github.com/nocobase/nocobase/pull/5651)) por @mytharcher
- **[Móvil]** Reemplaza ciertos componentes con componentes móviles ([#5590](https://github.com/nocobase/nocobase/pull/5590)) por @katherinehhh

## [v1.4.0-alpha.11](https://www.nocobase.com/en/blog/v1.4.0-alpha.11)

*Fecha de lanzamiento: 2024-11-15*

### 🐛 Corrección de errores

- **[cliente]** Revierte la modificación de las props `openSize` en el botón de acción ([#5656](https://github.com/nocobase/nocobase/pull/5656)) por @mytharcher

## [v1.4.0-alpha.12](https://www.nocobase.com/en/blog/v1.4.0-alpha.12)

*Fecha de lanzamiento: 2024-11-16*

### 🐛 Corrección de errores

- **[cliente]**

  - Corrige la coincidencia de tipo de archivo cuando el archivo o la propiedad es nulo ([#5659](https://github.com/nocobase/nocobase/pull/5659)) por @mytharcher
  - Corrige que el recuento de paginación no se actualizaba después de eliminar datos en una subtabla ([#5648](https://github.com/nocobase/nocobase/pull/5648)) por @katherinehhh
- **[Flujo de trabajo]** Corrige que el nodo desaparecía después de añadir una condición sin una rama antes ([#5658](https://github.com/nocobase/nocobase/pull/5658)) por @mytharcher
- **[Móvil]** Problema de estilo al usar texto largo como campo de título en un campo de asociación ([#5655](https://github.com/nocobase/nocobase/pull/5655)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Corrige el error al usar el campo URL de archivo adjunto con fuente de datos externa por @katherinehhh

## [v1.4.0-alpha.13](https://www.nocobase.com/en/blog/v1.4.0-alpha.13)

*Fecha de lanzamiento: 2024-11-16*

### 🐛 Corrección de errores

- **[Móvil]** Corrección: usa componentes de escritorio para seleccionar en modo de configuración móvil y corrige el error al usar variables como valores predeterminados en datePicker ([#5662](https://github.com/nocobase/nocobase/pull/5662)) por @katherinehhh

## [v1.4.0-alpha.14](https://www.nocobase.com/en/blog/v1.4.0-alpha.14)

*Fecha de lanzamiento: 2024-11-17*

### 🐛 Corrección de errores

- **[Móvil]** Corrige la asignación de campos para soportar el valor de variable como 0 ([#5663](https://github.com/nocobase/nocobase/pull/5663)) por @katherinehhh

## [v1.4.0-alpha.16](https://www.nocobase.com/en/blog/v1.4.0-alpha.16)

*Fecha de lanzamiento: 2024-11-18*

### 🐛 Corrección de errores

- **[compilación]** Corrige el problema de que yarn dev reportaba un error cuando ya había plugins compilados en el sistema ([#5671](https://github.com/nocobase/nocobase/pull/5671)) por @gchust
- **[Móvil]** Corrección: problema de estilo en móvil cuando la subtabla está configurada para permitir solo seleccionar datos ([#5670](https://github.com/nocobase/nocobase/pull/5670)) por @katherinehhh

## [v1.4.0-alpha.17](https://www.nocobase.com/en/blog/v1.4.0-alpha.17)

*Fecha de lanzamiento: 2024-11-19*

### 🚀 Mejoras

- **[Flujo de trabajo]** Soporte para registrar variables del sistema en el cliente ([#5676](https://github.com/nocobase/nocobase/pull/5676)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Se corrige que la comprobación de permisos de campo no se veía afectada por el contexto del campo de asociación ([#5672](https://github.com/nocobase/nocobase/pull/5672)) por @katherinehhh
- **[Bloque: Gantt]** Se corrige que la plantilla del bloque Gantt llamaba incorrectamente al bloque de calendario al añadir ([#5673](https://github.com/nocobase/nocobase/pull/5673)) por @katherinehhh
- **[Calendario]** Se corrige la falta de opciones de campo de fecha con y sin zona horaria en el bloque de calendario ([#5674](https://github.com/nocobase/nocobase/pull/5674)) por @katherinehhh

## [v1.4.0-beta.1](https://www.nocobase.com/en/blog/v1.4.0-beta.1)

*Fecha de lanzamiento: 2024-11-19*

### 🚀 Mejoras

- **[Móvil]** Soporte para la propiedad dinámica `hidden` del componente `Tabs.TabPan` para controlar el renderizado ([#5687](https://github.com/nocobase/nocobase/pull/5687)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige el borrado del valor de entrada de fecha al cambiar de operador en el botón de filtro y al enviar el campo de fecha ([#5684](https://github.com/nocobase/nocobase/pull/5684)) por @katherinehhh
  - Se corrige que la condición de la regla de vinculación con variable de fecha no funcionaba ([#5675](https://github.com/nocobase/nocobase/pull/5675)) por @katherinehhh

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.1](https://www.nocobase.com/en/blog/v1.5.0-alpha.1)

*Fecha de lanzamiento: 2024-11-19*

### 🎉 Nuevas funciones

- **[Adaptador Redis pub sub]** Añade el plugin adaptador de sincronización Redis por @mytharcher

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evita años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubre NocoBase en 3 Minutos!

## 👇 Obtén NocoBase

[**Página web**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
