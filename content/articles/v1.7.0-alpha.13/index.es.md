---
title: "NocoBase v1.7.0-alpha.13: soporte de variables en el título y contenido de la confirmación secundaria"
description: "Nota de la versión v1.7.0-alpha.13"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - soporte de variables en el título y contenido de la confirmación secundaria ([#6787](https://github.com/nocobase/nocobase/pull/6787)) por @katherinehhh

  - soporte para configurar reglas de vinculación en bloques para mostrar/ocultar dinámicamente ([#6636](https://github.com/nocobase/nocobase/pull/6636)) por @katherinehhh

- **[indefinido]** añadir ci de publicación para el kit de licencia ([#6786](https://github.com/nocobase/nocobase/pull/6786)) por @jiannx

- **[Bloque: iframe]** El bloque Iframe admite la configuración del atributo allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) por @zhangzhonghe

- **[Autenticación]** Soporte para la función "Olvidé mi contraseña" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) por @zhangzhonghe
Referencia: [Olvidé mi contraseña](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Gestor de archivos]** Funcionalidad: Añadir API `getFileStream` para soporte de transmisión de archivos. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) por @sheldon66

- **[Acción: Solicitud personalizada]** soporte de variable de respuesta en el mensaje de éxito de la acción de solicitud personalizada ([#6694](https://github.com/nocobase/nocobase/pull/6694)) por @katherinehhh

- **[Impresión de plantillas]** Funcionalidad: Soporte para opciones de Selección `{ label, value }` en la impresión de plantillas. por @sheldon66

- **[Bloque: Árbol]** el bloque de filtro de árbol soporta reglas de vinculación por @katherinehhh

- **[Visualización de datos: ECharts]** Añadir configuración "Invertir eje Y" para gráficos de barras por @2013xile

### 🚀 Mejoras

- **[cliente]**
  - El componente RichText soporta las props modules y formats ([#6807](https://github.com/nocobase/nocobase/pull/6807)) por @jiannx

  - optimizar el estilo del botón de añadir en subtabla y alinear el paginador en la misma fila ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh

  - mostrar el título del botón con tooltip al pasar el ratón sobre el icono de acción ([#6761](https://github.com/nocobase/nocobase/pull/6761)) por @katherinehhh

  - mantener la funcionalidad de plantilla de referencia ([#6743](https://github.com/nocobase/nocobase/pull/6743)) por @gchust

  - Ajustar mensaje de subida ([#6757](https://github.com/nocobase/nocobase/pull/6757)) por @mytharcher

- **[utils]** Aumentar la altura de la lista de campos del botón de filtro y ordenar/categorizar los campos ([#6779](https://github.com/nocobase/nocobase/pull/6779)) por @zhangzhonghe

- **[Gestor de archivos]** Añadir opción de tiempo de espera OSS con valor predeterminado de 10 min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher

- **[Visualización de datos]** Añadir API extendida para la configuración de la interfaz de campo ([#6742](https://github.com/nocobase/nocobase/pull/6742)) por @2013xile

- **[Política de contraseñas]** Cambiar la caducidad de contraseña predeterminada a que nunca caduque por @2013xile

- **[WeCom]** Priorizar el correo electrónico corporativo sobre el personal al actualizar el correo del usuario por @2013xile

### 🐛 Corrección de Errores

- **[base de datos]**
  - Importación fallida debido a valores de campo de texto. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) por @aaaaaajie

  - Corregir asociación belongs-to no cargada en appends cuando la clave foránea es bigInt bajo MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher

  - Corregir casos de prueba ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher

  - Evitar error lanzado cuando el tipo de dato no es string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher

  - añadir unavailableActions a la colección sql y a la colección de vista ([#6765](https://github.com/nocobase/nocobase/pull/6765)) por @katherinehhh

- **[cliente]**
  - el campo de asociación múltiple falló al enviar al mostrar campos de la colección asociada ([#6833](https://github.com/nocobase/nocobase/pull/6833)) por @katherinehhh

  - no se pueden arrastrar otros botones sobre el botón de duplicar ([#6822](https://github.com/nocobase/nocobase/pull/6822)) por @katherinehhh

  - Selector de tabla en el formulario de filtro, estilo anómalo ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe

  - Cuando el componente de campo de relación del formulario de filtro se cambia a un selector de datos, no hay elemento de configuración "Permitir selección múltiple" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe

  - En subpáginas anidadas, la lista de bloques no se muestra al pasar el ratón sobre el botón "Añadir bloque" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe

  - problema de estilo de la barra de paginación de subtabla en modo solo lectura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh

  - problema al configurar reglas de vinculación en subformulario (ventana emergente) dentro de subtabla ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh

  - cuando la selección de variable requiere carga asíncrona, se pierde el último menú seleccionado. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) por @gchust

  - se muestran múltiples mensajes de error cuando se viola una regla de validación en campos de formulario ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh

  - Corregir el problema por el cual los subcampos de campo uno-a-muchos no se pueden seleccionar como opciones de filtrado en formularios de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe

  - Pasar otras props al componente Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) por @sheldon66

  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) por @katherinehhh

  - el campo de asociación no envía datos al mostrar el campo de la colección relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh

  - En el formulario de filtro, cambiar el operador de campo y luego refrescar la página provoca un error ([#6781](https://github.com/nocobase/nocobase/pull/6781)) por @zhangzhonghe

  - En el bloque de contracción, al hacer clic en el botón de limpiar en el cuadro de búsqueda de campo de relación no se debe eliminar el rango de datos ([#6782](https://github.com/nocobase/nocobase/pull/6782)) por @zhangzhonghe

  - problema de alineación del botón de añadir registro hijo en la tabla de árbol ([#6791](https://github.com/nocobase/nocobase/pull/6791)) por @katherinehhh

  - Prohibir mover menús antes o después de las pestañas de página ([#6777](https://github.com/nocobase/nocobase/pull/6777)) por @zhangzhonghe

  - El bloque de tabla muestra datos duplicados al filtrar ([#6792](https://github.com/nocobase/nocobase/pull/6792)) por @zhangzhonghe

  - problema del operador de parámetro de consulta url ([#6770](https://github.com/nocobase/nocobase/pull/6770)) por @katherinehhh

  - solo la acción de exportación en la colección de vista es compatible cuando writableView es falso ([#6763](https://github.com/nocobase/nocobase/pull/6763)) por @katherinehhh

  - Datos incorrectos recuperados para campos de matriz muchos-a-muchos de tablas relacionadas en formularios ([#6744](https://github.com/nocobase/nocobase/pull/6744)) por @2013xile

  - creación inesperada de datos de asociación al mostrar un campo de asociación bajo subformulario/subtabla en formulario de creación ([#6727](https://github.com/nocobase/nocobase/pull/6727)) por @katherinehhh

- **[create-nocobase-app]** Solucionar temporalmente el problema de mariadb degradando a 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) por @chenos

- **[Acción: Exportar registros]** Corregir el error al exportar textos largos. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) por @aaaaaajie

- **[Campo de colección: Adjunto(URL)]** los campos de adjunto (URL) no deberían permitir la configuración de valor en la regla de vinculación ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh

- **[Verificación]** Corregir problemas del script de migración ([#6820](https://github.com/nocobase/nocobase/pull/6820)) por @2013xile

- **[Autenticación]** No permitir cambiar el nombre del autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile

- **[Acción: Solicitud personalizada]** la respuesta de solicitud personalizada establecida en variable no se muestra correctamente ([#6793](https://github.com/nocobase/nocobase/pull/6793)) por @katherinehhh

- **[Bloque: Panel de acciones]** el icono del panel de acciones falta cuando solo icono está habilitado ([#6773](https://github.com/nocobase/nocobase/pull/6773)) por @katherinehhh

- **[Flujo de trabajo: Evento de acción personalizada]** problema de vinculación de acción de flujo de trabajo activado por @katherinehhh

- **[Flujo de trabajo: nodo de cálculo de fecha]** Corregir error en navegador antiguo sin API `Intl` por @mytharcher

- **[Impresión de plantillas]** Corrección: Lógica de validación de permisos correcta para prevenir acciones no autorizadas. por @sheldon66

- **[Almacenamiento de archivos: S3(Pro)]** caducidad de url de acceso inválida por @jiannx

- **[Bloque: Árbol]** Después de conectar a través de una clave foránea, al hacer clic para activar el filtrado se obtienen condiciones de filtro vacías por @zhangzhonghe
