---
title: "NocoBase v1.9.0-beta.6: Soporte para dividir servicios de tareas asíncronas por entorno y cola de eventos"
description: "Nota de la versión v1.9.0-beta.6"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Se añadió la opción "Auto enfoque" para los componentes Input, TextArea, URL e InputNumber, que enfoca automáticamente el campo de entrada durante la renderización inicial de la página cuando está habilitada ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe
- **[Gestor de tareas asíncronas]** Soporte para dividir servicios de tareas asíncronas por entorno y cola de eventos ([#7241](https://github.com/nocobase/nocobase/pull/7241)) por @mytharcher
- **[Visor de archivos de Office]** Soporte para previsualizar archivos de Office mediante la vista previa en vivo de Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher
- **[Autenticación: SAML 2.0]** Se añadieron opciones de configuración relacionadas con la firma por @2013xile
- **[Flujo de trabajo: Aprobación]**

  - Se añadió un tipo de plantilla en línea para la configuración de notificaciones por @mytharcher
  - Soporte para usar un título de tarea consistente para todos los nodos de aprobación en el mismo flujo de trabajo por @mytharcher

### 🚀 Mejoras

- **[base de datos]** Se optimizó el rendimiento de las consultas ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie
- **[cliente]**

  - Soporte para mostrar iconos identificados por cadenas en el componente Select cuando está en modo de solo lectura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher
  - Se añadió soporte para la variable de fecha "anteayer" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) por @katherinehhh
  - Se optimizó el rendimiento al cambiar de pestañas en ventanas emergentes ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
  - El menú ya no se cierra automáticamente después de una selección ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612
- **[Móvil]** Se optimizó el componente de ventana emergente para móviles ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe
- **[Flujo de trabajo]**

  - Se actualizó el menú de selección de nodos para mostrar las opciones en un diseño de dos columnas, mejorando la densidad de información y permitiendo a los usuarios ver más opciones a la vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher
  - Se corrigió un caso de prueba inestable ([#7349](https://github.com/nocobase/nocobase/pull/7349)) por @mytharcher
  - Se muestra el título normal cuando está deshabilitado ([#7339](https://github.com/nocobase/nocobase/pull/7339)) por @mytharcher
  - Se redujo la cantidad de trabajos a cargar al preparar la ejecución ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher
- **[Configuración de licencia]** En la configuración de licencia, se copia el último ID de instancia cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx
- **[Autenticación]** Se eliminó el parámetro token de la URL después de un inicio de sesión exitoso ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile
- **[Notificación: Mensaje en la aplicación]**

  - Se eliminó la salida de registros SQL mediante `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile
  - Se cambió el mensaje en la aplicación de SSE a WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher
- **[Visor de archivos de Office]** Se añadió soporte para previsualizar archivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher
- **[Acción: Importar registros Pro]** Soporte para dividir servicios de importación/exportación por entorno y cola de eventos por @mytharcher
- **[Flujo de trabajo: JavaScript]** Se cambió la caché a caché de la aplicación para evitar errores en modo clúster por @mytharcher
- **[Impresión de plantillas]** Soporte para campo m2m array por @jiannx
- **[Gestor de copias de seguridad]** Se mejoró el rendimiento para la operación de copia de seguridad de bases de datos MySQL por @gchust
- **[Autenticación: DingTalk]** En el cliente de DingTalk, se establece el título de la barra de navegación como una cadena vacía en lugar de mostrar "Cargando…" por @2013xile
- **[Gestor de migraciones]** Soporte para dividir el servicio de migración por entorno y cola de eventos por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**

  - Se corrigió el problema donde el icono se mostraba incorrectamente cuando la URL en el campo de URL de archivo adjunto contenía parámetros de consulta ([#7432](https://github.com/nocobase/nocobase/pull/7432)) por @mytharcher
  - Se trata el número 0 como vacío durante la validación de vacío de reglas de enlace ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh
  - Se corrigió el texto del botón de enlace que rompía la línea ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher
  - Se corrigió el problema donde el diseño de formulario de varias columnas no se convertía a diseño de una sola columna en dispositivos móviles ([#7355](https://github.com/nocobase/nocobase/pull/7355)) por @zhangzhonghe
  - Se corrigió el error al eliminar colecciones en masa ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
  - Se corrigió el problema donde el ámbito de datos guardado previamente no estaba preseleccionado al configurar permisos individualmente. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
  - Se corrigió el problema donde las cadenas sin procesar de variables se enviaban con el formulario ([#7337](https://github.com/nocobase/nocobase/pull/7337)) por @zhangzhonghe
  - Al usar variables para establecer valores predeterminados de campo en formularios de filtro, si el valor de la variable está vacío, el cuadro de entrada mostrará la cadena de variable original ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe
  - Se corrigió la información sobre herramientas que mostraba [object Object] al pasar el ratón en el panel de acciones ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh
  - Se corrigió el problema de bucle infinito al analizar valores predeterminados de campo ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe
  - Se corrigió la vista previa de archivos en URL nula ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher
  - Se corrigió el problema donde la tabla de árbol no se podía expandir ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe
  - Se añadió la URL completa al archivo local al previsualizar ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher
  - Se corrigió el comportamiento inesperado en la ordenación por arrastrar y soltar de filas de tabla ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu
  - Problema de visualización del campo de fecha en la ventana emergente del selector de datos de campo de asociación del formulario de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh
- **[base de datos]** Se corrigió el problema donde las tablas externas de Postgres incluían vistas de otros esquemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie
- **[servidor]** Algunas solicitudes carecen de `ctx.action`, lo que causa errores en el middleware de registro de auditoría ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile
- **[indefinido]** Se añadió un nuevo plugin al preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher
- **[utilidades]** Manejo incorrecto de la zona horaria para parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh
- **[Bloque: plantilla]** Se resolvió un problema donde los bloques de correo no eran visibles cuando se colocaban dentro de un bloque de plantilla heredado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust
- **[Móvil]**

  - Formato de visualización incorrecto del campo de fecha en móvil ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh
  - Se corrigió el problema donde los datos de envío del formulario en el diálogo de aprobación móvil eran incorrectos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe
  - Se resolvió un problema donde el selector de fecha en dispositivos móviles se mostraba incorrectamente cuando se aplicaban límites de rango de fechas ([#7362](https://github.com/nocobase/nocobase/pull/7362)) por @katherinehhh
- **[Flujo de trabajo]**

  - Se corrigió el error lanzado y la desaparición de datos del formulario al editar la categoría del flujo de trabajo ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher
  - Se corrigió la traducción del título de la página en el centro de tareas del flujo de trabajo ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher
  - Se refactorizó el menú "Añadir nodo" y se corrigieron los problemas de rendimiento de renderizado del lienzo del flujo de trabajo que causaba ([#7363](https://github.com/nocobase/nocobase/pull/7363)) por @mytharcher
  - Se corrigió el problema de condiciones de filtro incorrectas al recuperar un único elemento pendiente ([#7366](https://github.com/nocobase/nocobase/pull/7366)) por @mytharcher
  - Se corrigió el problema de coincidencia de palabras clave en la selección de campo ([#7356](https://github.com/nocobase/nocobase/pull/7356)) por @mytharcher
  - Se evitó el error lanzado por la publicación en la cola de eventos al detenerse ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
  - Se corrigió el resultado `undefined` cuando el procesador sale ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher
  - Se corrigió el problema de ID BigInt en MySQL al guardar un trabajo ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher
- **[Flujo de trabajo: nodo de correo]** Se corrigió el problema donde el nodo de correo electrónico podría no reanudar la ejecución correctamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher
- **[Visor de archivos de Office]**

  - Se corrigió el error lanzado al subir un archivo al campo de URL de archivo adjunto ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher
  - Soporte para archivos `.docx`, `.xlsx` y `.pptx` con solo URL para ser previsualizados ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher
- **[Gestor de archivos]**

  - Se eliminó la sugerencia para el límite de tamaño de carga de archivos ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher
  - Se añadió el campo `storageId` a la colección de archivos para soportar la configuración de permisos ([#7351](https://github.com/nocobase/nocobase/pull/7351)) por @mytharcher
  - Se corrigió el permiso del campo de almacenamiento ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher
- **[Notificación: Mensaje en la aplicación]**

  - Se corrigieron las traducciones ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher
  - Se corrigió el problema donde los mensajes en el sitio se recibían pero no se mostraban en una ventana emergente ([#7364](https://github.com/nocobase/nocobase/pull/7364)) por @mytharcher
- **[Calendario]** La información sobre herramientas del elemento del evento del calendario mostraba [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh
- **[Campo de colección: Fórmula]** Se corrigió el problema donde la entrada de fórmula no podía pasar la validación debido al tipo de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher
- **[Flujo de trabajo: Nodo paralelo]** Se corrigió la suspensión del nodo paralelo después de reanudar bajo MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Flujo de trabajo: CC]** Se corrigió que los bloques no se pudieran eliminar ([#7338](https://github.com/nocobase/nocobase/pull/7338)) por @mytharcher
- **[Visualización de datos]** Problema de variable de fecha en el valor predeterminado del campo de fecha en el bloque de filtro de gráfico ([#7291](https://github.com/nocobase/nocobase/pull/7291)) por @katherinehhh
- **[Colección: Árbol]** Se corrigió la lógica de sincronización de rutas de las colecciones de árbol ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu
- **[Flujo de trabajo: Nodo de solicitud HTTP]** Se corrigió un error de condición de carrera ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher
- **[Flujo de trabajo: Nodo de cálculo dinámico]** Se corrigió un error causado por una API heredada ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher
- **[Acción: Exportar registros]** Se corrigió el formato incorrecto de los campos relacionales anidados al exportar a Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie
- **[Acción: Importar registros Pro]** Se deshabilitó la asignación de campos de relación durante la detección de duplicados en la importación. por @aaaaaajie
- **[Fuente de datos: SQL Server externo]** Se corrigió el formato de almacenamiento inconsistente para los campos datetime de MSSQL (sin zona horaria) de fuentes de datos externas por @aaaaaajie
- **[Flujo de trabajo: Evento de acción personalizada]** Se limpiaron las filas seleccionadas después de activar acciones exitosamente en múltiples registros por @mytharcher
- **[Flujo de trabajo: Subflujo]** Se corrigió el flujo suspendido por @mytharcher
- **[Impresión de plantillas]** Impresión de campos de selección única en múltiples líneas de datos por @jiannx
- **[Almacenamiento de archivos: S3(Pro)]**

  - Se corrigió el problema donde el método de autenticación IAM no podía usarse para subir archivos por @mytharcher
  - Se desaprobó el parámetro problemático `attachmentField` por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Se corrigió el problema donde la carga de datos de fuentes de datos externas en registros de aprobación resultaba en un error 404 por @mytharcher
  - Se añadió un título de tarea para los elementos añadidos y delegados por @mytharcher
  - Se corrigió el error lanzado desde la selección de asignatario dentro de una fuente de datos externa por @mytharcher
  - Se corrigió el problema donde la lista de usuarios estaba vacía durante la cofirma por @mytharcher
  - Se corrigió la actualización de asociaciones al enviar un borrador por @mytharcher
  - Se corrigió que las reglas de enlace no funcionaban en el bloque de detalle original de aprobación por @mytharcher
- **[Gestor de copias de seguridad]** Las copias de seguridad de archivos grandes podían mostrar "exitoso" antes de finalizar realmente por @gchust
- **[Gestor de migraciones]** Se omitieron los comandos `\restrict` y `\unrestrict` generados por la última versión de pg_dump al crear archivos de migración para resolver errores de restauración. por @2013xile
