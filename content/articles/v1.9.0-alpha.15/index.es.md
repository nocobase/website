---
title: "NocoBase v1.9.0-alpha.15: Usar el registrador estándar del sistema para la cola de mensajes"
description: "Nota de la versión v1.9.0-alpha.15"
---

### 🚀 Mejoras

- **[auth]** Se permite el uso de `.` en nombres de usuario ([#7504](https://github.com/nocobase/nocobase/pull/7504)) por @2013xile
- **[server]** Se utiliza el registrador estándar del sistema para la cola de mensajes ([#7480](https://github.com/nocobase/nocobase/pull/7480)) por @mytharcher
- **[snowflake-id]** Se cambian los IDs de las tablas del sistema con claves primarias autoincrementales pero sin identificadores únicos a IDs de 53 bits similares a Snowflake ([#7465](https://github.com/nocobase/nocobase/pull/7465)) por @2013xile
- **[Calendario]** Se añade soporte para la visualización de asignaciones de configuración regional en los encabezados del calendario ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh
- **[Flujo de trabajo: Nodo manual]** Se permite ver y reanudar tareas manuales pendientes dentro de flujos de trabajo deshabilitados ([#7493](https://github.com/nocobase/nocobase/pull/7493)) por @mytharcher
- **[Editor de temas]** Se añade soporte para la personalización del color del menú lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu
- **[Adaptador de cola Redis]** Se utiliza el registrador estándar del sistema para el adaptador de cola de mensajes Redis por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrige el problema por el cual la ventana emergente de configuración del icono del botón quedaba cubierta/superpuesta ([#7506](https://github.com/nocobase/nocobase/pull/7506)) por @zhangzhonghe
  - Se corrige el problema por el cual el componente Popover quedaba superpuesto/cubierto ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe
  - Los campos de solo lectura (select/multiselect/date/richtext) seguían siendo editables en formularios públicos ([#7484](https://github.com/nocobase/nocobase/pull/7484)) por @katherinehhh
- **[Flujo de trabajo]**

  - Se corrige el problema por el cual una lógica de suscripción incorrecta en la cola de tareas en segundo plano del flujo de trabajo provocaba un manejo incorrecto del mensaje de ejecución ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher
  - Se corrige un posible error relacionado con el almacenamiento en caché de registros del flujo de trabajo ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Se corrige el problema de análisis incorrecto de enlaces de notificación ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher
- **[Fuente de datos: API REST]** Se corrigen las reglas de validación de URL de la API REST por @katherinehhh
- **[Cifrado de solicitudes HTTP]** Se corrige el problema por el cual los parámetros de solicitud no soportaban el tipo nativo URLSearchParams por @mytharcher
- **[Impresión de plantillas]** Se añade soporte para el campo chinaRegions por @jiannx
- **[Gestor de correo electrónico]** Se corrige el problema del asunto basura por @jiannx
