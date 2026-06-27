---
title: "Construyendo Herramientas Internas con Codex: 6 Proyectos de Código Abierto para Desarrolladores"
description: "Explora proyectos de código abierto como NocoBase, Refine y Payload CMS que ayudan a Codex a construir herramientas internas más estables y mantenibles."
---

## Antecedentes

Recientemente, me topé con un debate sobre Agentes de Codificación de IA en [Hacker News](https://news.ycombinator.com/item?id=47796469): **pedirle a la IA que construya una aplicación desde cero no suele ser la forma más fiable de usarla.**

![HN.png](https://static-docs.nocobase.com/HN-nb8ae5.png)

El desarrollador señaló que si simplemente le dices a la IA: "Ayúdame a construir una aplicación", a menudo genera algo que **se ve bien al principio, pero tiene una estructura poco fiable por debajo.**

La IA es excelente para mejorar la velocidad de ejecución, pero funciona mejor cuando opera dentro de una estructura clara.

Para las herramientas internas empresariales reales, primero necesitas una base técnica fiable y luego usar un Agente de Codificación para mejorar la eficiencia del desarrollo.

En este artículo, nos centraremos en las herramientas internas empresariales y recomendaremos varios proyectos de código abierto que funcionan bien con Codex, ayudando a los desarrolladores a construir sistemas y herramientas internas de manera más eficiente.

---

💬 Oye, estás leyendo el blog de NocoBase. NocoBase es la plataforma de desarrollo sin código/low-code con IA más extensible para construir aplicaciones empresariales, herramientas internas y todo tipo de sistemas. Es completamente autoalojada, basada en plugins y amigable para desarrolladores. → [Explora NocoBase en GitHub](https://github.com/nocobase/nocobase)

---

| Proyecto    | Mejor para                                                                                 | Más adecuado para                                                                               |
| ----------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| NocoBase    | Construir sistemas de negocio internos como CRM, ticketing, aprobaciones y gestión de activos | Desarrolladores que necesitan construir rápidamente sistemas de negocio mantenibles             |
| Refine      | Construir paneles de administración React, dashboards y aplicaciones B2B                   | Desarrolladores familiarizados con React que quieren control total sobre el código              |
| Payload CMS | Construir backends de datos y sistemas de administración con TypeScript / Next.js          | Desarrolladores que prefieren un backend y un Panel de Administración centrados en TypeScript   |
| Directus    | Generar APIs y paneles de administración para bases de datos SQL existentes                | Equipos con bases de datos existentes que necesitan un panel de administración y capa API rápidamente |
| Supabase    | Construir un backend Postgres para herramientas internas                                   | Desarrolladores que necesitan autenticación, base de datos, almacenamiento, funciones en tiempo real y backend |
| Windmill    | Convertir scripts en herramientas internas, tareas y flujos de trabajo                     | Equipos técnicos con muchos scripts internos y tareas de automatización                         |

## 1. NocoBase

Sitio web oficial: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

Estrellas de GitHub: 22.4k

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-nfhndl.png)

NocoBase es una plataforma sin código con IA de código abierto para construir sistemas internos empresariales como CRM, sistemas de ticketing, sistemas de aprobación, gestión de proyectos, gestión de activos y backends de operaciones.

El valor central de NocoBase **es que proporciona un marco de sistema completo para herramientas internas**, que incluye modelos de datos, configuración de páginas, control de permisos, flujos de trabajo, extensiones de plugins y capacidades de IA. Para los desarrolladores, es más que un constructor de páginas de arrastrar y soltar. Es una infraestructura de sistema de negocio que aún se puede extender con código.

NocoBase proporciona documentación oficial de Codex: [Usando Codex con NocoBase para construir y desarrollar](https://docs.nocobase.com/en/ai/codex)

Después de conectar Codex, Codex puede usar [Habilidades de NocoBase](https://docs.nocobase.com/en/ai-builder#nocobase-skills) y la [CLI](https://docs.nocobase.com/en/api/cli/) para entender cómo se configura y desarrolla NocoBase. Puede ayudar a los desarrolladores a crear tablas de datos, configurar páginas, diseñar flujos de trabajo, establecer permisos y, además, manejar el desarrollo de plugins, extensiones de funcionalidades y resolución de problemas a través del lenguaje natural.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-40774f.png)

**En comparación con pedirle a Codex que genere un sistema interno desde cero, NocoBase le proporciona un marco de sistema más estable en el que trabajar**. El resultado no es un código desechable difícil de mantener, sino un sistema que se ejecuta dentro del marco de NocoBase y que se puede mejorar continuamente.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-qu1ijq.png)

Más allá de la etapa de construcción inicial, NocoBase también proporciona capacidades de Empleado de IA. Los Empleados de IA pueden trabajar con páginas de negocio, tablas de datos y el contexto del flujo de trabajo para ayudar con la organización de datos, análisis de datos, traducción, investigación, procesamiento de correos electrónicos, modelado de datos, configuración de gráficos y más. En otras palabras, Codex es más adecuado para ayudar a los desarrolladores a construir y extender sistemas, mientras que los Empleados de IA de NocoBase pueden participar en las operaciones comerciales diarias después de que el sistema esté en funcionamiento.

![ai-empleado-llenando-formulario-yhms5j.gif](https://static-docs.nocobase.com/ai%E5%91%98%E5%B7%A5%E5%A1%AB%E8%A1%A8%E5%8D%95-yhms5j.gif)

Al configurar servicios LLM, Habilidades, bases de conocimiento y tareas rápidas, los Empleados de IA pueden encajar de forma más natural en las operaciones comerciales reales, ayudando a los equipos a mejorar tanto la construcción del sistema como la eficiencia del uso diario.

### Qué puedes construir con Codex y NocoBase

Codex y NocoBase pueden ayudar a los desarrolladores a construir sistemas internos empresariales mantenibles más rápido, como:

* CRM
* Sistemas de ticketing
* Sistemas de aprobación
* Gestión de proyectos
* Gestión de activos
* Backends de operaciones
* Paneles de datos

Codex se encarga de la comprensión de requisitos, el desglose de la estructura de negocio y la generación de la implementación. NocoBase proporciona los modelos de datos, permisos, páginas, flujos de trabajo y extensiones de plugins. En lugar de pedirle a la IA que genere código difícil de mantener desde cero, los desarrolladores pueden dejar que Codex construya y desarrolle dentro del marco de sistema existente de NocoBase.

### Prompt sugerido

#### Instalar NocoBase

Copia el siguiente prompt en Codex para instalar y configurar NocoBase automáticamente:

```text
Ayúdame a instalar la CLI de NocoBase y completar la inicialización: https://docs.nocobase.com/en/ai/ai-quick-start.md Por favor, abre y lee el enlace directamente.
```

#### Diseñar un sistema

```text
Ayúdame a usar la habilidad nocobase-dsl-reconciler para construir un sistema de gestión de tickets, que incluya un panel de control, una lista de tickets, gestión de usuarios y configuración de SLA.
```

#### Resultado real

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-1klco2.png)

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-fhuwo3.png)

### Recursos relacionados

Puedes copiar estos enlaces y enviarlos a Codex para su uso directo.

Documentación: [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Habilidades: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

## 2. Refine

Sitio web oficial: [https://refine.dev/](https://refine.dev/)

GitHub: [https://github.com/refinedev/refine](https://github.com/refinedev/refine)

Estrellas de GitHub: 34.7k

![Refine1.png](https://static-docs.nocobase.com/Refine1-8qgxcz.png)

Refine es un framework React de código abierto para desarrolladores. Se utiliza principalmente para construir herramientas internas, paneles de administración, dashboards y aplicaciones B2B. Proporciona capacidades centrales como autenticación, control de permisos, enrutamiento, obtención de datos, gestión de estado e internacionalización, lo que lo hace adecuado para construir rápidamente aplicaciones con muchas operaciones CRUD.

Refine también está fortaleciendo su soporte para escenarios de Agentes de IA. Proporciona un flujo de trabajo diseñado para aplicaciones generadas por IA: conéctate a una API REST existente o a un proyecto de Supabase, analiza la estructura del backend y crea planos para los agentes de IA para que los resultados generados coincidan mejor con los modelos de datos reales.

Esta es la razón por la que Refine funciona bien con Codex. Codex no necesita adivinar cómo se debe construir una herramienta interna desde cero. Puede generar páginas de lista, páginas de detalle, páginas de edición, formularios, filtros, comprobaciones de permisos y lógica de llamadas a la API basándose en la estructura del proyecto de Refine, el modelo de recursos y la configuración de la fuente de datos.

![Refine2.png](https://static-docs.nocobase.com/Refine2-jpcnwg.png)

Refine también proporciona una CLI para crear recursos, gestionar actualizaciones, intercambiar componentes y ejecutar tareas del proyecto como build, start y dev. Para Agentes de Codificación como Codex, estos puntos de entrada de línea de comandos claros son más fáciles de automatizar y más adecuados para la iteración continua en proyectos existentes.

### Qué puedes construir con Codex y Refine

Codex y Refine son especialmente adecuados para desarrollar rápidamente interfaces de administración internas en el stack React, como backends de CRM, backends de gestión de pedidos, plataformas de revisión de operaciones, puestos de trabajo de atención al cliente, paneles de gestión de datos y portales de administración B2B SaaS.

Por ejemplo, si quieres construir un backend de gestión de pedidos, Codex puede generar listas de pedidos, páginas de detalle de pedidos, formularios de edición, filtros, botones de actualización de estado y lógica de permisos basándose en estructuras de datos como pedidos, clientes, productos y estado de pago. Refine proporciona la estructura básica para las herramientas internas de React, mientras que Codex acelera el desarrollo de páginas de negocio específicas.

Esta configuración es mejor para los desarrolladores que quieren tener control total sobre el código. El resultado final es un proyecto React, no una configuración bloqueada dentro de una plataforma cerrada. Puedes seguir usando Codex más tarde para modificar componentes, refactorizar lógica, conectar nuevas API o extender módulos de negocio.

### Prompt sugerido

```text
Ayúdame a crear un backend de gestión de pedidos basado en Refine, usando una API REST como fuente de datos. Debe incluir una lista de pedidos, detalles del pedido, un formulario de edición de pedidos, filtros de clientes, actualizaciones del estado del pedido y un control de permisos básico.
```

## 3. Payload CMS

Sitio web oficial: [https://payloadcms.com/](https://payloadcms.com/)

GitHub: [https://github.com/payloadcms/payload](https://github.com/payloadcms/payload)

Estrellas de GitHub: 42.5k

![Payload CMS1.png](https://static-docs.nocobase.com/Payload%20CMS1-9l7yh9.png)

Payload CMS es un framework full-stack de código abierto para Next.js, utilizado para construir CMS, paneles de administración, aplicaciones basadas en datos y herramientas internas empresariales. Proporciona configuración TypeScript, colecciones de datos, control de permisos, un Panel de Administración, APIs REST / GraphQL, Hooks, plugins, gestión de archivos y más.

Payload define modelos de datos y lógica de negocio a través del código. Puedes configurar colecciones, campos, control de acceso, hooks y la interfaz de usuario de administración en TypeScript, manteniendo el backend, la API y la interfaz de administración de una herramienta interna en un solo código base.

Payload también ha comenzado a soportar escenarios de Agentes de IA. Su documentación oficial proporciona un Plugin MCP que permite a los desarrolladores controlar qué colecciones y globales puede usar la IA para operaciones como find, create, update y delete. Los desarrolladores también pueden definir sus propios prompts, herramientas y recursos.

![Payload CMS2.png](https://static-docs.nocobase.com/Payload%20CMS2-jczl8t.png)

### Qué puedes construir con Codex y Payload

Codex y Payload son adecuados para desarrollar rápidamente backends de datos basados en TypeScript / Next.js, sistemas de gestión de contenido, portales de clientes, backends de pedidos, sistemas de gestión de activos y herramientas de gestión de operaciones.

![Payload CMS3.png](https://static-docs.nocobase.com/Payload%20CMS3-lejqn0.png)

Por ejemplo, si quieres construir un backend de gestión de activos, Codex puede generar colecciones de Payload, configuraciones de campos, permisos de acceso y hooks basándose en requisitos como equipos, empleados, departamentos, registros de uso, registros de mantenimiento y estado de aprobación. Payload proporciona la interfaz de gestión de datos, las API y la aplicación de permisos. Si necesitas agregar más lógica de negocio más tarde, puedes seguir usando Codex para modificar las configuraciones TypeScript y el código de extensión.

### Prompt sugerido

```text
Ayúdame a crear un backend de gestión de activos basado en Payload CMS, que incluya colecciones para equipos, empleados, departamentos, registros de uso y registros de mantenimiento. También configura los campos básicos, los permisos de acceso, los campos de visualización del Panel de Administración y los hooks comunes.
```

## 4. Directus

Sitio web oficial: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

Estrellas de GitHub: 35.7k

![Directus1.png](https://static-docs.nocobase.com/Directus1-7w23p8.png)

Directus es una plataforma de backend de datos de código abierto que puede convertir rápidamente bases de datos SQL como PostgreSQL, MySQL, SQLite, MariaDB, MS SQL y OracleDB en APIs REST / GraphQL y un panel de administración visual. Es adecuado para construir backends de gestión de datos, sistemas de gestión de contenido, backends de operaciones, backends de datos de clientes, capas de API internas y proyectos similares.

Directus es especialmente amigable con las bases de datos existentes. Muchas herramientas internas no comienzan desde cero. Es posible que ya exista una base de datos de negocio, pero el equipo aún carece de un panel de administración utilizable, gestión de permisos y capa de API. Directus puede conectarse directamente a una base de datos SQL existente y proporcionar gestión de modelos de datos, permisos de roles, gestión de archivos, flujos de trabajo de automatización y capacidades de extensión sobre ella.

Directus ya proporciona un Servidor MCP, lo que permite que herramientas de IA como Claude, ChatGPT y Cursor se conecten a Directus. La IA puede crear, editar y gestionar contenido dentro del sistema de permisos existente, sin copiar datos a otro lugar ni eludir los controles de permisos de Directus.

![Directus2.png](https://static-docs.nocobase.com/Directus2-otlau7.png)

### Qué puedes construir con Codex y Directus

Codex y Directus son adecuados para construir rápidamente backends de datos internos y capas de API sobre bases de datos existentes, como gestión de datos de clientes, gestión de datos de pedidos, gestión de contenido, gestión de catálogos de productos, backends de configuración de operaciones y sistemas de revisión de datos.

El valor de esta combinación es claro: Directus conecta la base de datos, genera APIs, proporciona el panel de administración y maneja los permisos. Codex entiende los requisitos de negocio, diseña estructuras de datos, escribe lógica de extensión, Hooks, Endpoints Personalizados, scripts de datos y código de integración frontend.

La ventaja es que los desarrolladores no necesitan reescribir bases de datos o backends existentes. Directus proporciona la capa de datos y el panel de administración, mientras que Codex acelera la lógica de negocio y el desarrollo de extensiones. Esto hace que la combinación sea adecuada para equipos que ya tienen una base de datos pero necesitan agregar rápidamente capacidades de herramientas internas.

### Prompt sugerido

```text
Ayúdame a diseñar un panel de administración interno para una base de datos de pedidos existente basado en Directus. Debe incluir cuatro tipos de datos: pedidos, clientes, productos y registros de pago. También configura los permisos básicos, las vistas de lista, los flujos de trabajo de actualización de estado y un Hook de notificación después de que cambie el estado del pedido.
```

## 5. Supabase

Sitio web oficial: [https://supabase.com/](https://supabase.com/)

GitHub: [https://github.com/supabase/supabase](https://github.com/supabase/supabase)

Estrellas de GitHub: 103k

Probablemente Supabase necesite poca presentación.

Supabase proporciona un Servidor MCP oficial de Supabase que permite que las herramientas de IA se conecten a proyectos de Supabase y los consulten u operen dentro del alcance de permisos permitido. Supabase también proporciona habilidades para agentes de IA, que cubren bases de datos, Auth, Edge Functions, Realtime, Storage, Vectores, Cron, Colas, CLI, MCP, cambios de esquema, migraciones, políticas RLS, auditorías de seguridad y más.

![Supabase1-rq907o.png](https://static-docs.nocobase.com/Supabase1-rq907o.png)

### Qué puedes construir con Codex y Supabase?

Codex y Supabase son adecuados para construir rápidamente la capa de backend de las herramientas internas. Supabase proporciona la base de datos, autenticación, API, almacenamiento y entorno de ejecución de funciones. Codex diseña esquemas basados en requisitos de negocio, escribe SQL, configura permisos RLS, genera Edge Functions y ayuda al frontend a llamar a las APIs de Supabase.

Por ejemplo, si quieres construir un backend de gestión de clientes, Codex puede diseñar tablas Postgres, relaciones de campos, índices y políticas RLS basándose en requisitos como clientes, contactos, registros de seguimiento, oportunidades de venta, contratos y archivos adjuntos. Supabase proporciona la base de datos, autenticación, APIs automáticas y aplicación de permisos. Más tarde, si necesitas asignación automática de clientes, sincronización de datos externos o generación de resúmenes con IA, puedes seguir usando Codex para escribir Edge Functions o funciones de base de datos.

### Prompt sugerido

```text
Ayúdame a diseñar el backend de un sistema de gestión de clientes basado en Supabase. Debe incluir tablas para clientes, contactos, oportunidades, contratos, seguimientos y archivos adjuntos. Por favor, genera la migración SQL, los índices básicos, las políticas RLS, el diseño de autenticación y permisos, y una Edge Function para asignar automáticamente los responsables de ventas.
```

## 6. Windmill

Sitio web oficial: [https://www.windmill.dev/](https://www.windmill.dev/)

GitHub: [https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)

Estrellas de GitHub: 16.5k

Windmill es una plataforma de código abierto para desarrolladores. Puede convertir rápidamente scripts escritos en Python, TypeScript, Go, Bash, SQL y otros lenguajes en APIs, tareas en segundo plano, flujos de trabajo y aplicaciones internas. Es adecuado para construir flujos de trabajo de automatización, tareas de procesamiento de datos, herramientas de operaciones, gestión de tareas en segundo plano, plataformas de scripts internos e interfaces de administración ligeras.

![Windmill1-kcvxsb.png](https://static-docs.nocobase.com/Windmill1-kcvxsb.png)

Con su CLI y habilidades de IA integradas, Windmill permite a los desarrolladores usar Claude Code o Codex localmente y luego implementar en un espacio de trabajo remoto a través de `wmill sync push`. En esta configuración, Codex escribe scripts y lógica de flujo de trabajo, mientras que Windmill maneja la ejecución, programación, permisos, registros e interfaces de operación visual.

### Qué puedes construir con Codex y Windmill

Codex y Windmill son especialmente adecuados para convertir scripts escritos por desarrolladores en herramientas internas que todo el equipo pueda usar. Algunos ejemplos incluyen sincronización de datos, generación de informes, importación y exportación por lotes, procesamiento de Webhooks, tareas programadas, limpieza de datos de clientes, sincronización de estado de pedidos, notificaciones de Slack / Email y flujos de trabajo de procesamiento de datos con IA.

Por ejemplo, si quieres construir un flujo de trabajo interno que sincronice los datos de clientes del CRM cada noche y genere un informe de excepciones, Codex puede ayudar a escribir scripts para leer, limpiar, comparar y reportar datos. Windmill puede configurar el flujo de trabajo como una tarea programada, registrar los registros de ejecución y proporcionar una página interna donde el equipo pueda activar manualmente el flujo de trabajo o ver los resultados.

### Prompt sugerido

```text
Ayúdame a crear un flujo de trabajo de sincronización de datos de clientes basado en Windmill: leer datos de clientes de PostgreSQL cada noche, limpiar registros duplicados, identificar correos electrónicos anómalos, generar un informe de excepciones y notificar al equipo de operaciones a través de Slack. Por favor, escribe el script en TypeScript y explica cómo configurar la tarea programada y los parámetros de entrada.
```

## Reflexiones finales

Los Agentes de Codificación de IA como Codex están cambiando la forma en que los desarrolladores construyen herramientas internas.

NocoBase, Refine, Payload, Directus, Supabase y Windmill proporcionan cada uno una base de ingeniería más clara desde diferentes ángulos, incluidos sistemas de negocio, frameworks frontend, backends de datos, servicios backend y automatización de scripts.

El valor de Codex es que mejora la eficiencia del desarrollo sobre estas bases: te ayuda a desglosar requisitos, generar código, configurar recursos, escribir scripts, diseñar flujos de trabajo, manejar integraciones y solucionar problemas.

Un mejor enfoque de desarrollo es:

> Elige primero la infraestructura de código abierto adecuada, luego deja que Codex complete la implementación específica dentro de una estructura clara.

Las herramientas internas construidas de esta manera son más fáciles de mantener, extender y poner en uso real.

**Lecturas relacionadas**

* [Después de Claude Code: 6 herramientas de código abierto que deberías conocer](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Las 10 mejores herramientas de IA y sin código de código abierto para el desarrollo de software empresarial](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 plataformas de agentes de IA de código abierto para construir herramientas internas](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [Los mejores CRM autoalojados de grado empresarial con RBAC, IA y soporte de API abierta](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 mejores herramientas de código abierto para reemplazar el middleware de integración personalizado](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [¿Reemplazar Excel con NocoBase o Airtable? Una comparación costo por costo](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 formas de construir rápidamente aplicaciones web a partir de datos de Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [No solo PostgreSQL: Comparando 5 plataformas sin código/low-code con soporte de bases de datos externas](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Guía de selección de herramientas de gestión de proyectos de código abierto, edición 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [Cómo construir un CRM personalizado con PostgreSQL](https://www.nocobase.com/en/blog/how-to-build-a-custom-crm-with-postgresql)
* [Los 20 mejores proyectos de IA en GitHub para ver en 2026: No solo OpenClaw](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)
