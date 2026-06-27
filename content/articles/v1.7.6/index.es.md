---
title: "NocoBase v1.7.6: Corrección de errores"
description: "Nota de la versión v1.7.6"
---

### 🚀 Mejoras

- **[cliente]** Prohibir mover un grupo de menú dentro de sí mismo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[cliente]**
  - Se resolvió un problema por el cual un bloque no podía leer los datos de vista de fuentes de datos externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie

  - Corregir el problema de error de parámetros del bloque de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe

  - La variable de objeto actual no es válida en las reglas de vinculación ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe

  - No se puede limpiar el indicador de campo obligatorio de una subtabla usando reglas de vinculación ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe

- **[indefinido]** Eliminar dependencia de base de datos para possibleTypes, forzar configuración basada en API por @aaaaaajie

- **[Móvil]** Optimizar problemas de retardo en ventanas emergentes móviles ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe

- **[Gestor de fuentes de datos]** Eliminar dependencia de base de datos para possibleTypes, forzar configuración basada en API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie

- **[Acción: Importar registros]** Se corrigieron errores que ocurrían durante la edición por lotes al importar datos de tabla jerárquica XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie

- **[Flujo de trabajo]** Corregir error de interfaz de usuario cuando el flujo de trabajo no existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher

- **[Flujo de trabajo: JavaScript]** Corregir require para rutas relativas por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir error lanzado cuando se elimina un flujo de trabajo por @mytharcher

  - Recargar asociación de archivos desde instantánea para evitar que la URL expire por @mytharcher

  - Corregir variables de activación por @mytharcher
