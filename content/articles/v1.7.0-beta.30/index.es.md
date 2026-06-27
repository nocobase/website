---
title: "NocoBase v1.7.0-beta.30: Corrección de errores"
description: "Nota de la versión v1.7.0-beta.30"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Al cambiar el componente de campo de relación del formulario de filtro a un selector de datos, no aparece el elemento de configuración "Permitir selección múltiple" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe

  - Selector de tabla en el formulario de filtro, estilo anómalo ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe

  - En subpáginas anidadas, la lista de bloques no se muestra al pasar el ratón sobre el botón "Añadir bloque" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe

  - El campo de asociación múltiple no se enviaba correctamente al mostrar campos de la colección asociada ([#6833](https://github.com/nocobase/nocobase/pull/6833)) por @katherinehhh

  - No se pueden arrastrar otros botones sobre el botón de duplicar ([#6822](https://github.com/nocobase/nocobase/pull/6822)) por @katherinehhh

  - Problema de estilo en la barra de paginación de subtablas en modo de solo lectura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh

- **[base de datos]** Se corrige la asociación belongs-to que no se cargaba en appends cuando la clave foránea es bigInt en MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher

- **[Campo de colección: Adjunto (URL)]** los campos de adjunto (URL) no deben permitir la configuración de valores en reglas de vinculación ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh
