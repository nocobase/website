---
title: "Actualizaciones semanales de NocoBase: Soporte para variables en el lado izquierdo de las condiciones de reglas de vinculación"
description: "Las actualizaciones de esta semana incluyen: la adición de una interfaz de código, soporte para imágenes dinámicas y renderizado de códigos de barras en plantillas de documentos, y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.21](https://www.nocobase.com/en/blog/v1.6.21)

*Fecha de lanzamiento: 2025-04-17*

#### 🚀 Mejoras

- **[cliente]** Añadir API de retardo para escenarios que se abren sin retardo ([#6681](https://github.com/nocobase/nocobase/pull/6681)) por @mytharcher
- **[create-nocobase-app]** Actualizar algunas dependencias a las últimas versiones ([#6673](https://github.com/nocobase/nocobase/pull/6673)) por @chenos

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir error lanzado al pasar el ratón sobre un bloque de plantilla referenciado en la configuración del nodo de aprobación ([#6691](https://github.com/nocobase/nocobase/pull/6691)) por @mytharcher
  - El campo de asociación personalizado no muestra la configuración del componente de campo ([#6692](https://github.com/nocobase/nocobase/pull/6692)) por @katherinehhh
  - Corregir locale para el componente de carga ([#6682](https://github.com/nocobase/nocobase/pull/6682)) por @mytharcher
  - La carga diferida de un componente de interfaz de usuario faltante provoca un error de renderizado ([#6683](https://github.com/nocobase/nocobase/pull/6683)) por @gchust
  - Añadir componente Password nativo a HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) por @mytharcher
  - Campos heredados mostrados en la lista de asignación de campos de la colección actual ([#6666](https://github.com/nocobase/nocobase/pull/6666)) por @katherinehhh
- **[base de datos]** Corregido error de compilación de CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) por @aaaaaajie
- **[compilación]** La salida de compilación es incorrecta cuando el plugin depende de algunas librerías AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) por @gchust
- **[Acción: Importar registros]** Corregido un error al importar el campo de tiempo xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) por @aaaaaajie
- **[Flujo de trabajo: Nodo manual]** Corregir constante de estado de tarea manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) por @mytharcher
- **[Bloque: iframe]** Aparece la barra de desplazamiento vertical cuando el bloque iframe se establece a altura completa ([#6675](https://github.com/nocobase/nocobase/pull/6675)) por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir casos de prueba por @mytharcher
- **[Gestor de copias de seguridad]** Se produce un error de tiempo de espera al intentar restaurar una copia de seguridad no cifrada con una contraseña por @gchust

### [v1.6.22](https://www.nocobase.com/en/blog/v1.6.22)

*Fecha de lanzamiento: 2025-04-22*

#### 🚀 Mejoras

- **[create-nocobase-app]** Actualizar dependencias y eliminar soporte SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) por @chenos
- **[Gestor de archivos]** Exponer API de utilidades ([#6705](https://github.com/nocobase/nocobase/pull/6705)) por @mytharcher
- **[Flujo de trabajo]** Añadir tipos de fecha al conjunto de tipos de variable ([#6717](https://github.com/nocobase/nocobase/pull/6717)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - El problema de los iconos de la barra de navegación superior móvil que son difíciles de eliminar ([#6734](https://github.com/nocobase/nocobase/pull/6734)) por @zhangzhonghe
  - Después de conectar a través de una clave foránea, al hacer clic para activar el filtrado se obtienen condiciones de filtro vacías ([#6634](https://github.com/nocobase/nocobase/pull/6634)) por @zhangzhonghe
  - Problema de cambio de selector en el campo de fecha del botón de filtro ([#6695](https://github.com/nocobase/nocobase/pull/6695)) por @katherinehhh
  - El problema del botón de colapso en el menú izquierdo que queda oculto por la ventana emergente del flujo de trabajo ([#6733](https://github.com/nocobase/nocobase/pull/6733)) por @zhangzhonghe
  - Faltan restricciones de opciones de acción al reabrir reglas de vinculación ([#6723](https://github.com/nocobase/nocobase/pull/6723)) por @katherinehhh
  - Botón de exportación mostrado sin permiso de exportación ([#6689](https://github.com/nocobase/nocobase/pull/6689)) por @katherinehhh
  - Los campos obligatorios ocultos por reglas de vinculación no deberían afectar el envío del formulario ([#6709](https://github.com/nocobase/nocobase/pull/6709)) por @zhangzhonghe
- **[servidor]** appVersion generada incorrectamente por create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) por @chenos
- **[compilación]** Corregir error lanzado en el comando tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) por @mytharcher
- **[Flujo de trabajo]** Corregir error lanzado al ejecutar evento programado en subflujo ([#6721](https://github.com/nocobase/nocobase/pull/6721)) por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Soporte para ejecutar en modo de múltiples registros por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]** Añadir lógica multer para carga del lado del servidor por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.19](https://www.nocobase.com/en/blog/v1.7.0-beta.19)

*Fecha de lanzamiento: 2025-04-17*

#### 🎉 Nuevas funciones

- **[cliente]** soporte de variables en el lado izquierdo de las condiciones de reglas de vinculación ([#6609](https://github.com/nocobase/nocobase/pull/6609)) por @katherinehhh
- **[Flujo de trabajo: nodo de cálculo de fecha]** Añadir función `changeTimezone` para cambiar el valor de la zona horaria para formateo por @mytharcher

#### 🚀 Mejoras

- **[cliente]**
  - soporte de registros de tabla seleccionados en solicitud personalizada ([#6647](https://github.com/nocobase/nocobase/pull/6647)) por @katherinehhh
  - Añadir API de retardo para escenarios que se abren sin retardo ([#6681](https://github.com/nocobase/nocobase/pull/6681)) por @mytharcher

#### 🐛 Corrección de errores

- **[base de datos]** Corregido error de compilación de CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) por @aaaaaajie
- **[cliente]**

  - Corregir error lanzado al pasar el ratón sobre un bloque de plantilla referenciado en la configuración del nodo de aprobación ([#6691](https://github.com/nocobase/nocobase/pull/6691)) por @mytharcher
  - Problema de visualización de descripciones de campo en el flujo de trabajo ([#6680](https://github.com/nocobase/nocobase/pull/6680)) por @katherinehhh
  - Corregir locale para el componente de carga ([#6682](https://github.com/nocobase/nocobase/pull/6682)) por @mytharcher
  - El campo de asociación personalizado no muestra la configuración del componente de campo ([#6692](https://github.com/nocobase/nocobase/pull/6692)) por @katherinehhh
  - Compatibilidad de reglas de vinculación con datos heredados ([#6686](https://github.com/nocobase/nocobase/pull/6686)) por @katherinehhh
  - La carga diferida de un componente de interfaz de usuario faltante provoca un error de renderizado ([#6683](https://github.com/nocobase/nocobase/pull/6683)) por @gchust
  - Añadir componente Password nativo a HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Corregir constante de estado de tarea manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) por @mytharcher
- **[Acción: Importar registros]** Corregido un error al importar el campo de tiempo xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) por @aaaaaajie
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir casos de prueba por @mytharcher
- **[Gestor de copias de seguridad]** Se produce un error de tiempo de espera al intentar restaurar una copia de seguridad no cifrada con una contraseña por @gchust

### [v1.7.0-beta.20](https://www.nocobase.com/en/blog/v1.7.0-beta.20)

*Fecha de lanzamiento: 2025-04-18*

#### 🚀 Mejoras

- **[Gestor de copias de seguridad]** permitir restaurar la aplicación principal desde una copia de seguridad de sub-aplicación por @gchust

#### 🐛 Corrección de errores

- **[cliente]** Corregir error lanzado en el nodo de creación / actualización del flujo de trabajo ([#6696](https://github.com/nocobase/nocobase/pull/6696)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** Corregir error de ACL en el centro de tareas ([#6693](https://github.com/nocobase/nocobase/pull/6693)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir error de ACL en el centro de tareas por @mytharcher

### [v1.7.0-beta.21](https://www.nocobase.com/en/blog/v1.7.0-beta.21)

*Fecha de lanzamiento: 2025-04-23*

#### 🚀 Mejoras

- **[create-nocobase-app]** Actualizar dependencias y eliminar soporte SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) por @chenos
- **[Móvil]** Optimizar la velocidad de apertura de la ventana emergente del selector de fecha móvil ([#6735](https://github.com/nocobase/nocobase/pull/6735)) por @zhangzhonghe
- **[Bloque: plantilla]** soporte para convertir bloque de plantilla en bloque normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) por @gchust
- **[Editor de temas]** Permitir establecer el ancho de la barra lateral en la configuración del tema ([#6720](https://github.com/nocobase/nocobase/pull/6720)) por @chenos
- **[Gestor de archivos]** Exponer API de utilidades ([#6705](https://github.com/nocobase/nocobase/pull/6705)) por @mytharcher
- **[Flujo de trabajo]** Añadir tipos de fecha al conjunto de tipos de variable ([#6717](https://github.com/nocobase/nocobase/pull/6717)) por @mytharcher
- **[Impresión de plantillas]** Se reemplazó el control de acciones de fuente de datos con control de acceso basado en roles del cliente. por @sheldon66

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema con la actualización de bloques de datos después de un envío exitoso ([#6748](https://github.com/nocobase/nocobase/pull/6748)) por @zhangzhonghe
  - Falta filtro para datos ya asociados al añadir datos de asociación ([#6750](https://github.com/nocobase/nocobase/pull/6750)) por @katherinehhh
  - El problema del botón de colapso en el menú izquierdo que queda oculto por la ventana emergente del flujo de trabajo ([#6733](https://github.com/nocobase/nocobase/pull/6733)) por @zhangzhonghe
  - La regla de vinculación del botón 'Añadir hijo' de la tabla de árbol falta 'registro actual' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) por @katherinehhh
  - La condición del campo de fecha y hora no funciona en las reglas de vinculación ([#6728](https://github.com/nocobase/nocobase/pull/6728)) por @katherinehhh
  - El problema de los iconos de la barra de navegación superior móvil que son difíciles de eliminar ([#6734](https://github.com/nocobase/nocobase/pull/6734)) por @zhangzhonghe
  - Visualización incorrecta del valor para "Habilitar columna de índice" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) por @katherinehhh
  - Los campos obligatorios ocultos por reglas de vinculación no deberían afectar el envío del formulario ([#6709](https://github.com/nocobase/nocobase/pull/6709)) por @zhangzhonghe
  - Conversión de variables en condiciones de reglas de vinculación de sub-tabla/sub-formulario ([#6702](https://github.com/nocobase/nocobase/pull/6702)) por @katherinehhh
  - Botón de exportación mostrado sin permiso de exportación ([#6689](https://github.com/nocobase/nocobase/pull/6689)) por @katherinehhh
  - Faltan restricciones de opciones de acción al reabrir reglas de vinculación ([#6723](https://github.com/nocobase/nocobase/pull/6723)) por @katherinehhh
  - Problema de cambio de selector en el campo de fecha del botón de filtro ([#6695](https://github.com/nocobase/nocobase/pull/6695)) por @katherinehhh
  - Después de conectar a través de una clave foránea, al hacer clic para activar el filtrado se obtienen condiciones de filtro vacías ([#6634](https://github.com/nocobase/nocobase/pull/6634)) por @zhangzhonghe
- **[cli]** Actualización automática de package.json en la actualización ([#6747](https://github.com/nocobase/nocobase/pull/6747)) por @chenos
- **[servidor]** appVersion generada incorrectamente por create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) por @chenos
- **[compilación]** Corregir error lanzado en el comando tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) por @mytharcher
- **[Bloque: Gantt]** El bloque del diagrama de Gantt superpone meses en el encabezado del calendario para la vista mensual ([#6753](https://github.com/nocobase/nocobase/pull/6753)) por @katherinehhh
- **[Acción: Importar registros]** Corregir las excepciones de importación y exportación que ocurren al establecer permisos de campo. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) por @aaaaaajie
- **[Bloque: plantilla]** Las plantillas de bloque no se pueden usar en el entorno mysql ([#6726](https://github.com/nocobase/nocobase/pull/6726)) por @gchust
- **[Flujo de trabajo]** Corregir error lanzado al ejecutar evento programado en subflujo ([#6721](https://github.com/nocobase/nocobase/pull/6721)) por @mytharcher
- **[Visualización de datos]** Las opciones de campo de enumeración están vacías en el bloque de filtro ([#6706](https://github.com/nocobase/nocobase/pull/6706)) por @2013xile
- **[Acción: Solicitud personalizada]** Asegurar que los datos de solicitud personalizada deben ser JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) por @chenos
- **[Acción: Exportar registros Pro]**

  - Corregir las excepciones de importación y exportación que ocurren al establecer permisos de campo. por @aaaaaajie
  - El botón de exportación pro pierde los parámetros de filtro después de ordenar la columna de la tabla por @katherinehhh
- **[Flujo de trabajo: Evento de acción personalizada]** Soporte para ejecutar en modo de múltiples registros por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]**

  - Añadir lógica multer para carga del lado del servidor por @mytharcher
  - Corregir datos de respuesta del archivo cargado por @mytharcher
- **[Flujo de trabajo: Aprobación]** Corregir campos de asociación de precarga para registros por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.11](https://www.nocobase.com/en/blog/v1.7.0-alpha.11)

*Fecha de lanzamiento: 2025-04-19*

#### 🎉 Nuevas funciones

- **[cliente]** soporte de variables en el lado izquierdo de las condiciones de reglas de vinculación ([#6609](https://github.com/nocobase/nocobase/pull/6609)) por @katherinehhh
- **[Departamentos]** Hacer que los plugins Departamento, URL de adjunto y mensaje de respuesta de flujo de trabajo sean gratuitos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) por @chenos
- **[Acción: Actualización por lotes]**

  - Soporte para actualizar datos en otros bloques de datos después de actualizar datos en un bloque ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe
  - Soporte para actualizar datos en otros bloques de datos después de actualizar datos en un bloque ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe
- **[Almacenamiento de esquema UI]** Se añadió módulo de localización para UISchema, permitiendo traducciones personalizadas para el título y la descripción del esquema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) por @chenos
- **[Bloque: Panel de acciones]** añadir un callback onScanSuccess para manejar escaneos exitosos y salir de la interfaz de usuario de la cámara. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) por @sheldon66
- **[Campo de colección: Código]** Añadir interfaz de código por @mytharcher
- **[Flujo de trabajo: nodo de cálculo de fecha]** Añadir función `changeTimezone` para cambiar el valor de la zona horaria para formateo por @mytharcher
- **[Impresión de plantillas]** Soporte para renderizado dinámico de imágenes y códigos de barras en plantillas de documentos. por @sheldon66

#### 🚀 Mejoras

- **[cliente]**

  - Añadir API de retardo para escenarios que se abren sin retardo ([#6681](https://github.com/nocobase/nocobase/pull/6681)) por @mytharcher
  - soporte de registros de tabla seleccionados en solicitud personalizada ([#6647](https://github.com/nocobase/nocobase/pull/6647)) por @katherinehhh
  - Añadir API de tipo de fallback predeterminado para `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) por @mytharcher
  - Optimizar avisos para páginas no configuradas ([#6641](https://github.com/nocobase/nocobase/pull/6641)) por @zhangzhonghe
  - Soporte para buscar campo en el componente Filtro ([#6627](https://github.com/nocobase/nocobase/pull/6627)) por @mytharcher
  - Añadir API `trim` para `Input` y `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) por @mytharcher
  - Determinar si mostrar los componentes móviles según el tipo de dispositivo en lugar del ancho de página ([#6611](https://github.com/nocobase/nocobase/pull/6611)) por @zhangzhonghe
  - Determinar si mostrar el diseño móvil según el tipo de dispositivo en lugar del ancho de página ([#6600](https://github.com/nocobase/nocobase/pull/6600)) por @zhangzhonghe
  - soporte para configurar la visibilidad de los dos puntos en las etiquetas de campo de formulario según el diseño ([#6561](https://github.com/nocobase/nocobase/pull/6561)) por @katherinehhh
- **[create-nocobase-app]** Actualizar algunas dependencias a las últimas versiones ([#6673](https://github.com/nocobase/nocobase/pull/6673)) por @chenos
- **[utilidades]** Añadir extensión de duración para dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) por @mytharcher
- **[base de datos]**

  - Añadir opción trim para campo de texto ([#6603](https://github.com/nocobase/nocobase/pull/6603)) por @mytharcher
  - Añadir opción trim para campo de cadena ([#6565](https://github.com/nocobase/nocobase/pull/6565)) por @mytharcher
- **[Flujo de trabajo]**

  - Soporte para URL emergente fija para tareas de flujo de trabajo ([#6640](https://github.com/nocobase/nocobase/pull/6640)) por @mytharcher
  - Optimizar lógica de guardado de trabajo ([#6613](https://github.com/nocobase/nocobase/pull/6613)) por @mytharcher
  - Mejorar código ([#6589](https://github.com/nocobase/nocobase/pull/6589)) por @mytharcher
- **[Flujo de trabajo: Nodo de retardo]** Soporte para usar variable para duración ([#6621](https://github.com/nocobase/nocobase/pull/6621)) por @mytharcher
- **[Manejador de errores]** Soporte para título personalizado en el componente AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) por @sheldon66
- **[Gestor de archivos]** Añadir opción trim para campos de texto de la colección de almacenamientos ([#6604](https://github.com/nocobase/nocobase/pull/6604)) por @mytharcher
- **[Gestor de tareas asíncronas]** optimizar botones de importación/exportación en Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) por @chenos
- **[Flujo de trabajo: Evento de acción personalizada]** Añadir configuración de actualización para el botón de activación de flujo de trabajo por @mytharcher
- **[Acción: Exportar registros Pro]** optimizar botones de importación/exportación en Pro por @katherinehhh
- **[Restricción IP]** Actualizar contenido del mensaje de restricción IP. por @sheldon66
- **[Almacenamiento de archivos: S3(Pro)]** Soporte para variables globales en la configuración de almacenamiento por @mytharcher
- **[Gestor de copias de seguridad]** permitir restaurar la aplicación principal desde una copia de seguridad de sub-aplicación por @gchust
- **[Flujo de trabajo: Aprobación]** Soporte para usar plantilla de bloque para el formulario del proceso de aprobación por @mytharcher
- **[Gestor de migraciones]** permitir omitir copia de seguridad y restauración automáticas para migración por @gchust

#### 🐛 Corrección de errores

- **[cliente]**

  - Problema de cambio de selector en el campo de fecha del botón de filtro ([#6695](https://github.com/nocobase/nocobase/pull/6695)) por @katherinehhh
  - Conversión de variables en condiciones de reglas de vinculación de sub-tabla/sub-formulario ([#6702](https://github.com/nocobase/nocobase/pull/6702)) por @katherinehhh
  - Botón de exportación mostrado sin permiso de exportación ([#6689](https://github.com/nocobase/nocobase/pull/6689)) por @katherinehhh
  - Después de conectar a través de una clave foránea, al hacer clic para activar el filtrado se obtienen condiciones de filtro vacías ([#6634](https://github.com/nocobase/nocobase/pull/6634)) por @zhangzhonghe
  - Corregir error lanzado en el nodo de creación / actualización del flujo de trabajo ([#6696](https://github.com/nocobase/nocobase/pull/6696)) por @mytharcher
  - Corregir error lanzado al pasar el ratón sobre un bloque de plantilla referenciado en la configuración del nodo de aprobación ([#6691](https://github.com/nocobase/nocobase/pull/6691)) por @mytharcher
  - El campo de asociación personalizado no muestra la configuración del componente de campo ([#6692](https://github.com/nocobase/nocobase/pull/6692)) por @katherinehhh
  - Compatibilidad de reglas de vinculación con datos heredados ([#6686](https://github.com/nocobase/nocobase/pull/6686)) por @katherinehhh
  - La carga diferida de un componente de interfaz de usuario faltante provoca un error de renderizado ([#6683](https://github.com/nocobase/nocobase/pull/6683)) por @gchust
  - Corregir locale para el componente de carga ([#6682](https://github.com/nocobase/nocobase/pull/6682)) por @mytharcher
  - Añadir componente Password nativo a HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) por @mytharcher
  - Problema de visualización de descripciones de campo en el flujo de trabajo ([#6680](https://github.com/nocobase/nocobase/pull/6680)) por @katherinehhh
  - Campos heredados mostrados en la lista de asignación de campos de la colección actual ([#6666](https://github.com/nocobase/nocobase/pull/6666)) por @katherinehhh
  - Problema de estilo en la entrada de variable al establecer el valor predeterminado ([#6668](https://github.com/nocobase/nocobase/pull/6668)) por @katherinehhh
  - Cambiar al menú de grupo no debería saltar a una página que ya ha sido ocultada en el menú ([#6654](https://github.com/nocobase/nocobase/pull/6654)) por @zhangzhonghe
  - El formulario de filtro no debería mostrar el aviso "Cambios no guardados" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) por @zhangzhonghe
  - En el formulario de filtro, cuando se hace clic en el botón de filtro, si hay campos que no han pasado la validación, el filtrado aún se activa ([#6659](https://github.com/nocobase/nocobase/pull/6659)) por @zhangzhonghe
  - La opción "permitir múltiples" no funciona para el campo de relación ([#6661](https://github.com/nocobase/nocobase/pull/6661)) por @katherinehhh
  - Corregir el problema de las imágenes de vista previa que quedan ocultas ([#6651](https://github.com/nocobase/nocobase/pull/6651)) por @zhangzhonghe
  - En el bloque de formulario, el valor predeterminado de la configuración del campo se mostrará primero como la cadena de variable original y luego desaparecerá ([#6649](https://github.com/nocobase/nocobase/pull/6649)) por @zhangzhonghe
  - Estilo de entrada de variable incorrecto ([#6645](https://github.com/nocobase/nocobase/pull/6645)) por @gchust
  - El título del cajón de edición del nodo de flujo de trabajo muestra [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) por @katherinehhh
  - La descripción de la sub-tabla se superpone con el botón de añadir nuevo ([#6646](https://github.com/nocobase/nocobase/pull/6646)) por @katherinehhh
  - Subrayado discontinuo causado por el diseño de formulario horizontal en modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) por @katherinehhh
  - La regla con condición 'cualquiera' no tiene efecto cuando la lista de condiciones está vacía ([#6628](https://github.com/nocobase/nocobase/pull/6628)) por @katherinehhh
  - Fallo en el análisis de variables cuando los parámetros URL contienen caracteres chinos ([#6618](https://github.com/nocobase/nocobase/pull/6618)) por @katherinehhh
  - Área en blanco entre el título de la página de configuración de la plantilla de bloque y el menú ([#6625](https://github.com/nocobase/nocobase/pull/6625)) por @gchust
  - Los campos de relación en el formulario de filtro reportan un error después de que la página se actualiza porque x-data-source no se transporta ([#6619](https://github.com/nocobase/nocobase/pull/6619)) por @zhangzhonghe
  - Problema de datos con el bloque Gantt en la colección de árbol ([#6617](https://github.com/nocobase/nocobase/pull/6617)) por @katherinehhh
  - Problema de visualización de la etiqueta de campo para evitar el truncamiento por dos puntos ([#6599](https://github.com/nocobase/nocobase/pull/6599)) por @katherinehhh
  - La propiedad x-disabled no tiene efecto en los campos de formulario ([#6610](https://github.com/nocobase/nocobase/pull/6610)) por @katherinehhh
  - Corregir que la propiedad `disabled` no funciona cuando `SchemaInitializerItem` tiene `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) por @mytharcher
  - El campo de asociación (seleccionar) muestra N/A al exponer campos de colección relacionados ([#6582](https://github.com/nocobase/nocobase/pull/6582)) por @katherinehhh
  - Los botones de enviar y actualizar no muestran correctamente el modo solo icono ([#6592](https://github.com/nocobase/nocobase/pull/6592)) por @katherinehhh
  - Problema en cascada: 'El valor de xxx no puede estar en formato de array' al eliminar y volver a seleccionar ([#6585](https://github.com/nocobase/nocobase/pull/6585)) por @katherinehhh
  - Conflicto de vinculación entre campos de asociación con el mismo nombre en diferentes sub-tablas dentro del mismo formulario ([#6577](https://github.com/nocobase/nocobase/pull/6577)) por @katherinehhh
- **[base de datos]**

  - Corregido error de compilación de CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) por @aaaaaajie
  - Al eliminar registros uno a muchos, se pasan tanto `filter` como `filterByTk` y `filter` incluye un campo de asociación, el `filterByTk` se ignora ([#6606](https://github.com/nocobase/nocobase/pull/6606)) por @2013xile
  - Evitar cambios en el campo "datetimeNoTz" cuando el valor no cambia al actualizar el registro ([#6588](https://github.com/nocobase/nocobase/pull/6588)) por @mytharcher
- **[compilación]** La salida de compilación es incorrecta cuando el plugin depende de algunas librerías AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) por @gchust
- **[Visualización de datos]** Las opciones de campo de enumeración están vacías en el bloque de filtro ([#6706](https://github.com/nocobase/nocobase/pull/6706)) por @2013xile
- **[Acción: Solicitud personalizada]** Asegurar que los datos de solicitud personalizada deben ser JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) por @chenos
- **[Flujo de trabajo: Nodo manual]**

  - Corregir error de ACL en el centro de tareas ([#6693](https://github.com/nocobase/nocobase/pull/6693)) por @mytharcher
  - Corregir constante de estado de tarea manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) por @mytharcher
- **[Acción: Importar registros]** Corregido un error al importar el campo de tiempo xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) por @aaaaaajie
- **[Control de acceso]**

  - Corregir error lanzado al serializar el modelo de rol a caché ([#6674](https://github.com/nocobase/nocobase/pull/6674)) por @mytharcher
  - Corregir lógica de cálculo de unión de roles ([#6605](https://github.com/nocobase/nocobase/pull/6605)) por @aaaaaajie
  - Asignación incorrecta del rol actual durante el inicio de sesión ([#6581](https://github.com/nocobase/nocobase/pull/6581)) por @aaaaaajie
- **[Bloque: iframe]** Aparece la barra de desplazamiento vertical cuando el bloque iframe se establece a altura completa ([#6675](https://github.com/nocobase/nocobase/pull/6675)) por @katherinehhh
- **[Flujo de trabajo]**

  - Corregir error de migración lanzado desde MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) por @mytharcher
  - Corregir información de estadísticas de flujos de trabajo no cargada al iniciar la aplicación ([#6642](https://github.com/nocobase/nocobase/pull/6642)) por @mytharcher
  - Corregir OOM al crear trabajo con id entero no seguro ([#6637](https://github.com/nocobase/nocobase/pull/6637)) por @mytharcher
  - Corregir visualización incorrecta de la opción de sincronización ([#6595](https://github.com/nocobase/nocobase/pull/6595)) por @mytharcher
- **[Campo de colección: Adjunto (URL)]** solo permitir colecciones de archivos con acceso URL público ([#6664](https://github.com/nocobase/nocobase/pull/6664)) por @katherinehhh
- **[Bloque: plantilla]**

  - Cuando la plantilla referenciada utilizada por el bloque de página ha sido eliminada, guardar como plantilla falla ([#6638](https://github.com/nocobase/nocobase/pull/6638)) por @gchust
  - Modificar y eliminar los mismos campos de la plantilla y el bloque, después de crear un bloque a partir de una plantilla, puede causar errores de renderizado ([#6626](https://github.com/nocobase/nocobase/pull/6626)) por @gchust
- **[Usuarios]** Problema con el análisis del esquema del formulario de perfil de usuario ([#6635](https://github.com/nocobase/nocobase/pull/6635)) por @2013xile
- **[Acción: Exportar registros]** Faltan parámetros de filtro al exportar datos después de cambiar la paginación ([#6633](https://github.com/nocobase/nocobase/pull/6633)) por @katherinehhh
- **[Móvil]** El campo de selección única con filtro 'contiene' en móvil no soporta selección múltiple ([#6629](https://github.com/nocobase/nocobase/pull/6629)) por @katherinehhh
- **[Campo de colección: Muchos a muchos (array)]** Problema de filtrado por campos en una colección de asociación con un campo muchos a muchos (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) por @2013xile
- **[Formularios públicos]** Los permisos de vista incluyen list y get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) por @chenos
- **[Autenticación]** Asignación de token en `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) por @2013xile
- **[Calendario]** Faltan datos en fechas límite en la vista de calendario semanal ([#6587](https://github.com/nocobase/nocobase/pull/6587)) por @katherinehhh
- **[Bloque: Mapa]** La validación de gestión de mapas no debería pasar con entrada de espacio ([#6575](https://github.com/nocobase/nocobase/pull/6575)) por @katherinehhh
- **[Acción: Edición por lotes]** Haga clic en el botón de edición por lotes, configure la ventana emergente y luego ábrala de nuevo, la ventana emergente está en blanco ([#6578](https://github.com/nocobase/nocobase/pull/6578)) por @zhangzhonghe
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir casos de prueba por @mytharcher
- **[Gestor de correo electrónico]**

  - corregir que no se puede sincronizar, sin visualización de asunto y otros pequeños errores por @jiannx
  - corregir que el permiso de gestión de correo electrónico no puede ver la lista de correos por @jiannx
  - Corregir falta de await para la siguiente llamada. por @jiannx
- **[Almacenamiento de archivos: S3(Pro)]**

  - Corregir falta de await para la siguiente llamada. por @jiannx
  - Configuración individual de baseurl y pública, mejorar UX de configuración de almacenamiento S3 pro por @jiannx
  - Lanzar error al usuario al cargar logo en el almacenamiento S3 Pro (establecido como predeterminado) por @mytharcher
  - Organizar idioma por @jiannx
- **[Auth: OIDC]** Se produce una redirección incorrecta cuando la ruta de callback es la cadena 'null' por @2013xile
- **[Bloque: Formulario de varios pasos]**

  - el botón de enviar tiene el mismo color en su estado predeterminado y resaltado por @jiannx
  - corregido el error de que el reinicio del formulario no es válido cuando el campo está asociado con otro campo por @jiannx
- **[Gestor de copias de seguridad]** Se produce un error de tiempo de espera al intentar restaurar una copia de seguridad no cifrada con una contraseña por @gchust
- **[Flujo de trabajo: Aprobación]**

  - Corregir error de ACL en el centro de tareas por @mytharcher
  - Soporte para URL fija para elementos de aprobación en el centro de tareas por @mytharcher
  - Corregir modo de rama cuando `endOnReject` está configurado como `true` por @mytharcher
  - Corregir `updatedAt` cambiado después de la migración por @mytharcher
  - Corregir configuración del nodo de aprobación incorrecta después de que el esquema cambie por @mytharcher
  - Corregir variables de cliente para usar en el formulario de aprobación por @mytharcher
- **[Gestor de migraciones]**

  - La hora de creación del registro de migración se muestra incorrectamente en algunos entornos por @gchust
  - La opción de omitir copia de seguridad automática se vuelve inválida si aparece la ventana emergente de variable de entorno durante la migración por @gchust
