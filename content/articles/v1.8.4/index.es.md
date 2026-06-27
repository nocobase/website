---
title: "NocoBase v1.8.4: Soporte para configurar secreto de autenticación independiente para sub-aplicaciones"
description: "Nota de la versión v1.8.4"
---

### 🎉 Nuevas Funcionalidades

- **[Gestor de múltiples aplicaciones]** Soporte para configurar un secreto de autenticación independiente para sub-aplicaciones ([#7197](https://github.com/nocobase/nocobase/pull/7197)) por @mytharcher

- **[Flujo de trabajo: CC]** Añadir nodo CC al flujo de trabajo ([#7201](https://github.com/nocobase/nocobase/pull/7201)) por @mytharcher

### 🚀 Mejoras

- **[Notificación: Mensaje en la aplicación]** Optimizar el tamaño de fuente para la página de mensajes móviles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) por @zhangzhonghe

- **[Autenticación: DingTalk]** Soporte para configurar el protocolo y número de puerto de la URL de callback por @2013xile

### 🐛 Corrección de Errores

- **[Notificación: Mensaje en la aplicación]** Corregir problema de BigInt en formato de cadena que causa error en dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Evitar error cuando el usuario no existe por @mytharcher

  - Recargar asociación en el registro por @mytharcher

  - Añadir `try/catch` en la migración al actualizar el esquema de UI por @mytharcher
