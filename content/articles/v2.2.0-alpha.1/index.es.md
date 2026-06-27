---
title: "NocoBase v2.2.0-alpha.1: Soporte para entrada por escaneo en campos de texto"
description: "Nota de la versión v2.2.0-alpha.1"
---

### 🎉 Nuevas Funcionalidades

- **[client-v2]** Soporte para entrada por escaneo en campos de texto ([#9599](https://github.com/nocobase/nocobase/pull/9599)) por @katherinehhh
- **[undefined]** Se añadieron comandos proxy de nivel superior para nginx y caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) por @chenos
- **[Administrador de tareas asíncronas]** Se añadió soporte para cliente v2 en la acción de la barra superior del administrador de tareas asíncronas. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) por @jiannx
- **[Administrador de copias de seguridad]**

  - Se añadió soporte en tiempo de ejecución para el cliente v2 del plugin del administrador de copias de seguridad. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) por @katherinehhh
  - Adaptado al nuevo plugin de control de versiones ([#9563](https://github.com/nocobase/nocobase/pull/9563)) por @cgyrock
- **[Fuente de datos: NocoBase externa]** Se añadió un plugin de fuente de datos: NocoBase externa por @2013xile
- **[Control de versiones]** Se añadió el plugin de control de versiones por @cgyrock

### 🚀 Mejoras

- **[client-v2]**

  - Se añadió soporte para deshabilitar la selección múltiple en campos de asociación de selección emergente v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) por @katherinehhh
  - Se mejoró el renderizado de bloques v2 cuando una fuente de datos externa configurada está deshabilitada, evitando errores de renderizado y mostrando un marcador de posición más claro en el Editor de IU. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) por @katherinehhh
- **[Variables y secretos]** Las variables de entorno (`$env`) ahora se pueden seleccionar mediante selectores de variables basados en el motor de flujo en el tiempo de ejecución v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) por @Molunerfinn
- **[Administrador de archivos]** Se añadió soporte para `subPath` de carga interna en el administrador de archivos. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) por @mytharcher
- **[Administrador de fuentes de datos]** Se añadió gestión de permisos de fuentes de datos para cliente-v2 y se alinearon los cajones de selección de permisos relacionados. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) por @jiannx
- **[Colección: Conectar a datos externos (FDW)]** Se mejoró la paridad de plantillas de colección V2 para colecciones SQL y colecciones de datos externos, incluyendo confirmación SQL, gestión de servidores de bases de datos externas y ordenación de plantillas. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) por @katherinehhh
- **[Impresión de plantillas]** Se actualizaron los metadatos de la colección de plantillas de impresión para la clasificación de copias de seguridad de control de versiones. por @cgyrock
- **[Historial de registros]** Se actualizaron los metadatos de la colección de historial de registros para la clasificación de copias de seguridad de control de versiones. por @cgyrock
- **[Flujo de trabajo: Aprobación]** Se actualizaron los metadatos de la colección de aprobación de flujo de trabajo para la clasificación de copias de seguridad de control de versiones. por @cgyrock
- **[Registros de auditoría]** Se actualizaron los metadatos de la colección de registros de auditoría para la clasificación de copias de seguridad de control de versiones. por @cgyrock
- **[Administrador de correo electrónico]** Se actualizaron los metadatos de la colección del administrador de correo electrónico para la clasificación de copias de seguridad de control de versiones. por @cgyrock
- **[Supervisor de aplicaciones]** Se actualizaron los metadatos de la colección del supervisor de aplicaciones para la clasificación de copias de seguridad de control de versiones. por @cgyrock

### 🐛 Corrección de Errores

- **[base de datos]** Se corrigió que los campos de contraseña no se cifraran durante las actualizaciones masivas. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) por @mytharcher
- **[cliente]** Se corrigió que las acciones de fila en subtablas emergentes ocultaran todo el campo de subtabla cuando la acción está oculta por reglas de vinculación ([#9717](https://github.com/nocobase/nocobase/pull/9717)) por @katherinehhh
- **[client-v2]**

  - Se corrigió que los campos JSON en las vistas de visualización del cliente v2 mostraran celdas en blanco para valores de objeto. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) por @katherinehhh
  - Se corrigió que los campos de opciones V2 tradujeran incorrectamente etiquetas de opciones simples en entornos localizados. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) por @katherinehhh
- **[Bloque: Mapa]**

  - Se corrigió el problema de DrawingManager no disponible en el bloque de Google Maps v1 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) por @katherinehhh
  - Se corrigió que los campos de geometría de mapa faltaran en el menú de añadir campo del administrador de fuentes de datos v2 después de habilitar el plugin de mapa. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) por @katherinehhh
- **[Calendario]** Se corrigió un problema por el cual no se podían añadir bloques de Detalles y Edición en los cajones de detalle del bloque de calendario v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) por @jiannx
- **[Administrador de fuentes de datos]**

  - Se corrigió la visualización obsoleta del campo de título al reabrir el cajón de configuración de campos de fuente de datos v2 después de cambiar el campo de título. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) por @katherinehhh
  - Se mejoraron los mensajes de error del administrador de fuentes de datos V2 cuando fallan las operaciones de colección, campo, sincronización y carga de tablas. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) por @katherinehhh
- **[Empleados de IA]**

  - Se mejoraron los mensajes de consulta de datos de empleados de IA para cargar la habilidad requerida antes de usar las herramientas de consulta. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) por @cgyrock
  - Se corrigió la falta del botón del asistente Dara en la configuración de gráficos del cliente-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) por @cgyrock
- **[Bloque: Lista]** Se corrigió el estado obsoleto de vinculación de acciones de fila en bloques de lista cuando las acciones dependen del registro actual. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) por @katherinehhh
- **[Manejador de errores]** Se redujeron los registros de error ruidosos para solicitudes normales no autenticadas sin token ([#9718](https://github.com/nocobase/nocobase/pull/9718)) por @2013xile
- **[Acción: Importar registros Pro]** Se corrigió el texto distorsionado al importar archivos XLSX con cadenas compartidas UTF-8 divididas en fragmentos de transmisión. por @mytharcher
- **[IA: Base de conocimiento]** Se corrigieron las rutas faltantes en las URL de archivos de la base de conocimiento S3. por @cgyrock
- **[Historial de registros]** Se corrigió la falta de historial de registros para cambios en fuentes de datos externas por @2013xile
