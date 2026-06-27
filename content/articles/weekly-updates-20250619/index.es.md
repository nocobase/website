---
title: "Actualizaciones semanales de NocoBase: Soporte para llenar campos de entrada mediante escaneo de código QR"
description: "Las actualizaciones de esta semana incluyen: soporte para copiar contenido de campos de texto con un solo clic, configuración del intervalo de sincronización de correo electrónico y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.14](https://www.nocobase.com/en/blog/v1.7.14)

*Fecha de lanzamiento: 2025-06-18*

#### 🚀 Mejoras

- **[cliente]** Ocultar automáticamente la barra de acciones del bloque de tarjetas en cuadrícula cuando está vacía ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe
- **[Verificación]** Eliminar las opciones de verificador de la respuesta de la API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile

#### 🐛 Corrección de errores

- **[base de datos]** Soporte para actualizaciones de asociaciones en updateOrCreate y firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos
- **[cliente]**

  - Las variables de parámetros de consulta de URL no funcionan en el valor predeterminado del campo de formulario público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh
  - La condición de estilo en los campos de columna de subtabla no se aplica correctamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh
  - El filtrado a través de campos de colección de relación en formularios de filtro no es válido ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe
- **[Campo de colección: Muchos a muchos (array)]** Actualizar un campo muchos a muchos (array) lanza un error cuando el campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile
- **[Formularios públicos]** Formularios públicos: Corregir problema de acceso no autorizado al enviar el formulario ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe

### [v1.7.13](https://www.nocobase.com/en/blog/v1.7.13)

*Fecha de lanzamiento: 2025-06-17*

#### 🚀 Mejoras

- **[cliente]** El ancho del contenedor del logotipo se adapta al tipo de contenido (168px fijo para imágenes, ancho automático para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038
- **[Flujo de trabajo: Aprobación]** Añadir opción de campo adicional para la lista de reasignados por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - El mensaje de validación requerida en la subtabla persiste al cambiar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh
  - Se pierde el punto decimal después de cambiar el componente de importe de mask a inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh
  - Renderizado incorrecto de Markdown (Vditor) en subtabla ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh
- **[Campo de colección: Secuencia]** Corregir el cálculo de secuencia bigint basada en cadenas ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher
- **[Gestor de copias de seguridad]** Error de comando desconocido al restaurar copias de seguridad de MySQL en plataforma Windows por @gchust

### [v1.7.12](https://www.nocobase.com/en/blog/v1.7.12)

*Fecha de lanzamiento: 2025-06-16*

#### 🚀 Mejoras

- **[cliente]** Añadir opciones "vacío" y "no vacío" a las reglas de enlace del campo de casilla de verificación ([#7073](https://github.com/nocobase/nocobase/pull/7073)) por @katherinehhh

#### 🐛 Corrección de errores

- **[cliente]** Después de crear el campo de relación inversa, la opción "Crear campo de relación inversa en la tabla de datos de destino" en la configuración del campo de asociación no estaba marcada. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) por @aaaaaajie
- **[Gestor de fuentes de datos]** Los cambios de ámbito ahora surten efecto inmediatamente para todos los roles relacionados. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) por @aaaaaajie
- **[Control de acceso]** Corregido un problema donde la aplicación bloqueaba la entrada cuando no existía un rol predeterminado ([#7059](https://github.com/nocobase/nocobase/pull/7059)) por @aaaaaajie
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir variable de URL de redireccionamiento no analizada por @mytharcher

### [v1.7.11](https://www.nocobase.com/en/blog/v1.7.11)

*Fecha de lanzamiento: 2025-06-15*

#### 🎉 Nuevas funciones

- **[Copia de texto]** Soporte para copiar con un clic el contenido de campos de texto ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe

#### 🐛 Corrección de errores

- **[cliente]**

  - El selector de campo de asociación no limpia los datos seleccionados después del envío ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh
  - Corregir la sugerencia de tamaño de carga ([#7057](https://github.com/nocobase/nocobase/pull/7057)) por @mytharcher
- **[servidor]** No se pueden leer propiedades de undefined (leyendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos
- **[Flujo de trabajo: Nodo de bucle]** Corregir que la rama del bucle se ejecuta cuando la condición no se cumple ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir que las estadísticas de tareas pendientes no se actualizan cuando se cancela la ejecución por @mytharcher
  - Corregir variable de activación al filtrar por tipo por @mytharcher

### [v1.7.10](https://www.nocobase.com/en/blog/v1.7.10)

*Fecha de lanzamiento: 2025-06-12*

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir el problema donde las reglas de enlace causan un bucle infinito ([#7050](https://github.com/nocobase/nocobase/pull/7050)) por @zhangzhonghe
  - Corrección: usar encadenamiento opcional para rechazar solicitudes de forma segura en APIClient cuando el manejador puede ser undefined ([#7054](https://github.com/nocobase/nocobase/pull/7054)) por @sheldon66
  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh
- **[Visualización de datos]** Visualización incorrecta del campo de fecha "entre" en el filtro de gráficos ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh
- **[Documentación de la API]** Los plugins no oficiales de NocoBase no pueden mostrar la documentación de la API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt
- **[Acción: Importar registros]** Corregida la importación xlsx para restringir que los campos de área de texto acepten datos con formato no cadena ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.9](https://www.nocobase.com/en/blog/v1.8.0-beta.9)

*Fecha de lanzamiento: 2025-06-18*

#### 🚀 Mejoras

- **[cliente]**

  - Ocultar automáticamente la barra de acciones del bloque de tarjetas en cuadrícula cuando está vacía ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe
  - El ancho del contenedor del logotipo se adapta al tipo de contenido (168px fijo para imágenes, ancho automático para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038
- **[Verificación]** Eliminar las opciones de verificador de la respuesta de la API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile

#### 🐛 Corrección de errores

- **[cliente]**

  - El mensaje de validación requerida en la subtabla persiste al cambiar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh
  - La condición de estilo en los campos de columna de subtabla no se aplica correctamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh
  - Se pierde el punto decimal después de cambiar el componente de importe de mask a inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh
  - Las variables de parámetros de consulta de URL no funcionan en el valor predeterminado del campo de formulario público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh
  - El filtrado a través de campos de colección de relación en formularios de filtro no es válido ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe
  - Renderizado incorrecto de Markdown (Vditor) en subtabla ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh
- **[base de datos]** Soporte para actualizaciones de asociaciones en updateOrCreate y firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos
- **[Campo de colección: Muchos a muchos (array)]** Actualizar un campo muchos a muchos (array) lanza un error cuando el campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile
- **[Campo de colección: Secuencia]** Corregir el cálculo de secuencia bigint basada en cadenas ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher
- **[Formularios públicos]** Formularios públicos: Corregir problema de acceso no autorizado al enviar el formulario ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe

### [v1.8.0-beta.8](https://www.nocobase.com/en/blog/v1.8.0-beta.8)

*Fecha de lanzamiento: 2025-06-16*

#### 🚀 Mejoras

- **[cliente]** Añadir opciones "vacío" y "no vacío" a las reglas de enlace del campo de casilla de verificación ([#7073](https://github.com/nocobase/nocobase/pull/7073)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Añadir opción de campo adicional para la lista de reasignados por @mytharcher

#### 🐛 Corrección de errores

- **[Gestor de copias de seguridad]** Error de comando desconocido al restaurar copias de seguridad de MySQL en plataforma Windows por @gchust

### [v1.8.0-beta.7](https://www.nocobase.com/en/blog/v1.8.0-beta.7)

*Fecha de lanzamiento: 2025-06-15*

#### 🎉 Nuevas funciones

- **[Copia de texto]** Soporte para copiar con un clic el contenido de campos de texto ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe

#### 🐛 Corrección de errores

- **[servidor]** No se pueden leer propiedades de undefined (leyendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos
- **[cliente]**

  - El selector de campo de asociación no limpia los datos seleccionados después del envío ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh
  - Después de crear el campo de relación inversa, la opción "Crear campo de relación inversa en la tabla de datos de destino" en la configuración del campo de asociación no estaba marcada. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) por @aaaaaajie
- **[Control de acceso]** Corregido un problema donde la aplicación bloqueaba la entrada cuando no existía un rol predeterminado ([#7059](https://github.com/nocobase/nocobase/pull/7059)) por @aaaaaajie
- **[Flujo de trabajo: Nodo de bucle]** Corregir que la rama del bucle se ejecuta cuando la condición no se cumple ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher
- **[Gestor de fuentes de datos]** Los cambios de ámbito ahora surten efecto inmediatamente para todos los roles relacionados. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) por @aaaaaajie
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir variable de URL de redireccionamiento no analizada por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir variable de activación al filtrar por tipo por @mytharcher
  - Corregir que las estadísticas de tareas pendientes no se actualizan cuando se cancela la ejecución por @mytharcher

### [v1.8.0-beta.6](https://www.nocobase.com/en/blog/v1.8.0-beta.6)

*Fecha de lanzamiento: 2025-06-12*

#### 🎉 Nuevas funciones

- **[Registros de auditoría]** Añadir la variable de entorno `AUDIT_LOGGER_TRANSPORT` para controlar el método de salida del registro de auditoría por @2013xile

#### 🚀 Mejoras

- **[cliente]** Prohibir mover un menú de grupo dentro de sí mismo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe
- **[Calendario]** Soporte para configurar el día de inicio de la semana en el bloque de calendario ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh
- **[Campo de colección: Markdown(Vditor)]** Soporte para hacer clic en la imagen para ampliarla en el modo de vista previa de Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) por @katherinehhh
- **[Campo de colección: Muchos a muchos (array)]** Errores relacionados con permisos al mostrar campos muchos a muchos (array) en tablas de datos. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie
- **[Comentarios]** Soporte para paginación en el bloque de comentarios por @katherinehhh

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh
  - Corregir el problema donde las reglas de enlace causan un bucle infinito ([#7050](https://github.com/nocobase/nocobase/pull/7050)) por @zhangzhonghe
  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh
  - Corregir la sugerencia de tamaño de carga ([#7057](https://github.com/nocobase/nocobase/pull/7057)) por @mytharcher
  - Corrección: usar encadenamiento opcional para rechazar solicitudes de forma segura en APIClient cuando el manejador puede ser undefined ([#7054](https://github.com/nocobase/nocobase/pull/7054)) por @sheldon66
  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh
  - Corregir que los campos no se muestran en las plantillas de bloque debido a solicitudes API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe
  - Las opciones del campo de selección no funcionan en las reglas de enlace del formulario de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh
  - Las reglas de validación del formulario de filtro hacen que el botón de filtro sea ineficaz ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe
  - No se puede limpiar el indicador de campo requerido de la subtabla usando reglas de enlace ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe
  - Corregir el problema de error de parámetro del bloque de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe
  - Resuelto un problema donde el bloque no podía leer los datos de vista de fuentes de datos externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie
  - Usar ámbito de variable independiente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
  - La variable de objeto actual no es válida en las reglas de enlace ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe
- **[base de datos]** corrección: añadir campos de creador y actualizador faltantes en la importación xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) por @aaaaaajie
- **[undefined]** Eliminar dependencia de base de datos para possibleTypes, forzar configuración impulsada por API por @aaaaaajie
- **[Acción: Importar registros]**

  - Corregida la importación xlsx para restringir que los campos de área de texto acepten datos con formato no cadena ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie
  - Corregir fallo de importación de tabla hija cuando están involucrados campos relacionales ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie
  - Corregidos errores que ocurrían durante la edición por lotes al importar datos de tabla de árbol XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie
- **[Visualización de datos]**

  - Visualización incorrecta del campo de fecha "entre" en el filtro de gráficos ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh
  - Los campos de grupo de casillas de verificación en los gráficos deben mostrar etiquetas en lugar de valores sin procesar ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile
- **[Documentación de la API]** Los plugins no oficiales de NocoBase no pueden mostrar la documentación de la API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt
- **[Flujo de trabajo]**

  - Corregir error causado por `toJSON()` en el activador programado ([#7037](https://github.com/nocobase/nocobase/pull/7037)) por @mytharcher
  - Corregir error lanzado en la acción de ejecución manual cuando el activador no está configurado correctamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher
  - Corregir error de UI cuando el flujo de trabajo no existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher
  - Corregir que el evento de colección en modo crear o actualizar no se activa al crear sin campo cambiado ([#7015](https://github.com/nocobase/nocobase/pull/7015)) por @mytharcher
- **[Gestor de fuentes de datos]** Eliminar dependencia de base de datos para possibleTypes, forzar configuración impulsada por API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie
- **[Móvil]** Optimizar problemas de retraso en ventanas emergentes móviles ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe
- **[Acción: Exportar registros Pro]** Corregir el error que ocurre al exportar archivos adjuntos con condiciones. por @aaaaaajie
- **[Flujo de trabajo: JavaScript]** Corregir require para ruta relativa por @mytharcher
- **[Impresión de plantilla]** Corregir error de análisis de permisos y añadir comprobación de datos no encontrados. por @sheldon66
- **[Flujo de trabajo: Aprobación]**

  - Para evitar error de campo undefined por @mytharcher
  - Corregir error lanzado cuando se elimina el flujo de trabajo por @mytharcher
  - Corregir variables de activación por @mytharcher
  - Recargar asociación de archivos desde instantánea para evitar caducidad de URL por @mytharcher
  - Corregir error de API al actualizar la página de detalle por @mytharcher
- **[WeCom]** Añadir comprobación de ruta de callback en middleware de puerta de enlace por @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.8](https://www.nocobase.com/en/blog/v1.8.0-alpha.8)

*Fecha de lanzamiento: 2025-06-17*

#### 🎉 Nuevas funciones

- **[Copia de texto]** Soporte para copiar con un clic el contenido de campos de texto ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe
- **[Gestor de correo electrónico]** Soporte para eliminar correo electrónico por @jiannx

#### 🚀 Mejoras

- **[cliente]**

  - Añadir opciones "vacío" y "no vacío" a las reglas de enlace del campo de casilla de verificación ([#7073](https://github.com/nocobase/nocobase/pull/7073)) por @katherinehhh
  - El ancho del contenedor del logotipo se adapta al tipo de contenido (168px fijo para imágenes, ancho automático para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038
- **[Gestor de tareas asíncronas]** Mejorar el rendimiento de la creación de tareas durante la exportación ([#7078](https://github.com/nocobase/nocobase/pull/7078)) por @aaaaaajie
- **[Flujo de trabajo: Aprobación]** Añadir opción de campo adicional para la lista de reasignados por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Se pierde el punto decimal después de cambiar el componente de importe de mask a inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh
  - Renderizado incorrecto de Markdown (Vditor) en subtabla ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh
  - Después de crear el campo de relación inversa, la opción "Crear campo de relación inversa en la tabla de datos de destino" en la configuración del campo de asociación no estaba marcada. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) por @aaaaaajie
  - El selector de campo de asociación no limpia los datos seleccionados después del envío ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh
- **[servidor]** No se pueden leer propiedades de undefined (leyendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos
- **[Control de acceso]** Corregido un problema donde la aplicación bloqueaba la entrada cuando no existía un rol predeterminado ([#7059](https://github.com/nocobase/nocobase/pull/7059)) por @aaaaaajie
- **[Gestor de fuentes de datos]** Los cambios de ámbito ahora surten efecto inmediatamente para todos los roles relacionados. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) por @aaaaaajie
- **[Flujo de trabajo: Nodo de bucle]** Corregir que la rama del bucle se ejecuta cuando la condición no se cumple ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir variable de URL de redireccionamiento no analizada por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir que las estadísticas de tareas pendientes no se actualizan cuando se cancela la ejecución por @mytharcher
- **[Gestor de correo electrónico]** Fallo al eliminar correo electrónico por @jiannx
- **[Gestor de copias de seguridad]** Error de comando desconocido al restaurar copias de seguridad de MySQL en plataforma Windows por @gchust

### [v1.8.0-alpha.7](https://www.nocobase.com/en/blog/v1.8.0-alpha.7)

*Fecha de lanzamiento: 2025-06-13*

#### 🎉 Nuevas funciones

- **[Gestor de correo electrónico]** Soporte para configuración de intervalo de sincronización de correo electrónico por @jiannx

#### 🐛 Corrección de errores

- **[base de datos]** Hacer que el operador eq para campos de cadena sea compatible con el tipo numérico ([#7062](https://github.com/nocobase/nocobase/pull/7062)) por @chenos
- **[cliente]** Corregir la sugerencia de tamaño de carga ([#7057](https://github.com/nocobase/nocobase/pull/7057)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir variable de activación al filtrar por tipo por @mytharcher

### [v1.8.0-alpha.5](https://www.nocobase.com/en/blog/v1.8.0-alpha.5)

*Fecha de lanzamiento: 2025-06-12*

#### 🚀 Mejoras

- **[cliente]**

  - Soporte para rellenar campos de entrada mediante escaneo de código QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) por @katherinehhh
  - Soporte para localización del contenido del bloque Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) por @katherinehhh
  - Prohibir mover un menú de grupo dentro de sí mismo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe
- **[Campo de colección: Muchos a muchos (array)]** Errores relacionados con permisos al mostrar campos muchos a muchos (array) en tablas de datos. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie
- **[Calendario]** Soporte para configurar el día de inicio de la semana en el bloque de calendario ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh
- **[Campo de colección: Markdown(Vditor)]** Soporte para hacer clic en la imagen para ampliarla en el modo de vista previa de Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) por @katherinehhh

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh
  - Corregir que los campos no se muestran en las plantillas de bloque debido a solicitudes API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe
  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh
  - Las reglas de validación del formulario de filtro hacen que el botón de filtro sea ineficaz ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe
  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh
  - Las opciones del campo de selección no funcionan en las reglas de enlace del formulario de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh
  - No se puede limpiar el indicador de campo requerido de la subtabla usando reglas de enlace ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe
  - Corregir el problema de error de parámetro del bloque de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe
  - Corregir el problema donde los datos del usuario actual están vacíos ([#7016](https://github.com/nocobase/nocobase/pull/7016)) por @zhangzhonghe
  - La variable de objeto actual no es válida en las reglas de enlace ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe
  - Resuelto un problema donde el bloque no podía leer los datos de vista de fuentes de datos externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie
  - Usar ámbito de variable independiente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
- **[Visualización de datos]**

  - Visualización incorrecta del campo de fecha "entre" en el filtro de gráficos ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh
  - Los campos de grupo de casillas de verificación en los gráficos deben mostrar etiquetas en lugar de valores sin procesar ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile
- **[Acción: Importar registros]**

  - Corregida la importación xlsx para restringir que los campos de área de texto acepten datos con formato no cadena ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie
  - Corregir fallo de importación de tabla hija cuando están involucrados campos relacionales ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie
  - Corregidos errores que ocurrían durante la edición por lotes al importar datos de tabla de árbol XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie
- **[Documentación de la API]** Los plugins no oficiales de NocoBase no pueden mostrar la documentación de la API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt
- **[Flujo de trabajo]**

  - Corregir error causado por `toJSON()` en el activador programado ([#7037](https://github.com/nocobase/nocobase/pull/7037)) por @mytharcher
  - Corregir error lanzado en la acción de ejecución manual cuando el activador no está configurado correctamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher
  - Corregir error de UI cuando el flujo de trabajo no existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher
  - Corregir que el evento de colección en modo crear o actualizar no se activa al crear sin campo cambiado ([#7015](https://github.com/nocobase/nocobase/pull/7015)) por @mytharcher
- **[Móvil]** Optimizar problemas de retraso en ventanas emergentes móviles ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe
- **[Gestor de fuentes de datos]** Eliminar dependencia de base de datos para possibleTypes, forzar configuración impulsada por API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie
- **[Acción: Exportar registros Pro]** Corregir el error que ocurre al exportar archivos adjuntos con condiciones. por @aaaaaajie
