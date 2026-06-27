---
title: "5 herramientas internas de código abierto para usar con Hermes Agent"
description: "Aprenda cómo NocoBase, Appsmith, Budibase, Directus y Baserow pueden funcionar con Hermes Agent para mejorar la creación, configuración y mantenimiento de herramientas internas."
---

Los Agentes de IA ya no son populares solo en entornos de desarrollo.

Además de herramientas como Claude Code y OpenClaw, Hermes Agent también ha empezado a recibir más atención recientemente.

![reddit.png](https://static-docs.nocobase.com/reddit-px26au.png)

[En Reddit](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/comment/obgsyod/), un usuario mencionó que, tras probar varias herramientas de Agentes, incluyendo OpenClaw, Nanobot y Nanoclaw, al final seguía prefiriendo Hermes Agent. Mantiene las capacidades que realmente necesitan sin complejidades innecesarias. Para escenarios como modelos locales, servidores autogestionados, acceso SSH y operaciones basadas en Telegram, también se adapta a una configuración más ligera y controlable.

> 💡Más información:
>
> [¿Cómo se puede usar OpenClaw en un negocio real? 5 herramientas open source recomendadas](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
>
> [Después de usar Claude Code, necesitas estas 6 herramientas open source](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)

Para equipos que ya están planeando construir sistemas empresariales autogestionados o herramientas internas, Hermes Agent encaja muy bien si el Agente de IA necesita usarse dentro de sistemas empresariales reales para manejar consultas de datos, configuración del sistema, mantenimiento de flujos de trabajo y ejecución de tareas.

La plataforma de herramientas internas proporciona la base para el sistema empresarial, mientras que Hermes funciona como un Agente autogestionado que ayuda a los equipos a consultar, configurar y mantener sistemas con lenguaje natural, y capturar operaciones repetibles como Skills reutilizables.

---

💬 Oye, estás leyendo el blog de NocoBase. NocoBase es la plataforma de desarrollo no-code/low-code con IA más extensible para construir aplicaciones empresariales, herramientas internas y todo tipo de sistemas. Es completamente autogestionada, basada en plugins y amigable para desarrolladores. →[ Explora NocoBase en GitHub](https://github.com/nocobase/nocobase)

---

Este artículo se centra en plataformas de herramientas internas como NocoBase, Appsmith, Budibase, Directus y Baserow, y explica cómo se pueden usar con Hermes Agent en diferentes escenarios.

Primero, aquí hay una tabla de las herramientas cubiertas en este artículo, los sistemas empresariales comunes para los que son adecuadas y las capacidades que Hermes Agent puede añadir.

| Herramienta | Sistemas empresariales / herramientas internas recomendados                                                                                                                              | Lo que Hermes Agent puede añadir                                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NocoBase    | CRM, ERP, sistemas de aprobación, sistemas de tickets, gestión de proyectos, gestión de proveedores, gestión de activos, backends de operaciones y otros sistemas empresariales          | Usar lenguaje natural para planificar modelos de datos, configurar páginas y permisos, mantener flujos de trabajo y capturar módulos de negocio de alta frecuencia como Skills reutilizables |
| Appsmith    | Paneles de administración, paneles de datos, backends de atención al cliente, paneles de revisión, herramientas de operaciones, interfaces de gestión de bases de datos                  | Clarificar estructuras de página, organizar lógica de consultas y filtros, explicar relaciones entre componentes y fuentes de datos, y reutilizar plantillas de páginas de administración comunes |
| Budibase    | Sistemas de formularios, flujos de trabajo de aprobación, solicitudes de empleados, mesas de servicio de TI, aplicaciones de flujo de trabajo de operaciones, herramientas de flujo de trabajo internas | Clarificar campos de formulario, nodos de aprobación y transiciones de estado, generar plantillas de flujo de trabajo y capturar Skills de manejo de solicitudes     |
| Directus    | Backends de bases de datos, gestión de API, sistemas de gestión de contenidos, plataformas de gestión de datos estructurados, backends de operaciones de datos                          | Explicar estructuras de datos, organizar relaciones entre campos, soportar consultas en lenguaje natural y capturar flujos de trabajo de gestión de datos y mantenimiento de contenidos |
| Baserow     | Bases de datos basadas en tablas, CRM ligero, listas de proveedores, planes de contenido, tablas de progreso de proyectos, listas de inventario                                           | Planificar estructuras de tablas y vistas, organizar reglas de filtro, generar campos de categoría y estado, y reutilizar plantillas de aplicaciones ligeras        |

## 1. NocoBase

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-orh9iv.png)

Sitio web oficial: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

Estrella de GitHub: 22.6k

### Introducción

NocoBase es una plataforma open source de no-code / low-code con IA para construir sistemas empresariales internos y backends de administración.

En esencia, NocoBase ayuda a los equipos a construir sistemas empresariales de larga duración a través de modelos de datos, configuración de páginas, gestión de permisos, flujos de trabajo y extensiones de plugins. Estos sistemas suelen cambiar con el tiempo: los campos deben ajustarse, las páginas optimizarse, los permisos redefinirse y los flujos de trabajo de aprobación y notificación actualizarse a medida que el negocio cambia.

NocoBase es muy adecuado para estos sistemas a largo plazo, mientras que Hermes Agent puede participar aún más en la construcción, configuración y mantenimiento del sistema.

En cuanto a capacidades de IA, NocoBase ya proporciona AI Employees, AI Skills, CLI, MCP y soporte relacionado. Los AI Employees pueden actuar como asistentes inteligentes dentro del sistema y ayudar con consultas de datos, generación de contenido, manejo de tareas y más. Los AI Skills ayudan a los Agentes externos a entender cómo está configurado NocoBase y qué pueden y no pueden operar. El CLI permite a los Agentes ejecutar instalación, creación, modificación y otras operaciones a través de comandos. MCP proporciona un punto de entrada más estándar para que herramientas de IA externas se conecten a NocoBase.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-civede.png)

### ¿Qué se puede hacer con Hermes?

Después de conectar Hermes a NocoBase, puede entender el sistema de configuración de NocoBase a través de NocoBase Skills y ejecutar operaciones de creación, modificación, despliegue y otras a través del CLI de NocoBase.

**1. Crear módulos de negocio con lenguaje natural**

Por ejemplo, al crear un módulo de gestión de renovaciones de clientes, primero puedes dejar que Hermes organice las estructuras de datos para clientes, contratos, registros de renovación, tareas de seguimiento y más. Luego puede planificar las páginas de lista, páginas de detalle, paneles y permisos básicos.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-auh66t.png)

**2. Ayudar a mantener permisos y flujos de trabajo**

Por ejemplo, si la regla es "los vendedores solo pueden ver los clientes que poseen, los supervisores pueden ver los clientes de su equipo y finanzas puede ver los montos de los contratos", Hermes puede convertir esta descripción de negocio en una lógica de configuración de permisos y flujos de trabajo más específica.

**3. Capturar operaciones de alta frecuencia como Skills**

Después de completar un módulo de CRM, flujo de trabajo de aprobación o gestión de proveedores por primera vez, Hermes puede capturar prácticas como la nomenclatura de campos, la estructura de páginas y las reglas de permisos. Estas se pueden reutilizar al construir módulos similares más adelante.

### Ejemplo de instrucción de tarea

```text
Ayúdame a crear un módulo de gestión de renovaciones de clientes en NocoBase.

Debe incluir información del cliente, fecha de vencimiento del contrato, estado de renovación, propietario, registros de seguimiento y un flujo de trabajo de aprobación.

Para los permisos:
Los vendedores solo pueden ver los clientes que poseen.
Los supervisores de ventas pueden ver los clientes del equipo.
Finanzas puede ver los montos de los contratos y el estado de pago.
Los administradores pueden ver y editar todo el contenido.

Para los flujos de trabajo:
Generar automáticamente un recordatorio de renovación 30 días antes de que expire el contrato.
Cuando el monto de renovación supere los 100,000 yuanes, se requiere la aprobación del supervisor y finanzas.
Después de la aprobación, actualizar el estado de renovación y generar la siguiente tarea de seguimiento.

Después de completarlo, organiza este proceso de construcción del módulo en un Skill reutilizable, para que pueda usarse más adelante para crear módulos de gestión de proveedores, gestión de contratos o gestión de proyectos.
```

![NocoBase4-yks1wd.png](https://static-docs.nocobase.com/NocoBase4-yks1wd.png)

### Recursos relacionados

Documentación: [https://docs.nocobase.com/](https://docs.nocobase.com/)

Documentación de IA: [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

Hermes Agent: [https://docs.nocobase.com/en/ai/hermes-agent](https://docs.nocobase.com/en/ai/hermes-agent)

## 2. Appsmith

![Appsmith1.png](https://static-docs.nocobase.com/Appsmith1-ixuhwg.png)

Sitio web oficial: [https://www.appsmith.com/](https://www.appsmith.com/)

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

Estrella de GitHub: 39.9k

### Introducción

Appsmith es una plataforma low-code open source utilizada principalmente para construir aplicaciones internas como paneles de administración, paneles de datos, backends de atención al cliente, herramientas de revisión y herramientas de TI. Puede conectarse a bases de datos, API y servicios de terceros, y construir rápidamente interfaces para equipos internos a través de componentes de arrastrar y soltar, configuración de consultas y extensiones de JavaScript.

Appsmith proporciona Appsmith AI, que puede añadir consultas de IA, generación de texto, clasificación, resumen y otras capacidades a las aplicaciones. También puede construir interacciones de IA en torno a datos internos. Appsmith también está desarrollando Appsmith Agents para llevar las capacidades de IA a las herramientas y sistemas que los equipos usan a diario.

![Appsmith2.png](https://static-docs.nocobase.com/Appsmith2-64xce0.png)

### ¿Qué se puede hacer con Hermes?

Appsmith construye páginas específicas e interfaces de operación de datos, mientras que Hermes ayuda a los equipos a convertir requisitos de lenguaje natural en estructuras de página, lógica de consultas y reglas de operación más claras.

1. Planificar interfaces de administración internas

Por ejemplo, al construir un panel de manejo de excepciones de pedidos, primero puedes pedirle a Hermes que aclare qué campos deben mostrarse, qué filtros se necesitan, qué botones de acción se requieren y cómo debe dividirse la página en secciones. Appsmith puede entonces encargarse de la construcción específica de la interfaz y la conexión de datos.

2. Organizar la lógica de consultas y filtros

Un problema común con las herramientas internas no es si una página existe, sino si la lógica de datos detrás de la página es clara. Hermes puede ayudar a los equipos a convertir descripciones como "qué pedidos quiero ver", "cómo deben identificarse las excepciones" y "qué registros deben priorizarse" en condiciones de consulta y reglas de operación.

3. Capturar plantillas de páginas de administración

Los backends de atención al cliente, los paneles de revisión, los paneles de operaciones y las páginas de consulta financiera suelen aparecer repetidamente. Hermes puede capturar campos comunes, diseños de componentes, filtros y lógica de operación como Skills, para que páginas similares puedan reutilizarse más adelante.

### Ejemplo de instrucción de tarea

```text
Ayúdame a planificar un panel de manejo de excepciones de pedidos, que luego se construirá en Appsmith.

La página debe mostrar pedidos anómalos, nombres de clientes, montos de pedidos, propietarios, motivos de excepción, estado de procesamiento y el registro de comunicación más reciente.

Los filtros incluyen:
Región.
Monto del pedido.
Estado de procesamiento.
Propietario.
Tipo de excepción.

Para las operaciones:
El personal de operaciones puede actualizar el estado de procesamiento.
Los supervisores pueden asignar propietarios en lotes.
Finanzas solo puede ver los montos de los pedidos y el estado de pago.

Organiza la estructura de la página, la lógica de consulta de datos y el diseño de componentes, y captúralos como una plantilla de página de herramienta interna reutilizable.
```

### Recursos relacionados

Documentación: [https://docs.appsmith.com/](https://docs.appsmith.com/)

Appsmith AI: [https://docs.appsmith.com/connect-data/reference/appsmith-ai](https://docs.appsmith.com/connect-data/reference/appsmith-ai)

## 3. Budibase

![Budibase1.png](https://static-docs.nocobase.com/Budibase1-py408w.png)

Sitio web oficial: [https://budibase.com/](https://budibase.com/)

GitHub: [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

Estrella de GitHub: 28k

### Introducción

Budibase es una plataforma de operaciones open source utilizada principalmente para construir aplicaciones internas, flujos de trabajo de automatización y Agentes de IA. Está más enfocada en escenarios de negocio basados en procesos, como solicitudes de empleados, manejo de aprobaciones, mesas de servicio de TI, enrutamiento de formularios, actualizaciones de datos y automatización de operaciones.

Budibase soporta la generación de código, la generación de tablas de bases de datos y la creación de flujos de trabajo de automatización impulsados por grandes modelos de lenguaje. Los Budibase Agents también están en desarrollo, permitiendo a los equipos definir el comportamiento del Agente a través de lenguaje natural y conectarlo a datos y API internos.

### ¿Qué se puede hacer con Hermes?

Budibase es más adecuado para aplicaciones basadas en formularios, aprobaciones y flujos de trabajo. Hermes puede ayudar a los equipos a clarificar reglas en la etapa inicial del diseño del flujo de trabajo y capturar métodos de manejo de solicitudes de alta frecuencia más adelante.

1. Clarificar formularios y flujos de trabajo de aprobación

Para procesos como solicitudes de equipos, reembolsos de gastos, atención al cliente y aprobación de contratos, Hermes puede ayudar primero a los equipos a desglosar campos, nodos de aprobación, condiciones de activación y reglas de notificación. Budibase puede entonces encargarse de la construcción real de la aplicación.

2. Generar plantillas de manejo de flujos de trabajo

Muchas solicitudes internas siguen patrones de manejo fijos. Hermes puede organizar flujos de trabajo como "el empleado envía una solicitud, el supervisor la aprueba, el departamento correspondiente la maneja, se actualiza el estado y se notifica al solicitante" en plantillas para una reutilización rápida más adelante.

3. Capturar reglas de operación

Las aplicaciones basadas en flujos de trabajo a menudo necesitan cambiar a medida que cambian las reglas organizativas. Hermes puede registrar secuencias de aprobación, métodos de manejo de excepciones, responsabilidades de roles y reglas de notificación, convirtiéndolos en Skills reutilizables.

![Budibase2.png](https://static-docs.nocobase.com/Budibase2-b8427g.png)

### Ejemplo de instrucción de tarea

```text
Ayúdame a diseñar un proceso de solicitud de equipos para empleados, que luego se construirá en Budibase.

El proceso incluye:
El empleado envía una solicitud de equipo.
El supervisor la aprueba.
TI confirma el inventario.
Después de la aprobación, se actualiza el estado del equipo.
El sistema notifica al solicitante para recoger el equipo.

Los campos del formulario incluyen:
Solicitante.
Departamento.
Tipo de equipo.
Descripción del propósito.
Fecha prevista de recogida.
Estado de aprobación.
Responsable.

Organiza los campos del formulario, los nodos de aprobación, las transiciones de estado y las reglas de notificación, y captura este proceso de solicitud de equipos como un Skill reutilizable.
```

### Recursos relacionados

Documentación: [https://docs.budibase.com/](https://docs.budibase.com/)

Budibase AI: [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai)

## 4. Directus

![Directus1.png](https://static-docs.nocobase.com/Directus1-tqzvl0.png)

Sitio web oficial: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

Estrella de GitHub: 35.9k

### Introducción

Directus es una API en tiempo real y un backend de aplicaciones para gestionar el contenido de bases de datos SQL. Puede generar API REST / GraphQL y una interfaz de administración sobre bases de datos existentes. Soporta PostgreSQL, MySQL, SQLite, OracleDB, MariaDB, MS SQL y otras bases de datos, así como despliegue local, despliegue privado y servicios en la nube.

En cuanto a capacidades de IA, Directus proporciona Directus MCP, que permite a herramientas de IA como Claude y ChatGPT leer, crear y gestionar datos de Directus. Directus MCP sigue el sistema de permisos existente, por lo que las acciones de acceso y modificación de la IA deben pasar por la misma capa de autenticación y autorización.

![Directus2.png](https://static-docs.nocobase.com/Directus2-92qier.png)

### ¿Qué se puede hacer con Hermes?

Directus está más enfocado en backends de datos y gestión de API. Cuando Hermes se usa con Directus, el enfoque no está en generar páginas, sino en ayudar a los equipos a entender las estructuras de datos, consultar datos de negocio y capturar acciones comunes de gestión de datos.

1. Explicar estructuras de datos

Para bases de datos existentes, los usuarios de negocio a menudo no entienden cómo se relacionan los campos entre sí. Hermes puede ayudar a organizar colecciones, campos, relaciones y límites de permisos, haciendo que la estructura de datos sea más fácil de entender.

2. Asistir con consultas y organización de datos

Por ejemplo, al consultar proveedores, contratos, pagos, estado de contenido, registros de clientes e información similar, Hermes puede convertir requisitos de lenguaje natural en una lógica de consulta de datos más específica.

3. Capturar acciones de gestión de datos

Acciones como la revisión de contenido, el mantenimiento de perfiles de proveedores, la organización de datos de clientes y la verificación del estado de los contratos a menudo se repiten. Hermes puede organizar estos procesos de operación de datos en Skills, para que puedan ejecutarse con las mismas reglas más adelante.

### Ejemplo de instrucción de tarea

```text
Ayúdame a organizar la estructura de datos de proveedores en Directus.

Debe distinguir:
Información básica del proveedor.
Contactos.
Registros de contratos.
Estado de pago.
Estado de cooperación.
Registro de comunicación más reciente.

Explica cómo deberían relacionarse estas colecciones y organiza un proceso de verificación del estado del proveedor.

Más adelante, espero poder consultar usando lenguaje natural:
Qué contratos de proveedores están a punto de vencer.
Qué proveedores tienen un estado de pago anómalo.
Qué proveedores no han actualizado los registros de comunicación en más de 30 días.

Captura este método de organización y consulta de datos como un Skill reutilizable.
```

### Recursos relacionados

Documentación: [https://directus.io/docs](https://directus.io/docs)

Directus MCP: [https://directus.io/mcp](https://directus.io/mcp)

Documentación de MCP: [https://directus.io/docs/guides/ai/mcp](https://directus.io/docs/guides/ai/mcp)

## 5. Baserow

![Baserow1.png](https://static-docs.nocobase.com/Baserow1-23hy4e.png)

Sitio web oficial: [https://baserow.io/](https://baserow.io/)

GitHub: [https://github.com/baserow/baserow](https://github.com/baserow/baserow)

Estrella de GitHub: 4.9k

### Introducción

Baserow es una plataforma no-code open source que se puede utilizar para construir bases de datos, aplicaciones, automatizaciones y Agentes de IA. A menudo se considera una alternativa open source a Airtable. Soporta tanto despliegue en la nube como autogestionado, y es adecuado para gestionar datos estructurados y aplicaciones empresariales ligeras.

Baserow 2.0 introdujo el asistente de IA Kuma, que puede crear bases de datos, escribir fórmulas y construir automatizaciones con lenguaje natural. También proporciona campos de IA, un constructor de automatizaciones, búsqueda en el espacio de trabajo y otras capacidades.

![Baserow2.png](https://static-docs.nocobase.com/Baserow2-1684s9.png)

### ¿Qué se puede hacer con Hermes?

Baserow es más adecuado para construir aplicaciones ligeras a partir de datos basados en tablas. Cuando se usa con Baserow, Hermes puede ayudar a los equipos a pasar de "organizar tablas" a "capturar hábitos de gestión de datos".

1. Crear estructuras de tablas y vistas

Para listas de clientes, listas de proveedores, planes de contenido, progreso de proyectos, registros de inventario y casos de uso similares, Hermes puede primero planificar estructuras de tablas, campos y vistas basándose en descripciones de negocio. Baserow se encarga entonces de la gestión de datos.

2. Organizar filtros y reglas de clasificación

Las aplicaciones ligeras a menudo dependen de diferentes vistas. Hermes puede convertir reglas de negocio como "pendiente de revisión", "en cooperación", "a punto de vencer" y "alta prioridad" en condiciones de filtro y configuraciones de vista.

3. Capturar plantillas de aplicaciones ligeras

Si un equipo usa a menudo Baserow para gestionar datos de negocio similares, Hermes puede capturar estructuras de campos, reglas de vista y categorías de estado como Skills, y luego reutilizarlos al crear nuevas tablas más adelante.

### Ejemplo de instrucción de tarea

```text
Ayúdame a planificar una tabla de gestión de proveedores, que luego se creará en Baserow.

Los campos incluyen:
Nombre del proveedor.
Persona de contacto.
Información de contacto.
Estado de cooperación.
Fecha de vencimiento del contrato.
Estado de pago.
Propietario.
Hora de la última comunicación.
Notas.

Se deben crear tres vistas:
Proveedores pendientes de revisión.
Proveedores en cooperación.
Proveedores con contratos a punto de vencer.

Diseña condiciones de filtro para cada vista y captura esta estructura de tabla de proveedores y reglas de vista como un Skill reutilizable, para que sea más fácil crear tablas de clientes, tablas de canales o tablas de socios más adelante.
```

### Recursos relacionados

Documentación: [https://baserow.io/user-docs](https://baserow.io/user-docs)

Baserow AI: [https://baserow.io/product/baserow-ai](https://baserow.io/product/baserow-ai)

## Preguntas Frecuentes

### 1. Si estas plataformas ya tienen capacidades de IA, ¿por qué sigue siendo necesario Hermes?

La IA integrada en estas plataformas suele ser mejor para completar tareas específicas dentro del producto, como generar páginas, SQL, lógica de formularios o configuraciones de componentes.

El valor de Hermes reside en el autohospedaje, la memoria a largo plazo y la acumulación de Skills. Es más adecuado para recordar reglas de negocio, hábitos de permisos y métodos de configuración del sistema a través de tareas y conversaciones.

### 2. ¿Qué plataformas de herramientas internas funcionan mejor con Hermes?

Las plataformas que son más adecuadas para Hermes son las plataformas de sistemas empresariales de larga duración que requieren mantenimiento continuo, como NocoBase, Budibase, Appsmith, Directus y Baserow.

Entre ellas, NocoBase es más adecuado para mantener sistemas empresariales completos. Appsmith es más adecuado para interfaces internas y paneles de datos. Budibase es más adecuado para formularios y flujos de trabajo. Directus y Baserow son más adecuados para escenarios de gestión de datos.

### 3. ¿Para qué tipo de equipos es adecuado Hermes Agent?

Hermes es más adecuado para equipos que ya utilizan herramientas autogestionadas, valoran la seguridad de los datos, necesitan mantener sistemas empresariales a largo plazo y quieren que la IA recuerde hábitos de configuración y capture experiencia operativa.

### 4. ¿Por qué son importantes los Agentes de IA autogestionados para las herramientas internas empresariales?

Porque las herramientas internas suelen contener datos empresariales sensibles, como clientes, pedidos, contratos, aprobaciones, empleados y finanzas.

Cuando un Agente de IA necesita acceder a estos datos y participar en operaciones del sistema, los equipos prestarán más atención a dónde se almacenan los datos, cómo se controlan los permisos, cómo se revisan las operaciones y cómo se gestiona la memoria a largo plazo. Los Agentes autogestionados son más adecuados para equipos que requieren un control más estricto.

Hay muchos productos de Agentes de IA, pero si tu equipo ya está utilizando plataformas de herramientas internas open source y quiere llevar los Agentes de IA a los sistemas empresariales internos de una manera más segura y controlable, vale la pena probar Hermes Agent. Si este artículo te ha sido útil, no dudes en compartirlo con amigos que estén siguiendo los Agentes de IA autogestionados y la construcción de herramientas internas.

**Lecturas relacionadas**

* [OpenClaw y 5 herramientas open source para monitorear flujos de trabajo empresariales](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [¿Qué herramientas open source funcionan bien con OpenCode? 5 proyectos para probar](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Construyendo herramientas internas con Codex: 6 proyectos open source para desarrolladores](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Después de Claude Code: 6 herramientas open source que deberías conocer](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 herramientas open source de IA y no-code para el desarrollo de software empresarial](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 plataformas open source de Agentes de IA para construir herramientas internas](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [Los mejores CRM autogestionados de grado empresarial con RBAC, IA y soporte de API abierta](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 mejores herramientas open source para reemplazar el middleware de integración personalizado](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [¿Reemplazar Excel con NocoBase o Airtable? Una comparación costo por costo](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 formas de construir rápidamente aplicaciones web a partir de datos de Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [No solo PostgreSQL: Comparando 5 plataformas no-code/low-code con soporte de bases de datos externas](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Guía de selección de herramientas de gestión de proyectos open source, edición 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
