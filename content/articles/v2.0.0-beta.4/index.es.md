---
title: "NocoBase v2.0.0-beta.4: Corrección de mensaje de error incorrecto al activarse una restricción única durante la importación asíncrona de XLSX"
description: "Nota de la versión v2.0.0-beta.4"
---

### 🐛 Corrección de errores

- **[Acción: Importar registros]** Se corrige un mensaje de error incorrecto cuando se produce un error de restricción de unicidad durante la importación asíncrona de XLSX ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock

- **[Acción: Exportar registros Pro]** Se corrige un error al ejecutar tareas de importación/exportación asíncronas en subaplicaciones mientras la aplicación principal no tiene habilitado el plugin de importación/exportación Pro por @cgyrock

- **[Gestor de correo electrónico]** Se muestra el botón de responder a todos y el ámbito de datos admite el filtrado de mensajes secundarios. por @jiannx
