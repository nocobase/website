---
title: "NocoBase v1.4.0-beta.2: Corrección de errores"
description: "Nota de la versión v1.4.0-beta.2"
---

### 🐛 Corrección de errores

- **[build]** Revertir la herramienta de compilación del cliente de `rspack` a `vite` para solucionar el problema por el cual el comando `yarn dev` reporta un error después de ejecutar el comando create-nocobase-app ([#5697](https://github.com/nocobase/nocobase/pull/5697)) por @gchust

- **[client]** Solucionar el problema por el cual la columna fijada a la derecha no se alinea a la derecha cuando hay pocas columnas ([#5690](https://github.com/nocobase/nocobase/pull/5690)) por @katherinehhh

- **[Móvil]** Solucionar el problema por el cual el modal 'Asignar valores de campo' queda oculto en la página de configuración móvil ([#5701](https://github.com/nocobase/nocobase/pull/5701)) por @zhangzhonghe
