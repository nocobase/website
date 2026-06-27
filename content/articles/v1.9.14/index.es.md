---
title: "NocoBase v1.9.14: Soporte para redirección automática a la URL de SSO cuando no está autenticado"
description: "Nota de la versión v1.9.14"
---

### 🎉 Nuevas Funcionalidades

- **[Auth: OIDC]** Soporte para redirección automática a la URL de SSO cuando no se está autenticado por @heziqiang

### 🚀 Mejoras

- **[cliente]** Uso de triple llave (`{{{` y `}}}`) para variables en el contenido del mensaje, para evitar que Handlebars escape las variables ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher

- **[Campo de colección: Markdown(Vditor)]** Ajustar el ancho del contenido a pantalla completa de vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh

### 🐛 Corrección de Errores

- **[base de datos]** Corrección: eliminar el procesamiento UTC en la conversión de hora para campos de solo hora para evitar desfases de zona horaria. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu

- **[cliente]** corregir que la selección remota no muestra la etiqueta correcta para valores no objeto ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh

- **[Flujo de trabajo]**
  - Corregir el problema por el cual las ejecuciones preparadas no se enviaban a la cola antes de detenerse ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher

  - Corregir el problema por el cual el enlace de la tarea dirigía a una página de error ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher

  - Corregir el problema por el cual algunos menús de tareas del flujo de trabajo no se mostraban ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher

  - Corregir que el contador de tareas no se mostraba debido al uso incorrecto del proveedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher

- **[Flujo de trabajo: Nodo manual]** Corregir el problema por el cual el contador de tareas manuales no era correcto ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher

- **[Visualización de datos]**
  - La configuración de campos de filtro para colecciones de fuentes de datos externas no muestra propiedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile

  - Resolver el problema por el cual la consulta del gráfico no soportaba el ámbito de datos ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile

- **[Gestor de fuentes de datos]** Corregido el fallo en la actualización de la contraseña de la fuente de datos cuando se cambia la contraseña de la base de datos ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock

- **[Acción: Importar registros]** Corregido el problema al importar datos en una tabla de árbol ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock
