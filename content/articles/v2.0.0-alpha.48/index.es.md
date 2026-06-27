---
title: "NocoBase v2.0.0-alpha.48: Añadir bloque de mapa 2.0"
description: "Nota de la versión v2.0.0-alpha.48"
---

### 🎉 Nuevas Funcionalidades

- **[Bloque: Mapa]** Añadido bloque de mapa 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) por @katherinehhh

- **[Auth: OIDC]** Soporte para redirección automática a la URL de SSO cuando no está autenticado por @heziqiang

### 🐛 Correcciones de Errores

- **[cliente]**
  - Evitar error al abrir la configuración de valores predeterminados ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher

  - Resolver error al añadir registros hijos en un bloque de tabla de árbol asociativa ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh

  - Corregir problema de visualización cuando el campo markdown se trunca con puntos suspensivos en modo HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) por @katherinehhh

  - Corregir resultados de búsqueda incompletos en el selector en cascada ([#7990](https://github.com/nocobase/nocobase/pull/7990)) por @katherinehhh

  - Corregir el problema donde el estado de la pestaña de página y la ruta no se corresponden ([#7991](https://github.com/nocobase/nocobase/pull/7991)) por @zhangzhonghe

  - Corregir que el selector remoto no muestra la etiqueta correcta para valores no objeto ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh

- **[base de datos]** Corrección: eliminar el procesamiento UTC en la conversión de tiempo para campos solo de hora para evitar desplazamientos por zona horaria. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu

- **[Flujo de trabajo]**
  - Corregir el problema donde las ejecuciones preparadas no se enviaban a la cola antes de detenerse ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher

  - Corregir el problema donde algunos menús de tareas de flujo de trabajo no se mostraban ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher

  - Corregir el problema donde el enlace de la tarea llevaba a una página de error ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher

- **[Visualización de datos]** La configuración de campos de filtro para colecciones de fuentes de datos externas no muestra propiedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile

- **[Gestor de fuentes de datos]** Corregido el fallo en la actualización de la contraseña de la fuente de datos cuando se cambia la contraseña de la base de datos ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock

- **[Acción: Importar registros]** Corregido el problema al importar datos en una tabla de árbol ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock

- **[Flujo de trabajo: Nodo manual]** Corregir el problema donde el recuento de tareas manuales no es correcto ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir la ausencia de datos del solicitante en el contexto de ejecución después de que el usuario reenviara la solicitud por @mytharcher

  - Corregir el problema donde el comentario en el resultado del trabajo es nulo después de que el usuario enviara la aprobación con comentario por @mytharcher
