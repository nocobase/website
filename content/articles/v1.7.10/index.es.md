---
title: "NocoBase v1.7.10: Corrección de errores"
description: "Nota de la versión v1.7.10"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió el problema donde las reglas de vinculación causaban un bucle infinito ([#7050](https://github.com/nocobase/nocobase/pull/7050)) por @zhangzhonghe

  - Corrección: uso de encadenamiento opcional para rechazar solicitudes de forma segura en APIClient cuando el manejador puede ser indefinido ([#7054](https://github.com/nocobase/nocobase/pull/7054)) por @sheldon66

  - Cierre automático de incidencias al configurar campos en el formulario emergente secundario ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh

- **[Visualización de datos]** visualización incorrecta del campo de fecha "entre" en el filtro de gráficos ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh

- **[Documentación de la API]** los complementos no oficiales de NocoBase no muestran la documentación de la API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt

- **[Acción: Importar registros]** Se corrigió la importación xlsx para restringir que los campos de área de texto acepten datos con formato no string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie
