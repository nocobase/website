---
title: "Actualizaciones semanales de NocoBase: optimización del plugin REST API"
description: "Las actualizaciones de esta semana incluyen: optimización del plugin REST API, soporte para habilitar plugins en lote desde la interfaz y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones pronto y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en las funciones más novedosas del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.52](https://www.nocobase.com/en/blog/v1.3.52)

*Fecha de lanzamiento: 2024-11-21*

### 🚀 Mejoras

- **[Flujo de trabajo]**

  - eliminar el límite de página en el nodo de consulta ([#5694](https://github.com/nocobase/nocobase/pull/5694)) por @mytharcher
  - cambiar para que las ejecuciones no se eliminen al eliminar el flujo de trabajo ([#5666](https://github.com/nocobase/nocobase/pull/5666)) por @mytharcher
- **[Fuente de datos: API REST]** Optimizar las descripciones de texto del plugin de API REST por @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.2](https://www.nocobase.com/en/blog/v1.4.0-beta.2)

*Fecha de lanzamiento: 2024-11-21*

### 🐛 Corrección de errores

- **[build]** Revertir la herramienta de compilación del cliente de `rspack` a `vite` para solucionar el problema por el cual el comando `yarn dev` reporta un error después de ejecutar el comando create-nocobase-app ([#5697](https://github.com/nocobase/nocobase/pull/5697)) por @gchust
- **[cliente]** Corregir el problema por el cual la columna fijada a la derecha no se alinea a la derecha cuando hay pocas columnas ([#5690](https://github.com/nocobase/nocobase/pull/5690)) por @katherinehhh
- **[Móvil]** Corregir el problema por el cual el modal 'Asignar valores de campo' queda oculto en la página de configuración móvil ([#5701](https://github.com/nocobase/nocobase/pull/5701)) por @zhangzhonghe

## [v1.4.0-beta.3](https://www.nocobase.com/en/blog/v1.4.0-beta.3)

*Fecha de lanzamiento: 2024-11-21*

### 🐛 Corrección de errores

- **[cliente]**

  - eliminar el botón "Sincronizar desde la base de datos" en la vista de colección de fuentes de datos externas ([#5696](https://github.com/nocobase/nocobase/pull/5696)) por @katherinehhh
  - añadir un valor de respaldo para valores no cadena usados en `Variable.TextArea` ([#5704](https://github.com/nocobase/nocobase/pull/5704)) por @mytharcher
- **[Calendario]** Corregir que los eventos no se muestren en el bloque de calendario cuando las fechas de inicio y fin abarcan varios meses ([#5699](https://github.com/nocobase/nocobase/pull/5699)) por @katherinehhh

## [v1.4.0-beta.5](https://www.nocobase.com/en/blog/v1.4.0-beta.5)

*Fecha de lanzamiento: 2024-11-24*

### 🐛 Corrección de errores

- **[cliente]**
  - Corregir el problema del ancho de la etiqueta para campos de asociación en diseños horizontales ([#5709](https://github.com/nocobase/nocobase/pull/5709)) por @katherinehhh
  - Corregir la vinculación de datos de asociación en subtablas anidadas dentro de subformularios de varias capas ([#5710](https://github.com/nocobase/nocobase/pull/5710)) por @katherinehhh
  - Corregir el problema del ancho de la etiqueta para campos de asociación en diseños horizontales ([#5709](https://github.com/nocobase/nocobase/pull/5709)) por @katherinehhh

## [v1.4.0-beta.6](https://www.nocobase.com/en/blog/v1.4.0-beta.6)

*Fecha de lanzamiento: 2024-11-26*

### 🚀 Mejoras

- **[cliente]** soportar la activación masiva de plugins en la interfaz ([#5730](https://github.com/nocobase/nocobase/pull/5730)) por @chenos

### 🐛 Corrección de errores

- **[cliente]** Corregir el problema del ancho mínimo de la etiqueta de subtabla en modo horizontal ([#5719](https://github.com/nocobase/nocobase/pull/5719)) por @katherinehhh

## [v1.4.0-beta.7](https://www.nocobase.com/en/blog/v1.4.0-beta.7)

*Fecha de lanzamiento: 2024-11-27*

### 🎉 Nuevas funciones

- **[Autenticación]** Permite añadir más campos de la colección de usuarios en el formulario de registro ([#5741](https://github.com/nocobase/nocobase/pull/5741)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]** Corregir que la etiqueta de la opción seleccionada no se cargue en la primera renderización. ([#5736](https://github.com/nocobase/nocobase/pull/5736)) por @sheldon66

## [v1.4.0-beta.8](https://www.nocobase.com/en/blog/v1.4.0-beta.8)

*Fecha de lanzamiento: 2024-11-27*

### 🐛 Corrección de errores

- **[Notificación: Mensaje en la aplicación]** Eliminar la lógica de truncamiento de cadenas del título del mensaje en la aplicación. ([#5728](https://github.com/nocobase/nocobase/pull/5728)) por @sheldon66

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.5](https://www.nocobase.com/en/blog/v1.5.0-alpha.5)

*Fecha de lanzamiento: 2024-11-23*

### 🐛 Corrección de errores

- **[build]** Corregir el problema de que ejecutar `yarn dev` después de create-nocobase-app resulta en un error ([#5708](https://github.com/nocobase/nocobase/pull/5708)) por @gchust

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtener NocoBase

[**Página principal**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
