---
title: "NocoBase v1.9.0-beta.8: Se añade soporte para personalización de color del menú lateral"
description: "Nota de la versión v1.9.0-beta.8"
---

### 🚀 Mejoras

- **[auth]** Soporte para usar `.` en nombres de usuario ([#7504](https://github.com/nocobase/nocobase/pull/7504)) por @2013xile

- **[client]** Añadido soporte de localización para tooltip y título de elementos de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh

- **[Workflow: Nodo manual]** Soporte para ver y reanudar tareas manuales pendientes dentro de flujos de trabajo deshabilitados ([#7493](https://github.com/nocobase/nocobase/pull/7493)) por @mytharcher

- **[Calendario]** Soporte para visualización de mapeo de configuración regional en encabezados de calendario ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh

- **[Editor de temas]** Añadido soporte para personalización del color del menú lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu

- **[Adaptador de cola Redis]** Uso del registrador estándar del sistema para el adaptador de cola de mensajes Redis por @mytharcher

### 🐛 Corrección de errores

- **[client]**
  - Corregido el problema donde la ventana emergente de configuración del icono del botón quedaba cubierta/superpuesta ([#7506](https://github.com/nocobase/nocobase/pull/7506)) por @zhangzhonghe

  - Corregido el problema donde la ventana emergente de configuración del icono del menú quedaba oculta ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe

  - Corregido el problema donde el componente Popover quedaba superpuesto/cubierto ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe

- **[Notificación: Mensaje en la aplicación]**
  - Corregido el problema de análisis incorrecto del enlace de notificación ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher

  - Corregido el problema donde los mensajes recientes no se mostraban al abrir la ventana emergente de notificaciones ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher

- **[Flujo de trabajo]**
  - Corregido un posible error relacionado con el almacenamiento en caché del registro del flujo de trabajo ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher

  - Corregido el problema donde una lógica de suscripción incorrecta en la cola de tareas en segundo plano del flujo de trabajo provocaba que el mensaje de ejecución se manejara incorrectamente ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher

- **[Fuente de datos: API REST]** corregidas las reglas de validación de URL de la API REST por @katherinehhh

- **[Cifrado de solicitudes HTTP]** Corregido el problema donde los parámetros de solicitud no soportaban el tipo nativo URLSearchParams por @mytharcher

- **[Impresión de plantillas]** soporte para el campo chinaRegions por @jiannx

- **[Flujo de trabajo: Aprobación]**
  - Corregido el problema donde los campos de fórmula en el formulario de aprobación no se actualizaban automáticamente por @mytharcher

  - Corregido el problema donde ocurría un error al eliminar datos de una fuente de datos externa por @mytharcher
