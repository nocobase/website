---
title: "NocoBase v2.0.0-alpha.17: Se agregó soporte para detectores de eventos de clic en filas de tabla"
description: "Nota de la versión v2.0.0-alpha.17"
---

### 🎉 Nuevas funciones

- **[cliente]** Se ha añadido soporte para detectores de eventos de clic en filas de tablas, lo que permite a los usuarios ejecutar acciones específicas al hacer clic en una fila de la tabla ([#7622](https://github.com/nocobase/nocobase/pull/7622)) por @zhangzhonghe

- **[Flujo de trabajo: Aprobación]** Se expone la variable `approvalId` para su uso desde los desencadenadores de aprobación por @mytharcher

### 🐛 Corrección de errores

- **[motor-de-flujo]** Se corrige el problema de que la traducción no surtía efecto en los componentes antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) por @zhangzhonghe

- **[Fuente de datos: Principal]** Se corrige el problema de que los metadatos no se sincronizaban en varios nodos después de crear un campo de relación inversa ([#7628](https://github.com/nocobase/nocobase/pull/7628)) por @mytharcher

- **[plugin-demo-platform]** demo soporta la detención automática de aplicaciones por @jiannx

- **[Multi-app]**
  - la migración de múltiples aplicaciones no emitía hooks por @jiannx

  - el proxy de múltiples aplicaciones soporta caché por @jiannx
