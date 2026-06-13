## Introducción

Usa tu AI agent favorito junto con NocoBase para construir rápidamente un sistema de automatización de flujos de trabajo con IA personalizable, fiable y en constante evolución, orientado a gestionar eventos de activación de negocio, comprobaciones de condiciones, procesamiento de IA, actualizaciones de datos, resultados de ejecución e historial de ejecución de flujos de trabajo.

Puedes copiar el prompt que aparece a continuación y dejar que tu AI agent genere la estructura básica del sistema de automatización de flujos de trabajo con IA en NocoBase; luego ajusta visualmente activadores, condiciones, nodos de IA y acciones de seguimiento.

Este sistema es adecuado para escenarios como sugerencias de inventario, clasificación de tickets, análisis de cláusulas contractuales, resumen de bases de conocimiento, publicación de contenido, sincronización de activos, sugerencias de incorporación de empleados y cualquier caso en que la IA deba participar automáticamente en los procesos de negocio.

**Lista de flujos de trabajo con IA:**

![](https://static-docs.nocobase.com/ai-workflow-automation-1-acl4wp-c-pv69l8.png)

**Resultados de ejecución de flujos de trabajo:**

![](https://static-docs.nocobase.com/ai-workflow-automation-2-l0iqn5.png)

**Lienzo visual de flujos de trabajo:**

![](https://static-docs.nocobase.com/ai-workflow-automation-3-nvlnbj-c-o66xrw.png)

## ¿Qué problemas resuelve un sistema de automatización de flujos de trabajo con IA?

Muchos equipos ya usan la IA para generar contenido, resumir información o proporcionar sugerencias, pero estas acciones suelen quedarse dentro de conversaciones puntuales. Los usuarios tienen que copiar datos manualmente, llamar a la IA, revisar los resultados y volver a escribir la salida en el sistema de negocio — todo el proceso sigue dependiendo del trabajo manual.

Con un sistema de automatización de flujos de trabajo con IA, la IA puede participar directamente en tus procesos de negocio existentes. Por ejemplo, cuando cambia un registro de inventario, se genera automáticamente una sugerencia de reabastecimiento; cuando se crea un artículo en la base de conocimiento, se genera automáticamente un resumen; cuando se envía un ticket, se clasifica automáticamente su tipo; cuando un contrato entra en la fase de aprobación, se resumen automáticamente los cambios de cláusulas.

Cada flujo de trabajo puede activarse por un evento de negocio y ejecutar pasos de cálculo, comprobación de condiciones, LLM, AI employee, actualización de datos o creación de registros en el orden configurado. La entrada, las instrucciones, la salida y el estado final de escritura de la IA quedan todos almacenados en los registros de ejecución.

De esta manera, la IA ya no es solo una herramienta de chat independiente — se convierte en un nodo de ejecución automatizado dentro del proceso de negocio. Los equipos pueden ver claramente por qué se activó cada flujo de trabajo, qué procesó la IA, qué resultados produjo y si los datos se actualizaron correctamente.

## Funcionalidades principales

### Gestión de flujos de trabajo con IA

- **Gestión centralizada de flujos de trabajo:** Visualiza nombres de flujos de trabajo, tipos de activador, estado de habilitación y recuento total de ejecuciones en un solo lugar.
- **Control de habilitación y deshabilitación:** Activa o desactiva rápidamente flujos de trabajo específicos según lo requiera el negocio.
- **Resumen de ejecución:** Realiza un seguimiento del número de flujos de trabajo habilitados, flujos de trabajo con IA y ejecuciones acumuladas para entender el uso de la automatización.

### Eventos de negocio y modos de ejecución

- **Activadores de eventos de datos:** Inicia flujos de trabajo automáticamente cuando se crean o actualizan registros u ocurren otros eventos de colección.
- **Ejecución manual:** Ejecuta un flujo específico a mano para pruebas o para procesar datos de negocio concretos.
- **Ejecuciones asíncronas:** Mueve las tareas de IA de larga duración a segundo plano para reducir el impacto en la operación actual del usuario.

### Orquestación visual de flujos

- **Lienzo de nodos:** Conecta activadores, nodos de procesamiento y nodos finales en un lienzo visual para ver el flujo completo de un vistazo.
- **Ramas condicionales:** Decide si llamar a la IA — y qué acción de seguimiento ejecutar — según los valores de campo o las reglas de negocio.
- **Configuración del orden de ejecución:** Combina de forma flexible nodos de cálculo, condición, procesamiento de IA y operación de datos.

### Nodos de IA y procesamiento de datos

- **Nodos LLM:** Gestiona tareas bien definidas como resumen de contenido, clasificación, extracción de información y generación de texto.
- **Nodos de AI employee:** Completa un procesamiento de negocio más integral basado en roles predefinidos, prompts y herramientas.
- **Nodos de operación de datos:** Crea registros, actualiza campos y escribe los resultados generados por IA de vuelta en los datos de negocio.

### Resultados de ejecución y seguimiento del historial

- **Detalles completos de ejecución:** Muestra la entrada del activador, las instrucciones de IA, la salida del modelo, los estados de los nodos y el resultado final de escritura.
- **Filtrado del historial de ejecución:** Revisa el tiempo de cada ejecución, los parámetros de entrada y el estado por flujo de trabajo.
- **Diagnóstico de problemas:** Usa las entradas y salidas a nivel de nodo para determinar si un fallo ocurrió en la condición, la llamada a la IA o la actualización de datos.

### Pruebas y mantenimiento continuo

- **Ejecuciones de prueba manuales:** Ejecuta un flujo de trabajo antes de habilitarlo para verificar condiciones, la salida de IA y la escritura de datos.
- **Versionado de flujos de trabajo:** Conserva diferentes versiones de configuración para ajuste continuo y retroceso.
- **Extensión flexible de nodos:** Añade nuevas condiciones, capacidades de IA y acciones de seguimiento a medida que el negocio evoluciona, sin reconstruir todo el flujo.

## ¿Por qué construir un sistema de automatización de flujos de trabajo con IA y NocoBase?

Si construyes desde cero con vibe coding ordinario, cada nuevo escenario de automatización con IA generalmente significa reimplementar la escucha de eventos, las consultas de datos, las llamadas al modelo, la lógica de condiciones, el manejo de errores y la escritura de resultados. A medida que se multiplican los flujos, el código se vuelve más complejo y las ejecuciones resultan difíciles de rastrear.

NocoBase ya proporciona las capacidades fundamentales de un sistema de negocio — modelos de datos, flujos de trabajo, comprobaciones de condiciones, actualizaciones de registros, permisos e historial de operaciones. Puedes añadir nodos LLM o de AI employee directamente a estas capacidades, dejando que la IA trabaje con datos y procesos de negocio reales en lugar de estar fuera del sistema.

Por ejemplo, después de crear un registro de inventario, se puede generar automáticamente una sugerencia de inventario; después de añadir un artículo a la base de conocimiento, se puede generar automáticamente un resumen; después de que cambie el estado de un contrato, la IA puede resumir el cambio de fase y luego crear un registro de auditoría. Todos estos flujos se pueden ver y ajustar en el lienzo visual.

La entrada, las instrucciones de IA, la salida y el estado de actualización de datos de cada ejecución quedan registrados, lo que facilita a los equipos revisar los resultados y localizar problemas. Para equipos que valoran la trazabilidad, la mantenibilidad y la iteración a largo plazo, NocoBase es la mejor elección para construir automatización de flujos de trabajo con IA que entre en uso real en el negocio.

## FAQ

1. **¿En qué se diferencia la automatización de flujos de trabajo con IA de los flujos de trabajo regulares?**

Los flujos de trabajo regulares ejecutan principalmente reglas predeterminadas, como comprobaciones de condiciones, envío de notificaciones, creación de registros o actualización de campos.

Los flujos de trabajo con IA pueden añadir nodos LLM o de AI employee al flujo, dejando que el sistema realice resúmenes, clasificaciones, extracción de información, generación de contenido y recomendaciones basadas en el contexto de negocio. La IA se encarga de las tareas no estructuradas, mientras que el flujo de trabajo controla las condiciones de activación, el orden de ejecución y la escritura de resultados.

2. **¿En qué se diferencian los flujos de trabajo con IA de los scripts de automatización generados mediante vibe coding?**

El vibe coding puede producir rápidamente un script de automatización, pero a medida que crecen los escenarios de negocio, la activación de eventos, las llamadas al modelo, los permisos de datos, el manejo de errores, el registro y el mantenimiento de versiones requieren desarrollo repetido.

NocoBase coloca los nodos de IA dentro de su modelo de datos y sistema de flujo de trabajo existentes. Los equipos pueden configurar activadores, ramas condicionales, procesamiento de IA y operaciones de datos en un lienzo visual y revisar cada ejecución — más adecuado para gestionar la automatización de negocio en ejecución continua que mantener scripts dispersos de un solo uso.

3. **¿Qué eventos de negocio pueden activar flujos de trabajo con IA?**

Los flujos de trabajo con IA pueden activarse automáticamente por eventos de colección como la creación o actualización de registros, o ejecutarse manualmente por usuarios.

Por ejemplo, genera una sugerencia de reabastecimiento después de que se actualice un registro de inventario, clasifica el tipo de incidencia después de que se cree un ticket, genera un resumen después de que se añada un artículo a la base de conocimiento, o analiza automáticamente los cambios de cláusulas después de que un contrato entre en una fase específica.

4. **¿Puedo establecer condiciones antes de llamar a la IA?**

Sí. Primero puedes comprobar si los datos cumplen las condiciones especificadas antes de entrar en un nodo LLM o de AI employee.

Por ejemplo, genera una sugerencia de reabastecimiento solo cuando el inventario cae por debajo del nivel de seguridad, llama al análisis de IA solo para tickets de alta prioridad, o crea un registro de auditoría solo después de que un contrato entre en la fase de aprobación. Esto reduce las llamadas innecesarias al modelo y mantiene el flujo alineado con las reglas de negocio reales.

5. **¿Se pueden escribir los resultados generados por IA directamente en el sistema de negocio?**

Sí. Después de que la IA termine el procesamiento, el flujo puede continuar con nodos de actualización de registros o creación de registros, guardando resúmenes, clasificaciones, sugerencias, etiquetas o resultados de análisis en las tablas correspondientes.

Por ejemplo, escribe las sugerencias de inventario de vuelta en los registros de inventario, guarda los resultados de clasificación de tickets en los campos del ticket, o crea un nuevo registro de auditoría basado en los resultados del análisis del contrato.

6. **¿Puedo ver qué entradas usó la IA y qué resultados generó en cada ejecución?**

Sí. Los detalles de ejecución muestran la entrada del activador, las instrucciones usadas por los nodos de IA, la salida del modelo, los resultados de los nodos posteriores y el estado final de escritura de datos.

Esto significa que los equipos pueden ver no solo si un flujo tuvo éxito, sino también por qué la IA produjo un resultado concreto — útil para validar la salida, refinar los prompts y solucionar anomalías.

7. **¿Cómo localizo problemas cuando falla un flujo de trabajo con IA?**

Cada ejecución conserva su tiempo de ejecución, estados de nodos, parámetros de entrada y resultados de salida. Los equipos pueden usar el historial de ejecución para determinar si un fallo ocurrió en la condición de activación, el cálculo, la comprobación de condición, la llamada a la IA o el paso de actualización de datos.

Comparado con scripts independientes que solo muestran un mensaje de error final, este registro de ejecución a nivel de nodo es mucho más adecuado para depurar procesos de negocio de larga duración.

8. **¿Puedo usar nodos LLM y AI employees juntos?**

Sí. Los nodos LLM son buenos para tareas de contenido bien definidas y de un único propósito, como resúmenes, clasificaciones, extracción o generación de texto.

Los AI employees se pueden configurar con roles, prompts y herramientas disponibles, adecuados para tareas que combinan datos de negocio con múltiples pasos de operación. Los equipos pueden elegir uno según la complejidad del flujo, o combinar ambos en diferentes flujos de trabajo.

9. **¿Pueden Claude Code, Codex, Cursor u OpenCode ayudar a construir estos flujos de trabajo?**

Sí. Los AI coding agents como Claude Code, Codex, Cursor y OpenCode pueden conectarse a NocoBase y generar estructuras de datos, nodos de flujo de trabajo, lógica de condiciones y páginas relacionadas a partir de prompts en lenguaje natural.

Una vez generados los flujos de trabajo, los equipos pueden seguir viéndolos, probándolos y ajustándolos en la interfaz visual de NocoBase en lugar de depender de la IA para reescribir código continuamente.

10. **¿Puedo controlar quién puede ver, ejecutar o modificar los flujos de trabajo con IA?**

Sí. NocoBase puede controlar por rol qué registros de ejecución pueden ver los usuarios, qué flujos pueden ejecutar manualmente y si pueden modificar la configuración del flujo de trabajo.

Por ejemplo, los usuarios de negocio regulares solo pueden ver resultados relacionados con ellos mismos, los administradores de procesos pueden revisar el historial de ejecución y ajustar nodos, y los administradores del sistema pueden gestionar la configuración del modelo, las versiones de flujos de trabajo y los permisos.

11. **¿Pueden los flujos de trabajo con IA iterarse y mantenerse a largo plazo?**

Sí. A medida que cambien las reglas de negocio, puedes seguir ajustando condiciones de activación, prompts, modelos, lógica de ramas y acciones de seguimiento, o añadir nodos y cambiar los enfoques de procesamiento.

Las versiones de flujos de trabajo, el historial de ejecución y los resultados de nodos ayudan a los equipos a verificar el efecto de los cambios, evitando la necesidad de reconstruir un script de automatización completo cada vez que cambian los requisitos.

12. **¿Son los flujos de trabajo con IA adecuados para uso empresarial real?**

Sí — especialmente para escenarios de automatización que necesitan operación estable, procesos trazables y resultados verificables.

NocoBase puede combinar según sea necesario gestión de permisos, versionado de flujos de trabajo, historial de ejecución, registros de operaciones, registros de auditoría, SSO empresarial, APIs y extensiones de plugins. Comparado con demostraciones de automatización de IA de un solo uso, es mucho más adecuado para procesos de negocio que requieren mantenimiento continuo y expansión gradual.
