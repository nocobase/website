---
title: "NocoBase 0.12: Neues Plugin-Build-Tool"
description: "NocoBase 0.12 führt ein neues Plugin-Build-Tool für den nahtlosen Produktionseinsatz ein, aktualisiert Installationsmethoden und fasst @nocobase/app-client und @nocobase/app-server zu @nocobase-app zusammen."
---

## Neue Funktionen

* Neues Plugin-Build-Tool. Die erstellten Plugins können direkt in der Produktionsumgebung verwendet werden, ohne dass ein zweiter Build erforderlich ist.

## Anwendungs-Upgrades

### Upgrade der Docker-Installation

Keine Änderung, siehe [Docker-Image-Upgrade-Anleitung](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose) für das Upgrade.

### Upgrade der Quellcode-Installation

Das Plugin-Build-Tool wurde aktualisiert und der Cache muss nach dem Pull neuer Quellen geleert werden.

```
git pull # Neue Quellen pullen.
yarn clean # Cache leeren.
```

Weitere Details finden Sie im [Git-Quellcode-Upgrade-Leitfaden](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone).

### Upgrade einer create-nocobase-app Installation

Laden Sie die neue Version über `yarn create` erneut herunter und aktualisieren Sie die .env-Konfiguration. Weitere Details finden Sie im [Major-Version-Upgrade-Leitfaden](https://docs-cn.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app).

## Inkompatible Änderungen

### @nocobase/app-client und @nocobase/app-server wurden zu @nocobase-app zusammengeführt

Apps, die über create-nocobase-app installiert wurden, haben kein packages/app-Verzeichnis mehr. Benutzerdefinierter Code in packages/app muss in das benutzerdefinierte Plugin verschoben werden.

### Der dist/client-Pfad der App hat sich geändert.

Wenn Sie nginx selbst konfigurieren, müssen Sie eine ähnliche Anpassung vornehmen:

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

### Drittanbieter-Plugins müssen neu erstellt werden

Siehe untenstehenden Upgrade-Leitfaden für Drittanbieter-Plugins.

## Upgrade-Leitfaden für Drittanbieter-Plugins

### Das Plugin-Verzeichnis muss sowohl `src/client`- als auch `src/server`-Verzeichnisse enthalten.

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

Spezifischer Demo-Code finden Sie unter: [sample-hello](https://github.com/nocobase/nocobase/tree/main/packages/samples/hello)

### Mehrsprachige Ablegung des Plugins im `src/locale`-Verzeichnis

Sowohl Frontend als auch Backend: Mehrsprachige Übersetzungsdateien werden im `src/locale`-Verzeichnis abgelegt, sodass das Plugin keine mehrsprachigen Pakete selbst laden muss.

### Anpassung der Plugin-Abhängigkeiten

Die Abhängigkeiten des Plugins werden in eigene Abhängigkeiten und globale Abhängigkeiten unterteilt. Globale Abhängigkeiten werden direkt global verwendet und nicht in das Plugin-Produkt gepackt, während eigene Abhängigkeiten in das Produkt gepackt werden. Nach dem Build des Plugins ist die Produktionsumgebung Plug-and-Play, es müssen keine Abhängigkeiten installiert oder zweimal gebaut werden. Anpassungen der Plugin-Abhängigkeiten umfassen:

* Verschieben Sie `@nocobase/*`-bezogene Pakete in `peerDependencies` und geben Sie die Versionsnummer als `0.x` an;
* Platzieren Sie andere Abhängigkeiten in `devDependencies`, nicht in `dependencies`, da das Plugin nach dem Packen alle für die Produktionsumgebung erforderlichen Abhängigkeiten extrahiert.

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

### Der Ausgabepfad des Plugins wurde von `lib` in `dist` geändert

dist-Verzeichnisstruktur

```
|- dist
  |- client       # Clientseitig, umd
    |- index.js
    |- index.d.ts
  |- server       # Serverseitig, cjs
    |- index.js
    |- index.d.ts
    |- others
  |- locale       # Mehrsprachiges Paket
  |- node_modules # Server-Abhängigkeiten
```

Weitere damit verbundene Anpassungen umfassen:

Anpassung des main-Parameters in package.json

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
