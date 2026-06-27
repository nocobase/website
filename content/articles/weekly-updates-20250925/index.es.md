---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: soporte para rotar imágenes durante la vista previa, adición de soporte de localización para tooltips y títulos de elementos de grupo, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.26](https://www.nocobase.com/en/blog/v1.8.26)

*Fecha de lanzamiento: 2025-09-20*

#### 🚀 Mejoras

- **[cliente]** Añadir soporte de localización para tooltip y título de elemento de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh
- **[Calendario]** Soporte para visualización de mapeo de locale en encabezados de calendario ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh

#### 🐛 Corrección de errores

- **[cliente]** Corregir el problema donde el popover de configuración del icono del menú está siendo ocultado ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe
- **[Notificación: Mensaje en la aplicación]**

  - Corregir el problema de análisis incorrecto del enlace de notificación ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher
  - Corregir el problema donde los mensajes recientes no se muestran al abrir el popup de notificaciones ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher
- **[Flujo de trabajo]** Corregir el problema donde la lógica de suscripción incorrecta en la cola de tareas en segundo plano del flujo de trabajo causaba que el mensaje de ejecución se manejara incorrectamente ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema donde ocurría un error al eliminar datos de una fuente de datos externa por @mytharcher
  - Corregir el problema donde los campos de fórmula en el formulario de aprobación no se actualizan automáticamente por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.8](https://www.nocobase.com/en/blog/v1.9.0-beta.8)

*Fecha de lanzamiento: 2025-09-20*

#### 🚀 Mejoras

- **[auth]** Soporte para usar `.` en nombres de usuario ([#7504](https://github.com/nocobase/nocobase/pull/7504)) por @2013xile
- **[cliente]** Añadir soporte de localización para tooltip y título de elemento de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh
- **[Flujo de trabajo: Nodo manual]** Soporte para ver y reanudar tareas manuales pendientes dentro de flujos de trabajo deshabilitados ([#7493](https://github.com/nocobase/nocobase/pull/7493)) por @mytharcher
- **[Calendario]** Soporte para visualización de mapeo de locale en encabezados de calendario ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh
- **[Editor de temas]** Añadir soporte para personalización del color del menú lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu
- **[Adaptador de cola Redis]** Usar el registrador estándar del sistema para el adaptador de cola de mensajes Redis por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir el problema donde el popup de configuración del icono del botón está siendo cubierto/superpuesto ([#7506](https://github.com/nocobase/nocobase/pull/7506)) por @zhangzhonghe
  - Corregir el problema donde el popover de configuración del icono del menú está siendo ocultado ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe
  - Corregir el problema donde el componente Popover está siendo superpuesto/cubierto ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe
- **[Notificación: Mensaje en la aplicación]**

  - Corregir el problema de análisis incorrecto del enlace de notificación ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher
  - Corregir el problema donde los mensajes recientes no se muestran al abrir el popup de notificaciones ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher
- **[Flujo de trabajo]**

  - Corregir un posible error relacionado con el almacenamiento en caché de registros del flujo de trabajo ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher
  - Corregir el problema donde la lógica de suscripción incorrecta en la cola de tareas en segundo plano del flujo de trabajo causaba que el mensaje de ejecución se manejara incorrectamente ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher
- **[Fuente de datos: API REST]** corregir reglas de validación de URL de la API REST por @katherinehhh
- **[Cifrado de solicitud HTTP]** Corregir el problema donde los parámetros de solicitud no soportan el tipo nativo URLSearchParams por @mytharcher
- **[Impresión de plantilla]** soporte para el campo chinaRegions por @jiannx
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema donde los campos de fórmula en el formulario de aprobación no se actualizan automáticamente por @mytharcher
  - Corregir el problema donde ocurría un error al eliminar datos de una fuente de datos externa por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.16](https://www.nocobase.com/en/blog/v1.9.0-alpha.16)

*Fecha de lanzamiento: 2025-09-24*

#### 🚀 Mejoras

- **[cliente]**

  - Soporte para rotar imagen al previsualizar ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher
  - Añadir soporte de localización para tooltip y título de elemento de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh
- **[Adaptador de cola RabbitMQ]** mejorar el manejo de la conexión RabbitMQ y la lógica de procesamiento de mensajes por @sdp-ncd

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir el problema donde los submenús de la barra lateral no se resaltan correctamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu
  - Corregir el problema donde el popover de configuración del icono del menú está siendo ocultado ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe
- **[Notificación: Mensaje en la aplicación]** Corregir el problema donde los mensajes recientes no se muestran al abrir el popup de notificaciones ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher
- **[Flujo de trabajo]** Corregir el problema donde la condición de la lista de flujos de trabajo es incorrecta al cargar el contexto del campo asociado en la configuración del flujo de trabajo vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher
- **[Flujo de trabajo: Nodo de bucle]** Corregido el problema donde el proceso avanzaba incorrectamente al siguiente elemento incluso cuando las condiciones del nodo de bucle no se cumplían ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema donde ocurría un error al eliminar datos de una fuente de datos externa por @mytharcher
  - Corregir el problema donde los campos de fórmula en el formulario de aprobación no se actualizan automáticamente por @mytharcher
