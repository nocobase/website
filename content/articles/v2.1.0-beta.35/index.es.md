---
title: "NocoBase v2.1.0-beta.35: Compartir evaluación de condiciones entre aplicaciones v1 y v2"
description: "Nota de la versión v2.1.0-beta.35"
---

### 🚀 Mejoras

- **[client]** Compartir la evaluación de condiciones entre aplicaciones v1 y v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) por @zhangzhonghe

- **[Localización]** Mejora de las tareas de traducción de localización de Lina con ámbito de traducción, configuración de idioma de referencia y edición rápida ([#9521](https://github.com/nocobase/nocobase/pull/9521)) por @2013xile

- **[Flujo de trabajo: Aprobación]** Mejora de las aprobaciones relacionadas con tarjetas de línea de tiempo por @zhangzhonghe

### 🐛 Corrección de errores

- **[undefined]** Alinear las rutas de configuración de nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) por @chenos

- **[cli-v1]** Se corrigió el inicio del desarrollo de create-nocobase-app reutilizando shells de aplicaciones empaquetadas y habilitando el desarrollo de plugins locales. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) por @Molunerfinn

- **[client]**
  - Se corrigió el problema por el cual una insignia de menú seguía mostrando un punto cuando su valor es 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe

  - Se corrigió el problema por el cual los formularios de filtro no podían usar variables del formulario actual ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe

- **[Autenticación]** Se evitó que el servidor se bloqueara cuando un token de autenticación WebSocket hace referencia a un autenticador cuyo plugin de tipo de autenticación está descargado o falta. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) por @Molunerfinn

- **[Calendario]**
  - Se corrigió el problema por el cual los elementos adicionales del calendario no se podían mostrar completamente ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe

  - Se corrigió el estilo del cursor para los elementos de evento en la superposición de más eventos del calendario ([#9519](https://github.com/nocobase/nocobase/pull/9519)) por @jiannx

- **[Configuración de licencia]** Resolver dependencias empaquetadas con enlaces simbólicos ([#9518](https://github.com/nocobase/nocobase/pull/9518)) por @chenos
