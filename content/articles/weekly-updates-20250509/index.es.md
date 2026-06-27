---
title: "Actualizaciones semanales de NocoBase: La impresión de plantillas admite imágenes y códigos de barras"
description: "Las actualizaciones de esta semana incluyen: soporte para imágenes dinámicas y renderizado de códigos de barras en plantillas de documentos, soporte para variables en el título y contenido de confirmación secundaria, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.26](https://www.nocobase.com/en/blog/v1.6.26)

*Fecha de lanzamiento: 2025-05-07*

#### 🎉 Nuevas funciones

- **[Bloque: iframe]** El bloque iframe ahora admite la configuración del atributo allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) por @zhangzhonghe
- **[Impresión de plantillas]** Función: Soporte para opciones `{ label, value }` de tipo Select en la impresión de plantillas. por @sheldon66

#### 🐛 Corrección de errores

- **[cliente]**

  - En subpáginas anidadas, la lista de bloques no se muestra al pasar el ratón sobre el botón "Añadir bloque" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe
  - Cuando el componente de campo de relación del formulario de filtro se cambia a un selector de datos, no hay un elemento de configuración "Permitir selección múltiple" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe
  - Se muestran múltiples mensajes de error cuando se infringe una regla de validación en los campos del formulario ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh
  - Problema al configurar reglas de vinculación en un subformulario (ventana emergente) dentro de una subtabla ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh
  - Se corrige el problema por el cual los subcampos de un campo uno-a-muchos no se podían seleccionar como opciones de filtrado en formularios de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe
  - Problema de estilo de la barra de paginación de subtablas en modo de solo lectura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh
  - Selector de tabla en el formulario de filtro, estilo anómalo ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe
- **[base de datos]**

  - Se corrige la asociación belongs-to que no se cargaba en appends cuando la clave foránea es bigInt en MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher
  - Se corrigen casos de prueba ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher
- **[Campo de colección: Adjunto (URL)]** Los campos de adjunto (URL) no deberían permitir la configuración de valores en reglas de vinculación ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Problema de vinculación de acciones del flujo de trabajo activado por @katherinehhh

### [v1.6.27](https://www.nocobase.com/en/blog/v1.6.27)

*Fecha de lanzamiento: 2025-05-08*

#### 🐛 Corrección de errores

- **[cliente]**
  - No se pueden arrastrar otros botones sobre el botón de duplicar ([#6822](https://github.com/nocobase/nocobase/pull/6822)) por @katherinehhh
  - Error al enviar un campo de asociación múltiple al mostrar campos de la colección asociada ([#6833](https://github.com/nocobase/nocobase/pull/6833)) por @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.27](https://www.nocobase.com/en/blog/v1.7.0-beta.27)

*Fecha de lanzamiento: 2025-05-04*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para variables en el título y contenido de la confirmación secundaria ([#6787](https://github.com/nocobase/nocobase/pull/6787)) por @katherinehhh
- **[Impresión de plantillas]**

  - Soporte para renderizado dinámico de imágenes y códigos de barras en plantillas de documentos. por @sheldon66
  - Función: Soporte para opciones `{ label, value }` de tipo Select en la impresión de plantillas. por @sheldon66
- **[Bloque: Árbol]** El bloque de filtro de árbol ahora soporta reglas de vinculación por @katherinehhh
- **[Visualización de datos: ECharts]** Se añade la configuración "Invertir eje Y" para gráficos de barras por @2013xile

#### 🚀 Mejoras

- **[cliente]** Optimizar el estilo del botón de añadir en subtablas y alinear el paginador en la misma fila ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh
- **[Gestor de archivos]** Se añade opción de tiempo de espera para OSS, por defecto 10 min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher
- **[Política de contraseñas]** Cambiar la caducidad de contraseña predeterminada a que nunca caduque por @2013xile

#### 🐛 Corrección de errores

- **[base de datos]**

  - Se corrigen casos de prueba ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher
  - Evitar error cuando el tipo de dato no es cadena ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher
- **[cliente]**

  - Cuando la selección de variables requiere carga asíncrona, se pierde el último menú seleccionado. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) por @gchust
  - Se corrige el problema por el cual los subcampos de un campo uno-a-muchos no se podían seleccionar como opciones de filtrado en formularios de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe
  - Problema al configurar reglas de vinculación en un subformulario (ventana emergente) dentro de una subtabla ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh
  - Se muestran múltiples mensajes de error cuando se infringe una regla de validación en los campos del formulario ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh
  - El campo de asociación no envía datos al mostrar un campo de la colección relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh
  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) por @katherinehhh
- **[Autenticación]** No permitir cambiar el nombre del autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile
- **[Acción: Solicitud personalizada]** La respuesta de solicitud personalizada establecida en variable no se muestra correctamente ([#6793](https://github.com/nocobase/nocobase/pull/6793)) por @katherinehhh

### [v1.7.0-beta.28](https://www.nocobase.com/en/blog/v1.7.0-beta.28)

*Fecha de lanzamiento: 2025-05-06*

#### 🚀 Mejoras

- **[cliente]** El componente RichText ahora soporta las props modules y formats ([#6807](https://github.com/nocobase/nocobase/pull/6807)) por @jiannx

#### 🐛 Corrección de errores

- **[Verificación]** Se corrigen problemas del script de migración ([#6820](https://github.com/nocobase/nocobase/pull/6820)) por @2013xile
- **[Flujo de trabajo: Evento de acción personalizada]** Problema de vinculación de acciones del flujo de trabajo activado por @katherinehhh

### [v1.7.0-beta.29](https://www.nocobase.com/en/blog/v1.7.0-beta.29)

*Fecha de lanzamiento: 2025-05-07*

#### 🎉 Nuevas funciones

- **[Bloque: iframe]** El bloque iframe ahora admite la configuración del atributo allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) por @zhangzhonghe

### [v1.7.0-beta.30](https://www.nocobase.com/en/blog/v1.7.0-beta.30)

*Fecha de lanzamiento: 2025-05-08*

#### 🐛 Corrección de errores

- **[cliente]**

  - Cuando el componente de campo de relación del formulario de filtro se cambia a un selector de datos, no hay un elemento de configuración "Permitir selección múltiple" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe
  - Selector de tabla en el formulario de filtro, estilo anómalo ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe
  - En subpáginas anidadas, la lista de bloques no se muestra al pasar el ratón sobre el botón "Añadir bloque" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe
  - Error al enviar un campo de asociación múltiple al mostrar campos de la colección asociada ([#6833](https://github.com/nocobase/nocobase/pull/6833)) por @katherinehhh
  - No se pueden arrastrar otros botones sobre el botón de duplicar ([#6822](https://github.com/nocobase/nocobase/pull/6822)) por @katherinehhh
  - Problema de estilo de la barra de paginación de subtablas en modo de solo lectura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh
- **[base de datos]** Se corrige la asociación belongs-to que no se cargaba en appends cuando la clave foránea es bigInt en MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher
- **[Campo de colección: Adjunto (URL)]** Los campos de adjunto (URL) no deberían permitir la configuración de valores en reglas de vinculación ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.13](https://www.nocobase.com/en/blog/v1.7.0-alpha.13)

*Fecha de lanzamiento: 2025-05-08*

#### 🎉 Nuevas funciones

- **[cliente]**

  - Soporte para variables en el título y contenido de la confirmación secundaria ([#6787](https://github.com/nocobase/nocobase/pull/6787)) por @katherinehhh
  - Soporte para configurar reglas de vinculación en bloques para mostrar/ocultar dinámicamente ([#6636](https://github.com/nocobase/nocobase/pull/6636)) por @katherinehhh
- **[undefined]** Añadir publish ci para license kit ([#6786](https://github.com/nocobase/nocobase/pull/6786)) por @jiannx
- **[Bloque: iframe]** El bloque iframe ahora admite la configuración del atributo allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) por @zhangzhonghe
- **[Autenticación]** Soporte para la función "Olvidé mi contraseña" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) por @zhangzhonghe
  Referencia: [Olvidé mi contraseña](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Gestor de archivos]** Función: Añadir API `getFileStream` para soporte de transmisión de archivos. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) por @sheldon66
- **[Acción: Solicitud personalizada]** Soporte para variable de respuesta en el mensaje de éxito de la acción de solicitud personalizada ([#6694](https://github.com/nocobase/nocobase/pull/6694)) por @katherinehhh
- **[Impresión de plantillas]** Función: Soporte para opciones `{ label, value }` de tipo Select en la impresión de plantillas. por @sheldon66
- **[Bloque: Árbol]** El bloque de filtro de árbol ahora soporta reglas de vinculación por @katherinehhh
- **[Visualización de datos: ECharts]** Se añade la configuración "Invertir eje Y" para gráficos de barras por @2013xile

#### 🚀 Mejoras

- **[cliente]**

  - El componente RichText ahora soporta las props modules y formats ([#6807](https://github.com/nocobase/nocobase/pull/6807)) por @jiannx
  - Optimizar el estilo del botón de añadir en subtablas y alinear el paginador en la misma fila ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh
  - Mostrar el título del botón con tooltip al pasar el ratón sobre el icono de acción ([#6761](https://github.com/nocobase/nocobase/pull/6761)) por @katherinehhh
  - Mantener la funcionalidad de plantilla de referencia ([#6743](https://github.com/nocobase/nocobase/pull/6743)) por @gchust
  - Ajustar mensaje de subida ([#6757](https://github.com/nocobase/nocobase/pull/6757)) por @mytharcher
- **[utils]** Aumentar la altura de la lista de campos del botón de filtro y ordenar/clasificar los campos ([#6779](https://github.com/nocobase/nocobase/pull/6779)) por @zhangzhonghe
- **[Gestor de archivos]** Se añade opción de tiempo de espera para OSS, por defecto 10 min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher
- **[Visualización de datos]** Añadir API extendida para la configuración de la interfaz de campo ([#6742](https://github.com/nocobase/nocobase/pull/6742)) por @2013xile
- **[Política de contraseñas]** Cambiar la caducidad de contraseña predeterminada a que nunca caduque por @2013xile
- **[WeCom]** Priorizar el correo electrónico corporativo sobre el personal al actualizar el correo del usuario por @2013xile

#### 🐛 Corrección de errores

- **[base de datos]**

  - Importación fallida debido a valores de campo de texto. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) por @aaaaaajie
  - Se corrige la asociación belongs-to que no se cargaba en appends cuando la clave foránea es bigInt en MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher
  - Se corrigen casos de prueba ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher
  - Evitar error cuando el tipo de dato no es cadena ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher
  - Añadir unavailableActions a la colección sql y a la colección de vistas ([#6765](https://github.com/nocobase/nocobase/pull/6765)) por @katherinehhh
- **[cliente]**

  - Error al enviar un campo de asociación múltiple al mostrar campos de la colección asociada ([#6833](https://github.com/nocobase/nocobase/pull/6833)) por @katherinehhh
  - No se pueden arrastrar otros botones sobre el botón de duplicar ([#6822](https://github.com/nocobase/nocobase/pull/6822)) por @katherinehhh
  - Selector de tabla en el formulario de filtro, estilo anómalo ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe
  - Cuando el componente de campo de relación del formulario de filtro se cambia a un selector de datos, no hay un elemento de configuración "Permitir selección múltiple" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe
  - En subpáginas anidadas, la lista de bloques no se muestra al pasar el ratón sobre el botón "Añadir bloque" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe
  - Problema de estilo de la barra de paginación de subtablas en modo de solo lectura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh
  - Problema al configurar reglas de vinculación en un subformulario (ventana emergente) dentro de una subtabla ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh
  - Cuando la selección de variables requiere carga asíncrona, se pierde el último menú seleccionado. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) por @gchust
  - Se muestran múltiples mensajes de error cuando se infringe una regla de validación en los campos del formulario ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh
  - Se corrige el problema por el cual los subcampos de un campo uno-a-muchos no se podían seleccionar como opciones de filtrado en formularios de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe
  - Pasar otras props al componente Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) por @sheldon66
  - El campo de asociación no envía datos al mostrar un campo de la colección relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh
  - En el formulario de filtro, cambiar el operador del campo y luego actualizar la página provoca un error ([#6781](https://github.com/nocobase/nocobase/pull/6781)) por @zhangzhonghe
  - En el bloque de contracción, al hacer clic en el botón de limpiar en el cuadro de búsqueda del campo de relación, no se debería eliminar el rango de datos ([#6782](https://github.com/nocobase/nocobase/pull/6782)) por @zhangzhonghe
  - Problema de alineación del botón de añadir registro hijo en la tabla de árbol ([#6791](https://github.com/nocobase/nocobase/pull/6791)) por @katherinehhh
  - Prohibir mover menús antes o después de las pestañas de página ([#6777](https://github.com/nocobase/nocobase/pull/6777)) por @zhangzhonghe
  - El bloque de tabla muestra datos duplicados al filtrar ([#6792](https://github.com/nocobase/nocobase/pull/6792)) por @zhangzhonghe
  - Problema con el operador del parámetro de consulta URL ([#6770](https://github.com/nocobase/nocobase/pull/6770)) por @katherinehhh
  - Solo la acción de exportación en la colección de vistas es compatible cuando writableView es falso ([#6763](https://github.com/nocobase/nocobase/pull/6763)) por @katherinehhh
  - Datos incorrectos recuperados para campos de matriz muchos-a-muchos de tablas relacionadas en formularios ([#6744](https://github.com/nocobase/nocobase/pull/6744)) por @2013xile
  - Creación inesperada de datos de asociación al mostrar un campo de asociación en un subformulario/subtabla en un formulario de creación ([#6727](https://github.com/nocobase/nocobase/pull/6727)) por @katherinehhh
- **[create-nocobase-app]** Solucionar temporalmente el problema de mariadb degradando a 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) por @chenos
- **[Acción: Exportar registros]** Se corrige el error al exportar textos largos. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) por @aaaaaajie
- **[Campo de colección: Adjunto (URL)]** Los campos de adjunto (URL) no deberían permitir la configuración de valores en reglas de vinculación ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh
- **[Verificación]** Se corrigen problemas del script de migración ([#6820](https://github.com/nocobase/nocobase/pull/6820)) por @2013xile
- **[Autenticación]** No permitir cambiar el nombre del autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile
- **[Acción: Solicitud personalizada]** La respuesta de solicitud personalizada establecida en variable no se muestra correctamente ([#6793](https://github.com/nocobase/nocobase/pull/6793)) por @katherinehhh
- **[Bloque: Panel de acciones]** El icono del panel de acciones falta cuando solo icono está habilitado ([#6773](https://github.com/nocobase/nocobase/pull/6773)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Problema de vinculación de acciones del flujo de trabajo activado por @katherinehhh
- **[Flujo de trabajo: Nodo de cálculo de fecha]** Se corrige error en navegadores antiguos sin API `Intl` por @mytharcher
- **[Impresión de plantillas]** Corrección: Lógica de validación de permisos corregida para prevenir acciones no autorizadas. por @sheldon66
- **[Almacenamiento de archivos: S3(Pro)]** La URL de acceso ha expirado y no es válida por @jiannx
- **[Bloque: Árbol]** Después de conectar a través de una clave foránea, al hacer clic para activar el filtrado, las condiciones de filtro quedan vacías por @zhangzhonghe
