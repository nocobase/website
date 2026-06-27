---
title: "NocoBase v1.8.31: Corrección de errores"
description: "Nota de la versión v1.8.31"
---

### 🐛 Corrección de errores

- **[base de datos]** Se corrige el error que se producía cuando el operador `$in` se encontraba con un valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Se corrige el problema de tiempo de espera de transacción causado por transacciones que no se revierten correctamente cuando ocurren errores de base de datos después del envío de la aprobación por @mytharcher

  - Se corrige el problema por el cual las variables no se analizan en el formulario de envío de aprobación por @mytharcher
