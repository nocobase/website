---
title: "NocoBase v1.8.12: Corrección de errores"
description: "Nota de la versión v1.8.12"
---

### 🎉 Nuevas Funcionalidades

- **[client]** Se añadió la opción "Auto focus" para los componentes Input, TextArea, URL e InputNumber, que enfoca automáticamente el campo de entrada durante la renderización inicial de la página cuando está habilitada ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe

### 🐛 Corrección de Errores

- **[client]**
  - Corrección en la vista previa de archivos con URL nula ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher

  - Se añade la URL completa al archivo local al previsualizar ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher

- **[utils]** Manejo incorrecto de la zona horaria en parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh

- **[undefined]** Se añadió un nuevo plugin al preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher

- **[Gestor de archivos]** Corrección del permiso del campo de almacenamiento ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher

- **[Workflow]** Corrección del resultado `undefined` al salir del procesador ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher

- **[Workflow: Nodo de cálculo dinámico]** Corrección de error causado por API heredada ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher

- **[Workflow: Subflujo]** Corrección de flujo suspendido por @mytharcher
