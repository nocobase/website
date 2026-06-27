---
title: "NocoBase v1.8.16: Corrección de errores"
description: "Nota de la versión v1.8.16"
---

### 🚀 Mejoras

- **[Notificación: mensaje en la aplicación]** Eliminar la salida de logs SQL mediante `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile

### 🐛 Corrección de errores

- **[servidor]** Algunas solicitudes carecen de `ctx.action`, lo que provoca errores en el middleware del registro de auditoría ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile

- **[Campo de colección: Fórmula]** Corregir el problema por el cual la entrada de fórmula no podía pasar la validación debido al tipo de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher

- **[Gestor de copias de seguridad]** Las copias de seguridad de archivos grandes podían mostrar "correcto" antes de finalizar realmente por @gchust
