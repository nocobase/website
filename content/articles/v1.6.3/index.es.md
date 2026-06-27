---
title: "NocoBase v1.6.3: Permite establecer un tooltip personalizado para el botón de inicio de sesión"
description: "Nota de la versión v1.6.3"
---

### 🎉 Nuevas funciones

- **[WeCom]** Permite configurar un tooltip personalizado para el botón de inicio de sesión por @2013xile

### 🐛 Corrección de errores

- **[cliente]**
  - Carácter especial en la URL de la imagen impedía que se mostrara ([#6459](https://github.com/nocobase/nocobase/pull/6459)) por @mytharcher

  - Número de página incorrecto al añadir datos después de cambiar el tamaño de página de una subtabla ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh

  - El estilo del logotipo no coincide con el anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe

- **[Flujo de trabajo: Nodo manual]** Se corrigió un error lanzado en la migración ([#6445](https://github.com/nocobase/nocobase/pull/6445)) por @mytharcher

- **[Visualización de datos]** Los campos eliminados aparecen al añadir campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile

- **[Gestor de archivos]** Se corrigieron varios problemas del gestor de archivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher

- **[Acción: Solicitud personalizada]** Error de validación de permisos en el lado del servidor en solicitudes personalizadas ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh

- **[Gestor de fuentes de datos]** Al cambiar la fuente de datos en la gestión de roles no se cargan las colecciones correspondientes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh

- **[Acción: Edición masiva]** Se corrigió que el flujo de trabajo no se pudiera activar al enviar una edición masiva ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Se eliminó `only` en el caso de prueba E2E por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Se corrigió que los datos de asociación no se mostraran en el formulario de aprobación por @mytharcher

  - Se corrigió un error lanzado al aprobar en una fuente de datos externa por @mytharcher
