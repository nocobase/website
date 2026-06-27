---
title: "Cómo la marca número 1 de grabadoras de voz con IA construyó sus sistemas internos"
description: "Ante el crecimiento del negocio, PLAUD, la marca número 1 de grabadoras de voz con IA del mundo, eligió la plataforma de código abierto sin código NocoBase para construir sistemas de servicio al cliente y operaciones, cumpliendo con los requisitos de flexibilidad y control mientras mejoraba la eficiencia del trabajo."
---

## Introducción

En 2023, [PLAUD NOTE](https://www.plaud.ai/) hizo su primera aparición en una plataforma de crowdfunding y de inmediato destacó como la primera grabadora de IA del mundo impulsada por ChatGPT. Con un diseño de hardware innovador y potentes capacidades de IA, rápidamente captó la atención mundial.

Solo durante la preventa, generó casi 6 millones de dólares y consiguió 35 000 miembros de pago, convirtiéndose rápidamente en un éxito rotundo en el mundo del hardware de IA.

![PLAUD NOTE](https://static-docs.nocobase.com/1-hv0ztl.gif)

Y el revuelo no terminó ahí:

En menos de dos años, PLAUD había acumulado 700 000 usuarios en 168 países, apareció en los principales medios tecnológicos globales y obtuvo importantes premios internacionales de diseño como Red Dot, iF y Good Design.

![PLAUD](https://static-docs.nocobase.com/2.0-n0gu0c.PNG)

En 2024, los ingresos superaron los 70 millones de dólares, el tamaño del equipo se duplicó y la empresa logró un crecimiento de 10x durante dos años consecutivos.

Pero a medida que las ventas se disparaban y los usuarios seguían llegando, surgió una pregunta difícil:

¿Era el sistema interno lo suficientemente sólido como para seguir el ritmo de este crecimiento vertiginoso?

## Más allá de una grabadora de voz

La mayoría de la gente conoce PLAUD por su grabadora ultrafina con forma de tarjeta: PLAUD NOTE.

Pero PLAUD NOTE no es una grabadora de voz típica. Una vez finalizada la grabación, transcribe automáticamente el audio, lo resume e incluso redacta contenido listo para publicar usando IA.

![Más allá de una grabadora de voz](https://static-docs.nocobase.com/3.0-ty43po.PNG)

Para los creadores de contenido, es más que un dispositivo: es un asistente de escritura impulsado por IA que puedes llevar a cualquier parte.

Lo que impulsa este hardware es una plataforma de software en constante evolución. Dentro de la aplicación PLAUD, hay una comunidad creciente donde los usuarios pueden subir, editar y compartir plantillas de transcripción adaptadas a diferentes campos (como derecho, sanidad y educación), facilitando a todos el trabajo con contenido de voz.

El hardware es solo el punto de partida. Lo que realmente diferencia a PLAUD es la plataforma que lo respalda, diseñada para ayudar a que el contenido fluya y crezca mediante la colaboración de los usuarios.

## **¿Cómo construir sistemas desde cero rápidamente?**

A medida que la demanda aumentaba, las necesidades internas de PLAUD se volvían más complejas.

El equipo de soporte necesitaba acceso rápido a los datos de los usuarios y herramientas para resolver problemas de cuentas.

El equipo de operaciones quería mejores formas de gestionar el contenido de la aplicación y supervisar las plantillas de la comunidad.

Pero en aquel entonces, ninguna de esas infraestructuras existía.

> "No teníamos nada de eso; solo cuando las necesidades empezaron a acumularnos empezamos a buscar cómo satisfacerlas", dijo Lucas, Product Manager de PLAUD.

Aunque los equipos de producto e ingeniería de PLAUD son de clase mundial, su enfoque estaba centrado en la innovación. Reconstruir los sistemas internos no era la prioridad; sin embargo, el soporte y las operaciones impactan directamente en la experiencia del usuario y no podían quedar rezagados.

Así que, en lugar de depender de herramientas SaaS rígidas, PLAUD eligió un camino diferente: utilizaron la plataforma de código abierto sin código **NocoBase** para construir un sistema adaptado a sus necesidades.

No estaban buscando específicamente una "herramienta sin código". Simplemente, NocoBase abordaba perfectamente sus tres requisitos principales.

* **Del cero al lanzamiento rápido:** Sin lastre heredado, solo construir lo necesario.
* **Flexible por diseño:** Modelos de datos y lógica totalmente personalizables, sin dependencia del proveedor.
* **Primero el producto:** Gestionado por el equipo de producto, con un soporte mínimo de desarrollo.

En solo unos días, el equipo tenía un sistema funcional, y lo han estado mejorando desde entonces.

## **Una plataforma, dos sistemas principales**

Hasta ahora, PLAUD ha utilizado NocoBase para construir dos sistemas clave. Uno sirve a su equipo de atención al cliente y el otro apoya a su equipo de operaciones.

**Sistema de Atención al Cliente: Información de Usuario Centralizada**

El backend de atención al cliente de PLAUD se utiliza principalmente para:

* Consultar información básica del usuario y cómo se registró.
* Verificar el estado de la cuenta y qué beneficios ha adquirido.
* Realizar acciones en el backend, como cambiar estados o marcar registros.

El sistema se conecta a la base de datos principal de la empresa mediante un plugin de fuente de datos externa. Vincula datos entre diferentes tablas. Esto permite al personal de atención al cliente encontrar y gestionar información en un solo lugar dentro de NocoBase, aumentando significativamente su eficiencia.

> "Ahora podemos encontrar toda la información de nuestros usuarios directamente en el sistema. Los datos se conectan directamente usando SQL."
>
> – Lucas, Product Manager de PLAUD

**Sistema de Operaciones: Gestión del Contenido de la Comunidad de Plantillas**

Para operaciones, el equipo construyó un sistema de revisión para su comunidad de plantillas usando NocoBase. Este sistema gestiona las plantillas de contenido enviadas por los usuarios, como plantillas de voz a texto para áreas como sanidad, ventas, derecho y educación.

El sistema admite:

* La recepción automática del contenido de las plantillas.
* La configuración de flujos de trabajo de revisión y la gestión de sus estados.
* La publicación automática de las plantillas aprobadas en la comunidad de la aplicación.

![Sistema de Operaciones](https://static-docs.nocobase.com/4.0-cpa6sz.jfif)

Toda la configuración requirió muy poca intervención de los desarrolladores. Fue configurada principalmente por el equipo de producto. Solo se recurrió a algunos plugins y ayuda técnica para tareas de datos complejas, como la conversión de JSON.

## **Solo dos personas, y todo el sistema funcionó sin problemas**

Cuando el equipo de PLAUD habla de NocoBase, surgen tres palabras una y otra vez: flexible, eficiente y con control.

Todo el sistema de soporte al cliente y operaciones fue construido principalmente por el product manager, con solo ayuda ocasional de los desarrolladores para conexiones API o ajustes de plugins.

Esta configuración quitó presión al equipo de desarrollo y permitió que la visión del producto tomara forma más rápidamente, con ciclos de iteración más ágiles.

> "NocoBase se usa en toda la empresa, pero ¿la configuración real? Solo yo y un compañero. Los desarrolladores intervinieron solo cuando necesitábamos conectar interfaces."
>
> — Lucas, Product Manager de PLAUD

Lo que más destacó fue la potente capacidad de modelado de datos de NocoBase.

La lógica de negocio de PLAUD implica relaciones complejas entre múltiples tablas, junto con un estricto control de acceso.

Gracias a la estructura basada en modelos de NocoBase, pudieron definir campos de forma flexible, establecer lógica relacional y vincular fácilmente datos entre módulos, haciendo que todo el sistema fuera mucho más utilizable.

> "Necesitábamos muchas relaciones entre tablas, y NocoBase realmente logró esa parte."
>
> — Lucas, Product Manager de PLAUD

Y con su arquitectura basada en plugins, NocoBase también proporcionó al equipo una base sólida para futuras expansiones, en sus propios términos.

## **De éxito viral a éxito duradero**

En menos de dos años, PLAUD pasó de causar sensación con su producto debut a gestionar una plataforma completa. El año pasado, lanzaron NotePin, una grabadora de IA portátil de nueva generación.

![NotePin](https://static-docs.nocobase.com/5.0-rdpv09.png)

Pero detrás de esta rápida evolución no solo había hardware de vanguardia o modelos potentes. Lo que realmente marcó la diferencia fue el agudo juicio y la velocidad de PLAUD para construir los sistemas adecuados.

No invirtieron grandes sumas en soluciones SaaS pesadas ni formaron un equipo de desarrollo masivo. En cambio, adoptaron un enfoque más ágil y autodirigido, construyendo una plataforma de operaciones y soporte personalizada con herramientas de código abierto que se ajustaban perfectamente a su negocio.

En el centro de todo hay una capacidad clave: poder crear un sistema flexible y controlable con recursos mínimos, para que el equipo pueda mantenerse ágil incluso cuando las cosas se mueven rápido.

De cara al futuro, NocoBase continuará apoyando a PLAUD en su viaje, desbloqueando aún más posibilidades donde el software se encuentra con el hardware.

**Lecturas relacionadas:**

* [Más allá de las hojas de cálculo: Gestión de datos de empleados de Classmethod con NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [Cómo una fábrica de muebles construyó su propio ERP sin necesidad de programar](https://www.nocobase.com/en/blog/olmon)
* [De diseñador a constructor: La transformación digital de L&A con NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Cómo KIGLAND escaló la producción de máscaras de anime personalizadas con herramientas de código abierto](https://www.nocobase.com/en/blog/kigland)
* [Cómo un bufete de abogados con más de 400 profesionales optimiza la gestión de comisiones con NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
* [Desarrollo rápido con NocoBase: Impulsando la transformación digital en la construcción](https://www.nocobase.com/en/blog/rapid-development-with-nocobase)
