---
title: "NocoBase v1.7.0-beta.31: Añadir el registro del plugin de importación"
description: "Nota de la versión v1.7.0-beta.31"
---

### 🎉 Nuevas Funcionalidades

- **[client]** la regla de enlace de acciones ahora soporta variables del 'formulario actual' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) por @katherinehhh

- **[undefined]** Añadir el registro del plugin de importación por @aaaaaajie

- **[Acción: Importar registros]** Añadir el registro del plugin de importación ([#6841](https://github.com/nocobase/nocobase/pull/6841)) por @aaaaaajie

### 🚀 Mejoras

- **[client]** añadir más tamaños integrados para la imagen de estado de lectura ([#6868](https://github.com/nocobase/nocobase/pull/6868)) por @katherinehhh

- **[Campo de colección: Adjunto (URL)]** añadir más tamaños integrados al campo de URL de adjunto para el estado de lectura ([#6871](https://github.com/nocobase/nocobase/pull/6871)) por @katherinehhh

- **[Workflow]** Permitir revisar más de un borrador ([#6851](https://github.com/nocobase/nocobase/pull/6851)) por @mytharcher

### 🐛 Corrección de Errores

- **[client]**
  - problema de enlace de botones en el bloque de detalle ([#6867](https://github.com/nocobase/nocobase/pull/6867)) por @katherinehhh

  - limpiar el valor del lado derecho cuando el operador cambia en la regla de enlace ([#6862](https://github.com/nocobase/nocobase/pull/6862)) por @katherinehhh

  - evaluación incorrecta de operadores para variables de fecha en condiciones de enlace ([#6825](https://github.com/nocobase/nocobase/pull/6825)) por @katherinehhh

  - operador faltante al cambiar en reglas de enlace ([#6857](https://github.com/nocobase/nocobase/pull/6857)) por @katherinehhh

  - incompatibilidad en el análisis de variables con datos {{title}} en confirmación secundaria ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh

  - mejora en el estilo del componente de valor de regla de enlace ([#6836](https://github.com/nocobase/nocobase/pull/6836)) por @katherinehhh

  - incompatibilidad en el análisis de variables con datos {{title}} en confirmación secundaria ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh

  - Los campos ocultos aún se muestran ([#6844](https://github.com/nocobase/nocobase/pull/6844)) por @zhangzhonghe

- **[database]** Importación fallida debido a valores de campos de texto. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) por @aaaaaajie

- **[Visualización de datos]**
  - Los bloques de gráficos no se muestran cuando se añaden a ventanas emergentes activadas desde acciones a nivel de bloque ([#6864](https://github.com/nocobase/nocobase/pull/6864)) por @2013xile

  - Corregir error al filtrar campos m2m anidados ([#6855](https://github.com/nocobase/nocobase/pull/6855)) por @2013xile

- **[Acción: Exportar registros]**
  - mejorar el rendimiento al eliminar campos en la configuración de campos de importación/exportación ([#6861](https://github.com/nocobase/nocobase/pull/6861)) por @katherinehhh

  - Corregida la exportación de valores vacíos en asociaciones anidadas y url de adjunto ([#6845](https://github.com/nocobase/nocobase/pull/6845)) por @aaaaaajie

  - Corregir el error al exportar textos largos. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) por @aaaaaajie

- **[Gestor de archivos]** Corregir la creación de registro de archivo sin permiso de clave foránea ([#6863](https://github.com/nocobase/nocobase/pull/6863)) por @mytharcher

- **[Workflow]** Corregir que la navegación hacia atrás no funciona al abrir directamente un enlace emergente en el centro de tareas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) por @mytharcher

- **[Acción: Duplicar registro]** la ventana modal se cierra al primer clic en la entrada al editar datos duplicados ([#6848](https://github.com/nocobase/nocobase/pull/6848)) por @katherinehhh

- **[Bloque: plantilla]** Después de guardar como plantilla heredada, error al abrir la ventana emergente ([#6840](https://github.com/nocobase/nocobase/pull/6840)) por @gchust

- **[Workflow: kit de prueba]** Corregir casos de prueba fallidos debido al plugin preestablecido requerido ([#6839](https://github.com/nocobase/nocobase/pull/6839)) por @mytharcher

- **[Workflow: Evento posterior a la acción]** Corregir que la variable de usuario actuado no es accesible en la plantilla Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) por @mytharcher

- **[Workflow: Nodo manual]** Corregir el conteo incorrecto de números de estadísticas en tareas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) por @mytharcher

- **[Bloque: Panel de acciones]** El color del panel de acciones es incorrecto en modo oscuro ([#6842](https://github.com/nocobase/nocobase/pull/6842)) por @zhangzhonghe

- **[Acción: Exportar registros Pro]**
  - mejorar el rendimiento al eliminar campos en la configuración de campos de importación/exportación pro por @katherinehhh

  - Corregir el error al exportar textos largos. por @aaaaaajie

- **[Workflow: Subflujo]** Corregir el bloqueo de página causado por un desencadenante indefinido por @mytharcher

- **[Impresión de plantilla]**
  - Corregir el problema de formateadores no encontrados. por @sheldon66

  - Corregir formateador no encontrado por @sheldon66

- **[Almacenamiento de archivos: S3(Pro)]**
  - Cambiar para usar el campo de colección para localizar el almacenamiento por @mytharcher

  - caducidad de url de acceso inválida por @jiannx

- **[Workflow: Aprobación]** Corregir el conteo incorrecto de números de estadísticas en tareas por @mytharcher
