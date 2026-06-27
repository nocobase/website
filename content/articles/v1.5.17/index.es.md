---
title: "NocoBase v1.5.17: Corrección de errores"
description: "Nota de la versión v1.5.17"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Error al crear un bloque de comentarios sin una colección de comentarios ([#6309](https://github.com/nocobase/nocobase/pull/6309)) por @katherinehhh

  - Se produce un error al hacer clic en un nodo de bloque de árbol ([#6314](https://github.com/nocobase/nocobase/pull/6314)) por @zhangzhonghe

  - Después de hacer clic en el menú izquierdo, la subpágina se cierra de forma anómala ([#6305](https://github.com/nocobase/nocobase/pull/6305)) por @zhangzhonghe

  - No borrar el valor del campo cuando el valor de la expresión está vacío ([#6300](https://github.com/nocobase/nocobase/pull/6300)) por @zhangzhonghe

- **[Campo de colección: Secuencia]** Corregido que el campo de secuencia no se deshabilite en modo de solo lectura ([#6274](https://github.com/nocobase/nocobase/pull/6274)) por @mytharcher

- **[Gestor de archivos]** Corregida la migración para colecciones heredadas ([#6310](https://github.com/nocobase/nocobase/pull/6310)) por @mytharcher

- **[Control de acceso]** Registros de datos incorrectos al usar campos muchos a muchos como ámbito de datos en permisos de colección ([#6304](https://github.com/nocobase/nocobase/pull/6304)) por @2013xile

- **[Bloque: Kanban]** Filtrado de datos incorrecto en el bloque Kanban emergente al usar variables de registro emergente ([#6290](https://github.com/nocobase/nocobase/pull/6290)) por @katherinehhh

- **[Bloque: Árbol]** Se produce un error al hacer clic en un nodo de bloque de árbol por @zhangzhonghe
