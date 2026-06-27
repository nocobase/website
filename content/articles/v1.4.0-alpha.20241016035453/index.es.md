---
title: "NocoBase v1.4.0-alpha.20241016035453: Agregar campo de adjunto (URL)"
description: "Nota de la versión v1.4.0-alpha.20241016035453"
---

### 🎉 Nuevas Funcionalidades

- **[sdk]** Permite almacenar información del cliente en sessionStorage configurando la variable de entorno `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) por @2013xile
- **[Campo de colección: Adjunto (URL)]** Añadido campo de Adjunto (URL) por @katherinehhh

### 🚀 Mejoras

- **[cliente]**

  - optimización de depuración remota ([#5394](https://github.com/nocobase/nocobase/pull/5394)) por @chenos
  - optimización de estilo para centrar icono cuando los botones de acción usan solo icono ([#5413](https://github.com/nocobase/nocobase/pull/5413)) por @katherinehhh
  - cierre automático de ventana emergente de mensaje al actualizar registro ([#5408](https://github.com/nocobase/nocobase/pull/5408)) por @katherinehhh
- **[Flujo de trabajo: Nodo de solicitud HTTP]** Soporte para SSE (Eventos enviados por el servidor) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) por @chenos

### 🐛 Corrección de Errores

- **[Formularios públicos]** Corregido problema al hacer clic en configuración de formulario público ([#5392](https://github.com/nocobase/nocobase/pull/5392)) por @katherinehhh
- **[cliente]**

  - Corregido problema de no mostrar el valor en el campo de entrada de valor predeterminado ([#5400](https://github.com/nocobase/nocobase/pull/5400)) por @zhangzhonghe
  - Corregido error de no encontrar el campo de asociación cuando se establecen reglas de vinculación para la subtabla ([#5402](https://github.com/nocobase/nocobase/pull/5402)) por @zhangzhonghe
  - corregida vista previa incorrecta de miniatura cuando el tipo de archivo no es compatible por defecto ([#5401](https://github.com/nocobase/nocobase/pull/5401)) por @mytharcher
- **[Localización]** Corregido problema donde las traducciones en el plugin de localización no surtían efecto después de publicar ([#5416](https://github.com/nocobase/nocobase/pull/5416)) por @2013xile
