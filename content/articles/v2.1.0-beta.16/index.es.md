---
title: "NocoBase v2.1.0-beta.16: refactorización de la CLI de NocoBase"
description: "Nota de la versión v2.1.0-beta.16"
---

### 🎉 Nuevas Funcionalidades

- **[sin definir]** Añadir un flujo de trabajo de CI que verifique las dependencias `plugin-*` peerDependencies faltantes y ejecute la compilación, con informe de PR mediante comentarios. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) por @Molunerfinn

- **[cli-v1]** resolver la ruta de almacenamiento desde env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) por @chenos

- **[cli]** refactorizar la CLI de NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) por @chenos

- **[flow-engine]** Añadir `getSubclassesOfAsync` a FlowEngine para descubrir clases de modelo registradas de forma asíncrona a través del nuevo campo `extends` en `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) por @Molunerfinn

- **[Workflow]**
  - Añadir API para verificar la creación de nodos ([#9207](https://github.com/nocobase/nocobase/pull/9207)) por @mytharcher

  - Añadir campo de registro para trabajos, con el fin de mostrar el contenido del registro de algunos nodos para depuración ([#9165](https://github.com/nocobase/nocobase/pull/9165)) por @mytharcher

- **[Empleados IA]**
  - El flujo de trabajo ha añadido instrucción para empleados IA ([#9025](https://github.com/nocobase/nocobase/pull/9025)) por @cgyrock

  - Se añadió una herramienta de consulta de datos y una herramienta de informe de análisis de negocio para empleados IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) por @2013xile

  - Añadir la capacidad de invocar subagentes para empleados IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) por @cgyrock

  - Se añadió la capacidad SKILLS a los empleados IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) por @cgyrock

- **[Auth: Claves API]** añadir comandos `pm list` y `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) por @chenos

- **[IA: Servidor MCP]**
  - Proporciona una API de consulta de colección de datos genérica, invocable a través de MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) por @2013xile

  - Añadir un nuevo plugin de servidor MCP para permitir la construcción de sistemas NocoBase y el soporte de flujos de trabajo empresariales. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) por @2013xile

- **[Gestor de fuentes de datos]** Soporte para carga bajo demanda de herramientas MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) por @2013xile

- **[IdP: OAuth]** Añadir un nuevo IdP: plugin OAuth para permitir que los servicios MCP se autentiquen mediante OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) por @2013xile

### 🚀 Mejoras

- **[cli]**
  - Se añadió el seguimiento de origen de solicitudes CLI en los registros de solicitudes y registros de auditoría ([#9223](https://github.com/nocobase/nocobase/pull/9223)) por @2013xile

  - Se mejoró la salida de ayuda de la API CLI generada y la agrupación de comandos ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) por @2013xile

  - Se mejoró la ayuda alternativa de `nb api` y se unificaron los mensajes de advertencia para fallos de arranque en tiempo de ejecución ([#9153](https://github.com/nocobase/nocobase/pull/9153)) por @2013xile

- **[servidor]** Se mejoró la documentación de la API swagger del gestor de plugins ([#9080](https://github.com/nocobase/nocobase/pull/9080)) por @2013xile

- **[base de datos]** Se corrigió el comportamiento de generación de informes de negocio IA y consulta de datos para evitar salida de gráficos mal formados, manejo incorrecto de fecha/hora y falta de cobertura de múltiples fuentes de datos ([#9078](https://github.com/nocobase/nocobase/pull/9078)) por @2013xile

- **[compilación]**
  - Las compilaciones de producción del cliente de la aplicación ahora se ejecutan en Rsbuild, y las mejoras en la creación de perfiles de compilación y la programación de declaraciones facilitan la identificación y reducción de los cuellos de botella de compilación. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) por @Molunerfinn

  - Migrar el pipeline de compilación del cliente en `@nocobase/build` de Vite a Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) por @Molunerfinn

- **[cliente]** Refactorizar la configuración del diseño de administración y la aplicación para modelar la arquitectura del host con salvaguardas de compatibilidad v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) por @zhangzhonghe

- **[flow-engine]**
  - Mejorar la validación de esquemas para la API de construcción de UI. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust

  - Mejorar la validación de esquemas para la API de construcción de UI. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust

- **[app]** Añadir un flujo de trabajo de desarrollo basado en Rsbuild para client-v1 mientras se mantiene el desarrollo local de plugins y la topología actual `/v2/` compatible ([#8902](https://github.com/nocobase/nocobase/pull/8902)) por @Molunerfinn

- **[sin definir]** Añadir una entrada dedicada client-v2 y compilarla de forma independiente con rsbuild mientras se mantiene v1 sin cambios. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) por @Molunerfinn

- **[Control de acceso]** añadir algunas nuevas APIs para la habilidad acl ([#9198](https://github.com/nocobase/nocobase/pull/9198)) por @Andrew1989Y

- **[Workflow: Evento de acción personalizada]** Añadir control ACL de activación en modo de registro (tanto único como múltiple) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) por @mytharcher

- **[Flow engine]** Añadir nuevas APIs para la construcción de UI. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) por @gchust

- **[Workflow: Evento previo a la acción]** Añadir reglas de validación para disparadores y nodos ([#8971](https://github.com/nocobase/nocobase/pull/8971)) por @mytharcher

- **[Workflow]** Añadir validación para todos los disparadores y nodos ([#8930](https://github.com/nocobase/nocobase/pull/8930)) por @mytharcher

- **[Workflow: Webhook]** Añadir validación para la creación de API de disparador/nodo por @mytharcher

- **[Workflow: Subflujo]** Añadir validación para la creación de API de nodo por @mytharcher

- **[Workflow: Aprobación]**
  - Añadir validación para la creación de nodos de aprobación por @mytharcher

  - Añadir validación para la API de disparador/nodo por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - interruptor de ordenación oculto del campo de relación ([#9220](https://github.com/nocobase/nocobase/pull/9220)) por @jiannx

  - Corregir el problema de que el título de la página no se actualiza después de cambiar de menú ([#8864](https://github.com/nocobase/nocobase/pull/8864)) por @zhangzhonghe

- **[cli]** Se corrigieron los fallos de inicio de sesión OAuth de CLI en Windows causados por URL de autorización largas ([#9159](https://github.com/nocobase/nocobase/pull/9159)) por @2013xile

- **[prueba]** Se corrigieron las compilaciones de plugins para que las dependencias del servidor con nombres de paquete con puntos como `big.js` se empaqueten en `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) por @Molunerfinn

- **[servidor]** Soporte para obtener la aplicación de destino por nombre de host ([#8978](https://github.com/nocobase/nocobase/pull/8978)) por @2013xile

- **[Workflow: Nodo agregado]** Corregir el problema por el cual el nodo agregado no se podía guardar debido a una regla de validación incorrecta ([#9208](https://github.com/nocobase/nocobase/pull/9208)) por @mytharcher

- **[Empleados IA]**
  - Corregir anomalías en el registro de logs en la instrucción de empleados IA ([#9180](https://github.com/nocobase/nocobase/pull/9180)) por @cgyrock

  - Se corrigió la ordenación de consultas agregadas eliminada por ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) por @2013xile

  - Se corrigió el problema por el cual los mensajes de error no se mostraban en las conversaciones de los empleados IA ([#9097](https://github.com/nocobase/nocobase/pull/9097)) por @cgyrock

  - Corregir el problema por el cual los empleados IA no podían usar habilidades ([#9023](https://github.com/nocobase/nocobase/pull/9023)) por @cgyrock

  - Corregir el problema por el cual el LLM aún intenta cargar habilidades después de que la herramienta getSkill está deshabilitada ([#9013](https://github.com/nocobase/nocobase/pull/9013)) por @cgyrock

  - Corregir casos de prueba fallidos en el módulo de IA del paquete central. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) por @cgyrock

- **[Workflow: JavaScript]** Corregir el problema de error al configurar el nodo JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) por @mytharcher

- **[IdP: OAuth]**
  - Se corrigieron los fallos de registro de cliente OAuth y actualización de token después de reiniciar el servicio ([#9139](https://github.com/nocobase/nocobase/pull/9139)) por @2013xile

  - Se corrigió el acceso OAuth para solicitudes API regulares ([#9120](https://github.com/nocobase/nocobase/pull/9120)) por @2013xile

  - Se corrigió la redirección incorrecta después del inicio de sesión MCP OAuth en subaplicaciones ([#9015](https://github.com/nocobase/nocobase/pull/9015)) por @2013xile

- **[Workflow: Nodo de bucle]** Corregir validaciones de nodos de flujo de trabajo ([#9111](https://github.com/nocobase/nocobase/pull/9111)) por @mytharcher

- **[Control de acceso]** actualizar acl swagger para el servidor mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) por @Andrew1989Y

- **[Workflow: nodo de correo]** Corregir validación para campos de variable ([#9047](https://github.com/nocobase/nocobase/pull/9047)) por @mytharcher

- **[Workflow]**
  - Corregir regla de validación incorrecta de la instrucción de condición ([#9017](https://github.com/nocobase/nocobase/pull/9017)) por @mytharcher

  - Corregir el problema por el cual el modo del disparador de colección no se puede establecer en "crear o actualizar" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) por @mytharcher

- **[Gestor de fuentes de datos]** Se optimizó la nomenclatura de herramientas MCP y se redujeron las respuestas API redundantes para evitar el consumo excesivo del contexto de conversación de IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) por @2013xile

- **[IA: Servidor MCP]**
  - Se corrigieron las herramientas MCP generadas desde Swagger cuando los esquemas de entrada incluyen tipos `null` o marcadores `nullable` que no son válidos para la validación de herramientas de OpenAI ([#8994](https://github.com/nocobase/nocobase/pull/8994)) por @2013xile

  - Se corrigieron las discrepancias de autenticación causadas por encabezados reenviados no relacionados en la herramienta CRUD genérica de MCP ([#8983](https://github.com/nocobase/nocobase/pull/8983)) por @2013xile
