---
title: "NocoBase v2.1.0-alpha.32: agregar opción de límite de rango de fechas para campos de fecha en formularios v2"
description: "Nota de la versión v2.1.0-alpha.32"
---

### 🎉 Nuevas Funcionalidades

- **[client]** Añadir opción de límite de rango de fechas para campos de fecha en formularios v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) por @katherinehhh

- **[flow-engine]** Migrar `plugin-environment-variables` a client-v2 con una página de configuración basada en React y una variable de entorno `$env` registrada globalmente; añadir una entrada client-v2 a `plugin-file-manager` con una página de configuración de almacenamiento basada en React y un campo de carga, acción de carga y vista previa basados en FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) por @Molunerfinn

### 🚀 Mejoras

- **[undefined]** Soporte para entorno actual con ámbito de sesión en nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) por @chenos

### 🐛 Corrección de Errores

- **[client]**
  - Se corrigió un problema por el cual la ventana emergente de valor predeterminado para campos de asociación en el formulario de creación se mostraba incorrectamente. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) por @gchust

  - Se corrigió un problema por el cual el código JS ya no se podía editar después de que un campo JS se configurara como solo lectura. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) por @gchust

  - Se corrigió el problema por el cual las pestañas de página v2 no se sincronizaban inmediatamente después de guardar la configuración ([#9396](https://github.com/nocobase/nocobase/pull/9396)) por @zhangzhonghe

  - Se corrigió un problema por el cual las asignaciones de campos de subtabla no surtían efecto en las reglas de vinculación de campos. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) por @gchust

- **[Campo de colección: Markdown(Vditor)]** Se corrigió la información sobre herramientas del campo markdown que quedaba oculta en el diseño de formulario horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) por @katherinehhh

- **[Cliente WEB]** Se corrigió el filtrado de tipo de ruta al usar etiquetas traducidas ([#9425](https://github.com/nocobase/nocobase/pull/9425)) por @zhangzhonghe

- **[Móvil (obsoleto)]** Se corrigieron las ventanas emergentes de mensajes móviles que no se podían cerrar ni desplazar ([#9424](https://github.com/nocobase/nocobase/pull/9424)) por @zhangzhonghe

- **[Flujo de trabajo: Aprobación]** Se corrigió el problema por el cual el campo JS aparecía en la configuración del proceso de aprobación por @zhangzhonghe
