---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: Soporte para el modo de activación \"Antes de guardar datos\", adición de soporte de paginación a la subtabla, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.3](https://www.nocobase.com/en/blog/v1.9.3)

*Fecha de lanzamiento: 2025-11-05*

### 🚀 Mejoras

- **[base de datos]** Añadir la opción `multipleStatements` a la instancia de conexión MariaDB para soportar la invocación de múltiples sentencias en una sola consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher
- **[Flujo de trabajo]** Soporte para que el bloque de datos en el flujo de trabajo utilice el menú de configuración de detalles consolidados ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher

### 🐛 Corrección de errores

- **[servidor]** Aislar el canal Pub-Sub por nombre de aplicación ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher
- **[cliente]** Corregir "Se excedió el tamaño máximo de la pila de llamadas" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe
- **[base de datos]** Detección incorrecta del campo de índice cuando los nombres de campo usan el estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile
- **[Flujo de trabajo]** Se resolvió un problema por el cual el despachador de flujo de trabajo en modo clúster no lograba identificar correctamente los estados inactivos, lo que podía provocar un consumo innecesario de eventos de cola antes de que el plugin estuviera listo ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher
- **[Móvil (obsoleto)]** Corregir el problema por el cual la ventana emergente del valor predeterminado del campo de fecha en móvil no puede seleccionar una fecha ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe
- **[Flujo de trabajo: Aprobación]** Corregir error lanzado al duplicar el flujo de trabajo de aprobación por @mytharcher
- **[Gestor de correo electrónico]** colección mailMessages añadir índices por @jiannx

### [v1.9.2](https://www.nocobase.com/en/blog/v1.9.2)

*Fecha de lanzamiento: 2025-11-04*

### 🚀 Mejoras

- **[Flujo de trabajo: Aprobación]** Añadir notificación para el asignado delegado y añadido por @mytharcher

### 🐛 Corrección de errores

- **[Flujo de trabajo]** Corregir un problema por el cual, en modo de división de servicios, la ejecución manual de un flujo de trabajo que contiene un nodo de interrupción se quedaba atascada en un estado pendiente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) por @mytharcher
- **[Gestor de correo electrónico]** añadir migración para índices por @jiannx

### [v1.9.1](https://www.nocobase.com/en/blog/v1.9.1)

*Fecha de lanzamiento: 2025-11-04*

### 🐛 Corrección de errores

- **[Flujo de trabajo: Aprobación]** Ya no se admite la creación de nodos de aprobación en ramas paralelas para evitar problemas causados por el estado del proceso por @mytharcher
- **[Gestor de correo electrónico]** añadir registros de sincronización por @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.16](https://www.nocobase.com/en/blog/v1.9.0-beta.16)

*Fecha de lanzamiento: 2025-11-03*

### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Soporte para el modo de activación "Antes de guardar datos" por @mytharcher

### 🚀 Mejoras

- **[servidor]** Añadir registro de puerta de enlace ([#7683](https://github.com/nocobase/nocobase/pull/7683)) por @2013xile
- **[Flujo de trabajo: nodo de notificación]** Añadir opción `ignoreFail` para el nodo de notificación, que permite continuar el flujo de trabajo cuando falla el envío de la notificación ([#7736](https://github.com/nocobase/nocobase/pull/7736)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir la configuración de la regla de vinculación del escaneo de código QR en el panel de acciones ([#7693](https://github.com/nocobase/nocobase/pull/7693)) por @katherinehhh
  - Corregir fallo de la regla de vinculación del bloque iframe dentro de un modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) por @katherinehhh
- **[base de datos]** Omitir la sincronización del valor predeterminado para columnas JSON de MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) por @2013xile
- **[Flujo de trabajo]**

  - Corregir el problema por el cual, en modo de división de servicios, el manejo inadecuado de la cola de pendientes en memoria provocaba que algunos flujos de trabajo no se ejecutaran ([#7692](https://github.com/nocobase/nocobase/pull/7692)) por @mytharcher
  - Corregir el valor del estado de ejecución al crear con diferido ([#7721](https://github.com/nocobase/nocobase/pull/7721)) por @mytharcher
  - Corregir el problema por el cual, después de eliminar un nodo que inicia una ramificación, la clave del primer nodo retenido dentro de la rama se cambiaba incorrectamente a un nuevo valor ([#7665](https://github.com/nocobase/nocobase/pull/7665)) por @mytharcher
- **[Control de acceso]** Corregir el orden de los middlewares de `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) por @2013xile
- **[Gestor de archivos]** Corregir el problema por el cual el archivo `.msg` no se podía subir correctamente ([#7662](https://github.com/nocobase/nocobase/pull/7662)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Corregir el problema por el cual las tareas manuales desaparecían después de deshabilitar el flujo de trabajo ([#7687](https://github.com/nocobase/nocobase/pull/7687)) por @mytharcher
- **[Campo de colección: divisiones administrativas de China]** La importación de datos falla cuando la ciudad y el área tienen el mismo nombre ([#7673](https://github.com/nocobase/nocobase/pull/7673)) por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema de traducción del texto de estado en las notificaciones de finalización de aprobación, utilizando el idioma predeterminado del sistema para la traducción cuando el usuario no ha establecido una preferencia de idioma por @mytharcher
  - Corregir locales por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.34](https://www.nocobase.com/en/blog/v2.0.0-alpha.34)

*Fecha de lanzamiento: 2025-11-05*

### 🚀 Mejoras

- **[base de datos]** Añadir la opción `multipleStatements` a la instancia de conexión MariaDB para soportar la invocación de múltiples sentencias en una sola consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher

### 🐛 Corrección de errores

- **[motor de flujo]** Se corrigió un problema por el cual los botones de acción en el bloque de tabla no se actualizaban correctamente después de cambiar de página, asegurando que su funcionalidad coincida con los datos de la página actual. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) por @gchust
- **[cliente]**

  - Corregir "Se excedió el tamaño máximo de la pila de llamadas" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe
  - corregir que los puntos suspensivos del campo de título de campo de asociación no se aplican ([#7778](https://github.com/nocobase/nocobase/pull/7778)) por @katherinehhh
  - la regla de vinculación de la acción de actualizar registro no funciona ([#7774](https://github.com/nocobase/nocobase/pull/7774)) por @gchust
- **[base de datos]** Detección incorrecta del campo de índice cuando los nombres de campo usan el estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile
- **[Móvil (obsoleto)]** Corregir el problema por el cual la ventana emergente del valor predeterminado del campo de fecha en móvil no puede seleccionar una fecha ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe

### [v2.0.0-alpha.33](https://www.nocobase.com/en/blog/v2.0.0-alpha.33)

*Fecha de lanzamiento: 2025-11-05*

### 🎉 Nuevas funciones

- **[cliente]** añadir soporte de paginación a la subtabla ([#7754](https://github.com/nocobase/nocobase/pull/7754)) por @katherinehhh

### 🚀 Mejoras

- **[indefinido]** actualizar la documentación en inglés del plugin de gráficos ([#7748](https://github.com/nocobase/nocobase/pull/7748)) por @heziqiang
- **[telemetría]** Añadir métricas de telemetría para el número de sub-aplicaciones en línea, etc ([#7743](https://github.com/nocobase/nocobase/pull/7743)) por @2013xile
- **[Flujo de trabajo]** Soporte para que el bloque de datos en el flujo de trabajo utilice el menú de configuración de detalles consolidados ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher
- **[Gestor de múltiples aplicaciones (obsoleto)]** Habilitado el inicio asíncrono para sub-aplicaciones usando una cola ([#7749](https://github.com/nocobase/nocobase/pull/7749)) por @2013xile
- **[Visualización de datos]** añadir opciones de formato de tiempo para datos de gráficos ([#7763](https://github.com/nocobase/nocobase/pull/7763)) por @heziqiang
- **[Flujo de trabajo: Aprobación]** Añadir notificación para el asignado delegado y añadido por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió un problema por el cual las etiquetas de tipos enumerados en componentes relacionados con variables no se mostraban en el idioma correcto. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) por @gchust
  - Corregir indicador de campo obligatorio faltante después de establecer la validación del frontend ([#7760](https://github.com/nocobase/nocobase/pull/7760)) por @katherinehhh
  - corregir problema al limpiar la fecha sin zona horaria en el formulario de edición ([#7759](https://github.com/nocobase/nocobase/pull/7759)) por @katherinehhh
  - Corregir la validación de campos obligatorios para las reglas de vinculación ([#7756](https://github.com/nocobase/nocobase/pull/7756)) por @zhangzhonghe
  - resolver el problema de Fecha Inválida al eliminar una Fecha Especificada en el filtro... ([#7746](https://github.com/nocobase/nocobase/pull/7746)) por @katherinehhh
  - Corregir fallo de validación obligatoria para el campo Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) por @katherinehhh
  - Añadir configuración de alcance de datos para campos de relación en formularios de filtro ([#7761](https://github.com/nocobase/nocobase/pull/7761)) por @zhangzhonghe
  - corregir problema de formato de hora en campos de subtabla ([#7750](https://github.com/nocobase/nocobase/pull/7750)) por @katherinehhh
- **[motor de flujo]**

  - cuando el valor del filtro de campo se establece en falso, la solicitud con alcance de datos es incorrecta ([#7766](https://github.com/nocobase/nocobase/pull/7766)) por @gchust
  - no se puede resolver el valor del campo de asociación de la variable del objeto actual del subformulario ([#7751](https://github.com/nocobase/nocobase/pull/7751)) por @gchust
  - corrección: resolver el problema del parámetro de solicitud de página después de eliminar datos en la última página ([#7755](https://github.com/nocobase/nocobase/pull/7755)) por @katherinehhh
- **[servidor]** Aislar el canal Pub-Sub por nombre de aplicación ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher
- **[Bloque: GridCard]** corregir problema de duplicación de datos entre el bloque de lista y tarjeta de cuadrícula ([#7773](https://github.com/nocobase/nocobase/pull/7773)) por @katherinehhh
- **[Gestor de múltiples aplicaciones (obsoleto)]** Colección incorrecta para la métrica de estado de la sub-aplicación ([#7772](https://github.com/nocobase/nocobase/pull/7772)) por @2013xile
- **[Flujo de trabajo]**

  - Se resolvió un problema por el cual el despachador de flujo de trabajo en modo clúster no lograba identificar correctamente los estados inactivos, lo que podía provocar un consumo innecesario de eventos de cola antes de que el plugin estuviera listo ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher
  - Corregir un problema por el cual, en modo de división de servicios, la ejecución manual de un flujo de trabajo que contiene un nodo de interrupción se quedaba atascada en un estado pendiente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir error lanzado al duplicar el flujo de trabajo de aprobación por @mytharcher
  - Ya no se admite la creación de nodos de aprobación en ramas paralelas para evitar problemas causados por el estado del proceso por @mytharcher
- **[Gestor de correo electrónico]**

  - añadir registros de sincronización por @jiannx
  - añadir migración para índices por @jiannx

### [v2.0.0-alpha.31](https://www.nocobase.com/en/blog/v2.0.0-alpha.31)

*Fecha de lanzamiento: 2025-11-03*

### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Soporte para el modo de activación "Antes de guardar datos" por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** no se pueden cargar los campos de la variable del formulario actual ([#7745](https://github.com/nocobase/nocobase/pull/7745)) por @gchust
- **[Flujo de trabajo: Aprobación]** Corregir locales por @mytharcher

### [v2.0.0-alpha.30](https://www.nocobase.com/en/blog/v2.0.0-alpha.30)

*Fecha de lanzamiento: 2025-11-02*

### 🚀 Mejoras

- **[Flujo de trabajo: nodo de notificación]** Añadir opción `ignoreFail` para el nodo de notificación, que permite continuar el flujo de trabajo cuando falla el envío de la notificación ([#7736](https://github.com/nocobase/nocobase/pull/7736)) por @mytharcher

### [v2.0.0-alpha.29](https://www.nocobase.com/en/blog/v2.0.0-alpha.29)

*Fecha de lanzamiento: 2025-11-02*

### 🐛 Corrección de errores

- **[cliente]**

  - Se resolvió un problema por el cual la variable del campo de asociación en el formulario actual no podía identificarse correctamente, asegurando un procesamiento de datos preciso en los formularios. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) por @gchust
  - Se resolvió un problema por el cual asignar un array como valor o valor predeterminado a un campo "toOne" resultaba en un error. Esto asegura un manejo adecuado de los resultados de la resolución de variables, mejorando la estabilidad y precisión del sistema. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) por @gchust
- **[Control de acceso]** Corregir el orden de los middlewares de `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) por @2013xile

### [v2.0.0-alpha.28](https://www.nocobase.com/en/blog/v2.0.0-alpha.28)

*Fecha de lanzamiento: 2025-11-01*

### 🚀 Mejoras

- **[motor de flujo]** Se mejoró el mensaje de error mostrado cuando falla la copia del UID, proporcionando instrucciones más claras para resolver el problema. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) por @gchust

### 🐛 Corrección de errores

- **[motor de flujo]** los pasos del flujo de eventos no deben mostrarse en los menús de configuración ([#7723](https://github.com/nocobase/nocobase/pull/7723)) por @gchust
- **[cliente]** Se corrigió un problema por el cual los campos no filtrables se listaban incorrectamente en las opciones de filtro, asegurando que solo aparezcan los campos aplicables para la selección. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) por @gchust
- **[Flujo de trabajo]** Corregir el valor del estado de ejecución al crear con diferido ([#7721](https://github.com/nocobase/nocobase/pull/7721)) por @mytharcher
- **[Empleados AI]** Comportamiento de búsqueda web optimizado y sugerencias de usuario para Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) por @cgyrock
- **[Acción: Exportar registros]** resolver problema con la visualización de la lista de campos exportables en la acción de exportación ([#7714](https://github.com/nocobase/nocobase/pull/7714)) por @katherinehhh
- **[Acción: Importar registros]** resolver problema con la visualización de la lista de campos en Campos importables ([#7710](https://github.com/nocobase/nocobase/pull/7710)) por @katherinehhh
- **[Acción: Importar registros Pro]** resolver problema con la visualización de la lista de campos en Campos importables por @katherinehhh

### [v2.0.0-alpha.27](https://www.nocobase.com/en/blog/v2.0.0-alpha.27)

*Fecha de lanzamiento: 2025-10-31*

### 🎉 Nuevas funciones

- **[cliente]** Flujo de eventos: Se introdujeron nuevas acciones predefinidas para mejorar las opciones de personalización para el manejo de eventos, permitiendo a los usuarios optimizar los flujos de trabajo y mejorar la eficiencia ([#7672](https://github.com/nocobase/nocobase/pull/7672)) por @zhangzhonghe

### 🚀 Mejoras

- **[Empleados AI]** Mejorar la lógica de interacción del empleado AI y optimizar el flujo de configuración de tareas ([#7707](https://github.com/nocobase/nocobase/pull/7707)) por @cgyrock

### 🐛 Corrección de errores

- **[cliente]** resolver problema de UI al eliminar un campo de asociación en la colección ([#7706](https://github.com/nocobase/nocobase/pull/7706)) por @katherinehhh

### [v2.0.0-alpha.26](https://www.nocobase.com/en/blog/v2.0.0-alpha.26)

*Fecha de lanzamiento: 2025-10-30*

### 🚀 Mejoras

- **[indefinido]** actualizar el documento de visión general del gráfico ([#7702](https://github.com/nocobase/nocobase/pull/7702)) por @heziqiang
- **[cliente]** soporte para jsx en el editor de código JS ([#7699](https://github.com/nocobase/nocobase/pull/7699)) por @gchust
- **[Empleados AI]** El empleado AI puede consultar datos de forma autónoma basándose en los metadatos del bloque de tabla ([#7703](https://github.com/nocobase/nocobase/pull/7703)) por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir fallo de la regla de vinculación del bloque iframe dentro de un modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) por @katherinehhh
  - Corregir la configuración de la regla de vinculación del escaneo de código QR en el panel de acciones ([#7693](https://github.com/nocobase/nocobase/pull/7693)) por @katherinehhh
- **[base de datos]** Omitir la sincronización del valor predeterminado para columnas JSON de MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) por @2013xile
- **[Flujo de trabajo]** Corregir el problema por el cual, en modo de división de servicios, el manejo inadecuado de la cola de pendientes en memoria provocaba que algunos flujos de trabajo no se ejecutaran ([#7692](https://github.com/nocobase/nocobase/pull/7692)) por @mytharcher
