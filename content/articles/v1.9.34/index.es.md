---
title: "NocoBase v1.9.34: Mejora en las comprobaciones de permisos al modificar campos de asociación anidados"
description: "Nota de la versión v1.9.34"
---

### 🚀 Mejoras

- **[Control de acceso]** Mejora de las comprobaciones de permisos al modificar campos de asociación anidados ([#7856](https://github.com/nocobase/nocobase/pull/7856)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]**
  - Corrección de campos de asociación de fuentes de datos externas que no cargan datos de asociación en bloques de formulario ([#8356](https://github.com/nocobase/nocobase/pull/8356)) por @katherinehhh

  - Corrección del problema donde los campos de asociación no son correctos en el componente `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) por @mytharcher

- **[logger]** Corrección de información de error adicional que se descartaba al imprimir registros del sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock

- **[Flujo de trabajo: Nodo de bucle]** Corrección del problema donde el nodo fallido en una rama de condición no puede pasar el estado al nodo de rama superior ([#8360](https://github.com/nocobase/nocobase/pull/8360)) por @mytharcher

- **[Fuente de datos: Principal]** Los metadatos de la colección de vistas deben incluir las opciones del campo de origen ([#8337](https://github.com/nocobase/nocobase/pull/8337)) por @2013xile

- **[Flujo de trabajo]**
  - Corrección del problema de regla de vinculación en el bloque de detalle del nodo CC del flujo de trabajo ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe

  - Adición del ID de instancia al ID Snowflake de los trabajos, para evitar problemas de conflicto de ID en modo clúster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher

  - Corrección del problema donde la página de ejecución falla cuando se elimina un flujo de trabajo ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher

- **[Acción: Importar registros]** Corrección del mensaje de error incorrecto cuando se activa un error de restricción única durante la importación XLSX asíncrona ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock

- **[Control de acceso]**
  - Permitir que los campos de asociación se asocien utilizando las claves de destino ([#8352](https://github.com/nocobase/nocobase/pull/8352)) por @2013xile

  - Corrección de un problema donde la fuente de datos se resuelve incorrectamente al procesar permisos para campos de asociación ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile

- **[Fuente de datos: API REST]** Adición de tolerancia a fallos para el contexto de solicitud, para evitar errores cuando el método no está en el contexto por @mytharcher

- **[Acción: Exportar registros Pro]** Corrección de error cuando las subaplicaciones ejecutan tareas de importación/exportación asíncronas mientras la aplicación principal no tiene habilitado el plugin de importación/exportación pro por @cgyrock

- **[Flujo de trabajo: Aprobación]** Corrección del problema donde los campos de filtro no funcionan correctamente en el centro de tareas por @mytharcher
