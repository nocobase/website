---
title: "NocoBase v1.7.0-beta.10: Soporte para configuración de variables después del envío"
description: "Nota de la versión v1.7.0-beta.10"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para configuración de variables después del envío, permitiendo redirección con el ID de datos actual ([#6465](https://github.com/nocobase/nocobase/pull/6465)) por @katherinehhh

- **[Campo de colección: Markdown(Vditor)]** Vditor ahora es compatible con S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) por @zhangzhonghe

### 🚀 Mejoras

- **[cliente]**
  - Solo se admite la vista previa de archivos de texto plano ([#6563](https://github.com/nocobase/nocobase/pull/6563)) por @mytharcher

  - Optimización del mensaje de error 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) por @chenos

  - Restricción de acciones disponibles para diferentes propiedades de campo en reglas de vinculación ([#6548](https://github.com/nocobase/nocobase/pull/6548)) por @katherinehhh

- **[Gestor de archivos]** Ajuste de la API `getFileData` del almacenamiento ([#6553](https://github.com/nocobase/nocobase/pull/6553)) por @mytharcher

- **[Control de acceso]** Optimización del orden y estilo del cambio de rol ([#6555](https://github.com/nocobase/nocobase/pull/6555)) por @aaaaaajie

- **[Campo de colección: Secuencia]** Soporte para establecer la secuencia como campo de título para el bloque de calendario ([#6562](https://github.com/nocobase/nocobase/pull/6562)) por @katherinehhh

- **[Flujo de trabajo]** División de columnas ejecutadas en tablas de estadísticas ([#6534](https://github.com/nocobase/nocobase/pull/6534)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** División de columnas ejecutadas en tablas de estadísticas por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - División de columnas ejecutadas en tablas de estadísticas por @mytharcher

  - Soporte para omitir el validador en la configuración por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Las versiones antiguas de navegadores muestran una página en blanco ([#6571](https://github.com/nocobase/nocobase/pull/6571)) por @zhangzhonghe

  - La opción 'Contenido desbordado con puntos suspensivos' requiere actualizar la página para que el estado de alternancia surta efecto ([#6520](https://github.com/nocobase/nocobase/pull/6520)) por @zhangzhonghe

  - Problema con la visualización del campo de fecha en el filtrado de ámbito de datos ([#6564](https://github.com/nocobase/nocobase/pull/6564)) por @katherinehhh

  - Imposibilidad de abrir otro modal dentro de un modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) por @zhangzhonghe

  - La acción de guardar como plantilla falla si contiene un campo de asociación ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust

  - El menú superior de la página se muestra en blanco ([#6551](https://github.com/nocobase/nocobase/pull/6551)) por @zhangzhonghe

  - La asignación de campo con valor nulo no es efectiva ([#6549](https://github.com/nocobase/nocobase/pull/6549)) por @katherinehhh

- **[Flujo de trabajo]**
  - Asegurar que la clave del flujo de trabajo se genere antes de guardar ([#6567](https://github.com/nocobase/nocobase/pull/6567)) por @mytharcher

  - Corrección del error al configurar opciones de eliminación automática ([#6560](https://github.com/nocobase/nocobase/pull/6560)) por @mytharcher

- **[Formularios públicos]** Problema con el título de la página del formulario público mostrando 'Cargando...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) por @katherinehhh

- **[Móvil]** Ajuste del tamaño de fuente mostrado en el teléfono a 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) por @zhangzhonghe

- **[Variables y secretos]** Falta el botón de filtro de icono, el recuento de filtros no se muestra y los datos no se actualizan después de filtrar al cambiar de página ([#6568](https://github.com/nocobase/nocobase/pull/6568)) por @katherinehhh

- **[Autenticación]** Problema de localización para los campos de la página de registro ([#6556](https://github.com/nocobase/nocobase/pull/6556)) por @2013xile

- **[Documentación de la API]** La página de documentación de la API no se puede desplazar ([#6566](https://github.com/nocobase/nocobase/pull/6566)) por @zhangzhonghe

- **[Flujo de trabajo: Evento posterior a la acción]** Los registros múltiples en una acción masiva deben activarse varias veces ([#6559](https://github.com/nocobase/nocobase/pull/6559)) por @mytharcher

- **[Bloque: plantilla]**
  - Las reglas de vinculación del bloque de formulario no se han sincronizado correctamente desde la plantilla ([#6550](https://github.com/nocobase/nocobase/pull/6550)) por @gchust

  - Menú duplicado de guardar como plantilla en el bloque de detalles ([#6558](https://github.com/nocobase/nocobase/pull/6558)) por @gchust

- **[Flujo de trabajo: Aprobación]** Corrección de los valores del formulario de aprobación para enviar por @mytharcher
