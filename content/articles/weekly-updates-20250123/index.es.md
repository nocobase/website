---
title: "Actualizaciones semanales de NocoBase: Mejora de la extensibilidad del almacenamiento de archivos"
description: "Las actualizaciones de esta semana incluyen: mejora de la extensibilidad del almacenamiento de archivos, corrección de errores y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en las funciones más novedosas del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.25](https://www.nocobase.com/en/blog/v1.4.25)

*Fecha de lanzamiento: 2025-01-16*

#### 🚀 Mejoras

- **[cliente]** Mejorar la extensibilidad del almacenamiento de archivos ([#6071](https://github.com/nocobase/nocobase/pull/6071)) por @chenos
- **[Flujo de trabajo]** Corregir el componente de campo repetido en la configuración de programación ([#6067](https://github.com/nocobase/nocobase/pull/6067)) por @mytharcher

#### 🐛 Correcciones de errores

- **[Móvil]** Corregir el problema de que los botones inferiores quedan ocultos en dispositivos móviles ([#6068](https://github.com/nocobase/nocobase/pull/6068)) por @zhangzhonghe
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el contexto para la colección http por @mytharcher
- **[Gestor de copias de seguridad]** Corregido un posible error de copia de seguridad cuando el plugin collection-fdw no está habilitado por @gchust
- **[Departamentos]** Corregir que el evento de acción personalizada no se pueda activar en la colección de departamentos por @mytharcher

### [v1.4.26](https://www.nocobase.com/en/blog/v1.4.26)

*Fecha de lanzamiento: 2025-01-16*

#### 🚀 Mejoras

- **[cliente]** Permite añadir descripciones para colecciones SQL ([#6081](https://github.com/nocobase/nocobase/pull/6081)) por @2013xile
- **[resourcer]** Permitir objeto vacío como valores en la acción ([#6070](https://github.com/nocobase/nocobase/pull/6070)) por @mytharcher

#### 🐛 Correcciones de errores

- **[Localización]** Evitar solicitud API al intentar eliminar una traducción vacía ([#6078](https://github.com/nocobase/nocobase/pull/6078)) por @2013xile

### [v1.4.27](https://www.nocobase.com/en/blog/v1.4.27)

*Fecha de lanzamiento: 2025-01-18*

#### 🐛 Correcciones de errores

- **[cliente]** Corregir el problema de que los datos del bloque están vacíos en la ventana emergente de la página incrustada ([#6086](https://github.com/nocobase/nocobase/pull/6086)) por @zhangzhonghe
- **[Flujo de trabajo]** Corregir que el envío no se procesa en la fase de preparación ([#6087](https://github.com/nocobase/nocobase/pull/6087)) por @mytharcher

### [v1.4.28](https://www.nocobase.com/en/blog/v1.4.28)

*Fecha de lanzamiento: 2025-01-21*

#### 🐛 Correcciones de errores

- **[cliente]** El valor predeterminado del campo de asociación no se ha actualizado ([#6103](https://github.com/nocobase/nocobase/pull/6103)) por @chenos
- **[Acción: Edición por lotes]** Eliminar la plantilla de datos del formulario de la configuración del formulario de acción de edición por lotes ([#6098](https://github.com/nocobase/nocobase/pull/6098)) por @katherinehhh
- **[Verificación]** Corregir que el ID del proveedor se pudiera editar ([#6097](https://github.com/nocobase/nocobase/pull/6097)) por @mytharcher

### [v1.4.29](https://www.nocobase.com/en/blog/v1.4.29)

*Fecha de lanzamiento: 2025-01-21*

#### 🎉 Nuevas funciones

- **[Bloque: Panel de acciones]** Soporte para configurar el número de iconos por fila en el panel de acciones móvil ([#6106](https://github.com/nocobase/nocobase/pull/6106)) por @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.29](https://www.nocobase.com/en/blog/v1.5.0-beta.29)

*Fecha de lanzamiento: 2025-01-16*

#### 🚀 Mejoras

- **[Gestor de copias de seguridad]** Mejorados los mensajes de error para fallos de restauración por @gchust

### [v1.5.0-beta.30](https://www.nocobase.com/en/blog/v1.5.0-beta.30)

*Fecha de lanzamiento: 2025-01-16*

#### 🐛 Correcciones de errores

- **[cliente]** Corregir el problema de que los valores predeterminados para los campos de asociación no surten efecto en el modo de lectura fácil ([#6066](https://github.com/nocobase/nocobase/pull/6066)) por @zhangzhonghe

### [v1.5.0-beta.31](https://www.nocobase.com/en/blog/v1.5.0-beta.31)

*Fecha de lanzamiento: 2025-01-17*

#### 🐛 Correcciones de errores

- **[Sincronización de datos de usuario]** Corregir el problema de que el botón "reintentar" no se muestra en la lista de tareas ([#6079](https://github.com/nocobase/nocobase/pull/6079)) por @2013xile

### [v1.5.0-beta.32](https://www.nocobase.com/en/blog/v1.5.0-beta.32)

*Fecha de lanzamiento: 2025-01-17*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Cambiar el nombre de la API a uno más razonable ([#6082](https://github.com/nocobase/nocobase/pull/6082)) por @mytharcher

### [v1.5.0-beta.33](https://www.nocobase.com/en/blog/v1.5.0-beta.33)

*Fecha de lanzamiento: 2025-01-21*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo]** Añadir configuración de límite de pila para flujos de trabajo ([#6077](https://github.com/nocobase/nocobase/pull/6077)) por @citlalinda

#### 🚀 Mejoras

- **[Flujo de trabajo: Nodo de bucle]** Corregir estilos ([#6095](https://github.com/nocobase/nocobase/pull/6095)) por @mytharcher
- **[Gestor de archivos]** Soporte para otros plugins de almacenamiento ([#6096](https://github.com/nocobase/nocobase/pull/6096)) por @jiannx
  Referencia: [Almacenamiento de archivos: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Flujo de trabajo: kit de prueba]** Ajustar el estilo del lienzo del flujo de trabajo para que el contenido sea más compacto ([#6088](https://github.com/nocobase/nocobase/pull/6088)) por @mytharcher
- **[Flujo de trabajo: Nodo de consulta JSON]** Añadir icono a los nodos por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.15](https://www.nocobase.com/en/blog/v1.6.0-alpha.15)

*Fecha de lanzamiento: 2025-01-19*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para configurar la propiedad de descripción en el bloque ([#6015](https://github.com/nocobase/nocobase/pull/6015)) por @katherinehhh
- **[Autenticación]** Soporte para configuración de seguridad de tokens. ([#5948](https://github.com/nocobase/nocobase/pull/5948)) por @sheldon66
  Referencia: [Política de seguridad de tokens](https://docs.nocobase.com/handbook/token-policy)
- **[Flujo de trabajo: Nodo manual]** Añadir columna de título de tarea en el bloque de tareas pendientes ([#6051](https://github.com/nocobase/nocobase/pull/6051)) por @mytharcher

#### 🚀 Mejoras

- **[Flujo de trabajo: Evento de acción personalizada]** Cambiar la API de ejecución manual por @mytharcher

### [v1.6.0-alpha.16](https://www.nocobase.com/en/blog/v1.6.0-alpha.16)

*Fecha de lanzamiento: 2025-01-19*

#### 🎉 Nuevas funciones

- **[Bloque: Panel de acciones]** Soporte para configurar el número de iconos por fila en el panel de acciones móvil ([#6046](https://github.com/nocobase/nocobase/pull/6046)) por @katherinehhh

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtener NocoBase

[**Página principal**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
