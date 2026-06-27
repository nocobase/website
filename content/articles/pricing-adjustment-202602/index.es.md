---
title: "Ajustes en la licencia de código abierto y precios de NocoBase"
description: "Hemos ajustado el acuerdo de licencia y los precios de los complementos comerciales, paquetes de complementos comerciales y beneficios de las ediciones comerciales. Además, ofrecemos ajustes gratuitos para los usuarios que ya han realizado compras."
---

NocoBase 2.0 se lanzó oficialmente el 15 de febrero de 2026. A partir de esta versión, NocoBase se orienta hacia la inteligencia artificial, ayudando a las empresas tradicionales a implementar capacidades de IA y garantizando que la IA aporte valor real en escenarios empresariales prácticos. En línea con esta nueva dirección, hemos ajustado nuestra licencia de código abierto y estructura de precios para que la licencia sea más flexible y amigable, el plan de precios sea más simple y el costo de uso sea menor para nuestros usuarios.

### Cambio de licencia: De AGPL-3.0 a Apache-2.0

Esta transición proporciona un entorno más favorable para los negocios, ofreciendo a los usuarios una mayor flexibilidad para la personalización y distribución comercial con menos restricciones.

### Apertura del código fuente de los principales plugins comerciales

Los siguientes plugins comerciales ahora son **de código abierto y gratuitos**

| Plugin                                          | Nombre del paquete                               | Notas                                                       |
| ----------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| IA LLM: GigaChat                                | `@nocobase/plugin-ai-gigachat`                   |                                                             |
| Formulario de varios pasos                      | `@nocobase/plugin-block-multi-step-form`         | Disponible en Página V1, aún no adaptado para 2.0           |
| Bloque: Árbol                                   | `@nocobase/plugin-block-tree`                    | Disponible en Página V1, aún no adaptado para 2.0           |
| Comentarios                                     | `@nocobase/plugin-comments`                      |                                                             |
| Variables personalizadas                        | `@nocobase/plugin-custom-variables`              | Disponible en Página V1, aún no adaptado para 2.0           |
| Visualización de datos: ECharts                 | `@nocobase/plugin-data-visualization-echarts`    | Obsoleto en 2.0, usar el bloque Gráfico en su lugar         |
| Incrustar NocoBase                              | `@nocobase/plugin-embed`                         | Disponible en Página V1, aún no adaptado para 2.0           |
| Campo: Código                                   | `@nocobase/plugin-field-code`                    | Aún no adaptado para 2.0                                    |
| Borradores de formularios                       | `@nocobase/plugin-form-drafts`                   | Solo compatible con el bloque Formulario 2.0                |
| Filtro de múltiples palabras clave              | `@nocobase/plugin-multi-keyword-filter`          |                                                             |
| Flujo de trabajo: Disparador de acción personalizada | `@nocobase/plugin-workflow-custom-action-trigger` |                                                             |
| Flujo de trabajo: Nodo de cálculo de fecha      | `@nocobase/plugin-workflow-date-calculation`     |                                                             |
| Flujo de trabajo: Nodo JavaScript               | `@nocobase/plugin-workflow-javascript`           |                                                             |
| Flujo de trabajo: Interceptor de solicitudes    | `@nocobase/plugin-workflow-request-interceptor`  |                                                             |
| Flujo de trabajo: Variable                      | `@nocobase/plugin-workflow-variable`             |                                                             |
| Colección: Conectar a datos externos (FDW)      | `@nocobase/plugin-collection-fdw`                |                                                             |

### Consolidación de los plugins comerciales restantes

Los plugins comerciales restantes ya no se venderán individualmente. En su lugar, ahora están **agrupados en la Licencia Comercial**. Una vez que adquiera una Licencia Comercial, obtendrá acceso a estas funciones. Para obtener todos los detalles, visite nuestra página de precios: [https://www.nocobase.com/commercial](https://www.google.com/search?q=https://www.nocobase.com/commercial)

### Crédito completo para actualizaciones de ediciones inferiores a superiores

Según la política de precios anterior al 15 de febrero, al actualizar de una edición inferior a una superior, solo se podía acreditar el valor prorrateado restante. Por ejemplo, si se actualizaba de la Edición Estándar a la Edición Profesional después de 6 meses, con un valor restante de 400 USD, la diferencia de precio requerida sería de 7,600 USD.

Según la política de precios posterior al 15 de febrero, al actualizar de una edición inferior a una superior, se puede acreditar el monto total gastado en la edición inferior. Por ejemplo, si se actualiza de la Edición Estándar a la Edición Profesional después de 18 meses, los 800 USD completos gastados en la Edición Estándar se pueden acreditar, y la diferencia de precio requerida sería de 7,200 USD.

### Políticas para clientes existentes

Para los usuarios que compraron licencias comerciales, plugins o paquetes de plugins antes de la transición:

1. Los derechos adquiridos antes del 15 de febrero no se ven afectados.
   * Todos los plugins comerciales comprados o canjeados anteriormente siguen siendo suyos.
   * Los puntos restantes en los paquetes de plugins aún se pueden usar para canjear cualquier plugin comercial.
2. Las nuevas funciones agregadas a las versiones comerciales después del 15 de febrero estarán disponibles de forma gratuita para los usuarios que compraron la Edición Comercial correspondiente anteriormente.
3. Actualización desde una Edición Comercial comprada antes del 15 de febrero: Al actualizar a una edición superior después del 15 de febrero, el monto total pagado por la edición original se puede acreditar para la actualización.
4. Actualización desde Plugins Comerciales individuales a una Edición Comercial: Si compró plugins comerciales antes del 15 de febrero y desea actualizar a una Edición Comercial que ahora incluye esos plugins, el monto total gastado en los plugins originales se puede acreditar para la compra de la edición.

### Preguntas frecuentes

**P:** Compré la Edición Profesional antes del 15 de febrero, que incluía Multi-aplicación y Multi-espacio. Ahora esas funciones solo están en la Edición Empresarial. ¿Las perderé?

**R:** No. Todas las funciones que ya posee, incluyendo Multi-aplicación y Multi-espacio, están incluidas permanentemente en su licencia.

**P:** Compré la Edición Estándar antes del 15 de febrero y me quedan 8 puntos. Quiero canjear el plugin de Aprobación, pero ahora está restringido a la Edición Profesional. ¿Puedo obtenerlo?

**R:** Sí. Sus puntos de plugin restantes aún se pueden usar para canjear cualquier plugin comercial, independientemente de la nueva categorización.

**P:** Compré la Edición Estándar antes de que incluyera Fuentes de Datos Externas. Ahora que la Edición Estándar las incluye (después del 15 de febrero), ¿las obtengo gratis?

**R:** Sí. Cualquier nueva función agregada a su Edición después del 15 de febrero es gratuita para los propietarios existentes de esa Edición. Esto incluye fuentes de datos externas de MariaDB, MySQL, PostgreSQL, MSSQL y API REST.

**P:** Compré la Edición Estándar y el plugin de Aprobación antes del 15 de febrero, por un total de 800 USD + 800 USD = 1,600 USD. ¿Puedo acreditar este monto para una actualización a la Edición Profesional?

**R:** Sí. Los 1,600 USD completos se pueden acreditar para la actualización.

*La interpretación de estos ajustes pertenece a la empresa matriz de NocoBase. Para los usuarios comerciales existentes, todos los derechos complementarios y ajustes se finalizarán antes del **24 de febrero**.*

Queremos agradecer a todos nuestros usuarios de pago y gratuitos, así como a nuestros contribuyentes de código abierto. Continuaremos iterando rápidamente para proporcionar un mejor producto a un precio más bajo.
