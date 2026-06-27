---
title: "Actualizaciones Semanales de NocoBase: Optimización y Corrección de Errores"
description: "Las actualizaciones de esta semana incluyen: opciones de configuración relacionadas con firmas, soporte de resincronización en el administrador de correo electrónico y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, destinada principalmente al desarrollo interno y la iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.14](https://www.nocobase.com/en/blog/v1.8.14)

*Fecha de lanzamiento: 2025-08-05*

#### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema por el que las cadenas de texto sin procesar de las variables se enviaban con el formulario ([#7337](https://github.com/nocobase/nocobase/pull/7337)) por @zhangzhonghe
- **[Flujo de trabajo: Aprobación]** Se añade el título de la tarea para los elementos añadidos y delegados por @mytharcher

### [v1.8.13](https://www.nocobase.com/en/blog/v1.8.13)

*Fecha de lanzamiento: 2025-08-04*

#### 🎉 Nuevas funciones

- **[Auth: SAML 2.0]** Se añaden opciones de configuración relacionadas con la firma por @2013xile

#### 🚀 Mejoras

- **[Flujo de trabajo: JavaScript]** Se cambia la caché a caché de la aplicación para evitar errores en modo clúster por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Se corrige que la información sobre herramientas muestre [object Object] al pasar el ratón en el panel de acciones ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh
  - Al usar variables para establecer valores predeterminados de campo en formularios de filtro, si el valor de la variable está vacío, el cuadro de entrada mostrará la cadena de variable original ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe
- **[Colección: Árbol]** Se corrige la lógica de sincronización de rutas de las colecciones de árbol ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu

### [v1.8.12](https://www.nocobase.com/en/blog/v1.8.12)

*Fecha de lanzamiento: 2025-08-01*

#### 🎉 Nuevas funciones

- **[cliente]** Se añade la opción "Autoenfoque" para los componentes Input, TextArea, URL e InputNumber que enfoca automáticamente el campo de entrada durante la renderización inicial de la página cuando está habilitada ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe

#### 🐛 Corrección de errores

- **[cliente]**

  - Se corrige la vista previa de archivos en url nula ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher
  - Se añade la URL completa al archivo local al previsualizar ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher
- **[utilidades]** Manejo incorrecto de la zona horaria para parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh
- **[indefinido]** Se añade nuevo plugin al preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher
- **[Gestor de archivos]** Se corrige el permiso del campo de almacenamiento ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher
- **[Flujo de trabajo]** Se corrige el resultado `undefined` cuando el procesador sale ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher
- **[Flujo de trabajo: Nodo de cálculo dinámico]** Se corrige el error causado por la API antigua ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher
- **[Flujo de trabajo: Subflujo]** Se corrige el flujo suspendido por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.7](https://www.nocobase.com/en/blog/v1.9.0-alpha.7)

*Fecha de lanzamiento: 2025-08-06*

#### 🐛 Corrección de errores

- **[Gestor de correo electrónico]** Soporte para resincronización por @jiannx

### [v1.9.0-alpha.6](https://www.nocobase.com/en/blog/v1.9.0-alpha.6)

*Fecha de lanzamiento: 2025-08-06*

#### 🚀 Mejoras

- **[Flujo de trabajo]** El título del flujo de trabajo en la tarjeta de tarea ya no se mostrará tachado, incluso si la versión correspondiente está deshabilitada ([#7339](https://github.com/nocobase/nocobase/pull/7339)) por @mytharcher

#### 🐛 Corrección de errores

- **[Visualización de datos]** Problema con la variable de fecha en el valor predeterminado del campo de fecha en el bloque de filtro de gráfico ([#7291](https://github.com/nocobase/nocobase/pull/7291)) por @katherinehhh
- **[Flujo de trabajo: CC]** Se corrige que los bloques no se puedan eliminar ([#7338](https://github.com/nocobase/nocobase/pull/7338)) por @mytharcher
- **[Gestor de correo electrónico]** Distinguir manualmente entre reenvío y respuesta por @jiannx

### [v1.9.0-alpha.5](https://www.nocobase.com/en/blog/v1.9.0-alpha.5)

*Fecha de lanzamiento: 2025-08-05*

#### 🎉 Nuevas funciones

- **[cliente]** Se añade la opción "Autoenfoque" para los componentes Input, TextArea, URL e InputNumber que enfoca automáticamente el campo de entrada durante la renderización inicial de la página cuando está habilitada ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe
- **[Auth: SAML 2.0]** Se añaden opciones de configuración relacionadas con la firma por @2013xile

#### 🚀 Mejoras

- **[Flujo de trabajo: JavaScript]** Se cambia la caché a caché de la aplicación para evitar errores en modo clúster por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Se corrige el problema por el que las cadenas de texto sin procesar de las variables se enviaban con el formulario ([#7337](https://github.com/nocobase/nocobase/pull/7337)) por @zhangzhonghe
  - Se corrige que la información sobre herramientas muestre [object Object] al pasar el ratón en el panel de acciones ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh
  - Al usar variables para establecer valores predeterminados de campo en formularios de filtro, si el valor de la variable está vacío, el cuadro de entrada mostrará la cadena de variable original ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe
- **[indefinido]** Se añade nuevo plugin al preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher
- **[Colección: Árbol]** Se corrige la lógica de sincronización de rutas de las colecciones de árbol ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu
- **[Visor de archivos de Office]** Soporte para archivos `.docx`, `.xlsx` y `.pptx` con solo URL para ser previsualizados ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher
- **[Flujo de trabajo: Nodo de cálculo dinámico]** Se corrige el error causado por la API antigua ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Se añade el título de la tarea para los elementos añadidos y delegados por @mytharcher
- **[Gestor de correo electrónico]** Soporta el mismo correo electrónico para múltiples personas por @jiannx
