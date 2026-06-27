---
title: "NocoBase v2.0.0-alpha.64: Compatibilidad con el modelo Gemini-3 con firma de pensamiento de llamada a funciones"
description: "Nota de la versión v2.0.0-alpha.64"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** Soporte para el modelo Gemini-3 con firma de pensamiento de llamada a funciones ([#8377](https://github.com/nocobase/nocobase/pull/8377)) por @heziqiang

### 🚀 Mejoras

- **[Empleados IA]**
  - Mejora en el manejo de errores de IA para servicios y modelos LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) por @heziqiang

  - Soporte para edición personalizada y actualización automática de indicaciones del sistema ([#8378](https://github.com/nocobase/nocobase/pull/8378)) por @heziqiang

- **[Gestor de archivos]** Añadir opciones de solicitud para obtener archivos OSS en el lado del servidor si se necesitan parámetros o cabeceras adicionales ([#8372](https://github.com/nocobase/nocobase/pull/8372)) por @mytharcher

### 🐛 Corrección de Errores

- **[logger]** Corregido el descarte de información de error adicional al imprimir registros del sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock

- **[cliente]**
  - Corregido un problema por el cual un campo de asociación podía seguir abriendo una ventana emergente después de cambiar del componente selector de registros al componente de selección. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) por @gchust

  - Corregido el problema por el cual las reglas de vinculación no se volvían a ejecutar después de cambiar la paginación en bloques de detalles, formularios de edición y listas. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) por @gchust

  - Corregido un problema por el cual los campos configurados de sub-tabla/sub-formulario no se mostraban al alternar entre componentes de campo. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) por @gchust

- **[Flujo de trabajo]**
  - Corregido problema de reglas de vinculación en el bloque de detalles del nodo CC del flujo de trabajo ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe

  - Corregido el problema de que la página de ejecución fallaba al eliminar un flujo de trabajo ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher

- **[Control de acceso]** Corregido un problema por el cual la fuente de datos se resolvía incorrectamente al procesar permisos para campos de asociación ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile
