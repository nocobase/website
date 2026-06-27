---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: Al crear una colección, se puede cambiar el tipo de campo de identificación preestablecido, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.27](https://www.nocobase.com/en/blog/v1.9.27)

*Fecha de lanzamiento: 2025-12-17*

### 🚀 Mejoras

- **[servidor]** Añadir tolerancia a fallos cuando faltan instancias de aplicación que causan errores al obtener mensajes de mantenimiento de la aplicación ([#8196](https://github.com/nocobase/nocobase/pull/8196)) por @2013xile
- **[Manejador de errores]** No exponer mensajes de error de base de datos sin procesar en errores de sintaxis SQL, para evitar revelar el tipo de base de datos ([#8195](https://github.com/nocobase/nocobase/pull/8195)) por @2013xile
- **[Flujo de trabajo]** Soporte para usar configuración heredada para crear uno nuevo en un flujo de trabajo duplicado ([#8165](https://github.com/nocobase/nocobase/pull/8165)) por @mytharcher

### 🐛 Corrección de errores

- **[Flujo de trabajo]** Corregir el problema donde solo un registro se muestra en la lista de registros para ejecutar manualmente ([#8187](https://github.com/nocobase/nocobase/pull/8187)) por @mytharcher
- **[Colección: Conectar a datos externos (FDW)]** Corregir errores de disparo al conectar con tablas que tienen nombres en mayúsculas por @2013xile
- **[Flujo de trabajo: Aprobación]** Corregir el problema donde el estado de registros de aprobación no relacionados se cambia incorrectamente a `UNPROCESSED` por la acción de aprobar por @mytharcher

### [v1.9.26](https://www.nocobase.com/en/blog/v1.9.26)

*Fecha de lanzamiento: 2025-12-16*

### 🚀 Mejoras

- **[acl]** Soporte para la API `acl.registerSnippet` para fusionar la configuración de fragmentos ([#8155](https://github.com/nocobase/nocobase/pull/8155)) por @mytharcher
- **[Control de acceso]** No permitir asignar el rol raíz a los usuarios ([#8180](https://github.com/nocobase/nocobase/pull/8180)) por @2013xile

### 🐛 Corrección de errores

- **[Configuración de licencia]**

  - corregir excepción de compilación ts de plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) por @jiannx
  - optimización de licencia y adición de información de aviso ([#7993](https://github.com/nocobase/nocobase/pull/7993)) por @jiannx
- **[Gestor de archivos]** Corregir el problema donde la vista previa de archivos `.txt` en OSS obtenía un charset incorrecto ([#8161](https://github.com/nocobase/nocobase/pull/8161)) por @mytharcher
- **[Acción: Importar registros]** Esperar sincrónicamente a que finalicen los eventos `afterCreate` activados por la importación. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) por @2013xile
- **[Colección: Conectar a datos externos (FDW)]** Corregir el problema donde falla la carga para tablas con nombres en mayúsculas por @2013xile
- **[Fuente de datos: SQL Server externo]** Corregir problemas donde las opciones `encrypt` y `trustServerCertificate` no están disponibles por @2013xile

### [v1.9.25](https://www.nocobase.com/en/blog/v1.9.25)

*Fecha de lanzamiento: 2025-12-12*

### 🚀 Mejoras

- **[Flujo de trabajo]**
  - Añadir lógica de tolerancia a fallos para datos faltantes en la preparación del procesador, para evitar la suspensión de la ejecución ([#8156](https://github.com/nocobase/nocobase/pull/8156)) por @mytharcher
  - Usar carga diferida para datos de asociación en el lienzo del flujo de trabajo para mejorar el rendimiento ([#8142](https://github.com/nocobase/nocobase/pull/8142)) por @mytharcher

### 🐛 Corrección de errores

- **[acl]** Corregir el problema donde la API `acl.can` devuelve `null` cuando el rol es `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Corregir el problema donde la lista de tareas pendientes manuales usa una API incorrecta ([#8144](https://github.com/nocobase/nocobase/pull/8144)) por @mytharcher
- **[Cifrado de solicitud HTTP]** Usar corchetes para el formato de array en el análisis qs por @chenos
- **[Flujo de trabajo: Aprobación]** Corregir el problema donde se lanza un error al cancelar una ejecución cuando su flujo de trabajo ha sido eliminado por @mytharcher
- **[Gestor de migraciones]** Corregir un problema donde los saltos de línea en los datos se perdían durante la migración. por @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.55](https://www.nocobase.com/en/blog/v2.0.0-alpha.55)

*Fecha de lanzamiento: 2025-12-17*

### 🚀 Mejoras

- **[servidor]** Añadir tolerancia a fallos cuando faltan instancias de aplicación que causan errores al obtener mensajes de mantenimiento de la aplicación ([#8196](https://github.com/nocobase/nocobase/pull/8196)) por @2013xile
- **[Bloque: Lista]** añadir botón de Enlace para los bloques de Tabla, Lista y Tarjeta de Cuadrícula ([#8194](https://github.com/nocobase/nocobase/pull/8194)) por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]** Corregir un problema donde seleccionar "No" para un filtro de casilla de verificación aún aplicaba el filtro "Sí". ([#8170](https://github.com/nocobase/nocobase/pull/8170)) por @gchust
- **[Gestor de migraciones]** Corregir la descripción de migración faltante y establecer la hora actual como predeterminada por @cgyrock

### [v2.0.0-alpha.54](https://www.nocobase.com/en/blog/v2.0.0-alpha.54)

*Fecha de lanzamiento: 2025-12-17*

### 🎉 Nuevas funciones

- **[cliente]** Al crear una colección, se puede cambiar el tipo de campo de id preestablecido ([#8129](https://github.com/nocobase/nocobase/pull/8129)) por @cgyrock

### 🚀 Mejoras

- **[cliente]**

  - cambiar el ancho de columna de la tabla para usar opciones seleccionables ([#8188](https://github.com/nocobase/nocobase/pull/8188)) por @katherinehhh
  - mejorar los estilos de recordPicker con maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) por @katherinehhh
  - optimizar las opciones de configuración (Bloques, Campos, Acciones) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) por @katherinehhh
- **[Manejador de errores]** No exponer mensajes de error de base de datos sin procesar en errores de sintaxis SQL, para evitar revelar el tipo de base de datos ([#8195](https://github.com/nocobase/nocobase/pull/8195)) por @2013xile
- **[Bloque: Mapa]** soportar puntos suspensivos de desbordamiento de texto para el campo de mapa en modo de visualización de texto ([#8189](https://github.com/nocobase/nocobase/pull/8189)) por @katherinehhh
- **[Flujo de trabajo]** Soporte para usar configuración heredada para crear uno nuevo en un flujo de trabajo duplicado ([#8165](https://github.com/nocobase/nocobase/pull/8165)) por @mytharcher
- **[Control de acceso]** No permitir asignar el rol raíz a los usuarios ([#8180](https://github.com/nocobase/nocobase/pull/8180)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]**

  - corregir que el botón de enviar no se muestra en el formulario de creación cuando el rol tiene permiso de creación ([#8190](https://github.com/nocobase/nocobase/pull/8190)) por @katherinehhh
  - evitar que los datos existentes de subtabla/subformulario se borren al enviar sin seleccionar ningún elemento ([#8172](https://github.com/nocobase/nocobase/pull/8172)) por @katherinehhh
  - evitar que la configuración del ámbito de datos aparezca en la configuración del formulario de creación ([#8176](https://github.com/nocobase/nocobase/pull/8176)) por @katherinehhh
  - Error al guardar el flujo de eventos de la pestaña ([#8168](https://github.com/nocobase/nocobase/pull/8168)) por @chenos
  - eliminar el espacio adicional después de ocultar la pestaña ([#8167](https://github.com/nocobase/nocobase/pull/8167)) por @chenos
  - corregir el filtrado incorrecto de opciones seleccionadas en el selector de registros de asociación ([#8151](https://github.com/nocobase/nocobase/pull/8151)) por @katherinehhh
  - Corregir el problema de renderizado del campo tableoid en el bloque de formulario ([#8177](https://github.com/nocobase/nocobase/pull/8177)) por @katherinehhh
- **[servidor]**

  - Actualizar license-kit a la última versión ([#8173](https://github.com/nocobase/nocobase/pull/8173)) por @jiannx
  - Soporte para campos Snowflake ID (53 bits) para fuentes de datos externas ([#8185](https://github.com/nocobase/nocobase/pull/8185)) por @2013xile
- **[Bloque: Mapa]** corregir el nivel de zoom del mapa incorrecto después del cambio de menú ([#8193](https://github.com/nocobase/nocobase/pull/8193)) por @katherinehhh
- **[Flujo de trabajo]** Corregir el problema donde solo un registro se muestra en la lista de registros para ejecutar manualmente ([#8187](https://github.com/nocobase/nocobase/pull/8187)) por @mytharcher
- **[Visualización de datos]** Resolver problema sobre el modo SQL al seleccionar fuente de datos externa; <br/>Resolver problema sobre el estado de carga del bloque de gráfico durante la obtención de datos; <br/> Resolver problema sobre la cancelación de configuración del bloque de gráfico vacío; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) por @heziqiang
- **[Empleados de IA]** Resolver problema sobre el salto de línea del mensaje de ia ([#8096](https://github.com/nocobase/nocobase/pull/8096)) por @heziqiang
- **[Configuración de licencia]**

  - corregir excepción de compilación ts de plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) por @jiannx
  - optimización de licencia y adición de información de aviso ([#7993](https://github.com/nocobase/nocobase/pull/7993)) por @jiannx
- **[Gestor de archivos]** Corregir el problema donde la vista previa de archivos `.txt` en OSS obtenía un charset incorrecto ([#8161](https://github.com/nocobase/nocobase/pull/8161)) por @mytharcher
- **[Fuente de datos: SQL Server externo]** Corregir problemas donde las opciones `encrypt` y `trustServerCertificate` no están disponibles por @2013xile
- **[Colección: Conectar a datos externos (FDW)]** Corregir el problema donde falla la carga para tablas con nombres en mayúsculas por @2013xile
- **[Flujo de trabajo: Aprobación]** Corregir el problema donde el estado de registros de aprobación no relacionados se cambia incorrectamente a `UNPROCESSED` por la acción de aprobar por @mytharcher

### [v2.0.0-alpha.53](https://www.nocobase.com/en/blog/v2.0.0-alpha.53)

*Fecha de lanzamiento: 2025-12-12*

### 🚀 Mejoras

- **[acl]** Soporte para la API `acl.registerSnippet` para fusionar la configuración de fragmentos ([#8155](https://github.com/nocobase/nocobase/pull/8155)) por @mytharcher
- **[cliente]** soportar formato de número para campos de porcentaje ([#8123](https://github.com/nocobase/nocobase/pull/8123)) por @katherinehhh
- **[motor-de-flujo]** soportar ocultar dinámicamente el menú de configuración de pasos ([#7924](https://github.com/nocobase/nocobase/pull/7924)) por @gchust
- **[Bloque: Tarjeta de Cuadrícula]** Optimizar los estilos del bloque de Tarjeta de Cuadrícula para un diseño más compacto ([#8152](https://github.com/nocobase/nocobase/pull/8152)) por @katherinehhh
- **[Empleados de IA]** Se habilitó la funcionalidad de edición para los avisos del sistema del asistente de IA integrado.<br/>Se optimizó el aviso del sistema para el asistente de IA Nathan.<br/>Se corrigió un problema con el servidor al leer archivos estáticos. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) por @heziqiang
- **[Flujo de trabajo]**

  - Añadir lógica de tolerancia a fallos para datos faltantes en la preparación del procesador, para evitar la suspensión de la ejecución ([#8156](https://github.com/nocobase/nocobase/pull/8156)) por @mytharcher
  - Usar carga diferida para datos de asociación en el lienzo del flujo de trabajo para mejorar el rendimiento ([#8142](https://github.com/nocobase/nocobase/pull/8142)) por @mytharcher
- **[Campo de colección: Markdown(Vditor)]** Deshabilitar el análisis de variables en el campo Markdown de forma predeterminada en el modo readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) por @katherinehhh

### 🐛 Corrección de errores

- **[motor-de-flujo]** Corregir la descarga incorrecta de archivos para adjuntos ([#8154](https://github.com/nocobase/nocobase/pull/8154)) por @katherinehhh
- **[cliente]**

  - corregir que el desplegable del campo de asociación se deshabilite cuando existe el campo de opciones ([#8153](https://github.com/nocobase/nocobase/pull/8153)) por @katherinehhh
  - Se corrigió un problema donde al ingresar texto chino se borraban las opciones existentes al usar operadores de selección múltiple en un campo de selección única en el bloque de formulario de filtro. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) por @gchust
  - Se corrigió un problema donde cambiar los campos de etiqueta causaba la pérdida de configuraciones de ventana emergente. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) por @gchust
- **[acl]** Corregir el problema donde la API `acl.can` devuelve `null` cuando el rol es `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) por @mytharcher
- **[base de datos]** `filterByTk` ahora soporta arrays al consultar colecciones con múltiples claves de destino de filtro ([#7986](https://github.com/nocobase/nocobase/pull/7986)) por @chenos
- **[Acción: Importar registros]** Esperar sincrónicamente a que finalicen los eventos `afterCreate` activados por la importación. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) por @2013xile
- **[Campo de colección: Secuencia]** Mejorar la robustez de plugin-field-sequence al manejar el comando de reparación ([#8139](https://github.com/nocobase/nocobase/pull/8139)) por @cgyrock
- **[Flujo de trabajo: Nodo manual]** Corregir el problema donde la lista de tareas pendientes manuales usa una API incorrecta ([#8144](https://github.com/nocobase/nocobase/pull/8144)) por @mytharcher
- **[Cifrado de solicitud HTTP]** Usar corchetes para el formato de array en el análisis qs por @chenos
- **[Flujo de trabajo: Aprobación]** Corregir el problema donde se lanza un error al cancelar una ejecución cuando su flujo de trabajo ha sido eliminado por @mytharcher
- **[Gestor de migraciones]** Corregir un problema donde los saltos de línea en los datos se perdían durante la migración. por @cgyrock
