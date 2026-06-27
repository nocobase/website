---
title: "NocoBase v1.4.0-alpha.20241031134640: Añadir canal de notificación de WeCom"
description: "Nota de la versión v1.4.0-alpha.20241031134640"
---

### 🎉 Nuevas Funcionalidades

- **[WeCom]** Añadido canal de notificación WeCom por @chenzhizdt

### 🚀 Mejoras

- **[cliente]** Restaurar valor predeterminado al limpiar el título del campo ([#5549](https://github.com/nocobase/nocobase/pull/5549)) por @katherinehhh

- **[Gestor de notificaciones]**
  - Añadidos componentes UserSelect y UserAddition para agilizar el desarrollo de canales de notificación ([#5553](https://github.com/nocobase/nocobase/pull/5553)) por @2013xile

  - Añadida API para obtener el registro de tipos de canal del plugin de notificación ([#5531](https://github.com/nocobase/nocobase/pull/5531)) por @mytharcher

  - Ajustado el nombre del registro de tipos de canal del plugin de notificación ([#5532](https://github.com/nocobase/nocobase/pull/5532)) por @mytharcher

  - Añadida API del plugin gestor de notificaciones para obtener todos los tipos registrados ([#5529](https://github.com/nocobase/nocobase/pull/5529)) por @mytharcher

- **[Notificación: Mensaje en la aplicación]** Mejorada la interfaz de usuario del mensaje en la aplicación y añadidos algunos registros. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) por @sheldon66

### 🐛 Corrección de Errores

- **[base de datos]**
  - Corregida la actualización de opciones de colección con clave de destino de filtro ([#5558](https://github.com/nocobase/nocobase/pull/5558)) por @chareice

  - Corregido el valor incorrecto de primaryKeyField en sequelize al trabajar con múltiples claves de destino de filtro ([#5556](https://github.com/nocobase/nocobase/pull/5556)) por @chareice

- **[cliente]**
  - Corregido el problema por el que los componentes esqueleto en bloques de tabla no desaparecían ([#5548](https://github.com/nocobase/nocobase/pull/5548)) por @zhangzhonghe

  - Corregidos problemas con la acción de eliminación, puntos suspensivos de texto y visualización de nuevos datos en subtablas ([#5523](https://github.com/nocobase/nocobase/pull/5523)) por @katherinehhh

- **[Gestor de fuentes de datos]** Corregida la eliminación de fuente de datos en estado fallido ([#5554](https://github.com/nocobase/nocobase/pull/5554)) por @chareice

- **[Notificación: Correo electrónico]**
  - Corregida la consulta de usuarios por IDs en notificación por correo electrónico ([#5533](https://github.com/nocobase/nocobase/pull/5533)) por @mytharcher

  - Corregido el asunto faltante en notificación por correo electrónico basada en IDs de usuario ([#5534](https://github.com/nocobase/nocobase/pull/5534)) por @mytharcher

  - Corregida la ruta del campo de reacción en formulario dinámico de notificación por correo electrónico ([#5527](https://github.com/nocobase/nocobase/pull/5527)) por @mytharcher

- **[Campo de colección: Muchos a muchos (array)]** Corregido el problema por el que el componente de selección para un campo muchos a muchos (array) solo tenía una opción ([#5544](https://github.com/nocobase/nocobase/pull/5544)) por @2013xile

- **[Gestor de notificaciones]** Corregido el bloqueo de página debido a un tipo de canal incorrecto ([#5528](https://github.com/nocobase/nocobase/pull/5528)) por @mytharcher

- **[Flujo de trabajo: Nodo SQL]** Corregido el error SSE que provocaba el tiempo de espera de "waitForLoadState('networkidle')" ([#5524](https://github.com/nocobase/nocobase/pull/5524)) por @hongboji

- **[Componente de campo: máscara]** Corregido que los datos originales no se pudieran mostrar al hacer clic si el componente está en estado de solo lectura por @gchust

- **[Flujo de trabajo: Evento de acción personalizada]** Corregido el error SSE que provocaba el tiempo de espera de "waitForLoadState('networkidle')" por @hongboji

- **[WeCom]** Corregido el problema de respuesta 404 no encontrada al acceder a la aplicación desde el banco de trabajo de WeCom por @chenzhizdt
