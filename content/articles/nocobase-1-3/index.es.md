---
title: "NocoBase 1.3: fuente de datos REST API, móvil v2 y más funciones"
description: "NocoBase 1.3 introduce fuentes de datos REST API y MSSQL, soporte para abrir ventanas emergentes mediante URL, configuración dinámica de componentes de campo, versión móvil mejorada, autenticación con WeCom, arreglos muchos a muchos y un nuevo nodo de cálculo de fechas en flujos de trabajo."
---

A partir de la versión 1.3, NocoBase ofrece dos ramas principales: **main** y **next**.

- La rama **main** (versión beta) se centra en la corrección de errores, garantizando una versión estable para los usuarios.
- La rama **next** (versión alfa) contiene algunas funciones nuevas no publicadas. Esta versión es inestable y está destinada a desarrolladores o evaluadores para que experimenten las nuevas funciones de forma anticipada o realicen pruebas de compatibilidad.

Las nuevas funciones en la versión beta 1.3 incluyen:

## Núcleo

### Soporte para abrir ventanas emergentes mediante URL

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1d1c69d92d778fdbce569e76551b2f1c.mp4" type="video/mp4">
</video>

Documentación de referencia:

- [Ventana emergente](https://docs.nocobase.com/handbook/ui/pop-up)

### Soporte para abrir ventanas emergentes como página

Se ha añadido una nueva opción "página" para las operaciones de ventanas emergentes.

![4a75fb85c9ee716316b8286e5b9473c0.png](https://static-docs.nocobase.com/4a75fb85c9ee716316b8286e5b9473c0.png)

Documentación de referencia:

- [Ventana emergente](https://docs.nocobase.com/handbook/ui/pop-up)

### Los campos admiten la configuración de atributos de estilo

![04e31b81fb3a9deb16b917431abfe695.png](https://static-docs.nocobase.com/04e31b81fb3a9deb16b917431abfe695.png)

Documentación de referencia:

- [Configuración de campo / Estilo](https://docs.nocobase.com/handbook/ui/fields/field-settings/style)

### Markdown e iframe HTML admiten el motor de plantillas Handlebars

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

Documentación de referencia:

- [Motor de plantillas Handlebars para Markdown](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#handlebars)
- [Motor de plantillas Handlebars para iframe HTML](https://docs.nocobase.com/handbook/block-iframe#handlebars)

### Soporte para configurar dinámicamente componentes de campo

![20240807092556.png](https://static-docs.nocobase.com/20240807092556.png)

Documentación de referencia:

- [Configuración de campo / Componente de campo](https://docs.nocobase.com/handbook/ui/fields/field-settings/field-component)
- [Ejemplos de plugins / Componente de campo con valor](https://docs.nocobase.com/plugin-samples/field/value)

## Plugins

### Fuente de datos API REST

![20240721171420.png](https://static-docs.nocobase.com/20240721171420.png)

Documentación de referencia:

- [Fuente de datos / Fuente de datos API REST](https://docs.nocobase.com/handbook/data-source-rest-api)

### Fuente de datos externa MSSQL

![aac26e115213a2adbfbb5dfcf0e7ddc5.png](https://static-docs.nocobase.com/aac26e115213a2adbfbb5dfcf0e7ddc5.png)

Documentación de referencia:

- [Fuente de datos / Base de datos externa / MSSQL externo](https://docs.nocobase.com/handbook/data-source-external-mssql)

### Móvil V2

![e88f4f84b47f9076d3ae518ff4d1cc15.png](https://static-docs.nocobase.com/e88f4f84b47f9076d3ae518ff4d1cc15.png)

Documentación de referencia:

- [Móvil](https://docs.nocobase.com/handbook/mobile)

### Muchos a muchos (array)

![202407051108180.png](https://static-docs.nocobase.com/202407051108180.png)

Documentación de referencia:

- [Muchos a muchos (array)](https://docs.nocobase.com/handbook/field-m2m-array)

### Autenticación: WeCom

![202406272115805.png](https://static-docs.nocobase.com/202406272115805.png)

Documentación de referencia:

- [Autenticación: WeCom](https://docs.nocobase.com/handbook/wecom/auth)

### Flujo de trabajo: Nodo de cálculo de fecha

![0975e0b188846624ec6d66f46b3f25b0.png](https://static-docs.nocobase.com/0975e0b188846624ec6d66f46b3f25b0.png)

Documentación de referencia:

- [Flujo de trabajo: Nodo de cálculo de fecha](https://docs.nocobase.com/handbook/workflow-date-calculation)

## Cambios importantes

### La variable de entorno `DB_TIMEZONE` cambió a `TZ`

Se ha añadido la nueva variable de entorno `TZ` para configurar la zona horaria de la aplicación, siendo el valor predeterminado la zona horaria del sistema operativo. La antigua `DB_TIMEZONE` sigue siendo compatible pero está obsoleta.

Referencia:

- [Variable de entorno / TZ](https://docs.nocobase.com/welcome/getting-started/env#tz)
