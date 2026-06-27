---
title: "NocoBase v2.1.0-beta.9: Corregido el problema de que las tablas del sistema no se podían seleccionar en reglas personalizadas"
description: "Nota de la versión v2.1.0-beta.9"
---

### 🐛 Correcciones de errores

- **[cliente]**
  - Se corrigió la altura inválida del bloque de tabla ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx

  - Se corrigió el problema que provocaba dobles recargas al añadir un bloque de datos o al actualizar la página. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust

  - Se corrigió que los campos conectables no se mostraran al vincular bloques de datos bajo fuentes de datos externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe

- **[Plantillas de interfaz]** Se corrigieron los errores que ocurrían al usar la plantilla de bloque de formulario de edición y bloque de detalle. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust

- **[Borradores de formularios]** Se corrigió el problema por el cual los datos del borrador del formulario se perdían al abrir la ventana emergente varias veces. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust

- **[Localización]** Las entradas no encontradas no se enviarán en el estado de no edición de la página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx

- **[Acción: Importar registros Pro]** Se corrigió el problema por el cual no se podían realizar selecciones múltiples para campos duplicados en la configuración de importación. por @jiannx

- **[Gestor de correo electrónico]** Ajustes en los destinatarios de responder y responder a todos, corrigiendo la falla al añadir campos de tabla y otros problemas por @jiannx

- **[Gestor de migraciones]** Se corrigió el problema por el cual no se podían seleccionar tablas del sistema en reglas personalizadas por @cgyrock
