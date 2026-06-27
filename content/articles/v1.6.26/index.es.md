---
title: "NocoBase v1.6.26: El bloque Iframe admite la configuración del atributo allow"
description: "Nota de la versión v1.6.26"
---

### 🎉 Nuevas Funcionalidades

- **[Bloque: iframe]** El bloque iframe ahora permite configurar el atributo allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) por @zhangzhonghe

- **[Impresión de plantillas]** Funcionalidad: Soporte para opciones `{ label, value }` de Select en la impresión de plantillas. por @sheldon66

### 🐛 Corrección de Errores

- **[cliente]**
  - En subpáginas anidadas, la lista de bloques no se muestra al pasar el ratón sobre el botón "Añadir bloque" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe

  - Cuando el componente de campo de relación del formulario de filtro se cambia a un selector de datos, no aparece el elemento de configuración "Permitir selección múltiple" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe

  - Se muestran múltiples mensajes de error cuando se infringe una regla de validación en los campos del formulario ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh

  - Problema al configurar reglas de vinculación en un subformulario (ventana emergente) dentro de una subtabla ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh

  - Se corrige el problema por el cual los subcampos de un campo uno-a-muchos no se pueden seleccionar como opciones de filtrado en formularios de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe

  - Problema de estilo en la barra de paginación de la subtabla en modo de solo lectura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh

  - Selector de tabla en el formulario de filtro, estilo anómalo ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe

- **[base de datos]**
  - Se corrige la asociación belongs-to que no se cargaba en appends cuando la clave foránea es bigInt bajo MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher

  - Se corrigen casos de prueba ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher

- **[Campo de colección: Adjunto (URL)]** los campos de adjunto (URL) no deberían permitir la configuración de valores en la regla de vinculación ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh

- **[Flujo de trabajo: Evento de acción personalizada]** problema de vinculación de acción de flujo de trabajo activado por @katherinehhh
