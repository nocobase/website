---
title: "NocoBase v2.1.0-alpha.40: agregar comandos de creación y restauración de copias de seguridad"
description: "Nota de la versión v2.1.0-alpha.40"
---

### 🎉 Nuevas Funcionalidades

- **[cli]** Añadidos comandos de creación y restauración de copias de seguridad ([#9541](https://github.com/nocobase/nocobase/pull/9541)) por @chenos

- **[Gestor de copias de seguridad]** Plugin de gestor de copias de seguridad de código abierto ([#9550](https://github.com/nocobase/nocobase/pull/9550)) por @chenos

- **[Editor de temas]** El editor de temas ya está disponible en la interfaz v2 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) por @zhangzhonghe

- **[Autenticación de dos factores (2FA)]** TOTP y la autenticación de dos factores ahora se pueden vincular, verificar y configurar desde el cliente v2. por @Molunerfinn

### 🚀 Mejoras

- **[cli]** Mejora del flujo de autenticación de entorno ([#9546](https://github.com/nocobase/nocobase/pull/9546)) por @chenos

- **[flow-engine]** Los menús de configuración de campos V2 ahora admiten la búsqueda de campos ([#9489](https://github.com/nocobase/nocobase/pull/9489)) por @zhangzhonghe

- **[client]** Optimización de la configuración de visualización de botones de acción ([#9510](https://github.com/nocobase/nocobase/pull/9510)) por @katherinehhh

- **[undefined]**
  - Añadida revisión de seguridad de dependencias para pull requests ([#9523](https://github.com/nocobase/nocobase/pull/9523)) por @zhangzhonghe

  - Añadida revisión de seguridad de dependencias para pull requests por @zhangzhonghe

  - Añadida revisión de seguridad de dependencias para pull requests por @zhangzhonghe

- **[Verificación]** Añadido cliente v2 al plugin de Verificación (página de configuración de administración, entrada del centro de usuario, formularios OTP por SMS). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) por @Molunerfinn

- **[Autenticación]** La configuración de marca personalizada ahora funciona correctamente en el cliente v2 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) por @zhangzhonghe

- **[Bloque: Mapa]** Añadido soporte de cliente v2 para el plugin de mapa. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) por @jiannx

- **[Marca personalizada]** La configuración de marca personalizada ya está disponible en el cliente v2 por @zhangzhonghe

- **[IA: Base de conocimiento]** Habilitada la modificación del almacenamiento vectorial para bases de conocimiento de IA por @cgyrock

- **[Flujo de trabajo: Aprobación]** Añadida bandera `async` para la instrucción de aprobación, para adaptarse a la nueva API de creación de nodos en el lienzo del flujo de trabajo por @mytharcher

### 🐛 Corrección de Errores

- **[client]**
  - Corregida la carga en modo dev para plugins de almacenamiento integrados que dependen de exportaciones con nombre de plugins fuente locales. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) por @Molunerfinn

  - Corregido el problema por el cual los bloques v2 reducidos se volvían de ancho completo después de salir del modo de edición ([#9529](https://github.com/nocobase/nocobase/pull/9529)) por @zhangzhonghe

  - Corregida la limpieza de valores seleccionados cuando los campos de asociación dependientes cambian en el enlace de ámbito de datos ([#9551](https://github.com/nocobase/nocobase/pull/9551)) por @katherinehhh

  - Corregido el estado incorrecto del menú de campo JS en subformularios. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) por @gchust

- **[client-v2]** Corregido el registro inconsistente de dependencias dnd-kit. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) por @jiannx

- **[flow-engine]** Corregido el problema de selección múltiple para campos de fuente de datos externa en el formulario v2 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) por @katherinehhh

- **[Bloque: iframe]** Corregido el contenido de iframe que no ocupaba la altura configurada del bloque ([#9540](https://github.com/nocobase/nocobase/pull/9540)) por @katherinehhh

- **[Acción: Exportar registros]** Mejorado el rendimiento de la configuración de campos con muchos campos de asociación ([#9524](https://github.com/nocobase/nocobase/pull/9524)) por @katherinehhh

- **[Empleados IA]**
  - Corregido error al acceder a una base de conocimiento de solo lectura por parte de un empleado IA ([#9539](https://github.com/nocobase/nocobase/pull/9539)) por @cgyrock

  - Corregido error al acceder a una base de conocimiento de solo lectura por parte de un empleado IA ([#9538](https://github.com/nocobase/nocobase/pull/9538)) por @cgyrock

  - Corregido que las tarjetas de llamada a herramientas de IA no aparecieran inmediatamente cuando los eventos de herramienta transmitidos se dividen ([#9534](https://github.com/nocobase/nocobase/pull/9534)) por @2013xile

- **[Localización]** Corregidas las traducciones de referencia de localización integrada para tareas de traducción de IA ([#9531](https://github.com/nocobase/nocobase/pull/9531)) por @2013xile

- **[Acción: Actualización masiva]** Corregido el estado de carga de la acción de actualización masiva que se reinicia después de un fallo de actualización ([#9509](https://github.com/nocobase/nocobase/pull/9509)) por @katherinehhh

- **[Flujo de trabajo]** Añadido estado de carga para la ejecución manual del flujo de trabajo. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) por @mytharcher

- **[Gestor de migraciones]** Corregidos fallos en la creación de archivos de migración al usar OceanBase por @2013xile

- **[Almacenamiento de archivos: S3(Pro)]** Corregida la gestión del endpoint de S3 Pro para que las subidas al servidor y las vistas previas de URL no dupliquen el host del bucket. por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corregidos índices de registro de aprobación duplicados cuando ocurren delegaciones concurrentemente en el mismo trabajo de aprobación. por @mytharcher
