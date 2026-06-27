---
title: "Anunciando NocoBase v1.9.0"
description: "Validación de datos y programación de tareas mejoradas, con soporte para desacoplamiento de servicios y apagado gradual para mejorar la estabilidad y flexibilidad general del sistema."
---

## Nueva funcionalidad

### Reglas de validación de campos

Permite configurar múltiples reglas de validación para los campos (obligatorio, formato, longitud, rango y expresiones personalizadas).
Los datos introducidos se validan automáticamente al enviar el formulario para garantizar precisión y coherencia.
Las reglas de validación se pueden configurar de forma flexible en los ajustes del campo.

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

Referencia: [Validación de campos](https://docs.nocobase.com/handbook/data-modeling/collection-fields/validation)

### El bloque de tabla admite configuración de columnas

El bloque de tabla ahora incluye una función de Configuración de columnas que permite a los usuarios ajustar el orden, la visibilidad y la posición fijada de las columnas sin salir del modo de edición, haciendo que la visualización de datos sea más flexible y fácil de usar.

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### Modo de activación "Antes de guardar datos" para aprobaciones

Las aprobaciones ahora admiten un modo de activación "Antes de guardar datos": cuando está habilitado, los datos no se almacenan al iniciar la aprobación y solo se guardan después de que la aprobación sea aprobada.

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### El activador de aprobación expone la variable ID de aprobación

El activador de aprobación ahora expone la variable ID de aprobación, lo que permite hacer referencia a ella en flujos de trabajo y procesos de automatización para una configuración más flexible y un seguimiento de datos.

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### [Administrador de tareas asíncronas] Soporte para división de servicios mediante variables de entorno y colas

Se introduce un nuevo mecanismo de división de servicios que permite que los servicios de tareas asíncronas y flujos de trabajo se ejecuten de forma independiente a través de la variable de entorno `WORKER_MODE`, posibilitando el despliegue multi-nodo y la optimización del rendimiento.

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

Referencia: [División de servicios](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting)

### Nueva cola de eventos para gestionar mensajes de cola

Se añade una cola de eventos dedicada para gestionar los mensajes de cola del sistema, mejorando el procesamiento de tareas asíncronas y la fiabilidad.

Referencia: [Modo clúster: Cola de mensajes](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode#message-queue)

### Soporte para ciclo de vida de apagado controlado

Se introduce el manejo de apagado controlado.
Cuando el proceso de la aplicación recibe una señal SIGTERM o SIGINT, ahora inicia una secuencia de apagado adecuada para evitar problemas derivados de operaciones en curso.

## Mejoras

### Las tablas del sistema usan IDs tipo Snowflake de 53 bits

Se actualizan los IDs de las tablas del sistema que anteriormente usaban claves primarias autoincrementales sin unicidad global a IDs tipo Snowflake de 53 bits para una identificación única global.

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

### Ver y reanudar tareas desde flujos de trabajo deshabilitados

Los bloques de tareas manuales ahora muestran las tareas pendientes incluso de flujos de trabajo deshabilitados y permiten a los usuarios continuar procesándolas.

### Mejoras en el gestor de correo

* Los datos de correo admiten resincronización.
* Permite redimensionar las imágenes insertadas en el editor de correo.
* El editor de texto enriquecido ahora admite saltos de línea suaves, mejorando la experiencia de formato de correo.
* Rendimiento mejorado de la lista de correo para operaciones más fluidas.

![20251031234300_rec_-jifryr.gif](https://static-docs.nocobase.com/20251031234300_rec_-jifryr.gif)

### Optimización del módulo de flujo de trabajo

* Rendimiento de consultas optimizado en la ejecución de la cola de flujos de trabajo mediante la introducción de campos e índices separados para una recuperación de datos más rápida.

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)
