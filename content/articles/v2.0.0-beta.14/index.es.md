---
title: "NocoBase v2.0.0-beta.14: Soporte para pegar archivos en el chat de IA"
description: "Nota de la versión v2.0.0-beta.14"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** Soporte para pegar archivos en el chat de IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) por @heziqiang

### 🚀 Mejoras

- **[cliente]**
  - Mejora del subformulario de muchos a muchos para inicializar con un elemento predeterminado y evitar crear registros cuando se deja vacío ([#8473](https://github.com/nocobase/nocobase/pull/8473)) por @katherinehhh

  - Mejora de los botones de carga y edición para campos de adjuntos en subtablas para guiar mejor al usuario a hacer clic en cargar. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) por @katherinehhh

- **[motor de flujo]** Mejora de ctx.libs en runjs para soportar carga bajo demanda, y se añaden librerías predefinidas: lodash, math y formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) por @gchust

- **[Manejador de errores]** Sanitización de errores de referencia SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) por @2013xile

- **[Flujo de trabajo: Aprobación]** Implementación de control de acceso para APIs para prevenir operaciones de datos no autorizadas por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregido el problema donde los popovers del editor de texto enriquecido quedaban ocultos ([#8443](https://github.com/nocobase/nocobase/pull/8443)) por @zhangzhonghe

  - Corregido el tiempo duplicado en el valor DateTime del filtro ([#8484](https://github.com/nocobase/nocobase/pull/8484)) por @zhangzhonghe

  - Corregido el campo nanoid que no se regeneraba después de enviar el formulario ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh

  - Corregido el mensaje de validación requerida duplicado al limpiar un campo en cascada ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh

  - Filtrado de lista para eliminar duplicados ([#8431](https://github.com/nocobase/nocobase/pull/8431)) por @jiannx

  - Corregido el problema donde el menú de configuración no se mostraba en Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) por @zhangzhonghe

- **[base de datos]**
  - corrección: actualización profunda de asociaciones anidadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos

  - corrección: actualización profunda de asociaciones anidadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos

- **[servidor]** Corregida la versión de `mathjs` en dependencias comunes ([#8475](https://github.com/nocobase/nocobase/pull/8475)) por @mytharcher

- **[motor de flujo]** Corregido un problema donde cerrar un popup incrustado causaba un error después de abrir consecutivamente la configuración de reglas de enlace y la configuración del flujo de eventos. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) por @gchust

- **[Fuente de datos: Principal]** Corregido un problema donde eliminar registros de un bloque de tabla de asociación muchos a muchos no respetaba la restricción `onDelete: 'restrict'` del campo de asociación ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile

- **[Gestor de tareas asíncronas]** Corregido el problema donde el flujo de trabajo activado por importación asíncrona se ejecutaba con retraso ([#8478](https://github.com/nocobase/nocobase/pull/8478)) por @mytharcher

- **[Bloque: iframe]** Corregido el error al añadir variables agregadas a Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe

- **[Plantillas de UI]** Corregido un problema donde los bloques de plantilla de referencia no podían establecer ámbitos de datos mediante la configuración del flujo de eventos. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) por @gchust

- **[Gestor de archivos]** Corregido el problema donde el nombre de archivo obtenido del cuerpo de la solicitud se convertía inesperadamente en una cadena decodificada ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher

- **[Acción: Importar registros Pro]** Corregido el problema donde el flujo de trabajo activado por importación asíncrona se ejecutaba con retraso por @mytharcher

- **[Flujo de trabajo: Webhook]** Corregido el problema donde faltaban datos del cuerpo cuando el análisis del cuerpo no estaba configurado por @mytharcher

- **[Impresión de plantillas]** Eliminados los botones de pie de página de la configuración de plantillas de impresión por @katherinehhh

- **[Flujo de trabajo: Aprobación]**
  - Corregido el problema donde devolver una aprobación al nodo anterior pero se devolvía al inicio por @mytharcher

  - Corregido el problema donde la concurrencia hacía que la ejecución se reanudara repetidamente por @mytharcher

  - Corregido el problema donde los campos no se mostraban en las tarjetas de tareas de aprobación por @zhangzhonghe
