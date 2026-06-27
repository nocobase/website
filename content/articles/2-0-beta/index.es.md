---
title: "Anuncio de NocoBase 2.0-beta"
description: "Tras 8 semanas de refinamiento intensivo, NocoBase 2.0 ha entrado en la fase beta estable. Esta versión trae optimizaciones profundas para AI Employee, Visualización 2.0 y Aprobación 2.0, al mismo tiempo que introduce las nuevas Plantillas de UI y la Arquitectura Multi-aplicación."
---

Después de 8 semanas de arduo trabajo por parte del equipo de NocoBase y todos los colaboradores, NocoBase 2.0-beta se ha lanzado según lo previsto. Esta versión incluye refinamientos extensos y pruebas de las nuevas funciones de NocoBase 2.0, llevando a 2.0 a una fase más estable. Damos la bienvenida a los primeros usuarios para que utilicen esta versión en pruebas de producción y proporcionen comentarios oportunos sobre cualquier problema o sugerencia.

2.0-rc se lanzará antes del 11 de febrero de 2026, con pruebas más completas y funciones nuevas adicionales. Estén atentos.

## Nuevas funciones

### AI Employees

Hemos realizado mejoras significativas en AI Employees, que incluyen:

- Capacidades optimizadas de los AI Employees integrados
- Soporte para acceder a fuentes de datos externas
- Soporte para consultar grandes cantidades de datos
- Preservación del formato original en el contenido de la conversación
- Mensajes de error mejorados

Manual de usuario: [AI Employees](https://v2.docs.nocobase.com/ai-employees)

![](https://static-docs.nocobase.com/20251102121036-2025-11-02-12-10-38.png)

### Plantillas de UI

La versión beta 2.0 introduce una nueva función de Plantillas de UI. Cada tipo de plantilla admite tanto copia como referencia, incluyendo:

- Plantillas de bloque
- Plantillas de campo
- Plantillas de ventana emergente

Notablemente, las Plantillas de ventana emergente le permiten guardar todo el contenido de la ventana emergente (todas las pestañas y bloques en subpáginas) como una plantilla, lo que reduce significativamente el trabajo repetitivo de la versión 1.x.

Manual de usuario: [Plantillas de UI](https://v2.docs.nocobase.com/interface-builder/ui-templates)

![](https://static-docs.nocobase.com/edit-popup-select-20251228.png)

### Multi-App 2.0

La Gestión Multi-Aplicación es la solución unificada de gestión de aplicaciones de NocoBase para crear y gestionar múltiples instancias de aplicaciones NocoBase físicamente aisladas en uno o más entornos de ejecución. A través del Supervisor de Aplicaciones, los usuarios pueden crear y mantener múltiples aplicaciones desde un punto de entrada unificado, satisfaciendo las necesidades de diferentes negocios y escalas. NocoBase admite tres arquitecturas de despliegue:

- **Aplicación única**: Desplegar solo una instancia de NocoBase donde todas las funciones comerciales, datos y usuarios se ejecutan en la misma aplicación.
- **Multi-aplicación con memoria compartida**: Múltiples aplicaciones pueden ejecutarse simultáneamente dentro de una instancia de NocoBase. Cada aplicación es independiente, puede conectarse a su propia base de datos y se puede crear, iniciar y detener individualmente, pero comparten el mismo proceso y espacio de memoria. Los usuarios aún solo necesitan mantener una instancia de NocoBase.
- **Despliegue híbrido multi-entorno**: Desplegar un NocoBase como centro de gestión unificado, mientras se despliegan múltiples instancias de NocoBase como entornos de ejecución de aplicaciones para ejecutar aplicaciones comerciales. Diferentes aplicaciones pueden ejecutarse en diferentes nodos o clústeres.

Manual de usuario: [Multi-App](https://v2.docs.nocobase.com/multi-app/multi-app)

![](https://static-docs.nocobase.com/202512231215186.png)

### Multi-Espacio

El plugin Multi-Espacio permite el aislamiento lógico para crear múltiples espacios de datos independientes dentro de una sola instancia de aplicación, adecuado para escenarios como operaciones multi-fábrica o multi-tienda con procesos comerciales y configuraciones del sistema altamente consistentes.

Manual de usuario: [Multi-Espacio](https://v2.docs.nocobase.com/multi-app/multi-space)

### Visualización de Datos 2.0

La versión 1.x proporcionaba plugins básicos de visualización de datos basados en Ant Design Charts y ECharts para la visualización de datos fundamental. Sin embargo, se quedaba corta en el manejo de gráficos complejos, interacciones personalizadas y escenarios de vinculación de datos.

NocoBase 2.0 introduce un nuevo plugin de visualización de datos basado en ECharts, que admite el modo de configuración visual, así como los modos SQL y JSON. Admite eventos, lo que facilita el manejo de gráficos complejos, vinculación de múltiples gráficos y escenarios de desglose de datos.

No se preocupe si SQL y JSON son demasiado complejos: el AI Employee Nathan está aquí para ayudar.

Manual de usuario: [Visualización de Datos](https://v2.docs.nocobase.com/data-visualization)

![](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

### Flujo de trabajo

#### Nuevo nodo "Rama multi-condición"

Similar a las sentencias `switch / case` o `if / else if` en lenguajes de programación. El sistema evalúa múltiples condiciones configuradas en secuencia y ejecuta solo la rama que cumple una condición. Este nodo reemplazará parte de la funcionalidad del nodo "Rama paralela". Recomendamos reemplazar los flujos de trabajo que usan nodos de condición y paralelo con el nuevo nodo "Rama multi-condición".

![20251123224209](https://static-docs.nocobase.com/20251123224209.png)

Manual de usuario: [Rama multi-condición](https://v2.docs.nocobase.com/workflow/nodes/multi-conditions)

### Aprobación 2.0

La mayoría de las configuraciones de bloque en el plugin de Aprobación se han refactorizado usando FlowEngine, lo que admite una configuración y uso más flexibles. También se han añadido varias funciones nuevas.

Manual de usuario: [Aprobación](https://v2.docs.nocobase.com/workflow/triggers/approval)

#### Opción para mostrar la instantánea de datos o el estado más reciente en la interfaz de procesamiento de aprobación

* **Instantánea**
  Durante el proceso de aprobación, el solicitante y los aprobadores ven el estado del registro tal como estaba cuando ingresaron, y después del envío, solo pueden ver los registros que modificaron; no verán las actualizaciones realizadas por otros posteriormente.
* **Más reciente**
  Durante el proceso de aprobación, el solicitante y los aprobadores siempre ven la versión más reciente del registro durante todo el proceso, independientemente del estado del registro antes de su acción. Después de que finaliza el proceso, verán la versión final del registro.

#### Soporte para configurar el ámbito de datos del iniciador

Puede configurar permisos basados en el ámbito del usuario para determinar qué usuarios pueden iniciar la aprobación.

![20251226114623](https://static-docs.nocobase.com/20251226114623.png)

#### En el Centro de tareas pendientes, soporte para configurar campos de datos comerciales en las tarjetas de lista "Mis iniciadas" y "Mis aprobaciones"

La tarjeta "Mis iniciadas" permite una configuración flexible de la información de aprobación y los campos de datos comerciales.

![20251231222654](https://static-docs.nocobase.com/20251231222654.png)

La tarjeta "Mis aprobaciones" permite una configuración flexible de las tareas de aprobación y los campos de datos comerciales.

![20251231222815](https://static-docs.nocobase.com/20251231222815.png)

### Gestor de correo electrónico 2.0

El plugin Gestor de correo electrónico se ha refactorizado usando FlowEngine, lo que permite a los AI Employees participar sin problemas en el resumen, análisis y redacción de correos electrónicos. También se han añadido nuevas funciones como el guardado automático de borradores.

Manual de usuario: [Gestor de correo electrónico](https://v2.docs.nocobase.com/email-manager)

![](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

### Historial de registros

El plugin Historial de registros rastrea los cambios de datos guardando automáticamente instantáneas y registros de diferencias para las operaciones de creación, actualización y eliminación, ayudando a los usuarios a rastrear rápidamente los cambios de datos y auditar las operaciones.

Manual de usuario: [Historial de registros](https://v2.docs.nocobase.com/record-history/)

![](https://static-docs.nocobase.com/202511011346400.png)

---

## Soluciones

NocoBase 2.0 proporciona plantillas de solución listas para usar para construir rápidamente sistemas comerciales.

### Sistema de tickets inteligente

Una plataforma de gestión de tickets impulsada por IA que cuenta con:

- **Acceso unificado multi-fuente**: Formularios públicos, portal del cliente, análisis de correo electrónico, API/Webhook
- **Equipo de AI Employee**: Sam (enrutamiento), Grace (respuestas), Max (conocimiento), Lexi (traducción)...
- **Monitoreo completo de SLA**: Prioridad de cuatro niveles P0-P3 con alertas de escalado automático
- **Autocirculación del conocimiento**: Los tickets se convierten automáticamente en artículos de conocimiento después de la resolución

Documentación de la solución: https://v2.docs.nocobase.com/solution/ticket-system/

![ticketing-imgs-2026-01-01-00-46-12](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-46-12.jpg)

### Gestión de clientes CRM (Vista previa)

> **Nota de versión**: La versión actual se basa en 1.x con parte de la interfaz de usuario frontend adaptada para 2.0, **solo para aprendizaje y vista previa**.

NocoBase CRM es una plataforma de gestión de relaciones con el cliente sin código, flexible y potente, que cubre:

- **Gestión de clientes**: Información del cliente, contactos, clasificación de clientes
- **Canal de ventas**: Gestión de prospectos, seguimiento de oportunidades, embudo de ventas
- **Gestión de pedidos**: Cotizaciones, pedidos, contratos
- **Análisis de datos**: Paneles, informes, visualización de datos

Documentación de la solución: https://v2.docs.nocobase.com/solution/crm/

Demo en vivo: https://demo.nocobase.com/new

![ticketing-imgs-2026-01-01-00-47-06](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-47-06.jpg)

## 2.0-beta vs 1.x

### Leyenda

- ✅ Compatible: Funciones de 1.x adaptadas en 2.0
- 🆕 Nueva función: Nuevas funciones en 2.0
- ✨ Mejorada: Funciones mejoradas en comparación con 1.0
- 🔄 En progreso: Funciones en desarrollo
- 🚀 Optimizando: Compatible pero necesita mejora
- ❌ No compatible: Funciones no compatibles en 2.0
- ⚠️ Obsoleto: Funciones obsoletas
- P0/P1/P2: Prioridad de la función
  - P0: Próximamente
  - P1: Será compatible antes del lanzamiento oficial de 2.0
  - P2: Será compatible después del lanzamiento oficial de 2.0

### Constructor de interfaz

#### Rutas y menús


| Categoría      | Función           | Estado         | Prioridad | Notas |
| ------------- | ----------------- | -------------- | -------- | ----- |
| Añadir elemento de menú | Grupo             | ✅ Compatible   | -        | -     |
| Añadir elemento de menú | Página clásica (v1) | ✅ Compatible   | -        | -     |
| Añadir elemento de menú | Página moderna (v2)  | 🆕 Nueva función | -        | -     |
| Añadir elemento de menú | Enlace              | ✅ Compatible   | -        | -     |

#### Páginas


| Categoría      | Función            | Estado           | Prioridad | Notas |
| ------------- | ------------------ | ---------------- | -------- | ----- |
| Configuración de página | Mostrar título de página | ✅ Compatible     | -        | -     |
| Configuración de página | Editar título de página    | ✅ Compatible     | -        | -     |
| Configuración de página | Habilitar pestañas de página   | ✅ Compatible     | -        | -     |
| Configuración de página | Copiar enlace incrustado | ❌ No compatible | -        | -     |
| Configuración de página | Habilitar encabezado de página | ⚠️ Obsoleto  | -        | -     |
| Diseño de arrastre   | Diseño de arrastre de bloque  | ✨ Mejorada      | -        | -     |

#### Añadir bloques

##### Bloques de datos


| Función         | Estado           | Prioridad | Notas |
| --------------- | ---------------- | -------- | ----- |
| Tabla           | ✅ Compatible     | -        | -     |
| Formulario (Editar)     | ✅ Compatible     | -        | -     |
| Formulario (Añadir nuevo)  | ✅ Compatible     | -        | -     |
| Detalles         | ✅ Compatible     | -        | -     |
| Lista            | ✅ Compatible     | -        | -     |
| Tarjeta de cuadrícula       | ✅ Compatible     | -        | -     |
| Comentarios        | ✅ Compatible     | -        | -     |
| Mapa             | ✅ Compatible     | -        | -     |
| Gráficos          | ✨ Mejorada      | -        | -     |
| Calendario        | ❌ No compatible | -        | -     |
| Gantt           | ❌ No compatible | -        | -     |
| Kanban          | ❌ No compatible | -        | -     |
| Formulario de varios pasos | ❌ No compatible | -        | -     |

##### Bloques de filtro


| Función  | Estado           | Prioridad | Notas |
| -------- | ---------------- | -------- | ----- |
| Formulario     | ✨ Mejorada      | -        | -     |
| Colapsar | ❌ No compatible | -        | -     |
| Árbol     | ❌ No compatible | -        | -     |

##### Otros bloques


| Función             | Estado           | Prioridad | Notas |
| ------------------- | ---------------- | -------- | ----- |
| Plantilla de bloque      | 🆕 Nueva función   | -        | -     |
| Bloque JS            | 🆕 Nueva función   | -        | -     |
| Iframe              | ✅ Compatible     | -        | -     |
| Panel de acciones        | ✅ Compatible     | -        | -     |
| Markdown            | ✨ Mejorada      | -        | -     |
| Historial de registros      | 🆕 Nueva función   | -        | -     |
| Correo electrónico               | ✅ Compatible     | -        | -     |
| Flujo de trabajo > Tareas pendientes    | ❌ No compatible | -        | -     |
| Flujo de trabajo > Aprobación | 🔄 En progreso   | P0       | -     |

#### Pestañas


| Categoría     | Función  | Estado         | Prioridad | Notas |
| ------------ | -------- | -------------- | -------- | ----- |
| Configuración de pestaña | Editar pestaña | ✅ Compatible   | -        | -     |
| Configuración de pestaña | Copiar UID | 🆕 Nueva función | -        | -     |
| Configuración de pestaña | Eliminar   | ✅ Compatible   | -        | -     |

#### Bloque de tabla


| Categoría                       | Función                      | Estado           | Prioridad | Notas |
| ------------------------------ | ---------------------------- | ---------------- | -------- | ----- |
| Configuración de tabla                 | Título y descripción          | ✅ Compatible     | -        | -     |
| Configuración de tabla                 | Reglas de vinculación de bloques          | ✨ Mejorada      | -        | -     |
| Configuración de tabla                 | Altura del bloque                 | ❌ No compatible | P1       | -     |
| Configuración de tabla                 | Habilitar ordenación por arrastre | ❌ No compatible | P1       | -     |
| Configuración de tabla                 | Campo de ordenación por arrastre  | ❌ No compatible | P1       | -     |
| Configuración de tabla                 | Modo de carga de datos            | ❌ No compatible | P1       | -     |
| Configuración de tabla                 | Habilitar edición rápida            | 🆕 Nueva función   | -        | -     |
| Configuración de tabla                 | Mostrar números de fila             | ✅ Compatible     | -        | -     |
| Configuración de tabla                 | Tamaño de página                    | ✅ Compatible     | -        | -     |
| Configuración de tabla                 | Ámbito de datos                   | ✅ Compatible     | -        | -     |
| Configuración de tabla                 | Ordenación predeterminada              | ✅ Compatible     | -        | -     |
| Configuración de tabla                 | Habilitar tabla de árbol            | ✅ Compatible     | -        | -     |
| Configuración de tabla                 | Expandir todas las filas por defecto   | ✅ Compatible     | -        | -     |
| Configuración de tabla                 | Densidad de tabla                | ✅ Compatible     | -        | -     |
| Configuración de tabla                 | Guardar como plantilla             | 🆕 Nueva función   | -        | -     |
| Configuración de tabla                 | Copiar UID                     | 🆕 Nueva función   | -        | -     |
| Configuración de tabla                 | Eliminar                       | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones globales | Añadir nuevo                      | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones globales | Eliminar                       | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones globales | Filtrar                       | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones globales | Enlace                         | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones globales | Ventana emergente                        | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones globales | Actualizar                      | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones globales | Edición masiva                    | ❌ No compatible | P1       | -     |
| Acciones de tabla > Acciones globales | Actualización masiva                  | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones globales | Exportar                       | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones globales | Importar                       | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones globales | Solicitud personalizada               | ❌ No compatible | P2       | -     |
| Acciones de tabla > Acciones globales | Configuración de columnas              | ❌ No compatible | -        | -     |
| Acciones de tabla > Acciones globales | AI employees                 | 🆕 Nueva función   | -        | -     |
| Acciones de tabla > Acciones globales | Acción JS                    | 🆕 Nueva función   | -        | -     |
| Acciones de tabla > Acciones de fila    | Ver                         | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones de fila    | Editar                         | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones de fila    | Actualizar registro                | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones de fila    | Eliminar                       | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones de fila    | Ventana emergente                        | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones de fila    | Enlace                         | ✅ Compatible     | -        | -     |
| Acciones de tabla > Acciones de fila    | Duplicar                    | ❌ No compatible | P2       | -     |
| Acciones de tabla > Acciones de fila    | Solicitud personalizada               | ❌ No compatible | P2       | -     |
| Acciones de tabla > Acciones de fila    | AI employees                 | 🆕 Nueva función   | -        | -     |
| Acciones de tabla > Acciones de fila    | Acción JS                    | 🆕 Nueva función   | -        | -     |
| Columnas de tabla                  | Mostrar campos de colección    | ✅ Compatible     | -        | -     |
| Columnas de tabla                  | Mostrar campos de asociación   | ✅ Compatible     | -        | -     |
| Columnas de tabla > Otras columnas  | Campo JS                     | 🆕 Nueva función   | -        | -     |
| Columnas de tabla > Otras columnas  | Columna JS                    | 🆕 Nueva función   | -        | -     |
| Columnas de tabla > Otras columnas  | Acciones                      | ✨ Mejorada      | -        | -     |
| Configuración de columna de tabla          | Título de columna                 | ✅ Compatible     | -        | -     |
| Configuración de columna de tabla          | Información sobre herramientas                      | ✅ Compatible     | -        | -     |
| Configuración de columna de tabla          | Ancho de columna                 | ✨ Mejorada      | -        | -     |
| Configuración de columna de tabla          | Habilitar edición rápida            | 🆕 Nueva función   | -        | -     |
| Configuración de columna de tabla          | Ordenable                     | ✅ Compatible     | -        | -     |
| Configuración de columna de tabla          | Fijado                        | ✅ Compatible     | -        | -     |
| Configuración de columna de tabla          | Estilo                        | ❌ No compatible | P2       | -     |
| Configuración de columna de tabla          | Modo de visualización                 | 🆕 Nueva función   | -        | -     |
| Configuración de columna de tabla          | Mostrar botón de copiar          | ❌ No compatible | -        | -     |
| Configuración de columna de tabla          | Puntos suspensivos en desbordamiento de texto    | ✨ Mejorada      | -        | -     |
| Configuración de columna de tabla          | Componente de campo              | ✨ Mejorada      | -        | -     |
| Configuración de columna de tabla          | Modo de renderizado                  | 🆕 Nueva función   | -        | -     |
| Configuración de columna de tabla          | Habilitar clic para abrir         | ✨ Mejorada      | -        | -     |
| Configuración de columna de tabla          | Ventana emergente de edición                   | ✨ Mejorada      | -        | -     |
| Configuración de columna de tabla          | Copiar UID                     | 🆕 Nueva función   | -        | -     |
| Configuración de columna de tabla          | Eliminar                       | ✅ Compatible     | -        | -     |
| Configuración de columna de tabla          | Ocultar columna                  | ⚠️ Obsoleto  | -        | -     |
| Configuración de columna de tabla          | Conectar bloques de datos          | ⚠️ Obsoleto  | -        | -     |
| Configuración de columna de tabla          | Guardar como plantilla de referencia   | ⚠️ Obsoleto  | -        | -     |
| Configuración de columna de tabla          | Guardar como plantilla heredada   | ⚠️ Obsoleto  | -        | -     |

#### Bloque de formulario de añadir y editar


| Categoría                                     | Función                               | Estado           | Prioridad | Notas |
| -------------------------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Configuración de formulario                                | Título y descripción                   | ✅ Compatible     | -        | -     |
| Configuración de formulario                                | Altura del bloque                          | ❌ No compatible | P1       | -     |
| Configuración de formulario                                | Plantillas de datos de formulario                   | ❌ No compatible | -        | -     |
| Configuración de formulario                                | Valores iniciales del formulario                   | 🔄 En progreso   | P1       | -     |
| Configuración de formulario                                | Diseño                                | ✅ Compatible     | -        | -     |
| Configuración de formulario                                | Reglas de vinculación de bloques                   | ✨ Mejorada      | -        | -     |
| Configuración de formulario                                | Reglas de vinculación de campos                   | 🔄 En progreso   | P2       | -     |
| Configuración de formulario                                | Ámbito de datos                            | ✅ Compatible     | -        | -     |
| Configuración de formulario                                | Habilitar borradores                         | 🆕 Nueva función   | -        | -     |
| Configuración de formulario                                | Guardar como plantilla                      | 🆕 Nueva función   | -        | -     |
| Configuración de formulario                                | Convertir referencia a duplicado        | 🆕 Nueva función   | -        | -     |
| Configuración de formulario                                | Convertir campos de referencia a duplicado | 🆕 Nueva función   | -        | -     |
| Configuración de formulario                                | Copiar UID                              | 🆕 Nueva función   | -        | -     |
| Configuración de formulario                                | Eliminar                                | ✅ Compatible     | -        | -     |
| Configuración de formulario                                | Guardar como plantilla de referencia            | ⚠️ Obsoleto  | -        | -     |
| Configuración de formulario                                | Guardar como plantilla heredada            | ⚠️ Obsoleto  | -        | -     |
| Elementos de campo de formulario                             | Mostrar campos de colección             | ✅ Compatible     | -        | -     |
| Elementos de campo de formulario                             | Mostrar campos de asociación            | ❌ No compatible | P2       | -     |
| Elementos de campo de formulario > Otros                    | Plantilla de campo                        | 🆕 Nueva función   | -        | -     |
| Elementos de campo de formulario > Otros                    | Elemento JS                               | 🆕 Nueva función   | -        | -     |
| Elementos de campo de formulario > Otros                    | Divisor                               | ✨ Mejorada      | -        | -     |
| Elementos de campo de formulario > Otros                    | Markdown                              | ✨ Mejorada      | -        | -     |
| Configuración de elemento de campo de formulario                     | Mostrar etiqueta                            | ✅ Compatible     | -        | -     |
| Configuración de elemento de campo de formulario                     | Etiqueta                                 | ✅ Compatible     | -        | -     |
| Configuración de elemento de campo de formulario                     | Información sobre herramientas                               | ✅ Compatible     | -        | -     |
| Configuración de elemento de campo de formulario                     | Descripción                           | ✅ Compatible     | -        | -     |
| Configuración de elemento de campo de formulario                     | Valor predeterminado                         | 🚀 Optimizando    | P0       | -     |
| Configuración de elemento de campo de formulario                     | Validación                            | ✨ Mejorada      | -        | -     |
| Configuración de elemento de campo de formulario                     | Requerido                              | ✅ Compatible     | -        | -     |
| Configuración de elemento de campo de formulario                     | Modo de visualización                          | ✨ Mejorada      | -        | -     |
| Configuración de elemento de campo de formulario > SubFormulario           | Múltiple                              | ❌ No compatible | P1       | -     |
| Configuración de elemento de campo de formulario > SubFormulario           | Reglas de vinculación de campos                   | 🔄 En progreso   | P2       | -     |
| Configuración de elemento de campo de formulario > SubTabla          | Reglas de vinculación de campos                   | ❌ No compatible | P2       | -     |
| Configuración de elemento de campo de formulario > SubFormulario (Popover) | -                                     | ❌ No compatible | -        | -     |
| Configuración de elemento de campo de formulario                     | Copiar UID                              | 🆕 Nueva función   | -        | -     |
| Configuración de elemento de campo de formulario                     | Eliminar                                | ✅ Compatible     | -        | -     |
| Acciones de formulario                                 | Enviar                                | 🚀 Optimizando    | P1       | -     |
| Acciones de formulario                                 | Activar flujo de trabajo                      | ✅ Compatible     | -        | -     |
| Acciones de formulario                                 | Ventana emergente                                 | ❌ No compatible | P1       | -     |
| Acciones de formulario                                 | Solicitud personalizada                        | ❌ No compatible | P2       | -     |
| Acciones de formulario                                 | AI employees                          | 🆕 Nueva función   | -        | -     |
| Acciones de formulario                                 | Acción JS                             | 🆕 Nueva función   | -        | -     |

#### Bloque de detalles


| Categoría                                                | Función                    | Estado           | Prioridad | Notas |
| ------------------------------------------------------- | -------------------------- | ---------------- | -------- | ----- |
| Configuración de detalles                                        | Título y descripción        | ✅ Compatible     | -        | -     |
| Configuración de detalles                                        | Altura del bloque               | ❌ No compatible | P1       | -     |
| Configuración de detalles                                        | Reglas de vinculación de bloques        | ✨ Mejorada      | -        | -     |
| Configuración de detalles                                        | Modo de carga de datos          | ❌ No compatible | P1       | -     |
| Configuración de detalles                                        | Diseño                     | ✅ Compatible     | -        | -     |
| Configuración de detalles                                        | Ámbito de datos                 | ✅ Compatible     | -        | -     |
| Configuración de detalles                                        | Ordenación predeterminada            | ✅ Compatible     | -        | -     |
| Configuración de detalles                                        | Reglas de vinculación de campos        | 🚀 Optimizando    | -        | -     |
| Configuración de detalles                                        | Guardar como plantilla           | 🆕 Nueva función   | -        | -     |
| Configuración de detalles                                        | Copiar UID                   | 🆕 Nueva función   | -        | -     |
| Configuración de detalles                                        | Eliminar                     | ✅ Compatible     | -        | -     |
| Configuración de detalles                                        | Guardar como plantilla de referencia | ⚠️ Obsoleto  | -        | -     |
| Configuración de detalles                                        | Guardar como plantilla heredada | ⚠️ Obsoleto  | -        | -     |
| Acciones de detalles                                         | Ver                       | 🆕 Nueva función   | -        | -     |
| Acciones de detalles                                         | Editar                       | ✅ Compatible     | -        | -     |
| Acciones de detalles                                         | Abrir ventana emergente                 | ✅ Compatible     | -        | -     |
| Acciones de detalles                                         | Actualizar registro              | ✅ Compatible     | -        | -     |
| Acciones de detalles                                         | Eliminar                     | ✅ Compatible     | -        | -     |
| Acciones de detalles                                         | Enlace                       | 🆕 Nueva función   | -        | -     |
| Acciones de detalles                                         | Impresión de plantilla             | ✅ Compatible     | -        | -     |
| Acciones de detalles                                         | Imprimir                      | ❌ No compatible | -        | -     |
| Acciones de detalles                                         | Solicitud personalizada             | ❌ No compatible | P2       | -     |
| Acciones de detalles                                         | Activar flujo de trabajo           | 🆕 Nueva función   | -        | -     |
| Acciones de detalles                                         | AI employees               | 🆕 Nueva función   | -        | -     |
| Acciones de detalles                                         | Acción JS                  | 🆕 Nueva función   | -        | -     |
| Campos de detalles                                          | Mostrar campos de colección  | ✅ Compatible     | -        | -     |
| Campos de detalles                                          | Mostrar campos de asociación | ✅ Compatible     | -        | -     |
| Campos de detalles > Otros                                 | Plantilla de campo             | 🆕 Nueva función   | -        | -     |
| Campos de detalles > Otros                                 | Campo JS                   | 🆕 Nueva función   | -        | -     |
| Campos de detalles > Otros                                 | Elemento JS                    | 🆕 Nueva función   | -        | -     |
| Campos de detalles > Otros                                 | Divisor                    | ✅ Compatible     | -        | -     |
| Campos de detalles > Otros                                 | Markdown                   | ✨ Mejorada      | -        | -     |
| Configuración de elemento de detalles                                   | Mostrar nombre de campo            | ✅ Compatible     | -        | -     |
| Configuración de elemento de detalles                                   | Nombre de campo                 | ✅ Compatible     | -        | -     |
| Configuración de elemento de detalles                                   | Información sobre herramientas                    | ✅ Compatible     | -        | -     |
| Configuración de elemento de detalles                                   | Descripción                | ✅ Compatible     | -        | -     |
| Configuración de elemento de detalles                                   | Estilo                      | ❌ No compatible | P2       | -     |
| Configuración de elemento de detalles > Visualización del título (campo enlazable) | Campo de título                | ✨ Mejorada      | -        | -     |
| Configuración de elemento de detalles > Visualización del título (campo enlazable) | Estilo                      | ❌ No compatible | P2       | -     |
| Configuración de elemento de detalles > Visualización del título (campo enlazable) | Modo de visualización               | 🆕 Nueva función   | -        | -     |
| Configuración de elemento de detalles > Visualización del título (campo enlazable) | Puntos suspensivos en desbordamiento de texto  | ✅ Compatible     | -        | -     |
| Configuración de elemento de detalles > Visualización del título (campo enlazable) | Habilitar clic para abrir       | ✅ Compatible     | -        | -     |
| Configuración de elemento de detalles > Visualización del título (campo enlazable) | Configuración de ventana emergente             | ✨ Mejorada      | -        | -     |
| Configuración de elemento de detalles > SubTabla                        | Tamaño de página                  | ✅ Compatible     | -        | -     |
| Configuración de elemento de detalles > SubTabla                        | Establecer reglas de ordenación          | ❌ No compatible | -        | -     |
| Configuración de elemento de detalles > SubTabla                        | Habilitar números de fila         | ❌ No compatible | -        | -     |
| Configuración de elemento de detalles > SubTabla                        | Reglas de vinculación              | ❌ No compatible | -        | -     |
| Configuración de elemento de detalles > SubDetalles                      | Reglas de vinculación              | ❌ No compatible | -        | -     |
| Configuración de elemento de detalles > SubDetalles                      | Diseño                     | ❌ No compatible | -        | -     |
| Configuración de elemento de detalles > Texto grande                      | Puntos suspensivos en desbordamiento de texto  | ✨ Mejorada      | -        | -     |
| Configuración de elemento de detalles > Texto grande                      | Modo de renderizado                | ✨ Mejorada      | -        | -     |
| Configuración de elemento de detalles > Vista previa                         | -                          | ✨ Mejorada      | -        | -     |
| Configuración de elemento de detalles                                   | Copiar UID                   | 🆕 Nueva función   | -        | -     |
| Configuración de elemento de detalles                                   | Eliminar                     | ✅ Compatible     | -        | -     |

#### Bloque de lista


| Categoría                      | Función                               | Estado           | Prioridad | Notas |
| ----------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Configuración de lista                 | Título y descripción                   | ✅ Compatible     | -        | -     |
| Configuración de lista                 | Altura del bloque                          | ❌ No compatible | P1       | -     |
| Configuración de lista                 | Reglas de vinculación de bloques                   | ✨ Mejorada      | -        | -     |
| Configuración de lista                 | Tamaño de página                             | ✅ Compatible     | -        | -     |
| Configuración de lista                 | Ámbito de datos                            | ✅ Compatible     | -        | -     |
| Configuración de lista                 | Ordenación predeterminada                       | ✅ Compatible     | -        | -     |
| Configuración de lista                 | Modo de carga de datos                     | ✅ Compatible     | -        | -     |
| Configuración de lista                 | Diseño                                | ✅ Compatible     | -        | -     |
| Configuración de lista                 | Guardar como plantilla                      | 🆕 Nueva función   | -        | -     |
| Configuración de lista                 | Convertir referencia a duplicado        | 🆕 Nueva función   | -        | -     |
| Configuración de lista                 | Convertir campos de referencia a duplicado | 🆕 Nueva función   | -        | -     |
| Configuración de lista                 | Copiar UID                              | 🆕 Nueva función   | -        | -     |
| Configuración de lista                 | Eliminar                                | ✅ Compatible     | -        | -     |
| Configuración de lista                 | Guardar como plantilla de referencia            | ⚠️ Obsoleto  | -        | -     |
| Configuración de lista                 | Guardar como plantilla heredada            | ⚠️ Obsoleto  | -        | -     |
| Acciones de lista > Acciones globales | Añadir nuevo                               | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones globales | Eliminar                                | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones globales | Filtrar                                | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones globales | Enlace                                  | 🆕 Nueva función   | -        | -     |
| Acciones de lista > Acciones globales | Ventana emergente                                 | 🆕 Nueva función   | -        | -     |
| Acciones de lista > Acciones globales | Actualizar                               | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones globales | Actualización masiva                           | 🚀 Optimizando    | -        | -     |
| Acciones de lista > Acciones globales | Exportar                                | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones globales | Importar                                | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones globales | Exportar archivos adjuntos                    | 🆕 Nueva función   | -        | -     |
| Acciones de lista > Acciones globales | Enviar correo electrónico                            | 🆕 Nueva función   | -        | -     |
| Acciones de lista > Acciones globales | Impresión de plantilla                        | 🆕 Nueva función   | -        | -     |
| Acciones de lista > Acciones globales | Activar flujo de trabajo                      | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones globales | Solicitud personalizada                        | ❌ No compatible | P2       | -     |
| Acciones de lista > Acciones globales | AI employees                          | 🆕 Nueva función   | -        | -     |
| Acciones de lista > Acciones globales | Acción JS                             | 🆕 Nueva función   | -        | -     |
| Acciones de lista > Acciones de fila    | Ver                                  | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones de fila    | Eliminar                                | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones de fila    | Editar                                  | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones de fila    | Enlace                                  | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones de fila    | Ventana emergente                                 | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones de fila    | Actualizar registro                         | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones de fila    | Impresión de plantilla                        | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones de fila    | Activar flujo de trabajo                      | ✅ Compatible     | -        | -     |
| Acciones de lista > Acciones de fila    | Solicitud personalizada                        | ❌ No compatible | P2       | -     |
| Acciones de lista > Acciones de fila    | AI employees                          | 🆕 Nueva función   | -        | -     |
| Acciones de lista > Acciones de fila    | Acción JS                             | 🆕 Nueva función   | -        | -     |
| Campos de lista                   | Mostrar campos de colección             | ✅ Compatible     | -        | -     |
| Campos de lista                   | Mostrar campos de asociación            | ✅ Compatible     | -        | -     |
| Campos de lista > Otros          | Campo JS                              | 🆕 Nueva función   | -        | -     |
| Campos de lista > Otros          | Elemento JS                               | 🆕 Nueva función   | -        | -     |
| Campos de lista > Otros          | Divisor                               | ✅ Compatible     | -        | -     |
| Campos de lista > Otros          | Markdown                              | 🆕 Nueva función   | -        | -     |

#### Otros bloques


| Función               | Estado           | Prioridad | Notas |
| --------------------- | ---------------- | -------- | ----- |
| Bloque de tarjeta de cuadrícula       | ✅ Compatible     | -        | -     |
| Bloque de comentarios        | ✅ Compatible     | -        | -     |
| Bloque de mapa             | ✅ Compatible     | -        | -     |
| Bloque de gráficos          | ✨ Mejorada      | -        | -     |
| Bloque de calendario        | ❌ No compatible | -        | -     |
| Bloque de Gantt           | ❌ No compatible | -        | -     |
| Bloque de Kanban          | ❌ No compatible | -        | -     |
| Bloque de formulario de varios pasos | ❌ No compatible | -        | -     |
| Formulario de filtro           | ✨ Mejorada      | -        | -     |
| Colapsar de filtro       | ❌ No compatible | -        | -     |
| Filtro de árbol           | ❌ No compatible | -        | -     |
| Plantilla de bloque        | 🆕 Nueva función   | -        | -     |
| Bloque JS              | 🆕 Nueva función   | -        | -     |
| Iframe                | ✅ Compatible     | -        | -     |
| Panel de acciones          | ✅ Compatible     | -        | -     |
| Markdown              | ✨ Mejorada      | -        | -     |
| Historial de registros        | 🆕 Nueva función   | -        | -     |
| Correo                  | ✅ Compatible     | -        | -     |
| Flujo de trabajo              | 🔄 En progreso   | P0       | -     |

#### Panel de acciones


| Categoría              | Función                   | Estado           | Prioridad | Notas |
| --------------------- | ------------------------- | ---------------- | -------- | ----- |
| Configuración del panel de acciones | Título y descripción       | ✅ Compatible     | -        | -     |
| Configuración del panel de acciones | Altura del bloque              | ❌ No compatible | P1       | -     |
| Configuración del panel de acciones | Reglas de vinculación de bloques       | ✨ Mejorada      | -        | -     |
| Configuración del panel de acciones | Diseño                    | ✅ Compatible     | -        | -     |
| Configuración del panel de acciones | Puntos suspensivos en desbordamiento de texto | ✅ Compatible     | -        | -     |
| Configuración del panel de acciones | Guardar como plantilla          | 🆕 Nueva función   | -        | -     |
| Configuración del panel de acciones | Copiar UID                  | 🆕 Nueva función   | -        | -     |
| Configuración del panel de acciones | Eliminar                    | ✅ Compatible     | -        | -     |
| Acciones               | Ventana emergente                     | ✅ Compatible     | -        | -     |
| Acciones               | Enlace                      | ✅ Compatible     | -        | -     |
| Acciones               | Escanear código QR              | ✅ Compatible     | -        | -     |
| Acciones               | Actualizar registro             | ❌ No compatible | P2       | -     |
| Acciones               | Solicitud personalizada            | ❌ No compatible | P2       | -     |
| Acciones               | Activar flujo de trabajo          | ❌ No compatible | P2       | -     |
| Acciones               | Acción JS                 | 🆕 Nueva función   | -        | -     |

#### Campos

##### Modo de solo lectura


| Categoría           | Función             | Estado           | Prioridad | Notas |
| ------------------ | ------------------- | ---------------- | -------- | ----- |
| Campo enlazable    | Visualización de texto        | ✅ Compatible     | -        | -     |
| Campo enlazable    | Visualización de número      | ✅ Compatible     | -        | -     |
| Campo enlazable    | Visualización de fecha        | ✅ Compatible     | -        | -     |
| Campo enlazable    | Visualización de hora        | ✅ Compatible     | -        | -     |
| Campo enlazable    | Visualización de enumeración        | ✅ Compatible     | -        | -     |
| Campo enlazable    | Visualización de relación    | ✅ Compatible     | -        | -     |
| Visualización de texto grande | Visualización de texto enriquecido   | ✅ Compatible     | -        | -     |
| Visualización de texto grande | Visualización de Markdown    | ✅ Compatible     | -        | -     |
| Visualización de texto grande | Visualización de bloque de código  | ❌ No compatible | P1       | -     |
| Visualización de texto grande | Campo JSON          | ✅ Compatible     | -        | -     |
| Visualización de campo      | Campo URL           | ✅ Compatible     | -        | -     |
| Visualización de campo      | Campo de vista previa       | ✅ Compatible     | -        | -     |
| Visualización de campo      | Campo de casilla de verificación      | ✅ Compatible     | -        | -     |
| Visualización de campo      | Campo de icono          | ✅ Compatible     | -        | -     |
| Visualización de campo      | Campo de color         | ✅ Compatible     | -        | -     |
| Visualización de campo      | Cálculo de fórmula | ✅ Compatible     | -        | -     |
| Visualización de campo      | Código automático           | ✅ Compatible     | -        | -     |
| Campo de relación     | SubDetalles          | 🔄 En progreso   | P0       | -     |
| Campo de relación     | SubTabla            | 🔄 En progreso   | P0       | -     |
| Visualización de campo      | Visualización de mapa         | ✅ Compatible     | -        | -     |
| Visualización de campo      | Campo JS            | ✅ Compatible     | -        | -     |
| Visualización de campo      | TableOID            | ✅ Compatible     | -        | -     |
| Visualización de campo      | Región de China        | ❌ No compatible | -        | -     |
| Visualización de campo      | Código QR             | ❌ No compatible | -        | -     |

##### Modo de edición


| Función                  | Estado           | Prioridad | Notas |
| ------------------------ | ---------------- | -------- | ----- |
| Entrada de una línea        | ✅ Compatible     | -        | -     |
| Entrada de número             | ✅ Compatible     | -        | -     |
| Entrada de porcentaje         | ✅ Compatible     | -        | -     |
| Entrada de contraseña           | ✅ Compatible     | -        | -     |
| Entrada de NanoID             | ✅ Compatible     | -        | -     |
| Entrada de texto multilínea    | ✅ Compatible     | -        | -     |
| Editor de texto enriquecido         | ✅ Compatible     | -        | -     |
| Editor de código              | ❌ No compatible | -        | -     |
| Editor de Markdown          | ✅ Compatible     | -        | -     |
| Entrada JSON               | ✅ Compatible     | -        | -     |
| Selector                 | ✅ Compatible     | -        | -     |
| Botón de opción                    | ✅ Compatible     | -        | -     |
| Casilla de verificación                 | ✅ Compatible     | -        | -     |
| Grupo de casillas de verificación           | ✅ Compatible     | -        | -     |
| Selector de fecha              | ✅ Compatible     | -        | -     |
| Selector de color             | ✅ Compatible     | -        | -     |
| Selector de icono              | ✅ Compatible     | -        | -     |
| Selector de hora              | ✅ Compatible     | -        | -     |
| Selector de registro (desplegable) | ✅ Compatible     | -        | -     |
| Selector de registro (ventana emergente)    | ✅ Compatible     | -        | -     |
| Selector de registro (en cascada)  | ✅ Compatible     | -        | -     |
| Gestor de archivos             | ✅ Compatible     | -        | -     |
| Selector de colección      | 🔄 En progreso   | P2       | -     |
| Región de China             | ❌ No compatible | -        | -     |
| Código QR                  | ❌ No compatible | -        | -     |
| Escanear para ingresar            | ❌ No compatible | -        | -     |
| SubFormulario                  | 🚀 Optimizando    | P0       | -     |
| SubTabla (simple)        | 🚀 Optimizando    | P0       | -     |
| SubTabla (avanzada)      | 🔄 En progreso   | P1       | -     |
| Selector de mapa               | ✅ Compatible     | -        | -     |
| Campo JS                 | ✅ Compatible     | -        | -     |

#### Acciones


| Función            | Estado           | Prioridad | Notas |
| ------------------ | ---------------- | -------- | ----- |
| Ventana emergente              | ✅ Compatible     | -        | -     |
| Ver               | ✅ Compatible     | -        | -     |
| Filtrar             | ✅ Compatible     | -        | -     |
| Añadir                | ✅ Compatible     | -        | -     |
| Añadir subregistro     | ✅ Compatible     | -        | -     |
| Enlace               | ✅ Compatible     | -        | -     |
| Editar               | ✅ Compatible     | -        | -     |
| Eliminar             | ✅ Compatible     | -        | -     |
| Actualizar            | ✅ Compatible     | -        | -     |
| Actualizar registro      | 🚀 Optimizando    | P1       | -     |
| Enviar             | 🚀 Optimizando    | P1       | -     |
| Subir             | ✅ Compatible     | -        | -     |
| Activar flujo de trabajo   | ✅ Compatible     | -        | -     |
| Edición masiva          | ❌ No compatible | P1       | -     |
| Actualización masiva        | ✅ Compatible     | -        | -     |
| Solicitud personalizada     | ❌ No compatible | -        | -     |
| Copiar               | ❌ No compatible | -        | -     |
| Imprimir              | ❌ No compatible | -        | -     |
| Impresión de plantilla     | ✅ Compatible     | -        | -     |
| Importar             | ✅ Compatible     | -        | -     |
| Exportar             | ✅ Compatible     | -        | -     |
| Exportar archivos adjuntos | ✅ Compatible     | -        | -     |
| Escanear código QR       | ✅ Compatible     | -        | -     |
| AI employees       | 🆕 Nueva función   | -        | -     |
| Acción JS          | 🆕 Nueva función   | -        | -     |

#### Funciones avanzadas


| Categoría             | Función                    | Estado                        | Prioridad | Notas |
| -------------------- | -------------------------- | ----------------------------- | -------- | ----- |
| Plantillas de UI         | Bloque                      | 🆕 Nueva función                | -        | -     |
| Plantillas de UI         | Ventana emergente                      | 🆕 Nueva función                | -        | -     |
| Plantillas de UI         | Campo                      | 🆕 Nueva función                | -        | -     |
| Plantillas de UI > Campo | Campo de formulario                 | 🆕 Nueva función                | -        | -     |
| Plantillas de UI > Campo | Campo de detalles              | 🆕 Nueva función                | -        | -     |
| Plantillas de UI > Campo | Campo de aprobación             | 🆕 Nueva función                | -        | -     |
| UI y permisos   | UI y permisos         | ✨ Mejorada                   | -        | -     |
| Flujo de eventos           | Eventos de flujo de eventos          | 🆕 Nueva función, 🚀 Optimizando | P1       | -     |
| Flujo de eventos           | Acciones de flujo de eventos         | 🆕 Nueva función, 🚀 Optimizando | P1       | -     |
| Reglas de vinculación        | Reglas de vinculación              | 🚀 Optimizando                 | P1       | -     |
| Variables            | Usuario actual               | 🚀 Optimizando                 | P1       | -     |
| Variables            | Rol actual (identificador)  | ✅ Compatible                  | -        | -     |
| Variables            | Espacio actual (identificador) | ❌ No compatible              | P1       | -     |
| Variables            | Clave API                    | ✅ Compatible                  | -        | -     |
| Variables            | Parámetros de consulta de URL       | ✅ Compatible                  | -        | -     |
| Variables            | Dispositivo actual             | 🆕 Nueva función                | -        | -     |
| Variables            | Registro actual             | ✅ Compatible                  | -        | -     |
| Variables            | Formulario actual               | ✅ Compatible                  | -        | -     |
| Variables            | Objeto actual             | ❌ No compatible              | P1       | -     |
| Variables            | Ventana emergente actual              | 🚀 Optimizando                 | P1       | -     |
| Variables            | Registros seleccionados actuales   | ❌ No compatible              | P2       | -     |
| Variables            | Variables de fecha             | 🔄 En progreso                | P1       | -     |
| Variables            | Variables y claves         | 🔄 En progreso                | P1       | -     |
| JavaScript           | Ejecutar JavaScript             | 🆕 Nueva función                | -        | -     |

### Estado de los plugins


| Nombre del plugin                                      | Estado del plugin                    | Prioridad | Notas                                           |
| ------------------------------------------------ | -------------------------------- | -------- | ----------------------------------------------- |
| @nocobase/plugin-action-bulk-edit                | ❌ No compatible                 | P1       | -                                               |
| @nocobase/plugin-action-custom-request           | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-action-duplicate                | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-action-print                    | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-block-multi-step-form           | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-block-tree                      | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-calendar                        | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-custom-variables                | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-embed                           | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-field-china-region              | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-field-code                      | ❌ No compatible                 | P1       | -                                               |
| @nocobase/plugin-field-sort                      | ❌ No compatible                 | -        | No se admite la ordenación por arrastre de registros  |
| @nocobase/plugin-file-previewer-office           | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-gantt                           | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-kanban                          | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-public-forms                    | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-text-copy                       | ❌ No compatible                 | -        | -                                               |
| @nocobase/plugin-data-visualization-echarts      | ⚠️ Obsoleto                  | -        | Use @nocobase/plugin-data-visualization en su lugar |
| @nocobase/plugin-field-component-mask            | ⚠️ Obsoleto                  | -        | -                                               |
| @nocobase/plugin-mobile                          | ⚠️ Obsoleto                  | -        | Use @nocobase/plugin-ui-layout en su lugar          |
| @nocobase/plugin-multi-app-manager               | ⚠️ Obsoleto                  | -        | Use @nocobase/plugin-app-supervisor en su lugar     |
| @nocobase/plugin-app-supervisor                  | 🆕 Nueva función                   | P0       | Próximamente                                     |
| @nocobase/plugin-ai                              | 🆕 Nueva función                   | -        | -                                               |
| @nocobase/plugin-ai-gigachat                     | 🆕 Nueva función                   | -        | -                                               |
| @nocobase/plugin-block-grid-card                 | 🆕 Nueva función                   | -        | -                                               |
| @nocobase/plugin-block-list                      | 🆕 Nueva función                   | -        | -                                               |
| @nocobase/plugin-block-markdown                  | 🆕 Nueva función                   | -        | -                                               |
| @nocobase/plugin-flow-engine                     | 🆕 Nueva función                   | -        | -                                               |
| @nocobase/plugin-form-drafts                     | 🆕 Nueva función                   | -        | -                                               |
| @nocobase/plugin-multi-space                     | 🆕 Nueva función                   | -        | -                                               |
| @nocobase/plugin-record-history                  | 🆕 Nueva función                   | -        | -                                               |
| @nocobase/plugin-telemetry                       | 🆕 Nueva función                   | -        | -                                               |
| @nocobase/plugin-ui-layout                       | 🆕 Nueva función, ❌ No compatible | P2       | Planificado                                         |
| @nocobase/plugin-ui-templates                    | 🆕 Nueva función                   | -        | -                                               |
| @nocobase/plugin-acl                             | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-action-bulk-update              | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-action-export                   | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-action-export-pro               | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-action-import                   | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-action-import-pro               | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-action-template-print           | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-api-doc                         | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-api-keys                        | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-async-task-manager              | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-audit-logger                    | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-audit-logs                      | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-auth                            | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-auth-cas                        | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-auth-dingtalk                   | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-auth-ldap                       | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-auth-oidc                       | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-auth-saml                       | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-auth-sms                        | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-auth-wecom                      | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-backup-restore                  | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-backups                         | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-block-iframe                    | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-block-template                  | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-block-tree                      | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-block-workbench                 | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-client                          | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-collection-fdw                  | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-collection-sql                  | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-collection-tree                 | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-comments                        | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-custom-brand                    | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mariadb    | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mssql      | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mysql      | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-data-source-external-oracle     | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-data-source-external-postgres   | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-data-source-kingbase            | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-data-source-main                | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-data-source-manager             | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-data-source-rest-api            | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-data-visualization              | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-departments                     | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-email-manager                   | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-environment-variables           | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-error-handler                   | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-field-attachment-url            | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-field-encryption                | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-field-formula                   | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-field-m2m-array                 | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-field-markdown-vditor           | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-field-sequence                  | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-file-manager                    | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-file-storage-s3-pro             | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-graph-collection-manager        | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-ip-restriction                  | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-license                         | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-locale-tester                   | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-localization                    | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-lock-adapter-redis              | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-logger                          | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-map                             | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-migration-manager               | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-multi-keyword-filter            | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-notification-email              | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-notification-in-app-message     | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-notification-manager            | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-password-policy                 | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-pubsub-adapter-redis            | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-rabbitmq          | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-redis             | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-request-encryption              | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-system-settings                 | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-telemetry-prometheus            | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-theme-editor                    | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-two-factor-authentication       | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-ui-schema-storage               | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-user-data-sync                  | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-users                           | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-verification                    | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-verification-totp-authenticator | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workerid-allocator-redis        | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow                        | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-action-trigger         | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-aggregate              | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-approval               | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-cc                     | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-custom-action-trigger  | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-date-calculation       | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-delay                  | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-dynamic-calculation    | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-javascript             | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-json-query             | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-json-variable-mapping  | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-loop                   | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-mailer                 | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-manual                 | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-notification           | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-parallel               | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-request                | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-request-interceptor    | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-response-message       | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-sql                    | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-subflow                | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-variable               | ✅ Compatible                     | -        | -                                               |
| @nocobase/plugin-workflow-webhook                | ✅ Compatible                     | -        | -                                               |
