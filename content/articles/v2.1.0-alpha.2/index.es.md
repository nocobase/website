---
title: "NocoBase v2.1.0-alpha.2: Añadir control ACL para las API de aprobación"
description: "Nota de la versión v2.1.0-alpha.2"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: Aprobación]** Añadir control ACL para las APIs de aprobación por @mytharcher
- **[Autenticación: DingTalk]** Permite vincular usuario con `unionId` por @2013xile

### 🚀 Mejoras

- **[IA: Base de conocimiento]** Optimizada la salida de compilación para reducir el tamaño del paquete de plugin-ai-knowledge-base. por @cgyrock
- **[Multi-espacio]** Control de permisos multi-espacio para acceder a ACL por @jiannx
- **[Acción: Exportar registros Pro]** Mejorar el ámbito de datos de la acción de exportación basado en registros seleccionados o filtros de recurso por @katherinehhh
- **[Flujo de trabajo: Aprobación]**

  - Eliminar soporte para campos JS por @zhangzhonghe
  - Simplificar parámetros en consultas y mejorar el rendimiento por @mytharcher
  - Implementar control de acceso para APIs para evitar operaciones de datos no autorizadas por @mytharcher
  - Añadir lógica de reparación para audiencias sincronizadas después de la migración por @mytharcher
- **[Autenticación: DingTalk]** Usar `userid` como clave predeterminada para la asociación de usuarios, manteniendo la compatibilidad con autenticadores existentes que dependen del móvil por @2013xile

### 🐛 Corrección de Errores

- **[Multi-espacio]**

  - añadir script de migración para eliminar x-ready-pretty en el campo de espacio por @jiannx
  - Espacio relacionado al añadir datos asociados por @jiannx
  - El color del selector de espacio sigue el tema por @jiannx
  - eliminar el atributo read-pretty para el campo de espacio por @jiannx
- **[Componente de campo: máscara]** Corregir un problema donde la ventana emergente de configuración del campo de máscara no podía cargar correctamente todos los roles de usuario. por @gchust
- **[Acción: Importar registros Pro]**

  - Corregir el problema donde el flujo de trabajo activado por importación asíncrona se retrasaba en ejecutarse por @mytharcher
  - Corregir los números de conteo en el resultado de importación y la traducción de mensajes por @mytharcher
- **[IA: Base de conocimiento]** Corregir el problema donde el sistema no puede iniciar después de compilar por @cgyrock
- **[Fuente de datos: API REST]** Añadir tolerancia a fallos para el contexto de solicitud, para evitar errores cuando el método no está en el contexto por @mytharcher
- **[Flujo de trabajo: Evento de acción personalizada]** Corregir el problema donde los parámetros y la carga útil son incorrectos al activar un flujo de trabajo personalizado por @mytharcher
- **[Acción: Exportar registros Pro]** Corregir error cuando las sub-aplicaciones ejecutan tareas de importación/exportación asíncronas mientras la aplicación principal no tiene habilitado el plugin de importación/exportación Pro por @cgyrock
- **[Flujo de trabajo: Webhook]**

  - Corregir el problema donde se lanzaba un error 404 al enviar POST a la URL del webhook en una sub-aplicación por @mytharcher
  - Corregir el problema donde faltaban datos del cuerpo cuando no se configuraba el análisis del cuerpo por @mytharcher
- **[Flujo de trabajo: Subflujo]** Corregir la ruta del enlace del flujo de trabajo por @mytharcher
- **[Impresión de plantilla]**

  - corregir problema de visualización de la lista de campos en la configuración de la acción de impresión de plantilla por @katherinehhh
  - corregir que campos con la misma clave provocaban errores de renderizado por @jiannx
  - Corregir problema de ventana emergente de configuración de plantilla oscurecida por @zhangzhonghe
  - eliminar botones de pie de página de la configuración de la plantilla de impresión por @katherinehhh
  - Corregida la lógica incorrecta de permisos del botón de impresión cuando los roles estaban unidos. por @jiannx
  - soportar campo de espacio por @jiannx
  - mostrar campos de espacio en la versión 2.0 por @jiannx
- **[Almacenamiento de archivos: S3(Pro)]** Corregir el problema donde el modo de cambio de nombre de archivos no funcionaba por @mytharcher
- **[Visualización de datos: ECharts]** Corregir error ortográfico de ECharts por @heziqiang
- **[Flujo de trabajo: Aprobación]**

  - Corregir el problema donde se lanzaba un error al aprobar un registro eliminado por @mytharcher
  - Corregir error lanzado al ejecutar en modo "Antes de guardar" por @mytharcher
  - Corregir el problema donde los datos de aprobación no se mostraban en la ventana emergente de detalle del registro si el modo del flujo de trabajo estaba configurado en "Antes de guardar" por @mytharcher
  - Añadir tolerancia a fallos cuando el flujo de trabajo se elimina, para evitar errores de carga en la lista de tareas por @mytharcher
  - Corregir el problema donde faltaban valores en la ventana emergente de detalle de "Mi solicitud" por @mytharcher
  - Corregir el problema donde se lanzaba un error en la ventana emergente de registro de aprobación 1.x por @mytharcher
  - Corregir problema de rendimiento causado por el campo JSON en la carga de listas (MySQL) por @mytharcher
  - Corregir id incorrecto para cargar el registro de detalle por @mytharcher
  - Corregir el problema donde la concurrencia hacía que la ejecución se reanudara repetidamente por @mytharcher
  - Corregir error de compilación causado por dependencias faltantes por @mytharcher
  - Corregir el problema donde se cargaba un registro incorrecto debido a parámetros erróneos por @mytharcher
  - Corregir el problema donde se devolvía una aprobación al nodo anterior pero se devolvía al inicio por @mytharcher
  - Corregir error lanzado al añadir un rol a un usuario si el flujo de trabajo de audiencias está deshabilitado por @mytharcher
  - Corregir que el bloque de valor no se mostraba debido a la falta del componente `ValueBlock.Result` por @mytharcher
  - Corregir el problema donde los campos no se mostraban en las tarjetas de tareas de aprobación por @zhangzhonghe
  - Corregir el problema donde los campos de filtro no funcionaban correctamente en el centro de tareas por @mytharcher
- **[Gestor de correo electrónico]**

  - corregir cadena de conversación por @jiannx
  - Corregir que el enlace de respuesta de Outlook se desconectaba ocasionalmente por @jiannx
  - el cuerpo no se contrae cuando se selecciona texto. corregir fallo al descargar archivo adjunto por @jiannx
  - Corregido el problema de correos electrónicos en la misma bandeja de entrada entre múltiples usuarios y rendimiento optimizado por @jiannx
  - añadir filtros a la gestión por @jiannx
  - mostrar botón de responder a todos y el ámbito de datos soporta filtrar mensajes hijos. por @jiannx
  - Corregir el problema donde la ventana emergente de configuración de correo electrónico estaba oscurecida por @zhangzhonghe
- **[WeCom]** Corregir un problema donde los usuarios no podían registrarse automáticamente cuando faltaba el móvil por @2013xile
- **[Gestor de migraciones]** Corregido un posible bloqueo del proceso causado por el registro de sentencias SQL excesivamente grandes incluidas en las excepciones de errores de migración por @cgyrock
