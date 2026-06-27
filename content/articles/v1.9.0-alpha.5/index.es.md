---
title: "NocoBase v1.9.0-alpha.5: Agregar opciones de configuración relacionadas con la firma"
description: "Nota de la versión v1.9.0-alpha.5"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Se añadió la opción "Autoenfoque" para los componentes Input, TextArea, URL e InputNumber, que enfoca automáticamente el campo de entrada durante la renderización inicial de la página cuando está habilitada ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe

- **[Auth: SAML 2.0]** Se añadieron opciones de configuración relacionadas con la firma por @2013xile

### 🚀 Mejoras

- **[Flujo de trabajo: JavaScript]** Se cambió la caché a caché de la aplicación para evitar errores en modo clúster por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió el problema por el cual las cadenas de texto sin procesar de variables se enviaban con el formulario ([#7337](https://github.com/nocobase/nocobase/pull/7337)) por @zhangzhonghe

  - Se corrigió que la información sobre herramientas mostrara [object Object] al pasar el ratón en el panel de acciones ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh

  - Al usar variables para establecer valores predeterminados de campos en formularios de filtro, si el valor de la variable está vacío, el cuadro de entrada mostrará la cadena de variable original ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe

- **[indefinido]** Se añadió un nuevo plugin al conjunto predefinido ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher

- **[Colección: Árbol]** Se corrigió la lógica de sincronización de rutas de las colecciones en árbol ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu

- **[Visor de Archivos de Office]** Se añadió soporte para archivos `.docx`, `.xlsx` y `.pptx` con solo URL para ser previsualizados ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher

- **[Flujo de trabajo: Nodo de cálculo dinámico]** Se corrigió un error causado por una API heredada ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Se añadió título de tarea para elementos añadidos y delegados por @mytharcher

- **[Gestor de correo electrónico]** Se añadió soporte para el mismo correo electrónico para múltiples personas por @jiannx
