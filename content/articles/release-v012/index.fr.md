---
title: "NocoBase 0.12 : Nouvel outil de construction de plugins"
description: "NocoBase 0.12 introduit un nouvel outil de construction de plugins pour une utilisation en production sans accroc, met à jour les méthodes d'installation et fusionne @nocobase/app-client et @nocobase/app-server dans @nocobase-app."
---

## Nouvelles fonctionnalités

* Nouvel outil de construction de plugins. Les plugins construits pourront être utilisés directement en environnement de production sans nécessiter une deuxième construction.

## Mises à jour de l'application

### Mise à jour de l'installation Docker

Aucun changement, reportez-vous au [Guide de mise à jour de l'image Docker](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose) pour la mise à jour.

### Mise à jour de l'installation par code source

L'outil de construction de plugins a été récemment mis à niveau, et le cache doit être vidé après avoir récupéré les nouvelles sources.

```
git pull # Récupérer le nouveau code source.
yarn clean # Vider le cache.
```

Pour plus de détails, voir le [Guide de mise à jour des sources Git](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone).

### Mise à jour d'une installation create-nocobase-app

Retéléchargez la nouvelle version via `yarn create` et mettez à jour la configuration .env, voir le [guide de mise à jour de version majeure](https://docs-cn.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app) pour plus de détails.

## Changements incompatibles

### @nocobase/app-client et @nocobase/app-server fusionnés dans @nocobase-app

Les applications installées via create-nocobase-app n'ont plus de répertoire packages/app, et le code personnalisé dans packages/app doit être déplacé vers le plugin personnalisé.

### Le chemin dist/client de l'application a changé.

Si vous configurez nginx vous-même, vous devrez effectuer un ajustement similaire

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

### Les plugins tiers doivent être reconstruits

Reportez-vous au guide de mise à jour des plugins tiers ci-dessous

## Guide de mise à jour des plugins tiers

### Le répertoire du plugin doit avoir les répertoires `src/client` et `src/server`.

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

Un exemple de code spécifique peut être consulté ici : [sample-hello](https://github.com/nocobase/nocobase/tree/main/packages/samples/hello)

### Placement multilingue du plugin dans le répertoire `src/locale`

Les fichiers de traduction multilingue, tant pour le frontend que pour le backend, sont placés dans le répertoire `src/locale`, de sorte que le plugin n'a pas besoin de charger lui-même les packages multilingues.

### Ajustement des dépendances du plugin

Les dépendances du plugin sont divisées en ses propres dépendances et les dépendances globales. Les dépendances globales sont utilisées directement globalement et ne seront pas intégrées dans le produit du plugin, tandis que ses propres dépendances seront intégrées dans le produit. Une fois le plugin construit, l'environnement de production est prêt à l'emploi, sans avoir besoin d'installer des dépendances ou de construire deux fois. Les ajustements des dépendances du plugin incluent :

* Placer les packages liés à `@nocobase/*` dans `peerDependencies` et spécifier le numéro de version comme `0.x`;
* Placer les autres dépendances dans `devDependencies`, pas dans `dependencies`, car le plugin extraira toutes les dépendances nécessaires à l'environnement de production après l'empaquetage.

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

### Le chemin de sortie du plugin a été changé de `lib` à `dist`

Structure du répertoire dist

```
|- dist
  |- client       # Côté client, umd
    |- index.js
    |- index.d.ts
  |- server       # Côté serveur, cjs
    |- index.js
    |- index.d.ts
    |- others
  |- locale       # Package multilingue
  |- node_modules # Dépendances serveur
```

Les autres ajustements connexes incluent :

Ajustement du paramètre main de package.json

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
