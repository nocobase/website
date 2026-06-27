---
title: "Actualizaciones Semanales｜Soporte para Altura de Bloque Configurable"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 6 al 12 de febrero de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.46](https://www.nocobase.com/en/blog/v1.9.46)

*Fecha de lanzamiento: 2026-02-11*

### 🐛 Corrección de errores

- **[cliente]** Corregir que las opciones del componente de campo no se actualizan en tiempo real cuando el campo de asociación cambia de patrón ([#8611](https://github.com/nocobase/nocobase/pull/8611)) por @katherinehhh
- **[Visualización de datos: ECharts]** Corregir error ortográfico en ECharts por @heziqiang
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema de valores faltantes en la ventana emergente de detalle de "Mi solicitud" por @mytharcher
  - Corregir error lanzado al ejecutar en modo antes de guardar por @mytharcher

### [v1.9.45](https://www.nocobase.com/en/blog/v1.9.45)

*Fecha de lanzamiento: 2026-02-09*

### 🐛 Corrección de errores

- **[Componente de campo: máscara]** Corregir un problema por el cual la ventana emergente de configuración del campo de máscara no podía cargar correctamente todos los roles de usuario. por @gchust
- **[Flujo de trabajo: Aprobación]** Corregir id incorrecto para cargar el registro de detalle por @mytharcher

### [v1.9.44](https://www.nocobase.com/en/blog/v1.9.44)

*Fecha de lanzamiento: 2026-02-08*

### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Añadir control ACL para las API de aprobación por @mytharcher

### [v1.9.43](https://www.nocobase.com/en/blog/v1.9.43)

*Fecha de lanzamiento: 2026-02-06*

### 🎉 Nuevas funciones

- **[Autenticación: DingTalk]** Permite vincular usuario con `unionId` por @2013xile

### 🚀 Mejoras

- **[Campo de colección: Markdown(Vditor)]** Se añadió una opción de configuración para establecer el modo de edición predeterminado en la configuración del componente. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) por @Cyx649312038

### 🐛 Corrección de errores

- **[Acción: Importar registros]** Corregir la vulnerabilidad de la acción de importación ([#8544](https://github.com/nocobase/nocobase/pull/8544)) por @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.23](https://www.nocobase.com/en/blog/v2.0.0-beta.23)

*Fecha de lanzamiento: 2026-02-12*

### 🎉 Nuevas funciones

- **[Bloque: GridCard]** soportar altura de bloque configurable ([#8583](https://github.com/nocobase/nocobase/pull/8583)) por @katherinehhh
- **[Acción: Edición por lotes]** edición masiva 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) por @jiannx

### 🚀 Mejoras

- **[cliente]**

  - La tabla 2.0 soporta ordenación por arrastrar y soltar ([#8540](https://github.com/nocobase/nocobase/pull/8540)) por @jiannx
  - Mover la asignación de campos y la configuración de valores predeterminados a la configuración a nivel de formulario. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) por @chenos
- **[Localización]** crear automáticamente claves i18n faltantes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) por @jiannx

### 🐛 Corrección de errores

- **[cliente]**

  - corregir datos filtrados incorrectos en el desplegable de asociación cuando el campo de título es una clave foránea ([#8619](https://github.com/nocobase/nocobase/pull/8619)) por @katherinehhh
  - Corregir problema donde el campo de archivo adjunto de asociación borrado no se guarda después de enviar en el formulario de edición ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh
  - Corregir que las opciones del componente de campo no se actualizan en tiempo real cuando el campo de asociación cambia de patrón ([#8611](https://github.com/nocobase/nocobase/pull/8611)) por @katherinehhh
  - Corregir un problema donde las columnas de la tabla no se volvían a renderizar después de hacer clic en Ejecutar en el editor de columnas JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) por @gchust
  - corregir la imposibilidad de restaurar los datos seleccionados en el componente de campo selector de registros después de editar ([#8610](https://github.com/nocobase/nocobase/pull/8610)) por @katherinehhh
- **[Gestor de archivos]** corregir problema donde el componente de campo de archivo aún puede abrir el diálogo del selector cuando está deshabilitado ([#8617](https://github.com/nocobase/nocobase/pull/8617)) por @katherinehhh
- **[Visualización de datos: ECharts]** Corregir error ortográfico en ECharts por @heziqiang
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema de valores faltantes en la ventana emergente de detalle de "Mi solicitud" por @mytharcher
  - Corregir error lanzado al ejecutar en modo antes de guardar por @mytharcher

### [v2.0.0-beta.22](https://www.nocobase.com/en/blog/v2.0.0-beta.22)

*Fecha de lanzamiento: 2026-02-10*

### 🎉 Nuevas funciones

- **[cliente]** Soporte para configurar títulos de pestañas del navegador para páginas, pestañas de página, ventanas emergentes y pestañas de ventanas emergentes ([#8590](https://github.com/nocobase/nocobase/pull/8590)) por @zhangzhonghe
- **[Flujo de trabajo: Aprobación]** Añadir control ACL para las API de aprobación por @mytharcher

### 🚀 Mejoras

- **[cliente]** Usar modelos de campo independientes para campos de asociación en formularios de filtro ([#8511](https://github.com/nocobase/nocobase/pull/8511)) por @zhangzhonghe
- **[Flujo de trabajo: CC]** Refactorizar el plugin de CC de flujo de trabajo para soportar la arquitectura FlowModel con compatibilidad v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[motor-de-flujo]**

  - Corregir un problema donde los objetos Blob no podían crearse en el bloque JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) por @gchust
  - Corregir contexto de ejecución incorrecto para "ctx.sql" en Modelos JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) por @gchust
- **[Componente de campo: máscara]** Corregir un problema por el cual la ventana emergente de configuración del campo de máscara no podía cargar correctamente todos los roles de usuario. por @gchust
- **[Flujo de trabajo: Aprobación]** Corregir id incorrecto para cargar el registro de detalle por @mytharcher

### [v2.0.0-beta.21](https://www.nocobase.com/en/blog/v2.0.0-beta.21)

*Fecha de lanzamiento: 2026-02-07*

### 🎉 Nuevas funciones

- **[cliente]** soportar la configuración de campos del campo de colección de asociación en el bloque de formulario ([#8578](https://github.com/nocobase/nocobase/pull/8578)) por @katherinehhh
- **[Acción: Duplicar registro]** añadir acción de duplicado 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) por @katherinehhh
- **[Flujo de trabajo]** Soporte para copiar, pegar y mover nodos mediante arrastrar y soltar en el lienzo del flujo de trabajo ([#8559](https://github.com/nocobase/nocobase/pull/8559)) por @mytharcher

### 🚀 Mejoras

- **[motor-de-flujo]** Mejorar el autocompletado y las sugerencias de código en el editor de código del modelo JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) por @gchust
- **[Flujo de trabajo: Aprobación]** Eliminar el soporte para campos JS por @zhangzhonghe

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir un posible error de renderizado "leer oculto" en modo no configuración. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) por @gchust
  - corregir que la sub-tabla (edición en línea) todavía muestra columnas en modo edición después de cambiar a vista de solo lectura en el formulario de edición ([#8589](https://github.com/nocobase/nocobase/pull/8589)) por @katherinehhh
- **[Motor de flujo]** Corregir un problema donde el uso de una plantilla de bloque en modo "Duplicar" causaba que la ventana emergente apareciera vacía al hacer clic en algún botón de acción del bloque. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) por @gchust
- **[Bloque: Mapa]** Corregir opciones de configuración duplicadas de 'Guardar como plantilla' en el bloque de mapa ([#8584](https://github.com/nocobase/nocobase/pull/8584)) por @katherinehhh

### [v2.0.0-beta.20](https://www.nocobase.com/en/blog/v2.0.0-beta.20)

*Fecha de lanzamiento: 2026-02-05*

### 🎉 Nuevas funciones

- **[cliente]** Soporte para configurar el modo de carga de datos ([#8551](https://github.com/nocobase/nocobase/pull/8551)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[motor-de-flujo]** corregir que la acción de eliminar columna no funciona en la edición de sub-tabla emergente cuando createModelOptions está configurado ([#8576](https://github.com/nocobase/nocobase/pull/8576)) por @katherinehhh
- **[Gestor de correo electrónico]**

  - añadir filtros a la gestión por @jiannx
  - Corregido el problema de correos electrónicos en la misma bandeja de entrada entre múltiples usuarios y rendimiento optimizado por @jiannx
  - corregir cadena de conversación por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.71](https://www.nocobase.com/en/blog/v2.0.0-alpha.71)

*Fecha de lanzamiento: 2026-02-10*

### 🎉 Nuevas funciones

- **[cliente]**

  - Soporte para configurar títulos de pestañas del navegador para páginas, pestañas de página, ventanas emergentes y pestañas de ventanas emergentes ([#8590](https://github.com/nocobase/nocobase/pull/8590)) por @zhangzhonghe
  - soportar la configuración de campos del campo de colección de asociación en el bloque de formulario ([#8578](https://github.com/nocobase/nocobase/pull/8578)) por @katherinehhh
- **[Bloque: GridCard]** soportar altura de bloque configurable ([#8583](https://github.com/nocobase/nocobase/pull/8583)) por @katherinehhh
- **[Acción: Duplicar registro]** añadir acción de duplicado 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Añadir control ACL para las API de aprobación por @mytharcher

### 🚀 Mejoras

- **[cliente]** Usar modelos de campo independientes para campos de asociación en formularios de filtro ([#8511](https://github.com/nocobase/nocobase/pull/8511)) por @zhangzhonghe
- **[Flujo de trabajo: CC]** Refactorizar el plugin de CC de flujo de trabajo para soportar la arquitectura FlowModel con compatibilidad v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[motor-de-flujo]**

  - Corregir contexto de ejecución incorrecto para "ctx.sql" en Modelos JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) por @gchust
  - Corregir un problema donde los objetos Blob no podían crearse en el bloque JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) por @gchust
- **[cliente]**

  - Corregir un problema donde las columnas de la tabla no se volvían a renderizar después de hacer clic en Ejecutar en el editor de columnas JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) por @gchust
  - Corregir un posible error de renderizado "leer oculto" en modo no configuración. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) por @gchust
  - corregir que la sub-tabla (edición en línea) todavía muestra columnas en modo edición después de cambiar a vista de solo lectura en el formulario de edición ([#8589](https://github.com/nocobase/nocobase/pull/8589)) por @katherinehhh
- **[Motor de flujo]** Corregir un problema donde el uso de una plantilla de bloque en modo "Duplicar" causaba que la ventana emergente apareciera vacía al hacer clic en algún botón de acción del bloque. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) por @gchust
- **[Componente de campo: máscara]** Corregir un problema por el cual la ventana emergente de configuración del campo de máscara no podía cargar correctamente todos los roles de usuario. por @gchust
- **[Flujo de trabajo: Aprobación]** Corregir id incorrecto para cargar el registro de detalle por @mytharcher

### [v2.0.0-alpha.70](https://www.nocobase.com/en/blog/v2.0.0-alpha.70)

*Fecha de lanzamiento: 2026-02-06*

### 🎉 Nuevas funciones

- **[Flujo de trabajo]** Soporte para copiar, pegar y mover nodos mediante arrastrar y soltar en el lienzo del flujo de trabajo ([#8559](https://github.com/nocobase/nocobase/pull/8559)) por @mytharcher

### 🚀 Mejoras

- **[Flujo de trabajo: Aprobación]** Eliminar el soporte para campos JS por @zhangzhonghe

### 🐛 Corrección de errores

- **[Bloque: Mapa]** Corregir opciones de configuración duplicadas de 'Guardar como plantilla' en el bloque de mapa ([#8584](https://github.com/nocobase/nocobase/pull/8584)) por @katherinehhh

### [v2.0.0-alpha.69](https://www.nocobase.com/en/blog/v2.0.0-alpha.69)

*Fecha de lanzamiento: 2026-02-05*

### 🎉 Nuevas funciones

- **[cliente]** Soporte para configurar el modo de carga de datos ([#8551](https://github.com/nocobase/nocobase/pull/8551)) por @zhangzhonghe
- **[motor-de-flujo]** soportar env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) por @chenos
- **[Autenticación: DingTalk]** Permite vincular usuario con `unionId` por @2013xile

### 🚀 Mejoras

- **[motor-de-flujo]** Mejorar el autocompletado y las sugerencias de código en el editor de código del modelo JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) por @gchust
- **[cliente]**

  - ajustar la configuración del ancho de columna a selección desplegable en sub-tabla editable en línea ([#8561](https://github.com/nocobase/nocobase/pull/8561)) por @katherinehhh
  - Soporte para deshabilitar parámetros de añadido predeterminados redundantes para `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile
- **[acl]** acl añadir método generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) por @jiannx
- **[Campo de colección: Markdown(Vditor)]** Se añadió una opción de configuración para establecer el modo de edición predeterminado en la configuración del componente. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) por @Cyx649312038
- **[Flujo de trabajo]** Cambiar la ruta de las subpáginas del flujo de trabajo, para que todas las páginas de flujo de trabajo estén bajo el prefijo `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) por @mytharcher
- **[IA: Base de conocimiento]** Optimizada la salida de compilación para reducir el tamaño del paquete de plugin-ai-knowledge-base. por @cgyrock
- **[Multi-espacio]** control de permisos multi-espacio accede a acl por @jiannx
- **[Autenticación: DingTalk]** Usar `userid` como clave predeterminada para la asociación de usuarios, manteniendo la compatibilidad con autenticadores existentes que dependen del móvil por @2013xile

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir que se requiere actualizar la página para añadir un registro hijo después de habilitar la tabla de árbol ([#8574](https://github.com/nocobase/nocobase/pull/8574)) por @katherinehhh
  - Corregir problemas de espacio vacío en el diseño de cuadrícula ([#8535](https://github.com/nocobase/nocobase/pull/8535)) por @zhangzhonghe
  - Corregir que el ancho de columna no se actualiza en sub-tabla (edición en línea); la entrada de texto multilínea no se redimensiona con el ancho de columna ([#8573](https://github.com/nocobase/nocobase/pull/8573)) por @katherinehhh
  - Corregir un problema donde el uso de "Creación rápida" del selector de registros de asociación en el formulario de edición sobrescribía los datos existentes del formulario. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) por @gchust
  - corrección: ocultar "Habilitar tabla de árbol" y "Expandir todas las filas por defecto" para colecciones no arbóreas ([#8566](https://github.com/nocobase/nocobase/pull/8566)) por @katherinehhh
  - Corregir un problema donde el menú "Formulario (Añadir nuevo)" se mostraba incorrectamente en la ventana emergente de la acción "Crear nuevo". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) por @gchust
  - corregir que el campo nanoid no regenera el valor predeterminado después del envío de creación ([#8538](https://github.com/nocobase/nocobase/pull/8538)) por @katherinehhh
  - Corregido un problema donde el flujo de eventos fallaba al aplicar al actualizar bloques de destino a través de una ventana emergente. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) por @gchust
  - Corregir problemas conocidos relacionados con el filtrado ([#8514](https://github.com/nocobase/nocobase/pull/8514)) por @zhangzhonghe
  - Corregido un problema que causaba que el bloque de datos se actualizara repetidamente después de enviar un formulario. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) por @gchust
  - Corregir problema donde los datos de la página se actualizan incorrectamente después de abrir y cerrar la ventana emergente por primera vez. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) por @gchust
  - Corregido un problema que impedía usar variables de formulario para asignar valores en reglas de enlace para campos de subformulario de varios a muchos de múltiples niveles. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) por @gchust
  - corregir visualización incorrecta al establecer valores predeterminados para el modelo de campo en cascada ([#8537](https://github.com/nocobase/nocobase/pull/8537)) por @katherinehhh
  - Corregir un problema donde los datos no se actualizaban después de cambios a través de ventanas emergentes de múltiples niveles y a través de bloques. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) por @gchust
- **[motor-de-flujo]**

  - corregir que la acción de eliminar columna no funciona en la edición de sub-tabla emergente cuando createModelOptions está configurado ([#8576](https://github.com/nocobase/nocobase/pull/8576)) por @katherinehhh
  - Corregir un problema donde enviar el formulario después de cambiar de página no actualiza la página. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) por @gchust
  - Corregir un problema donde algunas bibliotecas de terceros no podían importarse correctamente en bloques JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) por @gchust
  - Corregida la carga incorrecta de algunas bibliotecas ESM en runjs debido a una clasificación errónea como módulos AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) por @gchust
  - corregir problema de FilterByTK cuando filterTargetKey es un array de un solo elemento en fuente de datos externa ([#8522](https://github.com/nocobase/nocobase/pull/8522)) por @katherinehhh
  - corregir que la acción de eliminar columna no funciona en la edición de sub-tabla emergente cuando createModelOptions está configurado ([#8560](https://github.com/nocobase/nocobase/pull/8560)) por @katherinehhh
- **[Campo de colección: Adjunto (URL)]** Corregir que la configuración de visualización del nombre de archivo del campo de URL de adjunto no funciona en el formulario de edición ([#8571](https://github.com/nocobase/nocobase/pull/8571)) por @katherinehhh
- **[Empleados IA]**

  - Corregir un problema donde el nodo LLM falla al enviar mensajes ([#8569](https://github.com/nocobase/nocobase/pull/8569)) por @2013xile
  - Corregir el problema donde el sistema no puede iniciar después de la compilación ([#8523](https://github.com/nocobase/nocobase/pull/8523)) por @cgyrock
  - Corregir la excepción que ocurre cuando las herramientas se llaman automáticamente durante el modelado de datos de IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) por @cgyrock
- **[Plantillas de UI]** Corregir error al reabrir y enviar una plantilla de ventana emergente guardada para el formulario "Añadir nuevo" del campo de asociación. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) por @gchust
- **[Acción: Importar registros]** Corregir la vulnerabilidad de la acción de importación ([#8544](https://github.com/nocobase/nocobase/pull/8544)) por @mytharcher
- **[Gestor de archivos]** Asegurar la ruta del archivo para el almacenamiento local, para evitar que la ruta de acceso salga de la raíz del documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher
- **[Flujo de trabajo]** Añadir tolerancia a fallos para el componente de selección de registro de colección, para evitar errores cuando se elimina la colección ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el problema donde los parámetros y la carga útil son incorrectos al activar un flujo de trabajo personalizado por @mytharcher
- **[Multi-espacio]**

  - eliminar el atributo read-pretty para el campo de espacio por @jiannx
  - añadir script de migración para eliminar x-ready-pretty en el campo de espacio por @jiannx
- **[IA: Base de conocimiento]** Corregir el problema donde el sistema no puede iniciar después de la compilación por @cgyrock
- **[Acción: Importar registros Pro]** Corregir números de conteo en el resultado de importación y traducción de mensajes por @mytharcher
- **[Flujo de trabajo: Subflujo]** Corregir la ruta del enlace del flujo de trabajo por @mytharcher
- **[Impresión de plantilla]** corregir problema de visualización de la lista de campos en la configuración de la acción de impresión de plantilla por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Corregir problema de rendimiento causado por el campo JSON en la carga de listas (MySQL) por @mytharcher
  - Añadir tolerancia a fallos en el flujo de trabajo eliminado, para evitar errores de carga en la lista de tareas por @mytharcher
  - Corregir error lanzado al añadir rol a usuario si el flujo de trabajo de audiencias está deshabilitado por @mytharcher
- **[Gestor de correo electrónico]** el cuerpo no se colapsa cuando se selecciona texto. corregir fallo al descargar archivo adjunto por @jiannx
- **[WeCom]** Corregir un problema donde los usuarios no pueden registrarse automáticamente cuando falta el móvil por @2013xile
