---
title: "Actualizaciones semanales｜Mejora la capacidad de los empleados de IA para analizar documentos cargados"
description: "Este es un resumen de las actualizaciones y mejoras de funciones de NocoBase del 16 al 23 de abril de 2026."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.41](https://www.nocobase.com/en/blog/v2.0.41)

*Fecha de lanzamiento: 2026-04-22*

### 🎉 Nuevas funciones

- **[Auth: OIDC]** El atributo de mapeo ahora admite campos personalizados por @chenzhizdt
- **[DingTalk]** DingTalk: notificaciones, inicio de sesión automático dentro de DingTalk y sincronización de usuarios. por @chenzhizdt

### 🚀 Mejoras

- **[ai]** El empleado de IA y la base de conocimiento ahora admiten tipos de archivo adicionales para carga (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) por @cgyrock
- **[sin definir]** Añadir traducción al árabe para la sección de guía y navegación ([#9141](https://github.com/nocobase/nocobase/pull/9141)) por @saraTabbane

### 🐛 Corrección de errores

- **[data-source-manager]** Corrección para que los campos de porcentaje no se restablezcan a numérico al resincronizar fuentes de datos externas ([#9178](https://github.com/nocobase/nocobase/pull/9178)) por @jiannx
- **[client]**

  - Se corrigió el problema por el cual el valor predeterminado no surtía efecto después de crear un registro. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) por @gchust
  - Se corrigió el problema de que el botón "Añadir pestaña" estaba demasiado cerca del borde derecho ([#9177](https://github.com/nocobase/nocobase/pull/9177)) por @zhangzhonghe
- **[Departamentos]** Se corrigió un problema por el cual la sincronización repetida de departamentos no podía actualizar el orden de clasificación de los departamentos ([#9173](https://github.com/nocobase/nocobase/pull/9173)) por @2013xile
- **[Fuente de datos: Principal]** Se corrigió la sincronización de campos desde la base de datos para vistas conectadas cuando el nombre de la colección difiere del nombre de la vista de la base de datos ([#9155](https://github.com/nocobase/nocobase/pull/9155)) por @2013xile
- **[Flujo de trabajo: JavaScript]** Se corrigió un problema de seguridad en la ejecución de scripts en modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher
- **[IA: Base de conocimiento]** Se corrigió un problema por el cual la base de datos vectorial no se sincronizaba al eliminar documentos de la base de conocimiento. por @cgyrock
- **[WeCom]** Se corrigió la falta de orden de los departamentos al sincronizar departamentos desde WeCom por @2013xile

### [v2.0.40](https://www.nocobase.com/en/blog/v2.0.40)

*Fecha de lanzamiento: 2026-04-20*

### 🐛 Corrección de errores

- **[client]** Se corrigió un problema por el cual la actualización de valores de subtablas mediante la asignación de campos resultaba en contaminación de datos. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) por @gchust
- **[data-source-manager]** Se corrigió un problema por el cual los campos de secuencia podían cambiarse a cadena después de la sincronización de la base de datos ([#9143](https://github.com/nocobase/nocobase/pull/9143)) por @2013xile
- **[Gestor de archivos]** Devuelve nulo cuando falta la URL de vista previa ([#9104](https://github.com/nocobase/nocobase/pull/9104)) por @gaston98765
- **[Flujo de trabajo: JavaScript]** Se corrigió un problema de seguridad en la ejecución de scripts en modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher
- **[Departamentos]**

  - Se corrigió que las listas de departamentos en la gestión de departamentos no siguieran el orden del campo `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) por @2013xile
  - Se corrigieron valores de departamento principal faltantes o desactualizados después de guardar los departamentos de usuario ([#9156](https://github.com/nocobase/nocobase/pull/9156)) por @2013xile

### [v2.0.39](https://www.nocobase.com/en/blog/v2.0.39)

*Fecha de lanzamiento: 2026-04-18*

### 🚀 Mejoras

- **[Departamentos]** Mostrar el campo de clave foránea `parentId` de la colección de departamentos en la interfaz de usuario ([#9130](https://github.com/nocobase/nocobase/pull/9130)) por @2013xile

### 🐛 Corrección de errores

- **[data-source-manager]** Se corrigió que la sincronización de campos de la colección de archivos eliminara el campo `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) por @2013xile
- **[client]**

  - Se corrigió un problema por el cual el componente de campo de asociación era incorrecto en la configuración de valores de campo. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) por @gchust
  - Se corrigió la altura y anchura excesivas de las pestañas en el modo de configuración de página ([#9144](https://github.com/nocobase/nocobase/pull/9144)) por @zhangzhonghe
- **[database]** Se corrigieron riesgos de inyección SQL en la carga ansiosa de árboles recursivos y la inicialización de ordenación con ámbito ([#9133](https://github.com/nocobase/nocobase/pull/9133)) por @2013xile
- **[Visualización de datos]** Se corrigió la ordenación de bloques de gráficos para usar medidas y dimensiones con alias en consultas agregadas ([#9131](https://github.com/nocobase/nocobase/pull/9131)) por @2013xile
- **[Colección: SQL]** Se corrigió la falta de validación SQL en las actualizaciones de colecciones SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) por @2013xile

### [v2.0.38](https://www.nocobase.com/en/blog/v2.0.38)

*Fecha de lanzamiento: 2026-04-16*

### 🎉 Nuevas funciones

- **[Empleados de IA]** Mejorar la capacidad de los empleados de IA para analizar documentos cargados ([#9126](https://github.com/nocobase/nocobase/pull/9126)) por @cgyrock

### 🚀 Mejoras

- **[logger]** Añadir información `referer` a los registros de solicitudes ([#9110](https://github.com/nocobase/nocobase/pull/9110)) por @2013xile
- **[sin definir]** Sincronizar la documentación traducida sobre variables de entorno y modo clúster con las últimas actualizaciones en chino. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) por @mytharcher
- **[Empleados de IA]** Después de la selección de bloques de empleados de IA, rellenar el archivo adjunto del formulario en el área de carga ([#9127](https://github.com/nocobase/nocobase/pull/9127)) por @cgyrock
- **[Flujo de trabajo: Nodo manual]** Usar `simplePagination` en las colecciones relacionadas con tareas de flujo de trabajo para un mejor rendimiento de la lista ([#9117](https://github.com/nocobase/nocobase/pull/9117)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Usar `simplePagination` en las colecciones `approvals` y `approvalRecords` para un mejor rendimiento de la lista por @mytharcher

### 🐛 Corrección de errores

- **[client]**

  - Se corrigió que las opciones opcionales de los campos de selección única en la configuración de reglas de campo estuvieran vacías ([#9119](https://github.com/nocobase/nocobase/pull/9119)) por @jiannx
  - Se corrigió la configuración incorrecta del valor predeterminado para subtablas en el formulario. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) por @gchust
- **[Notificación: Mensaje en la aplicación]** Se corrigió el problema por el cual el componente de selección de destinatario no funcionaba correctamente ([#9123](https://github.com/nocobase/nocobase/pull/9123)) por @mytharcher
- **[Empleados de IA]** Se corrigió el problema por el cual la configuración de baseURL del servicio LLM de google-gen-ai no surtía efecto ([#9107](https://github.com/nocobase/nocobase/pull/9107)) por @cgyrock
- **[Gestor de correo electrónico]** Eliminar el aviso de cierre del formulario después de que el correo electrónico se envíe correctamente por @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.14](https://www.nocobase.com/en/blog/v2.1.0-beta.14)

*Fecha de lanzamiento: 2026-04-20*

### 🎉 Nuevas funciones

- **[Calendario]** bloque de calendario v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) por @jiannx
- **[Empleados de IA]** Mejorar la capacidad de los empleados de IA para analizar documentos cargados ([#9126](https://github.com/nocobase/nocobase/pull/9126)) por @cgyrock
- **[Bloque: Árbol]** Añadir bloque de filtro de árbol ([#9016](https://github.com/nocobase/nocobase/pull/9016)) por @jiannx
- **[Gestor de correo electrónico]** Gmail admite el envío de correos electrónicos con alias por @jiannx

### 🚀 Mejoras

- **[sin definir]**

  - Añadir traducción al árabe para la sección de guía y navegación ([#9141](https://github.com/nocobase/nocobase/pull/9141)) por @saraTabbane
  - Sincronizar la documentación traducida sobre variables de entorno y modo clúster con las últimas actualizaciones en chino. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) por @mytharcher
  - Añadir traducción al árabe para la página de inicio de la documentación ([#9043](https://github.com/nocobase/nocobase/pull/9043)) por @gaston98765
  - Se añadió consistencia de la tabla de contenido (TOC) en los README localizados ([#9038](https://github.com/nocobase/nocobase/pull/9038)) por @gaston98765
  - Añadir tabla de contenido al README en francés ([#9037](https://github.com/nocobase/nocobase/pull/9037)) por @saraTabbane
  - Docs: añadir traducción al árabe para las páginas de introducción de inicio rápido ([#9044](https://github.com/nocobase/nocobase/pull/9044)) por @gaston98765
- **[logger]** Añadir información `referer` a los registros de solicitudes ([#9110](https://github.com/nocobase/nocobase/pull/9110)) por @2013xile
- **[client]** añadir interruptor de verificación de campo obligatorio en formularios ([#9060](https://github.com/nocobase/nocobase/pull/9060)) por @jiannx
- **[database]** Optimizar las consultas de recuento del repositorio habilitando DISTINCT solo cuando hay includes presentes. ([#9094](https://github.com/nocobase/nocobase/pull/9094)) por @mytharcher
- **[Departamentos]** Mostrar el campo de clave foránea `parentId` de la colección de departamentos en la interfaz de usuario ([#9130](https://github.com/nocobase/nocobase/pull/9130)) por @2013xile
- **[Empleados de IA]** Después de la selección de bloques de empleados de IA, rellenar el archivo adjunto del formulario en el área de carga ([#9127](https://github.com/nocobase/nocobase/pull/9127)) por @cgyrock
- **[Flujo de trabajo: Nodo manual]** Usar `simplePagination` en las colecciones relacionadas con tareas de flujo de trabajo para un mejor rendimiento de la lista ([#9117](https://github.com/nocobase/nocobase/pull/9117)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Usar `simplePagination` en las colecciones `approvals` y `approvalRecords` para un mejor rendimiento de la lista por @mytharcher

### 🐛 Corrección de errores

- **[client]**

  - Se corrigió un problema por el cual la actualización de valores de subtablas mediante la asignación de campos resultaba en contaminación de datos. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) por @gchust
  - Se corrigió la altura y anchura excesivas de las pestañas en el modo de configuración de página ([#9144](https://github.com/nocobase/nocobase/pull/9144)) por @zhangzhonghe
  - Se corrigió un problema por el cual el componente de campo de asociación era incorrecto en la configuración de valores de campo. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) por @gchust
  - Se corrigió que las opciones opcionales de los campos de selección única en la configuración de reglas de campo estuvieran vacías ([#9119](https://github.com/nocobase/nocobase/pull/9119)) por @jiannx
  - Se corrigió la configuración incorrecta del valor predeterminado para subtablas en el formulario. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) por @gchust
  - corregir error de subtabla al añadir campo muchos a muchos ([#9070](https://github.com/nocobase/nocobase/pull/9070)) por @jiannx
  - Se corrigió un problema por el cual la ventana emergente de selección de registro desde el botón de selección de una subtabla no podía resolver correctamente los valores de las variables del elemento padre. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) por @gchust
- **[data-source-manager]**

  - Se corrigió un problema por el cual los campos de secuencia podían cambiarse a cadena después de la sincronización de la base de datos ([#9143](https://github.com/nocobase/nocobase/pull/9143)) por @2013xile
  - Se corrigió que la sincronización de campos de la colección de archivos eliminara el campo `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) por @2013xile
- **[database]** Se corrigieron riesgos de inyección SQL en la carga ansiosa de árboles recursivos y la inicialización de ordenación con ámbito ([#9133](https://github.com/nocobase/nocobase/pull/9133)) por @2013xile
- **[sin definir]** Corregir error de renderizado en el bloque de recurso personalizado cuando el recurso no existe ([#9095](https://github.com/nocobase/nocobase/pull/9095)) por @Molunerfinn
- **[utils]** Añadir control de seguridad para el envío de solicitudes HTTP del servidor, para evitar posibles SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) por @mytharcher
  Referencia: [Variables de entorno](https://docs.nocobase.com/get-started/installation/env)
- **[flow-engine]**

  - Se corrigió el problema de que los campos muchos a uno de fuentes de datos externas no se podían añadir en el bloque de tabla ([#9068](https://github.com/nocobase/nocobase/pull/9068)) por @jiannx
  - Corregir el error aleatorio del observador cuando cambia la visibilidad de la página ([#9067](https://github.com/nocobase/nocobase/pull/9067)) por @zhangzhonghe
- **[Fuente de datos: Principal]** Se corrigió la sincronización de campos desde la base de datos para vistas conectadas cuando el nombre de la colección difiere del nombre de la vista de la base de datos ([#9155](https://github.com/nocobase/nocobase/pull/9155)) por @2013xile
- **[Gestor de archivos]** Devuelve nulo cuando falta la URL de vista previa ([#9104](https://github.com/nocobase/nocobase/pull/9104)) por @gaston98765
- **[Departamentos]**

  - Se corrigieron valores de departamento principal faltantes o desactualizados después de guardar los departamentos de usuario ([#9156](https://github.com/nocobase/nocobase/pull/9156)) por @2013xile
  - Se corrigió que las listas de departamentos en la gestión de departamentos no siguieran el orden del campo `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) por @2013xile
- **[Flujo de trabajo: JavaScript]** Se corrigió un problema de seguridad en la ejecución de scripts en modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher
- **[Colección: SQL]** Se corrigió la falta de validación SQL en las actualizaciones de colecciones SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) por @2013xile
- **[Visualización de datos]** Se corrigió la ordenación de bloques de gráficos para usar medidas y dimensiones con alias en consultas agregadas ([#9131](https://github.com/nocobase/nocobase/pull/9131)) por @2013xile
- **[Notificación: Mensaje en la aplicación]** Se corrigió el problema por el cual el componente de selección de destinatario no funcionaba correctamente ([#9123](https://github.com/nocobase/nocobase/pull/9123)) por @mytharcher
- **[Empleados de IA]** Se corrigió el problema por el cual la configuración de baseURL del servicio LLM de google-gen-ai no surtía efecto ([#9107](https://github.com/nocobase/nocobase/pull/9107)) por @cgyrock
- **[Gestor de notificaciones]** Optimizar el rendimiento del envío de notificaciones en la aplicación en escenarios de flujo de trabajo ([#9066](https://github.com/nocobase/nocobase/pull/9066)) por @mytharcher
- **[Control de acceso]** Se corrigió un problema por el cual la limpieza de valores de relación con un array vacío podía fallar bajo ACL ([#9059](https://github.com/nocobase/nocobase/pull/9059)) por @2013xile
- **[Campo de colección: Código]** Corregir la interfaz de usuario de los campos de código ([#9061](https://github.com/nocobase/nocobase/pull/9061)) por @2013xile
- **[Gestor de correo electrónico]** Eliminar el aviso de cierre del formulario después de que el correo electrónico se envíe correctamente por @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.20](https://www.nocobase.com/en/blog/v2.1.0-alpha.20)

*Fecha de lanzamiento: 2026-04-20*

### 🎉 Nuevas funciones

- **[Flujo de trabajo]** Añadir campo de registro para trabajos, con el fin de mostrar el contenido del registro de algún nodo para depuración ([#9165](https://github.com/nocobase/nocobase/pull/9165)) por @mytharcher

### 🚀 Mejoras

- **[sin definir]** Añadir traducción al árabe para la sección de guía y navegación ([#9141](https://github.com/nocobase/nocobase/pull/9141)) por @saraTabbane
- **[cli]** Mejorada la salida de ayuda de la CLI de API generada y la agrupación de comandos ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) por @2013xile

### 🐛 Corrección de errores

- **[client]** Se corrigió un problema por el cual la actualización de valores de subtablas mediante la asignación de campos resultaba en contaminación de datos. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) por @gchust
- **[data-source-manager]** Se corrigió un problema por el cual los campos de secuencia podían cambiarse a cadena después de la sincronización de la base de datos ([#9143](https://github.com/nocobase/nocobase/pull/9143)) por @2013xile
- **[cli]** Se corrigieron fallos de inicio de sesión OAuth de la CLI en Windows causados por URL de autorización largas ([#9159](https://github.com/nocobase/nocobase/pull/9159)) por @2013xile
- **[Departamentos]** Se corrigieron valores de departamento principal faltantes o desactualizados después de guardar los departamentos de usuario ([#9156](https://github.com/nocobase/nocobase/pull/9156)) por @2013xile
- **[Fuente de datos: Principal]** Se corrigió la sincronización de campos desde la base de datos para vistas conectadas cuando el nombre de la colección difiere del nombre de la vista de la base de datos ([#9155](https://github.com/nocobase/nocobase/pull/9155)) por @2013xile
- **[Gestor de archivos]** Devuelve nulo cuando falta la URL de vista previa ([#9104](https://github.com/nocobase/nocobase/pull/9104)) por @gaston98765

### [v2.1.0-alpha.19](https://www.nocobase.com/en/blog/v2.1.0-alpha.19)

*Fecha de lanzamiento: 2026-04-19*

### 🎉 Nuevas funciones

- **[cli-v1]** resolver la ruta de almacenamiento desde env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) por @chenos
- **[Calendario]** bloque de calendario v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) por @jiannx

### 🚀 Mejoras

- **[cli]** Mejorado el fallback de ayuda de `nb api` y mensajes de advertencia unificados para fallos de arranque en tiempo de ejecución ([#9153](https://github.com/nocobase/nocobase/pull/9153)) por @2013xile
- **[Departamentos]** Mostrar el campo de clave foránea `parentId` de la colección de departamentos en la interfaz de usuario ([#9130](https://github.com/nocobase/nocobase/pull/9130)) por @2013xile

### 🐛 Corrección de errores

- **[client]** Se corrigió la altura y anchura excesivas de las pestañas en el modo de configuración de página ([#9144](https://github.com/nocobase/nocobase/pull/9144)) por @zhangzhonghe
- **[database]** Se corrigieron riesgos de inyección SQL en la carga ansiosa de árboles recursivos y la inicialización de ordenación con ámbito ([#9133](https://github.com/nocobase/nocobase/pull/9133)) por @2013xile
- **[Flujo de trabajo: JavaScript]** Se corrigió un problema de seguridad en la ejecución de scripts en modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher
- **[IdP: OAuth]** Se corrigieron fallos en el registro de clientes OAuth y la renovación de tokens después de reiniciar el servicio ([#9139](https://github.com/nocobase/nocobase/pull/9139)) por @2013xile
- **[Departamentos]** Se corrigió que las listas de departamentos en la gestión de departamentos no siguieran el orden del campo `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) por @2013xile
- **[Colección: SQL]** Se corrigió la falta de validación SQL en las actualizaciones de colecciones SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) por @2013xile
- **[Visualización de datos]** Se corrigió la ordenación de bloques de gráficos para usar medidas y dimensiones con alias en consultas agregadas ([#9131](https://github.com/nocobase/nocobase/pull/9131)) por @2013xile

### [v2.1.0-alpha.18](https://www.nocobase.com/en/blog/v2.1.0-alpha.18)

*Fecha de lanzamiento: 2026-04-17*

### 🐛 Corrección de errores

- **[data-source-manager]** Se corrigió que la sincronización de campos de la colección de archivos eliminara el campo `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) por @2013xile

### [v2.1.0-alpha.17](https://www.nocobase.com/en/blog/v2.1.0-alpha.17)

*Fecha de lanzamiento: 2026-04-17*

### 🎉 Nuevas funciones

- **[cli]** refactorizar la CLI de NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) por @chenos
- **[Empleados de IA]** Mejorar la capacidad de los empleados de IA para analizar documentos cargados ([#9126](https://github.com/nocobase/nocobase/pull/9126)) por @cgyrock

### 🚀 Mejoras

- **[sin definir]**

  - Sincronizar la documentación traducida sobre variables de entorno y modo clúster con las últimas actualizaciones en chino. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) por @mytharcher
  - Docs: añadir traducción al árabe para las páginas de introducción de inicio rápido ([#9044](https://github.com/nocobase/nocobase/pull/9044)) por @gaston98765
  - Añadir traducción al árabe para la página de inicio de la documentación ([#9043](https://github.com/nocobase/nocobase/pull/9043)) por @gaston98765
- **[logger]** Añadir información `referer` a los registros de solicitudes ([#9110](https://github.com/nocobase/nocobase/pull/9110)) por @2013xile
- **[client]** añadir interruptor de verificación de campo obligatorio en formularios ([#9060](https://github.com/nocobase/nocobase/pull/9060)) por @jiannx
- **[Flujo de trabajo: Nodo manual]** Usar `simplePagination` en las colecciones relacionadas con tareas de flujo de trabajo para un mejor rendimiento de la lista ([#9117](https://github.com/nocobase/nocobase/pull/9117)) por @mytharcher
- **[Empleados de IA]** Después de la selección de bloques de empleados de IA, rellenar el archivo adjunto del formulario en el área de carga ([#9127](https://github.com/nocobase/nocobase/pull/9127)) por @cgyrock
- **[Flujo de trabajo: Aprobación]** Usar `simplePagination` en las colecciones `approvals` y `approvalRecords` para un mejor rendimiento de la lista por @mytharcher

### 🐛 Corrección de errores

- **[client]**

  - Se corrigió que las opciones opcionales de los campos de selección única en la configuración de reglas de campo estuvieran vacías ([#9119](https://github.com/nocobase/nocobase/pull/9119)) por @jiannx
  - Se corrigió un problema por el cual el componente de campo de asociación era incorrecto en la configuración de valores de campo. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) por @gchust
  - Se corrigió la configuración incorrecta del valor predeterminado para subtablas en el formulario. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) por @gchust
- **[utils]** Añadir control de seguridad para el envío de solicitudes HTTP del servidor, para evitar posibles SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) por @mytharcher
  Referencia: [Variables de entorno](https://docs.nocobase.com/get-started/installation/env)
- **[Flujo de trabajo: Nodo de bucle]** Corregir validaciones de nodos de flujo de trabajo ([#9111](https://github.com/nocobase/nocobase/pull/9111)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Se corrigió el problema por el cual el componente de selección de destinatario no funcionaba correctamente ([#9123](https://github.com/nocobase/nocobase/pull/9123)) por @mytharcher
- **[IdP: OAuth]** Se corrigió el acceso OAuth para solicitudes API regulares ([#9120](https://github.com/nocobase/nocobase/pull/9120)) por @2013xile
- **[Empleados de IA]**

  - Se corrigió que la ordenación de consultas agregadas fuera eliminada por ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) por @2013xile
  - Se corrigió el problema por el cual la configuración de baseURL del servicio LLM de google-gen-ai no surtía efecto ([#9107](https://github.com/nocobase/nocobase/pull/9107)) por @cgyrock
- **[Gestor de correo electrónico]** Eliminar el aviso de cierre del formulario después de que el correo electrónico se envíe correctamente por @jiannx
