---
title: "NocoBase v2.1.0-alpha.33: agregar variable de idioma del usuario actual en v2"
description: "Nota de la versión v2.1.0-alpha.33"
---

### 🎉 Nuevas Funcionalidades

- **[client]**
  - Añadir variable de idioma del usuario actual en v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) por @katherinehhh

  - Añadir soporte para reglas de vinculación en elementos del menú de página ([#9304](https://github.com/nocobase/nocobase/pull/9304)) por @zhangzhonghe

### 🚀 Mejoras

- **[client-v2]** Filtrar menús v1 en el diseño v2 y mostrar solo menús v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) por @zhangzhonghe

- **[Departamentos]** Optimizar el estilo de la lista de departamentos añadiendo iconos y ajustando el espaciado ([#9435](https://github.com/nocobase/nocobase/pull/9435)) por @katherinehhh

### 🐛 Corrección de Errores

- **[build]** Corregir fallo en la compilación de plugins cuando el código cliente v1 importa la entrada `/client-v2` de otro plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) por @Molunerfinn

- **[client]**
  - Corregido un problema intermitente por el cual las reglas de vinculación de botones de acción no surtían efecto. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) por @gchust

  - Ocultar el componente de subtabla para campos de asociación de muchos en la subtabla v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) por @katherinehhh

- **[Gestor de colecciones gráfico]** Corregir error en el filtro de acción de actualización del diseño automático de la interfaz gráfica ([#9421](https://github.com/nocobase/nocobase/pull/9421)) por @katherinehhh

- **[Bloque: Árbol]** Mejorada la configuración del bloque de filtro de árbol y corregida la asociación no soportada, el fallback del campo de título y el comportamiento de reinicio de búsqueda. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) por @jiannx
