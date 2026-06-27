---
title: "NocoBase v1.5.0: Agregar rango limitado de fechas al componente de campo de fecha"
description: "Nota de la versión v1.5.0"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - Añadir rango de fechas limitado al componente de campo de fecha ([#5852](https://github.com/nocobase/nocobase/pull/5852)) por @Cyx649312038

  - Soporte para configurar texto, icono y tipo de los botones de añadir y seleccionar en subtablas ([#5778](https://github.com/nocobase/nocobase/pull/5778)) por @katherinehhh

  - Soporte para habilitar la apertura de ventanas emergentes al hacer clic en enlaces en el campo readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) por @katherinehhh

  - Soporte para acciones de asociar y desasociar en bloques de asociación ([#5695](https://github.com/nocobase/nocobase/pull/5695)) por @katherinehhh

- **[servidor]** Añadir gestor de auditoría ([#5601](https://github.com/nocobase/nocobase/pull/5601)) por @chenzhizdt

- **[Flujo de trabajo]**
  - Añadir patrones de caracteres aleatorios ([#5959](https://github.com/nocobase/nocobase/pull/5959)) por @kennnnnnnnnn

  - Añadir configuración de límite de pila para flujos de trabajo ([#6077](https://github.com/nocobase/nocobase/pull/6077)) por @citlalinda

  - Soporte para activar manualmente flujos de trabajo ([#5664](https://github.com/nocobase/nocobase/pull/5664)) por @mytharcher

- **[Móvil]** Añadir interruptor global para controlar todos los botones de retroceso en móvil (activado por defecto) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) por @katherinehhh

- **[Calendario]** El plugin de calendario añade modo de apertura de eventos ([#5808](https://github.com/nocobase/nocobase/pull/5808)) por @Cyx649312038

- **[Colección: Árbol]** Permite filtrar nodos hijos en bloques de tabla de árbol ([#4770](https://github.com/nocobase/nocobase/pull/4770)) por @jimmy201602

- **[Flujo de trabajo: Evento previo a la acción]** Soporte para activar manualmente flujos de trabajo por @mytharcher

- **[Adaptador Redis pub sub]** Añadir plugin adaptador de sincronización Redis por @mytharcher

### 🚀 Mejoras

- **[cliente]**
  - Eliminar reglas de vinculación del botón Asociar ([#6016](https://github.com/nocobase/nocobase/pull/6016)) por @katherinehhh

  - Eliminar componente de esqueleto de fila de tabla ([#5751](https://github.com/nocobase/nocobase/pull/5751)) por @zhangzhonghe

  - Optimizar la lógica recursiva en useMenuSearch para mejorar el rendimiento ([#5784](https://github.com/nocobase/nocobase/pull/5784)) por @katherinehhh

  - Eliminar componentes de Formily de la tabla para mejorar el rendimiento al cambiar la paginación de la tabla ([#5738](https://github.com/nocobase/nocobase/pull/5738)) por @zhangzhonghe

  - Mejorar el rendimiento de renderizado de páginas y soportar la funcionalidad de mantener la página activa ([#5515](https://github.com/nocobase/nocobase/pull/5515)) por @zhangzhonghe

  - Implementar carga bajo demanda para componentes del front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) por @gchust

- **[Notificación: Correo electrónico]** Añadir enlaces a la página de inicio en los plugins de notificación en package.json. ([#6150](https://github.com/nocobase/nocobase/pull/6150)) por @sheldon66

- **[Flujo de trabajo: Nodo de bucle]** Corregir estilos ([#6095](https://github.com/nocobase/nocobase/pull/6095)) por @mytharcher

- **[Gestor de archivos]** Soporte para otros plugins de almacenamiento ([#6096](https://github.com/nocobase/nocobase/pull/6096)) por @jiannx
Referencia: [Almacenamiento de archivos: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Flujo de trabajo: kit de pruebas]** Ajustar el estilo del lienzo del flujo de trabajo para que el contenido sea más compacto ([#6088](https://github.com/nocobase/nocobase/pull/6088)) por @mytharcher

- **[Flujo de trabajo]** Cambiar nombres de API a unos más razonables ([#6082](https://github.com/nocobase/nocobase/pull/6082)) por @mytharcher

- **[Visualización de datos]** Añadir parámetro offset a charts-query ([#5911](https://github.com/nocobase/nocobase/pull/5911)) por @Albert-mah

- **[Móvil]** Adaptar el componente selector de rango de fecha y hora para móvil ([#5863](https://github.com/nocobase/nocobase/pull/5863)) por @katherinehhh

- **[Autenticación]** Optimizar la lógica de obtención de metadatos de acciones de auditoría. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) por @chenzhizdt

- **[Formularios públicos]** Optimizar el panel de acciones y los componentes de formularios públicos para la adaptación móvil ([#5788](https://github.com/nocobase/nocobase/pull/5788)) por @katherinehhh

- **[Campo de colección: Ordenar]** Añadir descripción del plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Cambiar API de ejecución manual por @mytharcher

- **[Flujo de trabajo: Cálculo JSON]**
  - Cambiar nombre y grupo del nodo JSON-query por @mytharcher

  - Añadir icono a los nodos por @mytharcher

- **[Incrustar NocoBase]** Mejorar el rendimiento de renderizado de páginas por @zhangzhonghe

- **[Gestor de copias de seguridad]** Mejorar los mensajes de error para fallos de restauración por @gchust

### 🐛 Corrección de Errores

- **[cliente]**
  - Las reglas de vinculación del botón no funcionan correctamente debido a un problema con la secuencia ([#6147](https://github.com/nocobase/nocobase/pull/6147)) por @zhangzhonghe

  - Anomalía en el diseño después de eliminar bloques o campos ([#6139](https://github.com/nocobase/nocobase/pull/6139)) por @zhangzhonghe

  - Corregir la configuración de campos no filtrables del botón de filtro que afecta a otras tablas con la misma colección ([#6121](https://github.com/nocobase/nocobase/pull/6121)) por @katherinehhh

  - Datos no mostrados para el campo de asociación en los subdetalles ([#6117](https://github.com/nocobase/nocobase/pull/6117)) por @zhangzhonghe

  - Corregir el problema por el que el 'modo de carga de datos' se vuelve inválido después de cambiar de página ([#6115](https://github.com/nocobase/nocobase/pull/6115)) por @zhangzhonghe

  - Corregir el problema por el que los valores predeterminados del campo de asociación no se actualizan después de cambiar de página ([#6114](https://github.com/nocobase/nocobase/pull/6114)) por @zhangzhonghe

  - Corregir el problema por el que los valores predeterminados para los campos de asociación no surten efecto en el modo de lectura fácil ([#6066](https://github.com/nocobase/nocobase/pull/6066)) por @zhangzhonghe

  - Corregir el problema por el que las asignaciones de campo para los botones de formulario en los nodos manuales del flujo de trabajo son inválidas ([#6054](https://github.com/nocobase/nocobase/pull/6054)) por @zhangzhonghe

  - Corregir la falta de la variable de ventana emergente actual en el modal de habilitación de enlace de campo ([#6045](https://github.com/nocobase/nocobase/pull/6045)) por @katherinehhh

  - Continuar renderizando la página después de que se complete la solicitud de verificación de autenticación ([#6020](https://github.com/nocobase/nocobase/pull/6020)) por @2013xile

  - Corregir el problema por el que las filas de la tabla no se pueden arrastrar y ordenar ([#6013](https://github.com/nocobase/nocobase/pull/6013)) por @zhangzhonghe

  - Corregir el problema por el que las subtablas vacías muestran una fila de datos vacía en iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) por @zhangzhonghe

  - Corregir el problema por el que al hacer clic en campos de asociación no se abre el diálogo emergente ([#5972](https://github.com/nocobase/nocobase/pull/5972)) por @zhangzhonghe

  - Corregir el selector de rango de fechas en el formulario/acción de filtro que no muestra el selector de hora cuando showTime está configurado ([#5956](https://github.com/nocobase/nocobase/pull/5956)) por @katherinehhh

  - Corregir el problema de visualización inesperada de celdas de tabla en plugins de terceros ([#5934](https://github.com/nocobase/nocobase/pull/5934)) por @zhangzhonghe

  - Corregir el problema por el que el botón de eliminar está deshabilitado en la página de gestión de plantillas de bloque ([#5922](https://github.com/nocobase/nocobase/pull/5922)) por @zhangzhonghe

  - Corregir el problema por el que las reglas de vinculación de formularios fallan cuando dependen de valores de campo de subtablas ([#5876](https://github.com/nocobase/nocobase/pull/5876)) por @zhangzhonghe

  - Corregir el problema de que los datos no cambian después de la paginación en subtablas ([#5856](https://github.com/nocobase/nocobase/pull/5856)) por @zhangzhonghe

  - Corregir el problema por el que el título de la pestaña del navegador no se actualiza después de cambiar de página ([#5857](https://github.com/nocobase/nocobase/pull/5857)) por @zhangzhonghe

  - Corregir el problema por el que al actualizar la página en la página de gestión de fuentes de datos se redirige a la página de inicio ([#5855](https://github.com/nocobase/nocobase/pull/5855)) por @zhangzhonghe

  - Corregir el problema por el que los campos de asociación en plantillas de referencia a veces no muestran datos ([#5848](https://github.com/nocobase/nocobase/pull/5848)) por @zhangzhonghe

  - Corregir el problema por el que los datos de roles no se muestran en la tabla de gestión de usuarios ([#5846](https://github.com/nocobase/nocobase/pull/5846)) por @zhangzhonghe

  - Corregir el problema por el que el botón 'Solicitud personalizada' no es visible inmediatamente después de ser añadido ([#5845](https://github.com/nocobase/nocobase/pull/5845)) por @zhangzhonghe

  - Corregir el problema por el que los bloques añadidos en una ventana emergente no se muestran al reabrir la ventana emergente ([#5838](https://github.com/nocobase/nocobase/pull/5838)) por @zhangzhonghe

  - Evitar que las páginas ocultas afecten las interacciones con otras páginas ([#5836](https://github.com/nocobase/nocobase/pull/5836)) por @zhangzhonghe

  - Corregir el problema por el que cambiar el valor de un campo de asociación en el bloque de detalles no se actualiza inmediatamente ([#5826](https://github.com/nocobase/nocobase/pull/5826)) por @zhangzhonghe

  - Corregir el problema por el que los campos no se muestran después de añadirlos en un subformulario ([#5827](https://github.com/nocobase/nocobase/pull/5827)) por @zhangzhonghe

  - Corregir el problema por el que al hacer clic en enlaces no se abre una ventana emergente cuando 'Habilitar enlace' está activado por primera vez ([#5812](https://github.com/nocobase/nocobase/pull/5812)) por @zhangzhonghe

  - Corregir el problema por el que el inicio de sesión móvil redirige a la página de escritorio ([#5805](https://github.com/nocobase/nocobase/pull/5805)) por @zhangzhonghe

  - Corregir la alineación del botón de acción de configuración que debe estar a la izquierda ([#5798](https://github.com/nocobase/nocobase/pull/5798)) por @katherinehhh

  - Evitar múltiples llamadas API al cerrar la ventana emergente ([#5804](https://github.com/nocobase/nocobase/pull/5804)) por @zhangzhonghe

  - Corregir problemas por los que las variables no se pueden usar correctamente en bloques de fuentes de datos de terceros ([#5782](https://github.com/nocobase/nocobase/pull/5782)) por @zhangzhonghe

  - Corregir el problema por el que los valores de los campos de asociación están vacíos en las plantillas de bloque. Corregir el problema por el que el ámbito de datos del bloque que usa variables no funciona correctamente en fuentes de datos de terceros ([#5777](https://github.com/nocobase/nocobase/pull/5777)) por @zhangzhonghe

  - Corregir el problema por el que las props dinámicas del componente no funcionan con carga diferida ([#5776](https://github.com/nocobase/nocobase/pull/5776)) por @gchust

  - Corregido el mensaje de advertencia en React al cargar hooks dinámicamente en el entorno de desarrollo ([#5758](https://github.com/nocobase/nocobase/pull/5758)) por @gchust

- **[compilación]**
  - Corregido el problema de carga después de establecer la variable de entorno `APP_PUBLIC_PATH` ([#5924](https://github.com/nocobase/nocobase/pull/5924)) por @gchust

  - Corregido el almacenamiento en caché incorrecto de archivos js del frontend después de la compilación del plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) por @gchust

  - Corregir el problema al ejecutar `yarn dev` después de create-nocobase-app que resulta en un error ([#5708](https://github.com/nocobase/nocobase/pull/5708)) por @gchust

- **[servidor]** Establecer las acciones disponibles predeterminadas para el ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) por @chenos

- **[Formularios públicos]** No se pueden añadir campos en el `Sub-formulario (Popover)` de formularios públicos ([#6157](https://github.com/nocobase/nocobase/pull/6157)) por @gchust

- **[Colección: SQL]** Corregir el problema por el que filtrar una Colección SQL lanza un error cuando `DB_TABLE_PREFIX` está configurado ([#6156](https://github.com/nocobase/nocobase/pull/6156)) por @2013xile

- **[Flujo de trabajo]**
  - Añadir caso de prueba para la acción "mover" para activar el flujo de trabajo ([#6145](https://github.com/nocobase/nocobase/pull/6145)) por @mytharcher

  - Corregir error lanzado al reanudar un nodo asíncrono en un flujo de trabajo de ejecución manual ([#5877](https://github.com/nocobase/nocobase/pull/5877)) por @mytharcher

- **[Sincronización de datos de usuario]**
  - Corregir el problema por el que el botón "reintentar" no se muestra en la lista de tareas ([#6079](https://github.com/nocobase/nocobase/pull/6079)) por @2013xile

  - Corregir problemas de visualización de los botones de sincronización y tareas. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) por @2013xile

- **[Verificación]** Corregir campos de formulario vacíos al abrir el cajón de edición en la página de configuración de Verificación ([#5949](https://github.com/nocobase/nocobase/pull/5949)) por @chenos

- **[Fuente de datos: Principal]** Corregir el problema por el que los campos del sistema en el bloque de formulario de filtro no se pueden editar ([#5885](https://github.com/nocobase/nocobase/pull/5885)) por @zhangzhonghe

- **[Visualización de datos]**
  - Corregir la altura inicial del bloque de gráfico ([#5879](https://github.com/nocobase/nocobase/pull/5879)) por @2013xile

  - Corregir el problema por el que los componentes de campo de filtro de los bloques de gráfico no se renderizan ([#5769](https://github.com/nocobase/nocobase/pull/5769)) por @2013xile

- **[Móvil]**
  - Corregir la adaptación móvil del componente de fecha en subpáginas ([#5859](https://github.com/nocobase/nocobase/pull/5859)) por @katherinehhh

  - Corregir la falta del campo de entrada de fecha en la operación de filtro en móvil ([#5779](https://github.com/nocobase/nocobase/pull/5779)) por @katherinehhh

- **[Flujo de trabajo: Evento de acción personalizada]**
  - Corregir casos de prueba del disparador de acción personalizada por @mytharcher

  - Corregir caso de prueba fallido en SQLite por @mytharcher

- **[Flujo de trabajo: Evento previo a la acción]** Corregir casos de prueba del interceptor de solicitudes por @mytharcher

- **[Flujo de trabajo: Mensaje de respuesta]** Corregir nombre de parámetro incorrecto usado por @mytharcher
