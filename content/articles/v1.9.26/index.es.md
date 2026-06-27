---
title: "NocoBase v1.9.26: Soporte para la API `acl.registerSnippet` para fusionar la configuración de fragmentos"
description: "Nota de la versión v1.9.26"
---

### 🚀 Mejoras

- **[acl]** Soporte para la API `acl.registerSnippet` para fusionar la configuración de fragmentos ([#8155](https://github.com/nocobase/nocobase/pull/8155)) por @mytharcher

- **[Control de acceso]** No permitir asignar el rol raíz a los usuarios ([#8180](https://github.com/nocobase/nocobase/pull/8180)) por @2013xile

### 🐛 Corrección de errores

- **[Configuración de licencia]**
  - Corrección de la excepción de compilación de TypeScript en plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) por @jiannx

  - Optimización de licencia y adición de información de aviso ([#7993](https://github.com/nocobase/nocobase/pull/7993)) por @jiannx

- **[Gestor de archivos]** Corrección del problema al previsualizar archivos `.txt` en OSS que mostraba una codificación incorrecta ([#8161](https://github.com/nocobase/nocobase/pull/8161)) por @mytharcher

- **[Acción: Importar registros]** Esperar sincrónicamente a que finalicen los eventos `afterCreate` activados por la importación. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) por @2013xile

- **[Colección: Conectar a datos externos (FDW)]** Corrección del problema de carga fallida para tablas con nombres en mayúsculas por @2013xile

- **[Fuente de datos: SQL Server externo]** Corrección de problemas donde las opciones `encrypt` y `trustServerCertificate` no estaban disponibles por @2013xile
