---
title: "NocoBase v1.4.31: optimizar el componente de filtro en el formulario de filtro para que coincida con la configuración de filtrable"
description: "Nota de la versión v1.4.31"
---

### 🚀 Mejoras

- **[cliente]** Optimizar el componente de filtro en el formulario de filtro para que coincida con la configuración de filtrable ([#6110](https://github.com/nocobase/nocobase/pull/6110)) por @katherinehhh

- **[Gestor de archivos]** Permitir eliminar archivos cuando se elimina el registro del archivo (adjunto) ([#6127](https://github.com/nocobase/nocobase/pull/6127)) por @mytharcher

### 🐛 Corrección de errores

- **[base de datos]**
  - Corregir filtro por campo uuid ([#6138](https://github.com/nocobase/nocobase/pull/6138)) por @chareice

  - Corregir actualización de colección sin claves primarias ([#6124](https://github.com/nocobase/nocobase/pull/6124)) por @chareice

- **[cliente]**
  - La página de gestión de fuentes de datos muestra un error ([#6141](https://github.com/nocobase/nocobase/pull/6141)) por @zhangzhonghe

  - Cuando las condiciones de la regla de vinculación involucran campos de asociación que no se muestran, la regla de vinculación del botón se vuelve ineficaz ([#6140](https://github.com/nocobase/nocobase/pull/6140)) por @zhangzhonghe

  - Corregir visualización incorrecta de variables en el formulario de creación rápida de campos de asociación ([#6119](https://github.com/nocobase/nocobase/pull/6119)) por @katherinehhh

  - El contenido no se muestra en la ventana emergente de creación rápida ([#6123](https://github.com/nocobase/nocobase/pull/6123)) por @zhangzhonghe

  - Corregir el problema por el cual los bloques de campos de asociación no solicitan datos ([#6125](https://github.com/nocobase/nocobase/pull/6125)) por @zhangzhonghe

  - Corregir reglas de vinculación en subtabla/subformulario que afectan bloques en ventanas emergentes de campos de asociación ([#5543](https://github.com/nocobase/nocobase/pull/5543)) por @katherinehhh

- **[Campo de colección: divisiones administrativas de China]** corregir permiso acl con chinaRegion ([#6137](https://github.com/nocobase/nocobase/pull/6137)) por @chareice

- **[Flujo de trabajo]** Corregir SQL generado incorrectamente ([#6128](https://github.com/nocobase/nocobase/pull/6128)) por @mytharcher

- **[Campo de colección: Muchos a muchos (matriz)]** Corregir el problema de que la actualización de campos muchos a muchos (matriz) en un subformulario no funciona ([#6136](https://github.com/nocobase/nocobase/pull/6136)) por @2013xile

- **[Móvil]** Corregir el selector en modo de solo lectura que se puede hacer clic y el problema de desbordamiento de texto en móvil ([#6130](https://github.com/nocobase/nocobase/pull/6130)) por @katherinehhh
