---
title: "NocoBase v2.1.0-alpha.1: Mejora la interfaz de asignación de campos de fecha/hora para admitir la selección de fechas/horas relativas"
description: "Nota de la versión v2.1.0-alpha.1"
---

### 🎉 Nuevas Funcionalidades

- **[Acción: Edición por lotes]** edición masiva 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) por @jiannx

### 🚀 Mejoras

- **[cliente]**
  - Mejora la interfaz de asignación de campos de fecha/hora para admitir la selección de fechas/horas relativas. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) por @gchust

  - Permite especificar el campo de título para campos de asociación al asignar un campo. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) por @gchust

  - La tabla 2.0 admite ordenación por arrastrar y soltar ([#8540](https://github.com/nocobase/nocobase/pull/8540)) por @jiannx

  - Mueve la asignación de campos y la configuración de valores predeterminados a la configuración a nivel de formulario. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) por @chenos

- **[Localización]** crea automáticamente claves i18n faltantes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) por @jiannx

### 🐛 Corrección de Errores

- **[motor de flujo]** Corrige un problema por el cual el submenú del campo de filtro no se podía expandir cuando había una palabra clave de búsqueda. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) por @gchust

- **[cliente]**
  - Corrige un problema por el cual asignar un único registro a un campo de relación muchos-a-muchos producía resultados incorrectos. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) por @gchust

  - Analiza la fecha usando el selector de fecha y añade validación de fortaleza de contraseña, etc. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) por @jiannx

  - Corrige el problema de espaciado causado por acciones vinculadas ocultas en la columna de acciones de la tabla ([#8646](https://github.com/nocobase/nocobase/pull/8646)) por @zhangzhonghe

  - Corrige el error de sintaxis de resolución cuando un elemento de markdown renderiza Liquid no válido ([#8637](https://github.com/nocobase/nocobase/pull/8637)) por @katherinehhh

  - Corrige solicitudes de análisis innecesarias al backend para propiedades de campos de relación múltiple en bloques de formulario. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) por @gchust

  - Corrige el problema por el cual `Action.Modal` no se podía cerrar después de cierta interacción ([#8642](https://github.com/nocobase/nocobase/pull/8642)) por @mytharcher

  - Corrige la falta de formato de número para campos de fórmula numérica y la configuración de formato de fecha para campos de fórmula de fecha ([#8625](https://github.com/nocobase/nocobase/pull/8625)) por @katherinehhh

  - Corrige el renderizado incompleto del borde superior en el primer elemento del formulario ([#8623](https://github.com/nocobase/nocobase/pull/8623)) por @katherinehhh

  - Corrige el problema por el cual el campo de archivo adjunto de asociación limpiado no se guarda después de enviar en un formulario de edición ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh

  - Corrige datos filtrados incorrectos en el desplegable de asociación cuando el campo de título es una clave foránea ([#8619](https://github.com/nocobase/nocobase/pull/8619)) por @katherinehhh

  - Corrige la imposibilidad de restaurar datos seleccionados en el componente de campo selector de registros después de editar ([#8610](https://github.com/nocobase/nocobase/pull/8610)) por @katherinehhh

  - Corrige que las opciones del componente de campo no se actualicen en tiempo real cuando el campo de asociación cambia de patrón ([#8611](https://github.com/nocobase/nocobase/pull/8611)) por @katherinehhh

- **[utilidades]** Corrige un problema de seguridad del motor evaluador de `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher

- **[Empleados IA]**
  - Corrige un problema por el cual los enlaces de citas de búsquedas web de IA no se mostraban en el cuadro de chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) por @cgyrock

  - Corrige error en los parámetros de la API de OpenAI ([#8633](https://github.com/nocobase/nocobase/pull/8633)) por @cgyrock

- **[Gestor de archivos]** corrige el problema por el cual el componente de campo de archivo aún puede abrir el diálogo del selector cuando está deshabilitado ([#8617](https://github.com/nocobase/nocobase/pull/8617)) por @katherinehhh
