---
title: "NocoBase v1.7.0-alpha.12: Actualización de dependencias y eliminación del soporte de SQLite"
description: "Nota de la versión v1.7.0-alpha.12"
---

### 🚀 Mejoras

- **[cli]** Optimizar la lógica interna del comando `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) por @chenos

- **[create-nocobase-app]** Actualizar dependencias y eliminar soporte de SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) por @chenos

- **[Móvil]** Optimizar la velocidad de apertura del selector de fecha emergente en móvil ([#6735](https://github.com/nocobase/nocobase/pull/6735)) por @zhangzhonghe

- **[Bloque: plantilla]** Permitir convertir un bloque de plantilla en un bloque normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) por @gchust

- **[Gestor de archivos]** Exponer la API de utilidades ([#6705](https://github.com/nocobase/nocobase/pull/6705)) por @mytharcher

- **[Editor de temas]** Permitir configurar el ancho de la barra lateral en la configuración del tema ([#6720](https://github.com/nocobase/nocobase/pull/6720)) por @chenos

- **[Flujo de trabajo]** Añadir tipos de fecha al conjunto de tipos de variable ([#6717](https://github.com/nocobase/nocobase/pull/6717)) por @mytharcher

- **[Impresión de plantillas]** Reemplazar el control de acciones del origen de datos con control de acceso basado en roles del cliente. por @sheldon66

### 🐛 Corrección de errores

- **[cliente]**
  - Problema de visualización con reglas de enlace en datos de asociación multinivel ([#6755](https://github.com/nocobase/nocobase/pull/6755)) por @katherinehhh

  - Falta el 'registro actual' en la regla de enlace del botón 'Añadir hijo' en tabla jerárquica ([#6752](https://github.com/nocobase/nocobase/pull/6752)) por @katherinehhh

  - Problema al refrescar bloques de datos después de un envío exitoso ([#6748](https://github.com/nocobase/nocobase/pull/6748)) por @zhangzhonghe

  - El botón de colapsar en el menú izquierdo queda oculto por la ventana emergente del flujo de trabajo ([#6733](https://github.com/nocobase/nocobase/pull/6733)) por @zhangzhonghe

  - Problema de dificultad para eliminar iconos de la barra de navegación superior en móvil ([#6734](https://github.com/nocobase/nocobase/pull/6734)) por @zhangzhonghe

  - Visualización incorrecta del valor en "Habilitar columna de índice" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) por @katherinehhh

  - La condición de campo de fecha y hora no funciona en reglas de enlace ([#6728](https://github.com/nocobase/nocobase/pull/6728)) por @katherinehhh

  - Faltan restricciones de opciones de acción al reabrir reglas de enlace ([#6723](https://github.com/nocobase/nocobase/pull/6723)) por @katherinehhh

  - Los campos obligatorios ocultos por reglas de enlace no deberían afectar el envío del formulario ([#6709](https://github.com/nocobase/nocobase/pull/6709)) por @zhangzhonghe

  - Falta filtro para datos ya asociados al añadir datos de asociación ([#6750](https://github.com/nocobase/nocobase/pull/6750)) por @katherinehhh

- **[servidor]** appVersion generado incorrectamente por create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) por @chenos

- **[cli]** Actualizar automáticamente package.json al actualizar ([#6747](https://github.com/nocobase/nocobase/pull/6747)) por @chenos

- **[build]** Corregir error lanzado en el comando tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) por @mytharcher

- **[Bloque: Gantt]** Los meses del bloque de diagrama de Gantt se superponen en el encabezado del calendario en la vista mensual ([#6753](https://github.com/nocobase/nocobase/pull/6753)) por @katherinehhh

- **[Acción: Importar registros]** Corregir las excepciones de importación y exportación que ocurren al establecer permisos de campo. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) por @aaaaaajie

- **[Bloque: plantilla]** Las plantillas de bloque no se pueden usar en entornos MySQL ([#6726](https://github.com/nocobase/nocobase/pull/6726)) por @gchust

- **[Flujo de trabajo]** Corregir error lanzado al ejecutar un evento programado en un subflujo ([#6721](https://github.com/nocobase/nocobase/pull/6721)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Permitir ejecución en modo de múltiples registros por @mytharcher

- **[Acción: Exportar registros Pro]**
  - Corregir las excepciones de importación y exportación que ocurren al establecer permisos de campo. por @aaaaaajie

  - El botón de exportación Pro pierde los parámetros de filtro después de ordenar la columna de la tabla por @katherinehhh

- **[Almacenamiento de archivos: S3(Pro)]**
  - Corregir los datos de respuesta del archivo subido por @mytharcher

  - Añadir lógica multer para la subida del lado del servidor por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corregir la precarga de campos de asociación para registros por @mytharcher
