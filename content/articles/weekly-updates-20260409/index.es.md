---
title: "Actualizaciones semanales｜Añadir una herramienta de búsqueda web basada en LLM para empleados de IA"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 3 al 9 de abril de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones aún más. Ideal para usuarios de prueba que quieren experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.34](https://www.nocobase.com/en/blog/v2.0.34)

*Fecha de lanzamiento: 2026-04-09*

### 🎉 Nuevas funciones

- **[Gestor de migraciones]** soporte para comando de migración por @chenos

### [v2.0.33](https://www.nocobase.com/en/blog/v2.0.33)

*Fecha de lanzamiento: 2026-04-08*

### 🎉 Nuevas funciones

- **[Empleados IA]** Añadir una herramienta de búsqueda web basada en LLM para empleados IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió un problema donde aparecía un mensaje de confirmación de cambios no guardados incorrecto para la acción de edición masiva ([#9054](https://github.com/nocobase/nocobase/pull/9054)) por @gchust
  - Se corrigió un problema donde aparecía una ventana emergente de confirmación secundaria incorrecta al enviar el formulario después de crear un registro a través de una subtabla emergente. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) por @gchust
- **[gestor-de-fuentes-de-datos]** Se corrigió un problema donde algunos tipos de campo no se actualizaban correctamente después de sincronizar campos desde la base de datos ([#9046](https://github.com/nocobase/nocobase/pull/9046)) por @2013xile
- **[Empleados IA]** Corregir fallo en la carga de documentos de empleados IA bajo acceso de subruta con APP_PUBLIC_PATH configurado. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) por @cgyrock

### [v2.0.32](https://www.nocobase.com/en/blog/v2.0.32)

*Fecha de lanzamiento: 2026-04-04*

### 🚀 Mejoras

- **[indefinido]** Añadir tabla de contenidos al README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765

### 🐛 Corrección de errores

- **[cliente]**

  - el campo de relación del subformulario falló al guardar ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx
  - los subformularios de los campos no muestran datos ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx
  - Se corrigió el problema donde ctx.request no podía sobrescribir el encabezado Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust
- **[servidor]** Añadir verificación de servicio para evitar que el estado de la aplicación sea actualizado por una instancia que no está sirviendo ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher
- **[Empleados IA]**

  - Se corrigió el problema al usar modelos deepseek o minmax en dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock
  - Se corrigió el problema donde abortar el razonamiento de los empleados IA causaba que el servicio se bloqueara ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock
- **[Flujo de trabajo: nodo de solicitud HTTP]** Se sanearon los resultados del nodo de solicitud del flujo de trabajo para evitar exponer la configuración de la solicitud, se predeterminó que los nuevos nodos devuelvan solo datos de respuesta, y se agregó registro de depuración para solicitudes fallidas. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher
- **[Campo de colección: Orden]** corregir(campo-orden): evitar bloqueo cuando el atributo scopeKey es indefinido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765
- **[Bloque: GridCard]** Se corrigió el problema de que el botón no se actualiza cuando se refresca la tarjeta de cuadrícula ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx
- **[Flujo de trabajo: Aprobación]**

  - Añadir tolerancia a fallos al eliminar el flujo de trabajo, para evitar errores de carga en la lista de tareas por @mytharcher
  - Añadir tolerancia a fallos para cuando no hay `latestRound` por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.13](https://www.nocobase.com/en/blog/v2.1.0-beta.13)

*Fecha de lanzamiento: 2026-04-09*

### 🎉 Nuevas funciones

- **[Gestor de migraciones]** soporte para comando de migración por @chenos

### [v2.1.0-beta.12](https://www.nocobase.com/en/blog/v2.1.0-beta.12)

*Fecha de lanzamiento: 2026-04-08*

### 🎉 Nuevas funciones

- **[cliente]**

  - añadir variables js al flujo de eventos ([#8938](https://github.com/nocobase/nocobase/pull/8938)) por @jiannx
  - añadir acción de elemento JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) por @jiannx
- **[Empleados IA]** Añadir una herramienta de búsqueda web basada en LLM para empleados IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) por @cgyrock

### 🚀 Mejoras

- **[indefinido]**

  - Añadir tabla de contenidos al README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765
  - Reducción del ruido de registro durante el inicio del servidor silenciando los comandos de descompresión para LibreOffice y Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) por @Rishabh1925
- **[cliente]**

  - soporte para establecer estilos de campo a través de runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) por @jiannx
  - Optimizar el diseño horizontal de las acciones del formulario ([#8869](https://github.com/nocobase/nocobase/pull/8869)) por @jiannx
- **[Flujo de trabajo: JavaScript]** Añadir `isolated-vm` como motor de ejecución de JavaScript predeterminado para el nodo JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) por @mytharcher
  Referencia: [Nodo JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[Flujo de trabajo]**

  - Cambiar el tamaño del interruptor de activado a pequeño ([#9010](https://github.com/nocobase/nocobase/pull/9010)) por @mytharcher
  - Añadir variable para el parámetro de tamaño de página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher
- **[Empleados IA]** Optimizar indicaciones para deepseek al manejar tipos de archivo no soportados ([#9003](https://github.com/nocobase/nocobase/pull/9003)) por @cgyrock
- **[Acción: Solicitud personalizada]** añadir modelos de acción para solicitud personalizada ([#8890](https://github.com/nocobase/nocobase/pull/8890)) por @jiannx
- **[Campo de colección: divisiones administrativas de China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) por @jiannx
- **[Flujo de trabajo: Subflujo]** Añadir lógica defensiva para evitar que el flujo de trabajo se cuelgue cuando ocurre una excepción por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir problema de rendimiento causado por el campo JSON al cargar la lista de registros de aprobación por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió un problema donde aparecía un mensaje de confirmación de cambios no guardados incorrecto para la acción de edición masiva ([#9054](https://github.com/nocobase/nocobase/pull/9054)) por @gchust
  - Se corrigió un problema donde aparecía una ventana emergente de confirmación secundaria incorrecta al enviar el formulario después de crear un registro a través de una subtabla emergente. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) por @gchust
  - Se corrigió el problema donde ctx.request no podía sobrescribir el encabezado Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust
  - el campo de relación del subformulario falló al guardar ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx
  - los subformularios de los campos no muestran datos ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx
  - Se corrigió el problema donde la copia de los campos asociados en la tabla no se mostraba correctamente en el primer renderizado. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) por @jiannx
  - Se corrigió el mensaje de confirmación secundaria incorrecto al cerrar una ventana emergente multinivel después de modificar los datos del formulario. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) por @gchust
  - Corregir el problema donde un espacio en la expresión de variable causaba que la etiqueta no se mostrara ([#8988](https://github.com/nocobase/nocobase/pull/8988)) por @mytharcher
  - Se corrigió la excepción al añadir nodos hijos a la tabla de árbol en la ventana emergente ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx
- **[gestor-de-fuentes-de-datos]** Se corrigió un problema donde algunos tipos de campo no se actualizaban correctamente después de sincronizar campos desde la base de datos ([#9046](https://github.com/nocobase/nocobase/pull/9046)) por @2013xile
- **[servidor]**

  - Añadir verificación de servicio para evitar que el estado de la aplicación sea actualizado por una instancia que no está sirviendo ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher
  - Evitar manejar mensajes de sincronización después de que la aplicación se haya detenido ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher
  - Cambiar el momento de cierre de Pub-Sub a `beforeStop`, para evitar que se envíen o manejen mensajes después de que la base de datos se haya cerrado ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher
- **[motor-de-flujo]**

  - Corregir menús de configuración recortados en ventanas emergentes ([#9005](https://github.com/nocobase/nocobase/pull/9005)) por @gchust
  - Se corrigió un problema donde los elementos del menú no podían seleccionarse cuando el ancho del componente de la interfaz de usuario en el estado de configuración era demasiado pequeño. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) por @gchust
  - Añadir fragmentos js para configurar el elemento de formulario y el elemento de detalle ([#8974](https://github.com/nocobase/nocobase/pull/8974)) por @jiannx
  - Sincronizar el estado con la configuración del campo cuando se elimina un campo del formulario ([#8857](https://github.com/nocobase/nocobase/pull/8857)) por @jiannx
- **[base de datos]** Usar advertencia en lugar de error cuando alguno de los parámetros de appends es inválido ([#8923](https://github.com/nocobase/nocobase/pull/8923)) por @mytharcher
- **[resourcer]** Corregir un problema donde las fuentes de datos externas no se cargan correctamente. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) por @2013xile
- **[Empleados IA]**

  - Corregir fallo en la carga de documentos de empleados IA bajo acceso de subruta con APP_PUBLIC_PATH configurado. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) por @cgyrock
  - Se corrigió el problema al usar modelos deepseek o minmax en dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock
  - Se corrigió el problema donde abortar el razonamiento de los empleados IA causaba que el servicio se bloqueara ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock
  - Se corrigió el problema de comportamiento anormal de la búsqueda web al usar el LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) por @cgyrock
  - Añadir verificación de propiedad a la API de conversación de IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) por @cgyrock
  - Ajustar el espacio entre los componentes de la tarjeta de herramienta en la Conversación de IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) por @cgyrock
- **[Flujo de trabajo: nodo de solicitud HTTP]** Se sanearon los resultados del nodo de solicitud del flujo de trabajo para evitar exponer la configuración de la solicitud, se predeterminó que los nuevos nodos devuelvan solo datos de respuesta, y se agregó registro de depuración para solicitudes fallidas. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher
- **[Campo de colección: Orden]** corregir(campo-orden): evitar bloqueo cuando el atributo scopeKey es indefinido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765
- **[Bloque: GridCard]** Se corrigió el problema de que el botón no se actualiza cuando se refresca la tarjeta de cuadrícula ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx
- **[Notificación: Mensaje en la aplicación]** Corregir la lista blanca de acciones para las actualizaciones de mensajes en la aplicación para evitar actualizaciones no autorizadas por parte de no propietarios. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) por @mytharcher
- **[Flujo de trabajo: nodo SQL]** Corregir problema de seguridad en el nodo SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) por @mytharcher
- **[Visualización de datos]**

  - Al usar filtros basados en variables, los gráficos no logran resolver correctamente los valores de las variables en el renderizado inicial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) por @2013xile
  - se corrigieron las estadísticas de datos anormales del gráfico de rol raíz después de habilitar el plugin de espacio ([#8969](https://github.com/nocobase/nocobase/pull/8969)) por @jiannx
- **[Acción: Importar registros]** se corrigió el problema de fallo en la importación después de abrir plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) por @jiannx
- **[Flujo de trabajo: JavaScript]** Corregir problemas de seguridad ([#8967](https://github.com/nocobase/nocobase/pull/8967)) por @mytharcher
- **[Acción: Exportar registros]** Limitar la configuración de importación y exportación de campos relacionados de múltiples capas ([#8893](https://github.com/nocobase/nocobase/pull/8893)) por @jiannx
- **[Variables personalizadas]** omitir notificación de autenticación ([#8942](https://github.com/nocobase/nocobase/pull/8942)) por @chenos
- **[Localización]** evitar la solicitud localizationTexts:missing en caso de denegación de permiso ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos
- **[Autenticación]** corregir acl para soportar parámetros de filtrado de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx
- **[Motor de flujo]** Eliminar evento heredado copiado del repositorio uiSchema para evitar errores al activarse ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher
- **[Acción: Importar registros Pro]**

  - limitar la configuración de importación y exportación de campos relacionados de múltiples capas por @jiannx
  - Corregir el problema donde la opción "Activar flujo de trabajo" no funciona cuando no está marcada por @mytharcher
- **[Fuente de datos: Oracle externo]** Corregir un error que ocurre al cargar la fuente de datos externa de Oracle por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Corregir el límite de versión de migraciones heredadas para evitar errores al iniciar en la implementación de la última versión por @mytharcher
  - Añadir tolerancia a fallos al eliminar el flujo de trabajo, para evitar errores de carga en la lista de tareas por @mytharcher
  - Corregir problemas de traducción, selección de nodo y destino de retorno en el botón de retorno del formulario de aprobación v2 por @zhangzhonghe
  - Añadir tolerancia a fallos para cuando no hay `latestRound` por @mytharcher
- **[Gestor de correo electrónico]**

  - Se corrigió que la firma se sobrescribiera al usar plantillas por @jiannx
  - no se muestra ninguna confirmación de cierre después de que se envía el correo electrónico por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.14](https://www.nocobase.com/en/blog/v2.1.0-alpha.14)

*Fecha de lanzamiento: 2026-04-07*

### 🎉 Nuevas funciones

- **[Empleados IA]** Añadir la capacidad de invocar subagentes para empleados IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) por @cgyrock
- **[IA: Servidor MCP]** Proporciona una API de consulta de colección de datos genérica, invocable a través de MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) por @2013xile

### 🚀 Mejoras

- **[indefinido]**

  - Añadir tabla de contenidos al README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765
  - Reducción del ruido de registro durante el inicio del servidor silenciando los comandos de descompresión para LibreOffice y Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) por @Rishabh1925
- **[Motor de flujo]** Añadir nuevas APIs para la construcción de UI. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) por @gchust
- **[Flujo de trabajo]** Cambiar el tamaño del interruptor de activado a pequeño ([#9010](https://github.com/nocobase/nocobase/pull/9010)) por @mytharcher
- **[Empleados IA]** Optimizar indicaciones para deepseek al manejar tipos de archivo no soportados ([#9003](https://github.com/nocobase/nocobase/pull/9003)) por @cgyrock
- **[Acción: Solicitud personalizada]** añadir modelos de acción para solicitud personalizada ([#8890](https://github.com/nocobase/nocobase/pull/8890)) por @jiannx
- **[Flujo de trabajo: JavaScript]** Añadir `isolated-vm` como motor de ejecución de JavaScript predeterminado para el nodo JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) por @mytharcher
  Referencia: [Nodo JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Corrección de errores

- **[servidor]**

  - Añadir verificación de servicio para evitar que el estado de la aplicación sea actualizado por una instancia que no está sirviendo ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher
  - Soporte para obtener la aplicación de destino por nombre de host ([#8978](https://github.com/nocobase/nocobase/pull/8978)) por @2013xile
- **[cliente]**

  - el campo de relación del subformulario falló al guardar ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx
  - los subformularios de los campos no muestran datos ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx
  - Se corrigió el problema donde la copia de los campos asociados en la tabla no se mostraba correctamente en el primer renderizado. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) por @jiannx
  - Se corrigió el mensaje de confirmación secundaria incorrecto al cerrar una ventana emergente multinivel después de modificar los datos del formulario. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) por @gchust
  - Corregir el problema donde un espacio en la expresión de variable causaba que la etiqueta no se mostrara ([#8988](https://github.com/nocobase/nocobase/pull/8988)) por @mytharcher
- **[motor-de-flujo]**

  - Corregir menús de configuración recortados en ventanas emergentes ([#9005](https://github.com/nocobase/nocobase/pull/9005)) por @gchust
  - Se corrigió un problema donde los elementos del menú no podían seleccionarse cuando el ancho del componente de la interfaz de usuario en el estado de configuración era demasiado pequeño. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) por @gchust
  - Añadir fragmentos js para configurar el elemento de formulario y el elemento de detalle ([#8974](https://github.com/nocobase/nocobase/pull/8974)) por @jiannx
- **[Flujo de trabajo: nodo de correo]** Corregir validación para campos de variable ([#9047](https://github.com/nocobase/nocobase/pull/9047)) por @mytharcher
- **[Campo de colección: Orden]** corregir(campo-orden): evitar bloqueo cuando el atributo scopeKey es indefinido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765
- **[Empleados IA]**

  - Corregir el problema donde los empleados IA no podían usar habilidades ([#9023](https://github.com/nocobase/nocobase/pull/9023)) por @cgyrock
  - Corregir el problema donde el LLM aún intenta cargar habilidades después de que la herramienta getSkill está deshabilitada ([#9013](https://github.com/nocobase/nocobase/pull/9013)) por @cgyrock
  - Se corrigió el problema de comportamiento anormal de la búsqueda web al usar el LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) por @cgyrock
  - Añadir verificación de propiedad a la API de conversación de IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) por @cgyrock
- **[Bloque: GridCard]** Se corrigió el problema de que el botón no se actualiza cuando se refresca la tarjeta de cuadrícula ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx
- **[Flujo de trabajo]**

  - Corregir regla de validación incorrecta de la instrucción de condición ([#9017](https://github.com/nocobase/nocobase/pull/9017)) por @mytharcher
  - Corregir el problema donde el modo del disparador de colección no se puede establecer en "crear o actualizar" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Corregir la lista blanca de acciones para las actualizaciones de mensajes en la aplicación para evitar actualizaciones no autorizadas por parte de no propietarios. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) por @mytharcher
- **[Gestor de fuentes de datos]** Optimizado el nombramiento de herramientas MCP y reducción de respuestas API redundantes para evitar el consumo excesivo del contexto de conversación de IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) por @2013xile
- **[Flujo de trabajo: nodo SQL]** Corregir problema de seguridad en el nodo SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) por @mytharcher
- **[Visualización de datos]** Al usar filtros basados en variables, los gráficos no logran resolver correctamente los valores de las variables en el renderizado inicial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Añadir tolerancia a fallos al eliminar el flujo de trabajo, para evitar errores de carga en la lista de tareas por @mytharcher
  - Añadir tolerancia a fallos para cuando no hay `latestRound` por @mytharcher
  - Corregir el límite de versión de migraciones heredadas para evitar errores al iniciar en la implementación de la última versión por @mytharcher
- **[Gestor de correo electrónico]** no se muestra ninguna confirmación de cierre después de que se envía el correo electrónico por @jiannx
