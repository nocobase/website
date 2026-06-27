---
title: "NocoBase v2.0.0-beta.13: Soporte para configurar una lista blanca de orígenes CORS"
description: "Nota de la versión v2.0.0-beta.13"
---

### 🚀 Mejoras

- **[servidor]** Se ha añadido la posibilidad de configurar una lista blanca de orígenes CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) por @2013xile

- **[Acción: Exportar registros]** Se ha mejorado el ámbito de datos de la acción de exportación en función de los registros seleccionados o los filtros de recurso ([#8442](https://github.com/nocobase/nocobase/pull/8442)) por @katherinehhh

- **[Acción: Exportar registros Pro]** Se ha mejorado el ámbito de datos de la acción de exportación en función de los registros seleccionados o los filtros de recurso por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió el problema por el cual la ventana emergente "Variables personalizadas" quedaba oculta ([#8463](https://github.com/nocobase/nocobase/pull/8463)) por @zhangzhonghe

  - Se corrigió un problema al editar una colección en la interfaz gráfica ([#8451](https://github.com/nocobase/nocobase/pull/8451)) por @katherinehhh

  - Se corrigió un problema por el cual la configuración de ordenación de grupos de campos de colección no surtía efecto. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) por @katherinehhh

  - Se corrigió el problema por el cual la altura del modal de acceso directo superaba la altura del viewport ([#8437](https://github.com/nocobase/nocobase/pull/8437)) por @zhangzhonghe

  - Se corrigió el problema por el cual las reglas de vinculación de botones de fila de tabla afectaban el estado de los botones dentro de formularios emergentes ([#8434](https://github.com/nocobase/nocobase/pull/8434)) por @zhangzhonghe

  - Se corrigió un problema por el cual el estado de la columna de acciones de la tabla se contaminaba al cambiar de página. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) por @gchust

  - Se corrigió el problema por el cual el botón "Configuración de columnas" de la tabla no funcionaba ([#8441](https://github.com/nocobase/nocobase/pull/8441)) por @zhangzhonghe

  - Se corrigió un problema por el cual el selector de archivos del campo de asociación de archivos tenía un z-index incorrecto y la configuración emergente no se podía guardar correctamente. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) por @gchust

- **[motor-de-flujo]**
  - Se corrigió un problema por el cual las variables en los parámetros de código runjs se resolvían antes de la ejecución. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) por @gchust

  - Se corrigió un problema por el cual no se podían seleccionar variables emergentes en la ventana emergente de creación rápida del selector de datos. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) por @gchust

  - Se corrigió un problema por el cual al hacer clic repetidamente en el menú de configuración se podían abrir múltiples ventanas emergentes de configuración. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) por @gchust

- **[Móvil (obsoleto)]** Complemento móvil obsoleto (reemplazado por el complemento ui-layout a partir de la versión 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) por @chenos

- **[Motor de flujo]** Se corrigió un problema por el cual las variables que contenían guiones no se podían analizar correctamente. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) por @gchust

- **[Gestor de correo electrónico]** Se corrigió el problema por el cual la ventana emergente de configuración de correo electrónico quedaba oculta por @zhangzhonghe
