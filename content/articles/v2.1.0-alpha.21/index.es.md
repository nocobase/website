---
title: "NocoBase v2.1.0-alpha.21: El flujo de trabajo ha añadido instrucciones de empleado de IA"
description: "Nota de la versión v2.1.0-alpha.21"
---

### 🎉 Nuevas Funcionalidades

- **[Bloque: Kanban]** bloque kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) por @jiannx

- **[Empleados IA]** El flujo de trabajo ha añadido la instrucción de empleado IA ([#9025](https://github.com/nocobase/nocobase/pull/9025)) por @cgyrock

- **[Auth: OIDC]** el atributo de mapeo ahora soporta campos personalizados por @chenzhizdt

- **[DingTalk]** DingTalk: notificaciones, inicio de sesión automático en DingTalk y sincronización de usuarios. por @chenzhizdt

### 🚀 Mejoras

- **[build]** La base de conocimiento ahora soporta la carga masiva de archivos mediante ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) por @cgyrock

- **[ai]** El empleado IA y la base de conocimiento ahora admiten tipos de archivo adicionales para carga (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) por @cgyrock

- **[Workflow]** Mejora del rendimiento de la lista de ejecución ([#9214](https://github.com/nocobase/nocobase/pull/9214)) por @mytharcher

- **[Workflow: Evento de acción personalizada]** Se añadió control ACL para la activación en modo registro (tanto individual como múltiple) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) por @mytharcher

- **[IA: Base de conocimiento]** La base de conocimiento ahora soporta la carga masiva de archivos mediante ZIP por @cgyrock

### 🐛 Corrección de Errores

- **[data-source-manager]**
  - Corregida la sincronización de campos anulables ([#9189](https://github.com/nocobase/nocobase/pull/9189)) por @2013xile

  - Corrección para que los campos de porcentaje no se restablezcan a numérico al resincronizar fuentes de datos externas ([#9178](https://github.com/nocobase/nocobase/pull/9178)) por @jiannx

- **[client]**
  - Corregido el uso del identificador de registro incorrecto en bloques de relación emergentes y variables de registro emergentes cuando las colecciones usan una clave única no primaria ([#9191](https://github.com/nocobase/nocobase/pull/9191)) por @2013xile

  - Corregido el problema por el cual el valor predeterminado no surtía efecto después de crear un registro. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) por @gchust

  - Corregido el problema por el cual el botón "Añadir pestaña" estaba demasiado cerca del borde derecho ([#9177](https://github.com/nocobase/nocobase/pull/9177)) por @zhangzhonghe

- **[Workflow: Nodo de agregación]** Corregido el problema por el cual el nodo de agregación no se podía guardar debido a una regla de validación incorrecta ([#9208](https://github.com/nocobase/nocobase/pull/9208)) por @mytharcher

- **[Calendario]** No registrar acciones de calendario en otros bloques ([#9200](https://github.com/nocobase/nocobase/pull/9200)) por @jiannx

- **[Empleados IA]**
  - Corregido el problema por el cual los empleados IA no podían rellenar valores de campos de relación en formularios. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) por @cgyrock

  - Corregidas anomalías en el registro de logs en la instrucción de empleado IA ([#9180](https://github.com/nocobase/nocobase/pull/9180)) por @cgyrock

- **[Departamentos]** Corregido un problema por el cual la sincronización repetida de departamentos no podía actualizar el orden de clasificación de los departamentos ([#9173](https://github.com/nocobase/nocobase/pull/9173)) por @2013xile

- **[Workflow: JavaScript]**
  - Corregido un problema de seguridad en la ejecución de scripts en modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher

  - Corregido el problema por el cual se lanzaba un error al configurar el nodo JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) por @mytharcher

- **[Multi-espacio]** Corregido el error de no encontrar la colección en la verificación de permisos del espacio por @jiannx

- **[IA: Base de conocimiento]** Corregido el problema por el cual la base de datos vectorial no se sincronizaba al eliminar documentos de la base de conocimiento. por @cgyrock

- **[Workflow: Aprobación]** Corregida la búsqueda de reasignados en aprobaciones para consultar usuarios más allá de los primeros 200 candidatos por @zhangzhonghe

- **[WeCom]** Corregido el orden faltante de departamentos al sincronizar departamentos desde WeCom por @2013xile
