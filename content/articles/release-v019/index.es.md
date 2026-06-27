---
title: "NocoBase 0.19: Optimización del proceso de aplicación"
description: "NocoBase 0.19 introduce telemetría, copia de seguridad y restauración de aplicaciones, optimizaciones de línea de comandos y varias mejoras en el núcleo para mejorar los procesos de instalación, inicio y actualización."
---

## Nuevas funciones

### Telemetría

* Documentación de desarrollo: [https://docs.nocobase.com/development/server/telemetry](https://docs.nocobase.com/development/server/telemetry)
* API del núcleo: [https://docs.nocobase.com/api/telemetry/telemetry](https://docs.nocobase.com/api/telemetry/telemetry)
* Plugin de Prometheus: [https://docs.nocobase.com/handbook/telemetry-prometheus](https://docs.nocobase.com/handbook/telemetry-prometheus)

### Copia de seguridad y restauración de la aplicación

* Documentación del plugin: [https://docs.nocobase.com/handbook/backup-restore](https://docs.nocobase.com/handbook/backup-restore)

## Optimizaciones del núcleo

### Optimizaciones de la línea de comandos

Para NocoBase 0.19 y superior, los comandos personalizados de los plugins deben colocarse en el directorio `src/server/commands/*.ts` del plugin con el siguiente contenido:

```
export default function(app) {
  app.command('custom1').action();
}
```

El flujo de ejecución de la línea de comandos:

![El flujo de ejecución de la línea de comandos](https://static-docs.nocobase.com/c5b5296293a4f445511c9f8778148480.jpg)

Configuración especial de Command

* `ipc()` Cuando la aplicación se está ejecutando, la línea de comandos envía comandos a través de ipc para operar la instancia de la aplicación en ejecución. Cuando no se configura `ipc()`, se creará una nueva instancia de la aplicación y luego se ejecutará la operación (no interferirá con la instancia de la aplicación en ejecución).
* `auth()` realiza la verificación de la base de datos; si la configuración de la base de datos es incorrecta, este comando no se ejecutará.
* `preload()` indica si se debe precargar la configuración de la aplicación, es decir, ejecutar `app.load()`.

Esto se puede configurar según el uso real del comando, los ejemplos son los siguientes:

```
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

### Optimización del proceso de instalación

![Optimización del proceso de instalación](https://static-docs.nocobase.com/8f257e6f5e0cd73de3a2e3dc2c61f39e.webp)

### Optimización del proceso de inicio

![Optimización del proceso de inicio](https://static-docs.nocobase.com/a73c3b50195c2899db30672ae8e86af3.webp)

### Optimización del proceso de actualización

![Optimización del proceso de actualización](https://static-docs.nocobase.com/ba16f9f55c2a8bc5f7694b84077bea7b.webp)

Las migraciones de actualización se clasifican en beforeLoad, afterSync y afterLoad:

* beforeLoad: Se ejecuta antes de la carga de cada módulo, dividido en tres etapas:
  * Antes de cargar los módulos del núcleo
  * Antes de cargar los plugins preestablecidos
  * Antes de cargar otros plugins
* afterSync: Se ejecuta después de la sincronización de las configuraciones de las tablas de datos con la base de datos, dividido en tres etapas:
  * Después de sincronizar las tablas del núcleo con la base de datos
  * Después de sincronizar las tablas de los plugins preestablecidos con la base de datos
  * Después de sincronizar las tablas de otros plugins con la base de datos
* afterLoad: Se ejecuta solo después de la carga completa de la aplicación.

```
export default class extends Migration {
  // Cuándo realizar la migración
  on = 'beforeLoad';
  // Se ejecuta solo cuando se cumple el siguiente número de versión de la aplicación.
  appVersion = '<=0.13.0-alpha.5';
  // Se ejecuta solo cuando se cumple el siguiente número de versión del plugin.
  pluginVersion = '<=0.13.0-alpha.5';
  // Script de actualización.
  async up() {}
}
```

### Añadir el comando create-migration

Crea un archivo de migración

```
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  package name
  --on [on]    Options include beforeLoad, afterSync and afterLoad
  -h, --help   display help for command
```

Ejemplo

```
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor   
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Done in 5.02s.
```

Se generará un archivo de migración en `src/server/migrations` del paquete del plugin `@nocobase/plugin-client` como `20240107173313-update-ui.ts` con el siguiente contenido inicial:

```
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // coding
  }
}
```

### Directorios basados en convenciones del plugin

```
|- /plugin-sample-hello
  |- /dist             # Directorio para el plugin compilado
  |- /src              # Código fuente del plugin
    |- /client
      |- plugin.ts
      |- index.ts      # Punto de entrada del lado del cliente
    |- /locale         # Directorio convencional para archivos multilingües compartidos entre frontend y backend
    |- /swagger        # Directorio convencional para la documentación de Swagger
    |- /server
      |- collections   # Directorio convencional para las configuraciones de tablas de datos del plugin
      |- commands      # Directorio convencional para comandos personalizados
      |- migrations    # Directorio convencional para archivos de migración
      |- plugin.ts     # Clase del plugin
      |- index.ts      # Punto de entrada del lado del servidor
    |- index.ts
  |- .npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

Optimización del proceso de pruebas

Se proporcionaron métodos `createMockServer()` y `startMockServer()` más fáciles de usar para escribir casos de prueba:

* `createMockServer()` Crea e inicia rápidamente una aplicación.
* `startMockServer()` Inicia rápidamente una aplicación (sin reinstalar).

```
import { createMockServer } from '@nocobase/server';

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['nocobase'],
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    // coding...
  });
});
```

## Cambios de última hora

### Cambios en la configuración de colecciones, comandos y migraciones a directorios basados en convenciones

Ejemplo 1: Colecciones cargadas por importCollections, el código se elimina directamente y el archivo de configuración de colecciones debe colocarse en el directorio `src/server/collections`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

Ejemplo 2: Colecciones cargadas a través de this.db.import, el código se elimina directamente, el archivo de configuración de colecciones debe colocarse en el directorio `src/server/collections`

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

Ejemplo 3: Una colección definida por db.collection() se recomienda colocarla en el directorio `src/server/collections`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

Añadir un nuevo archivo `src/server/collections/examples.ts` con el siguiente contenido:

```
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

Ejemplo 4: Eliminar db.addMigrations() y colocar el archivo de migración en el directorio `src/server/migrations`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.addMigrations({
-     namespace: 'auth',
-     directory: resolve(__dirname, 'migrations'),
-     context: {
-       plugin: this,
-     },
-   });
  }
}
```

Ejemplo 5: Personalización de la línea de comandos

```
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('Hello World!');
-        if (options.version) {
-          console.log('Current version:', app.getVersion());
-        }
-      });
-  }
}
```

Añadir un nuevo archivo `src/server/collections/echo.ts` con el siguiente contenido:

```
export default function(app) {
  app
    .command('echo')
    .option('-v, --version');
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```
