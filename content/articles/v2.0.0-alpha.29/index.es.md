---
title: "NocoBase v2.0.0-alpha.29: Corrección del orden de middlewares de `resourceManager`"
description: "Nota de la versión v2.0.0-alpha.29"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Se resolvió un problema por el cual la variable de campo de asociación en el formulario actual no se podía identificar correctamente, garantizando un procesamiento preciso de los datos en los formularios. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) por @gchust

  - Se resolvió un problema por el cual asignar un array como valor o valor predeterminado a un campo "toOne" generaba un error. Esto garantiza un manejo adecuado de los resultados de resolución de variables, mejorando la estabilidad y precisión del sistema. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) por @gchust

- **[Control de acceso]** Se corrigió el orden de los middlewares de `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) por @2013xile
