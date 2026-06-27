---
title: "NocoBase v1.8.15: Optimizar el rendimiento al cambiar pestañas emergentes"
description: "Nota de la versión v1.8.15"
---

### 🚀 Mejoras

- **[cliente]**

  - Añadir soporte para la variable de fecha "anteayer" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) por @katherinehhh
  - Optimizar el rendimiento al cambiar entre pestañas de ventanas emergentes ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
- **[Flujo de trabajo]**

  - Corregir caso de prueba inestable ([#7349](https://github.com/nocobase/nocobase/pull/7349)) por @mytharcher
  - El título del flujo de trabajo en la tarjeta de tarea ya no se mostrará tachado, incluso si la versión correspondiente está deshabilitada ([#7339](https://github.com/nocobase/nocobase/pull/7339)) por @mytharcher
- **[Visor de archivos de Office]** Añadir soporte para previsualizar archivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher
- **[Gestor de copias de seguridad]** mejorar el rendimiento de la operación de copia de seguridad de la base de datos MySQL por @gchust

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir el problema por el cual el diseño de formulario de varias columnas no se convertía a diseño de una sola columna en dispositivos móviles ([#7355](https://github.com/nocobase/nocobase/pull/7355)) por @zhangzhonghe
  - Corregir error al eliminar colecciones en bloque ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
  - Se corrigió el problema por el cual el ámbito de datos guardado previamente no se preseleccionaba al configurar permisos individualmente. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
- **[Flujo de trabajo]**

  - Refactorizar el menú "Añadir nodo" y corregir los problemas de rendimiento de renderizado del lienzo del flujo de trabajo que causaba ([#7363](https://github.com/nocobase/nocobase/pull/7363)) por @mytharcher
  - Corregir el problema de condiciones de filtro incorrectas al recuperar un único elemento de tarea pendiente ([#7366](https://github.com/nocobase/nocobase/pull/7366)) por @mytharcher
  - Corregir el problema de coincidencia de palabras clave en la selección de campo ([#7356](https://github.com/nocobase/nocobase/pull/7356)) por @mytharcher
  - Evitar error lanzado al publicar en la cola de eventos al detenerse ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Corregir el problema por el cual los mensajes en el sitio se recibían pero no se mostraban en una ventana emergente ([#7364](https://github.com/nocobase/nocobase/pull/7364)) por @mytharcher
- **[Móvil]** Se resolvió un problema por el cual el selector de fecha en dispositivos móviles se mostraba incorrectamente cuando se aplicaban límites de rango de fechas ([#7362](https://github.com/nocobase/nocobase/pull/7362)) por @katherinehhh
- **[Gestor de archivos]** Añadir campo `storageId` a la colección de archivos para soportar la configuración de permisos ([#7351](https://github.com/nocobase/nocobase/pull/7351)) por @mytharcher
- **[Flujo de trabajo: Nodo paralelo]** Corregir la suspensión del nodo paralelo después de reanudar en MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Flujo de trabajo: CC]** Corregir que los bloques no se puedan eliminar ([#7338](https://github.com/nocobase/nocobase/pull/7338)) por @mytharcher
- **[Visor de archivos de Office]** Soporte para archivos `.docx`, `.xlsx` y `.pptx` solo con URL para ser previsualizados ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher
- **[Visualización de datos]** problema de variable de fecha en el valor predeterminado del campo de fecha en el bloque de filtro de gráfico ([#7291](https://github.com/nocobase/nocobase/pull/7291)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Corregir que las reglas de vinculación no funcionan en el bloque de detalle original de aprobación por @mytharcher
  - Corregir la actualización de asociaciones al enviar borrador por @mytharcher
