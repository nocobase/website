---
title: "NocoBase v2.0.50: soporte de la opción \"Mostrar botón de copia\" para el campo de texto de solo lectura"
description: "Nota de la versión v2.0.50"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** añadir acciones de asociar y disociar al bloque de asociación ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh

- **[Copia de texto]** soporte para la opción "Mostrar botón de copia" en campos de texto de solo lectura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh

### 🚀 Mejoras

- **[sin definir]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn

- **[cliente]** Permitir asignar valor de campo para campos de secuencia ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher

### 🐛 Corrección de Errores

- **[motor-de-flujo]** Corregidos mensajes de validación de campos de tabla de datos sin traducir en formularios de flujo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx

- **[cliente]**
  - Corregidos los campos `Oculto (valor reservado)` en bloques de formulario para que permanezcan visibles en el modo Editor de IU, y restaurado el soporte de entrada de valor para asignarlos en Asignación de campos ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx

  - Corregidos nombres de archivo de descarga incorrectos para campos AttachmentURL cuando faltan metadatos del archivo. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher

  - Corregido el disparador de flujo de trabajo masivo en tabla v2 para que la selección de filas se mantenga consistente después de redirigir entre pestañas y las filas se puedan seleccionar nuevamente al regresar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx

  - Corregido que los formularios de filtro no se pudieran colapsar ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe

  - Corregido el problema donde las reglas de vinculación de subtabla v1 cambiaban incorrectamente los estilos de campos obligatorios ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe

  - corregida la representación incorrecta de datos en el bloque de tarjetas en cuadrícula después de actualizar y refrescar ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh

  - corregido que el campo de opción obligatorio en subtabla no se validara correctamente en la primera selección en móvil ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh

  - Corregido el problema donde los parámetros de variable de consulta URL se vuelven inválidos después de cambiar entre páginas en caché ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe

  - corregida la adaptación de DividerItem al tema en v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh

  - corregida la ocultación de la opción de creación rápida para el campo de selección de asociación en subtabla v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh

  - Corregido que las reglas de vinculación no se volvían a ejecutar después de que los valores del formulario cambiaran. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust

  - Corregido el error al filtrar campos escalares con filtros personalizados de selección múltiple ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe

- **[servidor]** validar nombres de paquetes de plugins antes de operaciones del sistema de archivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos

- **[Gestor de fuentes de datos]** evitar la edición y eliminación de todos los registros en permisos de alcance personalizado para fuentes de datos externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh

- **[Fuente de datos: Principal]** Corregidas las tablas de base de datos importadas que usaban el nombre de tabla con prefijo incorrecto cuando un prefijo de tabla está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile

- **[Notificación: Mensaje en la aplicación]** Corregido un problema donde la lista de mensajes en la aplicación no se actualizaba después de recibir notificaciones en tiempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher

- **[Bloque: Kanban]** corregido para evitar el ajuste de palabras individuales en campos de texto largo del bloque kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh

- **[Campo de colección: Fórmula]** corregido que el campo de fórmula en subtabla v2 no se activara para auto-calcular ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh
