---
title: "NocoBase v1.8.17: Soporte para usar un título de tarea consistente en todos los nodos de aprobación del mismo flujo de trabajo"
description: "Nota de la versión v1.8.17"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: Aprobación]** Soporte para usar un título de tarea consistente en todos los nodos de aprobación del mismo flujo de trabajo por @mytharcher

### 🚀 Mejoras

- **[Autenticación]** Se eliminó el parámetro token de la URL después de iniciar sesión correctamente ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile

- **[Impresión de plantillas]** Soporte para campos de tipo m2m array por @jiannx

### 🐛 Corrección de Errores

- **[Móvil]** Se corrigió el problema donde los datos de envío del formulario en el diálogo de aprobación móvil eran incorrectos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe

- **[Flujo de trabajo]** Se corrigió la traducción del título de la página en el centro de tareas del flujo de trabajo ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher

- **[Calendario]** La información sobre herramientas de los eventos del calendario mostraba [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh

- **[Notificación: Mensaje en la aplicación]** Se corrigieron las traducciones ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher

- **[Gestor de archivos]** Se eliminó la sugerencia sobre el límite de tamaño de carga de archivos ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]**
  - Se deprecó el parámetro problemático `attachmentField` por @mytharcher

  - Se corrigió el problema donde el método de autenticación IAM no podía usarse para cargar archivos por @mytharcher
