---
title: "NocoBase v2.1.0-beta.23: Agregar campos de creado y actualizado por para flujos de trabajo"
description: "Nota de la versión v2.1.0-beta.23"
---

### 🎉 Nuevas Funcionalidades

- **[Workflow]** Se añadieron los campos de creado por y actualizado por para flujos de trabajo ([#9217](https://github.com/nocobase/nocobase/pull/9217)) por @mytharcher

### 🚀 Mejoras

- **[sin definir]**
  - Mejora de la guía de instalación del Agente de IA para evitar que los Agentes omitan el asistente `--ui` y para detectar automáticamente los gestores de versiones de Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) por @Molunerfinn

  - Actualización de la documentación de IA para requerir NocoBase >= 2.1.0-beta.20 y recomendar la última versión beta. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) por @Molunerfinn

  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) por @Molunerfinn

- **[client-v2]** Separación del cliente v2 del cliente v1 y eliminación de su dependencia del cliente v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) por @zhangzhonghe

### 🐛 Corrección de Errores

- **[sin definir]** Corrección del selector de idioma que generaba URLs incorrectas (ej.: `/cn/es/` en lugar de `/es/`) en el sitio de documentación. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) por @Molunerfinn

- **[client]** Se estableció la altura máxima del popover y salvaguardas de desplazamiento para que el área de envío permanezca accesible ([#9226](https://github.com/nocobase/nocobase/pull/9226)) por @jiannx

- **[Visualización de datos]** Corrección de selectores de campo vacíos en la configuración de consultas de gráficos en páginas de flujo ([#9276](https://github.com/nocobase/nocobase/pull/9276)) por @2013xile

- **[Autenticación]** Corrección de sesiones antiguas que permanecían activas después de un cambio de contraseña ([#9261](https://github.com/nocobase/nocobase/pull/9261)) por @2013xile
