---
title: "NocoBase v1.8.23: Consulta de recuento optimizada en la API de listas"
description: "Nota de la versión v1.8.23"
---

### 🚀 Mejoras

- **[base de datos]** Optimizada la consulta de recuento de la API de listas para reducir el consumo de recursos. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) por @aaaaaajie

- **[Notificación: mensaje en la aplicación]** Se admite la configuración del retardo de cierre automático para las notificaciones de mensajes en la aplicación ([#7472](https://github.com/nocobase/nocobase/pull/7472)) por @mytharcher

- **[Flujo de trabajo: nodo de notificación]** Se admite probar el nodo de notificación ([#7470](https://github.com/nocobase/nocobase/pull/7470)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Error al renderizar el campo de asociación al cambiar al componente de etiqueta en el bloque de formulario de edición ([#7468](https://github.com/nocobase/nocobase/pull/7468)) por @katherinehhh

  - Problema de límite de tiempo cuando la fecha seleccionada es igual a minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) por @katherinehhh

- **[Móvil]** El campo de fecha móvil sin zona horaria no muestra la fecha y hora correctamente ([#7473](https://github.com/nocobase/nocobase/pull/7473)) por @katherinehhh

- **[Formularios públicos]** El valor predeterminado del campo de formulario público no se aplica al usar variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) por @katherinehhh

- **[Acción: Importar registros]** Corregido el número de fila incorrecto mostrado al importar datos duplicados ([#7440](https://github.com/nocobase/nocobase/pull/7440)) por @aaaaaajie

- **[Colección: Árbol]** Eliminar eventos de base de datos relacionados con la colección después de eliminar una colección de árbol ([#7459](https://github.com/nocobase/nocobase/pull/7459)) por @2013xile

- **[Flujo de trabajo: Evento de acción personalizada]** Corregido el problema por el cual los eventos de acción personalizada no se podían ejecutar manualmente inmediatamente después de la inicialización por @mytharcher

- **[Flujo de trabajo: Subflujo]** Corregido el problema de que los subprocesos se reanudaban y ejecutaban varias veces por @mytharcher

- **[Flujo de trabajo: Aprobación]** Para los usuarios que no son el aprobador actual, el botón de vista correspondiente en la tabla de flujo de procesos no se mostrará por @mytharcher
