---
title: "NocoBase v1.0.1-alpha.1: Los bloques admiten configuraciones de altura"
description: "NocoBase v1.0.1-alpha.1 introduce nuevas funciones como configuraciones de altura de bloques, acciones de enlaces URL y soporte de variables para iframes, junto con varias mejoras y correcciones de errores para mejorar la funcionalidad y el rendimiento de la plataforma."
---

## Nuevas funciones

### Los bloques admiten configuración de altura ([#4441](https://github.com/nocobase/nocobase/pull/4441))

![20240603115253](https://static-docs.nocobase.com/20240603115253.gif)

Documento de referencia:

* [Establecer altura del bloque](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-height)

### Acción de enlace: navegar a la URL especificada ([#4506](https://github.com/nocobase/nocobase/pull/4506))

Permite configurar variables en la URL o en los parámetros de búsqueda.

<video controls="" height="250" width="100%"></video>

Documento de referencia:

* [Acción de enlace](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Añadida una nueva variable llamada "Parámetros de búsqueda de URL" ([#4506](https://github.com/nocobase/nocobase/pull/4506))

La variable solo está disponible cuando hay una cadena de consulta en la URL de la página, lo que facilita su uso junto con la [acción de enlace](https://docs.nocobase.com/handbook/ui/actions/types/link).

![20240603170651](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603170651.png)

Documento de referencia:

* [Parámetros de búsqueda de URL](https://docs.nocobase.com/handbook/ui/variables#url-search-params)
* [Acción de enlace](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Iframe admite variables ([#4512](https://github.com/nocobase/nocobase/pull/4512))

![20240603114711](https://static-docs.nocobase.com/20240603114711.png)

![20240603114750](https://static-docs.nocobase.com/20240603114750.png)

Documento de referencia:

* [Bloque iframe](https://docs.nocobase.com/handbook/block-iframe)

### Los almacenamientos de archivos admiten configurar el tamaño y el tipo de archivo ([#4118](https://github.com/nocobase/nocobase/pull/4118))

![20240603115303](https://static-docs.nocobase.com/20240603115303.png)

Documento de referencia:

* [Almacenamiento de archivos](https://docs.nocobase.com/handbook/file-manager/storage)

### Flujo de trabajo: los nodos de variables admiten seleccionar una ruta parcial de objetos de datos como valor de las variables

![20240531211727](https://static-docs.nocobase.com/20240531211727.png)

### Los campos URL admiten vista previa ([#4559](https://github.com/nocobase/nocobase/pull/4559))

Actualmente solo admite vista previa de imágenes.

![337101796-916a6c97-bc08-4560-9526-53e482e2ac6c](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/337101796-916a6c97-bc08-4560-9526-53e482e2ac6c.gif)

### Visualización de datos: Soporte para las variables "Parámetros de consulta de URL" y "Rol actual" ([#4586](https://github.com/nocobase/nocobase/pull/4586))

![data-visualization-filter-block](https://static-docs.nocobase.com/202406071148997.png)

![data-visualization-filter](https://static-docs.nocobase.com/202406071149567.png)

## Mejoras

### Optimización de la función de importación y exportación ([#4468](https://github.com/nocobase/nocobase/pull/4468))

Se mejoró la estabilidad de la función de importación y exportación, aumentando el límite de importación y exportación a 2000 registros. Soporta lógica extendida de importación y exportación para tipos de campo personalizados.

![20240611112948](https://static-docs.nocobase.com/20240611112948.png)

### Evitar operaciones erróneas deshabilitando la opción de variable de fecha ([#4452](https://github.com/nocobase/nocobase/pull/4452))

Excepto para la "hora actual", las variables que representan fechas son intervalos (arrays) en lugar de momentos (cadenas). Se pueden usar para filtrar, pero no se pueden usar directamente como valores predeterminados.

![20240527150429](https://static-docs.nocobase.com/20240527150429.png)

### Optimización de la interacción de asignación de reglas de vinculación ([#4492](https://github.com/nocobase/nocobase/pull/4492))

Los campos de selección múltiple no muestran opciones de asignación. Si se selecciona y asigna un campo de selección única, al cambiar a un campo de selección múltiple se borrará la configuración.

![20240603143309](https://static-docs.nocobase.com/20240603143309.png)

### Ajuste del icono superior derecho de la columna de acciones en el bloque de tabla ([#4538](https://github.com/nocobase/nocobase/pull/4538))

![20240603115131](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115131.png)

### ErrorFallback ([#4459](https://github.com/nocobase/nocobase/pull/4459))

Refinamiento del fallback de errores para diferentes componentes en el frontend para evitar que toda la página quede inutilizable debido a un error del frontend.

![error-fallback](https://static-docs.nocobase.com/20240604122043_rec_.gif)

### Recopilar información de depuración y descargar rápidamente registros cuando ocurre un error en el frontend ([#4524](https://github.com/nocobase/nocobase/pull/4524))

![error-fallback-log](https://static-docs.nocobase.com/202406041224009.png)

### Otros

* Modificar el límite de longitud de caracteres del nombre de usuario a 1-50 ([#4502](https://github.com/nocobase/nocobase/pull/4502))
* No ocultar campos de clave foránea ([#4499](https://github.com/nocobase/nocobase/pull/4499))

## Corrección de errores

### El ámbito de datos en el diálogo de configuración de permisos no debe admitir las variables "Formulario actual" y "Registro emergente actual" ([#4484](https://github.com/nocobase/nocobase/pull/4484))

![20240527145519](https://static-docs.nocobase.com/20240527145519.png)

### Permitir seleccionar el valor de una variable directamente como valor predeterminado para un campo de asociación ([#4439](https://github.com/nocobase/nocobase/pull/4439))

![20240603121447](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603121447.png)

### Corregido el problema de error al añadir la acción "Solicitud personalizada" varias veces ([#4458](https://github.com/nocobase/nocobase/pull/4458))

![20240603115234](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115234.png)

### Otros

* Corregido el problema de que el contenido en la sub-tabla no se borraba después de enviar el formulario. ([#4475](https://github.com/nocobase/nocobase/pull/4475))
* Corregido el problema de uso anómalo de la variable "Objeto actual" en la sub-tabla. ([#4521](https://github.com/nocobase/nocobase/pull/4521))
* Añadida la opción 'Establecer nivel de zoom predeterminado' para campos de mapa. ([#4527](https://github.com/nocobase/nocobase/pull/4527))
* Corregido el problema de que el bloque no se mostraba al añadir un bloque usando plantillas de bloque en una ventana emergente. ([#4531](https://github.com/nocobase/nocobase/pull/4531))
* Corregido el problema de estilo de las plantillas de datos de formulario. ([#4536](https://github.com/nocobase/nocobase/pull/4536))
* Flujo de trabajo: el estilo del cuadro de expresión desapareció en el nodo de cálculo. ([#4513](https://github.com/nocobase/nocobase/pull/4513))
* Flujo de trabajo: tipo de campo incorrecto al crearse en el formulario personalizado del nodo manual. ([#4519](https://github.com/nocobase/nocobase/pull/4519))
* Flujo de trabajo: problema de permisos al desencadenar un evento de acción personalizada. ([#4522](https://github.com/nocobase/nocobase/pull/4522))
* Flujo de trabajo: configuración de profundidad incorrecta para la precarga de asociaciones para múltiples fuentes de datos. ([#4526](https://github.com/nocobase/nocobase/pull/4526))
* Error de la librería `json-templates`. ([#4525](https://github.com/nocobase/nocobase/pull/4525))
* Gestor de archivos: error al subir o eliminar archivos en COS. ([#4529](https://github.com/nocobase/nocobase/pull/4529), [#4537](https://github.com/nocobase/nocobase/pull/4537))
* La regla de vinculación de formulario muestra [object Object] al asignar un valor de 0.00 a un campo numérico. ([#4482](https://github.com/nocobase/nocobase/pull/4482))
* A la sub-tabla le falta el elemento de control de configuración para el botón de añadir nuevo. ([#4498](https://github.com/nocobase/nocobase/pull/4498))
* Al botón de enviar en el formulario de edición de tabla le falta el elemento de configuración de la regla de vinculación. ([#4515](https://github.com/nocobase/nocobase/pull/4515))
* Visualización de datos: corregido el problema de que los componentes de campo eran invisibles al establecer valores predeterminados para los campos de filtro del gráfico. ([#4509](https://github.com/nocobase/nocobase/pull/4509))
* Autenticación: corregido el problema de que no se encontraba la página de registro para el autenticador básico recién creado. ([#4556](https://github.com/nocobase/nocobase/pull/4556))
* Localización: corregido el problema de que los títulos de página no se traducían al traducir los textos del menú. ([#4557](https://github.com/nocobase/nocobase/pull/4557))
* Mapa: corregido el problema de que AMap mostraba un error de clave a pesar de una configuración correcta. ([#4574](https://github.com/nocobase/nocobase/pull/4574))
