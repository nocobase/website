---
title: "NocoBase 0.19: Optimierung des Anwendungsprozesses"
description: "NocoBase 0.19 führt Telemetrie, Anwendungssicherung und -wiederherstellung, Befehlszeilenoptimierungen und verschiedene Kernel-Verbesserungen ein, um die Installations-, Start- und Upgrade-Prozesse zu verbessern."
---

## Neue Funktionen

### Telemetrie

* Entwicklungsdokumentation: [https://docs.nocobase.com/development/server/telemetry](https://docs.nocobase.com/development/server/telemetry)
* Kernel-API: [https://docs.nocobase.com/api/telemetry/telemetry](https://docs.nocobase.com/api/telemetry/telemetry)
* Prometheus-Plugin: [https://docs.nocobase.com/handbook/telemetry-prometheus](https://docs.nocobase.com/handbook/telemetry-prometheus)

### Anwendungssicherung und -wiederherstellung

* Plugin-Dokumentation: [https://docs.nocobase.com/handbook/backup-restore](https://docs.nocobase.com/handbook/backup-restore)

## Kernel-Optimierungen

### Befehlszeilenoptimierungen

Für NocoBase 0.19 und höher müssen benutzerdefinierte Plugin-Befehle im Verzeichnis `src/server/commands/*.ts` des Plugins mit folgendem Inhalt platziert werden:

```
export default function(app) {
  app.command('custom1').action();
}
```

Der Ausführungsablauf der Befehlszeile:

![Der Ausführungsablauf der Befehlszeile](https://static-docs.nocobase.com/c5b5296293a4f445511c9f8778148480.jpg)

Spezielle Konfiguration von Command

* `ipc()` Wenn die App läuft, sendet die Befehlszeile Befehle über IPC, um die laufende App-Instanz zu steuern. Wenn `ipc()` nicht konfiguriert ist, wird eine neue App-Instanz erstellt und dann der Vorgang ausgeführt (dies beeinträchtigt die laufende App-Instanz nicht).
* `auth()` führt eine Datenbanküberprüfung durch. Wenn die Datenbankkonfiguration falsch ist, wird dieser Befehl nicht ausgeführt.
* `preload()` gibt an, ob die Anwendungskonfiguration vorgeladen werden soll, d.h. `app.load()` ausführen.

Dies kann je nach tatsächlicher Verwendung des Befehls konfiguriert werden. Beispiele sind wie folgt:

```
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

### Optimierung des Installationsprozesses

![Optimierung des Installationsprozesses](https://static-docs.nocobase.com/8f257e6f5e0cd73de3a2e3dc2c61f39e.webp)

### Optimierung des Startvorgangs

![Optimierung des Startvorgangs](https://static-docs.nocobase.com/a73c3b50195c2899db30672ae8e86af3.webp)

### Optimierung des Upgrade-Prozesses

![Optimierung des Upgrade-Prozesses](https://static-docs.nocobase.com/ba16f9f55c2a8bc5f7694b84077bea7b.webp)

Die Upgrade-Migrationen werden in beforeLoad, afterSync und afterLoad kategorisiert:

* beforeLoad: Wird vor dem Laden jedes Moduls ausgeführt, unterteilt in drei Phasen:
  * Vor dem Laden der Kernel-Module
  * Vor dem Laden der voreingestellten Plugins
  * Vor dem Laden anderer Plugins
* afterSync: Wird nach der Synchronisation der Datenbanktabellenkonfigurationen mit der Datenbank ausgeführt, unterteilt in drei Phasen:
  * Nach der Synchronisation der Kernel-Tabellen mit der Datenbank
  * Nach der Synchronisation der voreingestellten Plugin-Tabellen mit der Datenbank
  * Nach der Synchronisation anderer Plugin-Tabellen mit der Datenbank
* afterLoad: Wird nur nach dem vollständigen Laden der Anwendung ausgeführt.

```
export default class extends Migration {
  // Wann die Migration durchgeführt werden soll
  on = 'beforeLoad';
  // Wird nur ausgeführt, wenn die folgende App-Versionsnummer zutrifft.
  appVersion = '<=0.13.0-alpha.5';
  // Wird nur ausgeführt, wenn die folgende Plugin-Versionsnummer zutrifft.
  pluginVersion = '<=0.13.0-alpha.5';
  // Upgrade-Skript.
  async up() {}
}
```

### Hinzufügen des create-migration-Befehls

Erstellt eine Migrationsdatei

```
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  Paketname
  --on [on]    Optionen umfassen beforeLoad, afterSync und afterLoad
  -h, --help   Hilfe für den Befehl anzeigen
```

Beispiel

```
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor   
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Done in 5.02s.
```

Eine Migrationsdatei wird im Verzeichnis `src/server/migrations` des Plugin-Pakets `@nocobase/plugin-client` als `20240107173313-update-ui.ts` mit folgendem anfänglichen Inhalt generiert:

```
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // Codierung
  }
}
```

### Die konventionsbasierten Verzeichnisse des Plugins

```
|- /plugin-sample-hello
  |- /dist             # Verzeichnis für das kompilierte Plugin
  |- /src              # Quellcode des Plugins
    |- /client
      |- plugin.ts
      |- index.ts      # Clientseitiger Einstiegspunkt
    |- /locale         # Konventionsverzeichnis für gemeinsame mehrsprachige Dateien zwischen Frontend und Backend
    |- /swagger        # Konventionsverzeichnis für Swagger-Dokumentation
    |- /server
      |- collections   # Konventionsverzeichnis für Datenbanktabellenkonfigurationen des Plugins
      |- commands      # Konventionsverzeichnis für benutzerdefinierte Befehle
      |- migrations    # Konventionsverzeichnis für Migrationsdateien
      |- plugin.ts     # Plugin-Klasse
      |- index.ts      # Serverseitiger Einstiegspunkt
    |- index.ts
  |- .npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

Optimierung des Testprozesses

Bereitstellung benutzerfreundlicherer `createMockServer()`- und `startMockServer()`-Methoden zum Schreiben von Testfällen:

* `createMockServer()` Erstellt und startet schnell eine Anwendung.
* `startMockServer()` Startet schnell eine Anwendung (ohne Neuinstallation).

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
    // Codierung...
  });
});
```

## Bahnbrechende Änderungen

### Änderung der Konfiguration von Collections, Befehlen und Migrationen zu konventionsbasierten Verzeichnissen

Beispiel 1: Collections, die von importCollections geladen werden, der Code wird direkt gelöscht, und die Collections-Konfigurationsdatei muss im Verzeichnis `src/server/collections` platziert werden.

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

Beispiel 2: Collections, die über this.db.import geladen werden, der Code wird direkt gelöscht, die Collections-Konfigurationsdatei muss im Verzeichnis `src/server/collections` platziert werden.

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

Beispiel 3: Eine Collection, die mit db.collection() definiert wurde, sollte vorzugsweise im Verzeichnis `src/server/collections` platziert werden.

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

Fügen Sie eine neue Datei `src/server/collections/examples.ts` mit folgendem Inhalt hinzu:

```
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

Beispiel 4: Entfernen Sie db.addMigrations() und platzieren Sie die Migrationsdatei im Verzeichnis `src/server/migrations`.

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

Beispiel 5: Anpassen der Befehlszeile

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

Fügen Sie eine neue Datei `src/server/collections/echo.ts` mit folgendem Inhalt hinzu:

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
