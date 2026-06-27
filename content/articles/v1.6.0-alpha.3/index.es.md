---
title: "NocoBase v1.6.0-alpha.3: Eliminación de componentes de Formily de la tabla"
description: "Nota de la versión v1.6.0-alpha.3"
---

### 🚀 Mejoras

- **[cliente]** Eliminar componentes de Formily de la tabla para mejorar el rendimiento al cambiar la paginación de la tabla ([#5738](https://github.com/nocobase/nocobase/pull/5738)) por @zhangzhonghe

### 🐛 Corrección de errores

- **[cliente]**
  - Corregido el problema por el cual los campos no se mostraban después de agregarlos en un subformulario ([#5827](https://github.com/nocobase/nocobase/pull/5827)) por @zhangzhonghe

  - Corregido el problema por el cual cambiar el valor de un campo de asociación en el bloque de detalles no se actualizaba de inmediato ([#5826](https://github.com/nocobase/nocobase/pull/5826)) por @zhangzhonghe

  - Corregido el problema por el cual al hacer clic en enlaces no se abría una ventana emergente cuando se activaba 'Habilitar enlace' por primera vez ([#5812](https://github.com/nocobase/nocobase/pull/5812)) por @zhangzhonghe

  - Evitar múltiples llamadas a la API al cerrar la ventana emergente ([#5804](https://github.com/nocobase/nocobase/pull/5804)) por @zhangzhonghe

  - Corregido el problema por el cual el inicio de sesión móvil redirigía a la página de escritorio ([#5805](https://github.com/nocobase/nocobase/pull/5805)) por @zhangzhonghe

  - Corregido que el botón de acción de configuración debe estar alineado a la izquierda ([#5798](https://github.com/nocobase/nocobase/pull/5798)) por @katherinehhh

- **[compilación]** Corregido el almacenamiento en caché incorrecto de archivos js del frontend después de la compilación del plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) por @gchust
