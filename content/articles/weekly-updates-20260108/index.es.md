---
title: "Actualizaciones Semanales de NocoBase: Optimización y Corrección de Errores"
description: "La actualización de esta semana incluye: Soporte para componentes de mantenimiento definidos por plugins cuando la aplicación entra en estado de mantenimiento, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.33](https://www.nocobase.com/en/blog/v1.9.33)

*Fecha de lanzamiento: 2026-01-04*

### 🎉 Nuevas funciones

- **[cliente]** Soporte para componentes de mantenimiento definidos por plugins cuando la aplicación entra en estado de mantenimiento ([#8252](https://github.com/nocobase/nocobase/pull/8252)) por @cgyrock
- **[Gestor de archivos]** Soporte para configuración del método de renombrado de archivos ([#8231](https://github.com/nocobase/nocobase/pull/8231)) por @JAVA-LW
- **[Almacenamiento de archivos: S3(Pro)]** Añadida opción de modo de renombrado para almacenamiento S3 Pro por @mytharcher

### 🚀 Mejoras

- **[Gestor de migraciones]** Mejoras en las comprobaciones de migración, soporte de descarga SQL, formato de registros y visibilidad del proceso de ejecución por @cgyrock

### 🐛 Corrección de errores

- **[base de datos]**

  - Incluir el ámbito de la tabla intermedia al consultar relaciones m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) por @2013xile
  - Corregir `appends` de objeto en `OptionsParser`, y aumentar `arrayLimit` para parámetros ([#8328](https://github.com/nocobase/nocobase/pull/8328)) por @mytharcher
- **[cliente]** Corregir el error lanzado en la configuración del bloque de formulario de filtro de un campo m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) por @mytharcher
- **[Gestor de tareas asíncronas]** Corregir el idioma al cancelar una tarea en segundo plano ([#8245](https://github.com/nocobase/nocobase/pull/8245)) por @mytharcher
- **[Gestor de archivos]** Corregir el error al subir un archivo de más de 5 MB a AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) por @mytharcher
- **[Flujo de trabajo]** Corregidos los eventos de base de datos que se volvían inválidos después de refrescar la fuente de datos externa ([#8207](https://github.com/nocobase/nocobase/pull/8207)) por @cgyrock
- **[Colección: Árbol]** Actualizar rutas después de crear nodos de colección de árbol de forma masiva ([#8267](https://github.com/nocobase/nocobase/pull/8267)) por @2013xile
- **[Fuente de datos: PostgreSQL externo]** Corregidos los eventos de base de datos que se volvían inválidos después de refrescar la fuente de datos externa por @cgyrock
- **[Fuente de datos: Oracle externo]** Corregidos los eventos de base de datos que se volvían inválidos después de refrescar la fuente de datos externa por @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.6](https://www.nocobase.com/en/blog/v2.0.0-beta.6)

*Fecha de lanzamiento: 2026-01-07*

### 🚀 Mejoras

- **[Flujo de trabajo: Aprobación]** Simplificar parámetros en consultas y mejorar el rendimiento por @mytharcher

### 🐛 Corrección de errores

- **[sdk]** Mejorar la implementación del intercambio de tokens ([#8357](https://github.com/nocobase/nocobase/pull/8357)) por @chenos
- **[cliente]** corregir que los campos de asociación de fuentes de datos externas no carguen datos de asociación en bloques de formulario ([#8356](https://github.com/nocobase/nocobase/pull/8356)) por @katherinehhh
- **[Flujo de trabajo: Nodo de bucle]** Corregir el problema donde un nodo fallido en una rama condicional no podía pasar el estado al nodo de ramificación superior ([#8360](https://github.com/nocobase/nocobase/pull/8360)) por @mytharcher
- **[Control de acceso]** Permitir que los campos de asociación se asocien usando las claves de destino ([#8352](https://github.com/nocobase/nocobase/pull/8352)) por @2013xile
- **[Flujo de trabajo: Webhook]** Corregir el error 404 al enviar POST a la URL del webhook en una subaplicación por @mytharcher
- **[Gestor de correo electrónico]** Corregir que el enlace de respuesta de Outlook se desconectara ocasionalmente por @jiannx

### [v2.0.0-beta.5](https://www.nocobase.com/en/blog/v2.0.0-beta.5)

*Fecha de lanzamiento: 2026-01-06*

### 🚀 Mejoras

- **[cliente]** Redimensionar automáticamente el área de texto en el formulario de edición de tareas de IA. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) por @heziqiang
- **[Flujo de trabajo: Aprobación]** Añadir lógica de reparación para audiencias sincronizadas después de la migración por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Corregido un problema donde los permisos de campo y acción no se recalculaban después de la paginación en bloques de detalle, lista y formulario. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) por @gchust
- **[Flujo de trabajo: Aprobación]** Corregir error de compilación causado por dependencias faltantes por @mytharcher

### [v2.0.0-beta.4](https://www.nocobase.com/en/blog/v2.0.0-beta.4)

*Fecha de lanzamiento: 2026-01-05*

### 🐛 Corrección de errores

- **[Acción: Importar registros]** Corregir mensaje de error incorrecto cuando se activa un error de restricción única durante la importación XLSX asíncrona ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock
- **[Acción: Exportar registros Pro]** Corregir error cuando las subaplicaciones ejecutan tareas de importación/exportación asíncronas mientras la aplicación principal no tiene habilitado el plugin de importación/exportación pro por @cgyrock
- **[Gestor de correo electrónico]** mostrar el botón de responder a todos y el ámbito de datos soporta el filtrado de mensajes secundarios. por @jiannx

### [v2.0.0-beta.3](https://www.nocobase.com/en/blog/v2.0.0-beta.3)

*Fecha de lanzamiento: 2026-01-05*

### 🚀 Mejoras

- **[Control de acceso]** Mejorar las comprobaciones de permisos al modificar campos de asociación anidados ([#7856](https://github.com/nocobase/nocobase/pull/7856)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]** Corregir el problema donde los campos de asociación no son correctos en el componente `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) por @mytharcher
- **[Fuente de datos: Principal]** Los metadatos de la colección de vista deben incluir las opciones del campo fuente ([#8337](https://github.com/nocobase/nocobase/pull/8337)) por @2013xile
- **[Flujo de trabajo: Aprobación]** Corregir el problema donde los campos de filtro no funcionan correctamente en el centro de tareas por @mytharcher

### [v2.0.0-beta.2](https://www.nocobase.com/en/blog/v2.0.0-beta.2)

*Fecha de lanzamiento: 2026-01-04*

### 🐛 Corrección de errores

- **[motor de flujo]** Corregir un problema donde podía ocurrir contaminación de estado al abrir ventanas emergentes múltiples veces. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) por @gchust
- **[base de datos]** Corregir `appends` de objeto en `OptionsParser`, y aumentar `arrayLimit` para parámetros ([#8328](https://github.com/nocobase/nocobase/pull/8328)) por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.63](https://www.nocobase.com/en/blog/v2.0.0-alpha.63)

*Fecha de lanzamiento: 2026-01-07*

### 🚀 Mejoras

- **[cliente]**

  - evitar el re-renderizado completo de la tabla al actualizar una celda ([#8349](https://github.com/nocobase/nocobase/pull/8349)) por @katherinehhh
  - Redimensionar automáticamente el área de texto en el formulario de edición de tareas de IA. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) por @heziqiang
- **[Flujo de trabajo: Aprobación]**

  - Añadir lógica de reparación para audiencias sincronizadas después de la migración por @mytharcher
  - Simplificar parámetros en consultas y mejorar el rendimiento por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Corregido un problema donde los permisos de campo y acción no se recalculaban después de la paginación en bloques de detalle, lista y formulario. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) por @gchust
  - corregir que los campos de asociación de fuentes de datos externas no carguen datos de asociación en bloques de formulario ([#8356](https://github.com/nocobase/nocobase/pull/8356)) por @katherinehhh
- **[sdk]** Mejorar la implementación del intercambio de tokens ([#8357](https://github.com/nocobase/nocobase/pull/8357)) por @chenos
- **[Control de acceso]** Permitir que los campos de asociación se asocien usando las claves de destino ([#8352](https://github.com/nocobase/nocobase/pull/8352)) por @2013xile
- **[Flujo de trabajo: Nodo de bucle]** Corregir el problema donde un nodo fallido en una rama condicional no podía pasar el estado al nodo de ramificación superior ([#8360](https://github.com/nocobase/nocobase/pull/8360)) por @mytharcher
- **[Flujo de trabajo: Webhook]** Corregir el error 404 al enviar POST a la URL del webhook en una subaplicación por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir error de compilación causado por dependencias faltantes por @mytharcher
- **[Gestor de correo electrónico]** Corregir que el enlace de respuesta de Outlook se desconectara ocasionalmente por @jiannx

### [v2.0.0-alpha.62](https://www.nocobase.com/en/blog/v2.0.0-alpha.62)

*Fecha de lanzamiento: 2026-01-05*

### 🚀 Mejoras

- **[Control de acceso]** Mejorar las comprobaciones de permisos al modificar campos de asociación anidados ([#7856](https://github.com/nocobase/nocobase/pull/7856)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]**

  - corregir la lógica de refinamiento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh
  - Corregir el problema donde los campos de asociación no son correctos en el componente `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) por @mytharcher
  - corregir parámetros de filtro incorrectos para el campo de relación Select en subtabla editable ([#8335](https://github.com/nocobase/nocobase/pull/8335)) por @katherinehhh
- **[motor de flujo]** Corregir un problema donde podía ocurrir contaminación de estado al abrir ventanas emergentes múltiples veces. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) por @gchust
- **[base de datos]** Corregir `appends` de objeto en `OptionsParser`, y aumentar `arrayLimit` para parámetros ([#8328](https://github.com/nocobase/nocobase/pull/8328)) por @mytharcher
- **[Acción: Importar registros]** Corregir mensaje de error incorrecto cuando se activa un error de restricción única durante la importación XLSX asíncrona ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock
- **[Fuente de datos: Principal]** Los metadatos de la colección de vista deben incluir las opciones del campo fuente ([#8337](https://github.com/nocobase/nocobase/pull/8337)) por @2013xile
- **[Acción: Exportar registros Pro]** Corregir error cuando las subaplicaciones ejecutan tareas de importación/exportación asíncronas mientras la aplicación principal no tiene habilitado el plugin de importación/exportación pro por @cgyrock
- **[Flujo de trabajo: Aprobación]** Corregir el problema donde los campos de filtro no funcionan correctamente en el centro de tareas por @mytharcher
- **[Gestor de correo electrónico]** mostrar el botón de responder a todos y el ámbito de datos soporta el filtrado de mensajes secundarios. por @jiannx

### [v2.0.0-alpha.59](https://www.nocobase.com/en/blog/v2.0.0-alpha.59)

*Fecha de lanzamiento: 2025-12-25*

### 🚀 Mejoras

- **[motor de flujo]**
  - Optimizar problemas de rendimiento al cambiar modos de configuración ([#8241](https://github.com/nocobase/nocobase/pull/8241)) por @zhangzhonghe
  - Soporte para el objeto FormData en el entorno runjs. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) por @gchust

### 🐛 Corrección de errores

- **[cliente]** Corregir desbordamiento de pila causado por un bucle infinito en la carga diferida de campos de asociación de visualización ([#8262](https://github.com/nocobase/nocobase/pull/8262)) por @zhangzhonghe
