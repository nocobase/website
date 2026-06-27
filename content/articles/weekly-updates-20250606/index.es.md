---
title: "Actualizaciones Semanales de NocoBase: Añadir Gestión de Categorías de Flujo de Trabajo"
description: "Las actualizaciones de esta semana incluyen: soporte para multiplicación y división en configuraciones de transformación de gráficos, mejora de la funcionalidad de importación y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Esta semana lanzamos [NocoBase 1.7.0](https://www.nocobase.com/en/blog/nocobase-1-7-0), que introduce una gestión de permisos mejorada, un rendimiento optimizado del sistema y plugins de código abierto para mejorar de forma integral la funcionalidad y la experiencia del usuario.**

**NocoBase se actualiza actualmente con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones aún más. Ideal para usuarios de prueba que quieran experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.35](https://www.nocobase.com/en/blog/v1.6.35)

*Fecha de lanzamiento: 2025-05-29*

#### 🎉 Nuevas funciones

- **[sin definir]**
  - Añadir soporte para Gitpod para iniciar el entorno de desarrollo con un solo clic ([#6922](https://github.com/nocobase/nocobase/pull/6922)) por @kerwin612

#### 🚀 Mejoras

- **[cliente]**
  - Optimizar la interacción con la tecla Tab en formularios ([#6942](https://github.com/nocobase/nocobase/pull/6942)) por @kerwin612
  - soporte para configurar si los enlaces del menú se abren en una nueva ventana ([#6918](https://github.com/nocobase/nocobase/pull/6918)) por @katherinehhh
  - validar campos obligatorios antes de mostrar el diálogo de confirmación ([#6931](https://github.com/nocobase/nocobase/pull/6931)) por @katherinehhh

#### 🐛 Corrección de errores

- **[cliente]**
  - paginar los datos del desplegable del campo de asociación con un tamaño de página de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) por @katherinehhh
  - Posición de resaltado incorrecta al arrastrar filas de tabla ([#6952](https://github.com/nocobase/nocobase/pull/6952)) por @chenos
  - El redimensionamiento de bloques arrastrando no funciona ([#6944](https://github.com/nocobase/nocobase/pull/6944)) por @chenos
  - La internacionalización (i18n) del componente de asignación de campos no funciona ([#6945](https://github.com/nocobase/nocobase/pull/6945)) por @katherinehhh
  - Los mensajes de error no se pueden copiar correctamente ([#6908](https://github.com/nocobase/nocobase/pull/6908)) por @kerwin612
- **[Campo de colección: Markdown(Vditor)]** Problema de ancho del componente del campo markdown-vditor después de hacer zoom in/out ([#6946](https://github.com/nocobase/nocobase/pull/6946)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Corregir contenido de traducción por @mytharcher

### [v1.6.36](https://www.nocobase.com/en/blog/v1.6.36)

*Fecha de lanzamiento: 2025-05-29*

#### 🚀 Mejoras

- **[Auth: OIDC]** Ignorar mayúsculas/minúsculas al buscar usuario por correo electrónico por @2013xile

### [v1.6.37](https://www.nocobase.com/en/blog/v1.6.37)

*Fecha de lanzamiento: 2025-05-30*

#### 🐛 Corrección de errores

- **[cliente]**
  - Corregir el orden de los campos en la lista desplegable del botón de filtro ([#6962](https://github.com/nocobase/nocobase/pull/6962)) por @zhangzhonghe
  - La variable de enlace de subtabla obtiene datos de asociación al limpiar en lugar de usar el valor del formulario ([#6963](https://github.com/nocobase/nocobase/pull/6963)) por @katherinehhh
  - El campo de asociación en subtabla activa una solicitud cuando la variable de iteración tiene un valor vacío ([#6969](https://github.com/nocobase/nocobase/pull/6969)) por @katherinehhh
- **[Editor de temas]** Ocultar la opción de cambio de tema y corregir el estilo de la ventana emergente ([#6964](https://github.com/nocobase/nocobase/pull/6964)) por @zhangzhonghe
- **[Flujo de trabajo: Aprobación]** Corregir error cuando el ámbito de los asignados consulta con condición de asociación por @mytharcher

### [v1.6.38](https://www.nocobase.com/en/blog/v1.6.38)

*Fecha de lanzamiento: 2025-06-03*

#### 🐛 Corrección de errores

- **[cliente]**
  - Corregir el problema por el que los bloques creados en ventanas emergentes tenían una colección incorrecta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe
  - Corregir el problema por el que los valores predeterminados del formulario de filtro no eran válidos en subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe
  - no se pueden expandir los campos de colección de asociación de fuentes de datos externas en el ámbito de la tabla de datos de roles ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh
  - Corregir el problema por el que la opción 'Contenido desbordado con puntos suspensivos' no era efectiva para campos de relación ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe
  - Corregir el problema por el que los valores de campos de texto de una línea se mostraban como un array en modo de lectura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe
- **[Autenticación]** Problema de rendimiento causado por la limpieza de tokens caducados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile
- **[Gestor de archivos]** Corregir la configuración de tiempo de espera de Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el inicializador faltante para el banco de trabajo por @mytharcher
- **[Auth: OIDC]** El texto del botón de inicio de sesión no se localiza por @2013xile

### [v1.7.1](https://www.nocobase.com/en/blog/v1.7.1)

*Fecha de lanzamiento: 2025-06-04*

#### 🎉 Nuevas funciones

- **[Visualización de datos]** Soporte para multiplicación y división en la configuración de transformación de gráficos ([#6788](https://github.com/nocobase/nocobase/pull/6788)) por @bugstark

#### 🚀 Mejoras

- **[Formularios públicos]** Soporte para usar el parámetro de URL como variable ([#6973](https://github.com/nocobase/nocobase/pull/6973)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]** Corregir que los campos no se muestren en las plantillas de bloque debido a solicitudes API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
- **[Flujo de trabajo: Nodo manual]** Corregir que el inicializador lanza un error al usar una fuente de datos externa ([#6983](https://github.com/nocobase/nocobase/pull/6983)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.1](https://www.nocobase.com/en/blog/v1.8.0-beta.1)

*Fecha de lanzamiento: 2025-06-04*

#### 🎉 Nuevas funciones

- **[sin definir]** Añadir nuevo plugin "Botón de copia de entrada" para campos de texto de una línea ([#6894](https://github.com/nocobase/nocobase/pull/6894)) por @kerwin612
- **[Flujo de trabajo]** Añadir gestión de categorías de flujo de trabajo ([#6965](https://github.com/nocobase/nocobase/pull/6965)) por @mytharcher

#### 🚀 Mejoras

- **[cliente]** soporte para configurar si los enlaces del menú se abren en una nueva ventana ([#6918](https://github.com/nocobase/nocobase/pull/6918)) por @katherinehhh
- **[Acción: Importar registros Pro]** Optimizar el rendimiento de importación xlsx por @aaaaaajie
- **[Auth: OIDC]** Ignorar mayúsculas/minúsculas al buscar usuario por correo electrónico por @2013xile
- **[Flujo de trabajo: Aprobación]** Importar colecciones de flujo de trabajo desde el plugin de flujo de trabajo para evitar duplicaciones por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**
  - Los campos y acciones solo surten efecto después de actualizar la página ([#6977](https://github.com/nocobase/nocobase/pull/6977)) por @zhangzhonghe
  - Corregir que los campos no se muestren en las plantillas de bloque debido a solicitudes API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
  - Corregir el problema por el que los bloques creados en ventanas emergentes tenían una colección incorrecta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe
  - No se pueden seleccionar variables al establecer valores predeterminados para campos de asociación ([#6974](https://github.com/nocobase/nocobase/pull/6974)) por @zhangzhonghe
  - Corregir el problema por el que los valores de campos de texto de una línea se mostraban como un array en modo de lectura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe
  - no se pueden expandir los campos de colección de asociación de fuentes de datos externas en el ámbito de la tabla de datos de roles ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh
  - Corregir el problema por el que la opción 'Contenido desbordado con puntos suspensivos' no era efectiva para campos de relación ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe
  - Corregir el problema por el que los valores predeterminados del formulario de filtro no eran válidos en subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe
  - problema por el que la ventana emergente del campo de asociación de selección se cierra al primer input al añadir nuevos datos ([#6971](https://github.com/nocobase/nocobase/pull/6971)) por @katherinehhh
  - El campo de asociación en subtabla activa una solicitud cuando la variable de iteración tiene un valor vacío ([#6969](https://github.com/nocobase/nocobase/pull/6969)) por @katherinehhh
  - Corregir el orden de los campos en la lista desplegable del botón de filtro ([#6962](https://github.com/nocobase/nocobase/pull/6962)) por @zhangzhonghe
  - Los datos de las reglas de validación del formulario se pierden al colapsar el panel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) por @katherinehhh
  - Los valores seleccionados se restablecen al actualizar las opciones del desplegable de selección múltiple mediante reglas de vinculación ([#6953](https://github.com/nocobase/nocobase/pull/6953)) por @katherinehhh
  - La variable de enlace de subtabla obtiene datos de asociación al limpiar en lugar de usar el valor del formulario ([#6963](https://github.com/nocobase/nocobase/pull/6963)) por @katherinehhh
  - paginar los datos del desplegable del campo de asociación con un tamaño de página de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) por @katherinehhh
  - El selector de fecha no se actualiza después de cambiar de "está entre" de vuelta a "es" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) por @katherinehhh
  - Posición de resaltado incorrecta al arrastrar filas de tabla ([#6952](https://github.com/nocobase/nocobase/pull/6952)) por @chenos
- **[Autenticación]** Problema de rendimiento causado por la limpieza de tokens caducados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile
- **[Flujo de trabajo]** Corregir error lanzado al filtrar flujos de trabajo ([#6978](https://github.com/nocobase/nocobase/pull/6978)) por @mytharcher
- **[Gestor de archivos]** Corregir la configuración de tiempo de espera de Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher
- **[Editor de temas]** Ocultar la opción de cambio de tema y corregir el estilo de la ventana emergente ([#6964](https://github.com/nocobase/nocobase/pull/6964)) por @zhangzhonghe
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el inicializador faltante para el banco de trabajo por @mytharcher
- **[Auth: OIDC]** El texto del botón de inicio de sesión no se localiza por @2013xile
- **[Flujo de trabajo: Aprobación]** Corregir error cuando el ámbito de los asignados consulta con condición de asociación por @mytharcher

### [v1.8.0-beta.2](https://www.nocobase.com/en/blog/v1.8.0-beta.2)

*Fecha de lanzamiento: 2025-06-04*

#### 🚀 Mejoras

- **[Impresión de plantillas]** Añadir más registros. por @sheldon66

### [v1.8.0-beta.3](https://www.nocobase.com/en/blog/v1.8.0-beta.3)

*Fecha de lanzamiento: 2025-06-04*

#### 🎉 Nuevas funciones

- **[Visualización de datos]** Soporte para multiplicación y división en la configuración de transformación de gráficos ([#6788](https://github.com/nocobase/nocobase/pull/6788)) por @bugstark

#### 🚀 Mejoras

- **[Formularios públicos]** Soporte para usar el parámetro de URL como variable ([#6973](https://github.com/nocobase/nocobase/pull/6973)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]** Corregir que los campos no se muestren en las plantillas de bloque debido a solicitudes API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
- **[Flujo de trabajo: Nodo manual]** Corregir que el inicializador lanza un error al usar una fuente de datos externa ([#6983](https://github.com/nocobase/nocobase/pull/6983)) por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.1](https://www.nocobase.com/en/blog/v1.8.0-alpha.1)

*Fecha de lanzamiento: 2025-06-04*

#### 🎉 Nuevas funciones

- **[sin definir]**
  - Nuevo soporte para Gitpod que permite iniciar el entorno de desarrollo con un solo clic y comenzar a desarrollar rápidamente. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) por @kerwin612
  - Añadir nuevo plugin "Botón de copia de entrada" para campos de texto de una línea ([#6894](https://github.com/nocobase/nocobase/pull/6894)) por @kerwin612
- **[Visualización de datos]** Soporte para multiplicación y división en la configuración de transformación de gráficos ([#6788](https://github.com/nocobase/nocobase/pull/6788)) por @bugstark
- **[Flujo de trabajo]** Añadir gestión de categorías de flujo de trabajo ([#6965](https://github.com/nocobase/nocobase/pull/6965)) por @mytharcher
- **[Gestor de correo electrónico]** soporte para envío masivo por @jiannx

#### 🚀 Mejoras

- **[cliente]**
  - mejorar los estilos para el componente de filtro de rango de fechas ([#6939](https://github.com/nocobase/nocobase/pull/6939)) por @katherinehhh
  - soporte para configurar si los enlaces del menú se abren en una nueva ventana ([#6918](https://github.com/nocobase/nocobase/pull/6918)) por @katherinehhh
  - Corregir el problema por el que los controles de formulario ocultos capturaban la tecla Tab, mejorando significativamente la eficiencia de la operación del formulario ([#6942](https://github.com/nocobase/nocobase/pull/6942)) por @kerwin612
  - validar campos obligatorios antes de mostrar el diálogo de confirmación ([#6931](https://github.com/nocobase/nocobase/pull/6931)) por @katherinehhh
- **[Formularios públicos]** Soporte para usar el parámetro de URL como variable ([#6973](https://github.com/nocobase/nocobase/pull/6973)) por @mytharcher
- **[Acción: Importar registros Pro]** Optimizar el rendimiento de importación xlsx por @aaaaaajie
- **[Impresión de plantillas]** Añadir más registros. por @sheldon66
- **[Auth: OIDC]** Ignorar mayúsculas/minúsculas al buscar usuario por correo electrónico por @2013xile
- **[Flujo de trabajo: Aprobación]** Importar colecciones de flujo de trabajo desde el plugin de flujo de trabajo para evitar duplicaciones por @mytharcher
- **[Gestor de correo electrónico]** completar la función de envío masivo por @jiannx

#### 🐛 Corrección de errores

- **[cliente]**
  - Corregir que los campos no se muestren en las plantillas de bloque debido a solicitudes API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
  - Corregir el problema por el que los bloques creados en ventanas emergentes tenían una colección incorrecta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe
  - Corregir el problema por el que los valores de campos de texto de una línea se mostraban como un array en modo de lectura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe
  - Corregir el orden de los campos en la lista desplegable del botón de filtro ([#6962](https://github.com/nocobase/nocobase/pull/6962)) por @zhangzhonghe
  - Los campos y acciones solo surten efecto después de actualizar la página ([#6977](https://github.com/nocobase/nocobase/pull/6977)) por @zhangzhonghe
  - Corregir el problema por el que la opción 'Contenido desbordado con puntos suspensivos' no era efectiva para campos de relación ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe
  - problema por el que la ventana emergente del campo de asociación de selección se cierra al primer input al añadir nuevos datos ([#6971](https://github.com/nocobase/nocobase/pull/6971)) por @katherinehhh
  - El campo de asociación en subtabla activa una solicitud cuando la variable de iteración tiene un valor vacío ([#6969](https://github.com/nocobase/nocobase/pull/6969)) por @katherinehhh
  - Los datos de las reglas de validación del formulario se pierden al colapsar el panel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) por @katherinehhh
  - Corregir el problema por el que los valores predeterminados del formulario de filtro no eran válidos en subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe
  - La internacionalización (i18n) del componente de asignación de campos no funciona ([#6945](https://github.com/nocobase/nocobase/pull/6945)) por @katherinehhh
  - no se pueden expandir los campos de colección de asociación de fuentes de datos externas en el ámbito de la tabla de datos de roles ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh
  - El selector de fecha no se actualiza después de cambiar de "está entre" de vuelta a "es" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) por @katherinehhh
  - La variable de enlace de subtabla obtiene datos de asociación al limpiar en lugar de usar el valor del formulario ([#6963](https://github.com/nocobase/nocobase/pull/6963)) por @katherinehhh
  - Los valores seleccionados se restablecen al actualizar las opciones del desplegable de selección múltiple mediante reglas de vinculación ([#6953](https://github.com/nocobase/nocobase/pull/6953)) por @katherinehhh
  - Posición de resaltado incorrecta al arrastrar filas de tabla ([#6952](https://github.com/nocobase/nocobase/pull/6952)) por @chenos
  - La configuración de visibilidad de los dos puntos de la etiqueta del formulario no funciona ([#6947](https://github.com/nocobase/nocobase/pull/6947)) por @katherinehhh
  - paginar los datos del desplegable del campo de asociación con un tamaño de página de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) por @katherinehhh
  - Corregir el problema con el botón de copiar en la ventana emergente de error que copiaba como [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) por @kerwin612
  - No se pueden seleccionar variables al establecer valores predeterminados para campos de asociación ([#6974](https://github.com/nocobase/nocobase/pull/6974)) por @zhangzhonghe
  - El redimensionamiento de bloques arrastrando no funciona ([#6944](https://github.com/nocobase/nocobase/pull/6944)) por @chenos
- **[Flujo de trabajo: Nodo manual]** Corregir que el inicializador lanza un error al usar una fuente de datos externa ([#6983](https://github.com/nocobase/nocobase/pull/6983)) por @mytharcher
- **[Autenticación]** Problema de rendimiento causado por la limpieza de tokens caducados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile
- **[Gestor de archivos]** Corregir la configuración de tiempo de espera de Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher
- **[Flujo de trabajo]** Corregir error lanzado al filtrar flujos de trabajo ([#6978](https://github.com/nocobase/nocobase/pull/6978)) por @mytharcher
- **[Editor de temas]** Ocultar la opción de cambio de tema y corregir el estilo de la ventana emergente ([#6964](https://github.com/nocobase/nocobase/pull/6964)) por @zhangzhonghe
- **[Campo de colección: Markdown(Vditor)]** Problema de ancho del componente del campo markdown-vditor después de hacer zoom in/out ([#6946](https://github.com/nocobase/nocobase/pull/6946)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el inicializador faltante para el banco de trabajo por @mytharcher
- **[Auth: OIDC]** El texto del botón de inicio de sesión no se localiza por @2013xile
- **[Flujo de trabajo: Aprobación]** Corregir error cuando el ámbito de los asignados consulta con condición de asociación por @mytharcher

### [v1.8.0-alpha.2](https://www.nocobase.com/en/blog/v1.8.0-alpha.2)

*Fecha de lanzamiento: 2025-06-04*

#### 🐛 Corrección de errores

- **[cliente]** Corregir que los campos no se muestren en las plantillas de bloque debido a solicitudes API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
