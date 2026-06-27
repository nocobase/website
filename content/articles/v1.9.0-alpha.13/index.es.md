---
title: "NocoBase v1.9.0-alpha.13: el flujo de trabajo permite volver a cualquier nodo en el proceso de aprobación"
description: "Nota de la versión v1.9.0-alpha.13"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: Aprobación]** Soporte para volver a cualquier nodo en el proceso de aprobación por @mytharcher

### 🚀 Mejoras

- **[cliente]** Eliminar el popover de puntos suspensivos de la lista de archivos ([#7479](https://github.com/nocobase/nocobase/pull/7479)) por @mytharcher

- **[base de datos]** Consulta de recuento de la API de lista optimizada para reducir el consumo de recursos. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) por @aaaaaajie

- **[Flujo de trabajo]**
  - Optimizar el proceso de preparación del flujo de trabajo para soportar el uso de datos de nodo precargados ([#7476](https://github.com/nocobase/nocobase/pull/7476)) por @mytharcher

  - Optimizar el rendimiento de la consulta para recuperar ejecuciones en cola mediante el uso de campos e índices separados ([#7448](https://github.com/nocobase/nocobase/pull/7448)) por @mytharcher

  - Ajustar la API de variables del flujo de trabajo para soportar el preajuste de una lista de variables adicional ([#7439](https://github.com/nocobase/nocobase/pull/7439)) por @mytharcher

- **[Notificación: Mensaje en la aplicación]** Soporte para configurar el retardo de cierre automático para notificaciones de mensajes en la aplicación ([#7472](https://github.com/nocobase/nocobase/pull/7472)) por @mytharcher

- **[Flujo de trabajo: nodo de notificación]** Soporte para probar el nodo de notificación ([#7470](https://github.com/nocobase/nocobase/pull/7470)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Soporte para usar variables relacionadas con la aprobación en notificaciones personalizadas por @mytharcher

  - Soporte para actualizar el estado de aprobación después de que el nodo final termine la ejecución por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - comprobación incorrecta de 'no vacío' para campos numéricos en la regla de vinculación ([#7477](https://github.com/nocobase/nocobase/pull/7477)) por @katherinehhh

  - error de renderizado del campo de asociación al cambiar al componente de etiqueta en el bloque de formulario de edición ([#7468](https://github.com/nocobase/nocobase/pull/7468)) por @katherinehhh

  - problema de límite de tiempo cuando la fecha seleccionada es igual a minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) por @katherinehhh

  - Corregir un problema por el cual, en ciertos escenarios, editar un registro en la ventana emergente del selector de registros móvil causa un error ([#7444](https://github.com/nocobase/nocobase/pull/7444)) por @zhangzhonghe

  - validación requerida no funciona para campos de adjuntos en subtabla ([#7431](https://github.com/nocobase/nocobase/pull/7431)) por @katherinehhh

  - Corregir el problema por el cual el icono se mostraba incorrectamente cuando la URL en el campo de URL de adjunto contenía parámetros de consulta ([#7432](https://github.com/nocobase/nocobase/pull/7432)) por @mytharcher

- **[base de datos]**
  - Se corrigió el problema de precisión para los campos Número exportados ([#7421](https://github.com/nocobase/nocobase/pull/7421)) por @aaaaaajie

  - Se corrigió un error de sintaxis de MySQL que ocurría al cargar más mensajes en la aplicación. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) por @aaaaaajie

- **[indefinido]** Se corrigió el problema con el filtrado por campo de fecha solo en fuente externa de MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) por @aaaaaajie

- **[Móvil]** campo de fecha móvil sin zona horaria no muestra la fecha y hora correctamente ([#7473](https://github.com/nocobase/nocobase/pull/7473)) por @katherinehhh

- **[Colección: Árbol]** Eliminar eventos de base de datos relacionados con la colección después de eliminar una colección de árbol ([#7459](https://github.com/nocobase/nocobase/pull/7459)) por @2013xile

- **[Formularios públicos]** el valor predeterminado del campo del formulario público no se aplica al usar variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) por @katherinehhh

- **[Acción: Importar registros]**
  - Corregir el número de fila incorrecto que se muestra cuando se importan datos duplicados ([#7440](https://github.com/nocobase/nocobase/pull/7440)) por @aaaaaajie

  - Se corrigió un problema por el cual la importación fallaba cuando la clave primaria de la tabla era un texto de una sola línea ([#7416](https://github.com/nocobase/nocobase/pull/7416)) por @aaaaaajie

- **[Flujo de trabajo]**
  - Corregir el problema por el cual la ventana emergente de detalle no se mostraba debido a una configuración de ruta incorrecta en el centro de tareas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) por @mytharcher

  - Completar las opciones para eliminar automáticamente el estado de ejecución del flujo de trabajo ([#7436](https://github.com/nocobase/nocobase/pull/7436)) por @mytharcher

  - Corregir problemas relacionados con el menú móvil en las tareas del flujo de trabajo ([#7419](https://github.com/nocobase/nocobase/pull/7419)) por @mytharcher

- **[Administrador de archivos]** Corregir el error al editar el campo `storage` en la colección de archivos. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) por @mytharcher

- **[Flujo de trabajo: Nodo paralelo]** Corregir el problema por el cual la determinación incorrecta del estado en los nodos de rama paralela bajo el modo "Ejecutar todas las ramas" causaba una finalización prematura ([#7445](https://github.com/nocobase/nocobase/pull/7445)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el problema por el cual los eventos de acción personalizada no se pueden ejecutar manualmente inmediatamente después de la inicialización por @mytharcher

- **[Acción: Importar registros Pro]** Se corrigió un resultado de actualización inesperado al usar una clave primaria de cadena en la importación xlsx. por @aaaaaajie

- **[Flujo de trabajo: Subflujo]** Corregir el problema de que los subprocesos se reanudan y ejecutan varias veces por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Agregar la variable de estado para plantillas personalizadas en notificaciones de finalización de aprobación por @mytharcher

  - Para los usuarios que no son el aprobador actual, el botón de vista correspondiente en la tabla de flujo del proceso no se mostrará por @mytharcher
