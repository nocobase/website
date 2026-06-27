---
title: "NocoBase v1.9.12: Mensajes de error mejorados para tareas asíncronas que proporcionan a los usuarios razones específicas de fallos en las tareas"
description: "Nota de la versión v1.9.12"
---

### 🚀 Mejoras

- **[cliente]** Se añade estado de carga para los botones de acción de actualizar y eliminar registro, evitando solicitudes duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher

- **[Gestor de tareas asíncronas]** Mensajes de error mejorados para tareas asíncronas, proporcionando a los usuarios razones específicas de los fallos de las tareas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher

- **[Acción: Importar registros Pro]** Mensajes de error mejorados para tareas asíncronas, proporcionando a los usuarios razones específicas de los fallos de las tareas por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Se corrige la selección de variables en AssigneeSelect, limitando la selección solo a PK o FK de la colección de usuarios por @mytharcher

  - Se reducen las asociaciones a cargar en la ventana emergente de aprobación para ofrecer un mejor rendimiento por @mytharcher

  - Se hace que la carga útil de la ejecución manual (o activada por un nodo de subflujo) sea compatible con el registro o la clave primaria. Se evitan problemas de consistencia en el contexto del activador por @mytharcher

### 🐛 Corrección de errores

- **[Gestor de tareas asíncronas]** Se añade regla de migración para la colección `asyncTasks`, evitando que los registros de tareas asíncronas sean migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Se corrige el archivo de idioma por @mytharcher
