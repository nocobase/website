---
title: "Los 18 proyectos de agentes de IA de código abierto con más estrellas en GitHub"
description: "Este artículo revisa los 18 proyectos de agentes de IA de código abierto más destacados en GitHub por número de estrellas, analizando sus características y casos de uso para ayudarte a elegir e implementar de manera efectiva."
---

📝 Nota: Este artículo se actualizó por última vez el 21 de enero de 2026. Actualizamos la información periódicamente para garantizar que tengas las últimas novedades. 😊

✨ Consulta nuestro resumen actualizado de 2026 de proyectos de IA de código abierto en GitHub: [https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)

Hace aproximadamente un mes, me topé con un artículo muy comentado en [Hacker News](https://news.ycombinator.com/item?id=44450160) — “[Stop Building AI Agents](https://decodingml.substack.com/p/stop-building-ai-agents)”

![Stop Building AI Agents](https://static-docs.nocobase.com/1-472k2u.png)

En el artículo, el autor compartió una experiencia personal: construyó un "equipo de investigación" con CrewAI: tres agentes, cinco herramientas, una coordinación perfecta sobre el papel. Pero en la práctica, el investigador ignoró el raspador web, el resumidor olvidó usar la herramienta de citas y el coordinador se rindió por completo al procesar documentos más largos. Era un plan hermoso que se desmoronaba de formas espectaculares.

El diagrama de flujo a continuación fue creado por el autor después de innumerables rondas de depuración e intentos fallidos, y resume su guía de decisión para **¿Debería usar un Agente?**.

![¿Debería usar un Agente?](https://static-docs.nocobase.com/2-45bvv4.png)

Fuente de la imagen: https://decodingml.substack.com/p/stop-building-ai-agents

El artículo destiló un principio importante: **los agentes funcionan mejor en procesos inestables donde los humanos permanecen en el circuito para supervisar** — en estos escenarios, las capacidades exploratorias y creativas de un agente a menudo superan a un flujo de trabajo rígido.

* **Escenarios recomendados:** asistente de ciencia de datos (generación automática de SQL, creación de visualizaciones, exploración de tendencias de datos); compañero de escritura creativa (lluvia de ideas, refinamiento de textos); asistente de refactorización de código (sugerencia de optimizaciones, detección de problemas potenciales). En estos casos, los humanos pueden evaluar continuamente los resultados y corregir desviaciones.
* **No recomendado para:** automatización empresarial de misión crítica (procesos comerciales clave que no pueden arriesgar la inestabilidad de las decisiones impulsadas por LLM); toma de decisiones de alto riesgo (finanzas, diagnóstico médico, cumplimiento legal — áreas que requieren lógica determinista).

![escenarios](https://static-docs.nocobase.com/3-ba22w7.png)

Fuente de la imagen: https://decodingml.substack.com/p/stop-building-ai-agents

Si has leído lo anterior y aún crees que tu escenario de negocio es adecuado para construir un agente, este artículo te guiará a través de los **18 mejores proyectos de código abierto de ****[agentes](https://github.com/topics/agent)**** en GitHub por número de estrellas**. Para cada uno, analizaremos sus fortalezas y limitaciones desde tres perspectivas: descripción general del proyecto, características principales y casos de uso, ayudándote a maximizar el valor de los agentes en los contextos adecuados.

---

💬 Oye, estás leyendo el blog de NocoBase. NocoBase es la plataforma de desarrollo low-code/no-code impulsada por IA más extensible para construir aplicaciones empresariales, herramientas internas y todo tipo de sistemas. Es completamente autoalojada, basada en plugins y amigable para desarrolladores. → [Explora NocoBase en GitHub](https://github.com/nocobase/nocobase)

---

💡 También te pueden gustar nuestros resúmenes anteriores de proyectos populares de GitHub (algunos proyectos aparecen en múltiples temas):

* [Top 20 de Proyectos de IA de Código Abierto con Más Estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [Top 8 de Proyectos MCP de Código Abierto con Más Estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [Top 40 de Herramientas para Desarrolladores de Código Abierto con Más Estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-developer-tools)

## No.1: Dify

![Dify](https://static-docs.nocobase.com/4-in2l5n.png)

* Estrellas en GitHub: 110k
* GitHub: [https://github.com/langgenius/dify](https://github.com/langgenius/dify)
* Sitio web: [https://dify.ai/](https://dify.ai/)

![Dify](https://static-docs.nocobase.com/5-psa2vb.png)

**Descripción general:**

**Dify** es una plataforma de desarrollo de aplicaciones LLM de código abierto que combina una interfaz visual intuitiva, flujos de trabajo RAG, capacidades de agente, gestión de modelos y observabilidad de pila completa. Permite a los desarrolladores construir, depurar e implementar aplicaciones de IA rápidamente.

**Características principales:**

* **Orquestación visual de flujos de trabajo:** Constructor de arrastrar y soltar que permite a los desarrolladores diseñar y probar flujos de trabajo de IA complejos directamente en un lienzo, incluyendo prompts, llamadas a modelos y encadenamiento de tareas.
* **Soporte de canalización RAG:** Ingiere documentos en múltiples formatos (ej., PDF, PPT), extrae contenido automáticamente y construye canalizaciones de recuperación para la generación aumentada por conocimiento.
* **Ecosistema de modelos integral y editor de prompts:** Compatible con GPT, Mistral, Llama3 y todos los modelos compatibles con la API de OpenAI. Ofrece gestión unificada de modelos y ajuste de prompts, simplificando el cambio de modelos y la comparación de rendimiento.

**Casos de uso:**

* Construcción de sistemas inteligentes de atención al cliente y preguntas frecuentes
* Integración con bases de conocimiento empresariales
* Implementación rápida de herramientas de generación de contenido

## No.2: Lobe Chat

![Lobe Chat](https://static-docs.nocobase.com/6-8eachs.png)

* Estrellas en GitHub: 64.3k
* GitHub: [https://github.com/lobehub/lobe-chat](https://github.com/lobehub/lobe-chat)
* Sitio web: [https://lobechat.com/](https://lobechat.com/)

![Lobe Chat](https://static-docs.nocobase.com/7-t7pkjl.png)

**Descripción general:**

**Lobe Chat** es una plataforma de chat y aplicaciones multimodelo de código abierto con un fuerte enfoque en la experiencia de usuario. Admite voz, reconocimiento visual, entrada multimodal, un mercado de plugins, optimización móvil y gestión multiusuario.

**Características principales:**

* **Soporte multimodal y de plugins:** Maneja conversaciones de voz, reconocimiento y generación de imágenes, y puede extender la funcionalidad a través de un mercado de plugins para soportar diversas necesidades de interacción.
* **Plataforma de índice de agentes:** Índice impulsado por la comunidad donde los usuarios pueden navegar, agregar o enviar asistentes personalizados para una extensión y reutilización más fáciles.
* **Integración unificada de modelos:** Proporciona una interfaz API unificada y una arquitectura modular para conectarse fácilmente con proveedores de modelos como OpenAI, Anthropic, Gemini y Ollama, haciendo que la migración y actualización de la plataforma sea fluida.

**Casos de uso:**

* Construcción rápida de aplicaciones de chat de IA multimodales de alta interacción
* Implementación de asistentes especializados en dominios específicos

## No.3: RAGFlow

![RAGFlow](https://static-docs.nocobase.com/8-p4g4dr.png)

* Estrellas en GitHub: 62.1k
* GitHub: [https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)
* Sitio web: [https://ragflow.io/](https://ragflow.io/)

![RAGFlow](https://static-docs.nocobase.com/9-9lvp8h.png)

**Descripción general:**

**RAGFlow** es un motor RAG de código abierto centrado en la comprensión profunda de documentos, diseñado para proporcionar servicios de preguntas y respuestas y agentes de alta calidad y explicables para empresas e individuos. Puede procesar formatos de documentos complejos y ofrecer respuestas basadas en citas con gestión visual de bloques.

**Características principales:**

* **Comprensión profunda de documentos:** Sobresale en el análisis de contenido no estructurado como PDF, Word, PPT, Excel e imágenes, extrayendo bloques de información buscables para garantizar que el contenido generado sea fáctico y verificable.
* **Preguntas y respuestas RAG con seguimiento de citas:** Combina la recuperación vectorial con LLMs para generar respuestas citadas, al tiempo que permite ajustes manuales a los bloques de recuperación para mejorar la precisión.
* **Implementación e integración flexibles:** Ofrece implementación con Docker Compose e integración con varios LLMs.

**Casos de uso:**

* Construcción de sistemas de preguntas y respuestas y asistentes de conocimiento basados en documentos
* Implementación de auditoría de contenido y seguimiento de citas
* Implementación de aplicaciones RAG que manejan estructuras de archivos complejas

## No.4: OpenHands

![OpenHands](https://static-docs.nocobase.com/10-b9ssqh.png)

* Estrellas en GitHub: 62k
* GitHub: https://github.com/All-Hands-AI/OpenHands
* Sitio web: https://all-hands.dev/

![OpenHands](https://static-docs.nocobase.com/11-a2rzhi.png)

**Descripción general:**

**OpenHands** se basa en la idea de que la IA debería "escribir menos código, hacer más cosas", ofreciendo capacidades como edición de código, ejecución de comandos, navegación web y llamadas a API.

Como proyecto de código abierto con licencia MIT, OpenHands se puede implementar localmente a través de Docker o acceder a través del SaaS OpenHands Cloud, que incluye créditos de uso iniciales para pruebas rápidas. Con actualizaciones continuas, OpenHands se ha convertido en una plataforma de IA integral centrada en desarrolladores, que ahora cuenta con un controlador de agente universal, colaboración multiagente, gestión de múltiples sesiones y ejecución segura en entornos aislados.

**Características principales:**

* **Capacidades generales de agente para desarrolladores:** Los agentes pueden realizar tareas como modificar código, ejecutar comandos, navegar por la web y llamar a API, imitando los flujos de trabajo de los desarrolladores humanos.
* **Colaboración multiagente y gestión de sesiones:** Admite que múltiples agentes trabajen juntos, con componentes de gestión de sesiones integrados (Session, EventStream, AgentController) para la división de tareas o la resolución colaborativa de problemas.
* **Ejecución segura en entornos aislados:** El código y los comandos se ejecutan en entornos aislados (ej., contenedores Docker) para garantizar la seguridad y minimizar los riesgos para el sistema anfitrión.

**Casos de uso:**

* Asistencia a desarrolladores con tareas de codificación rutinarias
* Automatización de canalizaciones de prueba e implementación
* Creación rápida de prototipos y desarrollo de herramientas

## No.5: MetaGPT

![MetaGPT](https://static-docs.nocobase.com/12-btl5l3.png)

* Estrellas en GitHub: 57.8k
* GitHub: https://github.com/FoundationAgents/MetaGPT
* Sitio web: https://mgx.dev/

![13-2pwtad.png](https://static-docs.nocobase.com/13-2pwtad.png)

**Descripción general:**

MetaGPT es un marco de colaboración multiagente inspirado en el concepto de simular una "empresa de software". Transforma los requisitos en lenguaje natural en un flujo de trabajo completo, desde historias de usuario y análisis competitivo hasta diseño de API y documentación. Su filosofía central es "Código = SOP(Equipo)", convirtiendo los procedimientos operativos estándar (SOP) en pasos procesables en roles como gerentes de producto, arquitectos e ingenieros.

![MetaGPT](https://static-docs.nocobase.com/14-8jh7z3.png)

**Características principales:**

* **Colaboración de agentes multirrol:** Incluye agentes integrados para roles como gerente de producto, arquitecto, gerente de proyecto e ingeniero, simulando un equipo del mundo real que ejecuta proyectos impulsados por SOP.
* **Procesos impulsados por SOP:** Guía a cada agente con procedimientos operativos estándar para el desglose de tareas, la ejecución estructurada y la reducción de desviaciones o alucinaciones.
* **Programación en lenguaje natural:** Los usuarios pueden describir sus requisitos en lenguaje sencillo, y MetaGPT generará las historias de usuario, estructuras de datos, interfaces API y diseños de arquitectura correspondientes.

**Casos de uso:**

* Generación automática de propuestas de proyectos de software
* Creación rápida de prototipos de flujos de trabajo de equipo colaborativo
* Exploración de la optimización y automatización del desarrollo de software impulsada por IA

## No.6: LLMs-from-scratch

![LLMs-from-scratch](https://static-docs.nocobase.com/15-w7easd.png)

* Estrellas en GitHub: 56k
* GitHub: [https://github.com/rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)

![LLMs-from-scratch](https://static-docs.nocobase.com/16-68zqun.png)

**Descripción general:**

**LLMs-from-scratch** es un proyecto educativo que construye un modelo de lenguaje grande desde cero, ayudando a los desarrolladores a comprender los principios fundamentales y el proceso de entrenamiento de los LLM.

👉 [Consulta la introducción completa y los casos de uso para más detalles.](https://www.nocobase.com/en/blog/github-open-source-ai-projects#no15-llms-from-scratch)

## No.7: Huginn

![Huginn](https://static-docs.nocobase.com/17-wzc3ll.png)

* Estrellas en GitHub: 47k
* GitHub: https://github.com/huginn/huginn

![Huginn](https://static-docs.nocobase.com/18-orl7h1.png)

**Descripción general:**

**Huginn** es una herramienta de automatización de código abierto que permite a los usuarios ejecutar agentes en sus propios servidores para recopilar información de la web y activar acciones basadas en condiciones, como enviar notificaciones por correo electrónico o monitorear palabras clave. Diseñado con el control de datos en mente, Huginn ha mantenido una actividad comunitaria a largo plazo gracias a su sistema de agentes autoalojado, respetuoso con la privacidad y extensible.

**Características principales:**

* **Plataforma de agente web autoalojada:** Los usuarios implementan agentes en sus propios servidores, procesan datos de forma autónoma y garantizan la privacidad y el control total.
* **Motor de reglas de evento-acción:** Admite activadores condicionales que ejecutan automáticamente acciones como enviar notificaciones, ejecutar scripts o realizar llamadas HTTP cuando ocurren eventos web específicos.
* **Mecanismo de agente extensible:** Viene con muchos agentes integrados y admite la adición de agentes personalizados a través de gemas de Huginn Agent.

**Casos de uso:**

* Monitoreo de información y alertas
* Raspado de datos y flujos de trabajo automatizados
* Construcción de herramientas de automatización personalizadas

## No.8: Unsloth

![Unsloth](https://static-docs.nocobase.com/19-ihomc8.png)

* Estrellas en GitHub: 43.8k
* GitHub: https://github.com/unslothai/unsloth
* Sitio web: https://docs.unsloth.ai/

![Unsloth](https://static-docs.nocobase.com/20-eci5h1.png)

**Descripción general:**

**Unsloth** es un conjunto de herramientas de código abierto diseñado para el ajuste fino de LLM (como OpenAI gpt-oss, Qwen3, Llama 4) con un enfoque en una mayor eficiencia y optimización de la memoria. Construido sobre la arquitectura Triton de OpenAI, acelera significativamente la velocidad de entrenamiento al tiempo que reduce el uso de memoria de la GPU.

**Características principales:**

* **Ajuste fino optimizado para memoria:** Proporciona un aumento de velocidad de 1.5 a 2.2 veces para el ajuste fino de LLM convencionales, al tiempo que reduce el uso de memoria de la GPU hasta en un 70-80%.
* **Flujo de trabajo fácil con notebooks:** Los usuarios simplemente agregan un conjunto de datos y hacen clic en "Ejecutar todo" para completar el ajuste fino del modelo rápidamente.
* **Amplia compatibilidad de modelos:** Admite el ajuste fino de LLM como Llama, Gemma, Qwen y más.

**Casos de uso:**

* Ajuste fino rápido de LLM para investigación o creación de prototipos de productos
* Educación y formación
* Escenarios que requieren alta eficiencia de memoria, como la implementación en dispositivos con recursos limitados

## No.9: Mem0

![Mem0](https://static-docs.nocobase.com/21-uxkki5.png)

* Estrellas en GitHub: 38.1k
* GitHub: https://github.com/mem0ai/mem0
* Sitio web: https://mem0.ai/

![Mem0](https://static-docs.nocobase.com/22-bmb2sv.png)

**Descripción general:**

**Mem0** es un sistema de gestión de memoria a largo plazo diseñado específicamente para agentes de IA, que aborda el problema común del "olvido" en la IA. Al introducir una capa de memoria unificada, permite a los agentes persistir las preferencias del usuario y el contexto histórico a través de sesiones y aplicaciones, lo que permite interacciones personalizadas y continuas.

En las pruebas comparativas LOCOMO, Mem0 superó a OpenAI Memory con aproximadamente un 26% más de precisión, un 91% menos de latencia de respuesta y un 90% menos de uso de tokens. Es ideal para escenarios como bots de servicio al cliente, asistentes de IA y sistemas autónomos donde la continuidad del contexto es esencial.

**Características principales:**

* **Arquitectura de memoria multinivel:** Admite capas de memoria a nivel de usuario, sesión y agente para el almacenamiento estructurado de información.
* **Alto rendimiento y eficiencia de costes:** Mejora la precisión al tiempo que reduce significativamente la latencia y el consumo de tokens, proporcionando soporte de memoria a largo plazo con menos recursos.
* **Procesamiento local priorizando la privacidad:** Todos los datos se pueden procesar y almacenar localmente, dando a los usuarios un control total sobre su información.

**Casos de uso:**

* **Bots de servicio al cliente:** Retener las preferencias e historial del usuario para mejorar la relevancia de las respuestas
* **Asistentes de IA:** Mantener la memoria de tareas y personalidad a través de sesiones para interacciones más naturales y coherentes
* **Sistemas médicos y de asesoramiento:** Preservar el contexto para mejorar la calidad del servicio y la retroalimentación precisa

## No.10: ChatTTS

![ChatTTS](https://static-docs.nocobase.com/23-azdged.png)

* Estrellas en GitHub: 37.5k
* GitHub: https://github.com/2noise/ChatTTS
* Sitio web: https://2noise.com/

![ChatTTS](https://static-docs.nocobase.com/24-e17utt.png)

**Descripción general:**

**ChatTTS** es un sistema de texto a voz de código abierto optimizado específicamente para tareas conversacionales, que admite escenarios de múltiples hablantes con un enfoque en la expresión natural y emocionalmente rica. Para evitar el uso indebido, el proyecto incorpora una pequeña cantidad de ruido de alta frecuencia en el modelo entrenado y reduce la calidad del archivo, con planes de implementar mecanismos de detección para guiar aún más el uso ético.

**Características clave:**

* **TTS optimizado para conversaciones:** Especialmente ajustado para escenarios de diálogo, admite conversaciones de múltiples roles y ritmo natural.
* **Control de prosodia de grano fino:** Gestiona con precisión elementos prosódicos como risas, pausas y palabras de relleno, haciendo que el habla sintetizada sea más vívida y realista.

**Características principales:**

* Construcción de bots de voz realistas o sistemas de diálogo interactivos.
* Herramientas de doblaje de personajes y práctica de idiomas en productos educativos.
* Asistencia de audio para la creación de contenido de voz y generación automatizada de podcasts.

## No.11: Arthas

![Arthas](https://static-docs.nocobase.com/25-1e8yxo.png)

* Estrellas en GitHub: 36.6k
* GitHub: https://github.com/alibaba/arthas
* Sitio web: https://arthas.aliyun.com/

![Arthas](https://static-docs.nocobase.com/26-rnqi0c.png)

**Descripción general:**

**Arthas** es una herramienta de diagnóstico Java de código abierto de Alibaba, y desde su lanzamiento, se ha convertido en una solución de referencia para los desarrolladores de Java que solucionan problemas en entornos de producción. Diseñado para adjuntarse dinámicamente a aplicaciones de producción sin modificar el código ni reiniciar servidores, permite a los desarrolladores ejecutar comandos de depuración, inspeccionar trazas de pila o establecer puntos de interrupción, lo que mejora en gran medida la eficiencia y la seguridad en la resolución de problemas de producción.

**Características principales:**

* **Ejecución de adjunto dinámico:** Inyecta Arthas en una aplicación JVM de producción en ejecución sin reinicios ni cambios de código para comenzar a depurar y monitorear al instante.
* **Diagnóstico interactivo basado en CLI:** Proporciona comandos como `stack`, `trace`, `watch` y `monitor` para ver instantáneamente pilas de ejecución, recuentos de llamadas a métodos, métricas de rendimiento y más.

**Casos de uso:**

* Resolución rápida de incidentes de producción.
* Análisis de cuellos de botella de rendimiento.
* Investigación de problemas en pruebas de regresión.

## No.12: AgentGPT

![AgentGPT](https://static-docs.nocobase.com/27-yvq9f7.png)

* Estrellas en GitHub: 34.7k
* GitHub: https://github.com/reworkd/AgentGPT
* Sitio web: https://arthas.aliyun.com/

![AgentGPT](https://static-docs.nocobase.com/28-fwguw8.png)

**Descripción general:**

**AgentGPT** es un proyecto de código abierto que permite a los usuarios configurar e implementar agentes de IA directamente en el navegador sin una configuración compleja. Con una interfaz fácil de usar, simplemente ingresa un objetivo y el agente "pensará-actuará-aprenderá" para lograrlo.

**Características principales:**

* **Configuración de agente basada en navegador:** Establece objetivos y nombres directamente en la interfaz web para lanzar agentes, reduciendo las barreras de implementación.
* **Ejecución impulsada por objetivos:** Los agentes planifican de forma autónoma subtareas, las ejecutan, proporcionan retroalimentación y optimizan su enfoque.
* **Configuración automatizada del entorno:** CLI integrado configura variables de entorno, base de datos (MySQL), backend (FastAPI) y frontend (Next.js) para una implementación con un solo clic.

**Casos de uso:**

* Asistentes inteligentes centrados en tareas.
* Herramientas de validación de prototipos.
* Plataformas de aprendizaje y demostración.

## No.13: Cherry Studio

![Cherry Studio](https://static-docs.nocobase.com/29-z4pzy1.png)

* Estrellas en GitHub: 31.3k
* GitHub: https://github.com/CherryHQ/cherry-studio
* Sitio web: https://cherry-ai.com/

![Cherry Studio](https://static-docs.nocobase.com/30-qageqb.png)

**Descripción general:**

**Cherry Studio**, lanzado en diciembre de 2024, es una plataforma de asistente de codificación de IA conjunta de CSDN, GitCode y Huawei Cloud CodeArts IDE. Su objetivo es proporcionar una matriz integral de asistentes de IA para desarrolladores, que admita interacción en lenguaje natural, refactorización de código a nivel de proyecto y soporte de desarrollo full-stack.

**Características principales:**

* **Matriz de asistentes de IA:** Incluye más de 300 plantillas de asistentes de IA específicas de la industria, con la opción de crear asistentes personalizados, que cubren áreas desde la escritura hasta la programación.
* **Agregación de múltiples modelos:** Cambia libremente entre modelos en la nube como OpenAI y Gemini o modelos locales, y compara las salidas de múltiples modelos en paralelo.
* **Edición visual de agentes:** Elige entre asistentes predefinidos en el "Mercado de Agentes" o crea agentes personalizados, con optimización de prompts asistida por IA.

**Casos de uso:**

* Asistencia de código a nivel de proyecto.
* Soluciones específicas de la industria.
* Generación de código basada en conocimiento.

## No.14: Khoj

![Khoj](https://static-docs.nocobase.com/31-l08bdf.png)

* Estrellas en GitHub: 31.3k
* GitHub: https://github.com/khoj-ai/khoj
* Sitio web: https://khoj.dev/

![Khoj](https://static-docs.nocobase.com/32-x8rb4x.png)

**Descripción general:**

**Khoj** es un asistente personal de "segundo cerebro" de código abierto que integra documentos de múltiples fuentes en una base de conocimiento, lo que permite la búsqueda semántica para preguntas y respuestas y recordatorios inteligentes. Admite la creación de agentes personalizados para tareas programadas, entrega de contenido o respuestas conversacionales en tiempo real.

**Características principales:**

* **Integración de conocimiento de múltiples fuentes:** Importa contenido de PDF, Markdown, Notion, GitHub y más en una base de conocimiento unificada.
* **Búsqueda semántica y notificaciones:** Recupera contenido de documentos utilizando consultas en lenguaje natural, con notificaciones push programadas y recordatorios por correo electrónico.
* **Soporte de agente multiplataforma:** Funciona en escritorio, como plugin de Obsidian, web, Emacs, WhatsApp y más.

**Casos de uso:**

* Asistente personal de gestión del conocimiento.
* Sistemas de recordatorios automatizados.
* Experiencias de integración entre herramientas.

## No.15: AIHawk

![AIHawk](https://static-docs.nocobase.com/33-dxlkjy.png)

* Estrellas en GitHub: 28.6k
* GitHub: https://github.com/feder-cr/Jobs\_Applier\_AI\_Agent\_AIHawk
* Sitio web: https://laboro.co/

![AIHawk](https://static-docs.nocobase.com/34-g4zibv.png)

**Descripción general:**

**AIHawk** es un agente de IA de código abierto con licencia AGPL centrado en automatizar las solicitudes de empleo. Extrae ofertas de trabajo y utiliza modelos de lenguaje para generar materiales de solicitud personalizados, ayudando a los usuarios a postularse de manera eficiente.

**Características principales:**

* **Solicitudes de empleo automatizadas:** Rastrea sitios web de empleo y genera materiales de solicitud optimizados.
* **Arquitectura de código abierto extensible:** Los desarrolladores pueden personalizar el comportamiento o agregar plugins.
* **Extensión de plataforma comercial:** Evolucionó a la plataforma laboro.co, que ofrece servicios alojados y funciones ampliadas de automatización de contratación.

**Casos de uso:**

* Asistente automático de solicitudes de empleo.
* Investigación de automatización de procesos de contratación.
* Herramientas de integración de plataformas de contratación.

## No.16: FastGPT

![FastGPT](https://static-docs.nocobase.com/35-xvxjpm.png)

* Estrellas en GitHub: 25.5k
* GitHub: https://github.com/labring/FastGPT
* Sitio web: https://fastgpt.io/

![FastGPT](https://static-docs.nocobase.com/36-bu5ifv.png)

**Descripción general:**

**FastGPT** está diseñado como una "plataforma de construcción de agentes de IA", que permite a los desarrolladores construir aplicaciones de IA complejas utilizando flujos de trabajo visuales y bases de conocimiento, sin configuración tediosa.

**Características principales:**

* **Orquestación visual de flujos de trabajo:** Interfaz de arrastrar y soltar que admite nodos de diálogo, llamadas HTTP, RPA, ramas condicionales y más.
* **Soporte de base de conocimiento y RAG:** Importa múltiples formatos de archivo (txt, md, pdf, etc.), con recuperación vectorial e híbrida para preguntas y respuestas y automatización basadas en conocimiento.
* **Compatibilidad con múltiples modelos y API:** Se integra con OpenAI, Claude y otros; proporciona interfaces compatibles con OpenAPI para una fácil integración en sistemas existentes.

**Casos de uso:**

* Construcción rápida de bots de preguntas y respuestas inteligentes (ej., asistentes de atención al cliente).
* Análisis de documentos y flujos de trabajo de resumen automatizado.
* Manejo automatizado de tareas con integración de API externa.

## No.17: GPT Researcher

![GPT Researcher](https://static-docs.nocobase.com/37-dzrr44.png)

* Estrellas en GitHub: 22.9k
* GitHub: https://github.com/assafelovic/gpt-researcher
* Sitio web: https://gptr.dev/

![GPT Researcher](https://static-docs.nocobase.com/38-34tscx.png)

**Descripción general:**

**GPT Researcher** es un marco de agente de IA especializado en tareas de investigación profundas. Puede planificar automáticamente flujos de trabajo de investigación, extraer información, generar informes de investigación y generar contenido con citas, ofreciendo alta calidad de informe y personalización.

**Características principales:**

* **Investigación paralela de agentes:** Un agente planificador crea preguntas de investigación, mientras que múltiples agentes ejecutores recopilan y resumen información en paralelo para una mayor eficiencia y confiabilidad.
* **Generación de informes factuales:** Organiza y cita contenido automáticamente, produciendo informes de investigación estructurados y objetivos con fuentes.

**Casos de uso:**

* Redacción rápida de análisis competitivos o informes de investigación técnica.
* Creación automatizada de esquemas de investigación académica o resúmenes de antecedentes.
* Construcción de agentes de conocimiento específicos de dominio para la agregación de conocimiento empresarial.

## No.18: CopilotKit

![CopilotKit](https://static-docs.nocobase.com/39-z4vv5d.png)

* Estrellas en GitHub: 22.4k
* GitHub: https://github.com/CopilotKit/CopilotKit
* Sitio web: https://docs.copilotkit.ai/

![CopilotKit](https://static-docs.nocobase.com/40-u5mh13.png)

**Descripción general:**

**CopilotKit** es un marco de código abierto para integrar sin problemas copilotos de IA en aplicaciones, ya sea como chat integrado, áreas de texto inteligentes o interfaces de agente completas. Proporciona componentes de interfaz de usuario de React y una arquitectura headless para una integración flexible.

**Características principales:**

* **Soporte de React y UI headless:** Componentes de interfaz de usuario plug-and-play o implementaciones headless solo con API.
* **Integración del contexto de la aplicación:** Conecta la lógica, el estado y el contexto del usuario de la aplicación a los agentes de IA para una funcionalidad más personalizada.
* **Desacoplamiento de modelo-arquitectura:** Funciona independientemente de modelos específicos o marcos de agentes, lo que permite actualizar la pila de IA sin afectar la experiencia del usuario.

**Casos de uso:**

* Asistentes de IA integrados.
* Herramientas de IA personalizadas.
* Experiencias interactivas multimodales.

## Nota Final

Los agentes sobresalen en la exploración, pero tienen dificultades para seguir reglas estrictas.

Los 18 proyectos de agentes de código abierto anteriores son tanto una caja de herramientas como un recordatorio: seleccionar los escenarios correctos y diseñar límites razonables es clave para maximizar el valor de los agentes.

Si este artículo te inspiró, no dudes en compartirlo con otras personas que estén explorando los agentes de IA. 👍

**Lecturas relacionadas:**

* [Top 20 de Proyectos de IA de Código Abierto con Más Estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [Top 8 de Proyectos MCP de Código Abierto con Más Estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [Top 7 de Aplicaciones Web de Código Abierto con Más Estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [Top 40 de Herramientas para Desarrolladores de Código Abierto con Más Estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 de Proyectos Low-Code de Código Abierto de Más Rápido Crecimiento en GitHub en 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [Top 11 de Proyectos CRM de Código Abierto con Más Estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-crm-projects)
