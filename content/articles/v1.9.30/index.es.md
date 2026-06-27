---
title: "NocoBase v1.9.30: Mejora de la descripción del campo `changed` en el evento de colección"
description: "Nota de la versión v1.9.30"
---

### 🚀 Mejoras

- **[Workflow]** Mejora la descripción del campo `changed` en el evento de colección ([#8216](https://github.com/nocobase/nocobase/pull/8216)) por @mytharcher

### 🐛 Corrección de errores

- **[cli]** license-kit es compatible con el caso en que DB_PASSWORD está vacío ([#8220](https://github.com/nocobase/nocobase/pull/8220)) por @jiannx

- **[database]** Corrige la inconsistencia en la consulta de campos de fecha entre fuentes de datos principales y externas ([#8181](https://github.com/nocobase/nocobase/pull/8181)) por @cgyrock

- **[Configuración de licencia]** Corrige la visualización anómala del plugin con licencia ([#8214](https://github.com/nocobase/nocobase/pull/8214)) por @jiannx

- **[Workflow: Aprobación]**
  - Corrige el problema por el cual aprobar crea una asociación a un nuevo registro por @mytharcher

  - Corrige el problema por el cual aprobar crea una asociación de varios a varios a nuevos registros por @mytharcher
