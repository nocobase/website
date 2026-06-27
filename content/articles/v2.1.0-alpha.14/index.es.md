---
title: "NocoBase v2.1.0-alpha.14: Añadir la capacidad de invocar subagentes para empleados de IA"
description: "Nota de la versión v2.1.0-alpha.14"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** Se añade la capacidad de invocar subagentes para empleados IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) por @cgyrock

- **[IA: Servidor MCP]** Proporciona una API de consulta de colección de datos genérica, invocable a través de MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) por @2013xile

### 🚀 Mejoras

- **[sin definir]**
  - Se añade tabla de contenidos al README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765

  - Se reduce el ruido en los registros durante el inicio del servidor silenciando los comandos de descompresión para LibreOffice y Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) por @Rishabh1925

- **[Motor de flujo]** Se añaden nuevas APIs para la construcción de UI. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) por @gchust

- **[Flujo de trabajo]** Se cambia el tamaño del interruptor de activado a pequeño ([#9010](https://github.com/nocobase/nocobase/pull/9010)) por @mytharcher

- **[Empleados IA]** Se optimizan los prompts para deepseek al manejar tipos de archivo no soportados ([#9003](https://github.com/nocobase/nocobase/pull/9003)) por @cgyrock

- **[Acción: Solicitud personalizada]** Se añaden modelos de acción para solicitudes personalizadas ([#8890](https://github.com/nocobase/nocobase/pull/8890)) por @jiannx

- **[Flujo de trabajo: JavaScript]** Se añade `isolated-vm` como motor de ejecución de JavaScript por defecto para el nodo JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) por @mytharcher
Referencia: [Nodo JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
### 🐛 Corrección de Errores

- **[servidor]**
  - Se añade verificación de servicio para evitar que el estado de la aplicación sea actualizado por una instancia que no está sirviendo ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher

  - Se permite obtener la aplicación objetivo por nombre de host ([#8978](https://github.com/nocobase/nocobase/pull/8978)) por @2013xile

- **[cliente]**
  - El campo de relación de subformulario fallaba al guardar ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx

  - Los subformularios de los campos no mostraban datos ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx

  - Se corrigió el problema por el cual la copia de los campos asociados en la tabla no se mostraba correctamente en el primer renderizado. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) por @jiannx

  - Se corrigió el mensaje de confirmación secundaria incorrecto al cerrar una ventana emergente multinivel después de modificar los datos del formulario. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) por @gchust

  - Se corrige el problema donde un espacio en la expresión de variable causaba que la etiqueta no se mostrara ([#8988](https://github.com/nocobase/nocobase/pull/8988)) por @mytharcher

- **[motor-de-flujo]**
  - Se corrigen los menús de configuración recortados en ventanas emergentes ([#9005](https://github.com/nocobase/nocobase/pull/9005)) por @gchust

  - Se corrigió un problema por el cual no se podían seleccionar los elementos del menú cuando el ancho del componente de UI en el estado de configuración era demasiado pequeño. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) por @gchust

  - Se añaden fragmentos JS para el elemento de formulario de configuración y el elemento de detalle ([#8974](https://github.com/nocobase/nocobase/pull/8974)) por @jiannx

- **[Flujo de trabajo: nodo de correo]** Se corrige la validación para campos de variable ([#9047](https://github.com/nocobase/nocobase/pull/9047)) por @mytharcher

- **[Campo de colección: Orden]** fix(field-sort): se previene el fallo cuando el atributo scopeKey es indefinido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765

- **[Empleados IA]**
  - Se corrige el problema por el cual los empleados IA no podían usar habilidades ([#9023](https://github.com/nocobase/nocobase/pull/9023)) por @cgyrock

  - Se corrige el problema por el cual el LLM aún intentaba cargar habilidades después de deshabilitar la herramienta getSkill ([#9013](https://github.com/nocobase/nocobase/pull/9013)) por @cgyrock

  - Se corrigió el problema de comportamiento anormal en la búsqueda web al usar el LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) por @cgyrock

  - Se añade verificación de propiedad a la API de conversación de IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) por @cgyrock

- **[Bloque: GridCard]** Se corrigió el problema de que el botón no se actualizaba al refrescar la tarjeta de cuadrícula ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx

- **[Flujo de trabajo]**
  - Se corrige la regla de validación incorrecta de la instrucción de condición ([#9017](https://github.com/nocobase/nocobase/pull/9017)) por @mytharcher

  - Se corrige el problema por el cual el modo del disparador de colección no podía configurarse como "crear o actualizar" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) por @mytharcher

- **[Notificación: Mensaje en la aplicación]** Se corrige la lista blanca de acciones para actualizaciones de mensajes en la aplicación para evitar actualizaciones no autorizadas por parte de no propietarios. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) por @mytharcher

- **[Gestor de fuentes de datos]** Se optimizó la nomenclatura de herramientas MCP y se redujeron las respuestas redundantes de la API para evitar el consumo excesivo del contexto de conversación de IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) por @2013xile

- **[Flujo de trabajo: nodo SQL]** Se corrige un problema de seguridad en el nodo SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) por @mytharcher

- **[Visualización de datos]** Al usar filtros basados en variables, los gráficos no logran resolver correctamente los valores de las variables en el renderizado inicial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) por @2013xile

- **[Flujo de trabajo: Aprobación]**
  - Se añade tolerancia a fallos cuando el flujo de trabajo es eliminado, para evitar errores de carga en la lista de tareas por @mytharcher

  - Se añade tolerancia a fallos para cuando no existe `latestRound` por @mytharcher

  - Se corrige el límite de versión de migraciones antiguas para evitar errores al iniciar en una implementación con la última versión por @mytharcher

- **[Gestor de correo electrónico]** No se muestra ninguna confirmación de cierre después de que el correo electrónico es enviado por @jiannx
