---
title: "NocoBase v2.1.0-beta.1: Refactorización del supervisor de aplicaciones para admitir la gestión de múltiples aplicaciones en diferentes escenarios"
description: "Nota de la versión v2.1.0-beta.1"
---

### 🎉 Nuevas Funcionalidades

- **[server]** Refactorización del supervisor de aplicaciones para soportar la gestión de múltiples aplicaciones en diferentes escenarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) por @2013xile

### 🚀 Mejoras

- **[client]**
  - Mejora de la interfaz de asignación de campos de fecha/hora para soportar la selección de fechas/horas relativas. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) por @gchust

  - Soporte para especificar el campo de título para campos de asociación al asignar un campo. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) por @gchust

### 🐛 Corrección de Errores

- **[flow-engine]**
  - Se corrige un problema por el cual el submenú del campo de filtro no se podía expandir cuando había una palabra clave de búsqueda presente. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) por @gchust

  - Se corrige la acción de eliminar columna que no funcionaba en la edición de subtabla emergente cuando `createModelOptions` está configurado ([#8560](https://github.com/nocobase/nocobase/pull/8560)) por @katherinehhh

- **[client]**
  - Se corrige un problema por el cual asignar un único registro a un campo de relación muchos-a-muchos producía resultados incorrectos. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) por @gchust

  - Se analiza la fecha usando el selector de fecha y se añade validación de fortaleza de contraseña, etc. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) por @jiannx

  - Se corrige el problema de espaciado causado por acciones enlazadas ocultas en la columna de acciones de la tabla ([#8646](https://github.com/nocobase/nocobase/pull/8646)) por @zhangzhonghe

  - Se corrige el problema por el cual `Action.Modal` no se podía cerrar después de cierta interacción ([#8642](https://github.com/nocobase/nocobase/pull/8642)) por @mytharcher

  - Se corrige el error de sintaxis de resolución cuando un elemento markdown renderiza Liquid no válido ([#8637](https://github.com/nocobase/nocobase/pull/8637)) por @katherinehhh

  - Se corrigen las solicitudes de análisis innecesarias del backend para las propiedades de campos de tipo "to-many" en el bloque de formulario. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) por @gchust

  - Se corrige la falta de formato de número para campos de fórmula numérica y la configuración de formato de fecha para campos de fórmula de fecha ([#8625](https://github.com/nocobase/nocobase/pull/8625)) por @katherinehhh

  - Se corrige el renderizado incompleto del borde superior en el primer elemento del formulario ([#8623](https://github.com/nocobase/nocobase/pull/8623)) por @katherinehhh

  - Se corrige: ocultar "Habilitar tabla de árbol" y "Expandir todas las filas por defecto" para colecciones que no son de árbol ([#8566](https://github.com/nocobase/nocobase/pull/8566)) por @katherinehhh

- **[utils]** Se corrige un problema de seguridad del motor evaluador de `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher

- **[Empleados IA]**
  - Se corrige un problema por el cual los enlaces de citas de búsquedas web de IA no se mostraban en el cuadro de chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) por @cgyrock

  - Se corrigen los parámetros de error de la API de OpenAI ([#8633](https://github.com/nocobase/nocobase/pull/8633)) por @cgyrock

- **[Impresión de plantilla]** Se corrigen los campos con la misma clave que provocan errores de renderizado por @jiannx

- **[Flujo de trabajo: Aprobación]**
  - Se corrige el problema del error lanzado al aprobar un registro eliminado por @mytharcher

  - Se corrige el problema por el cual los datos de aprobación no se mostraban en la ventana emergente de detalle del registro si el modo del flujo de trabajo estaba configurado como "Antes de guardar" por @mytharcher
