---
title: "NocoBase v1.8.0-alpha.1: Añadir gestión de categorías de flujo de trabajo"
description: "Nota de la versión v1.8.0-alpha.1"
---

### 🎉 Nuevas funciones

- **[indefinido]**

  - Nuevo soporte para Gitpod que permite iniciar el entorno de desarrollo con un solo clic y comenzar a desarrollar rápidamente. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) por @kerwin612
  - Añadir nuevo plugin "Botón de copia de entrada" para campos de texto de una sola línea ([#6894](https://github.com/nocobase/nocobase/pull/6894)) por @kerwin612
- **[Visualización de datos]** Soporte para multiplicación y división en la configuración de transformación de gráficos ([#6788](https://github.com/nocobase/nocobase/pull/6788)) por @bugstark
- **[Flujo de trabajo]** Añadir gestión de categorías de flujo de trabajo ([#6965](https://github.com/nocobase/nocobase/pull/6965)) por @mytharcher
- **[Gestor de correo electrónico]** soporte para envío masivo por @jiannx

### 🚀 Mejoras

- **[cliente]**

  - mejorar estilos para el componente de filtro de rango de fechas ([#6939](https://github.com/nocobase/nocobase/pull/6939)) por @katherinehhh
  - soporte para configurar si los enlaces del menú se abren en una nueva ventana ([#6918](https://github.com/nocobase/nocobase/pull/6918)) por @katherinehhh
  - Corregir problema donde los controles ocultos del formulario capturaban la tecla tab, mejorando significativamente la eficiencia de operación del formulario ([#6942](https://github.com/nocobase/nocobase/pull/6942)) por @kerwin612
  - validar campos obligatorios antes de mostrar el diálogo de confirmación ([#6931](https://github.com/nocobase/nocobase/pull/6931)) por @katherinehhh
- **[Formularios públicos]** Soporte para usar el parámetro de URL como variable ([#6973](https://github.com/nocobase/nocobase/pull/6973)) por @mytharcher
- **[Acción: Importar registros Pro]** Optimizar el rendimiento de importación xlsx por @aaaaaajie
- **[Impresión de plantilla]** Añadir más registros. por @sheldon66
- **[Autenticación: OIDC]** Ignorar mayúsculas/minúsculas al coincidir usuario por correo electrónico por @2013xile
- **[Flujo de trabajo: Aprobación]** Importar colecciones de flujo de trabajo desde el plugin de flujo de trabajo para evitar duplicación por @mytharcher
- **[Gestor de correo electrónico]** completar función de envío masivo por @jiannx

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir campos que no se muestran en plantillas de bloque causado por solicitudes API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
  - Corregir el problema donde los bloques creados en ventanas emergentes tenían una colección incorrecta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe
  - Corregir el problema donde los valores de campos de texto de una sola línea se mostraban como un array en modo de lectura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe
  - Corregir el orden de los campos en la lista desplegable del botón de filtro ([#6962](https://github.com/nocobase/nocobase/pull/6962)) por @zhangzhonghe
  - Los campos y acciones solo surten efecto después de actualizar la página ([#6977](https://github.com/nocobase/nocobase/pull/6977)) por @zhangzhonghe
  - Corregir el problema donde la opción 'Contenido desbordado con puntos suspensivos' no era efectiva para campos de relación ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe
  - problema donde la ventana emergente del campo de selección de asociación se cerraba al primer input al añadir nuevos datos ([#6971](https://github.com/nocobase/nocobase/pull/6971)) por @katherinehhh
  - campo de asociación en subtabla que desencadenaba solicitud cuando la variable de iteración tenía valor vacío ([#6969](https://github.com/nocobase/nocobase/pull/6969)) por @katherinehhh
  - datos de reglas de validación de formulario perdidos al colapsar panel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) por @katherinehhh
  - Corregir problema donde los valores predeterminados del formulario de filtro no eran válidos en subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe
  - i18n del componente de asignación de campos no funcionaba ([#6945](https://github.com/nocobase/nocobase/pull/6945)) por @katherinehhh
  - imposibilidad de expandir campos de colección de asociación desde fuentes de datos externas en el ámbito de la tabla de datos de roles ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh
  - selector de fecha no se actualizaba después de cambiar de "está entre" de vuelta a "es" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) por @katherinehhh
  - variable de enlace de subtabla obtenía datos de asociación al limpiar en lugar de usar el valor del formulario ([#6963](https://github.com/nocobase/nocobase/pull/6963)) por @katherinehhh
  - los valores seleccionados se restablecían al actualizar opciones de lista desplegable de selección múltiple mediante reglas de enlace ([#6953](https://github.com/nocobase/nocobase/pull/6953)) por @katherinehhh
  - Posición de resaltado incorrecta al arrastrar filas de tabla ([#6952](https://github.com/nocobase/nocobase/pull/6952)) por @chenos
  - configuración de visibilidad de dos puntos en etiqueta de formulario no funcionaba ([#6947](https://github.com/nocobase/nocobase/pull/6947)) por @katherinehhh
  - paginar datos desplegables de campo de asociación con tamaño de página de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) por @katherinehhh
  - Corregir el problema con el botón de copia en la ventana emergente de error que copiaba como [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) por @kerwin612
  - No se pueden seleccionar variables al establecer valores predeterminados para campos de asociación ([#6974](https://github.com/nocobase/nocobase/pull/6974)) por @zhangzhonghe
  - Redimensionamiento de bloque arrastrando no funcionaba ([#6944](https://github.com/nocobase/nocobase/pull/6944)) por @chenos
- **[Flujo de trabajo: Nodo manual]** Corregir error del inicializador al usar fuente de datos externa ([#6983](https://github.com/nocobase/nocobase/pull/6983)) por @mytharcher
- **[Autenticación]** Problema de rendimiento causado por la limpieza de tokens caducados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile
- **[Gestor de archivos]** Corregir configuración de tiempo de espera de Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher
- **[Flujo de trabajo]** Corregir error lanzado al filtrar flujos de trabajo ([#6978](https://github.com/nocobase/nocobase/pull/6978)) por @mytharcher
- **[Editor de temas]** Ocultar opción de cambio de tema y corregir estilo de ventana emergente ([#6964](https://github.com/nocobase/nocobase/pull/6964)) por @zhangzhonghe
- **[Campo de colección: Markdown(Vditor)]** problema de ancho del componente de campo markdown-vditor después de hacer zoom in y out ([#6946](https://github.com/nocobase/nocobase/pull/6946)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir inicializador para banco de trabajo omitido por @mytharcher
- **[Autenticación: OIDC]** Texto del botón de inicio de sesión no se localizaba por @2013xile
- **[Flujo de trabajo: Aprobación]** Corregir error cuando la consulta de ámbito de asignados usaba condición de asociación por @mytharcher
