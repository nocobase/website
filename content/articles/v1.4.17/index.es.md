---
title: "NocoBase v1.4.17: Soporta el uso de la variable \"Registros seleccionados de tabla\" en campos de arreglo m2m"
description: "Nota de la versión v1.4.17"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Se añade soporte para usar la variable "Registros seleccionados de la tabla" en campos de arreglo m2m ([#5974](https://github.com/nocobase/nocobase/pull/5974)) por @2013xile

### 🚀 Mejoras

- **[indefinido]** El plugin de tema se habilita por defecto ([#5957](https://github.com/nocobase/nocobase/pull/5957)) por @zhangzhonghe

- **[Fuente de datos: Principal]** Se añadió validación de conflictos de nombre para evitar que los usuarios creen Colecciones con el mismo nombre que las Colecciones del sistema ([#5962](https://github.com/nocobase/nocobase/pull/5962)) por @chareice

- **[Flujo de trabajo]** Se evita el mal uso de variables de rango de fechas en la mayoría de lugares a menos que sea un componente de filtro ([#5954](https://github.com/nocobase/nocobase/pull/5954)) por @mytharcher

### 🐛 Corrección de Errores

- **[base de datos]**
  - Se corrigió un problema en la acción de eliminación donde filterByTk con el parámetro filter no podía eliminar datos ([#5976](https://github.com/nocobase/nocobase/pull/5976)) por @chareice

  - Los métodos firstOrCreate y updateOrCreate del repositorio pierden el contexto ([#5973](https://github.com/nocobase/nocobase/pull/5973)) por @chenos

- **[cliente]**
  - Se corrigió un problema al añadir un campo de relación uno a uno en el formulario ([#5975](https://github.com/nocobase/nocobase/pull/5975)) por @katherinehhh

  - Se corrigió un problema con la asignación de campos en subtabla al volver a seleccionar datos después de eliminarlos ([#5958](https://github.com/nocobase/nocobase/pull/5958)) por @katherinehhh

  - Se corrigió el error del bloque de tabla causado por datos que contienen campos llamados 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) por @zhangzhonghe

- **[Fuente de datos: Principal]** Se corrigieron problemas de compatibilidad heredados con el campo unixTimestamp. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) por @chareice

- **[Flujo de trabajo]** Se corrigió el error del bloque de subdetalles al lanzar una excepción en la configuración de la interfaz de usuario del nodo manual ([#5953](https://github.com/nocobase/nocobase/pull/5953)) por @mytharcher
