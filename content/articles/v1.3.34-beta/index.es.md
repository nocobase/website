---
title: "NocoBase v1.3.34-beta: Mejoras en la configuración de campos de formulario de filtro"
description: "Nota de la versión v1.3.34-beta"
---

### 🎉 Novedades

- **[test]** Los campos de asociación en los formularios de filtro ahora permiten configurar si se permite la selección múltiple ([#5451](https://github.com/nocobase/nocobase/pull/5451)) por @zhangzhonghe

- **[cliente]** Se añade una variable llamada "Objeto padre" ([#5449](https://github.com/nocobase/nocobase/pull/5449)) por @zhangzhonghe
Referencia: [Objeto padre](https://docs.nocobase.com/handbook/ui/variables#parent-object)
### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige que las variables de parámetros de búsqueda de URL no se analizaran ([#5454](https://github.com/nocobase/nocobase/pull/5454)) por @zhangzhonghe

  - Se corrige un error de borrado de datos al seleccionar datos de asociación con ámbito de datos en subtablas anidadas ([#5441](https://github.com/nocobase/nocobase/pull/5441)) por @katherinehhh

  - Se corrige el color de fondo de la fila seleccionada en la tabla ([#5445](https://github.com/nocobase/nocobase/pull/5445)) por @mytharcher

- **[Bloque: Mapa]** Se elimina la configuración del nivel de zoom para campos de mapa en la columna de la tabla ([#5457](https://github.com/nocobase/nocobase/pull/5457)) por @katherinehhh

- **[Gestor de archivos]** Se corrige la llamada al hook de regla de almacenamiento en campos de solo lectura ([#5447](https://github.com/nocobase/nocobase/pull/5447)) por @mytharcher

- **[Fuente de datos: Principal]** Se corrige un caso e2e que fallaba debido a un cambio de componente ([#5437](https://github.com/nocobase/nocobase/pull/5437)) por @mytharcher
