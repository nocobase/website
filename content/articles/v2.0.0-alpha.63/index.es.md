---
title: "NocoBase v2.0.0-alpha.63: Redimensionamiento automático del área de texto en el formulario de tarea de edición de IA"
description: "Nota de la versión v2.0.0-alpha.63"
---

### 🚀 Mejoras

- **[cliente]**
  - Evitar el renderizado completo de la tabla al actualizar una celda ([#8349](https://github.com/nocobase/nocobase/pull/8349)) por @katherinehhh

  - Redimensionar automáticamente el área de texto en el formulario de edición de tareas de IA. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) por @heziqiang

- **[Flujo de trabajo: Aprobación]**
  - Añadir lógica de reparación para audiencias sincronizadas después de la migración por @mytharcher

  - Simplificar parámetros en consultas y mejorar el rendimiento por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió un problema por el cual los permisos de campos y acciones no se recalculaban después de la paginación en bloques de detalle, lista y formulario. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) por @gchust

  - Se corrigió que los campos de asociación de fuentes de datos externas no cargaran datos de asociación en bloques de formulario ([#8356](https://github.com/nocobase/nocobase/pull/8356)) por @katherinehhh

- **[sdk]** Mejorar la implementación del uso compartido de tokens ([#8357](https://github.com/nocobase/nocobase/pull/8357)) por @chenos

- **[Control de acceso]** Permitir que los campos de asociación se asocien utilizando las claves de destino ([#8352](https://github.com/nocobase/nocobase/pull/8352)) por @2013xile

- **[Flujo de trabajo: Nodo de bucle]** Se corrigió el problema por el cual un nodo fallido en una rama condicional no podía pasar el estado al nodo de rama superior ([#8360](https://github.com/nocobase/nocobase/pull/8360)) por @mytharcher

- **[Flujo de trabajo: Webhook]** Se corrigió el problema por el cual se lanzaba un error 404 al enviar una solicitud POST a la URL del webhook en una subaplicación por @mytharcher

- **[Flujo de trabajo: Aprobación]** Se corrigió un error de compilación causado por dependencias faltantes por @mytharcher

- **[Gestor de correo electrónico]** Se corrigió que el enlace de respuesta de Outlook se desconectara ocasionalmente por @jiannx
