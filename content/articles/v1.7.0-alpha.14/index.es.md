---
title: "NocoBase v1.7.0-alpha.14: soporte para autorización comercial"
description: "Nota de la versión v1.7.0-alpha.14"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**

  - Los campos de texto de una línea admiten la introducción de múltiples palabras clave para filtrar ([#6685](https://github.com/nocobase/nocobase/pull/6685)) por @zhangzhonghe
    Referencia: [Filtro de múltiples palabras clave](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - Las reglas de vinculación de acciones admiten variables del 'formulario actual' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) por @katherinehhh
- **[build]** soporte para autorización comercial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) por @jiannx
- **[undefined]** Añadir el registro del plugin de importación por @aaaaaajie
- **[Acción: Importar registros]** Añadir el registro del plugin de importación ([#6841](https://github.com/nocobase/nocobase/pull/6841)) por @aaaaaajie
- **[plugin-commercial]** soporte comercial por @jiannx
- **[Filtro de múltiples palabras clave]** Los campos de texto de una línea admiten la introducción de múltiples palabras clave para filtrar por @zhangzhonghe
  Referencia: [Filtro de múltiples palabras clave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impresión de plantillas]**

  - Añadir soporte para impresión por lotes en la impresión de plantillas. por @sheldon66
  - Añadir soporte para impresión por lotes en la impresión de plantillas. por @sheldon66

### 🚀 Mejoras

- **[undefined]** Construir la imagen Docker completa ([#6898](https://github.com/nocobase/nocobase/pull/6898)) por @chenos
- **[cliente]**

  - Optimizar el problema de que las páginas se vuelven cada vez más lentas con el uso ([#6888](https://github.com/nocobase/nocobase/pull/6888)) por @zhangzhonghe
  - Añadir más tamaños integrados para la imagen de estado de lectura ([#6868](https://github.com/nocobase/nocobase/pull/6868)) por @katherinehhh
- **[Workflow]**

  - Añadir todas las claves de localización en-US faltantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher
  - Permitir revisar más de un borrador ([#6851](https://github.com/nocobase/nocobase/pull/6851)) por @mytharcher
- **[Campo de colección: Adjunto (URL)]** añadir más tamaños integrados al campo de URL de adjunto para el estado de lectura ([#6871](https://github.com/nocobase/nocobase/pull/6871)) por @katherinehhh
- **[Gestor de correo electrónico]**

  - corregir error de sincronización y otros problemas de uso no fáciles por @jiannx
  - añadir gestión de borradores, soporte para visualización de correos de subordinados por @jiannx

### 🐛 Corrección de errores

- **[cliente]**

  - la regla de vinculación deshabilitada no funciona para el botón de acción ([#6896](https://github.com/nocobase/nocobase/pull/6896)) por @katherinehhh
  - la página no se redirige correctamente después de eliminar el último elemento ([#6892](https://github.com/nocobase/nocobase/pull/6892)) por @katherinehhh
  - el componente en cascada en el modal no carga los datos de asociación inicialmente ([#6886](https://github.com/nocobase/nocobase/pull/6886)) por @katherinehhh
  - la tabla de registros de selección de asociación no filtraba los registros ya asociados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh
  - los datos de asociación no se envían al exponer campos de asociación en subFormulario ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh
  - faltan variables del formulario actual en el ámbito de datos de la tabla del selector de datos ([#6882](https://github.com/nocobase/nocobase/pull/6882)) por @katherinehhh
  - los campos de ordenación arrastrables no muestran las opciones disponibles correctamente ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh
  - limpiar el valor del lado derecho cuando el operador cambia en la regla de vinculación ([#6862](https://github.com/nocobase/nocobase/pull/6862)) por @katherinehhh
  - operador faltante al cambiar en reglas de vinculación ([#6857](https://github.com/nocobase/nocobase/pull/6857)) por @katherinehhh
  - problema de vinculación de botones en el bloque de detalle ([#6867](https://github.com/nocobase/nocobase/pull/6867)) por @katherinehhh
  - evaluación incorrecta de operadores para variables de fecha en condiciones de vinculación ([#6825](https://github.com/nocobase/nocobase/pull/6825)) por @katherinehhh
  - Los campos ocultos aún se muestran ([#6844](https://github.com/nocobase/nocobase/pull/6844)) por @zhangzhonghe
  - incompatibilidad de análisis de variables con datos {{title}} en confirmación secundaria ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - incompatibilidad de análisis de variables con datos {{title}} en confirmación secundaria ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - mejora del estilo del componente de valor de la regla de vinculación ([#6836](https://github.com/nocobase/nocobase/pull/6836)) por @katherinehhh
- **[base de datos]** manejar celdas de cadena vacía durante la importación de campos para evitar errores ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie
- **[build]** corregir el error de tiempo de ejecución del cliente en plugin-workflow-javascript, error de proceso indefinido ([#6859](https://github.com/nocobase/nocobase/pull/6859)) por @jiannx
- **[Gestor de archivos]**

  - Corregir URL de vista previa en archivos que no son imágenes ([#6889](https://github.com/nocobase/nocobase/pull/6889)) por @mytharcher
  - Corregir tipos ([#6873](https://github.com/nocobase/nocobase/pull/6873)) por @mytharcher
  - Corregir creación de registro de archivo sin permiso de clave foránea ([#6863](https://github.com/nocobase/nocobase/pull/6863)) por @mytharcher
- **[Bloque: Panel de acciones]**

  - Leer el nombre base de la ruta del escáner para adaptarse al entorno de escritorio. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66
  - El color del Panel de acciones es incorrecto en modo oscuro ([#6842](https://github.com/nocobase/nocobase/pull/6842)) por @zhangzhonghe
- **[Integración de IA]** El contenido no se muestra al cambiar entre las páginas de configuración del servicio LLM y de validación ([#6887](https://github.com/nocobase/nocobase/pull/6887)) por @2013xile
- **[Workflow: Nodo manual]**

  - Corregir caso de prueba debido a que el plugin se eliminó de la lista integrada ([#6895](https://github.com/nocobase/nocobase/pull/6895)) por @mytharcher
  - Corregir error de renderizado al mostrar elemento no procesado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher
  - Corregir recuento de números de estadísticas incorrecto en tareas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) por @mytharcher
- **[Workflow]**

  - Corregir que el límite de pila funciona incorrectamente para el evento de colección ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher
  - Corregir que la navegación hacia atrás no funciona al abrir directamente un enlace emergente en el centro de tareas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) por @mytharcher
- **[Visualización de datos]**

  - Los bloques de gráficos no se muestran cuando se añaden a ventanas emergentes activadas desde acciones a nivel de bloque ([#6864](https://github.com/nocobase/nocobase/pull/6864)) por @2013xile
  - Corregir error al filtrar campos m2m anidados ([#6855](https://github.com/nocobase/nocobase/pull/6855)) por @2013xile
- **[Acción: Exportar registros]**

  - mejorar el rendimiento al eliminar campos en la configuración de campos de importación/exportación ([#6861](https://github.com/nocobase/nocobase/pull/6861)) por @katherinehhh
  - Corregida la exportación de valores vacíos en asociaciones anidadas y url de adjunto ([#6845](https://github.com/nocobase/nocobase/pull/6845)) por @aaaaaajie
- **[Bloque: plantilla]** Después de guardar como plantilla heredada, error al abrir la ventana emergente ([#6840](https://github.com/nocobase/nocobase/pull/6840)) por @gchust
- **[Acción: Duplicar registro]** el modal se cierra al primer clic de entrada al editar datos duplicados ([#6848](https://github.com/nocobase/nocobase/pull/6848)) por @katherinehhh
- **[Workflow: kit de prueba]** Corregir casos de prueba fallidos debido al plugin preestablecido requerido ([#6839](https://github.com/nocobase/nocobase/pull/6839)) por @mytharcher
- **[Workflow: Evento posterior a la acción]** Corregir que la variable de usuario actuado no es accesible en la plantilla Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) por @mytharcher
- **[plugin-commercial]**

  - corregir el envío de registro comercial a CRM y traducción de texto por @jiannx
  - 使用原型链实现 withCommercial 函数 por @jiannx
- **[Acción: Exportar registros Pro]**

  - mejorar el rendimiento al eliminar campos en la configuración de campos de importación/exportación pro por @katherinehhh
  - Corregir el error de exportación de textos largos. por @aaaaaajie
- **[Workflow: Subflujo]** Corregir el bloqueo de página causado por un desencadenante indefinido por @mytharcher
- **[Impresión de plantillas]**

  - Corregir problema de formateadores no encontrados. por @sheldon66
  - Corregir formateador no encontrado por @sheldon66
- **[Almacenamiento de archivos: S3(Pro)]**

  - caducidad de URL de acceso inválida por @jiannx
  - Cambiar a usar el campo de colección para localizar el almacenamiento por @mytharcher
- **[Workflow: Aprobación]**

  - Corregir recuento de números de estadísticas incorrecto en tareas por @mytharcher
  - Corregir ámbito de asignados de delegado y añadir a otros asignados por @mytharcher
- **[Gestor de correo electrónico]**

  - corregir error de ts por @jiannx
  - la API de lista soporta fusión de asunto por @jiannx
- **[Gestor de copias de seguridad]** Corregir error de tipo en la compilación por @mytharcher
