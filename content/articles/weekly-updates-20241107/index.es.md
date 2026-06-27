---
title: "Actualizaciones semanales de NocoBase: Añadir nuevo canal de notificación"
description: "Actualizaciones semanales de NocoBase 2024-11-07"
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

Actualmente, NocoBase se actualiza con dos ramas: `main` y `next`.

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión alfa, que incluye algunas funciones nuevas no publicadas. Esta versión puede no ser completamente estable y es adecuada para que desarrolladores o evaluadores prueben nuevas funciones con anticipación o realicen pruebas de compatibilidad.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.43-beta](https://www.nocobase.com/en/blog/v1.3.43-beta)

*Fecha de publicación: 2024-11-05*

### 🚀 Mejoras

- **[cliente]** la precisión numérica se puede configurar hasta 8 dígitos ([#5552](https://github.com/nocobase/nocobase/pull/5552)) por @chenos

### 🐛 Corrección de errores

- **[cliente]** Corregir el estilo de vinculación que no se actualiza en el formulario. ([#5539](https://github.com/nocobase/nocobase/pull/5539)) por @sheldon66
- **[Auth: Claves API]** Corregir la ruta URL de la página de configuración de claves API ([#5562](https://github.com/nocobase/nocobase/pull/5562)) por @2013xile
- **[Móvil]** Corregir el problema de que las imágenes de vista previa quedan cubiertas por la página ([#5535](https://github.com/nocobase/nocobase/pull/5535)) por @zhangzhonghe
- **[Bloque: Mapa]** resolver la representación del mapa en subdetalles y la visualización incorrecta de valores para campos vacíos ([#5526](https://github.com/nocobase/nocobase/pull/5526)) por @katherinehhh
- **[Colección: Árbol]** Corregir errores al actualizar la colección de rutas ([#5551](https://github.com/nocobase/nocobase/pull/5551)) por @2013xile

## [v1.3.44-beta](https://www.nocobase.com/en/blog/v1.3.44-beta)

*Fecha de publicación: 2024-11-05*

### 🎉 Nuevas funciones

- **[Auth: OIDC]** Añadir una opción "habilitar cierre de sesión iniciado por RP" por @2013xile

### 🐛 Corrección de errores

- **[cliente]** Corregir problema de filtro al configurar un campo de selección única como campo de título en la selección de asociación ([#5581](https://github.com/nocobase/nocobase/pull/5581)) por @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241031134640](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241031134640)

*Fecha de publicación: 2024-10-31*

### 🎉 Nuevas funciones

- **[WeCom]** Añadir canal de notificación WeCom por @chenzhizdt

### 🚀 Mejoras

- **[cliente]** restaurar el valor predeterminado cuando se borra el título del campo ([#5549](https://github.com/nocobase/nocobase/pull/5549)) por @katherinehhh
- **[Gestor de notificaciones]**

  - Añadir componentes UserSelect y UserAddition para agilizar el desarrollo de canales de notificación ([#5553](https://github.com/nocobase/nocobase/pull/5553)) por @2013xile
  - añadir API para obtener el registro de tipos de canal del plugin de notificación ([#5531](https://github.com/nocobase/nocobase/pull/5531)) por @mytharcher
  - ajustar el nombre del registro de tipos de canal del plugin de notificación ([#5532](https://github.com/nocobase/nocobase/pull/5532)) por @mytharcher
  - añadir API del plugin del gestor de notificaciones para obtener todos los tipos registrados ([#5529](https://github.com/nocobase/nocobase/pull/5529)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Mejorar la interfaz de usuario del mensaje en la aplicación y añadir algunos registros. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) por @sheldon66

### 🐛 Corrección de errores

- **[base de datos]**

  - corregir la actualización de opciones de colección con clave de destino de filtro ([#5558](https://github.com/nocobase/nocobase/pull/5558)) por @chareice
  - corregir el valor incorrecto de primaryKeyField en sequelize cuando se trabaja con múltiples claves de destino de filtro ([#5556](https://github.com/nocobase/nocobase/pull/5556)) por @chareice
- **[cliente]**

  - Corregir el problema por el que los componentes esqueleto en los bloques de tabla no desaparecen ([#5548](https://github.com/nocobase/nocobase/pull/5548)) por @zhangzhonghe
  - Corregir problemas con la acción de eliminación, puntos suspensivos de texto y visualización de nuevos datos en subtablas ([#5523](https://github.com/nocobase/nocobase/pull/5523)) por @katherinehhh
- **[Gestor de fuentes de datos]** Corregir la eliminación de fuente de datos en estado fallido ([#5554](https://github.com/nocobase/nocobase/pull/5554)) por @chareice
- **[Notificación: Correo electrónico]**

  - corregir la consulta de usuarios por ids en notificación por correo electrónico ([#5533](https://github.com/nocobase/nocobase/pull/5533)) por @mytharcher
  - corregir el asunto faltante en la notificación por correo electrónico basada en ids de usuario ([#5534](https://github.com/nocobase/nocobase/pull/5534)) por @mytharcher
  - corregir la ruta del campo de reacción en el formulario dinámico de notificación por correo electrónico ([#5527](https://github.com/nocobase/nocobase/pull/5527)) por @mytharcher
- **[Campo de colección: Muchos a muchos (matriz)]** Corregir el problema por el que el componente de selección para un campo muchos a muchos (matriz) solo tiene una opción ([#5544](https://github.com/nocobase/nocobase/pull/5544)) por @2013xile
- **[Gestor de notificaciones]** corregir el bloqueo de página debido a un tipo de canal incorrecto ([#5528](https://github.com/nocobase/nocobase/pull/5528)) por @mytharcher
- **[Flujo de trabajo: Nodo SQL]** Corregir que sse provoque el tiempo de espera de "waitForLoadState('networkidle')" ([#5524](https://github.com/nocobase/nocobase/pull/5524)) por @hongboji
- **[Componente de campo: máscara]** Corregido que los datos originales no se puedan mostrar al hacer clic si el componente está en estado de solo lectura por @gchust
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir que sse provoque el tiempo de espera de "waitForLoadState('networkidle')" por @hongboji
- **[WeCom]** Corregir el problema de respuesta 404 no encontrado al ingresar a la aplicación desde el banco de trabajo de WeCom por @chenzhizdt

## [v1.4.0-alpha.20241104151643](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241104151643)

*Fecha de publicación: 2024-11-04*

### 🎉 Nuevas funciones

- **[cliente]**
  - [tabla] Añadir acción 'ventana emergente' para configurar acciones ([#5580](https://github.com/nocobase/nocobase/pull/5580)) por @bignof
  - "Campos de configuración" admiten el filtrado de campos ([#5471](https://github.com/nocobase/nocobase/pull/5471)) por @katherinehhh

### 🚀 Mejoras

- **[cliente]** añadir soporte para parámetros de diseño (labelAlign, labelWidth, labelWrap) ([#5521](https://github.com/nocobase/nocobase/pull/5521)) por @katherinehhh
- **[Gestor de múltiples aplicaciones]** inicio rápido asíncrono de subaplicaciones ([#5571](https://github.com/nocobase/nocobase/pull/5571)) por @chenos
- **[Colección: Árbol]** Mejorar la lógica de carga de la colección con atributo de esquema ([#5541](https://github.com/nocobase/nocobase/pull/5541)) por @chareice

### 🐛 Corrección de errores

- **[cliente]**
  - el campo de búsqueda debe buscar basándose en el texto traducido ([#5572](https://github.com/nocobase/nocobase/pull/5572)) por @katherinehhh
  - Corregir problema al añadir datos a la subtabla después de la eliminación ([#5566](https://github.com/nocobase/nocobase/pull/5566)) por @katherinehhh

## [v1.4.0-alpha.20241105053324](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105053324)

*Fecha de publicación: 2024-11-05*

### 🐛 Corrección de errores

- **[cliente]** eliminar el cuadro de búsqueda al añadir bloque a la página ([#5577](https://github.com/nocobase/nocobase/pull/5577)) por @katherinehhh

## [v1.4.0-alpha.20241105230315](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105230315)

*Fecha de publicación: 2024-11-06*

### 🐛 Corrección de errores

- **[cliente]** Corregir error de resolución al configurar campos después de añadir una nueva fuente de datos ([#5576](https://github.com/nocobase/nocobase/pull/5576)) por @katherinehhh

## [v1.4.0-alpha.1](https://www.nocobase.com/en/blog/v1.4.0-alpha.1)

*Fecha de publicación: 2024-11-06*

### 🎉 Nuevas funciones

- **[utilidades]** soporte para usar handlebars en el contenido del mensaje ([#5559](https://github.com/nocobase/nocobase/pull/5559)) por @mytharcher
- **[cliente]** el bloque de tabla admite configuración de tamaño ([#5563](https://github.com/nocobase/nocobase/pull/5563)) por @katherinehhh
- **[Notificación: Mensaje en la aplicación]** soporte para mensajes en la aplicación para el cliente móvil ([#5560](https://github.com/nocobase/nocobase/pull/5560)) por @sheldon66

### 🚀 Mejoras

- **[Gestor de notificaciones]** Añadir destinatarios a los registros de notificaciones ([#5561](https://github.com/nocobase/nocobase/pull/5561)) por @sheldon66

### 🐛 Corrección de errores

- **[cliente]** Corregir error al abrir ventana emergente en kanban ([#5592](https://github.com/nocobase/nocobase/pull/5592)) por @zhangzhonghe
- **[Control de acceso]** Corregir metadatos acl con múltiples claves de destino de filtro ([#5598](https://github.com/nocobase/nocobase/pull/5598)) por @chareice

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo e inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtenga NocoBase

[**Página de inicio**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
