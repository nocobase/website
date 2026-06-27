---
title: "NocoBase v1.6.2: Corrección de errores"
description: "Nota de la versión v1.6.2"
---

### 🐛 Corrección de errores

- **[cliente]** La selección de rango de fechas excluye la fecha máxima ([#6418](https://github.com/nocobase/nocobase/pull/6418)) por @katherinehhh

- **[Notificación: mensaje en la aplicación]** Evitar que la configuración incorrecta de destinatarios consulte a todos los usuarios ([#6424](https://github.com/nocobase/nocobase/pull/6424)) por @sheldon66

- **[Flujo de trabajo: nodo manual]**
  - Corregir migración que omitía el prefijo de tabla y la lógica de esquema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) por @mytharcher

  - Cambiar el límite de versión de migración a `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) por @mytharcher
