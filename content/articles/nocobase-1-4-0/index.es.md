---
title: "NocoBase v1.4.0 Lanzado Oficialmente"
description: "Formularios públicos, nuevas fuentes de datos y más funciones."
---

## Principales Novedades

### Simplificación del proceso de añadir y actualizar plugins

![20241201170853](https://static-docs.nocobase.com/20241201170853.png)

* La lista de plugins ahora se lee directamente desde el directorio local.
* Se han combinado los procesos para añadir y actualizar plugins.
* La interfaz permite la activación por lotes de plugins.
* Se ha simplificado el proceso de descarga y actualización de plugins comerciales.

Documentación de referencia:

* [Instalación y actualización de plugins](https://docs.nocobase.com/welcome/getting-started/plugin)
* [Notas de la versión / Simplificación del proceso de añadir y actualizar plugins](https://www.nocobase.com/en/blog/simplify-the-process-of-adding-and-updating-plugins)

### Notificaciones

![20241201171806](https://static-docs.nocobase.com/20241201171806.png)

* **Notificación: Mensaje en la aplicación**
  Permite a los usuarios recibir notificaciones de mensajes en tiempo real dentro de la aplicación NocoBase;
* **Notificación: Correo electrónico**
  Se utiliza para enviar notificaciones por correo electrónico con transporte SMTP integrado. Detalles;
* **Notificación: WeCom**
  Envía notificaciones a través del canal WeCom.

Documentación de referencia:

* [Gestor de notificaciones](https://docs.nocobase.com/handbook/notification-manager)

### Sincronización de datos de usuario

![20241201172843](https://static-docs.nocobase.com/20241201172843.png)

Documentación de referencia:

* [Sincronización de datos de usuario](https://docs.nocobase.com/handbook/user-data-sync)

### Gestor de copias de seguridad

![20241201170237](https://static-docs.nocobase.com/20241201170237.png)

Documentación de referencia:

* [Gestor de copias de seguridad](https://docs.nocobase.com/handbook/backups)

### Formularios públicos

Comparta formularios públicos externamente para recopilar información de usuarios anónimos.

![20241201165614](https://static-docs.nocobase.com/20241201165614.png)

Documentación de referencia:

* [Formularios públicos](https://docs.nocobase.com/handbook/public-forms)

### Fuente de datos: KingbaseES

Utilice la base de datos KingbaseES como fuente de datos, ya sea como base de datos principal o externa.

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

Documentación de referencia:

* [Fuente de datos: Base de datos KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### Fuente de datos: Oracle externo

Utilice bases de datos Oracle externas como fuente de datos.

![628abc5eb797e6b903d4b548f773a13b.png](https://static-docs.nocobase.com/628abc5eb797e6b903d4b548f773a13b.png)

Documentación de referencia:

* [Fuente de datos externa: Oracle](https://docs.nocobase.com/handbook/data-source-external-oracle)

### Campo de colección: Adjuntos (URL)

Admite adjuntos basados en URL.

![e8772bec3d4b1771c1b21d087c9a4185.png](https://static-docs.nocobase.com/e8772bec3d4b1771c1b21d087c9a4185.png)

Documentación de referencia:

* [Campo de tabla de datos: Adjuntos (URL)](https://docs.nocobase.com/handbook/field-attachment-url)

### Componente de campo: Máscara

![20241201165938](https://static-docs.nocobase.com/20241201165938.png)

Documentación de referencia:

* [Componente de campo: Máscara](https://docs.nocobase.com/handbook/field-component-mask)

### Flujo de trabajo: JavaScript

Los nodos JavaScript permiten a los usuarios ejecutar JavaScript dentro de un flujo de trabajo. El script puede usar variables de nodos anteriores en el proceso como parámetros y el valor de retorno del script se puede usar en nodos posteriores.

![20241202203655](https://static-docs.nocobase.com/20241202203655.png)

Documentación de referencia:

* [Nodo de flujo de trabajo - JavaScript](https://docs.nocobase.com/handbook/workflow-javascript)

### Visualización de datos: ECharts

Se ha añadido ECharts, compatible con gráficos de embudo, radar y más, y que proporciona configuraciones más fáciles de usar.

![data-visualization-echarts](https://static-docs.nocobase.com/202410091022965.png)

Documentación de referencia:

* [Visualización de datos: Echarts](https://docs.nocobase.com/handbook/data-visualization-echarts)

### Bloque: Formulario multipaso

Divida el formulario con muchos campos en varios pasos para aliviar la carga del usuario.

![a503e153e8d714b9ca56f512142aeef1.png](https://static-docs.nocobase.com/a503e153e8d714b9ca56f512142aeef1.png)

Documentación de referencia:

* [Bloque: Formulario multipaso](https://docs.nocobase.com/handbook/block-multi-step-from)

### Bloque: Panel de acciones

Diseñado para albergar varias acciones rápidas, actualmente compatible con:

* Enlace
* Escanear código QR
* Ventana emergente
* Solicitud personalizada

Admite diseños de cuadrícula y lista.

![9942e6741e99195713f9e2981b02f228.png](https://static-docs.nocobase.com/9942e6741e99195713f9e2981b02f228.png)

Documentación de referencia:

* [Bloque: Panel de acciones](https://docs.nocobase.com/handbook/block-action-panel)

## Funcionalidades eliminadas

### Plugin de copia de seguridad y restauración obsoleto

Desde NocoBase v0.19, introdujimos el plugin `@nocobase/plugin-backup-restore` para la copia de seguridad y restauración de aplicaciones. Sin embargo, los comentarios de los usuarios revelaron varias limitaciones en su funcionalidad:

1. No podía realizar copias de seguridad ni restaurar metadatos a nivel de base de datos, como valores predeterminados de campos de base de datos e índices únicos.
2. No podía manejar objetos de base de datos como vistas, procedimientos almacenados, funciones y disparadores durante la copia de seguridad o restauración.
3. Requería la configuración individual de `dumpRules` para cada formulario de plugin, lo que a menudo requería lógica personalizada de los desarrolladores de plugins para evitar fallos en el proceso de copia de seguridad o restauración.
4. El complejo diseño de la agrupación de copias de seguridad aumentaba la carga cognitiva y podía provocar fallos en la copia de seguridad o pérdida de datos si no se seleccionaba correctamente.
5. El proceso de copia de seguridad y restauración ocurría en la capa de aplicación, lo que significaba que fallaba si la aplicación no podía iniciarse.

Después de una cuidadosa consideración, a partir de la versión v1.4, hemos decidido dejar obsoleto este plugin. Para la nueva solución de copia de seguridad, consulte la documentación a continuación.

Documentación de referencia:

* [Cómo hacer copias de seguridad y restaurar NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
