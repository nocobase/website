---
title: "NocoBase v1.4.24: componente datePicker de solo lectura"
description: "Nota de la versión v1.4.24"
---

### 🚀 Mejoras

- **[client]** El componente datePicker ahora tiene entrada de solo lectura ([#6061](https://github.com/nocobase/nocobase/pull/6061)) por @Cyx649312038

### 🐛 Corrección de errores

- **[client]**
  - Se corrige la carga incorrecta de campos de asociación modal en el bloque de tabla ([#6060](https://github.com/nocobase/nocobase/pull/6060)) por @katherinehhh

  - Se corrige un problema de estilo en la sub-tabla del bloque de detalle ([#6049](https://github.com/nocobase/nocobase/pull/6049)) por @katherinehhh

  - Se corrige el formato del campo numérico en modo readPretty que afectaba al modo de edición ([#6050](https://github.com/nocobase/nocobase/pull/6050)) por @katherinehhh

  - Se corrige un problema de estilo en la celda del encabezado de tabla en ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) por @katherinehhh

- **[database]** Se corrige un problema al inicializar el campo de ordenación con clave primaria ([#6059](https://github.com/nocobase/nocobase/pull/6059)) por @chareice

- **[Visualización de datos]** Se elimina la cláusula `LIMIT` al usar funciones agregadas sin establecer dimensiones en consultas de gráficos ([#6062](https://github.com/nocobase/nocobase/pull/6062)) por @2013xile

- **[Gestor de copias de seguridad]** Se corrige el error de descarga de copias de seguridad para usuarios que solo iniciaron sesión en la sub-aplicación por @gchust
