## Introducción

Usa tu AI agent favorito junto con NocoBase para construir rápidamente un sistema de gestión de SLA personalizable, fiable y con capacidad de evolución continua. Monitoriza los tiempos de respuesta de los tickets, los tiempos de resolución, el estado de incumplimiento, los tickets en riesgo, las tasas de cumplimiento SLA y el rendimiento del servicio en los diferentes niveles de prioridad.

Puedes copiar el prompt que aparece a continuación y dejar que tu AI agent genere la estructura base del sistema de gestión de SLA en NocoBase, y luego ajustar campos, páginas, reglas de plazos y estándares de prioridad a través de la interfaz no-code.

Este sistema es ideal para equipos de soporte al cliente, soporte técnico, mesas de servicio de TI, equipos de operaciones, equipos de infraestructura y equipos de servicios internos que necesiten hacer seguimiento de si los tickets reciben respuesta y se resuelven dentro de los plazos comprometidos.

**Dashboard de monitorización SLA en tiempo real:**

![](https://static-docs.nocobase.com/sla-management-1-srd4fv-c-lpaoet.png)

**Lista de detalle SLA de tickets:**

![](https://static-docs.nocobase.com/sla-management-2-xrr54k-c-3i60zi.png)

**AI employee analizando datos y generando informes:**

![](https://static-docs.nocobase.com/sla-management-3-3exg24-c-whyhmu.png)

## ¿Qué problemas resuelve un sistema de gestión de SLA?

El núcleo de la gestión de SLA es determinar si cada ticket puede recibir su primera respuesta y resolución definitiva dentro del plazo comprometido.

A medida que crece el volumen de tickets, resulta difícil para los equipos depender del juicio manual para detectar qué tickets están a punto de agotar su tiempo, cuáles ya han incumplido el SLA y si la gestión en los distintos niveles de prioridad sigue cumpliendo los objetivos. Sin una página unificada de monitorización SLA, los problemas de alto riesgo suelen descubrirse solo después de que ya han incumplido el plazo.

Con este sistema, puedes establecer límites de tiempo de respuesta y resolución para las diferentes prioridades y calcular continuamente cuánto tiempo queda antes de que cada ticket alcance su plazo SLA.

El sistema puede clasificar los tickets en estados como Cumplido, En riesgo e Incumplido. Los directivos pueden ver en un dashboard en tiempo real el número de tickets en riesgo, los incumplimientos del día, la tasa general de cumplimiento SLA y el tiempo medio de primera respuesta.

Para los tickets que ya han incumplido el SLA o están a punto de hacerlo, el sistema puede presentarlos en un único lugar ordenados por prioridad, cola, tiempo transcurrido y tiempo objetivo, ayudando al equipo a abordar primero los problemas más urgentes.

La lista de detalle de tickets también puede mostrar el asunto, la cola, la prioridad, el estado, el indicador de incumplimiento, el plazo de respuesta, el plazo de resolución y la duración objetivo SLA, facilitando a los directivos auditar en detalle cómo se gestiona cada ticket.

## Funcionalidades principales

### Dashboard de monitorización SLA en tiempo real

- **Resumen de métricas clave:** Muestra en un solo lugar el número de tickets en riesgo, los incumplimientos del día, la tasa de cumplimiento SLA y el tiempo medio de primera respuesta.
- **Indicadores de desviación respecto al objetivo:** Compara la tasa de cumplimiento SLA actual con el objetivo para valorar rápidamente si el rendimiento general del servicio está en línea.
- **Monitorización del estado en tiempo real:** Actualiza continuamente el riesgo actual de los tickets y el estado de gestión para que el equipo pueda ajustar las prioridades a tiempo.

### Gestión de tickets en riesgo e incumplidos

- **Tickets con incumplimiento crítico:** Muestra las incidencias clave que ya han superado sus límites SLA, incluyendo el asunto del ticket, la prioridad, la cola y el tiempo transcurrido.
- **Alertas de incumplimiento inminente:** Identifica con antelación los tickets En riesgo que se acercan a sus plazos para evitar que el problema escale.
- **Visualización del progreso:** Usa barras de progreso para mostrar la duración objetivo frente al tiempo transcurrido, facilitando la lectura del nivel de riesgo del ticket de un vistazo.

### Gestión de información SLA de tickets

- **Plazos de respuesta y resolución:** Registra por separado el plazo de primera respuesta y el plazo de resolución definitiva.
- **Prioridades multinivel:** Admite niveles de prioridad como P1 Critical, P2 High, P3 Medium y P4 Low, cada uno con sus propios objetivos SLA.
- **Clasificación automática de estado:** Usa estados como En riesgo, Incumplido y Cumplido para marcar el rendimiento SLA actual de cada ticket.

### Colas de servicio y listas de tickets

- **Gestión de múltiples colas:** Organiza los tickets por colas de servicio como Customer Success, Technical Support, Infrastructure y Billing.
- **Lista de detalle de tickets:** Muestra el asunto, la cola, la prioridad, el estado, el indicador de incumplimiento, el plazo de respuesta y el plazo de resolución.
- **Filtrado y mantenimiento:** Admite el filtrado, creación, consulta, edición y eliminación de tickets para que el equipo pueda mantener actualizados los registros de servicio.

### Análisis del rendimiento SLA

- **Puntuación SLA general:** Agrega el cumplimiento del servicio en todos los tickets en una puntuación global intuitiva.
- **Análisis por prioridad:** Compara las tasas de cumplimiento SLA y los recuentos de incumplimiento entre prioridades como P1, P2 y P3.
- **Análisis de distribución de estados:** Contabiliza los tickets en estados En riesgo, Incumplido, En curso y Cumplido y muestra sus proporciones.

### Análisis con IA

- **Identificación de riesgos de servicio con IA:** Detecta automáticamente las prioridades con altas tasas de incumplimiento, las colas de servicio anómalas y los grupos de tickets en riesgo.
- **Generación de informes SLA con IA:** Resume el estado de salud general, la distribución de estados de los tickets, el rendimiento por prioridad y los riesgos de cola.
- **Recomendaciones de gestión con IA:** Genera las prioridades para la siguiente fase basándose en los datos actuales, como restaurar primero los tickets P1, estabilizar las colas de alto riesgo o abordar los riesgos P2 con anticipación.
- **Vista previa y exportación de informes:** Consulta los informes en Vista previa, Markdown y HTML, y descárgalos o imprímelos como PDF.

## ¿Por qué construir un sistema de gestión de SLA con IA y NocoBase?

La parte verdaderamente difícil de la gestión de SLA no es establecer un plazo, sino calcular continuamente el riesgo en función de la prioridad del ticket, la cola y el estado actual, y alertar al equipo antes de que un ticket realmente incumpla el SLA.

Si construyes desde cero con vibe coding convencional, normalmente obtienes primero solo una lista de tickets. Luego hay que seguir añadiendo cálculos de tiempo, lógica de estados, reglas de incumplimiento, dashboards en tiempo real, permisos y seguimiento del historial, y cuantas más reglas se añaden, más difícil resulta mantener el sistema.

NocoBase puede vincular tickets, prioridades, colas, plazos de respuesta y plazos de resolución, y presentar el estado SLA de cada ticket a través de campos calculados, flujos de trabajo, filtros y dashboards.

Los equipos pueden configurar diferentes objetivos de respuesta y resolución para los tickets P1, P2, P3 y P4 según sus propios estándares de servicio, y establecer reglas independientes para las diferentes colas de servicio.

La IA reduce aún más el coste de construcción y análisis. Puedes dejar primero que un AI agent genere las tablas de tickets, las reglas SLA, los estados de riesgo, el dashboard de monitorización y las páginas de estadísticas, y luego seguir ajustando plazos, prioridades y lógica de visualización a través de la interfaz no-code de NocoBase.

Un sistema de gestión de SLA construido de esta manera no es una página de monitorización puntual, sino un sistema de gestión de servicios que evoluciona continuamente con tu equipo de soporte, los estándares de servicio y los compromisos con los clientes.

## FAQ

1. **¿Puede hacer seguimiento simultáneo del SLA de primera respuesta y del SLA de resolución?**

Sí. Cada ticket puede registrar por separado su plazo de respuesta y su plazo de resolución.

A partir del tiempo de creación del ticket, el tiempo de primera respuesta y el tiempo de resolución definitiva, el sistema puede determinar si el equipo de soporte o técnico respondió y resolvió dentro del plazo acordado, en lugar de contabilizar solo si el ticket "se cerró o no" sin tener en cuenta si la primera respuesta fue oportuna.

2. **¿Cómo decide el sistema si un ticket está en buen estado, en riesgo o ha incumplido el SLA?**

El sistema puede marcar los tickets como Cumplido, En curso, En riesgo o Incumplido en función de la hora actual, los objetivos SLA y el progreso real del ticket.

Por ejemplo, un ticket sin terminar con menos de dos horas hasta su plazo límite puede pasar a la zona En riesgo; una vez que supera el plazo de respuesta o resolución, se marca automáticamente como Incumplido.

3. **¿Puedo ver los problemas de alto riesgo antes de que un ticket realmente incumpla el SLA?**

Sí. El dashboard SLA muestra los tickets En riesgo que se acercan a sus plazos, indicando la prioridad, la cola, el tiempo transcurrido y el tiempo restante.

Esto permite al equipo redistribuir recursos antes de que se produzca un incumplimiento real, en lugar de descubrir el problema solo cuando el cliente se queja.

4. **¿Pueden las diferentes prioridades tener diferentes objetivos SLA?**

Sí. P1 Critical, P2 High, P3 Medium y P4 Low pueden usar diferentes objetivos de respuesta y resolución.

Por ejemplo, los tickets P1 pueden tener un tiempo de respuesta más corto, mientras que los P3 o P4 permiten ciclos de gestión más largos. Las reglas también pueden seguir evolucionando con tus propios compromisos con los clientes y niveles de servicio.

5. **¿Puede la IA analizar los riesgos SLA y generar recomendaciones para la próxima fase?**

Sí. La IA puede leer el estado de los tickets, la prioridad, la cola, el tiempo de respuesta y el tiempo de resolución para identificar los riesgos SLA más graves en este momento.

Por ejemplo, el informe de la captura de pantalla puede detectar que los tickets P1 tienen una tasa de incumplimiento excesiva y que la cola de Infrastructure contiene muchos tickets en mal estado, y recomendar priorizar la recuperación de P1, la estabilización de la infraestructura y la mitigación del riesgo P2 en la siguiente fase.

6. **¿Se pueden previsualizar y exportar los informes de análisis SLA?**

Sí. Después de que la IA genere un informe, puedes consultarlo en Vista previa, Markdown y HTML.

Los informes también pueden descargarse como Markdown o HTML, o imprimirse como PDF, lo que resulta útil para retrospectivas de servicio, informes a clientes, reuniones semanales internas y comunicación con la dirección.

7. **¿Pueden las reglas SLA seguir evolucionando a medida que cambian las políticas de servicio?**

Sí. Los equipos pueden seguir modificando las duraciones objetivo por prioridad, los umbrales de riesgo, los criterios de estado y las reglas de cola.

Cuando cambian los contratos con clientes, los planes de servicio o los equipos de soporte, puedes ajustar el sistema existente sin necesidad de volver a desarrollar toda la lógica SLA.

8. **¿Puedo rastrear quién cambió un estado SLA?**

Puedes activar el historial de operaciones y los registros de auditoría según sea necesario para registrar los cambios en la prioridad del ticket, los plazos, la cola, el estado y los indicadores de incumplimiento.

Cuando el plazo de un ticket se amplía, su prioridad se ajusta o su cola se reasigna, los directivos pueden rastrear quién hizo el cambio, cuándo y exactamente qué cambió, evitando que los datos SLA se modifiquen sin dejar registro.

9. **¿Puedo restringir qué datos SLA pueden ver y modificar los diferentes equipos?**

Sí. NocoBase admite la configuración de permisos por rol, cola de servicio y ámbito de datos.

Por ejemplo, el personal de primera línea solo puede gestionar los tickets asignados a ellos; los responsables de cola pueden ver los riesgos SLA dentro de su propia cola; los supervisores de soporte pueden ver todos los datos de servicio; y solo los administradores autorizados pueden modificar los objetivos SLA y las reglas de evaluación.

10. **¿Pueden Claude Code, Codex, Cursor u OpenCode ayudar a construir el sistema de gestión de SLA?**

Sí. AI agents de programación como Claude Code, Codex, Cursor y OpenCode pueden conectarse a NocoBase y generar tablas de tickets, reglas de prioridad, plazos de respuesta y resolución, estados de riesgo y dashboards SLA a partir de prompts en lenguaje natural.

Tras la generación, el equipo puede seguir ajustando campos, reglas, páginas y permisos a través de la interfaz no-code de NocoBase, sin pedir a la IA que reescriba todo desde cero en cada cambio.

11. **¿En qué se diferencia esto de un dashboard SLA generado por vibe coding convencional?**

El vibe coding convencional puede producir rápidamente un conjunto de tarjetas de métricas o una página de monitorización, pero una vez que entra en la gestión real del servicio, aún se necesita el cálculo continuo de plazos, las actualizaciones automáticas del estado de riesgo, los permisos de modificación, la conservación del historial y la evolución de las reglas a largo plazo.

NocoBase mantiene los datos de tickets, los cálculos de tiempo, los flujos de trabajo, los permisos y los informes de análisis en un único sistema. La IA identifica riesgos y genera recomendaciones, mientras NocoBase sostiene el proceso SLA estable y en funcionamiento.

12. **¿Es este sistema adecuado para la gestión SLA empresarial en entornos de producción?**

Sí. Los escenarios SLA necesitan especialmente monitorización en tiempo real, evaluación automática, control de acceso y trazabilidad de cambios, no solo un informe estático.

Las empresas pueden activar flujos de trabajo, notificaciones, historial de operaciones, registros de auditoría, inicio de sesión único (SSO), API y extensiones mediante plugins según sea necesario. En comparación con una demo SLA puntual, es mucho más adecuado para la gestión a largo plazo del soporte al cliente, los servicios técnicos y los compromisos de servicio internos.
