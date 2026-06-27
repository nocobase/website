---
title: "NocoBase v2.0.14: Mejoras en las comprobaciones de migración, soporte de descarga SQL, formato de registros y visibilidad del proceso de ejecución"
description: "Nota de la versión v2.0.14"
---

### 🚀 Mejoras

- **[Gestor de migraciones]** Mejora en las comprobaciones de migración, soporte de descarga de SQL, formato de registros y visibilidad del proceso de ejecución por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió el problema por el cual los campos personalizados en los valores de campo del formulario Filtro no podían representar el tipo de entrada de valor correcto ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe

  - Se corrigió el problema por el cual el botón de colapso del formulario de filtro v2 dejaba de funcionar después de ordenar los campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe

  - Se corrigió el problema por el cual faltaban las acciones de filtro y actualización en la página de gestión de plantillas de referencia (v1). ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust

  - Los datos del subformulario y la subtabla no se mostraban debido a la comprobación de permisos ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos

- **[Control de acceso]** Se usa collection.filterTargetKey en lugar de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos

- **[Plantillas de interfaz de usuario]**
  - Se corrigió el error de representación del bloque de referencia del panel de acciones. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust

  - Se corrigió el problema por el cual los registros de asociación no se podían cargar correctamente después de guardar el bloque de detalles como plantilla. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust

- **[Flujo de trabajo: Aprobación]**
  - Se corrigió el problema por el cual los asignados no seguían el orden configurado en el nodo por @mytharcher

  - Se corrigieron las etiquetas sin traducir en los detalles del procesamiento de aprobación por @zhangzhonghe

- **[Gestor de migraciones]**
  - Se corrigió el error de compilación por @mytharcher

  - Se corrigió la falta de descripción de la migración y se estableció la hora actual como valor predeterminado por @cgyrock

  - Se corrigió una posible congelación del proceso causada por el registro de sentencias SQL excesivamente grandes incluidas en las excepciones de error de migración por @cgyrock

  - Se ajustó el directorio temporal a storage, para admitir su uso en modo clúster por @mytharcher
