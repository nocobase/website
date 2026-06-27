---
title: "NocoBase v1.6.0-alpha.29: soporte para configuración de permisos de acciones"
description: "Nota de la versión v1.6.0-alpha.29"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para configuración de permisos en acciones ([#6254](https://github.com/nocobase/nocobase/pull/6254)) por @katherinehhh

- **[Bloque: plantilla]** Añadido el plugin `Bloque: plantilla`, que proporciona soporte de plantillas para bloques basado en un mecanismo de herencia. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) por @gchust

- **[Flujo de trabajo: evento de acción personalizada]** La acción de activar flujo de trabajo ahora soporta control de acceso por @katherinehhh

### 🚀 Mejoras

- **[cliente]**
  - Actualización de las definiciones de tipos de React ([#6278](https://github.com/nocobase/nocobase/pull/6278)) por @gchust

  - Expansión y mejora del centro personal del usuario ([#6213](https://github.com/nocobase/nocobase/pull/6213)) por @katherinehhh

- **[Gestor de archivos]**
  - Aumento de la longitud de la URL a 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) por @mytharcher

  - Añadido código backend para generar la URL de vista previa de archivos ([#6281](https://github.com/nocobase/nocobase/pull/6281)) por @jiannx

  - Los nombres de archivo durante la subida cambiarán de aleatorios al nombre original con un sufijo aleatorio. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) por @chenos

  - Añadido código backend para generar la URL de vista previa de archivos ([#6223](https://github.com/nocobase/nocobase/pull/6223)) por @jiannx

  - Cambio de la API de tipo de almacenamiento y adición de API de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher

  - Cambio de la API de tipo de almacenamiento y adición de API de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher

- **[Bloque: Panel de acciones]** Optimización de estilos móviles ([#6270](https://github.com/nocobase/nocobase/pull/6270)) por @zhangzhonghe

- **[Flujo de trabajo]** Ocultar el ID del nodo en la tarjeta del nodo dentro del lienzo del flujo de trabajo ([#6251](https://github.com/nocobase/nocobase/pull/6251)) por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]**
  - Ajuste de la API de almacenamiento basado en el repositorio principal por @mytharcher

  - Soporte para la configuración de la opción thumbnailRule por @jiannx

- **[Gestor de copias de seguridad]** Permitir restaurar una copia de seguridad en una aplicación incluso si le faltan algunos plugins por @gchust

### 🐛 Corrección de Errores

- **[devtools]** Asegurar que la cabecera X-Forwarded-For se establece solo si req.ip no es undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) por @sheldon66

- **[cliente]**
  - Posición incorrecta después de arrastrar el menú ([#6315](https://github.com/nocobase/nocobase/pull/6315)) por @zhangzhonghe

  - Error al crear un bloque de comentarios sin una colección de comentarios ([#6309](https://github.com/nocobase/nocobase/pull/6309)) por @katherinehhh

  - Ocurre un error al hacer clic en un nodo de bloque de árbol ([#6314](https://github.com/nocobase/nocobase/pull/6314)) por @zhangzhonghe

  - Después de hacer clic en el menú izquierdo, la subpágina se cierra de forma anómala ([#6305](https://github.com/nocobase/nocobase/pull/6305)) por @zhangzhonghe

  - No limpiar el valor del campo cuando el valor de la expresión está vacío ([#6300](https://github.com/nocobase/nocobase/pull/6300)) por @zhangzhonghe

  - El componente de campo de texto enriquecido no se puede limpiar por completo ([#6287](https://github.com/nocobase/nocobase/pull/6287)) por @katherinehhh

  - No se puede mover la página a un grupo ([#6289](https://github.com/nocobase/nocobase/pull/6289)) por @zhangzhonghe

  - Omitir error de autenticación para CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) por @sheldon66

  - Corregir archivo subido perdido cuando se sube uno a uno ([#6260](https://github.com/nocobase/nocobase/pull/6260)) por @mytharcher

  - Corregido el carácter de etiqueta html en el campo de entrada del formulario de configuración del canal de correo. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) por @sheldon66

  - Corregir archivos perdidos después de la subida ([#6247](https://github.com/nocobase/nocobase/pull/6247)) por @mytharcher

  - Discrepancia de formato del selector en el campo de formulario de filtro ([#6234](https://github.com/nocobase/nocobase/pull/6234)) por @katherinehhh

  - Mostrar el componente `<Variable.TextArea />` correctamente en modo deshabilitado ([#6197](https://github.com/nocobase/nocobase/pull/6197)) por @mytharcher

- **[create-nocobase-app]** Ocurre un error en el cliente web después de ejecutar `create-nocobase-app` seguido de `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) por @gchust

- **[auth]** Omitir la comprobación de autenticación del usuario cuando el token es una clave API ([#6291](https://github.com/nocobase/nocobase/pull/6291)) por @sheldon66

- **[cli]** Mejora de la lógica interna del comando de actualización de nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) por @chenos

- **[Gestor de archivos]**
  - Corregir migración para colecciones heredadas ([#6310](https://github.com/nocobase/nocobase/pull/6310)) por @mytharcher

  - Corregir migración y añadir casos de prueba ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher

  - Corregir migración y añadir casos de prueba ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher

  - Corregir el tipo de columna `path` de la colección de archivos ([#6294](https://github.com/nocobase/nocobase/pull/6294)) por @mytharcher

  - Actualizar la versión del SDK de AWS para corregir el error de subida de MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) por @mytharcher

- **[Bloque: plantilla]** Requerir inicio de sesión al acceder a un formulario público ([#6258](https://github.com/nocobase/nocobase/pull/6258)) por @gchust

- **[Control de acceso]** Registros de datos incorrectos al usar campos muchos a muchos como ámbito de datos en permisos de colección ([#6304](https://github.com/nocobase/nocobase/pull/6304)) por @2013xile

- **[Bloque: Kanban]** Filtrado de datos incorrecto en el bloque Kanban emergente usando variables de registro emergente ([#6290](https://github.com/nocobase/nocobase/pull/6290)) por @katherinehhh

- **[Campo de colección: Secuencia]** Corregir que el campo de secuencia no se deshabilita en modo de solo lectura ([#6274](https://github.com/nocobase/nocobase/pull/6274)) por @mytharcher

- **[Flujo de trabajo: kit de pruebas]** Corregir casos de prueba E2E basados en nuevas funcionalidades ([#6296](https://github.com/nocobase/nocobase/pull/6296)) por @mytharcher

- **[Formularios públicos]** Omitir comprobación de autenticación en el formulario público ([#6284](https://github.com/nocobase/nocobase/pull/6284)) por @chenos

- **[Autenticación]** Eliminar el envoltorio NavigateIfNotSignIn innecesario de AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) por @sheldon66

- **[Flujo de trabajo]**
  - Corregir detalles de estilo en el lienzo del flujo de trabajo ([#6240](https://github.com/nocobase/nocobase/pull/6240)) por @mytharcher

  - Soporte para activar el flujo de trabajo al cambiar la contraseña ([#6248](https://github.com/nocobase/nocobase/pull/6248)) por @mytharcher

- **[Flujo de trabajo: evento de acción personalizada]**
  - Corregir error de compilación por @mytharcher

  - Corregir casos de prueba E2E por @mytharcher

  - Corregir el inicializador del flujo de trabajo de activación por @mytharcher

  - Corregir error de compilación por @mytharcher

- **[Flujo de trabajo: evento previo a la acción]** Corregir mensaje de error del nodo de mensaje de respuesta no mostrado por @mytharcher

- **[Flujo de trabajo: JavaScript]** Soporte para requerir módulos de NocoBase por @mytharcher

- **[Gestor de correo electrónico]** Hacer pública la colección mailmessage y corregir pérdida de datos en modal por @jiannx

- **[Almacenamiento de archivos: S3(Pro)]**
  - Actualizar la versión del SDK de AWS para corregir el error de subida de MinIO. por @mytharcher

  - Establecer el valor predeterminado de forcePathStyleForAccess a virtual por @jiannx

- **[Bloque: formulario multipaso]** Error de orden de elementos después de arrastrar por @jiannx

- **[Bloque: Árbol]** Ocurre un error al hacer clic en un nodo de bloque de árbol por @zhangzhonghe

- **[Gestor de copias de seguridad]** El icono de eliminar del diálogo de operación de restaurar desde local no funciona por @gchust

- **[Flujo de trabajo: Aprobación]**
  - Corregir migración no ejecutada debido al número de versión por @mytharcher

  - Corregir casos de prueba E2E basados en nuevas funcionalidades por @mytharcher
