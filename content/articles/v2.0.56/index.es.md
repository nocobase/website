---
title: "NocoBase v2.0.56: complemento de administrador de copias de seguridad de código abierto"
description: "Nota de la versión v2.0.56"
---

### 🎉 Nuevas Funcionalidades

- **[Gestor de copias de seguridad]** plugin de código abierto para el gestor de copias de seguridad ([#9550](https://github.com/nocobase/nocobase/pull/9550)) por @chenos

### 🚀 Mejoras

- **[cliente]** optimizar la configuración de visualización de los botones de acción ([#9510](https://github.com/nocobase/nocobase/pull/9510)) por @katherinehhh
- **[motor-de-flujo]** los menús de configuración de campos V2 ahora permiten buscar campos ([#9489](https://github.com/nocobase/nocobase/pull/9489)) por @zhangzhonghe
- **[sin definir]**

  - Añadir revisión de seguridad de dependencias para las solicitudes de extracción ([#9523](https://github.com/nocobase/nocobase/pull/9523)) por @zhangzhonghe
  - **[Gestor de notificaciones]** Cambiar la estrategia de cola para optimizar el rendimiento de envío ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher
- **[IA: Base de conocimiento]** Se habilitó la modificación del almacenamiento vectorial para las bases de conocimiento de IA por @cgyrock
- **[Flujo de trabajo: Aprobación]** Mejorar las aprobaciones relacionadas con tarjetas de línea de tiempo por @zhangzhonghe

### 🐛 Corrección de Errores

- **[cliente]**

  - corregir la limpieza de valores seleccionados cuando los campos de asociación dependientes cambian en el enlace de ámbito de datos ([#9551](https://github.com/nocobase/nocobase/pull/9551)) por @katherinehhh
  - Corregir el problema por el que una insignia de menú seguía mostrando un punto cuando su valor es 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe
  - Corregir el problema por el que los formularios de filtro no podían usar las variables del formulario actual ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe
  - Corregir el problema por el que los bloques v2 reducidos se volvían de ancho completo después de salir del modo de edición ([#9529](https://github.com/nocobase/nocobase/pull/9529)) por @zhangzhonghe
  - Se corrigió el estado incorrecto del menú de campo JS en subformularios. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) por @gchust
- **[motor-de-flujo]** corregir el problema de selección múltiple para campos de fuente de datos externa en el formulario v2 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) por @katherinehhh
- **[Empleados IA]** Corregir error cuando un empleado IA accede a una base de conocimiento de solo lectura ([#9539](https://github.com/nocobase/nocobase/pull/9539)) por @cgyrock
- **[Calendario]** Corregir el problema por el que los elementos adicionales del calendario no se mostraban completamente ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe
- **[Acción: Actualización masiva]** corregir el estado de carga de la acción de actualización masiva después de un fallo en la actualización ([#9509](https://github.com/nocobase/nocobase/pull/9509)) por @katherinehhh
- **[Documentación de la API]** Se corrigió la documentación de la API de colecciones para que los parámetros de consulta ya no interfieran entre sí ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx
- **[Flujo de trabajo]** Añadir estado de carga para la ejecución manual del flujo de trabajo. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) por @mytharcher
- **[Gestor de migraciones]** Se corrigieron los fallos en la creación de archivos de migración al usar OceanBase por @2013xile
- **[Almacenamiento de archivos: S3(Pro)]** Corregir el manejo del endpoint de S3 Pro para que las subidas al servidor y las vistas previas de URL no dupliquen el host del bucket. por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir índices duplicados de registros de aprobación cuando ocurren delegaciones concurrentes en el mismo trabajo de aprobación. por @mytharcher
