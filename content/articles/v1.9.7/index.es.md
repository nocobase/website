---
title: "NocoBase v1.9.7: Corrección de errores"
description: "Nota de la versión v1.9.7"
---

### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema por el cual la regla de vinculación del formulario de aprobación no funcionaba ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe

- **[servidor]** Se corrige un problema en el modo de división de servicios por el cual los mensajes de cola no suscritos no podían publicarse ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher

- **[Flujo de trabajo]**
  - Se corrige el error causado al escuchar eventos de fuentes de datos externas inexistentes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher

  - Se utiliza eventQueue en lugar de backgroundJob compartido para evitar que la cola compartida se consuma incorrectamente en el modo de división de servicios ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher

- **[Flujo de trabajo: nodo manual]** Se corrige el espacio de nombres de la configuración regional que se debe usar para mostrar el contenido correcto de la traducción ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher

- **[Control de acceso]** Problema por el cual los fragmentos de operación de asociación no surtían efecto ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile

- **[Flujo de trabajo: Aprobación]**
  - Se corrige el problema por el cual el tamaño de página del canal de notificación de carga no era lo suficientemente grande y provocaba que la lista no se cargara por completo por @mytharcher

  - Se corrige el problema por el cual la regla de vinculación del formulario de aprobación no funcionaba por @zhangzhonghe

  - Se corrige el formato de fecha en las tarjetas de la lista de aprobación en el centro de tareas pendientes para mostrar la fecha y hora completas por @mytharcher

  - Se corrige un problema de rendimiento que ocurría al consultar la lista de registros de aprobación durante el envío de la aprobación por @mytharcher
