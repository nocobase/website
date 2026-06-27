---
title: "NocoBase v1.6.0-beta.17: Añadir configuración de tooltip a elementos del menú y encabezados de tabla"
description: "Nota de la versión v1.6.0-beta.17"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Añadir configuración de tooltip a elementos del menú y encabezados de tabla ([#6346](https://github.com/nocobase/nocobase/pull/6346)) por @Cyx649312038

- **[Visualización de datos]** Soporte para ordenación NULLS en consultas de gráficos ([#6383](https://github.com/nocobase/nocobase/pull/6383)) por @2013xile

- **[Integración de IA]** Nuevo plugin: Integración de IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) por @2013xile
Referencia: [Integración de IA](https://docs.nocobase.com/handbook/ai/service)
- **[Integración de IA (EE)]** Nuevo plugin: Integración de IA (EE) por @2013xile
Referencia: [Integración de IA](https://docs.nocobase.com/handbook/ai/service)
### 🚀 Mejoras

- **[cliente]**
  - Añadir manejo de debounce a los botones ([#6351](https://github.com/nocobase/nocobase/pull/6351)) por @Cyx649312038

  - Hacer que el menú sea responsive al ancho de pantalla ([#6331](https://github.com/nocobase/nocobase/pull/6331)) por @zhangzhonghe

- **[Workflow]** Permitir omitir la activación del workflow de la colección en eventos de base de datos ([#6379](https://github.com/nocobase/nocobase/pull/6379)) por @mytharcher

- **[Workflow: Nodo Agregado]** Añadir proceso de redondeo para números agregados basados en tipo double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) por @mytharcher

- **[Acción: Importar registros Pro]** Soporte para opciones avanzadas en el botón de importación Pro por @katherinehhh

- **[Workflow: JavaScript]** Soporte para requerir paquetes desde ruta absoluta por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]** Intentar recargar almacenamientos si no se encuentra el almacenamiento por @jiannx

### 🐛 Corrección de Errores

- **[cliente]**
  - La traducción personalizada del título del menú no es válida ([#6377](https://github.com/nocobase/nocobase/pull/6377)) por @zhangzhonghe

  - Problema relacionado con la zona horaria que causa una hora menos en el selector de fecha ([#6359](https://github.com/nocobase/nocobase/pull/6359)) por @katherinehhh

  - Falta la configuración de ordenación para campos de colección heredados ([#6372](https://github.com/nocobase/nocobase/pull/6372)) por @katherinehhh

  - El menú desplegable de configuración de almacenamiento del campo de archivo adjunto no muestra opciones ([#6365](https://github.com/nocobase/nocobase/pull/6365)) por @katherinehhh

  - Los componentes de subformulario no se alinean con el formulario principal cuando la etiqueta está oculta ([#6357](https://github.com/nocobase/nocobase/pull/6357)) por @katherinehhh

  - El bloque de asociación no se renderiza en ventana emergente dentro de la herencia de colección ([#6303](https://github.com/nocobase/nocobase/pull/6303)) por @katherinehhh

  - Solucionar problema de barra de desplazamiento al abrir pestaña de página con bloque de altura completa ([#6347](https://github.com/nocobase/nocobase/pull/6347)) por @katherinehhh

  - Corregir error al crear colección de archivos ([#6363](https://github.com/nocobase/nocobase/pull/6363)) por @mytharcher

- **[base de datos]** Corregir error al recuperar registros de colección de relación si la clave de origen en los campos de relación es una cadena numérica ([#6360](https://github.com/nocobase/nocobase/pull/6360)) por @2013xile

- **[Cliente WEB]**
  - Agregar pestañas de página en la tabla de gestión de rutas no tiene efecto ([#6362](https://github.com/nocobase/nocobase/pull/6362)) por @zhangzhonghe

  - Después de agregar una página a la tabla de rutas, la página aparece en blanco ([#6366](https://github.com/nocobase/nocobase/pull/6366)) por @zhangzhonghe

- **[Usuarios]**
  - Error "Sin permisos" cuando usuarios sin permisos de gestión de usuarios ven su propio perfil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) por @2013xile

  - Error "Sin permisos" al actualizar la configuración del sistema en la gestión de usuarios ([#6380](https://github.com/nocobase/nocobase/pull/6380)) por @2013xile

- **[Control de acceso]** En la tabla de gestión de permisos, el nombre de la pestaña de página está vacío ([#6364](https://github.com/nocobase/nocobase/pull/6364)) por @zhangzhonghe

- **[Integración de IA]** Problema donde la `baseURL` predeterminada para el proveedor LLM es `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) por @2013xile

- **[Workflow]** Corregir acl para obtener trabajo ([#6352](https://github.com/nocobase/nocobase/pull/6352)) por @mytharcher

- **[Workflow: Evento de acción personalizada]** Corregir locale y colección modificable después de la ejecución por @mytharcher

- **[Acción: Importar registros Pro]** Usar opción adicional para determinar si activar o no el workflow por @mytharcher

- **[Acción: Exportar registros Pro]** La acción de exportación Pro carece de parámetros de ordenación por @katherinehhh
