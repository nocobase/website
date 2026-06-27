---
title: "NocoBase 2.0 lanzado oficialmente"
description: "Esta versión trae mejoras sistemáticas en las capacidades de IA, la arquitectura de la aplicación, la experiencia de edición de datos y el flujo de eventos del frontend, junto con la adaptación completa de las páginas V2 y las funciones principales."
---

NocoBase 2.0 es una actualización importante centrada en **crear aplicaciones complejas y escalar despliegues**. Esta versión trae mejoras sistemáticas en las capacidades de IA, la arquitectura de aplicaciones, la experiencia de edición de datos y el flujo de eventos del frontend, junto con la adaptación completa de las páginas V2 y las funciones principales.

## Nuevas Funcionalidades

### Empleados de IA

Las capacidades de IA ahora están integradas en el núcleo como un ciudadano de primera clase, con extensibilidad a través del sistema de plugins:

- Integrado en el núcleo con extensibilidad basada en plugins
- Dependencias de LangChain actualizadas y optimizadas para una mejor estabilidad y escalabilidad
- Flujo de interacción con empleados de IA simplificado, reduciendo las barreras de configuración y uso

![20260214075059](https://static-docs.nocobase.com/20260214075059.png)

**Referencia:**

- [Empleados de IA](https://v2.docs.nocobase.com/ai-employees)

### Supervisor de Aplicaciones

El plugin Supervisor de Aplicaciones proporciona **descubrimiento, programación y gestión unificados de múltiples instancias de aplicaciones NocoBase**, adecuado para escenarios de despliegue multi-aplicación y multi-entorno.

- Autodescubrimiento de aplicaciones y gestión centralizada
- Mecanismo de memoria compartida para mejorar la colaboración entre instancias
- Despliegue híbrido multi-entorno para requisitos de entrega complejos

**Memoria Compartida**

![20260214075803](https://static-docs.nocobase.com/20260214075803.png)

**Despliegue Híbrido Multi-Entorno**

![20260214075815](https://static-docs.nocobase.com/20260214075815.png)

**Referencia:**

- [Gestión Multi-Aplicación](https://v2.docs.nocobase.com/multi-app/multi-app)

### Mejora del Lienzo de Flujo de Trabajo

#### Reordenación de Nodos por Arrastrar y Soltar

![image-8ajlez.png](https://static-docs.nocobase.com/image-8ajlez.png)

#### Copiar y Pegar Nodos

![image-nskgho.png](https://static-docs.nocobase.com/image-nskgho.png)

### Subtabla (Edición en Línea / Edición en Ventana Emergente)

Para satisfacer diferentes niveles de complejidad en la edición de datos relacionados, NocoBase ofrece dos modos de edición de subtablas:

- **Subtabla (Edición en Línea)**: Edite datos relacionados directamente en la tabla para operaciones eficientes, ideal para entrada rápida de datos y actualizaciones por lotes
- **Subtabla (Edición en Ventana Emergente)**: Edite datos a través de formularios emergentes con soporte para tipos de campo más complejos y lógica de validación, adecuado para escenarios de alta complejidad

**Subtabla (Edición en Línea)**

![20260214080224](https://static-docs.nocobase.com/20260214080224.png)

**Subtabla (Edición en Ventana Emergente)**

![20260214080233](https://static-docs.nocobase.com/20260214080233.png)

**Referencia:**

- [Subtabla (Edición en Línea)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table)
- [Subtabla (Edición en Ventana Emergente)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table-popup)

### Asignación de Campos

El nuevo mecanismo de asignación de campos unifica y mejora la **lógica de inicialización y escritura** para los datos del formulario, mejorando la claridad y consistencia:

- **Entrada de configuración de asignación de campos unificada**, reduciendo la complejidad de la configuración dispersa
- La lógica de asignación de campos **ya no depende del tipo de componente del campo**, haciendo que el comportamiento de los datos sea más estable y predecible
- Soporte para **asignación a nivel de campo en campos de relación**, permitiendo el modelado de datos relacionales complejos
- Modos de asignación de **valor predeterminado** y **valor constante**, cubriendo escenarios de inicialización y sobrescritura
- El "valor predeterminado de campo" heredado está obsoleto; migre al nuevo mecanismo de asignación de campos

![20260214080932](https://static-docs.nocobase.com/20260214080932.png)

**Referencia:** Asignación de Campos (documentación próximamente)

### Orden de Ejecución del Flujo de Eventos

El flujo de eventos se ejecuta estrictamente en la jerarquía **Evento → Flujo → Paso**, con hooks correspondientes activados antes y después de cada nivel para un control y extensión detallados.

```yml
event:
  before:
    - track_event_start
  flows:
    - name: flow1
      before:
        - track_flow_start
      steps:
        - name: step1
          before: [track_step_start]
          run: do_something
          after: [track_step_done]
      after:
        - track_flow_end
    - name: flow2
      ...
    - name: flow3
      ...
  after:
    - track_event_end
```

![20260214081527](https://static-docs.nocobase.com/20260214081527.png)

**Referencia:**

- [Flujo de Eventos](https://v2.docs.nocobase.com/interface-builder/event-flow)

## Funcionalidades Adaptadas a 2.0

### Edición Masiva

![20260214083041](https://static-docs.nocobase.com/20260214083041.png)

**Referencia:**

- [Edición Masiva](https://v2.docs.nocobase.com/interface-builder/actions/types/bulk-edit)

### Duplicar

![20260214083146](https://static-docs.nocobase.com/20260214083146.png)

**Referencia:**

- [Duplicar](https://v2.docs.nocobase.com/interface-builder/actions/types/duplicate)

### Altura del Bloque

![20260214083319](https://static-docs.nocobase.com/20260214083319.png)

**Referencia:**

- [Altura del Bloque](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/block-height)

### Ordenación por Arrastre de Filas en Tabla

![20260214085152](https://static-docs.nocobase.com/20260214085152.png)

**Referencia:**

- [Ordenación por Arrastre](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/drag-sort)

### Método de Carga de Datos

![20260214083433](https://static-docs.nocobase.com/20260214083433.png)

**Referencia:**

- [Método de Carga de Datos](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/data-loading-method)

### Visualización de Campos de Relación en Formularios

![20260214083517](https://static-docs.nocobase.com/20260214083517.png)

**Referencia:**

- [Formulario](https://v2.docs.nocobase.com/interface-builder/blocks/data-blocks/form)

### Soporte de Localización de Página (V2)

Las páginas V2 ahora admiten completamente la localización en **páginas, bloques, acciones y campos**.

Después de habilitar el plugin de localización, el sistema recopila automáticamente las entradas de traducción faltantes y las muestra en la lista de gestión de localización para su mantenimiento centralizado.

En los bloques JS, use `ctx.t()` para recuperar texto localizado con interpolación de variables:

```js
const label = ctx.t('Su nombre es {{name}}', {
  name: await ctx.getVar('ctx.user.nickname')
});
ctx.render(label);
```

### Aprobación 2.0

Todos los flujos de trabajo de aprobación recién creados utilizan el diseño basado en bloques 2.0. Las configuraciones 1.x existentes permanecen compatibles. Para cambiar una aprobación 1.x al diseño 2.0, seleccione la versión v2 y reconfigurar la interfaz. Tenga en cuenta que una vez cambiado, no se puede revertir a 1.x.

#### Configurar Interfaz del Iniciador

![image-ba3ann.png](https://static-docs.nocobase.com/image-ba3ann.png)

#### Configurar Interfaz del Aprobador

![image-dl448q.png](https://static-docs.nocobase.com/image-dl448q.png)

### CC (Copia Carbón) 2.0

Todos los nodos CC recién creados utilizan el diseño basado en bloques 2.0 para la vista del destinatario. Las configuraciones 1.x existentes permanecen compatibles. Para cambiar un CC 1.x al diseño 2.0, seleccione la versión v2 y reconfigurar la interfaz. Tenga en cuenta que una vez cambiado, no se puede revertir a 1.x.

![image-z26oib.png](https://static-docs.nocobase.com/image-z26oib.png)

## No Disponible Aún en 2.0

Las siguientes funcionalidades aún no están disponibles en 2.0 y se actualizarán en versiones futuras:

| Funcionalidad                     | Alternativa Actual       |
| --------------------------------- | ------------------------ |
| Solicitud Personalizada           | Nodo de Solicitud de Flujo de Trabajo |
| Impresión del Navegador           | Acción JS                |
| Formulario de Varios Pasos        | Bloque JS                |
| Bloque de Filtro de Árbol         | Bloque JS                |
| Bloque de Calendario              | Bloque JS                |
| Variable Personalizada            | Flujo de Eventos         |
| Bloque de Diagrama de Gantt       | Bloque JS                |
| Bloque Kanban                     | Bloque JS                |
| Copia de Texto                    | Flujo de Eventos         |
| Configuración de Columnas         | Acción JS                |
| Regla de Vinculación de Estilo    | Flujo de Eventos         |
| Atajo de Copia de Texto           | Flujo de Eventos         |
| Campo de Código QR                | Campo JS                 |
| Escanear para Ingresar            | Flujo de Eventos         |
| Incrustar NocoBase                | —                        |
| Campo de Región Administrativa de China | —                  |
| Campo de Código                   | —                        |
| Formulario Público                | —                        |
| Tarea Pendiente del Nodo Manual del Flujo de Trabajo | — |
| Después del Envío Exitoso         | Flujo de Eventos         |
| Plantilla de Datos                | Flujo de Eventos         |
