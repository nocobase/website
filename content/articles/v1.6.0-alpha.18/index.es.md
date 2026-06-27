---
title: "NocoBase v1.6.0-alpha.18: Soporte para restricción de IP"
description: "Nota de la versión v1.6.0-alpha.18"
---

### 🎉 Nuevas Funcionalidades

- **[Cliente WEB]** Soporte para configuración de permisos en pestañas de página y adición de página de gestión de rutas ([#5955](https://github.com/nocobase/nocobase/pull/5955)) por @zhangzhonghe
Referencia: [Rutas](https://docs.nocobase.com/handbook/routes)
- **[Restricción IP]** Soporte para restricción de IP. por @sheldon66
Referencia: [Restricción IP](https://docs.nocobase.com/handbook/IP-restriction)
### 🚀 Mejoras

- **[servidor]**
  - mover AesEncryptor al núcleo ([#6132](https://github.com/nocobase/nocobase/pull/6132)) por @chenos

  - 1. Añadir middleware de servidor para extraer la dirección IP del cliente.<br />2. Resolver problemas de recarga infinita cuando una IP está bloqueada.<br />3. Añadir la cabecera HTTP `X-Forwarded-For` en el proxy para habilitar el reenvío en depuración local. ([#6069](https://github.com/nocobase/nocobase/pull/6069)) por @sheldon66

### 🐛 Corrección de Errores

- **[Autenticación]** Actualizar reglas de migración para tokens emitidos y configuración de política de tokens. ([#6107](https://github.com/nocobase/nocobase/pull/6107)) por @sheldon66
