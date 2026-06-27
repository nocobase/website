---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana incluyen: soporte para configurar secretos de autenticación independientes para sub-aplicaciones y la adición de un nodo CC a los flujos de trabajo."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.6](https://www.nocobase.com/en/blog/v1.8.6)

*Fecha de lanzamiento: 2025-07-16*

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregido error: No se puede resolver 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe
  - Problema de visualización de campos de asociación en reglas de enlace ([#7220](https://github.com/nocobase/nocobase/pull/7220)) por @katherinehhh
- **[base de datos]** Corregido error al habilitar la paginación simple para tablas de fuentes de datos externas ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie
- **[Campo de colección: Orden]** Falta la selección del campo de orden al duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Añadida tolerancia a fallos para aprobaciones eliminadas en la lista de registros por @mytharcher
  - Corregidos múltiples niveles de asociaciones al enviar una aprobación por @mytharcher
  - Corregida excepción al eliminar un registro por @mytharcher

### [v1.8.5](https://www.nocobase.com/en/blog/v1.8.5)

*Fecha de lanzamiento: 2025-07-14*

#### 🚀 Mejoras

- **[Campo de colección: Fórmula]** Añadidas más interfaces calculables ([#7215](https://github.com/nocobase/nocobase/pull/7215)) por @mytharcher
- **[Flujo de trabajo]** Usar registro en lugar de lanzar error cuando la ejecución no debería ejecutarse debido al estado ([#7217](https://github.com/nocobase/nocobase/pull/7217)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Soporte para eliminar la aprobación cuando se eliminan datos relacionados por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema por el cual los campos de archivos adjuntos no podían seleccionarse como variables en la regla de enlace ([#7213](https://github.com/nocobase/nocobase/pull/7213)) por @zhangzhonghe
  - Corregido el problema por el cual los componentes de selección desplegable eran bloqueados por el teclado en iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) por @zhangzhonghe
  - La asignación de valores falla en el formulario de edición cuando se establecen tanto el valor como las opciones para el campo de selección ([#7209](https://github.com/nocobase/nocobase/pull/7209)) por @katherinehhh
  - Colapso de filtro: El filtro no se activa durante la inicialización de la página después de establecer valores predeterminados para los campos ([#7206](https://github.com/nocobase/nocobase/pull/7206)) por @zhangzhonghe
  - Error al asignar valores en el bloque de lista usando el campo de orden kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) por @katherinehhh
  - El título de la pestaña del navegador no se sincroniza al cambiar entre submenús ([#7207](https://github.com/nocobase/nocobase/pull/7207)) por @zhangzhonghe
  - Acción de ventana emergente: La visualización de la página no cumple con las expectativas después de cambiar de pestaña ([#7212](https://github.com/nocobase/nocobase/pull/7212)) por @zhangzhonghe
- **[acl]** Corregido error al eliminar un rol en modo de unión de roles que incluye el rol raíz. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) por @aaaaaajie
- **[Gestor de múltiples aplicaciones]** Corregidas opciones de autenticación en posición inesperada ([#7210](https://github.com/nocobase/nocobase/pull/7210)) por @mytharcher
- **[Autenticación]** Corregido el problema por el cual la página de inicio de sesión no podía desplazarse ([#7159](https://github.com/nocobase/nocobase/pull/7159)) por @zhangzhonghe
- **[Flujo de trabajo: Aprobación]** Corregidas asociaciones al enviar una aprobación por @mytharcher

### [v1.8.4](https://www.nocobase.com/en/blog/v1.8.4)

*Fecha de lanzamiento: 2025-07-13*

#### 🎉 Nuevas funciones

- **[Gestor de múltiples aplicaciones]** Soporte para configurar un secreto de autenticación independiente para subaplicaciones ([#7197](https://github.com/nocobase/nocobase/pull/7197)) por @mytharcher
- **[Flujo de trabajo: CC]** Añadido nodo CC al flujo de trabajo ([#7201](https://github.com/nocobase/nocobase/pull/7201)) por @mytharcher

#### 🚀 Mejoras

- **[Notificación: Mensaje en la aplicación]** Optimizado el tamaño de fuente para la página de mensajes móviles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) por @zhangzhonghe
- **[Autenticación: DingTalk]** Soporte para configurar el protocolo y el número de puerto de la URL de devolución de llamada por @2013xile

#### 🐛 Corrección de errores

- **[Notificación: Mensaje en la aplicación]** Corregido el problema de dayjs causado por la marca de tiempo BigInt en formato de cadena ([#7196](https://github.com/nocobase/nocobase/pull/7196)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Para evitar errores cuando el usuario no existe por @mytharcher
  - Recargar asociación en el registro por @mytharcher
  - Añadido `try/catch` en la migración al actualizar el esquema de la interfaz de usuario por @mytharcher

### [v1.8.3](https://www.nocobase.com/en/blog/v1.8.3)

*Fecha de lanzamiento: 2025-07-11*

#### 🚀 Mejoras

- **[Gestor de múltiples aplicaciones]** Añadidas opciones de base de datos y autorización para subaplicaciones ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher

#### 🐛 Corrección de errores

- **[Acción: Solicitud personalizada]** Problema de análisis de variables en la URL durante la navegación de ruta después de una solicitud personalizada exitosa ([#7186](https://github.com/nocobase/nocobase/pull/7186)) por @katherinehhh

### [v1.8.2](https://www.nocobase.com/en/blog/v1.8.2)

*Fecha de lanzamiento: 2025-07-10*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Añadido inicializador para el desencadenante por @mytharcher

#### 🚀 Mejoras

- **[Gestor de múltiples aplicaciones]** Añadidas opciones de base de datos y autorización para subaplicaciones ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher
- **[Flujo de trabajo]** Convertir operandos a cadena antes de la comparación de cadenas en el cálculo lógico ([#7190](https://github.com/nocobase/nocobase/pull/7190)) por @mytharcher
- **[Campo de colección: Código]** Añadida configuración de sangría por @mytharcher

#### 🐛 Corrección de errores

- **[base de datos]** Corregido un problema por el cual los campos de las vistas no se mostraban en los bloques. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) por @aaaaaajie
- **[Bloque: Kanban]** Corregidos problemas de interfaz de usuario de subtabla en Kanban y añadido soporte para la configuración del ancho de columna de Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Corregidos errores de bloque y asociación por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.3](https://www.nocobase.com/en/blog/v1.9.0-beta.3)

*Fecha de lanzamiento: 2025-07-14*

#### 🎉 Nuevas funciones

- **[Gestor de múltiples aplicaciones]** Soporte para configurar un secreto de autenticación independiente para subaplicaciones ([#7197](https://github.com/nocobase/nocobase/pull/7197)) por @mytharcher
- **[Flujo de trabajo: CC]** Añadido nodo CC al flujo de trabajo ([#7201](https://github.com/nocobase/nocobase/pull/7201)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Añadido inicializador para el desencadenante por @mytharcher

#### 🚀 Mejoras

- **[Notificación: Mensaje en la aplicación]** Optimizado el tamaño de fuente para la página de mensajes móviles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) por @zhangzhonghe
- **[Flujo de trabajo]** Convertir operandos a cadena antes de la comparación de cadenas en el cálculo lógico ([#7190](https://github.com/nocobase/nocobase/pull/7190)) por @mytharcher
- **[Gestor de múltiples aplicaciones]**

  - Añadidas opciones de base de datos y autorización para subaplicaciones ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher
  - Añadidas opciones de base de datos y autorización para subaplicaciones ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher
- **[Campo de colección: Código]** Añadida configuración de sangría por @mytharcher
- **[Autenticación: DingTalk]** Soporte para configurar el protocolo y el número de puerto de la URL de devolución de llamada por @2013xile

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema por el cual los campos de archivos adjuntos no podían seleccionarse como variables en la regla de enlace ([#7213](https://github.com/nocobase/nocobase/pull/7213)) por @zhangzhonghe
  - Error al asignar valores en el bloque de lista usando el campo de orden kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) por @katherinehhh
  - Colapso de filtro: El filtro no se activa durante la inicialización de la página después de establecer valores predeterminados para los campos ([#7206](https://github.com/nocobase/nocobase/pull/7206)) por @zhangzhonghe
  - La asignación de valores falla en el formulario de edición cuando se establecen tanto el valor como las opciones para el campo de selección ([#7209](https://github.com/nocobase/nocobase/pull/7209)) por @katherinehhh
  - Acción de ventana emergente: La visualización de la página no cumple con las expectativas después de cambiar de pestaña ([#7212](https://github.com/nocobase/nocobase/pull/7212)) por @zhangzhonghe
  - El título de la pestaña del navegador no se sincroniza al cambiar entre submenús ([#7207](https://github.com/nocobase/nocobase/pull/7207)) por @zhangzhonghe
  - Corregido el problema por el cual los componentes de selección desplegable eran bloqueados por el teclado en iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) por @zhangzhonghe
- **[acl]** Corregido error al eliminar un rol en modo de unión de roles que incluye el rol raíz. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) por @aaaaaajie
- **[Autenticación]** Corregido el problema por el cual la página de inicio de sesión no podía desplazarse ([#7159](https://github.com/nocobase/nocobase/pull/7159)) por @zhangzhonghe
- **[Gestor de múltiples aplicaciones]** Corregidas opciones de autenticación en posición inesperada ([#7210](https://github.com/nocobase/nocobase/pull/7210)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Corregido el problema de dayjs causado por la marca de tiempo BigInt en formato de cadena ([#7196](https://github.com/nocobase/nocobase/pull/7196)) por @mytharcher
- **[Acción: Solicitud personalizada]** Problema de análisis de variables en la URL durante la navegación de ruta después de una solicitud personalizada exitosa ([#7186](https://github.com/nocobase/nocobase/pull/7186)) por @katherinehhh
- **[Bloque: Kanban]** Corregidos problemas de interfaz de usuario de subtabla en Kanban y añadido soporte para la configuración del ancho de columna de Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Añadido `try/catch` en la migración al actualizar el esquema de la interfaz de usuario por @mytharcher
  - Corregidos errores de bloque y asociación por @mytharcher
  - Recargar asociación en el registro por @mytharcher
  - Para evitar errores cuando el usuario no existe por @mytharcher

### [v1.9.0-beta.2](https://www.nocobase.com/en/blog/v1.9.0-beta.2)

*Fecha de lanzamiento: 2025-07-10*

#### 🐛 Corrección de errores

- **[cliente]**

  - La visualización del campo de casilla de verificación es incorrecta en la colección de campos de asociación dentro del formulario ([#7176](https://github.com/nocobase/nocobase/pull/7176)) por @zhangzhonghe
  - Corregido el problema por el cual al hacer clic en los botones no se podían abrir ventanas emergentes ([#7180](https://github.com/nocobase/nocobase/pull/7180)) por @zhangzhonghe
- **[base de datos]** Corregido un problema por el cual los campos de las vistas no se mostraban en los bloques. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) por @aaaaaajie
- **[Flujo de trabajo: Nodo manual]** Corregido error lanzado al usar variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) por @mytharcher
- **[Impresión de plantilla]** añadido script de migración al campo rootDataType por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregida la rama aprobada que no se ejecutaba cuando no hay asignado por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.2](https://www.nocobase.com/en/blog/v1.9.0-alpha.2)

*Fecha de lanzamiento: 2025-07-15*

#### 🎉 Nuevas funciones

- **[Gestor de múltiples aplicaciones]** Soporte para configurar un secreto de autenticación independiente para subaplicaciones ([#7197](https://github.com/nocobase/nocobase/pull/7197)) por @mytharcher
- **[Flujo de trabajo: CC]** Añadido nodo CC al flujo de trabajo ([#7201](https://github.com/nocobase/nocobase/pull/7201)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Añadido inicializador para el desencadenante por @mytharcher

#### 🚀 Mejoras

- **[Campo de colección: Fórmula]** Añadidas más interfaces calculables ([#7215](https://github.com/nocobase/nocobase/pull/7215)) por @mytharcher
- **[Flujo de trabajo]**

  - Usar registro en lugar de lanzar error cuando la ejecución no debería ejecutarse debido al estado ([#7217](https://github.com/nocobase/nocobase/pull/7217)) por @mytharcher
  - Convertir operandos a cadena antes de la comparación de cadenas en el cálculo lógico ([#7190](https://github.com/nocobase/nocobase/pull/7190)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Optimizado el tamaño de fuente para la página de mensajes móviles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) por @zhangzhonghe
- **[Gestor de múltiples aplicaciones]**

  - Añadidas opciones de base de datos y autorización para subaplicaciones ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher
  - Añadidas opciones de base de datos y autorización para subaplicaciones ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher
- **[Campo de colección: Código]** Añadida configuración de sangría por @mytharcher
- **[Flujo de trabajo: Aprobación]** Soporte para eliminar la aprobación cuando se eliminan datos relacionados por @mytharcher
- **[Autenticación: DingTalk]** Soporte para configurar el protocolo y el número de puerto de la URL de devolución de llamada por @2013xile

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema por el cual los campos de archivos adjuntos no podían seleccionarse como variables en la regla de enlace ([#7213](https://github.com/nocobase/nocobase/pull/7213)) por @zhangzhonghe
  - Colapso de filtro: El filtro no se activa durante la inicialización de la página después de establecer valores predeterminados para los campos ([#7206](https://github.com/nocobase/nocobase/pull/7206)) por @zhangzhonghe
  - Problema de visualización de campos de asociación en reglas de enlace ([#7220](https://github.com/nocobase/nocobase/pull/7220)) por @katherinehhh
  - La asignación de valores falla en el formulario de edición cuando se establecen tanto el valor como las opciones para el campo de selección ([#7209](https://github.com/nocobase/nocobase/pull/7209)) por @katherinehhh
  - Error al asignar valores en el bloque de lista usando el campo de orden kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) por @katherinehhh
  - Acción de ventana emergente: La visualización de la página no cumple con las expectativas después de cambiar de pestaña ([#7212](https://github.com/nocobase/nocobase/pull/7212)) por @zhangzhonghe
  - El título de la pestaña del navegador no se sincroniza al cambiar entre submenús ([#7207](https://github.com/nocobase/nocobase/pull/7207)) por @zhangzhonghe
  - Corregido el problema por el cual los componentes de selección desplegable eran bloqueados por el teclado en iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) por @zhangzhonghe
  - La visualización del campo de casilla de verificación es incorrecta en la colección de campos de asociación dentro del formulario ([#7176](https://github.com/nocobase/nocobase/pull/7176)) por @zhangzhonghe
  - Corregido el problema por el cual al hacer clic en los botones no se podían abrir ventanas emergentes ([#7180](https://github.com/nocobase/nocobase/pull/7180)) por @zhangzhonghe
- **[acl]** Corregido error al eliminar un rol en modo de unión de roles que incluye el rol raíz. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) por @aaaaaajie
- **[base de datos]** Corregido un problema por el cual los campos de las vistas no se mostraban en los bloques. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) por @aaaaaajie
- **[Gestor de múltiples aplicaciones]** Corregidas opciones de autenticación en posición inesperada ([#7210](https://github.com/nocobase/nocobase/pull/7210)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Corregido el problema de dayjs causado por la marca de tiempo BigInt en formato de cadena ([#7196](https://github.com/nocobase/nocobase/pull/7196)) por @mytharcher
- **[Autenticación]** Corregido el problema por el cual la página de inicio de sesión no podía desplazarse ([#7159](https://github.com/nocobase/nocobase/pull/7159)) por @zhangzhonghe
- **[Acción: Solicitud personalizada]** Problema de análisis de variables en la URL durante la navegación de ruta después de una solicitud personalizada exitosa ([#7186](https://github.com/nocobase/nocobase/pull/7186)) por @katherinehhh
- **[Bloque: Kanban]** Corregidos problemas de interfaz de usuario de subtabla en Kanban y añadido soporte para la configuración del ancho de columna de Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) por @katherinehhh
- **[Flujo de trabajo: Nodo manual]** Corregido error lanzado al usar variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) por @mytharcher
- **[Impresión de plantilla]** añadido script de migración al campo rootDataType por @jiannx
- **[Flujo de trabajo: Aprobación]**

  - Corregidas asociaciones al enviar una aprobación por @mytharcher
  - Corregida excepción al eliminar un registro por @mytharcher
  - Corregida la rama aprobada que no se ejecutaba cuando no hay asignado por @mytharcher
  - Para evitar errores cuando el usuario no existe por @mytharcher
  - Corregidos errores de bloque y asociación por @mytharcher
  - Añadido `try/catch` en la migración al actualizar el esquema de la interfaz de usuario por @mytharcher
  - Recargar asociación en el registro por @mytharcher
