---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana incluyen: optimizaciones para dispositivos móviles, mejoras en los flujos de trabajo y corrección de errores."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**La semana pasada lanzamos [NocoBase versión 1.5.0](https://www.nocobase.com/en/blog/nocobase-1-5-0), que trae optimizaciones principales, importación/exportación de datos a gran escala, gestión de correo electrónico, impresión de plantillas y muchas otras funciones nuevas.**

**NocoBase se actualiza actualmente con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones aún más. Ideal para usuarios de prueba que quieran experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.1](https://www.nocobase.com/en/blog/v1.5.1)

*Fecha de lanzamiento: 2025-02-06*

#### 🐛 Corrección de errores

- **[cliente]**
  - Traducción incorrecta para el título de `Sub-formulario (Popover)` ([#6159](https://github.com/nocobase/nocobase/pull/6159)) por @gchust
  - Cuando el campo del subformulario se establece en 'Oculto (valor reservado)', sus variables de valor predeterminado no funcionan correctamente ([#6165](https://github.com/nocobase/nocobase/pull/6165)) por @zhangzhonghe

### [v1.5.2](https://www.nocobase.com/en/blog/v1.5.2)

*Fecha de lanzamiento: 2025-02-06*

#### 🚀 Mejoras

- **[Móvil]** Ocultar el encabezado de la página de configuración móvil cuando no hay permiso de configuración ([#6171](https://github.com/nocobase/nocobase/pull/6171)) por @zhangzhonghe

#### 🐛 Corrección de errores

- **[Flujo de trabajo: nodo de notificación]** Se aseguró de que las notificaciones se envíen correctamente cuando la entrada del usuario contiene sintaxis similar a Handlebars. ([#6164](https://github.com/nocobase/nocobase/pull/6164)) por @sheldon66
- **[Flujo de trabajo: nodo manual]** Corregir que los valores del formulario no se analizan al enviar el botón del terminal ([#6160](https://github.com/nocobase/nocobase/pull/6160)) por @mytharcher

### [v1.5.3](https://www.nocobase.com/en/blog/v1.5.3)

*Fecha de lanzamiento: 2025-02-07*

#### 🐛 Corrección de errores

- **[cliente]**
  - La ventana emergente abierta al hacer clic en el campo belongsToArray está obteniendo datos incorrectos ([#6173](https://github.com/nocobase/nocobase/pull/6173)) por @zhangzhonghe
  - El operador del campo de hora se estableció en "entre" en el formulario de filtro, pero el componente no cambió al selector de rango de tiempo ([#6170](https://github.com/nocobase/nocobase/pull/6170)) por @katherinehhh
  - El formulario de edición emergente del bloque Kanban y calendario no mostraba "Cambios sin guardar" ([#6172](https://github.com/nocobase/nocobase/pull/6172)) por @katherinehhh

### [v1.5.4](https://www.nocobase.com/en/blog/v1.5.4)

*Fecha de lanzamiento: 2025-02-10*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Agregar carga a la acción de duplicar ([#6179](https://github.com/nocobase/nocobase/pull/6179)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**
  - Corregir error lanzado en la configuración del campo del nodo de creación ([#6187](https://github.com/nocobase/nocobase/pull/6187)) por @mytharcher
  - La opción de configuración 'Permitir selección múltiple' para campos de asociación no se muestra en los Formularios de Filtro ([#6174](https://github.com/nocobase/nocobase/pull/6174)) por @zhangzhonghe
  - El campo permanece oculto después de ser ocultado por reglas de vinculación ([#6182](https://github.com/nocobase/nocobase/pull/6182)) por @zhangzhonghe
- **[utilidades]** optimizar la lógica de lectura de almacenamiento/plugins ([#6186](https://github.com/nocobase/nocobase/pull/6186)) por @chenos
- **[Notificación: Mensaje en la aplicación]** Corrección: Agregar filtro de usuario a las subconsultas de marca de tiempo y título del mensaje en la API de lista de canales para garantizar el aislamiento de datos. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) por @deepure
- **[Gestor de copias de seguridad]** Los archivos no se copiaron de la copia de seguridad a la carpeta de carga durante la restauración en modo tolerante por @gchust

### [v1.5.5](https://www.nocobase.com/en/blog/v1.5.5)

*Fecha de lanzamiento: 2025-02-11*

#### 🚀 Mejoras

- **[Notificación: Mensaje en la aplicación]** Agregar prueba para recuperar el título y la marca de tiempo del mensaje más reciente en canales dentro de la aplicación. ([#6189](https://github.com/nocobase/nocobase/pull/6189)) por @sheldon66

### [v1.5.6](https://www.nocobase.com/en/blog/v1.5.6)

*Fecha de lanzamiento: 2025-02-12*

#### 🐛 Corrección de errores

- **[cliente]**
  - El bloque no se actualiza después de la navegación de página ([#6200](https://github.com/nocobase/nocobase/pull/6200)) por @zhangzhonghe
  - El bloque de formulario no se muestra al agregar un formulario de creación a través de una acción emergente en una fila de tabla ([#6190](https://github.com/nocobase/nocobase/pull/6190)) por @katherinehhh
  - La configuración de altura del bloque de tabla no se aplica cuando no hay datos ([#6192](https://github.com/nocobase/nocobase/pull/6192)) por @katherinehhh
- **[Acción: Solicitud personalizada]**
  - Valor incorrecto de la variable 'Registro actual' en el botón de solicitud personalizada ([#6196](https://github.com/nocobase/nocobase/pull/6196)) por @zhangzhonghe
  - Compatibilidad del botón de solicitud personalizada con variables heredadas ([#6194](https://github.com/nocobase/nocobase/pull/6194)) por @zhangzhonghe
- **[Visualización de datos]** Los bloques de gráficos no se muestran cuando se agregan a las ventanas emergentes del panel de acciones ([#6198](https://github.com/nocobase/nocobase/pull/6198)) por @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.4](https://www.nocobase.com/en/blog/v1.6.0-beta.4)

*Fecha de lanzamiento: 2025-02-11*

#### 🚀 Mejoras

- **[Gestor de copias de seguridad]** Eliminar el modo tolerante de la interfaz de usuario por @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.21](https://www.nocobase.com/en/blog/v1.6.0-alpha.21)

*Fecha de lanzamiento: 2025-02-07*

#### 🎉 Nuevas funciones

- **[Restricción de IP]** Corregir error de la aplicación cuando la configuración de restricción de IP no existe. por @sheldon66

#### 🐛 Corrección de errores

- **[auth]** Actualizar la lógica del middleware de autenticación del cliente para evitar fallos en la actualización del token debido a la concurrencia. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) por @sheldon66

### [v1.6.0-alpha.23](https://www.nocobase.com/en/blog/v1.6.0-alpha.23)

*Fecha de lanzamiento: 2025-02-07*

#### 🐛 Corrección de errores

- **[cliente]** Corregir que la opción "Seleccionar de datos existentes" aún se muestra al deshabilitar "Permitir múltiples" en el subformulario de relación muchos-a-muchos ([#6167](https://github.com/nocobase/nocobase/pull/6167)) por @katherinehhh
- **[Gestor de fuentes de datos]** Usar loginWithJti para actualizar los casos de prueba relacionados con la autenticación y prevenir errores. ([#6175](https://github.com/nocobase/nocobase/pull/6175)) por @sheldon66
- **[Cliente WEB]** Permisos de enrutamiento anormales después de la actualización ([#6177](https://github.com/nocobase/nocobase/pull/6177)) por @zhangzhonghe

### [v1.6.0-alpha.24](https://www.nocobase.com/en/blog/v1.6.0-alpha.24)

*Fecha de lanzamiento: 2025-02-11*

#### 🎉 Nuevas funciones

- **[Localización]** Localización para rutas de escritorio y móvil ([#6180](https://github.com/nocobase/nocobase/pull/6180)) por @2013xile

#### 🚀 Mejoras

- **[cliente]** El título de la página por defecto usa el título de la ruta ([#6188](https://github.com/nocobase/nocobase/pull/6188)) por @zhangzhonghe
- **[Gestor de fuentes de datos]** Modificar la función de prueba de inicio de sesión para que sea asíncrona y actualizar los casos de prueba relevantes. ([#6181](https://github.com/nocobase/nocobase/pull/6181)) por @sheldon66
- **[Flujo de trabajo: Evento de acción personalizada]** Actualizar los casos de prueba relevantes para usar inicio de sesión asíncrono. por @sheldon66
- **[Flujo de trabajo: Aprobación]** Actualizar los casos de prueba relevantes para usar inicio de sesión asíncrono. por @sheldon66

#### 🐛 Corrección de errores

- **[Cliente WEB]** Eliminar el título de pestaña de página predeterminado ([#6178](https://github.com/nocobase/nocobase/pull/6178)) por @zhangzhonghe

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costos. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubre NocoBase en 3 Minutos!

## 👇 Obtén NocoBase

[**Página principal**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
