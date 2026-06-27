---
title: "Actualizaciones semanales de NocoBase: Autenticación de dos factores (2FA)"
description: "Las actualizaciones de esta semana incluyen: compatibilidad con configuraciones históricas de control de acceso de botones, plugin de integración de IA y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Esta semana lanzamos [NocoBase 1.6.0](https://www.nocobase.com/en/blog/nocobase-1-6-0), que trae despliegue en modo clúster, optimización de políticas de seguridad, optimizaciones del núcleo del Migration Manager y muchas otras funciones nuevas.**

**NocoBase se actualiza actualmente con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones aún más. Ideal para usuarios de prueba que quieren experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.21](https://www.nocobase.com/en/blog/v1.5.21)

*Fecha de lanzamiento: 2025-03-05*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Carga diferida del resultado del trabajo para mejor rendimiento ([#6344](https://github.com/nocobase/nocobase/pull/6344)) por @mytharcher
- **[Flujo de trabajo: Nodo agregado]** Añadir proceso de redondeo para número agregado basado en tipo doble ([#6358](https://github.com/nocobase/nocobase/pull/6358)) por @mytharcher

#### 🐛 Correcciones de errores

- **[cliente]**

  - Componentes de subformulario no alineados con el formulario principal cuando la etiqueta está oculta ([#6357](https://github.com/nocobase/nocobase/pull/6357)) por @katherinehhh
  - Bloque de asociación no renderizado en ventana emergente dentro de herencia de colección ([#6303](https://github.com/nocobase/nocobase/pull/6303)) por @katherinehhh
  - Corregir error lanzado al crear colección de archivos ([#6363](https://github.com/nocobase/nocobase/pull/6363)) por @mytharcher
- **[Flujo de trabajo]** Corregir acl para obtener trabajo ([#6352](https://github.com/nocobase/nocobase/pull/6352)) por @mytharcher

### [v1.5.22](https://www.nocobase.com/en/blog/v1.5.22)

*Fecha de lanzamiento: 2025-03-06*

#### 🚀 Mejoras

- **[cliente]** Añadir manejo de rebote a los botones ([#6351](https://github.com/nocobase/nocobase/pull/6351)) por @Cyx649312038

#### 🐛 Correcciones de errores

- **[base de datos]** Corregir error al recuperar registros de colección de relación si la clave de origen en los campos de relación es una cadena numérica ([#6360](https://github.com/nocobase/nocobase/pull/6360)) por @2013xile

### [v1.5.23](https://www.nocobase.com/en/blog/v1.5.23)

*Fecha de lanzamiento: 2025-03-06*

#### 🐛 Correcciones de errores

- **[cliente]**
  - Problema relacionado con la zona horaria que causa una hora menos en el selector de fecha ([#6359](https://github.com/nocobase/nocobase/pull/6359)) por @katherinehhh
  - Falta la configuración de ordenación para campos de colección heredados ([#6372](https://github.com/nocobase/nocobase/pull/6372)) por @katherinehhh

### [v1.5.24](https://www.nocobase.com/en/blog/v1.5.24)

*Fecha de lanzamiento: 2025-03-07*

#### 🎉 Nuevas funciones

- **[Visualización de datos]** Soporte para ordenación NULLS en consultas de gráficos ([#6383](https://github.com/nocobase/nocobase/pull/6383)) por @2013xile

#### 🚀 Mejoras

- **[Flujo de trabajo]** Permitir omitir el disparo del flujo de trabajo de colección en evento de base de datos ([#6379](https://github.com/nocobase/nocobase/pull/6379)) por @mytharcher

#### 🐛 Correcciones de errores

- **[Acción: Importar registros Pro]** Usar opción adicional para determinar si disparar flujo de trabajo o no por @mytharcher
- **[Acción: Exportar registros Pro]** Falta parámetros de ordenación en acción de exportación Pro por @katherinehhh

### [v1.5.25](https://www.nocobase.com/en/blog/v1.5.25)

*Fecha de lanzamiento: 2025-03-09*

#### 🐛 Correcciones de errores

- **[servidor]** Caché de navegador incorrecta después de ejecutar el comando `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) por @gchust
- **[Flujo de trabajo: Aprobación]** Evitar que la configuración de asignatarios incorrectos consulte a todos los usuarios por @mytharcher
- **[WeCom]** corregir enlace de aviso de inicio de sesión y error de inicio de sesión de DingTalk por @chenzhizdt

### [v1.6.1](https://www.nocobase.com/en/blog/v1.6.1)

*Fecha de lanzamiento: 2025-03-11*

#### 🐛 Correcciones de errores

- **[cliente]**

  - Al usar el operador '$anyOf', la regla de vinculación no es válida ([#6415](https://github.com/nocobase/nocobase/pull/6415)) por @zhangzhonghe
  - Datos no actualizados en ventanas emergentes abiertas mediante botones de enlace ([#6411](https://github.com/nocobase/nocobase/pull/6411)) por @zhangzhonghe
  - Cambios en el valor del campo de selección múltiple y pérdida de opciones al eliminar registros de subtabla ([#6405](https://github.com/nocobase/nocobase/pull/6405)) por @katherinehhh
- **[Notificación: Mensaje en la aplicación]** Diferenciar el color de fondo de la lista de mensajes en la aplicación de las tarjetas de mensaje para mejorar la jerarquía visual y la legibilidad. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) por @sheldon66

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.17](https://www.nocobase.com/en/blog/v1.6.0-beta.17)

*Fecha de lanzamiento: 2025-03-07*

#### 🎉 Nuevas funciones

- **[cliente]** Añadir configuración de tooltip a elementos de menú y encabezados de tabla ([#6346](https://github.com/nocobase/nocobase/pull/6346)) por @Cyx649312038
- **[Visualización de datos]** Soporte para ordenación NULLS en consultas de gráficos ([#6383](https://github.com/nocobase/nocobase/pull/6383)) por @2013xile
- **[Integración de IA]** Nuevo plugin: Integración de IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) por @2013xile
  Referencia: [Integración de IA](https://docs.nocobase.com/handbook/ai/service)
- **[Integración de IA (EE)]** Nuevo plugin: Integración de IA (EE) por @2013xile
  Referencia: [Integración de IA](https://docs.nocobase.com/handbook/ai/service)

#### 🚀 Mejoras

- **[cliente]**

  - Añadir manejo de rebote a los botones ([#6351](https://github.com/nocobase/nocobase/pull/6351)) por @Cyx649312038
  - Hacer que el menú sea responsive al ancho de la pantalla ([#6331](https://github.com/nocobase/nocobase/pull/6331)) por @zhangzhonghe
- **[Flujo de trabajo]** Permitir omitir el disparo del flujo de trabajo de colección en evento de base de datos ([#6379](https://github.com/nocobase/nocobase/pull/6379)) por @mytharcher
- **[Flujo de trabajo: Nodo agregado]** Añadir proceso de redondeo para número agregado basado en tipo doble ([#6358](https://github.com/nocobase/nocobase/pull/6358)) por @mytharcher
- **[Acción: Importar registros Pro]** soportar opciones avanzadas en el botón de importación Pro por @katherinehhh
- **[Flujo de trabajo: JavaScript]** Soporte para requerir paquete desde ruta absoluta por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]** intentar recargar almacenamientos si no se encuentra el almacenamiento por @jiannx

#### 🐛 Correcciones de errores

- **[cliente]**

  - La traducción personalizada del título del menú no es válida ([#6377](https://github.com/nocobase/nocobase/pull/6377)) por @zhangzhonghe
  - Problema relacionado con la zona horaria que causa una hora menos en el selector de fecha ([#6359](https://github.com/nocobase/nocobase/pull/6359)) por @katherinehhh
  - Falta la configuración de ordenación para campos de colección heredados ([#6372](https://github.com/nocobase/nocobase/pull/6372)) por @katherinehhh
  - El menú desplegable de configuración de almacenamiento del campo de adjuntos no muestra opciones ([#6365](https://github.com/nocobase/nocobase/pull/6365)) por @katherinehhh
  - Componentes de subformulario no alineados con el formulario principal cuando la etiqueta está oculta ([#6357](https://github.com/nocobase/nocobase/pull/6357)) por @katherinehhh
  - Bloque de asociación no renderizado en ventana emergente dentro de herencia de colección ([#6303](https://github.com/nocobase/nocobase/pull/6303)) por @katherinehhh
  - Resolver problema de barra de desplazamiento al abrir pestaña de página con bloque de altura completa ([#6347](https://github.com/nocobase/nocobase/pull/6347)) por @katherinehhh
  - Corregir error lanzado al crear colección de archivos ([#6363](https://github.com/nocobase/nocobase/pull/6363)) por @mytharcher
- **[base de datos]** Corregir error al recuperar registros de colección de relación si la clave de origen en los campos de relación es una cadena numérica ([#6360](https://github.com/nocobase/nocobase/pull/6360)) por @2013xile
- **[cliente WEB]**

  - Agregar pestañas de página en la tabla de gestión de rutas no tiene efecto ([#6362](https://github.com/nocobase/nocobase/pull/6362)) por @zhangzhonghe
  - Después de agregar una página a la tabla de rutas, la página aparece en blanco ([#6366](https://github.com/nocobase/nocobase/pull/6366)) por @zhangzhonghe
- **[Usuarios]**

  - Error "Sin permisos" cuando usuarios sin permisos de gestión de usuarios ven su propio perfil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) por @2013xile
  - Error "Sin permisos" al actualizar la configuración del sistema en la gestión de usuarios ([#6380](https://github.com/nocobase/nocobase/pull/6380)) por @2013xile
- **[Control de acceso]** En la tabla de gestión de permisos, el nombre de la pestaña de página está vacío ([#6364](https://github.com/nocobase/nocobase/pull/6364)) por @zhangzhonghe
- **[Integración de IA]** Problema donde el `baseURL` predeterminado para el proveedor LLM es `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) por @2013xile
- **[Flujo de trabajo]** Corregir acl para obtener trabajo ([#6352](https://github.com/nocobase/nocobase/pull/6352)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir locale y colección modificable después de ejecutarse por @mytharcher
- **[Acción: Importar registros Pro]** Usar opción adicional para determinar si disparar flujo de trabajo o no por @mytharcher
- **[Acción: Exportar registros Pro]** Falta parámetros de ordenación en acción de exportación Pro por @katherinehhh

### [v1.6.0-beta.18](https://www.nocobase.com/en/blog/v1.6.0-beta.18)

*Fecha de lanzamiento: 2025-03-10*

#### 🚀 Mejoras

- **[Auth: Claves API]** Añadir prueba de configuración de seguridad de token para autenticación de clave API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) por @sheldon66

#### 🐛 Correcciones de errores

- **[servidor]** Caché de navegador incorrecta después de ejecutar el comando `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) por @gchust
- **[auth]** Manejar usuario inexistente con error 401 y actualizar mensajes locale ([#6381](https://github.com/nocobase/nocobase/pull/6381)) por @sheldon66
- **[cliente WEB]** La página está en blanco después de cambiar de rol ([#6388](https://github.com/nocobase/nocobase/pull/6388)) por @aaaaaajie
- **[Editor de temas]** el cambio de tema falla después de múltiples cambios consecutivos ([#6387](https://github.com/nocobase/nocobase/pull/6387)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Corregir parámetro de orden al añadir asignatario por @mytharcher
  - Evitar que la configuración de asignatarios incorrectos consulte a todos los usuarios por @mytharcher
- **[WeCom]** corregir enlace de aviso de inicio de sesión y error de inicio de sesión de DingTalk por @chenzhizdt

### [v1.7.0-beta.1](https://www.nocobase.com/en/blog/v1.7.0-beta.1)

*Fecha de lanzamiento: 2025-03-11*

#### 🎉 Nuevas funciones

- **[cliente]** compatible con configuraciones históricas de control de acceso de botones ([#6376](https://github.com/nocobase/nocobase/pull/6376)) por @katherinehhh
- **[Flujo de trabajo: Evento posterior a la acción]** Soporte para usar nodo final para determinar el estado ([#6399](https://github.com/nocobase/nocobase/pull/6399)) por @mytharcher
- **[Flujo de trabajo: Mensaje de respuesta]** Soporte para ser usado en disparador de acción por @mytharcher

#### 🚀 Mejoras

- **[Flujo de trabajo]** Corregir API 401 cuando no se ha iniciado sesión ([#6412](https://github.com/nocobase/nocobase/pull/6412)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Ajustar UI del centro de tareas del flujo de trabajo ([#6272](https://github.com/nocobase/nocobase/pull/6272)) por @mytharcher
- **[Gestor de correo electrónico]** Usar la misma estructura de elemento y estilo global para el botón de la barra de herramientas por @mytharcher
- **[Flujo de trabajo: Aprobación]** Ajustar UI del centro de tareas por @mytharcher

#### 🐛 Correcciones de errores

- **[cliente]**

  - No se puede mover la página a un grupo ([#6413](https://github.com/nocobase/nocobase/pull/6413)) por @zhangzhonghe
  - Los menús de nivel profundo no muestran el icono ([#6410](https://github.com/nocobase/nocobase/pull/6410)) por @zhangzhonghe
  - Problema de contexto de tema en FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) por @katherinehhh
- **[Flujo de trabajo: Nodo manual]** Evitar conflicto en clave única ([#6407](https://github.com/nocobase/nocobase/pull/6407)) por @mytharcher
- **[Gestor de fuentes de datos]** error al editar campos en fuente de datos externa ([#6402](https://github.com/nocobase/nocobase/pull/6402)) por @katherinehhh
- **[Autenticación]** El usuario sin roles debe redirigir a la página de mensaje de error. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) por @sheldon66
- **[Flujo de trabajo: Evento de acción personalizada]** falta la configuración de regla de vinculación para el botón 'Disparar flujo de trabajo' por @katherinehhh
- **[Gestor de copias de seguridad]** Faltan datos de clave de cifrado durante la restauración de la copia de seguridad por @gchust
- **[Flujo de trabajo: Aprobación]** Evitar conflicto en clave única por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.30](https://www.nocobase.com/en/blog/v1.6.0-alpha.30)

*Fecha de lanzamiento: 2025-03-07*

#### 🎉 Nuevas funciones

- **[cliente]**

  - Añadir configuración de tooltip a elementos de menú y encabezados de tabla ([#6346](https://github.com/nocobase/nocobase/pull/6346)) por @Cyx649312038
  - El campo de hora soporta formato de hora ([#6329](https://github.com/nocobase/nocobase/pull/6329)) por @katherinehhh
- **[Visualización de datos]** Soporte para ordenación NULLS en consultas de gráficos ([#6383](https://github.com/nocobase/nocobase/pull/6383)) por @2013xile
- **[Integración de IA]** Nuevo plugin: Integración de IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) por @2013xile
  Referencia: [Integración de IA](https://docs.nocobase.com/handbook/ai/service)
- **[Verificación]** Soporte para vinculación de usuario de varios tipos de verificación, como SMS y autenticadores TOTP, y verificación de identidad en escenarios requeridos. Habilita el desarrollo y extensión de métodos de verificación. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) por @2013xile
  Referencia: [Verificación](https://docs.nocobase.com/handbook/verification)
- **[Integración de IA (EE)]** Nuevo plugin: Integración de IA (EE) por @2013xile
  Referencia: [Integración de IA](https://docs.nocobase.com/handbook/ai/service)
- **[Autenticación de dos factores (2FA)]** Nuevos plugins: Autenticación de dos factores y Verificación: Autenticador TOTP por @2013xile
  Referencia: [Autenticación de dos factores (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verificación: Autenticador TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Mejoras

- **[cliente]**

  - Añadir manejo de rebote a los botones ([#6351](https://github.com/nocobase/nocobase/pull/6351)) por @Cyx649312038
  - Hacer que el menú sea responsive al ancho de la pantalla ([#6331](https://github.com/nocobase/nocobase/pull/6331)) por @zhangzhonghe
- **[servidor]** Actualizar koa a 2.15.4; actualizar @koa/cors a 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) por @2013xile
- **[Flujo de trabajo]**

  - Permitir omitir el disparo del flujo de trabajo de colección en evento de base de datos ([#6379](https://github.com/nocobase/nocobase/pull/6379)) por @mytharcher
  - Carga diferida del resultado del trabajo para mejor rendimiento ([#6344](https://github.com/nocobase/nocobase/pull/6344)) por @mytharcher
- **[Bloque: plantilla]** Soporte para guardar bloque de datos como plantilla de bloque desde la página ([#6348](https://github.com/nocobase/nocobase/pull/6348)) por @gchust
- **[Flujo de trabajo: Nodo agregado]** Añadir proceso de redondeo para número agregado basado en tipo doble ([#6358](https://github.com/nocobase/nocobase/pull/6358)) por @mytharcher
- **[Acción: Importar registros Pro]** soportar opciones avanzadas en el botón de importación Pro por @katherinehhh
- **[Flujo de trabajo: JavaScript]** Soporte para requerir paquete desde ruta absoluta por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]** intentar recargar almacenamientos si no se encuentra el almacenamiento por @jiannx

#### 🐛 Correcciones de errores

- **[cliente]**

  - La traducción personalizada del título del menú no es válida ([#6377](https://github.com/nocobase/nocobase/pull/6377)) por @zhangzhonghe
  - Falta la configuración de ordenación para campos de colección heredados ([#6372](https://github.com/nocobase/nocobase/pull/6372)) por @katherinehhh
  - Formato incorrecto del campo de hora en el formulario de filtro ([#6374](https://github.com/nocobase/nocobase/pull/6374)) por @katherinehhh
  - Problema relacionado con la zona horaria que causa una hora menos en el selector de fecha ([#6359](https://github.com/nocobase/nocobase/pull/6359)) por @katherinehhh
  - El menú desplegable de configuración de almacenamiento del campo de adjuntos no muestra opciones ([#6365](https://github.com/nocobase/nocobase/pull/6365)) por @katherinehhh
  - Componentes de subformulario no alineados con el formulario principal cuando la etiqueta está oculta ([#6357](https://github.com/nocobase/nocobase/pull/6357)) por @katherinehhh
  - Corregir error lanzado al crear colección de archivos ([#6363](https://github.com/nocobase/nocobase/pull/6363)) por @mytharcher
  - Resolver problema de barra de desplazamiento al abrir pestaña de página con bloque de altura completa ([#6347](https://github.com/nocobase/nocobase/pull/6347)) por @katherinehhh
  - Las páginas con favicon personalizado muestran brevemente el favicon de NocoBase durante la carga ([#6337](https://github.com/nocobase/nocobase/pull/6337)) por @zhangzhonghe
  - Bloque de asociación no renderizado en ventana emergente dentro de herencia de colección ([#6303](https://github.com/nocobase/nocobase/pull/6303)) por @katherinehhh
  - El botón "añadir nuevo" aparece al pasar el ratón en modo de solo lectura del campo de asociación ([#6322](https://github.com/nocobase/nocobase/pull/6322)) por @katherinehhh
- **[auth]** Evitar renovar el token durante la autorización WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) por @sheldon66
- **[base de datos]** Corregir error al recuperar registros de colección de relación si la clave de origen en los campos de relación es una cadena numérica ([#6360](https://github.com/nocobase/nocobase/pull/6360)) por @2013xile
- **[cliente WEB]**

  - Después de agregar una página a la tabla de rutas, la página aparece en blanco ([#6366](https://github.com/nocobase/nocobase/pull/6366)) por @zhangzhonghe
  - Agregar pestañas de página en la tabla de gestión de rutas no tiene efecto ([#6362](https://github.com/nocobase/nocobase/pull/6362)) por @zhangzhonghe
- **[Control de acceso]** En la tabla de gestión de permisos, el nombre de la pestaña de página está vacío ([#6364](https://github.com/nocobase/nocobase/pull/6364)) por @zhangzhonghe
- **[Usuarios]**

  - Error "Sin permisos" cuando usuarios sin permisos de gestión de usuarios ven su propio perfil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) por @2013xile
  - Error "Sin permisos" al actualizar la configuración del sistema en la gestión de usuarios ([#6380](https://github.com/nocobase/nocobase/pull/6380)) por @2013xile
  - Una UI de error parpadea brevemente cuando la tabla de gestión de permisos de usuario se carga por primera vez ([#6324](https://github.com/nocobase/nocobase/pull/6324)) por @zhangzhonghe
- **[Integración de IA]** Problema donde el `baseURL` predeterminado para el proveedor LLM es `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) por @2013xile
- **[Flujo de trabajo]** Corregir acl para obtener trabajo ([#6352](https://github.com/nocobase/nocobase/pull/6352)) por @mytharcher
- **[Bloque: Mapa]** Faltan/no son visibles los ajustes de configuración para el campo de mapa ([#6336](https://github.com/nocobase/nocobase/pull/6336)) por @zhangzhonghe
- **[Móvil]** Error de página: No se pueden leer propiedades de null (leyendo 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) por @zhangzhonghe
- **[Bloque: Panel de acciones]** Establecer la altura del panel de acciones no es válido ([#6321](https://github.com/nocobase/nocobase/pull/6321)) por @zhangzhonghe
- **[Flujo de trabajo: Evento de acción personalizada]**

  - Corregir locale y colección modificable después de ejecutarse por @mytharcher
  - Corregir migración para botones heredados vinculados con flujo de trabajo de acción personalizada por @mytharcher
- **[Marca personalizada]** Las páginas con favicon personalizado muestran brevemente el favicon de NocoBase durante la carga por @zhangzhonghe
- **[Acción: Importar registros Pro]**

  - Usar opción adicional para determinar si disparar flujo de trabajo o no por @mytharcher
  - El botón de importación de bloque de asociación para detección de registros duplicados no muestra datos en el menú desplegable de campo por @katherinehhh
- **[Acción: Exportar registros Pro]**

  - Falta parámetros de ordenación en acción de exportación Pro por @katherinehhh
  - eliminar opción 'añadir bloque' en la configuración del botón de exportación de adjuntos por @katherinehhh
- **[Impresión de plantilla]** La restauración desde local falló cuando los plugins de impresión de plantilla y gestor de copias de seguridad estaban ambos habilitados por @gchust
- **[Flujo de trabajo: Aprobación]**

  - Corregir migración para bloques heredados por @mytharcher
  - Corregir error causado por `.toJSON()` por @mytharcher

### [v1.6.0-alpha.31](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Fecha de lanzamiento: 2025-03-11*

#### 🎉 Nuevas funciones

- **[cliente]** compatible con configuraciones históricas de control de acceso de botones ([#6376](https://github.com/nocobase/nocobase/pull/6376)) por @katherinehhh
- **[Flujo de trabajo: Mensaje de respuesta]** Soporte para ser usado en disparador de acción por @mytharcher

#### 🚀 Mejoras

- **[Auth: Claves API]** Añadir prueba de configuración de seguridad de token para autenticación de clave API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) por @sheldon66
- **[Flujo de trabajo: Nodo manual]** Ajustar UI del centro de tareas del flujo de trabajo ([#6272](https://github.com/nocobase/nocobase/pull/6272)) por @mytharcher

#### 🐛 Correcciones de errores

- **[servidor]** Caché de navegador incorrecta después de ejecutar el comando `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) por @gchust
- **[cliente]**

  - Problema de contexto de tema en FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) por @katherinehhh
  - Al usar el operador '$anyOf', la regla de vinculación no es válida ([#6400](https://github.com/nocobase/nocobase/pull/6400)) por @zhangzhonghe
- **[auth]** Manejar usuario inexistente con error 401 y actualizar mensajes locale ([#6381](https://github.com/nocobase/nocobase/pull/6381)) por @sheldon66
- **[Bloque: plantilla]** La opción "Guardar como plantilla" no se ha mostrado en el bloque de datos de la página ([#6398](https://github.com/nocobase/nocobase/pull/6398)) por @gchust
- **[Flujo de trabajo: Nodo manual]** Evitar conflicto en clave única ([#6407](https://github.com/nocobase/nocobase/pull/6407)) por @mytharcher
- **[Gestor de fuentes de datos]** error al editar campos en fuente de datos externa ([#6402](https://github.com/nocobase/nocobase/pull/6402)) por @katherinehhh
- **[Editor de temas]** el cambio de tema falla después de múltiples cambios consecutivos ([#6387](https://github.com/nocobase/nocobase/pull/6387)) por @katherinehhh
- **[cliente WEB]** La página está en blanco después de cambiar de rol ([#6388](https://github.com/nocobase/nocobase/pull/6388)) por @aaaaaajie
- **[Flujo de trabajo: Aprobación]**

  - Evitar que la configuración de asignatarios incorrectos consulte a todos los usuarios por @mytharcher
  - Corregir parámetro de orden al añadir asignatario por @mytharcher
- **[WeCom]** corregir enlace de aviso de inicio de sesión y error de inicio de sesión de DingTalk por @chenzhizdt

### [v1.7.0-alpha.1](https://www.nocobase.com/en/blog/v1.7.0-alpha.1)

*Fecha de lanzamiento: 2025-03-11*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo: Evento posterior a la acción]** Soporte para usar nodo final para determinar el estado ([#6399](https://github.com/nocobase/nocobase/pull/6399)) por @mytharcher

#### 🚀 Mejoras

- **[Flujo de trabajo]** Corregir API 401 cuando no se ha iniciado sesión ([#6412](https://github.com/nocobase/nocobase/pull/6412)) por @mytharcher
- **[Gestor de correo electrónico]** Usar la misma estructura de elemento y estilo global para el botón de la barra de herramientas por @mytharcher
- **[Flujo de trabajo: Aprobación]** Ajustar UI del centro de tareas por @mytharcher

#### 🐛 Correcciones de errores

- **[cliente]**

  - No se puede mover la página a un grupo ([#6413](https://github.com/nocobase/nocobase/pull/6413)) por @zhangzhonghe
  - Los menús de nivel profundo no muestran el icono ([#6410](https://github.com/nocobase/nocobase/pull/6410)) por @zhangzhonghe
- **[Autenticación]** El usuario sin roles debe redirigir a la página de mensaje de error. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) por @sheldon66
- **[Flujo de trabajo: Evento de acción personalizada]** falta la configuración de regla de vinculación para el botón 'Disparar flujo de trabajo' por @katherinehhh
- **[Gestor de copias de seguridad]** Faltan datos de clave de cifrado durante la restauración de la copia de seguridad por @gchust
- **[Flujo de trabajo: Aprobación]** Evitar conflicto en clave única por @mytharcher

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo y una inversión sustancial desplegando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtener NocoBase

[**Página web**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
