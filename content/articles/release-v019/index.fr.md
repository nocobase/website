---
title: "NocoBase 0.19 : Optimisation du processus d'application"
description: "NocoBase 0.19 introduit la télémétrie, la sauvegarde et la restauration d'applications, des optimisations de la ligne de commande et diverses améliorations du noyau pour améliorer les processus d'installation, de démarrage et de mise à niveau."
---

## Nouvelles fonctionnalités

### Télémétrie

* Documentation de développement : [https://docs.nocobase.com/development/server/telemetry](https://docs.nocobase.com/development/server/telemetry)
* API noyau : [https://docs.nocobase.com/api/telemetry/telemetry](https://docs.nocobase.com/api/telemetry/telemetry)
* Plugin Prometheus : [https://docs.nocobase.com/handbook/telemetry-prometheus](https://docs.nocobase.com/handbook/telemetry-prometheus)

### Sauvegarde et restauration d'application

* Documentation du plugin : [https://docs.nocobase.com/handbook/backup-restore](https://docs.nocobase.com/handbook/backup-restore)

## Optimisations du noyau

### Optimisations de la ligne de commande

Pour NocoBase 0.19 et versions ultérieures, les commandes personnalisées des plugins doivent être placées dans le répertoire `src/server/commands/*.ts` du plugin avec le contenu suivant :

```
export default function(app) {
  app.command('custom1').action();
}
```

Le flux d'exécution de la ligne de commande :

![Le flux d'exécution de la ligne de commande](https://static-docs.nocobase.com/c5b5296293a4f445511c9f8778148480.jpg)

Configuration spéciale de Command

* `ipc()` Lorsque l'application est en cours d'exécution, la ligne de commande envoie des commandes via ipc pour opérer sur l'instance d'application en cours d'exécution. Lorsque ipc() n'est pas configuré, une nouvelle instance d'application sera créée, puis l'opération sera exécutée (elle n'interférera pas avec l'instance d'application en cours d'exécution).
* `auth()` effectue une vérification de la base de données ; si la configuration de la base de données est incorrecte, cette commande ne sera pas exécutée.
* `preload()` indique s'il faut précharger la configuration de l'application, c'est-à-dire exécuter app.load().

Ceci peut être configuré en fonction de l'utilisation réelle de la commande, les exemples sont les suivants :

```
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

### Optimisation du processus d'installation

![Optimisation du processus d'installation](https://static-docs.nocobase.com/8f257e6f5e0cd73de3a2e3dc2c61f39e.webp)

### Optimisation du processus de démarrage

![Optimisation du processus de démarrage](https://static-docs.nocobase.com/a73c3b50195c2899db30672ae8e86af3.webp)

### Optimisation du processus de mise à niveau

![Optimisation du processus de mise à niveau](https://static-docs.nocobase.com/ba16f9f55c2a8bc5f7694b84077bea7b.webp)

Les migrations de mise à niveau sont classées en beforeLoad, afterSync et afterLoad :

* beforeLoad : Exécuté avant le chargement de chaque module, divisé en trois étapes :
  * Avant le chargement des modules du noyau
  * Avant le chargement des plugins prédéfinis
  * Avant le chargement des autres plugins
* afterSync : Exécuté après la synchronisation des configurations des tables de données avec la base de données, divisé en trois étapes :
  * Après la synchronisation des tables du noyau avec la base de données
  * Après la synchronisation des tables des plugins prédéfinis avec la base de données
  * Après la synchronisation des tables des autres plugins avec la base de données
* afterLoad : Exécuté uniquement après le chargement complet de l'application.

```
export default class extends Migration {
  // Quand effectuer la migration
  on = 'beforeLoad';
  // Exécuter uniquement si le numéro de version d'application suivant est satisfait.
  appVersion = '<=0.13.0-alpha.5';
  // Exécuter uniquement si le numéro de version de plugin suivant est satisfait.
  pluginVersion = '<=0.13.0-alpha.5';
  // Script de mise à niveau.
  async up() {}
}
```

### Ajout de la commande create-migration

Crée un fichier de migration

```
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  nom du package
  --on [on]    Les options incluent beforeLoad, afterSync et afterLoad
  -h, --help   affiche l'aide pour la commande
```

Exemple

```
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor   
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Done in 5.02s.
```

Un fichier de migration sera généré dans `src/server/migrations` du package de plugin `@nocobase/plugin-client` sous le nom `20240107173313-update-ui.ts` avec le contenu initial suivant :

```
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // codage
  }
}
```

### Répertoires conventionnels du plugin

```
|- /plugin-sample-hello
  |- /dist             # Répertoire pour le plugin compilé
  |- /src              # Code source du plugin
    |- /client
      |- plugin.ts
      |- index.ts      # Point d'entrée côté client
    |- /locale         # Répertoire conventionnel pour les fichiers multilingues partagés entre le frontend et le backend
    |- /swagger        # Répertoire conventionnel pour la documentation Swagger
    |- /server
      |- collections   # Répertoire conventionnel pour les configurations de tables de données du plugin
      |- commands      # Répertoire conventionnel pour les commandes personnalisées
      |- migrations    # Répertoire conventionnel pour les fichiers de migration
      |- plugin.ts     # Classe du plugin
      |- index.ts      # Point d'entrée côté serveur
    |- index.ts
  |- .npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

Optimisation du processus de test

Fourni des méthodes `createMockServer()` et `startMockServer()` plus conviviales pour écrire des cas de test :

* `createMockServer()` Crée et démarre rapidement une application.
* `startMockServer()` Démarre rapidement une application (sans réinstallation).

```
import { createMockServer } from '@nocobase/server';

describe('exemple de test', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['nocobase'],
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('cas1', async () => {
    // codage...
  });
});
```

## Changements cassants

### Changement de configuration des collections, commandes et migrations vers des répertoires conventionnels

Exemple 1 : Collections chargées par importCollections, le code est directement supprimé, et le fichier de configuration des collections doit être placé dans le répertoire `src/server/collections`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

Exemple 2 : Collections chargées via this.db.import, le code est directement supprimé, le fichier de configuration des collections doit être placé dans le répertoire `src/server/collections`

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

Exemple 3 : Une collection définie par db.collection() est recommandée d'être placée dans le répertoire `src/server/collections`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

Ajoutez un nouveau fichier `src/server/collections/examples.ts` avec le contenu suivant :

```
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

Exemple 4 : Supprimez db.addMigrations() et placez le fichier de migration dans le répertoire `src/server/migrations`.

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

Exemple 5 : Personnalisation de la ligne de commande

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

Ajoutez un nouveau fichier `src/server/collections/echo.ts` avec le contenu suivant :

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
