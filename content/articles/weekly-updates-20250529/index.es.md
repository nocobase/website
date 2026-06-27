---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana incluyen: soporte para variables de agregación personalizadas, desplazamiento personalizado en filtros de campos de fecha y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.33](https://www.nocobase.com/en/blog/v1.6.33)

*Fecha de lanzamiento: 2025-05-23*

#### 🚀 Mejoras

- **[sin definir]** Construir la imagen docker completa ([#6898](https://github.com/nocobase/nocobase/pull/6898)) por @chenos
- **[cliente]** Optimizar el problema de que las páginas se vuelven cada vez más lentas con el uso ([#6888](https://github.com/nocobase/nocobase/pull/6888)) por @zhangzhonghe
- **[Calendario]** Soporte para botón de actualización configurable en el bloque de calendario ([#6920](https://github.com/nocobase/nocobase/pull/6920)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir configuraciones regionales en-US basadas en claves zh-CN por @mytharcher
- **[Flujo de trabajo: Aprobación]** Soporte para realizar todas las tareas pendientes en el centro de tareas del flujo de trabajo por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - error de renderizado causado por formato de estilo inválido al agregar un campo de asociación ([#6903](https://github.com/nocobase/nocobase/pull/6903)) por @katherinehhh
  - verificación incorrecta de valor vacío para el campo de asociación toMany en la regla de enlace ([#6905](https://github.com/nocobase/nocobase/pull/6905)) por @katherinehhh
- **[Campo de colección: Markdown(Vditor)]** El campo markdown (Vditor) no se adapta al tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) por @katherinehhh
- **[Colección: Árbol]** Evitar actualizaciones incorrectas a prefijos de ruta similares durante las actualizaciones de ruta ([#6913](https://github.com/nocobase/nocobase/pull/6913)) por @2013xile
- **[Gestor de archivos]**

  - Corregir la regla de coincidencia de vista previa ([#6902](https://github.com/nocobase/nocobase/pull/6902)) por @mytharcher
  - Corregir la inyección de colección del cliente y el parámetro de carga ([#6909](https://github.com/nocobase/nocobase/pull/6909)) por @mytharcher
  - Corregir la URL de vista previa en archivos que no son imágenes ([#6889](https://github.com/nocobase/nocobase/pull/6889)) por @mytharcher
- **[Flujo de trabajo: nodo de correo]** Manejar el campo 'to' indefinido y mejorar el procesamiento de destinatarios de correo electrónico. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) por @sheldon66
- **[Flujo de trabajo: Evento de acción personalizada]**

  - Corregir que el botón se ejecute incorrectamente después de unos pocos clics por @mytharcher
  - Corregir que el manejador de errores no pueda coincidir con la clase por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir el cálculo de appends de asociación por @mytharcher

### [v1.6.34](https://www.nocobase.com/en/blog/v1.6.34)

*Fecha de lanzamiento: 2025-05-27*

#### 🎉 Nuevas funciones

- **[Acción: Importar registros Pro]**
  - Soporte para definir registros únicos por múltiples campos al importar configuraciones por @aaaaaajie
  - Soporta configuraciones para sobrescribir celdas en blanco e ignorarlas al importar configuraciones por @aaaaaajie

#### 🚀 Mejoras

- **[sin definir]** Actualizar la versión de Node a 20 para CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - falló la verificación de condición noneOf en las reglas de enlace ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh
  - la configuración de altura del bloque no se aplica en tiempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh
- **[sin definir]** Usar Node 20 debido a los requisitos del paquete commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher
- **[base de datos]** Se corrigió que la generación automática de uuid o nanoid no funcionara en la asociación muchos a muchos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie
- **[Acción: Exportar registros]** Se corrigió un problema por el cual las relaciones anidadas no se exportaban correctamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie
- **[Gestor de fuentes de datos]** Resolver el problema con la ordenación por arrastrar y soltar que no funciona ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos
- **[Documentación de la API]** Agregar información de sub-aplicación faltante a req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos
- **[Notificación: Mensaje en la aplicación]** Se resolvió un problema por el cual la acción "marcar todo como leído" en los mensajes dentro de la aplicación podía afectar los datos de otros usuarios. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66
- **[Flujo de trabajo: Evento de acción personalizada]** Evitar error causado por el orden de carga del plugin por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]**

  - Corregir la URL de vista previa y el parámetro de carga por @mytharcher
  - Corregir parámetros de carga duplicados por @mytharcher
- **[Bloque: Formulario de varios pasos]** Corregir tipos por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir el ID de registro incorrecto para ViewAction por @mytharcher
  - Corregir appends y cálculo de datos antes de enviar el proceso de aprobación por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.34](https://www.nocobase.com/en/blog/v1.7.0-beta.34)

*Fecha de lanzamiento: 2025-05-28*

#### 🎉 Nuevas funciones

- **[sin definir]** Nuevo soporte para Gitpod que permite iniciar el entorno de desarrollo con un solo clic y comenzar a desarrollar rápidamente. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) por @kerwin612
- **[Acción: Importar registros Pro]**

  - Soporte para definir registros únicos por múltiples campos al importar configuraciones por @aaaaaajie
  - Soporta configuraciones para sobrescribir celdas en blanco e ignorarlas al importar configuraciones por @aaaaaajie
- **[Campo de colección: Código]** Agregar configuraciones de altura para el campo del editor de código por @mytharcher
- **[Gestor de correo electrónico]**

  - soporte para marcar correo electrónico como tarea pendiente y agregar nota por @jiannx
  - soporte para etiquetas y configuraciones combinadas por @jiannx

#### 🚀 Mejoras

- **[cliente]**

  - mejorar los estilos para el componente de filtro de rango de fechas ([#6939](https://github.com/nocobase/nocobase/pull/6939)) por @katherinehhh
  - Corregir el problema por el cual los controles de formulario ocultos capturaban la tecla de tabulación, mejorando significativamente la eficiencia de la operación del formulario ([#6942](https://github.com/nocobase/nocobase/pull/6942)) por @kerwin612
  - validar campos obligatorios antes de mostrar el diálogo de confirmación ([#6931](https://github.com/nocobase/nocobase/pull/6931)) por @katherinehhh
  - ajustar la visualización del contenido de la opción de filtro de fecha ([#6928](https://github.com/nocobase/nocobase/pull/6928)) por @katherinehhh
- **[sin definir]** Actualizar la versión de Node a 20 para CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - la configuración de visibilidad de dos puntos en la etiqueta del formulario no funciona ([#6947](https://github.com/nocobase/nocobase/pull/6947)) por @katherinehhh
  - El redimensionamiento del bloque arrastrando no funciona ([#6944](https://github.com/nocobase/nocobase/pull/6944)) por @chenos
  - la internacionalización del componente de asignación de campo no funciona ([#6945](https://github.com/nocobase/nocobase/pull/6945)) por @katherinehhh
  - falló la verificación de condición noneOf en las reglas de enlace ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh
  - las variables de condición anidadas en las reglas de enlace no se renderizan correctamente ([#6929](https://github.com/nocobase/nocobase/pull/6929)) por @katherinehhh
  - la configuración de altura del bloque no se aplica en tiempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh
  - Corregir el problema con el botón de copiar en la ventana emergente de error que copiaba como [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) por @kerwin612
  - análisis incorrecto de la variable de fecha en el límite de rango de fechas ([#6930](https://github.com/nocobase/nocobase/pull/6930)) por @katherinehhh
- **[base de datos]** Se corrigió que la generación automática de uuid o nanoid no funcionara en la asociación muchos a muchos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie
- **[sin definir]** Usar Node 20 debido a los requisitos del paquete commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher
- **[Campo de colección: Markdown(Vditor)]** Problema de ancho del componente del campo markdown-vditor después de hacer zoom in y out ([#6946](https://github.com/nocobase/nocobase/pull/6946)) por @katherinehhh
- **[Documentación de la API]** Agregar información de sub-aplicación faltante a req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos
- **[Notificación: Mensaje en la aplicación]** Se resolvió un problema por el cual la acción "marcar todo como leído" en los mensajes dentro de la aplicación podía afectar los datos de otros usuarios. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66
- **[Gestor de fuentes de datos]** Resolver el problema con la ordenación por arrastrar y soltar que no funciona ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos
- **[Acción: Exportar registros]** Se corrigió un problema por el cual las relaciones anidadas no se exportaban correctamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie
- **[Flujo de trabajo: Evento de acción personalizada]** Evitar error causado por el orden de carga del plugin por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]**

  - Corregir parámetros de carga duplicados por @mytharcher
  - Corregir la URL de vista previa y el parámetro de carga por @mytharcher
- **[Bloque: Formulario de varios pasos]** Corregir tipos por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir el ID de registro incorrecto para ViewAction por @mytharcher
  - Corregir configuración regional por @mytharcher
  - Corregir appends y cálculo de datos antes de enviar el proceso de aprobación por @mytharcher
- **[Gestor de correo electrónico]**

  - corrección: eliminar columna de acción por @jiannx
  - corrección error del modal de agregar nota por @jiannx
  - corrección permisos de api de las colecciones mailMessageNotes y mailMessageLabels por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.15](https://www.nocobase.com/en/blog/v1.7.0-alpha.15)

*Fecha de lanzamiento: 2025-05-28*

#### 🎉 Nuevas funciones

- **[cliente]** Soporte para variables de agregación personalizadas ([#6916](https://github.com/nocobase/nocobase/pull/6916)) por @zhangzhonghe
  Referencia: [Variables personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utilidades]** soporte para desplazamiento personalizado en filtros de campo de fecha ([#6854](https://github.com/nocobase/nocobase/pull/6854)) por @katherinehhh
- **[Campo de colección: Código]** Agregar configuraciones de altura para el campo del editor de código por @mytharcher
- **[Acción: Importar registros Pro]**

  - Soporte para definir registros únicos por múltiples campos al importar configuraciones por @aaaaaajie
  - Soporta configuraciones para sobrescribir celdas en blanco e ignorarlas al importar configuraciones por @aaaaaajie
- **[Variables personalizadas]** Soporte para variables de agregación personalizadas por @zhangzhonghe
  Referencia: [Variables personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Gestor de correo electrónico]**

  - soporte para marcar correo electrónico como tarea pendiente y agregar nota por @jiannx
  - soporte para etiquetas y configuraciones combinadas por @jiannx

#### 🚀 Mejoras

- **[cliente]** ajustar la visualización del contenido de la opción de filtro de fecha ([#6928](https://github.com/nocobase/nocobase/pull/6928)) por @katherinehhh
- **[sin definir]** Actualizar la versión de Node a 20 para CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher
- **[Calendario]** soporte para botón de actualización configurable en el bloque de calendario ([#6920](https://github.com/nocobase/nocobase/pull/6920)) por @katherinehhh
- **[Acción: Importar registros]**

  - Optimizar el rendimiento de importación xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) por @aaaaaajie
  - Optimizar el rendimiento de importación xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) por @aaaaaajie
- **[Acción: Exportar registros]** Optimización del rendimiento para exportar a XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) por @aaaaaajie
- **[Bloque: iframe]** mejorar la lógica de asignación de variables de fecha ([#6828](https://github.com/nocobase/nocobase/pull/6828)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir configuraciones regionales en-US basadas en claves zh-CN por @mytharcher
- **[Acción: Exportar registros Pro]** Optimización del rendimiento para exportar a XLSX por @aaaaaajie
- **[Flujo de trabajo: Aprobación]** Soporte para realizar todas las tareas pendientes en el centro de tareas del flujo de trabajo por @mytharcher
- **[Gestor de correo electrónico]** implementación de esquema luego envío de correo y soporte para IA por @jiannx

#### 🐛 Corrección de errores

- **[base de datos]** Se corrigió que la generación automática de uuid o nanoid no funcionara en la asociación muchos a muchos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie
- **[cliente]**

  - falló la verificación de condición noneOf en las reglas de enlace ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh
  - la configuración de altura del bloque no se aplica en tiempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh
  - las variables de condición anidadas en las reglas de enlace no se renderizan correctamente ([#6929](https://github.com/nocobase/nocobase/pull/6929)) por @katherinehhh
  - análisis incorrecto de la variable de fecha en el límite de rango de fechas ([#6930](https://github.com/nocobase/nocobase/pull/6930)) por @katherinehhh
  - verificación incorrecta de valor vacío para el campo de asociación toMany en la regla de enlace ([#6905](https://github.com/nocobase/nocobase/pull/6905)) por @katherinehhh
  - error de renderizado causado por formato de estilo inválido al agregar un campo de asociación ([#6903](https://github.com/nocobase/nocobase/pull/6903)) por @katherinehhh
  - falta la variable de objeto actual en la regla de enlace dentro de la subtabla ([#6907](https://github.com/nocobase/nocobase/pull/6907)) por @katherinehhh
- **[sin definir]** Usar Node 20 debido a los requisitos del paquete commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher
- **[Gestor de fuentes de datos]** Resolver el problema con la ordenación por arrastrar y soltar que no funciona ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos
- **[Documentación de la API]** Agregar información de sub-aplicación faltante a req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos
- **[Notificación: Mensaje en la aplicación]** Se resolvió un problema por el cual la acción "marcar todo como leído" en los mensajes dentro de la aplicación podía afectar los datos de otros usuarios. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66
- **[Acción: Exportar registros]** Se corrigió un problema por el cual las relaciones anidadas no se exportaban correctamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie
- **[Campo de colección: Markdown(Vditor)]** El campo markdown (Vditor) no se adapta al tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) por @katherinehhh
- **[Colección: Árbol]** Evitar actualizaciones incorrectas a prefijos de ruta similares durante las actualizaciones de ruta ([#6913](https://github.com/nocobase/nocobase/pull/6913)) por @2013xile
- **[Flujo de trabajo: nodo de correo]** Manejar el campo 'to' indefinido y mejorar el procesamiento de destinatarios de correo electrónico. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) por @sheldon66
- **[Verificación]** Corregir nombre en inglés incorrecto: “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) por @2013xile
- **[Gestor de archivos]**

  - Corregir la inyección de colección del cliente y el parámetro de carga ([#6909](https://github.com/nocobase/nocobase/pull/6909)) por @mytharcher
  - Corregir la regla de coincidencia de vista previa ([#6902](https://github.com/nocobase/nocobase/pull/6902)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]**

  - Evitar error causado por el orden de carga del plugin por @mytharcher
  - Corregir que el manejador de errores no pueda coincidir con la clase por @mytharcher
  - Corregir que el botón se ejecute incorrectamente después de unos pocos clics por @mytharcher
- **[Filtro de múltiples palabras clave]** Eliminar espacios en blanco de ambos lados de cada palabra clave por @zhangzhonghe
- **[Autenticación de dos factores (2FA)]** Requerir que se configure un verificador al habilitar 2FA por @2013xile
- **[Almacenamiento de archivos: S3(Pro)]**

  - Corregir parámetros de carga duplicados por @mytharcher
  - Corregir la URL de vista previa y el parámetro de carga por @mytharcher
- **[Impresión de plantilla]** Mejorar la lógica hasChildren en useFieldsTree para incluir la verificación de enum de uiSchema. por @sheldon66
- **[Bloque: Formulario de varios pasos]** Corregir tipos por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir configuración regional por @mytharcher
  - Corregir appends y cálculo de datos antes de enviar el proceso de aprobación por @mytharcher
  - Corregir el cálculo de appends de asociación por @mytharcher
  - Corregir el ID de registro incorrecto para ViewAction por @mytharcher
- **[Gestor de correo electrónico]**

  - corrección permisos de api de las colecciones mailMessageNotes y mailMessageLabels por @jiannx
  - corrección error del modal de agregar nota por @jiannx
  - corrección: eliminar columna de acción por @jiannx
