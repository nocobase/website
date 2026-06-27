---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: Agregar variable \"Tipo de dispositivo actual\", Mejorar la función de búsqueda web del plugin-ai"
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.29](https://www.nocobase.com/en/blog/v1.8.29)

*Fecha de lanzamiento: 2025-10-15*

### 🚀 Mejoras

* **[Flujo de trabajo: Aprobación]** Refactorizar la configuración de ramas para adaptarse a los cambios del núcleo por @mytharcher

### 🐛 Corrección de errores

* **[Flujo de trabajo: Aprobación]** Corregir el problema de errores en el script de migración debido a tablas inexistentes cuando la aplicación no está instalada por @mytharcher

### [v1.8.28](https://www.nocobase.com/en/blog/v1.8.28)

*Fecha de lanzamiento: 2025-10-14*

### 🚀 Mejoras

* **[cliente]** Para obtener un tipo MIME de archivo más preciso, usar el paquete `mime` para detectar el tipo MIME de archivos en el cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher
* **[Flujo de trabajo]**
  * Soporte para limitar el número máximo de nodos en un flujo de trabajo mediante variables de entorno ([#7542](https://github.com/nocobase/nocobase/pull/7542)) por @mytharcher
  * Añadir opción `keepBranch` al eliminar un nodo ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher
* **[Flujo de trabajo: Nodo de bucle]** Soporte para limitar el número máximo de ciclos para nodos de bucle mediante variables de entorno ([#7543](https://github.com/nocobase/nocobase/pull/7543)) por @mytharcher
* **[Flujo de trabajo: Aprobación]** Añadir botón de impresión en la ventana emergente de detalle en bloques de aprobación personalizados por @mytharcher

### 🐛 Corrección de errores

* **[cliente]**
  * Corregir el problema donde las imágenes no se mostraban correctamente cuando se rotaban y escalaban durante la vista previa ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher
  * Corregir el problema donde la falta de propiedades dinámicas en el componente `AssignedField` causaba errores de carga de archivos en los nodos "Crear registro" o "Actualizar registro" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) por @mytharcher
* **[Formularios públicos]** Corregir el problema donde las reglas de carga para campos de archivo en formularios públicos eran incorrectas ([#7553](https://github.com/nocobase/nocobase/pull/7553)) por @mytharcher
* **[Calendario]** corregir problema de consulta de datos causado por un identificador único en el bloque de calendario ([#7562](https://github.com/nocobase/nocobase/pull/7562)) por @katherinehhh
* **[Autenticación: LDAP]** Corregir el fallo de enlace LDAP con DN no ASCII (UTF-8) en Active Directory por @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.12](https://www.nocobase.com/en/blog/v1.9.0-beta.12)

*Fecha de lanzamiento: 2025-10-11*

### 🐛 Corrección de errores

* **[servidor]** Error de migración de clave primaria ([#7568](https://github.com/nocobase/nocobase/pull/7568)) por @2013xile
* **[Calendario]** corregir problema de consulta de datos causado por un identificador único en el bloque de calendario ([#7562](https://github.com/nocobase/nocobase/pull/7562)) por @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.8](https://www.nocobase.com/en/blog/v2.0.0-alpha.8)

*Fecha de lanzamiento: 2025-10-14*

### 🎉 Nuevas funciones

* **[Empleados IA]** Mejorar la función de búsqueda web del plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) por @cgyrock

### 🚀 Mejoras

* **[cliente]** Para obtener un tipo MIME de archivo más preciso, usar el paquete `mime` para detectar el tipo MIME de archivos en el cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher
* **[motor-de-flujo]**
  * soporte para variable de ventana emergente ([#7583](https://github.com/nocobase/nocobase/pull/7583)) por @gchust
  * Mejorar la experiencia de edición de código con fragmentos más ricos y autocompletado de código contextual para varios escenarios ([#7559](https://github.com/nocobase/nocobase/pull/7559)) por @gchust
  * Estandarizar los flujos de trabajo automáticos para que se activen consistentemente mediante el evento "beforeRender", asegurando una operación predecible y unificada en todos los procesos. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) por @gchust
* **[Flujo de trabajo]** Añadir opción `keepBranch` al eliminar un nodo ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher
* **[Visualización de datos]** Ampliar tipos de gráficos; Optimizar la interfaz de usuario y la experiencia interactiva. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) por @heziqiang
* **[Flujo de trabajo: Aprobación]** Refactorizar la configuración de ramas para adaptarse a los cambios del núcleo por @mytharcher

### 🐛 Corrección de errores

* **[cliente]**
  * Corregir problemas de visualización anormal de la página al cambiar la paginación de la tabla ([#7572](https://github.com/nocobase/nocobase/pull/7572)) por @zhangzhonghe
  * No se puede configurar el valor del campo asignado para las acciones `Actualizar` y `Actualización masiva` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) por @gchust
  * Corregir el problema donde las imágenes no se mostraban correctamente cuando se rotaban y escalaban durante la vista previa ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher
* **[Flujo de trabajo: Aprobación]** Corregir el problema de errores en el script de migración debido a tablas inexistentes cuando la aplicación no está instalada por @mytharcher
* **[Autenticación: LDAP]** Corregir el fallo de enlace LDAP con DN no ASCII (UTF-8) en Active Directory por @2013xile

### [v2.0.0-alpha.7](https://www.nocobase.com/en/blog/v2.0.0-alpha.7)

*Fecha de lanzamiento: 2025-10-13*

### 🎉 Nuevas funciones

* **[cliente]** Añadir variable "Tipo de dispositivo actual" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) por @zhangzhonghe

### [v2.0.0-alpha.6](https://www.nocobase.com/en/blog/v2.0.0-alpha.6)

*Fecha de lanzamiento: 2025-10-11*

### 🐛 Corrección de errores

* **[servidor]** Error de migración de clave primaria ([#7568](https://github.com/nocobase/nocobase/pull/7568)) por @2013xile
* **[indefinido]** La coincidencia de rutas admite nuevas aplicaciones múltiples ([#7570](https://github.com/nocobase/nocobase/pull/7570)) por @jiannx
* **[Empleados IA]** Corregir errores en la herramienta de modelado de datos del empleado IA al usar ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) por @cgyrock
