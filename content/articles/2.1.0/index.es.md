---
title: "Anuncio de NocoBase 2.1.0"
description: "NocoBase 2.1 introduce una nueva CLI para que personas y Agentes de IA se conecten y gestionen aplicaciones. También mejora la construcción con IA, Skills, el desarrollo de plugins de IA, Empleados de IA, la colaboración multi-aplicación, la gestión de versiones, los flujos de trabajo y la compatibilidad con 2.0."
---

NocoBase 2.1 es una actualización importante de las **capacidades de IA, multi-aplicación y adaptación a 2.0**. Hemos introducido la CLI de NocoBase, que facilita que tanto personas como Agentes de IA se conecten y gestionen aplicaciones de NocoBase. Desde la creación de aplicaciones y la construcción asistida por IA hasta Empleados de IA mejorados y un plugin de desarrollo de IA, cubre el flujo completo desde la incorporación del entorno hasta la construcción del sistema y la colaboración empresarial. También hemos mejorado las capacidades multi-aplicación para facilitar la interacción y colaboración entre aplicaciones. Al mismo tiempo, hemos añadido control de versiones y seguimos completando sustancialmente el soporte de páginas 2.0 y las capacidades principales: más bloques, campos, acciones y plugins ahora son compatibles con 2.0.

## Novedades

### Presentación de la CLI de NocoBase

En esta versión, la CLI de NocoBase (`nb`) es el punto de entrada principal tanto para usuarios normales como para Agentes de IA que se conectan a NocoBase.

La CLI se utiliza para inicializar, conectar y gestionar aplicaciones de NocoBase en un espacio de trabajo local. Cubre varios escenarios:

- Instalar una nueva aplicación de NocoBase a través de Docker, npm o Git, y luego guardarla como un entorno de CLI
- Conectarse a una aplicación de NocoBase existente y guardarla como un entorno de CLI
- Instalar, crear y activar plugins
- Operar, hacer copias de seguridad y gestionar aplicaciones de NocoBase

![Asistente visual de la CLI de NocoBase](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Ya sea que quieras integrar IA en un sistema existente o crear una nueva aplicación desde cero, puedes gestionar la inicialización y el mantenimiento continuo a través de la CLI.

Para los equipos, la CLI proporciona un punto de entrada estándar que los Agentes de IA pueden entender y operar: la inicialización del entorno, la configuración de la conexión y la gestión en tiempo de ejecución comparten el mismo flujo.

La versión oficial también añade un conjunto de comandos relacionados con operaciones:

- `nb api`: Llamar a la API de NocoBase a través de la CLI.
- `nb app`: Gestionar el estado de ejecución de la aplicación: iniciar, detener, reiniciar, registros y actualizar.
- `nb backup`: Crear una copia de seguridad y descargarla localmente, o restaurar un archivo de copia de seguridad local en un entorno de destino.
- `nb config`: Gestionar la configuración predeterminada de la CLI.
- `nb db`: Gestionar la base de datos integrada del entorno seleccionado.
- `nb env`: Gestionar los entornos del proyecto de NocoBase, el entorno actual, el estado, los detalles y los comandos de ejecución.
- `nb license`: Gestionar licencias comerciales y plugins con licencia.
- `nb plugin`: Gestionar los plugins del entorno de NocoBase seleccionado.
- `nb scaffold`: Generar un andamio para el desarrollo de plugins de NocoBase.
- `nb self`: Verificar o actualizar la propia CLI de NocoBase.
- `nb source`: Gestionar proyectos fuente locales: descargar, desarrollar, compilar y probar.

Documentación relacionada:

- [Instalar NocoBase con la CLI](https://docs.nocobase.com/quickstart/installation/cli)
- [Guía de integración de Agentes de IA](https://docs.nocobase.com/ai/quick-start)
- [Referencia de comandos de la CLI de NocoBase](https://docs.nocobase.com/api/cli/)

### Construcción asistida por IA: reemplazar la configuración manual con conversación

La construcción asistida por IA es una de las experiencias principales de esta versión. Puedes describir tus necesidades empresariales en lenguaje natural, y la IA ayuda a completar el modelado de datos, la configuración de páginas, la configuración de permisos y la orquestación de flujos de trabajo.

En comparación con la construcción low-code tradicional, la construcción asistida por IA tiene varias ventajas claras:

- Una barrera de entrada más baja: no necesitas estar familiarizado con todos los conceptos de configuración de antemano
- Un camino más corto desde la descripción del requisito hasta el prototipo funcional
- La configuración de datos, interfaz de usuario y flujo de trabajo puede ser completada por la IA de forma continua

Por ejemplo: "diseña un modelo de datos CRM para mí", "crea una página de gestión de clientes para mí" o "orquesta un flujo de trabajo que descuente automáticamente el inventario después de crear un pedido": todo esto puede ser manejado por la IA dentro del alcance de las capacidades de NocoBase.

Documentación relacionada:

- [Inicio rápido de construcción asistida por IA](https://docs.nocobase.com/ai-builder/)

### Skills de NocoBase cubren todo el flujo de construcción

Para ayudar a la IA a comprender realmente el sistema de configuración de NocoBase, esta versión incluye un conjunto de paquetes de conocimiento del dominio que se pueden instalar en Agentes de IA: Skills de NocoBase.

Las Skills son envoltorios estandarizados de conocimiento y operación organizados en torno a los dominios de capacidad clave de NocoBase, lo que ayuda a la IA a comprender con mayor precisión los modelos de objetos, las estructuras de configuración y los límites de ejecución.

Actualmente proporcionamos 8 Skills que cubren todo el flujo de construcción:

- [Gestión del entorno](https://docs.nocobase.com/ai-builder/env-bootstrap): comprobaciones del entorno, instalación/despliegue, actualización y resolución de problemas
- [Modelado de datos](https://docs.nocobase.com/ai-builder/data-modeling): crear y gestionar tablas, campos y relaciones
- [Construcción de interfaz de usuario](https://docs.nocobase.com/ai-builder/ui-builder): crear y editar páginas, bloques, ventanas emergentes y reacciones de interacción
- [Gestión de flujos de trabajo](https://docs.nocobase.com/ai-builder/workflow): crear, editar, habilitar y diagnosticar flujos de trabajo
- [Configuración de permisos](https://docs.nocobase.com/ai-builder/acl): gestionar roles, políticas de permisos, vinculaciones de usuarios y evaluación de riesgos
- [Soluciones](https://docs.nocobase.com/ai-builder/dsl-reconciler): construir sistemas empresariales completos a partir de YAML (aún en beta, con estabilidad limitada)
- [Gestión de plugins](https://docs.nocobase.com/ai-builder/plugin-manage): ver, habilitar y deshabilitar plugins
- [Gestión de publicación](https://docs.nocobase.com/ai-builder/publish): publicación entre entornos, copia de seguridad/restauración y migración

Con las Skills, la IA puede comprender con mayor precisión el sistema de configuración de NocoBase y proporcionar una asistencia más inteligente al construir y gestionar sistemas.

**Nota**: Las Skills de NocoBase aún se están mejorando activamente. Las Skills de NocoBase también se instalan automáticamente cuando instalas e inicializas la CLI de NocoBase, por lo que en la mayoría de los casos no es necesario instalarlas por separado.

Documentación relacionada:

- [Skills de NocoBase](https://github.com/nocobase/skills)

### Plugin de desarrollo de IA

Esta versión completa las capacidades fundamentales necesarias para el desarrollo de plugins de IA, de modo que la IA pueda participar no solo en la construcción de aplicaciones, sino también en el desarrollo de plugins personalizados.

Esto se manifiesta en tres áreas principales:

- Una canalización de compilación unificada `rsbuild/rspack`, que consolida el desarrollo de plugins y el sistema de compilación del frontend
- Una capacidad `client-v2` y un sistema de enrutamiento `/v/` orientados al desarrollo de IA, preparándose para el desarrollo de plugins de cliente de próxima generación
- Skills de desarrollo de plugins de IA que ayudan a la IA a comprender mejor la estructura de los plugins, la organización del código y los patrones de implementación

La preparación en torno a `client-v2` incluye:

- `@nocobase/app` expone el punto de entrada `client-v2`
- El núcleo incluye un paquete `@nocobase/client-v2` con componentes base, utilidades y definiciones de tipos
- Cada plugin obtiene un directorio `/src/client-v2`
- Se añade una nueva ruta `/v/` — aún se está mejorando activamente, disponible para usuarios pioneros
- El núcleo se está migrando gradualmente a V2
- Los plugins se están migrando gradualmente a V2

Una canalización de compilación unificada reduce el costo del desarrollo y la depuración de plugins de frontend. La implementación gradual de `client-v2` también le da a la IA una estructura de destino más estable para generar y mantener el código de los plugins.

En la práctica: puedes describir un requisito de plugin en lenguaje natural, y la IA ayuda a generar el código frontend y backend, las tablas de datos, las API, la configuración de permisos y el contenido de i18n.

**Nota**: El desarrollo de plugins de IA es solo para nuevos plugins de estilo `client-v2`. Proporcionaremos documentación de migración y Skills para pasar de plugins `client-v1` a `client-v2`, para ayudarte a llevar los plugins existentes al nuevo sistema.

Documentación relacionada:

- [Inicio rápido del plugin de desarrollo de IA](https://docs.nocobase.com/ai-dev/)
- [Desarrollo de plugins](https://docs.nocobase.com/plugin-development/)

### Mejoras en los Empleados de IA

La construcción asistida por IA responde a "¿cómo uso la IA para construir un sistema?"; los Empleados de IA responden a "¿cómo hago que la IA trabaje dentro del sistema para resolver problemas empresariales concretos?".

Los Empleados de IA existían en versiones anteriores, pero en esta versión se han mejorado las capacidades relacionadas y se ha completado el núcleo de IA:

- [Soporte MCP](https://docs.nocobase.com/ai-employees/features/mcp)
- [Nuevo Atlas de Empleados de IA](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), que desempeña un rol de líder de equipo y asigna tareas a otros Empleados de IA según la intención del usuario
- [Nodo de flujo de trabajo de Empleado de IA](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [Herramienta de búsqueda web basada en LLM](https://docs.nocobase.com/ai-employees/features/web-search)
- [Nueva herramienta de consulta agregada y herramienta de generación de informes](https://docs.nocobase.com/ai-employees/scenarios/business-report) para producir informes de análisis empresarial
- [Nueva ingeniera de localización Lina](https://docs.nocobase.com/ai-employees/built-in/lina), un Empleado de IA integrado del plugin de localización utilizado para la traducción de localización del sistema, compatible con ámbitos de traducción incremental, seleccionada y completa

Estas mejoras llevan la extensibilidad, orquestación y capacidades de ejecución de los Empleados de IA dentro de los sistemas empresariales al siguiente nivel. Los Empleados de IA pueden comprender el contexto empresarial actual, invocar habilidades para ejecutar tareas específicas, participar en flujos de trabajo automatizados y combinar información externa para ofrecer análisis y resultados.

La versión oficial también añade soporte para que los Empleados de IA carguen archivos desde campos de archivos adjuntos de flujos de trabajo y manejen múltiples conversaciones en paralelo, mejorando aún más la usabilidad de los Empleados de IA en procesos empresariales reales.

Documentación relacionada:

- [Empleados de IA](https://docs.nocobase.com/ai-employees/)
- [Lina: Ingeniera de localización](https://docs.nocobase.com/ai-employees/built-in/lina)
- [Traducir términos de localización con Lina y un modelo local HY-MT1.5-1.8B](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)

### Control de versiones

El control de versiones te ayuda a gestionar mejor las iteraciones de versiones y el historial de cambios de tu aplicación. Puedes crear, ver y restaurar diferentes versiones de una aplicación, lo que facilita cambiar de versión y recuperarse de problemas durante el desarrollo y las operaciones. **Nota: Esta función requiere la edición Professional o superior.**

![](https://static-docs.nocobase.com/20260526220510.png)

Documentación relacionada:

- [Control de versiones](https://docs.nocobase.com/ops-management/version-control/)
- [Gestor de copias de seguridad](https://docs.nocobase.com/ops-management/backup-manager/)

### Mejoras multi-aplicación

En esta versión, hemos realizado algunas mejoras importantes en los despliegues multi-aplicación, principalmente en tres áreas:

- [Nuevo bloque de aplicación y selector de aplicaciones](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher), que te permiten mostrar puntos de entrada a otras subaplicaciones en una página, facilitando a los usuarios el cambio entre la aplicación principal y las subaplicaciones.

![](https://static-docs.nocobase.com/202605271403304.png)

- [Nuevo inicio de sesión único de aplicación](https://docs.nocobase.com/multi-app/multi-app/app-sso). Cuando un usuario accede a una subaplicación desde la aplicación principal, o cambia entre subaplicaciones, el sistema intenta iniciar sesión automáticamente en la subaplicación de destino utilizando el usuario actualmente conectado. Los usuarios ya no necesitan volver a introducir sus credenciales en cada subaplicación.

![](https://static-docs.nocobase.com/202605271406542.png)

- [Llamada a API de subaplicaciones](https://docs.nocobase.com/multi-app/multi-app/sub-app-api). En escenarios multi-aplicación, cada subaplicación tiene su propia API independiente, diferenciada por prefijo de ruta, parámetros, etc., lo que facilita la llamada a la API de una subaplicación.

Estas mejoras son muy prácticas para los usuarios que realizan despliegues multi-aplicación, facilitando el intercambio de datos y la operación entre múltiples aplicaciones y mejorando la eficiencia general de colaboración de los sistemas multi-aplicación.

Documentación relacionada:

- [Bloque de aplicación y selector de aplicaciones](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher)
- [Inicio de sesión único de aplicación](https://docs.nocobase.com/multi-app/multi-app/app-sso)
- [Llamada a API de subaplicaciones](https://docs.nocobase.com/multi-app/multi-app/sub-app-api)

### Mejoras en los flujos de trabajo

Esta versión mejora la **controlabilidad y observabilidad** de los flujos de trabajo:

- Se ha añadido control de tiempo de espera: los flujos de trabajo que se ejecutan durante demasiado tiempo se terminan automáticamente (los subflujos también admiten la configuración de tiempo de espera)
- Se han añadido campos de creado por y actualizado por
- Se ha añadido un campo de registro a los trabajos de los nodos, lo que facilita la visualización de los registros de los nodos durante la depuración
- El activador de Webhook (modo síncrono) devuelve un estado de respuesta 408 en caso de tiempo de espera

Documentación relacionada:

- [Flujo de trabajo](https://docs.nocobase.com/workflow/)

### Campo de firma manuscrita

Se ha añadido un campo de firma manuscrita que permite dibujar y guardar una firma en un formulario, adecuado para aprobaciones, hojas de confirmación, recibos y escenarios similares.

Documentación relacionada:

- [Campo de firma manuscrita](https://docs.nocobase.com/data-sources/field-signature/)

### Acción de elemento JS

Se ha añadido la acción de elemento JS, que permite ejecutar lógica personalizada en una acción escribiendo JS, funcionando junto con los flujos de eventos para satisfacer necesidades de interacción más flexibles.

Documentación relacionada:

- [Acción de elemento JS](https://docs.nocobase.com/interface-builder/actions/types/js-item)

### Adaptación a 2.0 y nuevas funciones

Además de la IA, esta versión continúa migrando módulos de funciones clave a 2.0, al mismo tiempo que implementa nuevas funciones para escenarios empresariales reales.

Nuevas funciones

- [Campo de firma manuscrita](https://docs.nocobase.com/data-sources/field-signature/)
- [Acción de elemento JS](https://docs.nocobase.com/interface-builder/actions/types/js-item)

Adaptación a 2.0

- [Solicitud personalizada](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Bloque de filtro de árbol](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Bloque de calendario](https://docs.nocobase.com/data-sources/calendar/)
- [Bloque Kanban](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
- [Bloque Gantt](https://docs.nocobase.com/plugins/@nocobase/plugin-gantt)
- [Bloque de lista](https://docs.nocobase.com/interface-builder/blocks/data-blocks/list)
- [Bloque de tarjeta de cuadrícula](https://docs.nocobase.com/interface-builder/blocks/data-blocks/grid-card)
- [Bloque de mapa](https://docs.nocobase.com/plugins/@nocobase/plugin-map)
- [Bloque Markdown](https://docs.nocobase.com/interface-builder/blocks/other-blocks/markdown)
- [Bloque iframe](https://docs.nocobase.com/integration/embed)
- [Bloque de gráficos / Visualización de datos](https://docs.nocobase.com/data-visualization)

## Documentación multilingüe

- Se ha añadido documentación en indonesio y vietnamita
