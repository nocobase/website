---
title: "NocoBase v2.1.0-beta.6: Soporte para buscar documentación integrada con múltiples palabras clave y leer varios documentos en una sola llamada de herramienta"
description: "Nota de la versión v2.1.0-beta.6"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** Soporte para buscar en la documentación integrada con múltiples palabras clave y leer varios documentos en una sola llamada de herramienta ([#8718](https://github.com/nocobase/nocobase/pull/8718)) por @2013xile

### 🚀 Mejoras

- **[cliente]** Soporte para configuración de resumen en tablas ([#8721](https://github.com/nocobase/nocobase/pull/8721)) por @chenos

- **[Empleados IA]** Actualización del mensaje de usuario en el chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang

- **[Incrustar NocoBase]** Proporcionar API de sanitización para filtrar valores de asociación en acciones ([#8688](https://github.com/nocobase/nocobase/pull/8688)) por @mytharcher

### 🐛 Corrección de Errores

- **[Empleados IA]** Solucionado el problema donde el mensaje de IA se renderizaba con longitud 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) por @heziqiang

- **[Visualización de datos]** Corregida la internacionalización para el texto de entrada del gráfico del plugin ([#8716](https://github.com/nocobase/nocobase/pull/8716)) por @heziqiang

- **[Flujo de trabajo: JavaScript]** Corregido error que impedía pasar casos de prueba en Windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) por @mytharcher

- **[Impresión de plantillas]** Corregido el problema donde la API de ACL cambió pero no se adaptó al plugin por @mytharcher

- **[Flujo de trabajo: Aprobación]** Sanitización de valores de asociación en acciones de aprobación para evitar cualquier manipulación de datos más allá del permiso por @mytharcher

- **[Gestor de correo electrónico]** Corregido el análisis del formato del ID de contenido de imagen por @jiannx
