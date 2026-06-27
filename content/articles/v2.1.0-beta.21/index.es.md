---
title: "NocoBase v2.1.0-beta.21: Corrección de errores"
description: "Nota de la versión v2.1.0-beta.21"
---

### 🐛 Corrección de errores

- **[cliente]** Se corrigió un problema por el cual los valores predeterminados no se aplicaban al volver a añadir un registro después de haberlo eliminado de una subtabla. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) por @gchust

- **[Configuración de licencia]** Se actualizó el mensaje de éxito al guardar la licencia ([#9251](https://github.com/nocobase/nocobase/pull/9251)) por @jiannx

- **[Empleados de IA]** Se corrigió el problema por el cual las variables en el prompt del sistema de los empleados de IA no surtían efecto ([#9256](https://github.com/nocobase/nocobase/pull/9256)) por @cgyrock

- **[Acción: Importar registros]** Se corrigió el error por el cual fallaba la importación de xlsx y se mostraba un mensaje de error de encabezado no coincidente ([#9253](https://github.com/nocobase/nocobase/pull/9253)) por @mytharcher

- **[IA: Base de conocimiento]** Se corrigió el problema por el cual eliminar documentos de la base de conocimiento no eliminaba los datos vectoriales asociados por @cgyrock

- **[Acción: Importar registros Pro]** Se corrigió el error por el cual fallaba la importación de xlsx y se mostraba un mensaje de error de encabezado no coincidente por @mytharcher
