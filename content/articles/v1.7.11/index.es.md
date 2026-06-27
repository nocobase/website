---
title: "NocoBase v1.7.11: Soporte para copiar contenido de campos de texto con un solo clic"
description: "Nota de la versión v1.7.11"
---

### 🎉 Nuevas Funcionalidades

- **[Copia de texto]** Soporte para copiar el contenido de un campo de texto con un solo clic ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe

### 🐛 Corrección de Errores

- **[cliente]**
  - El selector de campos de asociación no limpia los datos seleccionados después del envío ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh

  - Corrección de la sugerencia de tamaño de carga ([#7057](https://github.com/nocobase/nocobase/pull/7057)) por @mytharcher

- **[servidor]** No se pueden leer propiedades de undefined (leyendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos

- **[Flujo de trabajo: Nodo de bucle]** Corrección de la ejecución de la rama del bucle cuando la condición no se cumple ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corrección de las estadísticas de tareas pendientes no actualizadas cuando se cancela la ejecución por @mytharcher

  - Corrección de la variable de activación al filtrar por tipo por @mytharcher
