---
title: "NocoBase v1.6.0-alpha.31: compatible con configuraciones históricas de control de acceso de botones"
description: "Nota de la versión v1.6.0-alpha.31"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Compatibilidad con configuraciones históricas de control de acceso a botones ([#6376](https://github.com/nocobase/nocobase/pull/6376)) por @katherinehhh

- **[Flujo de trabajo: Mensaje de respuesta]** Soporte para ser usado en disparadores de acción por @mytharcher

### 🚀 Mejoras

- **[Auth: Claves API]** Añadir prueba de configuración de seguridad de token para autenticación mediante clave API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) por @sheldon66

- **[Flujo de trabajo: Nodo manual]** Ajustar la interfaz de usuario del centro de tareas del flujo de trabajo ([#6272](https://github.com/nocobase/nocobase/pull/6272)) por @mytharcher

### 🐛 Corrección de Errores

- **[servidor]** Caché incorrecta del navegador tras ejecutar el comando `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) por @gchust

- **[cliente]**
  - Problema de contexto de tema en FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) por @katherinehhh

  - Al usar el operador '$anyOf', la regla de vinculación no es válida ([#6400](https://github.com/nocobase/nocobase/pull/6400)) por @zhangzhonghe

- **[auth]** Manejar usuario inexistente con error 401 y actualizar mensajes de localización ([#6381](https://github.com/nocobase/nocobase/pull/6381)) por @sheldon66

- **[Bloque: plantilla]** La opción "Guardar como plantilla" no se muestra en el bloque de datos de página ([#6398](https://github.com/nocobase/nocobase/pull/6398)) por @gchust

- **[Flujo de trabajo: Nodo manual]** Evitar conflicto en clave única ([#6407](https://github.com/nocobase/nocobase/pull/6407)) por @mytharcher

- **[Gestor de fuentes de datos]** Error al editar campos en una fuente de datos externa ([#6402](https://github.com/nocobase/nocobase/pull/6402)) por @katherinehhh

- **[Editor de temas]** El cambio de tema falla tras múltiples cambios consecutivos ([#6387](https://github.com/nocobase/nocobase/pull/6387)) por @katherinehhh

- **[Cliente WEB]** La página se queda en blanco después de cambiar de rol ([#6388](https://github.com/nocobase/nocobase/pull/6388)) por @aaaaaajie

- **[Flujo de trabajo: Aprobación]**
  - Evitar que una configuración incorrecta de asignados consulte a todos los usuarios por @mytharcher

  - Corregir el parámetro de orden al añadir un asignado por @mytharcher

- **[WeCom]** Corregir enlace de aviso de inicio de sesión y error de inicio de sesión en DingTalk por @chenzhizdt
