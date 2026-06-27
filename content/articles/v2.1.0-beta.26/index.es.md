---
title: "NocoBase v2.1.0-beta.26: agregar acciones de asociar y disociar al bloque de asociación"
description: "Nota de la versión v2.1.0-beta.26"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Añadir acciones de asociar y disociar al bloque de asociación ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh

- **[Visualización de datos]** Añadir soporte client-v2 para plugins de bloque ([#9297](https://github.com/nocobase/nocobase/pull/9297)) por @zhangzhonghe

### 🚀 Mejoras

- **[sin definir]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn

### 🐛 Corrección de Errores

- **[client-v2]**
  - Corregir el problema por el que algunas páginas v2 no cargaban plugins remotos ([#9369](https://github.com/nocobase/nocobase/pull/9369)) por @zhangzhonghe

  - Corregir problemas con el marcador de posición de arrastre y la posición de colocación de bloques en páginas v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) por @zhangzhonghe

- **[cliente]**
  - Se corrigió que las reglas de vinculación no se volvían a ejecutar después de cambiar los valores del formulario. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust

  - corregir que el campo de opción obligatorio en subtabla no se validara correctamente en la primera selección en móvil ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh

  - corregir ocultar opción de creación rápida para el campo de selección de asociación en subtabla v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh

  - Corregir el problema por el que las variables de parámetros de consulta URL se volvían inválidas después de cambiar entre páginas en caché ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe

  - corregir renderizado incorrecto de datos en bloque de tarjetas de cuadrícula después de actualizar y refrescar ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh

- **[servidor]** validar nombres de paquetes de plugins antes de operaciones del sistema de archivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos

- **[sin definir]** Corregir enlaces rotos en documentación traducida y habilitar detección de enlaces rotos por defecto en la compilación de la documentación. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) por @Molunerfinn

- **[Empleados IA]**
  - Corregir error al leer el campo de adjuntos de asociaciones en el nodo de empleado IA en flujos de trabajo ([#9377](https://github.com/nocobase/nocobase/pull/9377)) por @cgyrock

  - Corregir que el nodo de empleado IA en flujos de trabajo no finalizara correctamente después de la asignación de herramientas. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) por @cgyrock

- **[Bloque: Kanban]**
  - Mejorado el estilo compacto de tarjetas Kanban y optimizada la selección de plantillas en ventanas emergentes de creación rápida. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) por @jiannx

  - corregir evitar el ajuste de palabras individuales en campos de texto largo del bloque kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh

  - Corregido que los bloques asociados de kanban usaran parámetros de recurso de tiempo de ejecución no resueltos en contextos de ventanas emergentes o páginas secundarias. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) por @jiannx

- **[Acción: Solicitud personalizada]** actualizar koa a v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) por @chenos

- **[Campo de colección: Fórmula]** corregir que el campo de fórmula en subtabla v2 no se activara para auto-calcular ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh

- **[Gestor de correo electrónico]** Corregida la visualización del título de identidades de correo por @jiannx
