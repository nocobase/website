---
title: "NocoBase como base tecnológica de ED: De sistemas internos a productos comerciales"
description: "ED construyó su base tecnológica sobre NocoBase, reduciendo los ciclos de entrega en un tercio, acelerando las pruebas y el lanzamiento, y garantizando una mayor estabilidad tanto en sistemas internos como en productos comerciales."
---

## **Introducción**

> Un dato curioso de nuestro recorrido: en nuestro proceso de preventa, a menudo combinamos NocoBase con IA para entregar pruebas de concepto a una velocidad récord. Los clientes se sorprenden con frecuencia cuando, después de reunirse con nosotros el lunes, regresan el miércoles y ven un prototipo completamente funcional. La reacción habitual es: *"¿Cuál es la magia?"* Cuando revelamos NocoBase, siempre se crea un momento de sorpresa... y curiosidad.
>
> **—— Fabio Farzat, CEO de ED**

## **Acerca de ED**

[ED](https://ed.dev.br/) es una empresa de tecnología con sede en Brasil que cuenta con **más de 130 profesionales en 16 estados**. Durante años, el equipo ha entregado y mantenido sistemas de misión crítica para grandes empresas en los sectores de seguros, mercados de capitales, servicios públicos y el sector público.

![ED.png](https://static-docs.nocobase.com/ED-nvmw2z.png)

En el ámbito de la entrega, ED posee la certificación **ISO 9001** (que cubre procesos de gestión de software, proyectos e infraestructura) y ha alcanzado el **Nivel 3 de CMMI-DEV**, lo que refleja estándares reconocidos internacionalmente y una madurez de ingeniería sostenible.

A nivel organizativo, ED ha sido clasificada entre las 10 mejores empresas de Brasil en el ranking "Great Place to Work" durante cuatro años consecutivos, alcanzando el puesto número 1 y ocupando actualmente el número 6. Este reconocimiento destaca la capacidad de ED para atraer y retener a los mejores talentos, garantizando profesionalismo y estabilidad en cada proyecto.

Con su escala, rigurosos sistemas de calidad y amplia base de clientes, ED es reconocida como un proveedor líder de servicios tecnológicos empresariales en Brasil. Hoy en día, está acelerando sus esfuerzos en **plataformas modernas y soluciones impulsadas por IA** para ayudar a los clientes a prepararse para el futuro.

## **Puntos Débiles y Decisión**

En la entrega diaria de proyectos, el equipo de ingeniería de ED se enfrentaba repetidamente al mismo desafío: **ciclos interminables de desarrollo CRUD e integración**. Ya sea para sistemas internos o proyectos orientados al cliente, necesitaban construir rápidamente capas de gestión de datos, generar API, manejar importación/exportación y, al mismo tiempo, garantizar seguridad y escalabilidad. Cada vez significaba empezar desde cero, consumiendo tiempo y recursos significativos y, en última instancia, ralentizando la innovación.

Para romper este ciclo, ED recopiló **una lista de requisitos de nivel empresarial**:

* **Seguridad** — control de acceso, aislamiento de datos, garantía de cumplimiento normativo
* **Rendimiento** — tiempos de respuesta rápidos incluso con conjuntos de datos a gran escala
* **Escalabilidad** — adaptación flexible a diversos proyectos y entornos de clientes
* **Observabilidad** — operaciones transparentes para monitoreo y resolución de problemas

![checklist.png](https://static-docs.nocobase.com/checklist-o8ncyd.png)

Lo que necesitaban era más que una simple herramienta de arrastrar y soltar tablas. Buscaban una plataforma que pudiera soportar modelos de datos completos, aplicar tipos fuertes y estructuras relacionales, y generar API automáticamente.

Después de evaluar múltiples soluciones del mercado, ED finalmente eligió **NocoBase**. Las pruebas de concepto internas mostraron que NocoBase no solo cumplía con todos los elementos de su lista de verificación, sino que también ofrecía mayor flexibilidad y eficiencia en el uso real.

## **Escenarios de Implementación**

Después de completar la prueba de concepto, ED implementó rápidamente NocoBase en sus sistemas comerciales principales y lo extendió gradualmente a múltiples escenarios.

### **Escenario 1: Producto Comercial – [AssistFlow](https://assistflow.com.br/)**

A diferencia de la mayoría de las empresas que solo usan NocoBase para sistemas internos, ED construyó una plataforma comercial externa directamente sobre él: **[AssistFlow](https://assistflow.com.br/)**. AssistFlow permite a las empresas crear rápidamente agentes inteligentes que operan sin problemas a través de múltiples canales de redes sociales, admitiendo interacciones multimodales con texto, voz, imágenes y archivos. Más allá del servicio al cliente, también se extiende a ventas, RR.HH., soporte técnico y más.

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow-e60x5d.png)

En este producto comercial, todo el módulo de configuración y la interfaz de gestión funcionan con NocoBase. Esto significa que el equipo no necesita rediseñar la lógica del frontend; en su lugar, pueden modelar y configurar directamente en NocoBase para proporcionar a los clientes capacidades de gestión flexibles y escalables.

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow2-vd4e8i.png)

**Aspectos destacados de AssistFlow:**

* **Incorporación rápida** — Cree e inicie un agente inteligente en solo 5 minutos, sin necesidad de codificación
* **Integración multicanal** — Compatible con WhatsApp, Teams, Slack, Telegram, Facebook, Instagram, LinkedIn y más
* **Interacción multimodal** — Maneja texto, voz, imágenes y archivos para satisfacer diversas necesidades comerciales
* **Amplia aplicabilidad** — Cubre servicio al cliente, ventas, marketing, RR.HH. y soporte técnico
* **Automatización e integración** — Las API integradas permiten conexiones perfectas con sistemas existentes y agilizan los flujos de trabajo
* **Seguro y controlable** — Admite implementación en nube privada para cumplir con los requisitos de seguridad y cumplimiento normativo de nivel empresarial

### **Escenario 2: Plataforma de Gestión de Proyectos**

Construida para soportar el ciclo de vida completo de los proyectos de entrega a clientes de ED. Las tareas que antes requerían múltiples rondas de desarrollo (como operaciones CRUD y lógica de permisos) ahora se pueden completar en un solo paso mediante un modelado de datos simple, configuración del frontend y API generadas automáticamente.

![Plataforma de Gestión de Proyectos](https://static-docs.nocobase.com/Project%20Management%20Platform-o3heh6.png)

### **Escenario 3: Sistema de Tickets**

Un sistema de soporte y solicitudes de servicio orientado al exterior, completamente impulsado por la capa de datos y la interfaz de NocoBase. Los clientes pueden enviar y realizar un seguimiento de los tickets directamente, mientras que los flujos de trabajo del backend se activan automáticamente para gestionar cada solicitud.

![Sistema de Tickets](https://static-docs.nocobase.com/Ticketing%20System-a9un8k.png)

### **Escenario 4: Sistema de Gestión de Proveedores**

En este sistema, los proveedores pueden cargar facturas, lo que activa automáticamente los flujos de trabajo de aprobación de pagos. Con las capacidades de modelado de datos y flujo de trabajo de NocoBase, todo el proceso está automatizado y es completamente rastreable.

## **Resultados**

Con NocoBase, ED logró mejoras significativas tanto en la velocidad como en la calidad de la entrega:

* **Ciclos de entrega más cortos** — Los módulos que antes requerían de 2 a 3 iteraciones de 15 días cada una ahora se pueden completar en una sola iteración
* **Pruebas y lanzamiento más rápidos** — La mayoría de las funciones solo requieren pruebas funcionales directas, sin las capas complejas típicas del desarrollo tradicional
* **Mayor estabilidad en producción** — Puestas en marcha más fluidas y mayor confianza del equipo

Los ingenieros de ED creen que NocoBase ha transformado la forma en que construyen. El modelado visual, el CRUD automatizado, los flujos de trabajo flexibles y las API generadas automáticamente han liberado a los desarrolladores del trabajo repetitivo, permitiéndoles centrarse directamente en los resultados comerciales. Los bucles de retroalimentación de QA y usuarios se han vuelto mucho más cortos, lo que permite que los proyectos lleguen a producción más rápido.

Hoy en día, NocoBase se ha convertido en la columna vertebral tecnológica de ED: impulsa sistemas internos, forma la base de productos comerciales externos y respalda casi todas las entregas diarias. Y lo que es más importante, esta magia de "reunión del lunes, prototipo del miércoles" no solo es el punto de partida de la sorpresa y la confianza del cliente, sino que también representa un nuevo paradigma de entrega.

## **Perspectivas**

Para los equipos de tecnología de todo el mundo, la experiencia de ED demuestra que NocoBase no solo cumple con los requisitos de nivel empresarial (seguridad, rendimiento, escalabilidad y observabilidad), sino que también permite iteraciones más rápidas, cambiando el enfoque de las tareas repetitivas a la innovación y la creación de valor.

En Brasil, ED ya ha remodelado su modelo de entrega con NocoBase. A continuación, su objetivo es llevar este enfoque a más industrias y organizaciones junto con NocoBase.

**Más historias de clientes:**

* [Respuesta en Subsegundos a Escala: Classact Ejecuta NocoBase en Kubernetes](https://www.nocobase.com/en/blog/classact)
* [La Fábrica Digital de BIEL Crystal: Impulsando 1.85 Mil Millones de Unidades al Año](https://www.nocobase.com/en/blog/bielcrystal)
* [Cómo Distinct HealthCare Usa NocoBase para Construir un Sistema de Cuidado Personalizado a Largo Plazo](https://www.nocobase.com/en/blog/distinct-healthcare)
* [Un Viaje Sin Código Dentro de SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [¿Qué hizo que la principal empresa inmobiliaria de Japón cambiara de Salesforce a NocoBase de código abierto?](https://www.nocobase.com/en/blog/century-21)
* [Cómo Second-Brain construyó un sistema de IA para instituciones financieras con NocoBase](https://www.nocobase.com/en/blog/second-brain)
