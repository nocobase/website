---
title: "NocoBase v2.1.0-beta.15: soporte de atributos de mapeo para campos personalizados"
description: "Nota de la versión v2.1.0-beta.15"
---

### 🎉 Nuevas Funcionalidades

- **[Bloque: Kanban]** bloque kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) por @jiannx

- **[Auth: OIDC]** el mapeo de atributos ahora admite campos personalizados por @chenzhizdt

- **[DingTalk]** DingTalk: notificaciones, inicio de sesión automático dentro de DingTalk y sincronización de usuarios. por @chenzhizdt

### 🚀 Mejoras

- **[build]** La base de conocimiento admite la carga masiva de archivos mediante ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) por @cgyrock

- **[ai]** El empleado de IA y la base de conocimiento ahora admiten tipos de archivo adicionales para carga (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) por @cgyrock

- **[Workflow]** Mejora del rendimiento de la lista de ejecuciones ([#9214](https://github.com/nocobase/nocobase/pull/9214)) por @mytharcher

- **[IA: Base de conocimiento]** La base de conocimiento admite la carga masiva de archivos mediante ZIP por @cgyrock

- **[Workflow: Aprobación]** Se añadieron índices en las columnas de registros de aprobación para mejorar el rendimiento en las acciones de listado y envío por @mytharcher

### 🐛 Corrección de Errores

- **[base de datos]** Se corrigió un problema por el cual los campos decimales con validación podían rechazar entradas numéricas válidas ([#9204](https://github.com/nocobase/nocobase/pull/9204)) por @2013xile

- **[cliente]**
  - Se corrigió el problema de que el botón Añadir pestaña estaba demasiado cerca del borde derecho ([#9177](https://github.com/nocobase/nocobase/pull/9177)) por @zhangzhonghe

  - Se corrigió que los bloques de relación emergentes y las variables de registro emergentes usaran el identificador de registro incorrecto cuando las colecciones usan una clave única no primaria ([#9191](https://github.com/nocobase/nocobase/pull/9191)) por @2013xile

  - Se corrigió el problema por el cual el valor predeterminado no surtía efecto después de crear un registro. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) por @gchust

- **[gestor-de-fuentes-de-datos]**
  - Se corrigió la sincronización de campos anulables ([#9189](https://github.com/nocobase/nocobase/pull/9189)) por @2013xile

  - Corrección para campos de porcentaje que se restablecían a numérico al resincronizar fuentes de datos externas ([#9178](https://github.com/nocobase/nocobase/pull/9178)) por @jiannx

- **[Empleados de IA]**
  - Se corrigió el problema de valores de campo URL faltantes para archivos adjuntos en selecciones de formularios de empleados de IA. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) por @cgyrock

  - Se corrigió el problema por el cual los empleados de IA no podían completar los valores de los campos de relación en los formularios. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) por @cgyrock

- **[Usuarios]** Se corrigió que los campos configurados dinámicamente en Editar perfil no cargaran los datos de usuario más recientes ([#9205](https://github.com/nocobase/nocobase/pull/9205)) por @2013xile

- **[Calendario]** No registrar acciones de calendario en otros bloques ([#9200](https://github.com/nocobase/nocobase/pull/9200)) por @jiannx

- **[Departamentos]** Se corrigió un problema por el cual la sincronización repetida de departamentos no podía actualizar el orden de clasificación de los departamentos ([#9173](https://github.com/nocobase/nocobase/pull/9173)) por @2013xile

- **[Workflow: JavaScript]** Se corrigió un problema de seguridad de ejecución de scripts en modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher

- **[Gestor de fuentes de datos]** Se corrigió un problema por el cual la ordenación agrupada en campos de ordenación de fuentes de datos externas no se podía limpiar ([#9203](https://github.com/nocobase/nocobase/pull/9203)) por @2013xile

- **[Multi-espacio]** Se corrigió el error de no encontrar la colección en la verificación de permisos del espacio por @jiannx

- **[IA: Base de conocimiento]** Se corrigió el problema de que la base de datos vectorial no se sincronizaba al eliminar documentos de la base de conocimiento. por @cgyrock

- **[Workflow: Aprobación]** Se corrigió la búsqueda de reasignación de aprobación para consultar usuarios más allá de los primeros 200 candidatos por @zhangzhonghe

- **[WeCom]** Se corrigió la falta de orden de departamento al sincronizar departamentos desde WeCom por @2013xile
