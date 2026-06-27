---
title: "NocoBase v2.0.0-alpha.41: añadir empleado de IA para configurar gráficos"
description: "Nota de la versión v2.0.0-alpha.41"
---

### 🎉 Nuevas Funcionalidades

- **[Visualización de datos]** Añadir empleado IA para configurar gráficos ([#7815](https://github.com/nocobase/nocobase/pull/7815)) por @heziqiang

### 🚀 Mejoras

- **[Motor de flujo]**
  - Soporte para escuchar eventos de cambio en el árbol de modelos de flujo en el motor de flujo. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) por @gchust

  - Mejora en la resolución de variables del registro actual, haciendo más rápida la apertura de diálogos ([#7895](https://github.com/nocobase/nocobase/pull/7895)) por @gchust

  - Optimización de la estructura de la API de bibliotecas de terceros en el contexto de runjs y adición de soporte para la biblioteca de iconos de Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) por @gchust

- **[Base de datos]** Refactorización del plugin de cifrado de campos para mejorar la seguridad, con soporte para generación y rotación de claves de aplicación, y claves de cifrado por campo. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) por @cgyrock

- **[Campo de colección: Cifrado]** Optimización del plugin de cifrado de campos para soportar la recuperación de datos con IV independientes por @cgyrock

### 🐛 Corrección de Errores

- **[Cliente]**
  - Corregido el problema por el cual los bloques ocultos seguían ocupando espacio en la página. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) por @gchust

  - Corregido el problema por el cual el botón de restablecer en el botón de filtro limpiaba las condiciones predeterminadas ([#7903](https://github.com/nocobase/nocobase/pull/7903)) por @zhangzhonghe

  - Corregida la verificación incorrecta de permisos para campos de subformulario en formularios nuevos ([#7902](https://github.com/nocobase/nocobase/pull/7902)) por @katherinehhh

- **[Servidor]** Corregido un problema en el modo de división de servicios donde los mensajes de cola no suscritos no podían publicarse ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher

- **[Flujo de trabajo]**
  - Corregido el error causado al escuchar eventos de fuentes de datos externas inexistentes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher

  - Uso de eventQueue en lugar de backgroundJob compartido para evitar que la cola compartida se consuma incorrectamente en el modo de división de servicios ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher

- **[Flujo de trabajo: Nodo manual]** Corregido el espacio de nombres del idioma local que se debe usar para mostrar el contenido correcto de la traducción ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher

- **[Control de acceso]** Problema por el cual los fragmentos de operación de asociación no surtían efecto ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile

- **[Flujo de trabajo: Evento de acción personalizada]** Corregido el error causado al escuchar eventos de fuentes de datos externas inexistentes por @mytharcher

- **[Comentarios]** Corregido el problema cuando los comentarios citados en un bloque de comentarios no se mostraban por @katherinehhh

- **[Impresión de plantillas]** Analizar las variables en el filtro por @jiannx

- **[Flujo de trabajo: Aprobación]** Corregido un problema donde las condiciones de carrera durante el procesamiento de aprobación concurrente por múltiples aprobadores podían causar que un nodo de flujo de trabajo se ejecutara más de una vez por @mytharcher
