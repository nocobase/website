---
title: "Anuncio de NocoBase 2.1-beta"
description: "Importante actualización de IA: desde la integración CLI y la construcción impulsada por IA hasta NocoBase Skills, desarrollo de complementos de IA y empleados de IA mejorados, cubriendo todo el ciclo de vida de construcción, extensión y operación de sistemas empresariales. Construye y ejecuta sistemas empresariales reales más rápido con IA."
---

Este documento aplica a NocoBase 2.1.0-beta.24 y versiones posteriores.

Esta es una actualización importante **centrada en las capacidades de IA**. Esta versión te permite integrar Agentes de IA en NocoBase, abarcando la integración con CLI, la construcción asistida por IA, Empleados de IA mejorados y un plugin de desarrollo de IA, cubriendo el flujo completo desde la incorporación del entorno hasta la construcción del sistema y la colaboración empresarial. También hemos seguido completando el soporte para páginas V2 y las capacidades principales.

## Novedades

### La CLI de NocoBase se convierte en el punto de entrada oficial para los Agentes de IA

En esta versión, la CLI de NocoBase (`nb`) es el punto de entrada principal para que los Agentes de IA se conecten a NocoBase.

La CLI se utiliza para inicializar, conectar y gestionar aplicaciones de NocoBase en un espacio de trabajo local. Cubre dos escenarios:

- Conectarse a una aplicación NocoBase existente y guardarla como un entorno de CLI
- Instalar una nueva aplicación NocoBase a través de Docker, npm o Git, y luego guardarla como un entorno de CLI

![Asistente visual de la CLI de NocoBase](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Ya sea que quieras integrar IA en un sistema existente o crear una nueva aplicación desde cero, puedes gestionar la inicialización y el mantenimiento continuo a través de la CLI.

Para los equipos, la CLI proporciona un punto de entrada estándar que los Agentes de IA pueden entender y operar: la inicialización del entorno, la configuración de la conexión y la gestión del tiempo de ejecución comparten el mismo flujo.

Documentación relacionada:

- [Guía de integración de Agentes de IA](https://docs.nocobase.com/ai/quick-start)
- [Referencia de comandos de la CLI de NocoBase](https://docs.nocobase.com/api/cli/)

### Construcción asistida por IA: reemplaza la configuración manual con conversación

La construcción asistida por IA es una de las experiencias principales de esta versión. Puedes describir tus necesidades empresariales en lenguaje natural, y la IA ayuda a completar el modelado de datos, la configuración de páginas, la configuración de permisos y la orquestación de flujos de trabajo.

En comparación con la construcción low-code tradicional, la construcción asistida por IA tiene varias ventajas claras:

- Una barrera de entrada más baja: no necesitas estar familiarizado con todos los conceptos de configuración de antemano
- Un camino más corto desde la descripción del requisito hasta el prototipo funcional
- La configuración de datos, interfaz de usuario y flujo de trabajo puede ser completada por la IA de forma continua

Por ejemplo: "diseña un modelo de datos CRM para mí", "crea una página de gestión de clientes para mí" o "orquesta un flujo de trabajo que descuente automáticamente el inventario después de crear un pedido": todo esto puede ser manejado por la IA dentro del alcance de las capacidades de NocoBase.

Documentación relacionada:

- [Inicio rápido de construcción asistida por IA](https://docs.nocobase.com/ai-builder/)

### Las Skills de NocoBase cubren el flujo completo de construcción

Para ayudar a la IA a comprender realmente el sistema de configuración de NocoBase, esta versión incluye un conjunto de paquetes de conocimiento de dominio que se pueden instalar en los Agentes de IA: las Skills de NocoBase.

Las Skills son envoltorios estandarizados de conocimiento y operación organizados en torno a los dominios de capacidad clave de NocoBase, que ayudan a la IA a comprender con mayor precisión los modelos de objetos, las estructuras de configuración y los límites de ejecución.

Actualmente proporcionamos 8 Skills que cubren el flujo completo de construcción:

- [Gestión del entorno](https://docs.nocobase.com/ai-builder/env-bootstrap): comprobaciones del entorno, instalación/despliegue, actualización y resolución de problemas
- [Modelado de datos](https://docs.nocobase.com/ai-builder/data-modeling): crear y gestionar tablas, campos y relaciones
- [Construcción de IU](https://docs.nocobase.com/ai-builder/ui-builder): crear y editar páginas, bloques, ventanas emergentes y reacciones de interacción
- [Gestión de flujos de trabajo](https://docs.nocobase.com/ai-builder/workflow): crear, editar, habilitar y diagnosticar flujos de trabajo
- [Configuración de permisos](https://docs.nocobase.com/ai-builder/acl): gestionar roles, políticas de permisos, vinculaciones de usuarios y evaluación de riesgos
- [Soluciones](https://docs.nocobase.com/ai-builder/dsl-reconciler): construir sistemas empresariales completos a partir de YAML (aún en beta, con estabilidad limitada)
- [Gestión de plugins](https://docs.nocobase.com/ai-builder/plugin-manage): ver, habilitar y deshabilitar plugins
- [Gestión de publicación](https://docs.nocobase.com/ai-builder/publish): publicación entre entornos, copia de seguridad/restauración y migración

Con las Skills, la IA puede comprender con mayor precisión el sistema de configuración de NocoBase y proporcionar una asistencia más inteligente al construir y gestionar sistemas.

**Nota**: Las Skills de NocoBase aún se están mejorando activamente. Las Skills de NocoBase también se instalan automáticamente cuando instalas e inicializas la CLI de NocoBase, por lo que en la mayoría de los casos no necesitas instalarlas por separado.

Documentación relacionada:

- [Skills de NocoBase](https://github.com/nocobase/skills)

### Plugin de desarrollo de IA

Esta versión completa las capacidades fundamentales necesarias para el desarrollo de plugins de IA, para que la IA pueda participar no solo en la construcción de aplicaciones, sino también en el desarrollo de plugins personalizados.

Esto se manifiesta en tres áreas principales:

- Una canalización de compilación unificada `rsbuild/rspack`, que consolida el desarrollo de plugins y el sistema de compilación del frontend
- Una capacidad `client-v2` y un sistema de enrutamiento `/v2/` orientados al desarrollo de IA, preparándose para el desarrollo de plugins de cliente de próxima generación
- Skills de desarrollo de plugins de IA que ayudan a la IA a comprender mejor la estructura de los plugins, la organización del código y los patrones de implementación

La preparación en torno a `client-v2` incluye:

- `@nocobase/app` expone la entrada `client-v2`
- El núcleo incluye un paquete `@nocobase/client-v2` con componentes base, utilidades y definiciones de tipos
- Cada plugin obtiene un directorio `/src/client-v2`
- Se añade una nueva ruta `/v2/`
- El núcleo está migrando gradualmente a V2
- Los plugins están migrando gradualmente a V2

Una canalización de compilación unificada reduce el coste del desarrollo y la depuración de plugins de frontend. La implementación gradual de `client-v2` también le da a la IA una estructura objetivo más estable para generar y mantener el código de los plugins.

En la práctica: puedes describir un requisito de plugin en lenguaje natural, y la IA ayuda a generar el código frontend y backend, las tablas de datos, las API, la configuración de permisos y el contenido de i18n.

**Nota**: El desarrollo de plugins de IA es solo para plugins nuevos de estilo `client-v2`. Proporcionaremos documentación de migración y Skills para pasar de plugins `client-v1` a `client-v2`, para ayudarte a incorporar los plugins existentes al nuevo sistema.

Documentación relacionada:

- [Inicio rápido del plugin de desarrollo de IA](https://docs.nocobase.com/ai-dev/)
- [Desarrollo de plugins](https://docs.nocobase.com/plugin-development/)

### Mejoras en los Empleados de IA

La construcción asistida por IA responde a "¿cómo uso la IA para construir un sistema?"; los Empleados de IA responden a "¿cómo dejo que la IA trabaje dentro del sistema para resolver problemas empresariales concretos?".

Los Empleados de IA existían en versiones anteriores, pero en esta versión se han mejorado las capacidades relacionadas y se ha completado el núcleo de IA:

- [Soporte MCP](https://docs.nocobase.com/ai-employees/features/mcp)
- [Nuevo Atlas de Empleados de IA](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), que desempeña un rol de líder de equipo y asigna tareas a otros Empleados de IA según la intención del usuario
- [Nodo de flujo de trabajo de Empleado de IA](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [Herramienta de búsqueda web basada en LLM](https://docs.nocobase.com/ai-employees/features/web-search)
- [Nueva herramienta de consulta agregada y herramienta de generación de informes](https://docs.nocobase.com/ai-employees/scenarios/business-report) para producir informes de análisis empresarial

Estas mejoras llevan la extensibilidad, orquestación y capacidades de ejecución de los Empleados de IA dentro de los sistemas empresariales al siguiente nivel. Los Empleados de IA pueden comprender el contexto empresarial actual, invocar habilidades para ejecutar tareas específicas, participar en flujos de trabajo automatizados y combinar información externa para ofrecer análisis y resultados.

Si tu equipo necesita incorporar colaboración inteligente, análisis automatizado y ejecución de tareas en tus sistemas empresariales, esta es también una de las direcciones más notables en esta actualización.

Documentación relacionada:

- [Empleados de IA](https://docs.nocobase.com/ai-employees/)

### Adaptación a 2.0 y nuevas funciones

Más allá de la IA, esta versión continúa migrando módulos de funciones clave a 2.0, al mismo tiempo que implementa nuevas funciones para escenarios empresariales reales.

Nuevas funciones

- [Campo de firma manuscrita](https://docs.nocobase.com/data-sources/field-signature/)
- [Acción de elemento JS](https://docs.nocobase.com/interface-builder/actions/types/js-item)

Adaptación a 2.0

- [Solicitud personalizada](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Bloque de filtro de árbol](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Bloque de calendario](https://docs.nocobase.com/data-sources/calendar/)
- [Bloque Kanban](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
