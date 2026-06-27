---
title: "NocoBase v1.6.23: Optimizar la lógica interna del comando `nocobase upgrade`"
description: "Nota de la versión v1.6.23"
---

### 🚀 Mejoras

- **[cli]** Optimización de la lógica interna del comando `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) por @chenos

- **[Impresión de plantillas]** Se reemplazó el control de acciones de la fuente de datos por control de acceso basado en roles del cliente. por @sheldon66

### 🐛 Corrección de errores

- **[cli]** Actualización automática de package.json al actualizar ([#6747](https://github.com/nocobase/nocobase/pull/6747)) por @chenos

- **[client]**
  - Filtro faltante para datos ya asociados al añadir datos de asociación ([#6750](https://github.com/nocobase/nocobase/pull/6750)) por @katherinehhh

  - Regla de enlace del botón 'Añadir hijo' en tabla de árbol con falta de 'registro actual' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) por @katherinehhh

- **[Acción: Importar registros]** Se corrigieron las excepciones de importación y exportación que ocurrían al establecer permisos de campo. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) por @aaaaaajie

- **[Bloque: Gantt]** Superposición de meses en el encabezado del calendario para la vista mensual del bloque de diagrama de Gantt ([#6753](https://github.com/nocobase/nocobase/pull/6753)) por @katherinehhh

- **[Acción: Exportar registros Pro]**
  - El botón de exportación Pro pierde los parámetros de filtro después de ordenar la columna de la tabla por @katherinehhh

  - Se corrigieron las excepciones de importación y exportación que ocurrían al establecer permisos de campo. por @aaaaaajie

- **[Almacenamiento de archivos: S3(Pro)]** Se corrigieron los datos de respuesta del archivo subido por @mytharcher

- **[Flujo de trabajo: Aprobación]** Se corrigió la precarga de campos de asociación para registros por @mytharcher
