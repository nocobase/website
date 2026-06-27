---
title: "NocoBase v1.9.24: corrección de limitación de conexión en notificaciones por correo electrónico"
description: "Nota de la versión v1.9.24"
---

### 🐛 Corrección de errores

- **[cliente]** Se corrige el problema por el cual el componente `RemoteSelect` cargaba incorrectamente un registro cuando el valor era nulo ([#8137](https://github.com/nocobase/nocobase/pull/8137)) por @mytharcher

- **[Campo de colección: Secuencia]** Se mejora la robustez de plugin-field-sequence al manejar el comando de reparación ([#8139](https://github.com/nocobase/nocobase/pull/8139)) por @cgyrock

- **[Notificación: Correo electrónico]** Se corrige la limitación de conexión en la notificación por correo electrónico ([#8119](https://github.com/nocobase/nocobase/pull/8119)) por @jiannx
