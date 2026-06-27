---
title: "NocoBase v2.0.0-alpha.53: soporte de formato numérico para campos de porcentaje"
description: "Nota de la versión v2.0.0-alpha.53"
---

### 🚀 Mejoras

- **[acl]** Soporte para la API `acl.registerSnippet` para fusionar la configuración de fragmentos ([#8155](https://github.com/nocobase/nocobase/pull/8155)) por @mytharcher

- **[cliente]** Soporte para formato de números en campos de porcentaje ([#8123](https://github.com/nocobase/nocobase/pull/8123)) por @katherinehhh

- **[motor-de-flujo]** Soporte para ocultar dinámicamente el menú de configuración de pasos ([#7924](https://github.com/nocobase/nocobase/pull/7924)) por @gchust

- **[Bloque: GridCard]** Optimización de los estilos del bloque Grid Card para un diseño más compacto ([#8152](https://github.com/nocobase/nocobase/pull/8152)) por @katherinehhh

- **[Empleados IA]** Se habilitó la funcionalidad de edición para los mensajes del sistema del asistente IA integrado.<br/>Se optimizó el mensaje del sistema del asistente IA Nathan.<br/>Se corrigió un problema con el servidor al leer archivos estáticos. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) por @heziqiang

- **[Flujo de trabajo]**
  - Se añadió lógica de tolerancia a fallos para datos faltantes en la preparación del procesador, para evitar que la ejecución se detenga ([#8156](https://github.com/nocobase/nocobase/pull/8156)) por @mytharcher

  - Se utiliza carga diferida para datos de asociación en el lienzo del flujo de trabajo para mejorar el rendimiento ([#8142](https://github.com/nocobase/nocobase/pull/8142)) por @mytharcher

- **[Campo de colección: Markdown(Vditor)]** Se deshabilita el análisis de variables en el campo Markdown por defecto en el modo readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) por @katherinehhh

### 🐛 Corrección de errores

- **[motor-de-flujo]** Se corrige la descarga incorrecta de archivos adjuntos ([#8154](https://github.com/nocobase/nocobase/pull/8154)) por @katherinehhh

- **[cliente]**
  - Se corrige que el menú desplegable del campo de asociación esté deshabilitado cuando existe un campo de opciones ([#8153](https://github.com/nocobase/nocobase/pull/8153)) por @katherinehhh

  - Se corrigió un problema donde al introducir texto en chino se borraban las opciones existentes al usar operadores multiselección en un campo de selección única en un bloque de formulario de filtro. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) por @gchust

  - Se corrigió un problema donde al cambiar los campos de etiqueta se perdían las configuraciones de ventanas emergentes. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) por @gchust

- **[acl]** Se corrige el problema donde la API `acl.can` devuelve `null` cuando el rol es `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) por @mytharcher

- **[base de datos]** `filterByTk` ahora soporta arrays al consultar colecciones con múltiples claves de destino de filtro ([#7986](https://github.com/nocobase/nocobase/pull/7986)) por @chenos

- **[Acción: Importar registros]** Espera sincrónicamente a que finalicen los eventos `afterCreate` activados por la importación. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) por @2013xile

- **[Campo de colección: Secuencia]** Mejora la robustez de plugin-field-sequence al manejar el comando de reparación ([#8139](https://github.com/nocobase/nocobase/pull/8139)) por @cgyrock

- **[Flujo de trabajo: Nodo manual]** Se corrige el problema de que la lista de tareas pendientes manuales usa una API incorrecta ([#8144](https://github.com/nocobase/nocobase/pull/8144)) por @mytharcher

- **[Cifrado de solicitudes HTTP]** Se usan corchetes para el formato de array en el análisis qs por @chenos

- **[Flujo de trabajo: Aprobación]** Se corrige el problema donde se lanzaba un error al cancelar una ejecución cuando su flujo de trabajo había sido eliminado por @mytharcher

- **[Gestor de migraciones]** Se corrige un problema donde los saltos de línea en los datos se perdían durante la migración. por @cgyrock
