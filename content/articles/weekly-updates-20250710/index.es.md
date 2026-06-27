---
title: "Actualizaciones Semanales de NocoBase: Soporte para Variables de Agregación Personalizadas"
description: "Las actualizaciones de esta semana incluyen: agregar una cola de eventos para procesar mensajes en la cola y soportar la carga bajo demanda de colecciones desde fuentes de datos externas."
---

Resume las notas de actualización semanales del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Esta semana lanzamos [NocoBase 1.8.0](https://www.nocobase.com/en/blog/nocobase-1-8-0), con autenticación mejorada, soporte para variables de estadísticas personalizadas, gestión de correo electrónico actualizada y flujo de trabajo e interacción móvil optimizados.**

**NocoBase se actualiza actualmente con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones aún más. Ideal para usuarios de prueba que quieren experimentar nuevas funciones temprano y dar su opinión;
* `develop`: Versión alfa, contiene el código de función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.1](https://www.nocobase.com/en/blog/v1.8.1)

*Fecha de lanzamiento: 2025-07-09*

#### 🐛 Corrección de errores

- **[cliente]**

  - La visualización del campo de casilla de verificación es incorrecta en la colección de campos de asociación dentro del formulario ([#7176](https://github.com/nocobase/nocobase/pull/7176)) por @zhangzhonghe
  - Corregido el problema por el que al hacer clic en botones no se podían abrir ventanas emergentes ([#7180](https://github.com/nocobase/nocobase/pull/7180)) por @zhangzhonghe
- **[Flujo de trabajo: Nodo manual]** Corregido error al usar variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) por @mytharcher
- **[Plantilla de impresión]** añadido script de migración para el campo rootDataType por @jiannx
- **[Flujo de trabajo: Aprobación]** Corregido que la rama aprobada no se ejecutaba cuando no había asignado por @mytharcher

### [v1.7.20](https://www.nocobase.com/en/blog/v1.7.20)

*Fecha de lanzamiento: 2025-07-07*

#### 🐛 Corrección de errores

- **[cliente]**

  - Después de cambios en el campo, los ámbitos de datos que dependen de este campo deberían limpiar automáticamente los valores seleccionados ([#7161](https://github.com/nocobase/nocobase/pull/7161)) por @zhangzhonghe
  - Corregido el problema por el que establecer el ancho de columna de la tabla no tenía efecto ([#7158](https://github.com/nocobase/nocobase/pull/7158)) por @zhangzhonghe
  - Corregido el problema de error con formularios de filtro en la ventana emergente del botón Duplicar ([#7154](https://github.com/nocobase/nocobase/pull/7154)) por @zhangzhonghe
  - Corregido un error que ocurría al guardar una relación uno a uno en un campo de configuración. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) por @aaaaaajie
- **[indefinido]** Corregido e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) por @mytharcher
- **[Gestor de archivos]**

  - Corregida detección de mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) por @mytharcher
  - Corregido error de compilación debido al paquete ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) por @mytharcher
- **[Formularios públicos]** corregido problema por el que el campo Solo Fecha no podía seleccionar fecha en el formulario público. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) por @katherinehhh
- **[Flujo de trabajo]** Corregido el problema por el que se requerían múltiples deslizamientos hacia la izquierda para volver a la página anterior en dispositivos móviles ([#7165](https://github.com/nocobase/nocobase/pull/7165)) por @zhangzhonghe
- **[Visualización de datos]** Problema de paginación en tabla ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Corregidas asociaciones no cargadas después de retirar por @mytharcher
  - Eliminada transacción de parcheo de esquema debido a tiempo de espera por @mytharcher
  - Corregido error al eliminar aprobación por @mytharcher
  - Corregida actualización de asociación al enviar por @mytharcher

### [v1.7.19](https://www.nocobase.com/en/blog/v1.7.19)

*Fecha de lanzamiento: 2025-07-03*

#### 🚀 Mejoras

- **[base de datos]** Soporte para añadir opciones de pool desde env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) por @mytharcher
- **[Flujo de trabajo]**

  - Mejorado el rendimiento de carga de la lista de ejecuciones excluyendo el campo JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) por @mytharcher
  - Añadida API de registro para pruebas de nodos ([#7129](https://github.com/nocobase/nocobase/pull/7129)) por @mytharcher
- **[Gestor de múltiples aplicaciones]** añadido soporte de filtro a la gestión de múltiples aplicaciones ([#7124](https://github.com/nocobase/nocobase/pull/7124)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Cambiado tiempo a absoluto en la línea de tiempo por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Establecer el displayName del campo en la vista conectada no tenía efecto ([#7130](https://github.com/nocobase/nocobase/pull/7130)) por @aaaaaajie
  - Problema de estilo de color de fondo en subtabla dentro del bloque de detalle ([#7144](https://github.com/nocobase/nocobase/pull/7144)) por @katherinehhh
  - Configuración de UI del nodo manual de flujo de trabajo: las reglas de enlace no pueden seleccionar variables del formulario actual ([#7125](https://github.com/nocobase/nocobase/pull/7125)) por @zhangzhonghe
  - El valor predeterminado del campo de asociación sobrescribe los datos existentes en la subtabla ([#7120](https://github.com/nocobase/nocobase/pull/7120)) por @katherinehhh
  - markdown no reflejaba los cambios en tiempo real al referenciar variables $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) por @katherinehhh
  - Tolerancia a fallos para configuraciones basadas en 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) por @mytharcher
- **[utilidades]** problema de filtrado en DateOnly o Datetime (sin zona horaria) usando la variable Día exacto ([#7113](https://github.com/nocobase/nocobase/pull/7113)) por @katherinehhh
- **[Flujo de trabajo]** Corregido error por importación cíclica ([#7134](https://github.com/nocobase/nocobase/pull/7134)) por @mytharcher
- **[Política de contraseñas]** Soporte para bloquear permanentemente cuentas de usuario por @2013xile
- **[Flujo de trabajo: Subflujo]** Corregido problema en modo clúster por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Eliminados campos no filtrables del filtro por @mytharcher
  - Añadida configuración de diseño de formulario por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.1](https://www.nocobase.com/en/blog/v1.9.0-beta.1)

*Fecha de lanzamiento: 2025-07-07*

#### 🎉 Nuevas funciones

- **[servidor]** Añadida cola de eventos para procesar mensajes en cola ([#6819](https://github.com/nocobase/nocobase/pull/6819)) por @mytharcher

#### 🚀 Mejoras

- **[Flujo de trabajo]** Movidos componentes comunes al plugin base ([#7140](https://github.com/nocobase/nocobase/pull/7140)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Después de cambios en el campo, los ámbitos de datos que dependen de este campo deberían limpiar automáticamente los valores seleccionados ([#7161](https://github.com/nocobase/nocobase/pull/7161)) por @zhangzhonghe
  - Corregido el problema por el que establecer el ancho de columna de la tabla no tenía efecto ([#7158](https://github.com/nocobase/nocobase/pull/7158)) por @zhangzhonghe
  - Corregido el problema de error con formularios de filtro en la ventana emergente del botón Duplicar ([#7154](https://github.com/nocobase/nocobase/pull/7154)) por @zhangzhonghe
  - Corregido un error que ocurría al guardar una relación uno a uno en un campo de configuración. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) por @aaaaaajie
- **[indefinido]** Corregido e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) por @mytharcher
- **[Calendario]** establecido el día de inicio de la semana predeterminado a 'lunes' en el bloque de calendario ([#7171](https://github.com/nocobase/nocobase/pull/7171)) por @katherinehhh
- **[Flujo de trabajo]** Corregido el problema por el que se requerían múltiples deslizamientos hacia la izquierda para volver a la página anterior en dispositivos móviles ([#7165](https://github.com/nocobase/nocobase/pull/7165)) por @zhangzhonghe
- **[Gestor de archivos]**

  - Corregido error de compilación debido al paquete ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) por @mytharcher
  - Corregida detección de mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Corregida importación incorrecta de variable ([#7156](https://github.com/nocobase/nocobase/pull/7156)) por @mytharcher
- **[Formularios públicos]** corregido problema por el que el campo Solo Fecha no podía seleccionar fecha en el formulario público. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Eliminada transacción de parcheo de esquema debido a tiempo de espera por @mytharcher
  - Corregidas asociaciones no cargadas después de retirar por @mytharcher
  - Corregido error al eliminar aprobación por @mytharcher
  - Corregida actualización de asociación al enviar por @mytharcher

### [v1.8.0-beta.13](https://www.nocobase.com/en/blog/v1.8.0-beta.13)

*Fecha de lanzamiento: 2025-07-03*

#### 🎉 Nuevas funciones

- **[cliente]**

  - Soporte para el campo BIT en SQL Server para fuentes de datos externas. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) por @aaaaaajie
  - Soporte para variables de agregación personalizadas ([#6916](https://github.com/nocobase/nocobase/pull/6916)) por @zhangzhonghe
    Referencia: [Variables personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[compilación]** soporte para autorización comercial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) por @jiannx
- **[Gestor de fuentes de datos]** ✨ Soporte para carga bajo demanda de colecciones desde fuentes de datos externas ([#6979](https://github.com/nocobase/nocobase/pull/6979)) por @aaaaaajie
- **[Configuración de licencia]** añadida configuración de licencia y validación de licencia antes de descargar plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) por @jiannx
- **[Autenticación]** Soporte para la función "Olvidé mi contraseña" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) por @zhangzhonghe
  Referencia: [Olvidé mi contraseña](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Acción: Actualización por lotes]** Soporte para refrescar datos en otros bloques de datos después de actualizar datos en un bloque ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe
- **[Fuente de datos: SQL Server externo]**

  - Añadido soporte para el campo BIT de SQL Server en fuentes de datos externas por @aaaaaajie
  - Soporte para carga bajo demanda de colecciones desde fuentes de datos externas por @aaaaaajie
- **[Variables personalizadas]** Soporte para variables de agregación personalizadas por @zhangzhonghe
  Referencia: [Variables personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Gestor de correo electrónico]**

  - soporte para eliminar correo electrónico por @jiannx
  - soporte para configuración del intervalo de sincronización de correo electrónico por @jiannx
  - soporte para envío masivo por @jiannx

#### 🚀 Mejoras

- **[cliente]**

  - Soporte para rellenar campos de entrada mediante escaneo de código QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) por @katherinehhh
  - Determinar si mostrar los componentes móviles según el tipo de dispositivo en lugar del ancho de página ([#6611](https://github.com/nocobase/nocobase/pull/6611)) por @zhangzhonghe
  - soporte para localización del contenido del bloque Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) por @katherinehhh
  - Determinar si mostrar el diseño móvil según el tipo de dispositivo en lugar del ancho de página ([#6600](https://github.com/nocobase/nocobase/pull/6600)) por @zhangzhonghe
- **[Gestor de tareas asíncronas]** Mejorado el rendimiento de la creación de tareas durante la exportación ([#7078](https://github.com/nocobase/nocobase/pull/7078)) por @aaaaaajie
- **[Móvil]** Adaptado el estilo de la ventana emergente de notificación para dispositivos móviles ([#6557](https://github.com/nocobase/nocobase/pull/6557)) por @zhangzhonghe
- **[Gestor de correo electrónico]**

  - soporte para respuesta y reenvío separados de correos electrónicos dentro del mismo asunto por @jiannx
  - implementación de esquema luego envío de correo y soporte para IA por @jiannx
  - soporta el valor de envío predeterminado en ventana emergente, soporta búsqueda difusa de destinatarios y corrige problemas por @jiannx
  - función de envío masivo completada por @jiannx
  - mejora funcional y corrección de problemas por @jiannx

#### 🐛 Corrección de errores

- **[cli]**

  - Ajustada la copia de la licencia al instalar el plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) por @jiannx
  - error indefinido en la descarga de plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) por @jiannx
- **[cliente]**

  - Después de limpiar el valor de la insignia, la UI no se actualiza ([#7055](https://github.com/nocobase/nocobase/pull/7055)) por @zhangzhonghe
  - Error al hacer clic en el botón de filtro ([#7100](https://github.com/nocobase/nocobase/pull/7100)) por @zhangzhonghe
  - Corregido el problema por el que los datos del usuario actual están vacíos ([#7016](https://github.com/nocobase/nocobase/pull/7016)) por @zhangzhonghe
  - El contenido se muestra incorrectamente en páginas abiertas a través de enlaces emergentes ([#6990](https://github.com/nocobase/nocobase/pull/6990)) por @zhangzhonghe
  - Pasar otras props al componente Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) por @sheldon66
  - La acción Guardar como plantilla fallará si contiene un campo de asociación ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust
- **[base de datos]** hacer que el operador eq para campos de cadena sea compatible con el tipo número ([#7062](https://github.com/nocobase/nocobase/pull/7062)) por @chenos
- **[compilación]** corregido el error de tiempo de ejecución del cliente en plugin-workflow-javascript, error de proceso indefinido ([#6859](https://github.com/nocobase/nocobase/pull/6859)) por @jiannx
- **[Visualización de datos]** Problema de paginación en tabla ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile
- **[Gestor de fuentes de datos]** Corregido un problema donde la combinación de carga bajo demanda de fuente de datos y configuración de prefijo de tabla causaba un error "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) por @aaaaaajie
- **[plugin-service-platform]** ajustado texto de licencia por @jiannx
- **[Variables personalizadas]** Después de limpiar el valor de la insignia, la UI no se actualiza por @zhangzhonghe
- **[Gestor de correo electrónico]**

  - el adjunto no se muestra por @jiannx
  - error al eliminar correo electrónico por @jiannx
  - fallo al eliminar correo electrónico por @jiannx
  - la ventana emergente de configuración no se muestra por @jiannx
  - el panel de respuesta no es visible por @jiannx
  - la búsqueda difusa de destinatarios soporta campos asociados por @jiannx
  - añadido el campo "id" a mailmessagelabelsMailmessages por @jiannx
  - búsqueda difusa de correo para hacer filtros únicos por @jiannx
  - múltiples claves primarias para la tabla "mailmessagelabels_mailmessages" por @jiannx

### [v1.8.0-beta.12](https://www.nocobase.com/en/blog/v1.8.0-beta.12)

*Fecha de lanzamiento: 2025-07-03*

#### 🚀 Mejoras

- **[base de datos]** Soporte para añadir opciones de pool desde env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) por @mytharcher
- **[Flujo de trabajo]**

  - Mejorado el rendimiento de carga de la lista de ejecuciones excluyendo el campo JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) por @mytharcher
  - Añadida API de registro para pruebas de nodos ([#7129](https://github.com/nocobase/nocobase/pull/7129)) por @mytharcher
- **[Gestor de múltiples aplicaciones]** añadido soporte de filtro a la gestión de múltiples aplicaciones ([#7124](https://github.com/nocobase/nocobase/pull/7124)) por @katherinehhh
- **[Flujo de trabajo: Aprobación]** Cambiado tiempo a absoluto en la línea de tiempo por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - markdown no reflejaba los cambios en tiempo real al referenciar variables $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) por @katherinehhh
  - Problema de estilo de color de fondo en subtabla dentro del bloque de detalle ([#7144](https://github.com/nocobase/nocobase/pull/7144)) por @katherinehhh
  - Configuración de UI del nodo manual de flujo de trabajo: las reglas de enlace no pueden seleccionar variables del formulario actual ([#7125](https://github.com/nocobase/nocobase/pull/7125)) por @zhangzhonghe
  - Establecer el displayName del campo en la vista conectada no tenía efecto ([#7130](https://github.com/nocobase/nocobase/pull/7130)) por @aaaaaajie
  - El valor predeterminado del campo de asociación sobrescribe los datos existentes en la subtabla ([#7120](https://github.com/nocobase/nocobase/pull/7120)) por @katherinehhh
  - Tolerancia a fallos para configuraciones basadas en 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) por @mytharcher
- **[utilidades]** problema de filtrado en DateOnly o Datetime (sin zona horaria) usando la variable Día exacto ([#7113](https://github.com/nocobase/nocobase/pull/7113)) por @katherinehhh
- **[Flujo de trabajo]** Corregido error por importación cíclica ([#7134](https://github.com/nocobase/nocobase/pull/7134)) por @mytharcher
- **[Política de contraseñas]** Soporte para bloquear permanentemente cuentas de usuario por @2013xile
- **[Flujo de trabajo: Subflujo]** Corregido problema en modo clúster por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Eliminados campos no filtrables del filtro por @mytharcher
  - Añadida configuración de diseño de formulario por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.1](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Fecha de lanzamiento: 2025-07-07*

#### 🎉 Nuevas funciones

- **[servidor]** Añadida cola de eventos para procesar mensajes en cola ([#6819](https://github.com/nocobase/nocobase/pull/6819)) por @mytharcher

#### 🚀 Mejoras

- **[Flujo de trabajo]** Movidos componentes comunes al plugin base ([#7140](https://github.com/nocobase/nocobase/pull/7140)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Después de cambios en el campo, los ámbitos de datos que dependen de este campo deberían limpiar automáticamente los valores seleccionados ([#7161](https://github.com/nocobase/nocobase/pull/7161)) por @zhangzhonghe
  - Corregido el problema por el que establecer el ancho de columna de la tabla no tenía efecto ([#7158](https://github.com/nocobase/nocobase/pull/7158)) por @zhangzhonghe
  - Corregido un error que ocurría al guardar una relación uno a uno en un campo de configuración. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) por @aaaaaajie
  - Corregido el problema de error con formularios de filtro en la ventana emergente del botón Duplicar ([#7154](https://github.com/nocobase/nocobase/pull/7154)) por @zhangzhonghe
- **[indefinido]** Corregido e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) por @mytharcher
- **[Gestor de archivos]**

  - Corregido error de compilación debido al paquete ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) por @mytharcher
  - Corregida detección de mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) por @mytharcher
- **[Formularios públicos]** corregido problema por el que el campo Solo Fecha no podía seleccionar fecha en el formulario público. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) por @katherinehhh
- **[Calendario]** establecido el día de inicio de la semana predeterminado a 'lunes' en el bloque de calendario ([#7171](https://github.com/nocobase/nocobase/pull/7171)) por @katherinehhh
- **[Flujo de trabajo: Nodo manual]** Corregida importación incorrecta de variable ([#7156](https://github.com/nocobase/nocobase/pull/7156)) por @mytharcher
- **[Flujo de trabajo]** Corregido el problema por el que se requerían múltiples deslizamientos hacia la izquierda para volver a la página anterior en dispositivos móviles ([#7165](https://github.com/nocobase/nocobase/pull/7165)) por @zhangzhonghe
- **[Flujo de trabajo: Aprobación]**

  - Corregida actualización de asociación al enviar por @mytharcher
  - Corregido error al eliminar aprobación por @mytharcher
  - Corregidas asociaciones no cargadas después de retirar por @mytharcher
- **[Gestor de correo electrónico]**

  - después de seleccionar filas, establecer "Leído" y "No leído" por @jiannx
  - el contenido del subcorreo no se puede filtrar por @jiannx

### [v1.8.0-alpha.14](https://www.nocobase.com/en/blog/v1.8.0-alpha.14)

*Fecha de lanzamiento: 2025-07-04*

#### 🐛 Corrección de errores

- **[Flujo de trabajo: Aprobación]** Eliminada transacción de parcheo de esquema debido a tiempo de espera por @mytharcher

### [v1.8.0-alpha.13](https://www.nocobase.com/en/blog/v1.8.0-alpha.13)

*Fecha de lanzamiento: 2025-07-03*

#### 🚀 Mejoras

- **[Gestor de correo electrónico]** soporte para respuesta y reenvío separados de correos electrónicos dentro del mismo asunto por @jiannx

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema de estilo de color de fondo en subtabla dentro del bloque de detalle ([#7144](https://github.com/nocobase/nocobase/pull/7144)) por @katherinehhh
  - markdown no reflejaba los cambios en tiempo real al referenciar variables $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) por @katherinehhh
- **[Visualización de datos]** Problema de paginación en tabla ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile
- **[Gestor de fuentes de datos]** Corregido un problema donde la combinación de carga bajo demanda de fuente de datos y configuración de prefijo de tabla causaba un error "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) por @aaaaaajie
