---
title: "NocoBase v1.8.18: Copiar el ID de instancia más reciente cada vez en la configuración de licencia"
description: "Nota de la versión v1.8.18"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Se actualizó el menú de selección de nodos para mostrar las opciones en un diseño de dos columnas, mejorando la densidad de información y permitiendo a los usuarios ver más opciones a la vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher

- **[Configuración de licencia]** En la configuración de licencia, copiar el último ID de instancia cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx

### 🐛 Corrección de errores

- **[cliente]**
  - tratar el número 0 como vacío durante la validación de vacío de reglas de enlace ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh

  - Corregir el texto del botón de enlace que rompe la línea ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher

- **[Móvil]** formato de visualización incorrecto del campo de fecha en móvil ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh

- **[Visor de archivos de Office]** Corregir error lanzado al subir un archivo al campo de URL de adjunto ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher

- **[Flujo de trabajo]** Corregir error lanzado y desaparición de datos del formulario al editar la categoría del flujo de trabajo ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher

- **[Flujo de trabajo: nodo de correo]** Corregir el problema donde el nodo de correo electrónico podría no reanudar la ejecución correctamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher

- **[Flujo de trabajo: evento de acción personalizada]** Limpiar las filas seleccionadas después de activar correctamente acciones en múltiples registros por @mytharcher

- **[Impresión de plantilla]** Impresión de campos de selección de radio en múltiples líneas de datos por @jiannx

- **[Flujo de trabajo: Aprobación]** Corregir el problema donde cargar datos de fuentes de datos externas en registros de aprobación resultaba en un error 404 por @mytharcher
