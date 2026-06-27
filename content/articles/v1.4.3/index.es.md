---
title: "NocoBase v1.4.3: Permitir inicio de sesión con nombre de rol en casos de prueba"
description: "Nota de la versión v1.4.3"
---

### 🚀 Mejoras

- **[test]** Permitir inicio de sesión con nombre de rol en casos de prueba ([#5794](https://github.com/nocobase/nocobase/pull/5794)) por @mytharcher

- **[Notificación: mensaje en la aplicación]** Actualizar títulos para URLs de detalle en formularios de mensajes en la aplicación y archivos de localización ([#5742](https://github.com/nocobase/nocobase/pull/5742)) por @sheldon66

### 🐛 Corrección de errores

- **[cliente]**
  - Corregir el problema donde el token no se limpia después de que un usuario sin rol encuentra un error de inicio de sesión y hace clic en el botón "Iniciar sesión con otra cuenta" ([#5790](https://github.com/nocobase/nocobase/pull/5790)) por @2013xile

  - Pérdida de cabeceras de solicitud en peticiones silenciosas ([#5795](https://github.com/nocobase/nocobase/pull/5795)) por @chenos

  - Página en blanco cuando el usuario no tiene rol ([#5797](https://github.com/nocobase/nocobase/pull/5797)) por @chenos

  - Corregir problema de barra de desplazamiento en subtabla con tamaño pequeño bajo tema compacto ([#5796](https://github.com/nocobase/nocobase/pull/5796)) por @katherinehhh
