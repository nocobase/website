---
title: "NocoBase v2.0.20: Corrección del problema donde los eventos del ciclo de vida enviados por el worker detienen la aplicación en servicio"
description: "Nota de la versión v2.0.20"
---

### 🐛 Corrección de errores

- **[Servidor]** Se corrige el problema por el cual los eventos del ciclo de vida enviados por el worker provocan la detención del servicio de la aplicación ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher

- **[Gestor de fuentes de datos]** Se corrige el problema por el cual la colección creada por el empleado de IA siempre carecía de los campos `createBy` y `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock

- **[Acción: Importar registros Pro]** Se corrige el error SES causado por la importación diferida por @mytharcher

- **[Impresión de plantillas]** Se corrige el error de impresión de la colección SQL por @jiannx

- **[Gestor de correo electrónico]** Se corrige el error de página cuando el correo electrónico no existe por @jiannx
