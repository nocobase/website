---
title: "NocoBase v1.9.42: Corrección de un problema por el cual los usuarios no podían registrarse automáticamente cuando faltaba el móvil"
description: "Nota de la versión v1.9.42"
---

### 🚀 Mejoras

- **[Auth: DingTalk]** Se utiliza `userid` como clave predeterminada para la asociación de usuarios, manteniendo la compatibilidad con autenticadores existentes que dependen del móvil, por @2013xile

### 🐛 Corrección de errores

- **[Workflow: Aprobación]** Se corrige un problema de rendimiento causado por el campo JSON en la carga de listas (MySQL) por @mytharcher

- **[WeCom]** Se corrige un problema por el cual los usuarios no podían registrarse automáticamente cuando faltaba el móvil por @2013xile
