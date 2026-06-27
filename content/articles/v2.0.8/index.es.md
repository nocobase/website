---
title: "NocoBase v2.0.8: Actualización del mensaje de usuario del chatbox de IA"
description: "Nota de la versión v2.0.8"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** Actualización del prompt de usuario en el chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🐛 Corrección de Errores

- **[servidor]** Solucionado problema de caché añadiendo hash a los assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos

- **[Empleados IA]** Corregido problema de renderizado en la configuración de la fuente de datos de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock

- **[Flujo de trabajo: Evento de acción personalizada]** Corregido el problema por el que el flujo de trabajo de acción personalizada se bloqueaba al ejecutarse como subflujo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Sanitización de valores de asociación en acciones de aprobación para evitar cualquier manipulación de datos más allá de los permisos por @mytharcher

  - Corregido el problema de error al ejecutar manualmente el flujo de trabajo de aprobación por @mytharcher

  - Corregido el error lanzado por la ausencia del valor de `dataAfter` al añadir o delegar por @mytharcher

  - Corregido el problema del filtrado de parámetros `appends` por ACL por @mytharcher

  - Corregido el problema de ACL donde el valor de asociación no debería crearse o actualizarse cuando el usuario no tiene permiso por @mytharcher
