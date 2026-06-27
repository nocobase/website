---
title: "NocoBase v2.1.0-beta.36: El editor de temas ya está disponible en la interfaz v2"
description: "Nota de la versión v2.1.0-beta.36"
---

### 🎉 Nuevas Funcionalidades

- **[cli]** añadidos comandos de creación y restauración de copias de seguridad ([#9541](https://github.com/nocobase/nocobase/pull/9541)) por @chenos
- **[Gestor de copias de seguridad]** plugin de gestor de copias de seguridad de código abierto ([#9550](https://github.com/nocobase/nocobase/pull/9550)) por @chenos
- **[Editor de temas]** El editor de temas ya está disponible en la interfaz v2 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) por @zhangzhonghe
- **[Autenticación de dos factores (2FA)]** Ahora se pueden vincular, verificar y configurar TOTP y la autenticación de dos factores desde el cliente v2. por @Molunerfinn

### 🚀 Mejoras

- **[cliente]** optimizada la configuración de visualización de botones de acción ([#9510](https://github.com/nocobase/nocobase/pull/9510)) por @katherinehhh
- **[motor de flujo]** Los menús de configuración de campos en V2 ahora permiten buscar campos ([#9489](https://github.com/nocobase/nocobase/pull/9489)) por @zhangzhonghe
- **[cli]** mejorado el flujo de autenticación de entorno ([#9546](https://github.com/nocobase/nocobase/pull/9546)) por @chenos
- **[sin definir]**

  - Añadida revisión de seguridad de dependencias para solicitudes pull ([#9523](https://github.com/nocobase/nocobase/pull/9523)) por @zhangzhonghe
- **[Verificación]** Añadido cliente v2 al plugin de Verificación (página de configuración de administración, entrada del centro de usuario, formularios OTP por SMS). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) por @Molunerfinn
- **[Autenticación]** La configuración de marca personalizada ahora funciona correctamente en el cliente v2 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) por @zhangzhonghe
- **[Bloque: Mapa]** Añadido soporte de cliente v2 para el plugin de mapa. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) por @jiannx
- **[Marca personalizada]** La configuración de marca personalizada ya está disponible en el cliente v2 por @zhangzhonghe
- **[IA: Base de conocimiento]** Habilitada la modificación del almacenamiento vectorial para bases de conocimiento de IA por @cgyrock
- **[Flujo de trabajo: Aprobación]** Añadido el indicador `async` para la instrucción de aprobación, para adaptarse a la nueva API de creación de nodos en el lienzo de flujo de trabajo por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**

  - corregido el problema de limpiar valores seleccionados cuando cambian los campos de asociación dependientes en el enlace de ámbito de datos ([#9551](https://github.com/nocobase/nocobase/pull/9551)) por @katherinehhh
  - Corregida la carga en modo dev para plugins de almacenamiento integrados que dependen de exportaciones nombradas de plugins fuente locales. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) por @Molunerfinn
  - Corregido el estado incorrecto del menú de campo JS en subformularios. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) por @gchust
  - Corregido el problema por el cual los bloques v2 reducidos se volvían de ancho completo al salir del modo de edición ([#9529](https://github.com/nocobase/nocobase/pull/9529)) por @zhangzhonghe
- **[cliente-v2]** Corregido el registro inconsistente de dependencias dnd-kit. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) por @jiannx
- **[motor de flujo]** corregido el problema de selección múltiple para campos de fuentes de datos externas en el formulario v2 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) por @katherinehhh
- **[Bloque: iframe]** corregido el problema de que el contenido del iframe no llenaba la altura configurada del bloque ([#9540](https://github.com/nocobase/nocobase/pull/9540)) por @katherinehhh
- **[Empleados de IA]**

  - Corregido el error al acceder a una base de conocimiento de solo lectura por parte de un empleado de IA ([#9539](https://github.com/nocobase/nocobase/pull/9539)) por @cgyrock
  - Corregido el problema de que las tarjetas de llamada a herramientas de IA no aparecían inmediatamente cuando los eventos de herramientas transmitidos se dividían ([#9534](https://github.com/nocobase/nocobase/pull/9534)) por @2013xile
  - Corregido el error al acceder a una base de conocimiento de solo lectura por parte de un empleado de IA ([#9538](https://github.com/nocobase/nocobase/pull/9538)) por @cgyrock
- **[Acción: Exportar registros]** mejorado el rendimiento de la configuración de campos con muchos campos de asociación ([#9524](https://github.com/nocobase/nocobase/pull/9524)) por @katherinehhh
- **[Acción: Actualización masiva]** corregido el estado de carga de la acción de actualización masiva después de un fallo en la actualización ([#9509](https://github.com/nocobase/nocobase/pull/9509)) por @katherinehhh
- **[Flujo de trabajo]** Añadido estado de carga para la ejecución manual del flujo de trabajo. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) por @mytharcher
- **[Localización]** Corregidas las traducciones de referencia de localización integradas para tareas de traducción con IA ([#9531](https://github.com/nocobase/nocobase/pull/9531)) por @2013xile
- **[Gestor de migraciones]** Corregidos los fallos en la creación de archivos de migración al usar OceanBase por @2013xile
- **[Almacenamiento de archivos: S3(Pro)]** Corregida la gestión del endpoint de S3 Pro para que las subidas al servidor y las vistas previas de URL no dupliquen el host del bucket. por @mytharcher
