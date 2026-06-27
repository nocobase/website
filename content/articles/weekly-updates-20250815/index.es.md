---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana traen un rendimiento optimizado al cambiar entre pestañas emergentes, correcciones de errores y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.15](https://www.nocobase.com/en/blog/v1.8.15)

*Fecha de lanzamiento: 2025-08-12*

#### 🚀 Mejoras

- **[cliente]**

  - Se añadió soporte para la variable de fecha "anteayer" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) por @katherinehhh
  - Se optimizó el rendimiento al cambiar entre pestañas de ventanas emergentes ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
- **[Flujo de trabajo]**

  - Se corrigió un caso de prueba inestable ([#7349](https://github.com/nocobase/nocobase/pull/7349)) por @mytharcher
  - El título del flujo de trabajo en la tarjeta de tarea ya no se mostrará tachado, incluso si la versión correspondiente está deshabilitada ([#7339](https://github.com/nocobase/nocobase/pull/7339)) por @mytharcher
- **[Visor de archivos de Office]** Se añadió soporte para previsualizar archivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher
- **[Gestor de copias de seguridad]** Se mejoró el rendimiento de la operación de copia de seguridad de la base de datos MySQL por @gchust

#### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió el problema por el cual el diseño de formulario de varias columnas no se convertía a diseño de una sola columna en dispositivos móviles ([#7355](https://github.com/nocobase/nocobase/pull/7355)) por @zhangzhonghe
  - Se corrigió un error al eliminar colecciones en masa ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
  - Se corrigió un problema por el cual el ámbito de datos guardado previamente no se preseleccionaba al configurar permisos individualmente. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
- **[Flujo de trabajo]**

  - Se rediseñó el menú "Añadir nodo" y se corrigieron los problemas de rendimiento de renderizado del lienzo del flujo de trabajo que causaba ([#7363](https://github.com/nocobase/nocobase/pull/7363)) por @mytharcher
  - Se corrigió el problema de condiciones de filtro incorrectas al recuperar un único elemento pendiente ([#7366](https://github.com/nocobase/nocobase/pull/7366)) por @mytharcher
  - Se corrigió el problema de coincidencia de palabras clave en el selector de campos ([#7356](https://github.com/nocobase/nocobase/pull/7356)) por @mytharcher
  - Se evitó un error lanzado al publicar en la cola de eventos al detenerse ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Se corrigió el problema por el cual los mensajes en el sitio se recibían pero no se mostraban en una ventana emergente ([#7364](https://github.com/nocobase/nocobase/pull/7364)) por @mytharcher
- **[Móvil]** Se resolvió un problema por el cual el selector de fecha en dispositivos móviles se mostraba incorrectamente cuando se aplicaban límites de rango de fechas ([#7362](https://github.com/nocobase/nocobase/pull/7362)) por @katherinehhh
- **[Gestor de archivos]** Se añadió el campo `storageId` a la colección de archivos para soportar la configuración de permisos ([#7351](https://github.com/nocobase/nocobase/pull/7351)) por @mytharcher
- **[Flujo de trabajo: Nodo paralelo]** Se corrigió la suspensión del nodo paralelo después de reanudar en MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Flujo de trabajo: CC]** Se corrigió que los bloques no se pudieran eliminar ([#7338](https://github.com/nocobase/nocobase/pull/7338)) por @mytharcher
- **[Visor de archivos de Office]** Se añadió soporte para previsualizar archivos `.docx`, `.xlsx` y `.pptx` con solo URL ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher
- **[Visualización de datos]** Problema con la variable de fecha en el valor predeterminado del campo de fecha en el bloque de filtro de gráfico ([#7291](https://github.com/nocobase/nocobase/pull/7291)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Se corrigió que las reglas de vinculación no funcionaran en el bloque de detalle original de aprobación por @mytharcher
  - Se corrigió la actualización de asociaciones al enviar un borrador por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.10](https://www.nocobase.com/en/blog/v1.9.0-alpha.10)

*Fecha de lanzamiento: 2025-08-09*

#### 🐛 Corrección de errores

- **[Gestor de correo electrónico]** El editor enriquecido ahora soporta saltos de línea suaves por @jiannx

### [v1.9.0-alpha.9](https://www.nocobase.com/en/blog/v1.9.0-alpha.9)

*Fecha de lanzamiento: 2025-08-09*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Se corrigió un caso de prueba inestable ([#7349](https://github.com/nocobase/nocobase/pull/7349)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]** Se corrigió el problema por el cual el diseño de formulario de varias columnas no se convertía a diseño de una sola columna en dispositivos móviles ([#7355](https://github.com/nocobase/nocobase/pull/7355)) por @zhangzhonghe
- **[Flujo de trabajo]** Se corrigió el problema de coincidencia de palabras clave en el selector de campos ([#7356](https://github.com/nocobase/nocobase/pull/7356)) por @mytharcher

### [v1.9.0-alpha.8](https://www.nocobase.com/en/blog/v1.9.0-alpha.8)

*Fecha de lanzamiento: 2025-08-08*

#### 🚀 Mejoras

- **[cliente]** Se optimizó el rendimiento al cambiar entre pestañas de ventanas emergentes ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
- **[Visor de archivos de Office]** Se añadió soporte para previsualizar archivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió un problema por el cual el ámbito de datos guardado previamente no se preseleccionaba al configurar permisos individualmente ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
  - Se corrigió un error al eliminar colecciones en masa ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
- **[Flujo de trabajo]** Se evitó un error lanzado al publicar en la cola de eventos al detenerse ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
- **[Flujo de trabajo: Nodo paralelo]** Se corrigió la suspensión del nodo paralelo después de reanudar en MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Se corrigió la actualización de asociaciones al enviar un borrador por @mytharcher
  - Se corrigió que las reglas de vinculación no funcionaran en el bloque de detalle original de aprobación por @mytharcher
