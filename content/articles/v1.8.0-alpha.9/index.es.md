---
title: "NocoBase v1.8.0-alpha.9: Agregar variable de registros de aprobación al resultado del nodo"
description: "Nota de la versión v1.8.0-alpha.9"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para el campo BIT de SQL Server en fuentes de datos externas. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) por @aaaaaajie

- **[Fuente de datos: SQL Server externo]** Soporte para el campo BIT de SQL Server en fuentes de datos externas por @aaaaaajie

- **[Flujo de trabajo: Aprobación]** Añadir variable de registros de aprobación al resultado del nodo por @mytharcher

### 🚀 Mejoras

- **[cliente]** Ocultar automáticamente la barra de acciones del bloque de cuadrícula cuando está vacía ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe

- **[Verificación]** Eliminar opciones de verificador de la respuesta de la API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile

- **[Flujo de trabajo]** Ajustar API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) por @mytharcher

- **[Flujo de trabajo: Evento previo a la acción]** Ajustar API de variables por @mytharcher

- **[Flujo de trabajo: Aprobación]** Ajustar API de variables por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - La función de alineación de texto en columnas de tabla no funciona ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe

  - Asignar valores de campo: No se pueden limpiar datos de campos de relación ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe

  - Usar ámbito de variable independiente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher

  - La condición de estilo en campos de columna de subtabla no se aplica correctamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh

  - El filtrado a través de campos de colección de relación en formularios de filtro no es válido ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe

  - Las variables de parámetros de consulta URL no funcionan en el valor predeterminado de campos de formulario público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh

  - El mensaje de validación obligatoria en subtabla persiste al cambiar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh

  - Error al hacer clic en el botón de filtro ([#7100](https://github.com/nocobase/nocobase/pull/7100)) por @zhangzhonghe

- **[base de datos]** soportar actualizaciones de asociación en updateOrCreate y firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos

- **[Flujo de trabajo]**
  - Corregir estadísticas eliminadas en cascada por una versión de flujo de trabajo no actual ([#7103](https://github.com/nocobase/nocobase/pull/7103)) por @mytharcher

  - Corregir verificación ejecutada incorrectamente en números enteros grandes ([#7099](https://github.com/nocobase/nocobase/pull/7099)) por @mytharcher

  - Corregir verificación ejecutada incorrectamente en números enteros grandes ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher

- **[Acción: Importar registros]** Resolver problema de fallo de inicio de sesión después de la importación masiva de nombres de usuario y contraseñas ([#7076](https://github.com/nocobase/nocobase/pull/7076)) por @aaaaaajie

- **[Campo de colección: Muchos a muchos (array)]** Actualizar un campo muchos a muchos (array) lanza un error cuando el campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile

- **[Gestor de archivos]** Corregir que el campo de archivos adjuntos no se pueda actualizar en el proceso de aprobación ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher

- **[Formularios públicos]** Formularios públicos: Corregir problema de acceso no autorizado al enviar el formulario ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe

- **[Campo de colección: Secuencia]** Corregir cálculo de secuencia bigint basada en cadenas ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Usar comparación en lugar de lógica implícita para evitar problemas de tipo por @mytharcher

  - Solo los participantes pueden ver (obtener) el detalle de la aprobación por @mytharcher

- **[Gestor de correo electrónico]** Error al eliminar correo electrónico por @jiannx
