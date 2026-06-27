---
title: "NocoBase v2.0.0-beta.7: agregar control de concurrencia a nivel de proceso para el administrador de tareas base"
description: "Nota de la versión v2.0.0-beta.7"
---

### 🎉 Nuevas Funcionalidades

- **[test]** Añadir control de concurrencia a nivel de proceso para el gestor de tareas base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) por @cgyrock

- **[Empleados IA]** Soporte para el modelo Gemini-3 con firma de pensamiento de llamada a función ([#8377](https://github.com/nocobase/nocobase/pull/8377)) por @heziqiang

### 🚀 Mejoras

- **[flow-engine]** Añadir `rowOrder` a GridModel para garantizar un orden de filas consistente ([#8371](https://github.com/nocobase/nocobase/pull/8371)) por @zhangzhonghe

- **[Empleados IA]**
  - Soporte para edición personalizada y actualización automática de indicaciones del sistema ([#8378](https://github.com/nocobase/nocobase/pull/8378)) por @heziqiang

  - Mejora en el manejo de errores de IA para servicios y modelos LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) por @heziqiang

- **[Gestor de archivos]** Añadir opciones de solicitud para obtener archivos OSS en el lado del servidor si se necesitan parámetros o cabeceras adicionales ([#8372](https://github.com/nocobase/nocobase/pull/8372)) por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregido un problema por el cual un campo de asociación podía seguir abriendo una ventana emergente después de cambiar del componente selector de registros al componente de selección. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) por @gchust

  - Corregido el problema por el cual las reglas de vinculación no se volvían a ejecutar después de cambiar la paginación en bloques de detalles, bloques de formulario de edición y bloques de lista. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) por @gchust

  - Corregido un problema por el cual los campos configurados de sub-tabla/sub-formulario no se mostraban al alternar entre componentes de campo. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) por @gchust

- **[logger]** Corregir la pérdida de información de error adicional al imprimir registros del sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock

- **[Bloque: plantilla (obsoleto)]** Corregido un problema por el cual no se podía acceder a la página de edición de plantillas heredadas (v1). ([#8376](https://github.com/nocobase/nocobase/pull/8376)) por @gchust

- **[Flujo de trabajo]**
  - Añadir ID de instancia al ID Snowflake de los trabajos, para evitar conflictos de ID en modo clúster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher

  - Corregir problema de reglas de vinculación en el bloque de detalle del nodo CC del flujo de trabajo ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe

  - Corregir el problema de que la página de ejecución fallaba cuando se eliminaba un flujo de trabajo ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher

- **[Control de acceso]** Corregir un problema por el cual la fuente de datos se resolvía incorrectamente al procesar permisos para campos de asociación ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile

- **[Fuente de datos: API REST]** Añadir tolerancia a fallos para el contexto de solicitud, para evitar errores cuando el método no está en el contexto por @mytharcher
