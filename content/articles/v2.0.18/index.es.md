---
title: "NocoBase v2.0.18: Permite agregar empleados de IA en ventanas emergentes de subtablas"
description: "Nota de la versión v2.0.18"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados de IA]**
  - Limpieza programada de datos de puntos de control de conversaciones de IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock

  - Permite añadir empleados de IA en ventanas emergentes de subtablas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile

- **[Supervisor de aplicaciones]** Soporte para filtrar en la lista de aplicaciones<br />Añadidos cuadros de diálogo de confirmación para las acciones de inicio y detención<br />Ordenar las entradas de estado de la aplicación por nombre de entorno por @2013xile

### 🚀 Mejoras

- **[servidor]** mejora de la lógica de pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos

- **[cliente]** Soporte para mostrar mensaje de confirmación antes de cerrar la ventana emergente. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust

- **[Gestor de tareas asíncronas]** las tareas asíncronas se han ampliado para que los workers puedan enviar mensajes de error ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock

### 🐛 Corrección de Errores

- **[cliente]** Corregido el problema por el cual la ventana emergente "Seleccionar registro" en la subtabla no se cargaba correctamente al abrirse por segunda vez. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust

- **[Empleados de IA]** Corregidos posibles errores de variable indefinida en los scripts de migración de actualización del plugin de IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock

- **[Acción: Importar registros Pro]** Corregido el problema por el cual las tareas asíncronas no finalizan después de que ocurra un error en la importación asíncrona por @cgyrock
