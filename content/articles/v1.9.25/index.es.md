---
title: "NocoBase v1.9.25: Agregar lógica de tolerancia a fallos para datos faltantes en la preparación del procesador"
description: "Nota de la versión v1.9.25"
---

### 🚀 Mejoras

- **[Flujo de trabajo]**
  - Se añade lógica tolerante a fallos para datos faltantes en la preparación del procesador, evitando bloqueos en la ejecución ([#8156](https://github.com/nocobase/nocobase/pull/8156)) por @mytharcher

  - Se utiliza carga diferida para datos de asociación en el lienzo del flujo de trabajo para mejorar el rendimiento ([#8142](https://github.com/nocobase/nocobase/pull/8142)) por @mytharcher

### 🐛 Corrección de errores

- **[acl]** Se corrige el problema donde la API `acl.can` devuelve `null` cuando el rol es `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) por @mytharcher

- **[Flujo de trabajo: Nodo manual]** Se corrige el problema donde la lista de tareas pendientes manuales utiliza una API incorrecta ([#8144](https://github.com/nocobase/nocobase/pull/8144)) por @mytharcher

- **[Cifrado de solicitudes HTTP]** Se usan corchetes para el formato de array en el análisis de qs por @chenos

- **[Flujo de trabajo: Aprobación]** Se corrige el problema donde se lanza un error al cancelar una ejecución cuando su flujo de trabajo ha sido eliminado por @mytharcher

- **[Gestor de migraciones]** Se corrige un problema donde los saltos de línea en los datos se perdían durante la migración por @cgyrock
