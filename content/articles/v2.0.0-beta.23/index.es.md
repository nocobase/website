---
title: "NocoBase v2.0.0-beta.23: soporte para altura de bloque configurable"
description: "Nota de la versión v2.0.0-beta.23"
---

### 🎉 Nuevas Funcionalidades

- **[Bloque: GridCard]** soporte para altura configurable del bloque ([#8583](https://github.com/nocobase/nocobase/pull/8583)) por @katherinehhh

- **[Acción: Edición por lotes]** edición masiva 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) por @jiannx

### 🚀 Mejoras

- **[cliente]**
  - Tabla 2.0 soporta ordenación por arrastrar y soltar ([#8540](https://github.com/nocobase/nocobase/pull/8540)) por @jiannx

  - Mover la asignación de campos y la configuración de valores predeterminados al nivel de configuración del formulario. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) por @chenos

- **[Localización]** crear automáticamente claves i18n faltantes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) por @jiannx

### 🐛 Corrección de Errores

- **[cliente]**
  - corregir datos filtrados incorrectos en el desplegable de asociación cuando el campo de título es una clave foránea ([#8619](https://github.com/nocobase/nocobase/pull/8619)) por @katherinehhh

  - Corregir problema donde el campo de archivo adjunto de asociación limpiado no se guarda después de enviar en el formulario de edición ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh

  - Corregir que las opciones del componente de campo no se actualizan en tiempo real cuando el campo de asociación cambia de patrón ([#8611](https://github.com/nocobase/nocobase/pull/8611)) por @katherinehhh

  - Corregir un problema donde las columnas de la tabla no se volvían a renderizar después de hacer clic en Ejecutar en el editor de columnas JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) por @gchust

  - corregir la imposibilidad de restaurar datos seleccionados en el componente de campo selector de registros después de editar ([#8610](https://github.com/nocobase/nocobase/pull/8610)) por @katherinehhh

- **[Gestor de archivos]** corregir problema donde el componente de campo de archivo aún puede abrir el diálogo de selección cuando está deshabilitado ([#8617](https://github.com/nocobase/nocobase/pull/8617)) por @katherinehhh

- **[Visualización de datos: ECharts]** Corregir error ortográfico de ECharts por @heziqiang

- **[Flujo de trabajo: Aprobación]**
  - Corregir el problema donde faltan valores en la ventana emergente de detalle de "Mi solicitud" por @mytharcher

  - Corregir error lanzado al ejecutar en modo antes de guardar por @mytharcher
