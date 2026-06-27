---
title: "Actualizaciones semanales de NocoBase: Optimización de columnas y operaciones del bloque de tabla"
description: "Las actualizaciones de esta semana incluyen: soporte para ocultar la columna de índice en bloques de tabla, configuración de opciones de campos seleccionables en reglas de vinculación, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.2](https://www.nocobase.com/en/blog/v1.6.2)

*Fecha de lanzamiento: 2025-03-12*

#### 🐛 Corrección de errores

- **[cliente]** La selección de rango del campo de fecha excluye la fecha máxima ([#6418](https://github.com/nocobase/nocobase/pull/6418)) por @katherinehhh
- **[Notificación: Mensaje en la aplicación]** Evitar que la configuración de destinatarios incorrecta consulte a todos los usuarios ([#6424](https://github.com/nocobase/nocobase/pull/6424)) por @sheldon66
- **[Flujo de trabajo: Nodo manual]**

  - Corregir migración que omitía el prefijo de tabla y la lógica de esquema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) por @mytharcher
  - Cambiar el límite de versión de la migración a `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) por @mytharcher

### [v1.6.3](https://www.nocobase.com/en/blog/v1.6.3)

*Fecha de lanzamiento: 2025-03-14*

#### 🎉 Nuevas funciones

- **[WeCom]** Permite establecer un tooltip personalizado para el botón de inicio de sesión por @2013xile

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir que los caracteres especiales en la URL de la imagen impedían su visualización ([#6459](https://github.com/nocobase/nocobase/pull/6459)) por @mytharcher
  - Número de página incorrecto al añadir datos después de cambiar el tamaño de página de la subtabla ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh
  - El estilo del logotipo es inconsistente con el anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe
- **[Flujo de trabajo: Nodo manual]** Corregir error lanzado en la migración ([#6445](https://github.com/nocobase/nocobase/pull/6445)) por @mytharcher
- **[Visualización de datos]** Los campos eliminados aparecen al añadir campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile
- **[Gestor de archivos]** Corregir algunos problemas del gestor de archivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher
- **[Acción: Solicitud personalizada]** Error de validación de permisos del lado del servidor en solicitud personalizada ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh
- **[Gestor de fuentes de datos]** Al cambiar la fuente de datos en la gestión de roles no se cargan las colecciones correspondientes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh
- **[Acción: Edición por lotes]** Corregir que el flujo de trabajo no se podía activar en el envío de edición masiva ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Eliminar `only` en el caso de prueba E2E por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir que los datos de asociación no se mostraban en el formulario de aprobación por @mytharcher
  - Corregir error lanzado al aprobar en una fuente de datos externa por @mytharcher

### [v1.6.4](https://www.nocobase.com/en/blog/v1.6.4)

*Fecha de lanzamiento: 2025-03-15*

#### 🎉 Nuevas funciones

- **[cliente]** Componente de selección en cascada añade configuración de ámbito de datos ([#6386](https://github.com/nocobase/nocobase/pull/6386)) por @Cyx649312038

#### 🚀 Mejoras

- **[utilidades]** Mover `md5` a utilidades ([#6468](https://github.com/nocobase/nocobase/pull/6468)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]** En el bloque de árbol, al desmarcar, los datos en el bloque de datos no se limpian ([#6460](https://github.com/nocobase/nocobase/pull/6460)) por @zhangzhonghe
- **[Gestor de archivos]** No se pueden eliminar archivos almacenados en S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) por @chenos
- **[Flujo de trabajo]** Eliminar el botón de configuración de flujo de trabajo vinculado del selector de datos ([#6455](https://github.com/nocobase/nocobase/pull/6455)) por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]** Resolver problema con URLs firmadas de S3 Pro inaccesibles por @chenos
- **[Flujo de trabajo: Aprobación]** Evitar que la página se bloquee cuando no hay solicitante en la tabla de procesos de aprobación por @mytharcher

### [v1.6.5](https://www.nocobase.com/en/blog/v1.6.5)

*Fecha de lanzamiento: 2025-03-17*

#### 🚀 Mejoras

- **[Gestor de archivos]** Simplificar la lógica de generación de URL de archivos y la API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]]** Cambiar a una forma simple de generar URL de archivo por @mytharcher
- **[Gestor de copias de seguridad]** Permitir restaurar copia de seguridad entre la versión preliminar y la versión final de la misma versión por @gchust

#### 🐛 Corrección de errores

- **[cliente]**

  - El campo de texto enriquecido no limpia los datos al enviar ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh
  - El color de los iconos en la esquina superior derecha de la página no cambia con el tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe
  - Al hacer clic en el botón de restablecer en el formulario de filtro no se pueden limpiar las condiciones de filtrado del bloque de tarjetas de cuadrícula ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe
- **[Flujo de trabajo: Nodo manual]**

  - Corregir migración ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher
  - Cambiar el nombre de la migración para asegurar la re-ejecución ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher
  - Corregir el campo de título del flujo de trabajo en el filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher
  - Corregir error de migración cuando la columna id no existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos
  - Evitar que la colección se sincronice desde campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher
- **[Flujo de trabajo: Nodo de agregación]** Corregir redondeo en resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher
- **[Flujo de trabajo]** No contar tareas cuando el flujo de trabajo se elimina ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher
- **[Gestor de copias de seguridad]** No se puede iniciar el servidor cuando faltan configuraciones de copia de seguridad predeterminadas por @gchust
- **[Flujo de trabajo: Aprobación]**

  - Corregir error de campo de asociación de archivos en el formulario de proceso por @mytharcher
  - Corregir el conteo de tareas basado en hooks por @mytharcher

### [v1.6.6](https://www.nocobase.com/en/blog/v1.6.6)

*Fecha de lanzamiento: 2025-03-18*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para campos de texto largo como campos de título para campos de asociación ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh
- **[Flujo de trabajo: Nodo de agregación]** Soporte para configurar la precisión del resultado de agregación ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

#### 🚀 Mejoras

- **[Almacenamiento de archivos: S3(Pro)]** Cambiar el texto 'Access URL Base' a 'Base URL' por @zhangzhonghe

#### 🐛 Corrección de errores

- **[evaluadores]** Revertir redondeo de decimales a 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher
- **[Gestor de archivos]** codificar url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos
- **[Fuente de datos: Principal]** No se puede crear una vista de MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie
- **[Flujo de trabajo]** Corregir el conteo de tareas antiguas después de eliminar el flujo de trabajo ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher
- **[Incrustar NocoBase]** La página se muestra en blanco por @zhangzhonghe
- **[Gestor de copias de seguridad]**

  - Los archivos subidos no se han restaurado al crear una sub-aplicación desde una plantilla de copia de seguridad por @gchust
  - Fallo en la restauración de la base de datos MySQL causado por la superposición del conjunto GTID por @gchust
- **[Flujo de trabajo: Aprobación]**

  - Cambiar la aprobación devuelta como pendiente por @mytharcher
  - Corregir botón de acción faltante en la tabla de procesos por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.2](https://www.nocobase.com/en/blog/v1.7.0-beta.2)

*Fecha de lanzamiento: 2025-03-13*

#### 🎉 Nuevas funciones

- **[cliente]**

  - El bloque de tabla soporta ocultar la columna de índice (visible por defecto) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) por @katherinehhh
  - Soporta configurar opciones de campo seleccionables en reglas de vinculación ([#6338](https://github.com/nocobase/nocobase/pull/6338)) por @katherinehhh
  - Soporta configuración de ámbito de fecha (mín/máx) para campos de tiempo en reglas de vinculación ([#6356](https://github.com/nocobase/nocobase/pull/6356)) por @katherinehhh
- **[Bloque: Panel de acciones]** Soporte para salto de línea en el título de la acción en el panel de acciones ([#6433](https://github.com/nocobase/nocobase/pull/6433)) por @katherinehhh

#### 🐛 Corrección de errores

- **[cliente]**

  - Número de página incorrecto al añadir datos después de cambiar el tamaño de página de la subtabla ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh
  - El estilo del logotipo es inconsistente con el anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe
  - El valor del campo de selección múltiple cambia y se pierden opciones al eliminar registros de subtabla ([#6405](https://github.com/nocobase/nocobase/pull/6405)) por @katherinehhh
  - La selección de rango del campo de fecha excluye la fecha máxima ([#6418](https://github.com/nocobase/nocobase/pull/6418)) por @katherinehhh
  - Al usar el operador '$anyOf', la regla de vinculación no es válida ([#6415](https://github.com/nocobase/nocobase/pull/6415)) por @zhangzhonghe
  - Datos no actualizados en ventanas emergentes abiertas a través de botones de enlace ([#6411](https://github.com/nocobase/nocobase/pull/6411)) por @zhangzhonghe
- **[Acción: Edición por lotes]** Corregir que el flujo de trabajo no se podía activar en el envío de edición masiva ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher
- **[Visualización de datos]** Los campos eliminados aparecen al añadir campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile
- **[Gestor de fuentes de datos]** Al cambiar la fuente de datos en la gestión de roles no se cargan las colecciones correspondientes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh
- **[Acción: Solicitud personalizada]** Error de validación de permisos del lado del servidor en solicitud personalizada ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh
- **[Gestor de archivos]** Corregir algunos problemas del gestor de archivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]**

  - Evitar que la configuración de destinatarios incorrecta consulte a todos los usuarios ([#6424](https://github.com/nocobase/nocobase/pull/6424)) por @sheldon66
  - Diferenciar el color de fondo de la lista de mensajes en la aplicación de las tarjetas de mensaje para mejorar la jerarquía visual y la legibilidad. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) por @sheldon66
- **[Flujo de trabajo: Nodo manual]**

  - Cambiar el límite de versión de la migración a `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) por @mytharcher
  - Corregir migración que omitía el prefijo de tabla y la lógica de esquema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) por @mytharcher

### [v1.7.0-beta.3](https://www.nocobase.com/en/blog/v1.7.0-beta.3)

*Fecha de lanzamiento: 2025-03-14*

#### 🎉 Nuevas funciones

- **[WeCom]** Permite establecer un tooltip personalizado para el botón de inicio de sesión por @2013xile

#### 🚀 Mejoras

- **[Visualización de datos]** Reemplazar `x-designer` obsoleto con `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) por @2013xile

#### 🐛 Corrección de errores

- **[cliente]** Corregir que los caracteres especiales en la URL de la imagen impedían su visualización ([#6459](https://github.com/nocobase/nocobase/pull/6459)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Corregir error lanzado en la migración ([#6445](https://github.com/nocobase/nocobase/pull/6445)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Eliminar `only` en el caso de prueba E2E por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir error lanzado al aprobar en una fuente de datos externa por @mytharcher
  - Corregir que los datos de asociación no se mostraban en el formulario de aprobación por @mytharcher

### [v1.7.0-beta.4](https://www.nocobase.com/en/blog/v1.7.0-beta.4)

*Fecha de lanzamiento: 2025-03-15*

#### 🎉 Nuevas funciones

- **[cliente]** Componente de selección en cascada añade configuración de ámbito de datos ([#6386](https://github.com/nocobase/nocobase/pull/6386)) por @Cyx649312038

#### 🚀 Mejoras

- **[utilidades]** Mover `md5` a utilidades ([#6468](https://github.com/nocobase/nocobase/pull/6468)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]** En el bloque de árbol, al desmarcar, los datos en el bloque de datos no se limpian ([#6460](https://github.com/nocobase/nocobase/pull/6460)) por @zhangzhonghe
- **[Gestor de archivos]** No se pueden eliminar archivos almacenados en S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) por @chenos
- **[Flujo de trabajo]** Eliminar el botón de configuración de flujo de trabajo vinculado del selector de datos ([#6455](https://github.com/nocobase/nocobase/pull/6455)) por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]** Resolver problema con URLs firmadas de S3 Pro inaccesibles por @chenos
- **[Flujo de trabajo: Aprobación]** Evitar que la página se bloquee cuando no hay solicitante en la tabla de procesos de aprobación por @mytharcher

### [v1.7.0-beta.5](https://www.nocobase.com/en/blog/v1.7.0-beta.5)

*Fecha de lanzamiento: 2025-03-18*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para acciones de tabla en línea con modo solo icono, mostrar nombre de la acción al pasar el ratón ([#6451](https://github.com/nocobase/nocobase/pull/6451)) por @katherinehhh

#### 🚀 Mejoras

- **[Gestor de archivos]** Simplificar la lógica de generación de URL de archivos y la API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]**

  - Cambiar el texto 'Access URL Base' a 'Base URL' por @zhangzhonghe
  - Cambiar a una forma simple de generar URL de archivo por @mytharcher
- **[Gestor de copias de seguridad]** Permitir restaurar copia de seguridad entre la versión preliminar y la versión final de la misma versión por @gchust

#### 🐛 Corrección de errores

- **[cliente]**

  - El color de los iconos en la esquina superior derecha de la página no cambia con el tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe
  - El campo de texto enriquecido no limpia los datos al enviar ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh
  - Al hacer clic en el botón de restablecer en el formulario de filtro no se pueden limpiar las condiciones de filtrado del bloque de tarjetas de cuadrícula ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe
- **[Flujo de trabajo: Nodo manual]**

  - Corregir migración ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher
  - Cambiar el nombre de la migración para asegurar la re-ejecución ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher
  - Corregir el campo de título del flujo de trabajo en el filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher
  - Evitar que la colección se sincronice desde campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher
  - Corregir error de migración cuando la columna id no existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos
- **[Flujo de trabajo]** No contar tareas cuando el flujo de trabajo se elimina ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher
- **[Flujo de trabajo: Nodo de agregación]** Corregir redondeo en resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher
- **[Incrustar NocoBase]** La página se muestra en blanco por @zhangzhonghe
- **[Gestor de copias de seguridad]** No se puede iniciar el servidor cuando faltan configuraciones de copia de seguridad predeterminadas por @gchust
- **[Flujo de trabajo: Aprobación]**

  - Corregir error de campo de asociación de archivos en el formulario de proceso por @mytharcher
  - Corregir el conteo de tareas basado en hooks por @mytharcher

### [v1.7.0-beta.6](https://www.nocobase.com/en/blog/v1.7.0-beta.6)

*Fecha de lanzamiento: 2025-03-19*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para campos de texto largo como campos de título para campos de asociación ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh
- **[Flujo de trabajo: Nodo de agregación]** Soporte para configurar la precisión del resultado de agregación ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

#### 🐛 Corrección de errores

- **[evaluadores]** Revertir redondeo de decimales a 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher
- **[Flujo de trabajo]** Corregir el conteo de tareas antiguas después de eliminar el flujo de trabajo ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher
- **[Fuente de datos: Principal]** No se puede crear una vista de MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie
- **[Gestor de archivos]** codificar url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos
- **[Gestor de copias de seguridad]**

  - Fallo en la restauración de la base de datos MySQL causado por la superposición del conjunto GTID por @gchust
  - Los archivos subidos no se han restaurado al crear una sub-aplicación desde una plantilla de copia de seguridad por @gchust
- **[Flujo de trabajo: Aprobación]**

  - Corregir botón de acción faltante en la tabla de procesos por @mytharcher
  - Cambiar la aprobación devuelta como pendiente por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.2](https://www.nocobase.com/en/blog/v1.7.0-alpha.2)

*Fecha de lanzamiento: 2025-03-15*

#### 🎉 Nuevas funciones

- **[cliente]**

  - Componente de selección en cascada añade configuración de ámbito de datos ([#6386](https://github.com/nocobase/nocobase/pull/6386)) por @Cyx649312038
  - El bloque de tabla soporta ocultar la columna de índice (visible por defecto) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) por @katherinehhh
  - Soporta configurar opciones de campo seleccionables en reglas de vinculación ([#6338](https://github.com/nocobase/nocobase/pull/6338)) por @katherinehhh
  - Soporta configuración de ámbito de fecha (mín/máx) para campos de tiempo en reglas de vinculación ([#6356](https://github.com/nocobase/nocobase/pull/6356)) por @katherinehhh
- **[acl]** Soporte para unión de roles de usuario ([#6301](https://github.com/nocobase/nocobase/pull/6301)) por @aaaaaajie
- **[Bloque: Panel de acciones]** Soporte para salto de línea en el título de la acción en el panel de acciones ([#6433](https://github.com/nocobase/nocobase/pull/6433)) por @katherinehhh
- **[plugin-demo-platform]** Establecer skipAuthCheck de la ruta "/new" a true. por @sheldon66
- **[WeCom]** Permite establecer un tooltip personalizado para el botón de inicio de sesión por @2013xile

#### 🚀 Mejoras

- **[utilidades]**

  - Mover `md5` a utilidades ([#6468](https://github.com/nocobase/nocobase/pull/6468)) por @mytharcher
  - Adaptación de página de escritorio para dispositivos móviles ([#6393](https://github.com/nocobase/nocobase/pull/6393)) por @zhangzhonghe
- **[cliente]** Añadir skipAuthCheck a router.add para evitar redirigir al inicio de sesión en páginas públicas. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) por @sheldon66
- **[Visualización de datos]** Reemplazar `x-designer` obsoleto con `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) por @2013xile

#### 🐛 Corrección de errores

- **[cliente]**

  - En el bloque de árbol, al desmarcar, los datos en el bloque de datos no se limpian ([#6460](https://github.com/nocobase/nocobase/pull/6460)) por @zhangzhonghe
  - Corregir que los caracteres especiales en la URL de la imagen impedían su visualización ([#6459](https://github.com/nocobase/nocobase/pull/6459)) por @mytharcher
  - Número de página incorrecto al añadir datos después de cambiar el tamaño de página de la subtabla ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh
  - El contenido no se muestra completamente en navegadores móviles ([#6446](https://github.com/nocobase/nocobase/pull/6446)) por @zhangzhonghe
  - El estilo del logotipo es inconsistente con el anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe
  - La selección de rango del campo de fecha excluye la fecha máxima ([#6418](https://github.com/nocobase/nocobase/pull/6418)) por @katherinehhh
  - Al usar el operador '$anyOf', la regla de vinculación no es válida ([#6415](https://github.com/nocobase/nocobase/pull/6415)) por @zhangzhonghe
  - El valor del campo de selección múltiple cambia y se pierden opciones al eliminar registros de subtabla ([#6405](https://github.com/nocobase/nocobase/pull/6405)) por @katherinehhh
  - Datos no actualizados en ventanas emergentes abiertas a través de botones de enlace ([#6411](https://github.com/nocobase/nocobase/pull/6411)) por @zhangzhonghe
- **[acl]** Corregido el problema por el cual los campos de relación no se muestran bajo la unión de roles. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) por @aaaaaajie
- **[Gestor de archivos]**

  - No se pueden eliminar archivos almacenados en S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) por @chenos
  - Corregir algunos problemas del gestor de archivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher
- **[Flujo de trabajo]** Eliminar el botón de configuración de flujo de trabajo vinculado del selector de datos ([#6455](https://github.com/nocobase/nocobase/pull/6455)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]**

  - Corregir error lanzado en la migración ([#6445](https://github.com/nocobase/nocobase/pull/6445)) por @mytharcher
  - Cambiar el límite de versión de la migración a `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) por @mytharcher
  - Corregir migración que omitía el prefijo de tabla y la lógica de esquema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) por @mytharcher
- **[Control de acceso]**

  - Corregido que cambiar roles no surtía efecto. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) por @aaaaaajie
  - Error cuando el ámbito de datos se establece en datos propios y la tabla carece de un campo de creador. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) por @aaaaaajie
- **[Cliente WEB]** Reemplazar todas las instancias de ctx.state.currentRole (rol único) con ctx.state.currentRoles (soporta múltiples roles). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) por @aaaaaajie
- **[Acción: Edición por lotes]** Corregir que el flujo de trabajo no se podía activar en el envío de edición masiva ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher
- **[Gestor de fuentes de datos]** Al cambiar la fuente de datos en la gestión de roles no se cargan las colecciones correspondientes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh
- **[Visualización de datos]** Los campos eliminados aparecen al añadir campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile
- **[Notificación: Mensaje en la aplicación]**

  - Diferenciar el color de fondo de la lista de mensajes en la aplicación de las tarjetas de mensaje para mejorar la jerarquía visual y la legibilidad. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) por @sheldon66
  - Evitar que la configuración de destinatarios incorrecta consulte a todos los usuarios ([#6424](https://github.com/nocobase/nocobase/pull/6424)) por @sheldon66
- **[Acción: Solicitud personalizada]** Error de validación de permisos del lado del servidor en solicitud personalizada ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh
- **[Autenticación: Claves API]** Eliminación de unión de lista de roles del plugin de claves API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) por @aaaaaajie
- **[Bloque: plantilla]** Comportamiento incorrecto de "Guardar como plantilla" en el cliente móvil ([#6420](https://github.com/nocobase/nocobase/pull/6420)) por @gchust
- **[Flujo de trabajo: Evento de acción personalizada]** Eliminar `only` en el caso de prueba E2E por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]** Resolver problema con URLs firmadas de S3 Pro inaccesibles por @chenos
- **[Flujo de trabajo: Aprobación]**

  - Evitar que la página se bloquee cuando no hay solicitante en la tabla de procesos de aprobación por @mytharcher
  - Corregir que los datos de asociación no se mostraban en el formulario de aprobación por @mytharcher
  - Corregir error lanzado al aprobar en una fuente de datos externa por @mytharcher

### [v1.7.0-alpha.3](https://www.nocobase.com/en/blog/v1.7.0-alpha.3)

*Fecha de lanzamiento: 2025-03-18*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para acciones de tabla en línea con modo solo icono, mostrar nombre de la acción al pasar el ratón ([#6451](https://github.com/nocobase/nocobase/pull/6451)) por @katherinehhh

#### 🚀 Mejoras

- **[Gestor de archivos]** Simplificar la lógica de generación de URL de archivos y la API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]**

  - Cambiar el texto 'Access URL Base' a 'Base URL' por @zhangzhonghe
  - Cambiar a una forma simple de generar URL de archivo por @mytharcher
- **[Gestor de copias de seguridad]** Permitir restaurar copia de seguridad entre la versión preliminar y la versión final de la misma versión por @gchust

#### 🐛 Corrección de errores

- **[cliente]**

  - Campos faltantes en la configuración de reglas de vinculación ([#6488](https://github.com/nocobase/nocobase/pull/6488)) por @katherinehhh
  - El color de los iconos en la esquina superior derecha de la página no cambia con el tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe
  - El campo de texto enriquecido no limpia los datos al enviar ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh
  - Estilo de entrada incorrecto para la configuración del valor predeterminado del formulario ([#6490](https://github.com/nocobase/nocobase/pull/6490)) por @gchust
  - Al hacer clic en el botón de restablecer en el formulario de filtro no se pueden limpiar las condiciones de filtrado del bloque de tarjetas de cuadrícula ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe
- **[Flujo de trabajo: Nodo manual]**

  - Cambiar el nombre de la migración para asegurar la re-ejecución ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher
  - Corregir migración ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher
  - Corregir el campo de título del flujo de trabajo en el filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher
  - Corregir error de migración cuando la columna id no existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos
  - Evitar que la colección se sincronice desde campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher
- **[Flujo de trabajo]** No contar tareas cuando el flujo de trabajo se elimina ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher
- **[Variables y secretos]** Los botones no se mostraban en el panel de creación de nuevas variables ([#6485](https://github.com/nocobase/nocobase/pull/6485)) por @gchust
- **[Flujo de trabajo: Nodo de agregación]** Corregir redondeo en resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher
- **[Incrustar NocoBase]** La página se muestra en blanco por @zhangzhonghe
- **[Gestor de copias de seguridad]** No se puede iniciar el servidor cuando faltan configuraciones de copia de seguridad predeterminadas por @gchust
- **[Flujo de trabajo: Aprobación]**

  - Corregir error de campo de asociación de archivos en el formulario de proceso por @mytharcher
  - Corregir el conteo de tareas basado en hooks por @mytharcher

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubre NocoBase en 3 Minutos!

## 👇 Obtén NocoBase

[**Página web**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
