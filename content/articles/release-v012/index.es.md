---
title: "NocoBase 0.12: Nueva herramienta de compilación de complementos"
description: "NocoBase 0.12 introduce una nueva herramienta de compilación de complementos para un uso fluido en producción, actualiza los métodos de instalación y fusiona @nocobase/app-client y @nocobase/app-server en @nocobase-app."
---

## Nuevas Funcionalidades

* Nueva herramienta de compilación de plugins. Los plugins compilados podrán usarse directamente en el entorno de producción sin necesidad de una segunda compilación.

## Actualizaciones de la aplicación

### Actualización de la instalación con Docker

Sin cambios, consulte la [Guía de actualización de imágenes Docker](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose) para actualizar.

### Actualización de la instalación con código fuente

La herramienta de compilación de plugins se ha actualizado recientemente; es necesario limpiar la caché después de obtener el nuevo código fuente.

```
git pull # Obtener el nuevo código fuente.
yarn clean # Limpiar la caché.
```

Para más detalles, consulte la [Guía de actualización de fuente Git](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone).

### Actualización de una instalación con create-nocobase-app

Vuelva a descargar la nueva versión mediante `yarn create` y actualice la configuración de .env. Consulte la [Guía de actualización de versión principal](https://docs-cn.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app) para más detalles.

## Cambios incompatibles

### @nocobase/app-client y @nocobase/app-server se fusionaron en @nocobase-app

Las aplicaciones instaladas mediante create-nocobase-app ya no tienen un directorio packages/app. El código personalizado en packages/app debe moverse al plugin personalizado.

### La ruta dist/client de la aplicación ha cambiado.

Si está configurando nginx usted mismo, deberá realizar un ajuste similar

```
server {
- root /app/nocobase/packages/app/client/dist;
+ root /app/nocobase/node_modules/@nocobase/app/dist/client;

  location / {
-       root /app/nocobase/packages/app/client/dist;
+       root /app/nocobase/node_modules/@nocobase/app/dist/client;
        try_files $uri $uri/ /index.html;
        add_header Last-Modified $date_gmt;
        add_header Cache-Control 'no-store, no-cache';
        if_modified_since off;
        expires off;
        etag off;
    }
}
```

### Los plugins de terceros deben ser reconstruidos

Consulte la guía de actualización de plugins de terceros a continuación

## Guía de actualización de plugins de terceros

### El directorio del plugin debe tener los directorios `src/client` y `src/server`.

```
// src/client/index.ts
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

```
// src/server/index.ts
import { Plugin } from '@nocobase/server';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

El código de demostración específico se puede consultar en: [sample-hello](https://github.com/nocobase/nocobase/tree/main/packages/samples/hello)

### Ubicación de los archivos de traducción del plugin en el directorio `src/locale`

Tanto para el frontend como para el backend, los archivos de traducción multilingüe se colocan en el directorio `src/locale`, por lo que el plugin no necesita cargar paquetes multilingüe por sí mismo.

### Ajuste de las dependencias del plugin

Las dependencias del plugin se dividen en dependencias propias y dependencias globales. Las dependencias globales se usan directamente de forma global y no se empaquetarán en el producto del plugin, mientras que las dependencias propias se empaquetarán en el producto. Una vez compilado el plugin, el entorno de producción es plug-and-play, sin necesidad de instalar dependencias ni compilar dos veces. Los ajustes a las dependencias del plugin incluyen:

* Colocar los paquetes relacionados con `@nocobase/*` en `peerDependencies` y especificar el número de versión como `0.x`;
* Colocar otras dependencias en `devDependencies`, no en `dependencies`, ya que el plugin extraerá todas las dependencias necesarias para el entorno de producción después del empaquetado.

```
{
  "devDependencies": {
    "@formily/react": "2.x",
    "@formily/shared": "2.x",
    "ahooks": "3.x",
    "antd": "5.x",
    "dayjs": "1.x",
    "i18next": "22.x",
    "react": "18.x",
    "react-dom": "18.x",
    "react-i18next": "11.x"
  },
  "peerDependencies": {
    "@nocobase/actions": "0.x",
    "@nocobase/client": "0.x",
    "@nocobase/database": "0.x",
    "@nocobase/resourcer": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/utils": "0.x"
  }
}
```

### La ruta de salida del plugin ha cambiado de `lib` a `dist`

Estructura del directorio dist

```
|- dist
  |- client       # Lado del cliente, umd
    |- index.js
    |- index.d.ts
  |- server       # Lado del servidor, cjs
    |- index.js
    |- index.d.ts
    |- others
  |- locale       # Paquete multilingüe
  |- node_modules # Dependencias del servidor
```

Otros ajustes relacionados incluyen:

Ajuste del parámetro main de package.json

```
{
  - "main": "./lib/server/index.js",
  + "main": "./dist/server/index.js",
}
```

client.d.ts

```
export * from './dist/client';
export { default } from './dist/client';
```

client.js

```
module.exports = require('./dist/client/index.js');
```

server.d.ts

```
export * from './dist/server';
export { default } from './dist/server';
```

server.js

```
module.exports = require('./dist/server/index.js');
```
