---
title: "NocoBase v1.9.0-beta.16: Soporte para el modo de activación \"Antes de guardar datos\""
description: "Nota de la versión v1.9.0-beta.16"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: Aprobación]** Se añade soporte para el modo de activación "Antes de guardar datos" por @mytharcher

### 🚀 Mejoras

- **[servidor]** Se añade registro de puerta de enlace (gateway log) ([#7683](https://github.com/nocobase/nocobase/pull/7683)) por @2013xile

- **[Flujo de trabajo: nodo de notificación]** Se añade la opción `ignoreFail` para el nodo de notificación, que permite continuar el flujo de trabajo cuando falla el envío de la notificación ([#7736](https://github.com/nocobase/nocobase/pull/7736)) por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrige la configuración de la regla de vinculación del escaneo de código QR en el panel de acciones ([#7693](https://github.com/nocobase/nocobase/pull/7693)) por @katherinehhh

  - Se corrige el fallo de la regla de vinculación del bloque iframe dentro de un modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) por @katherinehhh

- **[base de datos]** Se omite la sincronización de valores predeterminados para columnas JSON de MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) por @2013xile

- **[Flujo de trabajo]**
  - Se corrige el problema por el cual, en el modo de división de servicios, el manejo inadecuado de la cola pendiente en memoria provocaba que algunos flujos de trabajo no se ejecutaran ([#7692](https://github.com/nocobase/nocobase/pull/7692)) por @mytharcher

  - Se corrige el valor del estado de ejecución al crear con diferido ([#7721](https://github.com/nocobase/nocobase/pull/7721)) por @mytharcher

  - Se corrige el problema por el cual, después de eliminar un nodo que inicia una ramificación, la clave del primer nodo retenido dentro de la rama se cambiaba incorrectamente a un nuevo valor ([#7665](https://github.com/nocobase/nocobase/pull/7665)) por @mytharcher

- **[Control de acceso]** Se corrige el orden de los middlewares de `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) por @2013xile

- **[Gestor de archivos]** Se corrige el problema por el cual los archivos `.msg` no se podían subir correctamente ([#7662](https://github.com/nocobase/nocobase/pull/7662)) por @mytharcher

- **[Flujo de trabajo: Nodo manual]** Se corrige el problema por el cual las tareas manuales desaparecían después de deshabilitar el flujo de trabajo ([#7687](https://github.com/nocobase/nocobase/pull/7687)) por @mytharcher

- **[Campo de colección: divisiones administrativas de China]** La importación de datos falla cuando la ciudad y el área tienen el mismo nombre ([#7673](https://github.com/nocobase/nocobase/pull/7673)) por @2013xile

- **[Flujo de trabajo: Aprobación]**
  - Se corrige el problema de traducción del texto de estado en las notificaciones de finalización de aprobación, utilizando el idioma predeterminado del sistema para la traducción cuando el usuario no ha establecido una preferencia de idioma por @mytharcher

  - Se corrigen las configuraciones regionales (locales) por @mytharcher
