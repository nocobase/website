---
title: "NocoBase v1.9.40: Añadir más tipos de archivo para previsualizar en Microsoft"
description: "Nota de la versión v1.9.40"
---

### 🚀 Mejoras

- **[Visor de archivos de Office]** Se añaden más tipos de archivo para la vista previa en Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige que el campo nanoid no se regeneraba después de enviar el formulario ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh

  - Se corrige el mensaje de validación requerida duplicado al limpiar un campo en cascada ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh

- **[base de datos]**
  - Se corrigen errores al filtrar con el operador `empty` después de recargar una colección ([#8496](https://github.com/nocobase/nocobase/pull/8496)) por @2013xile

  - corrección: actualización profunda de asociaciones anidadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos

- **[Gestor de archivos]** Se corrige el problema por el cual el nombre de archivo obtenido del cuerpo de la solicitud se convertía inesperadamente en una cadena descodificada ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher

- **[Fuente de datos: Principal]** Se corrige un problema por el cual eliminar registros de un bloque de tabla de asociación muchos a muchos no respetaba la restricción `onDelete: 'restrict'` del campo de asociación ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile

- **[Bloque: iframe]** Se corrige el error al añadir variables agregadas a Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe

- **[Flujo de trabajo: Webhook]** Se corrige el problema de que faltaban datos del cuerpo cuando el análisis del cuerpo no estaba configurado por @mytharcher

- **[Impresión de plantilla]** Se corrige la lógica incorrecta de permisos del botón de impresión cuando los roles estaban unidos. por @jiannx

- **[Flujo de trabajo: Aprobación]**
  - Se corrige el problema por el cual la concurrencia hacía que la ejecución se reanudara repetidamente por @mytharcher

  - Se corrige el problema por el cual devolver una aprobación al nodo anterior pero se devolvía al inicio por @mytharcher

- **[Gestor de migraciones]** Se corrige una posible congelación del proceso causada por el registro de sentencias SQL excesivamente grandes incluidas en las excepciones de error de migración por @cgyrock
