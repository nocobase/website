---
title: "Respuesta en menos de un segundo a escala: Classact ejecuta NocoBase en Kubernetes"
description: "Classact implementó NocoBase en Kubernetes, logrando respuestas en menos de un segundo para cientos de miles de registros, cubriendo la gestión de RRHH y cumplimiento normativo, y mejorando significativamente la eficiencia y la experiencia del usuario."
---

## **Acerca de Classact**

[Classact Co., Ltd](https://www.classact.co.jp/). es un proveedor de servicios de infraestructura TI que ofrece soporte técnico y contratación de ingenieros. También es una de las primeras empresas en Japón en recibir la certificación Proxmox Gold Partner, con amplia experiencia en virtualización y centros de datos. Además de ofrecer soluciones informáticas de alta disponibilidad a sus clientes, Classact ha trabajado para optimizar sus propios sistemas y procesos internos, garantizando la eficiencia operativa y el cumplimiento normativo.

Como muchas empresas, las necesidades digitales de Classact van más allá de sus equipos técnicos. Departamentos como administración, RR. HH. y ventas también requieren sistemas fiables para gestionar la contratación, las operaciones de los empleados, la formación y el cumplimiento de la seguridad de la información.

![company.png](https://static-docs.nocobase.com/1-ifaq7k.png)

## **Desafíos y requisitos**

Antes de adoptar NocoBase, Classact dependía principalmente de la herramienta de código abierto Exment para la gestión de su base de datos interna.

![exment.PNG](https://static-docs.nocobase.com/2-x35h8j.PNG)

Sin embargo, a medida que las operaciones comerciales escalaban y el volumen de datos crecía, los problemas de rendimiento de Exment comenzaron a afectar el uso diario:

* **Carga lenta de páginas**: En conjuntos de datos grandes, una sola página podía tardar entre 5 y 10 segundos en cargarse, ralentizando significativamente los flujos de trabajo.
* **Mala experiencia de usuario**: Los largos tiempos de espera provocaban quejas frecuentes de los empleados y reducían su disposición a usar el sistema.
* **Escalabilidad limitada**: El sistema carecía de la flexibilidad necesaria para adaptarse a las crecientes necesidades del negocio o para admitir nuevos escenarios de aplicación.

Al mismo tiempo, diferentes equipos estaban experimentando con otras herramientas. Algunos adoptaron ClickUp para la gestión de tareas, mientras que Classact también evaluó Airtable y NocoDB.

A través de esta exploración, Classact aclaró sus requisitos para una nueva solución:

* **Alto rendimiento**: Gestionar cientos de miles de registros manteniendo tiempos de respuesta rápidos.
* **Flexibilidad**: Permitir que los departamentos adapten rápidamente las aplicaciones a sus necesidades específicas.
* **Control empresarial**: Compatibilidad con implementaciones autogestionadas y privadas, garantizando el control total de los datos.

Estos requisitos llevaron finalmente a Classact a elegir NocoBase como la solución más adecuada.

## **Implementación y validación**

Antes de la puesta en producción, Classact probó primero NocoBase en un entorno de preproducción. El equipo importó cientos de miles de registros para simular escenarios empresariales reales, centrándose en el rendimiento de las consultas y la carga de páginas. Los resultados mostraron que NocoBase mantenía un rendimiento estable incluso con grandes conjuntos de datos, cumpliendo plenamente con las expectativas.

Basándose en esta validación, la empresa implementó NocoBase en su clúster de Kubernetes autogestionado para garantizar la estabilidad a nivel empresarial. El equipo técnico también adquirió varios plugins, lo que aceleró el desarrollo de aplicaciones y permitió el lanzamiento rápido de sistemas de gestión de operaciones de empleados y formación que antes estaban estancados.

Este enfoque de implementación y validación no solo confirmó la fiabilidad de NocoBase en cuanto a rendimiento y escalabilidad, sino que también permitió a Classact migrar con un riesgo mínimo y avanzar rápidamente en su transformación digital interna.

## **Cobertura de aplicaciones**

Tras la implementación, Classact construyó y lanzó rápidamente una serie de aplicaciones para respaldar diferentes aspectos de las operaciones internas. Estas aplicaciones cubrían procesos empresariales comunes como RR. HH., servicios para empleados y gestión de activos, así como áreas más especializadas como el cumplimiento del SGSI y programas de mentoría.

![nocobase](https://static-docs.nocobase.com/3-z5vksi.PNG)

![nocobase.PNG](https://static-docs.nocobase.com/4-g1sz0z.PNG)

* **Gestión de Recursos Humanos**

Mantenimiento de datos de empleados, informes y notificaciones de formación, actividades de contratación (registros y notificaciones de entrevistas), asignación de roles y puestos, elecciones de representantes de empleados y seguimiento de certificaciones profesionales.

* **Servicios para empleados**

Actualizaciones de información (p. ej., dirección o ruta de desplazamiento), solicitudes de beneficios, reembolsos de gastos, compras de equipos y libros, solicitudes de tarjetas de visita, consultas médicas y notificaciones de eventos de celebración o pésame.

* **Gestión de activos y tareas**

Gestión de sistemas internos y activos de equipos, junto con el seguimiento diario de tareas.

* **Aprendizaje y desarrollo**

Gestión de licencias de e-learning, gestión de programas de mentoría y elaboración de informes para apoyar el crecimiento continuo de los empleados.

* **Seguridad de la información y cumplimiento normativo**

Gestión de operaciones del SGSI para cumplir con los estándares de seguridad de la información.

* **Recopilación de datos y participación**

Formularios públicos para recopilar información de candidatos, encuestas a empleados y comentarios internos.

La mayoría de los sistemas empresariales solo cubren un único escenario, lo que obliga a las organizaciones a depender de múltiples herramientas para gestionar diferentes procesos en paralelo. **NocoBase rompe esta limitación, permitiendo a Classact construir y combinar aplicaciones libremente dentro de una única plataforma.**

Con este enfoque, Classact ha creado una plataforma de gestión interna integrada y adaptada a sus necesidades, con una flexibilidad mucho mayor que las soluciones tradicionales.

## **Resultados**

Al adoptar NocoBase, Classact logró mejoras significativas tanto en rendimiento como en experiencia de usuario:

* **Optimización del rendimiento**: Los tiempos de carga de página se redujeron de 5 a 10 segundos a solo 1 o 2 segundos, mejorando enormemente la eficiencia diaria.
* **Mayor satisfacción del usuario**: La reducción de los tiempos de espera alivió la frustración y la resistencia, lo que se tradujo en comentarios positivos constantes por parte de los empleados.
* **Visualización**: Los gráficos, los filtros flexibles y las opciones de visualización hicieron que el análisis de datos fuera mucho más intuitivo.
* **Optimización de procesos**: Las funciones de flujo de trabajo simplificaron aún más los procesos empresariales complejos.

Classact también compartió comentarios positivos sobre su experiencia con NocoBase:

> *“Lo que más valoramos de NocoBase es su estabilidad y escalabilidad. Incluso con grandes conjuntos de datos, ofrece un rendimiento estable de forma consistente. Las funciones de gráficos nos proporcionan una visualización de datos intuitiva, el plugin LDAP permite una integración perfecta con Active Directory, los formularios públicos facilitan la recopilación de datos de candidatos y empleados, y las funciones de flujo de trabajo han agilizado enormemente nuestros procesos internos.”*  — **Hidetoshi Honma, CEO de Classact**

## **Conclusión**

La experiencia de Classact demuestra que NocoBase no solo ofrece tiempos de respuesta inferiores a un segundo con conjuntos de datos de cientos de miles de registros, sino que también, mediante la implementación en Kubernetes y su arquitectura de plugins, respalda las necesidades complejas de múltiples departamentos y procesos en una única plataforma.

A diferencia de los sistemas tradicionales aislados, NocoBase proporciona una arquitectura basada en modelos, extensible y componible. Esto permite a las empresas evolucionar continuamente sus sistemas internos a un costo menor, manteniendo al mismo tiempo espacio para futuras expansiones.


**Más historias de clientes:**

* [La fábrica digital de BIEL Crystal: impulsando 1.850 millones de unidades al año](https://www.nocobase.com/en/blog/bielcrystal)
* [Cómo Distinct HealthCare utiliza NocoBase para construir un sistema de cuidados personalizados a largo plazo](https://www.nocobase.com/en/blog/distinct-healthcare)
* [Un viaje sin código dentro de SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [¿Qué llevó a la principal inmobiliaria de Japón a cambiar de Salesforce a NocoBase de código abierto?](https://www.nocobase.com/en/blog/century-21)
* [Cómo Second-Brain construyó un sistema de IA para instituciones financieras con NocoBase](https://www.nocobase.com/en/blog/second-brain)
* [Cómo la marca número 1 de grabadoras de voz con IA construyó sus sistemas internos](https://www.nocobase.com/en/blog/plaud)
