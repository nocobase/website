---
title: "NocoBase v2.0.45: Se corrigió el problema por el cual las variables en el mensaje del sistema de los empleados de IA no surtían efecto"
description: "Nota de la versión v2.0.45"
---

### 🚀 Mejoras

- **[Flujo de trabajo: JavaScript]** Actualización de imágenes Docker, flujos de trabajo CI y la dependencia del sandbox de JavaScript del flujo de trabajo para compatibilidad con Node.js 22. ([#9245](https://github.com/nocobase/nocobase/pull/9245)) por @Molunerfinn

### 🐛 Corrección de errores

- **[Empleados de IA]** Se corrigió el problema por el cual las variables en el prompt del sistema de los empleados de IA no surtían efecto ([#9256](https://github.com/nocobase/nocobase/pull/9256)) por @cgyrock

- **[Configuración de licencia]** Se actualizó el mensaje de éxito al guardar la licencia ([#9251](https://github.com/nocobase/nocobase/pull/9251)) por @jiannx

- **[Acción: Importar registros]** Se corrigió el error al importar xlsx que fallaba y lanzaba un error de "no se encontró encabezado coincidente" ([#9253](https://github.com/nocobase/nocobase/pull/9253)) por @mytharcher

- **[Acción: Importar registros Pro]** Se corrigió el error al importar xlsx que fallaba y lanzaba un error de "no se encontró encabezado coincidente" por @mytharcher

- **[IA: Base de conocimiento]** Se corrigió el problema por el cual eliminar documentos de la base de conocimiento no eliminaba los datos vectoriales asociados por @cgyrock
