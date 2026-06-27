---
title: "NocoBase v2.0.16: Corrección de campos conectables que no se muestran al vincular bloques de datos bajo fuentes de datos externas"
description: "Nota de la versión v2.0.16"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió que los campos conectables no se mostraban al vincular bloques de datos bajo fuentes de datos externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe

  - Se corrigió que la altura del bloque de tabla no era válida ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx

  - Se corrigió el problema de que al añadir un bloque de datos o actualizar la página se producía una doble actualización. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust

- **[Plantillas de interfaz]** Se corrigieron los errores que ocurrían al usar la plantilla de bloque de formulario de edición y bloque de detalle. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust

- **[Borradores de formulario]** Se corrigió el problema de que los datos del borrador del formulario se perdían cuando la ventana emergente se abría varias veces. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust

- **[Localización]** Las entradas no encontradas no se enviarán en el estado de no edición de la página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx

- **[Acción: Importar registros Pro]** Se corrigió el problema de que no se podían realizar selecciones múltiples para campos duplicados en la configuración de importación. por @jiannx
