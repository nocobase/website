---
title: "NocoBase v1.6.0-alpha.30: el campo de hora admite formato de hora"
description: "Nota de la versión v1.6.0-alpha.30"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - Añadir configuración de tooltip a elementos del menú y encabezados de tabla ([#6346](https://github.com/nocobase/nocobase/pull/6346)) por @Cyx649312038

  - El campo de hora admite formato de hora ([#6329](https://github.com/nocobase/nocobase/pull/6329)) por @katherinehhh

- **[Visualización de datos]** Soporte para ordenación NULLS en consultas de gráficos ([#6383](https://github.com/nocobase/nocobase/pull/6383)) por @2013xile

- **[Integración de IA]** Nuevo plugin: Integración de IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) por @2013xile
Referencia: [Integración de IA](https://docs.nocobase.com/handbook/ai/service)
- **[Verificación]** Soporte para que el usuario vincule varios tipos de verificación, como SMS y autenticadores TOTP, y verificación de identidad en escenarios requeridos. Habilita el desarrollo y la extensión de métodos de verificación. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) por @2013xile
Referencia: [Verificación](https://docs.nocobase.com/handbook/verification)
- **[Integración de IA (EE)]** Nuevo plugin: Integración de IA (EE) por @2013xile
Referencia: [Integración de IA](https://docs.nocobase.com/handbook/ai/service)
- **[Autenticación de dos factores (2FA)]** Nuevos plugins: Autenticación de dos factores y Verificación: Autenticador TOTP por @2013xile
Referencia: [Autenticación de dos factores (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verificación: Autenticador TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Mejoras

- **[cliente]**
  - Añadir manejo de debounce a los botones ([#6351](https://github.com/nocobase/nocobase/pull/6351)) por @Cyx649312038

  - Hacer que el menú sea responsive al ancho de la pantalla ([#6331](https://github.com/nocobase/nocobase/pull/6331)) por @zhangzhonghe

- **[servidor]** Actualizar koa a 2.15.4; actualizar @koa/cors a 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) por @2013xile

- **[Flujo de trabajo]**
  - Permitir omitir el disparo del flujo de trabajo de la colección en eventos de base de datos ([#6379](https://github.com/nocobase/nocobase/pull/6379)) por @mytharcher

  - Carga diferida del resultado del trabajo para un mejor rendimiento ([#6344](https://github.com/nocobase/nocobase/pull/6344)) por @mytharcher

- **[Bloque: plantilla]** Soporte para guardar bloque de datos como plantilla de bloque desde la página ([#6348](https://github.com/nocobase/nocobase/pull/6348)) por @gchust

- **[Flujo de trabajo: Nodo agregado]** Añadir proceso de redondeo para números agregados basados en tipo double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) por @mytharcher

- **[Acción: Importar registros Pro]** soporte de opciones avanzadas en el botón de importación Pro por @katherinehhh

- **[Flujo de trabajo: JavaScript]** Soporte para requerir paquete desde ruta absoluta por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]** intentar recargar almacenamientos si no se encuentra el almacenamiento por @jiannx

### 🐛 Corrección de Errores

- **[cliente]**
  - La traducción personalizada del título del menú no es válida ([#6377](https://github.com/nocobase/nocobase/pull/6377)) por @zhangzhonghe

  - Falta la configuración de ordenación para los campos de colección heredados ([#6372](https://github.com/nocobase/nocobase/pull/6372)) por @katherinehhh

  - Formato incorrecto del campo de hora en el formulario de filtro ([#6374](https://github.com/nocobase/nocobase/pull/6374)) por @katherinehhh

  - Problema relacionado con la zona horaria que causa una hora menos en el selector de fecha ([#6359](https://github.com/nocobase/nocobase/pull/6359)) por @katherinehhh

  - El menú desplegable de configuración de almacenamiento del campo de archivo adjunto no muestra opciones ([#6365](https://github.com/nocobase/nocobase/pull/6365)) por @katherinehhh

  - Los componentes del subformulario no se alinean con el formulario principal cuando la etiqueta está oculta ([#6357](https://github.com/nocobase/nocobase/pull/6357)) por @katherinehhh

  - Corregir error al crear una colección de archivos ([#6363](https://github.com/nocobase/nocobase/pull/6363)) por @mytharcher

  - Resolver problema de barra de desplazamiento al abrir una pestaña de página con un bloque de altura completa ([#6347](https://github.com/nocobase/nocobase/pull/6347)) por @katherinehhh

  - Las páginas con favicon personalizado muestran brevemente el favicon de NocoBase durante la carga ([#6337](https://github.com/nocobase/nocobase/pull/6337)) por @zhangzhonghe

  - El bloque de asociación no se renderiza en la ventana emergente dentro de la herencia de colección ([#6303](https://github.com/nocobase/nocobase/pull/6303)) por @katherinehhh

  - El botón "añadir nuevo" aparece al pasar el ratón en el modo de solo lectura del campo de asociación ([#6322](https://github.com/nocobase/nocobase/pull/6322)) por @katherinehhh

- **[auth]** Evitar renovar el token durante la autorización WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) por @sheldon66

- **[base de datos]** Corregir error al recuperar registros de colección de relación si la clave de origen en los campos de relación es una cadena numérica ([#6360](https://github.com/nocobase/nocobase/pull/6360)) por @2013xile

- **[cliente WEB]**
  - Después de añadir una página a la tabla de rutas, la página aparece en blanco ([#6366](https://github.com/nocobase/nocobase/pull/6366)) por @zhangzhonghe

  - Añadir pestañas de página en la tabla de gestión de rutas no tiene efecto ([#6362](https://github.com/nocobase/nocobase/pull/6362)) por @zhangzhonghe

- **[Control de acceso]** En la tabla de gestión de permisos, el nombre de la pestaña de página está vacío ([#6364](https://github.com/nocobase/nocobase/pull/6364)) por @zhangzhonghe

- **[Usuarios]**
  - Error "Sin permisos" cuando los usuarios sin permisos de gestión de usuarios ven su propio perfil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) por @2013xile

  - Error "Sin permisos" al actualizar la configuración del sistema en la gestión de usuarios ([#6380](https://github.com/nocobase/nocobase/pull/6380)) por @2013xile

  - Una interfaz de usuario de error parpadea brevemente cuando la tabla de gestión de permisos de usuario se carga por primera vez ([#6324](https://github.com/nocobase/nocobase/pull/6324)) por @zhangzhonghe

- **[Integración de IA]** Problema donde el `baseURL` predeterminado para el proveedor LLM es `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) por @2013xile

- **[Flujo de trabajo]** Corregir acl para obtener trabajo ([#6352](https://github.com/nocobase/nocobase/pull/6352)) por @mytharcher

- **[Bloque: Mapa]** Faltan o no son visibles los ajustes de configuración para el campo de mapa ([#6336](https://github.com/nocobase/nocobase/pull/6336)) por @zhangzhonghe

- **[Móvil]** Error de página: No se pueden leer propiedades de null (leyendo 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) por @zhangzhonghe

- **[Bloque: Panel de acciones]** Establecer la altura del panel de acciones no es válido ([#6321](https://github.com/nocobase/nocobase/pull/6321)) por @zhangzhonghe

- **[Flujo de trabajo: Evento de acción personalizada]**
  - Corregir locale y colección modificable después de la ejecución por @mytharcher

  - Corregir migración para botones heredados vinculados con flujo de trabajo de acción personalizada por @mytharcher

- **[Marca personalizada]** Las páginas con favicon personalizado muestran brevemente el favicon de NocoBase durante la carga por @zhangzhonghe

- **[Acción: Importar registros Pro]**
  - Usar opción adicional para determinar si se debe disparar el flujo de trabajo o no por @mytharcher

  - El botón de importación del bloque de asociación para la detección de registros duplicados no muestra datos en el menú desplegable del campo por @katherinehhh

- **[Acción: Exportar registros Pro]**
  - La acción de exportación Pro carece de parámetros de ordenación por @katherinehhh

  - Eliminar la opción 'añadir bloque' en la configuración del botón de exportación de archivos adjuntos por @katherinehhh

- **[Impresión de plantilla]** La restauración desde local fallaba cuando los plugins de impresión de plantilla de acción y gestor de copias de seguridad estaban ambos habilitados por @gchust

- **[Flujo de trabajo: Aprobación]**
  - Corregir migración para bloques heredados por @mytharcher

  - Corregir error causado por `.toJSON()` por @mytharcher
