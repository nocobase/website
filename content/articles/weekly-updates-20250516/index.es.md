---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana incluyen: permitir la revisión de más de un borrador, agregar más configuraciones de tamaño integradas para imágenes de estado de lectura y otras mejoras."
---

Resume las notas de actualización semanales del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.28](https://www.nocobase.com/en/blog/v1.6.28)

*Fecha de lanzamiento: 2025-05-09*

#### 🐛 Corrección de errores

- **[database]** Error de importación debido a valores de campo de texto. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) por @aaaaaajie
- **[client]** Los campos ocultos aún se muestran ([#6844](https://github.com/nocobase/nocobase/pull/6844)) por @zhangzhonghe
- **[Acción: Exportar registros]** Corregido el error al exportar textos largos. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) por @aaaaaajie
- **[Flujo de trabajo: Evento posterior a la acción]** Corregido que la variable de usuario actuado no era accesible en la plantilla Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) por @mytharcher
- **[Bloque: Panel de acciones]** El color del panel de acciones es incorrecto en modo oscuro ([#6842](https://github.com/nocobase/nocobase/pull/6842)) por @zhangzhonghe
- **[Acción: Exportar registros Pro]** Corregido el error al exportar textos largos. por @aaaaaajie

### [v1.6.29](https://www.nocobase.com/en/blog/v1.6.29)

*Fecha de lanzamiento: 2025-05-13*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Permitir revisar más de un borrador ([#6851](https://github.com/nocobase/nocobase/pull/6851)) por @mytharcher

#### 🐛 Corrección de errores

- **[Acción: Exportar registros]** Corregida la exportación de valores vacíos en asociaciones anidadas y URL de archivos adjuntos ([#6845](https://github.com/nocobase/nocobase/pull/6845)) por @aaaaaajie
- **[Flujo de trabajo: Nodo manual]** Corregido el recuento incorrecto de estadísticas en tareas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) por @mytharcher
- **[Flujo de trabajo: kit de prueba]** Corregidos casos de prueba fallidos debido al plugin preestablecido requerido ([#6839](https://github.com/nocobase/nocobase/pull/6839)) por @mytharcher
- **[Visualización de datos]** Corregido error al filtrar campos m2m anidados ([#6855](https://github.com/nocobase/nocobase/pull/6855)) por @2013xile
- **[Flujo de trabajo: Subflujo]** Corregido el bloqueo de página causado por un disparador indefinido por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]** Caducidad de URL de acceso inválida por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregido el recuento incorrecto de estadísticas en tareas por @mytharcher

### [v1.6.30](https://www.nocobase.com/en/blog/v1.6.30)

*Fecha de lanzamiento: 2025-05-15*

#### 🚀 Mejoras

- **[client]** Añadidos más ajustes de tamaño integrados para la imagen de estado de lectura ([#6868](https://github.com/nocobase/nocobase/pull/6868)) por @katherinehhh

#### 🐛 Corrección de errores

- **[Gestor de archivos]**

  - Corregidos tipos ([#6873](https://github.com/nocobase/nocobase/pull/6873)) por @mytharcher
  - Corregida la creación de registro de archivo sin permiso de clave foránea ([#6863](https://github.com/nocobase/nocobase/pull/6863)) por @mytharcher
- **[Acción: Exportar registros]** Mejorado el rendimiento al eliminar campos en la configuración de campos de importación/exportación ([#6861](https://github.com/nocobase/nocobase/pull/6861)) por @katherinehhh
- **[Visualización de datos]** Los bloques de gráficos no se muestran cuando se añaden a ventanas emergentes activadas desde acciones a nivel de bloque ([#6864](https://github.com/nocobase/nocobase/pull/6864)) por @2013xile
- **[Acción: Exportar registros Pro]** Mejorado el rendimiento al eliminar campos en la configuración de campos de importación/exportación pro por @katherinehhh
- **[Almacenamiento de archivos: S3(Pro)]]** Cambio para usar el campo de colección para localizar el almacenamiento por @mytharcher
- **[Gestor de copias de seguridad]** Corregido error de tipo en la compilación por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.31](https://www.nocobase.com/en/blog/v1.7.0-beta.31)

*Fecha de lanzamiento: 2025-05-15*

#### 🎉 Nuevas funciones

- **[client]** La regla de vinculación de acciones admite variables de 'formulario actual' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) por @katherinehhh
- **[undefined]** Añadido el registro del plugin de importación por @aaaaaajie
- **[Acción: Importar registros]** Añadido el registro del plugin de importación ([#6841](https://github.com/nocobase/nocobase/pull/6841)) por @aaaaaajie

#### 🚀 Mejoras

- **[client]** Añadidos más ajustes de tamaño integrados para la imagen de estado de lectura ([#6868](https://github.com/nocobase/nocobase/pull/6868)) por @katherinehhh
- **[Campo de colección: Adjunto (URL)]** Añadidos más tamaños integrados al campo de URL de adjunto para el estado de lectura ([#6871](https://github.com/nocobase/nocobase/pull/6871)) por @katherinehhh
- **[Flujo de trabajo]** Permitir revisar más de un borrador ([#6851](https://github.com/nocobase/nocobase/pull/6851)) por @mytharcher

#### 🐛 Corrección de errores

- **[client]**

  - Problema de vinculación de botones en el bloque de detalle ([#6867](https://github.com/nocobase/nocobase/pull/6867)) por @katherinehhh
  - Limpiar el valor del lado derecho cuando el operador cambia en la regla de vinculación ([#6862](https://github.com/nocobase/nocobase/pull/6862)) por @katherinehhh
  - Evaluación incorrecta de operadores para variables de fecha en condiciones de vinculación ([#6825](https://github.com/nocobase/nocobase/pull/6825)) por @katherinehhh
  - Operador faltante al cambiar en reglas de vinculación ([#6857](https://github.com/nocobase/nocobase/pull/6857)) por @katherinehhh
  - Incompatibilidad de análisis de variables con datos {{title}} en confirmación secundaria ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - Mejora del estilo del componente de valor de regla de vinculación ([#6836](https://github.com/nocobase/nocobase/pull/6836)) por @katherinehhh
  - Incompatibilidad de análisis de variables con datos {{title}} en confirmación secundaria ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - Los campos ocultos aún se muestran ([#6844](https://github.com/nocobase/nocobase/pull/6844)) por @zhangzhonghe
- **[database]** Error de importación debido a valores de campo de texto. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) por @aaaaaajie
- **[Visualización de datos]**

  - Los bloques de gráficos no se muestran cuando se añaden a ventanas emergentes activadas desde acciones a nivel de bloque ([#6864](https://github.com/nocobase/nocobase/pull/6864)) por @2013xile
  - Corregido error al filtrar campos m2m anidados ([#6855](https://github.com/nocobase/nocobase/pull/6855)) por @2013xile
- **[Acción: Exportar registros]**

  - Mejorado el rendimiento al eliminar campos en la configuración de campos de importación/exportación ([#6861](https://github.com/nocobase/nocobase/pull/6861)) por @katherinehhh
  - Corregida la exportación de valores vacíos en asociaciones anidadas y URL de archivos adjuntos ([#6845](https://github.com/nocobase/nocobase/pull/6845)) por @aaaaaajie
  - Corregido el error al exportar textos largos. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) por @aaaaaajie
- **[Gestor de archivos]** Corregida la creación de registro de archivo sin permiso de clave foránea ([#6863](https://github.com/nocobase/nocobase/pull/6863)) por @mytharcher
- **[Flujo de trabajo]** Corregido que la navegación hacia atrás no funciona al abrir directamente un enlace emergente en el centro de tareas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) por @mytharcher
- **[Acción: Duplicar registro]** El modal se cierra al primer clic en la entrada al editar datos duplicados ([#6848](https://github.com/nocobase/nocobase/pull/6848)) por @katherinehhh
- **[Bloque: plantilla]** Después de guardar como plantilla heredada, error al abrir la ventana emergente ([#6840](https://github.com/nocobase/nocobase/pull/6840)) por @gchust
- **[Flujo de trabajo: kit de prueba]** Corregidos casos de prueba fallidos debido al plugin preestablecido requerido ([#6839](https://github.com/nocobase/nocobase/pull/6839)) por @mytharcher
- **[Flujo de trabajo: Evento posterior a la acción]** Corregido que la variable de usuario actuado no era accesible en la plantilla Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Corregido el recuento incorrecto de estadísticas en tareas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) por @mytharcher
- **[Bloque: Panel de acciones]** El color del panel de acciones es incorrecto en modo oscuro ([#6842](https://github.com/nocobase/nocobase/pull/6842)) por @zhangzhonghe
- **[Acción: Exportar registros Pro]**

  - Mejorado el rendimiento al eliminar campos en la configuración de campos de importación/exportación pro por @katherinehhh
  - Corregido el error al exportar textos largos. por @aaaaaajie
- **[Flujo de trabajo: Subflujo]** Corregido el bloqueo de página causado por un disparador indefinido por @mytharcher
- **[Impresión de plantillas]**

  - Corregido el problema de formateadores no encontrados. por @sheldon66
  - Corregido formateador no encontrado por @sheldon66
- **[Almacenamiento de archivos: S3(Pro)]**

  - Cambio para usar el campo de colección para localizar el almacenamiento por @mytharcher
  - Caducidad de URL de acceso inválida por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregido el recuento incorrecto de estadísticas en tareas por @mytharcher
