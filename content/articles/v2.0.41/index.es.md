---
title: "NocoBase v2.0.41: soporte de atributos de mapeo para campos personalizados"
description: "Nota de la versión v2.0.41"
---

### 🎉 Nuevas Funcionalidades

- **[Auth: OIDC]** Soporte de atributos de mapeo para campos personalizados por @chenzhizdt

- **[DingTalk]** DingTalk: notificaciones, inicio de sesión automático en DingTalk y sincronización de usuarios. por @chenzhizdt

### 🚀 Mejoras

- **[ai]** El empleado de IA y la base de conocimiento ahora admiten tipos de archivo adicionales para carga (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) por @cgyrock

- **[undefined]** Añadida traducción al árabe para la sección de guía y navegación ([#9141](https://github.com/nocobase/nocobase/pull/9141)) por @saraTabbane

### 🐛 Corrección de Errores

- **[data-source-manager]** Corrección para que los campos de porcentaje no se restablezcan a numérico al resincronizar fuentes de datos externas ([#9178](https://github.com/nocobase/nocobase/pull/9178)) por @jiannx

- **[cliente]**
  - Corregido el problema por el cual el valor predeterminado no surtía efecto después de crear un registro. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) por @gchust

  - Corregido el problema por el cual el botón Añadir pestaña estaba demasiado cerca del borde derecho ([#9177](https://github.com/nocobase/nocobase/pull/9177)) por @zhangzhonghe

- **[Departamentos]** Corregido un problema por el cual la sincronización repetida de departamentos no podía actualizar el orden de clasificación de los departamentos ([#9173](https://github.com/nocobase/nocobase/pull/9173)) por @2013xile

- **[Fuente de datos: Principal]** Corregida la sincronización de campos desde la base de datos para vistas conectadas cuando el nombre de la colección difiere del nombre de la vista de la base de datos ([#9155](https://github.com/nocobase/nocobase/pull/9155)) por @2013xile

- **[Flujo de trabajo: JavaScript]** Corregido un problema de seguridad de la ejecución de scripts en modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher

- **[IA: Base de conocimiento]** Corregido el problema por el cual la base de datos vectorial no se sincronizaba al eliminar documentos de la base de conocimiento. por @cgyrock

- **[WeCom]** Corregida la falta de orden de departamento al sincronizar departamentos desde WeCom por @2013xile
