---
title: "Actualizaciones semanales de NocoBase: Mejora del rendimiento de renderizado de bloques de tabla y más"
description: "Actualizaciones semanales de NocoBase 2024-10-31"
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

Actualmente, NocoBase se actualiza con dos ramas: `main` y `next`.

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión alfa, que incluye algunas funciones nuevas no publicadas. Esta versión puede no ser completamente estable y es adecuada para que desarrolladores o evaluadores prueben las nuevas funciones por adelantado o realicen pruebas de compatibilidad.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.38-beta](https://www.nocobase.com/en/blog/v1.3.38-beta)

*Fecha de publicación: 2024-10-24*

### 🐛 Corrección de errores

- **[cliente]**

  - Problema de paginación en el bloque de lista con colección de paginación simple ([#5500](https://github.com/nocobase/nocobase/pull/5500)) por @katherinehhh
  - En modo no configuración, mostrar solo la colección actual en el formulario de edición. ([#5499](https://github.com/nocobase/nocobase/pull/5499)) por @katherinehhh
- **[Flujo de trabajo: nodo de solicitud HTTP]** Se corrige el problema de que aparecían espacios en blanco especiales al pegar contenido en el área de texto de variables ([#5497](https://github.com/nocobase/nocobase/pull/5497)) por @mytharcher
- **[Departamentos]** Se corrige el problema de la verificación incorrecta de permisos de fuentes de datos externas bajo el rol de departamento por @2013xile

## [v1.3.39-beta](https://www.nocobase.com/en/blog/v1.3.39-beta)

*Fecha de publicación: 2024-10-24*

### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema por el cual no se podían agregar bloques de filtro en la ventana emergente ([#5502](https://github.com/nocobase/nocobase/pull/5502)) por @zhangzhonghe

## [v1.3.40-beta](https://www.nocobase.com/en/blog/v1.3.40-beta)

*Fecha de publicación: 2024-10-25*

### 🎉 Nuevas funciones

- **[Auth: OIDC]** Se añade una opción para permitir omitir la verificación SSL por @2013xile

### 🚀 Mejoras

- **[cliente]** Mostrar casilla de verificación desmarcada deshabilitada para campos no seleccionados ([#5503](https://github.com/nocobase/nocobase/pull/5503)) por @katherinehhh

### 🐛 Corrección de errores

- **[base de datos]** Se corrige el problema de que los operadores de cadena "contiene" y "no contiene" no manejan correctamente los valores `null` ([#5509](https://github.com/nocobase/nocobase/pull/5509)) por @2013xile
- **[cliente]** Se corrige la regla de vinculación para evaluar correctamente las variables de parámetros de URL ([#5504](https://github.com/nocobase/nocobase/pull/5504)) por @katherinehhh
- **[Bloque: Mapa]** Se corrige el problema de que algunos mapas se muestran incorrectamente cuando existen múltiples mapas debido a múltiples llamadas al método `load` de AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) por @Cyx649312038

## [v1.3.41-beta](https://www.nocobase.com/en/blog/v1.3.41-beta)

*Fecha de publicación: 2024-10-27*

### 🚀 Mejoras

- **[Control de acceso]** Optimizar el rendimiento para tablas grandes en acl ([#5496](https://github.com/nocobase/nocobase/pull/5496)) por @chareice

## [v1.3.42-beta](https://www.nocobase.com/en/blog/v1.3.42-beta)

*Fecha de publicación: 2024-10-28*

### 🐛 Corrección de errores

- **[Colección: Árbol]** Se corrige el problema de que las rutas de los nodos no se actualizan al desasociar hijos ([#5522](https://github.com/nocobase/nocobase/pull/5522)) por @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241024133132](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024133132)

*Fecha de publicación: 2024-10-24*

### 🎉 Nuevas funciones

- **[cliente]** Soporte para agregar grupos en formularios y bloques de detalle ([#5498](https://github.com/nocobase/nocobase/pull/5498)) por @katherinehhh
- **[Calendario]** plugin-calendar añade configuraciones de vista predeterminada y configuraciones de internacionalización ([#5487](https://github.com/nocobase/nocobase/pull/5487)) por @Cyx649312038
- **[Fuente de datos: KingbaseES]** Soporte para usar la base de datos Kingbase como fuente de datos principal o externa (modo pg) por @chareice
  Referencia: [Fuente de datos - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### 🚀 Mejoras

- **[base de datos]** Soporte para la lógica de carga estática de plugins ([#5466](https://github.com/nocobase/nocobase/pull/5466)) por @chareice
- **[cliente]** Mejora del rendimiento de renderizado de bloques de tabla (el tiempo de renderizado inicial se reduce aproximadamente un 50%) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) por @zhangzhonghe
- **[Móvil]** El cliente móvil soporta el bloque de formulario de filtro ([#5482](https://github.com/nocobase/nocobase/pull/5482)) por @katherinehhh
- **[Administrador de copias de seguridad]**

  - Cambiar la configuración predeterminada de `Respaldar archivos de almacenamiento local` a verdadero por @gchust
  - Revertir los datos de la base de datos si la acción de restauración falla por @gchust

### 🐛 Corrección de errores

- **[servidor]** El evento afterLoad de la aplicación no se activaba después de la instalación ([#5506](https://github.com/nocobase/nocobase/pull/5506)) por @chenos
- **[Formularios públicos]** registro del fragmento ACL para formulario público ([#5505](https://github.com/nocobase/nocobase/pull/5505)) por @katherinehhh
- **[Administrador de copias de seguridad]** Se corrigió que después de restaurar una subaplicación, la aplicación principal fallaba si la subaplicación usaba un esquema diferente por @gchust

## [v1.4.0-alpha.20241024151311](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024151311)

*Fecha de publicación: 2024-10-24*

### 🎉 Nuevas funciones

- **[Bloque: Panel de acciones]** Añadir configuración de título para el bloque del panel de acciones ([#5492](https://github.com/nocobase/nocobase/pull/5492)) por @Cyx649312038

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costos. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtenga NocoBase

[**Página principal**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
