---
title: "NocoBase v2.0.0-alpha.5: Corrección de errores"
description: "Nota de la versión v2.0.0-alpha.5"
---

### 🐛 Corrección de errores

- **[server]** Error de migración de clave primaria ([#7563](https://github.com/nocobase/nocobase/pull/7563)) por @2013xile

- **[client]**
  - Se corrige el problema de no actualizar los datos después de enviar el formulario ([#7560](https://github.com/nocobase/nocobase/pull/7560)) por @zhangzhonghe

  - Se corrige el problema por el cual la falta de propiedades dinámicas en el componente `AssignedField` provocaba errores de carga de archivos en los nodos "Crear registro" o "Actualizar registro" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) por @mytharcher

- **[Calendario]** Se corrige el problema de consulta de datos causado por el identificador único en el bloque de calendario ([#7562](https://github.com/nocobase/nocobase/pull/7562)) por @katherinehhh

- **[Bloque: plantilla (obsoleto)]** Se corrige un problema por el cual se activaban solicitudes innecesarias de plantillas de bloque al abrir o cerrar modales ([#7561](https://github.com/nocobase/nocobase/pull/7561)) por @gchust

- **[Formularios públicos]** Se corrige el problema por el cual las reglas de carga para campos de archivo en formularios públicos eran incorrectas ([#7553](https://github.com/nocobase/nocobase/pull/7553)) por @mytharcher

- **[Gestor de múltiples aplicaciones (obsoleto)]** Se corrige la validación del puerto antes de la migración de datos de múltiples aplicaciones ([#7540](https://github.com/nocobase/nocobase/pull/7540)) por @jiannx
