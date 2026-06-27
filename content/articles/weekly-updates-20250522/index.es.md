---
title: "Actualizaciones semanales de NocoBase: Agregar soporte para impresión masiva en impresión de plantillas"
description: "Las actualizaciones de esta semana incluyen: campos de texto de una sola línea admiten filtrado por múltiples palabras clave, se agrega soporte para impresión masiva en impresión de plantillas y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.31](https://www.nocobase.com/en/blog/v1.6.31)

*Fecha de lanzamiento: 2025-05-18*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Se añadieron todas las claves de localización en-US faltantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher

#### 🐛 Corrección de errores

- **[base de datos]** Manejar celdas de cadena vacía durante la importación de campos para evitar errores ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie
- **[cliente]**

  - La tabla de registro de selección de asociación no filtraba los registros ya asociados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh
  - Datos de asociación no enviados al exponer campos de asociación en subFormulario ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh
  - Los campos de ordenación arrastrables no mostraban correctamente las opciones disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh
- **[Flujo de trabajo]** Corregir el límite de pila que funciona incorrectamente para eventos de colección ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher
- **[Bloque: Panel de acciones]** Leer el nombre base de la ruta desde el escáner para adaptarse al entorno de escritorio. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66
- **[Flujo de trabajo: Nodo manual]** Corregir error de renderizado al mostrar elemento no procesado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir el ámbito de los asignados del delegado y añadir a otros asignados por @mytharcher

### [v1.6.32](https://www.nocobase.com/en/blog/v1.6.32)

*Fecha de lanzamiento: 2025-05-20*

#### 🐛 Corrección de errores

- **[cliente]**
  - Página no redirigida correctamente después de eliminar el último elemento ([#6892](https://github.com/nocobase/nocobase/pull/6892)) por @katherinehhh
  - Componente en cascada en modal no cargaba datos de asociación inicialmente ([#6886](https://github.com/nocobase/nocobase/pull/6886)) por @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.32](https://www.nocobase.com/en/blog/v1.7.0-beta.32)

*Fecha de lanzamiento: 2025-05-19*

#### 🎉 Nuevas funciones

- **[cliente]** Los campos de texto de una línea admiten la introducción de múltiples palabras clave para filtrar ([#6685](https://github.com/nocobase/nocobase/pull/6685)) por @zhangzhonghe
  Referencia: [Filtro de múltiples palabras clave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Filtro de múltiples palabras clave]** Los campos de texto de una línea admiten la introducción de múltiples palabras clave para filtrar por @zhangzhonghe
  Referencia: [Filtro de múltiples palabras clave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impresión de plantillas]** Añadir soporte para impresión por lotes en la impresión de plantillas. por @sheldon66

#### 🚀 Mejoras

- **[Flujo de trabajo]** Se añadieron todas las claves de localización en-US faltantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Componente en cascada en modal no cargaba datos de asociación inicialmente ([#6886](https://github.com/nocobase/nocobase/pull/6886)) por @katherinehhh
  - Datos de asociación no enviados al exponer campos de asociación en subFormulario ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh
  - Los campos de ordenación arrastrables no mostraban correctamente las opciones disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh
  - Faltaban variables del formulario actual en el ámbito de datos de la tabla de selector de datos ([#6882](https://github.com/nocobase/nocobase/pull/6882)) por @katherinehhh
  - La tabla de registro de selección de asociación no filtraba los registros ya asociados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh
- **[base de datos]** Manejar celdas de cadena vacía durante la importación de campos para evitar errores ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie
- **[Flujo de trabajo: Nodo manual]** Corregir error de renderizado al mostrar elemento no procesado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher
- **[Gestor de archivos]** Corregir tipos ([#6873](https://github.com/nocobase/nocobase/pull/6873)) por @mytharcher
- **[Bloque: Panel de acciones]** Leer el nombre base de la ruta desde el escáner para adaptarse al entorno de escritorio. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66
- **[Integración de IA]** El contenido no se muestra al cambiar entre las páginas de configuración del servicio LLM y de configuración de validación ([#6887](https://github.com/nocobase/nocobase/pull/6887)) por @2013xile
- **[Flujo de trabajo]** Corregir el límite de pila que funciona incorrectamente para eventos de colección ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir el ámbito de los asignados del delegado y añadir a otros asignados por @mytharcher
- **[Gestor de copias de seguridad]** Corregir error de tipo en la compilación por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.14](https://www.nocobase.com/en/blog/v1.7.0-alpha.14)

*Fecha de lanzamiento: 2025-05-21*

#### 🎉 Nuevas funciones

- **[cliente]**

  - Los campos de texto de una línea admiten la introducción de múltiples palabras clave para filtrar ([#6685](https://github.com/nocobase/nocobase/pull/6685)) por @zhangzhonghe
    Referencia: [Filtro de múltiples palabras clave](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - La regla de vinculación de acciones admite variables de 'formulario actual' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) por @katherinehhh
- **[compilación]** Soporte para autorización comercial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) por @jiannx
- **[indefinido]** Añadir el registro del plugin de importación por @aaaaaajie
- **[Acción: Importar registros]** Añadir el registro del plugin de importación ([#6841](https://github.com/nocobase/nocobase/pull/6841)) por @aaaaaajie
- **[plugin-comercial]** Soporte comercial por @jiannx
- **[Filtro de múltiples palabras clave]** Los campos de texto de una línea admiten la introducción de múltiples palabras clave para filtrar por @zhangzhonghe
  Referencia: [Filtro de múltiples palabras clave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impresión de plantillas]**

  - Añadir soporte para impresión por lotes en la impresión de plantillas. por @sheldon66
  - Añadir soporte para impresión por lotes en la impresión de plantillas. por @sheldon66

#### 🚀 Mejoras

- **[indefinido]** Construir la imagen Docker completa ([#6898](https://github.com/nocobase/nocobase/pull/6898)) por @chenos
- **[cliente]**

  - Optimizar el problema de que las páginas se vuelven cada vez más lentas con el uso ([#6888](https://github.com/nocobase/nocobase/pull/6888)) por @zhangzhonghe
  - Añadir más ajustes de tamaño integrados para la imagen de estado de lectura ([#6868](https://github.com/nocobase/nocobase/pull/6868)) por @katherinehhh
- **[Flujo de trabajo]**

  - Se añadieron todas las claves de localización en-US faltantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher
  - Permitir revisar más de un borrador ([#6851](https://github.com/nocobase/nocobase/pull/6851)) por @mytharcher
- **[Campo de colección: Adjunto (URL)]** añadir más tamaños integrados al campo de URL de adjunto para el estado de lectura ([#6871](https://github.com/nocobase/nocobase/pull/6871)) por @katherinehhh
- **[Gestor de correo electrónico]**

  - corregir error de sincronización y otros problemas de uso no fáciles por @jiannx
  - añadir gestión de borradores, soporte para visualización de correos electrónicos de subordinados por @jiannx

#### 🐛 Corrección de errores

- **[cliente]**

  - La regla de vinculación deshabilitada no funciona para el botón de acción ([#6896](https://github.com/nocobase/nocobase/pull/6896)) por @katherinehhh
  - Página no redirigida correctamente después de eliminar el último elemento ([#6892](https://github.com/nocobase/nocobase/pull/6892)) por @katherinehhh
  - Componente en cascada en modal no cargaba datos de asociación inicialmente ([#6886](https://github.com/nocobase/nocobase/pull/6886)) por @katherinehhh
  - La tabla de registro de selección de asociación no filtraba los registros ya asociados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh
  - Datos de asociación no enviados al exponer campos de asociación en subFormulario ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh
  - Faltaban variables del formulario actual en el ámbito de datos de la tabla de selector de datos ([#6882](https://github.com/nocobase/nocobase/pull/6882)) por @katherinehhh
  - Los campos de ordenación arrastrables no mostraban correctamente las opciones disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh
  - Limpiar el valor del lado derecho cuando el operador cambia en la regla de vinculación ([#6862](https://github.com/nocobase/nocobase/pull/6862)) por @katherinehhh
  - Operador faltante al cambiar en reglas de vinculación ([#6857](https://github.com/nocobase/nocobase/pull/6857)) por @katherinehhh
  - Problema de vinculación de botones en bloque de detalle ([#6867](https://github.com/nocobase/nocobase/pull/6867)) por @katherinehhh
  - Evaluación incorrecta de operadores para variables de fecha en condiciones de vinculación ([#6825](https://github.com/nocobase/nocobase/pull/6825)) por @katherinehhh
  - Los campos ocultos aún se muestran ([#6844](https://github.com/nocobase/nocobase/pull/6844)) por @zhangzhonghe
  - Incompatibilidad de análisis de variables con datos {{title}} en confirmación secundaria ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - Incompatibilidad de análisis de variables con datos {{title}} en confirmación secundaria ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - Mejora del estilo del componente de valor de regla de vinculación ([#6836](https://github.com/nocobase/nocobase/pull/6836)) por @katherinehhh
- **[base de datos]** Manejar celdas de cadena vacía durante la importación de campos para evitar errores ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie
- **[compilación]** corregir el error de tiempo de ejecución del cliente en plugin-workflow-javascript, error de proceso indefinido ([#6859](https://github.com/nocobase/nocobase/pull/6859)) por @jiannx
- **[Gestor de archivos]**

  - Corregir URL de vista previa en archivos que no son imágenes ([#6889](https://github.com/nocobase/nocobase/pull/6889)) por @mytharcher
  - Corregir tipos ([#6873](https://github.com/nocobase/nocobase/pull/6873)) por @mytharcher
  - Corregir creación de registro de archivo sin permiso de clave foránea ([#6863](https://github.com/nocobase/nocobase/pull/6863)) por @mytharcher
- **[Bloque: Panel de acciones]**

  - Leer el nombre base de la ruta desde el escáner para adaptarse al entorno de escritorio. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66
  - El color del Panel de acciones es incorrecto en modo oscuro ([#6842](https://github.com/nocobase/nocobase/pull/6842)) por @zhangzhonghe
- **[Integración de IA]** El contenido no se muestra al cambiar entre las páginas de configuración del servicio LLM y de configuración de validación ([#6887](https://github.com/nocobase/nocobase/pull/6887)) por @2013xile
- **[Flujo de trabajo: Nodo manual]**

  - Corregir caso de prueba debido a que el plugin se eliminó de la lista integrada ([#6895](https://github.com/nocobase/nocobase/pull/6895)) por @mytharcher
  - Corregir error de renderizado al mostrar elemento no procesado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher
  - Corregir recuento de números de estadísticas incorrecto en tareas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) por @mytharcher
- **[Flujo de trabajo]**

  - Corregir el límite de pila que funciona incorrectamente para eventos de colección ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher
  - Corregir que la navegación hacia atrás no funciona al abrir directamente un enlace emergente en el centro de tareas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) por @mytharcher
- **[Visualización de datos]**

  - Los bloques de gráficos no se muestran cuando se añaden a ventanas emergentes activadas desde acciones a nivel de bloque ([#6864](https://github.com/nocobase/nocobase/pull/6864)) por @2013xile
  - Corregir error al filtrar campos m2m anidados ([#6855](https://github.com/nocobase/nocobase/pull/6855)) por @2013xile
- **[Acción: Exportar registros]**

  - mejorar el rendimiento al eliminar campos en la configuración de campos de importación/exportación ([#6861](https://github.com/nocobase/nocobase/pull/6861)) por @katherinehhh
  - Corregida la exportación de valores vacíos en asociaciones anidadas y url de adjunto ([#6845](https://github.com/nocobase/nocobase/pull/6845)) por @aaaaaajie
- **[Bloque: plantilla]** Después de guardar como plantilla heredada, error al abrir la ventana emergente ([#6840](https://github.com/nocobase/nocobase/pull/6840)) por @gchust
- **[Acción: Duplicar registro]** el modal se cierra al primer clic de entrada al editar datos duplicados ([#6848](https://github.com/nocobase/nocobase/pull/6848)) por @katherinehhh
- **[Flujo de trabajo: kit de prueba]** Corregir casos de prueba fallidos debido al plugin preestablecido requerido ([#6839](https://github.com/nocobase/nocobase/pull/6839)) por @mytharcher
- **[Flujo de trabajo: Evento posterior a la acción]** Corregir variable de usuario actuado no accesible en la plantilla Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) por @mytharcher
- **[plugin-comercial]**

  - corregir envío de registro comercial a CRM y traducción de texto por @jiannx
  - usar cadena de prototipos para implementar la función withCommercial por @jiannx
- **[Acción: Exportar registros Pro]**

  - mejorar el rendimiento al eliminar campos en la configuración de campos de importación/exportación pro por @katherinehhh
  - Corregir el error de exportación de textos largos. por @aaaaaajie
- **[Flujo de trabajo: Subflujo]** Corregir disparador indefinido que causa bloqueo de página por @mytharcher
- **[Impresión de plantillas]**

  - Corregir problema de formateadores no encontrados. por @sheldon66
  - Corregir formateador no encontrado por @sheldon66
- **[Almacenamiento de archivos: S3(Pro)]**

  - caducidad de URL de acceso inválida por @jiannx
  - Cambiar a usar campo de colección para localizar almacenamiento por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir recuento de números de estadísticas incorrecto en tareas por @mytharcher
  - Corregir el ámbito de los asignados del delegado y añadir a otros asignados por @mytharcher
- **[Gestor de correo electrónico]**

  - corregir error de ts por @jiannx
  - la API de lista admite fusión de asuntos por @jiannx
- **[Gestor de copias de seguridad]** Corregir error de tipo en la compilación por @mytharcher
