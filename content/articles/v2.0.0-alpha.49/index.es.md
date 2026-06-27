---
title: "NocoBase v2.0.0-alpha.49: Permitir elegir si mostrar la instantánea o el registro más reciente en la interfaz del proceso de aprobación"
description: "Nota de la versión v2.0.0-alpha.49"
---

### 🎉 Nuevas Funcionalidades

- **[Workflow: Aprobación]** Permitir elegir si mostrar la instantánea o el registro más reciente en la interfaz de usuario del proceso de aprobación por @mytharcher

### 🚀 Mejoras

- **[cliente]** Optimizar mensajes de validación para subtablas ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh

- **[Telemetría: Prometheus]** Actualizar `@opentelemetry/exporter-prometheus` por @2013xile

- **[Acción: Importar registros Pro]** Mensajes de error mejorados para tareas asíncronas, proporcionando a los usuarios razones específicas de fallo de las tareas por @mytharcher

### 🐛 Corrección de Errores

- **[motor-de-flujo]** Se corrigió un problema por el cual la variable del registro actual no se activaba correctamente para su resolución en el bloque de detalles. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) por @gchust

- **[cliente]** Corregir problemas de selección y eliminación de bloques de tabla para claves compuestas ([#7978](https://github.com/nocobase/nocobase/pull/7978)) por @katherinehhh

- **[Acción: Exportar registros]** corregir la falta de campos del sistema en la lista de campos exportables ([#8002](https://github.com/nocobase/nocobase/pull/8002)) por @katherinehhh

- **[Colección: Árbol]** Corregir fallos en la actualización de la tabla de rutas causados por una búsqueda incorrecta del campo padre del árbol ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile

- **[Campo de colección: Muchos a muchos (array)]** Se corrigió el problema por el cual el campo m2m array en la subtabla no podía actualizarse ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock

- **[Departamentos]** Corregir el problema por el cual los campos asociados al departamento no podían editarse ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang

- **[Workflow: Aprobación]** Corregir problema de permisos al obtener `approvalRecords.reassignee` debido a un cambio en `RemoteSelect` por @mytharcher
