---
title: "NocoBase v2.1.0-beta.47: Adaptado al nuevo plugin de control de versiones"
description: "Nota de la versión v2.1.0-beta.47"
---

### 🎉 Nuevas Funcionalidades

- **[undefined]** Se añadieron comandos proxy de nivel superior para nginx y caddy. ([#9721](https://github.com/nocobase/nocobase/pull/9721)) por @chenos
- **[Gestor de copias de seguridad]** Adaptado al nuevo plugin de control de versiones. ([#9563](https://github.com/nocobase/nocobase/pull/9563)) por @cgyrock
- **[Control de versiones]** Se añadió el plugin de control de versiones. por @cgyrock

### 🚀 Mejoras

- **[Gestor de fuentes de datos]** Se añadió la gestión de permisos de fuentes de datos client-v2 y se alinearon los cajones de selección de permisos relacionados. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) por @jiannx
- **[Colección: Conectar a datos externos (FDW)]** Se mejoró la paridad de plantillas de colección V2 para colecciones SQL y colecciones de datos externos, incluyendo confirmación SQL, gestión de servidores de bases de datos externas y ordenación de plantillas. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) por @katherinehhh
- **[Impresión de plantillas]** Se actualizaron los metadatos de la colección de plantillas de impresión para la clasificación de copias de seguridad del control de versiones. por @cgyrock
- **[Historial de registros]** Se actualizaron los metadatos de la colección de historial de registros para la clasificación de copias de seguridad del control de versiones. por @cgyrock
- **[Flujo de trabajo: Aprobación]** Se actualizaron los metadatos de la colección de aprobación de flujo de trabajo para la clasificación de copias de seguridad del control de versiones. por @cgyrock
- **[Registros de auditoría]** Se actualizaron los metadatos de la colección de registros de auditoría para la clasificación de copias de seguridad del control de versiones. por @cgyrock
- **[Gestor de correo electrónico]** Se actualizaron los metadatos de la colección del gestor de correo electrónico para la clasificación de copias de seguridad del control de versiones. por @cgyrock
- **[Supervisor de aplicaciones]** Se actualizaron los metadatos de la colección del supervisor de aplicaciones para la clasificación de copias de seguridad del control de versiones. por @cgyrock

### 🐛 Corrección de Errores

- **[client-v2]**

  - Se corrigió que los campos JSON mostraran celdas en blanco para valores de objeto en las vistas de detalle de client-v2. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) por @katherinehhh
  - Se corrigió que los campos de opción tradujeran incorrectamente etiquetas de opción simples en entornos localizados. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) por @katherinehhh
- **[Manejador de errores]** Se redujeron los registros de errores ruidosos para solicitudes no autenticadas rutinarias sin token. ([#9718](https://github.com/nocobase/nocobase/pull/9718)) por @2013xile
- **[Bloque: Lista]** Se corrigió el estado obsoleto de vinculación de acciones de fila en bloques de lista cuando las acciones dependen del registro actual. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) por @katherinehhh
- **[Gestor de fuentes de datos]** Se mejoraron los mensajes de error en el gestor de fuentes de datos V2 cuando fallan las operaciones de colección, campo, sincronización y carga de tablas. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) por @katherinehhh
- **[Empleados IA]** Se corrigió la falta del botón de asistente Dara en la configuración de gráficos de client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) por @cgyrock
- **[IA: Base de conocimiento]** Se corrigieron rutas faltantes en las URL de archivos de la base de conocimiento S3. por @cgyrock
- **[Acción: Importar registros Pro]** Se corrigió el texto distorsionado al importar archivos XLSX con cadenas compartidas UTF-8 divididas entre fragmentos de transmisión. por @mytharcher
- **[Historial de registros]** Se corrigió la falta de historial de registros para cambios en fuentes de datos externas. por @2013xile
