---
title: "Actualizaciones semanales de NocoBase: Soporte de reglas de vinculación en el bloque de detalles"
description: "Las actualizaciones de esta semana incluyen: soporte de reglas de vinculación en el bloque de detalles para ocultar (valor reservado), y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones pronto y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en las funciones más novedosas del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.21](https://www.nocobase.com/en/blog/v1.4.21)

*Fecha de lanzamiento: 2025-01-10*

#### 🚀 Mejoras

- **[cliente]** Soporte de reglas de enlace en el bloque de detalles para ocultar (valor reservado) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) por @katherinehhh

#### 🐛 Corrección de errores

- **[cliente]**

  - Resolver la falta de ruta pública en las rutas de archivos de iconos ([#6034](https://github.com/nocobase/nocobase/pull/6034)) por @chenos
  - Corregir el problema por el que las reglas de enlace de formularios fallan cuando dependen de valores de campo de subtablas ([#5876](https://github.com/nocobase/nocobase/pull/5876)) por @zhangzhonghe
  - Corregir el campo incorrecto de la variable 'Registro actual' en subdetalles ([#6030](https://github.com/nocobase/nocobase/pull/6030)) por @zhangzhonghe
- **[Gestor de copias de seguridad]** Se corrigió el error de descarga de copias de seguridad cuando la variable de entorno API_BASE_PATH no es /api por @gchust

### [v1.4.22](https://www.nocobase.com/en/blog/v1.4.22)

*Fecha de lanzamiento: 2025-01-11*

#### 🚀 Mejoras

- **[evaluadores]** Actualizar la versión de la librería formula.js a 4.4.9 ([#6037](https://github.com/nocobase/nocobase/pull/6037)) por @mytharcher
- **[Flujo de trabajo]** Corregir la API del logger del plugin de flujo de trabajo ([#6036](https://github.com/nocobase/nocobase/pull/6036)) por @mytharcher

#### 🐛 Corrección de errores

- **[Flujo de trabajo]** Añadir lógica defensiva para evitar activaciones duplicadas ([#6022](https://github.com/nocobase/nocobase/pull/6022)) por @mytharcher

### [v1.4.23](https://www.nocobase.com/en/blog/v1.4.23)

*Fecha de lanzamiento: 2025-01-13*

#### 🐛 Corrección de errores

- **[cliente]** Corregir el problema por el que la columna de acciones fijas no funcionaba correctamente en las tablas ([#6048](https://github.com/nocobase/nocobase/pull/6048)) por @zhangzhonghe
- **[Usuarios]** Deshabilitar el autocompletado del navegador al establecer contraseñas para usuarios en la gestión de usuarios ([#6041](https://github.com/nocobase/nocobase/pull/6041)) por @2013xile
- **[Flujo de trabajo]** Corregir el evento programado basado en campo de fecha que no se activa después de iniciar la aplicación ([#6042](https://github.com/nocobase/nocobase/pull/6042)) por @mytharcher

### [v1.4.24](https://www.nocobase.com/en/blog/v1.4.24)

*Fecha de lanzamiento: 2025-01-14*

#### 🚀 Mejoras

- **[cliente]** Entrada de solo lectura del componente datePicker ([#6061](https://github.com/nocobase/nocobase/pull/6061)) por @Cyx649312038

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir la carga incorrecta de campos de asociación modal en el bloque de tabla ([#6060](https://github.com/nocobase/nocobase/pull/6060)) por @katherinehhh
  - Corregir problema de estilo en subtabla dentro del bloque de detalle ([#6049](https://github.com/nocobase/nocobase/pull/6049)) por @katherinehhh
  - Corregir el formato del campo numérico en modo readPretty que afecta al modo de edición ([#6050](https://github.com/nocobase/nocobase/pull/6050)) por @katherinehhh
  - Corregir problema de estilo en la celda del encabezado de tabla en ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) por @katherinehhh
- **[base de datos]** corregir un problema al inicializar el campo de ordenación con clave primaria ([#6059](https://github.com/nocobase/nocobase/pull/6059)) por @chareice
- **[Visualización de datos]** Eliminar la cláusula `LIMIT` al usar funciones agregadas sin establecer dimensiones en consultas de gráficos ([#6062](https://github.com/nocobase/nocobase/pull/6062)) por @2013xile
- **[Gestor de copias de seguridad]** Se corrigió el error de descarga de copias de seguridad para usuarios que solo iniciaron sesión en la subaplicación por @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.27](https://www.nocobase.com/en/blog/v1.5.0-beta.27)

*Fecha de lanzamiento: 2025-01-10*

#### 🚀 Mejoras

- **[cliente]** eliminar reglas de enlace del botón Asociar ([#6016](https://github.com/nocobase/nocobase/pull/6016)) por @katherinehhh

#### 🐛 Corrección de errores

- **[cliente]**
  - Corregir el problema por el que las reglas de enlace de formularios fallan cuando dependen de valores de campo de subtablas ([#5876](https://github.com/nocobase/nocobase/pull/5876)) por @zhangzhonghe
  - Continuar renderizando la página después de que se complete la solicitud de verificación de autenticación ([#6020](https://github.com/nocobase/nocobase/pull/6020)) por @2013xile

### [v1.5.0-beta.28](https://www.nocobase.com/en/blog/v1.5.0-beta.28)

*Fecha de lanzamiento: 2025-01-14*

#### 🐛 Corrección de errores

- **[cliente]**
  - Corregir el problema por el que las asignaciones de campo para los botones de formulario en los nodos manuales del flujo de trabajo no son válidas ([#6054](https://github.com/nocobase/nocobase/pull/6054)) por @zhangzhonghe
  - Corregir la falta de la variable de ventana emergente actual en el modal de enlace de campo habilitado ([#6045](https://github.com/nocobase/nocobase/pull/6045)) por @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.11](https://www.nocobase.com/en/blog/v1.6.0-alpha.11)

*Fecha de lanzamiento: 2025-01-09*

#### 🎉 Nuevas funciones

- **[cliente]** añadir schemaSetting para mostrar el nombre del archivo para los adjuntos ([#5995](https://github.com/nocobase/nocobase/pull/5995)) por @katherinehhh

### [v1.6.0-alpha.13](https://www.nocobase.com/en/blog/v1.6.0-alpha.13)

*Fecha de lanzamiento: 2025-01-14*

#### 🚀 Mejoras

- **[Flujo de trabajo: Cálculo JSON]** Cambiar el nombre del nodo de consulta JSON a cálculo JSON por @mytharcher

#### 🐛 Corrección de errores

- **[Flujo de trabajo]** Corregir el tipo de valor para el componente DatePicker ([#6039](https://github.com/nocobase/nocobase/pull/6039)) por @mytharcher

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtener NocoBase

[**Página web**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
