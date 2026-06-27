---
title: "NocoBase v1.3.49-beta: Soporte para campos uno a uno y muchos a muchos (array) para usar la colección de archivos"
description: "Nota de la versión v1.3.49-beta"
---

### 🚀 Mejoras

- **[cliente]** Se añade soporte para que los campos uno a uno y muchos a muchos (array) utilicen la colección de archivos ([#5637](https://github.com/nocobase/nocobase/pull/5637)) por @mytharcher

- **[evaluadores]** Se utiliza Formula.js como evaluador predeterminado en el nodo de cálculo ([#5626](https://github.com/nocobase/nocobase/pull/5626)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema de reinicio que revertía el título del botón de filtro al valor predeterminado ([#5635](https://github.com/nocobase/nocobase/pull/5635)) por @katherinehhh

- **[Acción: Importar registros]** Se corrige el problema por el cual los datos de relaciones muchos a muchos no podían importarse a través del campo id ([#5623](https://github.com/nocobase/nocobase/pull/5623)) por @chareice
