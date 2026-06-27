---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana incluyen: soporte para filtrar flujos de trabajo por más campos, adición de la variable de entorno para controlar los métodos de salida del registro de auditoría y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.9](https://www.nocobase.com/en/blog/v1.7.9)

*Fecha de lanzamiento: 2025-06-11*

#### 🐛 Corrección de errores

* **[cliente]** Corregir problemas de error en bloques ([#7048](https://github.com/nocobase/nocobase/pull/7048)) por @gchust

### [v1.7.8](https://www.nocobase.com/en/blog/v1.7.8)

*Fecha de lanzamiento: 2025-06-10*

#### 🎉 Nuevas funciones

- **[Registros de auditoría]** Añadir la variable de entorno `AUDIT_LOGGER_TRANSPORT` para controlar el método de salida del registro de auditoría por @2013xile

#### 🚀 Mejoras

- **[Calendario]** Soporte para configurar el día de inicio de la semana en el bloque de calendario ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh
- **[Campo de colección: Muchos a muchos (matriz)]** Errores relacionados con permisos al mostrar campos muchos a muchos (muchos) en tablas de datos. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh
  - Opciones de campo de selección que no funcionan en las reglas de enlace del formulario de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh
  - Las reglas de validación del formulario de filtro hacen que el botón de filtro sea ineficaz ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe
  - Corregir que los campos no se muestren en las plantillas de bloque debido a solicitudes API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe
- **[Acción: Importar registros]** Corregir fallo en la importación de tablas secundarias cuando están involucrados campos relacionales ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie
- **[Visualización de datos]** Los campos de grupo de casillas de verificación en los gráficos deben mostrar etiquetas en lugar de valores sin procesar ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile
- **[Flujo de trabajo]** Corregir error lanzado en la acción de ejecución manual cuando el disparador no está configurado correctamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Para evitar el error de campo indefinido por @mytharcher
  - Corregir error de API al actualizar la página de detalle por @mytharcher
- **[WeCom]** Añadir verificación de ruta de callback en el middleware de puerta de enlace por @2013xile

### [v1.7.6](https://www.nocobase.com/en/blog/v1.7.6)

*Fecha de lanzamiento: 2025-06-09*

#### 🚀 Mejoras

- **[cliente]** Prohibir mover un menú de grupo dentro de sí mismo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe

#### 🐛 Corrección de errores

- **[cliente]**

  - Se resolvió un problema donde el bloque no podía leer los datos de vista de fuentes de datos externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie
  - Corregir el problema de error de parámetros del bloque de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe
  - La variable de objeto actual no es válida en las reglas de enlace ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe
  - No se puede limpiar el indicador de campo obligatorio de la sub-tabla usando reglas de enlace ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe
- **[indefinido]** Eliminar dependencia de base de datos para possibleTypes, forzar configuración impulsada por API por @aaaaaajie
- **[Móvil]** Optimizar problemas de retraso en ventanas emergentes móviles ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe
- **[Gestor de fuentes de datos]** Eliminar dependencia de base de datos para possibleTypes, forzar configuración impulsada por API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie
- **[Acción: Importar registros]** Se corrigieron errores que ocurrían durante la edición por lotes al importar datos de tabla jerárquica XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie
- **[Flujo de trabajo]** Corregir error de UI cuando el flujo de trabajo no existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher
- **[Flujo de trabajo: JavaScript]** Corregir require para ruta relativa por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir error lanzado cuando se elimina el flujo de trabajo por @mytharcher
  - Recargar asociación de archivos desde la instantánea para evitar la caducidad de la URL por @mytharcher
  - Corregir variables de disparador por @mytharcher

### [v1.7.5](https://www.nocobase.com/en/blog/v1.7.5)

*Fecha de lanzamiento: 2025-06-07*

#### 🐛 Corrección de errores

- **[cliente]** Usar ámbito de variable independiente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
- **[base de datos]** fix: añadir campos de creador y actualizador faltantes en importación xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) por @aaaaaajie
- **[Flujo de trabajo]** Corregir evento de colección en modo de creación o actualización que no se dispara al crear sin campo cambiado ([#7015](https://github.com/nocobase/nocobase/pull/7015)) por @mytharcher
- **[Acción: Exportar registros Pro]** Corregir el error que ocurre al exportar archivos adjuntos con condiciones. por @aaaaaajie

### [v1.7.4](https://www.nocobase.com/en/blog/v1.7.4)

*Fecha de lanzamiento: 2025-06-07*

#### 🐛 Corrección de errores

- **[cliente]**

  - Los campos de asociación muestran sub-tabla y sub-formulario al pasar el ratón en modo de solo lectura ([#7002](https://github.com/nocobase/nocobase/pull/7002)) por @zhangzhonghe
  - Las reglas de enlace del bloque markdown no funcionan cuando se activan mediante una acción emergente ([#7007](https://github.com/nocobase/nocobase/pull/7007)) por @katherinehhh
- **[Localización]** Resolver error causado por textos vacíos ([#7010](https://github.com/nocobase/nocobase/pull/7010)) por @2013xile
- **[Gestor de tareas asíncronas]** Se corrigió el problema de ejecución múltiple durante la importación asíncrona ([#7006](https://github.com/nocobase/nocobase/pull/7006)) por @aaaaaajie
- **[Acción: Exportar registros Pro]** Se corrigió el problema de ejecución múltiple durante la importación asíncrona por @aaaaaajie
- **[Flujo de trabajo: Aprobación]** Corregir que la aprobación delegada no pueda continuar cuando es aprobada por otros por @mytharcher

### [v1.7.3](https://www.nocobase.com/en/blog/v1.7.3)

*Fecha de lanzamiento: 2025-06-06*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Soporte para filtrar más campos del flujo de trabajo ([#6995](https://github.com/nocobase/nocobase/pull/6995)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**
  - cambiar de página en la sub-tabla del bloque de detalle dentro de un modal activa la advertencia de cambios no guardados ([#7004](https://github.com/nocobase/nocobase/pull/7004)) por @katherinehhh
  - falta el título del campo al configurar una variable en el componente de asignación ([#7001](https://github.com/nocobase/nocobase/pull/7001)) por @katherinehhh
  - las reglas de enlace de estilo de campo no funcionan ([#7003](https://github.com/nocobase/nocobase/pull/7003)) por @katherinehhh

### [v1.7.2](https://www.nocobase.com/en/blog/v1.7.2)

*Fecha de lanzamiento: 2025-06-05*

#### 🚀 Mejoras

- **[Acción: Edición por lotes]** Usar `filterByTk` en lugar de `filter` en modo seleccionado ([#6994](https://github.com/nocobase/nocobase/pull/6994)) por @mytharcher
- **[Acción: Importar registros Pro]** Optimizar problemas de rendimiento al procesar archivos XLSX grandes (conjuntos de datos de muchas filas/columnas), evitando bloqueos o congelaciones del sistema. por @aaaaaajie

#### 🐛 Corrección de errores

- **[cliente]**

  - falta el título del campo en el componente assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) por @katherinehhh
  - El último elemento del menú no se puede seleccionar en la lista de mover menú ([#6997](https://github.com/nocobase/nocobase/pull/6997)) por @zhangzhonghe
- **[Flujo de trabajo]**

  - Corregir que el filtro no se actualiza al cambiar de pestañas de categorías ([#6989](https://github.com/nocobase/nocobase/pull/6989)) por @mytharcher
  - Corregir que las estadísticas del flujo de trabajo no se crean automáticamente ([#6993](https://github.com/nocobase/nocobase/pull/6993)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.5](https://www.nocobase.com/en/blog/v1.8.0-beta.5)

*Fecha de lanzamiento: 2025-06-07*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Soporte para filtrar más campos del flujo de trabajo ([#6995](https://github.com/nocobase/nocobase/pull/6995)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Las reglas de enlace del bloque markdown no funcionan cuando se activan mediante una acción emergente ([#7007](https://github.com/nocobase/nocobase/pull/7007)) por @katherinehhh
  - Los campos de asociación muestran sub-tabla y sub-formulario al pasar el ratón en modo de solo lectura ([#7002](https://github.com/nocobase/nocobase/pull/7002)) por @zhangzhonghe
  - las reglas de enlace de estilo de campo no funcionan ([#7003](https://github.com/nocobase/nocobase/pull/7003)) por @katherinehhh
  - falta el título del campo al configurar una variable en el componente de asignación ([#7001](https://github.com/nocobase/nocobase/pull/7001)) por @katherinehhh
  - cambiar de página en la sub-tabla del bloque de detalle dentro de un modal activa la advertencia de cambios no guardados ([#7004](https://github.com/nocobase/nocobase/pull/7004)) por @katherinehhh
- **[Gestor de tareas asíncronas]** Se corrigió el problema de ejecución múltiple durante la importación asíncrona ([#7006](https://github.com/nocobase/nocobase/pull/7006)) por @aaaaaajie
- **[Localización]** Resolver error causado por textos vacíos ([#7010](https://github.com/nocobase/nocobase/pull/7010)) por @2013xile
- **[Acción: Exportar registros Pro]** Se corrigió el problema de ejecución múltiple durante la importación asíncrona por @aaaaaajie
- **[Flujo de trabajo: Aprobación]** Corregir que la aprobación delegada no pueda continuar cuando es aprobada por otros por @mytharcher

### [v1.8.0-beta.4](https://www.nocobase.com/en/blog/v1.8.0-beta.4)

*Fecha de lanzamiento: 2025-06-05*

#### 🚀 Mejoras

- **[Acción: Edición por lotes]** Usar `filterByTk` en lugar de `filter` en modo seleccionado ([#6994](https://github.com/nocobase/nocobase/pull/6994)) por @mytharcher
- **[Acción: Importar registros Pro]** Optimizar problemas de rendimiento al procesar archivos XLSX grandes (conjuntos de datos de muchas filas/columnas), evitando bloqueos o congelaciones del sistema. por @aaaaaajie

#### 🐛 Corrección de errores

- **[cliente]**

  - falta el título del campo en el componente assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) por @katherinehhh
  - El último elemento del menú no se puede seleccionar en la lista de mover menú ([#6997](https://github.com/nocobase/nocobase/pull/6997)) por @zhangzhonghe
- **[Flujo de trabajo]**

  - Corregir que el filtro no se actualiza al cambiar de pestañas de categorías ([#6989](https://github.com/nocobase/nocobase/pull/6989)) por @mytharcher
  - Corregir que las estadísticas del flujo de trabajo no se crean automáticamente ([#6993](https://github.com/nocobase/nocobase/pull/6993)) por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.4](https://www.nocobase.com/en/blog/v1.8.0-alpha.4)

*Fecha de lanzamiento: 2025-06-07*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Soporte para filtrar más campos del flujo de trabajo ([#6995](https://github.com/nocobase/nocobase/pull/6995)) por @mytharcher
- **[Gestor de correo electrónico]** soporta el valor de envío predeterminado en ventanas emergentes, soporta búsqueda difusa de destinatarios y corrige problemas por @jiannx

#### 🐛 Corrección de errores

- **[base de datos]** fix: añadir campos de creador y actualizador faltantes en importación xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) por @aaaaaajie
- **[cliente]**

  - falta el título del campo al configurar una variable en el componente de asignación ([#7001](https://github.com/nocobase/nocobase/pull/7001)) por @katherinehhh
  - Los campos de asociación muestran sub-tabla y sub-formulario al pasar el ratón en modo de solo lectura ([#7002](https://github.com/nocobase/nocobase/pull/7002)) por @zhangzhonghe
  - Las reglas de enlace del bloque markdown no funcionan cuando se activan mediante una acción emergente ([#7007](https://github.com/nocobase/nocobase/pull/7007)) por @katherinehhh
  - cambiar de página en la sub-tabla del bloque de detalle dentro de un modal activa la advertencia de cambios no guardados ([#7004](https://github.com/nocobase/nocobase/pull/7004)) por @katherinehhh
  - las reglas de enlace de estilo de campo no funcionan ([#7003](https://github.com/nocobase/nocobase/pull/7003)) por @katherinehhh
- **[Gestor de tareas asíncronas]** Se corrigió el problema de ejecución múltiple durante la importación asíncrona ([#7006](https://github.com/nocobase/nocobase/pull/7006)) por @aaaaaajie
- **[Localización]** Resolver error causado por textos vacíos ([#7010](https://github.com/nocobase/nocobase/pull/7010)) por @2013xile
- **[Acción: Exportar registros Pro]** Se corrigió el problema de ejecución múltiple durante la importación asíncrona por @aaaaaajie
- **[Flujo de trabajo: Aprobación]** Corregir que la aprobación delegada no pueda continuar cuando es aprobada por otros por @mytharcher
- **[Gestor de correo electrónico]**

  - múltiples claves primarias para la tabla "mailmessagelabels_mailmessages" por @jiannx
  - que la ventana emergente de configuración no se muestre por @jiannx
  - búsqueda difusa de correo para hacer filtros únicos por @jiannx
  - la búsqueda difusa de destinatarios soporta campos asociados por @jiannx
  - añadir el campo "id" a mailmessagelabelsMailmessages por @jiannx

### [v1.8.0-alpha.3](https://www.nocobase.com/en/blog/v1.8.0-alpha.3)

*Fecha de lanzamiento: 2025-06-06*

#### 🚀 Mejoras

- **[Acción: Edición por lotes]** Usar `filterByTk` en lugar de `filter` en modo seleccionado ([#6994](https://github.com/nocobase/nocobase/pull/6994)) por @mytharcher
- **[Acción: Importar registros Pro]** Optimizar problemas de rendimiento al procesar archivos XLSX grandes (conjuntos de datos de muchas filas/columnas), evitando bloqueos o congelaciones del sistema. por @aaaaaajie

#### 🐛 Corrección de errores

- **[cliente]**

  - falta el título del campo en el componente assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) por @katherinehhh
  - El último elemento del menú no se puede seleccionar en la lista de mover menú ([#6997](https://github.com/nocobase/nocobase/pull/6997)) por @zhangzhonghe
  - El contenido se muestra incorrectamente en las páginas abiertas a través de enlaces emergentes ([#6990](https://github.com/nocobase/nocobase/pull/6990)) por @zhangzhonghe
- **[Flujo de trabajo]**

  - Corregir que el filtro no se actualiza al cambiar de pestañas de categorías ([#6989](https://github.com/nocobase/nocobase/pull/6989)) por @mytharcher
  - Corregir que las estadísticas del flujo de trabajo no se crean automáticamente ([#6993](https://github.com/nocobase/nocobase/pull/6993)) por @mytharcher
