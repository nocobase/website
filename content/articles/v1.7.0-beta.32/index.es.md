---
title: "NocoBase v1.7.0-beta.32: Los campos de texto de una sola línea admiten la entrada de múltiples palabras clave para filtrar"
description: "Nota de la versión v1.7.0-beta.32"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Los campos de texto de una línea admiten la introducción de múltiples palabras clave para filtrar ([#6685](https://github.com/nocobase/nocobase/pull/6685)) por @zhangzhonghe
  Referencia: [Filtro de múltiples palabras clave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Filtro de múltiples palabras clave]** Los campos de texto de una línea admiten la introducción de múltiples palabras clave para filtrar por @zhangzhonghe
  Referencia: [Filtro de múltiples palabras clave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impresión de plantillas]** Se añade soporte para impresión por lotes en la impresión de plantillas. por @sheldon66

### 🚀 Mejoras

- **[Flujo de trabajo]** Se añaden todas las claves de localización en-US faltantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**

  - El componente en cascada en el modal no carga los datos de asociación inicialmente ([#6886](https://github.com/nocobase/nocobase/pull/6886)) por @katherinehhh
  - Los datos de asociación no se envían al exponer campos de asociación en subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh
  - Los campos de ordenación arrastrables no muestran correctamente las opciones disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh
  - Faltan variables del formulario actual en el ámbito de datos de la tabla del selector de datos ([#6882](https://github.com/nocobase/nocobase/pull/6882)) por @katherinehhh
  - La tabla de registros de selección de asociación no filtraba los registros ya asociados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh
- **[base de datos]** Manejar celdas de cadena vacía durante la importación de campos para evitar errores ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie
- **[Flujo de trabajo: Nodo manual]** Corregir error de renderizado al mostrar elemento no procesado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher
- **[Gestor de archivos]** Corregir tipos ([#6873](https://github.com/nocobase/nocobase/pull/6873)) por @mytharcher
- **[Bloque: Panel de acciones]** Leer el nombre base de la ruta desde el escáner para adaptarse al entorno de escritorio. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66
- **[Integración de IA]** El contenido no se muestra al cambiar entre las páginas de configuración del servicio LLM y de validación ([#6887](https://github.com/nocobase/nocobase/pull/6887)) por @2013xile
- **[Flujo de trabajo]** Corregir el límite de pila que funciona incorrectamente para eventos de colección ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir el ámbito de los asignados del delegado y añadir a otros asignados por @mytharcher
- **[Gestor de copias de seguridad]** Corregir error de tipo en la compilación por @mytharcher
