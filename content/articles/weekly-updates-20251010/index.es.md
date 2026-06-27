---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: mejoras y correcciones en el flujo de trabajo, optimización de la funcionalidad de arrastrar y soltar, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.27](https://www.nocobase.com/en/blog/v1.8.27)

*Fecha de lanzamiento: 2025-10-02*

### 🚀 Mejoras

- **[cliente]** Soporte para rotar imagen al previsualizar ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher
- **[Flujo de trabajo]** Separar la lógica relacionada con el envío en un despachador independiente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Corregir el problema por el cual los submenús de la barra lateral no se resaltaban correctamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu
- **[Flujo de trabajo: Nodo de bucle]** Se corrigió el problema por el cual el proceso avanzaba incorrectamente al siguiente elemento incluso cuando no se cumplían las condiciones del nodo de bucle ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher
- **[Flujo de trabajo]**
  - Corregir el problema de ejecución duplicada debido a un manejo inadecuado de la cola ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher
  - Corregir el problema por el cual la condición de la lista de flujos de trabajo era incorrecta al cargar el contexto de campo asociado en la configuración del flujo de trabajo vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher
  - Corregir el problema por el cual las tareas programadas basadas en campos de fecha no se activaban después del inicio ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.11](https://www.nocobase.com/en/blog/v1.9.0-beta.11)

*Fecha de lanzamiento: 2025-10-09*

### 🚀 Mejoras

* **[servidor]** Agregar manejo del ciclo de vida de apagado graceful para la aplicación ([#7536](https://github.com/nocobase/nocobase/pull/7536)) por @mytharcher
* **[Flujo de trabajo: Nodo de bucle]** Soporte para limitar el número máximo de ciclos para nodos de bucle a través de variables de entorno ([#7543](https://github.com/nocobase/nocobase/pull/7543)) por @mytharcher
* **[Flujo de trabajo]** Soporte para limitar el número máximo de nodos en un flujo de trabajo a través de variables de entorno ([#7542](https://github.com/nocobase/nocobase/pull/7542)) por @mytharcher
* **[Flujo de trabajo: Aprobación]** Agregar botón de impresión en la ventana emergente de detalle en bloques de aprobación personalizados por @mytharcher

### 🐛 Corrección de errores

* **[Gestor de correo electrónico]** Excepción de reautorización por @jiannx

### [v1.9.0-beta.10](https://www.nocobase.com/en/blog/v1.9.0-beta.10)

*Fecha de lanzamiento: 2025-10-09*

### 🐛 Corrección de errores

* **[cliente]** Corregir el problema por el cual la falta de propiedades dinámicas en el componente `AssignedField` causaba errores de carga de archivos en los nodos "Crear registro" o "Actualizar registro" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) por @mytharcher
* **[Formularios públicos]** Corregir el problema por el cual las reglas de carga para campos de archivo en formularios públicos eran incorrectas ([#7553](https://github.com/nocobase/nocobase/pull/7553)) por @mytharcher

### [v1.9.0-beta.9](https://www.nocobase.com/en/blog/v1.9.0-beta.9)

*Fecha de lanzamiento: 2025-09-30*

### 🎉 Nuevas funciones

* **[cliente]**
  * Los bloques de tabla admiten agregar un botón de 'Configuración de columnas' para configurar el orden y la visibilidad de las columnas ([#7204](https://github.com/nocobase/nocobase/pull/7204)) por @kerwin612
  * Soporte para regla de validación de campo ([#7297](https://github.com/nocobase/nocobase/pull/7297)) por @aaaaaajie
* **[Fuente de datos: Principal]**
  * Soporte para leer tablas desde la fuente de datos principal ([#7238](https://github.com/nocobase/nocobase/pull/7238)) por @aaaaaajie
  * Soporte para mostrar tablas definidas por plugins en la fuente de datos principal. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) por @aaaaaajie

### 🚀 Mejoras

* **[cliente]** Soporte para rotar imagen al previsualizar ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher
* **[snowflake-id]** Cambiar los IDs de las tablas del sistema con claves primarias de autoincremento pero sin identificadores únicos a IDs similares a Snowflake de 53 bits ([#7465](https://github.com/nocobase/nocobase/pull/7465)) por @2013xile
* **[Flujo de trabajo]** Separar la lógica relacionada con el envío en un despachador independiente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher
* **[Adaptador de cola RabbitMQ]** mejorar el manejo de la conexión RabbitMQ y la lógica de procesamiento de mensajes por @sdp-ncd
* **[Gestor de correo electrónico]**
  * soporta sincronización por lotes por @jiannx
  * el editor enriquecido soporta redimensionamiento de imágenes por @jiannx

### 🐛 Corrección de errores

* **[cliente]**
  * Corregir un problema por el cual el botón "Configuración de columnas" cargaba columnas desde la tabla dentro del cuadro de diálogo modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) por @kerwin612
  * Corregir el problema por el cual los submenús de la barra lateral no se resaltaban correctamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu
* **[Flujo de trabajo]**
  * Corregir el problema de ejecución duplicada debido a un manejo inadecuado de la cola ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher
  * Corregir el problema por el cual la condición de la lista de flujos de trabajo era incorrecta al cargar el contexto de campo asociado en la configuración del flujo de trabajo vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher
  * Corregir el problema por el cual las tareas programadas basadas en campos de fecha no se activaban después del inicio ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher
* **[Flujo de trabajo: Nodo de bucle]** Se corrigió el problema por el cual el proceso avanzaba incorrectamente al siguiente elemento incluso cuando no se cumplían las condiciones del nodo de bucle ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher
* **[Gestor de correo electrónico]**
  * Asunto de correo basura por @jiannx
  * asunto basura por @jiannx
  * el editor enriquecido soporta saltos de línea suaves por @jiannx
  * Soporta el mismo correo electrónico para varias personas por @jiannx
  * rendimiento óptimo de la lista de mensajes de correo electrónico por @jiannx
  * después de seleccionar filas, establecer "Leído" y "No leído" por @jiannx
  * agregar campo rawId para optimización del rendimiento por @jiannx
  * el atributo ref en html causa una excepción de renderizado por @jiannx
  * el contenido del subcorreo no se puede filtrar por @jiannx
  * soporte de resincronización por @jiannx
  * Distinguir manualmente entre reenviar y responder por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.5](https://www.nocobase.com/en/blog/v2.0.0-alpha.5)

*Fecha de lanzamiento: 2025-10-10*

### 🐛 Corrección de errores

- **[servidor]** Error de migración de clave primaria ([#7563](https://github.com/nocobase/nocobase/pull/7563)) por @2013xile
- **[cliente]**
  - Corregir el problema de no actualizar los datos después de enviar el formulario ([#7560](https://github.com/nocobase/nocobase/pull/7560)) por @zhangzhonghe
  - Corregir el problema por el cual la falta de propiedades dinámicas en el componente `AssignedField` causaba errores de carga de archivos en los nodos "Crear registro" o "Actualizar registro" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) por @mytharcher
- **[Calendario]** corregir problema de consulta de datos causado por identificador único en el bloque de calendario ([#7562](https://github.com/nocobase/nocobase/pull/7562)) por @katherinehhh
- **[Bloque: plantilla (obsoleto)]** Se corrigió un problema por el cual se activaban solicitudes innecesarias para plantillas de bloque al abrir o cerrar modales ([#7561](https://github.com/nocobase/nocobase/pull/7561)) por @gchust
- **[Formularios públicos]** Corregir el problema por el cual las reglas de carga para campos de archivo en formularios públicos eran incorrectas ([#7553](https://github.com/nocobase/nocobase/pull/7553)) por @mytharcher
- **[Gestor de múltiples aplicaciones (obsoleto)]** Corregir la validación del puerto antes de la migración de datos de múltiples aplicaciones ([#7540](https://github.com/nocobase/nocobase/pull/7540)) por @jiannx

### [v2.0.0-alpha.4](https://www.nocobase.com/en/blog/v2.0.0-alpha.4)

*Fecha de lanzamiento: 2025-10-05*

### 🚀 Mejoras

* **[motor-de-flujo]** Optimizar la funcionalidad de arrastrar y soltar ([#7526](https://github.com/nocobase/nocobase/pull/7526)) por @zhangzhonghe
* **[Flujo de trabajo: Nodo de bucle]** Soporte para limitar el número máximo de ciclos para nodos de bucle a través de variables de entorno ([#7543](https://github.com/nocobase/nocobase/pull/7543)) por @mytharcher
* **[Flujo de trabajo]** Soporte para limitar el número máximo de nodos en un flujo de trabajo a través de variables de entorno ([#7542](https://github.com/nocobase/nocobase/pull/7542)) por @mytharcher
* **[Flujo de trabajo: Aprobación]** Agregar botón de impresión en la ventana emergente de detalle en bloques de aprobación personalizados por @mytharcher

### 🐛 Corrección de errores

* **[cliente]** Se corrigió un problema por el cual la acción "Ejecutar" en el editor de código no funcionaba, asegurando que los usuarios ahora puedan ejecutar código correctamente. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) por @gchust
* **[Empleados de IA]** Corregir el error en la página de configuración de permisos del empleado de IA ([#7548](https://github.com/nocobase/nocobase/pull/7548)) por @2013xile
* **[Flujo de trabajo]** Corregir el problema por el cual agregar un flujo de trabajo en la configuración del botón de flujo de trabajo vinculado causaba que la aplicación se congelara después de hacer clic ([#7541](https://github.com/nocobase/nocobase/pull/7541)) por @mytharcher
* **[Gestor de correo electrónico]** Excepción de reautorización por @jiannx

### [v1.9.0-alpha.17](https://www.nocobase.com/en/blog/v1.9.0-alpha.17)

*Fecha de lanzamiento: 2025-09-30*

### 🚀 Mejoras

* **[Flujo de trabajo]** Separar la lógica relacionada con el envío en un despachador independiente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher

### 🐛 Corrección de errores

* **[Flujo de trabajo]**
  * Corregir el problema de ejecución duplicada debido a un manejo inadecuado de la cola ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher
  * Corregir el problema por el cual las tareas programadas basadas en campos de fecha no se activaban después del inicio ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher

### [v2.0.0-alpha.1](https://www.nocobase.com/en/blog/v2.0.0-alpha.1)

*Fecha de lanzamiento: 2025-09-30

### 🚀 Mejoras

- **[servidor]** Agregar manejo del ciclo de vida de apagado graceful para la aplicación ([#7536](https://github.com/nocobase/nocobase/pull/7536)) por @mytharcher
