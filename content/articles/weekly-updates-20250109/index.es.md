---
title: "Actualizaciones semanales de NocoBase: Soporte para importación y exportación de grandes volúmenes de datos"
description: "Las actualizaciones de esta semana incluyen: soporte para la importación y exportación de grandes volúmenes de datos, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en las funciones más novedosas del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.18](https://www.nocobase.com/en/blog/v1.4.18)

*Fecha de lanzamiento: 2025-01-06*

#### 🚀 Mejoras

- **[Flujo de trabajo: kit de prueba]** Corregir la precisión de los campos de fecha en la colección de prueba ([#5983](https://github.com/nocobase/nocobase/pull/5983)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir problema de barra de desplazamiento al establecer altura completa para bloque de datos en subpágina ([#5989](https://github.com/nocobase/nocobase/pull/5989)) por @katherinehhh
  - Corregir problema de alineación cuando los botones de la columna de acciones están ocultos ([#5987](https://github.com/nocobase/nocobase/pull/5987)) por @katherinehhh
  - Corregir problema con la eliminación por lotes de campos del sistema y generales en el administrador de colecciones ([#5988](https://github.com/nocobase/nocobase/pull/5988)) por @katherinehhh
  - Corregir el problema de que la variable 'parámetros de búsqueda de URL' no funciona en la página móvil ([#5968](https://github.com/nocobase/nocobase/pull/5968)) por @Cyx649312038
- **[servidor]** Corregido un posible bloqueo de la aplicación durante la restauración de copia de seguridad ([#5981](https://github.com/nocobase/nocobase/pull/5981)) por @gchust
- **[Móvil]** Corregir el problema de que los botones inferiores quedan ocultos en dispositivos móviles ([#5991](https://github.com/nocobase/nocobase/pull/5991)) por @zhangzhonghe
- **[Visualización de datos]** Corregido el problema de que las "variables emergentes actuales" usadas en gráficos en subpáginas se vaciaban después de actualizar la página ([#5984](https://github.com/nocobase/nocobase/pull/5984)) por @2013xile
- **[Bloque: Kanban]** Corregir que los campos de la colección padre no se cargan en el kanban ([#5985](https://github.com/nocobase/nocobase/pull/5985)) por @katherinehhh

### [v1.4.19](https://www.nocobase.com/en/blog/v1.4.19)

*Fecha de lanzamiento: 2025-01-06*

#### 🐛 Corrección de errores

- **[cliente]** Corregir que el selector de rango de fechas en formulario/acción de filtro no muestra el selector de hora cuando showTime está configurado ([#5994](https://github.com/nocobase/nocobase/pull/5994)) por @katherinehhh

### [v1.4.20](https://www.nocobase.com/en/blog/v1.4.20)

*Fecha de lanzamiento: 2025-01-09*

#### 🎉 Nuevas funciones

- **[cliente]** Añadir método app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) por @chenos

#### 🚀 Mejoras

- **[cliente]**

  - Permitir ordenar flujos de trabajo al vincularlos a un botón de acción ([#6017](https://github.com/nocobase/nocobase/pull/6017)) por @mytharcher
  - Cambiar enlaces de referencia de evaluadores al sitio de documentación ([#6021](https://github.com/nocobase/nocobase/pull/6021)) por @mytharcher
  - Soporte para maxTagCount: 'responsive' en el componente de selección múltiple desplegable ([#6007](https://github.com/nocobase/nocobase/pull/6007)) por @katherinehhh
  - Establecer hora de finalización predeterminada para el componente de ámbito de tiempo en el bloque de filtro a 23:59:59" ([#6012](https://github.com/nocobase/nocobase/pull/6012)) por @katherinehhh
- **[Acción: Edición por lotes]** Refactorizar el botón de envío del formulario de edición masiva: eliminar asignación de campos y regla de vinculación ([#6008](https://github.com/nocobase/nocobase/pull/6008)) por @katherinehhh

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir que la validación obligatoria no funciona después de eliminar datos en el editor de texto enriquecido ([#6006](https://github.com/nocobase/nocobase/pull/6006)) por @katherinehhh
  - Corregir problema de desalineación cuando los botones de la columna de acciones están ocultos ([#6014](https://github.com/nocobase/nocobase/pull/6014)) por @katherinehhh
  - Corregir problema del botón Crear colecciones al hacer clic en la pestaña Colecciones en la página de API REST ([#5992](https://github.com/nocobase/nocobase/pull/5992)) por @katherinehhh
  - Corregir resolver problema donde targetKey no puede seleccionar el campo NanoID en uno a muchos ([#5999](https://github.com/nocobase/nocobase/pull/5999)) por @katherinehhh
  - Corregir estilo del botón de configuración en el tema compacto ([#6001](https://github.com/nocobase/nocobase/pull/6001)) por @katherinehhh
  - Corregir estilo del componente de lista ([#5998](https://github.com/nocobase/nocobase/pull/5998)) por @mytharcher
  - Corregido el problema de que los encabezados incluidos en las solicitudes del cliente se sobrescribían ([#6009](https://github.com/nocobase/nocobase/pull/6009)) por @2013xile
  - Corregir que foreignKey, targetKey y sourceKey deben soportar el filtrado por caracteres chinos ([#5997](https://github.com/nocobase/nocobase/pull/5997)) por @katherinehhh
- **[Acción: Importar registros]** corregir importación con asociaciones muchos a muchos que usan una clave de destino diferente ([#6024](https://github.com/nocobase/nocobase/pull/6024)) por @chareice
- **[Bloque: Mapa]** Corregir que el campo de mapa en el bloque de detalle debe renderizarse como bloque de mapa ([#6010](https://github.com/nocobase/nocobase/pull/6010)) por @katherinehhh
- **[Incrustar NocoBase]** El token para incrustar entra en conflicto con la autenticación por @chenos

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.5.0-beta.20

*Fecha de lanzamiento: 2024-12-31*

#### 🎉 Nuevas funciones

- **[[Acción: Importar registros (Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Mejora las capacidades de importación de datos con soporte para importaciones asíncronas, importación de millones de registros, identificación y procesamiento de datos duplicados, actualizaciones de datos y activación de flujos de trabajo.
- **[[Acción: Exportar registros (Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Mejora las capacidades de exportación de datos con soporte para exportaciones asíncronas, exportación de millones de registros y exportación de archivos adjuntos.

### [v1.5.0-beta.22](https://www.nocobase.com/en/blog/v1.5.0-beta.22)

*Fecha de lanzamiento: 2025-01-04*

#### 🐛 Corrección de errores

- **[cliente]** Corregir el problema de que las subtablas vacías muestran una fila de datos vacía en iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) por @zhangzhonghe

### [v1.5.0-beta.26](https://www.nocobase.com/en/blog/v1.5.0-beta.26)

*Fecha de lanzamiento: 2025-01-08*

#### 🐛 Corrección de errores

- **[cliente]** Corregir el problema de que las filas de la tabla no se pueden arrastrar y ordenar ([#6013](https://github.com/nocobase/nocobase/pull/6013)) por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.8](https://www.nocobase.com/en/blog/v1.6.0-alpha.8)

*Fecha de lanzamiento: 2025-01-02*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo: Nodo manual]** Añadir una entrada global fija para todos los tipos de tareas pendientes de flujo de trabajo ([#5858](https://github.com/nocobase/nocobase/pull/5858)) por @mytharcher
- **[Política de contraseñas]** Añadir un nuevo plugin: Política de contraseñas, utilizado para establecer las reglas de contraseña y la política de bloqueo de inicio de sesión para todos los usuarios por @2013xile
  Referencia: [Política de contraseñas y bloqueo de usuario](https://docs.nocobase.com/handbook/password-policy)

#### 🚀 Mejoras

- **[cliente]** Añadir una palabra clave de filtro "Seguridad" para el administrador de plugins ([#5977](https://github.com/nocobase/nocobase/pull/5977)) por @2013xile
- **[Flujo de trabajo: Evento de acción personalizada]** Cambiar la API de ejecución manual por @mytharcher

#### 🐛 Corrección de errores

- **[Flujo de trabajo]** Corregir que `onChange` no funciona en el componente `WorkflowVariableWrapper` ([#5964](https://github.com/nocobase/nocobase/pull/5964)) por @mytharcher

### [v1.6.0-alpha.9](https://www.nocobase.com/en/blog/v1.6.0-alpha.9)

*Fecha de lanzamiento: 2025-01-06*

#### 🚀 Mejoras

- **[Móvil]** Soporte para mostrar el número de página actual de la tabla en móvil ([#5946](https://github.com/nocobase/nocobase/pull/5946)) por @katherinehhh
- **[Administrador de archivos]** soporte para otros plugins de almacenamiento ([#5930](https://github.com/nocobase/nocobase/pull/5930)) por @jiannx

### [v1.6.0-alpha.10](https://www.nocobase.com/en/blog/v1.6.0-alpha.10)

*Fecha de lanzamiento: 2025-01-08*

#### 🎉 Nuevas funciones

- **[Variables de entorno]** Soporta la configuración de variables de entorno dinámicas y secretos ([#5966](https://github.com/nocobase/nocobase/pull/5966)) por @katherinehhh

#### 🚀 Mejoras

- **[cliente]** añadir más iconos al IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) por @katherinehhh
- **[Campo de colección: Adjunto (URL)]** Filtrar las colecciones de archivos asociadas con plugin-file-storage-s3-pro. por @jiannx

#### 🐛 Corrección de errores

- **[Campo de colección: Adjunto (URL)]** Corregir API cambiada en el hook del componente por @mytharcher

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtener NocoBase

[**Página web oficial**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
