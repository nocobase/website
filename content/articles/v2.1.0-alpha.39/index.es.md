---
title: "NocoBase v2.1.0-alpha.39: Se agregó soporte client-v2 para el plugin Kanban"
description: "Nota de la versión v2.1.0-alpha.39"
---

### 🎉 Nuevas Funcionalidades

- **[Bloque: Kanban]** Se añadió soporte para client-v2 en el plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) por @jiannx

### 🚀 Mejoras

- **[cliente]** Compartir la evaluación de condiciones entre aplicaciones v1 y v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) por @zhangzhonghe

- **[Localización]** Mejoradas las tareas de traducción de Lina con ámbito de traducción, configuración de idioma de referencia y edición rápida ([#9521](https://github.com/nocobase/nocobase/pull/9521)) por @2013xile

- **[Empleados IA]** Aviso al duplicar nombre de tabla al guardar en base de datos vectorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock

- **[Gestor de notificaciones]** Cambiar la estrategia de cola para optimizar el rendimiento de envío ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Migrados los plugins block-workbench y workflow-custom-action-trigger a client-v2, incluyendo sus modelos de acción y el flujo del escáner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) por @jiannx

- **[Autenticación]** Implementar la página de configuración de Autenticadores en client-v2 e incluir componentes reutilizables de tabla, entrada de variables y primitivas de formulario para client-v2. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) por @Molunerfinn

- **[IA: Base de conocimiento]** Aviso al duplicar nombre de tabla al guardar en base de datos vectorial por @cgyrock

- **[Auth: SAML 2.0]** Añadir entradas client-v2 para los plugins de autenticación CAS y SAML para que funcionen con la página de inicio de sesión v2 y la configuración de Autenticadores. por @Molunerfinn

- **[Flujo de trabajo: Aprobación]** Mejorar las aprobaciones relacionadas con tarjetas de línea de tiempo por @zhangzhonghe

### 🐛 Corrección de Errores

- **[sin definir]** Alinear rutas de configuración de nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) por @chenos

- **[cli-v1]** Corregido el inicio en desarrollo de create-nocobase-app reutilizando shells de aplicación empaquetados y permitiendo el desarrollo local de plugins. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) por @Molunerfinn

- **[cliente]**
  - Corregido el problema por el que los formularios de filtro no podían usar variables del formulario actual ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe

  - Corregido el problema por el que una insignia de menú seguía mostrando un punto cuando su valor era 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe

- **[client-v2]**
  - El componente de tabla v2 compartido ahora muestra el selector de tamaño de página por defecto, igualando el comportamiento de v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) por @Molunerfinn

  - Corregida la falla al cargar la ruta v2 del plugin Kanban porque las dependencias dnd-kit no eran proporcionadas por el cliente. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) por @jiannx

- **[Calendario]**
  - Corregido el estilo del cursor para los elementos de evento en la superposición de más eventos del calendario ([#9519](https://github.com/nocobase/nocobase/pull/9519)) por @jiannx

  - Corregido el problema por el que los elementos adicionales del calendario no se mostraban completamente ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe

- **[Configuración de licencia]** Resolver dependencias empaquetadas con enlace simbólico ([#9518](https://github.com/nocobase/nocobase/pull/9518)) por @chenos

- **[Empleados IA]**
  - Corregido el problema por el que los permisos de rol de operador no surtían efecto en los nodos de empleados IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) por @cgyrock

  - Corregidos errores de lectura de archivos OSS de empleados IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock

- **[Autenticación]** Evitar que el servidor se bloquee cuando un token de autenticación WebSocket hace referencia a un autenticador cuyo plugin de tipo de autenticación está descargado o ausente. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) por @Molunerfinn

- **[Documentación de API]** Corregida la documentación de la API de colecciones para que los parámetros de consulta ya no interfieran entre sí ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx

- **[Fuente de datos: Principal]** Corregido el problema por el que las opciones de campo se escribían en el esquema después de sincronizar campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile

- **[Auth: SAML 2.0]** Corregido el parpadeo del shell de la aplicación causado por el interceptor de redirección automática SAML y la apertura doble de paneles en cada navegación. por @Molunerfinn
