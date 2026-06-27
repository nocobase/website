---
title: "Actualizaciones semanales de NocoBase: Soporte para configurar formularios de perfil de usuario"
description: "Las actualizaciones de esta semana incluyen: soporte para configurar formularios de perfil de usuario, así como formularios de creación y edición en la gestión de usuarios, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones aún más. Ideal para usuarios de prueba que quieran experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en las funciones más novedosas del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.11](https://www.nocobase.com/en/blog/v1.4.11)

*Fecha de lanzamiento: 2024-12-18*

#### 🚀 Mejoras

- **[cliente]** Hacer que más componentes soporten el elemento de configuración 'Desbordamiento de contenido con puntos suspensivos' ([#5888](https://github.com/nocobase/nocobase/pull/5888)) por @zhangzhonghe
- **[base de datos]** Añadir firstOrCreate y updateOrCreate al repositorio de relaciones ([#5894](https://github.com/nocobase/nocobase/pull/5894)) por @chareice

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir la falta del parámetro x-data-source en la plantilla de solicitud duplicada para el bloque de fuente de datos externa ([#5882](https://github.com/nocobase/nocobase/pull/5882)) por @katherinehhh
  - Corregir el problema de la barra de desplazamiento horizontal en la tabla dentro del plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) por @katherinehhh
  - Corregir el problema donde a veces aparecen opciones extra 'N/A' en los desplegables de campos de asociación ([#5878](https://github.com/nocobase/nocobase/pull/5878)) por @zhangzhonghe
  - Corregir el problema de creación de vistas PG, resolver el error al seleccionar vistas entre esquemas ([#5881](https://github.com/nocobase/nocobase/pull/5881)) por @katherinehhh
  - Corregir el problema con los estilos de grupo en bloques de formulario cuando el diseño está configurado como horizontal ([#5884](https://github.com/nocobase/nocobase/pull/5884)) por @katherinehhh
- **[Usuarios]**

  - Corregir el problema donde el formulario no se restablece después de añadir o editar un usuario en la gestión de usuarios. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) por @2013xile
  - Corregir los problemas donde la configuración de paginación se restablece después de editar y enviar perfiles de usuario en la gestión de usuarios tras un cambio de página o un cambio de tamaño de página. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) por @2013xile
- **[Gestor de fuentes de datos]** Corregir los problemas de filtrado con la Colección de fuente de datos externa ([#5890](https://github.com/nocobase/nocobase/pull/5890)) por @chareice
- **[Formularios públicos]** Corregir el problema donde el cambio de tema global afecta el tema de la página de vista previa del formulario público ([#5883](https://github.com/nocobase/nocobase/pull/5883)) por @katherinehhh

### [v1.4.13](https://www.nocobase.com/en/blog/v1.4.13)

*Fecha de lanzamiento: 2024-12-19*

#### 🚀 Mejoras

- **[Colección: SQL]** Prohibir el uso de palabras clave y funciones peligrosas en SQL. ([#5913](https://github.com/nocobase/nocobase/pull/5913)) por @2013xile
- **[Editor de temas]** Optimizar la validación de API para la edición de perfiles de usuario y actualizaciones de contraseña ([#5912](https://github.com/nocobase/nocobase/pull/5912)) por @2013xile

#### 🐛 Corrección de errores

- **[Fuente de datos: Principal]** Corregir problemas de carga de claves foráneas ([#5903](https://github.com/nocobase/nocobase/pull/5903)) por @chareice
- **[Colección: SQL]** Corregir el problema donde los campos desaparecen después de actualizar una Colección SQL. ([#5909](https://github.com/nocobase/nocobase/pull/5909)) por @chareice
- **[Gestor de copias de seguridad]** Corregido que la restauración de copia de seguridad no funciona en Windows por @gchust

### [v1.4.14](https://www.nocobase.com/en/blog/v1.4.14)

*Fecha de lanzamiento: 2024-12-21*

#### 🐛 Corrección de errores

- **[Visualización de datos]** Corregir el error al filtrar con asociaciones muchos a muchos anidadas en la consulta de gráficos. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) por @2013xile
- **[Flujo de trabajo: Nodo de agregación]** Corregir el resultado de agregación incorrecto causado por la transacción ([#5916](https://github.com/nocobase/nocobase/pull/5916)) por @mytharcher

### [v1.4.15](https://www.nocobase.com/en/blog/v1.4.15)

*Fecha de lanzamiento: 2024-12-25*

#### 🐛 Corrección de errores

- **[servidor]** Las colecciones no se creaban automáticamente al habilitar el plugin ([#5939](https://github.com/nocobase/nocobase/pull/5939)) por @chenos
- **[cliente]** Corregir la búsqueda de campos de propiedad en reglas de enlace que no coincidía con los datos correctos ([#5925](https://github.com/nocobase/nocobase/pull/5925)) por @katherinehhh
- **[Flujo de trabajo]**

  - Corregir el disparador programado en campo de fecha sin zona horaria ([#5938](https://github.com/nocobase/nocobase/pull/5938)) por @mytharcher
  - Corregir la traducción de variables de ámbito de fecha ([#5919](https://github.com/nocobase/nocobase/pull/5919)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.13](https://www.nocobase.com/en/blog/v1.5.0-beta.13)

*Fecha de lanzamiento: 2024-12-21*

#### 🚀 Mejoras

- **[Visualización de datos]** Añadir parámetro offset a charts-query ([#5911](https://github.com/nocobase/nocobase/pull/5911)) por @Albert-mah

### [v1.5.0-beta.14](https://www.nocobase.com/en/blog/v1.5.0-beta.14)

*Fecha de lanzamiento: 2024-12-21*

#### 🐛 Corrección de errores

- **[Visualización de datos]** Corregir el error al filtrar con asociaciones muchos a muchos anidadas en la consulta de gráficos. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) por @2013xile
- **[Flujo de trabajo: Nodo de agregación]** Corregir el resultado de agregación incorrecto causado por la transacción ([#5916](https://github.com/nocobase/nocobase/pull/5916)) por @mytharcher

### [v1.5.0-beta.15](https://www.nocobase.com/en/blog/v1.5.0-beta.15)

*Fecha de lanzamiento: 2024-12-23*

#### 🎉 Nuevas funciones

- **[cliente]** Añadir rango de fecha limitado al componente de campo de fecha ([#5852](https://github.com/nocobase/nocobase/pull/5852)) por @Cyx649312038

### [v1.5.0-beta.16](https://www.nocobase.com/en/blog/v1.5.0-beta.16)

*Fecha de lanzamiento: 2024-12-24*

#### 🐛 Corrección de errores

- **[compilación]** Corregido el problema de carga después de establecer la variable de entorno `APP_PUBLIC_PATH` ([#5924](https://github.com/nocobase/nocobase/pull/5924)) por @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.6](https://www.nocobase.com/en/blog/v1.6.0-alpha.6)

*Fecha de lanzamiento: 2024-12-19*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para seleccionar datos existentes en subformulario para campo de asociación de varios a varios ([#5849](https://github.com/nocobase/nocobase/pull/5849)) por @katherinehhh

### [v1.6.0-alpha.7](https://www.nocobase.com/en/blog/v1.6.0-alpha.7)

*Fecha de lanzamiento: 2024-12-25*

#### 🎉 Nuevas funciones

- **[Usuarios]** Soporte para configurar formularios de perfil de usuario, así como formularios de creación y edición en la gestión de usuarios. ([#5698](https://github.com/nocobase/nocobase/pull/5698)) por @2013xile

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtenga NocoBase

[**Página principal**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
