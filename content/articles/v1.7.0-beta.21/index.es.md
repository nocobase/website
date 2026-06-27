---
title: "NocoBase v1.7.0-beta.21: Actualización de dependencias y eliminación del soporte de SQLite"
description: "Nota de la versión v1.7.0-beta.21"
---

### 🚀 Mejoras

- **[create-nocobase-app]** Actualización de dependencias y eliminación del soporte de SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) por @chenos

- **[Móvil]** Optimización de la velocidad de apertura del selector de fecha en dispositivos móviles ([#6735](https://github.com/nocobase/nocobase/pull/6735)) por @zhangzhonghe

- **[Bloque: plantilla]** Soporte para convertir un bloque plantilla en un bloque normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) por @gchust

- **[Editor de temas]** Permitir configurar el ancho de la barra lateral en la configuración del tema ([#6720](https://github.com/nocobase/nocobase/pull/6720)) por @chenos

- **[Gestor de archivos]** Exponer la API de utilidades ([#6705](https://github.com/nocobase/nocobase/pull/6705)) por @mytharcher

- **[Flujo de trabajo]** Añadir tipos de fecha al conjunto de tipos de variable ([#6717](https://github.com/nocobase/nocobase/pull/6717)) por @mytharcher

- **[Impresión de plantillas]** Se reemplazó el control de acciones de la fuente de datos por el control de acceso basado en roles del cliente. por @sheldon66

### 🐛 Corrección de errores

- **[cliente]**
  - Problema al actualizar los bloques de datos después de un envío exitoso ([#6748](https://github.com/nocobase/nocobase/pull/6748)) por @zhangzhonghe

  - Falta de filtro para datos ya asociados al añadir datos de asociación ([#6750](https://github.com/nocobase/nocobase/pull/6750)) por @katherinehhh

  - El botón de colapso en el menú izquierdo queda oculto por la ventana emergente del flujo de trabajo ([#6733](https://github.com/nocobase/nocobase/pull/6733)) por @zhangzhonghe

  - En la tabla jerárquica, la regla de vinculación del botón 'Añadir hijo' no incluye el 'registro actual' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) por @katherinehhh

  - La condición del campo de fecha y hora no funciona en las reglas de vinculación ([#6728](https://github.com/nocobase/nocobase/pull/6728)) por @katherinehhh

  - Problema con los iconos de la barra de navegación superior en móvil que son difíciles de eliminar ([#6734](https://github.com/nocobase/nocobase/pull/6734)) por @zhangzhonghe

  - Visualización incorrecta del valor para "Habilitar columna de índice" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) por @katherinehhh

  - Los campos obligatorios ocultos por reglas de vinculación no deberían afectar el envío del formulario ([#6709](https://github.com/nocobase/nocobase/pull/6709)) por @zhangzhonghe

  - Conversión de variables en condiciones de reglas de vinculación de subtablas/subformularios ([#6702](https://github.com/nocobase/nocobase/pull/6702)) por @katherinehhh

  - El botón de exportación se muestra sin permiso de exportación ([#6689](https://github.com/nocobase/nocobase/pull/6689)) por @katherinehhh

  - Faltan restricciones de opciones de acción al reabrir reglas de vinculación ([#6723](https://github.com/nocobase/nocobase/pull/6723)) por @katherinehhh

  - Problema de cambio de selector en el campo de fecha del botón de filtro ([#6695](https://github.com/nocobase/nocobase/pull/6695)) por @katherinehhh

  - Al conectar a través de una clave foránea, al hacer clic para activar el filtro se obtienen condiciones de filtro vacías ([#6634](https://github.com/nocobase/nocobase/pull/6634)) por @zhangzhonghe

- **[cli]** Actualización automática de package.json al actualizar ([#6747](https://github.com/nocobase/nocobase/pull/6747)) por @chenos

- **[servidor]** appVersion generada incorrectamente por create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) por @chenos

- **[compilación]** Corrección del error lanzado en el comando tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) por @mytharcher

- **[Bloque: Gantt]** El bloque del diagrama de Gantt superpone meses en el encabezado del calendario para la vista mensual ([#6753](https://github.com/nocobase/nocobase/pull/6753)) por @katherinehhh

- **[Acción: Importar registros]** Corrección de las excepciones de importación y exportación que ocurren al configurar permisos de campo. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) por @aaaaaajie

- **[Bloque: plantilla]** Las plantillas de bloque no se pueden usar en entornos MySQL ([#6726](https://github.com/nocobase/nocobase/pull/6726)) por @gchust

- **[Flujo de trabajo]** Corrección del error lanzado al ejecutar un evento programado en un subflujo ([#6721](https://github.com/nocobase/nocobase/pull/6721)) por @mytharcher

- **[Visualización de datos]** Las opciones de campo de tipo enumeración están vacías en el bloque de filtro ([#6706](https://github.com/nocobase/nocobase/pull/6706)) por @2013xile

- **[Acción: Solicitud personalizada]** Asegurar que los datos de la solicitud personalizada deben ser JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) por @chenos

- **[Acción: Exportar registros Pro]**
  - Corrección de las excepciones de importación y exportación que ocurren al configurar permisos de campo. por @aaaaaajie

  - El botón de exportación Pro pierde los parámetros de filtro después de ordenar una columna de la tabla por @katherinehhh

- **[Flujo de trabajo: Evento de acción personalizada]** Soporte para ejecutar en modo de múltiples registros por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]**
  - Añadir lógica multer para la subida del lado del servidor por @mytharcher

  - Corrección de los datos de respuesta del archivo subido por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corrección de la precarga de campos de asociación para registros por @mytharcher
