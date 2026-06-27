---
title: "NocoBase v2.1.0-beta.12: Añadir una herramienta de búsqueda web basada en LLIM para empleados de IA"
description: "Nota de la versión v2.1.0-beta.12"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - Añadir variables JS al flujo de eventos ([#8938](https://github.com/nocobase/nocobase/pull/8938)) por @jiannx

  - Añadir acción de elemento JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) por @jiannx

- **[Empleados IA]** Añadir una herramienta de búsqueda web basada en LLM para empleados IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) por @cgyrock

### 🚀 Mejoras

- **[indefinido]**
  - Añadir tabla de contenidos al README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765

  - Reducir el ruido de logs durante el inicio del servidor silenciando los comandos de descompresión para LibreOffice y Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) por @Rishabh1925

- **[cliente]**
  - Soporte para configurar estilos de campo mediante runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) por @jiannx

  - Optimizar el diseño horizontal de las acciones de formulario ([#8869](https://github.com/nocobase/nocobase/pull/8869)) por @jiannx

- **[Flujo de trabajo: JavaScript]** Añadir `isolated-vm` como motor de ejecución de JavaScript por defecto para el nodo JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) por @mytharcher
Referencia: [Nodo JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[Flujo de trabajo]**
  - Cambiar el tamaño del interruptor de activación a pequeño ([#9010](https://github.com/nocobase/nocobase/pull/9010)) por @mytharcher

  - Añadir variable para el parámetro de tamaño de página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher

- **[Empleados IA]** Optimizar los prompts para deepseek al manejar tipos de archivo no soportados ([#9003](https://github.com/nocobase/nocobase/pull/9003)) por @cgyrock

- **[Acción: Solicitud personalizada]** añadir modelos de acción para solicitud personalizada ([#8890](https://github.com/nocobase/nocobase/pull/8890)) por @jiannx

- **[Campo de colección: divisiones administrativas de China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) por @jiannx

- **[Flujo de trabajo: Subflujo]** Añadir lógica defensiva para evitar que el flujo de trabajo se cuelgue cuando ocurre una excepción por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corregir problema de rendimiento causado por el campo JSON al cargar la lista de registros de aprobación por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregido un problema donde aparecía un mensaje de confirmación de cambios no guardados incorrecto para la acción de edición masiva ([#9054](https://github.com/nocobase/nocobase/pull/9054)) por @gchust

  - Corregido un problema donde aparecía un mensaje emergente de confirmación secundaria incorrecto al enviar el formulario después de crear un registro mediante una subtabla emergente. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) por @gchust

  - Corregido el problema donde ctx.request no podía sobrescribir el encabezado Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust

  - Error al guardar el campo de relación del subformulario ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx

  - Los subformularios de los campos no muestran datos ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx

  - Corregido el problema donde la copia de los campos asociados en la tabla no se mostraba correctamente en el primer renderizado. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) por @jiannx

  - Corregido mensaje de confirmación secundaria incorrecto al cerrar una ventana emergente multinivel después de modificar datos del formulario. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) por @gchust

  - Corregir el problema donde los espacios en la expresión de variable causaban que la etiqueta no se mostrara ([#8988](https://github.com/nocobase/nocobase/pull/8988)) por @mytharcher

  - Corregida la excepción al añadir nodos hijos a la tabla de árbol en la ventana emergente ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx

- **[gestor-de-fuentes-de-datos]** Corregido un problema donde algunos tipos de campo no se actualizaban correctamente después de sincronizar campos desde la base de datos ([#9046](https://github.com/nocobase/nocobase/pull/9046)) por @2013xile

- **[servidor]**
  - Añadir verificación de servicio para evitar que el estado de la aplicación sea actualizado por una instancia que no está sirviendo ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher

  - Evitar manejar sync-message después de que la aplicación se haya detenido ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher

  - Cambiar el momento de cierre de Pub-Sub a `beforeStop`, para evitar que se envíen o manejen mensajes después de cerrar la base de datos ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher

- **[motor-de-flujo]**
  - Corregir menús de configuración recortados en ventanas emergentes ([#9005](https://github.com/nocobase/nocobase/pull/9005)) por @gchust

  - Corregido un problema donde no se podían seleccionar los elementos del menú cuando el ancho del componente de UI en el estado de configuración era demasiado pequeño. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) por @gchust

  - Añadir fragmentos JS para configurar el elemento de formulario y el elemento de detalle ([#8974](https://github.com/nocobase/nocobase/pull/8974)) por @jiannx

  - Sincronizar el estado con la configuración del campo cuando se elimina un campo de formulario ([#8857](https://github.com/nocobase/nocobase/pull/8857)) por @jiannx

- **[base de datos]** Usar advertencia en lugar de error cuando algún parámetro de appends es inválido ([#8923](https://github.com/nocobase/nocobase/pull/8923)) por @mytharcher

- **[resourcer]** Corregir un problema donde las fuentes de datos externas no se cargan correctamente. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) por @2013xile

- **[Empleados IA]**
  - Corregir fallo en la subida de documentos de empleados IA bajo acceso de subruta con APP_PUBLIC_PATH configurado. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) por @cgyrock

  - Corregido el problema al usar modelos deepseek o minmax en dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock

  - Corregido el problema donde abortar el razonamiento de los empleados IA causaba que el servicio se bloqueara ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock

  - Corregido el problema de comportamiento anormal de la búsqueda web al usar el LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) por @cgyrock

  - Añadir verificación de propiedad a la API de conversación IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) por @cgyrock

  - Ajustar el espacio entre los componentes de tarjeta de herramienta en la Conversación IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) por @cgyrock

- **[Flujo de trabajo: Nodo de solicitud HTTP]** Sanitizados los resultados del nodo de solicitud de flujo de trabajo para evitar exponer la configuración de la solicitud, los nuevos nodos por defecto devuelven solo los datos de respuesta, y se añadió registro de depuración para solicitudes fallidas. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher

- **[Campo de colección: Orden]** fix(field-sort): evitar bloqueo cuando el atributo scopeKey es indefinido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765

- **[Bloque: GridCard]** Corregido el problema de que el botón no se actualiza al refrescar la tarjeta de cuadrícula ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx

- **[Notificación: Mensaje en la aplicación]** Corregir la lista blanca de acciones para las actualizaciones de mensajes en la aplicación para evitar actualizaciones no autorizadas por parte de no propietarios. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) por @mytharcher

- **[Flujo de trabajo: Nodo SQL]** Corregir problema de seguridad en el nodo SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) por @mytharcher

- **[Visualización de datos]**
  - Al usar filtros basados en variables, los gráficos no resuelven correctamente los valores de las variables en el renderizado inicial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) por @2013xile

  - corregidas las estadísticas de datos anormales del gráfico del rol raíz después de habilitar el plugin de espacio ([#8969](https://github.com/nocobase/nocobase/pull/8969)) por @jiannx

- **[Acción: Importar registros]** corregido el problema de fallo en la importación después de abrir plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) por @jiannx

- **[Flujo de trabajo: JavaScript]** Corregir problemas de seguridad ([#8967](https://github.com/nocobase/nocobase/pull/8967)) por @mytharcher

- **[Acción: Exportar registros]** Limitar la configuración de importación y exportación de campos relacionados de múltiples capas ([#8893](https://github.com/nocobase/nocobase/pull/8893)) por @jiannx

- **[Variables personalizadas]** omitir notificación de autenticación ([#8942](https://github.com/nocobase/nocobase/pull/8942)) por @chenos

- **[Localización]** evitar la solicitud localizationTexts:missing en caso de denegación de permiso ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos

- **[Autenticación]** corregir acl para soportar parámetros de filtrado de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx

- **[Motor de flujo]** Eliminar evento heredado copiado del repositorio uiSchema para evitar errores al activarse ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher

- **[Acción: Importar registros Pro]**
  - limitar la configuración de importación y exportación de campos relacionados de múltiples capas por @jiannx

  - Corregir el problema donde la opción "Activar flujo de trabajo" no funciona cuando no está marcada por @mytharcher

- **[Fuente de datos: Oracle externo]** Corregir un error que ocurre al cargar la fuente de datos Oracle externa por @2013xile

- **[Flujo de trabajo: Aprobación]**
  - Corregir el límite de versión de migraciones antiguas para evitar errores al iniciar en la última versión de despliegue por @mytharcher

  - Añadir tolerancia a fallos cuando el flujo de trabajo se elimina, para evitar errores de carga en la lista de tareas por @mytharcher

  - Corregir problemas de traducción, selección de nodo y destino de retorno en el botón de retorno del formulario de aprobación v2 por @zhangzhonghe

  - Añadir tolerancia a fallos para cuando no existe `latestRound` por @mytharcher

- **[Gestor de correo electrónico]**
  - Corregida la firma siendo sobrescrita al usar plantillas por @jiannx

  - no se muestra la confirmación de cierre después de enviar el correo electrónico por @jiannx
