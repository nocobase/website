---
title: "Actualizaciones semanales de NocoBase: Soporte para habilitar ventanas emergentes al abrir enlaces en el campo readPretty"
description: "Las actualizaciones de esta semana incluyen: soporte para habilitar ventanas emergentes al abrir enlaces en el campo readPretty, soporte para activar manualmente flujos de trabajo y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Esta semana lanzamos [NocoBase versión 1.4.0](https://www.nocobase.com/en/blog/nocobase-1-4-0), que trae varias funciones nuevas y mejoras, incluyendo gestión simplificada de plugins, funciones de notificación mejoradas, sincronización de datos de usuario y un gestor de copias de seguridad.**

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.53](https://www.nocobase.com/en/blog/v1.3.53)

*Fecha de lanzamiento: 2024-11-28*

### 🚀 Mejoras

- **[cliente]**

  - exportar hook esencial ([#5702](https://github.com/nocobase/nocobase/pull/5702)) por @mytharcher
  - plugin de campo de región de China eliminado de los plugins integrados ([#5693](https://github.com/nocobase/nocobase/pull/5693)) por @katherinehhh
- **[Flujo de trabajo: Evento previo a la acción]** eliminar registro de advertencia en el interceptor de solicitudes por @mytharcher

### 🐛 Corrección de errores

- **[cli]** El modo demonio no elimina archivos sock ([#5750](https://github.com/nocobase/nocobase/pull/5750)) por @chenos
- **[cliente]**

  - Corregir problema con campos de asociación que se afectan entre sí cuando múltiples campos de asociación tienen la misma colección destino ([#5744](https://github.com/nocobase/nocobase/pull/5744)) por @katherinehhh
  - Corregir problema de alineación de casillas de verificación en subtabla ([#5735](https://github.com/nocobase/nocobase/pull/5735)) por @katherinehhh
  - Corregir problema de visualización del campo de clave foránea en el selector de datos ([#5734](https://github.com/nocobase/nocobase/pull/5734)) por @katherinehhh
  - Corregir ajuste de feedbackLayout para mejorar los mensajes de validación en subtabla ([#5700](https://github.com/nocobase/nocobase/pull/5700)) por @katherinehhh
- **[servidor]** Cargar plugins en orden de dependencia ([#5706](https://github.com/nocobase/nocobase/pull/5706)) por @chenos
- **[Bloque: Mapa]** Corregir error al cambiar niveles de zoom en Google Maps ([#5722](https://github.com/nocobase/nocobase/pull/5722)) por @katherinehhh
- **[Fuente de datos: Principal]** Corregir inferencia de nombre de campo en colección de vista ([#5729](https://github.com/nocobase/nocobase/pull/5729)) por @chareice
- **[Gestor de archivos]** cuando el endpoint no está vacío, forcePathStyle se establece en true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) por @chenos

## [v1.3.55](https://www.nocobase.com/en/blog/v1.3.55)

*Fecha de lanzamiento: 2024-12-03*

### 🚀 Mejoras

- **[cliente]** Usar iconos con significados más precisos para los inicializadores de bloques ([#5757](https://github.com/nocobase/nocobase/pull/5757)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir casos E2E basados en iconos cambiados ([#5768](https://github.com/nocobase/nocobase/pull/5768)) por @mytharcher
  - Corregir campo de selección que se muestra en blanco cuando los datos están vacíos ([#5762](https://github.com/nocobase/nocobase/pull/5762)) por @katherinehhh
- **[base de datos]** Corregir actualización de valores de asociación hasOne/belongsTo sin clave foránea ([#5754](https://github.com/nocobase/nocobase/pull/5754)) por @chareice
- **[Gestor de fuentes de datos]** Corregir visualización incorrecta de la clave de origen ([#5771](https://github.com/nocobase/nocobase/pull/5771)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]**

  - Permitir que todos los roles activen el evento de acción personalizada en fuentes de datos externas por @mytharcher
  - Corregir fuente de datos predeterminada como principal por @mytharcher
  - Corregir error de fuente de datos cuando no coincide por @mytharcher
  - Corregir que el disparador de acción personalizada no se active en asociación por @mytharcher

## [v1.4.1](https://www.nocobase.com/en/blog/v1.4.1)

*Fecha de lanzamiento: 2024-12-04*

### 🚀 Mejoras

- **[cli]** optimizar el comando pkg ([#5785](https://github.com/nocobase/nocobase/pull/5785)) por @chenos

### 🐛 Corrección de errores

- **[Móvil]** Corregir campo de entrada de fecha faltante en la operación de filtro en móvil ([#5786](https://github.com/nocobase/nocobase/pull/5786)) por @katherinehhh

## [v1.4.2](https://www.nocobase.com/en/blog/v1.4.2)

*Fecha de lanzamiento: 2024-12-04*

### 🐛 Corrección de errores

- **[Flujo de trabajo]** Corregir etiqueta de flujo de trabajo asíncrono desaparecida en la tabla de flujos de trabajo ([#5787](https://github.com/nocobase/nocobase/pull/5787)) por @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.9](https://www.nocobase.com/en/blog/v1.4.0-beta.9)

*Fecha de lanzamiento: 2024-11-28*

### 🚀 Mejoras

- **[Móvil]** optimizar tema compacto para móvil ([#5723](https://github.com/nocobase/nocobase/pull/5723)) por @katherinehhh

### 🐛 Corrección de errores

- **[Visualización de datos]** Corregir problema de obtención incorrecta de la zona horaria desde `context` ([#5743](https://github.com/nocobase/nocobase/pull/5743)) por @2013xile

## [v1.4.0-beta.10](https://www.nocobase.com/en/blog/v1.4.0-beta.10)

*Fecha de lanzamiento: 2024-11-28*

### 🚀 Mejoras

- **[cliente]** soportar componente de entrada de variable para usar componente personalizado cuando `nullable` está establecido en `false` ([#5746](https://github.com/nocobase/nocobase/pull/5746)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Corregir problema de barra de desplazamiento cuando la tabla tiene pocas columnas con tamaño mediano ([#5745](https://github.com/nocobase/nocobase/pull/5745)) por @katherinehhh

## [v1.4.0-beta.11](https://www.nocobase.com/en/blog/v1.4.0-beta.11)

*Fecha de lanzamiento: 2024-12-02*

### 🚀 Mejoras

- **[cliente]** Soporte de campos de archivos adjuntos en formularios públicos ([#5749](https://github.com/nocobase/nocobase/pull/5749)) por @katherinehhh
- **[cli]** Reiniciar el proceso cuando se añaden o eliminan plugins ([#5761](https://github.com/nocobase/nocobase/pull/5761)) por @chenos
- **[Calendario]** Soporte de creación rápida de eventos haciendo clic en una fecha en el bloque de calendario ([#5733](https://github.com/nocobase/nocobase/pull/5733)) por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]** Corregir problema de ancho de campo en subtabla en diseño horizontal ([#5763](https://github.com/nocobase/nocobase/pull/5763)) por @katherinehhh

## [v1.5.0-beta.1](https://www.nocobase.com/en/blog/v1.5.0-beta.1)

*Fecha de lanzamiento: 2024-12-03*

### 🐛 Corrección de errores

- **[cliente]** Corregir que el selector de registros no muestre los elementos seleccionados al seleccionar entre páginas ([#5770](https://github.com/nocobase/nocobase/pull/5770)) por @katherinehhh
- **[Móvil]** Corregir campo de entrada de fecha faltante en la operación de filtro en móvil ([#5779](https://github.com/nocobase/nocobase/pull/5779)) por @katherinehhh
- **[Flujo de trabajo]** Corregir variable que no se muestra en el modal de prueba de nodos ([#5766](https://github.com/nocobase/nocobase/pull/5766)) por @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.6.0-alpha.2](https://www.nocobase.com/en/blog/v1.6.0-alpha.2)

*Fecha de lanzamiento: 2024-12-03*

### 🎉 Nuevas funciones

- **[cliente]**

  - Soporte para habilitar la apertura de ventanas emergentes desde enlaces en campos readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) por @katherinehhh
  - Soporte para acciones de asociar y desasociar en bloques de asociación ([#5695](https://github.com/nocobase/nocobase/pull/5695)) por @katherinehhh
- **[servidor]** Añadir gestor de auditoría ([#5601](https://github.com/nocobase/nocobase/pull/5601)) por @chenzhizdt
- **[Flujo de trabajo]** soporte para activar manualmente flujos de trabajo ([#5664](https://github.com/nocobase/nocobase/pull/5664)) por @mytharcher
- **[Flujo de trabajo: Evento previo a la acción]** soporte para activar manualmente flujos de trabajo por @mytharcher

### 🚀 Mejoras

- **[cliente]**

  - implementar carga bajo demanda para componentes del front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) por @gchust
  - Mejorar el rendimiento de renderizado de páginas y soportar la funcionalidad de mantener la página activa ([#5515](https://github.com/nocobase/nocobase/pull/5515)) por @zhangzhonghe
- **[Campo de colección: Ordenar]** añadir descripción del plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) por @mytharcher
- **[Incrustar NocoBase]** Mejorar el rendimiento de renderizado de páginas por @zhangzhonghe

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir problemas donde las variables no se pueden usar correctamente en bloques de fuentes de datos de terceros ([#5782](https://github.com/nocobase/nocobase/pull/5782)) por @zhangzhonghe
  - Corregir el problema donde los valores de los campos de asociación están vacíos en las plantillas de bloque. Corregir el problema donde el ámbito de datos del bloque que usa variables no funciona correctamente en fuentes de datos de terceros ([#5777](https://github.com/nocobase/nocobase/pull/5777)) por @zhangzhonghe
  - Corregir el problema donde las propiedades dinámicas del componente no funcionan con la carga diferida ([#5776](https://github.com/nocobase/nocobase/pull/5776)) por @gchust
  - corregido el mensaje de advertencia en React al cargar hooks dinámicamente en el entorno de desarrollo ([#5758](https://github.com/nocobase/nocobase/pull/5758)) por @gchust
- **[Visualización de datos]** Corregir el problema donde los componentes de campo de filtro de los bloques de gráficos no se renderizan ([#5769](https://github.com/nocobase/nocobase/pull/5769)) por @2013xile

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 Minutos!

## 👇 Obtener NocoBase

[**Página principal**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
