---
title: "NocoBase v1.4.8: Corrección de errores"
description: "Nota de la versión v1.4.8"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige un problema con la plantilla de datos en el formulario de filtro configurado en el selector de registros de campos de asociación ([#5837](https://github.com/nocobase/nocobase/pull/5837)) por @katherinehhh

  - Se corrige un problema con las plantillas de cadena Markdown que no cargaban los datos de los datos de asociación (fuente de datos externa) ([#5791](https://github.com/nocobase/nocobase/pull/5791)) por @katherinehhh

- **[Sincronización de datos de usuario]** Se omiten los tipos de datos no compatibles durante la sincronización en lugar de lanzar un error. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) por @chenzhizdt

- **[Gestor de copias de seguridad]**
  - Se corrigió la apertura lenta de la ventana de descarga para archivos de copia de seguridad grandes por @gchust

  - Se corrigió el problema por el cual restaurar una subaplicación de copia de seguridad provocaba que todas las aplicaciones se reiniciaran por @gchust
