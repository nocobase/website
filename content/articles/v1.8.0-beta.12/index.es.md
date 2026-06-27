---
title: "NocoBase v1.8.0-beta.12: Soporte para agregar opciones de pool desde variables de entorno"
description: "Nota de la versión v1.8.0-beta.12"
---

### 🚀 Mejoras

- **[base de datos]** Soporte para añadir opciones de pool desde variables de entorno ([#7133](https://github.com/nocobase/nocobase/pull/7133)) por @mytharcher

- **[Flujo de trabajo]**
  - Mejora del rendimiento de carga de la lista de ejecuciones excluyendo el campo JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) por @mytharcher

  - Añadida API de registro para pruebas de nodos ([#7129](https://github.com/nocobase/nocobase/pull/7129)) por @mytharcher

- **[Gestor de múltiples aplicaciones]** Añadido soporte de filtros a la gestión de múltiples aplicaciones ([#7124](https://github.com/nocobase/nocobase/pull/7124)) por @katherinehhh

- **[Flujo de trabajo: Aprobación]** Cambio de tiempo a absoluto en la línea de tiempo por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - markdown no reflejaba los cambios en tiempo real al hacer referencia a variables $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) por @katherinehhh

  - Problema de estilo de color de fondo en subtabla dentro de bloque de detalle ([#7144](https://github.com/nocobase/nocobase/pull/7144)) por @katherinehhh

  - Configuración de UI del nodo manual del flujo de trabajo: las reglas de vinculación no pueden seleccionar variables del formulario actual ([#7125](https://github.com/nocobase/nocobase/pull/7125)) por @zhangzhonghe

  - Establecer el campo displayName en una vista conectada no tenía efecto ([#7130](https://github.com/nocobase/nocobase/pull/7130)) por @aaaaaajie

  - El valor predeterminado del campo de asociación sobrescribe los datos existentes en la subtabla ([#7120](https://github.com/nocobase/nocobase/pull/7120)) por @katherinehhh

  - Tolerancia a fallos para configuraciones basadas en 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) por @mytharcher

- **[utilidades]** Problema de filtrado en DateOnly o Datetime (sin zona horaria) usando la variable Día exacto ([#7113](https://github.com/nocobase/nocobase/pull/7113)) por @katherinehhh

- **[Flujo de trabajo]** Corrección de error lanzado por importación cíclica ([#7134](https://github.com/nocobase/nocobase/pull/7134)) por @mytharcher

- **[Política de contraseñas]** Soporte para bloquear permanentemente cuentas de usuario por @2013xile

- **[Flujo de trabajo: Subflujo]** Corrección de problema en modo clúster por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Eliminación de campos no filtrables del filtro por @mytharcher

  - Añadida configuración de diseño de formulario por @mytharcher
