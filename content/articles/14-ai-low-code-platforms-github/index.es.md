---
title: "14 plataformas low-code impulsadas por IA en GitHub que vale la pena seguir"
description: "Hemos recopilado 14 plataformas low-code populares impulsadas por IA en GitHub, que abarcan flujos de trabajo, agentes, construcción de sistemas y bases de datos inteligentes, para ayudarte a crear sistemas más inteligentes y escalables."
---

📝 Nota: Este artículo se actualizó por última vez el 21 de enero de 2026. Actualizamos la información periódicamente para garantizar que tengas las últimas novedades. 😊

Recientemente me encontré con un comentario muy directo en Reddit:

![Reddit2.png](https://static-docs.nocobase.com/image-4j39lb.png)

> *"Estas plataformas de IA sin código no durarán ni un año. Si la IA es realmente tan potente, no debería seguir dependiendo de arrastrar bloques de flujo de trabajo para crear funciones."*

La opinión es contundente, pero este comentario se publicó hace ocho meses. Mirando atrás ahora, estas herramientas no han desaparecido. Muchas se han vuelto más maduras y siguen apareciendo nuevos proyectos.

Hace unos días, también revisamos una lista de [las herramientas de IA sin código de código abierto más populares en GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools). Basándonos en estrellas, actividad de la comunidad y madurez de funciones, muchos proyectos no solo están activos, sino que continúan evolucionando con capacidades de IA más sólidas.

Algunos usuarios de Reddit aún argumentan que la mayoría de las herramientas low-code de IA están en una etapa temprana y que ciertos llamados agentes de IA son simplemente herramientas de automatización conectadas a un LLM.

![Reddit3.png](https://static-docs.nocobase.com/img_v3_02rc_522ac857-0534-4006-ae62-6b989e7e13bg-v1yz3w.png)

---

💬 Oye, estás leyendo el blog de NocoBase. NocoBase es la plataforma de desarrollo low-code/sin código impulsada por IA más extensible para crear aplicaciones empresariales, herramientas internas y todo tipo de sistemas. Es completamente autogestionada, basada en plugins y amigable para desarrolladores. → [Explora NocoBase en GitHub](https://github.com/nocobase/nocobase)

---

Desde nuestra observación, el ecosistema low-code ha progresado de manera constante. Muchas plataformas ya admiten escenarios comerciales reales a través de modelos de datos, lógica de flujo de trabajo, extensiones de plugins y colaboración impulsada por IA.

Para este artículo, exploramos el tema low-code de GitHub e identificamos catorce plataformas que ya han integrado la IA de manera práctica. Las organizamos en tres categorías: constructores de sistemas empresariales, herramientas de flujo de trabajo de agentes y aplicaciones basadas en tablas de datos.

Antes de entrar en detalles, puedes usar la siguiente tabla comparativa para obtener una visión general clara de cómo se posicionan estas catorce herramientas y aplican la IA.👇

**Tabla comparativa (Funciones de IA × Visión general del posicionamiento de la herramienta)**


| Herramienta | Categoría          | Cómo se usa la IA                         | Flujo de trabajo extensible | Soporta Modelado/UI | Soporte de Tablas/Datos | Capacidad entre dominios          |
| ----------- | ------------------ | ----------------------------------------- | --------------------------- | ------------------- | ----------------------- | --------------------------------- |
| NocoBase    | Aplicaciones de negocio | La IA genera modelos de datos, páginas, lógica | ✅ Plugins + Automatización | ✅ Completo         | ✅                      | ⭐ Fuerte (Datos + Sistema + Flujo) |
| ToolJet     | Aplicaciones de negocio | Copiloto de IA genera páginas/scripts de API | ⚠️ Flujos ligeros        | ✅                   | ⚠️                    | Medio                            |
| Appsmith    | Aplicaciones de negocio | La IA genera SQL y lógica de formularios    | ⚠️                        | ✅                   | ⚠️                    | Medio                            |
| Budibase    | Aplicaciones de negocio | La IA rellena campos, genera texto de formularios | ⚠️                        | ✅                   | ⚠️                    | Débil                            |
| refine      | Aplicaciones de negocio | La IA genera lógica y código CRUD          | ❌                          | ✅ (centrado en código) | ❌                      | No                               |
| n8n         | Flujo de trabajo/Agente | Tareas de IA, llamadas a API               | ✅                          | ❌                   | ❌                      | No                               |
| Dify        | Flujo de trabajo/Agente | Agentes, base de conocimiento, llamada a herramientas | ✅                          | ❌                   | ⚠️                    | No                               |
| Flowise     | Flujo de trabajo/Agente | RAG, cadenas LLM visuales                  | ⚠️                        | ❌                   | ⚠️                    | No                               |
| Kestra      | Flujo de trabajo/Agente | La IA genera flujos de trabajo YAML        | ✅                          | ❌                   | ❌                      | No                               |
| Node-RED    | Flujo de trabajo/IoT   | Nodos de IA + automatización de dispositivos/eventos | ⚠️                        | ❌                   | ❌                      | No                               |
| Sim         | Flujo de trabajo/Agente | Flujos de trabajo colaborativos multiagente | ⚠️                        | ❌                   | ❌                      | No                               |
| NocoDB      | Tablas de datos    | Relleno con IA, campos inteligentes, información | ⚠️                        | ❌                   | ✅                      | Débil                            |
| Teable      | Tablas de datos    | Chat de IA e informes generados automáticamente | ⚠️                        | ❌                   | ✅                      | Débil                            |
| Onlook      | UI de IA          | La IA genera UI/componentes/código React   | ❌                          | ⚠️ (centrado en UI) | ❌                      | Especial (centrado en UI)        |

## **Constructores de aplicaciones empresariales impulsados por IA**

Estas herramientas no solo usan IA para responder preguntas o activar flujos de trabajo; la IA participa directamente en la construcción de la aplicación en sí.

Ayudan a los usuarios a crear rápidamente modelos de datos, formularios, páginas, permisos y sistemas empresariales internos, lo que los hace ideales para CRM, aprobaciones, ERP, paneles de administración y plataformas de entrada de datos.

### **NocoBase**

⭐️ Estrellas: 20k

Sitio web: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

![noocobase.png](https://static-docs.nocobase.com/noocobase-auxpuu.png)

**Descripción general**:

NocoBase comenzó como una plataforma low-code de código abierto construida sobre una arquitectura basada en modelos de datos y un sistema de plugins.

En la versión 2.0, permite que la IA participe tanto en la construcción del sistema como en la operación diaria. Puede escribir y ejecutar JavaScript dentro de la plataforma para lógica compleja y automatización, y los trabajadores de IA se pueden colocar en cualquier parte del sistema para mejorar la experiencia general.

![noocobase2.png](https://static-docs.nocobase.com/noocobase2-83efsk.png)

**Etapa de construcción**

Los trabajadores de IA pueden generar modelos de datos, relaciones de campos, estructuras de página y lógica básica a partir del lenguaje natural. Las tareas que antes requerían múltiples pasos de configuración se vuelven más simples. Con la asistencia de IA, un sistema empresarial puede tomar forma mucho más rápido, mejorando enormemente la eficiencia del desarrollo.

![noocobase3.png](https://static-docs.nocobase.com/noocobase3-geirqa.png)

**Etapa de uso**

La IA puede consultar e interpretar los datos del sistema y proporcionar información o sugerencias relevantes, como completar formularios, resumir información del cliente o respaldar tareas de investigación.

**Usuarios objetivo**: Equipos que construyen sistemas empresariales: equipos de TI internos, equipos de productos B2B, integradores de sistemas.

**Casos de uso**: CRM, flujos de trabajo de aprobación, gestión de proyectos, sistemas de pedidos y activos, con soporte de plugins para automatización y modelado impulsado por IA.

### **ToolJet**

⭐️ Estrellas: 37k

Sitio web: [https://www.tooljet.ai/](https://www.tooljet.ai/)

GitHub: [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)

![ToolJet.png](https://static-docs.nocobase.com/ToolJet-7balkk.png)

**Descripción general**: ToolJet ha sido durante mucho tiempo una herramienta productiva para crear aplicaciones empresariales internas. Con la IA añadida, el flujo de desarrollo se vuelve aún más eficiente. El Copiloto de IA genera diseños de página, lógica de componentes e interacciones básicas a partir del lenguaje natural, lo que elimina la necesidad de que los desarrolladores cambien constantemente entre componentes, scripts y API. Este flujo de trabajo de describir y generar reduce el trabajo de configuración manual y scripting, y ayuda a los equipos a crear herramientas internas de una manera más enfocada y rentable.

**Usuarios objetivo**: Equipos de ingeniería, operaciones o datos que necesitan paneles internos rápidos.

**Casos de uso**: Paneles de administración, herramientas internas, aplicaciones basadas en API donde la IA puede ayudar a escribir SQL, generar diseños o scripts.

### **Appsmith**

⭐️ Estrellas: 38k

Sitio web: [https://www.appsmith.com/](https://www.appsmith.com/)

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-ycvv0e.png)

**Descripción general**: Appsmith es una plataforma low-code de código abierto diseñada para el desarrollo de herramientas internas, que ofrece un sólido sistema de componentes, conexiones confiables a fuentes de datos y capacidades CRUD bien desarrolladas. Con la introducción de la IA, la experiencia de desarrollo se vuelve más fluida. La IA genera consultas SQL, lógica de validación de formularios y scripts básicos a partir del lenguaje natural y puede completar la configuración común de páginas automáticamente. Esto reduce la necesidad de cambiar entre código y configuración de componentes, acelera el desarrollo de herramientas internas y reduce la barrera para las aplicaciones centradas en datos.

**Usuarios objetivo**: Desarrolladores front-end, creadores de herramientas de datos, equipos que crean sistemas CRUD.

**Casos de uso**: Paneles de consulta, herramientas de administración internas, utilidades de base de datos, por ejemplo, lenguaje natural → IA genera SQL → salida de tabla.

### **Budibase**

⭐️ Estrellas: 27k

Sitio web: [https://budibase.com/](https://budibase.com/)

GitHub: [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

![Budibase.png](https://static-docs.nocobase.com/Budibase-gjjun3.png)

**Descripción general**: Budibase es una plataforma low-code de código abierto diseñada para aplicaciones empresariales internas. Se centra en el modelado de datos, la creación de formularios y los flujos de trabajo básicos, y se adapta a las necesidades de pequeñas y medianas empresas. Con la IA añadida, Budibase mejora el proceso de construcción ayudando con tareas rutinarias.

La IA ayuda a generar contenido de campos, completar datos y crear diseños de página simples, reduciendo el trabajo repetitivo en la configuración de formularios y la entrada de datos. Si bien todavía tiene soporte limitado para lógica compleja, la IA hace que Budibase sea más eficiente para sistemas ligeros, herramientas de formularios internos y aplicaciones de entrada de datos.

**Usuarios objetivo**: Equipos pequeños y medianos, sistemas internos ligeros, entusiastas del no-code.

**Casos de uso**: Aplicaciones de formularios, herramientas de oficina internas, plataformas de entrada de datos. La IA ayuda a completar campos o crear datos de muestra, pero el soporte para lógica compleja es limitado.

### **Refine**

⭐️ Estrellas: 33k

Sitio web: [https://refine.dev/](https://refine.dev/)

GitHub: [https://github.com/refinedev/refine](https://github.com/refinedev/refine)

![refine.png](https://static-docs.nocobase.com/refine-64wrxv.png)

**Descripción general**: Refine es un framework basado en React para crear paneles de administración y herramientas internas. Maneja bien los flujos CRUD comunes, el enrutamiento, los permisos y las conexiones de datos. Los desarrolladores pueden describir la interfaz o la función en lenguaje natural, y la IA genera el diseño, las interacciones y el código básico como un proyecto React listo para usar.

**Usuarios objetivo**: Desarrolladores front-end y equipos técnicos que necesitan flexibilidad en lugar de herramientas de arrastrar y soltar.

**Casos de uso**: Paneles de administración y herramientas de datos donde se requiere control a nivel de código, pero la velocidad de desarrollo sigue siendo importante. No incluye modelado de backend.

## **Orquestación de flujos de trabajo/agentes de IA**

Estas herramientas se destacan porque la IA no solo genera contenido, sino que participa activamente en la ejecución de los flujos de trabajo. La IA puede llamar a herramientas, activar acciones e impulsar la automatización empresarial.

Piense en ellas como motores de flujo de trabajo mejorados con IA o plataformas de ejecución de agentes, en lugar de constructores completos de sistemas empresariales low-code.

Destacan en automatización y ejecución, pero generalmente carecen de modelado de datos complejo, sistemas de permisos o capacidades de creación de UI/páginas.

### **n8n**

⭐️ Estrellas: 157k

Sitio web: [https://n8n.io/](https://n8n.io/)

GitHub: [https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

![n8n.png](https://static-docs.nocobase.com/n8n-8riwih.png)

**Descripción general**: n8n es una plataforma de automatización low-code de código abierto que conecta sistemas, API y servicios a través de una interfaz visual. Con los nodos de IA añadidos, n8n puede permitir que los LLM analicen datos, generen contenido, tomen decisiones y llamen a API externas dentro de un flujo de trabajo, en lugar de solo seguir reglas preestablecidas.

**Usuarios objetivo**: Equipos de operaciones, ingenieros de soporte, especialistas en automatización, PYME.

**Casos de uso**: Generación automatizada de contenido, sincronización de datos, respuestas de correo electrónico, flujos de trabajo de decisiones asistidas por IA (por ejemplo, la IA responde a un cliente → registra en la base de datos → envía un correo electrónico).

### **Dify**

⭐️ Estrellas: 119k

Sitio web: [https://dify.ai/](https://dify.ai/)

GitHub: [https://github.com/langgenius/dify](https://github.com/langgenius/dify)

![Dify.png](https://static-docs.nocobase.com/Dify-gk2be6.png)

**Descripción general**: Dify es una plataforma de código abierto para crear aplicaciones de IA y Agentes. Ofrece gestión de modelos, bases de conocimiento, orquestación conversacional e integración de herramientas. Con estas capacidades, Dify admite razonamiento de múltiples pasos, llamadas a API, acceso a datos y creación visual de flujos de trabajo de Agentes, para que los equipos puedan pasar sin problemas de la conversación a las acciones del sistema.

**Usuarios objetivo**: Equipos de producto y desarrolladores que crean asistentes de IA, bots de conocimiento o prototipos.

**Casos de uso**: Chatbots con base de conocimiento, manejo automatizado de tickets, agentes de IA que ejecutan acciones de API.

### **Flowise**

⭐️ Estrellas: 47k

Sitio web: [https://flowiseai.com/](https://flowiseai.com/)

GitHub: [https://github.com/FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)

![Flowise.png](https://static-docs.nocobase.com/Flowise-2vawwu.png)

**Descripción general**: Flowise es una plataforma visual low-code de código abierto para crear agentes de IA y flujos de trabajo LLM. Ofrece un constructor visual, seguimiento de ejecución, integraciones de API y SDK, e implementación local. Con las capacidades de IA incluidas, Flowise admite agentes de múltiples pasos, uso de herramientas y recuperación de conocimiento. Los equipos pueden diseñar la colaboración humano-IA y la lógica del flujo de trabajo simplemente arrastrando y conectando nodos.

**Usuarios objetivo**: Desarrolladores de IA, equipos de prototipos, startups en etapa inicial.

**Casos de uso**: Preguntas y respuestas de conocimiento, chatbots ligeros, demostraciones de razonamiento de múltiples pasos; no es adecuado para sistemas empresariales completos.

### **Kestra**

⭐️ Estrellas: 23k

Sitio web: [https://kestra.io/](https://kestra.io/)

GitHub: [https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

![Kestra.png](https://static-docs.nocobase.com/Kestra-1n19xy.png)

**Descripción general**: Kestra es una plataforma de código abierto para la orquestación y programación de tareas diseñada para flujos de trabajo visuales, planes de ejecución y monitoreo. Admite la generación de flujos de trabajo YAML asistida por IA, llamadas a modelos y lógica condicional. Los usuarios pueden crear cadenas de tareas complejas con lenguaje natural o plantillas y realizar un seguimiento de la ejecución con registros detallados.

**Usuarios objetivo**: Ingenieros de datos, desarrolladores backend, equipos de DevOps.

**Casos de uso**: Trabajos programados generados por IA, canalizaciones de datos, cadenas de tareas de API; centrado en la ejecución de backend.

### **Node-RED**

⭐️ Estrellas: 22k

Sitio web: [https://nodered.org/](https://nodered.org/)

GitHub: [https://github.com/node-red/node-red](https://github.com/node-red/node-red)

![Node-RED.png](https://static-docs.nocobase.com/Node-RED-0c9pxy.png)

**Descripción general**: Node-RED es una herramienta de flujo visual basada en eventos que conecta dispositivos, servicios y API a través de nodos para crear lógica de automatización y canalizaciones de datos. La plataforma ofrece una variedad de nodos de IA para inferencia de modelos, generación de contenido, análisis de información y toma de decisiones condicionales. Los flujos pueden ejecutar acciones más flexibles basadas en las salidas del modelo. Los nodos también pueden integrarse con dispositivos IoT, webhooks o eventos del sistema para crear flujos de trabajo de procesamiento de extremo a extremo.

**Usuarios objetivo**: Ingenieros de automatización, desarrolladores de hardware, equipos de hogar inteligente/IoT.

**Casos de uso**: La cámara detecta movimiento → la IA toma una decisión → activa un interruptor; anomalía del dispositivo → análisis de IA → enviar alerta.

### **Sim**

⭐️ Estrellas: 18k

Sitio web: [https://www.sim.ai/](https://www.sim.ai/)

GitHub: [https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

![Sim.png](https://static-docs.nocobase.com/Sim-sygfqw.png)

**Descripción general**: Sim es una plataforma de código abierto para crear flujos de trabajo colaborativos multiagente. Organiza modelos, herramientas y pasos de tareas a través de una interfaz visual. La plataforma admite cooperación multimodelo, invocación de herramientas, descomposición de tareas y ejecución de flujos. Los agentes pueden comunicarse, dividir el trabajo y completar razonamientos o acciones dentro del mismo flujo de trabajo. Los usuarios pueden configurar roles, capacidades y cadenas de tareas según sea necesario para generar sistemas multiagente ejecutables.

**Usuarios objetivo**: Equipos de IA que crean agentes multirrol, startups de asistentes inteligentes.

**Casos de uso**: Asistentes de IA, generación automatizada de informes, ejecución inteligente de tareas; aunque no es tan maduro como n8n o Dify.

## **IA + Hojas de cálculo inteligentes / Herramientas de base de datos**

Estas herramientas no se centran en la ejecución de flujos de trabajo o sistemas empresariales completos; su valor principal radica en hacer que los datos y las hojas de cálculo sean más inteligentes.

Aquí, la IA se utiliza principalmente para generar, completar, consultar y analizar datos, no para manejar lógica empresarial compleja.

Se pueden considerar como "Airtable / Notion Database mejorado con IA", ideal para equipos basados en datos, operaciones de contenido o gestión del conocimiento, en lugar de sistemas empresariales pesados o automatización de flujos de trabajo.

### **NocoDB**

⭐️ Estrellas: 59k

Sitio web: [https://nocodb.com/](https://nocodb.com/)

GitHub: [https://github.com/nocodb/nocodb](https://github.com/nocodb/nocodb)

![NocoDB.png](https://static-docs.nocobase.com/NocoDB-qk45qn.png)

**Descripción general**: Una alternativa de código abierto a Airtable que proporciona configuración de campos, gestión de vistas y automatización básica. Sus funciones de IA admiten generación de contenido, finalización de datos, análisis de tablas y sugerencias inteligentes.

**Usuarios objetivo**: Equipos que gestionan datos estructurados: equipos de operaciones, grupos de colaboración interna, usuarios de CRM ligero.

**Casos de uso**: Repositorios de contenido, tablas de clientes, gestión de inventario, hojas de colaboración en equipo. Las funciones de IA incluyen sugerencias de campos, generación de contenido, autocompletado e información inteligente para el análisis de datos.

### **Teable**

⭐️ Estrellas: 20k

Sitio web: [https://teable.ai/](https://teable.ai/)

GitHub: [https://github.com/teableio/teable](https://github.com/teableio/teable)

![Teable.png](https://static-docs.nocobase.com/Teable-n74cv7.png)

**Descripción general**: Una plataforma de gestión de datos similar a Airtable con soporte para tipos de campo, vistas y colaboración en equipo. Sus funciones de IA pueden generar contenido de tabla a través de conversación, procesar datos, crear informes y ejecutar comandos basados en texto, con modelos que trabajan directamente dentro de la tabla.

**Usuarios objetivo**: Usuarios de Airtable/Notion o equipos que necesitan colaboración de datos con asistencia impulsada por IA.

**Casos de uso**: Gestión de contenido, almacén de datos ligero, tablas de proyectos de equipo. Admite interacción de datos conversacional, como consultar registros a través de lenguaje natural, generar datos de tabla en masa o crear informes automáticamente.

## **Herramientas que no encajan completamente en las categorías anteriores**

Durante nuestra investigación, también encontramos herramientas que no encajan completamente en ninguna de las tres categorías principales, como **Onlook**.

⭐️ Estrellas: 23k

Sitio web: [https://onlook.com/](https://onlook.com/)

GitHub: [https://github.com/onlook-dev/onlook](https://github.com/onlook-dev/onlook)

![Onlook.png](https://static-docs.nocobase.com/Onlook-bnn4iz.png)

Lo que hace diferente a Onlook es que su capacidad principal son las "interfaces de UI generadas por IA".

Puedes describir una página en lenguaje natural o proporcionar un wireframe, y la plataforma producirá la estructura de la página y el diseño de los componentes. Genera código React, gestiona estilos y relaciones de diseño, y ofrece edición visual para que puedas refinar la interfaz y ajustar la jerarquía de componentes. La herramienta está diseñada para la construcción de interfaces con diseño asistido por IA, situándose entre una herramienta de diseño y una plataforma front-end low-code.

## **Reflexiones finales**

Solíamos construir sistemas escribiendo código. Luego llegaron las interfaces de arrastrar y soltar. Ahora, cada vez más personas comienzan a describir cómo debería funcionar un sistema y dejan que la IA ayude a construirlo.

> *"La IA no elimina el trabajo, solo lo traslada."*

El verdadero desafío ya no es si estamos usando IA, sino si podemos integrar profundamente la IA con la lógica empresarial, los datos y los flujos de trabajo, y convertirla en parte del sistema mismo.

La IA está pasando de ser una herramienta de conversación a una herramienta de construcción. Aún no es perfecta, pero la dirección es clara.
En el futuro, los sistemas pueden no ser "desarrollados", sino descritos. Y comenzaremos a partir de problemas empresariales reales, no solo desde un editor de código.

Si has llegado hasta aquí y sientes que se está produciendo este cambio, no dudes en compartir esta lista con otras personas que se preocupan por **IA × low-code**.👍

**Lecturas relacionadas:**

* [Top 11 herramientas de IA sin código de código abierto con más estrellas en GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
* [Top 18 proyectos de agentes de IA de código abierto con más estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)
* [Top 20 proyectos de IA de código abierto con más estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [Top 8 proyectos MCP de código abierto con más estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [Top 7 aplicaciones web de código abierto con más estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [Top 40 herramientas de desarrollo de código abierto con más estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 proyectos low-code de código abierto de más rápido crecimiento en GitHub en 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
