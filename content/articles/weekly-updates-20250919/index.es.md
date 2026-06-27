---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana incluyen: soporte para visualización de mapeo de locales en encabezados de calendario, corrección de errores y más."
---

Resume los registros de actualización semanales del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.25](https://www.nocobase.com/en/blog/v1.8.25)

*Fecha de lanzamiento: 2025-09-17*

#### 🚀 Mejoras

- **[auth]** Soporte para usar `.` en nombres de usuario ([#7504](https://github.com/nocobase/nocobase/pull/7504)) por @2013xile

#### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema donde la ventana emergente de configuración del icono del botón quedaba cubierta/superpuesta ([#7506](https://github.com/nocobase/nocobase/pull/7506)) por @zhangzhonghe
- **[Impresión de plantilla]** soporte para el campo chinaRegions por @jiannx

### [v1.8.24](https://www.nocobase.com/en/blog/v1.8.24)

*Fecha de lanzamiento: 2025-09-13*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Soporte para volver a cualquier nodo en el proceso de aprobación por @mytharcher

#### 🚀 Mejoras

- **[servidor]** Usar el registrador estándar del sistema para la cola de mensajes ([#7480](https://github.com/nocobase/nocobase/pull/7480)) por @mytharcher
- **[cliente]** Eliminar el popover de puntos suspensivos de la lista de archivos ([#7479](https://github.com/nocobase/nocobase/pull/7479)) por @mytharcher
- **[Flujo de trabajo]** Optimizar el proceso de preparación del flujo de trabajo para soportar el uso de datos de nodo precargados ([#7476](https://github.com/nocobase/nocobase/pull/7476)) por @mytharcher
- **[Editor de temas]** Añadir soporte para personalización del color del menú lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu
- **[Adaptador de cola Redis]** Usar el registrador estándar del sistema para el adaptador de cola de mensajes Redis por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Se corrige el problema donde el componente Popover quedaba superpuesto/cubierto ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe
  - comprobación incorrecta de 'no vacío' para campos numéricos en reglas de vinculación ([#7477](https://github.com/nocobase/nocobase/pull/7477)) por @katherinehhh
  - select/multiselect/date/richtext en modo solo lectura seguían siendo editables en formularios públicos ([#7484](https://github.com/nocobase/nocobase/pull/7484)) por @katherinehhh
- **[Flujo de trabajo]** Se corrige un posible error relacionado con el almacenamiento en caché de registros del flujo de trabajo ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher
- **[Cifrado de solicitudes HTTP]** Se corrige el problema donde los parámetros de solicitud no soportaban el tipo nativo URLSearchParams por @mytharcher
- **[Fuente de datos: API REST]** corregir las reglas de validación de URL de la API REST por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Se corrige el problema donde el texto de estado en la notificación de finalización de aprobación no estaba traducido por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.15](https://www.nocobase.com/en/blog/v1.9.0-alpha.15)

*Fecha de lanzamiento: 2025-09-17*

#### 🚀 Mejoras

- **[auth]** Soporte para usar `.` en nombres de usuario ([#7504](https://github.com/nocobase/nocobase/pull/7504)) por @2013xile
- **[servidor]** Usar el registrador estándar del sistema para la cola de mensajes ([#7480](https://github.com/nocobase/nocobase/pull/7480)) por @mytharcher
- **[snowflake-id]** Cambiar los IDs de las tablas del sistema con claves primarias autoincrementales pero sin identificadores únicos a IDs de 53 bits tipo Snowflake ([#7465](https://github.com/nocobase/nocobase/pull/7465)) por @2013xile
- **[Calendario]** soporte para visualización de asignación de configuración regional en los encabezados del calendario ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh
- **[Flujo de trabajo: Nodo manual]** Soporte para ver y reanudar tareas manuales pendientes dentro de flujos de trabajo deshabilitados ([#7493](https://github.com/nocobase/nocobase/pull/7493)) por @mytharcher
- **[Editor de temas]** Añadir soporte para personalización del color del menú lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu
- **[Adaptador de cola Redis]** Usar el registrador estándar del sistema para el adaptador de cola de mensajes Redis por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Se corrige el problema donde la ventana emergente de configuración del icono del botón quedaba cubierta/superpuesta ([#7506](https://github.com/nocobase/nocobase/pull/7506)) por @zhangzhonghe
  - Se corrige el problema donde el componente Popover quedaba superpuesto/cubierto ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe
  - select/multiselect/date/richtext en modo solo lectura seguían siendo editables en formularios públicos ([#7484](https://github.com/nocobase/nocobase/pull/7484)) por @katherinehhh
- **[Flujo de trabajo]**

  - Se corrige el problema donde una lógica de suscripción incorrecta en la cola de tareas en segundo plano del flujo de trabajo provocaba que el mensaje de ejecución se manejara incorrectamente ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher
  - Se corrige un posible error relacionado con el almacenamiento en caché de registros del flujo de trabajo ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Se corrige el problema de análisis incorrecto del enlace de notificación ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher
- **[Fuente de datos: API REST]** corregir las reglas de validación de URL de la API REST por @katherinehhh
- **[Cifrado de solicitudes HTTP]** Se corrige el problema donde los parámetros de solicitud no soportaban el tipo nativo URLSearchParams por @mytharcher
- **[Impresión de plantilla]** soporte para el campo chinaRegions por @jiannx
- **[Gestor de correo electrónico]** Se corrige el problema del asunto basura por @jiannx
