---
title: "NocoBase v1.9.0-beta.18: Actualización automática de campos de secuencia después de la migración de datos"
description: "Nota de la versión v1.9.0-beta.18"
---

### 🎉 Nuevas Funcionalidades

- **[Campo de colección: Secuencia]** Actualizar automáticamente los campos de secuencia después de la migración de datos ([#8063](https://github.com/nocobase/nocobase/pull/8063)) por @cgyrock

- **[Fuente de datos: API REST]** Añadir opciones de `transformador de mensajes de error` en la configuración de la fuente de datos de la API RESTful por @cgyrock

- **[Auth: OIDC]** Soporte para redirección automática a la URL de SSO cuando no está autenticado por @heziqiang

### 🚀 Mejoras

- **[auth]** Corregir [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile

- **[cliente]**
  - Mostrar opciones colapsadas al pasar el ratón en el componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh

  - Optimizar mensajes de validación para subtablas ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh

  - Añadir estado de carga para los botones de acción de actualizar registro y eliminar registro, evitando solicitudes duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher

  - Usar triple llave (`{{{` y `}}}`) para variables en el contenido del mensaje, para evitar que las variables sean escapadas por Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher

- **[Acción: Importar registros]** Permitir seleccionar ID para los campos de importación ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh

- **[Flujo de trabajo]** Añadir contexto de fuente de datos "principal" para UserSelect, con el fin de proporcionar un componente más común que pueda usarse en otros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher

- **[Campo de colección: Markdown(Vditor)]** Ajustar el ancho del contenido a pantalla completa de vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh

- **[Gestor de tareas asíncronas]** Mensajes de error mejorados para tareas asíncronas, proporcionando a los usuarios razones específicas para los fallos de las tareas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher

- **[Acción: Importar registros Pro]** Mensajes de error mejorados para tareas asíncronas, proporcionando a los usuarios razones específicas para los fallos de las tareas por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir la selección de variables en AssigneeSelect, limitando la selección solo a PK o FK de la colección de usuarios por @mytharcher

  - Usar un componente común para reducir el código duplicado por @mytharcher

  - Hacer que la carga útil de la ejecución manual (o activada por un nodo de subflujo) sea compatible con el registro o la clave primaria. Evitar problemas de consistencia en el contexto del disparador. por @mytharcher

  - Reducir las asociaciones a cargar en la ventana emergente de aprobación, para proporcionar un mejor rendimiento por @mytharcher

- **[Registros de auditoría]** Actualizar el campo de identificador único a `texto` para evitar el desbordamiento de la longitud del identificador durante las ediciones masivas por @2013xile

- **[Gestor de migraciones]** Actualizar automáticamente los campos de secuencia después de la migración de datos por @cgyrock

### 🐛 Corrección de Errores

- **[servidor]** Se corrigió un problema por el cual los flujos de trabajo activados no se agregaban a la cola de procesamiento después de importar datos, asegurando que los flujos de trabajo se ejecuten según lo esperado inmediatamente después de la importación ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher

- **[acl]** Se corrigió un problema por el cual la metainformación de ACL es incorrecta cuando los ámbitos de permiso de fuentes de datos externas utilizan variables relacionadas con el usuario actual ([#8013](https://github.com/nocobase/nocobase/pull/8013)) por @2013xile

- **[cliente]**
  - Corregir el error de carga diferida en Variable.Input, que provocaba que el menú de opciones de variables se volviera a renderizar incorrectamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher

  - Resolver el error al añadir registros secundarios en un bloque de tabla de árbol de asociación ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh

  - Corregir el problema de parpadeo del cuadro de selección desplegable de la regla de vinculación ([#8018](https://github.com/nocobase/nocobase/pull/8018)) por @zhangzhonghe

  - Evitar que se lance un error al abrir la configuración de valores predeterminados ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher

  - Corregir problemas de enrutamiento al usar un Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) por @zhangzhonghe

  - corregir que la selección remota no muestre la etiqueta correcta para valores que no son objetos ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh

- **[base de datos]** Corrección: eliminar el procesamiento UTC en la conversión de tiempo para campos de solo hora para evitar cambios inducidos por la zona horaria. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu

- **[Acción: Importar registros]**
  - Los campos importados no coinciden con los campos establecidos en la configuración de ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile

  - Corregir el problema por el cual se lanza un error cuando un campo en el xlsx importado tiene un valor `nulo` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher

  - Se corrigió el problema al importar datos en una tabla de árbol ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock

- **[Flujo de trabajo]**
  - Corregir el problema por el cual la página de ejecución lanza un error cuando los trabajos en el nodo no están definidos ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher

  - Corregir el problema por el cual se lanza un error en el lienzo de ejecución cuando se elimina un nodo ([#8090](https://github.com/nocobase/nocobase/pull/8090)) por @mytharcher

  - Corregir el problema por el cual la cola se cierra antes de la publicación de mensajes ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher

  - Corregir el problema por el cual las ejecuciones preparadas no se envían a la cola antes de detenerse ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher

  - Corregir el problema por el cual algunos menús de tareas del flujo de trabajo no se muestran ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher

  - Corregir el problema por el cual el enlace de la tarea dirige a una página de error ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher

  - Corregir que el recuento de tareas no se muestre debido al mal uso del proveedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher

- **[Gestor de múltiples aplicaciones]** La configuración del nivel de registro no se aplica a las subaplicaciones ([#8045](https://github.com/nocobase/nocobase/pull/8045)) por @2013xile

- **[Control de acceso]** Añadir middleware para comprobaciones de permisos en operaciones de asociación para fuentes de datos externas ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile

- **[Campo de colección: Muchos a muchos (array)]** Se corrigió el problema por el cual el campo de matriz m2m en la subtabla no podía actualizarse ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock

- **[Editor de temas]** Habilitar el selector de temas en dispositivos móviles ([#8046](https://github.com/nocobase/nocobase/pull/8046)) por @zhangzhonghe

- **[Visualización de datos]**
  - La configuración de campos de filtro para colecciones de fuentes de datos externas no muestra propiedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile

  - Resolver el problema por el cual la consulta del gráfico no admitía el ámbito de datos de ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile

- **[Colección: Árbol]** Corregir fallos en la actualización de la tabla de rutas causados por una búsqueda incorrecta del campo padre del árbol ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile

- **[Flujo de trabajo: Nodo manual]** Corregir el problema por el cual el recuento de tareas manuales no es correcto ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher

- **[Gestor de tareas asíncronas]** Añadir regla de migración para la colección `asyncTasks`, evitando que los registros de tareas asíncronas sean migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher

- **[Gestor de fuentes de datos]** Se corrigió el fallo en la actualización de la contraseña de la fuente de datos cuando se cambia la contraseña de la base de datos ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock

- **[Departamentos]** Corregir el problema por el cual los campos asociados al departamento no podían editarse ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang

- **[Flujo de trabajo: Subflujo]** Corregir el problema por el cual el flujo de trabajo seleccionado mostraba "N/A" cuando el recuento de flujos de trabajo es mayor a 200 por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregir archivo de idioma por @mytharcher

  - Corregir el problema por el cual los registros de aprobación no se incluyen en el resultado del trabajo en la rama de retorno por @mytharcher

  - Corregir el problema por el cual no hay datos al cargar aprobaciones relacionadas con variables de ámbito de ACL por @mytharcher

  - Corregir problema de permisos al obtener `approvalRecords.reassignee` debido a un cambio en `RemoteSelect` por @mytharcher

  - Corregir el problema por el cual la acción de impresión no funciona al actualizar la página con el modal abierto por @mytharcher

  - Añadir migración para evitar errores de registro duplicado al añadir un índice por @mytharcher

  - Corregir el problema por el cual el proceso es incorrecto al bifurcar con orden y contrafirma por @mytharcher

  - Corregir el problema por el cual el comentario en el resultado del trabajo es nulo después de que el usuario envía la aprobación con comentario por @mytharcher

  - Corregir que no haya datos del solicitante en el contexto de ejecución después de que el usuario vuelva a enviar por @mytharcher

  - Corregir el problema de error de permiso lanzado al cargar aprobaciones relacionadas con el registro en el panel de detalles por @mytharcher

  - Corregir el problema por el cual la ventana emergente del aprobador no muestra un título por @zhangzhonghe

  - Corregir el problema por el cual se lanza un error al cargar la aprobación relacionada en modo de rol de solo unión por @mytharcher

  - Corregir el problema cuando ocurre un OOM al listar aprobaciones por @mytharcher
