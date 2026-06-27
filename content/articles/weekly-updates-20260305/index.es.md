---
title: "Actualizaciones Semanales｜Los Empleados de IA Ahora Soportan Búsqueda de Documentos Integrados con Múltiples Palabras Clave"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 27 de febrero al 5 de marzo de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.10](https://www.nocobase.com/en/blog/v2.0.10)

*Fecha de lanzamiento: 2026-03-04*

### 🐛 Corrección de errores

- **[Empleados IA]** Se corrigió el error de chat del empleado IA cuando la base de conocimiento está habilitada ([#8746](https://github.com/nocobase/nocobase/pull/8746)) por @cgyrock
- **[Motor de flujo]** Se corrigió el error de destrucción de SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) por @chenos
- **[Control de acceso]** La instancia de base de datos utilizada al configurar metadatos ACL es incorrecta ([#8747](https://github.com/nocobase/nocobase/pull/8747)) por @2013xile
- **[Flujo de trabajo: Aprobación]** Se corrigió el problema por el que el resultado de la consulta no se mostraba debido a nodos filtrados por tipo por @mytharcher

### [v2.0.9](https://www.nocobase.com/en/blog/v2.0.9)

*Fecha de lanzamiento: 2026-03-03*

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió el problema por el que el componente CollectionField no se renderizaba en el componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher
  - Se corrigió un problema por el que el bloque de datos no se actualizaba al cambiar de menú. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust
- **[base de datos]** Se corrigió el fallo en la verificación de expresiones regulares personalizadas de campos en v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx
- **[motor de flujo]** Se corrigió un problema por el que ctx.exit no podía terminar la ejecución de flujos de eventos definidos por el usuario. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust
- **[Flujo de trabajo: Aprobación]** Se añadió un parámetro faltante para evitar que las asociaciones no se actualicen al enviar una nueva aprobación por @mytharcher

### [v2.0.8](https://www.nocobase.com/en/blog/v2.0.8)

*Fecha de lanzamiento: 2026-03-01*

### 🎉 Nuevas funciones

- **[Empleados IA]** Se actualizó el mensaje de usuario del chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🐛 Corrección de errores

- **[servidor]** Se resolvió un problema de caché añadiendo un hash a los assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos
- **[Empleados IA]** Se corrigió un problema de renderizado en la configuración de la fuente de datos de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock
- **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió el problema por el que el flujo de trabajo de acción personalizada se colgaba al ejecutarse como subflujo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Se sanearon los valores de asociación en las acciones de aprobación para evitar cualquier manipulación de datos más allá del permiso por @mytharcher
  - Se corrigió el problema por el que se lanzaba un error al ejecutar manualmente el flujo de trabajo de aprobación por @mytharcher
  - Se corrigió el error lanzado debido a la falta del valor de `dataAfter` al añadir o delegar por @mytharcher
  - Se corrigió el problema por el que el parámetro appends filtraba por ACL por @mytharcher
  - Se corrigió un problema de ACL por el que el valor de asociación no debería crearse o actualizarse cuando el usuario no tiene permiso por @mytharcher

### [v2.0.7](https://www.nocobase.com/en/blog/v2.0.7)

*Fecha de lanzamiento: 2026-02-27*

### 🎉 Nuevas funciones

- **[Empleados IA]** Se añadió soporte para buscar documentación incorporada con múltiples palabras clave y leer múltiples documentos en una sola llamada de herramienta ([#8718](https://github.com/nocobase/nocobase/pull/8718)) por @2013xile

### 🚀 Mejoras

- **[cliente]** Se añadió soporte para la configuración de resumen en tablas ([#8721](https://github.com/nocobase/nocobase/pull/8721)) por @chenos
- **[Incrustar NocoBase]** Se proporcionó una API de saneamiento para filtrar valores de asociación en acciones ([#8688](https://github.com/nocobase/nocobase/pull/8688)) por @mytharcher

### 🐛 Corrección de errores

- **[Visualización de datos]** Se corrigió la internacionalización (i18n) para el texto de entrada del plugin de gráficos ([#8716](https://github.com/nocobase/nocobase/pull/8716)) por @heziqiang
- **[Flujo de trabajo: JavaScript]** Se corrigió que los casos de prueba no pasaran en Windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) por @mytharcher
- **[Empleados IA]** Se resolvió el problema por el que el mensaje de IA se renderizaba con longitud 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) por @heziqiang
- **[Impresión de plantillas]** Se corrigió el problema por el que la API de ACL cambió pero el plugin no se adaptó por @mytharcher
- **[Flujo de trabajo: Aprobación]** Se sanearon los valores de asociación en las acciones de aprobación para evitar cualquier manipulación de datos más allá del permiso por @mytharcher
- **[Gestor de correo electrónico]** Se corrigió el análisis del formato del ID de contenido de la imagen por @jiannx

### [v2.0.6](https://www.nocobase.com/en/blog/v2.0.6)

*Fecha de lanzamiento: 2026-02-26*

### 🐛 Corrección de errores

- **[Empleados IA]** Se corrigió el error de conversación de IA al usar base de datos MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) por @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.7](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Fecha de lanzamiento: 2026-03-04*

### 🎉 Nuevas funciones

- **[Empleados IA]** Se actualizó el mensaje de usuario del chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió el problema por el que el componente CollectionField no se renderizaba en el componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher
  - Se corrigió un problema por el que el bloque de datos no se actualizaba al cambiar de menú. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust
- **[motor de flujo]** Se corrigió un problema por el que ctx.exit no podía terminar la ejecución de flujos de eventos definidos por el usuario. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust
- **[base de datos]** Se corrigió el fallo en la verificación de expresiones regulares personalizadas de campos en v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx
- **[servidor]** Se resolvió un problema de caché añadiendo un hash a los assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos
- **[Control de acceso]** La instancia de base de datos utilizada al configurar metadatos ACL es incorrecta ([#8747](https://github.com/nocobase/nocobase/pull/8747)) por @2013xile
- **[Empleados IA]**

  - Se corrigió el error de chat del empleado IA cuando la base de conocimiento está habilitada ([#8746](https://github.com/nocobase/nocobase/pull/8746)) por @cgyrock
  - Se corrigió un problema de renderizado en la configuración de la fuente de datos de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock
- **[Motor de flujo]** Se corrigió el error de destrucción de SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) por @chenos
- **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió el problema por el que el flujo de trabajo de acción personalizada se colgaba al ejecutarse como subflujo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Se corrigió el problema por el que el resultado de la consulta no se mostraba debido a nodos filtrados por tipo por @mytharcher
  - Se añadió un parámetro faltante para evitar que las asociaciones no se actualicen al enviar una nueva aprobación por @mytharcher
  - Se corrigió el problema por el que se lanzaba un error al ejecutar manualmente el flujo de trabajo de aprobación por @mytharcher
  - Se corrigió el error lanzado debido a la falta del valor de `dataAfter` al añadir o delegar por @mytharcher
  - Se corrigió un problema de ACL por el que el valor de asociación no debería crearse o actualizarse cuando el usuario no tiene permiso por @mytharcher
  - Se sanearon los valores de asociación en las acciones de aprobación para evitar cualquier manipulación de datos más allá del permiso por @mytharcher
  - Se corrigió el problema por el que el parámetro appends filtraba por ACL por @mytharcher

### [v2.1.0-beta.6](https://www.nocobase.com/en/blog/v2.1.0-beta.6)

*Fecha de lanzamiento: 2026-02-27*

### 🎉 Nuevas funciones

- **[Empleados IA]** Se añadió soporte para buscar documentación incorporada con múltiples palabras clave y leer múltiples documentos en una sola llamada de herramienta ([#8718](https://github.com/nocobase/nocobase/pull/8718)) por @2013xile

### 🚀 Mejoras

- **[cliente]** Se añadió soporte para la configuración de resumen en tablas ([#8721](https://github.com/nocobase/nocobase/pull/8721)) por @chenos
- **[Empleados IA]** Se actualizó el mensaje de usuario del chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang
- **[Incrustar NocoBase]** Se proporcionó una API de saneamiento para filtrar valores de asociación en acciones ([#8688](https://github.com/nocobase/nocobase/pull/8688)) por @mytharcher

### 🐛 Corrección de errores

- **[Empleados IA]** Se resolvió el problema por el que el mensaje de IA se renderizaba con longitud 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) por @heziqiang
- **[Visualización de datos]** Se corrigió la internacionalización (i18n) para el texto de entrada del plugin de gráficos ([#8716](https://github.com/nocobase/nocobase/pull/8716)) por @heziqiang
- **[Flujo de trabajo: JavaScript]** Se corrigió que los casos de prueba no pasaran en Windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) por @mytharcher
- **[Impresión de plantillas]** Se corrigió el problema por el que la API de ACL cambió pero el plugin no se adaptó por @mytharcher
- **[Flujo de trabajo: Aprobación]** Se sanearon los valores de asociación en las acciones de aprobación para evitar cualquier manipulación de datos más allá del permiso por @mytharcher
- **[Gestor de correo electrónico]** Se corrigió el análisis del formato del ID de contenido de la imagen por @jiannx

### [v2.1.0-beta.5](https://www.nocobase.com/en/blog/v2.1.0-beta.5)

*Fecha de lanzamiento: 2026-02-26*

### 🚀 Mejoras

- **[Empleados IA]** Se actualizó el mensaje de usuario del chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang

### 🐛 Corrección de errores

- **[Empleados IA]** Se corrigió el error de conversación de IA al usar base de datos MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) por @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.7](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Fecha de lanzamiento: 2026-02-26*

### 🎉 Nuevas funciones

- **[Empleados IA]** Se añadió soporte para buscar documentación incorporada con múltiples palabras clave y leer múltiples documentos en una sola llamada de herramienta ([#8718](https://github.com/nocobase/nocobase/pull/8718)) por @2013xile

### 🚀 Mejoras

- **[Empleados IA]** Se actualizó el mensaje de usuario del chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang

### 🐛 Corrección de errores

- **[cliente]** En móvil, cerrar el menú primero y luego realizar el salto de página ([#8699](https://github.com/nocobase/nocobase/pull/8699)) por @zhangzhonghe
- **[IA LLM: GigaChat]** Se corrigió que el plugin GigaChat no funcionara en la versión 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) por @cgyrock
- **[Empleados IA]**

  - Se corrigió el error de conversación de IA al usar base de datos MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) por @cgyrock
  - Se unificó la entrada de archivos para las APIs de chatGPT usando ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) por @cgyrock
  - Se corrigió el error del agente IA cuando el usuario envía un nuevo mensaje sin confirmar la ejecución de la herramienta ([#8697](https://github.com/nocobase/nocobase/pull/8697)) por @cgyrock
- **[IA: Base de conocimiento]** Se corrigió el error de inicio del plugin de base de conocimiento de IA. por @cgyrock
- **[Gestor de correo electrónico]** Error de renderizado de imagen por @jiannx
