---
title: "NocoBase v1.8.0-beta.9: Ocultar automáticamente la barra de acciones del bloque de tarjeta de cuadrícula cuando está vacía"
description: "Nota de la versión v1.8.0-beta.9"
---

### 🚀 Mejoras

- **[cliente]**
  - Ocultar automáticamente la barra de acciones de la tarjeta de bloque de cuadrícula cuando está vacía ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe

  - El ancho del contenedor del logotipo se adapta al tipo de contenido (168px fijo para imágenes, ancho automático para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038

- **[Verificación]** Eliminar las opciones de verificador de la respuesta de la API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]**
  - El mensaje de validación obligatoria en la subtabla persiste al cambiar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh

  - La condición de estilo en los campos de columna de la subtabla no se aplica correctamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh

  - Se pierde el punto decimal después de cambiar el componente de cantidad de máscara a inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh

  - Las variables de parámetros de consulta de URL no funcionan en el valor predeterminado del campo de formulario público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh

  - El filtrado a través de campos de colección de relaciones en formularios de filtro no es válido ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe

  - Renderizado incorrecto de Markdown (Vditor) en la subtabla ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh

- **[base de datos]** Soporte para actualizaciones de asociación en updateOrCreate y firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos

- **[Campo de colección: Muchos a muchos (matriz)]** La actualización de un campo muchos a muchos (matriz) genera un error cuando el campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile

- **[Campo de colección: Secuencia]** Corregir el cálculo de secuencia bigint basada en cadenas ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher

- **[Formularios públicos]** Formularios públicos: Corregir problema de acceso no autorizado al enviar el formulario ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe
