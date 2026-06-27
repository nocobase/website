---
title: "NocoBase v1.8.13: Agregar opciones de configuración relacionadas con la firma"
description: "Nota de la versión v1.8.13"
---

### 🎉 Nuevas funciones

- **[Auth: SAML 2.0]** Se añaden opciones de configuración relacionadas con la firma por @2013xile

### 🚀 Mejoras

- **[Workflow: JavaScript]** Se cambia la caché a caché de la aplicación para evitar errores en modo clúster por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige que la información sobre herramientas muestre [object Object] al pasar el ratón en el panel de acciones ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh

  - Al usar variables para establecer valores predeterminados de campos en formularios de filtro, si el valor de la variable está vacío, el cuadro de entrada mostrará la cadena de variable original ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe

- **[Colección: Árbol]** Se corrige la lógica de sincronización de rutas de colecciones de árbol ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu
