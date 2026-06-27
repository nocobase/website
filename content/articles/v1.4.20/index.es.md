---
title: "NocoBase v1.4.20: Permitir ordenar flujos de trabajo al vincularlos a un botón de acción"
description: "Nota de la versión v1.4.20"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Añadir método app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) por @chenos

### 🚀 Mejoras

- **[cliente]**
  - Permitir ordenar flujos de trabajo al vincularlos a un botón de acción ([#6017](https://github.com/nocobase/nocobase/pull/6017)) por @mytharcher

  - Cambiar enlaces de referencia de evaluadores al sitio de documentación ([#6021](https://github.com/nocobase/nocobase/pull/6021)) por @mytharcher

  - Soporte para maxTagCount: 'responsive' en el componente de selección múltiple desplegable ([#6007](https://github.com/nocobase/nocobase/pull/6007)) por @katherinehhh

  - Establecer hora de finalización predeterminada para el componente de ámbito temporal en el bloque de filtro a 23:59:59 ([#6012](https://github.com/nocobase/nocobase/pull/6012)) por @katherinehhh

- **[Acción: Edición por lotes]** Refactorizar el botón de envío del formulario de edición masiva: eliminar asignación de campos y regla de vinculación ([#6008](https://github.com/nocobase/nocobase/pull/6008)) por @katherinehhh

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregir validación obligatoria que no funcionaba después de eliminar datos en el editor de texto enriquecido ([#6006](https://github.com/nocobase/nocobase/pull/6006)) por @katherinehhh

  - Corregir problema de desalineación cuando los botones de la columna de acción están ocultos ([#6014](https://github.com/nocobase/nocobase/pull/6014)) por @katherinehhh

  - Corregir problema del botón Crear Colecciones al hacer clic en la pestaña Colecciones en la página de API REST ([#5992](https://github.com/nocobase/nocobase/pull/5992)) por @katherinehhh

  - Corregir problema donde targetKey no podía seleccionar el campo NanoID en relaciones uno a muchos ([#5999](https://github.com/nocobase/nocobase/pull/5999)) por @katherinehhh

  - Corregir estilo del botón de configuración en el tema compacto ([#6001](https://github.com/nocobase/nocobase/pull/6001)) por @katherinehhh

  - Corregir estilo del componente de lista ([#5998](https://github.com/nocobase/nocobase/pull/5998)) por @mytharcher

  - Corregido el problema donde los encabezados incluidos en las solicitudes del cliente estaban siendo sobrescritos ([#6009](https://github.com/nocobase/nocobase/pull/6009)) por @2013xile

  - Corregir foreignKey, targetKey y sourceKey para que soporten filtrado por caracteres chinos ([#5997](https://github.com/nocobase/nocobase/pull/5997)) por @katherinehhh

- **[Acción: Importar registros]** corregir importación con asociaciones muchos a muchos que usan una clave de destino diferente ([#6024](https://github.com/nocobase/nocobase/pull/6024)) por @chareice

- **[Bloque: Mapa]** Corregir campo de mapa en bloque de detalle para que se renderice como bloque de mapa ([#6010](https://github.com/nocobase/nocobase/pull/6010)) por @katherinehhh

- **[Incrustar NocoBase]** El token para incrustar entra en conflicto con la autenticación por @chenos
