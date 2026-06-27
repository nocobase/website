---
title: "NocoBase v1.6.33: Construir la imagen completa de Docker"
description: "Nota de la versión v1.6.33"
---

### 🚀 Mejoras

- **[indefinido]** Construir la imagen completa de Docker ([#6898](https://github.com/nocobase/nocobase/pull/6898)) por @chenos

- **[cliente]** Optimizar el problema de que las páginas se vuelven cada vez más lentas con el uso ([#6888](https://github.com/nocobase/nocobase/pull/6888)) por @zhangzhonghe

- **[Calendario]** Soporte para botón de actualización configurable en el bloque de calendario ([#6920](https://github.com/nocobase/nocobase/pull/6920)) por @katherinehhh

- **[Flujo de trabajo: Evento de acción personalizada]** Corregir configuraciones regionales en-US basadas en claves zh-CN por @mytharcher

- **[Flujo de trabajo: Aprobación]** Soporte para realizar todas las tareas pendientes en el centro de tareas del flujo de trabajo por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Error de renderizado causado por formato de estilo inválido al agregar un campo de asociación ([#6903](https://github.com/nocobase/nocobase/pull/6903)) por @katherinehhh

  - Verificación incorrecta de valor vacío para el campo de asociación toMany en la regla de enlace ([#6905](https://github.com/nocobase/nocobase/pull/6905)) por @katherinehhh

- **[Campo de colección: Markdown(Vditor)]** El campo markdown (Vditor) no se adapta al tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) por @katherinehhh

- **[Colección: Árbol]** Evitar actualizaciones incorrectas de prefijos de ruta similares durante las actualizaciones de ruta ([#6913](https://github.com/nocobase/nocobase/pull/6913)) por @2013xile

- **[Gestor de archivos]**
  - Corregir regla de coincidencia de vista previa ([#6902](https://github.com/nocobase/nocobase/pull/6902)) por @mytharcher

  - Corregir inyección de colección del cliente y parámetro de carga ([#6909](https://github.com/nocobase/nocobase/pull/6909)) por @mytharcher

  - Corregir URL de vista previa en archivos que no son imágenes ([#6889](https://github.com/nocobase/nocobase/pull/6889)) por @mytharcher

- **[Flujo de trabajo: Nodo de correo]** Manejar campo 'to' indefinido y mejorar el procesamiento de destinatarios de correo electrónico. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) por @sheldon66

- **[Flujo de trabajo: Evento de acción personalizada]**
  - Corregir que el botón se ejecute incorrectamente después de unos pocos clics por @mytharcher

  - Corregir que el manejador de errores no pueda coincidir por clase por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corregir cálculo de adjuntos de asociación por @mytharcher
