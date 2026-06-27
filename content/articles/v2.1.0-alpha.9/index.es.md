---
title: "NocoBase v2.1.0-alpha.9: Permite agregar empleados de IA en ventanas emergentes de subtablas"
description: "Nota de la versión v2.1.0-alpha.9"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** Permite añadir empleados IA en la ventana emergente de subtablas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile

- **[IA: Servidor MCP]** Añade un nuevo plugin de servidor MCP para permitir la construcción de sistemas NocoBase y el soporte de flujos de trabajo empresariales. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) por @2013xile

### 🚀 Mejoras

- **[sin definir]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) por @gaston98765

### 🐛 Corrección de Errores

- **[base de datos]** Corrige el problema de validación del lado del servidor para campos de fecha ([#8867](https://github.com/nocobase/nocobase/pull/8867)) por @2013xile

- **[cliente]**
  - Corrige que los campos conectables no se muestren al vincular bloques de datos bajo fuentes de datos externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe

  - Corrige el problema de que añadir un bloque de datos o actualizar la página provocaba actualizaciones dobles. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust

  - Corrige el problema de que los valores predeterminados de algunos campos no surtían efecto después de actualizar la página. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) por @gchust

  - Corrige que la altura del bloque de tabla no fuera válida ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx

- **[Localización]**
  - Excepción de permiso de interfaz faltante en localizationTexts ([#8861](https://github.com/nocobase/nocobase/pull/8861)) por @jiannx

  - Las entradas no encontradas no se enviarán en el estado de no edición de la página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx

- **[Borradores de formularios]** Corrige el problema de que los datos del borrador del formulario se perdían cuando la ventana emergente se abría varias veces. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust

- **[Plantillas de IU]** Corrige los errores que ocurrían al usar la plantilla de bloque de formulario de edición y de bloque de detalle. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust

- **[IA: Base de conocimiento]** Evita que se eliminen la base de datos vectorial y el almacenamiento vectorial en uso. por @cgyrock

- **[Acción: Importar registros Pro]** Corrige el problema de que no se podían realizar selecciones múltiples para campos duplicados en la configuración de importación. por @jiannx

- **[Gestor de correo electrónico]** Ajustes en responder y responder a todos los destinatarios, corrigiendo la falla al añadir campos de tabla y otros problemas por @jiannx

- **[Gestor de migraciones]** Corrige el problema de que las tablas del sistema no se podían seleccionar en reglas personalizadas por @cgyrock
