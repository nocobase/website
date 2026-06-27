---
title: "Actualizaciones Semanales de NocoBase: Optimización y Corrección de Errores"
description: "La actualización de esta semana incluye: consulta de conteo de API de lista optimizada, soporte de flujo de trabajo para nodos de notificación de prueba y más."
---

Resume las notas de actualización semanales del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.23](https://www.nocobase.com/en/blog/v1.8.23)

*Fecha de publicación: 2025-09-03*

#### 🚀 Mejoras

- **[base de datos]** Se optimizó la consulta de recuento de la API de listas para reducir el consumo de recursos. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) por @aaaaaajie
- **[Notificación: Mensaje en la aplicación]** Se admite la configuración del retardo de cierre automático para las notificaciones de mensajes en la aplicación ([#7472](https://github.com/nocobase/nocobase/pull/7472)) por @mytharcher
- **[Flujo de trabajo: nodo de notificación]** Se admite probar el nodo de notificación ([#7470](https://github.com/nocobase/nocobase/pull/7470)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Error de renderizado del campo de asociación al cambiar al componente de etiqueta en el bloque de formulario de edición ([#7468](https://github.com/nocobase/nocobase/pull/7468)) por @katherinehhh
  - Problema de límite de tiempo cuando la fecha seleccionada es igual a minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) por @katherinehhh
- **[Móvil]** El campo de fecha móvil sin zona horaria no muestra la fecha y hora correctamente ([#7473](https://github.com/nocobase/nocobase/pull/7473)) por @katherinehhh
- **[Formularios públicos]** El valor predeterminado del campo del formulario público no se aplica al usar variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) por @katherinehhh
- **[Acción: Importar registros]** Se corrige el número de fila incorrecto que se muestra al importar datos duplicados ([#7440](https://github.com/nocobase/nocobase/pull/7440)) por @aaaaaajie
- **[Colección: Árbol]** Se eliminan los eventos de base de datos relacionados con la colección después de eliminar una colección de árbol ([#7459](https://github.com/nocobase/nocobase/pull/7459)) por @2013xile
- **[Flujo de trabajo: Evento de acción personalizada]** Se corrige el problema por el cual los eventos de acción personalizada no se podían ejecutar manualmente inmediatamente después de la inicialización por @mytharcher
- **[Flujo de trabajo: Subflujo]** Se corrige el problema de que los subprocesos se reanudaban y ejecutaban varias veces por @mytharcher
- **[Flujo de trabajo: Aprobación]** Para los usuarios que no son el aprobador actual, el botón de vista correspondiente en la tabla de flujo del proceso no se mostrará por @mytharcher
