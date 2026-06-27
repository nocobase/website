---
title: "NocoBase v2.1.3: Normalizar versiones de compilación compatibles de la aplicación"
description: "Nota de la versión v2.1.3"
---

### 🚀 Mejoras

- **[cli]**
  - Normalizar las versiones de compilación de compatibilidad de la aplicación ([#9763](https://github.com/nocobase/nocobase/pull/9763)) por @chenos
  - Soporte para actualizar habilidades a una versión específica ([#9760](https://github.com/nocobase/nocobase/pull/9760)) por @chenos

### 🐛 Corrección de errores

- **[cliente]** Se corrigió el problema por el cual los campos en subformularios horizontales eran demasiado estrechos para mostrar los datos ([#9755](https://github.com/nocobase/nocobase/pull/9755)) por @zhangzhonghe
- **[Administrador de fuentes de datos]**

  - Se corrigió el cajón de edición de campos en blanco causado por renderizaciones repetidas en la página de Configurar campos de la fuente de datos externa v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) por @katherinehhh
  - Se corrigió un problema por el cual eliminar la categoría de colección activa en el administrador de fuentes de datos v1 podía dejar vacía la pestaña Todas las colecciones. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) por @katherinehhh
- **[Administrador de tareas asíncronas]** Se corrigieron IDs de solicitud incorrectos en los registros del trabajador de tareas asíncronas ([#9686](https://github.com/nocobase/nocobase/pull/9686)) por @2013xile
- **[Flujo de trabajo: nodo SQL]** Se corrigió la migración de variables de plantilla heredadas del flujo de trabajo SQL que se omitía para algunos usuarios de versiones beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) por @mytharcher
- **[Empleados de IA]**

  - Se corrigió la pérdida de configuración de mensajes en los nodos LLM del flujo de trabajo. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) por @cgyrock
  - Se corrigió un problema por el cual los archivos adjuntos pegados en el diálogo del empleado de IA no podían eliminarse. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) por @cgyrock
- **[Bloque: Kanban]** Se corrigió el soporte de URL para calendario y ventanas emergentes relacionadas. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) por @jiannx
- **[Flujo de trabajo: Aprobación]** Se corrigió el problema por el cual los datos relacionados no se muestran en los formularios de aprobación v2 por @zhangzhonghe
