---
title: "NocoBase v1.8.20: Ajustar la API de variables del flujo de trabajo para admitir la preconfiguración de una lista de variables adicionales"
description: "Nota de la versión v1.8.20"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Ajustar la API de variables del flujo de trabajo para admitir el preajuste de una lista de variables adicionales ([#7439](https://github.com/nocobase/nocobase/pull/7439)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Soporte para usar variables relacionadas con la aprobación en notificaciones personalizadas por @mytharcher

  - Soporte para actualizar el estado de aprobación después de que el nodo final termine la ejecución por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió un problema por el cual, en ciertos escenarios, editar un registro en el selector de registros móvil emergente causaba un error ([#7444](https://github.com/nocobase/nocobase/pull/7444)) por @zhangzhonghe

  - La validación obligatoria no funcionaba para campos de archivo adjunto en subtablas ([#7431](https://github.com/nocobase/nocobase/pull/7431)) por @katherinehhh

  - Se corrigió el problema donde el icono se mostraba incorrectamente cuando la URL en el campo de URL de archivo adjunto contenía parámetros de consulta ([#7432](https://github.com/nocobase/nocobase/pull/7432)) por @mytharcher

- **[base de datos]**
  - Se corrigió un error de sintaxis de MySQL que ocurría al cargar más mensajes dentro de la aplicación. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) por @aaaaaajie

  - Se corrigió un problema de precisión para los campos de Número exportados ([#7421](https://github.com/nocobase/nocobase/pull/7421)) por @aaaaaajie

- **[indefinido]** Se corrigió un problema al filtrar solo por campo de fecha en fuente externa de MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) por @aaaaaajie

- **[Acción: Importar registros]** Se corrigió un problema donde la importación fallaba cuando la clave primaria de la tabla era un texto de una sola línea ([#7416](https://github.com/nocobase/nocobase/pull/7416)) por @aaaaaajie

- **[Flujo de trabajo]**
  - Completar las opciones para eliminar automáticamente el estado de ejecución del flujo de trabajo ([#7436](https://github.com/nocobase/nocobase/pull/7436)) por @mytharcher

  - Se corrigieron problemas relacionados con el menú móvil en las tareas del flujo de trabajo ([#7419](https://github.com/nocobase/nocobase/pull/7419)) por @mytharcher

- **[Acción: Importar registros Pro]** Se corrigió un resultado de actualización inesperado al usar una clave primaria de cadena en la importación xlsx. por @aaaaaajie
