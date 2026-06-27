---
title: "Actualizaciones semanales｜Agregar variables JS al flujo de eventos"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 27 de marzo al 2 de abril de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.31](https://www.nocobase.com/en/blog/v2.0.31)

*Fecha de lanzamiento: 2026-04-01*

### 🚀 Mejoras

- **[Empleados IA]** Optimizar los prompts para deepseek al manejar tipos de archivo no soportados ([#9003](https://github.com/nocobase/nocobase/pull/9003)) por @cgyrock
- **[Flujo de trabajo]** Cambiar el tamaño del interruptor de activado a pequeño ([#9010](https://github.com/nocobase/nocobase/pull/9010)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Se corrigió el problema por el cual la copia de los campos asociados en la tabla no se mostraba correctamente en el primer renderizado. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) por @jiannx
- **[motor-de-flujo]** Corregir menús de configuración recortados en ventanas emergentes ([#9005](https://github.com/nocobase/nocobase/pull/9005)) por @gchust
- **[Notificación: Mensaje en la aplicación]** Corregir la lista blanca de acciones para las actualizaciones de mensajes en la aplicación para evitar actualizaciones no autorizadas por parte de no propietarios. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) por @mytharcher
- **[Empleados IA]** Se corrigió el problema de comportamiento anormal en la búsqueda web al usar el LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) por @cgyrock

### [v2.0.30](https://www.nocobase.com/en/blog/v2.0.30)

*Fecha de lanzamiento: 2026-03-30*

### 🚀 Mejoras

- **[Flujo de trabajo: JavaScript]** Añadir `isolated-vm` como motor de ejecución de JavaScript predeterminado para el nodo JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) por @mytharcher
  Referencia: [Nodo JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Corrección de errores

- **[cliente]** Se corrigió el mensaje de confirmación secundaria incorrecto al cerrar una ventana emergente multinivel después de modificar los datos del formulario. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) por @gchust
- **[Flujo de trabajo: Nodo SQL]** Corregir problema de seguridad en el nodo SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) por @mytharcher
- **[Empleados IA]** Añadir verificación de propiedad a la API de conversación de IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) por @cgyrock
- **[Flujo de trabajo: Aprobación]** Corregir el límite de versión de migraciones heredadas para evitar errores al iniciar en la última versión del despliegue por @mytharcher

### [v2.0.29](https://www.nocobase.com/en/blog/v2.0.29)

*Fecha de lanzamiento: 2026-03-30*

### 🚀 Mejoras

- **[indefinido]** Reducción del ruido en los registros durante el inicio del servidor silenciando los comandos de descompresión para LibreOffice y Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) por @Rishabh1925

### 🐛 Corrección de errores

- **[cliente]** Corregir el problema por el cual un espacio en una expresión de variable causaba que la etiqueta no se mostrara ([#8988](https://github.com/nocobase/nocobase/pull/8988)) por @mytharcher
- **[motor-de-flujo]** Se corrigió un problema por el cual los elementos del menú no se podían seleccionar cuando el ancho del componente de la interfaz de usuario en el estado de configuración era demasiado pequeño. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) por @gchust
- **[Visualización de datos]** Al usar filtros basados en variables, los gráficos no resuelven correctamente los valores de las variables en el renderizado inicial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) por @2013xile

### [v2.0.28](https://www.nocobase.com/en/blog/v2.0.28)

*Fecha de lanzamiento: 2026-03-27*

### 🐛 Corrección de errores

- **[Acción: Importar registros]** Se corrigió el problema de fallo en la importación después de abrir el plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) por @jiannx
- **[Visualización de datos]** Se corrigió la estadística anormal de datos del gráfico del rol raíz después de habilitar el plugin de espacio ([#8969](https://github.com/nocobase/nocobase/pull/8969)) por @jiannx
- **[Flujo de trabajo: JavaScript]** Corregir problemas de seguridad ([#8967](https://github.com/nocobase/nocobase/pull/8967)) por @mytharcher
- **[Empleados IA]** Ajustar el espacio entre los componentes de la tarjeta de herramientas en la Conversación de IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) por @cgyrock
- **[Acción: Exportar registros]** Limitar la configuración de importación y exportación de campos relacionados de múltiples capas ([#8893](https://github.com/nocobase/nocobase/pull/8893)) por @jiannx
- **[Acción: Importar registros Pro]** Limitar la configuración de importación y exportación de campos relacionados de múltiples capas por @jiannx

### [v2.0.27](https://www.nocobase.com/en/blog/v2.0.27)

*Fecha de lanzamiento: 2026-03-26*

### 🚀 Mejoras

- **[Flujo de trabajo]** Añadir variable para el parámetro de tamaño de página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher
- **[Flujo de trabajo: Subflujo]** Añadir lógica defensiva para evitar que el flujo de trabajo se cuelgue cuando ocurre una excepción por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Se corrigió la excepción al añadir nodos hijos a la tabla de árbol en la ventana emergente ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx
- **[servidor]** Evitar manejar sync-message después de que la aplicación se haya detenido ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher
- **[Motor de flujo]** Eliminar evento heredado copiado del repositorio uiSchema para evitar errores al activarse ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher
- **[Autenticación]** corregir acl para soportar parámetros de filtrado de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx
- **[Gestor de correo electrónico]** Se corrigió la firma siendo sobrescrita al usar plantillas por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.13](https://www.nocobase.com/en/blog/v2.1.0-alpha.13)

*Fecha de lanzamiento: 2026-03-27*

### 🎉 Nuevas funciones

- **[cliente]** Añadir variables JS al flujo de eventos ([#8938](https://github.com/nocobase/nocobase/pull/8938)) por @jiannx

### 🚀 Mejoras

- **[cliente]** soportar el establecimiento de estilos de campo a través de runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) por @jiannx
- **[motor-de-flujo]** Mejorar la validación de esquemas para la API de construcción de interfaz de usuario. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust
- **[Flujo de trabajo: Evento previo a la acción]** Añadir reglas de validación para disparadores y nodos ([#8971](https://github.com/nocobase/nocobase/pull/8971)) por @mytharcher
- **[Flujo de trabajo]** Añadir variable para el parámetro de tamaño de página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher
- **[Flujo de trabajo: Webhook]** Añadir validación para la creación de API de disparador / nodo por @mytharcher
- **[Flujo de trabajo: Subflujo]**

  - Añadir validación para la creación de API de nodo por @mytharcher
  - Añadir lógica defensiva para evitar que el flujo de trabajo se cuelgue cuando ocurre una excepción por @mytharcher
- **[Flujo de trabajo: Aprobación]** Añadir validación para la API de disparador / nodo por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Se corrigió la excepción al añadir nodos hijos a la tabla de árbol en la ventana emergente ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx
- **[servidor]** Evitar manejar sync-message después de que la aplicación se haya detenido ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher
- **[Acción: Exportar registros]** Limitar la configuración de importación y exportación de campos relacionados de múltiples capas ([#8893](https://github.com/nocobase/nocobase/pull/8893)) por @jiannx
- **[Visualización de datos]** Se corrigió la estadística anormal de datos del gráfico del rol raíz después de habilitar el plugin de espacio ([#8969](https://github.com/nocobase/nocobase/pull/8969)) por @jiannx
- **[Acción: Importar registros]** Se corrigió el problema de fallo en la importación después de abrir el plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) por @jiannx
- **[Flujo de trabajo: JavaScript]** Corregir problemas de seguridad ([#8967](https://github.com/nocobase/nocobase/pull/8967)) por @mytharcher
- **[Empleados IA]** Ajustar el espacio entre los componentes de la tarjeta de herramientas en la Conversación de IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) por @cgyrock
- **[Motor de flujo]** Eliminar evento heredado copiado del repositorio uiSchema para evitar errores al activarse ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher
- **[Autenticación]** corregir acl para soportar parámetros de filtrado de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx
- **[Acción: Importar registros Pro]** Limitar la configuración de importación y exportación de campos relacionados de múltiples capas por @jiannx
- **[Gestor de correo electrónico]** Se corrigió la firma siendo sobrescrita al usar plantillas por @jiannx
