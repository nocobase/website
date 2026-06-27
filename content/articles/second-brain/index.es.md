---
title: "Cómo Second-Brain construyó un sistema de IA para instituciones financieras con NocoBase"
description: "La empresa de IA con sede en Hong Kong, Second-Brain, utilizó NocoBase para superar los desafíos de alta seguridad y ciclos cortos, construyendo un sistema de IA para empresas financieras que logra una entrega eficiente y acumulación de capacidades."
---

## La decisión crítica de una startup de IA

[Second-Brain](http://www.dbl-brain.com/) es una startup de IA con sede en Hong Kong, fundada por un equipo con experiencia en finanzas y consultoría. Se especializan en construir sistemas de toma de decisiones impulsados por IA para empresas.

![Second-Brain](https://static-docs.nocobase.com/1-esvvr0.PNG)

En entornos empresariales B2B, la parte más difícil de construir sistemas de IA no son los modelos en sí, sino los datos desordenados y fragmentados que hay detrás. Las políticas internas, los flujos de trabajo y los registros comerciales a menudo existen en silos, en formatos inconsistentes y, a veces, incluso se contradicen entre sí. Sin limpiar y estructurar estos datos, la IA simplemente no puede generar información significativa.

Para permitir que la IA "entienda" una empresa, el primer paso de Second-Brain es construir una capa fundamental que consolide el conocimiento empresarial propio, incluyendo reglas y regulaciones internas, procesos comerciales y estándares de cumplimiento externos.

Mientras desarrollaban un sistema de conocimiento de IA para un cliente bancario, Second-Brain se encontró con importantes desafíos de entrega:

* Soporte para **cientos de páginas** con un control de permisos intrincado
* Implementación completamente fuera de línea **sin acceso a servicios en línea**
* **Cronograma de entrega ajustado** sin compromiso en la experiencia del usuario

Con un fuerte enfoque en modelos de IA y diseño de productos verticales, Second-Brain necesitaba una columna vertebral del sistema que fuera **flexible, autoalojada y rápida de implementar**, con un potente soporte para el modelado y la configuración de datos.

## ¿Por qué NocoBase?

Cuando comenzó el proyecto, Second-Brain analizó cuidadosamente varias plataformas low-code y no-code. Esto incluyó varias herramientas SaaS y proyectos de código abierto tanto nacionales como internacionales. Sin embargo, los problemas con las opciones de implementación, las licencias o el control del código significaron que no podían cumplir con los estrictos requisitos del cliente para la implementación fuera de línea y la seguridad de la información.

En un momento dado, incluso consideraron volver a un "enfoque tradicional": desarrollar todo el front-end y back-end internamente. Este método ofrecía un gran control y ayudaba a proteger la propiedad intelectual (PI). Pero con un plazo de entrega ajustado y altas expectativas del cliente, este camino era demasiado costoso y arriesgado.

Justo cuando el equipo estaba lidiando con esta decisión, descubrieron NocoBase.

El equipo se sintió atraído por la arquitectura y los principios de NocoBase: **no depende de SaaS, ofrece flexibilidad y es personalizable, extensible y entregable**. Su naturaleza de código abierto permitió a Second-Base obtener una comprensión profunda de cómo funciona NocoBase, ayudándoles a abordar rápidamente los comentarios de los clientes.

Al final, Second-Brain eligió NocoBase como la plataforma fundamental para su sistema y comenzó a construir y entregar el proyecto. El verdadero desafío no fue solo elegir la herramienta, sino cómo usarla para construir un sistema de aplicaciones de IA complejo e impulsado por datos y entregarlo rápidamente.

## Implementación del proyecto: desafíos y soluciones

Este proyecto no se trataba solo de construir una plataforma tradicional de gestión del conocimiento, sino de crear una base de conocimiento confiable y a largo plazo que la IA pudiera entender y usar realmente.

El objetivo era limpiar, clasificar y modelar las regulaciones internas y las reglas comerciales no estructuradas, para luego exponerlas a través de API estandarizadas para el acceso de los modelos de IA. Esto requería capacidades avanzadas en modelado de datos, organización y diseño de interfaces.

Debido a que el cliente opera en la industria financiera, la seguridad era primordial. **Toda la implementación debía ejecutarse completamente fuera de línea, y cada actualización debía pasar por un proceso de aprobación y transferencia físicamente aislado.**

Una vez que NocoBase demostró ser técnicamente viable, Second-Brain avanzó con la arquitectura de la solución y la selección tecnológica, ganando finalmente la licitación e impulsando el proyecto.

NocoBase sirvió como la columna vertebral del sistema, permitiendo al equipo:

* **Transformar documentos y políticas regulatorias en datos estructurados y estandarizados** que los modelos de IA pudieran consumir

![Transformar documentos y políticas regulatorias en datos estructurados y estandarizados](https://static-docs.nocobase.com/2-5xor3v.PNG)

* **Potenciar la infraestructura de datos detrás del módulo de preguntas y respuestas de IA**, permitiendo:
  * Preguntas y respuestas cotidianas y consultas relacionadas con políticas
  * Consultas comerciales que abarcan múltiples conjuntos de datos
  * Análisis orientados a la gerencia que entregan conclusiones estructuradas

![Potenciar la infraestructura de datos detrás del módulo de preguntas y respuestas de IA](https://static-docs.nocobase.com/3-p8o62u.PNG)

* **Apoyar los flujos de trabajo de IA con herramientas internas** como: Preprocesamiento de documentos (ej., convertir PDFs, archivos de Word o imágenes en texto extraíble)

  ![Preprocesamiento de documentos](https://static-docs.nocobase.com/4-sdv8mt.png)

  Generación de pares de preguntas y respuestas a partir de corpus seleccionados para enriquecer conjuntos de datos de ajuste fino.![Generación de pares de preguntas y respuestas](https://static-docs.nocobase.com/5-hb6nly.png)
* **Construir un plugin personalizado de ECharts para visualizar las relaciones** entre reglas y regulaciones como un grafo de conocimiento.

![Plugin de ECharts](https://static-docs.nocobase.com/6-qalqnu.png)

## La arquitectura de plugins: una sorpresa agradable

Al lidiar con estrictos requisitos de seguridad, **el diseño basado en plugins de NocoBase demostró ser un punto de inflexión tanto para la implementación como para la colaboración**.

Second-Brain modularizó las funciones principales en plugins individuales, de modo que cada vez que el sistema necesitaba ser actualizado, podían enviar solo los plugins actualizados para su aprobación. Esto facilitó mucho el cumplimiento del proceso de revisión del cliente y redujo drásticamente los gastos generales de escaneos de seguridad y pruebas. Fue un ajuste ideal para instituciones financieras con un control estricto sobre las actualizaciones de software.

Los beneficios no terminaron ahí. **El enfoque de plugins también aumentó la velocidad de desarrollo del equipo.**

Se necesitaron unas dos semanas para crear el primer plugin mientras se descubría la estructura y plantilla ideales. Pero después de eso, los nuevos plugins podían clonarse y personalizarse en una fracción del tiempo.

Ahora han desarrollado casi 20 plugins que cubren varios módulos como visualización de grafos, gestión de permisos y limpieza de datos. Esto creó una biblioteca de activos reutilizables para futuras entregas.

## Perspectivas de primera línea del uso en el mundo real

A lo largo del proceso de entrega, Second-Brain compartió varias conclusiones clave de trabajar con NocoBase en producción.

**1. Estabilidad**

Incluso con iteraciones frecuentes, NocoBase mantuvo una fuerte consistencia de versiones. **El sistema nunca se cayó debido a una actualización**, un factor crítico cuando se trabaja con clientes en la industria financiera.

> "NocoBase ha sido impresionantemente consistente entre versiones. No nos hemos encontrado con ningún bloqueo durante las actualizaciones entre versiones, lo que, honestamente, es bastante raro." — Zhengxing Yang, Líder Técnico en Second-Brain

**2. Colaboración**

Second-Brain tuvo una colaboración fluida y receptiva con el equipo técnico de NocoBase durante todo el ciclo de entrega. Desde correcciones de errores hasta solicitudes de funciones, cada respuesta fue oportuna y útil.

Este modelo de trabajo de "código abierto, pero nunca solo" fue un facilitador clave en un proyecto de alta seguridad y alto riesgo.

Si bien el proyecto ahora está completo, sus herramientas y enfoque continúan dando forma a la forma en que opera el cliente hoy en día.

## Conclusión

Second-Brain entregó un sistema de IA complejo y de alta seguridad con un equipo reducido. Al confiar en NocoBase para manejar la base del sistema, el equipo fue libre de canalizar su energía en la construcción de capacidades de IA que realmente importaban.

Eso es exactamente lo que NocoBase pretende hacer: **liberar a los equipos del desarrollo repetitivo de sistemas, para que puedan centrarse en un trabajo creativo y de alto impacto que impulse el valor comercial real**.

En industrias con estrictas demandas de seguridad y requisitos complejos, este proyecto muestra cómo una plataforma no-code y low-code verdaderamente flexible puede redefinir lo que es posible en la entrega de sistemas empresariales.

**Lectura relacionada:**

* [Cómo la Marca N.º 1 de Grabadoras de Voz con IA Construyó Sus Sistemas Internos](https://www.nocobase.com/en/blog/plaud)
* [Más Allá de las Hojas de Cálculo: Gestión de Datos de Empleados de Classmethod con NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [Cómo una Fábrica de Muebles Construyó Su Propio ERP—Sin Necesidad de Programación](https://www.nocobase.com/en/blog/olmon)
* [De Diseñador a Constructor: La Transformación Digital de L&A con NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Cómo KIGLAND Escaló la Producción Personalizada de Máscaras de Anime con Herramientas de Código Abierto](https://www.nocobase.com/en/blog/kigland)
* [Cómo un Bufete de Abogados de Más de 400 Personas Optimiza la Gestión de Comisiones con NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
