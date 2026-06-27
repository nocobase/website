---
title: "NocoBase v1.8.32: Métodos para optimizar la carga de recursos localizados"
description: "Nota de la versión v1.8.32"
---

### 🚀 Mejoras

- **[servidor]** Optimizar el método de carga de recursos l10n para evitar bloquear el bucle de eventos ([#7653](https://github.com/nocobase/nocobase/pull/7653)) por @2013xile

- **[caché]** Evitar la sobrecarga de rendimiento causada por la clonación de filtros Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) por @2013xile

- **[Acción: Importar registros]** Mejora en los mensajes de error cuando faltan encabezados de tabla ([#7656](https://github.com/nocobase/nocobase/pull/7656)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Corregir error al limpiar el campo de fecha en el bloque de filtro ([#7632](https://github.com/nocobase/nocobase/pull/7632)) por @katherinehhh

  - Evitar la división de palabras en la etiqueta de formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) por @katherinehhh

  - Corregir el valor predeterminado de la subtabla que no funciona en el panel de edición de formulario ([#7631](https://github.com/nocobase/nocobase/pull/7631)) por @katherinehhh

- **[Campo de colección: divisiones administrativas de China]** La importación de datos falla cuando la ciudad y el área tienen el mismo nombre ([#7673](https://github.com/nocobase/nocobase/pull/7673)) por @2013xile

- **[Flujo de trabajo]**
  - Corregir el problema por el cual, después de eliminar un nodo que inicia una ramificación, la clave del primer nodo retenido dentro de la rama se cambiaba incorrectamente a un nuevo valor ([#7665](https://github.com/nocobase/nocobase/pull/7665)) por @mytharcher

  - Corregir el error del registrador que se producía al detener la aplicación ([#7639](https://github.com/nocobase/nocobase/pull/7639)) por @mytharcher

- **[Gestor de archivos]** Corregir el problema por el cual el archivo `.msg` no se podía cargar correctamente ([#7662](https://github.com/nocobase/nocobase/pull/7662)) por @mytharcher

- **[Fuente de datos: Principal]** Corregir el problema por el cual los metadatos no se sincronizaban entre múltiples nodos después de crear un campo de asociación inversa ([#7628](https://github.com/nocobase/nocobase/pull/7628)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir el problema de traducción del texto de estado en las notificaciones de finalización de aprobación, utilizando el idioma predeterminado del sistema para la traducción cuando el usuario no ha establecido una preferencia de idioma por @mytharcher

  - Corregir el problema por el cual el recuento de tareas no se actualizaba después de agregar un asignado por @mytharcher
