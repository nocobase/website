---
title: "NocoBase v1.6.0-alpha.8: Añadir una entrada global fija para todos los tipos de tareas pendientes del flujo de trabajo"
description: "Nota de la versión v1.6.0-alpha.8"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: Nodo manual]** Añadir una entrada global fija para todos los tipos de tareas pendientes del flujo de trabajo ([#5858](https://github.com/nocobase/nocobase/pull/5858)) por @mytharcher

- **[Política de contraseñas]** Añadir un nuevo plugin: Política de contraseñas, utilizado para establecer las reglas de contraseñas y la política de bloqueo de inicio de sesión para todos los usuarios por @2013xile
Referencia: [Política de contraseñas y bloqueo de usuarios](https://docs.nocobase.com/handbook/password-policy)
### 🚀 Mejoras

- **[cliente]** Añadir una palabra clave de filtro "Seguridad" para el gestor de plugins ([#5977](https://github.com/nocobase/nocobase/pull/5977)) por @2013xile

- **[Flujo de trabajo: Evento de acción personalizada]** Cambiar la API de ejecución manual por @mytharcher

### 🐛 Corrección de Errores

- **[Flujo de trabajo]** Corregir que `onChange` no funciona en el componente `WorkflowVariableWrapper` ([#5964](https://github.com/nocobase/nocobase/pull/5964)) por @mytharcher
