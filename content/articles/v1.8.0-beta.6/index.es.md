---
title: "NocoBase v1.8.0-beta.6: Agregar la variable de entorno para controlar el método de salida del registro de auditoría"
description: "Nota de la versión v1.8.0-beta.6"
---

### 🎉 Nuevas Funcionalidades

- **[Registros de auditoría]** Se añade la variable de entorno `AUDIT_LOGGER_TRANSPORT` para controlar el método de salida del registro de auditoría por @2013xile

### 🚀 Mejoras

- **[cliente]** Se prohíbe mover un grupo de menú dentro de sí mismo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe

- **[Calendario]** Se añade soporte para configurar el día de inicio de la semana en el bloque de calendario ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh

- **[Campo de colección: Markdown(Vditor)]** Se añade soporte para hacer clic y ampliar imágenes en el modo de vista previa de Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) por @katherinehhh

- **[Campo de colección: Muchos a muchos (array)]** Errores relacionados con permisos al mostrar campos de muchos a muchos (array) en tablas de datos. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie

- **[Comentarios]** Se añade soporte para paginación en el bloque de comentarios por @katherinehhh

### 🐛 Corrección de Errores

- **[cliente]**
  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh

  - Se corrige el problema donde las reglas de vinculación causaban un bucle infinito ([#7050](https://github.com/nocobase/nocobase/pull/7050)) por @zhangzhonghe

  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh

  - Se corrige la sugerencia de tamaño de subida ([#7057](https://github.com/nocobase/nocobase/pull/7057)) por @mytharcher

  - Corrección: uso de encadenamiento opcional para rechazar solicitudes de forma segura en APIClient cuando el manejador puede ser indefinido ([#7054](https://github.com/nocobase/nocobase/pull/7054)) por @sheldon66

  - Problema de cierre automático al configurar campos en el formulario emergente secundario ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh

  - Se corrige la no visualización de campos en plantillas de bloque causada por solicitudes API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe

  - Las opciones del campo de selección no funcionan en las reglas de vinculación del formulario de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh

  - Las reglas de validación del formulario de filtro provocan que el botón de filtro deje de funcionar ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe

  - No se puede limpiar el indicador de campo obligatorio de una subtabla usando reglas de vinculación ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe

  - Se corrige el problema de error de parámetros en el bloque de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe

  - Se resuelve un problema donde el bloque fallaba al leer datos de vista desde fuentes de datos externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie

  - Se usa un ámbito de variable independiente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher

  - La variable de objeto actual no es válida en las reglas de vinculación ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe

- **[base de datos]** corrección: se añaden los campos de creador y actualizador faltantes en la importación xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) por @aaaaaajie

- **[indefinido]** Se elimina la dependencia de la base de datos para possibleTypes, se impone la configuración basada en API por @aaaaaajie

- **[Acción: Importar registros]**
  - Se corrige la importación xlsx para restringir que los campos de área de texto acepten datos con formato no string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie

  - Se corrige el fallo en la importación de tablas hijas cuando están involucrados campos relacionales ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie

  - Se corrigen errores que ocurrían durante la edición por lotes al importar datos de tablas jerárquicas XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie

- **[Visualización de datos]**
  - Visualización incorrecta del campo de fecha "entre" en el filtro de gráficos ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh

  - Los campos de grupo de casillas de verificación en los gráficos deben mostrar etiquetas en lugar de valores sin procesar ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile

- **[Documentación de la API]** Los plugins no oficiales de NocoBase no muestran la documentación de la API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt

- **[Flujo de trabajo]**
  - Se corrige el error causado por `toJSON()` en el disparador programado ([#7037](https://github.com/nocobase/nocobase/pull/7037)) por @mytharcher

  - Se corrige el error lanzado en la acción de ejecución manual cuando el disparador no está configurado correctamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher

  - Se corrige el error de interfaz de usuario cuando el flujo de trabajo no existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher

  - Se corrige que el evento de colección en modo crear o actualizar no se active al crear sin un campo modificado ([#7015](https://github.com/nocobase/nocobase/pull/7015)) por @mytharcher

- **[Gestor de fuentes de datos]** Se elimina la dependencia de la base de datos para possibleTypes, se impone la configuración basada en API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie

- **[Móvil]** Se optimizan los problemas de retardo en ventanas emergentes móviles ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe

- **[Acción: Exportar registros Pro]** Se corrige el error que ocurría al exportar archivos adjuntos con condiciones. por @aaaaaajie

- **[Flujo de trabajo: JavaScript]** Se corrige require para rutas relativas por @mytharcher

- **[Impresión de plantillas]** Se corrige un error de análisis de permisos y se añade una comprobación de datos no encontrados. por @sheldon66

- **[Flujo de trabajo: Aprobación]**
  - Para evitar el error de campo indefinido por @mytharcher

  - Se corrige el error lanzado cuando se elimina un flujo de trabajo por @mytharcher

  - Se corrigen las variables del disparador por @mytharcher

  - Se recarga la asociación de archivos desde la instantánea para evitar la caducidad de la URL por @mytharcher

  - Se corrige el error de API al actualizar la página de detalle por @mytharcher

- **[WeCom]** Se añade una comprobación para la ruta de callback en el middleware de la puerta de enlace por @2013xile
