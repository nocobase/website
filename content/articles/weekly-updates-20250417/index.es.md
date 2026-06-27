---
title: "Actualizaciones semanales de NocoBase: algunos complementos comerciales se convierten en código abierto"
description: "Las actualizaciones de esta semana incluyen: los complementos comerciales para el departamento, URL de archivos adjuntos y mensaje de respuesta de flujo de trabajo ahora se proporcionan de forma gratuita."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.18](https://www.nocobase.com/en/blog/v1.6.18)

*Fecha de lanzamiento: 2025-04-11*

#### 🚀 Mejoras

- **[cliente]**

  - Añadir API de tipo de fallback por defecto para `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) por @mytharcher
  - Optimizar avisos para páginas no configuradas ([#6641](https://github.com/nocobase/nocobase/pull/6641)) por @zhangzhonghe
- **[Flujo de trabajo: Nodo de retardo]** Soporte para usar variable para la duración ([#6621](https://github.com/nocobase/nocobase/pull/6621)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Añadir configuración de actualización para el botón de activación del flujo de trabajo por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Superposición de la descripción de la subtabla con el botón de añadir nuevo ([#6646](https://github.com/nocobase/nocobase/pull/6646)) por @katherinehhh
  - Subrayado discontinuo causado por el diseño de formulario horizontal en modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) por @katherinehhh
- **[Almacenamiento de archivos: S3(Pro)]** Corregir falta de await para la siguiente llamada. por @jiannx
- **[Gestor de correo electrónico]** Corregir falta de await para la siguiente llamada. por @jiannx

### [v1.6.19](https://www.nocobase.com/en/blog/v1.6.19)

*Fecha de lanzamiento: 2025-04-14*

#### 🐛 Corrección de errores

- **[cliente]**
  - Corregir el problema de que las imágenes de vista previa quedan ocultas ([#6651](https://github.com/nocobase/nocobase/pull/6651)) por @zhangzhonghe
  - En el bloque de formulario, el valor por defecto de la configuración del campo se mostrará primero como la cadena de variable original y luego desaparecerá ([#6649](https://github.com/nocobase/nocobase/pull/6649)) por @zhangzhonghe

### [v1.6.20](https://www.nocobase.com/en/blog/v1.6.20)

*Fecha de lanzamiento: 2025-04-14*

#### 🎉 Nuevas funciones

- **[Departamentos]** Hacer que los plugins de Departamento, URL de archivo adjunto y mensaje de respuesta de flujo de trabajo sean gratuitos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) por @chenos

#### 🐛 Corrección de errores

- **[cliente]**

  - El formulario de filtro no debe mostrar el aviso de "Cambios sin guardar" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) por @zhangzhonghe
  - La opción "permitir múltiples" no funciona para el campo de relación ([#6661](https://github.com/nocobase/nocobase/pull/6661)) por @katherinehhh
  - En el formulario de filtro, al hacer clic en el botón de filtro, si hay campos que no han pasado la validación, el filtrado se activa de todos modos ([#6659](https://github.com/nocobase/nocobase/pull/6659)) por @zhangzhonghe
  - Cambiar al menú de grupo no debe saltar a una página que ya ha sido ocultada en el menú ([#6654](https://github.com/nocobase/nocobase/pull/6654)) por @zhangzhonghe
- **[Almacenamiento de archivos: S3(Pro)]**

  - Organizar idioma por @jiannx
  - Configuraciones individuales de baseurl y públicas, mejorar la UX de configuración de almacenamiento S3 Pro por @jiannx
- **[Gestor de migraciones]** la opción de omitir copia de seguridad automática se vuelve inválida si aparece el popup de variable de entorno durante la migración por @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.15](https://www.nocobase.com/en/blog/v1.7.0-beta.15)

*Fecha de lanzamiento: 2025-04-10*

#### 🚀 Mejoras

- **[Flujo de trabajo: Nodo de retardo]** Soporte para usar variable para la duración ([#6621](https://github.com/nocobase/nocobase/pull/6621)) por @mytharcher

#### 🐛 Corrección de errores

- **[Flujo de trabajo]** Corregir OOM al crear trabajo con id entero no seguro ([#6637](https://github.com/nocobase/nocobase/pull/6637)) por @mytharcher
- **[Bloque: plantilla]** cuando la plantilla referenciada utilizada por el bloque de página ha sido eliminada, guardar como plantilla falla ([#6638](https://github.com/nocobase/nocobase/pull/6638)) por @gchust

### [v1.7.0-beta.16](https://www.nocobase.com/en/blog/v1.7.0-beta.16)

*Fecha de lanzamiento: 2025-04-12*

#### 🚀 Mejoras

- **[cliente]**

  - Añadir API de tipo de fallback por defecto para `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) por @mytharcher
  - Optimizar avisos para páginas no configuradas ([#6641](https://github.com/nocobase/nocobase/pull/6641)) por @zhangzhonghe
- **[Flujo de trabajo: Evento de acción personalizada]** Añadir configuración de actualización para el botón de activación del flujo de trabajo por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - El título del panel de edición del nodo de flujo de trabajo muestra [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) por @katherinehhh
  - Superposición de la descripción de la subtabla con el botón de añadir nuevo ([#6646](https://github.com/nocobase/nocobase/pull/6646)) por @katherinehhh
  - Estilo incorrecto de entrada de variable ([#6645](https://github.com/nocobase/nocobase/pull/6645)) por @gchust
  - Subrayado discontinuo causado por el diseño de formulario horizontal en modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) por @katherinehhh
- **[Flujo de trabajo]** Corregir información de estadísticas de flujos de trabajo no cargada al iniciar la aplicación ([#6642](https://github.com/nocobase/nocobase/pull/6642)) por @mytharcher

### [v1.7.0-beta.17](https://www.nocobase.com/en/blog/v1.7.0-beta.17)

*Fecha de lanzamiento: 2025-04-15*

#### 🎉 Nuevas funciones

- **[Departamentos]** Hacer que los plugins de Departamento, URL de archivo adjunto y mensaje de respuesta de flujo de trabajo sean gratuitos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) por @chenos
- **[Acción: Actualización por lotes]** Soporte para actualizar datos en otros bloques de datos después de actualizar datos en un bloque ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe

#### 🚀 Mejoras

- **[Flujo de trabajo]** Soporte para URL de ventana emergente fija para tareas de flujo de trabajo ([#6640](https://github.com/nocobase/nocobase/pull/6640)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Cambiar al menú de grupo no debe saltar a una página que ya ha sido ocultada en el menú ([#6654](https://github.com/nocobase/nocobase/pull/6654)) por @zhangzhonghe
  - El formulario de filtro no debe mostrar el aviso de "Cambios sin guardar" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) por @zhangzhonghe
  - Corregir el problema de que las imágenes de vista previa quedan ocultas ([#6651](https://github.com/nocobase/nocobase/pull/6651)) por @zhangzhonghe
  - En el formulario de filtro, al hacer clic en el botón de filtro, si hay campos que no han pasado la validación, el filtrado se activa de todos modos ([#6659](https://github.com/nocobase/nocobase/pull/6659)) por @zhangzhonghe
  - La opción "permitir múltiples" no funciona para el campo de relación ([#6661](https://github.com/nocobase/nocobase/pull/6661)) por @katherinehhh
  - En el bloque de formulario, el valor por defecto de la configuración del campo se mostrará primero como la cadena de variable original y luego desaparecerá ([#6649](https://github.com/nocobase/nocobase/pull/6649)) por @zhangzhonghe
- **[Campo de colección: Archivo adjunto (URL)]** solo permitir colecciones de archivos con acceso URL público ([#6664](https://github.com/nocobase/nocobase/pull/6664)) por @katherinehhh
- **[Almacenamiento de archivos: S3(Pro)]**

  - Configuraciones individuales de baseurl y públicas, mejorar la UX de configuración de almacenamiento S3 Pro por @jiannx
  - Organizar idioma por @jiannx
- **[Flujo de trabajo: Aprobación]** Soporte para URL fija para elementos de aprobación en el centro de tareas por @mytharcher
- **[Gestor de migraciones]** la opción de omitir copia de seguridad automática se vuelve inválida si aparece el popup de variable de entorno durante la migración por @gchust

### [v1.7.0-beta.18](https://www.nocobase.com/en/blog/v1.7.0-beta.18)

*Fecha de lanzamiento: 2025-04-16*

#### 🎉 Nuevas funciones

- **[Campo de colección: Código]** Añadir interfaz de código por @mytharcher

#### 🚀 Mejoras

- **[create-nocobase-app]** Actualizar algunas dependencias a las últimas versiones ([#6673](https://github.com/nocobase/nocobase/pull/6673)) por @chenos

#### 🐛 Corrección de errores

- **[cliente]**

  - Campos heredados mostrados en la lista de asignación de campos de la colección actual ([#6666](https://github.com/nocobase/nocobase/pull/6666)) por @katherinehhh
  - Problema de estilo en la entrada de variable al establecer el valor por defecto ([#6668](https://github.com/nocobase/nocobase/pull/6668)) por @katherinehhh
- **[compilación]** la salida de compilación es incorrecta cuando el plugin depende de algunas bibliotecas AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) por @gchust
- **[Bloque: iframe]** aparece una barra de desplazamiento vertical cuando el bloque iframe se establece a altura completa ([#6675](https://github.com/nocobase/nocobase/pull/6675)) por @katherinehhh
- **[Control de acceso]** Corregir error lanzado al serializar el modelo de rol a caché ([#6674](https://github.com/nocobase/nocobase/pull/6674)) por @mytharcher
- **[Flujo de trabajo]** Corregir error de migración lanzado desde MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) por @mytharcher
- **[Gestor de correo electrónico]** corregir que no se puede sincronizar, sin visualización de asunto y otros pequeños errores por @jiannx
