---
title: "NocoBase v2.0.9: Corrección del problema donde el componente CollectionField no se renderiza en el componente DefaultValue"
description: "Nota de la versión v2.0.9"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió el problema por el cual el componente CollectionField no se renderizaba en el componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher

  - Se corrigió un problema por el cual el bloque de datos no se actualizaba al cambiar de menú. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust

- **[base de datos]** Se corrigió un fallo en la verificación personalizada de expresiones regulares en v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx

- **[motor de flujo]** Se corrigió un problema por el cual ctx.exit no podía terminar la ejecución de flujos de eventos definidos por el usuario. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust

- **[Flujo de trabajo: Aprobación]** Se añadió un parámetro faltante para evitar que las asociaciones no se actualicen al enviar una nueva aprobación por @mytharcher
