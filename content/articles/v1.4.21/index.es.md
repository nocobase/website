---
title: "NocoBase v1.4.21: Soporte de reglas de vinculación en el bloque de detalles para ocultar (valor reservado)"
description: "Nota de la versión v1.4.21"
---

### 🚀 Mejoras

- **[cliente]** Soporte de reglas de enlace en el bloque de detalles para ocultar (valor reservado) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]**
  - Solucionada la falta de ruta pública en las rutas de archivos de iconos ([#6034](https://github.com/nocobase/nocobase/pull/6034)) por @chenos

  - Corregido el problema por el cual las reglas de enlace de formularios fallan cuando dependen de valores de campos de subtablas ([#5876](https://github.com/nocobase/nocobase/pull/5876)) por @zhangzhonghe

  - Corregido el campo incorrecto de la variable 'Registro actual' en subdetalles ([#6030](https://github.com/nocobase/nocobase/pull/6030)) por @zhangzhonghe

- **[Gestor de copias de seguridad]** Corregido el fallo en la descarga de copias de seguridad cuando la API_BASE_PATH del entorno no es /api por @gchust
