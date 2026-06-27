---
title: "Los 10 proyectos CRM de IA de código abierto con más estrellas en GitHub"
description: "Un resumen de los proyectos CRM de IA de código abierto más populares en GitHub, incluyendo tanto plataformas con funciones nativas de IA como aquellas que admiten integraciones flexibles."
---

📝 Nota: Este artículo se actualizó por última vez el 21 de enero de 2026. Actualizamos la información periódicamente para brindarte las últimas novedades. 😊

## Introducción

¿Qué CRM utilizas hoy en día?

Para la mayoría de los equipos, la respuesta es un CRM basado en SaaS como Salesforce. Estas plataformas son ricas en funciones, están respaldadas por ecosistemas maduros y son ampliamente adoptadas en las empresas. Al mismo tiempo, algunos equipos con preferencias técnicas más marcadas o mayores necesidades de flexibilidad han comenzado a buscar [alternativas de código abierto a Salesforce](https://www.nocobase.com/en/blog/salesforce-open-source-crmalternative). Las plataformas low code y no code les brindan una forma de construir un CRM adaptado a sus flujos de trabajo con un costo menor y ciclos de desarrollo más cortos. Anteriormente, revisamos varios [proyectos de CRM de código abierto con muchas estrellas en GitHub](https://www.nocobase.com/en/blog/github-open-source-crm-projects) como punto de partida para la evaluación de CRM, aunque la IA aún no se había convertido en una capacidad central en esas herramientas.

💡Lee más: [Los 4 mejores casos de estudio de CRM personalizados (Ayudándote a elegir una solución CRM más flexible)](https://www.nocobase.com/en/blog/custom-crm-case-studies)

A medida que más herramientas y sistemas se integran más profundamente con la IA, los proyectos de CRM de código abierto también están evolucionando. El CRM está pasando gradualmente de ser un sistema centrado en la entrada de datos y la gestión de registros a uno que desempeña un papel más proactivo en las operaciones comerciales. Algunos proyectos ahora incluyen la IA como una función nativa, mientras que otros combinan la IA a través de extensiones, plugins o conexiones API.

En esta revisión actualizada, analizamos los repositorios con más estrellas bajo el [tema CRM de GitHub](https://github.com/topics/crm) y los agrupamos en dos categorías: CRMs con capacidades de IA integradas y CRMs que admiten extensiones de IA. Resumimos sus funciones de IA y casos de uso comunes para ayudarte a comprender sus límites de capacidad y elegir la opción que mejor se adapte a tus necesidades.

🎉[La solución CRM de NocoBase ya está disponible — Lista para que la explores](https://www.nocobase.com/en/blog/crm-solution)

---

💬Oye, estás leyendo el blog de NocoBase. NocoBase es la plataforma de desarrollo no-code/low-code impulsada por IA más extensible para crear aplicaciones empresariales, herramientas internas y todo tipo de sistemas. Es completamente autoalojada, basada en plugins y amigable para desarrolladores. → [Explora NocoBase en GitHub](https://github.com/nocobase/nocobase)

---

Si deseas una visión general rápida de las herramientas presentadas en este artículo, el resumen a continuación ofrece una instantánea clara de cada categoría.

**CRMs con capacidades de IA nativas**

* **NocoBase**: Una plataforma no code y low code que integra la IA profundamente en el modelado de datos, el análisis de negocio y los flujos de trabajo de CRM a través de su marco de empleados de IA.
* **Huly Platform**: Un espacio de trabajo centrado en la colaboración con transcripción de IA en tiempo real integrada para escenarios de comunicación y reuniones.
* **Krayin CRM**: Un CRM de código abierto para equipos de ventas que incluye generación de contenido impulsada por IA y asistencia inteligente dentro de la aplicación.

**CRMs que extienden o integran IA**

* **Twenty**: Un CRM de código abierto moderno y altamente personalizable que integra sistemas de IA externos a través de GraphQL y REST.
* **ERPNext**: Una plataforma centrada en ERP que incorpora IA en CRM y procesos comerciales más amplios a través de plugins e integraciones API.
* **SuiteCRM**: Un CRM de código abierto maduro que puede incorporar IA a través de extensiones y servicios de terceros.
* **Monica**: Un gestor de relaciones personales que se conecta a servicios de IA externos a través de llamadas API.
* **Akaunting**: Una plataforma de contabilidad y gestión empresarial que añade capacidades de IA a través de aplicaciones e integraciones API.
* **Idurar ERP CRM**: Una solución ERP más CRM para equipos pequeños que integra IA a través de su capa API.
* **Dolibarr**: Un sistema CRM modular que admite IA a través de módulos complementarios e integraciones basadas en API.

## CRM con IA Nativa

### NocoBase

![nocobase1.png](https://static-docs.nocobase.com/nocobase1-voq8jv.png)

Sitio oficial: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

Estrellas de GitHub: 20.8k

Documentación de IA: [[https://v2.docs.nocobase.com/cn/ai-employees](https://v2.docs.nocobase.com/cn/ai-employees)]([https://v2.docs.nocobase.com/ai-employees](https://v2.docs.nocobase.com/ai-employees))

**Descripción general**

NocoBase es una plataforma de desarrollo no code y low code de código abierto, autoalojada y habilitada para IA. Construida en torno a una arquitectura impulsada por modelos de datos y orientada a plugins, permite a los equipos crear rápidamente sistemas empresariales de nivel empresarial, incluidos flujos de trabajo de CRM.

**Cómo funciona la IA dentro del sistema**

La IA se implementa como "Empleados de IA", agentes inteligentes que se integran directamente en las páginas y flujos de trabajo:

* **Comprende el contexto de datos a nivel de página**: Los agentes de IA pueden leer las tablas, campos y registros asociados con la vista actual y actuar con pleno conocimiento de este contexto.
* **Genera contenido y ayuda en la ejecución**: Pueden resumir texto, extraer información, analizar datos o rellenar campos automáticamente según las necesidades del negocio.
* **Acelera la construcción del sistema**: Durante la configuración, ayudan a redactar modelos de datos, diseños de página y lógica de automatización, acelerando la creación del CRM.

**Casos de uso típicos**

Los agentes de IA de NocoBase pueden admitir una amplia gama de procesos de CRM, haciendo que el sistema sea más inteligente en el manejo y análisis de datos:

* **Limpieza de datos y entrada estructurada**: La IA puede extraer detalles clave de texto no estructurado como correos electrónicos o notas y convertirlos en atributos de cliente estructurados o eventos comerciales.

![nocobase2.gif](https://static-docs.nocobase.com/nocobase2-3jul27.gif)

* **Análisis de negocio y visualización**: En páginas como leads u oportunidades, la IA puede generar gráficos de tendencias, comparaciones, tarjetas KPI e información concisa directamente a partir de los datos existentes.

![nocobase3.gif](https://static-docs.nocobase.com/nocobase3-0aik71.gif)

* **Traducción multilingüe y relleno de campos**: La IA puede traducir correos electrónicos o registros en idiomas extranjeros y escribir los resultados en los campos de CRM relevantes, asegurando datos consistentes en varios idiomas.

![nocobase4.gif](https://static-docs.nocobase.com/nocobase4-plcdr3.gif)

### Huly Platform

![Huly Platform.png](https://static-docs.nocobase.com/Huly%20Platform-3s2br9.png)

Sitio oficial: [https://huly.io/](https://huly.io/)

GitHub: [https://github.com/hcengineering/platform](https://github.com/hcengineering/platform)

Estrellas de GitHub: 23.9k

Documentación de IA: [https://docs.huly.io/communication/live-transcription/](https://docs.huly.io/communication/live-transcription/)

**Descripción general**

Huly Platform es un espacio de trabajo de código abierto y todo en uno para la colaboración y la gestión empresarial. Reúne la gestión de proyectos, la comunicación, las funciones de oficina virtual y el CRM en un único entorno integrado.

**Cómo funciona la IA dentro del sistema**

Sus capacidades de IA se centran en la transcripción en tiempo real, impulsada por el asistente integrado Hulia. Durante las reuniones de voz o video realizadas en la plataforma, Hulia captura las conversaciones y las convierte en texto al instante. Las transcripciones se guardan como parte de la discusión, lo que permite a los usuarios leer, responder y marcarlas como si fueran mensajes de chat. Esto reduce la necesidad de tomar notas manualmente y agiliza la comunicación.

**Casos de uso típicos**

Huly es ideal para equipos que colaboran con frecuencia, como:

* Transcripción automática y creación de notas de reuniones durante llamadas de audio o video
* Compartir resúmenes de discusiones en texto para una revisión más fácil
* Gestionar proyectos, comunicación y conocimiento en un espacio de trabajo unificado

---

### Krayin CRM

![Krayin CRM.png](https://static-docs.nocobase.com/Krayin%20CRM-wo95u4.png)

Sitio oficial: [https://krayincrm.com/](https://krayincrm.com/)

GitHub: [https://github.com/krayin/laravel-crm](https://github.com/krayin/laravel-crm)

Estrellas de GitHub: 20.6k

Documentación de IA: [https://krayincrm.com/ai-crm/](https://krayincrm.com/ai-crm/)

**Descripción general**

Krayin CRM es un sistema de código abierto construido sobre Laravel, que ofrece funciones CRM principales como pipelines de ventas, contactos, leads y seguimiento de actividades, con una arquitectura de plugins flexible.

**Cómo funciona la IA dentro del sistema**

El módulo de IA oficial integra modelos de lenguaje grandes para mejorar los flujos de trabajo de CRM. Se utiliza para:

* **Creación y refinamiento de contenido de ventas**: generar correos electrónicos de seguimiento, notas de contacto, resúmenes de reuniones y contenido similar.
* **Asistencia en leads y contactos**: proporcionar sugerencias o completar automáticamente información en las páginas de detalle.
* **Entrada de texto más inteligente**: integrar la generación y sugerencias impulsadas por IA en registros, tareas y notas.

Estas funciones ayudan a los equipos a trabajar más rápido y mejorar la calidad de la escritura relacionada con el CRM.

**Casos de uso típicos**

Las capacidades de IA de Krayin funcionan bien para:

* Equipos de ventas que necesitan mensajes de seguimiento o resúmenes pulidos.
* Gestores de cuentas que desean un contexto de contacto más rico o notas sugeridas por IA.
* Equipos que buscan mejorar la eficiencia de escritura y la inteligencia general dentro de su CRM.

## CRMs que admiten extensiones o integraciones de IA

### Twenty

![Twenty.png](https://static-docs.nocobase.com/Twenty-9id6n2.png)

Sitio oficial: [https://twenty.com/](https://twenty.com/)

GitHub: [https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

Estrellas de GitHub: 37.3k

**Descripción general**

Twenty es un CRM de código abierto moderno diseñado como una alternativa altamente personalizable a sistemas como Salesforce. Brinda a los equipos control total sobre los datos, flujos de trabajo y arquitectura, lo que lo hace adecuado para organizaciones que desean autoalojar y adaptar su CRM en profundidad.

**Cómo se integra la IA**

Twenty ofrece APIs GraphQL y REST completas, lo que facilita la integración con sistemas de IA externos. Ya existe una extensión basada en MCP, donde un Servidor MCP expone los datos y operaciones de Twenty a asistentes de IA como Claude. Esto permite acciones en lenguaje natural como consultar, crear, actualizar y gestionar registros de CRM.

### ERPNext

![ERPNext.png](https://static-docs.nocobase.com/ERPNext-jtmlm0.png)

Sitio oficial: [https://erpnext.com/](https://erpnext.com/)

GitHub: [https://github.com/frappe/erpnext](https://github.com/frappe/erpnext)

Estrellas de GitHub: 30.6k

**Descripción general**

ERPNext es una plataforma de gestión empresarial de código abierto y todo en uno que cubre CRM, ventas, compras, inventario, finanzas, RRHH y más. Construido sobre el Framework Frappe, admite una amplia personalización y expansión modular, lo que lo hace ideal para equipos que construyen un sistema empresarial unificado.

**Cómo se integra la IA**

ERPNext admite IA a través de su API y framework de plugins. El ecosistema ahora incluye varias extensiones de IA construidas sobre Frappe, que aportan capacidades como generación de texto, refinamiento de contenido y asistencia inteligente en formularios, notas y módulos de comunicación. ERPNext también se utiliza con frecuencia como columna vertebral de la aplicación, integrando datos comerciales con servicios de IA externos para permitir el análisis y la generación automatizada de contenido.

### SuiteCRM

![SuiteCRM.png](https://static-docs.nocobase.com/SuiteCRM-8wdoh4.png)

Sitio oficial: [https://suitecrm.com/](https://suitecrm.com/)

GitHub: [https://github.com/SuiteCRM/SuiteCRM](https://github.com/SuiteCRM/SuiteCRM)

Estrellas de GitHub: 5.2k

**Descripción general**

SuiteCRM es un CRM de código abierto maduro que ofrece módulos para leads, contactos, cuentas, oportunidades y actividades de marketing. Es ampliamente utilizado por organizaciones que prefieren o requieren entornos de CRM autoalojados.

**Cómo se integra la IA**

SuiteCRM proporciona una API REST completa y un framework de extensiones modular, lo que permite la integración con IA a través de plugins o desarrollo personalizado. Tanto el ecosistema oficial como el de la comunidad ofrecen extensiones que añaden contenido generado por IA, sugerencias inteligentes o análisis automatizados a los flujos de trabajo de CRM. Los datos comerciales también se pueden conectar a servicios de IA externos a través de la API para admitir interacciones con clientes más inteligentes.

### Monica

![Monica.png](https://static-docs.nocobase.com/Monica-bj87me.png)

Sitio oficial: [https://www.monicahq.com/](https://www.monicahq.com/)

GitHub: [https://github.com/monicahq/monica](https://github.com/monicahq/monica)

Estrellas de GitHub: 23.8k

**Descripción general**

Monica es una herramienta de gestión de relaciones personales de código abierto que ayuda a las personas a organizar contactos, realizar un seguimiento de las interacciones y gestionar recordatorios, con un fuerte énfasis en la privacidad y el autoalojamiento.

**Cómo se integra la IA**

Monica se integra con la IA principalmente a través de su API REST y Webhooks. En la mayoría de los flujos de trabajo, los usuarios envían datos de contacto o interacción a servicios externos, donde la IA maneja el procesamiento de texto, el análisis o las sugerencias, y luego los resultados se sincronizan de vuelta. Las capacidades de IA provienen de herramientas externas, no del núcleo de Monica.

### Akaunting

![Akaunting.png](https://static-docs.nocobase.com/Akaunting-3j2qgv.png)

Sitio oficial: [https://akaunting.com/](https://akaunting.com/)

GitHub: [https://github.com/akaunting/akaunting](https://github.com/akaunting/akaunting)

Estrellas de GitHub: 9.4k

**Descripción general**

Akaunting es una plataforma de código abierto de contabilidad y gestión empresarial construida para pequeñas y medianas empresas. Ofrece módulos para contabilidad, facturación, gastos y gestión de clientes o proveedores, y admite extensiones de CRM y negocio a través de su mercado de aplicaciones.

**Cómo se integra la IA**

La IA se introduce en Akaunting a través de su API REST y framework de extensiones. En la práctica, se utilizan aplicaciones de terceros o servicios de IA externos para analizar datos financieros o de clientes, y los resultados se escriben de vuelta en el sistema. Por lo tanto, la funcionalidad de IA se añade a través de integraciones y extensiones, no está integrada en la plataforma central.

### IDURAR

![IDURAR.png](https://static-docs.nocobase.com/IDURAR-vys5jd.png)

Sitio oficial: [https://www.idurarapp.com/](https://www.idurarapp.com/)

GitHub: [https://github.com/idurar/idurar-erp-crm](https://github.com/idurar/idurar-erp-crm)

Estrellas de GitHub: 8.1k

**Descripción general**

IDURAR es una plataforma de gestión empresarial de código abierto que combina capacidades de ERP y CRM. Incluye gestión de clientes, ventas, facturación, contabilidad y operaciones básicas, y está diseñada para equipos pequeños y desarrolladores que necesitan un sistema autoalojado y personalizable.

**Cómo se integra la IA**

IDURAR ofrece APIs y una arquitectura extensible que le permiten trabajar con servicios de IA externos o módulos personalizados. En la mayoría de las configuraciones, la IA se ejecuta fuera del sistema central y se conecta a través de APIs para leer o actualizar datos comerciales, mejorando los flujos de trabajo existentes sin modificar la plataforma en sí. La integración se basa principalmente en APIs y extensiones externas.

### Dolibarr

![Dolibarr.png](https://static-docs.nocobase.com/Dolibarr-1j7qnu.png)

Sitio oficial: [https://www.dolibarr.org/](https://www.dolibarr.org/)

GitHub: [https://github.com/Dolibarr/dolibarr](https://github.com/Dolibarr/dolibarr)

Estrellas de GitHub: 6.8k

**Descripción general**

Dolibarr es una plataforma madura de ERP y CRM de código abierto con módulos para la gestión de clientes y proveedores, ventas, facturación, inventario y contabilidad. Su diseño modular y su implementación autoalojada lo convierten en una opción común para pequeñas y medianas organizaciones.

**Cómo se integra la IA**

Dolibarr admite APIs REST y un sistema de extensiones basado en módulos, lo que permite la conexión con servicios de IA externos o módulos personalizados. Las funciones de IA generalmente se manejan fuera de la plataforma central e interactúan con Dolibarr leyendo o actualizando datos a través de APIs, lo que permite añadir funciones inteligentes sin alterar el sistema principal. La integración generalmente se realiza a través de módulos y conexiones API.

## Conclusión

En la práctica, los CRMs con IA integrada tienden a ofrecer una experiencia más consistente e integrada. Debido a que la IA es parte de la arquitectura del sistema, las interacciones, funciones y flujos de trabajo se sienten más unificados. Si tu prioridad es adoptar la IA rápidamente o dejar que la IA apoye directamente las tareas diarias del CRM, una plataforma con funciones de IA nativas suele ser la opción más adecuada.

Los CRMs de código abierto que dependen de extensiones a menudo requieren más experiencia técnica y funcionan mejor para equipos que desean personalizar su sistema en torno a necesidades comerciales específicas. Con plugins, complementos de funciones o conexiones API a servicios de IA externos, los equipos pueden introducir capacidades de IA paso a paso.

Los CRMs con IA nativa también admiten plugins y APIs, y los CRMs extensibles pueden proporcionar una experiencia de IA sólida con la inversión adecuada. La clave es considerar tu etapa comercial, recursos técnicos y requisitos de flexibilidad para decidir qué tipo de CRM tiene más sentido.

Si te resultó útil este artículo, no dudes en compartirlo con cualquier persona interesada en IA y CRM.

**Lecturas relacionadas:**

* [Cómo construir rápidamente un sistema real para reemplazar Excel: Una guía completa](https://www.nocobase.com/en/blog/how-to-quickly-build-a-real-system-to-replace-excel)
* [Las 5 mejores herramientas internas de IA de código abierto en GitHub](https://www.nocobase.com/en/blog/top-5-open-source-ai-internal-tools-on-github)
* [Las 8 mejores alternativas a Google Sheets (Especificaciones y precios)](https://www.nocobase.com/en/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6 herramientas No/Low-Code de código abierto para construir PoCs](https://www.nocobase.com/en/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [Guía de decisión técnica para desarrolladores sobre No-Code y Low-Code (2026)](https://www.nocobase.com/en/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [Comparación en profundidad de 6 RBAC en plataformas No-Code/Low-Code de grado empresarial](https://www.nocobase.com/en/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [14 plataformas Low-Code impulsadas por IA en GitHub que vale la pena seguir](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github)
* [Las 11 mejores herramientas de IA No-Code de código abierto con más estrellas en GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
