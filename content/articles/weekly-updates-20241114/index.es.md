---
title: "Actualizaciones semanales de NocoBase: Mejora de la usabilidad del flujo de trabajo"
description: "Actualizaciones semanales de NocoBase 2024-11-14"
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase se actualiza actualmente con dos ramas: `main` y `next`.

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión alfa, que incluye algunas funciones nuevas no publicadas. Esta versión puede no ser completamente estable y es adecuada para desarrolladores o evaluadores que quieran probar nuevas funciones por adelantado o realizar pruebas de compatibilidad.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.45-beta](https://www.nocobase.com/en/blog/v1.3.45-beta)

*Fecha de publicación: 2024-11-06*

### 🐛 Corrección de errores

- **[cliente]** permiso para el campo de tabla de asociación en la tabla basado en el permiso del campo de asociación correspondiente ([#5569](https://github.com/nocobase/nocobase/pull/5569)) por @katherinehhh
- **[Acción: Exportar registros]** Corregir exportación con i18n ([#5591](https://github.com/nocobase/nocobase/pull/5591)) por @chareice
- **[Acción: Importar registros]** corregir problema con la importación de asociación "pertenece a" ([#5417](https://github.com/nocobase/nocobase/pull/5417)) por @chareice

## [v1.3.47-beta](https://www.nocobase.com/en/blog/v1.3.47-beta)

*Fecha de publicación: 2024-11-08*

### 🚀 Mejoras

- **[Autenticación]** Optimizar mensaje de error para inicio de sesión y registro ([#5612](https://github.com/nocobase/nocobase/pull/5612)) por @2013xile

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir problemas de valor predeterminado en subtablas ([#5607](https://github.com/nocobase/nocobase/pull/5607)) por @zhangzhonghe
  - Corregir problema con el soporte de búsqueda difusa para campos de asociación con campo de título de tipo cadena ([#5611](https://github.com/nocobase/nocobase/pull/5611)) por @katherinehhh
- **[Autenticación]** Corregir el problema por el cual los usuarios no pueden cambiar la contraseña al iniciar sesión con un autenticador que no sea de contraseña ([#5609](https://github.com/nocobase/nocobase/pull/5609)) por @2013xile

## [v1.3.48-beta](https://www.nocobase.com/en/blog/v1.3.48-beta)

*Fecha de publicación: 2024-11-11*

### 🚀 Mejoras

- **[cliente]** soporte para ocultar elementos del menú ([#5624](https://github.com/nocobase/nocobase/pull/5624)) por @chenos
- **[servidor]** añadir variable de entorno DB_SQL_BENCHMARK ([#5615](https://github.com/nocobase/nocobase/pull/5615)) por @chareice

### 🐛 Corrección de errores

- **[cliente]** soporte para colección de archivos como destino de asociación uno a muchos ([#5619](https://github.com/nocobase/nocobase/pull/5619)) por @mytharcher
- **[Acción: Importar registros]** Corregido el problema por el cual los datos de relación muchos a muchos no se podían importar a través del campo id ([#5623](https://github.com/nocobase/nocobase/pull/5623)) por @chareice

## [v1.3.49-beta](https://www.nocobase.com/en/blog/v1.3.49-beta)

*Fecha de publicación: 2024-11-13*

### 🚀 Mejoras

- **[cliente]** soporte para campos uno a uno y muchos a muchos (array) para usar colección de archivos ([#5637](https://github.com/nocobase/nocobase/pull/5637)) por @mytharcher
- **[evaluadores]** usar Formula.js como evaluador predeterminado en el nodo de cálculo ([#5626](https://github.com/nocobase/nocobase/pull/5626)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Corregir problema de reinicio que revierte el título del botón de filtro al valor predeterminado ([#5635](https://github.com/nocobase/nocobase/pull/5635)) por @katherinehhh
- **[Acción: Importar registros]** Corregido el problema por el cual los datos de relación muchos a muchos no se podían importar a través del campo id ([#5623](https://github.com/nocobase/nocobase/pull/5623)) por @chareice

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.6](https://www.nocobase.com/en/blog/v1.4.0-alpha.6)

*Fecha de publicación: 2024-11-07*

### 🎉 Nuevas funciones

- **[cliente]** Soporte para opciones de configuración para ocultar columnas de tabla ([#5597](https://github.com/nocobase/nocobase/pull/5597)) por @zhangzhonghe

### 🚀 Mejoras

- **[Administrador de fuentes de datos]** Ajustar las categorías de tabla para que se carguen desde la fuente de datos principal y eliminarlas del ámbito global ([#5602](https://github.com/nocobase/nocobase/pull/5602)) por @katherinehhh
- **[Administrador de notificaciones]** actualizar la estructura del mensaje para incluir destinatarios en los datos del registro de notificaciones ([#5603](https://github.com/nocobase/nocobase/pull/5603)) por @sheldon66

### 🐛 Corrección de errores

- **[cliente]** Corregir problema de barra de desplazamiento de tabla en modo no configuración ([#5599](https://github.com/nocobase/nocobase/pull/5599)) por @katherinehhh
- **[Acción: Importar registros]** corregir importación con campo de fecha ([#5606](https://github.com/nocobase/nocobase/pull/5606)) por @chareice

## [v1.4.0-alpha.7](https://www.nocobase.com/en/blog/v1.4.0-alpha.7)

*Fecha de publicación: 2024-11-11*

### 🎉 Nuevas funciones

- **[cliente]** soporte para propiedades de delimitadores en el componente de expresión variable ([#5620](https://github.com/nocobase/nocobase/pull/5620)) por @mytharcher
- **[Flujo de trabajo]** soporte para mover nodos posteriores a nuevas ramas al crear un nodo con ramas ([#5570](https://github.com/nocobase/nocobase/pull/5570)) por @mytharcher

### 🚀 Mejoras

- **[cliente]**

  - optimizar lista de campos: eliminar campos de relación y etiqueta Duplicado ([#5616](https://github.com/nocobase/nocobase/pull/5616)) por @katherinehhh
  - soporte para `getFilterTargetKey()` desde la clase `Collection` ([#5617](https://github.com/nocobase/nocobase/pull/5617)) por @mytharcher
- **[Fuente de datos: Principal]** refactorizar la API collections:list para mejorar el rendimiento ([#5610](https://github.com/nocobase/nocobase/pull/5610)) por @chareice
- **[Administrador de notificaciones]** mejorar la interfaz de usuario del administrador de canales de notificación ([#5621](https://github.com/nocobase/nocobase/pull/5621)) por @sheldon66

## [v1.4.0-alpha.8](https://www.nocobase.com/en/blog/v1.4.0-alpha.8)

*Fecha de publicación: 2024-11-11*

### 🎉 Nuevas funciones

- **[WeCom]**
  - Soporte para iniciar sesión automáticamente al visitar páginas de la aplicación en el navegador WeCom por @chenzhizdt
  - Soporte para usar Markdown y tarjeta de plantilla en notificaciones por @chenzhizdt

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costes. Evite años de desarrollo y una inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtener NocoBase

[**Sitio web**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
