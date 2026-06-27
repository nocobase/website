---
title: "NocoBase v1.8.26: soporte para visualización de mapeo de locales en encabezados de calendario"
description: "Nota de la versión v1.8.26"
---

### 🚀 Mejoras

- **[cliente]** Añadir soporte de localización para tooltips y títulos de elementos de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh

- **[Calendario]** Soporte para visualización de asignación de configuración regional en encabezados de calendario ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]** Corregir el problema donde el popover de configuración del icono del menú quedaba oculto ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe

- **[Notificación: Mensaje en la aplicación]**
  - Corregir el problema de análisis incorrecto de enlaces de notificación ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher

  - Corregir el problema donde los mensajes recientes no se mostraban al abrir la ventana emergente de notificaciones ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher

- **[Flujo de trabajo]** Corregir el problema donde una lógica de suscripción incorrecta en la cola de tareas en segundo plano del flujo de trabajo provocaba un manejo incorrecto de los mensajes de ejecución ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir el problema donde ocurría un error al eliminar datos de una fuente de datos externa por @mytharcher

  - Corregir el problema donde los campos de fórmula en el formulario de aprobación no se actualizaban automáticamente por @mytharcher
