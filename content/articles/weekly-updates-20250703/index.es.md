---
title: "Actualizaciones Semanales de NocoBase: Optimización y Corrección de Errores"
description: "Las actualizaciones de esta semana incluyen: agregar soporte de filtros a la gestión de múltiples aplicaciones, optimizar estilos móviles y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.18](https://www.nocobase.com/en/blog/v1.7.18)

*Fecha de lanzamiento: 2025-06-26*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Optimizar el estilo móvil ([#7040](https://github.com/nocobase/nocobase/pull/7040)) por @mytharcher
- **[Formularios públicos]** Optimizar el rendimiento de los componentes de fecha en formularios públicos ([#7117](https://github.com/nocobase/nocobase/pull/7117)) por @zhangzhonghe

#### 🐛 Corrección de errores

- **[Flujo de trabajo]** Corregir parámetros de carga de registro en tareas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) por @mytharcher
- **[Cliente WEB]** Corregir problema por el que los bloques bajo páginas no se mostraban después de establecer permisos de menú de rol ([#7112](https://github.com/nocobase/nocobase/pull/7112)) por @aaaaaajie
- **[Flujo de trabajo: Aprobación]**

  - Corregir nombre de variable del solicitante en el disparador por @mytharcher
  - Corregir estilos móviles por @mytharcher
  - Corregir error lanzado al eliminar la colección relacionada con la aprobación por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.11](https://www.nocobase.com/en/blog/v1.8.0-beta.11)

*Fecha de lanzamiento: 2025-06-27*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo: Nodo de solicitud HTTP]** Soporte para solicitudes `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) por @shushu992

#### 🚀 Mejoras

- **[Flujo de trabajo]**

  - Optimizar el estilo móvil ([#7040](https://github.com/nocobase/nocobase/pull/7040)) por @mytharcher
  - Ajustar API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) por @mytharcher
- **[Formularios públicos]** Optimizar el rendimiento de los componentes de fecha en formularios públicos ([#7117](https://github.com/nocobase/nocobase/pull/7117)) por @zhangzhonghe
- **[Flujo de trabajo: Evento previo a la acción]** Ajustar API de variables por @mytharcher
- **[Flujo de trabajo: Aprobación]** Ajustar API de variables por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Limitación de rango incorrecta en campos de fecha con hora ([#7107](https://github.com/nocobase/nocobase/pull/7107)) por @katherinehhh
  - Cuando las variables de parámetros de consulta URL están vacías, las condiciones del ámbito de datos no se eliminan ([#7104](https://github.com/nocobase/nocobase/pull/7104)) por @zhangzhonghe
- **[Flujo de trabajo]**

  - Corregir parámetros de carga de registro en tareas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) por @mytharcher
  - Corregir comprobación ejecutada incorrectamente en números enteros grandes ([#7099](https://github.com/nocobase/nocobase/pull/7099)) por @mytharcher
  - Corregir estadísticas en cascada eliminadas por una versión de flujo de trabajo no actual ([#7103](https://github.com/nocobase/nocobase/pull/7103)) por @mytharcher
- **[Móvil]** Corregir problema de z-index en ventanas emergentes móviles ([#7110](https://github.com/nocobase/nocobase/pull/7110)) por @zhangzhonghe
- **[Cliente WEB]** Corregir problema por el que los bloques bajo páginas no se mostraban después de establecer permisos de menú de rol ([#7112](https://github.com/nocobase/nocobase/pull/7112)) por @aaaaaajie
- **[Calendario]** Problema con el campo de fecha en el formulario de creación rápida del bloque de calendario ([#7106](https://github.com/nocobase/nocobase/pull/7106)) por @katherinehhh
- **[Acción: Importar registros]** Resolver problema de fallo de inicio de sesión después de la importación masiva de nombres de usuario y contraseñas ([#7076](https://github.com/nocobase/nocobase/pull/7076)) por @aaaaaajie
- **[Flujo de trabajo: Aprobación]**

  - Corregir error lanzado al eliminar la colección relacionada con la aprobación por @mytharcher
  - Corregir estilos móviles por @mytharcher
  - Corregir nombre de variable del solicitante en el disparador por @mytharcher
  - Solo los participantes pueden ver (obtener) el detalle de la aprobación por @mytharcher
  - Corregir API de variable heredada que lanza error por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.12](https://www.nocobase.com/en/blog/v1.8.0-alpha.12)

*Fecha de lanzamiento: 2025-07-02*

#### 🚀 Mejoras

- **[base de datos]** Soporte para añadir opciones de pool desde env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) por @mytharcher
- **[Flujo de trabajo]**

  - Mejorar el rendimiento de carga de la lista de ejecuciones excluyendo el campo JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) por @mytharcher
  - Añadir API de registro para pruebas de nodos ([#7129](https://github.com/nocobase/nocobase/pull/7129)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Cambiar hora a absoluta en la línea de tiempo por @mytharcher

#### 🐛 Corrección de errores

- **[utilidades]** Problema de filtrado en DateOnly o Datetime (sin zona horaria) usando la variable Día exacto ([#7113](https://github.com/nocobase/nocobase/pull/7113)) por @katherinehhh
- **[cli]**

  - Error indefinido en la descarga de plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) por @jiannx
  - Ajustar la copia de la licencia al instalar el plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) por @jiannx
- **[cliente]**

  - Tolerancia a fallos para configuraciones basadas en 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) por @mytharcher
  - Establecer el displayName del campo en la vista conectada no tenía efecto ([#7130](https://github.com/nocobase/nocobase/pull/7130)) por @aaaaaajie
  - Configuración de UI del nodo manual del flujo de trabajo: las reglas de enlace no pueden seleccionar variables del formulario actual ([#7125](https://github.com/nocobase/nocobase/pull/7125)) por @zhangzhonghe
- **[Flujo de trabajo]** Corregir error lanzado por importación cíclica ([#7134](https://github.com/nocobase/nocobase/pull/7134)) por @mytharcher
- **[plugin-commercial]**

  - El modo de desarrollo no muestra la ventana emergente de licencia por @jiannx
  - Cerrar temporalmente la ventana emergente de verificación de licencia por @jiannx
  - Ajustar la lógica de verificación de licencia y soportar coincidencia de nombre de dominio pan por @jiannx
- **[Política de contraseñas]** Soporte para bloquear permanentemente cuentas de usuario por @2013xile
- **[Flujo de trabajo: Subflujo]** Corregir problema en modo clúster por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Añadir configuraciones de diseño de formulario por @mytharcher
  - Eliminar campos no filtrables del filtro por @mytharcher

### [v1.8.0-alpha.11](https://www.nocobase.com/en/blog/v1.8.0-alpha.11)

*Fecha de lanzamiento: 2025-06-27*

#### 🎉 Nuevas funciones

- **[Configuración de licencia]** añadir configuración de licencia y validar licencia antes de descargar plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) por @jiannx

#### 🚀 Mejoras

- **[Administrador de múltiples aplicaciones]** añadir soporte de filtro a la gestión de múltiples aplicaciones ([#7124](https://github.com/nocobase/nocobase/pull/7124)) por @katherinehhh
- **[Flujo de trabajo]** Optimizar el estilo móvil ([#7040](https://github.com/nocobase/nocobase/pull/7040)) por @mytharcher
- **[Formularios públicos]** Optimizar el rendimiento de los componentes de fecha en formularios públicos ([#7117](https://github.com/nocobase/nocobase/pull/7117)) por @zhangzhonghe
- **[plugin-commercial]** Cifrar el envío de registros y mejorar la visualización de la información de la licencia por @jiannx

#### 🐛 Corrección de errores

- **[cliente]** El valor por defecto del campo de asociación sobrescribe los datos existentes en la subtabla ([#7120](https://github.com/nocobase/nocobase/pull/7120)) por @katherinehhh
- **[Flujo de trabajo]** Corregir parámetros de carga de registro en tareas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) por @mytharcher
- **[Cliente WEB]** Corregir problema por el que los bloques bajo páginas no se mostraban después de establecer permisos de menú de rol ([#7112](https://github.com/nocobase/nocobase/pull/7112)) por @aaaaaajie
- **[Flujo de trabajo: Aprobación]** Corregir nombre de variable del solicitante en el disparador por @mytharcher
