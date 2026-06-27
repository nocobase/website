---
title: "Actualizaciones Semanales｜Optimización y Corrección de Errores"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 29 de enero al 5 de febrero de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.42](https://www.nocobase.com/en/blog/v1.9.42)

*Fecha de lanzamiento: 2026-02-02*

### 🚀 Mejoras

- **[Auth: DingTalk]** Usar `userid` como clave predeterminada para la asociación de usuarios, manteniendo la compatibilidad con autenticadores existentes que dependen del móvil por @2013xile

### 🐛 Corrección de errores

- **[Flujo de trabajo: Aprobación]** Corregir problema de rendimiento causado por el campo JSON en la carga de listas (MySQL) por @mytharcher
- **[WeCom]** Corregir un problema por el cual los usuarios no podían registrarse automáticamente cuando faltaba el móvil por @2013xile

### [v1.9.41](https://www.nocobase.com/en/blog/v1.9.41)

*Fecha de lanzamiento: 2026-02-02*

### 🚀 Mejoras

- **[cliente]** Soporte para deshabilitar parámetros de appends predeterminados redundantes para `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile

### 🐛 Corrección de errores

- **[Flujo de trabajo]** Añadir tolerancia a fallos para el componente de selección de registro de colección, para evitar errores cuando se elimina la colección ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher
- **[Gestor de archivos]** Asegurar la ruta del archivo para el almacenamiento local, para evitar que la ruta de acceso salga de la raíz del documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher
- **[Flujo de trabajo: Subflujo]** Corregir la ruta del enlace del flujo de trabajo por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.19](https://www.nocobase.com/en/blog/v2.0.0-beta.19)

*Fecha de lanzamiento: 2026-02-05*

### 🎉 Nuevas funciones

- **[Auth: DingTalk]** Permite vincular usuario con `unionId` por @2013xile

### 🚀 Mejoras

- **[cliente]** Ajustar la configuración del ancho de columna a selección desplegable en subtabla editable en línea ([#8561](https://github.com/nocobase/nocobase/pull/8561)) por @katherinehhh
- **[Campo de colección: Markdown(Vditor)]** Se añadió una opción de configuración para establecer el modo de edición predeterminado en la configuración del componente. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) por @Cyx649312038
- **[Multi-espacio]** Control de permisos de multi-espacio accede a acl por @jiannx
- **[IA: Base de conocimiento]** Se optimizó la salida de compilación para reducir el tamaño del paquete de plugin-ai-knowledge-base. por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir un problema por el cual usar el "Creación rápida" del selector de registros de asociación en el formulario de edición sobrescribía los datos existentes del formulario. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) por @gchust
  - Corregir problemas de espacio vacío en el diseño de cuadrícula ([#8535](https://github.com/nocobase/nocobase/pull/8535)) por @zhangzhonghe
  - Corregir la necesidad de actualizar la página para agregar un registro hijo después de habilitar la tabla de árbol ([#8574](https://github.com/nocobase/nocobase/pull/8574)) por @katherinehhh
  - Corregir que el ancho de columna no se actualiza en subtabla (edición en línea); la entrada de texto multilínea no se redimensiona con el ancho de columna ([#8573](https://github.com/nocobase/nocobase/pull/8573)) por @katherinehhh
  - Corregir un problema por el cual el menú "Formulario (Añadir nuevo)" se mostraba incorrectamente en la ventana emergente de la acción "Crear nuevo". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) por @gchust
- **[motor-de-flujo]**

  - Corregir un problema por el cual algunas bibliotecas de terceros no podían importarse correctamente en bloques JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) por @gchust
  - Corregir un problema por el cual enviar el formulario después de cambiar de página no actualiza la página. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) por @gchust
- **[Plantillas de UI]** Corregir error al reabrir y enviar una plantilla emergente guardada para el formulario "Añadir nuevo" del campo de asociación. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) por @gchust
- **[Campo de colección: Adjunto(URL)]** Corregir que la configuración de visualización del nombre de archivo del campo URL de adjunto no funciona en el formulario de edición ([#8571](https://github.com/nocobase/nocobase/pull/8571)) por @katherinehhh
- **[Empleados de IA]** Corregir un problema por el cual el nodo LLM falla al enviar mensajes ([#8569](https://github.com/nocobase/nocobase/pull/8569)) por @2013xile
- **[Acción: Importar registros]** Corregir la vulnerabilidad de la acción de importación ([#8544](https://github.com/nocobase/nocobase/pull/8544)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el problema por el cual los parámetros y la carga útil son incorrectos al activar un flujo de trabajo personalizado por @mytharcher
- **[Multi-espacio]**

  - añadir script de migración para eliminar x-ready-pretty en el campo de espacio por @jiannx
  - eliminar el atributo read-pretty para el campo de espacio por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregir problema de rendimiento causado por el campo JSON en la carga de listas (MySQL) por @mytharcher

### [v2.0.0-beta.18](https://www.nocobase.com/en/blog/v2.0.0-beta.18)

*Fecha de lanzamiento: 2026-02-02*

### 🎉 Nuevas funciones

- **[motor-de-flujo]** soporte para env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) por @chenos

### 🚀 Mejoras

- **[acl]** acl añade método generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) por @jiannx
- **[cliente]** Soporte para deshabilitar parámetros de appends predeterminados redundantes para `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile
- **[Auth: DingTalk]** Usar `userid` como clave predeterminada para la asociación de usuarios, manteniendo la compatibilidad con autenticadores existentes que dependen del móvil por @2013xile

### 🐛 Corrección de errores

- **[cliente]**

  - Corregido un problema por el cual el flujo de eventos fallaba al aplicar al actualizar bloques de destino a través de ventanas emergentes. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) por @gchust
  - Corregir problema por el cual los datos de la página se actualizaban incorrectamente después de abrir y cerrar la ventana emergente por primera vez. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) por @gchust
  - Corregido un problema que provocaba que el bloque de datos se actualizara repetidamente después de enviar un formulario. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) por @gchust
  - corregir que el campo nanoid no regeneraba el valor predeterminado después del envío de creación ([#8538](https://github.com/nocobase/nocobase/pull/8538)) por @katherinehhh
  - corregir visualización incorrecta al establecer valores predeterminados para el modelo de campo en cascada ([#8537](https://github.com/nocobase/nocobase/pull/8537)) por @katherinehhh
- **[motor-de-flujo]** Corregida la carga incorrecta de algunas bibliotecas ESM en runjs debido a una clasificación errónea como módulos AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) por @gchust
- **[Gestor de archivos]** Asegurar la ruta del archivo para el almacenamiento local, para evitar que la ruta de acceso salga de la raíz del documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher
- **[Flujo de trabajo]** Añadir tolerancia a fallos para el componente de selección de registro de colección, para evitar errores cuando se elimina la colección ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher
- **[Empleados de IA]** Corregir la excepción que ocurre cuando las herramientas se llaman automáticamente durante el modelado de datos de IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) por @cgyrock
- **[Acción: Importar registros Pro]** Corregir números de conteo en el resultado de importación y traducción de mensajes por @mytharcher
- **[Flujo de trabajo: Subflujo]** Corregir la ruta del enlace del flujo de trabajo por @mytharcher
- **[Impresión de plantilla]** corregir problema de visualización de lista de campos en la configuración de acción de impresión de plantilla por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Corregir error lanzado al añadir rol a usuario si el flujo de trabajo de audiencias está deshabilitado por @mytharcher
  - Añadir tolerancia a fallos en flujo de trabajo eliminado, para evitar error de carga en la lista de tareas por @mytharcher
- **[WeCom]** Corregir un problema por el cual los usuarios no podían registrarse automáticamente cuando faltaba el móvil por @2013xile
