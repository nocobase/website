---
title: "NocoBase v1.9.0-alpha.12: Compatibilidad con reglas de validación de campos"
description: "Nota de la versión v1.9.0-alpha.12"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para reglas de validación de campos ([#7297](https://github.com/nocobase/nocobase/pull/7297)) por @aaaaaajie

- **[Flujo de trabajo: Aprobación]**
  - Añadido tipo de plantilla en línea para la configuración de notificaciones por @mytharcher

  - Soporte para usar un título de tarea consistente en todos los nodos de aprobación del mismo flujo de trabajo por @mytharcher

### 🚀 Mejoras

- **[base de datos]** Optimizado el rendimiento de las consultas ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie

- **[cliente]** Soporte para mostrar iconos identificados por cadenas de texto en el componente Select cuando está en modo de solo lectura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher

- **[Móvil]** Optimizado el componente de ventana emergente móvil ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe

- **[Flujo de trabajo]** Actualizado el menú de selección de nodos para mostrar las opciones en un diseño de dos columnas, mejorando la densidad de información y permitiendo a los usuarios ver más opciones a la vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher

- **[Configuración de licencia]** En la configuración de licencia, copiar el último ID de instancia cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx

- **[Notificación: Mensaje en la aplicación]** Eliminadas las salidas de logs SQL mediante `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile

- **[Autenticación]** Eliminado el parámetro token de la URL después de un inicio de sesión exitoso ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile

- **[Impresión de plantillas]** Soporte para campo m2m array por @jiannx

### 🐛 Corrección de Errores

- **[base de datos]** Corregido el problema donde la lectura de tablas externas de Postgres incluía vistas de otros esquemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie

- **[cliente]**
  - tratar el número 0 como vacío durante la validación de vacío en reglas de enlace ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh

  - Corregido un problema donde el botón "Configuración de columnas" cargaba columnas de la tabla dentro del diálogo modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) por @kerwin612

  - Corregido el texto del botón de enlace que rompía la línea ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher

- **[servidor]** Algunas solicitudes carecen de `ctx.action`, lo que causa errores en el middleware del registro de auditoría ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile

- **[Bloque: plantilla]** Resuelto un problema donde los bloques de correo no eran visibles cuando se colocaban dentro de un bloque de plantilla heredado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust

- **[Flujo de trabajo: nodo de correo]** Corregido el problema donde el nodo de correo electrónico podría no reanudar la ejecución correctamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher

- **[Móvil]**
  - formato de visualización incorrecto del campo de fecha en móvil ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh

  - Corregido el problema donde los datos de envío del formulario en el diálogo de aprobación móvil eran incorrectos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe

- **[Flujo de trabajo]**
  - Corregido el error lanzado y la desaparición de los datos del formulario al editar la categoría del flujo de trabajo ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher

  - Corregida la traducción del título de la página en el centro de tareas del flujo de trabajo ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher

- **[Visor de archivos de Office]** Corregido el error lanzado al subir un archivo al campo de URL de archivo adjunto ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher

- **[Notificación: Mensaje en la aplicación]** Corregidas las traducciones ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher

- **[Campo de colección: Fórmula]** Corregido el problema donde la entrada de fórmula no podía pasar la validación debido al tipo de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher

- **[Gestor de archivos]** Eliminada la sugerencia sobre el límite de tamaño de subida de archivos ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher

- **[Calendario]** tooltip del elemento del evento del calendario mostrando [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh

- **[Acción: Importar registros Pro]** No permitir asignar campos de relación durante la detección de duplicados en la importación. por @aaaaaajie

- **[Flujo de trabajo: Evento de acción personalizada]** Limpiar las filas seleccionadas después de activar correctamente acciones en múltiples registros por @mytharcher

- **[Impresión de plantillas]** Impresión de campos de selección de radio en múltiples líneas de datos por @jiannx

- **[Almacenamiento de archivos: S3(Pro)]**
  - Marcar como obsoleto el parámetro problemático `attachmentField` por @mytharcher

  - Corregido el problema donde el método de autenticación IAM no podía usarse para subir archivos por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregido el problema donde la carga de datos de fuentes de datos externas en registros de aprobación resultaba en un error 404 por @mytharcher

  - Corregido el problema donde la lista de usuarios estaba vacía durante la cofirma por @mytharcher

- **[Gestor de copias de seguridad]** las copias de seguridad de archivos grandes podían mostrar "éxito" antes de finalizar realmente por @gchust

- **[Gestor de migraciones]** Omitir los comandos `\restrict` y `\unrestrict` generados por el pg_dump más reciente al crear archivos de migración para resolver errores de restauración. por @2013xile
