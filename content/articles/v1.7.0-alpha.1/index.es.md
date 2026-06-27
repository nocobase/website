---
title: "NocoBase v1.7.0-alpha.1: Soporte para usar el nodo final para determinar el estado"
description: "Nota de la versión v1.7.0-alpha.1"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: Evento posterior a la acción]** Soporte para usar el nodo final para determinar el estado ([#6399](https://github.com/nocobase/nocobase/pull/6399)) por @mytharcher

### 🚀 Mejoras

- **[Flujo de trabajo]** Corrección del error 401 de la API cuando no se ha iniciado sesión ([#6412](https://github.com/nocobase/nocobase/pull/6412)) por @mytharcher

- **[Gestor de correo electrónico]** Uso de la misma estructura y estilo de elementos en el ámbito global para el botón de la barra de herramientas por @mytharcher

- **[Flujo de trabajo: Aprobación]** Ajuste de la interfaz de usuario del centro de tareas por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - No se puede mover la página a un grupo ([#6413](https://github.com/nocobase/nocobase/pull/6413)) por @zhangzhonghe

  - Los menús de nivel profundo no muestran el icono ([#6410](https://github.com/nocobase/nocobase/pull/6410)) por @zhangzhonghe

- **[Autenticación]** El usuario sin roles debe redirigir a la página de mensaje de error. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) por @sheldon66

- **[Flujo de trabajo: Evento de acción personalizada]** Falta la configuración de reglas de vinculación para el botón 'Activar flujo de trabajo' por @katherinehhh

- **[Gestor de copias de seguridad]** Faltan datos de la clave de cifrado durante la restauración de la copia de seguridad por @gchust

- **[Flujo de trabajo: Aprobación]** Evitar conflicto en clave única por @mytharcher
