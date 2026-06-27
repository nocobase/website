---
title: "NocoBase v1.6.0-beta.18: Añadir prueba de configuración de seguridad de token para autenticación con clave API"
description: "Nota de la versión v1.6.0-beta.18"
---

### 🚀 Mejoras

- **[Auth: Claves API]** Añadir prueba de configuración de seguridad de tokens para la autenticación mediante clave API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) por @sheldon66

### 🐛 Corrección de errores

- **[servidor]** Caché incorrecta del navegador tras ejecutar el comando `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) por @gchust

- **[auth]** Gestionar usuario inexistente con error 401 y actualizar mensajes de localización ([#6381](https://github.com/nocobase/nocobase/pull/6381)) por @sheldon66

- **[Cliente WEB]** La página se queda en blanco tras cambiar de rol ([#6388](https://github.com/nocobase/nocobase/pull/6388)) por @aaaaaajie

- **[Editor de temas]** El cambio de tema falla tras varios cambios consecutivos ([#6387](https://github.com/nocobase/nocobase/pull/6387)) por @katherinehhh

- **[Flujo de trabajo: Aprobación]**
  - Corregir el parámetro de orden al añadir un asignado por @mytharcher

  - Evitar que la configuración incorrecta de asignados consulte a todos los usuarios por @mytharcher

- **[WeCom]** corregir el enlace de aviso de inicio de sesión y el error de inicio de sesión en DingTalk por @chenzhizdt
