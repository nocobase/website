---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana incluyen: soporte para usar un título de tarea consistente para todos los nodos de aprobación en el mismo flujo de trabajo, impresión de plantillas que admite matrices de muchos a muchos, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.18](https://www.nocobase.com/en/blog/v1.8.18)

*Fecha de lanzamiento: 2025-08-19*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Se actualizó el menú de selección de nodos para mostrar las opciones en un diseño de dos columnas, mejorando la densidad de información y permitiendo a los usuarios ver más opciones a la vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher
- **[Configuración de licencia]** En la configuración de licencia, copiar el ID de instancia más reciente cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx

#### 🐛 Corrección de errores

- **[cliente]**

  - tratar el número 0 como vacío durante la validación de vacío de reglas de enlace ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh
  - Corregir el texto del botón de enlace que se rompe en líneas ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher
- **[Móvil]** formato de visualización incorrecto del campo de fecha en móvil ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh
- **[Visor de archivos de Office]** Corregir error al subir archivo al campo de URL de adjuntos ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher
- **[Flujo de trabajo]** Corregir error y desaparición de datos del formulario al editar la categoría del flujo de trabajo ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher
- **[Flujo de trabajo: nodo de correo]** Corregir el problema donde el nodo de correo electrónico podría no reanudar la ejecución correctamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher
- **[Flujo de trabajo: evento de acción personalizada]** Limpiar las filas seleccionadas después de activar correctamente acciones en múltiples registros por @mytharcher
- **[Impresión de plantilla]** Impresión de campos de selección de radio en múltiples líneas de datos por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregir el problema donde cargar datos de fuente de datos externa en registros de aprobación resultaba en un error 404 por @mytharcher

### [v1.8.17](https://www.nocobase.com/en/blog/v1.8.17)

*Fecha de lanzamiento: 2025-08-15*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Soporte para usar un título de tarea consistente para todos los nodos de aprobación en el mismo flujo de trabajo por @mytharcher

#### 🚀 Mejoras

- **[Autenticación]** Se eliminó el parámetro token de la URL después de un inicio de sesión exitoso ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile
- **[Impresión de plantilla]** soporte para campo m2m array por @jiannx

#### 🐛 Corrección de errores

- **[Móvil]** Corregir el problema donde los datos de envío del formulario en el diálogo de aprobación móvil son incorrectos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe
- **[Flujo de trabajo]** Corregir la traducción del título de la página en el centro de tareas del flujo de trabajo ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher
- **[Calendario]** tooltip del elemento del evento del calendario mostrando [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh
- **[Notificación: Mensaje en la aplicación]** Corregir traducciones ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher
- **[Gestor de archivos]** Eliminar la sugerencia para el límite de tamaño de carga de archivos ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]**

  - Desaprobar el parámetro problemático `attachmentField` por @mytharcher
  - Corregir el problema donde el método de autenticación IAM no podía usarse para subir archivos por @mytharcher

### [v1.8.16](https://www.nocobase.com/en/blog/v1.8.16)

*Fecha de lanzamiento: 2025-08-14*

#### 🚀 Mejoras

- **[Notificación: Mensaje en la aplicación]** Eliminar registros SQL generados mediante `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile

#### 🐛 Corrección de errores

- **[servidor]** Algunas solicitudes carecen de `ctx.action`, lo que causa errores en el middleware del registro de auditoría ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile
- **[Campo de colección: Fórmula]** Corregir el problema donde la entrada de fórmula no podía pasar la validación debido al tipo de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher
- **[Gestor de copias de seguridad]** las copias de seguridad de archivos grandes podían mostrar "exitosa" antes de finalizar realmente por @gchust
