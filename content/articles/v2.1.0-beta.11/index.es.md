---
title: "NocoBase v2.1.0-beta.11: Agregar lista de ejecuciones de filtros"
description: "Nota de la versión v2.1.0-beta.11"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Añadir lista de filtros de ejecuciones ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Evitar configurar la interfaz de aprobadores cuando no hay ninguna colección configurada en el desencadenador por @mytharcher

### 🐛 Corrección de errores

- **[servidor]** Corregir el problema por el cual los eventos del ciclo de vida enviados por el worker provocan que la aplicación en servicio se detenga ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher

- **[cliente]** Corregir el problema por el cual los no administradores no pueden borrar los valores de campos asociados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx

- **[resourcer]** Evitar que el array del parámetro `filterByTk` se convierta automáticamente en un objeto cuando supera los 100 elementos ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile

- **[Acción: Importar registros Pro]**
  - Corregir el problema por el cual se lanza un error al importar en modo síncrono por @mytharcher

  - Corregir el problema por el cual más de ~30 columnas causan un error de importación, debido a que el flujo se ha leído de forma duplicada por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corregir el problema de concurrencia al añadir un asignado por @mytharcher

- **[Gestor de migraciones]** Corregido el problema por el cual la migración se interrumpe debido a un error causado por que el entorno de destino no tiene la nueva tabla creada durante el proceso de migración de carga. por @Andrew1989Y
