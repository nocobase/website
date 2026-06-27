---
title: "NocoBase v2.0.0-alpha.33: Añadir soporte de paginación a la sub tabla"
description: "Nota de la versión v2.0.0-alpha.33"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Añadir soporte de paginación a la sub-tabla ([#7754](https://github.com/nocobase/nocobase/pull/7754)) por @katherinehhh

### 🚀 Mejoras

- **[indefinido]** Actualizar la documentación en inglés del plugin de gráficos ([#7748](https://github.com/nocobase/nocobase/pull/7748)) por @heziqiang

- **[telemetría]** Añadir métricas de telemetría para el número de sub-aplicaciones en línea, etc. ([#7743](https://github.com/nocobase/nocobase/pull/7743)) por @2013xile

- **[Workflow]** Permitir que el bloque de datos en el workflow utilice el menú de configuración de detalles consolidados ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher

- **[Gestor multi-aplicación (obsoleto)]** Habilitar el inicio asíncrono para sub-aplicaciones usando una cola ([#7749](https://github.com/nocobase/nocobase/pull/7749)) por @2013xile

- **[Visualización de datos]** Añadir opciones de formato de tiempo para los datos de gráficos ([#7763](https://github.com/nocobase/nocobase/pull/7763)) por @heziqiang

- **[Workflow: Aprobación]** Añadir notificación para el delegado y el asignado añadido por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió un problema por el cual las etiquetas de tipos enumerados en componentes relacionados con variables no se mostraban en el idioma correcto. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) por @gchust

  - Corregir la falta del indicador de campo obligatorio después de configurar la validación del frontend ([#7760](https://github.com/nocobase/nocobase/pull/7760)) por @katherinehhh

  - Corregir problema al limpiar la fecha sin zona horaria en el formulario de edición ([#7759](https://github.com/nocobase/nocobase/pull/7759)) por @katherinehhh

  - Corregir la validación de campos obligatorios para las reglas de vinculación ([#7756](https://github.com/nocobase/nocobase/pull/7756)) por @zhangzhonghe

  - Resolver el problema de "Fecha Inválida" al eliminar una Fecha Especificada en el filtro... ([#7746](https://github.com/nocobase/nocobase/pull/7746)) por @katherinehhh

  - Corregir el fallo de validación obligatoria para el campo Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) por @katherinehhh

  - Añadir configuración de alcance de datos para campos de relación en formularios de filtro ([#7761](https://github.com/nocobase/nocobase/pull/7761)) por @zhangzhonghe

  - Corregir problema de formato de hora en campos de sub-tabla ([#7750](https://github.com/nocobase/nocobase/pull/7750)) por @katherinehhh

- **[motor-de-flujo]**
  - cuando el valor del filtro de campo se establece en falso, la solicitud con alcance de datos es incorrecta ([#7766](https://github.com/nocobase/nocobase/pull/7766)) por @gchust

  - no se puede resolver el valor del campo de asociación de la variable de objeto actual del subformulario ([#7751](https://github.com/nocobase/nocobase/pull/7751)) por @gchust

  - corrección: resolver el problema del parámetro de solicitud de página después de eliminar datos en la última página ([#7755](https://github.com/nocobase/nocobase/pull/7755)) por @katherinehhh

- **[servidor]** Aislar el canal Pub-Sub por nombre de aplicación ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher

- **[Bloque: GridCard]** corregir el problema de duplicación de datos entre el bloque de lista y el bloque de tarjeta de cuadrícula ([#7773](https://github.com/nocobase/nocobase/pull/7773)) por @katherinehhh

- **[Gestor multi-aplicación (obsoleto)]** Colección incorrecta para la métrica de estado de la sub-aplicación ([#7772](https://github.com/nocobase/nocobase/pull/7772)) por @2013xile

- **[Workflow]**
  - Se resolvió un problema por el cual el despachador de workflow en modo clúster no identificaba correctamente los estados inactivos, lo que podía provocar un consumo innecesario de eventos de cola antes de que el plugin estuviera listo ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher

  - Corregir un problema por el cual, en modo de división de servicios, la ejecución manual de un workflow que contiene un nodo de interrupción se quedaba atascada en un estado pendiente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) por @mytharcher

- **[Workflow: Aprobación]**
  - Corregir el error lanzado al duplicar un workflow de aprobación por @mytharcher

  - Ya no se admite la creación de nodos de aprobación en ramas paralelas para evitar problemas causados por el estado del proceso por @mytharcher

- **[Gestor de correo electrónico]**
  - añadir registros de sincronización por @jiannx

  - añadir migración para índices por @jiannx
