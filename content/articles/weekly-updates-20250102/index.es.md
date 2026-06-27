---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana incluyen: optimización del flujo de trabajo, corrección de errores y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en las funciones más novedosas del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.16](https://www.nocobase.com/en/blog/v1.4.16)

*Fecha de lanzamiento: 2024-12-26*

#### 🐛 Corrección de errores

- **[cliente]** Corregir problema de conversión de precisión del campo UnixTimestamp ([#5931](https://github.com/nocobase/nocobase/pull/5931)) por @chenos
- **[Acción: Duplicar registro]** Corregir que el campo de asociación o2o no muestre el campo de colección destino configurado en bloques de detalle y formulario ([#5921](https://github.com/nocobase/nocobase/pull/5921)) por @katherinehhh
- **[Gestor de copias de seguridad]** Corregido error de copia de seguridad cuando la versión de mysqldump es inferior a 8 por @gchust

### [v1.4.17](https://www.nocobase.com/en/blog/v1.4.17)

*Fecha de lanzamiento: 2024-12-31*

#### 🎉 Nuevas funciones

- **[cliente]** Soporta el uso de la variable "Registros seleccionados de la tabla" en campos de array m2m ([#5974](https://github.com/nocobase/nocobase/pull/5974)) por @2013xile

#### 🚀 Mejoras

- **[indefinido]** Habilitar el plugin de tema por defecto ([#5957](https://github.com/nocobase/nocobase/pull/5957)) por @zhangzhonghe
- **[Fuente de datos: Principal]** Añadida validación de conflicto de nombres para evitar que los usuarios creen Colecciones con el mismo nombre que las Colecciones del sistema ([#5962](https://github.com/nocobase/nocobase/pull/5962)) por @chareice
- **[Flujo de trabajo]** Evitar el mal uso de variables de rango de fechas en la mayoría de lugares a menos que sea un componente de filtro ([#5954](https://github.com/nocobase/nocobase/pull/5954)) por @mytharcher

#### 🐛 Corrección de errores

- **[base de datos]**

  - Corregido un problema en la acción de destrucción donde filterByTk con el parámetro filter no podía eliminar datos ([#5976](https://github.com/nocobase/nocobase/pull/5976)) por @chareice
  - Los métodos firstOrCreate y updateOrCreate del repositorio pierden el contexto ([#5973](https://github.com/nocobase/nocobase/pull/5973)) por @chenos
- **[cliente]**

  - Corregir problema al añadir un campo de relación uno a uno en el formulario ([#5975](https://github.com/nocobase/nocobase/pull/5975)) por @katherinehhh
  - Corregir problema con la asignación de campos en subtabla al volver a seleccionar datos después de eliminar datos ([#5958](https://github.com/nocobase/nocobase/pull/5958)) por @katherinehhh
  - Corregir el error del bloque de tabla causado por datos que contienen campos llamados 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) por @zhangzhonghe
- **[Fuente de datos: Principal]** Corregir problemas de soporte heredado con el campo unixTimestamp. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) por @chareice
- **[Flujo de trabajo]** Corregir error del bloque de subdetalles en la configuración de UI del nodo manual ([#5953](https://github.com/nocobase/nocobase/pull/5953)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.18](https://www.nocobase.com/en/blog/v1.5.0-beta.18)

*Fecha de lanzamiento: 2024-12-27*

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir el problema de visualización inesperada de celdas de tabla en plugins de terceros ([#5934](https://github.com/nocobase/nocobase/pull/5934)) por @zhangzhonghe
  - Corregir el problema donde el botón de eliminar está deshabilitado en la página de gestión de plantillas de bloque ([#5922](https://github.com/nocobase/nocobase/pull/5922)) por @zhangzhonghe
- **[Verificación]** Corregir campos de formulario vacíos al abrir el cajón de edición en la página de configuración de Verificación ([#5949](https://github.com/nocobase/nocobase/pull/5949)) por @chenos
- **[Flujo de trabajo: Evento de acción personalizada]**

  - Corregir fallo de caso de prueba en SQLite por @mytharcher
  - Corregir casos de prueba del disparador de acción personalizada por @mytharcher
- **[Flujo de trabajo: Evento previo a la acción]** Corregir casos de prueba del interceptor de solicitudes por @mytharcher

### [v1.5.0-beta.19](https://www.nocobase.com/en/blog/v1.5.0-beta.19)

*Fecha de lanzamiento: 2024-12-31*

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir que el selector de rango de fechas en el formulario/acción de filtro no muestre el selector de hora cuando showTime está configurado ([#5956](https://github.com/nocobase/nocobase/pull/5956)) por @katherinehhh
  - Corregir el problema donde al hacer clic en campos de asociación no se abre el diálogo emergente ([#5972](https://github.com/nocobase/nocobase/pull/5972)) por @zhangzhonghe
- **[Flujo de trabajo: Mensaje de respuesta]** Corregir nombre de parámetro incorrecto usado por @mytharcher

### v1.5.0-beta.20

*Fecha de lanzamiento: 2024-12-31*

#### 🎉 Nuevas funciones

- **[[Acción: Importar registros(Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Mejora las capacidades de importación de datos con soporte para importaciones asíncronas, importación de millones de registros, identificación y procesamiento de datos duplicados, actualización de datos y disparadores de flujo de trabajo.
- **[[Acción: Exportar registros(Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Mejora las capacidades de exportación de datos con soporte para exportaciones asíncronas, exportación de millones de registros y exportación de archivos adjuntos.

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo e inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 Minutos!

## 👇 Obtener NocoBase

[**Página principal**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
