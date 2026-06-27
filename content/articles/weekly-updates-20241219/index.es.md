---
title: "Actualizaciones semanales de NocoBase: Optimización de la experiencia móvil"
description: "Las actualizaciones de esta semana incluyen: optimización de la interacción móvil, corrección de errores y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones aún más. Ideal para usuarios de prueba que quieran experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en las funciones más avanzadas del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.9](https://www.nocobase.com/en/blog/v1.4.9)

*Fecha de lanzamiento: 2024-12-12*

#### 🐛 Corrección de errores

- **[sdk]** Eliminar la configuración regional predeterminada ([#5867](https://github.com/nocobase/nocobase/pull/5867)) por @chenos
- **[cliente]**

  - Corregir el problema donde las variables de campo de asociación anidadas en el ámbito de datos tienen valores vacíos ([#5866](https://github.com/nocobase/nocobase/pull/5866)) por @zhangzhonghe
  - Corregir la aparición de la barra de desplazamiento cuando hay menos columnas con una columna fija a la derecha ([#5864](https://github.com/nocobase/nocobase/pull/5864)) por @katherinehhh
  - Corregir la posición incorrecta del estilo del componente `FilterItem` ([#5851](https://github.com/nocobase/nocobase/pull/5851)) por @mytharcher
- **[Gestor de copias de seguridad]** Se corrigió el error de descarga de copias de seguridad para subaplicaciones con dominio personalizado por @gchust

### [v1.4.10](https://www.nocobase.com/en/blog/v1.4.10)

*Fecha de lanzamiento: 2024-12-12*

#### 🎉 Nuevas funciones

- **[Acción: Solicitud personalizada]** Soporte para usar la variable 'Formulario actual' en botones de solicitud personalizada ([#5871](https://github.com/nocobase/nocobase/pull/5871)) por @zhangzhonghe

#### 🚀 Mejoras

- **[Visualización de datos]** Permite usar claves foráneas en la configuración de consultas de gráficos ([#5869](https://github.com/nocobase/nocobase/pull/5869)) por @2013xile

#### 🐛 Corrección de errores

- **[cliente]** Corregir el problema donde el selector de tabla de archivos no se muestra en modo de no configuración al usar la selección de archivos ([#5874](https://github.com/nocobase/nocobase/pull/5874)) por @katherinehhh
- **[Control de acceso]** Se corrigieron problemas relacionados con registros de replicación después de configurar permisos ([#5839](https://github.com/nocobase/nocobase/pull/5839)) por @chareice
- **[Flujo de trabajo]** Corregir el tiempo de espera de la transacción al eliminar la ejecución automáticamente ([#5870](https://github.com/nocobase/nocobase/pull/5870)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.7](https://www.nocobase.com/en/blog/v1.5.0-beta.7)

*Fecha de lanzamiento: 2024-12-13*

#### 🚀 Mejoras

- **[Autenticación]** Optimizar la lógica de obtención de metadatos de acciones de auditoría. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) por @chenzhizdt

#### 🐛 Corrección de errores

- **[Visualización de datos]** Corregir la altura inicial del bloque de gráfico ([#5879](https://github.com/nocobase/nocobase/pull/5879)) por @2013xile
- **[Flujo de trabajo]** Corregir el error lanzado al reanudar un nodo asíncrono en la ejecución manual de un flujo de trabajo ([#5877](https://github.com/nocobase/nocobase/pull/5877)) por @mytharcher

### [v1.5.0-beta.9](https://www.nocobase.com/en/blog/v1.5.0-beta.9)

*Fecha de lanzamiento: 2024-12-15*

#### 🎉 Nuevas funciones

- **[Móvil]** Agregar interruptor global para controlar todos los botones de retroceso en dispositivos móviles (habilitado por defecto) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) por @katherinehhh

#### 🐛 Corrección de errores

- **[Sincronización de datos de usuario]** Corregir problemas de visualización de los botones de sincronización y tareas. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) por @2013xile

### [v1.5.0-beta.10](https://www.nocobase.com/en/blog/v1.5.0-beta.10)

*Fecha de lanzamiento: 2024-12-18*

#### 🚀 Mejoras

- **[Móvil]** Adaptar el componente selector de rango de fecha y hora para dispositivos móviles ([#5863](https://github.com/nocobase/nocobase/pull/5863)) por @katherinehhh

#### 🐛 Corrección de errores

- **[Fuente de datos: Principal]** Corregir el problema donde los campos del sistema en el bloque de formulario de filtro no se pueden editar ([#5885](https://github.com/nocobase/nocobase/pull/5885)) por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.5](https://www.nocobase.com/en/blog/v1.6.0-alpha.5)

*Fecha de lanzamiento: 2024-12-11*

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir el problema donde el título de la pestaña del navegador no se actualiza después de cambiar de página ([#5857](https://github.com/nocobase/nocobase/pull/5857)) por @zhangzhonghe
  - Corregir el problema donde al actualizar la página en la página de gestión de fuentes de datos redirige a la página de inicio ([#5855](https://github.com/nocobase/nocobase/pull/5855)) por @zhangzhonghe
  - Corregir el problema de que los datos no cambian después de la paginación en una subtabla ([#5856](https://github.com/nocobase/nocobase/pull/5856)) por @zhangzhonghe
  - Corregir el problema donde los datos del rol no se muestran en la tabla de gestión de usuarios ([#5846](https://github.com/nocobase/nocobase/pull/5846)) por @zhangzhonghe
  - Corregir el problema donde los campos de asociación en plantillas de referencia a veces no muestran datos ([#5848](https://github.com/nocobase/nocobase/pull/5848)) por @zhangzhonghe
  - Corregir el problema donde el botón 'Solicitud personalizada' no es visible inmediatamente después de agregarse ([#5845](https://github.com/nocobase/nocobase/pull/5845)) por @zhangzhonghe
  - Evitar que las páginas ocultas afecten las interacciones con otras páginas ([#5836](https://github.com/nocobase/nocobase/pull/5836)) por @zhangzhonghe
  - Corregir el problema donde los bloques agregados en una ventana emergente no se muestran al reabrir la ventana emergente ([#5838](https://github.com/nocobase/nocobase/pull/5838)) por @zhangzhonghe
- **[servidor]** Establecer las acciones disponibles predeterminadas para el ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) por @chenos

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costos. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtener NocoBase

[**Página de inicio**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
