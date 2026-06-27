---
title: "NocoBase v2.0.13: Soporte para configurar el flujo posterior al éxito en el botón de activación de flujo de trabajo"
description: "Nota de la versión v2.0.13"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Se ha añadido soporte para configurar el flujo posterior al éxito en el botón de activación de flujos de trabajo ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher

### 🚀 Mejoras

- **[Flujo de trabajo]** Se muestran todos los tipos de nodo en el menú de adición, incluso si no están disponibles ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher

- **[IA: Base de conocimiento]** Se ha rediseñado la lógica de carga de documentos de la base de conocimiento. por @cgyrock

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió el error que ocurría al cargar datos en el bloque de detalles de una colección SQL. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust

  - Se corrigió el problema por el cual las reglas de vinculación de campos en el bloque de detalles no se aplicaban durante la renderización inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust

- **[Visor de Archivos de Office]** Se ajustó la altura del modal a un valor adecuado para mostrar más contenido del archivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher

- **[Plantillas de UI]** Se corrigió el problema por el cual no se podía configurar el flujo de eventos de clic en fila en el bloque de referencia dentro del bloque de tabla. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust
