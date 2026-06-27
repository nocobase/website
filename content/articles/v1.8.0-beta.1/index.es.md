---
title: "NocoBase v1.8.0-beta.1: Añadir gestión de categorías de flujo de trabajo"
description: "Nota de la versión v1.8.0-beta.1"
---

### 🎉 Nuevas Funcionalidades

- **[indefinido]** Añadir nuevo plugin "Botón de Copia de Entrada" para campos de texto de una sola línea ([#6894](https://github.com/nocobase/nocobase/pull/6894)) por @kerwin612

- **[Flujo de trabajo]** Añadir gestión de categorías de flujo de trabajo ([#6965](https://github.com/nocobase/nocobase/pull/6965)) por @mytharcher

### 🚀 Mejoras

- **[cliente]** Permitir configurar si los enlaces del menú se abren en una nueva ventana ([#6918](https://github.com/nocobase/nocobase/pull/6918)) por @katherinehhh

- **[Acción: Importar registros Pro]** Optimizar el rendimiento de importación xlsx por @aaaaaajie

- **[Auth: OIDC]** Ignorar mayúsculas/minúsculas al coincidir usuario por correo electrónico por @2013xile

- **[Flujo de trabajo: Aprobación]** Importar colecciones de flujo de trabajo desde el plugin de flujo de trabajo para evitar duplicados por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Los campos y acciones solo surten efecto después de refrescar la página ([#6977](https://github.com/nocobase/nocobase/pull/6977)) por @zhangzhonghe

  - Corregir que los campos no se muestren en las plantillas de bloque debido a solicitudes API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe

  - Corregir el problema de que los bloques creados en ventanas emergentes tengan una colección incorrecta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe

  - No se pueden seleccionar variables al establecer valores predeterminados para campos de asociación ([#6974](https://github.com/nocobase/nocobase/pull/6974)) por @zhangzhonghe

  - Corregir el problema de que los valores de campos de texto de una sola línea se muestren como un array en modo de lectura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe

  - No se pueden expandir los campos de colección de asociación de fuentes de datos externas en el ámbito de la tabla de datos de roles ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh

  - Corregir el problema de que la opción 'Contenido desbordado con puntos suspensivos' no sea efectiva para campos de relación ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe

  - Corregir el problema de que los valores predeterminados del formulario de filtro no sean válidos en subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe

  - Problema de que la ventana emergente del campo de asociación de selección se cierra al primer input al añadir nuevos datos ([#6971](https://github.com/nocobase/nocobase/pull/6971)) por @katherinehhh

  - El campo de asociación en subtabla activa una solicitud cuando la variable de iteración tiene un valor vacío ([#6969](https://github.com/nocobase/nocobase/pull/6969)) por @katherinehhh

  - Corregir el orden de los campos en la lista desplegable del botón de filtro ([#6962](https://github.com/nocobase/nocobase/pull/6962)) por @zhangzhonghe

  - Los datos de las reglas de validación del formulario se pierden al colapsar el panel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) por @katherinehhh

  - Los valores seleccionados se restablecen al actualizar las opciones del menú desplegable de selección múltiple mediante reglas de vinculación ([#6953](https://github.com/nocobase/nocobase/pull/6953)) por @katherinehhh

  - La variable de vinculación de subtabla obtiene datos de asociación al limpiar en lugar de usar el valor del formulario ([#6963](https://github.com/nocobase/nocobase/pull/6963)) por @katherinehhh

  - Paginar los datos desplegables del campo de asociación con un tamaño de página de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) por @katherinehhh

  - El selector de fecha no se actualiza después de cambiar de "está entre" a "es" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) por @katherinehhh

  - Posición de resaltado incorrecta al arrastrar filas de tabla ([#6952](https://github.com/nocobase/nocobase/pull/6952)) por @chenos

- **[Autenticación]** Problema de rendimiento causado por la limpieza de tokens caducados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile

- **[Flujo de trabajo]** Corregir error lanzado al filtrar flujos de trabajo ([#6978](https://github.com/nocobase/nocobase/pull/6978)) por @mytharcher

- **[Gestor de archivos]** Corregir configuración de tiempo de espera de Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher

- **[Editor de temas]** Ocultar opción de cambio de tema y corregir estilo de ventana emergente ([#6964](https://github.com/nocobase/nocobase/pull/6964)) por @zhangzhonghe

- **[Flujo de trabajo: Evento de acción personalizada]** Corregir inicializador perdido para el banco de trabajo por @mytharcher

- **[Auth: OIDC]** El texto del botón de inicio de sesión no se localiza por @2013xile

- **[Flujo de trabajo: Aprobación]** Corregir error al consultar el ámbito de los asignados con condición de asociación por @mytharcher
