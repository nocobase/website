---
title: "NocoBase v1.6.11: Optimizar mensaje de error 502"
description: "Nota de la versión v1.6.11"
---

### 🚀 Mejoras

- **[cliente]**
  - Optimización del mensaje de error 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) por @chenos

  - Solo se admite la vista previa de archivos de texto plano ([#6563](https://github.com/nocobase/nocobase/pull/6563)) por @mytharcher

- **[Campo de colección: Secuencia]** Se permite configurar la secuencia como campo de título para el bloque de calendario ([#6562](https://github.com/nocobase/nocobase/pull/6562)) por @katherinehhh

- **[Flujo de trabajo: Aprobación]** Se admite omitir el validador en la configuración por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Problema con la visualización del campo de fecha en el filtrado del ámbito de datos ([#6564](https://github.com/nocobase/nocobase/pull/6564)) por @katherinehhh

  - La opción 'Contenido desbordado con puntos suspensivos' requiere actualizar la página para que el estado de alternancia surta efecto ([#6520](https://github.com/nocobase/nocobase/pull/6520)) por @zhangzhonghe

  - No se puede abrir otro modal dentro de un modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) por @zhangzhonghe

- **[Documentación de la API]** La página de documentación de la API no puede desplazarse ([#6566](https://github.com/nocobase/nocobase/pull/6566)) por @zhangzhonghe

- **[Flujo de trabajo]** Asegurar que la clave del flujo de trabajo se genere antes de guardar ([#6567](https://github.com/nocobase/nocobase/pull/6567)) por @mytharcher

- **[Flujo de trabajo: Evento posterior a la acción]** Los registros múltiples en una acción masiva deben activarse varias veces ([#6559](https://github.com/nocobase/nocobase/pull/6559)) por @mytharcher

- **[Autenticación]** Problema de localización para los campos de la página de registro ([#6556](https://github.com/nocobase/nocobase/pull/6556)) por @2013xile

- **[Formularios públicos]** Problema con el título de la página del formulario público que muestra 'Cargando...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) por @katherinehhh
