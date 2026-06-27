---
title: "Más allá de las hojas de cálculo: Gestión de datos de empleados de Classmethod con NocoBase"
description: "Classmethod construyó un sistema centralizado de gestión de información de empleados con NocoBase, superando las hojas de cálculo para lograr operaciones estructuradas y escalables, mientras convertía la experiencia interna en valor para los clientes."
---

## Introducción

Al alejarse de las hojas de cálculo, [Classmethod](https://classmethod.jp/) aprovechó NocoBase para crear una plataforma de gestión de información de empleados con una estructura clara y controles de acceso flexibles.

Este sistema no solo ha optimizado sus operaciones internas, sino que también les permitirá ofrecer soluciones técnicas más efectivas a sus clientes.

![Classmethod.PNG](https://static-docs.nocobase.com/Classmethod-o0zgj9.PNG)

## Acerca de Classmethod

[Classmethod](https://classmethod.jp/) Inc. es uno de los principales proveedores de servicios de TI de Japón, conocido principalmente por su soporte integral de AWS, que incluye optimización de costes, seguridad, implementación y operaciones continuas.

Más allá de AWS, Classmethod también ofrece servicios en adopción de la nube, infraestructura de datos, soluciones de IA generativa, desarrollo de aplicaciones e integración de SaaS, trabajando con plataformas importantes como Google Cloud, Cloudflare, Informatica y Snowflake.

Es posible que muchos desarrolladores conozcan Classmethod por su conocido sitio de medios tecnológicos, [DevelopersIO](https://dev.classmethod.jp/). Fiel a su reputación, el equipo es altamente técnico, ágil y orientado a la ejecución.

## El desafío de la gestión de la información: cuando Excel simplemente no es suficiente

A medida que el negocio de Classmethod ha crecido, su estructura de equipo se ha vuelto cada vez más compleja: ahora cuenta con alrededor de 500 empleados en Japón y más de 850 en todo el grupo. La fuerza laboral incluye no solo personal a tiempo completo, sino también trabajadores a tiempo parcial, colaboradores con trabajos secundarios, contratistas y socios, distribuidos por Japón y el extranjero.

Con este crecimiento, Classmethod comenzó a buscar mejores formas de gestionar su organización:

1. ¿Cómo pueden gestionar empleados en diferentes países y tipos de contratación con un único estándar unificado?
2. ¿Cómo se pueden automatizar procesos como la incorporación, la baja o los traslados internos, cubriendo la entrada de datos, los permisos de acceso y las notificaciones?
3. ¿Cómo puede la empresa realizar un seguimiento centralizado de las certificaciones, los antecedentes profesionales y los registros de formación de todos para respaldar una asignación de tareas, un desarrollo del talento y una contratación más inteligentes?
4. ¿Cómo puede la gestión sistemática no solo aumentar la eficiencia operativa, sino también proporcionar a los ingenieros junior experiencia real en operaciones y desarrollo, manteniendo al mismo tiempo los costes del sistema bajo control?

Ahora, imagina intentar manejar todo esto solo con Excel o Google Sheets. Es fácil ver cómo los problemas se acumularían rápidamente. De hecho, estos son exactamente los puntos débiles que el equipo de Classmethod ha experimentado de primera mano:

| **Gestión con Excel y Google Sheets**                              | Desafíos clave                                                                                                           |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ⚠️ Los registros de licencias de software se mantenían en Excel                       | ❌ Las asignaciones de licencias a menudo eran inexactas: las cuentas no utilizadas aún tenían licencias activas                                  |
| ⚠️ Cada departamento gestionaba su propia Google Sheet                      | ❌ Las auditorías se volvieron lentas y engorrosas tanto para los usuarios como para TI                                                               |
| ⚠️ Los permisos de acceso a datos se rastreaban en hojas de cálculo separadas     | ❌ Las definiciones de datos inconsistentes dificultaban compartir y gestionar la información, y era fácil equivocarse con los permisos |
| ⚠️ La información compleja debía verificarse manualmente con BUSCARV | ❌ Encontrar información entre departamentos era difícil, lo que ralentizaba los flujos de trabajo                                          |
| ⚠️ Cada incorporación, traslado o baja requería actualizaciones manuales  | ❌ La incorporación podía llevar hasta 10 días hábiles, creando una mala experiencia para los nuevos empleados                                |

Lo más importante es que, a medida que el equipo crecía y los procesos se volvían más complejos, estos problemas solo empeoraban. Sin un sistema centralizado y automatizado, la carga sobre el equipo administrativo aumentaba y toda la organización sufría respuestas más lentas y datos menos fiables.

Esta es la razón por la que Classmethod se propuso encontrar una solución más sistemática y flexible: una que pudiera centralizar la gestión de datos, admitir configuraciones específicas del negocio y permitir la automatización con el tiempo.

## Proceso de selección del sistema

Cuando Classmethod decidió ir más allá de las hojas de cálculo, el equipo evaluó una variedad de herramientas, incluyendo Airtable y NocoDB. Estas soluciones destacaban por su facilidad de uso, interfaces intuitivas y cierto nivel de extensibilidad. Sin embargo, finalmente, el equipo eligió NocoBase por algunas razones claras: ofrecía la flexibilidad, el control y la alineación con las necesidades de Classmethod que otras herramientas no podían igualar.

Esto es lo que más importó en su decisión:

**1. Implementación flexible y de código abierto**

Como empresa impulsada por la tecnología, Classmethod prefiere ejecutar sistemas críticos en su propio entorno de AWS para cumplir con los requisitos de seguridad y cumplimiento normativo. NocoBase es completamente de código abierto y se puede implementar en cualquier lugar, sin restricciones de SaaS.

**2. Sin tarifas por usuario, ideal para "muchos lectores, pocos editores"**

Si bien solo un grupo pequeño introduce datos, muchos departamentos necesitan acceso. Con un precio por usuario, los costes se dispararían rápidamente. El modelo de código abierto de NocoBase evita este problema por completo.

**3. Control de acceso detallado**

NocoBase admite configuraciones de visibilidad a nivel de registro y campo para diferentes usuarios, algo esencial para un acceso seguro y jerárquico a los datos en un sistema de gestión de empleados.

**4. Separación de la interfaz de usuario y la estructura de datos para interfaces personalizadas**

Diferentes equipos necesitan ver información diferente. Con NocoBase, la interfaz de usuario y el modelo de datos se configuran de forma independiente, lo que facilita la creación de interfaces flexibles y adaptadas.

**5. Motor de flujo de trabajo integrado, sin necesidad de automatización externa**

La lógica de negocio, como crear automáticamente cuentas para nuevos empleados o revocar permisos temporales, se puede manejar completamente con flujos de trabajo integrados, sin necesidad de herramientas de automatización de terceros o scripts personalizados.

**6. Generación automática de API para una fácil integración**

Cada nueva colección de datos en NocoBase viene con API generadas automáticamente, lo que facilita mucho que los equipos de ingeniería automaticen scripts y sincronicen datos.

En resumen, es posible que NocoBase no tenga la lista de funciones más larga, pero ofrece exactamente lo que Classmethod más necesita: seguridad, autonomía, flexibilidad y control total sobre el desarrollo y las operaciones.

## NocoBase en acción: impacto temprano

Una vez establecido el plan, Classmethod implementó rápidamente y modeló sus datos con NocoBase. El equipo de ingeniería implementó NocoBase en su propio entorno de AWS y configuró colecciones de datos centrales que reflejaban la organización, cubriendo empleados, departamentos, licencias de software, activos de la empresa, cuentas del sistema (como Slack y GitHub) y certificaciones. Los usuarios comerciales también podían actualizar campos y ajustar el diseño de la interfaz de usuario según fuera necesario.

Los datos iniciales se importaron a través de CSV, y las actualizaciones futuras se automatizaron utilizando scripts de Python y las API generadas automáticamente de NocoBase. Al vincular todos los datos a través de campos relacionales, el equipo logró una gestión de la información verdaderamente estructurada.

Después de la puesta en marcha, el nuevo sistema impulsó importantes ganancias de eficiencia:

* Los datos ya no estaban dispersos en hojas de cálculo de diferentes departamentos, lo que redujo en gran medida los problemas de sincronización y los conflictos de versiones
* La gestión de licencias de SaaS se automatizó, lo que hizo que las auditorías de TI fueran mucho más eficientes
* Tareas como revocar permisos temporales, confirmar asignaciones de dispositivos y enviar alertas de vencimiento se automatizaron cada vez más
* Los equipos comerciales podían modificar campos e interfaces ellos mismos, sin tener que esperar a los ingenieros, y el mantenimiento se volvió mucho más ligero
* Los datos de talento (certificaciones, formación, experiencia) ahora estaban estructurados, lo que facilitaba la gestión de traslados internos y contrataciones

![Employee Management.png](https://static-docs.nocobase.com/image_1-93c06z.png)

![Employee Management2.png](https://static-docs.nocobase.com/image_2-i5s50v.png)

Lo más importante es que este nuevo sistema sienta las bases para el crecimiento futuro. Ya sea integrando nuevos sistemas, ampliando flujos de trabajo o añadiendo capacidades de IA, NocoBase ofrece la flexibilidad y el poder técnico que Classmethod necesita para seguir evolucionando.

## Mejora continua: convertir el éxito interno en valor para el cliente

Classmethod ahora ha migrado por completo su gestión diaria de información de empleados a NocoBase y está avanzando con la automatización y la integración, como por ejemplo:

* Activar flujos de trabajo de aprobación cuando se añaden o actualizan nuevos datos
* Enviar notificaciones a otros equipos a través de Slack
* Exportar datos a sistemas externos (como Google Sheets o plataformas integradas)
* Solicitar automáticamente la renovación de licencias antes de que caduquen
* Confirmar la propiedad de los activos (para portátiles, tarjetas de seguridad, etc.)
* Revocar automáticamente permisos temporales
* Enviar recordatorios de vencimiento de licencias a través de flujos de trabajo automatizados
* Integrar con modelos de lenguaje grandes a través de su servidor MCP

El equipo también está trabajando para visualizar mejor los datos de los empleados, como certificaciones, historiales laborales y registros de formación, para mejorar la contratación, el desarrollo del talento y el intercambio de conocimientos internos.

Con NocoBase, Classmethod ha centralizado y automatizado su gestión de RR.HH., al mismo tiempo que ha acumulado una valiosa experiencia práctica en el desarrollo y la operación de sistemas.

Como empresa de servicios de TI impulsada por la tecnología, Classmethod está comprometida a convertir la experiencia práctica en valor real para los clientes. Ahora, están aplicando estas prácticas probadas a proyectos de clientes, ayudando a más empresas a construir sistemas flexibles y controlables para los entornos complejos de hoy.

Como dice su sitio web: Haz de la tecnología el núcleo de tu negocio e impulsa una mayor calidad y velocidad con la excelencia técnica y los resultados reales.

**Lecturas relacionadas:**

* [Cómo una fábrica de muebles construyó su propio ERP, sin necesidad de codificación](https://www.nocobase.com/en/blog/olmon)
* [De diseñador a constructor: la transformación digital de L&A con NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Cómo KIGLAND escaló la producción personalizada de máscaras de anime con herramientas de código abierto](https://www.nocobase.com/en/blog/kigland)
* [Cómo un bufete de abogados con más de 400 abogados optimiza la gestión de comisiones con NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
* [Desarrollo rápido con NocoBase: impulsando la transformación digital en la construcción](https://www.nocobase.com/en/blog/rapid-development-with-nocobase)
* [La actualización de fabricación inteligente de Orchisky: por qué eligieron NocoBase](https://www.nocobase.com/en/blog/Orchisky)
