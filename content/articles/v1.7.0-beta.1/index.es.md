---
title: "NocoBase v1.7.0-beta.1: compatible con configuraciones históricas de control de acceso de botones"
description: "Nota de la versión v1.7.0-beta.1"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Compatibilidad con configuraciones históricas de control de acceso a botones ([#6376](https://github.com/nocobase/nocobase/pull/6376)) por @katherinehhh

- **[Flujo de trabajo: Evento posterior a la acción]** Soporte para usar el nodo final para determinar el estado ([#6399](https://github.com/nocobase/nocobase/pull/6399)) por @mytharcher

- **[Flujo de trabajo: Mensaje de respuesta]** Soporte para ser usado en el disparador de acciones por @mytharcher

### 🚀 Mejoras

- **[Flujo de trabajo]** Corrección del error 401 en la API cuando no se ha iniciado sesión ([#6412](https://github.com/nocobase/nocobase/pull/6412)) por @mytharcher

- **[Flujo de trabajo: Nodo manual]** Ajuste de la interfaz de usuario del centro de tareas del flujo de trabajo ([#6272](https://github.com/nocobase/nocobase/pull/6272)) por @mytharcher

- **[Gestor de correo electrónico]** Uso de la misma estructura y estilo de elementos en global para el botón de la barra de herramientas por @mytharcher

- **[Flujo de trabajo: Aprobación]** Ajuste de la interfaz de usuario del centro de tareas por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - No se puede mover la página a un grupo ([#6413](https://github.com/nocobase/nocobase/pull/6413)) por @zhangzhonghe

  - Los menús de nivel profundo no muestran el icono ([#6410](https://github.com/nocobase/nocobase/pull/6410)) por @zhangzhonghe

  - Problema de contexto de tema en FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) por @katherinehhh

- **[Flujo de trabajo: Nodo manual]** Evitar conflicto en clave única ([#6407](https://github.com/nocobase/nocobase/pull/6407)) por @mytharcher

- **[Gestor de fuentes de datos]** Error al editar campos en una fuente de datos externa ([#6402](https://github.com/nocobase/nocobase/pull/6402)) por @katherinehhh

- **[Autenticación]** Si el usuario no tiene roles, debe redirigir a la página de mensaje de error. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) por @sheldon66

- **[Flujo de trabajo: Evento de acción personalizada]** Falta la configuración de reglas de vinculación para el botón 'Disparar flujo de trabajo' por @katherinehhh

- **[Gestor de copias de seguridad]** Faltan datos de clave de cifrado durante la restauración de la copia de seguridad por @gchust

- **[Flujo de trabajo: Aprobación]** Evitar conflicto en clave única por @mytharcher
