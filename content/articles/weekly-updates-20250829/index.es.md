---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "La actualización de esta semana incluye: agregar un tipo de plantilla en línea para la configuración de notificaciones y admitir títulos de tareas consistentes en todos los nodos de aprobación del mismo flujo de trabajo."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones antes y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.22](https://www.nocobase.com/en/blog/v1.8.22)

*Fecha de lanzamiento: 2025-08-27*

#### 🐛 Corrección de errores

- **[Flujo de trabajo]** Se corrigió el problema por el cual la ventana emergente de detalle no se mostraba debido a una configuración de ruta incorrecta en el centro de tareas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) por @mytharcher

### [v1.8.21](https://www.nocobase.com/en/blog/v1.8.21)

*Fecha de lanzamiento: 2025-08-26*

#### 🐛 Corrección de errores

- **[Gestor de archivos]** Se corrigió el error al editar el campo `storage` en la colección de archivos. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) por @mytharcher
- **[Flujo de trabajo: Nodo paralelo]** Se corrigió el problema por el cual una determinación incorrecta del estado en nodos de rama paralela bajo el modo "Ejecutar todas las ramas" causaba una finalización prematura ([#7445](https://github.com/nocobase/nocobase/pull/7445)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Se añadió la variable de estado para plantillas personalizadas en las notificaciones de finalización de aprobación por @mytharcher

### [v1.8.20](https://www.nocobase.com/en/blog/v1.8.20)

*Fecha de lanzamiento: 2025-08-25*

#### 🚀 Mejoras

- **[Flujo de trabajo]** Se ajustó la API de variables del flujo de trabajo para admitir la preconfiguración de una lista de variables adicional ([#7439](https://github.com/nocobase/nocobase/pull/7439)) por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Se añadió soporte para usar variables relacionadas con la aprobación en notificaciones personalizadas por @mytharcher
  - Se añadió soporte para actualizar el estado de aprobación después de que el nodo final termine la ejecución por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió un problema por el cual, en ciertos escenarios, editar un registro en la ventana emergente del selector de registros móvil causaba un error ([#7444](https://github.com/nocobase/nocobase/pull/7444)) por @zhangzhonghe
  - La validación obligatoria no funcionaba para campos de adjuntos en subtablas ([#7431](https://github.com/nocobase/nocobase/pull/7431)) por @katherinehhh
  - Se corrigió el problema por el cual el icono se mostraba incorrectamente cuando la URL en el campo de URL de adjunto contenía parámetros de consulta ([#7432](https://github.com/nocobase/nocobase/pull/7432)) por @mytharcher
- **[base de datos]**

  - Se corrigió un error de sintaxis de MySQL que ocurría al cargar más mensajes en la aplicación. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) por @aaaaaajie
  - Se corrigió un problema de precisión para campos de Número exportados ([#7421](https://github.com/nocobase/nocobase/pull/7421)) por @aaaaaajie
- **[indefinido]** Se corrigió el problema con el filtrado solo por campo de fecha en fuente externa MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) por @aaaaaajie
- **[Acción: Importar registros]** Se corrigió un problema por el cual la importación fallaba cuando la clave primaria de la tabla era un texto de una sola línea ([#7416](https://github.com/nocobase/nocobase/pull/7416)) por @aaaaaajie
- **[Flujo de trabajo]**

  - Se completaron las opciones para eliminar automáticamente el estado de ejecución del flujo de trabajo ([#7436](https://github.com/nocobase/nocobase/pull/7436)) por @mytharcher
  - Se corrigieron problemas relacionados con el menú móvil en las tareas del flujo de trabajo ([#7419](https://github.com/nocobase/nocobase/pull/7419)) por @mytharcher
- **[Acción: Importar registros Pro]** Se corrigió un resultado de actualización inesperado al usar clave primaria de cadena en la importación xlsx. por @aaaaaajie

### [v1.8.19](https://www.nocobase.com/en/blog/v1.8.19)

*Fecha de lanzamiento: 2025-08-22*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo: Aprobación]** Se añadió el tipo de plantilla en línea para la configuración de notificaciones por @mytharcher

#### 🚀 Mejoras

- **[cliente]** Se añadió soporte para mostrar iconos identificados por cadenas en el componente Select cuando está en modo de solo lectura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher
- **[base de datos]** Se optimizó el rendimiento de la consulta ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie
- **[Móvil]** Se optimizó el componente de ventana emergente móvil ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe

#### 🐛 Corrección de errores

- **[base de datos]** Se corrigió el problema por el cual la lectura de tablas externas de Postgres incluía vistas de otros esquemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie
- **[Bloque: plantilla]** Se resolvió un problema por el cual los bloques de correo no eran visibles cuando se colocaban dentro de un bloque de plantilla heredado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust
- **[Acción: Importar registros Pro]** No se permite asignar campos de relación durante la detección de duplicados en la importación. por @aaaaaajie
- **[Flujo de trabajo: Aprobación]** Se corrigió el problema por el cual la lista de usuarios estaba vacía durante la cofirma por @mytharcher
- **[Gestor de migraciones]** Se omiten los comandos `\restrict` y `\unrestrict` generados por la última versión de pg_dump al crear archivos de migración para resolver errores de restauración. por @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.6](https://www.nocobase.com/en/blog/v1.9.0-beta.6)

*Fecha de lanzamiento: 2025-08-22*

#### 🎉 Nuevas funciones

- **[cliente]** Se añadió la opción "Autoenfoque" para los componentes Input, TextArea, URL e InputNumber que enfoca automáticamente el campo de entrada durante la renderización inicial de la página cuando está habilitado ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe
- **[Gestor de tareas asíncronas]** Se añadió soporte para dividir los servicios de tareas asíncronas por entorno y cola de eventos ([#7241](https://github.com/nocobase/nocobase/pull/7241)) por @mytharcher
- **[Visor de archivos de Office]** Se añadió soporte para previsualizar archivos de Office a través de la vista previa en vivo de Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher
- **[Autenticación: SAML 2.0]** Se añadieron opciones de configuración relacionadas con la firma por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Se añadió el tipo de plantilla en línea para la configuración de notificaciones por @mytharcher
  - Se añadió soporte para usar un título de tarea coherente para todos los nodos de aprobación en el mismo flujo de trabajo por @mytharcher

#### 🚀 Mejoras

- **[base de datos]** Se optimizó el rendimiento de la consulta ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie
- **[cliente]**

  - Se añadió soporte para mostrar iconos identificados por cadenas en el componente Select cuando está en modo de solo lectura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher
  - Se añadió soporte para la variable de fecha "anteayer" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) por @katherinehhh
  - Se optimizó el rendimiento al cambiar de pestañas en ventanas emergentes ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
  - No cerrar el menú automáticamente después de la selección ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612
- **[Móvil]** Se optimizó el componente de ventana emergente móvil ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe
- **[Flujo de trabajo]**

  - Se actualizó el menú de selección de nodos para mostrar las opciones en un diseño de dos columnas para mejorar la densidad de información y permitir a los usuarios ver más opciones a la vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher
  - Se corrigió un caso de prueba inestable ([#7349](https://github.com/nocobase/nocobase/pull/7349)) por @mytharcher
  - Se muestra el título normal cuando está deshabilitado ([#7339](https://github.com/nocobase/nocobase/pull/7339)) por @mytharcher
  - Se redujo la cantidad de trabajos a cargar al preparar la ejecución ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher
- **[Configuración de licencia]** En la configuración de licencia, copiar el último ID de instancia cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx
- **[Autenticación]** Se eliminó el parámetro token de la URL después de un inicio de sesión exitoso ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile
- **[Notificación: Mensaje en la aplicación]**

  - Se eliminaron los registros SQL generados a través de `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile
  - Se cambió el mensaje en la aplicación de SSE a WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher
- **[Visor de archivos de Office]** Se añadió soporte para previsualizar archivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher
- **[Acción: Importar registros Pro]** Se añadió soporte para dividir los servicios de importación/exportación por entorno y cola de eventos por @mytharcher
- **[Flujo de trabajo: JavaScript]** Se cambió la caché a caché de la aplicación para evitar errores en modo clúster por @mytharcher
- **[Impresión de plantillas]** Se añadió soporte para array de campo m2m por @jiannx
- **[Gestor de copias de seguridad]** Se mejoró el rendimiento para la operación de copia de seguridad de la base de datos MySQL por @gchust
- **[Autenticación: DingTalk]** En el cliente de DingTalk, se estableció el título de la barra de navegación en una cadena vacía en lugar de mostrar "Cargando..." por @2013xile
- **[Gestor de migraciones]** Se añadió soporte para dividir el servicio de migración por entorno y cola de eventos por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**

  - Se corrigió el problema por el cual el icono se mostraba incorrectamente cuando la URL en el campo de URL de adjunto contenía parámetros de consulta ([#7432](https://github.com/nocobase/nocobase/pull/7432)) por @mytharcher
  - Se trata el número 0 como vacío durante la validación de vacío de la regla de vinculación ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh
  - Se corrigió el texto del botón de enlace que rompía la línea ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher
  - Se corrigió el problema por el cual el diseño de formulario de varias columnas no se convertía a un diseño de una sola columna en dispositivos móviles ([#7355](https://github.com/nocobase/nocobase/pull/7355)) por @zhangzhonghe
  - Se corrigió el error de eliminación masiva de colecciones ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
  - Se corrigió el problema por el cual el ámbito de datos guardado previamente no se preseleccionaba al configurar permisos individualmente. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
  - Se corrigió el problema por el cual las cadenas sin procesar de variables se enviaban con el formulario ([#7337](https://github.com/nocobase/nocobase/pull/7337)) por @zhangzhonghe
  - Al usar variables para establecer valores predeterminados de campo en formularios de filtro, si el valor de la variable está vacío, el cuadro de entrada mostrará la cadena de variable original ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe
  - Se corrigió la información sobre herramientas que mostraba [object Object] al pasar el cursor en el panel de acciones ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh
  - Se corrigió el problema de bucle infinito al analizar los valores predeterminados de los campos ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe
  - Se corrigió el elemento de vista previa de archivo en URL nula ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher
  - Se corrigió el problema por el cual la tabla de árbol no se podía expandir ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe
  - Se añadió la URL completa al archivo local al previsualizar ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher
  - Se corrigió un comportamiento inesperado en la ordenación por arrastrar y soltar de filas de tabla ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu
  - Problema de visualización del campo de fecha en la ventana emergente del selector de datos de campo de asociación del formulario de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh
- **[base de datos]** Se corrigió el problema por el cual la lectura de tablas externas de Postgres incluía vistas de otros esquemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie
- **[servidor]** Algunas solicitudes carecen de `ctx.action`, lo que causa errores en el middleware de registro de auditoría ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile
- **[indefinido]** Se añadió un nuevo plugin al preajuste ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher
- **[utilidades]** Manejo incorrecto de la zona horaria para parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh
- **[Bloque: plantilla]** Se resolvió un problema por el cual los bloques de correo no eran visibles cuando se colocaban dentro de un bloque de plantilla heredado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust
- **[Móvil]**

  - Formato de visualización incorrecto del campo de fecha en móvil ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh
  - Se corrigió el problema por el cual los datos de envío del formulario en el diálogo de aprobación móvil eran incorrectos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe
  - Se resolvió un problema por el cual el selector de fecha en dispositivos móviles se mostraba incorrectamente cuando se aplicaban límites de rango de fechas ([#7362](https://github.com/nocobase/nocobase/pull/7362)) por @katherinehhh
- **[Flujo de trabajo]**

  - Se corrigió el error lanzado y la desaparición de los datos del formulario al editar la categoría del flujo de trabajo ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher
  - Se corrigió la traducción del título de la página en el centro de tareas del flujo de trabajo ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher
  - Se refactorizó el menú "Añadir nodo" y se corrigieron los problemas de rendimiento de renderizado del lienzo del flujo de trabajo que causaba ([#7363](https://github.com/nocobase/nocobase/pull/7363)) por @mytharcher
  - Se corrigió el problema de condiciones de filtro incorrectas al recuperar un solo elemento pendiente ([#7366](https://github.com/nocobase/nocobase/pull/7366)) por @mytharcher
  - Se corrigió el problema de coincidencia de palabras clave en la selección de campo ([#7356](https://github.com/nocobase/nocobase/pull/7356)) por @mytharcher
  - Se evitó el error lanzado por la publicación en la cola de eventos al detenerse ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
  - Se corrigió el resultado `undefined` cuando el procesador sale ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher
  - Se corrigió el problema de ID BigInt en MySQL al guardar el trabajo ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher
- **[Flujo de trabajo: nodo de correo]** Se corrigió el problema por el cual el nodo de correo electrónico podría no reanudar la ejecución correctamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher
- **[Visor de archivos de Office]**

  - Se corrigió el error lanzado al cargar un archivo en el campo de URL de adjunto ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher
  - Se añadió soporte para que los archivos `.docx`, `.xlsx` y `.pptx` con solo URL se puedan previsualizar ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher
- **[Gestor de archivos]**

  - Se eliminó la sugerencia para el límite de tamaño de carga de archivos ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher
  - Se añadió el campo `storageId` a la colección de archivos para admitir la configuración de permisos ([#7351](https://github.com/nocobase/nocobase/pull/7351)) por @mytharcher
  - Se corrigió el permiso del campo de almacenamiento ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]**

  - Se corrigieron las traducciones ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher
  - Se corrigió el problema por el cual los mensajes en el sitio se recibían pero no se mostraban en una ventana emergente ([#7364](https://github.com/nocobase/nocobase/pull/7364)) por @mytharcher
- **[Calendario]** La información sobre herramientas del elemento de evento del calendario mostraba [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh
- **[Campo de colección: Fórmula]** Se corrigió el problema por el cual la entrada de fórmula no podía pasar la validación debido al tipo de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher
- **[Flujo de trabajo: Nodo paralelo]** Se corrigió la suspensión del nodo paralelo después de reanudar en MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Flujo de trabajo: CC]** Se corrigió que los bloques no se pudieran eliminar ([#7338](https://github.com/nocobase/nocobase/pull/7338)) por @mytharcher
- **[Visualización de datos]** Problema de variable de fecha en el valor predeterminado del campo de fecha en el bloque de filtro del gráfico ([#7291](https://github.com/nocobase/nocobase/pull/7291)) por @katherinehhh
- **[Colección: Árbol]** Se corrigió la lógica de sincronización de rutas de las colecciones de árbol ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu
- **[Flujo de trabajo: Nodo de solicitud HTTP]** Se corrigió un error de condición de carrera ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher
- **[Flujo de trabajo: Nodo de cálculo dinámico]** Se corrigió el error causado por la API heredada ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher
- **[Acción: Exportar registros]** Se corrigió el formato incorrecto de los campos de relación anidados al exportar a Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie
- **[Acción: Importar registros Pro]** No se permite asignar campos de relación durante la detección de duplicados en la importación. por @aaaaaajie
- **[Fuente de datos: SQL Server externo]** Se corrigió el formato de almacenamiento inconsistente para los campos datetime (sin zona horaria) de MSSQL de fuentes de datos externas por @aaaaaajie
- **[Flujo de trabajo: Evento de acción personalizada]** Se limpiaron las filas seleccionadas después de activar con éxito acciones en múltiples registros por @mytharcher
- **[Flujo de trabajo: Subflujo]** Se corrigió el flujo suspendido por @mytharcher
- **[Impresión de plantillas]** Impresión de campos de selección de radio en múltiples líneas de datos por @jiannx
- **[Almacenamiento de archivos: S3(Pro)]**

  - Se corrigió el problema por el cual el método de autenticación IAM no se podía usar para cargar archivos por @mytharcher
  - Se marcó como obsoleto el parámetro problemático `attachmentField` por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Se corrigió el problema por el cual la carga de datos de fuente de datos externa en registros de aprobación resultaba en un error 404 por @mytharcher
  - Se añadió el título de la tarea para los elementos añadidos y delegados por @mytharcher
  - Se corrigió el error lanzado desde la selección de asignatario dentro de una fuente de datos externa por @mytharcher
  - Se corrigió el problema por el cual la lista de usuarios estaba vacía durante la cofirma por @mytharcher
  - Se corrigió la actualización de asociaciones al enviar borrador por @mytharcher
  - Se corrigió que las reglas de vinculación no funcionaban en el bloque de detalle original de aprobación por @mytharcher
- **[Gestor de copias de seguridad]** Las copias de seguridad de archivos grandes podían mostrar "exitoso" antes de finalizar realmente por @gchust
- **[Gestor de migraciones]** Se omiten los comandos `\restrict` y `\unrestrict` generados por la última versión de pg_dump al crear archivos de migración para resolver errores de restauración. por @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.12](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Fecha de lanzamiento: 2025-08-22*

#### 🎉 Nuevas funciones

- **[cliente]** Se añadió soporte para reglas de validación de campos ([#7297](https://github.com/nocobase/nocobase/pull/7297)) por @aaaaaajie
- **[Flujo de trabajo: Aprobación]**

  - Se añadió el tipo de plantilla en línea para la configuración de notificaciones por @mytharcher
  - Se añadió soporte para usar un título de tarea coherente para todos los nodos de aprobación en el mismo flujo de trabajo por @mytharcher

#### 🚀 Mejoras

- **[base de datos]** Se optimizó el rendimiento de la consulta ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie
- **[cliente]** Se añadió soporte para mostrar iconos identificados por cadenas en el componente Select cuando está en modo de solo lectura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher
- **[Móvil]** Se optimizó el componente de ventana emergente móvil ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe
- **[Flujo de trabajo]** Se actualizó el menú de selección de nodos para mostrar las opciones en un diseño de dos columnas para mejorar la densidad de información y permitir a los usuarios ver más opciones a la vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher
- **[Configuración de licencia]** En la configuración de licencia, copiar el último ID de instancia cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx
- **[Notificación: Mensaje en la aplicación]** Se eliminaron los registros SQL generados a través de `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile
- **[Autenticación]** Se eliminó el parámetro token de la URL después de un inicio de sesión exitoso ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile
- **[Impresión de plantillas]** Se añadió soporte para array de campo m2m por @jiannx

#### 🐛 Corrección de errores

- **[base de datos]** Se corrigió el problema por el cual la lectura de tablas externas de Postgres incluía vistas de otros esquemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie
- **[cliente]**

  - Se trata el número 0 como vacío durante la validación de vacío de la regla de vinculación ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh
  - Se corrigió un problema por el cual el botón "Configuración de columna" cargaba columnas de la tabla dentro del cuadro de diálogo modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) por @kerwin612
  - Se corrigió el texto del botón de enlace que rompía la línea ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher
- **[servidor]** Algunas solicitudes carecen de `ctx.action`, lo que causa errores en el middleware de registro de auditoría ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile
- **[Bloque: plantilla]** Se resolvió un problema por el cual los bloques de correo no eran visibles cuando se colocaban dentro de un bloque de plantilla heredado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust
- **[Flujo de trabajo: nodo de correo]** Se corrigió el problema por el cual el nodo de correo electrónico podría no reanudar la ejecución correctamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher
- **[Móvil]**

  - Formato de visualización incorrecto del campo de fecha en móvil ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh
  - Se corrigió el problema por el cual los datos de envío del formulario en el diálogo de aprobación móvil eran incorrectos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe
- **[Flujo de trabajo]**

  - Se corrigió el error lanzado y la desaparición de los datos del formulario al editar la categoría del flujo de trabajo ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher
  - Se corrigió la traducción del título de la página en el centro de tareas del flujo de trabajo ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher
- **[Visor de archivos de Office]** Se corrigió el error lanzado al cargar un archivo en el campo de URL de adjunto ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]** Se corrigieron las traducciones ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher
- **[Campo de colección: Fórmula]** Se corrigió el problema por el cual la entrada de fórmula no podía pasar la validación debido al tipo de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher
- **[Gestor de archivos]** Se eliminó la sugerencia para el límite de tamaño de carga de archivos ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher
- **[Calendario]** La información sobre herramientas del elemento de evento del calendario mostraba [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh
- **[Acción: Importar registros Pro]** No se permite asignar campos de relación durante la detección de duplicados en la importación. por @aaaaaajie
- **[Flujo de trabajo: Evento de acción personalizada]** Se limpiaron las filas seleccionadas después de activar con éxito acciones en múltiples registros por @mytharcher
- **[Impresión de plantillas]** Impresión de campos de selección de radio en múltiples líneas de datos por @jiannx
- **[Almacenamiento de archivos: S3(Pro)]**

  - Se marcó como obsoleto el parámetro problemático `attachmentField` por @mytharcher
  - Se corrigió el problema por el cual el método de autenticación IAM no se podía usar para cargar archivos por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Se corrigió el problema por el cual la carga de datos de fuente de datos externa en registros de aprobación resultaba en un error 404 por @mytharcher
  - Se corrigió el problema por el cual la lista de usuarios estaba vacía durante la cofirma por @mytharcher
- **[Gestor de copias de seguridad]** Las copias de seguridad de archivos grandes podían mostrar "exitoso" antes de finalizar realmente por @gchust
- **[Gestor de migraciones]** Se omiten los comandos `\restrict` y `\unrestrict` generados por la última versión de pg_dump al crear archivos de migración para resolver errores de restauración. por @2013xile
