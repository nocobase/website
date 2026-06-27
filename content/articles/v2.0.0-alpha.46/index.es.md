---
title: "NocoBase v2.0.0-alpha.46: Soporte para cambiar dinámicamente la clase del modelo de flujo"
description: "Nota de la versión v2.0.0-alpha.46"
---

### 🚀 Mejoras

- **[motor de flujo]** Soporte para cambiar dinámicamente la clase del modelo de flujo ([#7952](https://github.com/nocobase/nocobase/pull/7952)) por @gchust

- **[Empleados IA]** El plugin de empleados IA añade un hook de actualización ([#7951](https://github.com/nocobase/nocobase/pull/7951)) por @heziqiang

- **[Gestor de tareas asíncronas]** Mensajes de error mejorados para tareas asíncronas, proporcionando a los usuarios razones específicas de los fallos de las tareas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Se hace que la carga útil de la ejecución manual (o activada por un nodo de subflujo) sea compatible con el registro o la clave primaria. Se evitan problemas de consistencia en el contexto del activador. por @mytharcher

  - Se reducen las asociaciones a cargar en la ventana emergente de aprobación para ofrecer un mejor rendimiento. por @mytharcher

  - Se corrige la selección de variables en AssigneeSelect, limitando la selección solo a PK o FK de la colección de usuarios. por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Se corrige el ajuste automático de texto en los campos de bloque de detalle cuando el contenido supera el ancho ([#7955](https://github.com/nocobase/nocobase/pull/7955)) por @katherinehhh

- **[Gestor de tareas asíncronas]** Se añade una regla de migración para la colección `asyncTasks`, evitando que los registros de tareas asíncronas sean migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher

- **[Gestor de archivos]** Se corrige la subida de archivos al almacenamiento especificado en lugar del almacenamiento predeterminado ([#7947](https://github.com/nocobase/nocobase/pull/7947)) por @katherinehhh

- **[Flujo de trabajo: Aprobación]** Se corrige el archivo de idioma por @mytharcher
