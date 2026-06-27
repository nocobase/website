---
title: "NocoBase v1.8.8: Añadir modo \"Todo resuelto\" para nodo paralelo"
description: "Nota de la versión v1.8.8"
---

### 🎉 Nuevas Funcionalidades

- **[Workflow: Nodo paralelo]** Añadido modo "Todo resuelto" para el nodo paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher

- **[Adaptador de cola Redis]** Añadido adaptador Redis para cola de eventos por @mytharcher

### 🚀 Mejoras

- **[servidor]** Hacer disponible la cola de memoria concurrente cuando los elementos en proceso no están completos ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher

- **[base de datos]** Activa automáticamente la paginación simple cuando el conjunto de datos supera un umbral ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie

- **[Workflow: Nodo manual]** storePopupContext admite guardar el contexto predeterminado ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe

- **[Adaptador de cola Redis]** Hacer disponible la cola concurrente cuando los elementos en proceso no están completos para el adaptador Redis por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - falta la variable de objeto actual en las reglas de vinculación de subtablas ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh

  - La configuración del campo de título del selector de datos no es válida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe

  - Se corrigió un problema por el cual los campos Markdown no se renderizaban correctamente en la vista de detalle. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie

  - Después de los cambios de campo, los campos de asociación que dependen de este campo no han borrado sus valores ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe

  - problema de visualización cuando se utilizan variables de fecha obsoletas en campos de fecha de datos históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh

- **[base de datos]**
  - Resolver el fallo de paginación simple automática causado por la convención de nomenclatura de tablas. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie

  - Se corrigió el fallo al exportar grandes conjuntos de datos desde PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie

  - Se corrigió un problema por el cual la ordenación predeterminada de la clave primaria causaba un fallo en la carga de la lista al usar una fuente de datos externa de MSSQL en un bloque de tabla. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie

- **[autenticación]** Se corrigió el problema por el cual un `secret` vacío en la configuración de la subaplicación impedía iniciar sesión ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile

- **[Gestor de fuentes de datos]** Se corrigió la preservación de los atributos de la fuente de datos externa en la configuración de la colección ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie

- **[Acción: Edición por lotes]** No se puede realizar la edición por lotes y la actualización por lotes en el selector de datos ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe

- **[Workflow]** Se corrigió la versión incorrecta de la dependencia ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher

- **[Fuente de datos: Oracle externo]** Se corrigió la preservación de los atributos de la fuente de datos externa en la configuración de la colección por @aaaaaajie

- **[Workflow: Aprobación]** La URL del botón Enlace apunta a una ventana emergente en la página actual, pero al hacer clic muestra un error 404 por @zhangzhonghe

- **[Gestor de correo electrónico]** la relación entre mensajes y etiquetas es excepcional bajo mysql por @jiannx
