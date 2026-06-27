---
title: "NocoBase v2.0.0-alpha.50: Soporte para permitir configuración múltiple en el componente de carga de archivos adjuntos"
description: "Nota de la versión v2.0.0-alpha.50"
---

### 🚀 Mejoras

- **[cliente]**

  - Se añade soporte para la configuración de selección múltiple en el componente de carga de archivos adjuntos ([#8052](https://github.com/nocobase/nocobase/pull/8052)) por @katherinehhh
  - Se muestran las opciones colapsadas al pasar el ratón en el componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh
  - Se muestran las opciones colapsadas al pasar el ratón en el componente Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) por @katherinehhh
- **[Empleados IA]** Se añade el campo de proveedor faltante al formulario de añadir LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) por @heziqiang
- **[Flujo de trabajo]** Se añade el contexto de fuente de datos "principal" para UserSelect, con el fin de proporcionar un componente más común que pueda usarse en otros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - Se corrige el problema por el que se mostraba "N/A" después de deshabilitar la selección múltiple en el selector de registros de asociación muchos a muchos ([#8050](https://github.com/nocobase/nocobase/pull/8050)) por @katherinehhh
  - Se corrige el problema de parpadeo del cuadro de selección desplegable de la regla de vinculación ([#8018](https://github.com/nocobase/nocobase/pull/8018)) por @zhangzhonghe
  - Se corrige un problema por el que al cambiar un campo de fecha a un campo de hora en la acción de filtro se producía un error de renderizado. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) por @gchust
  - Se corrige un problema por el que aparecía el menú del registro actual al añadir un bloque de comentarios. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) por @gchust
  - Se corrige el error al eliminar un registro en el bloque selector de registros ([#8023](https://github.com/nocobase/nocobase/pull/8023)) por @katherinehhh
  - Se corrige un problema por el que el estilo predeterminado del campo JS en el bloque de detalle era incorrecto. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) por @gchust
  - Se corrige que el bloque de tabla de árbol no pueda expandir nodos hijos ([#8011](https://github.com/nocobase/nocobase/pull/8011)) por @katherinehhh
  - Se corrige que el arrastre de columnas en subtablas no funcione ([#8026](https://github.com/nocobase/nocobase/pull/8026)) por @katherinehhh
  - Se corrige que el ancho de columna en subtablas no se aplique ([#8027](https://github.com/nocobase/nocobase/pull/8027)) por @katherinehhh
  - Se resuelve un problema que causaba errores al cargar datos para campos de asociación en ventanas emergentes, garantizando una visualización y funcionalidad de datos más fluidas. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) por @gchust
  - Se corrige un problema de estilo en el popover del campo de visualización Markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) por @katherinehhh
  - Se corrige un problema por el que los títulos predeterminados de las ventanas emergentes de las acciones de editar y crear nuevo eran incorrectos. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) por @gchust
  - Se corrige un error de carga diferida en Variable.Input, que provocaba que el menú de opciones de variable se volviera a renderizar incorrectamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher
  - Se corrige un problema por el que la variable de registro de la ventana emergente actual no se podía resolver correctamente en una ventana emergente abierta por un campo de asociación. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) por @gchust
- **[acl]** Se corrige un problema por el que la metainformación de ACL era incorrecta cuando los ámbitos de permiso de fuentes de datos externas usaban variables relacionadas con el usuario actual ([#8013](https://github.com/nocobase/nocobase/pull/8013)) por @2013xile
- **[motor de flujo]**

  - Se corrige que el registro de comentarios no se guarde después de editar ([#8035](https://github.com/nocobase/nocobase/pull/8035)) por @katherinehhh
  - Se corrige un problema por el que los bloques de datos no se actualizaban al cerrar una ventana emergente haciendo clic en el botón de envío del formulario dentro de la ventana emergente. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) por @gchust
- **[Editor de temas]** Se habilita el selector de temas en dispositivos móviles ([#8046](https://github.com/nocobase/nocobase/pull/8046)) por @zhangzhonghe
- **[Gestor de múltiples aplicaciones (obsoleto)]** La configuración del nivel de registro no se aplica a las subaplicaciones ([#8045](https://github.com/nocobase/nocobase/pull/8045)) por @2013xile
- **[Gestor de fuentes de datos]** Se corrigen errores al actualizar contraseñas para fuentes de datos externas ([#8024](https://github.com/nocobase/nocobase/pull/8024)) por @cgyrock
- **[Acción: Importar registros]** Se corrige el problema por el que se lanzaba un error cuando un campo en el archivo xlsx importado tenía un valor `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher
- **[Flujo de trabajo]** Se corrige el problema por el que la cola se cerraba antes de la publicación de mensajes ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher
- **[Comentarios]**

  - Se corrige el error al eliminar un registro en el bloque de comentarios por @katherinehhh
  - Se corrige la advertencia mostrada cuando el bloque de comentarios se usa en una colección que no es de comentarios por @katherinehhh
- **[Multi-espacio]** Los dispositivos móviles soportan el cambio de espacio por @jiannx
- **[Flujo de trabajo: Subflujo]** Se corrige el problema por el que el flujo de trabajo seleccionado mostraba "N/A" cuando el número de flujos de trabajo era mayor a 200 por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Se corrige el error lanzado al crear un bloque de información de aprobación por @mytharcher
  - Se añade migración para evitar errores de registro duplicado al añadir un índice por @mytharcher
  - Se corrige el problema por el que la acción de impresión no funcionaba al recargar la página con un modal abierto por @mytharcher
