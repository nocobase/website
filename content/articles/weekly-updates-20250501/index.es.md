---
title: "Actualizaciones semanales de NocoBase: Los bloques admiten reglas de vinculación"
description: "Las actualizaciones de esta semana incluyen: los bloques admiten reglas de vinculación para visualización dinámica, soporte para variable de respuesta en mensaje de éxito de acción de solicitud personalizada, y más."
---

Resume las notas de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/en/blog/v1.6.23)

*Fecha de lanzamiento: 2025-04-23*

#### 🚀 Mejoras

- **[cli]** Optimizar la lógica interna del comando `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) por @chenos
- **[Impresión de plantillas]** Se reemplazó el control de acciones del origen de datos con control de acceso basado en roles de cliente. por @sheldon66

#### 🐛 Corrección de errores

- **[cli]** Actualizar automáticamente package.json al actualizar ([#6747](https://github.com/nocobase/nocobase/pull/6747)) por @chenos
- **[cliente]**

  - Falta filtro para datos ya asociados al añadir datos de asociación ([#6750](https://github.com/nocobase/nocobase/pull/6750)) por @katherinehhh
  - Falta 'registro actual' en la regla de enlace del botón 'Añadir hijo' de la tabla de árbol ([#6752](https://github.com/nocobase/nocobase/pull/6752)) por @katherinehhh
- **[Acción: Importar registros]** Corregir las excepciones de importación y exportación que ocurren al establecer permisos de campo. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) por @aaaaaajie
- **[Bloque: Gantt]** Los meses del bloque del diagrama de Gantt se superponen en el encabezado del calendario para la vista mensual ([#6753](https://github.com/nocobase/nocobase/pull/6753)) por @katherinehhh
- **[Acción: Exportar registros Pro]**

  - El botón de exportación Pro pierde los parámetros de filtro después de ordenar la columna de la tabla por @katherinehhh
  - Corregir las excepciones de importación y exportación que ocurren al establecer permisos de campo. por @aaaaaajie
- **[Almacenamiento de archivos: S3(Pro)]** Corregir los datos de respuesta del archivo subido por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir la precarga de campos de asociación para registros por @mytharcher

### [v1.6.24](https://www.nocobase.com/en/blog/v1.6.24)

*Fecha de lanzamiento: 2025-04-24*

#### 🚀 Mejoras

- **[cliente]** Ajustar mensaje de subida ([#6757](https://github.com/nocobase/nocobase/pull/6757)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**
  - Solo la acción de exportación en la colección de vistas es compatible cuando writableView es falso ([#6763](https://github.com/nocobase/nocobase/pull/6763)) por @katherinehhh
  - Creación inesperada de datos de asociación al mostrar un campo de asociación en un subformulario/subtabla en un formulario de creación ([#6727](https://github.com/nocobase/nocobase/pull/6727)) por @katherinehhh
  - Datos incorrectos recuperados para campos de matriz muchos a muchos de tablas relacionadas en formularios ([#6744](https://github.com/nocobase/nocobase/pull/6744)) por @2013xile

### [v1.6.25](https://www.nocobase.com/en/blog/v1.6.25)

*Fecha de lanzamiento: 2025-04-29*

#### 🎉 Nuevas funciones

- **[indefinido]** añadir ci de publicación para el kit de licencia ([#6786](https://github.com/nocobase/nocobase/pull/6786)) por @jiannx
- **[Visualización de datos: ECharts]** Añadir configuración "Invertir eje Y" para gráficos de barras por @2013xile

#### 🚀 Mejoras

- **[utilidades]** Aumentar la altura de la lista de campos del botón de filtro y ordenar/clasificar los campos ([#6779](https://github.com/nocobase/nocobase/pull/6779)) por @zhangzhonghe
- **[cliente]** optimizar el estilo del botón de añadir subtabla y alinear el paginador en la misma fila ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh
- **[Gestor de archivos]** Añadir opción de tiempo de espera de OSS con valor predeterminado de 10 minutos ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher
- **[Política de contraseñas]** Cambiar la caducidad de contraseña predeterminada a que nunca caduque por @2013xile
- **[WeCom]** Priorizar el correo electrónico corporativo sobre el personal al actualizar el correo electrónico del usuario por @2013xile

#### 🐛 Corrección de errores

- **[cliente]**

  - En el bloque plegable, al hacer clic en el botón de borrar en el cuadro de búsqueda del campo de relación, no se debe eliminar el rango de datos ([#6782](https://github.com/nocobase/nocobase/pull/6782)) por @zhangzhonghe
  - El campo de asociación no envía datos al mostrar un campo de la colección relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh
  - Prohibir mover menús antes o después de las pestañas de página ([#6777](https://github.com/nocobase/nocobase/pull/6777)) por @zhangzhonghe
  - El bloque de tabla muestra datos duplicados al filtrar ([#6792](https://github.com/nocobase/nocobase/pull/6792)) por @zhangzhonghe
  - En el formulario de filtro, cambiar el operador de campo y luego actualizar la página provoca un error ([#6781](https://github.com/nocobase/nocobase/pull/6781)) por @zhangzhonghe
- **[base de datos]**

  - Evitar que se lance un error cuando el tipo de datos no es una cadena ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher
  - añadir unavailableActions a la colección sql y a la colección de vistas ([#6765](https://github.com/nocobase/nocobase/pull/6765)) por @katherinehhh
- **[create-nocobase-app]** Solucionar temporalmente el problema de mariadb degradando a 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) por @chenos
- **[Autenticación]** No permitir cambiar el nombre del autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile
- **[Impresión de plantillas]** Corrección: Lógica de validación de permisos correcta para evitar acciones no autorizadas. por @sheldon66
- **[Almacenamiento de archivos: S3(Pro)]** caducidad de la url de acceso no válida por @jiannx
- **[Bloque: Árbol]** Después de conectar a través de una clave externa, al hacer clic para activar el filtrado, se obtienen condiciones de filtro vacías por @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.22](https://www.nocobase.com/en/blog/v1.7.0-beta.22)

*Fecha de lanzamiento: 2025-04-24*

#### 🚀 Mejoras

- **[cli]** Optimizar la lógica interna del comando `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) por @chenos

#### 🐛 Corrección de errores

- **[cliente]** problema de visualización con reglas de enlace en datos de asociación multinivel ([#6755](https://github.com/nocobase/nocobase/pull/6755)) por @katherinehhh

### [v1.7.0-beta.23](https://www.nocobase.com/en/blog/v1.7.0-beta.23)

*Fecha de lanzamiento: 2025-04-24*

#### 🎉 Nuevas funciones

- **[Acción: Solicitud personalizada]** soportar variable de respuesta en el mensaje de éxito de la acción de solicitud personalizada ([#6694](https://github.com/nocobase/nocobase/pull/6694)) por @katherinehhh

#### 🚀 Mejoras

- **[cliente]** Ajustar mensaje de subida ([#6757](https://github.com/nocobase/nocobase/pull/6757)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**
  - Datos incorrectos recuperados para campos de matriz muchos a muchos de tablas relacionadas en formularios ([#6744](https://github.com/nocobase/nocobase/pull/6744)) por @2013xile
  - Solo la acción de exportación en la colección de vistas es compatible cuando writableView es falso ([#6763](https://github.com/nocobase/nocobase/pull/6763)) por @katherinehhh
  - Creación inesperada de datos de asociación al mostrar un campo de asociación en un subformulario/subtabla en un formulario de creación ([#6727](https://github.com/nocobase/nocobase/pull/6727)) por @katherinehhh

### [v1.7.0-beta.24](https://www.nocobase.com/en/blog/v1.7.0-beta.24)

*Fecha de lanzamiento: 2025-04-25*

#### 🎉 Nuevas funciones

- **[cliente]** soportar la configuración de reglas de enlace en bloques para mostrar/ocultar dinámicamente ([#6636](https://github.com/nocobase/nocobase/pull/6636)) por @katherinehhh

#### 🚀 Mejoras

- **[cliente]** mantener la funcionalidad de plantilla de referencia ([#6743](https://github.com/nocobase/nocobase/pull/6743)) por @gchust
- **[Visualización de datos]** Añadir API extendida para la configuración de la interfaz de campo ([#6742](https://github.com/nocobase/nocobase/pull/6742)) por @2013xile

#### 🐛 Corrección de errores

- **[create-nocobase-app]** Solucionar temporalmente el problema de mariadb degradando a 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) por @chenos
- **[base de datos]** añadir unavailableActions a la colección sql y a la colección de vistas ([#6765](https://github.com/nocobase/nocobase/pull/6765)) por @katherinehhh
- **[cliente]** problema del operador del parámetro de consulta de url ([#6770](https://github.com/nocobase/nocobase/pull/6770)) por @katherinehhh
- **[Bloque: Panel de acciones]** el icono del panel de acciones falta cuando solo icono está habilitado ([#6773](https://github.com/nocobase/nocobase/pull/6773)) por @katherinehhh
- **[Flujo de trabajo: nodo de cálculo de fecha]** Corregir error en navegador heredado sin API `Intl` por @mytharcher

### [v1.7.0-beta.25](https://www.nocobase.com/en/blog/v1.7.0-beta.25)

*Fecha de lanzamiento: 2025-04-28*

#### 🎉 Nuevas funciones

- **[Gestor de archivos]** Función: Añadir API `getFileStream` para soporte de transmisión de archivos. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) por @sheldon66

#### 🚀 Mejoras

- **[cliente]** mostrar el título del botón con información sobre herramientas al pasar el ratón sobre el icono de acción ([#6761](https://github.com/nocobase/nocobase/pull/6761)) por @katherinehhh
- **[WeCom]** Priorizar el correo electrónico corporativo sobre el personal al actualizar el correo electrónico del usuario por @2013xile

#### 🐛 Corrección de errores

- **[Almacenamiento de archivos: S3(Pro)]** caducidad de la url de acceso no válida por @jiannx
- **[Impresión de plantillas]** Corrección: Lógica de validación de permisos correcta para evitar acciones no autorizadas. por @sheldon66
- **[Bloque: Árbol]** Después de conectar a través de una clave externa, al hacer clic para activar el filtrado, se obtienen condiciones de filtro vacías por @zhangzhonghe

### [v1.7.0-beta.26](https://www.nocobase.com/en/blog/v1.7.0-beta.26)

*Fecha de lanzamiento: 2025-04-28*

#### 🎉 Nuevas funciones

- **[indefinido]** añadir ci de publicación para el kit de licencia ([#6786](https://github.com/nocobase/nocobase/pull/6786)) por @jiannx

#### 🚀 Mejoras

- **[utilidades]** Aumentar la altura de la lista de campos del botón de filtro y ordenar/clasificar los campos ([#6779](https://github.com/nocobase/nocobase/pull/6779)) por @zhangzhonghe

#### 🐛 Corrección de errores

- **[cliente]**
  - En el bloque plegable, al hacer clic en el botón de borrar en el cuadro de búsqueda del campo de relación, no se debe eliminar el rango de datos ([#6782](https://github.com/nocobase/nocobase/pull/6782)) por @zhangzhonghe
  - En el formulario de filtro, cambiar el operador de campo y luego actualizar la página provoca un error ([#6781](https://github.com/nocobase/nocobase/pull/6781)) por @zhangzhonghe
  - El bloque de tabla muestra datos duplicados al filtrar ([#6792](https://github.com/nocobase/nocobase/pull/6792)) por @zhangzhonghe
  - problema de alineación del botón de añadir registro hijo en la tabla de árbol ([#6791](https://github.com/nocobase/nocobase/pull/6791)) por @katherinehhh
  - Prohibir mover menús antes o después de las pestañas de página ([#6777](https://github.com/nocobase/nocobase/pull/6777)) por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/en/blog/v1.7.0-alpha.12)

*Fecha de lanzamiento: 2025-04-24*

#### 🚀 Mejoras

- **[cli]** Optimizar la lógica interna del comando `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) por @chenos
- **[create-nocobase-app]** Actualizar dependencias y eliminar soporte SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) por @chenos
- **[Móvil]** Optimizar la velocidad de apertura de la ventana emergente del selector de fecha móvil ([#6735](https://github.com/nocobase/nocobase/pull/6735)) por @zhangzhonghe
- **[Bloque: plantilla]** soportar convertir bloque de plantilla a bloque normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) por @gchust
- **[Gestor de archivos]** Exponer API de utilidades ([#6705](https://github.com/nocobase/nocobase/pull/6705)) por @mytharcher
- **[Editor de temas]** Permitir establecer el ancho de la barra lateral en la configuración del tema ([#6720](https://github.com/nocobase/nocobase/pull/6720)) por @chenos
- **[Flujo de trabajo]** Añadir tipos de fecha al conjunto de tipos de variable ([#6717](https://github.com/nocobase/nocobase/pull/6717)) por @mytharcher
- **[Impresión de plantillas]** Se reemplazó el control de acciones del origen de datos con control de acceso basado en roles de cliente. por @sheldon66

#### 🐛 Corrección de errores

- **[cliente]**

  - problema de visualización con reglas de enlace en datos de asociación multinivel ([#6755](https://github.com/nocobase/nocobase/pull/6755)) por @katherinehhh
  - Falta 'registro actual' en la regla de enlace del botón 'Añadir hijo' de la tabla de árbol ([#6752](https://github.com/nocobase/nocobase/pull/6752)) por @katherinehhh
  - Problema al actualizar bloques de datos después de un envío exitoso ([#6748](https://github.com/nocobase/nocobase/pull/6748)) por @zhangzhonghe
  - El problema del botón de colapso en el menú izquierdo que queda oculto por la ventana emergente del flujo de trabajo ([#6733](https://github.com/nocobase/nocobase/pull/6733)) por @zhangzhonghe
  - El problema de que los iconos de la barra de navegación superior móvil son difíciles de eliminar ([#6734](https://github.com/nocobase/nocobase/pull/6734)) por @zhangzhonghe
  - visualización incorrecta del valor para "Habilitar columna de índice" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) por @katherinehhh
  - La condición del campo de fecha y hora no funciona en las reglas de enlace ([#6728](https://github.com/nocobase/nocobase/pull/6728)) por @katherinehhh
  - Faltan restricciones de opciones de acción al reabrir reglas de enlace ([#6723](https://github.com/nocobase/nocobase/pull/6723)) por @katherinehhh
  - Los campos obligatorios ocultos por reglas de enlace no deberían afectar el envío del formulario ([#6709](https://github.com/nocobase/nocobase/pull/6709)) por @zhangzhonghe
  - Falta filtro para datos ya asociados al añadir datos de asociación ([#6750](https://github.com/nocobase/nocobase/pull/6750)) por @katherinehhh
- **[servidor]** appVersion generado incorrectamente por create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) por @chenos
- **[cli]** Actualizar automáticamente package.json al actualizar ([#6747](https://github.com/nocobase/nocobase/pull/6747)) por @chenos
- **[compilación]** Corregir error lanzado en el comando tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) por @mytharcher
- **[Bloque: Gantt]** Los meses del bloque del diagrama de Gantt se superponen en el encabezado del calendario para la vista mensual ([#6753](https://github.com/nocobase/nocobase/pull/6753)) por @katherinehhh
- **[Acción: Importar registros]** Corregir las excepciones de importación y exportación que ocurren al establecer permisos de campo. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) por @aaaaaajie
- **[Bloque: plantilla]** las plantillas de bloque no se pueden usar en el entorno mysql ([#6726](https://github.com/nocobase/nocobase/pull/6726)) por @gchust
- **[Flujo de trabajo]** Corregir error lanzado al ejecutar evento programado en subflujo ([#6721](https://github.com/nocobase/nocobase/pull/6721)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Soporte para ejecutar en modo de múltiples registros por @mytharcher
- **[Acción: Exportar registros Pro]**

  - Corregir las excepciones de importación y exportación que ocurren al establecer permisos de campo. por @aaaaaajie
  - El botón de exportación Pro pierde los parámetros de filtro después de ordenar la columna de la tabla por @katherinehhh
- **[Almacenamiento de archivos: S3(Pro)]**

  - Corregir los datos de respuesta del archivo subido por @mytharcher
  - Añadir lógica de creación de multer para la subida del lado del servidor por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir la precarga de campos de asociación para registros por @mytharcher
