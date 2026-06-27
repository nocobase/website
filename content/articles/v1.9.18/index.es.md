---
title: "NocoBase v1.9.18: Corrección de errores"
description: "Nota de la versión v1.9.18"
---

### 🐛 Corrección de errores

- **[Acción: Importar registros]** Los campos importados no coinciden con los campos establecidos en la configuración de ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile

- **[Flujo de trabajo]** Se corrige el error en la página de ejecución cuando los trabajos en un nodo no están definidos ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher

- **[Control de acceso]** Se añade middleware para la verificación de permisos en operaciones de asociación para fuentes de datos externas ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile

- **[Flujo de trabajo: Aprobación]**
  - Se corrige el error de permiso al cargar aprobaciones relacionadas con registros en el panel de detalles por @mytharcher

  - Se corrige el error por el cual los registros de aprobación no se incluyen en el resultado del trabajo en la rama de retorno por @mytharcher

  - Se corrige el error en el proceso al ramificar con orden y contrafirma por @mytharcher
