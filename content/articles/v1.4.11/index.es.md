---
title: "NocoBase v1.4.11: Optimizar elementos de configuración de componentes"
description: "Nota de la versión v1.4.11"
---

### 🚀 Mejoras

- **[cliente]** Más componentes ahora soportan el elemento de configuración 'Desbordamiento de texto con puntos suspensivos' ([#5888](https://github.com/nocobase/nocobase/pull/5888)) por @zhangzhonghe

- **[base de datos]** Se añaden `firstOrCreate` y `updateOrCreate` al repositorio de relaciones ([#5894](https://github.com/nocobase/nocobase/pull/5894)) por @chareice

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige la falta del parámetro x-data-source en la plantilla de solicitud duplicada para bloques de fuente de datos externa ([#5882](https://github.com/nocobase/nocobase/pull/5882)) por @katherinehhh

  - Se corrige el problema de la barra de desplazamiento horizontal en la tabla dentro del plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) por @katherinehhh

  - Se corrige el problema por el que a veces aparecían opciones adicionales 'N/A' en los desplegables de campos de asociación ([#5878](https://github.com/nocobase/nocobase/pull/5878)) por @zhangzhonghe

  - Se corrige el problema de creación de vistas PG, resolviendo el error al seleccionar vistas entre esquemas ([#5881](https://github.com/nocobase/nocobase/pull/5881)) por @katherinehhh

  - Se corrige el problema con los estilos de grupo en bloques de formulario cuando el diseño está configurado como horizontal ([#5884](https://github.com/nocobase/nocobase/pull/5884)) por @katherinehhh

- **[Usuarios]**
  - Se corrige el problema por el que el formulario no se restablecía después de añadir o editar un usuario en la gestión de usuarios. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) por @2013xile

  - Se corrigen los problemas por los que la configuración de paginación se restablecía después de editar y enviar perfiles de usuario en la gestión de usuarios tras un cambio de página o de tamaño de página. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) por @2013xile

- **[Gestor de fuentes de datos]** Se corrigen los problemas de filtrado con la Colección de fuente de datos externa ([#5890](https://github.com/nocobase/nocobase/pull/5890)) por @chareice

- **[Formularios públicos]** Se corrige el problema por el que el cambio de tema global afecta al tema de la página de vista previa del formulario público ([#5883](https://github.com/nocobase/nocobase/pull/5883)) por @katherinehhh
