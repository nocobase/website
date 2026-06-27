---
title: "Actualizaciones semanales de NocoBase: Las fuentes de datos externas admiten la carga bajo demanda de colecciones"
description: "Las actualizaciones de esta semana incluyen: agregar variable de registros de aprobación al resultado del nodo, soporte para el campo BIT en SQL Server para fuentes de datos externas, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.17](https://www.nocobase.com/en/blog/v1.7.17)

*Fecha de lanzamiento: 2025-06-24*

#### 🐛 Corrección de errores

- **[cliente]**

  - Limitación de rango incorrecta en campos de fecha con hora ([#7107](https://github.com/nocobase/nocobase/pull/7107)) por @katherinehhh
  - Cuando las variables del parámetro de consulta URL están vacías, las condiciones del ámbito de datos no se eliminan ([#7104](https://github.com/nocobase/nocobase/pull/7104)) por @zhangzhonghe
- **[Móvil]** Corregir problema de z-index en ventanas emergentes móviles ([#7110](https://github.com/nocobase/nocobase/pull/7110)) por @zhangzhonghe
- **[Calendario]** Problema con el campo de fecha en el formulario de creación rápida del bloque de calendario ([#7106](https://github.com/nocobase/nocobase/pull/7106)) por @katherinehhh

### [v1.7.16](https://www.nocobase.com/en/blog/v1.7.16)

*Fecha de lanzamiento: 2025-06-20*

#### 🐛 Corrección de errores

- **[Flujo de trabajo]**

  - Corregir verificación ejecutada incorrectamente en números enteros grandes ([#7099](https://github.com/nocobase/nocobase/pull/7099)) por @mytharcher
  - Corregir estadísticas eliminadas en cascada por una versión de flujo de trabajo no actual ([#7103](https://github.com/nocobase/nocobase/pull/7103)) por @mytharcher
- **[Acción: Importar registros]** Resolver problema de fallo de inicio de sesión después de la importación masiva de nombres de usuario y contraseñas ([#7076](https://github.com/nocobase/nocobase/pull/7076)) por @aaaaaajie
- **[Flujo de trabajo: Aprobación]** Solo los participantes pueden ver (obtener) el detalle de la aprobación por @mytharcher

### [v1.7.15](https://www.nocobase.com/en/blog/v1.7.15)

*Fecha de lanzamiento: 2025-06-18*

#### 🐛 Corrección de errores

- **[cliente]**

  - Usar ámbito de variable independiente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
  - Asignar valores de campo: No se pueden borrar datos para campos de relación ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe
  - La función de alineación de texto en columnas de tabla no funciona ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe
- **[Flujo de trabajo]** Corregir verificación ejecutada incorrectamente en números enteros grandes ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher
- **[Gestor de archivos]** Corregir que el campo de archivos adjuntos no se pueda actualizar en el proceso de aprobación ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Usar comparación en lugar de lógica implícita para evitar problemas de tipo por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.10](https://www.nocobase.com/en/blog/v1.8.0-beta.10)

*Fecha de lanzamiento: 2025-06-19*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Añadir variable de registros de aprobación al resultado del nodo por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - La función de alineación de texto en columnas de tabla no funciona ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe
  - Asignar valores de campo: No se pueden borrar datos para campos de relación ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe
  - Usar ámbito de variable independiente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
- **[Gestor de archivos]** Corregir que el campo de archivos adjuntos no se pueda actualizar en el proceso de aprobación ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher
- **[Flujo de trabajo]** Corregir verificación ejecutada incorrectamente en números enteros grandes ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Usar comparación en lugar de lógica implícita para evitar problemas de tipo por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.10](https://www.nocobase.com/en/blog/v1.8.0-alpha.10)

*Fecha de lanzamiento: 2025-06-25*

#### 🎉 Nuevas funciones

- **[Gestor de fuentes de datos]** ✨ Soporte para carga bajo demanda de colecciones desde fuentes de datos externas ([#6979](https://github.com/nocobase/nocobase/pull/6979)) por @aaaaaajie
- **[Flujo de trabajo: Nodo de solicitud HTTP]** Soporte para solicitudes `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) por @shushu992
- **[Fuente de datos: SQL Server externo]** Soporte para carga bajo demanda de colecciones desde fuentes de datos externas por @aaaaaajie

#### 🐛 Corrección de errores

- **[cliente]**

  - Cuando las variables del parámetro de consulta URL están vacías, las condiciones del ámbito de datos no se eliminan ([#7104](https://github.com/nocobase/nocobase/pull/7104)) por @zhangzhonghe
  - Limitación de rango incorrecta en campos de fecha con hora ([#7107](https://github.com/nocobase/nocobase/pull/7107)) por @katherinehhh
- **[Móvil]** Corregir problema de z-index en ventanas emergentes móviles ([#7110](https://github.com/nocobase/nocobase/pull/7110)) por @zhangzhonghe
- **[Calendario]** Problema con el campo de fecha en el formulario de creación rápida del bloque de calendario ([#7106](https://github.com/nocobase/nocobase/pull/7106)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Corregir API de variable heredada que lanza error por @mytharcher
  - Corregir estilos móviles por @mytharcher
  - Corregir error lanzado cuando se elimina la colección relacionada con la aprobación por @mytharcher
- **[Gestor de correo electrónico]** El archivo adjunto no se muestra por @jiannx

### [v1.8.0-alpha.9](https://www.nocobase.com/en/blog/v1.8.0-alpha.9)

*Fecha de lanzamiento: 2025-06-20*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para el campo BIT de SQL Server en fuentes de datos externas. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) por @aaaaaajie
- **[Flujo de trabajo: Aprobación]** Añadir variable de registros de aprobación al resultado del nodo por @mytharcher

#### 🚀 Mejoras

- **[cliente]** Ocultar automáticamente la barra de acciones del bloque de tarjetas en cuadrícula cuando está vacía ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe
- **[Verificación]** Eliminar opciones de verificador de la respuesta de la API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile
- **[Flujo de trabajo]** Ajustar API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) por @mytharcher
- **[Flujo de trabajo: Evento previo a la acción]** Ajustar API de variable por @mytharcher
- **[Flujo de trabajo: Aprobación]** Ajustar API de variable por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - La función de alineación de texto en columnas de tabla no funciona ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe
  - Asignar valores de campo: No se pueden borrar datos para campos de relación ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe
  - Usar ámbito de variable independiente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
  - La condición de estilo en los campos de columna de subtabla no se aplica correctamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh
  - El filtrado a través de campos de colección de relación en formularios de filtro no es válido ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe
  - Las variables del parámetro de consulta URL no funcionan en el valor predeterminado del campo de formulario público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh
  - El mensaje de validación requerida en la subtabla persiste al cambiar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh
  - Error al hacer clic en el botón de filtro ([#7100](https://github.com/nocobase/nocobase/pull/7100)) por @zhangzhonghe
- **[base de datos]** Soporte para actualizaciones de asociación en updateOrCreate y firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos
- **[Flujo de trabajo]**

  - Corregir estadísticas eliminadas en cascada por una versión de flujo de trabajo no actual ([#7103](https://github.com/nocobase/nocobase/pull/7103)) por @mytharcher
  - Corregir verificación ejecutada incorrectamente en números enteros grandes ([#7099](https://github.com/nocobase/nocobase/pull/7099)) por @mytharcher
  - Corregir verificación ejecutada incorrectamente en números enteros grandes ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher
- **[Acción: Importar registros]** Resolver problema de fallo de inicio de sesión después de la importación masiva de nombres de usuario y contraseñas ([#7076](https://github.com/nocobase/nocobase/pull/7076)) por @aaaaaajie
- **[Campo de colección: Muchos a muchos (matriz)]** Actualizar un campo muchos a muchos (matriz) lanza un error cuando el campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile
- **[Gestor de archivos]** Corregir que el campo de archivos adjuntos no se pueda actualizar en el proceso de aprobación ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher
- **[Formularios públicos]** Formularios públicos: Corregir problema de acceso no autorizado al enviar el formulario ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe
- **[Campo de colección: Secuencia]** Corregir cálculo de secuencia bigint basado en cadena ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Usar comparación en lugar de lógica implícita para evitar problemas de tipo por @mytharcher
  - Solo los participantes pueden ver (obtener) el detalle de la aprobación por @mytharcher
- **[Gestor de correo electrónico]** Error al eliminar correo electrónico por @jiannx
