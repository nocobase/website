---
title: "NocoBase v2.0.0-beta.10: Optimizar el botón de entrada de IA"
description: "Nota de la versión v2.0.0-beta.10"
---

### 🚀 Mejoras

- **[cliente]** Permitir especificar cuándo ejecutar el flujo de eventos. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) por @gchust
- **[Empleados de IA]**

  - Optimizar el botón de entrada de IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) por @heziqiang
  - Ocultar el constructor de IA en la lista de entradas.<br/> Optimizar el flujo de integración de LLM.<br/> Actualizar la documentación sobre el modelo de IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) por @heziqiang
- **[Notificación: Mensaje en la aplicación]** Corregir problema de rendimiento al enviar mensajes en la aplicación a un gran número de usuarios ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - El componente de entrada numérica no muestra el valor ([#8410](https://github.com/nocobase/nocobase/pull/8410)) por @chenos
  - Corregir que los datos de selección en cascada no se limpien después de un envío exitoso en el formulario de creación ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh
  - Corregir problema con el botón de envío donde la validación obligatoria omitida no funciona cuando la confirmación está habilitada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh
  - Resolver problema con el botón de envío que aparece en la ventana emergente de selección de archivos del campo de asociación uno a uno ([#8398](https://github.com/nocobase/nocobase/pull/8398)) por @katherinehhh
  - Corregir problema donde la configuración de diseño en el bloque de tarjeta de cuadrícula no tiene efecto ([#8399](https://github.com/nocobase/nocobase/pull/8399)) por @katherinehhh
  - Corregir para evitar la asignación cuando se ingresan caracteres chinos en el campo numérico ([#8397](https://github.com/nocobase/nocobase/pull/8397)) por @katherinehhh
- **[Campo de colección: Muchos a muchos (array)]** Corregir error al añadir relaciones muchos a muchos(array) de segundo nivel en consultas de asociación ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock
- **[Multi-espacio]**

  - Espacio relacionado al añadir datos asociados por @jiannx
  - El color del selector de espacio sigue el tema por @jiannx
