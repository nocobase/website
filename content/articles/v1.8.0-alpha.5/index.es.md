---
title: "NocoBase v1.8.0-alpha.5: Soporte para completar campos de entrada mediante escaneo de código QR"
description: "Nota de la versión v1.8.0-alpha.5"
---

### 🚀 Mejoras

- **[cliente]**
  - Soporte para rellenar campos de entrada mediante escaneo de código QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) por @katherinehhh

  - Soporte de localización para el contenido de bloques Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) por @katherinehhh

  - Prohibir mover un menú de grupo dentro de sí mismo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe

- **[Campo de colección: Muchos a muchos (array)]** Errores relacionados con permisos al mostrar campos muchos-a-muchos(muchos) en tablas de datos. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie

- **[Calendario]** Soporte para configurar el día de inicio de la semana en el bloque de calendario ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh

- **[Campo de colección: Markdown(Vditor)]** Soporte para hacer clic en imagen para ampliar en modo de vista previa de Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]**
  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh

  - Corrección de campos que no se muestran en plantillas de bloque debido a solicitudes API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe

  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh

  - Las reglas de validación del formulario de filtro provocan que el botón de filtro deje de funcionar ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe

  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh

  - Las opciones del campo de selección no funcionan en las reglas de vinculación del formulario de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh

  - No se puede limpiar el indicador de campo obligatorio de la subtabla usando reglas de vinculación ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe

  - Corrección del problema de error de parámetros en el bloque de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe

  - Corrección del problema donde los datos del usuario actual están vacíos ([#7016](https://github.com/nocobase/nocobase/pull/7016)) por @zhangzhonghe

  - La variable de objeto actual no es válida en las reglas de vinculación ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe

  - Se resolvió un problema donde el bloque no podía leer los datos de vista de fuentes de datos externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie

  - Usar ámbito de variable independiente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher

- **[Visualización de datos]**
  - Visualización incorrecta del campo de fecha "entre" en el filtro de gráficos ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh

  - Los campos de grupo de casillas de verificación en los gráficos deben mostrar etiquetas en lugar de valores sin procesar ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile

- **[Acción: Importar registros]**
  - Se corrigió la importación xlsx para restringir que los campos de área de texto acepten datos con formato no cadena ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie

  - Corrección de fallo en la importación de tablas secundarias cuando están involucrados campos relacionales ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie

  - Se corrigieron errores que ocurrían durante la edición por lotes al importar datos de tablas jerárquicas XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie

- **[Documentación de la API]** Los plugins no oficiales de NocoBase no muestran la documentación de la API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt

- **[Flujo de trabajo]**
  - Corrección del error causado por `toJSON()` en el disparador programado ([#7037](https://github.com/nocobase/nocobase/pull/7037)) por @mytharcher

  - Corrección del error lanzado en la acción de ejecución manual cuando el disparador no está configurado correctamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher

  - Corrección del error de interfaz de usuario cuando el flujo de trabajo no existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher

  - Corrección del evento de colección en modo "al crear o actualizar" que no se dispara al crear sin un campo modificado ([#7015](https://github.com/nocobase/nocobase/pull/7015)) por @mytharcher

- **[Móvil]** Optimización de problemas de retardo en ventanas emergentes móviles ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe

- **[Administrador de fuentes de datos]** Eliminar dependencia de base de datos para possibleTypes, imponer configuración basada en API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie

- **[Acción: Exportar registros Pro]** Corrección del error que ocurre al exportar adjuntos con condiciones. por @aaaaaajie
